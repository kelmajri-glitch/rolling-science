# OVIP-04 — Privacy, Review, and Publication

**Protocol ID:** RS-OVIP-001  
**Part:** 04  
**Version:** 0.1  
**Status:** Proposed — pending owner review

## 1. Default data-minimization rule

The first implementation should collect only what is necessary to identify the environment snapshot, describe access route and file-level outcome, receive an optional report, preserve evidence needed to review specific claims, and honour the visitor's sharing choice.

Do not collect by default:
- full chat histories or full prompts;
- hidden system/developer instructions;
- credentials, tokens, cookies, or private keys;
- device fingerprints or precise location;
- private audio, images, or recordings;
- health, patient, learner, or other sensitive personal data;
- unrelated account identifiers.

If a report includes such information, quarantine it for review and do not publish it. Any redaction or transformation must be documented.

## 2. Consent is granular

Separate these choices:
1. permission to submit a report;
2. permission for a designated review team to inspect it;
3. permission to publish the report after review;
4. permission to quote or reuse excerpts elsewhere.

Consent to submit is not consent to publish. Public repository access does not imply consent to collect visitor analytics.

## 3. Visibility states

- PRIVATE_TO_SUBMITTER — visible only to the submitter through an approved mechanism.
- REVIEW_TEAM_ONLY — visible to explicitly authorized reviewers.
- PUBLIC_AFTER_APPROVAL — publication may occur only after review and separate publication consent.
- PUBLIC_APPROVED — approved for public display.

If the system cannot enforce a selected visibility state, it must not accept the report under that promise.

## 4. Retention and deletion

Before deploying an intake service, the owner must approve what data is retained, where it is stored, who can access it, retention duration, deletion and withdrawal procedure, backup and log retention limits, and how deletion completion is confirmed.

Version 0.1 does not set a retention duration. Do not invent one or begin collection before this is decided.

## 5. Review roles

- Submitter: provides or withdraws their report.
- Intake operator: receives and protects submissions; does not automatically endorse them.
- Reviewer: checks provenance, scope, evidence, and privacy.
- Publisher: authorizes public release under the approved policy.
- Repository maintainer: manages repository changes under owner authorization.

One person may perform more than one role, but the record should show which role was exercised for each action.

## 6. Publication checklist

Before publication, confirm:
- the submitter selected public sharing;
- publication consent remains valid;
- the report is linked to the correct environment snapshot;
- self-report, observation, and inference are visibly distinguished;
- sensitive or confidential information has been removed through a documented process;
- third-party rights permit publication;
- claims are not presented as verified beyond their evidence;
- the report has a stable identifier and review status.

No report is merged into the canonical repository automatically.

## 7. Abuse and integrity controls

A future intake service may need rate limits, duplicate detection, spam controls, and moderation. These controls must be proportionate and documented. Do not treat criticism, negative findings, repeated accessibility failures, or disagreement as abuse.

Do not create behavioural profiles or rank visitors based on submission frequency, identity, or opinion.

## 8. Security boundary

The read portal should not expose write credentials to visitors or client-side code. The report intake service must be isolated from repository write permissions. If a later workflow proposes a pull request, it must be created by an authorized maintainer after review, not by an untrusted public form using privileged credentials.

## 9. Deployment gate

No public intake form, database, analytics, cookies, account system, or publication workflow should be deployed until the owner approves a concrete hosting and data-flow design, threat model and access-control plan, retention and deletion policy, consent wording, acceptance tests including failed submissions and deletion, and an operational owner for moderation and security incidents.

This document is a proposed governance baseline, not evidence that these controls have been implemented.
