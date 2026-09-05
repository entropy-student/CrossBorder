# COMP-001 Validation

Record: `COMP-001` - Pet Hair Remover

Input: [COMP-001-pet-hair-remover.json](../../CrossBorder-Independent-Store/05_product/sourcing/components/COMP-001-pet-hair-remover.json)

Command executed from the project root:

```powershell
node .\05_product\sourcing\scripts\component-pipeline.mjs validate `
  --input .\05_product\sourcing\components\COMP-001-pet-hair-remover.json
```

Result:

```text
COMPONENT_RECORD=NEEDS_VERIFICATION
BUNDLE_ID=PASS
SOURCE_GATE=PASS
SAMPLE_GATE=NEEDS_TEST
PROCUREMENT_GATE=HOLD
LOGISTICS_GATE=NEEDS_VERIFICATION
RISK_GATE=NEEDS_VERIFICATION
NO_INVENTED_FIELDS=PASS
SUPPLIER_CLAIMS_LABELED=PASS
BULK_SHIPPING_QUOTE_LABELED=PASS
HS_NOT_VERIFIED=PASS
FTO_NOT_VERIFIED=PASS
DROPSHIP_UNKNOWN=PASS
UNIT_PACKAGE_UNKNOWN=PASS
COST_CALCULATION=PASS
SAMPLE_SCORE=NOT_TESTED
HARD_FAIL=NOT_TESTED
QUOTE_RECONFIRMATION_REQUIRED=YES
BULK_ORDER_GATE=HOLD
MEDUSA_WRITE=NO
```

## Evidence checks

- Source product `1601855396569`, Alibaba URL and supplied source evidence are
  present. Supplier name remains `UNKNOWN`.
- Cost facts are recorded as supplied: `1.60 x 100 = 160`, plus supplied `48`
  shipping equals `208`, and the supplied landed unit estimate is `2.08`.
  The validator cost calculation passes and no additional fee is invented.
- Product dimensions are width `18.5 cm`, height `19.5 cm`, depth `null`.
  Carton dimensions and weight are kept in the carton section; they are not
  copied into unit-package fields.
- Unit-package dimensions and weight remain unknown. Product material and
  packaging are supplier claims requiring verification.
- White & Gray and White & Blue are `IMAGE_EVIDENCE_ONLY`; supplier variant
  IDs and price differences remain unknown.
- Supplier operational, DDP, FBA, labeling, patent and quality-remedy
  statements retain `source=SUPPLIER_CLAIM` and are not marked verified.
- The 100-unit US DDP quote is represented as
  `supplier_operations.bulk_shipping_quote` with destination, quantity, mode,
  quote, terms, transit, source, status and evidence. It remains a supplier
  claim and must be reconfirmed before a bulk-order decision.
- Supplier HS `9603909090` remains `NEEDS_VERIFICATION` with supplier-provided
  evidence. It is not a verified HTS classification.
- FTO remains `NEEDS_VERIFICATION`; “no known patent complaints” is not an FTO
  pass. Compliance and country of origin remain unknown.
- China-to-individual-US-consumer dropship support remains unknown. Bulk US DDP
  and supplier-claimed Amazon FBA familiarity are not treated as consumer
  dropship support.
- Sample plan is two units, 5 USD total, 28 USD express reference and
  approximately 8 days; domestic China sampling is preferred and Supplier 14
  is the supplied AB competitor reference. The sample AB test is still
  pending.

## Procurement decision

`PROCUREMENT_STATUS=CANDIDATE` and `BULK_ORDER_GATE=HOLD`. The hold remains
until the physical samples pass the planned tests for hair removal efficiency,
fabric damage, hand feel, finish, hair-bin cleaning, durability, video quality
and batch consistency.

This component is a bundle candidate only. The draft BOM references
`COMP-001 x 1`; its supplied component and landed cost calculations pass, while
packaging cost and final bundle COGS remain null. It does not create a final
Kit BOM, a formal Pawfectly SKU, a Medusa product, a database write or a
purchase authorization.

`SAMPLE_SCORE=NOT_TESTED`, `HARD_FAIL=NOT_TESTED` and the sample decision is
`NOT_TESTED` because no physical sample has been received. The testing system
is a COMP-001-only protocol; it does not compare another supplier.
