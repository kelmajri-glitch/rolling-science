import json
import pathlib
import re
import unittest

ROOT = pathlib.Path(__file__).resolve().parents[1]
PORTAL = ROOT / "portal"


class VisitorPortalSmokeTests(unittest.TestCase):
    def test_required_portal_files_exist(self):
        for name in ("index.html", "styles.css", "app.js", "visitor-manifest.json", "README.md"):
            with self.subTest(name=name):
                self.assertTrue((PORTAL / name).is_file())

    def test_manifest_declares_local_only_collection(self):
        manifest = json.loads((PORTAL / "visitor-manifest.json").read_text(encoding="utf-8"))
        self.assertEqual(manifest["portal_status"], "prototype_not_deployed")
        self.assertFalse(manifest["data_collection"]["server_submission"])
        self.assertFalse(manifest["data_collection"]["local_storage"])
        self.assertFalse(manifest["data_collection"]["cookies"])
        self.assertFalse(manifest["data_collection"]["analytics"])

    def test_visit_schema_is_valid_json_and_supports_report_answers(self):
        schema = json.loads((ROOT / "access/ovip/VISIT_RECORD_SCHEMA.json").read_text(encoding="utf-8"))
        self.assertEqual(schema["properties"]["schema_version"]["const"], "0.1")
        introspection = schema["properties"]["introspection"]["properties"]
        self.assertIn("answers", introspection)
        self.assertTrue(introspection["answers"]["additionalProperties"] is False)
        self.assertIn("purpose", introspection["answers"]["properties"])

    def test_portal_has_no_submission_endpoint_or_browser_storage(self):
        js = (PORTAL / "app.js").read_text(encoding="utf-8")
        html = (PORTAL / "index.html").read_text(encoding="utf-8")
        self.assertNotRegex(js, re.compile(r"localStorage|sessionStorage|sendBeacon", re.I))
        self.assertNotRegex(js, re.compile(r"method\s*:\s*['\"]POST['\"]", re.I))
        self.assertNotRegex(html, re.compile(r"<form[^>]+action\s*=", re.I))
        self.assertNotRegex(html, re.compile(r"google-analytics|gtag|hotjar", re.I))

    def test_portal_downloads_json_locally(self):
        js = (PORTAL / "app.js").read_text(encoding="utf-8")
        self.assertIn("new Blob", js)
        self.assertIn("URL.createObjectURL", js)
        self.assertIn("link.download", js)


if __name__ == "__main__":
    unittest.main()
