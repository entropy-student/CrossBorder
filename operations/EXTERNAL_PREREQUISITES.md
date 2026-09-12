# External Prerequisites

This is the current human-facing prerequisite list for the first real product
and the payment phase. Unknown facts remain `UNKNOWN` or `HOLD`; this document
does not approve a business policy or production launch.

## Verified locally

- Medusa remains the commerce source of truth.
- Product `prod_01M1JG54Z6PFY802QV32EJ174D`, SKU `PAW-PHR-001`, handle
  `pet-hair-remover` and approved price `14.99 USD` remain unchanged.
- The local storefront and backend build/type/test gates pass for the current
  working tree.
- PayPal is a disabled Medusa Payment Module scaffold using
  `AUTHORIZE` / `PAYPAL_AUTO_CAPTURE=false`.
- Reviewer evidence from BATCH-02 records sandbox OAuth success. This does not
  prove merchant eligibility, buyer approval, authorization, capture, refund,
  webhook or production readiness.
- WorldFirst is a settlement/collection account only for the current account;
  a separate customer checkout gateway is required.

## Business facts still required

The following are not inferred from supplier claims or local preview state:

- project-owned inventory or a confirmed supplier-to-customer fulfillment route;
- complete product/package dimensions and package weight;
- country of origin, independently supported HS classification and compliance;
- China-to-individual-US dropship support, price and service method;
- production shipping rate, carrier/service, transit assumptions and tracking;
- return address, refund owner, customer-service process and dispute owner;
- tax treatment, legal policies, domain, transactional email and backup/restore
  ownership.

## PayPal external gates

Before any customer exposure, the project still needs:

- verified PayPal Business/merchant eligibility and sandbox/live capability;
- buyer approval and return/cancel flow evidence in sandbox;
- authorization, capture, decline, retry and duplicate-submit evidence;
- configured `PAYPAL_WEBHOOK_ID`, server-side verification, persistent receipt
  and application-level reconciliation for negative events;
- full/pending/failed/repeated/partial refund tests with Medusa read-back;
- external CI or equivalent isolated repeatability evidence.

PayPal customer exposure remains disabled. No live endpoint or real money is
authorized by this prerequisite list.
