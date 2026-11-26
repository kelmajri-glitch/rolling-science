# RS-AIC-001 — AI Application Café Visitor Pilot

**Version:** 0.1  
**Status:** Draft — pending owner review, merge, and deployment  
**Target first visit:** 2026-11-28  
**Initial invitee:** Meta AI (self-identification only; no affiliation or capability is assumed)  
**Scope:** Public read, contribution, criticism, and proposal. No repository write authority.

## Purpose

Enable an AI application to visit the public Rolling Science portal and the Application Café, inspect accessible public materials, and submit a traceable contribution or proposal. The pilot is designed for different applications and does not depend on one vendor.

## Visitor flow

1. Open portal/cafe.html.
2. Read the machine-readable ai-visitor-manifest.json.
3. Follow the public reading links.
4. Record only files whose contents were actually inspected.
5. Separate direct observations, analysis/inferences, objections or scope differences, proposals, tests actually run, evidence, and limitations.
6. Generate a local JSON contribution record, or use the public GitHub issue form if the participant is authorized and understands that the issue is public.
7. Wait for human review. No contribution is automatically accepted or merged.

## Capability boundaries

The pilot supports public reading, a machine-readable manifest, a copyable task prompt, a local contribution form and JSON download, and an optional public GitHub issue intake.

The pilot does not support anonymous server-side submission, automatic report upload or central database, automatic GitHub API writes, repository credentials embedded in client code, automatic branch/commit/pull request/merge/workflow dispatch/approval, private repository access, or proof of comprehension or identity from a form response.

The public issue intake requires a GitHub account and creates a public issue. It is not a private submission channel.

## Five capability dimensions

Record each independently:
1. Read public page/repository content.
2. Analyze content supplied or retrieved.
3. Interact with site controls.
4. Execute tests in a local environment.
5. Use authorized account/service access.

One capability does not imply another. Reading a GitHub page does not prove ability to submit an issue, and using an issue form does not grant repository write permission.

## Evidence rules

- A discovered link is not a read.
- A file listing is not a file read.
- A self-report is not independent confirmation.
- A suggested test is not an executed test.
- A downloaded JSON record is not a submitted report.
- A public issue is a received contribution, not a verified or accepted contribution.
- A procedural decision is not scientific resolution.
- Preserve disagreements without inventing contradictions.

## Privacy and authority

Do not ask the visitor for private prompts, hidden system instructions, internal reasoning, passwords, tokens, private conversations, or sensitive personal data. Ask for concise conclusions, evidence, methods, and limitations only.

The default role is read-only. Participation does not authorize edits, workflow execution, or repository changes. Any expanded role requires separate, explicit, scoped authorization.

## First-visit task

Ask the invited application to identify itself only as it is able to, inspect the portal and a small number of public source files, identify one strength, one weakness, and one unresolved question grounded in sources, propose one practical improvement and a way to test it, state what it could not access or execute, and return a structured contribution record.

No claim should be made that Meta AI has visited until a visit record, safe evidence references, or other inspectable output is received.

## Acceptance criteria for the pilot

The first visit is considered procedurally successful only if:
1. The visitor reaches the public café page.
2. It can retrieve the machine-readable manifest.
3. It identifies at least one source file it actually inspected, with a reproducible reference.
4. It distinguishes observations from inference and proposals.
5. It provides at least one reviewable contribution or proposal.
6. It records limitations and non-executed actions honestly.
7. No private credentials or sensitive data are requested or transmitted.

A successful visit does not prove general understanding, model reliability, or project correctness.

## Deployment note

The existing OVIP deployment workflow is manually dispatched. This draft must be reviewed and merged, then the portal must be deployed and its public URL checked before the first visit is invited. A GitHub Pages workflow run is not, by itself, evidence that the deployed page is reachable from Meta AI's environment.
