import{r as h,a4 as j,ec as me,j as e,ed as L,g as de,eg as ce,T as Z,fr as Y,a3 as T,eu as pe,fs as ge,ft as U}from"./iframe-DgvZnKtv.js";import{C as O}from"./composed-typography-BeKxRqyR.js";import{a as M,b as _,c as Q}from"./message-with-markdown-DvPrYfSO.js";import{g as ye,a as fe}from"./use-ai-assistant-helpers-Cp-PQUDN.js";import{AttachmentPreviewDialog as he}from"./AttachmentPreviewDialog-C8MKERq-.js";import{F as we}from"./FormulaMentionText-B7IixALA.js";import{C as v}from"./composed-trigger-B1u4J_6A.js";import{D as ke,a as ve,b as be,c as H}from"./dropdown-menu-CuN8-u21.js";import{A as qe,a as Ie,b as xe}from"./alert-B2HkS6xL.js";import{C as Se}from"./clarification-questions-CAaO75jF.js";import{c as Te,f as _e,e as je,g as Me}from"./buildNoteSnapshot-C1TBG1Z5.js";import{S as Ce}from"./SaveAsNoteDialog-BUCkWTPH.js";import{M as K}from"./MessageFeedback-B7Fy4cBP.js";import{R as Re}from"./ReplyFollowsSummary-BESozHWv.js";import{R as Ae}from"./RecipePreviewCard-D8J4WDRg.js";import{D as Fe}from"./download-D2YSvej-.js";import{N as Ne}from"./notebook-pen-CuULEEWv.js";import{C as $}from"./copy-BkjpvN59.js";const Pe=h.memo(function({message:n,messageIndex:m,queryIndex:b}){const{t:q}=j("assistant"),{t:w}=j("documents"),[g,i]=h.useState(null),l=g===null?void 0:n.attachedContent?.[g],I=(n.attachedContent??[]).flatMap((r,d)=>me(r).map((y,o)=>({attachment:y,index:d,chipKey:`${d}-${o}`})));return e.jsxs(e.Fragment,{children:[e.jsxs("div",{"data-user-query-index":b,children:[e.jsx(M,{className:"pf-ai-user-message__root",children:e.jsx(we,{text:n.content??""})}),e.jsx("div",{className:"pf-ai-user-message__attachments",children:I.map(({attachment:r,index:d,chipKey:y})=>{const o=L(r)&&r.documentId!==void 0,c=ye(r);return e.jsx("div",{className:de("pf-ai-user-message__attachment",o&&"pf-ai-user-message__attachment-interactive"),...o&&{role:"button",tabIndex:0,"aria-label":w("details.previewAttachment",{name:c}),onKeyDown:u=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),i(d))}},onClick:u=>{u.stopPropagation(),o&&i(d)},children:e.jsxs("div",{className:"pf-ai-user-message__attachment-content",children:[fe(r),e.jsx(O,{preset:"ai-user-message__attachment-detail",tone:"muted",variant:"body-compact",className:"pf-ai-user-message__attachment-detail",tooltipIfTruncated:!0,children:c})]})},ce(r)?r.id:`attachment-${m}-${y}`)})}),l&&L(l)&&l.documentId!==void 0&&e.jsx(he,{open:!0,onOpenChange:r=>!r&&i(null),documentId:l.documentId,snapshotId:l.snapshotId,fileName:l.fileName,fileExtension:l.fileExtension}),n.isCancelled&&e.jsx("div",{className:"pf-ai-user-message__edited-row",children:e.jsx(O,{preset:"ai-user-message__edited",tone:"muted",variant:"caption",className:"pf-ai-user-message__edited",children:q("chat.requestInterrupted")})})]}),n.timestamp&&e.jsx("div",{className:"pf-ai-user-message__time-row",children:e.jsx(Z,{tone:"muted",variant:"caption",children:Y(n.timestamp)})})]})});Pe.__docgenInfo={description:"",methods:[],displayName:"UserMessage",props:{message:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
the timestamp below and read as one oversized bubble (SCRM-8862).`}}};const ze=h.memo(function({message:n,lastAssistantMessage:m,displayedText:b,lastMessageRef:q,llmGeneratedIdea:w,selectedIdea:g,assistantScope:i,onFollowUpClick:l,isStreamingComplete:I,llmGeneratedFormula:r,showLlmGeneratedFormula:d,onPreviewRecipe:y,conversationTitle:o,conversationId:c,userQuery:u,relatedEntityId:V,currentFormulaProject:X}){const{t:a}=j("assistant"),k=m?.data?.timestamp,ee=k?.includes("Z")?k:`${k}Z`,C=k?new Date(ee):null,ne=C?new Date().getTime()-C.getTime()<1e4:!1,x=n.meta?.llmGeneratedIdeaId&&n.scope===T.enum.ideas_generation_agent,S=x?n.meta?.clarificationQuestions:null,R=Array.isArray(S)&&S.length>0,A=w?.title||g?.title,ae=w?.shortDescription||g?.shortDescription,te=x?[A?`**${A}**`:null,ae||null,a(R?"ideaMessage.fullSpecAvailable":"ideaMessage.fullSpecAvailableWithFollowup")].filter(Boolean).join(`

`):null,f=n.id===m?.id&&!m?.loadedFromHistory&&!I,re=(n.scope??i)===T.enum.recipe_formulation_advisor,F=i?pe[i]?.label??"Assistant":"Assistant",N={agentName:F,conversationTitle:o,conversationId:c,userQuery:u,userLabel:a("chat.userLabel"),conversationIdLabel:a("chat.conversationIdLabel")},P=f?null:e.jsxs(ke,{children:[e.jsx(ve,{asChild:!0,children:e.jsx(v,{preset:"ai-reply__action","aria-label":a("chat.tooltips.download"),variant:"ghost",size:"icon-lg",children:e.jsx(Fe,{className:"pf-ai-reply__action-icon"})})}),e.jsxs(be,{align:"end",children:[e.jsx(H,{onClick:()=>Te(n,N),children:a("chat.downloadAs.pdf")}),e.jsx(H,{onClick:()=>_e(n,N),children:a("chat.downloadAs.markdown")})]})]}),[ie,z]=h.useState(!1),[p,le]=h.useState(null),se=()=>{const t=u??"",s={agentName:F,conversationTitle:o,conversationId:c,scope:i??void 0,relatedEntityId:V};le({snapshotText:Me(t,n.content,s),defaultTitle:je("reply",{userQuery:t}),context:s}),z(!0)},oe=n.timestamp?Y(n.timestamp):"",D=n.meta?.durationMs,E=[oe,typeof D=="number"?ge(D):""].filter(Boolean).join(" · "),W=E?e.jsx(Z,{tone:"muted",variant:"caption",className:"pf-ai-reply__time",children:E}):null,G=(()=>{const t=n.meta?.interactionId,s=n.scope??i;return typeof t!="string"||!s?null:e.jsxs(e.Fragment,{children:[e.jsx(K,{interactionId:t,feedbackType:"positive",scope:s}),e.jsx(K,{interactionId:t,feedbackType:"negative",scope:s})]})})(),ue=(()=>{const t=n.meta?.interactionId,s=n.scope??i;return typeof t!="string"||!c||s!==T.enum.recipe_formulation_advisor?null:e.jsx(Re,{conversationId:c,interactionId:t,scope:s})})(),B=f?null:e.jsx(_,{tooltip:a("chat.tooltips.saveToNote"),children:e.jsx(v,{preset:"ai-reply__action","aria-label":a("chat.tooltips.saveToNote"),variant:"ghost",size:"icon-lg",onClick:se,children:e.jsx(Ne,{className:"pf-ai-reply__action-icon"})})});return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"pf-ai-reply__root","data-assistant-message":"true",ref:f?q:null,children:x?e.jsxs(e.Fragment,{children:[e.jsx(M,{markdown:!0,className:"pf-ai-reply__content",children:te??""}),e.jsx(Q,{className:"pf-ai-reply__idea-actions",children:e.jsxs("div",{className:"pf-ai-reply__idea-action-row",children:[W,e.jsx(_,{tooltip:a("chat.tooltips.copyToClipboard"),children:e.jsx(v,{preset:"ai-reply__action","aria-label":a("chat.tooltips.copyToClipboard"),variant:"ghost",size:"icon-lg",onClick:async()=>{await U(n,m||n)},children:e.jsx($,{className:"pf-ai-reply__action-icon"})})}),P,B,G]})}),R&&l&&e.jsx(Se,{questions:S??[],onQuestionClick:l})]}):e.jsxs(e.Fragment,{children:[e.jsx(M,{markdown:!0,collapsibleSections:re,openSection:"Formula Overview",isStreaming:f,className:"pf-ai-reply__content",children:f&&ne?b:n.content}),ue,e.jsxs(Q,{className:"pf-ai-reply__actions",children:[e.jsxs("div",{className:"pf-ai-reply__action-row",children:[W,e.jsx(_,{tooltip:a("chat.tooltips.copyToClipboard"),children:e.jsx(v,{preset:"ai-reply__action","aria-label":a("chat.tooltips.copyToClipboard"),variant:"ghost",size:"icon-lg",onClick:async()=>{await U(n,m||n)},children:e.jsx($,{className:"pf-ai-reply__action-icon"})})}),P,B,G]}),n.meta?.excludedIngredients?.length&&n.meta?.excludedIngredients?.length>0?e.jsx("div",{className:"pf-ai-reply__excluded",children:e.jsxs(qe,{className:"pf-ai-reply__excluded-alert",children:[e.jsx(Ie,{children:n.meta?.excludedIngredients.length>1?a("chat.ingredientsNotAvailableTitle"):a("chat.ingredientNotAvailableTitle")}),e.jsx(xe,{className:"pf-ai-reply__excluded-description",children:n.meta?.excludedIngredients.length>1?a("chat.ingredientsNotAvailableDescription",{ingredients:n.meta?.excludedIngredients.map(t=>t.name).join(", ")}):a("chat.ingredientNotAvailableDescription",{ingredients:n.meta?.excludedIngredients.map(t=>t.name).join(", ")})})]})}):e.jsx("div",{})]}),n.meta?.llmGeneratedFormulaId&&r&&r.id===n.meta.llmGeneratedFormulaId&&e.jsx(Ae,{recipe:r,onPreview:()=>{const t=n.meta?.llmGeneratedFormulaId;y?.(t,n.meta?.interactionId??null)},isPreviewing:d,className:"pf-ai-reply__proposal"})]})}),p&&e.jsx(Ce,{mode:"reply",open:ie,onOpenChange:z,snapshotText:p.snapshotText,defaultTitle:p.defaultTitle,defaultProject:X,trackingContext:{conversationId:p.context.conversationId,scope:p.context.scope,relatedEntityId:p.context.relatedEntityId}})]})});ze.__docgenInfo={description:"",methods:[],displayName:"AssistantMessage",props:{message:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"projectId",value:{name:"number",required:!0}},{key:"projectName",value:{name:"string",required:!0}}]}},description:"The current recipe's project (if any) — pre-fills the save-as-note dialog."}}};export{ze as A,Pe as U};
