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
WORK_DIR="output"

# Prepare working directory
cp -rf "${DIR}/template" "${WORK_DIR}"
cat > "${WORK_DIR}/_config.yml" <<- EOF

title: "Ktor $KTOR_VERSION"
description: Asynchronous framework for web applications
url: "https://$DOMAIN"
baseurl: /$KTOR_VERSION/

source: .
destination: ../$KTOR_VERSION

ktor_version: $KTOR_VERSION

markdown: kramdown
exclude:
  - Gemfile
  - Gemfile.lock
plugins:
  - jekyll-sitemap

EOF

cp -rf "${DOKKA_DIR}"/* "${WORK_DIR}"

# Prepare result directory
RESULT_DIR="${KTOR_VERSION}"
mkdir -p "${RESULT_DIR}"

USER="$(id -u)"
GROUP="$(id -g)"

# Generate files via Jekyll
docker run -v "${DIR}:/srv/jekyll" -v "${DIR}/vendor/bundle:/usr/local/bundle" -w "/srv/jekyll" jekyll/jekyll chown -R jekyll:jekyll "${RESULT_DIR}"
docker run -v "${DIR}:/srv/jekyll" -v "${DIR}/vendor/bundle:/usr/local/bundle" -w "/srv/jekyll/${WORK_DIR}" jekyll/jekyll chown -R jekyll:jekyll .
docker run -v "${DIR}:/srv/jekyll" -v "${DIR}/vendor/bundle:/usr/local/bundle" -w "/srv/jekyll/${WORK_DIR}" jekyll/jekyll jekyll b
docker run -v "${DIR}:/srv/jekyll" -v "${DIR}/vendor/bundle:/usr/local/bundle" -w "/srv/jekyll" jekyll/jekyll chown -R "${USER}:${GROUP}" "${RESULT_DIR}"
docker run -v "${DIR}:/srv/jekyll" -v "${DIR}/vendor/bundle:/usr/local/bundle" -w "/srv/jekyll/${WORK_DIR}" jekyll/jekyll chown -R "${USER}:${GROUP}" .

rm -f "${KTOR_VERSION}/index.yml"

java -jar tools/apidoc-indexer.jar "${KTOR_VERSION}"

docker run -i -v "${DIR}:/srv/work" -w "/srv/work" holgerbrandl/kscript - < "${DIR}/sync.kts"

rm -rf "${WORK_DIR}"
