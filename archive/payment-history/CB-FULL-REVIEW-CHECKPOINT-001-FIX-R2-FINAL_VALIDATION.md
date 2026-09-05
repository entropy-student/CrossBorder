# CB-FULL-REVIEW-CHECKPOINT-001-FIX-R2-FINAL

Result: `PASS` for the local Round-2 finding-closure scope. No PayPal or
WorldFirst API was called, no credentials were requested or committed, and no
customer PayPal exposure was enabled.

## Current payment boundary

```text
SETTLEMENT_PROVIDER=WORLDFIRST
WORLDFIRST_MODE=WORLDFIRST_COLLECTION_ACCOUNT
CHECKOUT_GATEWAY_REQUIRED=YES
PRIMARY_CHECKOUT_CANDIDATE=PAYPAL
PAYPAL_PAYMENT_INTENT=AUTHORIZE
PAYPAL_AUTO_CAPTURE=false
PAYPAL_PROVIDER_ENABLED=NO
PAYPAL_CUSTOMER_EXPOSURE=DISABLED
SYSTEM_PAYMENT=TECHNICAL_TEST ONLY
```

The runtime implementation remains the Medusa 2.19.0 Payment Module /
`AbstractPaymentProvider`. The provider-neutral adapter is reference-only.
The implementation is aligned with the [official Medusa PayPal integration
guide](https://docs.medusajs.com/resources/integrations/guides/paypal) and
[Payment Provider contract](https://docs.medusajs.com/resources/commerce-modules/payment/payment-provider).

## Closed findings

| Finding | Result | Evidence |
|---|---|---|
| Authorize status reconciliation | `PASS` | Direct `getPaymentStatus()` and `retrievePayment()` tests prove `COMPLETED + authorization_id -> authorized`, `COMPLETED + capture_id -> captured`, `COMPLETED` without evidence -> `pending`, and `APPROVED` without authorization evidence -> `pending_authorization`. Order status alone never produces `captured`. |
| Payments v2 decline event | `PASS` | Canonical mapper/test uses `PAYMENT.CAPTURE.DECLINED -> failed`. `PAYMENT.CAPTURE.DENIED` remains only an explicit legacy v1 alias. `CHECKOUT.ORDER.APPROVED -> not_supported`. |
| Template credentials | `PASS` | Actual backend template now leaves PayPal credentials blank. `medusa-config.ts` rejects enabled registration with absent or sentinel credentials before module registration; provider option validation repeats the fail-closed check. |
| Installed Medusa negative webhook behavior | `IGNORED_BY_CORE` | Installed source `node_modules/.pnpm/@medusajs+medusa@2.19.0.../dist/subscribers/payment-webhook.js:22-31` returns for `canceled` and `failed` before `processPaymentWorkflow` at line 34. No Medusa core patch was made. Application reconciliation and a sandbox gate remain required before customer exposure. |
| Async refunds | `PASS` as contract note | Local tests retain amount bounds and operation-key separation only. Completed, pending, failed, repeated, distinct partial refunds and provider/Medusa read-back are explicitly `SANDBOX_REQUIRED`; no pending response is treated as completed. |

## Local verification

```text
PAYPAL_PROVIDER_TESTS=PASS (17/17)
TYPESCRIPT=PASS
PRODUCTION_BUILD=PASS
NEXT_VERSION=15.5.24
PAYPAL_TEMPLATE_PLACEHOLDER_ENABLE=FAIL_CLOSED
PAYPAL_V2_CAPTURE_DECLINED_MAPPING=PASS
PAYPAL_STATUS_COMPLETED_WITH_AUTH_ID=AUTHORIZED
PAYPAL_STATUS_COMPLETED_WITH_CAPTURE_ID=CAPTURED
PAYPAL_STATUS_COMPLETED_WITHOUT_EVIDENCE=NOT_CAPTURED (pending)
```

The production runtime read-only regression returned HTTP 200 for `/us`,
`/us/store`, `/us/products/pet-hair-remover`, `/us/cart` and backend `/health`.
Store API and authenticated Admin API both returned the existing product:

```text
PRODUCT_ID=prod_01M1JG54Z6PFY802QV32EJ174D
HANDLE=pet-hair-remover
SKU=PAW-PHR-001
PRODUCT_STATUS=published
PRODUCT_PRICE=14.99 USD
VARIANTS=1
IMAGES=1
```

PostgreSQL read-only checks returned the same published product, square image
path, unique SKU/variant and USD price. The local order row count remained
`2`, matching the pre-task baseline. No acceptance smoke was run because it
creates technical test orders.

```text
PRODUCT_REGRESSION=PASS
ADMIN_API=PASS
STORE_API=PASS
POSTGRESQL=PASS
PDP_CART_CHECKOUT_ENTRY_BASELINE=PASS
NEW_ORDER_CREATED=NO
DATABASE_RESET=NO
REAL_PAYPAL_API_CALLED=NO
REAL_WORLDFIRST_API_CALLED=NO
REAL_MONEY_CHARGED=NO
REAL_SECRET_COMMITTED=NO
```

## Consistency and safety

- WorldFirst remains collection-account settlement only; Global Checkout is
  deferred for the current account and is not represented as checkout.
- PayPal remains a disabled checkout candidate. The untouched template with
  `PAYPAL_PROVIDER_ENABLED=true` fails closed and cannot make a provider call.
- The active storefront remains customer mode; System Payment remains
  technical-test-only.
- Product/catalog/UI/Figma behavior was not changed. Product ID, SKU, handle,
  price and published state are unchanged.
- No database, Docker volume, historical order, runtime identity or Spree
  baseline was reset or modified.

## External evidence boundary

The official PayPal webhook catalog distinguishes the v2
`PAYMENT.CAPTURE.DECLINED` event and lists the legacy v1
`PAYMENT.CAPTURE.DENIED` event separately: [PayPal webhook event
names](https://developer.paypal.com/api/rest/webhooks/event-names/). This task
records only local source/contract/test evidence; sandbox and live behavior
remain unexecuted.

```text
ROOT_GIT=CLEAN_AFTER_CHECKPOINT
MEDUSA_GIT=CLEAN_AFTER_CHECKPOINT
SPREE_GIT=CLEAN_AFTER_CHECKPOINT
```
