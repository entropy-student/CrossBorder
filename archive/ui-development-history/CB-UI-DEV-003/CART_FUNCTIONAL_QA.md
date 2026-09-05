# CB-UI-DEV-003 Cart Functional QA

Environment: production Next runtime at `http://localhost:8000`, backend at `http://localhost:9000`, existing US/USD region, real seeded Medusa Sweatshirt variant `S`.

| Check | Evidence | Result |
|---|---|---|
| Real product added from PDP | Product route showed live `Medusa Sweatshirt`, option `S`, calculated `$10.00`; Bag updated to 1 after server action settled | PASS |
| Bag count | Header showed `Bag 1` from the live cart | PASS |
| Mini Cart | Desktop hover popover showed live thumbnail, title, `Variant: S`, quantity `1`, `$10.00`, live subtotal, View your bag, and Checkout | PASS |
| Open Cart | `/us/cart` rendered `Your bag` with the same live item | PASS |
| Increase quantity | Existing `updateLineItem` action changed quantity `1 -> 2`; line total and cart state updated after the completed action refreshed the route | PASS |
| Decrease quantity | Existing `updateLineItem` action changed quantity `2 -> 1`; line total and cart state updated after the completed action refreshed the route | PASS |
| Remove item | Existing `deleteLineItem` action removed the line and the completed action refreshed the route | PASS |
| Empty Cart | Empty cart state rendered after removal | PASS |
| Re-add item | Same real PDP variant was added again for checkout and screenshot evidence | PASS |
| Live totals | Unit price, line total, subtotal, shipping, taxes and total remained rendered from the Medusa cart | PASS |
| Discount control | Existing `DiscountCode` component remains available; no fake discount was displayed | PASS |
| Checkout CTA | `Continue to checkout` points to the existing localized checkout route | PASS |

No cart API, pricing, inventory, shipping, payment, or checkout semantics were reimplemented. Only the presentation wrapper and the quantity control presentation were changed; quantity updates and removal still call the existing `updateLineItem` and `deleteLineItem` server actions.
