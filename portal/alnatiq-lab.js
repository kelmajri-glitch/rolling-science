(() => {
"use strict";
const $ = id => document.getElementById(id);
const KEY = "rolling-science.alnatiq-lab.records.v0.1";
const now = () => new Date().toISOString();
const makeId = protocol => {
  const prefix = protocol.endsWith("B001") ? "B001" : "B002";
  const stamp = now().replace(/[-:.TZ]/g, "").slice(0, 14);
  const random = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `RS-ALNATIQ-${prefix}-${stamp}-${random}`;
};
let records = [];
function load() {
  try {
    const parsed = JSON.parse(localStorage.getItem(KEY) || "[]");
    records = Array.isArray(parsed) ? parsed.filter(x => x && typeof x === "object" && typeof x.record_id === "string") : [];
  } catch (_) { records = []; setStatus("data-status", "تعذر قراءة البيانات المحلية؛ لم تُحذف أي نسخة مصدرة."); }
  render();
}
function persist() {
  try { localStorage.setItem(KEY, JSON.stringify(records)); return true; }
  catch (_) { setStatus("form-status", "تعذر الحفظ المحلي. صدّر البيانات أو حرّر مساحة التخزين ثم أعد المحاولة."); return false; }
}
function setStatus(id, message) { $(id).textContent = message; }
function value(id) { return $(id).value.trim(); }
function optionalNumber(id) {
  const v = value(id);
  return v === "" ? null : Number(v);
}
function listIf(text, build) { return text ? [build(text)] : []; }
function buildRecord() {
  const protocol = value("protocol");
  const humanData = $("human-data").checked;
  const consentStatus = humanData ? value("consent-status") : "NOT_APPLICABLE";
  const privacyReview = humanData ? value("privacy-review") : "NOT_REQUIRED_FOR_SYNTHETIC";
  const task = {
    task_id: value("task-id"),
    task_type: value("task-type"),
    procedure: value("procedure"),
    prompt_or_instructions: value("prompt") || null,
    rubric_version: value("rubric") || null,
    held_out: value("held-out") === "" ? null : value("held-out") === "true"
  };
  const record = {
    record_id: makeId(protocol),
    protocol_id: protocol,
    protocol_version: "0.1",
    record_status: value("record-status"),
    created_at_utc: now(),
    environment: {
      language: value("language") || null,
      variety: value("variety") || null,
      locale_description_source: value("variety-source") || null,
      setting: value("setting") || null,
      notes: []
    },
    application: value("application") || value("version") ? {
      product: value("application") || null,
      provider: null,
      exposed_model_or_build: value("version") || null,
      version: value("version") || null,
      access_mode: null,
      tool_configuration: []
    } : null,
    aic_session_id: null,
    task,
    input_manifest: [],
    output_manifest: [],
    adaptation_label: value("adaptation"),
    reference_standard: value("reference-description") ? [{
      reference_type: value("reference-type"),
      description: value("reference-description"),
      reviewer_or_source: null,
      source_location: null
    }] : [],
    outcome: {
      status: value("outcome"),
      numerator: optionalNumber("numerator"),
      denominator: optionalNumber("denominator"),
      measure_name: value("measure-name") || null,
      measure_value: optionalNumber("measure-value"),
      unit: value("measure-unit") || null,
      missingness: [],
      uncertainty_and_interval: null,
      analysis_method: null
    },
    evidence: [{
      evidence_id: "E-" + makeId(protocol).slice(-19),
      claim: value("evidence-claim"),
      classification: value("evidence-class"),
      source_reference: value("evidence-source") || null,
      limitation: value("evidence-limit") || null
    }],
    benefit: listIf(value("benefit"), description => ({
      description, status: value("benefit-status"), measure: null, evidence_ids: []
    })),
    harm: listIf(value("harm"), description => ({
      description, status: value("harm-status"), severity_method: null, mitigation: null, evidence_ids: []
    })),
    burden: listIf(value("burden"), description => ({
      burden_type: value("burden-type"), description, value: null, unit: null, measurement_method: null
    })),
    rights_privacy: {
      human_data_present: humanData,
      consent_status: consentStatus,
      permitted_uses: ["local experiment record management"],
      storage_and_retention: "Browser localStorage on this device; user-controlled export and deletion.",
      review_status: privacyReview
    },
    limitations: value("limitations").split(/\n+/).map(x => x.trim()).filter(Boolean),
    side_discoveries: [],
    review: {
      reviewer: null, reviewed_at_utc: null, decision: "PENDING", notes: null, owner_approval: "PENDING"
    }
  };
  return record;
}
function preflight(r) {
  const issues = [];
  if (r.rights_privacy.human_data_present && r.rights_privacy.consent_status !== "GIVEN") issues.push("موافقة المشاركين غير موثقة");
  if (r.rights_privacy.human_data_present && r.rights_privacy.review_status !== "APPROVED") issues.push("مراجعة الخصوصية/الأخلاقيات غير معتمدة");
  if (!/^RS-ALNATIQ-(B001|B002)-[A-Za-z0-9-]{3,64}$/.test(r.record_id)) issues.push("معرف السجل");
  if (!["RS-ALNATIQ-B001", "RS-ALNATIQ-B002"].includes(r.protocol_id)) issues.push("البروتوكول");
  if (!r.task.task_id || !r.task.procedure || !r.evidence.length || !r.evidence[0].claim || !r.limitations.length) issues.push("الحقول الإلزامية");
  if (r.outcome.numerator !== null && r.outcome.denominator !== null && r.outcome.numerator > r.outcome.denominator) issues.push("البسط أكبر من المقام");
  if (r.outcome.denominator === 0 && r.outcome.numerator !== null && r.outcome.numerator > 0) issues.push("مقام صفري");
  return issues;
}
function download(name, content) {
  const blob = new Blob([content], {type: "application/json;charset=utf-8"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
}
function escapeHtml(s) {
  return String(s ?? "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
}
function render() {
  $("count-all").textContent = records.length;
  $("count-draft").textContent = records.filter(r => ["DRAFT","PLANNED"].includes(r.record_status)).length;
  $("count-review").textContent = records.filter(r => !r.review || r.review.decision === "PENDING").length;
  const protocolFilter = value("filter-protocol") || "ALL";
  const statusFilter = value("filter-status") || "ALL";
  const shown = records.filter(r => (protocolFilter === "ALL" || r.protocol_id === protocolFilter) && (statusFilter === "ALL" || r.record_status === statusFilter));
  const list = $("record-list");
  if (!shown.length) { list.innerHTML = '<p class="empty">لا توجد سجلات مطابقة لهذا التصفية.</p>'; return; }
  list.innerHTML = shown.slice().reverse().map(r => {
    const label = r.protocol_id.endsWith("B001") ? "B-001" : "B-002";
    const task = r.task?.task_id || "مهمة غير مسماة";
    const date = r.created_at_utc ? new Date(r.created_at_utc).toLocaleString("ar") : "تاريخ غير متاح";
    return `<article class="record">
      <div><h3>${escapeHtml(task)} · ${label}</h3><p>${escapeHtml(r.record_id)} · ${escapeHtml(date)}</p>
      <div class="record-meta"><span class="tag">${escapeHtml(r.record_status)}</span><span class="tag">${escapeHtml(r.task?.task_type || "OTHER")}</span><span class="tag">النتيجة: ${escapeHtml(r.outcome?.status || "غير محددة")}</span></div></div>
      <div class="record-buttons"><button class="secondary" data-action="export" data-id="${escapeHtml(r.record_id)}">تصدير</button><button class="secondary" data-action="inspect" data-id="${escapeHtml(r.record_id)}">عرض</button><button class="danger" data-action="delete" data-id="${escapeHtml(r.record_id)}">حذف</button></div>
    </article>`;
  }).join("");
}
$("record-form").addEventListener("submit", event => {
  event.preventDefault();
  if (!$("record-form").reportValidity()) return;
  const record = buildRecord();
  const issues = preflight(record);
  if (issues.length) { setStatus("form-status", "لم يُحفظ السجل. راجع: " + issues.join("، ")); return; }
  records.push(record);
  if (!persist()) { records.pop(); return; }
  $("record-form").reset();
  setStatus("form-status", "حُفظ السجل محلياً. لم يُرسل إلى أي خادم، ولم يُعتمد علمياً.");
  render();
});
$("reset-form").addEventListener("click", () => { $("record-form").reset(); setStatus("form-status", "مُسح النموذج دون تغيير السجلات المحفوظة."); });
$("filter-protocol").addEventListener("change", render);
$("filter-status").addEventListener("change", render);
$("record-list").addEventListener("click", event => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const record = records.find(r => r.record_id === button.dataset.id);
  if (!record) return;
  if (button.dataset.action === "export") download(record.record_id + ".json", JSON.stringify(record, null, 2));
  if (button.dataset.action === "inspect") {
    const summary = [
      "معرف السجل: " + record.record_id,
      "البروتوكول: " + record.protocol_id,
      "الحالة: " + record.record_status,
      "المهمة: " + record.task.task_id,
      "الدليل: " + record.evidence.map(e => e.classification + " — " + e.claim).join(" | "),
      "النفع: " + record.benefit.map(x => x.description).join(" | "),
      "الضرر: " + record.harm.map(x => x.description).join(" | "),
      "العبء: " + record.burden.map(x => x.description).join(" | "),
      "القيود: " + record.limitations.join(" | ")
    ].join("\n");
    window.alert(summary);
  }
  if (button.dataset.action === "delete" && window.confirm("حذف هذا السجل من تخزين هذا المتصفح؟")) {
    records = records.filter(r => r.record_id !== record.record_id);
    if (persist()) { render(); setStatus("data-status", "حُذف السجل المحلي المحدد."); }
  }
});
$("export-all").addEventListener("click", () => {
  if (!records.length) { setStatus("data-status", "لا توجد سجلات لتصديرها."); return; }
  download("alnatiq-experiment-records-" + now().slice(0,10) + ".json", JSON.stringify({schema_version:"ALNATIQ-RECORDS-0.1",exported_at_utc:now(),records}, null, 2));
  setStatus("data-status", "أُنشئت نسخة JSON لجميع السجلات لتنزيلها.");
});
$("import-button").addEventListener("click", () => $("import-file").click());
$("import-file").addEventListener("change", async event => {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const parsed = JSON.parse(await file.text());
    const incoming = Array.isArray(parsed) ? parsed : parsed.records;
    if (!Array.isArray(incoming)) throw new Error("ملف JSON لا يحتوي قائمة سجلات.");
    const valid = incoming.filter(r => r && typeof r.record_id === "string" && /^RS-ALNATIQ-(B001|B002)-[A-Za-z0-9-]{3,64}$/.test(r.record_id) && r.task && Array.isArray(r.evidence) && Array.isArray(r.limitations));
    const known = new Set(records.map(r => r.record_id));
    const unique = valid.filter(r => !known.has(r.record_id));
    records = records.concat(unique);
    if (!persist()) { records = records.filter(r => !unique.some(x => x.record_id === r.record_id)); return; }
    render();
    setStatus("data-status", `استُورد ${unique.length} سجل جديد. رُفض أو تكرر ${incoming.length - unique.length}. هذا فحص أولي وليس تحققاً كاملاً من JSON Schema.`);
  } catch (error) { setStatus("data-status", "تعذر الاستيراد: " + error.message); }
  finally { event.target.value = ""; }
});
$("delete-all").addEventListener("click", () => {
  if (!records.length) { setStatus("data-status", "لا توجد سجلات محلية."); return; }
  if (!window.confirm("سيؤدي هذا إلى حذف جميع سجلات الناطق من تخزين هذا المتصفح. هل صدّرت نسخة احتياطية؟")) return;
  records = [];
  if (persist()) { render(); setStatus("data-status", "حُذفت جميع السجلات المحلية."); }
});
load();
})();