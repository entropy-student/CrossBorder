# REVIEW-02 Include / Exclude Guide

This guide is for the user's manual Review-02 archive. This task does not
create a ZIP or a staging copy.

## Workspace keep

Keep these in the real workspace. The real root and candidate Git metadata are
also kept locally even when their object data is omitted from an upload.

- `00_HANDOFF.md`
- root project-control files, including `.gitignore`, package manifests and
  lockfiles
- `01_research/**`
- `02_demos/README.md`
- `02_demos/provenance/**`
- `02_demos/medusa-dtc/**` candidate source and configuration
- `02_demos/spree-demo/**` benchmark source and configuration
- `02_demos/medusa-local/**`
- `02_demos/spree-local/**`
- repeatability compose files and automation configuration under
  `02_demos/medusa-repeat/**` and `02_demos/spree-repeat/**`
- `03_template/medusa-crossborder-base/**`
- `04_docs/**`, including scorecards, evidence, runbooks, acceptance gates,
  provenance notes, UI implementation baseline, PowerShell automation and Node
  smoke scripts
- safe `.env.example` and `.env.template` files, byte-for-byte
- Docker compose files, Dockerfiles, `Gemfile`, `Gemfile.lock`, and all other
  source/configuration files required to understand the baselines

## Review ZIP include

The manual Review-02 archive should include the workspace-keep items above,
subject to the exclusions below. Include application source, assets, scripts,
documentation, provenance and Git status evidence. It is acceptable to omit
`.git/**` object data from the upload after commit IDs and provenance have been
recorded in the documentation.

## Review ZIP exclude

Exclude these by path or by matching name at any nesting level:

- all `.git/**` object data from the uploaded archive (do not delete workspace
  `.git` directories)
- all `node_modules/**`
- `.next/**`, `.medusa/**`, `dist/**`, `build/**`, `coverage/**`, `.cache/**`,
  `.turbo/**`, `.nx/**`, `tmp/**`, `temp/**`, logs and debug output
- root `.runtime/**` and `.tooling/**` generated/runtime caches
- `.env`, `.env.local`, `.env.e2e`, and other runtime environment files
- `*.local.txt`, `credentials.json`, `.spree/**`, admin credentials, tokens,
  passwords, API keys, JWT/cookie secrets and other runtime credential files
- Docker volumes, database files, generated build contexts and runtime state
- old Review archives and generated bundles, including `REVIEW-*.zip`,
  `REVIEW-*.attestation.txt` and `REVIEW_MANIFEST.txt`
- package-manager/download caches and generated runtime artifacts

Known local-only credential/runtime paths observed during this cleanup include
`02_demos/medusa-admin.local.txt`, `02_demos/medusa-dtc/apps/backend/.env`,
`02_demos/medusa-dtc/apps/storefront/.env.local`, `02_demos/spree-demo/.env`,
`02_demos/spree-demo/.spree/credentials.json`, and the Spree E2E runtime env.
Their values are not reproduced here.

## Environment handling

Safe source templates such as `.env.example` and `.env.template` are included
unchanged. Runtime `.env*` files are excluded rather than rewritten. If a
reviewer needs variable structure, use a separately generated redacted file
under `REVIEW_ENV/` with the complete variable names preserved and values set
to `<REDACTED>`; do not place that generated directory back into the source
tree.

## Git handling

`WORKSPACE KEEP` and `REVIEW ZIP INCLUDE` are intentionally different:

- Workspace: keep root `.git`, Medusa `.git`, and Spree `.git` intact.
- Review ZIP: omit `.git/**` object data if desired; include commit IDs,
  status and provenance records from the documented files.

## Local archive moved outside the project

Superseded Review bundles and generated runtime/tooling artifacts were moved
to the sibling directory
`CrossBorder-Independent-Store-LOCAL-ARCHIVE/`. It is outside the project
root and must not be included in the manual Review-02 archive.

Before compressing, manually verify the archive contents against this guide
and confirm that no runtime environment or credential file has slipped in.
