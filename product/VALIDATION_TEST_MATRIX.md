# Product Master Validation Test Matrix

Status: `PASS` for Product Master schema `1.1.0`.

Command executed from the project root:

```powershell
node .\05_product\scripts\product-pipeline.mjs test `
  --input .\05_product\intake\TEST_FIXTURE_ONLY.medusa-seed.json
```

The test command is dependency-free and in-memory. It does not call Medusa,
write a catalog, create an order or alter a database.

| Case | Expected result | Result |
|---|---|---|
| Blank intake | `BLOCKED` | PASS |
| `TEST_FIXTURE_ONLY` | `NEEDS_VERIFICATION`, import gate usable | PASS |
| `gallery_images` is a string | Schema `BLOCKED`; dry-run not attempted | PASS |
| `variants` is an object | Schema `BLOCKED`; dry-run not attempted | PASS |
| `main_image` is a string | Schema `BLOCKED`; dry-run not attempted | PASS |
| `package_dimensions.length="abc"` | Schema `BLOCKED`; dry-run not attempted | PASS |
| `commerce.currency` is an object | Schema `BLOCKED`; dry-run not attempted | PASS |
| Negative dimension | `BLOCKED` | PASS |
| Negative product dimension | `BLOCKED` | PASS |
| `NaN` dimension | `BLOCKED` | PASS |
| Zero package dimension | `BLOCKED` | PASS |
| Invalid dimension unit `bananas` | `BLOCKED` | PASS |
| Weight without a unit/object | `BLOCKED`; no logistics pass | PASS |
| Weight object missing `unit` | `BLOCKED` | PASS |
| Known weight with `unit=UNKNOWN` | Logistics not `PASS` | PASS |
| HS value without `VERIFIED` status | HS check `NEEDS_VERIFICATION` | PASS |
| HS `VERIFIED` without evidence | HS check `NEEDS_VERIFICATION` | PASS |
| HS value + `VERIFIED` + evidence | HS check `PASS` | PASS |
| Unsupported currency `CNY` | `BLOCKED` | PASS |
| Supported currency `USD` | Currency check `PASS` | PASS |
| Supported currency `EUR` | Currency check and minor-unit mapping `PASS` | PASS |
| Normalize twice | Identical canonical JSON | PASS |
| Dry-run | `WRITE_PERFORMED=NO` | PASS |
| Old schema `1.0.0` | Explicit `SCHEMA_UPGRADE_REQUIRED` | PASS |

## Contract assertions

- `physical.weight` and `physical.package_weight` require `{value, unit}`;
  controlled units are `g`, `kg`, `oz` and `lb`.
- Dimensions require positive finite length/width/height and units `mm`,
  `cm`, `m` or `in` when known. Unknown values remain explicit and keep the
  logistics gate at `NEEDS_VERIFICATION`.
- `cross_border.hs_code` requires `value`, `status` and `evidence`. Only a
  known value with `status=VERIFIED` and evidence passes its check.
- `SUPPORTED_CURRENCIES` is explicitly `{USD, EUR}`. The mapper uses the
  configured exponent (`2` for each current currency) rather than a universal
  two-decimal assumption.
- Schema/structural validation runs before business validation. Invalid
  structures return `VALIDATE_RESULT=BLOCKED` and
  `DRY_RUN_NOT_ATTEMPTED`.
- Optional gallery/lifestyle arrays may be empty; malformed supplied asset
  objects are blocked.

## Scope boundary

The fixture is technical mapping data only. No formal Pawfectly SKU is
represented by the fixture; the separate adapter is local-DRAFT-only, and no real payment,
shipping, order or database state is changed by this pipeline.
