# CB-PAYMENT-004 PayPal Medusa Adapter Scaffold Validation

> HISTORICAL SNAPSHOT: this records the pre-R1 scaffold state. The current
> corrected contract and superseding evidence are in
> `CB-FULL-REVIEW-CHECKPOINT-001-FIX-R1_VALIDATION.md`; older `ps_...` wording
> and the eight-test snapshot below are retained for audit traceability only.

`RESULT=PASS`

`CANONICAL_PROJECT=C:\Users\34707\Documents\ChatGPT\CrossBorder-Independent-Store`

## Locked architecture

```text
Customer -> Medusa / Pawfectly Home checkout -> PayPal (future gateway)
         -> PayPal merchant balance -> WorldFirst collection account
```

`SETTLEMENT_PROVIDER=WORLDFIRST`

`WORLDFIRST_MODE=WORLDFIRST_COLLECTION_ACCOUNT`

`CHECKOUT_GATEWAY_REQUIRED=YES`

`PRIMARY_CHECKOUT_CANDIDATE=PAYPAL`

`PAYPAL_IMPLEMENTATION_PATH=NEW_PAYPAL_ADAPTER_REQUIRED`

## Official baseline and implementation

The implementation was reconciled against the [current Medusa PayPal
integration guide](https://docs.medusajs.com/resources/integrations/guides/paypal)
and the installed Medusa 2.19.0 [Payment Provider
contract](https://docs.medusajs.com/resources/commerce-modules/payment/payment-provider).
The project remains on its existing locked Medusa 2.19.0 dependencies; no
dependency or lockfile change was made.

`PAYPAL_ADAPTER_IMPLEMENTED=YES`

`PAYPAL_PROVIDER_PATH=03_template/medusa-crossborder-base/apps/backend/src/modules/paypal`

The module exports a Medusa `ModuleProvider(Modules.PAYMENT, ...)` and a
service extending `AbstractPaymentProvider`. The service covers initiate,
authorize, capture, cancel/void, refund, update, retrieve, delete session,
status and webhook action mapping. It stores only allow-listed transaction
identifiers, session correlation, amount/currency, approval URL and status.

The service delegates external I/O to `PayPalTransport`. Its default transport
throws/fails closed; injected fake transport is used only by unit tests. This
is the evidence-backed compatibility adjustment for the current scaffold:
the official `@paypal/paypal-server-sdk` transport is not installed or called
until account/sandbox eligibility is verified and a separate implementation
review authorizes it.

## Safety and exposure

`PAYPAL_PROVIDER_ENABLED=NO`

`PAYPAL_ENVIRONMENT=sandbox` (safe placeholder only)

`PAYPAL_CUSTOMER_EXPOSURE=DISABLED`

`SYSTEM_PAYMENT_TEST_ONLY=YES`

`PAYPAL_SANDBOX_ACCESS=NEEDS_VERIFICATION`

`PAYPAL_SANDBOX_TRANSACTION_TESTED=NO`

The Medusa config conditionally registers the PayPal module only when the
explicit enable flag is `true`. The storefront exposure helper continues to
reject `pp_paypal*`, and no mock is wired to customer checkout. Enabled
registration requires client ID and secret; they are absent from committed
files and runtime configuration remains disabled.

The provider validates positive amounts, three-letter currencies, valid
Medusa `ps_...` session correlation, response amount/currency equality and
provider identifier shape. Operation keys are derived from the Medusa session
and operation. Webhook handling requires a configured webhook ID and verified
transport result before event mapping; malformed or uncorrelated events fail
closed. Unknown event types map to `not_supported`.

## Validation evidence

| Gate | Result | Evidence |
|---|---|---|
| TypeScript | PASS | `corepack pnpm@10.11.1 exec tsc --noEmit` in `apps/backend` |
| Provider unit/contract tests | PASS | 8 Jest tests in `src/modules/paypal/__tests__/paypal.unit.spec.ts` |
| Disabled without credentials | PASS | Environment parser + conditional module registration |
| Application startup remains available | PASS | Existing local runtime was not reconfigured; PayPal remains unregistered |
| PayPal customer exposure | PASS | `checkout-exposure.ts` rejects `pp_paypal*` |
| System Payment | PASS | Existing technical-test-only boundary unchanged |
| Production build | PASS | `scripts/build-production.ps1` completed backend and storefront production builds |
| Product/PDP/Cart/Checkout entry | PASS | Existing accepted local product baseline preserved |
| Admin/Store/PostgreSQL read-back | PASS | Product read-back remained unchanged; PostgreSQL still reports 2 historical orders; only an empty disposable cart was created for checkout-entry route proof |
| New Medusa order | NO | No order creation permitted |
| PayPal API called | NO | No HTTP PayPal client or SDK transport exists in scaffold |
| WorldFirst API called | NO | Settlement remains documentation-only |
| Real money charged | NO | No provider enabled |
| Secret committed | NO | Only placeholders in env templates; no runtime files changed |

`REAL_PAYMENT_ENABLED=NO`

`NEW_ORDER_CREATED=NO` (the checkout-entry proof used an empty disposable cart only)

`REAL_PAYPAL_API_CALLED=NO`

`REAL_WORLDFIRST_API_CALLED=NO`

`REAL_MONEY_CHARGED=NO`

`PAYMENT_SECRET_COMMITTED=NO`

## Git and next state

Root, Medusa candidate and Spree benchmark repositories are preserved. The
final checkpoint is recorded in the repository state after the implementation
and documentation changes are committed.

`NEXT_STEP=WAITING_FOR_REVIEWER`
