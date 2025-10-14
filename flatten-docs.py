#!/usr/bin/env python3
"""
Flatten nested ktor-* module directories in documentation.

This script moves deeply nested ktor-* directories to the root level while
preserving all links between documents.
"""

import os
import re
import shutil
import time
from itertools import chain
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
from urllib.parse import urlparse

# Constants
DOCS_ROOT = Path('docs')
DOCS_ROOT_RESOLVED = DOCS_ROOT.resolve()

# Pre-compiled regex patterns
LINK_PATTERN = re.compile(r'(href|src)="([^"]*)"')
PATH_TO_ROOT_PATTERN = re.compile(r'var pathToRoot = "((?:\.\./)*)";')
FLATTEN_PATTERN = re.compile(r'(?:ktor-[^/]+/)+(ktor-[^/]+)')


def is_external_link(url):
    """Check if a link is external (http/https) or an anchor."""
    if url.startswith('#'):
        return True
    parsed = urlparse(url)
    return bool(parsed.scheme or parsed.netloc)


def flatten_ktor_path(path_str):
    """
    Flatten nested ktor-* directories, keeping only the last one in each sequence.

    Example: ktor-client/ktor-client-plugins/ktor-client-auth → ktor-client-auth
    """
    return FLATTEN_PATTERN.sub(r'\1', path_str)


def transform_link(url, current_dir, new_dir, version_dir):
    """
    Transform a link URL to work after flattening.

    Args:
        url: The href or src attribute value
        current_dir: Directory containing the current HTML file (absolute)
        new_dir: Future directory location after flattening (absolute)
        version_dir: Version directory being processed (absolute)

    Returns:
        Transformed URL string
    """
    if is_external_link(url):
        return url

    # Resolve link to absolute filesystem path
    resolved_target = (current_dir / url).resolve()

    # Make path relative to version_dir or DOCS_ROOT
    try:
        relative_target = resolved_target.relative_to(version_dir)
        base_dir = version_dir
    except ValueError:
        try:
            relative_target = resolved_target.relative_to(DOCS_ROOT_RESOLVED)
            base_dir = DOCS_ROOT_RESOLVED
        except ValueError:
            raise ValueError(f"Link target {resolved_target} is outside docs tree")

    # Apply path flattening
    flattened_relative = flatten_ktor_path(str(relative_target))
    flattened_target = base_dir / flattened_relative

    # Calculate new relative path from new_dir to flattened_target
    new_url = os.path.relpath(flattened_target, new_dir).replace('\\', '/')

    return new_url


def rewrite_links_in_html(html_file, version_dir, new_file_path):
    """
    Rewrite all links in an HTML file to work after flattening.

    Args:
        html_file: Current location of the HTML file (absolute path)
        version_dir: Version directory being processed (absolute path)
        new_file_path: Future location relative to version_dir

    Returns:
        Number of changes made
    """
    try:
        content = html_file.read_text(encoding='utf-8')
    except Exception as e:
        print(f"Warning: Could not read {html_file}: {e}")
        return 0

    current_dir = html_file.parent
    new_dir = version_dir / new_file_path.parent

    # Memoization cache for this file
    link_cache = {}
    changes = 0

    def replace_link(match):
        nonlocal changes
        attr_name = match.group(1)
        url = match.group(2)

        if url in link_cache:
            new_url = link_cache[url]
        else:
            try:
                new_url = transform_link(url, current_dir, new_dir, version_dir)
                link_cache[url] = new_url
            except Exception as e:
                print(f"Warning: Could not transform link '{url}' in {html_file}: {e}")
                new_url = url

        if new_url != url:
            changes += 1

        return f'{attr_name}="{new_url}"'

    # Replace all href and src attributes
    new_content = LINK_PATTERN.sub(replace_link, content)

    # Fix pathToRoot variable
    depth = len(new_file_path.parts) - 1
    path_to_root = '../' * depth

    def replace_path_to_root(match):
        nonlocal changes
        old_path = match.group(1)
        if old_path != path_to_root:
            changes += 1
        return f'var pathToRoot = "{path_to_root}";'

    new_content = PATH_TO_ROOT_PATTERN.sub(replace_path_to_root, new_content)

    # Write file only if changes were made
    if changes > 0:
        try:
            html_file.write_text(new_content, encoding='utf-8')
        except Exception as e:
            print(f"Warning: Could not write {html_file}: {e}")
            return 0

    return changes


def rewrite_html_files_parallel(html_files, version_dir, base_dir, flattened_relative=None):
    """
    Rewrite links in multiple HTML files in parallel.

    Args:
        html_files: List of HTML file paths to process
        version_dir: Version directory being processed (absolute path)
        base_dir: Base directory for calculating relative paths
        flattened_relative: Optional flattened relative path (for modules being moved)

    Returns:
        Total number of changes made
    """
    total_changes = 0
    with ThreadPoolExecutor() as executor:
        futures = []
        for html_file in html_files:
            file_relative = html_file.relative_to(base_dir)
            if flattened_relative:
                new_file_path = Path(flattened_relative) / file_relative
            else:
                new_file_path = file_relative
            future = executor.submit(rewrite_links_in_html, html_file, version_dir, new_file_path)
            futures.append(future)

        for future in futures:
            try:
                total_changes += future.result()
            except Exception as e:
                print(f"Warning: Error processing file: {e}")

    return total_changes


def flatten_directory(version_dir):
    """
    Flatten all nested ktor-* directories in the given version directory.

    Args:
        version_dir: Path to the version directory to flatten
    """
    version_dir = version_dir.resolve()
    print(f"Flattening {version_dir}...")

    # Find all nested ktor-* modules (sorted by depth, deepest first)
    nested_modules = sorted(
        (d for first_level in version_dir.glob('ktor-*') if first_level.is_dir()
         for d in first_level.rglob('ktor-*') if d.is_dir() and d.parent.name.startswith('ktor-')),
        key=lambda p: len(p.parts),
        reverse=True
    )

    print(f"Found {len(nested_modules)} nested modules")

    # Process each nested module
    for module_dir in nested_modules:
        module_name = module_dir.name
        relative_path = module_dir.relative_to(version_dir)
        print(f"Processing {relative_path}...")

        # Find all HTML files in this module
        html_files = [f for f in module_dir.rglob('*.html') if f.is_file()]

        # Calculate flattened location
        flattened_relative = flatten_ktor_path(str(relative_path))

        # Rewrite links in parallel - files will be at flattened location
        total_changes = rewrite_html_files_parallel(html_files, version_dir, module_dir, flattened_relative)
        print(f"  Updated {total_changes} links in {len(html_files)} files")

        # Move module directory to flattened location
        target_dir = version_dir / flattened_relative
        if target_dir.exists():
            print(f"  Warning: {target_dir} already exists, skipping move")
        else:
            try:
                shutil.move(str(module_dir), str(target_dir))
                print(f"  Moved to {flattened_relative}")
            except Exception as e:
                print(f"  Warning: Could not move {module_dir}: {e}")

    # Rewrite links in root HTML files
    print("Updating root HTML files...")
    root_html_files = [f for f in [version_dir / 'index.html', version_dir / 'navigation.html'] if f.exists()]
    total_changes = rewrite_html_files_parallel(root_html_files, version_dir, version_dir)
    print(f"  Updated {total_changes} links in root files")

    # Clean up empty parent modules
    print("Cleaning up empty directories...")
    all_modules = sorted(version_dir.glob('**/ktor-*'), key=lambda p: len(p.parts), reverse=True)
    for module_dir in all_modules:
        if module_dir.is_dir():
            try:
                module_dir.rmdir()
                print(f"  Removed empty directory {module_dir.relative_to(version_dir)}")
            except OSError:
                # Directory not empty or other error, ignore
                pass


def main():
    """Main entry point."""
    start_time = time.time()

    # Verify docs/ directory exists
    if not DOCS_ROOT.exists():
        print(f"Error: {DOCS_ROOT} directory not found")
        return 1

    print("Starting documentation flattening...")
    print()

    # Flatten main docs/ directory
    flatten_directory(DOCS_ROOT)
    print()

    # Flatten all version directories in docs/older/
    older_dir = DOCS_ROOT / 'older'
    if older_dir.exists():
        version_dirs = [d for d in older_dir.iterdir() if d.is_dir()]
        for version_dir in sorted(version_dirs):
            flatten_directory(version_dir)
            print()

    elapsed = time.time() - start_time
    print(f"Flattening complete in {elapsed:.2f} seconds")
    return 0


if __name__ == '__main__':
    exit(main())
