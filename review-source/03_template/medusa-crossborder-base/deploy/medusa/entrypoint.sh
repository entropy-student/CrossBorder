#!/bin/sh
set -eu

role="${MEDUSA_RUNTIME_ROLE:-server}"
artifact_dir="/app/apps/backend/.medusa/server"
cli="/app/apps/backend/node_modules/@medusajs/cli/cli.js"

if [ ! -f "$artifact_dir/medusa-config.js" ] || [ ! -f "$artifact_dir/package.json" ]; then
  echo "Medusa production artifact is incomplete" >&2
  exit 78
fi
if [ ! -f "$cli" ]; then
  echo "Medusa production CLI is missing" >&2
  exit 78
fi

cd "$artifact_dir"
case "$role" in
  migrate) exec node "$cli" db:migrate ;;
  server) export MEDUSA_WORKER_MODE=server; exec node "$cli" start ;;
  worker) export MEDUSA_WORKER_MODE=worker; exec node "$cli" start ;;
  *) echo "MEDUSA_RUNTIME_ROLE must be migrate, server, or worker" >&2; exit 64 ;;
esac
