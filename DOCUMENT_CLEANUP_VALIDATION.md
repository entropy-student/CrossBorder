# Documentation Centralization Validation

Task: `CB-DOCS-002-FINAL-CENTRALIZATION`

## Result

`DOCUMENT_CENTRALIZATION=PASS`

`CB-DOCS-002R-FINAL-MICRO-FIX=PASS`; independent source evidence is recorded
in [SOURCE_MARKDOWN_AUDIT.md](SOURCE_MARKDOWN_AUDIT.md).

The document center is the single human-facing source of truth. The canonical
application/source project is now the child `CrossBorder-Independent-Store`;
no application behavior, payment
behavior, product data, UI, database, Docker volume or runtime state was
changed.

## Roadmap and authority

| Field | Value |
|---|---|
| `CURRENT_STAGE` | `PAYMENT_INTEGRATION` |
| `NEXT_PHASE` | `PAYPAL_ACCOUNT_SANDBOX_CAPABILITY` |
| `NEXT_PHASE_AFTER_ACCOUNT_CAPABILITY` | `PAYPAL_SANDBOX_TRANSPORT_INTEGRATION` |
| `PAYPAL_SANDBOX_STARTED` | `NO` |
| `HUMAN_DOCUMENT_SOURCE_OF_TRUTH` | `跨境电商` document center |
| `SOURCE_CANONICAL` | child `CrossBorder-Independent-Store` project under the document center |

Product/content, logistics/tax, policy, deployment and other production
readiness work remain later phases; they are not the next phase.

## Counts and disposition

The task-start count is the union of the existing center and source Markdown
working-document inventory before these 20 source-contract moves; it includes
the center's already archived history and the duplicated source copies.

| Field | Value |
|---|---:|
| `DOCUMENTS_DISCOVERED` | 142 |
| `ACTIVE_CURRENT` | 46 center Markdown documents |
| `ARCHIVE_KEEP` | 49 center Markdown documents |
| `SOURCE_ADJACENT_KEEP` | 47 source Markdown documents |
| `MOVED_TO_DOCUMENT_CENTER` | 20 |
| `DELETE_SUPERSEDED` | 0 |
| `DELETE_DUPLICATE` | 0 |
| `DELETE_IRRELEVANT` | 0 |
| `FINAL_ACTIVE_DOCUMENT_COUNT` | 46 |
| `BROKEN_CURRENT_DOCUMENT_LINKS` | 0 |

The prior cleanup inventory remains preserved under
`archive/documentation-history/` as historical evidence. The former center
root inventory was also moved there so it cannot be mistaken for a current
authority.

## Location invariants

`HUMAN_FACING_DOCS_OUTSIDE_DOCUMENT_CENTER=0`

`SOURCE_BOUND_DOCS_OUTSIDE_DOCUMENT_CENTER=47`

Exact allowed source-bound list:

```text
CrossBorder-Independent-Store/00_HANDOFF.md
CrossBorder-Independent-Store/02_demos/README.md
CrossBorder-Independent-Store/02_demos/medusa-dtc/AGENTS.md
CrossBorder-Independent-Store/02_demos/medusa-dtc/CLAUDE.md
CrossBorder-Independent-Store/02_demos/medusa-dtc/README.md
CrossBorder-Independent-Store/02_demos/medusa-dtc/apps/backend/README.md
CrossBorder-Independent-Store/02_demos/medusa-dtc/apps/backend/src/admin/README.md
CrossBorder-Independent-Store/02_demos/medusa-dtc/apps/backend/src/admin/i18n/README.md
CrossBorder-Independent-Store/02_demos/medusa-dtc/apps/backend/src/api/README.md
CrossBorder-Independent-Store/02_demos/medusa-dtc/apps/backend/src/jobs/README.md
CrossBorder-Independent-Store/02_demos/medusa-dtc/apps/backend/src/links/README.md
CrossBorder-Independent-Store/02_demos/medusa-dtc/apps/backend/src/modules/README.md
CrossBorder-Independent-Store/02_demos/medusa-dtc/apps/backend/src/subscribers/README.md
CrossBorder-Independent-Store/02_demos/medusa-dtc/apps/backend/src/workflows/README.md
CrossBorder-Independent-Store/02_demos/spree-demo/CLAUDE.md
CrossBorder-Independent-Store/02_demos/spree-demo/README.md
CrossBorder-Independent-Store/02_demos/spree-demo/AGENTS.md
CrossBorder-Independent-Store/02_demos/spree-demo/apps/storefront/CLAUDE.md
CrossBorder-Independent-Store/02_demos/spree-demo/apps/storefront/README.md
CrossBorder-Independent-Store/02_demos/spree-demo/backend/AGENTS.md
CrossBorder-Independent-Store/02_demos/spree-demo/backend/CLAUDE.md
CrossBorder-Independent-Store/02_demos/spree-demo/backend/LICENSE.md
CrossBorder-Independent-Store/03_template/medusa-crossborder-base/AGENTS.md
CrossBorder-Independent-Store/03_template/medusa-crossborder-base/CLAUDE.md
CrossBorder-Independent-Store/03_template/medusa-crossborder-base/README.md
CrossBorder-Independent-Store/03_template/medusa-crossborder-base/TEMPLATE_PROVENANCE.md
CrossBorder-Independent-Store/03_template/medusa-crossborder-base/apps/backend/README.md
CrossBorder-Independent-Store/03_template/medusa-crossborder-base/apps/backend/src/admin/README.md
CrossBorder-Independent-Store/03_template/medusa-crossborder-base/apps/backend/src/admin/i18n/README.md
CrossBorder-Independent-Store/03_template/medusa-crossborder-base/apps/backend/src/api/README.md
CrossBorder-Independent-Store/03_template/medusa-crossborder-base/apps/backend/src/jobs/README.md
CrossBorder-Independent-Store/03_template/medusa-crossborder-base/apps/backend/src/links/README.md
CrossBorder-Independent-Store/03_template/medusa-crossborder-base/apps/backend/src/modules/README.md
CrossBorder-Independent-Store/03_template/medusa-crossborder-base/apps/backend/src/subscribers/README.md
CrossBorder-Independent-Store/03_template/medusa-crossborder-base/apps/backend/src/workflows/README.md
CrossBorder-Independent-Store/04_docs/README.md
CrossBorder-Independent-Store/05_product/README.md
CrossBorder-Independent-Store/05_product/assets/README.md
CrossBorder-Independent-Store/05_product/normalized/README.md
CrossBorder-Independent-Store/05_product/scripts/README.md
CrossBorder-Independent-Store/05_product/sourcing/README.md
CrossBorder-Independent-Store/05_product/sourcing/evidence/README.md
CrossBorder-Independent-Store/05_product/sourcing/scripts/README.md
CrossBorder-Independent-Store/05_product/sourcing/testing/README.md
CrossBorder-Independent-Store/06_payment/README.md
CrossBorder-Independent-Store/06_payment/providers/paypal/README.md
CrossBorder-Independent-Store/06_payment/providers/worldfirst/README.md
```

The list contains 47 exact files, including the source-bound README and
provenance files under the two benchmark repositories; it is not a wildcard
deletion rule.

## External generated duplicates

`OBSOLETE_STAGING_DIRS_REMOVED=6`

Removed after SHA-256 comparison against the canonical source and center:

- `CrossBorder-Independent-Store-DOCUMENT-CENTER-STAGING-CHECK`
- `CrossBorder-Independent-Store-DOCUMENT-CENTER-STAGING-FINAL`
- `CrossBorder-Independent-Store-FINAL-ROUND-3-STAGING-R2-FINAL`
- `CrossBorder-Independent-Store-FULL-REVIEW-CHECKPOINT-001-ROUND-2-FINAL-STAGING`
- `CrossBorder-Independent-Store-FULL-REVIEW-CHECKPOINT-001-ROUND-2-STAGING`
- `CrossBorder-Independent-Store-FULL-REVIEW-CHECKPOINT-001-STAGING`

All were generated review copies. No unique source/evidence file was found;
current source, center history or Git history covered the differing snapshot
files. The specified obsolete Review ZIP names were already absent at audit:

`OBSOLETE_REVIEW_ZIPS_REMOVED=0`

No other parent ZIP, including `跨境电商.zip`, was touched. The removed
generated folders are recoverable only from an external backup; their source
and evidence content is preserved in the canonical project, center or Git.

## Centralization result

- The 20 detailed product, sourcing, payment, PayPal and WorldFirst contracts
  now live under current `product/` and `payment/` center paths.
- Source-side README/control files remain beside code and are marked
  `SOURCE_BOUND=YES; HUMAN_WORKING_DOCUMENT=NO` where applicable.
- `DOCUMENT_INDEX.md` maps one current authority per topic and lists the exact
  source-bound exceptions.
- Markdown link checks across the center and non-generated source Markdown:
  `BROKEN_CURRENT_DOCUMENT_LINKS=0`.
- The current reviewer staging utility remains source-bound and its candidate
  Git reporting validates `git rev-parse --show-toplevel` before reporting a
  candidate HEAD.

## Safety and Git

`MEDUSA_CANDIDATE_SOURCE_MOVED=NO`
`WORKSPACE_ROOT_CONSOLIDATION=PASS`
`DATABASE_MODIFIED=NO`
`DOCKER_MODIFIED=NO`
`RUNTIME_MODIFIED=NO`
`ORDER_CREATED=NO`
`PAYMENT_BEHAVIOR_CHANGED=NO`
`PRODUCT_BEHAVIOR_CHANGED=NO`
`REAL_PAYMENT_ENABLED=NO`

`ROOT_HEAD=ee6e42dccd2a140402f5e7d5e807ecc97760ee71`
`ROOT_STATUS=CLEAN`
`MEDUSA_STATUS=CLEAN`
`SPREE_STATUS=CLEAN`

The root checkpoint is created only after all intentional source-side pointer,
README, status and documentation-tooling changes are complete. No candidate
Medusa or Spree source was changed.

`NEXT_STEP=WAITING_FOR_REVIEWER`
