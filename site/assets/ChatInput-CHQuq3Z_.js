import{a4 as c,j as e,g as T,T as S,u as C,a as I,cL as A,ah as j,ai as P,aj as N,cM as F,ak as M,cN as z,cO as R,al as B,a3 as f,aF as L,cP as E,a9 as m,cr as v}from"./iframe-6uZ_OvXJ.js";import{C as U}from"./ChatInputWithAttachment-DO7bP4_f.js";import{c as d}from"./prompt-input-PIGRCKUH.js";import{a as D}from"./file-upload-DtVSzQUD.js";import{B as y}from"./button-A8HzViyP.js";import{u as G}from"./use-current-module-CXq7_1uF.js";import{u as W}from"./use-route-formula-B6ly3Buz.js";import{u as O}from"./use-permissions-DhZfaxzb.js";import{A as V}from"./arrow-up-right-o-I_77_q.js";import{S as K}from"./square-CitGoML8.js";import{L as H}from"./loader-circle-DPzNQWfU.js";import{A as J}from"./arrow-up-DejSgtne.js";import{B as Q}from"./book-open-CCsyC6yR.js";import{B as X}from"./book-vdmy697W.js";import{P as Y}from"./plus-CjxSM-tB.js";import{P as Z}from"./paperclip-wH5rwyBQ.js";import{s as $}from"./aiAssistant.selectors-CM8XrDL2.js";function ee(){const{t}=c("assistant");return e.jsx(d,{tooltip:t("chatInput.tooltips.attachFiles"),children:e.jsx(D,{asChild:!0,children:e.jsx("button",{type:"button","aria-label":t("chatInput.tooltips.attachFiles"),className:"pf-ai-input__context-action",children:e.jsx(Z,{className:"pf-ai-input__action-icon"})})})})}function ae({onClick:t,icon:r,disabled:a,tooltipText:n}){const{t:o}=c("assistant");return e.jsx(d,{tooltip:n||o("chatInput.tooltips.attachContext"),children:e.jsx(y,{variant:"outline",size:"icon-lg",className:"pf-ai-input__context-action",onClick:t,"aria-label":n||o("chatInput.tooltips.attachContext"),disabled:a,children:r||e.jsx(Y,{className:"pf-ai-input__action-icon",strokeWidth:m["--group-conversation-pf-rendered-glyph-stroke-regular"],opacity:m["--group-conversation-pf-rendered-glyph-opacity-subdued"]})})})}function te({onClick:t,showPromptSuggestions:r}){const{t:a}=c("assistant");return e.jsx(d,{tooltip:a("chatInput.tooltips.examples"),children:e.jsx(y,{variant:"outline",className:"pf-ai-input__suggestion-action",onClick:t,"aria-label":a("chatInput.tooltips.examples"),children:r?e.jsx(Q,{size:v["--group-conversation-pf-rendered-glyph-width-spacious"],opacity:m["--group-conversation-pf-rendered-glyph-opacity-subdued"]}):e.jsx(X,{size:v["--group-conversation-pf-rendered-glyph-width-spacious"],opacity:m["--group-conversation-pf-rendered-glyph-opacity-subdued"]})})})}function ne(){const t=C(),r=I($),{canCreate:a}=O(),{isFormula:n}=G(),o=A(n),i=W(),{t:l}=c("assistant");return e.jsx(d,{tooltip:l("chatInput.tooltips.selectAgent"),children:e.jsxs(j,{value:r||"",onValueChange:s=>{const u=s;t(L(u)),u===f.enum.regulatory_agent&&i&&t(E({scope:u,attachment:{id:i.id,name:i.name,type:"formula"}}))},children:[e.jsx(P,{"aria-label":l("chatInput.tooltips.selectAgent"),className:"pf-ai-input__scope-trigger",children:e.jsx(N,{children:e.jsx("span",{className:"pf-ai-input__scope-label",children:r&&F[r]||l("chatInput.selectAgentPlaceholder")})})}),e.jsx(M,{children:e.jsxs(z,{children:[e.jsx(R,{className:"pf-ai-input__scope-heading",children:l("chatInput.agentsLabel")}),o.map(s=>{const u=s.icon;return e.jsx(B,{value:s.scope,disabled:s.scope===f.enum.ideas_generation_agent&&!a,children:e.jsxs("span",{className:"pf-ai-input__scope-item",children:[e.jsx(u,{className:"pf-ai-input__scope-icon"}),s.label]})},s.scope)})]})})]})})}function ie({onSubmit:t,disabled:r,isPending:a,isSubmitting:n,onCancel:o}){const{t:i}=c("assistant"),l=()=>{a&&o?o():n||t()},s=a||n;return e.jsx(d,{tooltip:i(a?"chatInput.tooltips.stopGeneration":n?"chatInput.tooltips.waitingForResponse":"chatInput.tooltips.sendMessage"),children:e.jsx(y,{variant:s?"secondary":"default",className:"pf-ai-input__submit",onClick:l,"aria-label":i(a?"chatInput.tooltips.stopGeneration":n?"chatInput.tooltips.waitingForResponse":"chatInput.tooltips.sendMessage"),disabled:r&&!a||n,children:a?e.jsx(K,{className:"pf-ai-input__submit-icon"}):n?e.jsx(H,{className:"pf-ai-input__submit-spinner"}):e.jsx(J,{className:"pf-ai-input__submit-icon"})})})}function re({upload:t,value:r,attachedContent:a,onAttachedContentChange:n,onValueChange:o,onSubmit:i,handleClick:l,onShowPromptGuide:s,promptGuideLabel:u,placeholder:b,leftActions:w,rightActions:k,isLoading:q=!1,isPending:_=!1,disabled:g=!1,actionsDisabled:p=g&&!_}){const{t:h}=c("assistant"),x=g&&p;return e.jsxs("div",{inert:p||void 0,className:T(x?"pf-ai-input__disabled":"",p?"pf-ai-input__inert":""),children:[e.jsx(U,{upload:t,value:r,onValueChange:o,onSubmit:i,placeholder:b||h("chatInput.placeholder"),handleClick:l,externalAttachedContent:a,onAttachedContentChange:n,leftActions:w,rightActions:k,isLoading:q,disabled:g,actionsDisabled:p}),e.jsx("div",{className:"pf-ai-input__disclaimer",children:e.jsxs(S,{variant:"caption",className:"pf-ai-input__disclaimer-copy",children:[h("chatInput.disclaimer")," ",e.jsxs("button",{type:"button",onClick:s,className:"pf-ai-input__guide",children:[u||h("chatInput.promptGuideLabel"),e.jsx(V,{className:"pf-ai-input__guide-icon"})]})]})})]})}ee.__docgenInfo={description:"",methods:[],displayName:"FileUploadAction"};ae.__docgenInfo={description:"",methods:[],displayName:"GlobalSearchAction",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tooltipText:{required:!1,tsType:{name:"string"},description:""}}};te.__docgenInfo={description:"",methods:[],displayName:"PromptSuggestionsAction",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showPromptSuggestions:{required:!0,tsType:{name:"boolean"},description:""}}};ne.__docgenInfo={description:"",methods:[],displayName:"ScopeChangeAction"};ie.__docgenInfo={description:"",methods:[],displayName:"SubmitAction",props:{onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!0,tsType:{name:"boolean"},description:""},isPending:{required:!1,tsType:{name:"boolean"},description:""},isSubmitting:{required:!1,tsType:{name:"boolean"},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};re.__docgenInfo={description:"",methods:[],displayName:"ChatInput",props:{upload:{required:!0,tsType:{name:"unknown"},description:""},showPromptGuide:{required:!1,tsType:{name:"boolean"},description:""},onShowPromptGuide:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},promptGuideLabel:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},hasConversation:{required:!1,tsType:{name:"boolean"},description:""},attachedContent:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:`| Partial<File & { id: string }>
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
| "name_conflict"`,elements:[{name:"literal",value:'"uploading"'},{name:"literal",value:'"scanning"'},{name:"literal",value:'"available"'},{name:"literal",value:'"quarantined"'},{name:"literal",value:'"error"'},{name:"literal",value:'"name_conflict"'}],required:!0}},{key:"existingDocumentId",value:{name:"number",required:!1},description:`The library document that already has this file's name, while status is "name_conflict".`},{key:"existingSizeBytes",value:{name:"number",required:!1},description:"That library document's own size and type, so using it attaches what it really is, not the picked file."},{key:"existingMimeType",value:{name:"string",required:!1}},{key:"uploadProgress",value:{name:"number",required:!1},description:'0-100 blob PUT progress; meaningful only while status is "uploading".'},{key:"errorMessage",value:{name:"string",required:!1},description:`Populated when status is "quarantined" or "error" — the backend's failure_reason (free text).`},{key:"sizeBytes",value:{name:"number",required:!0}},{key:"mimeType",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!1}}]}}]}],raw:"ChatAttachment[]"},name:"attachedContent"}],return:{name:"void"}}},description:""},leftActions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightActions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isPending:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},actionsDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"disabled && !isPending",computed:!1}}}};export{re as C,ee as F,ae as G,te as P,ie as S,ne as a};
