# Production Readiness — Deferred but Mandatory

This file prevents a successful local demo from being mistaken for a real store that is ready to take customer money.

The selected Medusa mother template has passed local qualification, but production readiness remains deferred until the real go-live gates below are satisfied. These gates become mandatory before real traffic or real payment.

## Current pre-payment safeguards

- Customer checkout hides Medusa System Payment and known technical shipping fixtures by default.
- Before go-live, remove System Payment and local technical shipping fixtures from the production Region/fulfillment configuration; UI filtering alone is not the production boundary.
- Technical fixtures remain available to direct local acceptance smoke tests.
- No real payment provider or live secret is configured.
- WorldFirst is locked to `WORLDFIRST_COLLECTION_ACCOUNT`; `WORLDFIRST_GLOBAL_CHECKOUT=NOT_AVAILABLE_CURRENT_ACCOUNT / DEFERRED`. PayPal is the primary checkout candidate, but account/card-processing/sandbox eligibility remains to be verified.

## 1. Payments and money movement
- Choose payment provider(s) that are actually available to the merchant's legal entity and target markets.
- Complete KYC/business verification.
- Test authorization, capture, failure, refund, partial refund, cancellation, dispute/chargeback, webhook replay/idempotency.
- Keep payment secret keys outside Git/source control.

## 2. Tax and customs
- Decide who calculates/collects tax for each market.
- Validate US sales-tax approach before real US sales; do not treat the demo system-tax provider as legal/tax advice.
- For international shipping, define duties/import-tax handling, HS codes, declared value, restricted goods, and DDP/DDU policy as applicable.

## 3. Shipping and fulfillment
- Replace demo/manual fulfillment with the real carrier/3PL/warehouse process.
- Validate actual rate tables, remote-area surcharges, tracking, lost parcel, return address, reship/refund rules.
- Establish SKU weights/dimensions and packaging assumptions so profit calculations match reality.

## 4. Customer communications
- Configure transactional email provider/domain.
- Verify order, payment, fulfillment, password-reset and refund emails.
- Configure SPF/DKIM/DMARC for the sending domain before meaningful volume.

## 5. Files and images
- Do not rely on local ephemeral disk in production.
- Configure persistent object storage/CDN for product uploads where needed.

## 6. Production infrastructure
- Managed production PostgreSQL with backups/PITR appropriate to the chosen host.
- Production cache/event/workflow infrastructure if required by the chosen platform's final deployment design (for example Redis where the final configuration uses it).
- HTTPS everywhere; secure cookies in production.
- Secret manager/environment isolation for staging vs production.
- Health checks, logs, error monitoring, uptime monitoring.
- Defined deployment + rollback procedure.

## 7. Security
- Rotate all generated local/test secrets before production.
- Review dependency audit results and security advisories.
- Apply rate limiting / abuse controls appropriate to exposed endpoints.
- Test admin access model; never expose reusable local credentials.
- Backup restoration must be tested, not merely enabled.

## 8. Fraud, data lifecycle, and operational abuse
- Decide fraud/risk controls for high-risk orders, velocity, card testing, coupon abuse, and suspicious account creation.
- Validate address quality and carrier-deliverability strategy before scaling paid traffic.
- Define retention/deletion rules for customer/order/support data and an account/data-deletion workflow where legally required.
- Review admin auditability and least-privilege access for anyone handling refunds/orders.

## 9. Returns and reverse logistics
- Define return eligibility windows and item-condition rules.
- Decide domestic return address / consolidation / disposal / refurbishment path for each market.
- Measure reverse-logistics cost separately from outbound fulfillment.
- Test partial return, partial refund, reship, lost parcel and exchange-equivalent workflows.

## 10. Legal / customer policy
- Privacy policy, terms, shipping policy, refund/return policy, contact information.
- Cookie/consent requirements based on target markets and analytics/advertising stack.
- Product compliance, claims, trademark/copyright, restricted-product checks.

## 11. Analytics and economics
- Analytics events for view → add-to-cart → checkout → purchase.
- Preserve UTM/ad attribution.
- Profit model must include product cost, packaging, payment fee, platform/hosting, shipping, duties/tax exposure, ads, refunds, chargebacks and reships.

## 12. Go-live Gate
Real traffic/payment is forbidden until all of the following are true:
1. One real payment test succeeds end-to-end in an appropriate sandbox/test environment.
2. One real fulfillment/tracking test succeeds.
3. Refund/cancellation path is proven.
4. Backup/rollback path exists.
5. Legal/customer-facing policies are published.
6. Product unit economics remain positive after realistic fulfillment and acquisition assumptions.
