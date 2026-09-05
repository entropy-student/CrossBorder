# Document Cleanup Inventory

Task: `CB-DOCS-001-CENTRALIZE-AND-CLEANUP`

This inventory was captured before any document move or deletion. The source
project was read-only during this capture. Paths are relative to
`CrossBorder-Independent-Store` unless marked `EXTERNAL`.

## Scope and observed baseline

- `SOURCE_CANONICAL=../CrossBorder-Independent-Store` (sibling application/source)
- `DOCUMENT_CENTER=this sibling folder named 跨境电商` (created and empty before this inventory)
- `ROOT_HEAD=4a05d1924a7e3eeedd5333f3a6597c9d4f0a206d`
- `ROOT_STATUS=CLEAN`
- `MEDUSA_STATUS=CLEAN`
- `SPREE_STATUS=CLEAN`
- `DATABASE_MODIFIED=NO`; `ORDER_CREATED=NO`; `PAYMENT_BEHAVIOR_CHANGED=NO`

The inventory counts 128 Markdown documents plus the root status JSON and the
stale root review-package manifest: `DOCUMENTS_DISCOVERED=130`. Generated
dependencies, build output, runtime files and databases are not counted as
working documents and are not cleanup targets in this task.

## Classification counts

Each listed document group has exactly one classification. Technical README
files intentionally shipped beside source are `SOURCE_ADJACENT_KEEP`; they are
not moved merely to make the human-facing center look tidy.

| Classification | Count | Planned disposition |
|---|---:|---|
| `ACTIVE_CURRENT` | 39 | Consolidate into the center or retain as source-adjacent technical authority |
| `ARCHIVE_KEEP` | 48 | Move/index in the center archive; preserve audit value |
| `DELETE_SUPERSEDED` | 1 | Delete the stale generated root package manifest after this inventory |
| `DELETE_DUPLICATE` | 0 | No unique document is currently proven duplicate |
| `DELETE_IRRELEVANT` | 0 | No project-owned document is safely irrelevant |
| `SOURCE_ADJACENT_KEEP` | 42 | Keep beside source/data/scripts; not human-facing current authority |

## Active current documents (40)

| Paths | Classification | Reason |
|---|---|---|
| `00_HANDOFF.md`; `PROJECT_STATUS.json` | `ACTIVE_CURRENT` | Current project entry/status; handoff will be moved to the center and the root will retain a pointer stub |
| `04_docs/ACCEPTANCE_GATES.md`, `CURRENT_STATE.md`, `LOCAL_RUNBOOK.md`, `PRODUCTION_READINESS.md`, `RUNTIME_SCORECARD.md`, `UI_IMPLEMENTATION_BASELINE.md`, `WINDOWS_PREFLIGHT.md`; `04_docs/ui_implementation/WEB_UI_FREEZE.md`; `04_docs/ui_implementation/CB-UI-FINAL-001/*.md` | `ACTIVE_CURRENT` | Current architecture, runbook, safety and final Web UI freeze evidence |
| `05_product/PRODUCT_DATA_CONTRACT.md`, `PRODUCT_IMPORT_GUIDE.md`, `REAL_PRODUCT_INTEGRATION_POLICY.md`, `VALIDATION_TEST_MATRIX.md`; `05_product/sourcing/COMPONENT_DATA_CONTRACT.md`, `COMP-001_VALIDATION.md`, `COMP-001_PROCUREMENT_CHECKLIST.md`, `COMP-001_SUPPLIER_FOLLOWUP.md`; `05_product/sourcing/testing/PET_HAIR_REMOVER_SAMPLE_TEST_PROTOCOL.md` | `ACTIVE_CURRENT` | Current product/sourcing contracts and operating guidance |
| `06_payment/README.md`, `PAYMENT_INTEGRATION_CONTRACT.md`, `PAYMENT_PROVIDER_DECISION.md`, `PAYMENT_TEST_MATRIX.md`, `EXISTING_PAYMENT_SYSTEM_INTAKE.md`; `06_payment/providers/paypal/*.md`; `06_payment/providers/worldfirst/*.md` | `ACTIVE_CURRENT` | Current payment architecture and provider contracts; customer payment remains disabled |

## Historical documents (47)

| Paths | Classification | Reason |
|---|---|---|
| `04_docs/archive/**/*.md` | `ARCHIVE_KEEP` | Already separated historical platform/review/UI/runbook evidence; will be placed under the center archive |
| `04_docs/DOCUMENT_CLEANUP_INVENTORY.md`; `04_docs/DOCUMENT_CLEANUP_REPORT.md` | `ARCHIVE_KEEP` | Prior cleanup checkpoint evidence; not current operator guidance |
| `04_docs/FINAL_SELECTION_EVIDENCE.md` | `ARCHIVE_KEEP` | Closed platform-selection evidence; the current platform decision is summarized in the document center |
| `05_product/CB-PREPAYMENT-CLOSURE-001_VALIDATION.md`; `CB-PRODUCT-004_VALIDATION.md`; `CB-PRODUCT-005_VALIDATION.md`; `CB-PRODUCT-005R-FINAL_VALIDATION.md`; `CB-PRODUCT-005R-FINAL-ASSET-UNIFICATION_VALIDATION.md`; `CB-PRODUCT-005R-PREPAYMENT-POLISH_VALIDATION.md` | `ARCHIVE_KEEP` | Closed product-activation/prepayment evidence; current facts will be summarized in the center |
| `06_payment/CB-PREPAYMENT-REVIEW-002_VALIDATION.md`; `CB-PAYMENT-002-WORLDFIRST-READINESS_VALIDATION.md`; `CB-PAYMENT-003-MODE-A-PAYPAL-READINESS_VALIDATION.md`; `CB-PAYMENT-004-PAYPAL-MEDUSA-ADAPTER-SCAFFOLD_VALIDATION.md`; `CB-FULL-REVIEW-CHECKPOINT-001-FIX-R1_VALIDATION.md`; `CB-FULL-REVIEW-CHECKPOINT-001-FIX-R2-FINAL_VALIDATION.md` | `ARCHIVE_KEEP` | Closed payment-readiness/review-round evidence; current contracts remain authoritative |

## Source-adjacent documents (42)

| Paths | Classification | Reason |
|---|---|---|
| All 21 Markdown files under `02_demos/**` | `SOURCE_ADJACENT_KEEP` | Candidate source, benchmark, provenance and orchestration documentation shipped with the preserved baselines |
| All 13 Markdown files under `03_template/medusa-crossborder-base/**` | `SOURCE_ADJACENT_KEEP` | Mother Template README/AGENTS/CLAUDE/provenance and app module guidance shipped with source |
| `05_product/README.md`, `assets/README.md`, `normalized/README.md`, `scripts/README.md`, `sourcing/README.md`, `sourcing/evidence/README.md`, `sourcing/scripts/README.md`, `sourcing/testing/README.md` | `SOURCE_ADJACENT_KEEP` | Local technical directory contracts beside schemas, data, scripts and test fixtures |

## Superseded document eligible for deletion (1)

| Path | Classification | Reason |
|---|---|---|
| `REVIEW_PACKAGE_MANIFEST.txt` | `DELETE_SUPERSEDED` | Stale generated package identity; no current source or unique evidence, and the current reviewer package must generate its own manifest |

## External parent-directory inventory

| External object | Classification | Disposition |
|---|---|---|
| `.../CrossBorder-Independent-Store-FINAL-ROUND-3-STAGING-R2-FINAL/` | `DELETE_DUPLICATE` | Generated review copy; retained and not deleted because this documentation-only task did not complete a uniqueness comparison |
| `.../CrossBorder-Independent-Store-FULL-REVIEW-CHECKPOINT-001-ROUND-2-FINAL-STAGING/` | `DELETE_DUPLICATE` | Generated review copy; retained and not deleted because this documentation-only task did not complete a uniqueness comparison |
| `.../CrossBorder-Independent-Store-FULL-REVIEW-CHECKPOINT-001-ROUND-2-STAGING/` | `DELETE_DUPLICATE` | Generated review copy; retained and not deleted because this documentation-only task did not complete a uniqueness comparison |
| `.../CrossBorder-Independent-Store-FULL-REVIEW-CHECKPOINT-001-STAGING/` | `DELETE_DUPLICATE` | Generated review copy; retained and not deleted because this documentation-only task did not complete a uniqueness comparison |
| `.../CrossBorder-Independent-Store-FINAL-ROUND-3-REVIEW-R2-FINAL.zip` | `DELETE_DUPLICATE` | Generated package; retained and not deleted because this documentation-only task did not complete a uniqueness comparison |
| `.../CrossBorder-Independent-Store-FULL-REVIEW-CHECKPOINT-001-ROUND-2-FINAL.zip` | `DELETE_DUPLICATE` | Generated package; retained and not deleted because this documentation-only task did not complete a uniqueness comparison |
| `.../CrossBorder-Independent-Store-LOCAL-ARCHIVE/` | `ARCHIVE_KEEP` | Not present at capture time; no action taken |

## Explicit non-targets

Do not move or delete source code, JSON product/component data, schemas,
scripts, tests, assets, package manifests/lockfiles, Git repositories, runtime
configuration, database data, Docker volumes, historical orders or third-party
benchmark source. No current document was deleted before this inventory.
