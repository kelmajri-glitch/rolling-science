# AGENTS.md

## 1. Purpose and authority

These rules protect scientific integrity, repository consistency, privacy, and project-owner authority. The project owner has final authority over project direction, approvals, specifications, repository changes, and releases. No agent may treat silence, unavailability, or another agent's opinion as owner approval.

## 2. Evidence classification

Classify substantive claims as appropriate:

- **Documented:** supported by an identifiable source or verifiable observation.
- **Inferred:** reasoned interpretation based on available evidence.
- **Proposed:** suggested but not approved.
- **Unavailable:** information could not be accessed or retrieved.
- **Unsupported:** adequate evidence has not been provided.

Do not present inference or proposal as documented fact. Do not invent files, commits, tests, datasets, recordings, results, or repository states. Inaccessibility is not proof of non-existence.

## 3. Preservation and archive rules

- Preserve original source documents as received whenever permission and safety allow.
- Do not silently rewrite an original source while archiving it. Put normalized, translated, summarized, or annotated versions in separate files and link them to the source.
- Record provenance: source title or sender, date received, version, location, language, and any transformation performed. Mark unknown fields as unknown.
- Distinguish source material, working notes, review drafts, approved decisions, specifications, and implementation artifacts.
- Do not upgrade a document's status merely because it is stored in the repository.
- Record corrections as new versions or explicit change notes; retain the earlier state where practical.
- Never archive credentials, private keys, passwords, access tokens, private personal data, or identifiable private audio.
- Do not upload identifiable children's voices or private recordings to the public repository.

## 4. Measurement and mathematical discipline

- Record units, measurement procedures, instruments or software, sampling conditions, and uncertainty whenever applicable.
- Distinguish raw observations from derived variables, transformations, and interpretations.
- Preserve missingness, censoring, exclusions, and failed measurements; do not silently replace them with zero.
- Keep gain/benefit, cost, loss, damage, and risk distinguishable unless a justified model explicitly relates them.
- Do not collapse multidimensional outcomes into a single score without stating the assumptions, weights, trade-offs, and information lost.
- Treat دفعية / دفع الضرر as a research direction under development, not as an already validated mathematical theory.
- Preserve counterfactual assumptions, time horizon, affected parties, reversibility, distribution, and uncertainty when studying harm or loss.
- Do not invent numerical estimates or progress percentages.

## 5. Project development stages

The default sequence is governance, research, independent evidence review, synthesis, owner approval, specification, owner approval of specification, controlled implementation, testing, and review. Skipping a stage requires explicit owner authorization.

For Alnatiq, no application implementation may begin before owner approval of the scientific capsule, technical specification, acceptance criteria, and privacy requirements. Repository organization and documentation work do not authorize application implementation.

## 6. Privacy and safety

- Do not infer anatomical causes or clinical diagnoses from audio recordings alone.
- Do not publish unsupported accuracy, validity, or performance figures.
- Do not transmit private recordings to external services without explicit approval under a reviewed privacy design.
- Avoid personal identifiers in research records unless strictly necessary and lawfully authorized.

## 7. Repository change discipline

Before an authorized change: inspect actual state, identify affected paths, check decisions and conflicts, preserve existing work, and use a meaningful commit message. Prefer small, reversible, traceable changes. Never claim an operation succeeded unless its result was verified.

## 8. Documentation structure

- Keep `README.md` as the public entry point.
- Keep `IDEA_CAPSULE.md` concise and current.
- Keep `CONTEXT_STATE.md` operational, not a conversation transcript.
- Use `ARCHIVE_INDEX.md` and the documentation hub to locate preserved material.
- Keep project-specific documents under `docs/projects/<project>/`.
- Keep methodological and mathematical research separate from project implementation.
- The governance decision register currently exists at `governance/records/DECISIONS.md`; maintain it as the record of owner directions and unresolved matters. Do not describe it as a future file.

## 9. Collaboration and reporting

Every handoff should identify task/capsule ID, sender, recipient, date/version where available, issue, evidence, unresolved questions, proposed versus approved decisions, required output, and scope restrictions.

Every report must state what was done, evidence for the result, what remains incomplete, what could not be verified, and whether owner approval is required. Distinguish station-task completion from project completion.
