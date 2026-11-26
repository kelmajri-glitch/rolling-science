# Rolling Science Visitor Portal — OVIP 0.1

**Status:** Prototype source; not deployed.  
**Purpose:** Public reading navigation and local-only visitor introspection record generation for humans and applications.

## Contents

- `alnatiq-lab.html` — local experiment-record interface for B-001/B-002.
- `alnatiq-lab.css` and `alnatiq-lab.js` — local interface styles and browser logic.
- `index.html` — accessible, responsive visitor interface.
- `styles.css` — responsive styles.
- `app.js` — GitHub snapshot lookup and local JSON record generation.
- `visitor-manifest.json` — machine-readable capability and data-handling declaration.

## Alnatiq local experiment lab

Open `alnatiq-lab.html` from this directory to create, filter, inspect, export, import, and delete B-001/B-002 experiment records. The lab stores records in browser `localStorage` on the current device. It does not transmit records to GitHub or any server. Export a backup before clearing browser data. Import performs a basic structural check only; authoritative JSON Schema validation remains available through the repository validation script and CI workflow.

The form currently supports a bounded subset of the experiment record schema. It deliberately initializes human-data presence as false and must not be used to register identifiable human audio or participant data. Human-data and ethics approvals remain separate gates.

## Current behaviour

1. Provides direct links to public repository materials.
2. Requests public repository metadata and the current `main` branch SHA from GitHub API.
3. Allows a visitor to describe the files they actually read and their access outcomes.
4. Creates a record using the OVIP visit schema and downloads it to the visitor's device.

The portal does not upload reports, write to GitHub, create issues, retain drafts in browser storage, set cookies, or use analytics. The visitor's statements are self-reported and are not independently verified by the portal.

## Run locally

Open `index.html` in a modern browser. GitHub snapshot lookup requires network access to `api.github.com`; the reading links and local report-generation flow can otherwise be used, subject to browser restrictions on local file downloads.

For a local HTTP server with Python:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/portal/` from the repository root.

## Security and privacy boundaries

- No external JavaScript libraries.
- No form action or network submission endpoint.
- No localStorage, sessionStorage, cookies, analytics, or account system.
- No credentials or private material should be entered.
- The browser may contact GitHub API for public repository metadata. GitHub's own service terms and logs apply to that request.
- Downloaded records remain under the visitor's control.

## Optional GitHub Pages deployment

A manual deployment workflow is provided at `.github/workflows/deploy-ovip-portal.yml`. It is intentionally triggered only through `workflow_dispatch`; merging this PR does not automatically publish the portal. Before running it, a repository administrator must set **Settings → Pages → Build and deployment → Source → GitHub Actions**. Then run the workflow from the Actions tab and verify the resulting Pages URL. The workflow publishes only the contents of this `portal/` directory. No report intake or database is deployed.

## Not implemented

- Central report intake or storage.
- Private submission, identity verification, moderation, or deletion service.
- Automated verification of file reading or comprehension.
- GitHub Pages deployment or any public hosting configuration.

These require separate security, privacy, retention, and operational approval. Do not interpret this source prototype as a deployed public service.
