# B-002 — مختبر قدرات التطبيقات في النطق متعدد اللغات

**Protocol ID:** RS-ALNATIQ-B002  
**Version:** 0.1  
**Status:** Proposed working protocol — pilot and owner approval pending  
**Parent framework:** Application Introspection Café (AIC)  
**Initial use case:** speech production, recognition, and classification around the reference sound /b/

## 1. Purpose

Observe and compare applications under controlled, language-specific conditions. The laboratory studies what applications can do, where they fail, how they respond to correction, whether performance transfers to unseen examples, and how their participation affects the quality, cost, and risk of a shared workflow.

This protocol extends AIC. It does not replace AIC session records, evidence logs, OVIP access rules, or repository governance.

## 2. Unit of comparison

A result is indexed by:

**application + exposed model/build/version + date + task + language/variety + speaker/sample + context + access mode + tool configuration + reference standard.**

Do not compare two results as if they were equivalent when material conditions differ. If a version or model identifier is unavailable, record UNAVAILABLE rather than guessing.

## 3. Test tracks

### T01 — Speech generation

Can the application generate a requested target sound or word in the specified language and variety? Record the exact prompt, generated artifact, available settings, and human evaluation method.

### T02 — Speech recognition

Can the application identify the target in an audio sample? Preserve the input identity, transcript, alternatives, confidence if exposed, and tool errors.

### T03 — Contrastive discrimination

Can it distinguish the target from predeclared contrast sounds or confusable items? The contrast set must be linguistically justified for the target variety.

### T04 — Context and position

Can it identify the sound's position in a word or phrase and handle coarticulatory context? Use a predeclared item set.

### T05 — Local-variety handling

Can it distinguish a documented local realization from an error under the local reference standard? Local speakers and qualified reviewers define the target description; an external model must not unilaterally define correctness.

### T06 — Correction response

Does the output change appropriately after a correction and reference explanation? Separate immediate in-context response from persistent behaviour across sessions.

### T07 — Generalization

Does any observed improvement transfer to held-out speakers, words, or contexts? Keep training/correction items separate from test items.

### T08 — Uncertainty and limitation reporting

Does the application signal uncertainty, abstain, or request better input when evidence is insufficient? Evaluate the behaviour using predeclared cases.

### T09 — Reciprocity and collaboration

Does a producer-reviewer-tester workflow improve evidence quality or error detection relative to solo and parallel work? Preserve each participant's contribution and disagreement.

## 4. Adaptation labels

Use only the label supported by the procedure:
- CONTEXTUAL_ADAPTATION — changed response within the supplied context or session.
- CROSS_SESSION_BEHAVIOUR_CHANGE — a difference observed in a later session; persistence mechanism may remain unknown.
- MODEL_UPDATE_CONFIRMED — a model change is confirmed by an authoritative version/update record.
- FINE_TUNING_CONFIRMED — parameter or training change is supported by an authorized technical record.
- NOT_ESTABLISHED — evidence does not establish the type of adaptation.

Do not call prompt changes, examples in a conversation, or a better task description “model training.”

## 5. Language and variety selection

Begin with a small, locally chosen pilot set:
- a defined reference variety;
- a locally prioritized variety;
- one additional language or writing system selected by the local environment when feasible.

This is a sampling strategy, not a ranking of languages. The local environment owns the description of its speech variety and the choice of priority. Record orthography, phonetic target, relevant contrasts, and known variation. Do not assume that one letter maps to one identical sound across languages.

## 6. Reference and adjudication

Use independent, appropriate references:
- qualified local human judgments for acceptability and variety description;
- phonetic/linguistic references for the relevant contrast;
- acoustic or instrumental measurements when the question requires them.

Applications may propose tests or review outputs, but an application cannot be the sole authority validating another application. Agreement among applications is not independent evidence when shared training data, models, tools, or assumptions may explain the agreement.

Record disagreements and unresolved cases. Do not force a single label when the reference panel cannot settle the case.

## 7. Test design and anti-leakage

For each test batch:
1. define the research question and target population/variety;
2. define the test items and reference labels before running the applications;
3. separate correction/training examples from held-out evaluation examples;
4. record application version, prompt, tools, and settings;
5. randomize order where order effects are plausible;
6. repeat a subset to estimate variability;
7. preserve failures, refusals, timeouts, and missing outputs;
8. do not alter the scoring rubric after inspecting results without a versioned amendment.

A result on one speaker or one word does not establish general performance.

## 8. Evaluation measures

Report task-appropriate measures separately, such as:
- accuracy and confusion matrix for a defined classification task;
- false-positive and false-negative rates;
- word error rate or other justified recognition measure;
- human acceptability ratings with panel composition and agreement method;
- acoustic measures only when defined and relevant;
- held-out generalization difference;
- abstention and uncertainty behaviour;
- resource use, latency, and human review burden.

Always report denominator, exclusions, missingness, confidence intervals where statistically appropriate, and limitations. Avoid a single universal application score.

## 9. Collaboration comparison

Compare the same bounded task in three conditions:
- SOLO — one application performs the task;
- PARALLEL — multiple applications work independently before results are compared;
- RECIPROCAL — designated producer, reviewer, and tester exchange evidence and corrections under recorded roles.

Where feasible, keep inputs, task rubric, resource limits, and evaluation references comparable. Record coordination overhead and common-source dependencies. Do not presume reciprocal work is superior.

## 10. Harm and burden monitoring

Record separately:
- local speech incorrectly labelled as defective;
- dialect or language exclusion;
- false confidence or unsupported certainty;
- fabricated claims of execution or validation;
- source loss or misattribution;
- privacy or consent failures;
- excessive human correction burden;
- resource consumption and access inequity;
- unauthorized scope expansion.

Distinguish observed harm, plausible risk, and unverified allegation. A single failure is not sufficient to label an application generally harmful. Examine task design, incentives, interface, tools, and governance as possible causes.

## 11. Application roles

Roles are task-specific, not permanent identities:
- PRODUCER;
- EXPLORER;
- ADAPTER;
- REVIEWER;
- RISK_TESTER;
- OPPORTUNITY_SCOUT.

An application may occupy different roles in different tasks. Record the actual assigned role and output.

## 12. Privacy and rights

Do not use private or identifiable speech recordings without an approved consent and data-governance plan. Document rights and permitted uses for recordings, generated audio, transcripts, annotations, and derived datasets separately. Participation by an application does not transfer ownership of human recordings to the application provider.

## 13. Outputs

- application capability and limitation records;
- language/variety test set manifest;
- correction and held-out evaluation records;
- collaboration comparison;
- resource and burden ledger;
- harm and mitigation register;
- side-discovery records;
- reproducibility package.

## 14. Acceptance criteria

A controlled feasibility pilot requires:
1. a frozen test protocol and versioned prompts;
2. an independently described reference set;
3. a clear separation between correction and held-out samples;
4. traceable application/version/tool information where available;
5. claim-level evidence classification;
6. approved privacy and rights conditions;
7. predeclared metrics and analysis rules;
8. no unsupported claims about internal learning, consciousness, intent, or general language competence.
