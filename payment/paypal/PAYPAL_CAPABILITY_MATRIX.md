# PayPal Capability Matrix

Status: `SCAFFOLD_IMPLEMENTED / ACCOUNT_AND_SANDBOX_EVIDENCE_REQUIRED`.

`NEEDS_VERIFICATION` means this project has not verified the capability for the
merchant account. It is not a claim that PayPal cannot provide the capability.

| Capability / gate | Required evidence | Current status |
|---|---|---|
| PayPal Business account | Legal-entity account confirmation | NEEDS_VERIFICATION |
| Merchant account eligibility | PayPal onboarding/account review | NEEDS_VERIFICATION |
| US/USD checkout | Account + official product/market confirmation | NEEDS_VERIFICATION |
| France/EUR checkout | Account + official product/market confirmation | NEEDS_VERIFICATION |
| Sandbox access | Sandbox account and credentials provisioned locally | NEEDS_VERIFICATION |
| Live access | Completed merchant approval and go-live review | NO |
| Create order/payment session | Medusa service + transport contract; no external call | LOCAL_CONTRACT_PASS / SCAFFOLD_ONLY |
| Customer approval / redirect | Safe data field and future return boundary | SCAFFOLD_ONLY |
| Payment status | Medusa service status mapping; external read-back deferred | SCAFFOLD_ONLY |
| Authorization/capture evidence reconciliation | Direct service status/retrieve checks; Order `COMPLETED` alone is never captured | LOCAL_CONTRACT_PASS / SCAFFOLD_ONLY |
| Authorization | Authorization ID returned and stored by the Medusa lifecycle method | LOCAL_CONTRACT_PASS / SCAFFOLD_ONLY |
| Capture | `captureAuthorization(authorization_id)` contract; no Order-ID capture | LOCAL_CONTRACT_PASS / SCAFFOLD_ONLY |
| Cancel/void | Medusa lifecycle method + transport contract | SCAFFOLD_ONLY |
| Full refund | Medusa lifecycle method + transport contract | SCAFFOLD_ONLY |
| Partial refund | Amount-bounded transport contract | SCAFFOLD_ONLY |
| Webhook/notification verification | Fail-closed verification boundary + v2 event mapping | SCAFFOLD_ONLY |
| Negative webhook core handling | Installed Medusa 2.19.0 subscriber source inspection | IGNORED_BY_CORE / APPLICATION_RECONCILIATION_REQUIRED |
| Idempotency | Opaque session + operation keys; refund keys include Medusa operation idempotency key | LOCAL_CONTRACT_PASS / SCAFFOLD_ONLY |
| Amount/currency consistency | Medusa cart comparison before finalization | REQUIRED |
| Medusa order ownership | Exactly-once order creation/read-back | REQUIRED |
| WorldFirst settlement receipt | Separate receiving-account confirmation | DEFERRED_TO_SETTLEMENT_REVIEW |

First-path configuration is `PAYPAL_PAYMENT_INTENT=AUTHORIZE` and
`PAYPAL_AUTO_CAPTURE=false`. Auto-capture is explicitly unsupported until a
separate review. This matrix does not authorize customer exposure, live credentials or real
money testing.
