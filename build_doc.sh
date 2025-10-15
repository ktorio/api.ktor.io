#!/usr/bin/env bash
set -euo pipefail

if [ $# -eq 0 ]; then
  echo "Usage: $(basename "$0") <version>"
  exit 1
fi

KTOR_VERSION=$1
KTOR_REPO_URL="https://github.com/ktorio/ktor/"
KTOR_DIR="ktor"

# Strip patch version and suffix (e.g., 3.0.3 -> 3.0.x, 3.3.0-rc.1 -> 3.3.x)
[[ $KTOR_VERSION =~ ^([0-9]+\.[0-9]+)\.[0-9]+.*$ ]]
API_VERSION="${BASH_REMATCH[1]}.x"
echo "Requested version: $KTOR_VERSION ($API_VERSION)"

# Make old versions visible for Dokka
versionsDir="./versions/"
if [ -d $versionsDir ]; then
  echo "Versions directory already exists. Skipping old versions copying."
else
  currentVersion=$(jq -r ".version" docs/version.json)
  echo "Current docs version is: $currentVersion"

  echo "Copying old versions..."
  mkdir "$versionsDir"
  cp -R docs ${versionsDir}/${currentVersion}

  # Move all version directories matching [MAJOR].[MINOR].x pattern
  mv ${versionsDir}/${currentVersion}/[0-9]*.[0-9]*.x/ ${versionsDir}/

  echo "Done."
fi

# Delete existing version if it exists (to allow regeneration)
if [ -d ${versionsDir}/${API_VERSION} ]; then
  echo "Deleting existing version $API_VERSION from versions directory..."
  rm -rf ${versionsDir:?}/${API_VERSION}
fi

# Remove generated/copied files from all versions
GENERATED_FILES=(
  "404.html"
  "CNAME"
  "scripts/gtm.js"
)

echo "Cleaning up generated files from all versions..."
for pattern in "${GENERATED_FILES[@]}"; do
  rm -f ${versionsDir}/*/${pattern}
done

versionsDir=$(realpath "$versionsDir")
echo -e "\nOld versions:"
find "$versionsDir" -maxdepth 1 -type d -exec basename {} \; | tail -n +2 | sort --reverse

# Try to clone the Ktor repository at the specific version. Use the main branch if failed.
if [ -d "$KTOR_DIR" ]; then
  echo -e "\nKtor repository already exists. Skipping clone."
else
  echo -e "\nCloning the Ktor repository..."
  # Extract major version (everything before first dot)
  MAJOR_VERSION="${KTOR_VERSION%%.*}"
  git clone --quiet --depth 1 --branch "$KTOR_VERSION" "$KTOR_REPO_URL" "$KTOR_DIR" ||
    git clone --quiet --depth 1 --branch "release/${MAJOR_VERSION}.x" "$KTOR_REPO_URL" "$KTOR_DIR" ||
    git clone --quiet --depth 1 "$KTOR_REPO_URL" "$KTOR_DIR"
fi
echo

# Wait for user confirmation before generating docs (only in interactive mode)
if [[ -t 0 ]]; then
  echo "Ktor repository cloned to ./$KTOR_DIR/"
  read -p "Press Enter to continue with docs generation (or Ctrl+C to abort)..."
fi

# Generate new API docs
cd "$KTOR_DIR"
./gradlew --quiet :ktor-dokka:dokkaGenerate -Pversion="${KTOR_VERSION}" -Pktor.dokka.versionsDirectory="$versionsDir"
cd ..

# Update docs
rm -rf docs
cp -R ${versionsDir}/${API_VERSION} ./docs
echo api.ktor.io > ./docs/CNAME

# Add Google Tag Manager script to the files
./inject-gtm-script.py docs

# Generate 404.html page which is responsible for redirects from old URLs
./generate-404.py

## Cleanup
rm -rf "$KTOR_DIR" versions
