# Reader Pack Builder

This directory contains the reproducible builder for the first Rolling Science Reader Pack.

## Build locally

```bash
python3 scripts/build_reader_pack.py --root . --output-dir dist
```

The builder uses only the Python standard library. It copies a fixed allowlist of public project/governance documents byte-for-byte, records SHA-256 for each included file, records missing allowlisted files as omitted, and creates a ZIP plus a sidecar manifest.

## Build on GitHub

Use the **Actions → Build Reader Pack → Run workflow** control on the intended source revision. The workflow has read-only repository permissions and publishes the ZIP and manifest as a workflow artifact for 30 days.

## Integrity and limits

- The manifest pins the exact source commit SHA.
- Per-file SHA-256 values are calculated from the exact bytes included in the ZIP.
- The archive SHA-256 is printed in the build log; it is not embedded in its own manifest.
- Hash agreement proves byte-level integrity only, not correctness, completeness, understanding, or acceptance.
- This is a fixed allowlist, not a full repository mirror. Missing files are reported rather than replaced.
- No student/patient data, private recordings, credentials, or unlisted files are intentionally included.
