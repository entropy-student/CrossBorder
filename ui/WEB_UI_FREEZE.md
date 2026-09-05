# Pawfectly Home Web UI Freeze

`WEB_UI_FREEZE=PASS`

## Source of truth

`FIGMA_SOURCE_OF_TRUTH=https://www.figma.com/design/pnt82TByaLXSRlHhiQdgLo`

Approved sources: 01B, 03D, 04D, 05B, 06B, 07B, 08C, 10, and 11.

## Implemented routes

- `/{countryCode}` - Homepage (`/us` verified)
- `/{countryCode}/store` - Collection/Search (`/us/store` verified)
- `/{countryCode}/products/{handle}` - PDP (`/us/products/sweatshirt` verified)
- `/{countryCode}/cart` - Cart (`/us/cart` verified)
- `/{countryCode}/checkout` - Existing Medusa Checkout (`/us/checkout` verified)

## Supported breakpoints

`1440`, `1024`, `768`, and `390` CSS px were checked. Visible document horizontal overflow is zero at each breakpoint on the core routes.

## Asset replacement contract

`ASSET/*` slots remain neutral until approved lifestyle assets are supplied. Product images, titles, prices, variants, availability, currency and cart data remain Medusa-driven.

`REAL_PRODUCT_ASSET_REPLACEMENT_READY=YES`

## Commerce boundary

The UI consumes the existing Medusa Region, currency, product, variant, inventory, cart, shipping, payment and checkout contracts. No commerce semantics were redesigned in final QA.

## Known deferred constraints

- `KNOWN_P2_CONTENT_DEBT=Dog/Cat/Collections/New arrivals/Journal remain safe generic destinations until real taxonomy/content exists.`
- `CSS_DEBT_AFTER_CLEANUP=12 !important declarations remain; mixed legacy stylesheet debt is P2 and deferred to a separately scoped maintenance pass.`
- `KNOWN_RUNTIME_TEST_PROVIDER=System/Manual local test payment only.`
- `REAL_PAYMENT_NOT_CONFIGURED=YES`
- `REAL_PRODUCT_DATA_NOT_FINAL=YES` (current data is the verified seed catalog; production Pawfectly SKUs are future content work.)

## Change policy

Future material UI changes must update the approved Figma source first and repeat visual QA before implementation is accepted.

