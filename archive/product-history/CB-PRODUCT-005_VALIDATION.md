# CB-PRODUCT-005 Validation

## Final integration state

- `PRODUCT_ID=prod_01M1JG54Z6PFY802QV32EJ174D`
- `HANDLE=pet-hair-remover`
- `SKU=PAW-PHR-001`
- `SELLING_PRICE=14.99 USD`
- `PRICE_CONFIRMED_BY_USER=YES`
- `PRODUCT_STATUS=DRAFT`
- `MEDUSA_WRITE=PASS`
- `SAME_PRODUCT_ID=YES`
- `UPSERT_IDEMPOTENCE=PASS`
- `PRODUCT_COUNT_DELTA_AFTER_RERUN=0`
- `DUPLICATE_VARIANTS=0`

The existing local DRAFT was updated in place. No second Product was created.
The cost price (`1.60 USD`) and landed reference (`2.08 USD`) remain sourcing
metadata only and were not used as a selling price.

## Asset gate

- `SOURCE_IMAGE=ACTION_REQUIRED`
- `ASSET_ACTION_REQUIRED=SOURCE_IMAGE_NOT_AVAILABLE_IN_PROJECT`
- `PUBLISH_GATE=BLOCKED`

The project contains no exact user/supplier source image file for COMP-001 in
the product asset or sourcing evidence directories. No similar internet image,
generated product image or listing-page URL was used as an image asset. The
normalized record therefore keeps `main_image`, `thumbnail` and galleries
explicitly empty. This is the reason the product remains a non-public DRAFT;
the missing image is not silently replaced.

Other publish facts remain honest as well: project-owned inventory is
`UNKNOWN`, supplier name is `UNKNOWN`, and supplier colors/SKUs are not
confirmed. Supplier stock `AVAILABLE` remains a supplier claim, not owned
inventory.

## Product Master updates

`05_product/normalized/PAWFECTLY-PET-HAIR-REMOVER.json` now contains:

- `record_type=SELLABLE_PRODUCT`
- `record_status=DRAFT`
- `commerce.currency=USD`
- `commerce.selling_price=14.99`
- default variant `selling_price=14.99`
- `metadata.selling_price_status=CONFIRMED_BY_USER`
- `metadata.selling_price_confirmed=YES`
- `compare_at_price=null`
- one internal generic `Variant=Default` with stable SKU `PAW-PHR-001`

No supplier variant ID, owned quantity, HS verification, FTO result, origin or
production logistics fact was invented.

## Validation

```text
VALIDATION_RESULT=NEEDS_VERIFICATION
SCHEMA_VALID=YES
IMPORT_REQUIRED=PASS
PUBLISH_REQUIRED=BLOCKED
LOGISTICS_REQUIRED=NEEDS_VERIFICATION
SELLING_PRICE=PASS
```

The remaining `PUBLISH_REQUIRED` issues are publish/data-readiness facts, not
a return to sourcing selection. Sample/procurement/HS/FTO/dropship gates remain
separate from store integration.

## Local target

- `TARGET_MEDUSA_PROJECT=medusa-product-integration-a1b2c3`
- Database: `medusa_dtc@127.0.0.1:56332`
- Backend: `http://127.0.0.1:19600`
- Storefront: `http://127.0.0.1:18600`
- Region: United States / USD
- Volume: `medusa-product-integration-a1b2c3_pgdata`

The target is a fresh local Mother Template runtime and is not a historical
Medusa, Spree or benchmark database.

## Price update and read-back

Final explicit command:

```text
node 05_product/scripts/medusa-product-upsert.mjs --input 05_product/normalized/PAWFECTLY-PET-HAIR-REMOVER.json --template 03_template/medusa-crossborder-base --project-name medusa-product-integration-a1b2c3 --write
```

Final successful rerun output:

```text
MEDUSA_WRITE=PASS
PRODUCT_ID=prod_01M1JG54Z6PFY802QV32EJ174D
PRODUCT_STATUS=draft
HANDLE=pet-hair-remover
UPSERT_MODE=UPDATE_SAME_PRODUCT
UPSERT_IDEMPOTENCE=PASS
PRODUCT_COUNT_BEFORE=5
PRODUCT_COUNT_AFTER=5
PRODUCT_COUNT_DELTA=0
PRODUCT_COUNT_DELTA_AFTER_RERUN=0
DUPLICATE_VARIANTS=0
ADMIN_READBACK=PASS
STORE_READBACK=NOT_VISIBLE_EXPECTED_FOR_DRAFT
POSTGRES_READBACK=PASS
POSTGRES_PRODUCT_ROW=prod_01M1JG54Z6PFY802QV32EJ174D|pet-hair-remover|draft|1601855396569
POSTGRES_PRICE_ROW=usd|1499
PRICE_STATE=USD_1499_MINOR_UNITS
SELLING_PRICE_STATUS=CONFIRMED_BY_USER
```

Admin read-back confirmed the same Product ID, handle, DRAFT status, source
identity, internal SKU, generic option and `14.99 USD` price. PostgreSQL
confirmed the product row, one variant SKU and `usd|1499` price row. Because
the Product is DRAFT, its absence from the public Store API is expected.

## Explicit publish guard

`--publish` was tested against the current DRAFT and safely refused before any
write:

```text
MEDUSA_WRITE=BLOCKED
ERROR=Publish requires record_status=PUBLISHED after the publish gate has passed; no write attempted.
```

Publishing is therefore never implicit. It requires an updated record, a
passing Publish Gate and a separate explicit command after the exact source
image and remaining publish facts are available.

## Storefront scope

- `STORE_API=NOT_VISIBLE_EXPECTED`
- `PDP=NOT_ATTEMPTED`
- `CART=NOT_ATTEMPTED`

No UI, Figma, payment, production shipping, deployment, seed catalog or
historical order was changed. The local runtime remained available at the
recorded ports for review.

## Required next input

```text
USER_ACTION_REQUIRED=PROVIDE_OR_PLACE_SOURCE_PRODUCT_IMAGE
```

After the exact source image is placed in the project and the remaining
publish facts are reviewed, the record can be revalidated for explicit local
activation. This task does not return the product to the sourcing or selection
workflow.
