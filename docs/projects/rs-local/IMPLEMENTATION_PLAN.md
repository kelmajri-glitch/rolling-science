# RS-L Phased Implementation and Acceptance Plan

**Status:** Draft — planning sequence only; no implementation authorization implied  
**Version:** 0.1-draft  
**Date:** 2026-11-27

## Guiding rule

Do not procure or deploy before the institutional mandate, data boundaries, operational requirements, and local infrastructure are understood. Begin with a safe, measurable prototype using synthetic or clearly authorized non-sensitive material.

## Phase 0 — Institutional discovery and mandate

**Outputs**
- Confirmed institutional sponsor and operational owner.
- Written authority to assess candidate facilities and network conditions.
- Current IT/security and research-data policies.
- Named contacts for legal, ethics, library, research, and IT review.
- Initial inventory of available servers, network segmentation, power, cooling, backup, and physical security.

**Exit criteria**
- The host institution confirms the scope it is willing and authorized to host.
- Roles, escalation path, and decision rights are documented.
- No assumption of data transfer or public publication is embedded in the mandate.

## Phase 1 — Requirements and data governance

**Outputs**
- Approved data classification and collection register.
- Source/rights/consent checklist.
- Access-control matrix.
- Retention, backup, export, incident, and deletion policies.
- Initial threat model reviewed by a competent local technical authority.

**Exit criteria**
- A non-sensitive pilot corpus is identified with clear use permissions.
- The institution approves the operating and security requirements.
- The project owner and local host agree on the separation between upstream Rolling Science and the local instance.

## Phase 2 — Offline technical prototype

**Scope**
- One local server or isolated test host.
- Local web interface and identity/access controls.
- Document ingestion and metadata catalogue.
- Full-text search with exact source references.
- Audit logs and backup/restore.
- No sensitive human data and no local AI requirement.

**Exit criteria**
- Core functions work with internet disconnected.
- No unapproved external traffic is observed.
- Access-control, provenance, backup, and restoration tests pass.
- Search quality is evaluated against a known test corpus.

## Phase 3 — Controlled research pilot

**Scope**
- Small group of authorized researchers.
- Limited approved source collections.
- Arabic and English test collections.
- Documented user feedback and task-based evaluation.
- Controlled import/export simulation using synthetic records.

**Exit criteria**
- Search usefulness, error rates, response time, usability, and operational burden are measured.
- No unresolved critical security or rights issue remains.
- The host decides whether to continue, revise, or stop.

## Phase 4 — Optional local semantic and AI functions

Only after the core system is stable:
- Benchmark local models on a curated, rights-cleared evaluation set.
- Confirm all inference, logging, embeddings, and caches remain local.
- Evaluate citation faithfulness, retrieval recall, language coverage, and hallucination behaviour.
- Keep a complete non-AI fallback.
- Prohibit automatic scientific conclusions and automatic external publication.

## Phase 5 — Replication and localization

If the first instance succeeds, document a portable deployment package that another institution can adapt. Do not copy local datasets or institutional accounts into another environment. Transfer only software, approved methods, schemas, and non-sensitive demonstration material.

## Initial measurement framework

| Dimension | Initial measure |
|---|---|
| Offline independence | Required workflows completed with internet routes disconnected |
| Search effectiveness | Recall/precision on a curated set of known queries and relevant documents |
| Provenance completeness | Share of indexed items with source, version, rights, and access metadata |
| Access-control correctness | Authorized and unauthorized access tests, including snippets and derived indexes |
| Data-transfer control | Share of export attempts with complete authorization and audit record |
| Recoverability | Successful restoration and hash/count comparison |
| Local usefulness | Task completion, time-to-find, and researcher feedback |
| Operational sustainability | Staff time, maintenance burden, power/cooling constraints, and update effort |

Do not combine these measures into a single score before their definitions and trade-offs are justified.

## Current completion status

- Requirements baseline drafted: yes.
- Institutional approval: not obtained or verified.
- Site/infrastructure survey: not performed.
- Hardware selected or procured: no.
- Security audit: not performed.
- Software stack selected: no.
- Prototype deployed: no.
- Data ingested: no.
- Acceptance tests: not run.
