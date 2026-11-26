#!/usr/bin/env python3
"""Build a minimal, provenance-preserving Rolling Science Reader Pack.

Hashes are SHA-256 over the exact bytes copied into the pack. The manifest
identifies the source commit and explicitly separates included and omitted paths.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import os
import subprocess
import zipfile
from datetime import datetime, timezone
from pathlib import Path, PurePosixPath

ALLOWLIST = [
    "README.md",
    "AGENTS.md",
    "CONTEXT_STATE.md",
    "ARCHIVE_INDEX.md",
    "governance/README.md",
    "governance/records/DECISIONS.md",
    "access/README.md",
    "access/READER_INDEX.md",
    "access/ACCESS_PROTOCOL.md",
    "docs/projects/solhai-dss/introspection-cafe/README.md",
    "docs/projects/solhai-dss/introspection-cafe/protocol/AIC_READER_RECORDER_SPEC_V0.1.md",
    "docs/projects/solhai-dss/introspection-cafe/protocol/SESSION_RECORD_TEMPLATE.md",
    "docs/projects/solhai-dss/introspection-cafe/protocol/EVIDENCE_LOG_TEMPLATE.md",
    "docs/projects/solhai-dss/introspection-cafe/protocol/SESSION_SCHEMA.json",
    "docs/projects/solhai-dss/introspection-cafe/protocol/EVIDENCE_SCHEMA.json",
    "docs/projects/alnatiq/README.md",
]

def sha256(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()

def git_commit(root: Path) -> str:
    env_sha = os.environ.get("SOURCE_COMMIT_SHA", "").strip()
    if env_sha:
        return env_sha
    return subprocess.check_output(
        ["git", "rev-parse", "HEAD"], cwd=root, text=True
    ).strip()

def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", default=".")
    parser.add_argument("--output-dir", default="dist")
    args = parser.parse_args()

    root = Path(args.root).resolve()
    output_dir = Path(args.output_dir).resolve()
    output_dir.mkdir(parents=True, exist_ok=True)

    included: list[dict[str, str | int]] = []
    omitted: list[dict[str, str]] = []
    payloads: list[tuple[str, bytes]] = []

    for relative in ALLOWLIST:
        rel = PurePosixPath(relative)
        if rel.is_absolute() or ".." in rel.parts:
            raise ValueError(f"Unsafe allowlist path: {relative}")
        source = root.joinpath(*rel.parts)
        if source.is_symlink():
            raise ValueError(f"Refusing symlink in allowlist: {relative}")
        if not source.exists():
            omitted.append({"path": relative, "reason": "NOT_PRESENT_AT_SOURCE_COMMIT"})
            continue
        if not source.is_file():
            omitted.append({"path": relative, "reason": "NOT_A_REGULAR_FILE"})
            continue
        resolved = source.resolve()
        if root not in resolved.parents:
            raise ValueError(f"Allowlist path escapes repository root: {relative}")
        data = source.read_bytes()
        payloads.append((relative, data))
        included.append({
            "path": relative,
            "size_bytes": len(data),
            "sha256": sha256(data),
        })

    if not included:
        raise RuntimeError("Reader Pack is empty; refusing to create an empty archive.")

    source_commit = git_commit(root)
    # Derive timestamps from the source commit so rebuilds are byte-reproducible.
    commit_time = subprocess.check_output(
        ["git", "show", "-s", "--format=%cI", source_commit], cwd=root, text=True
    ).strip()
    created = datetime.fromisoformat(commit_time.replace("Z", "+00:00")).astimezone(timezone.utc).replace(microsecond=0).isoformat()
    zip_datetime = datetime.fromisoformat(created).timetuple()[:6]
    manifest = {
        "manifest_version": "1.0",
        "pack_id": "ROLLING-SCIENCE-READER-PACK-001",
        "created_at_utc": created,
        "source": {
            "repository": "https://github.com/kelmajri-glitch/rolling-science",
            "commit_sha": source_commit,
            "branch_context": os.environ.get("GITHUB_REF", "local-or-unspecified"),
        },
        "hash_algorithm": "SHA-256",
        "hash_scope": "Exact file bytes copied into this archive; not Git blob SHA.",
        "included_files": included,
        "omitted_files": omitted,
        "privacy_and_scope": {
            "selection": "Fixed allowlist of public project and governance documents.",
            "excluded_by_design": [
                "student or patient identifiable data",
                "private recordings and personal files",
                "credentials, tokens, and environment secrets",
                "unlisted repository files",
            ],
            "transformation": "Source files are copied byte-for-byte; no translation or normalization is applied.",
        },
        "limitations": [
            "A matching hash establishes byte-level integrity, not factual correctness.",
            "The manifest does not establish that a recipient read or understood the files.",
            "Missing allowlisted files are listed as omitted and are not silently substituted.",
        ],
    }

    manifest_bytes = (json.dumps(manifest, ensure_ascii=False, indent=2) + "\n").encode("utf-8")
    pack_name = "rolling-science-reader-pack-001"
    zip_path = output_dir / f"{pack_name}.zip"
    with zipfile.ZipFile(zip_path, "w", compression=zipfile.ZIP_DEFLATED) as archive:
        manifest_info = zipfile.ZipInfo(f"{pack_name}/READER_PACK_MANIFEST.json", date_time=zip_datetime)
        manifest_info.compress_type = zipfile.ZIP_DEFLATED
        manifest_info.external_attr = 0o100644 << 16
        archive.writestr(manifest_info, manifest_bytes)
        for relative, data in payloads:
            info = zipfile.ZipInfo(f"{pack_name}/{relative}", date_time=zip_datetime)
            info.compress_type = zipfile.ZIP_DEFLATED
            info.external_attr = 0o100644 << 16
            archive.writestr(info, data)

    sidecar = output_dir / "READER_PACK_MANIFEST.json"
    sidecar.write_bytes(manifest_bytes)
    print(json.dumps({
        "zip_path": str(zip_path),
        "manifest_path": str(sidecar),
        "source_commit_sha": source_commit,
        "included_count": len(included),
        "omitted_count": len(omitted),
        "archive_sha256": sha256(zip_path.read_bytes()),
    }, ensure_ascii=False, indent=2))

if __name__ == "__main__":
    main()
