# COMP-001 Pet Hair Remover Sample Test Protocol

Status: `FROZEN_TEST_PROTOCOL`

Component: `COMP-001`

Sample status: `WAITING_FOR_SAMPLE`

All raw observations and scores are `NOT_TESTED` until physical samples are
received. This protocol tests COMP-001 only.

## Controlled conditions

Use the same or comparable test area for each run. Record the actual test
conditions rather than inventing a precise mass or count of pet hair when it
cannot be measured reliably.

- Standard surfaces: sofa/upholstery fabric, clothing fabric, bedding fabric,
  and carpet/rug.
- Keep the approximate surface area, hair amount, rolling passes, rolling
  direction and operator consistent where possible.
- Capture before and after photographs or video for each applicable surface.
- Record the material, color, dimensions, weight, structure and packaging as
  received; do not replace missing dimensions with zero.
- A score is recorded on a 0-5 scale for each weighted criterion. Weighted
  points are `score / 5 * weight` and the total maximum is 100.

## Test record fields

Every test result must contain:

`TEST_METHOD`, `TEST_SURFACE`, `TEST_REPEAT_COUNT`, `RAW_OBSERVATION`,
`EVIDENCE_REQUIRED`, `SCORE`, and `FAIL_CONDITION`.

## Test cases

### 1. Hair Removal Efficiency

- `TEST_METHOD`: Apply a comparable, visibly recorded amount of pet hair and
  use the defined rolling passes on each standard surface; compare before and
  after evidence.
- `TEST_SURFACE`: Sofa/upholstery, clothing, bedding and carpet/rug.
- `TEST_REPEAT_COUNT`: Three passes per direction per surface, one complete
  run per surface.
- `RAW_OBSERVATION`: `NOT_TESTED`.
- `EVIDENCE_REQUIRED`: Before/after photo or video for every tested surface;
  actual conditions and pass count.
- `SCORE`: `NOT_TESTED` (weight 25).
- `FAIL_CONDITION`: Cannot remove hair normally or leaves no meaningful
  improvement under the recorded conditions.

### 2. Fabric Safety / Snag

- `TEST_METHOD`: Run the remover over the same fabric areas using the same
  passes; inspect for pulled threads, snags, scratches or surface damage.
- `TEST_SURFACE`: Clothing, bedding and upholstery fabric.
- `TEST_REPEAT_COUNT`: Three passes per surface plus a close visual inspection.
- `RAW_OBSERVATION`: `NOT_TESTED`.
- `EVIDENCE_REQUIRED`: Before/after close photos and video of the fabric area.
- `SCORE`: `NOT_TESTED` (weight 20).
- `FAIL_CONDITION`: Any obvious snag, scratch or fabric damage is a hard fail.

### 3. Self-cleaning Effectiveness

- `TEST_METHOD`: Operate the self-cleaning button/mechanism after collecting
  hair and observe release into the bin or cleaning area.
- `TEST_SURFACE`: Hair collected from all applicable standard surfaces.
- `TEST_REPEAT_COUNT`: Five self-cleaning cycles.
- `RAW_OBSERVATION`: `NOT_TESTED`.
- `EVIDENCE_REQUIRED`: Video of each mechanism cycle and the collected hair.
- `SCORE`: `NOT_TESTED` (weight 15).
- `FAIL_CONDITION`: Self-cleaning mechanism jams or cannot release collected
  hair as intended.

### 4. Hair-bin Cleaning

- `TEST_METHOD`: Empty the hair bin after a collection run and inspect
  residue, access and completeness of emptying.
- `TEST_SURFACE`: Hair collected from upholstery and carpet/rug.
- `TEST_REPEAT_COUNT`: Three emptying cycles.
- `RAW_OBSERVATION`: `NOT_TESTED`.
- `EVIDENCE_REQUIRED`: Before/after bin photos or video and operator notes.
- `SCORE`: `NOT_TESTED` (weight 5).
- `FAIL_CONDITION`: Product cannot normally collect or release hair from its
  bin.

### 5. Handle / Hand Feel

- `TEST_METHOD`: Hold and operate the product with dry hands through a normal
  collection run; record comfort, grip and control without subjective-only
  shorthand.
- `TEST_SURFACE`: Upholstery and clothing fabric.
- `TEST_REPEAT_COUNT`: Two operators where possible, one run each.
- `RAW_OBSERVATION`: `NOT_TESTED`.
- `EVIDENCE_REQUIRED`: Operator notes and short operation video.
- `SCORE`: `NOT_TESTED` (weight 5).
- `FAIL_CONDITION`: Handle cracks, creates an unsafe grip or prevents normal
  operation.

### 6. Plastic Finish

- `TEST_METHOD`: Inspect the housing and finish under consistent lighting for
  burrs, sharp edges, visible defects and finish inconsistency.
- `TEST_SURFACE`: Not surface-dependent; inspect product before and after use.
- `TEST_REPEAT_COUNT`: Two inspections, before and after the test session.
- `RAW_OBSERVATION`: `NOT_TESTED`.
- `EVIDENCE_REQUIRED`: Close product photographs and defect notes.
- `SCORE`: `NOT_TESTED` (weight included in Build Quality 15).
- `FAIL_CONDITION`: Housing is visibly broken, sharp or unsafe.

### 7. Structural Rigidity

- `TEST_METHOD`: Inspect and gently operate the handle, housing, roller and
  moving joints under normal use; do not apply destructive force.
- `TEST_SURFACE`: Upholstery and carpet/rug during normal operation.
- `TEST_REPEAT_COUNT`: Three normal-use runs.
- `RAW_OBSERVATION`: `NOT_TESTED`.
- `EVIDENCE_REQUIRED`: Operation video and post-use close photos.
- `SCORE`: `NOT_TESTED` (weight included in Build Quality 15).
- `FAIL_CONDITION`: Housing becomes loose, breaks or presents a safety risk.

### 8. Roller / Mechanism Smoothness

- `TEST_METHOD`: Roll across each applicable surface and record whether the
  roller tracks smoothly without sticking, skipping or unexpected resistance.
- `TEST_SURFACE`: Upholstery, clothing, bedding and carpet/rug.
- `TEST_REPEAT_COUNT`: Three passes per direction per surface.
- `RAW_OBSERVATION`: `NOT_TESTED`.
- `EVIDENCE_REQUIRED`: Operation video and surface-specific notes.
- `SCORE`: `NOT_TESTED` (weight included in Build Quality 15).
- `FAIL_CONDITION`: Roller or operating mechanism jams.

### 9. Repeated-use Durability

- `TEST_METHOD`: Repeat normal-use cycles using the same controlled surfaces;
  inspect function and condition after each cycle block.
- `TEST_SURFACE`: Upholstery, clothing, bedding and carpet/rug as applicable.
- `TEST_REPEAT_COUNT`: At least ten normal-use cycles, with the actual count
  recorded.
- `RAW_OBSERVATION`: `NOT_TESTED`.
- `EVIDENCE_REQUIRED`: Cycle log, before/after photos and end-state video.
- `SCORE`: `NOT_TESTED` (weight 10).
- `FAIL_CONDITION`: Product visibly fails after short repeated use.

### 10. Cleaning Convenience

- `TEST_METHOD`: Empty the bin, operate the cleaning mechanism and perform
  ordinary surface cleanup; record steps and residue.
- `TEST_SURFACE`: Hair collection residue from upholstery and carpet/rug.
- `TEST_REPEAT_COUNT`: Three complete clean-up cycles.
- `RAW_OBSERVATION`: `NOT_TESTED`.
- `EVIDENCE_REQUIRED`: Step-by-step photo/video and time or effort notes when
  reliably observed.
- `SCORE`: `NOT_TESTED` (weight 5).
- `FAIL_CONDITION`: Ordinary cleaning cannot be completed safely or the
  product cannot be returned to usable condition.

### 11. Video Demonstration Quality

- `TEST_METHOD`: Record a clear demonstration showing product identity,
  surface, before/after result and relevant mechanism; review for visibility.
- `TEST_SURFACE`: At least one applicable standard surface and the actual
  tested conditions.
- `TEST_REPEAT_COUNT`: Two takes or angles where needed to show the result.
- `RAW_OBSERVATION`: `NOT_TESTED`.
- `EVIDENCE_REQUIRED`: Original unedited test video with date/context notes.
- `SCORE`: `NOT_TESTED` (weight 5).
- `FAIL_CONDITION`: Evidence cannot show the actual product action or result;
  this is a test-evidence failure, not permission to invent a claim.

### 12. Visible Manufacturing Defects

- `TEST_METHOD`: Inspect all visible surfaces, joints, roller, handle and
  packaging before and after testing under consistent lighting.
- `TEST_SURFACE`: Not surface-dependent; product and packaging inspection.
- `TEST_REPEAT_COUNT`: Two inspections, receipt and post-test.
- `RAW_OBSERVATION`: `NOT_TESTED`.
- `EVIDENCE_REQUIRED`: Full product photo set, close-ups and defect log.
- `SCORE`: `NOT_TESTED` (no separate weight; hard-fail gate).
- `FAIL_CONDITION`: Any obvious manufacturing defect that affects safety or
  normal use is a hard fail.

## Hard-fail rules

Set `HARD_FAIL=YES` and `SAMPLE_RESULT=FAIL` for any of the following:

- obvious snag or scratched fabric;
- noticeable product shedding or debris;
- cracked handle;
- loose or damaged housing;
- jammed roller;
- jammed self-cleaning mechanism;
- inability to collect hair normally;
- an obvious safety hazard;
- obvious failure after short repeated use.

## Decision and procurement gates

- Before sample receipt: `SAMPLE_RESULT=NOT_TESTED`,
  `PROCUREMENT_GATE=HOLD`.
- Test fail or any hard fail: `SAMPLE_RESULT=FAIL`,
  `PROCUREMENT_GATE=REJECT`.
- Retest needed: `SAMPLE_RESULT=RETEST_REQUIRED`,
  `PROCUREMENT_GATE=HOLD`.
- Test pass with no hard fail: `SAMPLE_RESULT=PASS`,
  `PROCUREMENT_GATE=READY_FOR_SUPPLY_CHAIN_REVIEW`.

Even a sample pass does not equal `APPROVED_FOR_BULK_ORDER`; logistics, risk,
current cost, supplier conditions and human approval remain required.
