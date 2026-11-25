# Deviation Register — Incident Template

Use one record per incident. Keep event, recurrence, evidential status, cause, effect, and intent distinct.

| Field | Entry |
|---|---|
| Incident ID | |
| Date and time observed | |
| Station / application | |
| Applicable protocol(s) | |
| Event type | |
| Recurrence status | First observed / Repeated after correction / Unknown |
| Evidential status | Directly observed / Inferred / Unknown |
| Event description | |
| Affected instruction or preference reference | |
| Evidence reference and source | |
| Cause | Established / Unknown / Insufficient information / Not disclosed |
| Intent status | Established / Not established or unknown / Conflicting evidence |
| Observed effect | |
| Potential effect (separate from observed effect) | |
| Correction | |
| Corrective action | |
| Correction date | |
| Evidence that correction was executed | |
| Verification method and result | |
| Escalation required | |
| Notes and limitations | |

## URC vector

Record components separately; do not combine into one score.

`URC_i = (N_r, N_d, T_c, N_e)`

- (N_r): unnecessary additional rounds.
- (N_d): user re-directions.
- (T_c): time to correction, using available timestamps.
- (N_e): repeated executions.

Define start and end points for each measure. Do not estimate unknown durations. Exclude the normal effort required by the task.