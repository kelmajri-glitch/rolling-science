# B-001 / B-002 — خطة التنفيذ التجريبي وبوابات القبول

**Version:** 0.1  
**Status:** Proposed plan — no human-data pilot authorized by this document.

## 1. Execution phases

| Phase | Work | Deliverable | Exit condition |
|---|---|---|---|
| P0 | Scientific and local-scope definition | target variety, claim register, reference list | expert/local review recorded |
| P1 | Data contract and synthetic validation | schema, examples, validation report | valid/invalid cases tested |
| P2 | Prototype preparation | static learning storyboard and test harness | acceptance checklist passed |
| P3 | Application feasibility tests | AIC sessions and B-002 records | traceable outputs and independent review |
| P4 | Consented human pilot | approved audio/learning records | consent, privacy, and data handling verified |
| P5 | Comparative analysis | solo/parallel/reciprocal comparison | frozen analysis plan followed |
| P6 | Local reproduction | independent adaptation package | second environment reports what it reproduced and changed |

P0 and P1 may use public references and synthetic/non-identifiable examples. P4 must not begin until the required human-participant and privacy decisions are explicitly approved.

## 2. Immediate implementation sequence

1. Review B-001 and B-002 with the project owner and relevant local language/anatomy/phonetics expertise.
2. Build a claim register: each scientific claim, source, status, reviewer, and unresolved issue.
3. Validate the JSON schema using synthetic records only.
4. Define a minimal test set with held-out examples; do not collect new human recordings at this stage.
5. Prepare application test prompts and scoring rubrics before running tests.
6. Run dry tests using synthetic or rights-cleared samples.
7. Review the evidence and revise the protocol before any human pilot.
8. Prepare a separate privacy/consent plan for human recordings and learner participation.

## 3. Human-data gate

Before recording or collecting learner outcomes, the owner must approve:
- study purpose and participant group;
- consent and withdrawal wording;
- whether minors or students in a power-imbalanced relationship are involved;
- data minimization and de-identification;
- storage location, access controls, retention, deletion, and backup handling;
- separate permissions for research analysis, model-provider processing, and public release;
- local institutional or ethics review requirements, where applicable.

No participant should be penalized for declining to contribute a recording. Teaching access must not depend on research consent.

## 4. Minimum dry-run test set

The first software dry run should include:
- one fully specified synthetic application session;
- one partial-access session;
- one unavailable model/version field;
- one failed or timed-out test;
- one contextual correction case;
- one held-out generalization case;
- one local-variety disagreement case;
- one privacy-rejected record;
- one solo, one parallel, and one reciprocal workflow record.

These are data-contract test cases, not claims about actual application performance.

## 5. Acceptance gates

### Scientific gate
Target variety, anatomical claims, phonetic contrasts, and acoustic measures are source-backed and reviewed.

### Data gate
Records preserve provenance, missingness, version, evidence class, and separate benefit/harm/burden fields.

### Application gate
Prompts, tools, model identifiers where exposed, outputs, and evaluation criteria are traceable.

### Governance gate
Consent, privacy, rights, scope, and review responsibilities are defined.

### Reproduction gate
A second environment can interpret the package and identify what it can and cannot reproduce.

## 6. Metrics and reporting

For every reported percentage, state:
- numerator and denominator;
- inclusion/exclusion rules;
- missing and unavailable records;
- calculation method;
- confidence interval when appropriate;
- whether the measure is exploratory or confirmatory.

Do not create an overall score by adding benefit, harm, and burden. Report them in separate panels.

## 7. Completion reporting

Report document/specification completion separately from:
- schema validation;
- prototype implementation;
- dry-run completion;
- application testing;
- human pilot completion;
- independent replication.

An unrun test is NOT_RUN, not PASS. An unavailable measurement is not zero.
