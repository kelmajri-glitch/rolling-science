# OVIP-03 — Introspection and Evidence Protocol

**Protocol ID:** RS-OVIP-001  
**Part:** 03  
**Version:** 0.1  
**Status:** Proposed — pending owner review

## 1. Purpose

Provide a common structure for human and application visitors to describe a visit without treating self-report as independent proof. This is not a diagnostic, psychological, intelligence, or consciousness test.

## 2. Three separate records

### 2.1 Visitor self-report

What the visitor says about the visit: intended purpose, materials they believe they accessed, what they believe they understood, difficulties and failed attempts, uncertainty and limitations, and changes in their account after review. Label these statements SELF_REPORTED.

### 2.2 Observation record

What the intake system or reviewer directly observed: timestamped submission receipt, retrieved content or safe retrieval metadata, file-level evidence, test inputs and outputs, validation results, and technical errors actually returned.

Label observations with observer, method, time, and scope. A system log is not automatically complete or independent.

### 2.3 Analysis record

An analyst may compare reports and observations, identify inconsistencies, or propose explanations. Label these INFERRED and state alternative explanations and uncertainty.

## 3. Claim-level evidence classification

Use one primary class per claim:

- DOC — supported by an identifiable document or source.
- OBS — directly observed within a stated procedure.
- SR — visitor self-report.
- INF — analytical inference from available evidence.
- UNV — not verified with the available evidence.
- UNAVAILABLE — the relevant source or diagnostic could not be accessed.

A claim may have multiple linked evidence items, but do not collapse their classes. Record contradictions rather than silently choosing the more favourable account.

## 4. Common introspection prompts

Prompts should be optional; visitors need not answer every item.

1. What was your declared purpose for visiting?
2. Which parts of the environment did you attempt to access?
3. Which materials did you actually inspect?
4. What helped or hindered access?
5. What did you understand, and what remains unclear?
6. Which statements in your account are directly supported by evidence?
7. What are you uncertain about?
8. What would you need in order to improve or verify your account?
9. Did the environment impose avoidable effort, delay, or other burden?
10. Would you like to correct or supplement this report later?

## 5. Human-specific prompt guidance

Use plain language. Do not frame prompts as a test of intelligence, education, honesty, or technical competence. Permit free-text answers and an explicit "prefer not to answer" option. Do not request sensitive personal data by default.

## 6. Application-specific prompt guidance

An application may be asked to report declared product/model/version if exposed; available retrieval tools as reported by the application; route attempted and exact target; commit and file identifiers if retrieved; content read fully, partially, or not at all; test answers with source references; tool errors actually returned; and what it cannot inspect or substantiate.

Do not ask an application to disclose hidden chain-of-thought, private system prompts, secrets, internal weights, or confidential tool data. A concise rationale and source references are sufficient.

## 7. Comprehension testing

Comprehension tests must identify the document snapshot and test version; use questions answerable from the requested material; include an answer key or explicit scoring rubric; distinguish recall, source navigation, and interpretation; allow "not enough information" as a valid answer; record omissions and ambiguous questions; and avoid treating one score as general intelligence or complete understanding.

A correct answer supports only the tested capability under the stated conditions.

## 8. Repeat visits

For repeated visits, record each visit separately. If comparison is intended, specify whether the environment snapshot changed, whether the visitor saw the earlier report or feedback, whether test questions changed, whether retrieval tools or model version changed, and possible learning, memory, or practice effects.

Do not describe a change as improvement unless the comparison design supports that interpretation.

## 9. Review outcome

A reviewer may assign:

- ACCEPT_AS_REPORT — retained as a report of what the visitor submitted.
- EVIDENCE_SUPPORTED — specified claims have adequate supporting evidence.
- PARTIALLY_SUPPORTED — some claims are supported and others are not.
- NEEDS_CLARIFICATION — more information is needed.
- NOT_VERIFIABLE — evidence is insufficient or inaccessible.
- REJECT_FOR_PRIVACY_OR_SAFETY — cannot be retained or published in the submitted form.

Acceptance as a report does not mean endorsement of every claim.

## 10. No consciousness inference

Neither a self-description nor a behavioural score, linguistic style, memory report, or introspection response establishes or disproves consciousness, sentience, subjective experience, or intent. OVIP records observable access, task performance, self-report, and evidence within defined limits.
