#!/usr/bin/env bash
set -e

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
KTOR_VERSION=$1
DOKKA_DIR=$2

if [ -z "${KTOR_VERSION}" ] || [ -z "${DOKKA_DIR}" ]; then
  echo "Usage: $(basename "$0") version dokka-directory"
  exit 1
fi

DOMAIN="$(cat "${DIR}/CNAME")"
WORK_DIRNAME="output"
WORK_DIR="${DIR}/${WORK_DIRNAME}"

RESULT_DIRNAME="${KTOR_VERSION}"
RESULT_DIR="${DIR}/${RESULT_DIRNAME}"

# Prepare working directory
cp -rf "${DIR}/template" "${WORK_DIR}"
cat > "${WORK_DIR}/_config.yml" <<- EOF

title: "Ktor ${KTOR_VERSION}"
description: Ktor is an asynchronous framework for creating microservices, web applications, and more.
url: "https://${DOMAIN}"
baseurl: /${KTOR_VERSION}/

source: .
destination: ../${RESULT_DIRNAME}

ktor_version: ${KTOR_VERSION}

markdown: kramdown
exclude:
  - Gemfile
  - Gemfile.lock
plugins:
  - jekyll-sitemap

EOF

cp -rf "${DOKKA_DIR}"/* "${WORK_DIR}"

# Prepare result directory
mkdir -p "${RESULT_DIR}"

USER="$(id -u)"
GROUP="$(id -g)"

# Generate files via Jekyll and set appropriate permissions
docker run -v "${DIR}:/srv/jekyll" -v "${DIR}/vendor/bundle:/usr/local/bundle" jekyll/jekyll chown -R jekyll:jekyll "/srv/jekyll/${RESULT_DIRNAME}"
docker run -v "${DIR}:/srv/jekyll" -v "${DIR}/vendor/bundle:/usr/local/bundle" jekyll/jekyll chown -R jekyll:jekyll "/srv/jekyll/${WORK_DIRNAME}"
docker run -v "${DIR}:/srv/jekyll" -v "${DIR}/vendor/bundle:/usr/local/bundle" -w "/srv/jekyll/${WORK_DIRNAME}" jekyll/jekyll jekyll build
docker run -v "${DIR}:/srv/jekyll" -v "${DIR}/vendor/bundle:/usr/local/bundle" jekyll/jekyll chown -R "${USER}:${GROUP}" "/srv/jekyll/${RESULT_DIRNAME}"
docker run -v "${DIR}:/srv/jekyll" -v "${DIR}/vendor/bundle:/usr/local/bundle" jekyll/jekyll chown -R "${USER}:${GROUP}" "/srv/jekyll/${WORK_DIRNAME}"

rm -f "${RESULT_DIR}/index.yml"

java -jar tools/apidoc-indexer.jar "${RESULT_DIR}"

# Update common files for all versions
docker run -i -v "${DIR}:/srv/work" -w "/srv/work" holgerbrandl/kscript - < "${DIR}/sync.kts"

# Clean up
rm -rf "${WORK_DIR}"

# Commit and push changes
git add "${RESULT_DIR}" "${DIR}/assets/versions.js" "${DIR}/sitemap.xml" "${DIR}/latest"
git commit -m "Update for ${KTOR_VERSION}"
git push
