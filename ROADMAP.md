# Roadmap

## Completed / retained

- Medusa selected; Mother Template and approved Figma/Web UI frozen.
- Product and sourcing contracts established.
- First product integrated into the local Medusa preview.
- Cart, checkout boundary, local runtime, Docker and database foundations reviewed with scoped evidence.
- Repository governance normalized under `VPS Project Governance v0.1.6`.

## Current state

`PAUSED_AFTER_REPOSITORY_CLEANUP`

No implementation Gate is active.

## Architecture realignment

Future payment and fulfillment are intended to integrate with another already-running system rather than continue as a fully self-developed CrossBorder subsystem.

The existing custom PayPal/reconciliation implementation is preserved as reference and remains disabled by default. It is not the selected production direction.

## Next phase when work resumes

`EXTERNAL_PAYMENT_FULFILLMENT_SYSTEM_INTAKE`

First inspect the existing system and define the minimal integration boundary. Do not implement an adapter until source-of-truth, order ownership, callbacks, retry/idempotency, refund/cancel behavior, fulfillment/tracking and inventory responsibilities are known.

Production deployment, real inventory/logistics, customer policies and go-live verification remain later work.
