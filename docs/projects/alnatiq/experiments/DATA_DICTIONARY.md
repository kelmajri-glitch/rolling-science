# B-001 / B-002 — قاموس البيانات

This dictionary supplements `EXPERIMENT_RECORD_SCHEMA.json`. It does not replace AIC's session/evidence records. One experiment record should link to an AIC session when an application is involved.

| Field | Meaning | Rule |
|---|---|---|
| record_id | Stable experiment record identifier | Unique; do not recycle |
| protocol_id | B-001 or B-002 | Must identify protocol version |
| protocol_version | Version used for the run | Required for comparisons |
| record_status | DRAFT, PLANNED, RUN, REVIEWED, ACCEPTED, REJECTED | Status is not scientific truth |
| created_at_utc | Record creation time | ISO 8601 UTC |
| environment | Language, variety, task environment | Local description preferred |
| application | Application and exposed version/build | Unknown values remain unknown |
| aic_session_id | Related AIC session | Required when an application session exists |
| task | Predeclared task and rubric identifiers | Freeze before evaluation |
| input_manifest | Inputs and rights/provenance | No private audio by default |
| output_manifest | Outputs and artifact references | Preserve original where permitted |
| adaptation_label | Contextual/persistent/model update/unknown | Do not infer model training |
| reference_standard | Human/linguistic/acoustic reference | State who/what adjudicated |
| outcome | Task-specific result | Include denominator and missingness |
| evidence | Claim-level evidence references | Separate self-report and observation |
| benefit | Positive effects | Do not merge with harm |
| harm | Observed or plausible adverse effects | Distinguish observed from risk |
| burden | Time, resource, and human effort | State units and measurement method |
| rights_privacy | Consent, permitted use, retention, rights | Must be reviewed before human data |
| limitations | Scope and generalization limits | Required for interpretation |
| side_discoveries | Unplanned findings | Mark as exploratory |
| reviewer_decision | Review state and reviewer | Not automatic owner approval |

## Evidence labels

Use AIC labels: OBSERVED, DOCUMENTED, SELF_REPORTED, INFERRED, PROPOSED, UNVERIFIED, UNAVAILABLE. For B-001 physical data, also distinguish MEASURED and MODELLED in the claim description; do not silently overload AIC categories.

## Missingness labels

Use explicit states: NOT_MEASURED, NOT_AVAILABLE, NOT_APPLICABLE, NOT_ACCESSED, FAILED, EXCLUDED_WITH_REASON. Never substitute zero for an unknown or missing value.
