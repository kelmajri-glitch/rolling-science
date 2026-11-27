# RS-L Human-Governed Paper Exchange Protocol

**Document ID:** RS-L-PAPER-001  
**Status:** Draft — proposed mandatory architectural requirement  
**Version:** 0.1-draft  
**Date:** 2026-11-27  
**Applies to:** Every interaction between the RS-L local engine and people, applications, or services outside its protected computing environment.

## 1. Purpose

This document specifies a paper-mediated interaction boundary for the proposed local Rolling Science environment (RS-L).

The requirement is stronger than ordinary offline operation. The local engine must not directly communicate with external human stations, AI applications, internet-connected computers, cloud services, or public repositories. The authorized exchange between the protected RS-L environment and the outside world is mediated by physical paper:

- Human discussion and deliberation enter the governed workflow first as handwritten hard-copy records.
- Only a finalized, authorized, paper-recorded submission is entered into RS-L by an authorized operator.
- RS-L returns results as printed packages and knowledge capsules.
- If outside consultation is required, approved printed material is physically carried to a separate computer that is not part of, and has no network or storage connection to, RS-L servers or workstations. The paper is digitized there for consultation with an external human or application.
- External feedback is returned as a printed hard copy, reviewed and registered by humans, and only then may an authorized operator enter an approved record into RS-L.

**Paper is the exchange boundary, not merely a backup format.**

## 2. Mandatory architectural rule

No direct digital channel may connect RS-L to an external environment.

Prohibited by default:
- Internet access from RS-L servers or user workstations.
- Cloud APIs, hosted AI inference, remote search, external telemetry, analytics, remote fonts, CDNs, or external authentication.
- Direct network access from an outside consultation computer to RS-L.
- USB, external disks, memory cards, Bluetooth, Wi-Fi, NFC, shared folders, network shares, remote desktop, email, messaging, or other digital transfer paths between RS-L and outside systems.
- Automatic synchronization with GitHub or any other repository.
- Scanning, photographing, or uploading paper records using an RS-L-connected device for the purpose of external consultation.

Any proposed exception would require a separately approved risk assessment and formal change to this protocol. It is not part of the baseline design.

## 3. Two environments and one physical boundary

### 3.1 Protected local environment

Contains:
- RS-L application and search engine;
- local databases, indexes, source documents, and research records;
- authorized local workstations;
- local print service and designated printers;
- controlled physical records room or cabinets;
- local audit and backup systems.

All devices in this environment are managed under the host institution's security authority.

### 3.2 External consultation environment

Contains:
- separate computers used to prepare and submit consultation requests;
- external human reviewers and AI applications;
- external internet or service access where authorized;
- printers and scanners used only outside the protected RS-L environment.

The external environment must not be connected to RS-L by network, shared storage, removable media, peripheral bridging, or remote access.

### 3.3 Physical paper boundary

Paper documents are the only approved content-bearing exchange objects between the two environments.

The movement of each paper package must be logged. The protocol must preserve the document's identity, version, classification, custody, approvals, and return/disposal status.

## 4. Governed production cycle

### Stage A — Handwritten team deliberation

1. Team members discuss the research question and work scope in person or through an institutionally approved process that does not directly connect to RS-L.
2. Initial notes, proposals, objections, and clarifications are recorded by hand on controlled forms or numbered paper sheets.
3. Each record receives a unique serial identifier, date, page number, author/contributor identifier or approved attribution choice, and project/package reference.
4. Corrections remain legible: strike through once, date/initial the correction, and preserve the original wording. Do not silently erase or rewrite a disputed position.
5. The team identifies which notes are drafts, which are agreed procedural summaries, and which disagreements remain open.
6. A designated recorder prepares a finalized handwritten submission packet. A second designated team member checks completeness and page sequence.
7. The packet is signed or otherwise attested under the institution's approved procedure. A signature confirms the record's submission/attestation, not the scientific truth of its claims.

No unreviewed conversation notes are automatically treated as approved research evidence.

### Stage B — Controlled admission to RS-L

1. An authorized intake officer receives the physical packet and records receipt, serial range, page count, sender/team, date/time, classification, and custody.
2. The officer checks required approvals, rights, consent/ethics references where applicable, completeness, and whether the material is permitted for local processing.
3. The packet is assigned an RS-L intake ID and scanned only by an approved local process if local archival scanning is required. Such scans remain inside RS-L and inherit the same access classification.
4. An authorized operator transcribes the approved content into RS-L. The system stores the transcription with the paper record's ID and source reference.
5. A second person compares the transcription against the original paper. Material discrepancies are corrected through a logged amendment, not silent overwrite.
6. RS-L records the operator, checker, timestamps, source paper ID, version, and any unresolved transcription uncertainty.
7. The original paper is returned to its designated physical archive under the retention policy.

The engine must distinguish a human-authored source, a transcription, an editorial summary, an AI-generated synthesis, and a verified finding.

### Stage C — Local processing and deliberation

RS-L may:
- search local authorized collections;
- retrieve and cite source documents;
- organize evidence and counter-evidence;
- identify missing information and unresolved disagreements;
- prepare draft analyses, research packages, and knowledge capsules;
- record methods, provenance, limitations, and confidence/uncertainty labels.

RS-L must not silently convert a discussion record into a verified scientific result. A generated output remains a draft or analytical aid until the relevant human review and validation steps are completed.

### Stage D — Printed output from RS-L

1. The engine produces a print-ready package or knowledge capsule.
2. Each output has a unique ID, version, issue date, originating project, classification, page number, total page count, and source/provenance references.
3. The output states its status: draft, request for consultation, review copy, approved record, or other controlled state.
4. It identifies what feedback is requested, what is out of scope, what may be shared externally, and what must not be disclosed.
5. The print job is logged, including the user, printer, document ID/version, page count, and classification.
6. The printed copy is checked against the approved digital version before release.
7. The release authority signs the paper release register.

No paper leaves the protected environment solely because the print command succeeded.

### Stage E — External consultation using a separate computer

1. A named human custodian receives the approved paper package and signs the physical handover register.
2. Before digitization, the custodian checks the package against the release approval and removes or redacts any content not authorized for external disclosure.
3. The paper is scanned or manually transcribed using a computer that is physically and logically separate from RS-L.
4. The external consultation copy is prepared with only the minimum information necessary for the question.
5. The external human or application receives the consultation request through the external computer's permitted channels.
6. The custodian records which external station/service was consulted, the date, the exact version/material sent, the question asked, and any applicable service terms or privacy concerns.
7. No external response is automatically imported into RS-L. It must be printed and returned through the paper intake process.

The external computer must not share accounts, drives, clipboard, network shares, printers with internal-only paths, or remote-management channels with RS-L.

### Stage F — Return and admission of external feedback

1. The response is printed outside RS-L and physically returned to the authorized local recipient.
2. The recipient logs the returned document ID, source/station, date, page count, custody, and any missing pages.
3. The team reviews the response on paper. It may accept, reject, qualify, or leave it unresolved.
4. The review records whether the response is a self-reported opinion, a source-supported analysis, an executed test, or independently verified evidence.
5. Any accepted content is entered into RS-L by an authorized operator with the returned paper cited as its source.
6. A second person checks the transcription against the returned paper.
7. The system preserves the original external response, the human assessment, and any later correction as separate linked records.

External advice is not automatically authoritative. A response from an AI application is an attributed external contribution, not independent verification merely because it is formatted or confident.

## 5. Required paper instruments

The first implementation must provide printable templates for:

1. **Handwritten Deliberation Sheet** — question, participants/attribution choices, proposals, objections, clarifications, date, page sequence.
2. **Decision and Open-Disagreement Record** — what was agreed procedurally, what remains disputed, whose positions are preserved, and why.
3. **RS-L Intake and Transcription Form** — paper ID, intake ID, transcriber, checker, classification, transcription status, discrepancy log.
4. **Knowledge Capsule / Research Package** — purpose, status, evidence, source references, limits, open questions, requested action, permitted audience.
5. **External Consultation Release Form** — release authority, approved pages, redactions, recipient/station, purpose, expiry or retention conditions.
6. **Physical Custody Register** — handover/receipt, custodian, time, document IDs, page counts, condition, signatures/attestation.
7. **External Response Review Form** — source, claims, evidence, action reportedly performed, verification status, objections, disposition.
8. **Return and Re-entry Form** — returned paper ID, intake checks, transcription, independent comparison, linked RS-L record IDs.
9. **Incident / Missing Paper Record** — lost, damaged, misdirected, copied, or unauthorized disclosure events.

Forms must support handwritten completion, clear page numbering, and use without a computer.

## 6. Required system functions

RS-L software must support the paper governance protocol rather than bypass it.

- Generate unique, non-reusable IDs for intake records, research packages, capsules, print releases, consultation cycles, and returned responses.
- Generate printable templates and print-ready packages with stable version and page identifiers.
- Record source-paper IDs and the identity/role of transcribers and checkers.
- Preserve original transcription, corrected transcription, amendments, and review history.
- Link external feedback to the exact package version that was sent.
- Distinguish human-authored, transcribed, machine-generated, externally supplied, reviewed, tested, and independently verified content.
- Record access, searches on restricted collections where appropriate, ingestion, print, approval, and export/release events.
- Enforce access classification on search results, snippets, indexes, generated summaries, print jobs, and derived documents.
- Provide an explicit “no external release approved” state.
- Produce an audit report of each paper-mediated cycle.
- Continue to operate when no external consultation is requested.

The software must not provide a hidden network export, email button, cloud share, or direct AI connector that circumvents the paper boundary.

## 7. Paper record integrity and physical security

Paper is not inherently secure. The institution must provide:
- locked storage for active and archived records;
- controlled access to cabinets and record rooms;
- numbered forms or controlled print batches;
- tamper-evident envelopes or sealed folders for sensitive transfers where appropriate;
- a sign-out/sign-in custody register;
- rules for photocopying, scanning, photographing, and destruction;
- retention and secure disposal schedules;
- procedures for missing, damaged, altered, or misdirected documents.

For high-sensitivity material, the external consultation copy should be a separately approved, minimized derivative rather than a photocopy of the complete internal record.

## 8. Privacy and minimization

Before any paper package leaves the protected environment:
- remove direct identifiers unless their disclosure is specifically authorized and necessary;
- assess whether contextual details could identify a person, small community, institution, or sensitive site;
- remove credentials, internal network details, unpublished sensitive findings, and unrelated content;
- assess whether combining the proposed material with public information could reveal protected facts;
- record the disclosure decision and its rationale.

Pseudonymization or removal of names alone does not guarantee anonymity.

## 9. Human accountability and role separation

At minimum, the workflow separates these duties:
- author/contributor;
- team recorder;
- submission approver;
- RS-L intake officer;
- transcriber;
- transcription checker;
- print-release approver;
- paper custodian;
- external consultation operator;
- response reviewer.

A small institution may assign more than one role to a person when necessary, but the same person should not approve and independently verify their own high-risk action. Exceptions must be recorded.

## 10. Acceptance tests

The prototype is not accepted until it demonstrates:

1. A complete handwritten deliberation packet can be admitted and uniquely registered.
2. A second person can compare the transcription with the original paper and record corrections.
3. RS-L can produce a versioned, numbered, classified knowledge capsule.
4. No capsule can be externally released without a recorded human approval.
5. The external consultation workflow can be completed using a separate computer with no digital connection to RS-L.
6. External feedback can be returned on paper, registered, reviewed, transcribed, and independently checked.
7. Every stage can be reconstructed from paper registers and RS-L audit records.
8. The same cycle works with no internet connection and no removable-media transfer.
9. Unauthorized attempts to bypass the paper boundary are prevented by network configuration and operating procedure, and detectable through audit/review.
10. Missing pages, duplicate IDs, altered papers, transcription discrepancies, and unapproved release attempts are handled without silent loss of history.
11. A test user cannot retrieve restricted content through search snippets, generated summaries, print outputs, or derived indexes.
12. The local environment remains usable if the external consultation computer is unavailable.

## 11. Operational trade-offs and risks

The paper boundary reduces direct digital exfiltration paths and creates deliberate human review points. It does not eliminate:
- photography or unauthorized copying;
- insider disclosure;
- loss or theft of paper;
- human transcription errors;
- delayed or incomplete feedback;
- re-identification from released material;
- external service retention or reuse after an approved upload;
- coercion, collusion, or misuse of authorized release roles.

The process also adds time and administrative workload. These costs must be measured during the pilot rather than dismissed.

## 12. Pilot scope

The first pilot should use:
- synthetic or clearly authorized non-sensitive research material;
- a small team;
- one local RS-L prototype;
- one controlled printer and paper archive;
- one separate external consultation computer;
- one full outward-and-return consultation cycle;
- no patient, student, staff, or identifiable participant data.

The pilot should measure cycle time, transcription error rate, missing/duplicate paper rate, approval completeness, unauthorized-transfer attempts, search usefulness, and user workload.

## 13. Non-goals and unresolved policy decisions

This protocol does not determine:
- the Center's legal authority or exact institutional jurisdiction;
- ownership of each source or contribution;
- which external AI services are acceptable;
- how long each category of paper must be retained;
- the exact physical layout or equipment procurement;
- whether every research topic is suitable for external consultation.

These decisions require institutional, legal, ethics, data-owner, and security review.

## 14. Core rule

**No direct digital conversation between RS-L and the outside world. Human deliberation enters on paper; authorized local processing occurs inside RS-L; approved outputs leave on paper; external consultation occurs on separate equipment; external responses return on paper and are reviewed before re-entry.**

This is the defining interaction architecture of RS-L under this proposal.
