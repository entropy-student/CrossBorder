# WorldFirst Settlement

The current account is locked to:

- `SETTLEMENT_PROVIDER=WORLDFIRST`
- `WORLDFIRST_MODE=WORLDFIRST_COLLECTION_ACCOUNT`
- `WORLDFIRST_GLOBAL_CHECKOUT=NOT_AVAILABLE_CURRENT_ACCOUNT / DEFERRED`
- `CHECKOUT_GATEWAY_REQUIRED=YES`

WorldFirst is the receiving/settlement, FX and withdrawal layer for funds
collected by a separately approved gateway. It does not provide the customer
card/checkout flow for the current account. Global Checkout remains a future
eligibility-dependent path, not a permanent business impossibility.

No WorldFirst API was called, no credentials are committed and no production
settlement or withdrawal is configured.

See the [WorldFirst integration contract](worldfirst/WORLDFIRST_INTEGRATION_CONTRACT.md)
and [capability matrix](worldfirst/WORLDFIRST_CAPABILITY_MATRIX.md).
