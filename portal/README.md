# Rolling Science Visitor Portal — OVIP 0.1

**Status:** Prototype source; deployment remains a separate manual step.  
**Purpose:** Public reading navigation, local-only visitor introspection records, and an AI application café pilot.

## Portal contents


- `alnatiq-lab.html` — local experiment-record interface for B-001/B-002.
- `alnatiq-lab.css` and `alnatiq-lab.js` — local interface styles and browser logic.
- `index.html` — accessible, responsive visitor interface.
- `styles.css` — responsive styles.
- `app.js` — GitHub snapshot lookup and local JSON record generation.
- `visitor-manifest.json` — machine-readable capability and data-handling declaration.
- `cafe.html` — AI application café, visit mission, public reading links, and contribution form.
- `cafe.js` — copyable visit prompt and local contribution JSON generation.
- `ai-visitor-manifest.json` — machine-readable AI café entry point, roles, capabilities, and permission boundaries.
- `ai-contribution-schema.json` — JSON Schema for a proposed contribution record.
- `AI_VISITOR_PILOT.md` — pilot scope, evidence rules, safeguards, and acceptance criteria.

## Alnatiq local experiment lab

Open `alnatiq-lab.html` from this directory to create, filter, inspect, export, import, and delete B-001/B-002 experiment records. The lab stores records in browser `localStorage` on the current device. It does not transmit records to GitHub or any server. Export a backup before clearing browser data. Import performs a basic structural check only; authoritative JSON Schema validation remains available through the repository validation script and CI workflow.

The form currently supports a bounded subset of the experiment record schema. It deliberately initializes human-data presence as false and must not be used to register identifiable human audio or participant data. Human-data and ethics approvals remain separate gates.

## Current behaviour

## Visitor and application behaviour


1. Provides direct links to public repository materials.
2. The OVIP landing page requests public repository metadata and the current `main` branch SHA from GitHub API.
3. Visitors can describe files actually read and their access outcomes.
4. The OVIP form creates a local JSON record and downloads it to the visitor's device.
5. The AI café asks human or application visitors to distinguish direct observations, inferences, proposals, tests, evidence, and limitations.
6. The café creates a local JSON contribution record. It does not transmit that record.
7. An optional GitHub issue template can receive a public contribution. It requires a GitHub account and creates a public issue; it is not a private intake channel.

## Privacy and authority boundaries

- No repository credentials, personal access tokens, or secrets are embedded in client-side code.
- No automatic server submission, central report storage, localStorage, sessionStorage, cookies, analytics, or account system is used by these pages.
- The browser may contact GitHub API for public repository metadata. GitHub's own service terms and logs apply to that request.
- Downloaded records remain under the visitor's control until they choose to share them.
- A downloaded report is not submitted, verified, accepted, or published.
- A public issue is an incoming contribution, not an approved scientific finding or permission to modify the repository.
- Reading the public repository does not grant write access, workflow execution, pull request merge, or approval authority.
- Do not enter passwords, access tokens, private conversations, identifiable patient/student data, or private recordings.

## Run locally

Open `index.html` or `cafe.html` in a modern browser. GitHub snapshot lookup requires network access to `api.github.com`; local report generation otherwise runs in the browser, subject to browser download restrictions.

For a local HTTP server with Python:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/portal/` or `http://localhost:8000/portal/cafe.html`.

## Optional GitHub Pages deployment

The deployment workflow `.github/workflows/deploy-ovip-portal.yml` is intentionally triggered only through `workflow_dispatch`. A repository administrator must confirm **Settings → Pages → Build and deployment → Source → GitHub Actions**, then manually run the workflow from the Actions tab and verify the published URLs.

The workflow publishes only the contents of this `portal/` directory. It does not deploy a report intake backend or database.

## Not implemented

- Anonymous server-side contribution submission or private intake.
- Central report storage, moderation, identity verification, or deletion service.
- Automatic GitHub API writes, issue creation, pull request creation, merging, or workflow dispatch from the café page.
- Automated verification of visitor identity, file reading, comprehension, or contribution claims.
- Browser-based end-to-end test of the café UI or live testing with Meta AI.

These require separate security, privacy, retention, authorization, and operational review. A public page or a self-reported contribution does not by itself establish successful participation.
