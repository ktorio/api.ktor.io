#!/usr/bin/env bash
set -e

KTOR_VERSION=$1

if [ -z "${KTOR_VERSION}" ]; then
  echo "Usage: $(basename "$0") <version>"
  exit 1
fi

currentVersion=$(cat docs/version.json | jq -r ".version")
echo "Current docs version is: $currentVersion"

if [ $KTOR_VERSION == $currentVersion ]; then
  echo "Skipping. The requested version is the same."
  exit 0
fi

# Make old versions visible for Dokka
versionsDir="./versions/"
if [ -d $versionsDir ]; then
  echo "Versions directory already exists. Skipping old versions copying."
else
  echo "Copying old versions..."
  mkdir "$versionsDir"
  cp -R docs ${versionsDir}/${currentVersion}
  mv ${versionsDir}/${currentVersion}/older/* ${versionsDir}
  echo "Done."
fi

versionsDir=$(realpath "$versionsDir")
echo \n"Old versions:"
find "$versionsDir" -maxdepth 1 -type d -exec basename {} \; | tail -n +2 | sort --reverse

# Try to clone the Ktor repository at the specific version. Use the main branch if failed.
echo \n"Cloning the Ktor repository..."
git clone --quiet --depth 1 --branch "$KTOR_VERSION" https://github.com/ktorio/ktor/ ktor ||
  git clone --quiet --depth 1 https://github.com/ktorio/ktor/ ktor

# Generate new API docs
cd ktor
./gradlew --quiet :ktor-dokka:dokkaGenerate -PreleaseVersion=${KTOR_VERSION} -Pktor.dokka.versionsDirectory="$versionsDir"
cd ..

# Update docs
rm -rf docs
cp -R ${versionsDir}/${KTOR_VERSION} ./docs
echo api.ktor.io > ./docs/CNAME

# Add Google Tag Manager script to the files
./inject_gtm_script.sh docs

# Generate 404.html page which is responsible for redirects from old URLs
./generate-404.py

## Cleanup
rm -rf ktor versions
