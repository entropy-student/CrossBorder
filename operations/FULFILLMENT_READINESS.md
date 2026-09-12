# Fulfillment Readiness

## Current direction

Future fulfillment is intended to integrate with another already-running system rather than be fully implemented inside CrossBorder.

The external system has not yet been inspected here, so the following remain `UNKNOWN` until a future intake:

- who owns the final fulfillment record;
- how shipment/tracking is created and updated;
- whether inventory is owned or synchronized externally;
- how cancellation, return, reship and refund responsibilities are split;
- how CrossBorder and the external system recover from duplicate, delayed or failed events.

## Current product facts

Supplier availability is not the same as project-owned inventory. Production supply route, packaging, complete dimensions, origin, shipping route, return path and other real fulfillment facts must stay `UNKNOWN/HOLD` until verified.

## Future integration acceptance

Before production, the selected integration must prove:

1. one order cannot create duplicate fulfillment;
2. failed or repeated callbacks are safe;
3. tracking updates map to the correct order;
4. cancellation/refund behavior is consistent across both systems;
5. inventory ownership and oversell behavior are explicit;
6. manual recovery exists when automatic synchronization cannot safely decide.

## Current gates

`FULFILLMENT_INTEGRATION=NOT_STARTED`

`PROJECT_OWNED_INVENTORY=UNKNOWN`

`AUTO_FULFILLMENT=DISABLED`

`PRODUCTION_FULFILLMENT=HOLD`
