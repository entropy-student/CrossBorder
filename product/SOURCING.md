# Product Sourcing and Component Boundary

`COMP-001` is the preserved sourcing component record for the Pet Hair
Remover. It tracks supplier facts, cost, sample/procurement, logistics, HS and
risk without blocking user-approved storefront integration.

Current separation:

- `USER_SUPPLIED_PRODUCT=APPROVED_FOR_STORE_INTEGRATION`
- `SAMPLE_GATE=NEEDS_TEST`
- `PROCUREMENT_GATE=HOLD`
- `LOGISTICS_GATE=NEEDS_VERIFICATION`
- `RISK_GATE=NEEDS_VERIFICATION`
- `MEDUSA_WRITE` is controlled only by the explicit product adapter workflow.

Canonical human-facing records:

- [Component contract](sourcing/COMPONENT_DATA_CONTRACT.md)
- [COMP-001 record](../CrossBorder-Independent-Store/05_product/sourcing/components/COMP-001-pet-hair-remover.json)
- [Supplier follow-up](sourcing/COMP-001_SUPPLIER_FOLLOWUP.md)
- [Procurement checklist](sourcing/COMP-001_PROCUREMENT_CHECKLIST.md)

No supplier comparison, sample test result, bulk approval or Medusa catalog
mutation is implied by this status.
