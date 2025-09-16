#!/usr/bin/env bash
set -e

VERSION_DIR=$1
GTM_SCRIPT="gtm.js"

if [ -z "${VERSION_DIR}" ]; then
  echo "Usage: $(basename "$0") version_directory"
  exit 1
fi

if [ ! -d "${VERSION_DIR}" ]; then
  echo "Error: Directory ${VERSION_DIR} does not exist."
  exit 1
fi

if [ ! -f "${GTM_SCRIPT}" ]; then
  echo "Error: File ${GTM_SCRIPT} does not exist in the root of the repository."
  exit 1
fi

# Create the scripts directory inside the VERSION_DIR
SCRIPTS_DIR="${VERSION_DIR}/scripts"
mkdir -p "${SCRIPTS_DIR}"

# Always copy the GTM script to the scripts directory
cp "${GTM_SCRIPT}" "${SCRIPTS_DIR}/"
echo "Copied ${GTM_SCRIPT} to ${SCRIPTS_DIR}/"

# Function to process a single HTML file
patch_html_file() {
  local FILE="$1"
  local VERSION_DIR="$2"

  # Calculate the depth of the HTML file relative to VERSION_DIR
  if [ "$(dirname "${FILE}")" = "${VERSION_DIR}" ]; then
    # If the file is directly under VERSION_DIR, no "../" needed
    RELATIVE_PATH="scripts/gtm.js"
  else
    DEPTH=$(echo "${FILE}" | awk -F"/" -v base="${VERSION_DIR}" '{print NF - split(base, b, "/") - 1}')
    RELATIVE_PATH=$(printf '../%.0s' $(seq 1 "${DEPTH}"))scripts/gtm.js
  fi

  # Check if already patched
  if grep -qF "src=\"${RELATIVE_PATH}\"" "${FILE}"; then
    echo "Skipped ${FILE} (already patched)"
  # Check if <head> exists
  elif grep -q "<head>" "${FILE}"; then
    sed -i '' -e "/<head>/a\\
<script type=\"text/javascript\" src=\"${RELATIVE_PATH}\" async></script>\\
" "${FILE}"
    echo "Patched ${FILE} with relative path: ${RELATIVE_PATH}"
  else
    echo "Skipped ${FILE} (no <head> tag found)"
  fi
}

# Export the function so it's available to subshells
export -f patch_html_file

# Process HTML files in parallel
find "${VERSION_DIR}" -name "*.html" | parallel -j+0 patch_html_file {} "${VERSION_DIR}"

echo "Injection completed for directory: ${VERSION_DIR}"
