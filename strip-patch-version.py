#!/usr/bin/env python3

import os
import re
import json
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed

def strip_patch_version(version: str) -> str:
    """
    Convert version from X.Y.Z to X.Y.x
    Example: 3.0.3 -> 3.0.x
    """
    return re.sub(r'^(\d+\.\d+)\.\d+$', r'\1.x', version)

def rename_version_directories(older_dir: Path) -> dict:
    """
    Rename version directories in older/ from X.Y.Z to X.Y.x

    Returns:
        Dict mapping old version names to new version names
    """
    if not older_dir.exists():
        print(f"Directory {older_dir} does not exist")
        return {}

    version_mapping = {}  # old_version -> new_version

    for version_dir in older_dir.iterdir():
        if not version_dir.is_dir():
            continue

        old_version = version_dir.name
        new_version = strip_patch_version(old_version)

        if old_version == new_version:
            continue

        new_version_path = older_dir / new_version

        # Check if target already exists
        if new_version_path.exists():
            print(f"  Warning: {new_version_path} already exists, skipping {version_dir}")
            continue

        print(f"  Renaming: {old_version} -> {new_version}")
        version_dir.rename(new_version_path)
        version_mapping[old_version] = new_version

    return version_mapping

def rewrite_version_in_file(html_file: Path) -> int:
    """
    Rewrite version references in HTML file.

    Args:
        html_file: Path to the HTML file

    Returns:
        Number of replacements made
    """
    try:
        with open(html_file, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"  Warning: Could not read {html_file}: {e}")
        return 0

    original_content = content

    # Pattern 1: older/X.Y.Z/ or /older/X.Y.Z/ -> older/X.Y.x/ or /older/X.Y.x/
    content, count1 = re.subn(r'(/?older/\d+\.\d+)\.\d+/', r'\g<1>.x/', content)

    # Pattern 2: >X.Y.Z< (dropdown options) -> >X.Y.x<
    content, count2 = re.subn(r'(>\d+\.\d+)\.\d+<', r'\g<1>.x<', content)

    # Pattern 3: ?v=X.Y.Z (query parameters) -> ?v=X.Y.x
    content, count3 = re.subn(r'(\?v=\d+\.\d+)\.\d+', r'\g<1>.x', content)

    total_changes = count1 + count2 + count3

    # Write back if changed
    if content != original_content:
        if not write_file_content(html_file, content):
            print(f"  Warning: Could not write {html_file}")
            return 0

    return total_changes

def rewrite_versions_in_docs(docs_dir: Path):
    """Rewrite version references in all HTML files in docs directory"""
    print(f"\nRewriting version references in: {docs_dir}")

    # Find all HTML files (skip directories that end with .html)
    html_files = [f for f in docs_dir.rglob('*.html') if f.is_file()]

    print(f"  Processing {len(html_files)} HTML files in parallel...")

    total_changes = 0
    files_changed = 0

    with ThreadPoolExecutor() as executor:
        futures = {
            executor.submit(rewrite_version_in_file, html_file): html_file
            for html_file in html_files
        }

        for future in as_completed(futures):
            try:
                changes = future.result()
                if changes > 0:
                    total_changes += changes
                    files_changed += 1
            except Exception as e:
                html_file = futures[future]
                print(f"  Error processing {html_file}: {e}")

    print(f"  Completed: {total_changes} version references updated in {files_changed} files")

def read_version_from_json(version_file: Path) -> str:
    """Read version string from a version.json file. Returns empty string if not found."""
    try:
        with open(version_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
            return data.get('version', '')
    except Exception:
        return ''

def write_file_content(file_path: Path, content: str) -> bool:
    """
    Write content to a file.

    Returns:
        True if successful, False otherwise
    """
    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    except Exception:
        return False

def update_version_json_files(docs_dir: Path):
    """Update version.json files in docs/ and docs/older/*/"""
    print(f"\nUpdating version.json files in: {docs_dir}")

    total_updated = 0
    for version_file in docs_dir.rglob('version.json'):
        old_version = read_version_from_json(version_file)
        if not old_version:
            continue

        new_version = strip_patch_version(old_version)
        if old_version == new_version:
            continue

        new_content = f'{{"version":"{new_version}"}}'
        if write_file_content(version_file, new_content):
            print(f"  Updated: {version_file.relative_to(docs_dir)}: {old_version} -> {new_version}")
            total_updated += 1
        else:
            print(f"  Warning: Could not update {version_file}")

    print(f"  Total version.json files updated: {total_updated}")

def main():
    print("Starting patch version stripping...")
    print(f"Working directory: {os.getcwd()}")

    docs_dir = Path('docs')
    if not docs_dir.exists():
        print("Error: docs/ directory not found")
        return 1

    # Step 1: Read current version from docs/version.json
    version_mapping = {}
    current_version = read_version_from_json(docs_dir / 'version.json')
    if current_version:
        stripped = strip_patch_version(current_version)
        if current_version != stripped:
            version_mapping[current_version] = stripped
            print(f"\nCurrent version: {current_version} -> {stripped}")

    # Step 2: Rename version directories in older/
    older_dir = docs_dir / 'older'
    if not older_dir.exists():
        print(f"Error: {older_dir} directory not found")
        return 1

    print(f"\nRenaming version directories in: {older_dir}")
    older_mapping = rename_version_directories(older_dir)
    version_mapping.update(older_mapping)

    if version_mapping:
        print(f"\nVersion mapping:")
        for old_v, new_v in version_mapping.items():
            print(f"  {old_v} -> {new_v}")
    else:
        print("\nNo version directories renamed")

    # Step 3: Rewrite version references in all HTML files
    rewrite_versions_in_docs(docs_dir)

    # Step 4: Update version.json files
    update_version_json_files(docs_dir)

    print("\nPatch version stripping complete!")
    return 0

if __name__ == '__main__':
    exit(main())
