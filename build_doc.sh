#!/bin/bash
set -e

if [ "$#" -ne 1 ]; then
	echo "./build_doc.sh <ktor_version>"
	exit 1
fi

KTOR_VERSION=$1
CNAME=`cat CNAME`

echo "Building KTOR_VERSION=$KTOR_VERSION..."

API_DOC_FOLDER="$PWD/doc-output"

#######################################################################

JEKYLL_CONFIG="$(cat <<-EOF

# Jekyll configuration file
title: "Ktor $KTOR_VERSION"
description: Asynchronous framework for web applications
url: "https://$CNAME/"
baseurl: /$KTOR_VERSION/

# Dirs
source: .
destination: ../$KTOR_VERSION

ktor_version: $KTOR_VERSION

# Build settings
markdown: kramdown
exclude:
  - Gemfile
  - Gemfile.lock
  - package-list
#include:
#  - package-list

EOF
)"

#######################################################################
rm -rf "$KTOR_VERSION"
rm -rf doc-output
cp -rf template doc-output
#unzip template.zip -d doc-output

echo "$KTOR_VERSION"
echo "$JEKYLL_CONFIG" > doc-output/_config.yml

if [ ! -d ktor  ]; then
    git clone https://github.com/ktorio/ktor.git
fi

pushd ktor

git reset --hard
git checkout master
git fetch --all
git reset --hard origin/master

git reset --hard
git checkout master
git pull https://github.com/ktorio/ktor.git master
git reset --hard
git checkout "$KTOR_VERSION"

./gradlew dokkaWebsite

popd

cp -rf ktor/apidoc/* "$API_DOC_FOLDER"

pushd "$API_DOC_FOLDER"

jekyll b

popd

rm -f $KTOR_VERSION/index.yml
