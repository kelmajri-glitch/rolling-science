# RS-L Human-Governed Paper Exchange Protocol

**Document ID:** RS-L-PAPER-001  
**Status:** Draft — proposed mandatory architectural requirement  
**Version:** 0.1-draft  
**Date:** 2026-11-27

## 1. Purpose

This document specifies a paper-mediated interaction boundary for the proposed local Rolling Science environment (RS-L).

This is stronger than ordinary offline operation. The local engine must not directly communicate with external human stations, AI applications, internet-connected computers, cloud services, or public repositories. Authorized exchange between the protected RS-L environment and the outside world is mediated by physical paper.

- Human discussion and deliberation are first recorded by hand on controlled paper forms.
- Only a finalized and authorized paper submission is entered into RS-L by an authorized operator.
- RS-L issues research packages and knowledge capsules as printed documents.
- For external consultation, approved paper is physically carried to a separate computer that has no network, storage, account, peripheral, or remote-access connection to RS-L. The paper is digitized there for consultation with an external human or application.
- External feedback returns as printed paper, is reviewed by the local team, and only then may be transcribed into RS-L.

**Paper is the exchange boundary, not merely a backup format.**

## 2. Mandatory architectural rule

No direct digital channel may connect RS-L to an external environment.

Prohibited by default:
- Internet access from RS-L servers or workstations.
- Cloud APIs, hosted AI inference, remote search, telemetry, analytics, remote fonts, CDNs, or external authentication.
- Direct network access from an outside consultation computer to RS-L.
- USB, external disks, memory cards, Bluetooth, Wi-Fi, NFC, shared folders, network shares, remote desktop, email, messaging, or any other digital transfer path between RS-L and outside systems.
- Automatic synchronization with GitHub or another repository.
- Scanning, photographing, or uploading paper records using an RS-L-connected device for external consultation.

Any exception requires a separate risk assessment and formal approval to amend this protocol. It is not part of the baseline design.

## 3. Two environments and one physical boundary

### 3.1 Protected local environment

Contains RS-L application, search engine, local databases and indexes, source documents, authorized local workstations, local print service, controlled paper archive, audit service, and local backups. All devices are managed under the host institution's security authority.

### 3.2 External consultation environment

Contains separate computers used to prepare consultation requests, external human reviewers and AI applications, external internet/service access where authorized, and external printers/scanners. It must not be connected to RS-L through network, shared storage, removable media, peripheral bridging, or remote access.

### 3.3 Physical paper boundary

Paper documents are the only approved content-bearing exchange objects between the environments. Every package movement is logged. Document identity, version, classification, custody, approvals, and return/disposal status must remain traceable.

## 4. Governed production cycle

### Stage A — Handwritten team deliberation

1. Team members discuss the research question and work scope without directly connecting to RS-L.
2. Initial notes, proposals, objections, and clarifications are recorded by hand on controlled forms or numbered sheets.
3. Each record receives a unique serial identifier, date, page number, project/package reference, and author/contributor identifier or approved attribution choice.
4. Corrections remain legible: strike through once, date and initial the correction, and preserve the original wording. Do not silently erase or rewrite a disputed position.
5. The team distinguishes drafts, agreed procedural summaries, and unresolved disagreements.
6. A designated recorder prepares a finalized handwritten submission packet. A second team member checks completeness and page sequence.
7. The packet is attested under the institution's approved procedure. Attestation confirms the record's submission, not the scientific truth of its claims.

Unreviewed conversation notes are not automatically treated as approved research evidence.

### Stage B — Controlled admission to RS-L

1. An authorized intake officer receives the packet and records receipt, serial range, page count, sender/team, date/time, classification, and custody.
2. The officer checks approvals, rights, consent/ethics references where applicable, completeness, and permission for local processing.
3. The packet receives an RS-L intake ID. If archival scanning is used, it occurs only through an approved local process and remains inside RS-L under the same access classification.
4. An authorized operator transcribes approved content into RS-L and cites the paper record ID.
5. A second person compares the transcription against the original. Discrepancies are corrected through a logged amendment, not silent overwrite.
6. RS-L records operator, checker, timestamps, source paper ID, version, and unresolved transcription uncertainty.
7. The original paper is stored in its designated archive under the retention policy.

The system distinguishes human-authored source, transcription, editorial summary, AI-generated synthesis, and verified finding.

### Stage C — Local processing

RS-L may search authorized local collections, retrieve and cite source documents, organize evidence and counter-evidence, identify missing information and unresolved disagreements, and prepare draft analyses, research packages, and knowledge capsules.

Generated output remains a draft or analytical aid until relevant human review and validation are completed. A discussion record must not silently become a verified scientific result.

### Stage D — Printed output from RS-L

1. The engine produces a print-ready package or capsule.
2. Each output includes unique ID, version, issue date, originating project, classification, page number/total pages, source and provenance references.
3. It states its status: draft, consultation request, review copy, approved record, or other controlled state.
4. It identifies requested feedback, scope, permitted audience, and prohibited disclosures.
5. The print job is logged: user, printer, document ID/version, page count, and classification.
6. The printed copy is checked against the approved digital version.
7. The release authority signs the paper release register.

A successful print command alone does not authorize a document to leave the protected environment.

### Stage E — External consultation on separate equipment

1. A named custodian receives the approved package and signs the physical handover register.
2. The custodian checks the package against the release approval and removes/redacts material not authorized for external disclosure.
3. The paper is scanned or manually transcribed using a computer physically and logically separate from RS-L.
4. Only the minimum information necessary for the consultation question is prepared.
5. The external human or application receives the request through the external computer's permitted channels.
6. The custodian records the external station/service, date, exact version/material sent, question asked, and relevant service terms/privacy concerns.
7. No external response is automatically imported into RS-L. It must return in printed form and pass the paper intake process.

The external computer must not share accounts, drives, clipboard, network shares, internal-only printer paths, or remote-management channels with RS-L.

### Stage F — Return and admission of external feedback

1. The response is printed outside RS-L and physically returned to the authorized recipient.
2. The recipient logs response ID, source/station, date, page count, custody, and missing pages.
3. The team reviews the response on paper and may accept, reject, qualify, or leave it unresolved.
4. The review classifies the response as self-reported opinion, source-supported analysis, reportedly executed test, documented execution, or independently verified evidence.
5. Accepted content is entered by an authorized operator with the returned paper cited as source.
6. A second person checks transcription against the returned paper.
7. The original external response, human assessment, and later corrections remain separate linked records.

External advice is not automatically authoritative. An AI response is an attributed external contribution, not independent verification merely because it is confident or well formatted.

## 5. Required paper instruments

The first implementation must provide printable templates for:

1. **Handwritten Deliberation Sheet** — question, participants/attribution choices, proposals, objections, clarifications, date, page sequence.
2. **Decision and Open-Disagreement Record** — procedural agreement, unresolved disputes, preserved positions, rationale.
3. **RS-L Intake and Transcription Form** — paper ID, intake ID, transcriber, checker, classification, status, discrepancy log.
4. **Knowledge Capsule / Research Package** — purpose, status, evidence, source references, limits, open questions, requested action, permitted audience.
5. **External Consultation Release Form** — release authority, approved pages, redactions, recipient/station, purpose, retention conditions.
6. **Physical Custody Register** — handover/receipt, custodian, time, document IDs, page counts, condition, attestation.
7. **External Response Review Form** — source, claims, evidence, actions reportedly performed, verification status, objections, disposition.
8. **Return and Re-entry Form** — returned paper ID, intake checks, transcription, independent comparison, linked RS-L record IDs.
9. **Incident / Missing Paper Record** — lost, damaged, misdirected, copied, or unauthorized disclosure events.

Forms must support handwriting, clear page numbering, and completion without a computer.

## 6. Required system functions

RS-L software must support rather than bypass the paper protocol:

- Generate unique, non-reusable IDs for intake records, research packages, capsules, print releases, consultation cycles, and returned responses.
- Generate printable forms and packages with stable version and page identifiers.
- Record source-paper IDs and transcriber/checker identities and roles.
- Preserve original transcription, corrected transcription, amendments, and review history.
- Link external feedback to the exact package version sent.
- Distinguish human-authored, transcribed, machine-generated, externally supplied, reviewed, tested, and independently verified content.
- Record access, restricted searches where appropriate, ingestion, print, approval, and release events.
- Enforce access classification on search results, snippets, indexes, generated summaries, print jobs, and derivatives.
- Provide an explicit “no external release approved” state.
- Produce an auditable record of each paper-mediated cycle.
- Continue functioning when no external consultation is requested.

No hidden network export, email button, cloud share, or direct AI connector may circumvent the paper boundary.

## 7. Paper integrity and physical security

Paper is not inherently secure. The institution must provide locked storage, controlled access to archives, numbered forms or controlled print batches, custody registers, rules for photocopying/scanning/photography/destruction, retention schedules, and procedures for missing or altered documents.

For high-sensitivity material, the external consultation copy must be a separately approved, minimized derivative rather than a photocopy of the complete internal record.

## 8. Privacy and minimization

Before a paper package leaves the protected environment:
- remove direct identifiers unless specifically authorized and necessary;
- assess whether contextual details could identify a person, small community, institution, or sensitive site;
- remove credentials, internal network details, unpublished sensitive findings, and unrelated content;
- assess linkage with public information;
- record the disclosure decision and rationale.

Removing names alone does not guarantee anonymity.

## 9. Human accountability and role separation

The workflow distinguishes author/contributor, team recorder, submission approver, intake officer, transcriber, transcription checker, print-release approver, paper custodian, external consultation operator, and response reviewer.

A small institution may assign multiple roles to one person when necessary, but the same person should not approve and independently verify their own high-risk action. Exceptions are recorded.

## 10. Acceptance tests

The prototype is not accepted until it demonstrates:

1. A handwritten deliberation packet can be admitted and uniquely registered.
2. A second person can compare transcription with paper and record corrections.
3. RS-L produces a versioned, numbered, classified capsule.
4. No capsule leaves without recorded human approval.
5. External consultation completes on a separate computer with no digital connection to RS-L.
6. External feedback returns on paper, is registered, reviewed, transcribed, and independently checked.
7. Each stage is reconstructable from paper registers and RS-L audit records.
8. The full cycle works without internet and without removable-media transfer.
9. Unauthorized bypass attempts are prevented by configuration and procedure, or detected and escalated.
10. Missing pages, duplicate IDs, altered papers, transcription discrepancies, and unapproved release attempts do not silently erase history.
11. Restricted content is not exposed through search snippets, generated summaries, print outputs, or derived indexes to unauthorized users.
12. Local operation continues if the external consultation computer is unavailable.

## 11. Trade-offs and residual risks

The paper boundary reduces direct digital exfiltration paths and creates deliberate human review points. It does not eliminate photography, insider disclosure, loss/theft, transcription errors, delay, re-identification, external service retention after an approved upload, or misuse by authorized users.

The process adds time and administrative workload. The pilot must measure these costs.

## 12. Pilot scope

Use synthetic or clearly authorized non-sensitive material, a small team, one local prototype, one controlled printer and paper archive, one separate external consultation computer, and one full outward-and-return cycle. Do not use patient, student, staff, or identifiable participant data.

Measure cycle time, transcription error rate, missing/duplicate paper rate, approval completeness, unauthorized-transfer attempts, search usefulness, and user workload.

## 13. Core rule

**No direct digital conversation between RS-L and the outside world. Human deliberation enters on paper; authorized local processing occurs inside RS-L; approved outputs leave on paper; external consultation occurs on separate equipment; external responses return on paper and are reviewed before re-entry.**

This is the defining interaction architecture proposed for RS-L.
