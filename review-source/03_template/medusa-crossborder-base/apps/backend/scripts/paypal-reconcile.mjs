#!/usr/bin/env node

const args = new Set(process.argv.slice(2))
const valueFor = (name) => {
  const index = process.argv.indexOf(name)
  return index >= 0 ? process.argv[index + 1] : undefined
}

if (args.has("--help")) {
  console.log("Usage: node scripts/paypal-reconcile.mjs --sandbox --isolated-db --event-id <opaque-id> [--apply]")
  process.exit(0)
}

const eventId = valueFor("--event-id")
if (!args.has("--sandbox") || !args.has("--isolated-db") || !eventId) {
  console.error("Refusing reconciliation: --sandbox, --isolated-db, and --event-id are required.")
  process.exit(2)
}

console.log(JSON.stringify({
  mode: args.has("--apply") ? "apply-requested" : "dry-run",
  event_id_tail: eventId.slice(-8),
  external_api_called: false,
  database_scope: "isolated-db-required",
  note: "The command is fail-closed until the caller supplies the Medusa module service and an explicitly isolated database.",
}, null, 2))
