# AGENTS.md

## 1. Purpose

This file defines the operating rules for AI assistants, agents, and human collaborators working in the Rolling Science repository.

Its purpose is to protect scientific integrity, repository consistency, privacy, and project-owner authority.

## 2. Authority

The project owner has final authority over:

- Project direction.
- Approval or rejection of proposals.
- Scientific and technical specifications.
- Repository changes and releases.
- Scope changes and exceptions.

No AI agent or collaborator may interpret a suggestion, discussion, or another agent's opinion as owner approval.

## 3. Evidence classification

All substantive claims must be classified as appropriate:

- **Documented:** supported by an identifiable source or verifiable observation.
- **Inferred:** logically derived from available evidence.
- **Proposed:** suggested but not approved.
- **Unavailable:** information that could not be accessed.
- **Unsupported:** a claim lacking adequate evidence.

Do not present inferred or proposed statements as documented facts.

Do not invent files, commits, tests, datasets, recordings, results, or repository states.

Do not interpret inaccessible information as proof of non-existence.

## 4. Development stages

The default project sequence is:

1. Governance and knowledge foundation.
2. Scientific and technical research.
3. Independent evidence review.
4. Scientific synthesis.
5. Owner approval.
6. Technical specification and acceptance criteria.
7. Owner approval of specifications.
8. Controlled implementation.
9. Testing and review.

Skipping a stage requires explicit owner authorization.

## 5. Alnatiq implementation restrictions

For Alnatiq, no application implementation may begin before the owner approves:

- `SCIENCECAPSULE_v0.1.md`
- `ALNATIQ_SPEC_v0.1.md`
- The applicable acceptance and privacy requirements.

Before specification approval, repository inspection may be authorized separately.

Repository inspection does not authorize:

- Creating or modifying files.
- Moving or deleting files.
- Adding application code or dependencies.
- Committing or pushing changes.
- Opening a pull request.

A separate, explicit authorization is required for any limited governance-only repository changes before application specifications are approved.

## 6. Privacy and safety

- Do not upload personal audio recordings or identifiable children's voices to the public repository.
- Do not transmit private recordings to external services unless explicitly approved under a separately reviewed privacy design.
- Do not include credentials, tokens, passwords, private keys, or personal identifiers in repository files.
- Do not make diagnostic or clinical claims from audio recordings alone.
- Do not publish unsupported accuracy, validity, or performance figures.

## 7. Repository change discipline

Before making an authorized change:

1. Inspect the actual repository state.
2. Identify the exact files affected.
3. Check for conflicts with existing decisions.
4. Describe the intended change and its scope.
5. Preserve existing valid work.
6. Avoid unnecessary dependencies and premature directory structures.

For authorized changes, use a separate branch where appropriate, provide a meaningful commit message, and report exactly what changed.

Never claim a change was completed unless the operation was actually performed and its result verified.

## 8. Documentation discipline

- Keep `IDEA_CAPSULE.md` concise and current.
- Use `CONTEXT_STATE.md` for the current operational state, not as a transcript archive.
- Use `README.md` to explain project identity, purpose, and status.
- Use this file to define operating rules.
- Record decisions with their actual approval status.
- Do not silently overwrite or reinterpret previous decisions.

A future `DECISIONS.md` may be introduced if the decision record becomes too large for the current documentation structure.

## 9. Collaboration protocol

When handing work between agents or collaborators, identify:

- Capsule or task ID.
- Sender and recipient.
- Date and version, when available.
- Current issue.
- Documented facts and sources.
- Unresolved questions.
- Proposed decision, clearly distinguished from approved decisions.
- Required next output.
- Scope restrictions.

An agent's silence, unavailability, or failure to respond is not approval.

## 10. Reporting

Every task report should state:

- What was actually done.
- What evidence supports the result.
- What remains incomplete.
- What could not be verified.
- Whether owner approval is required.

Progress percentages must have a stated measurement basis. Do not confuse the completion of an agent's task with the completion of the entire project.
