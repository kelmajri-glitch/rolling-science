# Rolling Science Reader Index

**Reader Pack specification:** 0.1 draft  
**Canonical repository:** https://github.com/kelmajri-glitch/rolling-science  
**Default branch:** `main` (resolve and record the current commit SHA at the time of retrieval)

This index is a navigation aid. It is not proof that a reader or connector successfully retrieved the linked content.

## Minimum reading path

| Order | Path | Purpose | Direct source |
|---:|---|---|---|
| 1 | `README.md` | Repository purpose, principles, and status | [README](https://github.com/kelmajri-glitch/rolling-science/blob/main/README.md) |
| 2 | `AGENTS.md` | Evidence, preservation, privacy, and collaboration rules | [AGENTS](https://github.com/kelmajri-glitch/rolling-science/blob/main/AGENTS.md) |
| 3 | `CONTEXT_STATE.md` | Operational project state and known limits | [Context state](https://github.com/kelmajri-glitch/rolling-science/blob/main/CONTEXT_STATE.md) |
| 4 | `ARCHIVE_INDEX.md` | Archive navigation | [Archive index](https://github.com/kelmajri-glitch/rolling-science/blob/main/ARCHIVE_INDEX.md) |
| 5 | `governance/README.md` | Governance structure | [Governance hub](https://github.com/kelmajri-glitch/rolling-science/blob/main/governance/README.md) |
| 6 | `governance/records/DECISIONS.md` | Owner directions and unresolved matters | [Decision register](https://github.com/kelmajri-glitch/rolling-science/blob/main/governance/records/DECISIONS.md) |
| 7 | `docs/projects/solhai-dss/introspection-cafe/README.md` | AIC purpose, principles, and existing records | [AIC home](https://github.com/kelmajri-glitch/rolling-science/blob/main/docs/projects/solhai-dss/introspection-cafe/README.md) |
| 8 | `docs/projects/alnatiq/README.md` | Alnatiq project scope and evidence boundaries | [Alnatiq home](https://github.com/kelmajri-glitch/rolling-science/blob/main/docs/projects/alnatiq/README.md) |
| 9 | `access/ovip/README.md` | Proposed open visit and introspection framework | [OVIP overview](https://github.com/kelmajri-glitch/rolling-science/blob/main/access/ovip/README.md) |

## OVIP documents

- [Visitor, visit, and session protocol](https://github.com/kelmajri-glitch/rolling-science/blob/main/access/ovip/PROTOCOL.md)
- [Visit record JSON Schema](https://github.com/kelmajri-glitch/rolling-science/blob/main/access/ovip/VISIT_RECORD_SCHEMA.json)
- [Introspection and evidence protocol](https://github.com/kelmajri-glitch/rolling-science/blob/main/access/ovip/INTROSPECTION_PROTOCOL.md)
- [Privacy, review, and publication](https://github.com/kelmajri-glitch/rolling-science/blob/main/access/ovip/PRIVACY_AND_REVIEW.md)

## AIC records to inspect when relevant

- [ChatGPT post-injection observation 001](https://github.com/kelmajri-glitch/rolling-science/blob/main/docs/projects/solhai-dss/introspection-cafe/observations/CHATGPT_POST_INJECTION_OBSERVATION_001.md)
- [Copilot observation intake template 001](https://github.com/kelmajri-glitch/rolling-science/blob/main/docs/projects/solhai-dss/introspection-cafe/observations/COPILOT_OBSERVATION_INTAKE_001.md)
- [Copilot opening self-reflection 001](https://github.com/kelmajri-glitch/rolling-science/blob/main/docs/projects/solhai-dss/introspection-cafe/observations/COPILOT_SELF_REFLECTION_001.md)

Newer station records should be discovered from the current repository tree, not inferred from this initial list.

## Raw/API alternatives

For a known file on `main`, the raw form is:

`https://raw.githubusercontent.com/kelmajri-glitch/rolling-science/main/PATH`

For repository metadata:

`https://api.github.com/repos/kelmajri-glitch/rolling-science`

For a recursive tree snapshot:

`https://api.github.com/repos/kelmajri-glitch/rolling-science/git/trees/main?recursive=1`

Replace `main` with an immutable commit SHA when reproducibility is required. API access may be blocked by a tool or network policy; record the failure rather than inferring repository absence.

## Required reader declaration

A participating reader must report:
- the access route attempted;
- exact commit SHA or state that it was unavailable;
- each requested path and whether it was read fully, partially, or not at all;
- file SHA/checksum when available;
- any error message returned;
- whether the content was fetched directly or supplied as an attachment.

Do not cite a file as read based only on its title, search result, link preview, or a user's description.
