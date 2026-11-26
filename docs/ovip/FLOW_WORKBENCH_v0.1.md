# OVIP Flow Workbench 0.1

**Status:** Experimental local-first prototype.  
**Purpose:** Reduce repeated context-writing and manual record reconstruction when coordinating work across human and AI stations.

## Open the workbench

Open `flow.html` in a modern browser, or serve the repository root:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000/portal/flow.html`.

## What it does

- Creates a local workflow with a stable Flow ID.
- Creates station-specific task capsules with Task IDs and acceptance criteria.
- Copies or downloads a task capsule for manual delivery to a station.
- Receives a station response and records its evidence class and limitations.
- Records decisions separately from proposals and contributions.
- Records benefit/output and harm-reduction observations as separate tracks.
- Exports and imports a complete workflow JSON package.
- Generates a short resume brief for continuation in another conversation or environment.

## What it does not do

- It does not call AI providers or automatically send tasks.
- It does not verify the identity or performance of a station.
- It does not provide central storage, accounts, access control, or collaboration sync.
- It does not validate the truth of submitted evidence.
- It does not automatically approve decisions or deploy code.

## Local data handling

The prototype uses browser `localStorage` when the user creates or imports a workflow. Data remains in that browser profile unless the user exports or manually shares it. Clearing browser site data may erase locally stored workflows. Exported JSON files may contain project-sensitive material; store and share them deliberately.

No external JavaScript libraries, analytics, cookies, or network calls are used by the workbench itself. The existing OVIP visitor portal remains separate.

## Data model (initial)

- `flow_id`: workflow identity
- `tasks[]`: station task and generated capsule
- `contributions[]`: received response, evidence class, reference, limitations
- `decisions[]`: proposal/decision state and decision owner
- `measurements`: benefit/output and harm-reduction tracks

Evidence classes: `self_report`, `observed`, `tested`, `derived`, `unverified`.

## Known limitations

- This is a single-browser local prototype; no encryption at rest is provided.
- Browser storage capacity and retention depend on the browser.
- Clipboard access may require HTTPS or localhost; a manual copy fallback is available.
- Imported files should be reviewed before use.
- No schema validator or automated test suite is included in this first UI slice.

## Acceptance test

1. Open the workbench and create a workflow.
2. Add one task for a station and copy its capsule.
3. Paste the capsule into the intended station manually.
4. Paste the response into the intake form and save it.
5. Record a decision and both measurement tracks.
6. Export the workflow JSON.
7. Open a fresh browser profile or clear only this prototype's local storage, then import the JSON.
8. Confirm that Flow ID, tasks, contributions, decisions, and measurements are restored.

A successful manual test should be recorded separately with browser, date, tester, observed steps, failures, and evidence.