# CB-PRODUCT-005R-FINAL-ASSET-UNIFICATION Validation

## Result

- `RESULT=PASS`
- `PRODUCT_ID=prod_01M1JG54Z6PFY802QV32EJ174D`
- `PRICE=14.99 USD`
- `PRODUCT_STATUS=published`
- `SKU=PAW-PHR-001`
- `PRODUCT_COUNT_DELTA=0`
- `DUPLICATE_VARIANTS=0`
- `NEW_ORDER_CREATED=NO`

## Asset unification

- `PRIMARY_IMAGE_SOURCE=LATEST_USER_UPLOADED_IMAGE`
- `PRIMARY_IMAGE_SHA256=FBA393D76A2291B4B152D4E0BCDF321B76F851C3614947D251959FC54A02D04E`
- `PRIMARY_IMAGE_SOURCE_PATH=05_product/assets/source/COMP-001-main-square.png`
- `STOREFRONT_PRIMARY_IMAGE_PATH=03_template/medusa-crossborder-base/apps/storefront/public/assets/products/COMP-001-main-square.png`
- `PRIMARY_IMAGE_DIMENSIONS=1254x1254`
- `OLD_WIDE_IMAGE_PRESERVED=YES`
- `OLD_WIDE_IMAGE_SHA256=846F986C3A32D0CC73C4247904EEB27F4942439159563FDBA91A879D315EEE5E`
- `OLD_WIDE_RUNTIME_COPY=REMOVED`
- `OLD_WIDE_IMAGE_CUSTOMER_VISIBLE=NO`
- `IMAGE_UNIFICATION=PASS`
- `IMAGE_CROPPING_ACCEPTABLE=PASS`

The latest user-provided image is the unchanged source asset and is used as
the product main image, thumbnail and primary PDP gallery image. The previous
wide image remains preserved as source/secondary evidence only. Existing cart
line state was refreshed through the normal remove and Add to Bag actions so
the current preview cart also carries the new product thumbnail; no order was
created.

## Customer-facing image ratios

Measured DOM geometry on the live local production storefront:

- `CUSTOMER_FACING_PRODUCT_IMAGE_RATIO=1:1`
- `HOMEPAGE_IMAGE_RATIO=1:1` - `.ph-product-media`, 1440/768/390
- `STORE_CARD_IMAGE_RATIO=1:1` - `.ph-catalog-card-media`, 1440/768/390
- `SEARCH_PRODUCT_LIST_IMAGE_RATIO=1:1` - same approved catalog card path
- `PDP_MAIN_IMAGE_RATIO=1:1` - measured 1440/768/390
- `PDP_THUMBNAIL_RATIO=1:1` - measured 1440/768; mobile gallery is hidden
- `MINI_CART_IMAGE_RATIO=1:1` - measured 96x96 at 1440
- `CART_IMAGE_RATIO=1:1` - measured 92x92 at 1440/768 and 72x72 at 390
- `CHECKOUT_ENTRY_IMAGE_RATIO=1:1` - measured 92x92 at 1440/768 and 72x72 at 390

## Catalog and semantics

- `REAL_CATALOG_FILTER=PASS`
- `REAL_CATALOG_APPROVAL_KEY=pawfectly_store_integration_approved_by_user=YES`
- `SEED_PRODUCTS_CUSTOMER_VISIBLE=NO`
- `SEED_PRODUCTS_PRESERVED=YES`
- `INVENTORY_TEXT=AVAILABLE_TO_ORDER`
- `SUPPLIER_STOCK_CLAIM=AVAILABLE`
- `PROJECT_OWNED_INVENTORY=UNKNOWN`
- `MEDUSA_MANAGE_INVENTORY=false`
- `UNSUPPORTED_SHIPPING_PROMISES_ADDED=NO`

The reusable storefront metadata boundary keeps unrelated Medusa seed
products out of the normal customer catalog without deleting technical seed
records. Non-inventory-managed local preview remains labelled `Available to
order`; it is not presented as owned stock.

## API and runtime verification

- `TARGET_MEDUSA_PROJECT=medusa-product-integration-a1b2c3`
- `TARGET_DATABASE=medusa_dtc@127.0.0.1:56332`
- `ADMIN_API=PASS`
- `STORE_API=PASS`
- `POSTGRESQL=PASS`
- `STORE_API_IMAGE=/assets/products/COMP-001-main-square.png`
- `POSTGRES_IMAGE=/assets/products/COMP-001-main-square.png`
- `PDP=PASS`
- `MINI_CART=PASS`
- `CART=PASS`
- `CHECKOUT_ENTRY=PASS`
- `ADD_TO_BAG=PASS`
- `TYPESCRIPT=PASS`
- `PRODUCTION_BUILD=PASS`
- `HORIZONTAL_OVERFLOW=0`
- `CONSOLE_ERRORS=0`
- `BROKEN_IMAGES=0`

Routes checked with live US/USD data:

- `/us`
- `/us/store`
- `/us/products/pet-hair-remover`
- `/us/cart`
- `/us/checkout?step=address`

Evidence was captured at 1440, 768 and 390 CSS-pixel viewports. Every tested
route reported the square source image and zero old-wide image references.
The storefront rendered the real title and `$14.99`, while PDP availability
rendered `Available to order`.

## Scope boundary

- `NEW_PRODUCT_CREATED=NO`
- `NEW_ORDER_CREATED=NO`
- `PRICE_CHANGED=NO`
- `PAYMENT_CONFIGURATION_CHANGED=NO`
- `LOGISTICS_CONFIGURATION_CHANGED=NO`
- `UI_DESIGN_REDESIGNED=NO`
- `FIGMA_CHANGED=NO`

This micro-polish changes only the approved source asset reference, customer-
facing product-image ratio enforcement and the already-established catalog /
availability presentation behavior.
