# Payment Test Matrix

Status: `DEFINED / PAYPAL_SCAFFOLD_CONTRACT_TESTED / NO_EXTERNAL_CALLS`.

| Test | Required before live |
|---|---|
| Provider available only in intended region/currency | YES |
| Session initiation | YES |
| Successful payment authorization/confirmation | YES |
| Capture/settlement transition where applicable | YES |
| Declined payment | YES |
| Failed payment retry | YES |
| Redirect / 3DS return if applicable | YES |
| Double-click / duplicate submit protection | YES |
| Webhook/callback signature validation | YES |
| Webhook replay idempotency | YES |
| One cart -> exactly one Medusa order | YES |
| Charged amount equals Medusa order amount | YES |
| Currency equals Medusa order currency | YES |
| Cancel/void where supported | YES |
| Full refund | YES |
| Partial refund | YES |
| Provider/Admin/PostgreSQL/order read-back | YES |
| No secret leakage in logs/UI/package | YES |
| Desktop + mobile checkout regression | YES |
| Existing technical System Payment smoke remains isolated | YES |

Current gateway decision:

- `PRIMARY_CHECKOUT_CANDIDATE=PAYPAL`
- `PAYPAL_SANDBOX_PAYMENT_ENABLED=NO`
- `PAYPAL_PROVIDER_ENABLED=NO`
- `WORLDFIRST_MODE=WORLDFIRST_COLLECTION_ACCOUNT`
- `CHECKOUT_GATEWAY_REQUIRED=YES`

No real-money test is authorized by this matrix.
