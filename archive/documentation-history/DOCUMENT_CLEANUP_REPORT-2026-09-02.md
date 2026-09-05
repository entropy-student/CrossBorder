# Document Cleanup Report

Task: `CB-DOC-CLEANUP-001`

## Result

`DOCUMENT_CLEANUP=PASS`

The cleanup reduced the authoritative project to source, current documents,
historical audit records and Git metadata. Rebuildable dependencies/build
outputs were moved out of the project. No database, Docker volume, order or
candidate source baseline was reset or deleted.

## Size and count

| Field | Value |
|---|---:|
| `BEFORE_PROJECT_FILE_COUNT` | 116,411 |
| `AFTER_PROJECT_FILE_COUNT` | 2,216 |
| `BEFORE_DOC_FILE_COUNT` | 98 files under `04_docs` before cleanup |
| `AFTER_CURRENT_DOC_FILE_COUNT` | 17 current Markdown docs, excluding archive and scripts |
| `ARCHIVED_DOC_COUNT` | 33 Markdown historical docs |
| `DELETED_DUPLICATE_COUNT` | 0; safety policy blocked force deletion, so confirmed duplicates were moved outside the project |
| `BEFORE_SIZE` | 1,341,126,467 bytes / 1.249 GiB |
| `AFTER_SIZE` | 24,528,215 bytes / 23.39 MiB |
| `SPACE_RECLAIMED` | 1,316,598,252 bytes / 1,255.61 MiB / 98.17% |

The fields above are the post-cleanup payload measurement immediately before
the root checkpoint commits. The final status check after those commits was
`FINAL_POST_COMMIT_FILE_COUNT=2,241` and
`FINAL_POST_COMMIT_SIZE=24,585,878 bytes / 23.45 MiB`; the difference is Git
metadata created by the intentional documentation commits, not retained
application output.

The final size includes this report and the other cleanup records present in
the workspace at the final measurement.

## Removed or moved generated content

`SOURCE_FILES_DELETED=0`

Moved from the project to the sibling local archive under
`generated-artifacts/doc-cleanup-20260902/`:

- Mother Template root `node_modules` and its generated app links.
- `apps/backend/.medusa`.
- `apps/storefront/.next`.
- `apps/storefront/tsconfig.tsbuildinfo`.
- Spree `backend/tmp` placeholder directory.

Moved out of the project as confirmed generated or superseded review copies:

- `04_docs/ui_implementation/CB-UI-FINAL-001.zip` (exact 16-entry match with the preserved final evidence directory).
- Superseded Review-01/Review-03 staging ZIPs and the mutated `REVIEW-01-FIXED.zip`.
- External Review staging directories, runtime leftovers and temporary pnpm tooling formerly under `LOCAL-ARCHIVE/generated-artifacts/`.

Force deletion was not used because the local execution policy rejected it;
the moves are recoverable from `CrossBorder-Independent-Store-LOCAL-ARCHIVE`.

## Preserved current and historical content

- Current: `00_HANDOFF.md`, `PROJECT_STATUS.json`, current state/runbook,
  production readiness, final selection evidence, scorecard, acceptance gates,
  Windows preflight, UI baseline, `WEB_UI_FREEZE.md`, and CB-UI-FINAL-001.
- Mother Template source, package manifests/lockfiles, safe env templates,
  Docker compose definition, provenance and project scripts remain intact.
- Medusa and Spree candidate sources, provenance and nested Git repositories
  remain intact and clean.
- Historical Review-02/03, platform selection, UI implementation and legacy
  runbook documents are indexed under `04_docs/archive/`.
- Valid historical `REVIEW-01-FINAL.zip`, attestation and manifest remain in
  the external local archive. `02_demos/spree-demo/storefront-official.zip`
  remains because it was not referenced by provenance with enough certainty
  to classify as a disposable duplicate.

## Credential and runtime exclusions

The following local-only runtime/credential paths remain excluded from current
documentation and any review package; their values are not recorded here:

- `03_template/medusa-crossborder-base/apps/backend/.env`
- `03_template/medusa-crossborder-base/apps/storefront/.env.local`
- `02_demos/medusa-dtc/apps/backend/.env`
- `02_demos/medusa-dtc/apps/storefront/.env.local`
- `02_demos/spree-demo/.env`
- `02_demos/spree-demo/.spree/credentials.json`
- `02_demos/spree-demo/apps/storefront/e2e-backend/.env`
- `02_demos/medusa-admin.local.txt`
- `02_demos/medusa-init-mode.local.txt`
- `02_demos/medusa-db-image.local.txt`

`CREDENTIAL_FILES_EXCLUDED=PASS`

## Integrity and Git status

- `TRACKED_SOURCE_MUTATIONS=0` due to generated cleanup.
- `MEDUSA_STATUS=CLEAN` and `SPREE_STATUS=CLEAN` after the cleanup checks.
- `ROOT_CONTENT_CHECKPOINT=7b8678009fb8ba3bd4d01f7d228ed4d55abf779d` is the cleanup commit containing the
  substantive archive/current-document changes.
- `ROOT_STATUS=CLEAN` at the checkpoint. The current live root hash must be
  read with `git rev-parse HEAD`; any later documentation-only commit is not a
  second cleanup checkpoint.
- Database, Docker volume and historical order state were not inspected through
  destructive commands and were not changed.

## Current documentation set

The normal operator now starts from [CURRENT_STATE.md](../../CURRENT_STATE.md)
and [LOCAL_RUNBOOK.md](../../operations/LOCAL_RUNBOOK.md). Historical material
is discoverable from [archive/INDEX.md](../INDEX.md); it is not part of the current operating
path.
