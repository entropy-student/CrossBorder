# COMP-001 Procurement Checklist

Component: `COMP-001` - Pet Hair Remover

Bundle candidate: `BUNDLE-PET-FUR-RESCUE-KIT`

Current status: `PROCUREMENT_STATUS=CANDIDATE`

Current gate: `BULK_ORDER_GATE=HOLD`

No 100-unit order is permitted until every applicable item below is checked
with current evidence and a human approval is recorded.

- [ ] Sample Test = `PASS`
- [ ] No Hard Fail
- [ ] Current quote reconfirmed
- [ ] MOQ confirmed
- [ ] Stock confirmed
- [ ] Lead time reconfirmed
- [ ] Shipping quote reconfirmed
- [ ] Color and variant confirmed
- [ ] Unit packaging understood
- [ ] Risk Gate reviewed
- [ ] HS handling remains appropriately documented
- [ ] FTO risk decision recorded
- [ ] Final landed cost reviewed

## Gate transition

- Before sample testing: `HOLD`.
- Sample fail: `REJECT`.
- Retest required: `HOLD`.
- Sample pass with no hard fail: `READY_FOR_SUPPLY_CHAIN_REVIEW`.
- Only after logistics, risk, cost and supplier conditions are reviewed may a
  human set `READY_FOR_APPROVAL`.
- `BULK_ORDER_APPROVED` requires separate human final approval. A sample pass
  never changes this automatically.

The supplied cost snapshot is not a permanent quote:

- unit cost: `1.60 USD`
- 100-unit product cost: `160 USD`
- supplied 100-unit DDP quote: `48 USD`
- supplied landed estimate: `208 USD` / `2.08 USD per unit`

`QUOTE_RECONFIRMATION_REQUIRED_BEFORE_BULK_ORDER=YES`.
