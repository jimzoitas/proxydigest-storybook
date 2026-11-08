import{e as m,r as p,j as e}from"./iframe-AqpYXns4.js";import{B as a}from"./button-B5FjjXWS.js";import{D as h,a as g,b as f,c as y,d as v,e as b}from"./dialog-DnXWbC45.js";import{L as w}from"./loader-circle-mWFWE2W9.js";function k({attachment:i,onUseExisting:r,onKeepBoth:o,onRemove:l,onClose:u}){const{t}=m("assistant"),[n,s]=p.useState(!1),d=async()=>{s(!0);try{await o()}finally{s(!1)}};return e.jsx(h,{open:i!==null,onOpenChange:c=>!c&&!n&&u(),children:e.jsxs(g,{children:[e.jsxs(f,{children:[e.jsx(y,{children:t("chatInput.fileUpload.conflict.title",{fileName:i?.fileName??""})}),e.jsx(v,{children:t("chatInput.fileUpload.conflict.description")})]}),e.jsxs(b,{className:"pf-ai-upload-conflict__actions",children:[e.jsx(a,{type:"button",variant:"ghost",onClick:l,disabled:n,children:t("chatInput.fileUpload.conflict.remove")}),e.jsxs(a,{type:"button",variant:"outline",onClick:()=>{d()},disabled:n,children:[n&&e.jsx(w,{className:"pf-ai-upload-conflict__spinner"}),t("chatInput.fileUpload.conflict.keepBoth")]}),e.jsx(a,{type:"button",onClick:r,disabled:n,children:t("chatInput.fileUpload.conflict.useExisting")})]})]})})}k.__docgenInfo={description:"Asks what to do with a chat file whose name the library already uses.",methods:[],displayName:"ChatUploadConflictDialog",props:{attachment:{required:!0,tsType:{name:"union",raw:"UploadedFileAttachment | null",elements:[{name:"signature",type:"object",raw:`{
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
| "name_conflict"`,elements:[{name:"literal",value:'"uploading"'},{name:"literal",value:'"scanning"'},{name:"literal",value:'"available"'},{name:"literal",value:'"quarantined"'},{name:"literal",value:'"error"'},{name:"literal",value:'"name_conflict"'}],required:!0}},{key:"existingDocumentId",value:{name:"number",required:!1},description:`The library document that already has this file's name, while status is "name_conflict".`},{key:"existingSizeBytes",value:{name:"number",required:!1},description:"That library document's own size and type, so using it attaches what it really is, not the picked file."},{key:"existingMimeType",value:{name:"string",required:!1}},{key:"uploadProgress",value:{name:"number",required:!1},description:'0-100 blob PUT progress; meaningful only while status is "uploading".'},{key:"errorMessage",value:{name:"string",required:!1},description:`Populated when status is "quarantined" or "error" — the backend's failure_reason (free text).`},{key:"sizeBytes",value:{name:"number",required:!0}},{key:"mimeType",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!1}}]}},{name:"null"}]},description:"The attachment whose name the library already uses; null closes the dialog."},onUseExisting:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onKeepBoth:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<void>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},onRemove:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Closes without choosing; the chip keeps the clash until the user comes back to it."}}};export{k as C};
