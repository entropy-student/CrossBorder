import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"

const config = await readFile(new URL("../apps/backend/medusa-config.ts", import.meta.url), "utf8")
assert.match(config, /acl:\s*false/)
assert.match(config, /file-s3/)
console.log("R2_ACL_FALSE=PASS")
console.log("R2_X_AMZ_ACL_FIXTURE=NOT_RUN_NO_EXTERNAL_BUCKET")
