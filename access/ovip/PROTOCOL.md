# OVIP-01 — Visitor, Visit, and Session Protocol

**Protocol ID:** RS-OVIP-001  
**Part:** 01  
**Version:** 0.1  
**Status:** Proposed — pending owner review

## 1. Core entities

Keep the following entities separate.

### 1.1 Visitor

A visitor is the human or application actor associated with one or more visits. Visitor identity is recorded only to the degree necessary and permitted.

Allowed identity states:

- ANONYMOUS — no identity supplied.
- SELF_DECLARED — identity supplied by the visitor but not independently verified.
- VERIFIED — verified through a separately documented process.
- PSEUDONYMOUS — stable pseudonymous identifier, only where justified and disclosed.
- UNKNOWN — identity state cannot be determined.

Do not infer a human identity from a display name, or an application/model identity from writing style.

### 1.2 Visit

A visit is a bounded attempt to interact with one identified environment snapshot. A visitor may make multiple visits. Each visit receives a unique, non-semantic identifier.

### 1.3 Session

A session is a group of activities within a visit. Multiple sessions may occur within one visit if the visitor pauses and resumes. Sessionization must not depend on invasive tracking. A visitor-provided resume token or an explicitly consented session mechanism is preferable.

### 1.4 Report

A report is a submitted account of a visit or session. A visit may have no report, one report, or multiple separately versioned reports.

### 1.5 Evidence item

An evidence item supports, qualifies, or challenges a specific claim. Evidence may be a source path, immutable URL, safe excerpt, tool result, test output, or attachment approved for the purpose.

## 2. Environment snapshot

Every visit record should identify, where available:

- canonical repository or environment identifier;
- branch/ref used;
- immutable commit or release identifier;
- retrieval timestamp in UTC;
- index or manifest version;
- access route used.

If the commit cannot be determined, record UNAVAILABLE; do not substitute the current branch head or assume that a mutable main URL identifies a stable snapshot.

## 3. Visitor classes

Use one of:

- HUMAN
- APPLICATION
- MIXED_OR_MEDIATED — a human and application jointly conducted or mediated the visit.
- UNSPECIFIED

For application visitors, record product/model/version only when explicitly exposed or supplied. Do not infer hidden model identity, architecture, internal state, or tools.

For human visitors, do not request age, location, health, or other sensitive attributes unless a separately approved study makes them necessary.

## 4. Visit lifecycle

The lifecycle is flexible; reading and reporting are optional activities. Recommended states:

- STARTED
- ACCESS_ATTEMPTED
- READING_IN_PROGRESS
- INTROSPECTION_DRAFTED
- REPORT_SUBMITTED
- COMPLETED
- INCOMPLETE
- ABANDONED
- WITHDRAWN

These are workflow states, not judgments of visitor competence or cooperation.

A visit may be marked COMPLETED after reading without an introspection report if the visitor's declared goal was reading only. Record the completion basis.

## 5. Access and reading

Use the exact file-level statuses in the existing access protocol:

- READ_FULL
- READ_PARTIAL
- NOT_READ
- NOT_REQUESTED

Record package delivery separately from file reading. For example, NOT_RECEIVED means a requested package was not delivered to the visitor; it is not the same as a received file that was not read.

A discovered link, search snippet, title, directory listing, or link preview is not a file read.

## 6. Comprehension

Comprehension is optional and must be tied to a defined task or test. Use:

- NOT_TESTED
- TESTED
- PARTIALLY_SUPPORTED
- NOT_SUPPORTED_BY_TEST
- UNAVAILABLE

A test result supports performance on that test under its conditions. It does not establish general understanding, intelligence, or internal cognitive state.

## 7. Report and publication are separate

Submission means the report was received by an intake mechanism. It does not mean the report is verified, accepted, endorsed, public, or merged into the repository.

Publication requires an explicit review outcome and the visitor's selected sharing permission.

## 8. Read-only boundary

OVIP participation does not grant permission to modify the repository, run workflows, open pull requests, change settings, access private resources, or inspect other visitors' reports. Any future write capability requires a separate authorization model.

## 9. Failure and missingness

Preserve unsuccessful attempts and missing information. Do not encode unknown values as false, zero, or success. Where the cause is not known, use ERROR_DETAIL_UNAVAILABLE and leave cause attribution unresolved.

## 10. Versioning

Changes to required fields, status meanings, identity handling, consent, or evidence semantics require a version change and a documented migration note. Do not silently reinterpret older visit records.
