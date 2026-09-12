import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"

const dockerfile = await readFile(new URL("./medusa/Dockerfile", import.meta.url), "utf8")
const ignore = await readFile(new URL("../.dockerignore", import.meta.url), "utf8")
assert.match(dockerfile, /node:22\.14\.0-bookworm-slim/)
assert.doesNotMatch(dockerfile, /COPY\s+\.\s+\./)
assert.doesNotMatch(dockerfile, /COPY\s+--from=build\s+\/app\s+\/app/)
assert.match(dockerfile, /\.medusa\/server/)
assert.match(dockerfile, /RUN chmod 0555 \/app\/entrypoint\.sh/)
assert.match(dockerfile, /USER medusa/)
assert.match(ignore, /\*\*\/\.env\*/) 
assert.match(ignore, /\.runtime/)
assert.match(ignore, /\*\*\/\.medusa/)
console.log("DOCKER_SECRET_BOUNDARY_STATIC=PASS")
console.log("IMAGE_LAYER_SCAN=NOT_RUN_DOCKER_REGISTRY_UNAVAILABLE")
