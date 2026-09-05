# Product Content Contract

The canonical detailed Product Master and import guidance are maintained in
this document center. Machine-readable schemas, intake data and scripts remain
beside product data in the source project:

- [Product Master contract](PRODUCT_DATA_CONTRACT.md)
- [Import guide](PRODUCT_IMPORT_GUIDE.md)
- [Validation test matrix](VALIDATION_TEST_MATRIX.md)
- [Normalized first product](../CrossBorder-Independent-Store/05_product/normalized/PAWFECTLY-PET-HAIR-REMOVER.json)

The current user-supplied product is approved for store integration; sourcing,
sample, procurement, logistics, HS, FTO and dropship facts remain separate
states. No unknown fact is filled with a guess. Medusa remains the source of
truth for product, price, variant, image and cart data.

## First real product

- `PRODUCT_ID=prod_01M1JG54Z6PFY802QV32EJ174D`
- `SKU=PAW-PHR-001`
- `HANDLE=pet-hair-remover`
- `PRICE=14.99 USD`
- `STATUS=PUBLISHED_LOCAL_PREVIEW`
- `PRIMARY_ASSET=COMP-001-main-square.png` (approved 1:1 source image)
- `PROJECT_OWNED_INVENTORY=UNKNOWN`

The integration adapter is explicit-write and idempotent; this documentation
center does not authorize a new catalog write.
