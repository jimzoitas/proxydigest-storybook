import{h as R,H as i,a4 as L,r as T,j as r}from"./iframe-AqpYXns4.js";import{B as N}from"./button-B5FjjXWS.js";import{o as H,q as M,D as F}from"./apiUrl-CtX1NveE.js";import{S as B,I as A}from"./SpecDetailDialog-C6zJ_du4.js";import{AttachmentPreviewDialog as j}from"./AttachmentPreviewDialog-qCRaGZ4S.js";import{d as O}from"./delay-B1MW13Nt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DEXj3--c.js";import"./loader-circle-mWFWE2W9.js";import"./dialog-DnXWbC45.js";import"./overlay-dialog-aVFq0bEi.js";import"./input-DLCq6ZzS.js";import"./textarea-autosize-Qs0RnMGQ.js";import"./index-DNac6l-A.js";import"./promptInstructionsSchema-BZ1LQ4eT.js";import"./book-D6ZqxQjm.js";import"./pencil-RUyFOvPb.js";import"./use-api-DWwVMkDM.js";import"./jsonApiHandler-Dm7XqYVj.js";import"./request-CjBGnTdg.js";import"./trackPosthogEvent-D3YuMJXm.js";import"./featureFlags-R30pJjMx.js";import"./intensityLabel-DMPld_sc.js";import"./wrench-CN14mh1R.js";import"./star-BnhHNI84.js";import"./chart-column-CBH_1e1B.js";import"./file-text-cneRnGIV.js";import"./target-DT6jM-gT.js";import"./use-document-preview-V5E7wm0C.js";import"./DocumentTypeBadge-DkELIjrj.js";import"./truncated-markdown-BMtK9WjV.js";import"./encodeBlobUrl-FLx_wV7M.js";import"./document-mention-BYX0PbGQ.js";import"./markdown-table-C7cvUrXU.js";import"./table-cell-sizing-C0yGB5Oh.js";import"./chevrons-right-Ca-LUumR.js";import"./chevron-left-DLgfJc_O.js";import"./chevron-right-B3hyZT-D.js";import"./index-C9pEX-zO.js";import"./index-C6ZnvOnQ.js";import"./index-6EzalymI.js";import"./index-8G61PpGJ.js";import"./external-link-Dt5jxCST.js";import"./restApiClient-CPK-wgSn.js";import"./isObject-DVTTJpIa.js";const{expect:v,fn:V,userEvent:n,within:c}=__STORYBOOK_MODULE_TEST__,k="https://storybook.invalid/reference-details.md",o=(e="ready")=>[...[H,M].map(a=>R.get(`${a}/:id`,async()=>(e==="loading"&&await O("infinite"),e==="error"?i.json({errors:[{status:"503",detail:"Local specification unavailable"}]},{status:503}):i.json({data:L("specification_formula","991",e==="empty"?{name:"Oat drink target"}:{name:"Oat drink target",description:"Smooth oat beverage with a clean finish.",ingredients_min:2,ingredients_max:8,production_scale:"pilot"})})))),R.get(`${F}/:id/download-token`,async()=>(e==="loading"&&await O("infinite"),e==="error"?i.json({detail:"Local attachment unavailable"},{status:503}):i.json({download_url:k,expires_at:"2099-01-01T00:00:00Z"}))),R.get(k,()=>i.text(`# Ingredient specification

Oat flour, pilot batch.

- Store in a dry place.
- Contains oats.`))];function q({reference:e,editable:a,off:s,rejectSave:P,onEdit:_}){const[E,p]=T.useState(!1),[C,D]=T.useState({title:"Metric units",instruction:"Always answer in metric units.",entryType:"rule"}),U=I=>(_(I),P?Promise.resolve(!1):(D(I),Promise.resolve(!0)));return r.jsxs("div",{className:"pf-story-ai-assistant-reference-details-frame",children:[r.jsx(N,{onClick:()=>p(!0),children:"Open reference"}),r.jsx("p",{children:"Only local fixture state changes; no record is persisted."}),e==="instruction"&&r.jsx(A,{open:E,onOpenChange:p,name:"Metric units",badgeLabel:"Project",badgeClassName:"pf-story-ai-assistant-reference-details-trigger",isInEffect:!s,...C,entryTypes:["rule","context"],onSave:a?U:void 0}),e==="specification"&&r.jsx(B,{open:E,onOpenChange:p,specificationId:991,context:"formula",specName:"Oat drink target",editTo:"/recipes/1042?tab=specification",isOff:s}),e==="attachment"&&r.jsx(j,{open:E,onOpenChange:p,documentId:81,fileName:"Ingredient specification",fileExtension:"md",contentType:"text/markdown"})]})}const De={title:"Patterns/AI/Reference detail dialogs",component:q,subcomponents:{InstructionDetailDialog:A,SpecDetailDialog:B,AttachmentPreviewDialog:j},tags:["autodocs"],args:{reference:"instruction",editable:!0,off:!1,rejectSave:!1,onEdit:V()},argTypes:{reference:{control:"inline-radio",options:["instruction","specification","attachment"]},editable:{control:"boolean"},off:{control:"boolean"},rejectSave:{control:"boolean"},onEdit:{control:!1}},parameters:{msw:{handlers:o()},docs:{description:{component:`Instruction, target specification and attachment details are distinct real dialog implementations grouped by the reference-inspection task. Select the source and open it; the controls affect only supported contracts. Instructions have editable/off states. Specification readiness comes from the JSON:API endpoint selected by formula/project context. Attachment preview requests a fresh live or snapshot download token, then uses the existing file-type renderer.

### API and ownership
InstructionDetailDialog owns its draft and saving lock, but onSave({title,instruction,entryType}) returns Promise<boolean> from the host. True exits editing; false keeps the draft and reports failure. This local adapter explicitly updates only fixture state. Without onSave the dialog is read-only or uses an optional editTo link. SpecDetailDialog receives specificationId, context, fallback specName and editTo; it loads the actual specification document. AttachmentPreviewDialog receives numeric documentId, optional snapshotId, fileName, extension and contentType. Its loader renews expiring URLs. No publishing, file deletion or real saving occurs here.

### Anatomy and accessibility
Each dialog has a named header, scrollable content and relevant footer actions. Preserve Radix focus trapping and Escape, input/textarea names, draft validation and the source saving-dismiss lock. Source-specific pending, empty and error states are exposed as scenarios. The attachment fixture renders actual Markdown through a local intercepted URL; PDF embedding and external-tab delivery require browser/runtime integration.`}}}},d={},t=async({canvasElement:e})=>{await n.click(c(e).getByRole("button",{name:"Open reference"}))},l={play:async e=>{await t(e);const a=c(await c(document.body).findByRole("dialog"));await n.click(a.getByRole("button",{name:"Edit"}));const s=a.getByRole("textbox",{name:"Instruction text"});await n.clear(s),await n.type(s,"Use grams for mass."),await n.click(a.getByRole("button",{name:"Save"})),await v(e.args.onEdit).toHaveBeenCalledWith({title:"Metric units",instruction:"Use grams for mass.",entryType:"rule"}),await v(a.getByText("Use grams for mass.")).toBeVisible(),await n.keyboard("{Escape}")}},m={args:{editable:!1,off:!0},play:t},u={args:{rejectSave:!0}},f={args:{reference:"specification"},play:async e=>{await t(e),await v(await c(document.body).findByText("Smooth oat beverage with a clean finish.")).toBeVisible(),await n.keyboard("{Escape}")}},g={args:{reference:"specification"},parameters:{msw:{handlers:o("empty")}},play:t},y={args:{reference:"specification"},parameters:{msw:{handlers:o("loading")}},play:t},h={args:{reference:"specification"},parameters:{msw:{handlers:o("error")}},play:t},w={args:{reference:"attachment"},play:async e=>{await t(e),await v(await c(document.body).findByText("Oat flour, pilot batch.")).toBeVisible(),await n.keyboard("{Escape}")}},b={args:{reference:"attachment"},parameters:{msw:{handlers:o("error")}},play:t},x={args:{reference:"attachment"},parameters:{msw:{handlers:o("loading")}},play:t},S={parameters:{docs:{description:{story:"Open the real instruction dialog: title and level/type badges, content or editing fields, then action footer. The source selector switches to the distinct target-spec and document-preview anatomies."}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  play: async context => {
    await openReference(context);
    const dialog = within(await within(document.body).findByRole("dialog"));
    await userEvent.click(dialog.getByRole("button", {
      name: "Edit"
    }));
    const body = dialog.getByRole("textbox", {
      name: "Instruction text"
    });
    await userEvent.clear(body);
    await userEvent.type(body, "Use grams for mass.");
    await userEvent.click(dialog.getByRole("button", {
      name: "Save"
    }));
    await expect(context.args.onEdit).toHaveBeenCalledWith({
      title: "Metric units",
      instruction: "Use grams for mass.",
      entryType: "rule"
    });
    await expect(dialog.getByText("Use grams for mass.")).toBeVisible();
    await userEvent.keyboard("{Escape}");
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    editable: false,
    off: true
  },
  play: openReference
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    rejectSave: true
  }
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    reference: "specification"
  },
  play: async context => {
    await openReference(context);
    await expect(await within(document.body).findByText("Smooth oat beverage with a clean finish.")).toBeVisible();
    await userEvent.keyboard("{Escape}");
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    reference: "specification"
  },
  parameters: {
    msw: {
      handlers: responseHandlers("empty")
    }
  },
  play: openReference
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    reference: "specification"
  },
  parameters: {
    msw: {
      handlers: responseHandlers("loading")
    }
  },
  play: openReference
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    reference: "specification"
  },
  parameters: {
    msw: {
      handlers: responseHandlers("error")
    }
  },
  play: openReference
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    reference: "attachment"
  },
  play: async context => {
    await openReference(context);
    await expect(await within(document.body).findByText("Oat flour, pilot batch.")).toBeVisible();
    await userEvent.keyboard("{Escape}");
  }
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    reference: "attachment"
  },
  parameters: {
    msw: {
      handlers: responseHandlers("error")
    }
  },
  play: openReference
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    reference: "attachment"
  },
  parameters: {
    msw: {
      handlers: responseHandlers("loading")
    }
  },
  play: openReference
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Open the real instruction dialog: title and level/type badges, content or editing fields, then action footer. The source selector switches to the distinct target-spec and document-preview anatomies."
      }
    }
  }
}`,...S.parameters?.docs?.source}}};const Ue=["Playground","EditInstruction","ReadOnlyInstruction","FailedInstructionSave","Specification","EmptySpecification","LoadingSpecification","SpecificationError","Attachment","AttachmentError","AttachmentLoading","Anatomy"];export{S as Anatomy,w as Attachment,b as AttachmentError,x as AttachmentLoading,l as EditInstruction,g as EmptySpecification,u as FailedInstructionSave,y as LoadingSpecification,d as Playground,m as ReadOnlyInstruction,f as Specification,h as SpecificationError,Ue as __namedExportsOrder,De as default};
