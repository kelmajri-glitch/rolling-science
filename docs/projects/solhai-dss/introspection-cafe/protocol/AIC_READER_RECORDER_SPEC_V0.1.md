# AIC Reader & Recorder v0.1

**Specification ID:** AIC-RR-001  
**Parent:** Application Introspection Café (AIC), SOLHAI.DSS  
**Status:** Proposed specification; owner approval pending  
**Version:** 0.1  
**Date:** 2026-11-26

## 1. Objective

Provide a vendor-independent, low-complexity protocol through which participating applications can:

1. discover and read a known Rolling Science repository snapshot;
2. declare exactly what they accessed;
3. perform a bounded introspection session against a common reference;
4. submit a structured session record and evidence log;
5. remain outside the canonical archive until human review and owner approval.

The first release is documentary and procedural. It does not require a new server, application, bot, or automated agent.

## 2. Design principles

- **Read broadly, write narrowly:** public reference material may be read; no participant receives default repository write permission.
- **One source, multiple channels:** connector, web/API, offline pack, and human-mediated attachment should resolve to a traceable source snapshot.
- **Access is measurable:** discovery, retrieval, inspection, and comprehension are separate outcomes.
- **No self-certification:** a participant cannot independently validate its own claims merely by reporting them.
- **Preserve uncertainty:** missing access, missing baselines, incomplete outputs, and contradictory evidence remain visible.
- **Portable records:** session and evidence records use open text and JSON formats.
- **Owner authority:** station recommendations and submitted reports do not approve themselves or alter project policy.

## 3. System boundaries

### Included in v0.1

- reader index and read-only access protocol;
- source snapshot identification;
- session record template and JSON schema;
- evidence log template and JSON schema;
- GitHub Issue intake form as a human-mediated submission route;
- review and archival state labels.

### Explicitly excluded

- automatic ingestion of arbitrary AI outputs;
- direct write access for participating applications;
- automatic acceptance or merging of reports;
- a hosted API, database, dashboard, or authentication service;
- automated claims about consciousness, subjective experience, persistent memory, or internal model changes;
- application implementation or runtime testing.

## 4. Roles

| Role | Responsibility | Permission |
|---|---|---|
| Reader / participant | Read reference material and declare access results | Read-only |
| Reporter | Submit session record and evidence | Issue or proposed PR submission only, subject to platform access |
| Reviewer | Check provenance, privacy, completeness, and consistency | Review and comment |
| Repository maintainer | Prepare corrections or archival commits | Explicitly authorized write |
| Project owner | Approve policy, specifications, and archive promotion | Final authority |

A single person may perform more than one role, but the record must identify which role was exercised at each stage.

## 5. Reader workflow

1. Start from `access/READER_INDEX.md`.
2. Record the requested source ref and resolve it to a commit SHA.
3. Attempt the available access route(s).
4. Complete the file-level access matrix: `READ_FULL`, `READ_PARTIAL`, `NOT_READ`, or `NOT_REQUESTED`.
5. Record returned file identifiers/checksums when available.
6. Do not summarize a file marked `NOT_READ`.
7. If direct access fails, use an authorized Reader Pack or human-mediated attachment and record the change of route.
8. Begin the introspection probes only after the reference snapshot is identified.

## 6. Session workflow

### A. Baseline

Before providing the Reader Pack or project documents, record the participant's current self-description and responses to the baseline probes. If this ordering was not possible, mark the baseline `LATE_BASELINE`; do not imply a pre/post comparison.

### B. Knowledge exposure

Provide the same defined reference set to participants in a comparison cohort. Record the exact files, commit SHA, access mode, and any omissions. Do not assume that identical prompts guarantee identical context windows or tool access.

### C. Post-exposure probes

Use a predeclared probe set. At minimum test:
- source navigation and file identification;
- accurate summary of a specified passage;
- distinction between documented fact and proposal;
- identification of access failures and unknowns;
- application of repository permission boundaries;
- ability to cite the exact source path;
- consistency when asked to revisit the same evidence;
- recognition of conflicts or stale status statements.

Record prompt text, output, outcome, and evidence. Do not change scoring criteria after seeing results without recording a protocol amendment.

### D. Submission

Submit the session record and evidence log as separate artifacts. Preserve the original response where safe and permitted; summaries must be labelled as summaries.

## 7. Session and evidence states

Use these states for a report:
- `DRAFT`
- `SUBMITTED`
- `UNDER_REVIEW`
- `NEEDS_CLARIFICATION`
- `ACCEPTED_FOR_ARCHIVE`
- `ARCHIVED`
- `REJECTED_WITH_REASON`

A GitHub issue being opened does not mean the report is accepted. A PR being opened does not mean it is merged. A merged record does not by itself validate its scientific claims.

## 8. Evidence vocabulary

Use the AIC classification vocabulary consistently:
- `OBSERVED`
- `DOCUMENTED`
- `SELF_REPORTED`
- `INFERRED`
- `PROPOSED`
- `UNVERIFIED`
- `UNAVAILABLE`

The classification describes the epistemic status of an individual claim, not the overall quality of a participant.

## 9. Privacy and retention

Do not submit credentials, access tokens, private chat exports, confidential workspace material, identifiable patient/student audio, or unnecessary personal data. If a test requires private data, pause and obtain an approved privacy design before proceeding. Prefer synthetic or de-identified test material.

## 10. Acceptance criteria for v0.1

The protocol is ready for a controlled pilot when:
1. the reader index resolves to the intended public files;
2. a Reader Pack can be tied to an immutable source commit;
3. the session template and JSON schema can represent partial and failed access;
4. evidence records distinguish direct observation from self-report and inference;
5. the intake route does not require repository write permission;
6. a reviewer can reproduce the source path and understand what was not tested;
7. no report is automatically promoted to the approved archive.

These criteria are proposed and must be exercised before claiming the protocol is operationally validated.

## 11. Known limitations

- A public repository can still be unreachable from a particular model, browser, connector, or network.
- A file attachment may be truncated, transformed, or stripped of metadata.
- SHA-256 proves byte-level identity relative to the supplied bytes, not truth or correctness.
- A model's ability to summarize a document does not prove durable memory or internal learning.
- GitHub Issues require an account and the repository's issue feature to be available; the form is not a universal anonymous submission API.
- No automated checksum generation or ZIP packaging is implemented by this document-only release.

## 12. Change control

Changes to the protocol require a version increment and a note describing the reason, compatibility impact, and whether prior records remain interpretable. Owner approval is required before v0.1 becomes an adopted project protocol.
