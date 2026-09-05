# CrossBorder Independent Store — Current Handoff

## 1. CURRENT STATUS

- `TASK=CB-FULL-REVIEW-CHECKPOINT-002-FIX-R2-FINAL`
- `RESULT=PASS`
- `CURRENT_STAGE=PAYMENT_INTEGRATION`
- `NEXT_STEP=UPLOAD_FULL_REVIEW_CHECKPOINT_002_FINAL_ROUND_3`
- `NEXT_PHASE=PAYPAL_ACCOUNT_SANDBOX_CAPABILITY`
- `FOLLOWING_PHASE=PAYPAL_SANDBOX_TRANSPORT_INTEGRATION`
- `DOCUMENT_CENTER=跨境电商`
- `DOCUMENT_CENTER_VERSION_CONTROLLED=YES`
- `HUMAN_DOCUMENT_SOURCE_OF_TRUTH=DOCUMENT_CENTER`
- `SOURCE_CANONICAL=CrossBorder-Independent-Store`
- `WEB_UI_FREEZE=VERIFIED PASS`
- `REVIEW_03=CLOSED`; `FULL_REVIEW_CHECKPOINT_001=CLOSED`
- `ROOT_HEAD=4b7dd0f371f13cc3ee1f598499dcecbf63b33fec`
- `HEAD_BEFORE_MOVE=1d47cd3daed9e06ec879db6365444d0f6c7e5019`; `HEAD_AFTER_MOVE` unchanged before the checkpoint
- `ROOT_STATUS=CLEAN`; `MEDUSA_STATUS=CLEAN`; `SPREE_STATUS=CLEAN`
- `RUNTIME_REGRESSION=PASS`; Docker Linux engine recovered non-destructively.
- `DATABASE_LIVE_READBACK=PASS`; PostgreSQL read-only verification completed.
- `SAFE_WORKSPACE_CLEANUP=PASS`; generated build/runtime outputs removed after
  exact safety checks; active `node_modules` retained.
- `FULL_REVIEW_CHECKPOINT_002=ACTIVE; ROUND_1_FINDINGS_CLOSED; ROUND_2_FINDINGS_CLOSING`
- `PACKAGE_LAYOUT=LIVE_WORKSPACE_SHAPE`; source is copied once under the
  `CrossBorder-Independent-Store/` child in the Reviewer package.
- `PAYPAL_RUNTIME_CODE_CHANGED=SCOPED_CONTRACT_FIX_ONLY`; `PRODUCT_BEHAVIOR_CHANGED=NO`;
  `UI_BEHAVIOR_CHANGED=NO`.
- `REVIEW_PACKAGE=_review_outbox/CrossBorder-Independent-Store-FULL-REVIEW-CHECKPOINT-002-FINAL-ROUND-3.zip`;
  package layout is live-workspace-shaped and source is copied once.

## 2. FINAL ARCHITECTURE

- Platform: Medusa; Mother Template is frozen at
  `CrossBorder-Independent-Store/03_template/medusa-crossborder-base/`.
- Spree remains `BENCHMARK_REFERENCE` only.
- Medusa owns cart, totals, shipping choice, order and customer history.
- WorldFirst is `WORLDFIRST_COLLECTION_ACCOUNT`, not a checkout gateway.
- PayPal is the future checkout candidate, `AUTHORIZE` / no auto-capture,
  fail-closed and disabled. No real payment is enabled.

## 3. CURRENT WORKING PATHS

- [Document index](DOCUMENT_INDEX.md)
- [Source Markdown audit](SOURCE_MARKDOWN_AUDIT.md)
- [Current state](CURRENT_STATE.md)
- [Roadmap](ROADMAP.md)
- [Local runbook](operations/LOCAL_RUNBOOK.md)
- [Payment architecture](payment/PAYMENT_ARCHITECTURE.md)
- [Product contract](product/PRODUCT_CONTRACT.md)
- [Web UI freeze](ui/WEB_UI_FREEZE.md)
- [Production readiness](PRODUCTION_READINESS.md)
- [Canonical status JSON](CrossBorder-Independent-Store/PROJECT_STATUS.json)
- [Workspace migration validation](WORKSPACE_MIGRATION_VALIDATION.md)

## 4. CURRENT VERIFIED CAPABILITIES

- Homepage, PDP, Collection/Search, Cart, Mini Cart and Checkout Entry are
  implemented on the frozen Pawfectly Home UI.
- First real local-preview product is published: `PAW-PHR-001`,
  `pet-hair-remover`, `14.99 USD`, Medusa product
  `prod_01M1JG54Z6PFY802QV32EJ174D`.
- Real-catalog filtering, product assets, variant/cart flow and US/USD
  storefront regression are preserved.
- PayPal/WorldFirst calls, real-money charges and new orders are not part of
  this documentation cleanup.

## 5. CURRENT LIMITATIONS

- PayPal account eligibility and sandbox access require the next capability
  review. Customer exposure remains disabled; System Payment is technical-only.
- WorldFirst settlement is separate from customer checkout; application-level
  reconciliation is required before exposure.
- Production product/content, inventory, logistics, tax/customs, policies,
  domain/deployment and real payment remain unready.

## 6. CURRENT RUN COMMANDS

From the canonical project root:

```powershell
$template = (Resolve-Path .\03_template\medusa-crossborder-base).Path
Set-Location $template
powershell -ExecutionPolicy Bypass -File .\scripts\setup-local.ps1
powershell -ExecutionPolicy Bypass -File .\scripts\start-local.ps1
```

Use `build-production.ps1` for a production build. `acceptance-smoke.ps1` is
mutating and creates technical test orders; it is not a read-only regression.

## 7. CURRENT P2/P3 DEBT

- `CONTENT/TAXONOMY=P2`: generic navigation remains until real taxonomy and
  content are approved.
- `CSS_DEBT=P2_DEFERRED_TO_SEPARATE_MAINTENANCE_PASS`.
- Payment eligibility, sandbox proof and operational go-live gates remain
  pending; no credentials are committed.
- Round-2 closure: PayPal request IDs are bounded deterministic ASCII values;
  Orders PATCH has a local operation identity and does not claim
  `PayPal-Request-Id` support; webhook headers/raw body/parsed data are kept
  available to the verifier. PayPal remains disabled.

## 8. NEXT PHASE

`PAYPAL_ACCOUNT_SANDBOX_CAPABILITY`, then
`PAYPAL_SANDBOX_TRANSPORT_INTEGRATION`. Product/content and logistics are
later production-readiness work. Do not start Sandbox from this cleanup.

## 9. HISTORICAL INDEX POINTER

Use [DOCUMENT_INDEX.md](DOCUMENT_INDEX.md) first. Closed review, product,
payment and UI evidence is indexed under [archive/INDEX.md](archive/INDEX.md).
Source-bound README/control files remain beside code; they are not duplicate
human working documents.

`MEDUSA_SOURCE_MOVED=NO`
`DATABASE_MODIFIED=NO`
`ORDER_CREATED=NO`
`PAYMENT_BEHAVIOR_CHANGED=NO`
`REAL_PAYMENT_ENABLED=NO`

`WORKSPACE_ROOT_CONSOLIDATION=PASS`
