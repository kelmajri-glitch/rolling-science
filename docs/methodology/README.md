# Research Methodology and Traceability

This area contains methods shared across projects.

## 1. Provenance chain

For each artifact, preserve where possible:

**Source → capture → transformation → analysis → interpretation → decision → implementation/use.**

Each transition should identify who or what performed it, when, by which method, and what changed. If any link is unknown, mark it unknown rather than filling it by inference.

## 2. Observation versus interpretation

Keep raw observations separate from:
- cleaned or transformed data;
- derived variables;
- model outputs;
- researcher interpretations;
- recommendations and decisions.

Do not overwrite raw values with normalized values. Preserve transformation rules and versions.

## 3. Measurement record

When measurement is involved, record:
- quantity and operational definition;
- unit and scale;
- instrument, software, and version;
- sampling and calibration conditions;
- time window and environment;
- missing data and exclusions;
- repeatability and uncertainty;
- limitations and known sources of bias.

## 4. Uncertainty and missingness

Use explicit states such as not measured, not available, not applicable, inaccessible, failed, and below detection threshold. These states are not interchangeable and must not be silently converted to zero.

## 5. Reproducibility

A useful record allows another researcher to identify the inputs, method, transformations, and limitations needed to repeat or challenge the result. A claim without enough context to reproduce or inspect it must be marked accordingly.
