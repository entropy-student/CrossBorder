# WorldFirst Capability Matrix

Status: `COLLECTION_ACCOUNT_LOCKED / GLOBAL_CHECKOUT_DEFERRED`.

`UNKNOWN` means no evidence was supplied or verified in this task. It is not a negative eligibility decision.

| Capability / gate | Collection account | Global Checkout | Evidence required | Current status |
|---|---|---|---|---|
| Receives settlement funds | Current account path | Future path | Account/product confirmation | PASS for collection path |
| Customer card checkout | No | Possible in a future eligible account | Official merchant/product confirmation | NOT_AVAILABLE_CURRENT_ACCOUNT / DEFERRED |
| Separate gateway required | YES | Not necessarily | Architecture/account confirmation | PASS for collection path |
| Merchant eligibility | Current account confirmed for settlement | Future account/product-specific | WorldFirst onboarding confirmation | COLLECTION_ACCOUNT_PASS / GLOBAL_CHECKOUT_DEFERRED |
| US/USD support | Through chosen gateway | Must be verified | Official capability/account evidence | UNKNOWN |
| France/EUR support | Through chosen gateway | Must be verified | Official capability/account evidence | UNKNOWN |
| Create payment/session API | Owned by gateway | Must be verified | Official API/SDK/hosted docs | UNKNOWN |
| Status query | Gateway | Must be verified | Official API docs | UNKNOWN |
| Authorization/capture | Gateway | Must be verified | Official API docs | UNKNOWN |
| Cancel/void | Gateway | Must be verified | Official API docs | UNKNOWN |
| Full/partial refund | Gateway | Must be verified | Official API docs | UNKNOWN |
| Signed webhook/notification | Gateway | Must be verified | Signature specification + test | UNKNOWN |
| Idempotency | Gateway | Must be verified | Header/field semantics + test | UNKNOWN |
| Hosted/embedded checkout | Gateway | Must be verified | Integration method + return flow | UNKNOWN |
| Sandbox/test environment | Gateway | Must be verified | Sandbox account/access | UNKNOWN |
| PCI/card-data boundary | Gateway | Must be verified | Hosted/SDK/security documentation | UNKNOWN |
| External order ownership | Must not replace Medusa | Must not replace Medusa | Order-correlation design | REQUIRED_MEDUSA_SOURCE_OF_TRUTH |

This matrix does not authorize implementation or live credentials. Current
mode is `WORLDFIRST_COLLECTION_ACCOUNT`; Global Checkout is
`NOT_AVAILABLE_CURRENT_ACCOUNT / DEFERRED`.
