# Review Packaging Operations

The current safe staging utility is
`CrossBorder-Independent-Store/04_docs/scripts/92-prepare-review-staging.ps1`.
It creates the live-shaped review tree and, with `-CreateZip`, the final ZIP. It
excludes Git, dependencies, build output, runtime configuration, credentials,
database/Docker payloads, caches and old ZIPs.

The staged root mirrors the live workspace: current document-center files are
at the package root, while the canonical source is copied once under
`CrossBorder-Independent-Store/`. There is no sibling `document-center/` or
`source/` tree and no source duplication. The four approved safe environment
templates are copied byte-for-byte; runtime `.env` files are excluded.

The utility writes `STAGING_MANIFEST.txt`, runs secret/denylist/absolute-path
and staged relative-link checks, and writes the external package manifest after
ZIP creation so the ZIP hash is not circular.

Before reporting candidate Git evidence, the utility resolves
`git rev-parse --show-toplevel` and compares it with the expected candidate
directory. A candidate that inherits the parent repository is reported as
`NOT_SEPARATE_GIT_REPOSITORY`, never as the candidate's HEAD.

Packaging is review-only. It must not reset runtime state, databases, Docker
volumes or orders, and it must not include secrets.
