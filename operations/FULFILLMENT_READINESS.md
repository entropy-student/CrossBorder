# Fulfillment Readiness

## Current factual state

`SUPPLIER_STOCK_STATUS=AVAILABLE` is a supplier claim. It is not project-owned
inventory. `PROJECT_OWNED_INVENTORY=UNKNOWN`; production fulfillment is `HOLD`.
Packaging, complete dimensions, origin, verified HS/compliance, consumer
dropship support, production shipping route, return address and refund owner
are not established facts for this product.

## Minimum operational flow

1. Medusa owns the cart, address, shipping choice, totals and order.
2. PayPal may authorize and capture only after the reviewed sandbox path is
   enabled; a browser return alone never proves payment.
3. A fulfillment decision requires verified captured-payment evidence, a valid
   shipping address, an available/confirmed supply route, a shipping method and
   an identified refund/customer-service owner.
4. For low order volume, an operator may manually confirm the item, pick and
   pack it, purchase/record the approved shipping service, attach tracking and
   notify the customer.
5. The operator reconciles the Medusa order, provider transaction/capture,
   shipment/tracking record and any refund or exception. A missing or pending
   capture keeps fulfillment on hold.

This is a control sequence, not a production shipping promise. No ERP, PIM,
new gateway or automatic fulfillment system is introduced here.

## Current gates

`CAPTURED_PAYMENT=SANDBOX_REQUIRED`

`FULFILLMENT_ROUTE=UNKNOWN`

`PROJECT_OWNED_INVENTORY=UNKNOWN`

`RETURNS_REFUNDS_OWNER=NEEDS_USER_BUSINESS_DECISION`

`AUTO_FULFILLMENT=DISABLED`
