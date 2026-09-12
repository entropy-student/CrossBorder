# Payment Architecture

## Current decision

The project will not continue treating the in-repo PayPal implementation as the default production direction.

Future payment and fulfillment are intended to integrate with another already-running system. The external system has not yet been inspected in this project, so its API surface, order ownership, callback model and transaction lifecycle are `UNKNOWN`.

## Existing code

The Medusa PayPal provider/reconciliation implementation remains in the source tree as a disabled historical/reference implementation. It may inform future adapter work, but it must not be enabled or extended merely because it exists.

## Future integration boundary

Before implementation, a read-only intake must determine:

- whether the external system exposes API, SDK, hosted checkout, plugin or callback interfaces;
- which system owns the final customer order;
- transaction create/status/cancel/refund semantics;
- callback verification and duplicate protection;
- stable identifier mapping;
- fulfillment/tracking ownership;
- inventory synchronization responsibility;
- retry/recovery behavior.

Only after those facts are known should the project decide whether the correct boundary is a Medusa provider adapter, redirect adapter, order handoff, fulfillment connector, or another minimal integration.

## Safety

Customer payment exposure remains disabled by default. Existing provider-specific documentation is historical/reference material unless a later Reviewer decision explicitly reactivates it.
