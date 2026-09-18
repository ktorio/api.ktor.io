#!/usr/bin/env bash
# Usage: ./build_doc.sh <version> [prepare|build|finalize] [versions-directory]
#
# The versions directory defaults to ./versions for local builds.
#
# Modes:
#   prepare  Prepare version history and clone the Ktor repository.
#   build    Run the complete local build: prepare, generate documentation, and finalize. This is the default.
#   finalize Install the generated documentation and clean up temporary files.

set -euo pipefail

PROJECT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
DOCS_DIR="$PROJECT_DIR/docs"
KTOR_DIR="$PROJECT_DIR/ktor"
VERSIONS_DIR="$PROJECT_DIR/versions"

usage() {
  echo "Usage: $(basename "$0") <version> [prepare|build|finalize] [versions-directory]"
}

initialize_version() {
  KTOR_VERSION=$1

  # Strip patch version and suffix (e.g., 3.0.3 -> 3.0.x, 3.3.0-rc.1 -> 3.3.x)
  if [[ ! $KTOR_VERSION =~ ^([0-9]+\.[0-9]+)\.[0-9]+.*$ ]]; then
    echo "Invalid Ktor version: $KTOR_VERSION"
    exit 1
  fi
  API_VERSION="${BASH_REMATCH[1]}.x"
}

prepare() {
  local ktorRepositoryUrl="https://github.com/ktorio/ktor/"

  echo "Requested version: $KTOR_VERSION ($API_VERSION)"

  # Make old versions visible for Dokka
  if [ -d "$VERSIONS_DIR" ]; then
    echo "Versions directory already exists. Skipping old versions copying."
  else
    local currentVersion
    currentVersion=$(jq -r ".version" "$DOCS_DIR/version.json")
    echo "Current docs version is: $currentVersion"

    echo "Copying old versions..."
    mkdir "$VERSIONS_DIR"
    cp -R "$DOCS_DIR" "$VERSIONS_DIR/$currentVersion"

    # Move all version directories matching [MAJOR].[MINOR].x pattern
    mv "$VERSIONS_DIR/$currentVersion"/[0-9]*.[0-9]*.x/ "$VERSIONS_DIR/"

    echo "Done."
  fi

  # Delete existing version if it exists (to allow regeneration)
  if [ -d "$VERSIONS_DIR/$API_VERSION" ]; then
    echo "Deleting existing version $API_VERSION from versions directory..."
    rm -rf "${VERSIONS_DIR:?}/$API_VERSION"
  fi

  # Remove generated/copied files from all versions
  local generatedFiles=(
    "404.html"
    "CNAME"
    "scripts/gtm.js"
  )

  echo "Cleaning up generated files from all versions..."
  local pattern
  for pattern in "${generatedFiles[@]}"; do
    rm -f "$VERSIONS_DIR"/*/"$pattern"
  done

  echo -e "\nVersions dir: $VERSIONS_DIR"
  echo "Old versions:"
  find "$VERSIONS_DIR" -maxdepth 1 -type d -exec basename {} \; | tail -n +2 | sort --reverse

  # Try to clone the Ktor repository at the specific version. Use the main branch if failed.
  if [ -d "$KTOR_DIR" ]; then
    echo -e "\nKtor repository already exists. Skipping clone."
  else
    echo -e "\nCloning the Ktor repository..."
    # Extract major version (everything before first dot)
    local majorVersion="${KTOR_VERSION%%.*}"
    git clone -c advice.detachedHead=false --quiet --depth 1 --branch "$KTOR_VERSION" "$ktorRepositoryUrl" "$KTOR_DIR" 2>/dev/null ||
      git clone --quiet --depth 1 --branch "release/${majorVersion}.x" "$ktorRepositoryUrl" "$KTOR_DIR" 2>/dev/null ||
      git clone --quiet --depth 1 "$ktorRepositoryUrl" "$KTOR_DIR"
  fi
  echo

  # Wait for user confirmation before generating docs (only in interactive mode)
  if [[ -t 0 ]]; then
    echo "Ktor repository cloned to $KTOR_DIR/"
    read -p "Press Enter to continue with docs generation (or Ctrl+C to abort)..."
  fi
}

finalize() {
  # Update docs
  if [ ! -d "$VERSIONS_DIR/$API_VERSION" ]; then
    echo "Error: Expected output directory '$VERSIONS_DIR/$API_VERSION' not found. Dokka generation may have failed."
    exit 1
  fi
  rm -rf "$DOCS_DIR"
  cp -R "$VERSIONS_DIR/$API_VERSION" "$DOCS_DIR"
  echo api.ktor.io > "$DOCS_DIR/CNAME"

  # Add Google Tag Manager script to the files
  python3 "$PROJECT_DIR/scripts/inject-gtm-script.py" "$DOCS_DIR" "$PROJECT_DIR/gtm.js"

  # Generate 404.html page which is responsible for redirects from old URLs
  python3 "$PROJECT_DIR/scripts/generate-404.py" "$DOCS_DIR"

  # Cleanup
  rm -rf "$KTOR_DIR" "$VERSIONS_DIR"
}

if [ $# -eq 0 ] || [ $# -gt 3 ]; then
  usage
  exit 1
fi

version=$1
action=${2:-build}
VERSIONS_DIR=${3:-$VERSIONS_DIR}

case "$action" in
  build|prepare|finalize) ;;
  *)
    usage
    exit 1
    ;;
esac

initialize_version "$version"

case "$action" in
  prepare)
    prepare
    ;;
  finalize)
    finalize
    ;;
  build)
    prepare

    echo
    echo "Generating new API docs..."
    (
      cd "$KTOR_DIR"
      ./gradlew --quiet :ktor-dokka:dokkaGenerate \
        -Pversion="$KTOR_VERSION" \
        -Pktor.dokka.versionsDirectory="$VERSIONS_DIR"
    )

    finalize
    ;;
esac
