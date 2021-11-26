#!/usr/bin/env bash
set -e

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
KTOR_VERSION=$1
DOKKA_DIR=$2

if [ -z "${KTOR_VERSION}" ]; then
  echo "Usage: $(basename "$0") version"
  exit 1
fi

DOMAIN="$(cat "${DIR}/CNAME")"
WORK_DIRNAME="output"
WORK_DIR="${DIR}/${WORK_DIRNAME}"

RESULT_DIRNAME="${KTOR_VERSION}"
RESULT_DIR="${DIR}/${RESULT_DIRNAME}"

# Build docs
git clone https://github.com/ktorio/ktor/ ktor
cd ktor
git checkout e5l/dokka
cd ..
./ktor/gradlew dokkaHtmlMultiModule -PreleaseVersion=${KTOR_VERSION}
mv ./ktor/build/dokka/htmlMultiModule ./docs/${KTOR_VERSION}
