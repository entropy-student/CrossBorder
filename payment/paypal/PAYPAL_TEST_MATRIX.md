# PayPal Readiness Test Matrix

Status: `LOCAL_CONTRACT_PASS / SCAFFOLD_ONLY / NO_EXTERNAL_CALLS`.

All tests below require verified merchant/sandbox access before execution.
`REAL_MONEY_TEST=NO` for this readiness task.

| Test | Expected evidence | Current status |
|---|---|---|
| Customer exposure with no config | PayPal hidden; no usable CTA | PASS via fail-closed source gate |
| Sandbox credentials missing | No provider session; safe error | PASS — enabled registration rejects incomplete config |
| Create payment/session | One PayPal transaction correlated to one opaque Medusa session | LOCAL_CONTRACT_PASS — injected fake transport only |
| Customer approval / redirect | Valid return state only | NOT_EXECUTED |
| Success authorization | Authorization ID and amount/currency match | LOCAL_CONTRACT_PASS — injected fake transport only |
| Capture where supported | Capture by authorization ID | LOCAL_CONTRACT_PASS — injected fake transport only |
| Capture declined (Payments v2) | Cart remains retryable; no order | SANDBOX_REQUIRED |
| Failure + retry | No duplicate provider transaction/order | NOT_EXECUTED |
| Cancel / return cancel | Cart remains unpaid and retryable | LOCAL_CONTRACT_PASS — cancel/void transport contract only |
| Duplicate submit | One provider transaction and one order maximum | NOT_EXTERNALLY_PROVEN — local key contract only |
| Webhook verification | Invalid signature rejected | LOCAL_CONTRACT_PASS — fail-closed verification gate |
| Webhook replay | Duplicate event is harmless | NOT_EXTERNALLY_PROVEN / SANDBOX_REQUIRED |
| Amount mismatch | Finalization blocked | LOCAL_CONTRACT_PASS — injected transport only |
| Currency mismatch | Finalization blocked | LOCAL_CONTRACT_PASS — injected transport only |
| Full refund completed | Provider and Medusa read-back match | SANDBOX_REQUIRED |
| Refund pending | No fake completion; safe pending state | SANDBOX_REQUIRED |
| Refund failed | Safe failure and retry state | SANDBOX_REQUIRED |
| Repeated logical refund | Same provider idempotency key; no duplicate refund | NOT_EXTERNALLY_PROVEN / SANDBOX_REQUIRED |
| Two distinct partial refunds | Distinct keys and cumulative amount safety | SANDBOX_REQUIRED |
| Admin/PostgreSQL read-back | IDs, amount, currency and order match | SANDBOX_REQUIRED |
| WorldFirst receiving path | Separate settlement confirmation | DEFERRED |

No test in this matrix authorizes live checkout or real-money charging.

The canonical Payments v2 actionable webhook set is authorization-created,
authorization-voided, capture-completed and capture-declined. The
`PAYMENT.CAPTURE.DENIED` spelling is only a legacy Payments v1 compatibility
alias. The order-approved event is `NOT_SUPPORTED` in this first AUTHORIZE
path. Real authorization, capture, duplicate-submit, webhook replay and all
refund outcomes require sandbox evidence; no external payment was executed
here. Local contract tests are not external payment PASS.
