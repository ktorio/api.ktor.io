#!/usr/bin/env python3
import sys
import re
import shutil
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor

GTM_SCRIPT = "gtm.js"
GTM_SCRIPT_PATTERN = re.compile(r' *<script[^>]+src="[^"]*scripts/gtm\.js"[^>]*></script>\n*')


def calculate_relative_path(file_path: Path, version_dir: Path) -> str:
    """Calculate the relative path from an HTML file to the GTM script."""
    try:
        depth = len(file_path.relative_to(version_dir).parts) - 1
        return "../" * depth + f"scripts/{GTM_SCRIPT}"
    except ValueError:
        return None


def patch_html_file(file_path: Path, version_dir: Path) -> bool:
    """Inject the GTM script tag into an HTML file after the <head> tag.

    Returns True if the file was patched, False otherwise.
    """
    relative_path = calculate_relative_path(file_path, version_dir)
    if not relative_path:
        print(f"Error: {file_path} is not under {version_dir}")
        return False

    try:
        content = file_path.read_text(encoding='utf-8')
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return False

    if '<head>' not in content:
        print(f"Skipped {file_path} (no <head> tag found)")
        return False

    script_tag = f'<script type="text/javascript" src="{relative_path}" async></script>'

    # Remove any existing GTM script tags
    content = GTM_SCRIPT_PATTERN.sub('', content)

    # Inject the new script tag after <head>
    new_content = content.replace('<head>', f'<head>\n{script_tag}\n', 1)

    try:
        file_path.write_text(new_content, encoding='utf-8')
        return True
    except Exception as e:
        print(f"Error writing {file_path}: {e}")
        return False


def main():
    if len(sys.argv) != 2:
        print(f"Usage: {Path(sys.argv[0]).name} version_directory")
        sys.exit(1)

    version_dir = Path(sys.argv[1])
    gtm_script = Path(GTM_SCRIPT)

    if not version_dir.is_dir():
        print(f"Error: Directory {version_dir} does not exist.")
        sys.exit(1)

    if not gtm_script.is_file():
        print(f"Error: File {gtm_script} does not exist in the root of the repository.")
        sys.exit(1)

    scripts_dir = version_dir / "scripts"
    scripts_dir.mkdir(parents=True, exist_ok=True)

    shutil.copy2(gtm_script, scripts_dir / gtm_script.name)
    print(f"Copied {gtm_script} to {scripts_dir}/")

    html_files = [f for f in version_dir.rglob("*.html") if f.is_file()]

    with ThreadPoolExecutor() as executor:
        futures = [executor.submit(patch_html_file, html_file, version_dir) for html_file in html_files]
        patched_count = sum(future.result() for future in futures)

    print(f"Patched {patched_count} files in directory: {version_dir}")


if __name__ == "__main__":
    main()
