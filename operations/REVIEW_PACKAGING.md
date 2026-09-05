# Review Packaging Operations

The current safe staging utility is
`CrossBorder-Independent-Store/04_docs/scripts/92-prepare-review-staging.ps1`.
It creates an external staging folder and never creates a ZIP. It excludes Git,
dependencies, build output, runtime configuration, credentials, database/Docker
payloads, caches and old ZIPs.

Future staging includes the current document-center snapshot under
`document-center/` without requiring these current human documents to be
copied back into the source tree. The root handoff in the source tree is only a
pointer stub.

Before reporting candidate Git evidence, the utility resolves
`git rev-parse --show-toplevel` and compares it with the expected candidate
directory. A candidate that inherits the parent repository is reported as
`NOT_SEPARATE_GIT_REPOSITORY`, never as the candidate's HEAD.

Packaging is review-only. It must not reset runtime state, databases, Docker
volumes or orders, and it must not include secrets.
