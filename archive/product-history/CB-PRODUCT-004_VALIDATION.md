# CB-PRODUCT-004 Validation

## Decision

- `STORE_INTEGRATION_APPROVED_BY_USER=YES`
- `MEDUSA_WRITE=PASS`
- `PRODUCT_STATUS=DRAFT`
- `USER_ACTION_REQUIRED=CONFIRM_SELLING_PRICE`
- `MEDUSA_WRITE_SCOPE=LOCAL_MOTHER_TEMPLATE_ONLY`
- `REAL_PAYMENT=NOT_CONFIGURED`
- `HISTORICAL_DATABASES_AND_ORDERS=UNTOUCHED`

The user-supplied product is allowed into the store-integration path once its
import identity and source traceability validate. Sourcing, sample,
procurement, logistics, HS and FTO states remain separate and do not block the
local DRAFT record.

## Product Master

- Record: `05_product/normalized/PAWFECTLY-PET-HAIR-REMOVER.json`
- Record type: `SELLABLE_PRODUCT`
- Product status: `DRAFT`
- Source product ID: `1601855396569`
- Internal SKU: `PAW-PHR-001`
- Handle: `pet-hair-remover`
- Variant strategy: one internal generic `Variant=Default`; supplier colors
  and supplier variant IDs remain unconfirmed.
- Selling price: not supplied; no consumer price was invented.
- Cost and landed reference are retained as sourcing metadata only and are not
  used as storefront selling price.

## Adapter contract

Script: `05_product/scripts/medusa-product-upsert.mjs`

- Default invocation is dry-run and prints `WRITE_PERFORMED=NO`.
- `--write` is required for a write.
- It validates the Product Master before any HTTP request.
- It requires a saved local Mother Template runtime config, a non-historical
  Compose project, the matching PostgreSQL container/volume, local Admin auth
  and a US/USD region.
- It identifies the product by immutable source product ID and the approved
  internal SKU. It never resets a catalog or mutates historical orders.

## Run evidence

Target local runtime:

- `TARGET_MEDUSA_PROJECT=medusa-product-integration-a1b2c3`
- Database: `medusa_dtc@127.0.0.1:56332`
- Backend: `http://127.0.0.1:19600`
- Storefront: `http://127.0.0.1:18600`
- Region: United States / USD
- Volume: `medusa-product-integration-a1b2c3_pgdata`

### Pre-write validation and dry-run

```text
VALIDATION_RESULT=NEEDS_VERIFICATION
IMPORT_GATE=PASS
STORE_INTEGRATION_APPROVED_BY_USER=YES
PRODUCT_STATUS=DRAFT
HANDLE=pet-hair-remover
SELLING_PRICE_STATUS=NEEDS_USER_CONFIRMATION
DRY_RUN=YES
WRITE_PERFORMED=NO
NO_MEDUSA_REQUEST=YES
```

### Upsert run 1

```text
MEDUSA_WRITE=PASS
UPSERT_MODE=CREATE_DRAFT
PRODUCT_ID=prod_01M1JG54Z6PFY802QV32EJ174D
PRODUCT_STATUS=draft
HANDLE=pet-hair-remover
UPSERT_IDEMPOTENCE=PASS
DUPLICATE_VARIANTS=0
ADMIN_READBACK=PASS
STORE_READBACK=NOT_VISIBLE_EXPECTED_FOR_DRAFT
POSTGRES_READBACK=PASS
PRICE_STATE=NO_SELLING_PRICE_DRAFT
SELLING_PRICE_STATUS=NEEDS_USER_CONFIRMATION
```

### Upsert run 2

```text
MEDUSA_WRITE=PASS
UPSERT_MODE=UPDATE_SAME_PRODUCT
PRODUCT_ID=prod_01M1JG54Z6PFY802QV32EJ174D
PRODUCT_STATUS=draft
HANDLE=pet-hair-remover
UPSERT_IDEMPOTENCE=PASS
PRODUCT_COUNT_DELTA_AFTER_RERUN=0
DUPLICATE_VARIANTS=0
ADMIN_READBACK=PASS
STORE_READBACK=NOT_VISIBLE_EXPECTED_FOR_DRAFT
POSTGRES_READBACK=PASS
PRICE_STATE=NO_SELLING_PRICE_DRAFT
SELLING_PRICE_STATUS=NEEDS_USER_CONFIRMATION
```

The same Product ID was returned on both runs. PostgreSQL read-back confirmed
the product handle/status/source identity and the single stable internal SKU.
The DRAFT is correctly absent from the public Store API until a real selling
price and the remaining publish requirements are confirmed.

## Runtime note

The fresh local Mother Template bootstrap completed its own pre-existing
acceptance routine, which generated disposable US/USD and France/EUR validation
orders in this new target database. No order was created by the Product Upsert
adapter, and no historical Medusa or Spree database/order was touched. Those
bootstrap orders are not used as product-write evidence.

## Gate state

| Gate | Result | Explanation |
|---|---|---|
| User store integration approval | `PASS` | User supplied COMP-001 facts are explicitly approved for integration |
| Import | `PASS` | Stable identity, handle, currency and internal SKU validate |
| Publish | `BLOCKED` | Selling price, main image and other publish facts are not confirmed |
| Logistics | `NEEDS_VERIFICATION` | Package/origin/shipping/HS facts remain unresolved |
| Sourcing sample | `NEEDS_TEST` | Physical sample has not been tested |
| Procurement | `HOLD` | Bulk purchase remains a separate gate |
| Risk | `NEEDS_VERIFICATION` | FTO/compliance remain unresolved |
| Medusa write | `PASS` | Local DRAFT write and read-backs completed |

No UI, Figma, payment, production shipping, Spree or real SKU publication was
changed in this task.
