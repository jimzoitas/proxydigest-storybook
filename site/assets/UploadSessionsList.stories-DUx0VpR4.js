import{i as n,aY as B}from"./iframe-6uZ_OvXJ.js";import{U as l}from"./Documents.types-DFMEX-rs.js";import{U as S}from"./UploadSessionsList-BoXPkfJi.js";import"./preload-helper-PPVm8Dsz.js";/* empty css                        */import"./button-A8HzViyP.js";import"./index-BIEDR5QJ.js";import"./loader-circle-DPzNQWfU.js";import"./tooltip-core-Ddkl4sOF.js";import"./dialog-core-BISqHcOb.js";/* empty css                            */import"./dialog-DnvpmbSS.js";import"./overlay-dialog-_C1niahL.js";import"./DocumentTypeBadge-CnXd2TPy.js";const{expect:t,userEvent:p,waitFor:v,within:s}=__STORYBOOK_MODULE_TEST__,r="2026-01-02T10:00:00Z";function u(o,e,a){return{id:o,document_entity:"generic",status:a,original_filename:e,content_type:"application/pdf",metadata:{},replace_document_id:null,failure_reason:a===l.FAILED?"The upload could not be completed. Please try the file again.":null,result_document_id:null,staging_container_name:"storybook-documents",staging_blob_path:e,dismissed_at:null,created_at:r,created_by:"storybook-user",updated_at:r}}const h=u(4201,"Supplier specification.pdf",l.FAILED),y=u(4202,"Ingredient certificate.pdf",l.UPLOADED),d=u(4203,"Technical reference.pdf",l.CREATED),g={batchId:"storybook-active-upload",entityId:"",documentType:"generic",startedAt:r,files:{reference:{fileId:"reference",fileName:d.original_filename,fileSize:1048576,status:"uploading",progress:45,sessionId:d.id}}},q={title:"Product examples/Documents/Upload Sessions",id:"modules-documents-upload-sessions",component:S,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"The actual upload-session list used by the ingredient Documents upload view. These examples use the normal Storybook runtime and real document reducers. Failed uploads expose Dismiss; stale server uploads expose a confirmation with Cancel upload and Keep waiting. A live upload remains protected from dismissal. The saga-less story store does not run backend dismissal or cancellation requests; the production component and action payloads are unchanged."}}},args:{documentEntity:"generic"},argTypes:{documentEntity:{control:!1},entityId:{control:!1},entityIdField:{control:!1}}},i={parameters:{store:{preloadedState:{documents:{uploadSessions:[h,y],uploadSessionsLoading:!1,activeBatches:{},hiddenSessionIds:[]}}}},play:async({canvasElement:o})=>{const e=s(o),a=s(o.ownerDocument.body);await t(e.getByRole("button",{name:n.t("documents:upload.dismissAction")})).toBeEnabled();const f=e.getByRole("button",{name:n.t("documents:upload.hideStuckAction")});await p.click(f);const m=await a.findByRole("dialog",{name:n.t("documents:upload.sessions.hideConfirm.title")});await t(s(m).getByRole("button",{name:n.t("documents:upload.sessions.hideConfirm.confirmLabel")})).toBeEnabled(),await p.click(s(m).getByRole("button",{name:n.t("documents:upload.sessions.hideConfirm.cancelLabel")})),await v(()=>t(a.queryByRole("dialog")).not.toBeInTheDocument()),await t(e.getByText(y.original_filename)).toBeInTheDocument(),await t(B().getState().documents.hiddenSessionIds).toEqual([]),await t(e.getByText(h.original_filename)).toBeInTheDocument()}},c={parameters:{store:{preloadedState:{documents:{uploadSessions:[d],uploadSessionsLoading:!1,activeBatches:{[g.batchId]:g},hiddenSessionIds:[]}}},docs:{description:{story:"A live batch shows upload progress even when its server timestamp is old. The existing list does not offer cancellation while bytes are being sent; Cancel upload is reserved for a stale server session after confirmation."}}},play:async({canvasElement:o})=>{const e=s(o);await t(e.getByText(d.original_filename)).toBeInTheDocument(),await t(e.getByText("Uploading…")).toBeInTheDocument(),await t(e.queryByRole("button",{name:n.t("documents:upload.dismissAction")})).not.toBeInTheDocument(),await t(e.queryByRole("button",{name:n.t("documents:upload.hideStuckAction")})).not.toBeInTheDocument()}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    store: {
      preloadedState: {
        documents: {
          uploadSessions: [failedSession, staleSession],
          uploadSessionsLoading: false,
          activeBatches: {},
          hiddenSessionIds: []
        }
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await expect(canvas.getByRole("button", {
      name: i18n.t("documents:upload.dismissAction")
    })).toBeEnabled();
    const hideAction = canvas.getByRole("button", {
      name: i18n.t("documents:upload.hideStuckAction")
    });
    await userEvent.click(hideAction);
    const dialog = await body.findByRole("dialog", {
      name: i18n.t("documents:upload.sessions.hideConfirm.title")
    });
    await expect(within(dialog).getByRole("button", {
      name: i18n.t("documents:upload.sessions.hideConfirm.confirmLabel")
    })).toBeEnabled();
    await userEvent.click(within(dialog).getByRole("button", {
      name: i18n.t("documents:upload.sessions.hideConfirm.cancelLabel")
    }));
    await waitFor(() => expect(body.queryByRole("dialog")).not.toBeInTheDocument());
    await expect(canvas.getByText(staleSession.original_filename)).toBeInTheDocument();
    await expect(getCurrentStoryStore().getState().documents.hiddenSessionIds).toEqual([]);
    await expect(canvas.getByText(failedSession.original_filename)).toBeInTheDocument();
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    store: {
      preloadedState: {
        documents: {
          uploadSessions: [activeSession],
          uploadSessionsLoading: false,
          activeBatches: {
            [activeBatch.batchId]: activeBatch
          },
          hiddenSessionIds: []
        }
      }
    },
    docs: {
      description: {
        story: "A live batch shows upload progress even when its server timestamp is old. The existing list does not offer cancellation while bytes are being sent; Cancel upload is reserved for a stale server session after confirmation."
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(activeSession.original_filename)).toBeInTheDocument();
    await expect(canvas.getByText("Uploading…")).toBeInTheDocument();
    await expect(canvas.queryByRole("button", {
      name: i18n.t("documents:upload.dismissAction")
    })).not.toBeInTheDocument();
    await expect(canvas.queryByRole("button", {
      name: i18n.t("documents:upload.hideStuckAction")
    })).not.toBeInTheDocument();
  }
}`,...c.parameters?.docs?.source}}};const F=["FailedAndStaleUploads","ActiveUpload"];export{c as ActiveUpload,i as FailedAndStaleUploads,F as __namedExportsOrder,q as default};
