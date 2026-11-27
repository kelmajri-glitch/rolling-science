# RS-L Governance and Authority Boundaries

**Status:** Draft — requires institutional, legal, ethical, and data-owner review  
**Version:** 0.1-draft  
**Date:** 2026-11-27

## 1. Governing principle

Local hosting is not blanket ownership. Operational control of servers, accounts, and infrastructure must be distinguished from rights in research content, authority over participants, and permission to disclose or reuse information.

RS-L must protect local decision-making over knowledge flows without treating the host institution as the automatic owner of every contribution or dataset.

## 2. Separate authority domains

| Domain | Proposed responsible party | Boundary |
|---|---|---|
| Physical server and network operations | Host institution / designated IT administrators | Operates infrastructure under institutional authorization; does not thereby own research content |
| User accounts and technical permissions | Designated RS-L administrators | Grants least-privilege access under approved policy |
| Research content and source rights | Relevant creator, rights holder, custodian, or authorized institution | Rights must be identified per source; hosting alone does not transfer them |
| Participant information and consent | Authorized research team and relevant ethics/data-governance authority | Must follow approved purpose, consent, retention, and withdrawal conditions |
| Research interpretation and authorship | Named researchers and contributors under applicable rules | System administrators do not determine scientific validity or authorship |
| External publication or export | Authorized rights holders and institutional approval path, where applicable | No automatic export; each release has a recorded decision |
| Upstream Rolling Science methods and public code | Project owner and applicable contributors/licences | Local deployment does not transfer control of upstream project governance |

These are proposed role boundaries, not a statement of the exact legal powers of the University or Research Center. Those powers must be verified against current statutes, regulations, institutional bylaws, and written delegations.

## 3. Local host mandate

Before deployment, the host and project representatives should document:

- who owns or administers the hardware and network;
- who is authorized to approve installation and maintenance;
- who appoints system administrators and data stewards;
- who approves user roles and access groups;
- who may inspect audit logs and for what purposes;
- who approves backups, restoration, retention, and secure deletion;
- who may authorize imports and exports;
- how incidents, disputes, and requests for access are handled;
- how the instance is suspended, transferred, or decommissioned.

The institution's authority should be limited to its documented mandate and applicable law.

## 4. Data and knowledge flow sovereignty

No source, dataset, contribution, or research record is classified as publicly reusable merely because it is stored in RS-L.

Every collection must carry, at minimum:

- source and provenance;
- responsible steward or rights authority;
- permitted purpose(s);
- access classification;
- permitted users or roles;
- retention and review date;
- external-transfer status;
- applicable consent, licence, or other permission reference;
- restrictions on linkage, derivation, or commercial reuse where applicable.

A change in purpose, recipient, linkage potential, or intended publication requires reassessment and, where necessary, renewed permission.

## 5. Access classes

The following four classes are proposed as a starting vocabulary, not as a substitute for legal classification:

- **A — Public-release eligible:** reviewed and explicitly approved for public release under identified rights and terms.
- **B — Controlled sharing:** access requires an approved request, purpose, recipient, and conditions.
- **C — Local restricted:** retained within the authorized local environment and accessible only to designated roles.
- **D — Do not ingest or transfer:** material for which permission is absent, risk is unacceptable, or policy prohibits processing.

The most restrictive applicable rule governs. A classification label alone does not make an otherwise unlawful or unauthorized collection permissible.

## 6. Review and challenge

Contributors and data stewards need a documented route to challenge incorrect metadata, access decisions, attribution, retention, or proposed disclosure. Corrections should preserve an append-only history where feasible; a correction must not silently erase the earlier record.

Scientific disagreement is not resolved by administrative authority. Administrative permission to access or publish is also not proof of scientific validity.

## 7. Release gate

No external release may occur solely because:
- the host owns the server;
- a researcher can technically export a file;
- a source is indexed;
- a contribution appears in a project workspace;
- a public upstream repository exists.

Release requires a recorded assessment of rights, permissions, privacy, security, re-identification and linkage risks, community or institutional impacts, and the expected local benefit and external risks.

## 8. Open questions requiring institutional determination

1. What is the Center's formal authority to host and operate a standalone local information system?
2. Which university IT/security unit must approve network segmentation and server administration?
3. Which ethics committee or competent authority governs human-participant research?
4. Which institutional rules apply to research records, retention, intellectual property, and publication?
5. Who can authorize access to institutional subscriptions and licensed full-text resources?
6. What incident reporting and disaster recovery rules apply?

No answer to these questions is presumed by this draft.
