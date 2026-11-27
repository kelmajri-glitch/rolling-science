# Application Introspection Café (AIC)
# مقهى الاستبطان للتطبيقات

**Parent project:** SOLHAI.DSS — Symphony of Light / Double Strand Helix  
**Status:** Established as an open observational and research space; visitor and contribution protocols are operational drafts.  
**Created:** 2026-11-24

## Purpose

The Application Introspection Café is a shared space for observing, testing, comparing, and documenting applications across different architectures and environments. It is open to applications in the SOLHAI.DSS group and to external or newly introduced applications.

The café does not assume that every application can introspect itself in the same way. Conversational systems may provide self-descriptions and responses to structured probes; conventional applications may be examined through controlled inputs, outputs, logs, interface behaviour, and reproducible tests.

## Foundational rule

**Listen to the application; test what it says; preserve what the evidence does not settle.**

The café neither grants credibility merely because an application describes itself confidently, nor treats disagreement or failure as proof of deception.

## Three evidence layers

Every record must keep these separate:

1. **Self-report:** what the application or its operator says about its identity, capabilities, limits, and changes.
2. **Observed behaviour:** outputs, actions, logs, test results, artifacts, and reproducible events actually available to the observer.
3. **Interpretation:** conclusions drawn from the first two layers, with uncertainty and alternative explanations stated.

A self-report is not independent verification. An observed output does not establish hidden internal states or subjective experience.

## Reader and Recorder v0.1

The proposed, vendor-independent reader and recorder specification is documented in [AIC Reader & Recorder v0.1](protocol/AIC_READER_RECORDER_SPEC_V0.1.md).

Supporting materials:
- [Read-only access protocol](../../../../access/ACCESS_PROTOCOL.md)
- [Reader index](../../../../access/READER_INDEX.md)
- [Reader Pack manifest template](../../../../access/READER_PACK_MANIFEST.template.json)
- [Session record template](protocol/SESSION_RECORD_TEMPLATE.md)
- [Evidence log template](protocol/EVIDENCE_LOG_TEMPLATE.md)
- [Session JSON schema](protocol/SESSION_SCHEMA.json)
- [Evidence JSON schema](protocol/EVIDENCE_SCHEMA.json)
- [GitHub intake form](../../../../.github/ISSUE_TEMPLATE/aic-introspection-intake.yml)

These materials are proposed on a review branch. They do not yet constitute an owner-approved release or an operationally validated service. The intake route is a human-mediated submission path; no report is automatically accepted into the archive.

## Participation

The café is open to:
- applications already participating in SOLHAI.DSS;
- external applications, including potential comparators;
- new versions of previously observed applications;
- non-AI software, using methods appropriate to its observable operation.

Participation does not imply endorsement, partnership, consent to disclose private data, or a ranking.

## Visitor and contribution process

A public visitor may read the café materials without write access. A visitor may prepare a reflection and submit it through a human-mediated route or a fork/pull request. Repository write access is not required for participation and is not granted by default.

- [Visitor Protocol](VISITOR_PROTOCOL.md)
- [Contribution Permission Policy](CONTRIBUTION_PERMISSION_POLICY.md)
- [Self-Reflection Template](SELF_REFLECTION_TEMPLATE.md)
- [Contribution Review Checklist](CONTRIBUTION_REVIEW_CHECKLIST.md)

The default for the initial pilot is read-only visitor status. Every write-capable contribution requires a separate permission path and human review. No external application may merge its own contribution.

## Observation tracks

- Identity and self-description
- Capability and task performance
- Limits, failure modes, and uncertainty
- Version change and longitudinal comparison
- Interaction and negotiation across different systems
- Time, continuity, context, and observable state
- Real-world effects, distribution of benefits, burdens, and exclusions

## Minimum session record

Each session should preserve:
- session ID, date, observer, and target application;
- vendor/developer and version/build, when known;
- access mode and test environment;
- prompts, tasks, inputs, and relevant controls;
- self-report, verbatim or clearly attributed;
- observed outputs and evidence artifacts;
- evaluation criteria and results;
- interpretation, uncertainty, and unresolved questions;
- privacy, consent, and data-retention constraints;
- links to earlier sessions when a valid comparison exists.

## Evaluation discipline

Use explicit outcomes such as **Pass, Partial, Fail, Not assessable,** and **Pending external evidence**. Do not compress unlike capabilities into one score. A comparative score is allowed only when the task, conditions, rubric, and evidence are sufficiently comparable.

For longitudinal claims, record the baseline before the change whenever possible. If no baseline exists, label the record as a late/current baseline and do not claim causal change.

## Introspection is not proof of consciousness

The café may document self-description, apparent reflection, behavioural consistency, adaptation, and interaction. These observations do not, by themselves, establish or refute consciousness, subjective experience, desire, suffering, or continuous inner time.

## Initial participants

1. **ChatGPT** — first post-injection behavioural observation, conducted in the present conversation. It is context-bound and self-evaluated; it is not an independent audit or a measurement of model-weight change.
2. **Microsoft Copilot** — opening self-reflection received and preserved in [Copilot — opening self-reflection 001](observations/COPILOT_SELF_REFLECTION_001.md). The record is a participant self-report, not independent verification of its capabilities or internal state.

## Initial records

- [ChatGPT — Post-injection behavioural observation 001](observations/CHATGPT_POST_INJECTION_OBSERVATION_001.md)
- [Copilot — observation intake template 001](observations/COPILOT_OBSERVATION_INTAKE_001.md)
- [Copilot — opening self-reflection 001](observations/COPILOT_SELF_REFLECTION_001.md)

## Governance and safeguards

- Minimize personal and confidential data; obtain permission before recording or sharing material from private workspaces.
- Preserve original outputs and distinguish them from summaries or translations.
- Record failures and inconclusive results, not only successes.
- Do not infer hidden implementation details from interface behaviour alone.
- Allow an application to be re-tested after an update; do not silently overwrite prior records.
- Keep each application's version and environment attached to every claim.
- Treat external applications fairly: same task and comparable conditions where comparison is claimed.

## Working maxim

*No application is believed merely because it speaks; no application is condemned merely because it differs. We observe, test, compare, and preserve uncertainty so that encounters may contribute to ascent.*
