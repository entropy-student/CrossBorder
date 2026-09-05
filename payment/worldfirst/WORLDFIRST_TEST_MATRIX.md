# WorldFirst Sandbox Test Matrix

Status: `DEFINED / NOT_EXECUTED`; `REAL_MONEY_TEST=NO`.

Run only after a verified sandbox contract and merchant eligibility decision.

| Test | Expected evidence |
|---|---|
| Sandbox credentials and environment separation | Live mode cannot be selected accidentally |
| US/USD session creation | Provider session maps to one Medusa payment session |
| France/EUR session creation | Provider currency/market capability is verified |
| Pending/status re-read | Internal state maps to `PENDING` without order creation |
| Successful authorization | `AUTHORIZED`, amount/currency match |
| Capture/settlement | `CAPTURED` only after verified provider response |
| Decline | `FAILED`, cart remains retryable |
| Failure and retry | Same cart can retry without duplicate charge |
| Duplicate submit | One idempotency key / no duplicate transaction |
| Redirect/return | Same-origin, signed/verified result |
| Webhook signature invalid | Event rejected, no order finalization |
| Webhook duplicate | Event idempotent, no duplicate transition/order |
| Amount mismatch | Capture/order blocked |
| Currency mismatch | Capture/order blocked |
| Cancel/void | `CANCELLED` where supported |
| Full refund | `REFUNDED` and Medusa read-back match |
| Partial refund | `PARTIALLY_REFUNDED` and amount match |
| Exactly-once order correlation | One provider transaction -> one Medusa order |
| Admin/PostgreSQL read-back | Cart/payment/order/provider IDs reconcile |
| Logs/UI/package secret scan | No credential leakage |

The collection-account path additionally requires a separate gateway test matrix. WorldFirst settlement receipt alone is not checkout proof.
