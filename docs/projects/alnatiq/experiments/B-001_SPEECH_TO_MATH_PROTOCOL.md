# B-001 — وحدة إنتاج الحدس الرياضي من النطق

**Protocol ID:** RS-ALNATIQ-B001  
**Version:** 0.1  
**Status:** Proposed working protocol — scientific review and owner approval pending  
**Initial case:** الحرف/الصوت العربي ب  
**Parent:** Alnatiq (الناطق)

## 1. Purpose

Design a reproducible learning experiment in which learners move from an observable speech event to a defensible mathematical representation. The initial case is the production of /b/ in a defined Arabic reference environment.

The purpose is not to build a gallery of animated letters. It is to test whether a carefully bounded physical-to-mathematical representation helps learners discover, explain, and transfer mathematical relationships.

## 2. Research questions

1. Can learners identify changes in position and time from a speech-articulation representation?
2. Can they distinguish displacement, velocity, acceleration, force, pressure, and acoustic amplitude rather than treating them as interchangeable arrows?
3. Can they use a representation to explain or predict a new case?
4. Can another local team adapt and reproduce the learning unit without copying the original implementation?
5. Which parts of the representation are supported by anatomical, kinematic, and acoustic evidence, and which remain illustrative?

## 3. Scope and limits

- The initial reference is the Arabic bilabial stop conventionally transcribed /b/ in the specified reference variety. The target variety and its pronunciation description must be stated in each dataset.
- The familiar description “voiced bilabial plosive” is a starting phonetic label, not a complete physiological model.
- The educational unit is non-diagnostic. It must not assess or diagnose a learner's speech, hearing, anatomy, or health.
- A still image or illustrative animation cannot establish actual muscle forces, tissue deformation, pressure, or individual physiology.
- Acoustic data alone cannot establish anatomical movement or diagnose its cause.
- Do not infer a muscle-force vector from visible lip movement without a validated biomechanical model and suitable measurements.
- Do not assume all speakers or local varieties realize the target in identical ways.

## 4. Representation layers

Keep the following layers linked but separately identifiable.

### 4.1 Anatomical layer

Candidate structures for expert review include the lips, orbicularis oris and relevant perioral structures, mandible, oral cavity, velopharyngeal structures, larynx, and vocal folds. The final set and each claimed role require specialist references.

For every structure, record:
- anatomical label and accepted synonym;
- source and edition/page or stable identifier;
- whether it is directly represented, simplified, or omitted;
- confidence and unresolved disagreements.

### 4.2 Articulatory and temporal layer

Represent the event as a sequence of phases appropriate to the target variety and task. A candidate sequence for a reference /b/ is:
- bilabial closure;
- interval during closure, with voicing behaviour documented rather than assumed;
- release;
- transition into the following sound or silence.

The sequence is a testable teaching abstraction. It must be revised if the target variety or reference evidence requires it.

### 4.3 Mathematical layer

Use explicit quantities, units, coordinate frames, and measurement provenance.

Examples:
- position: \\(\\vec r(t)\\) in a declared coordinate frame;
- displacement: \\(\\Delta\\vec r=\\vec r(t_2)-\\vec r(t_1)\\);
- average velocity: \\(\\vec v_{avg}=\\Delta\\vec r/\\Delta t\\);
- acceleration: change in velocity over time, only when time-resolved position data support it;
- pressure: scalar field or scalar quantity with defined location and units, not a displacement vector;
- force: vector quantity, but do not estimate it from animation alone;
- muscle activation: a measured or modelled signal with a declared method, not a generic force arrow;
- acoustic amplitude: signal quantity, not a direct measure of articulatory force.

No mathematical value may be presented without its source, unit, method, and uncertainty or limitation.

### 4.4 Acoustic layer

Preserve the original audio where consent and rights permit. Derived waveform, spectrogram, timing, or feature representations must be traceable to the source recording and processing parameters.

Record sampling rate, channel count, bit depth or encoding where available, microphone/device, environment, processing, segmentation method, and any exclusions. Do not use an acoustic feature as a proxy for anatomy unless that relation is independently justified.

### 4.5 Learning layer

The learner should:
1. observe a defined event;
2. describe what changes;
3. identify the quantity being represented;
4. relate the quantity to time and/or space;
5. explain what the representation does not show;
6. predict or interpret a new example.

A learner's ability to operate the visualization is not itself evidence of mathematical understanding.

## 5. Required learning tasks

- **L01 — Observation:** identify the event boundaries in a supplied, documented example.
- **L02 — Quantity identification:** distinguish position, displacement, velocity, pressure, and amplitude.
- **L03 — Representation critique:** identify at least one unsupported or ambiguous visual claim.
- **L04 — Prediction:** predict how a declared change in one measured variable affects the representation.
- **L05 — Transfer:** explain a new time/position example not used in the teaching demonstration.
- **L06 — Limitation statement:** state what cannot be inferred from the provided representation.

The answer key and scoring rubric must be prepared before outcome data are examined. “Not enough information” must be accepted where the evidence does not support a conclusion.

## 6. Evidence classes

Every substantive statement is tagged as one of:
- DOCUMENTED — supported by an identifiable scientific source;
- OBSERVED — directly observed under a stated procedure;
- MEASURED — produced by a named instrument or processing method;
- MODELLED — generated by an explicit model with declared assumptions;
- INFERRED — reasoned from other evidence;
- PROPOSED — not yet tested;
- UNAVAILABLE — not accessible or not measured;
- UNSUPPORTED — exceeds the available evidence.

A 3D model may contain both documented structures and illustrative motion. Label those components separately.

## 7. Human participation and privacy

Do not record identifiable speech until the owner-approved consent and data-handling plan specifies purpose, data categories, storage location, access, retention, deletion, withdrawal, reuse, and publication permissions.

Consent to participate is not consent to publish. Avoid collecting names or unrelated personal information. Use synthetic or already-authorized non-identifiable material for early software tests.

## 8. Required outputs

- anatomy reference register;
- articulation phase description;
- coordinate and measurement specification;
- acoustic sample manifest, if recordings are authorized;
- interactive or static learning representation;
- predeclared tasks and scoring rubric;
- learner outcome record with missingness and uncertainty;
- limitation and harm register;
- local reproduction guide.

## 9. Acceptance criteria

B-001 may enter a feasibility pilot only when:
1. target pronunciation variety is explicitly defined;
2. anatomical and phonetic claims have traceable expert-reviewed references;
3. visual, measured, and modelled elements are visibly distinguished;
4. all displayed quantities have units and coordinate definitions where applicable;
5. the learning tasks and rubric are frozen before the pilot;
6. privacy and consent conditions are approved for any human data;
7. no diagnostic or unsupported causal claims appear in the interface.

Passing these gates permits a bounded pilot; it does not establish educational effectiveness.
