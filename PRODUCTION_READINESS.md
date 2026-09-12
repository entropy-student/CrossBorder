# Production Readiness — Deferred but Mandatory

This file prevents local/demo success from being mistaken for production readiness.

## Current direction

The project is paused. Future payment and fulfillment are expected to integrate with another already-running system. The integration boundary has not yet been reviewed, so production readiness cannot assume that Medusa, the external system, or the current custom PayPal code owns final order, payment, inventory, shipment, refund, or tracking state.

## Required before production

1. **External system intake**
   - identify the running system and supported integration surface;
   - define order/source-of-truth ownership;
   - define payment status, cancel/refund, callback and idempotency behavior;
   - define fulfillment, shipment, tracking and inventory responsibilities;
   - document failure/retry/reconciliation behavior.

2. **Product and supply chain**
   - verify real inventory/supply route;
   - verify packaging, dimensions, origin, shipping method and return path;
   - keep unknown facts as `UNKNOWN` rather than inventing them.

3. **Infrastructure**
   - select the actual production deployment topology;
   - configure persistent database/object storage/runtime dependencies as required by that topology;
   - provide health checks, logs, monitoring, backup, restore and rollback.

4. **Customer operations**
   - publish shipping, refund/return, privacy, terms and contact policies;
   - configure transactional communications if required;
   - verify customer-support ownership for failed payment, shipment, return and refund cases.

5. **Security and data boundaries**
   - keep credentials outside Git and ordinary evidence;
   - review dependency/security findings before release;
   - verify least privilege, data retention and deletion boundaries;
   - test restore, not only backup creation.

6. **End-to-end acceptance**
   - one bounded test transaction in the approved test environment;
   - one complete fulfillment/tracking test;
   - one cancel/refund path;
   - duplicate/retry behavior proven safe;
   - backup/rollback path verified;
   - customer-facing policies published.

## Current gate

`PRODUCTION_READY=NO`

No current document authorizes Live payment, production inventory, production fulfillment, public production deployment or irreversible infrastructure changes.
