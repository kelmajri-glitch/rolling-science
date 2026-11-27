# RS-L Data Handling and Preliminary Threat Model

**Status:** Draft — preliminary; requires local security and legal review  
**Version:** 0.1-draft  
**Date:** 2026-11-27

## 1. Scope and warning

This is an initial threat model for planning. It is not a security audit, risk certification, legal opinion, or guarantee that an offline deployment is safe.

The system is expected to hold research documents, metadata, working notes, and potentially sensitive local knowledge. The initial pilot must avoid identifiable human-participant data.

## 2. Assets to protect

- Original source documents and licensed materials.
- Local research data and contextual knowledge.
- Participant, author, and contributor identities where present.
- Access credentials and encryption keys.
- Research notes, drafts, and unpublished findings.
- Audit logs and provenance records.
- Search indexes, embeddings, extracted text, and cached content.
- Backups and removable-media transfer packages.
- Availability and integrity of the research environment.

Indexes, embeddings, logs, previews, and temporary files can expose information even when original documents are restricted. They must inherit appropriate access controls.

## 3. Threat actors and failure sources

- Unauthorized external access through misconfigured network routes or exposed services.
- Malicious or compromised insider accounts.
- Accidental disclosure by authorized users.
- Malware introduced through removable media or imported documents.
- Theft, loss, or physical damage of servers and backup media.
- Misconfiguration, weak credentials, unpatched software, or excessive privileges.
- Supply-chain compromise in software, libraries, model weights, or update packages.
- Re-identification or sensitive inference from supposedly de-identified or aggregated data.
- Unauthorized secondary use, linkage, or commercial reuse.
- Power interruption, hardware failure, fire, cooling failure, or backup corruption.
- AI model leakage through prompts, logs, caches, or unintended network fallback.

## 4. Minimum safeguards to design and test

- Physical access controls for server and backup locations.
- Network segmentation and default-deny outbound policy.
- Least privilege, individual accounts, strong authentication, and periodic access review.
- Encryption at rest and for backups, with separately managed keys.
- Malware scanning, file validation, signed updates, and controlled removable media.
- Patch management through a documented offline update process.
- Audit logging with restricted write access and protected retention.
- Tested backups, restoration drills, and documented recovery roles.
- Data minimization, purpose limitation, retention limits, and secure disposal.
- No external model/API fallback, telemetry, or analytics.
- Incident response procedure, including containment, notification, evidence preservation, and recovery.
- Independent security review before sensitive data are admitted.

## 5. Data lifecycle controls

### Before ingestion
Confirm source, rights, purpose, sensitivity, access class, consent/approval if applicable, and retention. Reject material without a lawful and documented basis.

### During ingestion
Scan and validate files, preserve original bytes, calculate cryptographic hashes, record the source and operator, extract text into a controlled derivative, and apply access restrictions to every derivative.

### During use
Enforce authorization at retrieval time, not only in the user interface. Avoid leaking restricted titles, snippets, autocomplete suggestions, embeddings, or search counts to unauthorized users.

### During export
Default to no export. Require a named requester, purpose, destination, data-owner/rights approval, risk review, and a logged decision. Scan exported packages and include a manifest.

### At retention end
Apply approved retention and deletion rules to originals, derivatives, indexes, caches, and backups. Document exceptions and verify deletion where technically feasible.

## 6. Offline update and transfer protocol

A disconnected system still needs security updates and approved knowledge imports. The proposed process is:

1. A designated reviewer identifies an update or import package from an approved source.
2. The package is acquired using a separate controlled device and a documented account.
3. The package's origin, signature where available, hash, version, licence, and release notes are recorded.
4. Malware and integrity checks are performed in a staging environment.
5. A second authorized person reviews the package and approves transfer.
6. The package is moved using controlled media to a quarantine/staging area.
7. Tests run before installation or ingestion.
8. The transfer, approval, test result, and installed version are logged.
9. Rollback material is retained where appropriate.

This is a proposed process; no update authority or equipment is assumed to exist.

## 7. Residual risks

Offline operation reduces some remote-exposure paths but does not eliminate insider misuse, removable-media infection, physical theft, supply-chain attacks, misconfiguration, accidental disclosure, or misuse by authorized users. Risk must be assessed against actual architecture, personnel, facilities, and operating procedures.

## 8. Stop conditions

Do not ingest a collection if:
- its source or rights cannot be established;
- required consent or institutional approval is absent;
- the access class and responsible steward are unknown;
- the system cannot enforce its restrictions on indexes and derivatives;
- backup, incident response, and secure deletion arrangements are absent where required;
- the intended use is incompatible with the documented permission.

Do not connect the system to the internet as a workaround for missing offline dependencies. Resolve dependencies through a controlled, reviewed transfer process.
