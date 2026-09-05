# CB-UI-DEV-003 Checkout Functional QA

Environment: production Next runtime at `http://localhost:8000`, Medusa backend at `http://localhost:9000`, US/USD region, real cart line item, existing `US Standard Shipping`, and existing System/Manual Payment provider.

## Guard and stage checks

| Check | Evidence | Result |
|---|---|---|
| Address stage | `/us/checkout?step=address` showed live address fields and a disabled/guarded progression until valid input | PASS |
| Missing address guard | Submitting the empty address form kept the URL at the address step | PASS |
| Address saved | Test address was accepted; checkout summary showed country `US` and contact data | PASS |
| Shipping options | Live `US Standard Shipping` rendered at `$10.00` | PASS |
| No shipping selection guard | Continue-to-payment stayed disabled until the live shipping option was selected | PASS |
| Shipping selected | Delivery summary showed `US Standard Shipping $10.00`; cart total became `$20.00` | PASS |
| Payment options | Live `Manual Payment` option rendered from the existing payment collection | PASS |
| No payment selection guard | Continue-to-review remained disabled until the payment option was selected | PASS |
| Payment selected | Review stage showed `Manual Payment` | PASS |
| Review | Existing review stage displayed live contact, delivery, payment and cart totals | PASS |
| Double-submit protection | Existing `PaymentButton` uses its submitting/loading state to disable the Place Order button while `placeOrder` is pending | PASS |

## Data honesty

The review copy was changed to a neutral confirmation of the entered contact, shipping, delivery, and payment details. No delivery SLA, return promise, free-shipping threshold, fabricated review, tax value, discount, or payment method was added. `FreeShippingPriceNudge` remains data-driven and was not visible because the current configuration did not expose a zero-price shipping rule.

## Checkout order

Exactly one new UI checkout smoke order was created:

- Order ID: `order_01M1GPCBKTY023ZS1VG4P2MDG3`
- Display ID: `4`
- Currency: `USD`
- Shipping country: `US`
- Shipping method: `US Standard Shipping`
- Payment provider: `pp_system_default`
- Total: `20`
- Storefront confirmation: `/us/order/order_01M1GPCBKTY023ZS1VG4P2MDG3/confirmed`

The order was not deleted or reset.
