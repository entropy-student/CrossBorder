# CrossBorder Document Index

This repository is the source/document snapshot. Current Reviewer truth is maintained separately under Governance v0.1.6.

## Current authority

| Topic | Authority |
|---|---|
| Current Reviewer state / current Gate | [`REVIEWER_HANDOFF.md`](REVIEWER_HANDOFF.md) → `entropy-student/CrossBorder-Reviewer/REVIEWER_HANDOFF.md` |
| Executor continuity | `entropy-student/CrossBorder-Reviewer/EXECUTOR_HANDOFF.md` |
| Execution evidence index | `entropy-student/CrossBorder-Reviewer/EXECUTION_EVIDENCE.md` |
| Source code snapshot | `review-source/03_template/medusa-crossborder-base/` |

`00_HANDOFF.md` and `CURRENT_STATE.md` are compatibility pointers only. `review-source/PROJECT_STATUS.json` is a source-local historical/machine snapshot and is not allowed to override the current Reviewer handoff.

## Topic documents

These remain useful project contracts/history and are lower priority than the canonical handoff when status conflicts:

- [Roadmap](ROADMAP.md)
- [Production readiness](PRODUCTION_READINESS.md)
- [Local runbook](operations/LOCAL_RUNBOOK.md)
- [Review packaging](operations/REVIEW_PACKAGING.md)
- [Payment architecture](payment/PAYMENT_ARCHITECTURE.md)
- [Payment integration contract](payment/PAYMENT_INTEGRATION_CONTRACT.md)
- [Payment provider decision](payment/PAYMENT_PROVIDER_DECISION.md)
- [PayPal](payment/PAYPAL.md)
- [WorldFirst](payment/WORLDFIRST.md)
- [Product contract](product/PRODUCT_CONTRACT.md)
- [Product data contract](product/PRODUCT_DATA_CONTRACT.md)
- [Product import guide](product/PRODUCT_IMPORT_GUIDE.md)
- [Real product integration policy](product/REAL_PRODUCT_INTEGRATION_POLICY.md)
- [Sourcing](product/SOURCING.md)
- [UI freeze](ui/WEB_UI_FREEZE.md)
- [Historical archive](archive/INDEX.md)

## Governance rule

When a topic document, old status file, historical review, or source-local README conflicts with the current handoff, use the source-of-truth order defined in `CrossBorder-Reviewer/REVIEWER_HANDOFF.md`.

Historical documents should not be mass-rewritten to look current. Revalidate material claims against current source and carry only confirmed facts into a new Gate.
