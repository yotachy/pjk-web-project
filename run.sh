#!/usr/bin/env bash
set -e

PORT=8000
ROOT_DIR="docs"

echo "▶ Starting static server"
echo "  - Root: ${ROOT_DIR}"
echo "  - Port: ${PORT}"

cd "$(dirname "$0")/${ROOT_DIR}"

# 이미 실행 중인 서버가 있으면 안내
if lsof -i :${PORT} >/dev/null 2>&1; then
  echo "⚠️  Port ${PORT} is already in use."
  echo "   Stop existing server or change PORT in run.sh"
  exit 1
fi

python -m http.server ${PORT}
