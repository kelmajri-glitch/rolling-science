# Rolling Science Reader Access

**Version:** 0.1 draft  
**Purpose:** Provide platform-independent, read-only access paths to the public Rolling Science knowledge base.

This directory defines how a participating application or human reviewer can identify, retrieve, and cite a known snapshot of repository knowledge. It does not grant write access and does not imply that a tool successfully opened a link merely because the link is listed here.

## Start here

1. Read [READER_INDEX.md](READER_INDEX.md) for the minimum reading path and direct source links.
2. Read [ACCESS_PROTOCOL.md](ACCESS_PROTOCOL.md) before reporting access success.
3. Use [READER_PACK_MANIFEST.template.json](READER_PACK_MANIFEST.template.json) when preparing an offline package.
4. Record the exact source commit and per-file status in the session record defined by the AIC protocol.

## Supported access modes

- **GitHub connector:** read files and metadata through an explicitly connected GitHub integration.
- **GitHub web/raw/API:** retrieve the exact file or metadata endpoint. A link preview or search snippet is not a successful read.
- **Offline Reader Pack:** a curated archive of files with a manifest, source commit, and SHA-256 checksums.
- **Human-mediated attachment:** an operator attaches the Reader Pack or selected files to a session when direct retrieval is unavailable.

The access mode is evidence about the route used, not proof that every requested file was read.

## Permission boundary

The repository is public. Reading public material does not require write permissions. Participating applications are not granted repository write access by this protocol. Reports should be submitted through the AIC intake route or a proposed pull request for human review; no incoming report is automatically accepted into the archive.

Never place credentials, tokens, private recordings, identifiable learner data, or confidential workspace content in a Reader Pack or public issue.

## Version and integrity

Every Reader Pack must identify:
- repository and source branch;
- immutable source commit SHA;
- generation timestamp in UTC;
- included paths and each file's SHA-256 checksum;
- omitted or unavailable files;
- any transformation, translation, or normalization.

A package without a source commit or file checksums may be used for exploratory reading, but it is not a fully traceable snapshot.

## Status

This is a proposed v0.1 protocol on a review branch. It is not yet an owner-approved operational release.
