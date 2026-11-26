# Read-Only Access and Provenance Protocol

**Protocol ID:** RS-ACCESS-001  
**Version:** 0.1 draft  
**Status:** Proposed; pending owner review

## 1. Purpose

Enable different applications and human reviewers to read the same Rolling Science source material through different technical routes, while preserving provenance and avoiding dependence on one vendor, connector, or model.

## 2. Access is not a single event

Report these stages separately:

1. **Link discovered:** the URL or path is known.
2. **Endpoint opened:** a request or navigation attempt was made.
3. **Content returned:** non-empty file content or structured metadata was returned.
4. **Content inspected:** the returned content was actually read or parsed.
5. **Content understood:** a separate task-specific test supports a claim of comprehension.

Do not report a higher stage when only a lower stage is evidenced. A failed fetch does not prove that a repository, file, or service does not exist.

## 3. Read-only rule

The default participation permission is read-only. A reader must not:
- create or update repository files;
- create branches, commits, issues, or pull requests on behalf of the owner;
- merge, close, or retarget pull requests;
- change repository settings or permissions;
- execute workflows or actions that mutate external state.

Submitting an AIC report is a separate, explicitly authorized intake action. It does not authorize changes to the canonical repository.

## 4. Access modes

Use one or more of these labels:

- `GITHUB_CONNECTOR`
- `GITHUB_WEB`
- `RAW_FILE_URL`
- `GITHUB_API`
- `OFFLINE_READER_PACK`
- `HUMAN_MEDIATED_ATTACHMENT`
- `OTHER` (describe)

Record tool/product and version only when exposed by the environment. Do not infer hidden model identity or connector implementation.

## 5. File-level access outcomes

Every requested file receives exactly one primary status:

- `READ_FULL` — complete content returned and inspected.
- `READ_PARTIAL` — only a range, excerpt, truncated response, or incomplete content inspected.
- `NOT_READ` — no usable content inspected.
- `NOT_REQUESTED` — outside the task's requested scope.

A directory listing is not a file read. A successful API response containing metadata is not a read of the files named in that metadata.

## 6. Snapshot identity and integrity

For each session, record:
- repository full name;
- branch/ref used;
- immutable commit SHA, if available;
- retrieval time in UTC;
- file path and returned blob SHA, if available;
- SHA-256 checksum for offline package files;
- any content transformations.

Do not calculate or report a checksum unless it was actually calculated from the exact bytes. A Git blob SHA and SHA-256 file checksum are different identifiers and must be labelled separately.

## 7. Offline Reader Pack

An offline pack should contain only a curated, permitted subset of repository documents and a manifest. The manifest template is provided in this directory.

The pack must not contain:
- passwords, access tokens, private keys, or session cookies;
- private or identifiable learner/patient recordings;
- personal data not necessary for the task;
- confidential connector exports;
- unreviewed third-party content whose redistribution rights are unknown.

A pack is a snapshot, not a live mirror. State its generation date and source commit prominently.

## 8. Error recording

When access fails, preserve:
- attempted URL/path;
- access mode;
- time and timezone;
- exact error text or status code, if available;
- whether the failure occurred before or after content retrieval;
- alternative route attempted.

If no diagnostic error is exposed, write `ERROR_DETAIL_UNAVAILABLE`. Do not guess whether the cause was authentication, network filtering, rate limiting, tool restrictions, or repository state.

## 9. Evidence and interpretation

Keep separate:
- self-report by the participating application;
- directly observed tool output or artifact;
- operator-provided context;
- analyst interpretation.

A claim that a file was read must be supported by a content excerpt, file citation, blob identifier, or equivalent reproducible artifact. Do not expose secrets or private content merely to prove access; cite path and safe line ranges instead.

## 10. Review status

Reports are incoming evidence, not approved repository facts. A human reviewer checks scope, provenance, privacy, reproducibility, and consistency before any archival promotion.
