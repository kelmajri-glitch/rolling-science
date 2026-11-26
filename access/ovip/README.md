# Open Visit & Introspection Protocol (OVIP)

**Protocol ID:** RS-OVIP-001  
**Version:** 0.1  
**Status:** Proposed design draft — pending owner review and approval  
**Scope:** Documentation and data-contract proposal only. This is not a deployed portal, intake service, database, or authorization grant.

## Purpose

OVIP defines a platform-independent way for human and application visitors to discover and read public Rolling Science materials, identify the exact environment snapshot they visited, optionally submit an account of their visit and introspection, distinguish self-report from observation and evidence, and choose whether a report remains private or may be considered for publication.

OVIP extends the existing read-only access and AIC work. It does not replace the access protocol, AIC protocol, repository governance, or owner approval.

## Normative boundaries

- Public reading is separate from submitting a report.
- A visit never grants repository write access.
- A report is incoming material, not an approved repository fact.
- Visitor identity may be unknown, self-declared, or verified by a separately defined process. These states must not be conflated.
- Human and application visitors use a common evidence discipline but are not assumed to be equivalent entities.
- No report establishes or disproves consciousness, sentience, intent, or inner experience.
- Missing or failed observation is not proof that an event did not occur.
- No personal data, private conversations, credentials, private recordings, or identifiable learner/patient data should be collected by default.
- Publication requires separate review and explicit publication permission.

## Documents

- [Protocol and lifecycle](PROTOCOL.md)
- [Visit record JSON Schema](VISIT_RECORD_SCHEMA.json)
- [Introspection and evidence protocol](INTROSPECTION_PROTOCOL.md)
- [Privacy, review, and publication rules](PRIVACY_AND_REVIEW.md)

## Relationship to existing repository material

- [Read-only access protocol](../ACCESS_PROTOCOL.md) governs retrieval claims and file-level access status.
- [Reader index](../READER_INDEX.md) provides navigation, not proof of retrieval.
- AIC records remain the project-specific precedent for introspection sessions.
- [Governance decisions](../../governance/records/DECISIONS.md) remain the authoritative record of owner decisions.

## Initial implementation boundary

Version 0.1 specifies the data and governance contract only. It does not authorize deployment of a public website or form, creation of a database, collection of analytics/cookies/device fingerprints/full interaction logs, creation of accounts or identity verification, publication of visitor submissions, visitor write access, or automated ranking of visitors.

Those activities require a separately reviewed technical specification, privacy assessment, acceptance criteria, and owner authorization.

## Acceptance questions for owner review

1. Is the distinction between visitor, visit, session, report, and evidence sufficient?
2. Are the proposed visitor identity and report visibility options acceptable?
3. Should anonymous report submission be supported in the first implementation?
4. Which retention period and deletion procedure should apply?
5. Should the first pilot accept human reports, application reports, or both?
6. Which intake technology and hosting environment are acceptable?

No answer is presumed by this draft.
