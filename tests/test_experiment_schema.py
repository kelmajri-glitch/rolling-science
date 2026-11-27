"""Synthetic contract tests for Alnatiq experiment records."""
import copy
import json
import unittest
from pathlib import Path

from jsonschema import Draft202012Validator, FormatChecker

ROOT = Path(__file__).resolve().parents[1]
SCHEMA = json.loads((ROOT / "docs/projects/alnatiq/experiments/EXPERIMENT_RECORD_SCHEMA.json").read_text(encoding="utf-8"))
FIXTURE = json.loads((ROOT / "docs/projects/alnatiq/experiments/fixtures/synthetic_valid_record.json").read_text(encoding="utf-8"))
VALIDATOR = Draft202012Validator(SCHEMA, format_checker=FormatChecker())


class ExperimentSchemaTests(unittest.TestCase):
    def test_schema_is_valid(self):
        Draft202012Validator.check_schema(SCHEMA)

    def test_synthetic_fixture_is_valid(self):
        VALIDATOR.validate(FIXTURE)

    def test_rejects_missing_required_field(self):
        record = copy.deepcopy(FIXTURE)
        del record["harm"]
        self.assertTrue(list(VALIDATOR.iter_errors(record)))

    def test_rejects_unknown_top_level_field(self):
        record = copy.deepcopy(FIXTURE)
        record["unreviewed_claim"] = "This must not pass silently."
        self.assertTrue(list(VALIDATOR.iter_errors(record)))

    def test_rejects_invalid_record_identifier(self):
        record = copy.deepcopy(FIXTURE)
        record["record_id"] = "not-a-valid-id"
        self.assertTrue(list(VALIDATOR.iter_errors(record)))

    def test_rejects_invalid_adaptation_claim(self):
        record = copy.deepcopy(FIXTURE)
        record["adaptation_label"] = "TRAINED_BY_PROMPT"
        self.assertTrue(list(VALIDATOR.iter_errors(record)))


if __name__ == "__main__":
    unittest.main()
