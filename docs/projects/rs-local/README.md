# RS-L — Local Scientific Research Environment

**Project ID:** RS-L  
**Status:** Draft — exploratory specification; not approved by the Research Center  
**Version:** 0.1-draft  
**Date:** 2026-11-27

## Purpose

RS-L is a proposed locally operated instance of Rolling Science for a research institution or other authorized local environment. Its first proposed host is the Research Center at the University of Sabha, subject to institutional review, authorization, infrastructure assessment, and a written operating agreement.

RS-L is intended to provide a protected, locally administered environment for discovering, organizing, searching, reviewing, and developing scientific knowledge without routine connection to the public internet.

It is not merely a private copy of the public GitHub repository, a document archive, or a cloud service with a local-looking interface. It is a separate operational environment with its own data, users, policies, logs, backups, and release decisions.

## Core distinction

- **Upstream Rolling Science:** the public research seed, shared methods, specifications, and materials explicitly approved for public release.
- **RS-L instance:** a separately governed local deployment. The host institution administers its infrastructure and operational access under an agreed mandate.
- **Local knowledge and data:** remain subject to the rights, permissions, consent, and restrictions of their creators, custodians, participants, and applicable authorities. Hosting does not automatically transfer ownership or publication authority to the host.

No synchronization of local records to GitHub or any external service is assumed or permitted by default.

## Intended capabilities

1. Local cataloguing and indexing of approved research sources.
2. Full-text search across supported document formats.
3. Metadata and provenance tracking for each source and derived record.
4. Multilingual search as language resources become available and tested.
5. Research workspaces and evidence records with role-based access.
6. Controlled review and export workflows.
7. Optional local AI-assisted retrieval and analysis, only if models and dependencies run fully within the local environment and do not transmit content externally.
8. Auditable administration, backups, restoration, and controlled software updates.

## Explicit non-goals for the first release

- No automatic publication or synchronization to GitHub.
- No public-facing access to local datasets.
- No assumption that all local research material should be open.
- No automatic AI-generated scientific conclusions or unreviewed claims.
- No patient, student, staff, or other identifiable human data in the initial pilot.
- No internet-dependent search, APIs, telemetry, analytics, cloud inference, or external authentication.
- No claim that an air-gapped or offline system is inherently secure.

## Governance model

The host institution may administer the local infrastructure, accounts, security controls, service availability, and operational policies within its lawful authority and written agreement.

The host's server or administrator role does not automatically confer ownership of research content, unrestricted access to all records, authority to change consent conditions, or authority to publish material owned or controlled by others.

Each collection or research package must have an access and release classification, a named data steward or rights authority, a purpose, retention rules, and an export decision path.

## Initial release concept

The first pilot should use only synthetic data and/or non-sensitive scientific sources whose use and local storage permissions are clear. It should demonstrate reliable local ingestion, indexing, search, provenance display, access control, audit logging, backup, and restoration before any sensitive local data are considered.

## Project status discipline

This document is a proposal. It does not establish that the Research Center has accepted the project, committed servers, appointed staff, approved a security design, or authorized processing of any data. All such facts remain unverified until documented.

## Related specifications

- [Governance and authority boundaries](GOVERNANCE.md)
- [Technical requirements and architecture](TECHNICAL_REQUIREMENTS.md)
- [Data handling and threat model](DATA_HANDLING_AND_THREAT_MODEL.md)
- [Phased implementation and acceptance plan](IMPLEMENTATION_PLAN.md)
- [Human-governed paper exchange protocol](PAPER_EXCHANGE_PROTOCOL.md) — mandatory paper-mediated boundary for all interaction with external people, applications, and services.
