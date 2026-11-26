#!/usr/bin/env python3
"""Validate Alnatiq B-001/B-002 experiment records against the repository schema.

This checks data-contract conformance only. It does not validate scientific truth,
consent, provenance, or application performance.
"""
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

try:
    from jsonschema import Draft202012Validator, FormatChecker
except ImportError:
    print("Missing dependency: install with 'python -m pip install -r requirements-dev.txt'", file=sys.stderr)
    raise SystemExit(2)

ROOT = Path(__file__).resolve().parents[1]
SCHEMA_PATH = ROOT / "docs/projects/alnatiq/experiments/EXPERIMENT_RECORD_SCHEMA.json"
DEFAULT_FIXTURES = ROOT / "docs/projects/alnatiq/experiments/fixtures"


def load_json(path: Path):
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("records", nargs="*", type=Path, help="Record JSON files; defaults to synthetic fixtures")
    args = parser.parse_args()

    try:
        schema = load_json(SCHEMA_PATH)
        Draft202012Validator.check_schema(schema)
    except Exception as exc:
        print(f"SCHEMA ERROR: {exc}", file=sys.stderr)
        return 2

    validator = Draft202012Validator(schema, format_checker=FormatChecker())
    paths = args.records or sorted(DEFAULT_FIXTURES.glob("*.json"))
    if not paths:
        print("No record files found.")
        return 2

    failures = 0
    for path in paths:
        try:
            record = load_json(path)
            errors = sorted(validator.iter_errors(record), key=lambda error: list(map(str, error.absolute_path)))
        except Exception as exc:
            print(f"FAIL {path}: cannot read JSON: {exc}")
            failures += 1
            continue

        if errors:
            failures += 1
            print(f"FAIL {path}")
            for error in errors:
                location = ".".join(str(part) for part in error.absolute_path) or "<root>"
                print(f"  - {location}: {error.message}")
        else:
            print(f"PASS {path}")

    print(f"\nValidated {len(paths)} record(s); {failures} failure(s).")
    return 1 if failures else 0


if __name__ == "__main__":
    raise SystemExit(main())
