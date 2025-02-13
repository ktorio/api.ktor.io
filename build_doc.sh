#!/usr/bin/env bash
set -e

KTOR_VERSION=$1

if [ -z "${KTOR_VERSION}" ]; then
  echo "Usage: $(basename "$0") version"
  exit 1
fi

# Build docs
git clone https://github.com/ktorio/ktor/ ktor
cd ktor
git fetch
git switch stexxe/dokka-3.1.0
./gradlew :dokkaHtmlMultiModule -PreleaseVersion=${KTOR_VERSION} --no-parallel
cd ..
rm -rf docs
cp -R ./versions/${KTOR_VERSION} ./docs
echo api.ktor.io > ./docs/CNAME
rm -rf ktor

# Add Google Tag Manager script to the files
./inject_gtm_script.sh docs
