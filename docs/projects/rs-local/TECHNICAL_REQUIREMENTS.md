# RS-L Technical Requirements and Offline Architecture

**Status:** Draft — requirements baseline, not a procurement specification  
**Version:** 0.1-draft  
**Date:** 2026-11-27

## 1. Architecture objective

Provide a locally accessible scientific discovery and research environment whose core functions continue without an internet connection and whose content is not transmitted to external services.

The intended deployment is an institutionally administered local network with local servers. “Offline” means no routine internet route or external service dependency for application functions. It does not mean the system has no network, nor does it guarantee security.

## 2. Logical architecture

1. **Local user interface:** browser-based interface reachable only from approved local network segments.
2. **Identity and access service:** local accounts or an institution-approved on-premises identity service; multi-factor authentication if supported and operationally appropriate.
3. **Ingestion service:** controlled import of documents and metadata; malware scanning and file-type validation before indexing.
4. **Metadata catalogue:** title, authorship, date, language, source, rights, access class, provenance, and version.
5. **Search index:** full-text index for supported formats, with filters and exact-source references.
6. **Optional semantic retrieval:** locally hosted embedding model and vector index, added only after benchmark and privacy review.
7. **Research workspace:** notes, evidence records, review tasks, and project/package records.
8. **Audit service:** append-only or tamper-evident records of authentication, access to restricted collections, administrative changes, ingestion, exports, and security events.
9. **Backup and recovery:** encrypted backups on separately controlled local media or a second local system, with tested restoration.
10. **Controlled update/import station:** a documented process for bringing signed software updates, security patches, model files, and approved reference packages into the offline environment.

## 3. Search capability stages

### Stage 1 — dependable local discovery

- Search titles, authors, abstracts, keywords, and extracted full text.
- Filter by date, language, source, document type, collection, and access class.
- Show source location, version, and exact passage or page reference where extraction supports it.
- Report unsupported, scanned, corrupted, or partially indexed documents rather than silently omitting them.

### Stage 2 — multilingual and semantic retrieval

- Add Arabic and English tokenization and language-aware ranking.
- Add additional African and local languages only with documented language resources, evaluation material, and community/linguistic review.
- Evaluate transliteration, spelling variants, morphology, and cross-language query expansion separately.
- Semantic retrieval must return traceable source passages and must not replace exact search.

### Stage 3 — local AI assistance (optional)

- Any model used for protected material must execute locally.
- Disable external API calls, telemetry, remote logging, and cloud fallback.
- Display cited source passages and distinguish retrieved evidence from generated synthesis.
- Provide a no-AI mode with equivalent access to core search.
- Do not treat generated summaries as validated research findings.

## 4. Network and deployment requirements

- No default route from the RS-L server network to the public internet.
- Deny outbound traffic by default at the network boundary.
- Separate user, server, administration, and backup segments where feasible.
- Administrative access only from designated managed devices or a controlled administration segment.
- No consumer cloud storage, external analytics, remote fonts, CDNs, external authentication, or online model inference.
- Record and review any temporary connection used for updates; temporary connectivity must be a separately approved exception, not a hidden dependency.
- Provide local DNS and time synchronization or a documented offline time source.
- Restrict and log removable-media use; scan and verify imported files at a controlled transfer station.

## 5. Data storage and protection

- Encrypt storage and backups where supported, with keys controlled separately from the data.
- Apply least-privilege role-based access at collection and document level where required.
- Separate identity information from research content when feasible.
- Define retention, archival, legal hold, and secure deletion procedures.
- Ensure backup restoration does not bypass access controls or reintroduce deleted/withdrawn data contrary to policy.
- Do not ingest identifiable patient, student, staff, or participant data during the initial pilot.

## 6. Performance and availability

No server size or throughput target is specified yet. Capacity planning requires a discovery exercise covering:
- number of expected users and concurrent searches;
- initial corpus size, formats, languages, and growth rate;
- scanned-PDF/OCR proportion;
- required search response times;
- local AI model size and hardware acceleration, if any;
- backup window and recovery objectives;
- electricity, cooling, physical security, and spare-parts availability.

The first pilot should benchmark actual candidate hardware using a representative, non-sensitive test corpus before procurement.

## 7. Interoperability and portability

- Use documented, non-proprietary export formats for metadata and research records where feasible.
- Preserve source files separately from extracted text and generated indexes.
- Provide a complete export manifest with hashes, versions, rights labels, and provenance.
- Ensure the local instance can be backed up and restored without GitHub or external network access.
- Upstream code/specification updates are imported as reviewed release packages; local data are not pushed upstream.

## 8. Minimum acceptance tests

1. Disconnect all internet routes and demonstrate core search and user workflows still function.
2. Monitor network traffic and confirm no attempted external transmission by the application or model stack.
3. Search known test terms and verify expected documents and source passages are returned.
4. Test Arabic and English indexing separately, including known edge cases.
5. Confirm users cannot access collections outside their assigned roles.
6. Confirm restricted-document access and export events are logged.
7. Import a test package from controlled media and verify signatures/hashes and malware scanning.
8. Restore from backup on a clean local system and verify record counts, permissions, and file hashes.
9. Confirm a non-AI search mode remains available if the local model is stopped.
10. Test power interruption and safe recovery under realistic local conditions.

## 9. Explicitly unselected technology choices

No database, search engine, operating system, server vendor, vector database, model, OCR engine, or hardware configuration is selected in this requirements document. Selection follows requirements validation, a local infrastructure survey, security review, and a measured prototype.
