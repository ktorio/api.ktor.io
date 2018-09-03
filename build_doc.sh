#!/bin/bash
set -e

if [ "$#" -ne 1 ]; then
	echo "./build_doc.sh <ktor_version>"
	exit 1
fi

KTOR_VERSION=`basename $1`

echo "Building KTOR_VERSION=$KTOR_VERSION..."

API_DOC_FOLDER="$PWD/doc-output"

#######################################################################

SUFFIX="$(cat <<-EOF

afterEvaluate {
    def allCompileKotlinTasks = subprojects
            .collect {
                if (it.hasProperty("compileKotlin")) {
                    [it.compileKotlin]
                } else {
                    []
                }
            }.flatten()

    task mydokkaWebsite(type: org.jetbrains.dokka.gradle.DokkaTask) {
        kotlinTasks {
            allCompileKotlinTasks
        }
        outputFormat = 'kotlin-website'
        outputDirectory = "$API_DOC_FOLDER"
    }
}

EOF
)"

#######################################################################

JEKYLL_CONFIG="$(cat <<-EOF

# Jekyll configuration file
title: Ktor
description: Asynchronous framework for web applications
url: "https://api.ktor.io/"
baseurl: /$KTOR_VERSION/

# Dirs
source: .
destination: ../$KTOR_VERSION

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

#echo "$SUFFIX"

rm -rf $KTOR_VERSION
rm -rf doc-output
cp -rf template doc-output
#unzip template.zip -d doc-output

echo "$JEKYLL_CONFIG" > doc-output/_config.yml

if [ ! -d ktor  ]; then
    git clone https://github.com/ktorio/ktor.git
fi

pushd ktor

git reset --hard
git checkout master
git fetch --all
git reset --hard origin/master

#git reset --hard
#git checkout master
git pull https://github.com/ktorio/ktor.git master
git checkout $KTOR_VERSION

if [ ! -f build.gradle.bak ]; then
    cp -f build.gradle build.gradle.bak
fi

cp -f build.gradle.bak build.gradle
echo "$SUFFIX" >> build.gradle

./gradlew mydokkaWebsite

cp -f build.gradle.bak build.gradle
rm -f build.gradle.bak

popd

pushd "$API_DOC_FOLDER"

jekyll b

popd

rm -f $KTOR_VERSION/index.yml
