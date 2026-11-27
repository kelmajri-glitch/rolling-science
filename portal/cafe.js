(() => {
"use strict";
const $ = id => document.getElementById(id);
const nowISO = () => new Date().toISOString().replace(/\.\d{3}Z$/, "Z");
const value = id => $(id).value.trim();
$("copy-prompt").addEventListener("click", async () => {
 const status = $("copy-status");
 try { await navigator.clipboard.writeText($("mission-prompt").value); status.textContent = "نُسخت رسالة المهمة."; }
 catch { $("mission-prompt").focus(); $("mission-prompt").select(); status.textContent = "تعذر النسخ الآلي؛ حُدد النص لنسخه يدوياً."; }
});
function parseFiles(raw) {
 const allowed = new Set(["READ_FULL","READ_PARTIAL","NOT_READ","NOT_REQUESTED"]);
 return raw.split(/\r?\n/).map(s=>s.trim()).filter(Boolean).map(line=>{
  const parts=line.split("|"); const path=(parts[0]||"").trim(); const status=(parts[1]||"").trim().toUpperCase();
  if(!path||!allowed.has(status)) throw new Error("صيغة الملفات غير صحيحة. استخدم: path | READ_FULL أو READ_PARTIAL أو NOT_READ أو NOT_REQUESTED.");
  return {path,status};
 });
}
function buildRecord() {
 const commit=value("commit");
 if(commit&&!/^[a-fA-F0-9]{40}$/.test(commit)) throw new Error("Commit SHA يجب أن يتكون من 40 خانة سداسية عشرية، أو اتركه فارغاً.");
 const created=nowISO();
 const record={
  record_schema:"RS-AIC-CONTRIBUTION-0.1",
  contribution_id:"RS-AIC-"+created.replace(/[-:TZ]/g,"").slice(0,14)+"-"+Math.random().toString(16).slice(2,10),
  task_id:value("task-id")||"UNSPECIFIED",
  participant:{declared_label:value("participant")||"ANONYMOUS",identity_status:value("participant")?"SELF_DECLARED":"ANONYMOUS",declared_product_or_model:value("product")||"NOT_DECLARED"},
  source_references:[{repository:"https://github.com/kelmajri-glitch/rolling-science",branch_or_ref:"main",commit_sha:commit||"UNAVAILABLE",source_role:"visited_environment",verification_status:commit?"SELF_REPORTED":"NOT_AVAILABLE"}],
  visit:{access_mode:$("access-mode").value,visit_time_local:value("visit-time")||"NOT_RECORDED",record_created_at_utc:created,files_read:parseFiles(value("files-read")),actions_performed:value("actions")||"NOT_REPORTED",inaccessible_items:value("unavailable")||"NOT_REPORTED"},
  contribution:{direct_observations:value("observations"),analysis_and_inferences:value("analysis"),objections_or_scope_differences:value("objections"),proposals:value("proposals"),tests_and_results:value("tests")||"NOT_RUN",evidence_references:value("evidence").split(/\r?\n/).map(s=>s.trim()).filter(Boolean),limitations_and_open_questions:value("limitations")},
  evidence_status:{participant_declaration:"SELF_REPORTED",independent_review:"NOT_PERFORMED",acceptance_status:"NOT_REVIEWED",implementation_status:"NOT_AUTHORIZED"},
  privacy:{secret_or_sensitive_data_included:false,publication_consent:"NOT_REQUESTED",submission_to_rolling_science:"NOT_PERFORMED",handling:"Generated locally in the visitor browser; not transmitted by this page."},
  limitations:["The participant label and declared model are self-reported unless independently verified.","A file status is a participant declaration unless supported by separately retained evidence.","Downloading this record does not submit, publish, verify, or approve the contribution.","No repository write permission is granted by this visit."]
 };
 return record;
}
$("contribution-form").addEventListener("submit",event=>{
 event.preventDefault(); const status=$("form-status");
 if(!$("self-report").checked||!$("privacy-check").checked){status.textContent="يرجى تأكيد حدود التقرير والخصوصية.";return;}
 try{
  const record=buildRecord(); const blob=new Blob([JSON.stringify(record,null,2)+"\n"],{type:"application/json;charset=utf-8"});
  const url=URL.createObjectURL(blob); const link=document.createElement("a"); link.href=url; link.download=record.contribution_id.toLowerCase()+".json";
  document.body.appendChild(link); link.click(); link.remove(); URL.revokeObjectURL(url);
  status.textContent="أُنشئ سجل المساهمة ونُزّل محلياً. لم يُرسل إلى GitHub أو إلى أي خادم.";
 }catch(error){status.textContent=error.message;}
});
$("contribution-form").addEventListener("reset",()=>{$("form-status").textContent="مُسح النموذج. لم يُحفظ أي سجل محلياً.";$("copy-status").textContent="";});
})();