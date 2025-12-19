#!/usr/bin/env bash
set -euo pipefail

: "${CAFE24_FTP_HOST:?Need CAFE24_FTP_HOST}"
: "${CAFE24_FTP_USER:?Need CAFE24_FTP_USER}"
: "${CAFE24_FTP_PASS:?Need CAFE24_FTP_PASS}"
: "${CAFE24_REMOTE_DIR:?Need CAFE24_REMOTE_DIR}"

# 배포할 로컬 폴더를 지정하세요.
# 정적 사이트면 보통 ./docs, ./public, ./dist 중 하나입니다.
LOCAL_DIR="${1:-./public}"

if [ ! -d "$LOCAL_DIR" ]; then
  echo "Local directory not found: $LOCAL_DIR"
  echo "Usage: ./deploy.sh <local_dir>"
  exit 1
fi

echo "Deploying '$LOCAL_DIR' -> '$CAFE24_REMOTE_DIR' on '$CAFE24_FTP_HOST' ..."

lftp -e "
set ftp:ssl-allow no;
set net:timeout 10;
set net:max-retries 2;
set net:reconnect-interval-base 2;
open -u $CAFE24_FTP_USER,$CAFE24_FTP_PASS $CAFE24_FTP_HOST;
mirror -R --delete --verbose $LOCAL_DIR $CAFE24_REMOTE_DIR;
bye
"

echo "Done."
