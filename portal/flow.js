(() => {
"use strict";
const $ = id => document.getElementById(id);
const KEY = "ovip.flow.workbench.v0.1";
let state = {schema_version:"OVIP-FLOW-0.1",flows:[],current_flow_id:null};
let currentCapsules = new Map();
const now = () => new Date().toISOString();
const id = prefix => prefix + "-" + new Date().toISOString().replace(/[-:.TZ]/g,"").slice(0,14) + "-" + Math.random().toString(36).slice(2,7).toUpperCase();
const flow = () => state.flows.find(x => x.flow_id === state.current_flow_id) || null;
const safe = value => String(value || "");
function status(message){$("status").textContent=message;}
function persist(){
  try { localStorage.setItem(KEY, JSON.stringify(state)); $("save-state").textContent="محفوظ محلياً"; }
  catch(e){ $("save-state").textContent="تعذر الحفظ المحلي"; status("تعذر الحفظ في مساحة المتصفح. صدّر الدورة JSON لحفظ نسخة يدوية."); }
}
function load(){
  try { const raw=localStorage.getItem(KEY); if(raw){const parsed=JSON.parse(raw);if(parsed&&parsed.schema_version==="OVIP-FLOW-0.1"&&Array.isArray(parsed.flows))state=parsed;} }
  catch(e){status("تعذر قراءة السجل المحلي؛ يمكنك استيراد نسخة JSON.");}
  render();
}
function createFlow(data){
  const f={flow_id:id("OVIP-FLOW"),created_at:now(),updated_at:now(),title:data.title,environment:data.environment,problem:data.problem,goal:data.goal,constraints:data.constraints,tasks:[],contributions:[],decisions:[],measurements:{benefit:"",benefit_cost:"",harm_reduced:"",harm_created:""},status:"active"};
  state.flows.push(f);state.current_flow_id=f.flow_id;persist();render();status("أُنشئت دورة جديدة. أضف أول مهمة.");
}
function updateFlow(){
 const f=flow();if(!f)return;
 f.title=$("flow-title").value.trim();f.environment=$("flow-env").value.trim();f.problem=$("flow-problem").value.trim();f.goal=$("flow-goal").value.trim();f.constraints=$("flow-constraints").value.trim();f.updated_at=now();persist();renderHeader();status("حُدّث وصف الدورة.");
}
function capsuleText(f,t){
 return [
 "OVIP FLOW CAPSULE · "+t.capsule_id,
 "Flow ID: "+f.flow_id,
 "Task ID: "+t.task_id,
 "Version: 0.1",
 "Sender: OVIP Flow Workbench",
 "Recipient: "+t.station,
 "Created: "+t.created_at,
 "",
 "PROJECT CONTEXT",
 "Title: "+f.title,
 "Local environment: "+(f.environment||"Not specified"),
 "Problem: "+f.problem,
 "Desired outcome: "+(f.goal||"Not specified"),
 "Known constraints/resources: "+(f.constraints||"Not specified"),
 "",
 "TASK",
 t.title,
 t.instructions,
 "",
 "INPUTS / REFERENCES",
 t.inputs||"None supplied",
 "",
 "ACCEPTANCE CRITERIA",
 t.acceptance||"Not specified; state assumptions and limitations.",
 "",
 "BOUNDARIES",
 "- Work only within this task.",
 "- Do not claim tests or actions that were not performed.",
 "- Separate observed events, self-reports, derived assessments, and limitations.",
 "- Do not treat this task response as an approved decision.",
 "- Flag privacy, safety, rights, resource burdens, and possible harms.",
 "- Return a concise result, evidence/references, unresolved issues, and what was not done.",
 "",
 "REQUIRED RETURN FORMAT",
 "Task ID: "+t.task_id,
 "Outcome:",
 "Deliverable:",
 "Evidence and source:",
 "Observed / self-reported / derived:",
 "Limitations and not done:",
 "Risks or harms:",
 "Suggested next step:"
 ].join("\n");
}
function addTask(){
 const f=flow();if(!f){status("أنشئ دورة قبل إضافة المهام.");return;}
 const title=$("task-title").value.trim(), instructions=$("task-instructions").value.trim();
 if(!title||!instructions){status("أدخل عنوان المهمة وتعليماتها.");return;}
 const t={task_id:id("TASK"),capsule_id:id("CAP"),station:$("station").value,title,instructions,inputs:$("task-inputs").value.trim(),acceptance:$("task-acceptance").value.trim(),created_at:now(),status:"ready",capsule:""};
 t.capsule=capsuleText(f,t);f.tasks.push(t);f.updated_at=now();persist();render();$("task-title").value="";$("task-instructions").value="";$("task-inputs").value="";$("task-acceptance").value="";status("أُضيفت المهمة. انسخ الحزمة والصقها في المحطة المحددة.");
}
function addContribution(){
 const f=flow();if(!f)return;const task=f.tasks.find(t=>t.task_id===$("contrib-task").value);const body=$("contrib-body").value.trim();if(!task||!body){status("اختر المهمة وأدخل نص المساهمة.");return;}
 f.contributions.push({contribution_id:id("CONTRIB"),task_id:task.task_id,station:task.station,kind:$("contrib-kind").value,evidence_class:$("evidence-kind").value,reference:$("contrib-ref").value.trim(),body,limitations:$("contrib-limits").value.trim(),received_at:now()});
 task.status="received";f.updated_at=now();persist();render();$("contrib-body").value="";$("contrib-ref").value="";$("contrib-limits").value="";status("حُفظت المساهمة وربطت بالمهمة. لم تُعتمد تلقائياً.");
}
function addDecision(){
 const f=flow(),text=$("decision-text").value.trim();if(!f||!text){status("اكتب القرار أو المسألة أولاً.");return;}
 f.decisions.push({decision_id:id("DECISION"),text,status:$("decision-status").value,owner:$("decision-owner").value.trim(),recorded_at:now()});f.updated_at=now();persist();render();$("decision-text").value="";status("سُجلت الحالة كما اخترتها. لا يوجد اعتماد آلي.");
}
function saveMeasures(){
 const f=flow();if(!f)return;for(const k of ["benefit","benefit-cost","harm-reduced","harm-created"])f.measurements[k.replace("-","_")]=$(k).value.trim();f.updated_at=now();persist();status("حُفظ مسارا القياس بصورة مستقلة.");
}
function renderHeader(){
 const f=flow();if(!f){$("save-state").textContent="لم تُنشأ دورة";return;}
 $("flow-title").value=f.title;$("flow-env").value=f.environment||"";$("flow-problem").value=f.problem;$("flow-goal").value=f.goal||"";$("flow-constraints").value=f.constraints||"";$("save-state").textContent=f.flow_id;
 $("benefit").value=f.measurements.benefit||"";$("benefit-cost").value=f.measurements.benefit_cost||"";$("harm-reduced").value=f.measurements.harm_reduced||"";$("harm-created").value=f.measurements.harm_created||"";
}
function render(){
 const f=flow();renderHeader();currentCapsules.clear();
 const tasks=$("task-list"),contrib=$("contribution-list"),decisions=$("decision-list"),select=$("contrib-task");
 tasks.innerHTML="";contrib.innerHTML="";decisions.innerHTML="";select.innerHTML="";
 if(!f){tasks.className="task-list empty";tasks.textContent="أنشئ دورة أولاً، ثم أضف مهام المحطات.";contrib.className="contrib-list empty";contrib.textContent="ستظهر المساهمات هنا بعد استقبالها.";decisions.className="decision-list empty";decisions.textContent="لا توجد قرارات مسجلة.";select.innerHTML='<option value="">لا توجد مهام بعد</option>';return;}
 if(!f.tasks.length){tasks.className="task-list empty";tasks.textContent="لا توجد مهام بعد.";}else{tasks.className="task-list";f.tasks.forEach(t=>{currentCapsules.set(t.task_id,t.capsule||capsuleText(f,t));const card=document.createElement("article");card.className="item";const top=document.createElement("div");top.className="item-top";const h=document.createElement("h3");h.textContent=t.title;const tag=document.createElement("span");tag.className="tag";tag.textContent=t.status;top.append(h,tag);const meta=document.createElement("div");meta.className="meta";meta.textContent=t.station+" · "+t.task_id;const p=document.createElement("p");p.textContent=t.instructions;const actions=document.createElement("div");actions.className="item-actions";const copy=document.createElement("button");copy.className="quiet";copy.textContent="نسخ الحزمة";copy.onclick=()=>copyText(t.capsule||capsuleText(f,t),"نُسخت حزمة المهمة.");const download=document.createElement("button");download.className="quiet";download.textContent="تنزيل TXT";download.onclick=()=>downloadText(t.task_id+".txt",t.capsule||capsuleText(f,t),"text/plain");const received=document.createElement("button");received.className="quiet";received.textContent="وُردت النتيجة";received.onclick=()=>{t.status="received";f.updated_at=now();persist();render();};actions.append(copy,download,received);card.append(top,meta,p,actions);tasks.append(card);const option=document.createElement("option");option.value=t.task_id;option.textContent=t.title+" — "+t.station;select.append(option);});}
 if(!f.contributions.length){contrib.className="contrib-list empty";contrib.textContent="لا توجد مساهمات مستلمة.";}else{contrib.className="contrib-list";f.contributions.forEach(c=>{const card=document.createElement("article");card.className="item";const top=document.createElement("div");top.className="item-top";const h=document.createElement("h3");h.textContent=c.kind+" · "+c.station;const tag=document.createElement("span");tag.className="tag";tag.textContent=c.evidence_class;top.append(h,tag);const meta=document.createElement("div");meta.className="meta";meta.textContent=c.task_id+" · "+c.received_at;const p=document.createElement("p");p.textContent=c.body;card.append(top,meta,p);if(c.reference){const ref=document.createElement("p");ref.className="meta";ref.textContent="المرجع: "+c.reference;card.append(ref);}if(c.limitations){const lim=document.createElement("p");lim.textContent="القيود: "+c.limitations;card.append(lim);}contrib.append(card);});}
 if(!f.decisions.length){decisions.className="decision-list empty";decisions.textContent="لا توجد قرارات مسجلة.";}else{decisions.className="decision-list";f.decisions.forEach(d=>{const card=document.createElement("article");card.className="item";const top=document.createElement("div");top.className="item-top";const h=document.createElement("h3");h.textContent=d.status;const tag=document.createElement("span");tag.className="tag";tag.textContent=d.owner||"صاحب الاعتماد غير محدد";top.append(h,tag);const p=document.createElement("p");p.textContent=d.text;const meta=document.createElement("div");meta.className="meta";meta.textContent=d.decision_id+" · "+d.recorded_at;card.append(top,p,meta);decisions.append(card);});}
}
function downloadText(filename,text,mime){const blob=new Blob([text],{type:mime+";charset=utf-8"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download=filename;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
async function copyText(text,message){try{await navigator.clipboard.writeText(text);status(message);}catch(e){const ta=document.createElement("textarea");ta.value=text;document.body.append(ta);ta.select();const ok=document.execCommand("copy");ta.remove();status(ok?message:"تعذر النسخ الآلي؛ افتح نص الحزمة وانسخه يدوياً.");}}
function exportFlow(){const f=flow();if(!f){status("لا توجد دورة لتصديرها.");return;}const pack={schema_version:"OVIP-FLOW-0.1",exported_at:now(),origin:"rolling-science/ovip-flow-workbench",flow:f};downloadText(f.flow_id.toLowerCase()+".json",JSON.stringify(pack,null,2),"application/json");status("نُزّلت نسخة الدورة. احتفظ بها في مكان آمن.");}
function importFlow(file){const reader=new FileReader();reader.onload=()=>{try{const pack=JSON.parse(reader.result);const f=pack.flow||pack;if(!f.flow_id||!Array.isArray(f.tasks)||!Array.isArray(f.contributions)||!Array.isArray(f.decisions))throw new Error("بنية الملف لا تطابق حزمة OVIP Flow.");if(state.flows.some(x=>x.flow_id===f.flow_id)){f.flow_id=id("OVIP-FLOW-IMPORT");f.imported_from=pack.flow?.flow_id||"unknown";}state.flows.push(f);state.current_flow_id=f.flow_id;persist();render();status("استُوردت الدورة إلى هذا المتصفح. راجع البيانات قبل المتابعة.");}catch(e){status("تعذر الاستيراد: "+e.message);}};reader.readAsText(file);}
function resumeText(){const f=flow();if(!f)return "";return ["OVIP FLOW RESUME BRIEF","Flow ID: "+f.flow_id,"Title: "+f.title,"Environment: "+(f.environment||"unspecified"),"Problem: "+f.problem,"Goal: "+(f.goal||"unspecified"),"Constraints: "+(f.constraints||"unspecified"),"Tasks: "+f.tasks.length,"Contributions: "+f.contributions.length,"Decisions: "+f.decisions.length,"Pending tasks: "+f.tasks.filter(t=>!["accepted","closed"].includes(t.status)).map(t=>t.task_id+" — "+t.title+" ["+t.status+"]").join("; "),"Latest decision statuses: "+f.decisions.slice(-5).map(d=>d.status+": "+d.text).join(" | "),"Benefit/nutrition notes: "+(f.measurements.benefit||"not recorded"),"Harm-reduction notes: "+(f.measurements.harm_reduced||"not recorded"),"New/shifted harms: "+(f.measurements.harm_created||"not recorded"),"Continue only within the recorded scope. Distinguish self-reports, observations, tests, and derived assessments. Do not infer approval from proposals."].join("\n");}
$("flow-form").addEventListener("submit",e=>{e.preventDefault();if(flow())updateFlow();else createFlow({title:$("flow-title").value.trim(),environment:$("flow-env").value.trim(),problem:$("flow-problem").value.trim(),goal:$("flow-goal").value.trim(),constraints:$("flow-constraints").value.trim()});});
$("new-flow").onclick=()=>{if(!confirm("بدء دورة جديدة؟ ستبقى الدورات السابقة في السجل المحلي."))return;$("flow-form").reset();createFlow({title:"دورة جديدة",environment:"",problem:"",goal:"",constraints:""});};
$("add-task").onclick=addTask;$("add-contribution").onclick=addContribution;$("save-decision").onclick=addDecision;$("save-measures").onclick=saveMeasures;$("export-flow").onclick=exportFlow;$("import-flow").onchange=e=>{if(e.target.files[0])importFlow(e.target.files[0]);e.target.value="";};$("copy-context").onclick=()=>{const s=resumeText();if(s)copyText(s,"نُسخ ملخص الاستئناف.");else status("لا توجد دورة.");};
$("delete-flow").onclick=()=>{const f=flow();if(!f)return;if(!confirm("سيُحذف السجل الحالي من مساحة هذا المتصفح. هل صدّرت نسخة احتياطية؟"))return;state.flows=state.flows.filter(x=>x.flow_id!==f.flow_id);state.current_flow_id=state.flows.length?state.flows[state.flows.length-1].flow_id:null;persist();render();status("حُذفت الدورة الحالية من هذا المتصفح.");};
load();
})();