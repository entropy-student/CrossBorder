# CB-PRODUCT-005R-FINAL - Storefront Activation Validation

Date: 2026-09-03

## Result

SOURCE_IMAGE=PASS
PUBLISH_GATE=PASS
PURCHASABILITY=PASS
MEDUSA_WRITE=PASS
PRODUCT_STATUS=published (local Mother Template preview runtime)
NEW_ORDER_CREATED=NO

The approved user-provided image was ingested as the exact source asset. No
internet lookalike or AI-generated substitute was used.

## Canonical product

PRODUCT_ID=prod_01M1JG54Z6PFY802QV32EJ174D
SAME_PRODUCT_ID=YES
HANDLE=pet-hair-remover
SKU=PAW-PHR-001
TITLE=Reusable Self-Cleaning Pet Hair Remover
PRICE=14.99 USD
PRICE_CONFIRMED_BY_USER=YES
DUPLICATE_VARIANTS=0

The source and storefront asset copies are byte-identical:

- `05_product/assets/source/COMP-001-source-product-clean.png`
- `03_template/medusa-crossborder-base/apps/storefront/public/assets/products/COMP-001-source-product-clean.png`
- SHA256=`846F986C3A32D0CC73C4247904EEB27F4942439159563FDBA91A879D315EEE5E`

The frozen Mother Template uses Medusa amounts in currency units in its
migration seed, Store API and storefront formatter. Therefore the verified
raw Store API price is `usd|14.99`, rendered by the storefront as `$14.99`.
This is the project's existing runtime convention, not an invented compare-at
price or a changed currency contract.

## Validation and write evidence

PRODUCT_VALIDATION=NEEDS_VERIFICATION (5 logistics-only issues)
IMPORT_REQUIRED=PASS
PUBLISH_REQUIRED=PASS
LOGISTICS_REQUIRED=NEEDS_VERIFICATION
ADMIN_API=PASS
POSTGRESQL=PASS
STORE_API=PASS
UPSERT_IDEMPOTENCE=PASS
UPSERT_MODE=UPDATE_SAME_PRODUCT
PRODUCT_COUNT_DELTA_AFTER_RERUN=0

POSTGRES_PRODUCT_ROW=`prod_01M1JG54Z6PFY802QV32EJ174D|pet-hair-remover|published|/assets/products/COMP-001-source-product-clean.png|1601855396569`
POSTGRES_PRICE_ROW=`usd|14.99`
STORE_API_RAW_PRICE=`usd|14.99`
STORE_API_IMAGE=`/assets/products/COMP-001-source-product-clean.png`
STORE_PUBLICATION=PUBLISHED_CONFIRMED_BY_ADMIN_POSTGRES

The two explicit local runs used `--write --publish` against the same target;
the second run updated the same product without increasing product count or
creating a variant duplicate. No catalog reset and no historical order
mutation was performed.

## Inventory and sourcing boundary

SUPPLIER_STOCK_CLAIM=AVAILABLE (SUPPLIER_CLAIM)
PROJECT_OWNED_INVENTORY=UNKNOWN
LOCAL_PREVIEW_AVAILABILITY=YES
MEDUSA_VARIANT_MANAGE_INVENTORY=false
SOURCING_LOGISTICS_HS_FTO_ORIGIN_DROPSHIP=NEEDS_VERIFICATION_OR_UNKNOWN

`LOCAL_PREVIEW_AVAILABILITY` is explicit local preview semantics. It does not
claim that the project owns stock or that production fulfillment is ready.

## Storefront QA

PDP=PASS
MINI_CART=PASS (desktop overlay)
CART=PASS
CHECKOUT_ENTRY=PASS (stopped before order placement)

Verified with the real published product and configured origin
`http://localhost:18600`:

- `/us/store` showed the product, `$14.99`, the approved image and the correct
  product link.
- `/us/products/pet-hair-remover` showed the real title, `$14.99`, image,
  availability and Add to Bag.
- Add to Bag updated the real Bag count and Mini Cart; Cart showed the same
  line and subtotal.
- Cart quantity `1 -> 2 -> 1` updated subtotal `$14.99 -> $29.98 -> $14.99`.
- Checkout entry displayed the real line and total; testing stopped before
  payment or order placement.

RESPONSIVE_1440_OVERFLOW=PASS
RESPONSIVE_1024_OVERFLOW=PASS
RESPONSIVE_768_OVERFLOW=PASS
RESPONSIVE_390_OVERFLOW=PASS
BROKEN_IMAGES=0
CONSOLE_ERRORS=0

The initial `127.0.0.1` browser attempt was discarded as evidence because it
did not match the configured `localhost` CORS origin. The final clean-origin
run was error-free. No new commerce order was created by this task.

## Runtime and safety

TARGET_MEDUSA_PROJECT=medusa-product-integration-a1b2c3
TARGET_DATABASE=medusa_dtc@127.0.0.1:56332
TARGET_REGION=United States / USD (`reg_01M1JFCMTE0655N7Y3XG8XZD8W`)
BACKEND=http://localhost:19600
STOREFRONT=http://localhost:18600
PRODUCTION_BUILD=PASS (Next.js 15.5.21; `corepack pnpm@10.11.1 build` exit 0)
TYPESCRIPT_CHECK=PASS (`corepack pnpm@10.11.1 exec tsc --noEmit`; Node adapter syntax checks also PASS)

No UI/Figma changes, payment-provider changes, production shipping changes,
deployment, historical database/order changes or Spree changes were made.

## Evidence files

Screenshots and runtime evidence are under
`05_product/evidence/CB-PRODUCT-005R-FINAL/`.

The remaining blocker is not storefront activation: supplier provenance,
project-owned inventory, complete physical packaging facts, country of origin
and logistics/HS/FTO facts remain separately unverified.
