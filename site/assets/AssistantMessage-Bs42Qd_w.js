import{r as h,a4 as M,ed as ue,j as e,ee as U,g as me,T as b,eh as de,fs as Z,a3 as _,ev as ce,ft as pe,fu as O}from"./iframe-6uZ_OvXJ.js";import{a as R,b as j,c as Q}from"./message-with-markdown-CHmGhMCx.js";import{g as ge,a as ye}from"./use-ai-assistant-helpers-D5oKwwJi.js";import{AttachmentPreviewDialog as fe}from"./AttachmentPreviewDialog-V5Dl2nxd.js";import{F as he}from"./FormulaMentionText-f7B5dNgY.js";import{D as we,a as ke,b as ve,c as H}from"./dropdown-menu-CH01PJiV.js";import{B as v}from"./button-A8HzViyP.js";import{A as be,a as qe,b as Ie}from"./alert-Bkb9iOAA.js";import{C as xe}from"./clarification-questions-Z4DsYWsE.js";import{c as Se,f as Te,e as _e,g as je}from"./buildNoteSnapshot-BKbDthV4.js";import{S as Me}from"./SaveAsNoteDialog-BvWHojYK.js";import{M as K}from"./MessageFeedback-B6Mb9P6L.js";import{R as Re}from"./ReplyFollowsSummary-CM14Gxdf.js";import{R as Ae}from"./RecipePreviewCard-DJY6v3Ws.js";import{D as Ce}from"./download-CFtDxXnS.js";import{N as Fe}from"./notebook-pen-x7uXq22C.js";import{C as $}from"./copy-BILc6MVC.js";const Ne=h.memo(function({message:n,messageIndex:m,queryIndex:q}){const{t:I}=M("assistant"),{t:w}=M("documents"),[g,i]=h.useState(null),l=g===null?void 0:n.attachedContent?.[g],x=(n.attachedContent??[]).flatMap((r,d)=>ue(r).map((y,o)=>({attachment:y,index:d,chipKey:`${d}-${o}`})));return e.jsxs(e.Fragment,{children:[e.jsxs("div",{"data-user-query-index":q,children:[e.jsx(R,{className:"pf-ai-user-message__root",children:e.jsx(he,{text:n.content??""})}),e.jsx("div",{className:"pf-ai-user-message__attachments",children:x.map(({attachment:r,index:d,chipKey:y})=>{const o=U(r)&&r.documentId!==void 0,c=ge(r);return e.jsx("div",{className:me("pf-ai-user-message__attachment",o&&"pf-ai-user-message__attachment-interactive"),...o&&{role:"button",tabIndex:0,"aria-label":w("details.previewAttachment",{name:c}),onKeyDown:u=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),i(d))}},onClick:u=>{u.stopPropagation(),o&&i(d)},children:e.jsxs("div",{className:"pf-ai-user-message__attachment-content",children:[ye(r),e.jsx(b,{tone:"muted",variant:"body-compact",className:"pf-ai-user-message__attachment-detail",tooltipIfTruncated:!0,children:c})]})},de(r)?r.id:`attachment-${m}-${y}`)})}),l&&U(l)&&l.documentId!==void 0&&e.jsx(fe,{open:!0,onOpenChange:r=>!r&&i(null),documentId:l.documentId,snapshotId:l.snapshotId,fileName:l.fileName,fileExtension:l.fileExtension}),n.isCancelled&&e.jsx("div",{className:"pf-ai-user-message__edited-row",children:e.jsx(b,{tone:"muted",variant:"caption",className:"pf-ai-user-message__edited",children:I("chat.requestInterrupted")})})]}),n.timestamp&&e.jsx("div",{className:"pf-ai-user-message__time-row",children:e.jsx(b,{tone:"muted",variant:"caption",children:Z(n.timestamp)})})]})});Ne.__docgenInfo={description:"",methods:[],displayName:"UserMessage",props:{message:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  role: "user" | "assistant";
  content: string;
  timestamp?: string;
  context?: Record<string, unknown>;
  attachedContent?: ChatAttachment[];
  data?: WebSocketMessageIncoming["data"];
  id?: string;
  loadedFromHistory?: boolean;
  scope?: WebSocketScope;
  isCancelled?: boolean;
  meta?: {
    attempt?: number | null;
    formulaModifications?: Record<string, unknown> | null;
    excludedIngredients?: Record<string, unknown>[] | null;
    maxAttempts?: number | null;
    llmGeneratedFormulaId?: string | null;
    ideaId?: string | null;
    llmGeneratedIdeaId?: string | null;
    userIdeaId?: string | null;
    interactionId?: string | null;
    relatedEntityId?: string | null;
    clarificationQuestions?: (Record<string, unknown> | string)[] | null;
    durationMs?: number | null;
  };
}`,signature:{properties:[{key:"role",value:{name:"union",raw:'"user" | "assistant"',elements:[{name:"literal",value:'"user"'},{name:"literal",value:'"assistant"'}],required:!0}},{key:"content",value:{name:"string",required:!0}},{key:"timestamp",value:{name:"string",required:!1}},{key:"context",value:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>",required:!1}},{key:"attachedContent",value:{name:"Array",elements:[{name:"union",raw:`| Partial<File & { id: string }>
| (Partial<ReferenceEntity> & { noteFileBytes?: number })
| Partial<ContextOption>
| UploadedFileAttachment`,elements:[{name:"Partial",elements:[{name:"intersection",raw:"File & { id: string }",elements:[{name:"File"},{name:"signature",type:"object",raw:"{ id: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}}]}],raw:"Partial<File & { id: string }>"},{name:"unknown"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  optionType?: "select";
  name: string;
  label?: string;
  description?: string;
  values: Array<{ value: string; label: string }>;
  scope?: WebSocketScope;
  id?: string;
  type?: "region" | "productCategory" | "quickFeedback" | string;
  allowEmpty?: boolean;
  allowMultiple?: boolean;
  allowMultipleLimit?: number | null;
}`,signature:{properties:[{key:"optionType",value:{name:"literal",value:'"select"',required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"values",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"Array<{ value: string; label: string }>",required:!0}},{key:"scope",value:{name:"z.infer",elements:[{name:"WebSocketScopeSchema"}],raw:"z.infer<typeof WebSocketScopeSchema>",required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:'"region" | "productCategory" | "quickFeedback" | string',elements:[{name:"literal",value:'"region"'},{name:"literal",value:'"productCategory"'},{name:"literal",value:'"quickFeedback"'},{name:"string"}],required:!1}},{key:"allowEmpty",value:{name:"boolean",required:!1}},{key:"allowMultiple",value:{name:"boolean",required:!1}},{key:"allowMultipleLimit",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}}]}}],raw:"Partial<ContextOption>"},{name:"signature",type:"object",raw:`{
  attachmentKind: "uploaded_file";
  id: string;
  fileName: string;
  fileExtension: string;
  /**
   * Set once the upload-session flow resolves to \`status: "available"\`, or
   * populated directly when this attachment backs an existing library
   * document selected from Documents. Sent as \`documentId\` in
   * create_interaction.
   */
  documentId?: number;
  /** Set on attachments read back from an interaction; previews the file as it was when sent. */
  snapshotId?: string;
  status: ChatAttachmentUploadStatus;
  /** The library document that already has this file's name, while status is "name_conflict". */
  existingDocumentId?: number;
  /** That library document's own size and type, so using it attaches what it really is, not the picked file. */
  existingSizeBytes?: number;
  existingMimeType?: string;
  /** 0-100 blob PUT progress; meaningful only while status is "uploading". */
  uploadProgress?: number;
  /** Populated when status is "quarantined" or "error" — the backend's failure_reason (free text). */
  errorMessage?: string;
  sizeBytes: number;
  mimeType?: string;
  // Other ChatAttachment arms expose optional name/type and many consumers read
  // them across the whole union without narrowing; declaring them here keeps that
  // access valid. They stay undefined for uploaded files.
  name?: string;
  type?: string;
}`,signature:{properties:[{key:"attachmentKind",value:{name:"literal",value:'"uploaded_file"',required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"fileName",value:{name:"string",required:!0}},{key:"fileExtension",value:{name:"string",required:!0}},{key:"documentId",value:{name:"number",required:!1},description:'Set once the upload-session flow resolves to `status: "available"`, or\npopulated directly when this attachment backs an existing library\ndocument selected from Documents. Sent as `documentId` in\ncreate_interaction.'},{key:"snapshotId",value:{name:"string",required:!1},description:"Set on attachments read back from an interaction; previews the file as it was when sent."},{key:"status",value:{name:"union",raw:`| "uploading"
| "scanning"
| "available"
| "quarantined"
| "error"
/** The library already holds a document with this file's name; the user picks what to do. */
| "name_conflict"`,elements:[{name:"literal",value:'"uploading"'},{name:"literal",value:'"scanning"'},{name:"literal",value:'"available"'},{name:"literal",value:'"quarantined"'},{name:"literal",value:'"error"'},{name:"literal",value:'"name_conflict"'}],required:!0}},{key:"existingDocumentId",value:{name:"number",required:!1},description:`The library document that already has this file's name, while status is "name_conflict".`},{key:"existingSizeBytes",value:{name:"number",required:!1},description:"That library document's own size and type, so using it attaches what it really is, not the picked file."},{key:"existingMimeType",value:{name:"string",required:!1}},{key:"uploadProgress",value:{name:"number",required:!1},description:'0-100 blob PUT progress; meaningful only while status is "uploading".'},{key:"errorMessage",value:{name:"string",required:!1},description:`Populated when status is "quarantined" or "error" — the backend's failure_reason (free text).`},{key:"sizeBytes",value:{name:"number",required:!0}},{key:"mimeType",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!1}}]}}]}],raw:"ChatAttachment[]",required:!1}},{key:"data",value:{name:'z.infer["data"]',raw:'WebSocketMessageIncoming["data"]',required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"loadedFromHistory",value:{name:"boolean",required:!1}},{key:"scope",value:{name:"z.infer",elements:[{name:"WebSocketScopeSchema"}],raw:"z.infer<typeof WebSocketScopeSchema>",required:!1}},{key:"isCancelled",value:{name:"boolean",required:!1}},{key:"meta",value:{name:"signature",type:"object",raw:`{
  attempt?: number | null;
  formulaModifications?: Record<string, unknown> | null;
  excludedIngredients?: Record<string, unknown>[] | null;
  maxAttempts?: number | null;
  llmGeneratedFormulaId?: string | null;
  ideaId?: string | null;
  llmGeneratedIdeaId?: string | null;
  userIdeaId?: string | null;
  interactionId?: string | null;
  relatedEntityId?: string | null;
  clarificationQuestions?: (Record<string, unknown> | string)[] | null;
  durationMs?: number | null;
}`,signature:{properties:[{key:"attempt",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}},{key:"formulaModifications",value:{name:"union",raw:"Record<string, unknown> | null",elements:[{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},{name:"null"}],required:!1}},{key:"excludedIngredients",value:{name:"union",raw:"Record<string, unknown>[] | null",elements:[{name:"Array",elements:[{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"}],raw:"Record<string, unknown>[]"},{name:"null"}],required:!1}},{key:"maxAttempts",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}},{key:"llmGeneratedFormulaId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"ideaId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"llmGeneratedIdeaId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"userIdeaId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"interactionId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"relatedEntityId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"clarificationQuestions",value:{name:"union",raw:"(Record<string, unknown> | string)[] | null",elements:[{name:"Array",elements:[{name:"unknown"}],raw:"(Record<string, unknown> | string)[]"},{name:"null"}],required:!1}},{key:"durationMs",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}}]},required:!1}}]}},description:""},messageIndex:{required:!0,tsType:{name:"number"},description:""},queryIndex:{required:!0,tsType:{name:"number"},description:`Position of this query in the thread, for the query navigator. It anchors
the jump target and the pulse highlight, so it sits on the prompt itself
rather than the outer wrapper — otherwise the highlight would also tint
the timestamp below and read as one oversized bubble (SCRM-8862).`}}};const Pe=h.memo(function({message:n,lastAssistantMessage:m,displayedText:q,lastMessageRef:I,llmGeneratedIdea:w,selectedIdea:g,assistantScope:i,onFollowUpClick:l,isStreamingComplete:x,llmGeneratedFormula:r,showLlmGeneratedFormula:d,onPreviewRecipe:y,conversationTitle:o,conversationId:c,userQuery:u,relatedEntityId:J,currentFormulaProject:V}){const{t:a}=M("assistant"),k=m?.data?.timestamp,X=k?.includes("Z")?k:`${k}Z`,A=k?new Date(X):null,ee=A?new Date().getTime()-A.getTime()<1e4:!1,S=n.meta?.llmGeneratedIdeaId&&n.scope===_.enum.ideas_generation_agent,T=S?n.meta?.clarificationQuestions:null,C=Array.isArray(T)&&T.length>0,F=w?.title||g?.title,ne=w?.shortDescription||g?.shortDescription,ae=S?[F?`**${F}**`:null,ne||null,a(C?"ideaMessage.fullSpecAvailable":"ideaMessage.fullSpecAvailableWithFollowup")].filter(Boolean).join(`

`):null,f=n.id===m?.id&&!m?.loadedFromHistory&&!x,te=(n.scope??i)===_.enum.recipe_formulation_advisor,N=i?ce[i]?.label??"Assistant":"Assistant",P={agentName:N,conversationTitle:o,conversationId:c,userQuery:u,userLabel:a("chat.userLabel"),conversationIdLabel:a("chat.conversationIdLabel")},z=f?null:e.jsxs(we,{children:[e.jsx(ke,{asChild:!0,children:e.jsx(v,{"aria-label":a("chat.tooltips.download"),variant:"ghost",size:"icon-lg",className:"pf-ai-reply__action",children:e.jsx(Ce,{className:"pf-ai-reply__action-icon"})})}),e.jsxs(ve,{align:"end",children:[e.jsx(H,{onClick:()=>Se(n,P),children:a("chat.downloadAs.pdf")}),e.jsx(H,{onClick:()=>Te(n,P),children:a("chat.downloadAs.markdown")})]})]}),[re,D]=h.useState(!1),[p,ie]=h.useState(null),le=()=>{const t=u??"",s={agentName:N,conversationTitle:o,conversationId:c,scope:i??void 0,relatedEntityId:J};ie({snapshotText:je(t,n.content,s),defaultTitle:_e("reply",{userQuery:t}),context:s}),D(!0)},se=n.timestamp?Z(n.timestamp):"",E=n.meta?.durationMs,W=[se,typeof E=="number"?pe(E):""].filter(Boolean).join(" · "),G=W?e.jsx(b,{tone:"muted",variant:"caption",className:"pf-ai-reply__time",children:W}):null,B=(()=>{const t=n.meta?.interactionId,s=n.scope??i;return typeof t!="string"||!s?null:e.jsxs(e.Fragment,{children:[e.jsx(K,{interactionId:t,feedbackType:"positive",scope:s}),e.jsx(K,{interactionId:t,feedbackType:"negative",scope:s})]})})(),oe=(()=>{const t=n.meta?.interactionId,s=n.scope??i;return typeof t!="string"||!c||s!==_.enum.recipe_formulation_advisor?null:e.jsx(Re,{conversationId:c,interactionId:t,scope:s})})(),L=f?null:e.jsx(j,{tooltip:a("chat.tooltips.saveToNote"),children:e.jsx(v,{"aria-label":a("chat.tooltips.saveToNote"),variant:"ghost",size:"icon-lg",className:"pf-ai-reply__action",onClick:le,children:e.jsx(Fe,{className:"pf-ai-reply__action-icon"})})});return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"pf-ai-reply__root","data-assistant-message":"true",ref:f?I:null,children:S?e.jsxs(e.Fragment,{children:[e.jsx(R,{markdown:!0,className:"pf-ai-reply__content",children:ae??""}),e.jsx(Q,{className:"pf-ai-reply__idea-actions",children:e.jsxs("div",{className:"pf-ai-reply__idea-action-row",children:[G,e.jsx(j,{tooltip:a("chat.tooltips.copyToClipboard"),children:e.jsx(v,{"aria-label":a("chat.tooltips.copyToClipboard"),variant:"ghost",size:"icon-lg",className:"pf-ai-reply__action",onClick:async()=>{await O(n,m||n)},children:e.jsx($,{className:"pf-ai-reply__action-icon"})})}),z,L,B]})}),C&&l&&e.jsx(xe,{questions:T??[],onQuestionClick:l})]}):e.jsxs(e.Fragment,{children:[e.jsx(R,{markdown:!0,collapsibleSections:te,openSection:"Formula Overview",isStreaming:f,className:"pf-ai-reply__content",children:f&&ee?q:n.content}),oe,e.jsxs(Q,{className:"pf-ai-reply__actions",children:[e.jsxs("div",{className:"pf-ai-reply__action-row",children:[G,e.jsx(j,{tooltip:a("chat.tooltips.copyToClipboard"),children:e.jsx(v,{"aria-label":a("chat.tooltips.copyToClipboard"),variant:"ghost",size:"icon-lg",className:"pf-ai-reply__action",onClick:async()=>{await O(n,m||n)},children:e.jsx($,{className:"pf-ai-reply__action-icon"})})}),z,L,B]}),n.meta?.excludedIngredients?.length&&n.meta?.excludedIngredients?.length>0?e.jsx("div",{className:"pf-ai-reply__excluded",children:e.jsxs(be,{className:"pf-ai-reply__excluded-alert",children:[e.jsx(qe,{children:n.meta?.excludedIngredients.length>1?a("chat.ingredientsNotAvailableTitle"):a("chat.ingredientNotAvailableTitle")}),e.jsx(Ie,{className:"pf-ai-reply__excluded-description",children:n.meta?.excludedIngredients.length>1?a("chat.ingredientsNotAvailableDescription",{ingredients:n.meta?.excludedIngredients.map(t=>t.name).join(", ")}):a("chat.ingredientNotAvailableDescription",{ingredients:n.meta?.excludedIngredients.map(t=>t.name).join(", ")})})]})}):e.jsx("div",{})]}),n.meta?.llmGeneratedFormulaId&&r&&r.id===n.meta.llmGeneratedFormulaId&&e.jsx(Ae,{recipe:r,onPreview:()=>{const t=n.meta?.llmGeneratedFormulaId;y?.(t,n.meta?.interactionId??null)},isPreviewing:d,className:"pf-ai-reply__proposal"})]})}),p&&e.jsx(Me,{mode:"reply",open:re,onOpenChange:D,snapshotText:p.snapshotText,defaultTitle:p.defaultTitle,defaultProject:V,trackingContext:{conversationId:p.context.conversationId,scope:p.context.scope,relatedEntityId:p.context.relatedEntityId}})]})});Pe.__docgenInfo={description:"",methods:[],displayName:"AssistantMessage",props:{message:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  role: "user" | "assistant";
  content: string;
  timestamp?: string;
  context?: Record<string, unknown>;
  attachedContent?: ChatAttachment[];
  data?: WebSocketMessageIncoming["data"];
  id?: string;
  loadedFromHistory?: boolean;
  scope?: WebSocketScope;
  isCancelled?: boolean;
  meta?: {
    attempt?: number | null;
    formulaModifications?: Record<string, unknown> | null;
    excludedIngredients?: Record<string, unknown>[] | null;
    maxAttempts?: number | null;
    llmGeneratedFormulaId?: string | null;
    ideaId?: string | null;
    llmGeneratedIdeaId?: string | null;
    userIdeaId?: string | null;
    interactionId?: string | null;
    relatedEntityId?: string | null;
    clarificationQuestions?: (Record<string, unknown> | string)[] | null;
    durationMs?: number | null;
  };
}`,signature:{properties:[{key:"role",value:{name:"union",raw:'"user" | "assistant"',elements:[{name:"literal",value:'"user"'},{name:"literal",value:'"assistant"'}],required:!0}},{key:"content",value:{name:"string",required:!0}},{key:"timestamp",value:{name:"string",required:!1}},{key:"context",value:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>",required:!1}},{key:"attachedContent",value:{name:"Array",elements:[{name:"union",raw:`| Partial<File & { id: string }>
| (Partial<ReferenceEntity> & { noteFileBytes?: number })
| Partial<ContextOption>
| UploadedFileAttachment`,elements:[{name:"Partial",elements:[{name:"intersection",raw:"File & { id: string }",elements:[{name:"File"},{name:"signature",type:"object",raw:"{ id: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}}]}],raw:"Partial<File & { id: string }>"},{name:"unknown"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  optionType?: "select";
  name: string;
  label?: string;
  description?: string;
  values: Array<{ value: string; label: string }>;
  scope?: WebSocketScope;
  id?: string;
  type?: "region" | "productCategory" | "quickFeedback" | string;
  allowEmpty?: boolean;
  allowMultiple?: boolean;
  allowMultipleLimit?: number | null;
}`,signature:{properties:[{key:"optionType",value:{name:"literal",value:'"select"',required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"values",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"Array<{ value: string; label: string }>",required:!0}},{key:"scope",value:{name:"z.infer",elements:[{name:"WebSocketScopeSchema"}],raw:"z.infer<typeof WebSocketScopeSchema>",required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:'"region" | "productCategory" | "quickFeedback" | string',elements:[{name:"literal",value:'"region"'},{name:"literal",value:'"productCategory"'},{name:"literal",value:'"quickFeedback"'},{name:"string"}],required:!1}},{key:"allowEmpty",value:{name:"boolean",required:!1}},{key:"allowMultiple",value:{name:"boolean",required:!1}},{key:"allowMultipleLimit",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}}]}}],raw:"Partial<ContextOption>"},{name:"signature",type:"object",raw:`{
  attachmentKind: "uploaded_file";
  id: string;
  fileName: string;
  fileExtension: string;
  /**
   * Set once the upload-session flow resolves to \`status: "available"\`, or
   * populated directly when this attachment backs an existing library
   * document selected from Documents. Sent as \`documentId\` in
   * create_interaction.
   */
  documentId?: number;
  /** Set on attachments read back from an interaction; previews the file as it was when sent. */
  snapshotId?: string;
  status: ChatAttachmentUploadStatus;
  /** The library document that already has this file's name, while status is "name_conflict". */
  existingDocumentId?: number;
  /** That library document's own size and type, so using it attaches what it really is, not the picked file. */
  existingSizeBytes?: number;
  existingMimeType?: string;
  /** 0-100 blob PUT progress; meaningful only while status is "uploading". */
  uploadProgress?: number;
  /** Populated when status is "quarantined" or "error" — the backend's failure_reason (free text). */
  errorMessage?: string;
  sizeBytes: number;
  mimeType?: string;
  // Other ChatAttachment arms expose optional name/type and many consumers read
  // them across the whole union without narrowing; declaring them here keeps that
  // access valid. They stay undefined for uploaded files.
  name?: string;
  type?: string;
}`,signature:{properties:[{key:"attachmentKind",value:{name:"literal",value:'"uploaded_file"',required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"fileName",value:{name:"string",required:!0}},{key:"fileExtension",value:{name:"string",required:!0}},{key:"documentId",value:{name:"number",required:!1},description:'Set once the upload-session flow resolves to `status: "available"`, or\npopulated directly when this attachment backs an existing library\ndocument selected from Documents. Sent as `documentId` in\ncreate_interaction.'},{key:"snapshotId",value:{name:"string",required:!1},description:"Set on attachments read back from an interaction; previews the file as it was when sent."},{key:"status",value:{name:"union",raw:`| "uploading"
| "scanning"
| "available"
| "quarantined"
| "error"
/** The library already holds a document with this file's name; the user picks what to do. */
| "name_conflict"`,elements:[{name:"literal",value:'"uploading"'},{name:"literal",value:'"scanning"'},{name:"literal",value:'"available"'},{name:"literal",value:'"quarantined"'},{name:"literal",value:'"error"'},{name:"literal",value:'"name_conflict"'}],required:!0}},{key:"existingDocumentId",value:{name:"number",required:!1},description:`The library document that already has this file's name, while status is "name_conflict".`},{key:"existingSizeBytes",value:{name:"number",required:!1},description:"That library document's own size and type, so using it attaches what it really is, not the picked file."},{key:"existingMimeType",value:{name:"string",required:!1}},{key:"uploadProgress",value:{name:"number",required:!1},description:'0-100 blob PUT progress; meaningful only while status is "uploading".'},{key:"errorMessage",value:{name:"string",required:!1},description:`Populated when status is "quarantined" or "error" — the backend's failure_reason (free text).`},{key:"sizeBytes",value:{name:"number",required:!0}},{key:"mimeType",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!1}}]}}]}],raw:"ChatAttachment[]",required:!1}},{key:"data",value:{name:'z.infer["data"]',raw:'WebSocketMessageIncoming["data"]',required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"loadedFromHistory",value:{name:"boolean",required:!1}},{key:"scope",value:{name:"z.infer",elements:[{name:"WebSocketScopeSchema"}],raw:"z.infer<typeof WebSocketScopeSchema>",required:!1}},{key:"isCancelled",value:{name:"boolean",required:!1}},{key:"meta",value:{name:"signature",type:"object",raw:`{
  attempt?: number | null;
  formulaModifications?: Record<string, unknown> | null;
  excludedIngredients?: Record<string, unknown>[] | null;
  maxAttempts?: number | null;
  llmGeneratedFormulaId?: string | null;
  ideaId?: string | null;
  llmGeneratedIdeaId?: string | null;
  userIdeaId?: string | null;
  interactionId?: string | null;
  relatedEntityId?: string | null;
  clarificationQuestions?: (Record<string, unknown> | string)[] | null;
  durationMs?: number | null;
}`,signature:{properties:[{key:"attempt",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}},{key:"formulaModifications",value:{name:"union",raw:"Record<string, unknown> | null",elements:[{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},{name:"null"}],required:!1}},{key:"excludedIngredients",value:{name:"union",raw:"Record<string, unknown>[] | null",elements:[{name:"Array",elements:[{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"}],raw:"Record<string, unknown>[]"},{name:"null"}],required:!1}},{key:"maxAttempts",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}},{key:"llmGeneratedFormulaId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"ideaId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"llmGeneratedIdeaId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"userIdeaId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"interactionId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"relatedEntityId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"clarificationQuestions",value:{name:"union",raw:"(Record<string, unknown> | string)[] | null",elements:[{name:"Array",elements:[{name:"unknown"}],raw:"(Record<string, unknown> | string)[]"},{name:"null"}],required:!1}},{key:"durationMs",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}}]},required:!1}}]}},description:""},lastAssistantMessage:{required:!0,tsType:{name:"union",raw:"MessageHistoryItem | undefined",elements:[{name:"signature",type:"object",raw:`{
  role: "user" | "assistant";
  content: string;
  timestamp?: string;
  context?: Record<string, unknown>;
  attachedContent?: ChatAttachment[];
  data?: WebSocketMessageIncoming["data"];
  id?: string;
  loadedFromHistory?: boolean;
  scope?: WebSocketScope;
  isCancelled?: boolean;
  meta?: {
    attempt?: number | null;
    formulaModifications?: Record<string, unknown> | null;
    excludedIngredients?: Record<string, unknown>[] | null;
    maxAttempts?: number | null;
    llmGeneratedFormulaId?: string | null;
    ideaId?: string | null;
    llmGeneratedIdeaId?: string | null;
    userIdeaId?: string | null;
    interactionId?: string | null;
    relatedEntityId?: string | null;
    clarificationQuestions?: (Record<string, unknown> | string)[] | null;
    durationMs?: number | null;
  };
}`,signature:{properties:[{key:"role",value:{name:"union",raw:'"user" | "assistant"',elements:[{name:"literal",value:'"user"'},{name:"literal",value:'"assistant"'}],required:!0}},{key:"content",value:{name:"string",required:!0}},{key:"timestamp",value:{name:"string",required:!1}},{key:"context",value:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>",required:!1}},{key:"attachedContent",value:{name:"Array",elements:[{name:"union",raw:`| Partial<File & { id: string }>
| (Partial<ReferenceEntity> & { noteFileBytes?: number })
| Partial<ContextOption>
| UploadedFileAttachment`,elements:[{name:"Partial",elements:[{name:"intersection",raw:"File & { id: string }",elements:[{name:"File"},{name:"signature",type:"object",raw:"{ id: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}}]}],raw:"Partial<File & { id: string }>"},{name:"unknown"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  optionType?: "select";
  name: string;
  label?: string;
  description?: string;
  values: Array<{ value: string; label: string }>;
  scope?: WebSocketScope;
  id?: string;
  type?: "region" | "productCategory" | "quickFeedback" | string;
  allowEmpty?: boolean;
  allowMultiple?: boolean;
  allowMultipleLimit?: number | null;
}`,signature:{properties:[{key:"optionType",value:{name:"literal",value:'"select"',required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"values",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"Array<{ value: string; label: string }>",required:!0}},{key:"scope",value:{name:"z.infer",elements:[{name:"WebSocketScopeSchema"}],raw:"z.infer<typeof WebSocketScopeSchema>",required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:'"region" | "productCategory" | "quickFeedback" | string',elements:[{name:"literal",value:'"region"'},{name:"literal",value:'"productCategory"'},{name:"literal",value:'"quickFeedback"'},{name:"string"}],required:!1}},{key:"allowEmpty",value:{name:"boolean",required:!1}},{key:"allowMultiple",value:{name:"boolean",required:!1}},{key:"allowMultipleLimit",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}}]}}],raw:"Partial<ContextOption>"},{name:"signature",type:"object",raw:`{
  attachmentKind: "uploaded_file";
  id: string;
  fileName: string;
  fileExtension: string;
  /**
   * Set once the upload-session flow resolves to \`status: "available"\`, or
   * populated directly when this attachment backs an existing library
   * document selected from Documents. Sent as \`documentId\` in
   * create_interaction.
   */
  documentId?: number;
  /** Set on attachments read back from an interaction; previews the file as it was when sent. */
  snapshotId?: string;
  status: ChatAttachmentUploadStatus;
  /** The library document that already has this file's name, while status is "name_conflict". */
  existingDocumentId?: number;
  /** That library document's own size and type, so using it attaches what it really is, not the picked file. */
  existingSizeBytes?: number;
  existingMimeType?: string;
  /** 0-100 blob PUT progress; meaningful only while status is "uploading". */
  uploadProgress?: number;
  /** Populated when status is "quarantined" or "error" — the backend's failure_reason (free text). */
  errorMessage?: string;
  sizeBytes: number;
  mimeType?: string;
  // Other ChatAttachment arms expose optional name/type and many consumers read
  // them across the whole union without narrowing; declaring them here keeps that
  // access valid. They stay undefined for uploaded files.
  name?: string;
  type?: string;
}`,signature:{properties:[{key:"attachmentKind",value:{name:"literal",value:'"uploaded_file"',required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"fileName",value:{name:"string",required:!0}},{key:"fileExtension",value:{name:"string",required:!0}},{key:"documentId",value:{name:"number",required:!1},description:'Set once the upload-session flow resolves to `status: "available"`, or\npopulated directly when this attachment backs an existing library\ndocument selected from Documents. Sent as `documentId` in\ncreate_interaction.'},{key:"snapshotId",value:{name:"string",required:!1},description:"Set on attachments read back from an interaction; previews the file as it was when sent."},{key:"status",value:{name:"union",raw:`| "uploading"
| "scanning"
| "available"
| "quarantined"
| "error"
/** The library already holds a document with this file's name; the user picks what to do. */
| "name_conflict"`,elements:[{name:"literal",value:'"uploading"'},{name:"literal",value:'"scanning"'},{name:"literal",value:'"available"'},{name:"literal",value:'"quarantined"'},{name:"literal",value:'"error"'},{name:"literal",value:'"name_conflict"'}],required:!0}},{key:"existingDocumentId",value:{name:"number",required:!1},description:`The library document that already has this file's name, while status is "name_conflict".`},{key:"existingSizeBytes",value:{name:"number",required:!1},description:"That library document's own size and type, so using it attaches what it really is, not the picked file."},{key:"existingMimeType",value:{name:"string",required:!1}},{key:"uploadProgress",value:{name:"number",required:!1},description:'0-100 blob PUT progress; meaningful only while status is "uploading".'},{key:"errorMessage",value:{name:"string",required:!1},description:`Populated when status is "quarantined" or "error" — the backend's failure_reason (free text).`},{key:"sizeBytes",value:{name:"number",required:!0}},{key:"mimeType",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!1}}]}}]}],raw:"ChatAttachment[]",required:!1}},{key:"data",value:{name:'z.infer["data"]',raw:'WebSocketMessageIncoming["data"]',required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"loadedFromHistory",value:{name:"boolean",required:!1}},{key:"scope",value:{name:"z.infer",elements:[{name:"WebSocketScopeSchema"}],raw:"z.infer<typeof WebSocketScopeSchema>",required:!1}},{key:"isCancelled",value:{name:"boolean",required:!1}},{key:"meta",value:{name:"signature",type:"object",raw:`{
  attempt?: number | null;
  formulaModifications?: Record<string, unknown> | null;
  excludedIngredients?: Record<string, unknown>[] | null;
  maxAttempts?: number | null;
  llmGeneratedFormulaId?: string | null;
  ideaId?: string | null;
  llmGeneratedIdeaId?: string | null;
  userIdeaId?: string | null;
  interactionId?: string | null;
  relatedEntityId?: string | null;
  clarificationQuestions?: (Record<string, unknown> | string)[] | null;
  durationMs?: number | null;
}`,signature:{properties:[{key:"attempt",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}},{key:"formulaModifications",value:{name:"union",raw:"Record<string, unknown> | null",elements:[{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},{name:"null"}],required:!1}},{key:"excludedIngredients",value:{name:"union",raw:"Record<string, unknown>[] | null",elements:[{name:"Array",elements:[{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"}],raw:"Record<string, unknown>[]"},{name:"null"}],required:!1}},{key:"maxAttempts",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}},{key:"llmGeneratedFormulaId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"ideaId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"llmGeneratedIdeaId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"userIdeaId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"interactionId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"relatedEntityId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"clarificationQuestions",value:{name:"union",raw:"(Record<string, unknown> | string)[] | null",elements:[{name:"Array",elements:[{name:"unknown"}],raw:"(Record<string, unknown> | string)[]"},{name:"null"}],required:!1}},{key:"durationMs",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}}]},required:!1}}]}},{name:"undefined"}]},description:""},displayedText:{required:!0,tsType:{name:"string"},description:""},lastMessageRef:{required:!0,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLDivElement | null>",elements:[{name:"union",raw:"HTMLDivElement | null",elements:[{name:"HTMLDivElement"},{name:"null"}]}]},description:""},llmGeneratedIdea:{required:!0,tsType:{name:"union",raw:"LLMGeneratedIdea | null | undefined",elements:[{name:"LLMGeneratedIdea"},{name:"null"},{name:"undefined"}]},description:""},selectedIdea:{required:!0,tsType:{name:"union",raw:"Idea | null",elements:[{name:"Idea"},{name:"null"}]},description:""},assistantScope:{required:!0,tsType:{name:"union",raw:"WebSocketScope | null",elements:[{name:"z.infer",elements:[{name:"WebSocketScopeSchema"}],raw:"z.infer<typeof WebSocketScopeSchema>"},{name:"null"}]},description:""},onFollowUpClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(question: string) => void",signature:{arguments:[{type:{name:"string"},name:"question"}],return:{name:"void"}}},description:""},isStreamingComplete:{required:!0,tsType:{name:"boolean"},description:""},llmGeneratedFormula:{required:!1,tsType:{name:"union",raw:`{
  id: string;
  name: string;
  description: string | null;
  initialComponents: unknown[];
  processingSteps: unknown[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  id: string;
  name: string;
  description: string | null;
  initialComponents: unknown[];
  processingSteps: unknown[];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"description",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"initialComponents",value:{name:"Array",elements:[{name:"unknown"}],raw:"unknown[]",required:!0}},{key:"processingSteps",value:{name:"Array",elements:[{name:"unknown"}],raw:"unknown[]",required:!0}}]}},{name:"null"}]},description:""},showLlmGeneratedFormula:{required:!1,tsType:{name:"boolean"},description:""},onPreviewRecipe:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  llmFormulaId: string,
  interactionId: string | null,
) => void`,signature:{arguments:[{type:{name:"string"},name:"llmFormulaId"},{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"interactionId"}],return:{name:"void"}}},description:"`interactionId` is the reply that produced the recipe, not the chat's latest."},conversationTitle:{required:!1,tsType:{name:"string"},description:""},conversationId:{required:!1,tsType:{name:"string"},description:""},userQuery:{required:!1,tsType:{name:"string"},description:"The user's query that produced this answer — drives the download filename."},relatedEntityId:{required:!1,tsType:{name:"string"},description:"The formula/idea this conversation is bound to, if any — used for the note backlink."},currentFormulaProject:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  projectId: number;
  projectName: string;
}`,signature:{properties:[{key:"projectId",value:{name:"number",required:!0}},{key:"projectName",value:{name:"string",required:!0}}]}},description:"The current recipe's project (if any) — pre-fills the save-as-note dialog."}}};export{Pe as A,Ne as U};
