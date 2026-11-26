"""Tests for the Reader Pack builder using temporary Git repositories."""
import json
import os
import subprocess
import sys
import tempfile
import unittest
import zipfile
from pathlib import Path

BUILDER = Path(__file__).resolve().parents[1] / "scripts" / "build_reader_pack.py"


def make_repo(root: Path) -> None:
    (root / "README.md").write_bytes(b"# deterministic test\n")
    subprocess.run(["git", "init", "-q"], cwd=root, check=True)
    subprocess.run(["git", "config", "user.email", "reader-pack-test@example.invalid"], cwd=root, check=True)
    subprocess.run(["git", "config", "user.name", "Reader Pack Test"], cwd=root, check=True)
    subprocess.run(["git", "add", "README.md"], cwd=root, check=True)
    env = os.environ.copy()
    env["GIT_AUTHOR_DATE"] = "2026-01-02T03:04:05+00:00"
    env["GIT_COMMITTER_DATE"] = "2026-01-02T03:04:05+00:00"
    subprocess.run(["git", "commit", "-q", "-m", "fixture"], cwd=root, env=env, check=True)


class ReaderPackBuilderTests(unittest.TestCase):
    def run_builder(self, root: Path, output: Path) -> None:
        env = os.environ.copy()
        env.pop("SOURCE_COMMIT_SHA", None)
        subprocess.run(
            [sys.executable, str(BUILDER), "--root", str(root), "--output-dir", str(output)],
            check=True, env=env, capture_output=True, text=True,
        )

    def test_same_commit_produces_identical_zip(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp) / "repo"
            root.mkdir()
            make_repo(root)
            first, second = Path(tmp) / "one", Path(tmp) / "two"
            self.run_builder(root, first)
            self.run_builder(root, second)
            zip_name = "rolling-science-reader-pack-001.zip"
            self.assertEqual((first / zip_name).read_bytes(), (second / zip_name).read_bytes())
            manifest = json.loads((first / "READER_PACK_MANIFEST.json").read_text())
            self.assertEqual(manifest["source"]["commit_sha"], subprocess.check_output(
                ["git", "rev-parse", "HEAD"], cwd=root, text=True
            ).strip())
            self.assertEqual(manifest["included_files"][0]["path"], "README.md")
            self.assertGreater(len(manifest["omitted_files"]), 0)
            with zipfile.ZipFile(first / zip_name) as archive:
                self.assertIn("rolling-science-reader-pack-001/README.md", archive.namelist())

    def test_allowlisted_symlink_is_rejected(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp) / "repo"
            root.mkdir()
            outside = Path(tmp) / "outside.txt"
            outside.write_text("outside")
            (root / "README.md").symlink_to(outside)
            with self.assertRaises(subprocess.CalledProcessError):
                self.run_builder(root, Path(tmp) / "out")


if __name__ == "__main__":
    unittest.main()
