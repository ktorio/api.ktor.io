#!/usr/bin/env bash
set -e

KTOR_VERSION=$1

if [ -z "${KTOR_VERSION}" ]; then
  echo "Usage: $(basename "$0") version"
  exit 1
fi

# Build docs
# git clone https://github.com/ktorio/ktor/ ktor
cd ktor
./gradlew dokkaHtmlMultiModule -PreleaseVersion=${KTOR_VERSION} --no-parallel
cd ..
rm -rf docs
cp -R ./versions/${KTOR_VERSION} ./docs
echo api.ktor.io > ./docs/CNAME
cp -R ./old/ ./docs/old
rm -rf ktor
