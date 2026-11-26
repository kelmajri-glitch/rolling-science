(() => {
  "use strict";
  const REPO = "kelmajri-glitch/rolling-science";
  const API = "https://api.github.com/repos/" + REPO;
  const $ = (id) => document.getElementById(id);
  let currentCommit = null;

  function utcNow() {
    return new Date().toISOString().replace(/\.\d{3}Z$/, "Z");
  }

  async function loadRepositorySnapshot() {
    const state = $("repo-state");
    const commit = $("repo-commit");
    const checked = $("repo-checked");
    try {
      const response = await fetch(API, {
        headers: { "Accept": "application/vnd.github+json" },
        cache: "no-store"
      });
      if (!response.ok) throw new Error("GitHub API returned HTTP " + response.status);
      const repo = await response.json();
      const branchResponse = await fetch(API + "/branches/main", {
        headers: { "Accept": "application/vnd.github+json" },
        cache: "no-store"
      });
      if (!branchResponse.ok) throw new Error("Could not resolve main branch SHA");
      const branch = await branchResponse.json();
      currentCommit = branch.commit && branch.commit.sha ? branch.commit.sha : null;
      state.textContent = "متاح عبر GitHub API";
      commit.textContent = currentCommit || "UNAVAILABLE";
      checked.textContent = utcNow();
      if (currentCommit) $("commit-input").value = currentCommit;
      $("repo-note").textContent = "تم جلب بيانات المستودع والفرع main مباشرة. هذا يثبت استجابة واجهة GitHub في وقت الفحص، ولا يثبت قراءة ملفات بعينها.";
    } catch (error) {
      state.textContent = "تعذر التحقق آلياً";
      commit.textContent = "UNAVAILABLE";
      checked.textContent = utcNow();
      $("repo-note").textContent = "تعذر جلب بيانات GitHub من هذا المتصفح. لا تستنتج من ذلك أن المستودع غير متاح؛ يمكنك إدخال commit SHA يدوياً إذا حصلت عليه من مسار آخر.";
    }
  }

  function parseFileMatrix(raw) {
    const allowed = new Set(["READ_FULL", "READ_PARTIAL", "NOT_READ", "NOT_REQUESTED"]);
    return raw.split(/\r?\n/).map(line => line.trim()).filter(Boolean).map(line => {
      const parts = line.split("|");
      const path = (parts[0] || "").trim();
      const status = (parts[1] || "").trim().toUpperCase();
      if (!path || !allowed.has(status)) {
        throw new Error("صيغة مصفوفة الملفات غير صحيحة. استخدم: path | READ_FULL أو READ_PARTIAL أو NOT_READ أو NOT_REQUESTED.");
      }
      return { path, status };
    });
  }

  function textValue(id) {
    return $(id).value.trim();
  }

  function buildRecord() {
    const created = utcNow();
    const commit = textValue("commit-input");
    if (commit && !/^[a-fA-F0-9]{40}$/.test(commit)) {
      throw new Error("يجب أن يتكون Commit SHA من 40 خانة سداسية عشرية، أو اتركه فارغاً.");
    }
    const files = parseFileMatrix(textValue("file-matrix"));
    const label = textValue("visitor-label");
    const product = textValue("visitor-version");
    const visitorType = $("visitor-type").value;
    const answers = {
      purpose: textValue("purpose"),
      understanding: textValue("understanding"),
      uncertainty: textValue("uncertainty"),
      evidence_supported_claims: textValue("evidence-claims"),
      obstacles: textValue("access-obstacles"),
      burden: textValue("burden"),
      improvement_needs: textValue("improvements"),
      evidence_references: textValue("evidence-refs"),
      limitations: textValue("limitations")
    };
    const compactDate = created.replace(/[-:TZ]/g, "").slice(0, 14);
    const randomPart = (typeof crypto !== "undefined" && crypto.randomUUID)
      ? crypto.randomUUID().replace(/-/g, "").slice(0, 12)
      : Math.random().toString(16).slice(2, 14).padEnd(12, "0");
    const record = {
      schema_version: "0.1",
      visit_id: "RS-VISIT-" + compactDate + "-" + randomPart,
      visitor: {
        visitor_type: visitorType,
        identity_status: label ? "SELF_DECLARED" : "ANONYMOUS"
      },
      environment: {
        environment_id: "rolling-science-public-repository",
        repository_url: "https://github.com/" + REPO,
        branch_or_ref: "main"
      },
      access: {
        access_modes: [$("access-mode").value],
        package_delivery_status: "NOT_APPLICABLE",
        files
      },
      comprehension: {
        status: $("comprehension-status").value
      },
      introspection: {
        status: "DRAFTED",
        report_id: "RS-OVIP-REPORT-" + randomPart,
        report_version: 1,
        answers
      },
      visit_status: "INTROSPECTION_DRAFTED",
      completion_basis: "Visitor-created local draft; not submitted to Rolling Science.",
      created_at_utc: created,
      updated_at_utc: created,
      privacy: {
        submission_consent: "NOT_APPLICABLE",
        visibility: "PRIVATE_TO_SUBMITTER",
        publication_consent: "NOT_REQUESTED",
        deletion_request_status: "NOT_APPLICABLE"
      },
      evidence_references: [],
      limitations: [
        "Visitor self-report; not independently verified.",
        "This prototype does not transmit or centrally store the report.",
        "Repository snapshot may be unavailable if GitHub API retrieval failed."
      ]
    };
    if (label) record.visitor.display_label = label;
    if (product && (visitorType === "APPLICATION" || visitorType === "MIXED_OR_MEDIATED")) {
      record.visitor.declared_product_or_model = product;
    }
    if (commit) record.environment.commit_sha = commit;
    if (currentCommit && commit === currentCommit) {
      record.environment.retrieved_at_utc = $("repo-checked").textContent;
    }
    const testId = textValue("test-id");
    if (testId) record.comprehension.test_id = testId;
    if (answers.evidence_references) {
      record.evidence_references = answers.evidence_references.split(/\r?\n/).map(s => s.trim()).filter(Boolean);
    }
    return record;
  }

  function downloadRecord(record) {
    const blob = new Blob([JSON.stringify(record, null, 2) + "\n"], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = record.visit_id.toLowerCase() + ".json";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  $("visit-form").addEventListener("submit", event => {
    event.preventDefault();
    const status = $("form-status");
    if (!$("confirm-self-report").checked || !$("confirm-no-sensitive").checked) {
      status.textContent = "يرجى تأكيد حدود التقرير والخصوصية قبل إنشاء الملف.";
      return;
    }
    try {
      const record = buildRecord();
      downloadRecord(record);
      status.textContent = "أُنشئ ملف JSON ونُزّل إلى جهازك. لم يُرسل إلى GitHub أو إلى أي خادم.";
    } catch (error) {
      status.textContent = error.message;
    }
  });

  $("visit-form").addEventListener("reset", () => {
    $("form-status").textContent = "مُسح النموذج. لم يُحفظ أي سجل محلياً.";
  });

  loadRepositorySnapshot();
})();
