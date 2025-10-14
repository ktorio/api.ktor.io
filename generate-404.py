#!/usr/bin/env python3

import re
from pathlib import Path

# Template replacement constants
SCRIPT_SRC_OLD = 'src="scripts/gtm.js"'
SCRIPT_SRC_NEW = 'src="/scripts/gtm.js"'

JS_SCRIPT_START = '<script type="text/javascript">'
JS_SCRIPT_END = '</script>'

NEW_JAVASCRIPT_CONTENT = r'''<script type="text/javascript">

    function stripPatchVersion(path) {
        // Remove 'older/' from the path and replace the patch version with 'x': /older/3.0.3/ -> /3.0.x/
        return path
            .replace(/\/older\//, '/')
            .replace(/(\/\d+\.\d+)\.\d+\//, '$1.x/');
    }

    function flattenModulePath(path) {
        // Match nested ktor modules: (/ktor-...)+/ktor-...
        // Flatten if there are multiple ktor-* modules
        return path.replace(/(?:\/ktor-[^\/]+)+(\/ktor-[^\/].*)/, '$1');
    }

    function rewriteUrl() {
        var path = window.location.pathname;
        var newPath = flattenModulePath(stripPatchVersion(path));

        // If path changed, show redirect info and redirect
        if (newPath !== path) {
            var redirectInfo = document.getElementById('redirect-info');
            var redirectLink = document.getElementById('redirect-link');
            if (redirectInfo && redirectLink) {
                redirectLink.textContent = newPath;
                redirectLink.href = newPath;
                redirectInfo.style.display = 'block';
            }

            const url = newPath + window.location.search + window.location.hash; 
            window.location.replace(url);
        }
    }

    window.onload = function () {
        rewriteUrl();
    }
</script>'''

TITLE_REGEX = r'(<h1 class="_big">)[^<]+(</h1>)'
TITLE_REPLACEMENT = r'\1Page Not Found\2'

DESCRIPTION_REGEX = r'<div class="sub-title margin-top-vertical-unit-half">.*?</div>'
DESCRIPTION_REPLACEMENT = '''<div class="sub-title margin-top-vertical-unit-half">
                The page you are looking for does not exist or has been moved.
            </div>
            <div id="redirect-info" class="sub-title margin-top-vertical-unit-half" style="display: none;">
                Redirecting you to: <a id="redirect-link" href=""></a>
            </div>'''

def generate_404_html(docs_dir: Path):
    """
    Generate 404.html from not-found-version.html by applying patches.

    Changes:
    1. Add leading slash to scripts path (scripts -> /scripts)
    2. Replace JavaScript with URL rewriting logic
    3. Update page content (title and message)
    4. Add redirect info section
    """
    source_file = docs_dir / 'not-found-version.html'
    target_file = docs_dir / '404.html'

    if not source_file.exists():
        print(f"Error: {source_file} not found")
        return False

    print(f"Generating {target_file} from {source_file}...")

    with open(source_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Fix script path: add leading slash
    if SCRIPT_SRC_OLD not in content:
        print(f"Error: Could not find '{SCRIPT_SRC_OLD}' to replace")
        return False
    content = content.replace(SCRIPT_SRC_OLD, SCRIPT_SRC_NEW)

    # 2. Replace JavaScript content
    js_start = content.find(JS_SCRIPT_START)
    js_end = content.find(JS_SCRIPT_END, js_start)

    if js_start == -1 or js_end == -1:
        print("Error: Could not find JavaScript section to replace")
        return False

    content = content[:js_start] + NEW_JAVASCRIPT_CONTENT + content[js_end + len(JS_SCRIPT_END):]

    # 3. Update page title - replace content between h1 tags
    new_content, count = re.subn(
        TITLE_REGEX,
        TITLE_REPLACEMENT,
        content
    )
    if count == 0:
        print("Error: Could not find h1 title to replace")
        return False
    content = new_content

    # 4. Update page description - replace the entire sub-title div and add redirect info
    new_content, count = re.subn(
        DESCRIPTION_REGEX,
        DESCRIPTION_REPLACEMENT,
        content,
        flags=re.DOTALL
    )
    if count == 0:
        print("Error: Could not find description div to replace")
        return False
    content = new_content

    # Write the result
    with open(target_file, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Successfully generated {target_file}")
    return True

def main():
    docs_dir = Path('docs')
    if not docs_dir.exists():
        print("Error: docs/ directory not found")
        return 1

    return 0 if generate_404_html(docs_dir) else 1

if __name__ == '__main__':
    exit(main())
