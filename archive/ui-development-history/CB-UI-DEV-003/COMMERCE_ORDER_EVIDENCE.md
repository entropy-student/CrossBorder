# CB-UI-DEV-003 Commerce Order Evidence

## Storefront confirmation

Production storefront confirmation page returned HTTP success and showed:

- Order ID `order_01M1GPCBKTY023ZS1VG4P2MDG3`
- Order number `4`
- Total `$20.00`
- Shipping address country `US`
- `US Standard Shipping ($10.00)`
- `Manual Payment`

## Admin API re-read

Admin authentication was performed with the existing local-only credential without recording its value. The read-only Admin API request returned HTTP `200` for:

`GET /admin/orders/order_01M1GPCBKTY023ZS1VG4P2MDG3?fields=*`

The response returned the same order ID, display ID `4`, total `20`, shipping country `us`, shipping method `US Standard Shipping`, and payment provider `pp_system_default`. The Admin order response exposes the region relation rather than a direct currency field; the associated read-only request to the returned region ID returned HTTP `200` with `currency_code=usd`.

## PostgreSQL re-read

Read-only SQL through the existing Medusa PostgreSQL container `crossborder-medusa-postgres-1` returned:

`order_01M1GPCBKTY023ZS1VG4P2MDG3|4|usd|us|20|US Standard Shipping|pp_system_default`

This matches the Storefront confirmation and Admin API evidence for identity, display number, currency, country, total, shipping method, and payment provider.

No historical order or database volume was deleted, reset, or reused as evidence for this order beyond the already-running Medusa local environment.
