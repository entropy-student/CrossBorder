# REVIEW-02 Workspace Cleanup Report

This report records the cleanup performed for `CB-REVIEW-02-PREP`. No ZIP was
created. All sizes use binary MiB/GiB while retaining the exact byte totals.

## Size result

| Field | Value |
|---|---:|
| BEFORE_TOTAL_SIZE | 4,209,485,100 bytes / 3.92 GiB |
| AFTER_TOTAL_SIZE | 16,377,184 bytes / 15.62 MiB |
| SPACE_RECLAIMED | 4,193,107,916 bytes / 3.91 GiB |
| REDUCTION_PERCENT | 99.61% |
| BEFORE_FILE_COUNT | 280,842 |
| AFTER_FILE_COUNT | 2,083 |
| AFTER_DIRECTORY_COUNT | 905 |

## Removed generated content

The following exact generated directories were removed after confirming their
corresponding manifests/lockfiles or build provenance remained available:

- `02_demos/medusa-dtc/node_modules/`
- `02_demos/medusa-dtc/apps/backend/node_modules/`
- `02_demos/medusa-dtc/apps/storefront/node_modules/`
- `02_demos/medusa-dtc/apps/backend/.medusa/`
- `02_demos/medusa-dtc/apps/storefront/.next/`
- `02_demos/medusa-dtc/.turbo/`
- `02_demos/spree-demo/node_modules/`
- `02_demos/spree-demo/apps/storefront/node_modules/`
- `02_demos/spree-demo/apps/storefront/.next/`
- generated contents of `02_demos/spree-demo/backend/tmp/`; the tracked
  `backend/tmp/.keep` and `backend/tmp/pids/.keep` placeholders were restored
  byte-for-byte immediately after the cleanup check

`NODE_MODULES_REMOVED_COUNT=5` candidate dependency trees. The pre-cleanup
inventory directly measured at least `1,686.72 MiB` across the Medusa root and
app trees plus the Spree storefront tree; the small Spree root tree was also
removed but was not isolated in the top-50 report. The overall reclaimed size
above is exact for the full workspace inventory.

`BUILD_ARTIFACTS_REMOVED=Medusa .medusa/.next/.turbo; Spree .next and generated tmp contents`
`SOURCE_FILES_DELETED=0`
`TRACKED_SOURCE_MUTATIONS=0`

The final generated-directory scan was clean except for
`02_demos/spree-demo/backend/tmp/`, which contains only the two restored,
zero-byte Git-tracked `.keep` placeholders. Those placeholders are required
workspace control files and were not removed.

## Moved to local archive

The following were moved out of the project, not deleted:

| Original | New location |
|---|---|
| `CrossBorder-Independent-Store-REVIEW-01.zip` | `CrossBorder-Independent-Store-LOCAL-ARCHIVE/review-bundles/CrossBorder-Independent-Store-REVIEW-01.zip` |
| `REVIEW-01-FIXED.zip` | `CrossBorder-Independent-Store-LOCAL-ARCHIVE/review-bundles/REVIEW-01-FIXED.zip` |
| `REVIEW-01-FINAL.zip` | `CrossBorder-Independent-Store-LOCAL-ARCHIVE/review-bundles/REVIEW-01-FINAL.zip` |
| `REVIEW-01-FINAL.attestation.txt` | `CrossBorder-Independent-Store-LOCAL-ARCHIVE/review-bundles/REVIEW-01-FINAL.attestation.txt` |
| `REVIEW_MANIFEST.txt` | `CrossBorder-Independent-Store-LOCAL-ARCHIVE/review-bundles/REVIEW_MANIFEST.txt` |
| root `.runtime/` | `CrossBorder-Independent-Store-LOCAL-ARCHIVE/generated-artifacts/runtime/` and `runtime-leftovers-20260901/` |
| root `.tooling/` | `CrossBorder-Independent-Store-LOCAL-ARCHIVE/generated-artifacts/tooling/` |

The first `.runtime` move encountered a Windows pnpm-link traversal error;
the remaining source directory was then moved by directory rename. Both
resulting locations are outside the project and their contents were not used
for Review-02 packaging.

## Credential and sensitive-file handling

`CREDENTIAL_FILES_EXCLUDED=YES`. Runtime files remain local-only or outside
the project and are listed as exclusions in
`04_docs/REVIEW02_INCLUDE_EXCLUDE.md`; no secret values were copied into this
report. Safe `.env.example` and `.env.template` files remain source material.

## Final largest directories

The post-cleanup top 20 directory sizes were:

| Size (MiB) | Directory |
|---:|---|
| 15.62 | `[root]` |
| 13.28 | `02_demos` |
| 9.16 | `02_demos/spree-demo` |
| 4.11 | `02_demos/medusa-dtc` |
| 4.03 | `02_demos/spree-demo/.git` |
| 3.90 | `02_demos/spree-demo/.git/objects` |
| 3.90 | `02_demos/spree-demo/.git/objects/pack` |
| 3.42 | `02_demos/spree-demo/apps` |
| 3.42 | `02_demos/spree-demo/apps/storefront` |
| 1.99 | `02_demos/medusa-dtc/.git` |
| 1.92 | `02_demos/medusa-dtc/.git/objects` |
| 1.93 | `02_demos/spree-demo/apps/storefront/public` |
| 1.91 | `02_demos/spree-demo/apps/storefront/public/flags` |
| 1.91 | `02_demos/spree-demo/apps/storefront/public/flags/1x1` |
| 1.60 | `03_template` |
| 1.60 | `03_template/medusa-crossborder-base` |
| 1.50 | `02_demos/medusa-dtc/apps` |
| 1.45 | `02_demos/medusa-dtc/apps/storefront` |
| 0.96 | `02_demos/spree-demo/apps/storefront/src` |
| 0.94 | `03_template/medusa-crossborder-base/apps` |

The remaining large items are candidate source/assets, Mother Template source,
provenance/evidence and nested Git baselines. They are explicitly protected by
the task and must remain available for review/reproducibility. Git object data
may be omitted only from the manually created Review ZIP.

## Integrity and state checks

- `ROOT_GIT_STATUS` (`git status --short`): expected CB-DEV-017/018
  documentation/automation changes plus this task's reports; no candidate
  source deletion.

```text
 M 00_HANDOFF.md
 M 01_research/PLATFORM_COMPARISON.md
 M 04_docs/ACCEPTANCE_GATES.md
 M 04_docs/LOCAL_RUNBOOK.md
 M 04_docs/RUNTIME_SCORECARD.md
 M 04_docs/node/spree-source-order-smoke.mjs
 M 04_docs/scripts/07-build-spree-source.ps1
 M 04_docs/scripts/08-spree-source-smoke.ps1
 M 04_docs/scripts/09-start-spree-source-storefront.ps1
?? 02_demos/medusa-repeat/
?? 02_demos/spree-repeat/
?? 03_template/medusa-crossborder-base/
?? 04_docs/FINAL_SELECTION_EVIDENCE.md
?? 04_docs/REVIEW02_CLEANUP_REPORT.md
?? 04_docs/REVIEW02_INCLUDE_EXCLUDE.md
?? 04_docs/REVIEW02_WORKSPACE_SIZE_REPORT.md
?? 04_docs/UI_IMPLEMENTATION_BASELINE.md
?? 04_docs/node/medusa-repeat-augment.ts
?? 04_docs/node/medusa-repeat-smoke.mjs
?? 04_docs/scripts/12-start-medusa-repeat.ps1
?? 04_docs/scripts/13-start-medusa-repeat-storefront.ps1
?? 04_docs/scripts/14-spree-repeatability.ps1
```

- `MEDUSA_GIT_STATUS=clean`.
- `SPREE_GIT_STATUS=clean` after restoring its tracked `.keep` placeholders.
- Root, Medusa and Spree `.git` directories remain present.
- `TECHNOLOGY_SELECTION=MEDUSA` remains unchanged.
- Mother Template remains at `03_template/medusa-crossborder-base/`.
- Spree remains `BENCHMARK_REFERENCE` and was not extended.
- No Docker `down -v`, volume removal, prune, database reset, order deletion or
  new commerce test was performed.
- Historical Medusa, Spree Quick Start and Spree source databases/volumes/orders
  were not touched.
