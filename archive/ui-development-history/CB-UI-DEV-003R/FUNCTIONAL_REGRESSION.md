# CB-UI-DEV-003R Functional Regression

## Environment

- Storefront: production Next runtime on `http://localhost:8000`
- Backend: production Medusa runtime on `http://localhost:9000`, started from `.medusa/server`
- Region/currency: existing US / USD configuration
- Toolchain: project Corepack pnpm `10.11.1`, Next `15.5.21`
- No new order was created in CB-UI-DEV-003R.

## Regression checks

| Check | Evidence | Result |
|---|---|---|
| Checkout brand | Address and Review DOM expose link `Pawfectly Home`; mobile exposes `Back` | PASS |
| Address stage | `/us/checkout?step=address` loaded with existing address form and existing saved values | PASS |
| Shipping stage | `/us/checkout?step=delivery` loaded with existing `US Standard Shipping` path | PASS |
| Payment stage | `/us/checkout?step=payment` loaded the existing `Manual Payment` option | PASS |
| Review stage | `/us/checkout?step=review` loaded the existing review stage and Edit controls | PASS |
| Mobile Review stack | At 390px, summary blocks had separate vertical bounds: Shipping Address `y=561.7..677.7`, Contact `y=695.7..766.9`, Billing Address `y=784.9..833.7`; no intersection | PASS |
| Long text safety | Mobile summary text uses `overflow-wrap:anywhere` and `word-break:break-word` | PASS |
| Delivery / Payment mobile | Delivery, Payment, and Review route checks all reported no document overflow and zero browser error logs | PASS |
| Cart | `/us/cart` rendered the live Empty Cart state with `Bag 0`; prior CB-UI-DEV-003 live Cart mutation evidence remains preserved | PASS |
| Sign-in single line | `.ph-cart-signin-button` is scoped with `white-space: nowrap`; conditional control is absent in the current empty Cart state | PASS |
| Browser console | Tested Checkout and Cart routes returned zero error-level browser logs | PASS |
| Backend untouched | No backend, payment, shipping, region/currency, Cart action, or order code changed | PASS |

## Build

- `corepack pnpm@10.11.1 exec tsc --noEmit` -> exit `0` (`8.6s`)
- `corepack pnpm@10.11.1 build` -> exit `0`, Next `15.5.21`, static generation `70/70` (`40.1s`)
- Storefront production runtime started with `corepack pnpm@10.11.1 start` -> ready on port `8000`
- Existing production backend restarted from `.medusa/server` after Docker Desktop was resumed; PostgreSQL container `crossborder-medusa-postgres-1` returned healthy and historical data was preserved.

## Scope boundary

No order placement, database reset, volume operation, Cart/Checkout commerce rewrite, Final QA, or next UI slice was started.
