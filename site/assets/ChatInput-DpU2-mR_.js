import{a4 as p,j as e,g as T,u as S,a as C,cL as I,ag as A,ah as j,cM as P,ai as N,cN as F,cO as M,cl as z,a3 as f,aC as R,cP as B,ct as m,cq as b}from"./iframe-DgvZnKtv.js";import{C as y}from"./composed-trigger-B1u4J_6A.js";import{C as L}from"./composed-input-BkygUfBH.js";import{C as E}from"./composed-typography-BeKxRqyR.js";import{C as U}from"./ChatInputWithAttachment-Ch4lmyUt.js";import{c}from"./prompt-input-qQ5vF9bu.js";import{a as D}from"./file-upload-BRNvYMF3.js";import{u as G}from"./use-current-module-CErwN2Yp.js";import{u as W}from"./use-route-formula-Wcdielod.js";import{u as O}from"./use-permissions-RIBDcgJE.js";import{A as V}from"./arrow-up-right-QD6y7BbT.js";import{S as K}from"./square-CPm-TIYG.js";import{L as H}from"./loader-circle-BsZrs7F6.js";import{A as J}from"./arrow-up-DRg4XE8a.js";import{B as Q}from"./book-open-BBC4gIfG.js";import{B as X}from"./book-BhBva0MR.js";import{P as Y}from"./plus-BMpb-JrX.js";import{P as Z}from"./paperclip-CrBO5tEC.js";import{s as $}from"./aiAssistant.selectors-p1arcQK4.js";function ee(){const{t:a}=p("assistant");return e.jsx(c,{tooltip:a("chatInput.tooltips.attachFiles"),children:e.jsx(D,{asChild:!0,children:e.jsx("button",{type:"button","aria-label":a("chatInput.tooltips.attachFiles"),className:"pf-ai-input__context-action",children:e.jsx(Z,{className:"pf-ai-input__action-icon"})})})})}function te({onClick:a,icon:r,disabled:t,tooltipText:n}){const{t:o}=p("assistant");return e.jsx(c,{tooltip:n||o("chatInput.tooltips.attachContext"),children:e.jsx(y,{preset:"ai-input__context-action",variant:"outline",size:"icon-lg",className:"pf-ai-input__context-action",onClick:a,"aria-label":n||o("chatInput.tooltips.attachContext"),disabled:t,children:r||e.jsx(Y,{className:"pf-ai-input__action-icon",strokeWidth:m["--group-pattern-scoped-composer-pf-rendered-glyph-stroke-regular"],opacity:m["--group-pattern-scoped-composer-pf-rendered-glyph-opacity-subdued"]})})})}function ae({onClick:a,showPromptSuggestions:r}){const{t}=p("assistant");return e.jsx(c,{tooltip:t("chatInput.tooltips.examples"),children:e.jsx(y,{preset:"ai-input__suggestion-action",variant:"outline",className:"pf-ai-input__suggestion-action",onClick:a,"aria-label":t("chatInput.tooltips.examples"),children:r?e.jsx(Q,{size:b["--group-pattern-scoped-composer-pf-rendered-glyph-width-spacious"],opacity:m["--group-pattern-scoped-composer-pf-rendered-glyph-opacity-subdued"]}):e.jsx(X,{size:b["--group-pattern-scoped-composer-pf-rendered-glyph-width-spacious"],opacity:m["--group-pattern-scoped-composer-pf-rendered-glyph-opacity-subdued"]})})})}function ne(){const a=S(),r=C($),{canCreate:t}=O(),{isFormula:n}=G(),o=I(n),i=W(),{t:l}=p("assistant");return e.jsx(c,{tooltip:l("chatInput.tooltips.selectAgent"),children:e.jsxs(A,{value:r||"",onValueChange:s=>{const u=s;a(R(u)),u===f.enum.regulatory_agent&&i&&a(B({scope:u,attachment:{id:i.id,name:i.name,type:"formula"}}))},children:[e.jsx(L,{preset:"ai-input__scope-trigger","aria-label":l("chatInput.tooltips.selectAgent"),className:"pf-ai-input__scope-trigger",children:e.jsx(j,{children:e.jsx("span",{className:"pf-ai-input__scope-label",children:r&&P[r]||l("chatInput.selectAgentPlaceholder")})})}),e.jsx(N,{children:e.jsxs(F,{children:[e.jsx(M,{className:"pf-ai-input__scope-heading",children:l("chatInput.agentsLabel")}),o.map(s=>{const u=s.icon;return e.jsx(z,{value:s.scope,disabled:s.scope===f.enum.ideas_generation_agent&&!t,children:e.jsxs("span",{className:"pf-ai-input__scope-item",children:[e.jsx(u,{className:"pf-ai-input__scope-icon"}),s.label]})},s.scope)})]})})]})})}function ie({onSubmit:a,disabled:r,isPending:t,isSubmitting:n,onCancel:o}){const{t:i}=p("assistant"),l=()=>{t&&o?o():n||a()},s=t||n;return e.jsx(c,{tooltip:i(t?"chatInput.tooltips.stopGeneration":n?"chatInput.tooltips.waitingForResponse":"chatInput.tooltips.sendMessage"),children:e.jsx(y,{preset:"ai-input__submit",variant:s?"secondary":"default",className:"pf-ai-input__submit",onClick:l,"aria-label":i(t?"chatInput.tooltips.stopGeneration":n?"chatInput.tooltips.waitingForResponse":"chatInput.tooltips.sendMessage"),disabled:r&&!t||n,children:t?e.jsx(K,{className:"pf-ai-input__submit-icon"}):n?e.jsx(H,{className:"pf-ai-input__submit-spinner"}):e.jsx(J,{className:"pf-ai-input__submit-icon"})})})}function re({upload:a,value:r,attachedContent:t,onAttachedContentChange:n,onValueChange:o,onSubmit:i,handleClick:l,onShowPromptGuide:s,promptGuideLabel:u,placeholder:v,leftActions:w,rightActions:k,isLoading:q=!1,isPending:_=!1,disabled:g=!1,actionsDisabled:d=g&&!_}){const{t:h}=p("assistant"),x=g&&d;return e.jsxs("div",{inert:d||void 0,className:T(x?"pf-ai-input__disabled":"",d?"pf-ai-input__inert":""),children:[e.jsx(U,{upload:a,value:r,onValueChange:o,onSubmit:i,placeholder:v||h("chatInput.placeholder"),handleClick:l,externalAttachedContent:t,onAttachedContentChange:n,leftActions:w,rightActions:k,isLoading:q,disabled:g,actionsDisabled:d}),e.jsx("div",{className:"pf-ai-input__disclaimer",children:e.jsxs(E,{preset:"ai-input__disclaimer-copy",variant:"caption",className:"pf-ai-input__disclaimer-copy",children:[h("chatInput.disclaimer")," ",e.jsxs("button",{type:"button",onClick:s,className:"pf-ai-input__guide",children:[u||h("chatInput.promptGuideLabel"),e.jsx(V,{className:"pf-ai-input__guide-icon"})]})]})})]})}ee.__docgenInfo={description:"",methods:[],displayName:"FileUploadAction"};te.__docgenInfo={description:"",methods:[],displayName:"GlobalSearchAction",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tooltipText:{required:!1,tsType:{name:"string"},description:""}}};ae.__docgenInfo={description:"",methods:[],displayName:"PromptSuggestionsAction",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showPromptSuggestions:{required:!0,tsType:{name:"boolean"},description:""}}};ne.__docgenInfo={description:"",methods:[],displayName:"ScopeChangeAction"};ie.__docgenInfo={description:"",methods:[],displayName:"SubmitAction",props:{onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!0,tsType:{name:"boolean"},description:""},isPending:{required:!1,tsType:{name:"boolean"},description:""},isSubmitting:{required:!1,tsType:{name:"boolean"},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};re.__docgenInfo={description:"",methods:[],displayName:"ChatInput",props:{upload:{required:!0,tsType:{name:"unknown"},description:""},showPromptGuide:{required:!1,tsType:{name:"boolean"},description:""},onShowPromptGuide:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},promptGuideLabel:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},hasConversation:{required:!1,tsType:{name:"boolean"},description:""},attachedContent:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:`| Partial<File & { id: string }>
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
| "name_conflict"`,elements:[{name:"literal",value:'"uploading"'},{name:"literal",value:'"scanning"'},{name:"literal",value:'"available"'},{name:"literal",value:'"quarantined"'},{name:"literal",value:'"error"'},{name:"literal",value:'"name_conflict"'}],required:!0}},{key:"existingDocumentId",value:{name:"number",required:!1},description:`The library document that already has this file's name, while status is "name_conflict".`},{key:"existingSizeBytes",value:{name:"number",required:!1},description:"That library document's own size and type, so using it attaches what it really is, not the picked file."},{key:"existingMimeType",value:{name:"string",required:!1}},{key:"uploadProgress",value:{name:"number",required:!1},description:'0-100 blob PUT progress; meaningful only while status is "uploading".'},{key:"errorMessage",value:{name:"string",required:!1},description:`Populated when status is "quarantined" or "error" — the backend's failure_reason (free text).`},{key:"sizeBytes",value:{name:"number",required:!0}},{key:"mimeType",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!1}}]}}]}],raw:"ChatAttachment[]"},description:""},onValueChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},handleClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onAttachedContentChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(attachedContent: ChatAttachment[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"union",raw:`| Partial<File & { id: string }>
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
| "name_conflict"`,elements:[{name:"literal",value:'"uploading"'},{name:"literal",value:'"scanning"'},{name:"literal",value:'"available"'},{name:"literal",value:'"quarantined"'},{name:"literal",value:'"error"'},{name:"literal",value:'"name_conflict"'}],required:!0}},{key:"existingDocumentId",value:{name:"number",required:!1},description:`The library document that already has this file's name, while status is "name_conflict".`},{key:"existingSizeBytes",value:{name:"number",required:!1},description:"That library document's own size and type, so using it attaches what it really is, not the picked file."},{key:"existingMimeType",value:{name:"string",required:!1}},{key:"uploadProgress",value:{name:"number",required:!1},description:'0-100 blob PUT progress; meaningful only while status is "uploading".'},{key:"errorMessage",value:{name:"string",required:!1},description:`Populated when status is "quarantined" or "error" — the backend's failure_reason (free text).`},{key:"sizeBytes",value:{name:"number",required:!0}},{key:"mimeType",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!1}}]}}]}],raw:"ChatAttachment[]"},name:"attachedContent"}],return:{name:"void"}}},description:""},leftActions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightActions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isPending:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},actionsDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"disabled && !isPending",computed:!1}}}};export{re as C,ee as F,te as G,ae as P,ie as S,ne as a};
