# CB-PRODUCT-005R-PREPAYMENT-POLISH Validation

## Result

- `RESULT=PASS`
- `NEW_ORDER_CREATED=NO`
- `MEDUSA_WRITE=PASS` - the existing local product was updated twice with
  `--write --publish`; no catalog reset or order mutation was performed.

## Product and asset

- `PRODUCT_ID=prod_01M1JG54Z6PFY802QV32EJ174D`
- `PRODUCT_STATUS=published`
- `HANDLE=pet-hair-remover`
- `SKU=PAW-PHR-001`
- `PRICE=14.99 USD`
- `PRODUCT_COUNT_DELTA=0`
- `DUPLICATE_VARIANTS=0`
- `PRIMARY_IMAGE_1X1=PASS`
- `SOURCE_IMAGE_SHA256=B9E5EB9ACDDE58D314570028BAB5DF20CD980AC4F57D440537B814C1E70178AE`
- `SOURCE_IMAGE_PATH=05_product/assets/source/COMP-001-main-square.png`
- `OLD_WIDE_ASSET_PRESERVED=YES`
- `OLD_WIDE_ASSET_SHA256=846F986C3A32D0CC73C4247904EEB27F4942439159563FDBA91A879D315EEE5E`
- `OLD_WIDE_ASSET_ROLE=SECONDARY_LIFESTYLE_ASSET`

The square source image is preserved unchanged and is attached as the
product main image, thumbnail and primary gallery image. The previous wide
source image remains in the project and is not used as the primary image.

## Catalog and inventory semantics

- `REAL_CATALOG_FILTER=PASS`
- `REAL_CATALOG_APPROVAL_KEY=pawfectly_store_integration_approved_by_user=YES`
- `SEED_PRODUCTS_CUSTOMER_VISIBLE=NO`
- `SEED_PRODUCTS_PRESERVED=YES`
- `INVENTORY_DISPLAY=AVAILABLE_TO_ORDER`
- `SUPPLIER_STOCK_CLAIM=AVAILABLE`
- `PROJECT_OWNED_INVENTORY=UNKNOWN`
- `LOCAL_PREVIEW_AVAILABILITY=YES`
- `MEDUSA_MANAGE_INVENTORY=false`

The storefront boundary is reusable: customer catalog products must carry the
approved-integration metadata flag. Seed catalog records were not deleted and
remain available to technical/runtime use, but do not appear in the normal
customer product listing. The storefront no longer calls a non-inventory-
managed preview variant “In stock”.

## API and database readback

- `ADMIN_API=PASS`
- `STORE_API=PASS`
- `POSTGRESQL=PASS`
- `UPSERT_IDEMPOTENCE=PASS`
- `UPSERT_RUN_1=UPDATE_SAME_PRODUCT`
- `UPSERT_RUN_2=UPDATE_SAME_PRODUCT`
- `STORE_API_PRODUCT=prod_01M1JG54Z6PFY802QV32EJ174D`
- `STORE_API_HANDLE=pet-hair-remover`
- `STORE_API_PRICE=USD 14.99`
- `STORE_API_IMAGE=/assets/products/COMP-001-main-square.png`
- `POSTGRES_PRODUCT_STATUS=published`
- `POSTGRES_PRODUCT_IMAGE=/assets/products/COMP-001-main-square.png`

The local runtime represents the frozen template’s USD amount convention as
`usd|14.99` in readback, while the storefront renders `$14.99`. This is the
existing runtime convention, not a change to the product price contract.

## Storefront regression

- `PDP=PASS`
- `MINI_CART=PASS`
- `CART=PASS`
- `CHECKOUT_ENTRY=PASS`
- `ADD_TO_BAG=PASS`
- `PRODUCT_TITLE=PASS`
- `PRICE_14_99=PASS`
- `PRIMARY_IMAGE_ASPECT=1:1`
- `IMAGE_CROPPING=PASS`
- `BROKEN_IMAGES=0`
- `HORIZONTAL_OVERFLOW=0`
- `CONSOLE_ERRORS=0`

Verified routes and states use the live local US/USD runtime:

- `/us/store` shows the approved real product only.
- `/us/products/pet-hair-remover` renders the square product image, title,
  `$14.99`, and `Available to order`.
- Real Add to Bag state is reflected in the Bag count, Mini Cart, and Cart.
- Mini Cart shows the real image, product, quantity, subtotal and Checkout
  action.
- `/us/checkout?step=address` is reachable from the real cart without
  placing a new order.

Responsive checks passed at 1440, 768 and 390 CSS pixels for the tested store,
PDP, cart and checkout-entry states. Evidence screenshots are in:
`05_product/evidence/CB-PRODUCT-005R-PREPAYMENT-POLISH/`.

## Build and scope boundary

- `TYPESCRIPT=PASS` (`corepack pnpm@10.11.1 exec tsc --noEmit`)
- `PRODUCTION_BUILD=PASS` (`corepack pnpm@10.11.1 build`)
- `NODE_VERSION=existing project toolchain`
- `REAL_PAYMENT=NOT_CONFIGURED`
- `PRODUCTION_LOGISTICS=NOT_CONFIGURED`
- `UI_DESIGN_CHANGED=NO`
- `FIGMA_CHANGED=NO`
- `NEW_PRODUCT_CREATED=NO`
- `NEW_ORDER_CREATED=NO`

The product validator remains `NEEDS_VERIFICATION` only for independent
logistics facts (complete dimensions/package data, origin and HS verification).
Those facts are not storefront publication blockers under the current user-
supplied-product integration policy.
