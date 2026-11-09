import{h as R,H as i,ax as M,r as B,j as r}from"./iframe-DgvZnKtv.js";import{B as F}from"./button-CEcYiQdY.js";import{S as V,A as W,D as q}from"./apiUrl-o8N8i6mn.js";import{S as P,I as _}from"./SpecDetailDialog-DZ0ny_yk.js";import{AttachmentPreviewDialog as C}from"./AttachmentPreviewDialog-C8MKERq-.js";import{d as A}from"./delay-0VzXGcfu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWlKOsdO.js";import"./loader-circle-BsZrs7F6.js";import"./composed-surface-thTtt0jI.js";import"./dialog-BGED6ss2.js";import"./overlay-dialog-i6vPmHIw.js";import"./composed-typography-BeKxRqyR.js";import"./input-DTWVrd6t.js";import"./textarea-autosize-Rs-IiBis.js";import"./index-CvRrJlmp.js";import"./promptInstructionsSchema-DLwppsvR.js";import"./book-BhBva0MR.js";import"./pencil-G2jds40a.js";import"./use-api-C0Z66OjA.js";import"./jsonApiHandler-0tb7Ffsv.js";import"./request-DN34u20v.js";import"./trackPosthogEvent-DQYu7Eh_.js";import"./featureFlags-R30pJjMx.js";import"./intensityLabel-DMPld_sc.js";import"./wrench-g6l4yt3b.js";import"./star-CS2ttwCh.js";import"./chart-column-BCfIkthV.js";import"./file-text-C-eb-1Yd.js";import"./target-BnGO1hMh.js";import"./use-document-preview-ChPSrFV2.js";import"./DocumentTypeBadge-SlWVtuEb.js";import"./truncated-markdown-tDgX1umv.js";import"./encodeBlobUrl-FLx_wV7M.js";import"./document-mention-CjRg_ZNJ.js";import"./markdown-table-BE98YWmw.js";import"./table-cell-sizing-D_euRQfv.js";import"./chevrons-right-BCdjAw1-.js";import"./chevron-left-96ijkid2.js";import"./chevron-right-B8SZue5v.js";import"./index-KcL-zyNj.js";import"./index-D-ztsl9H.js";import"./index-NNW_ALEK.js";import"./index-8G61PpGJ.js";import"./external-link-BJEc3Amj.js";import"./restApiClient-D8hPIvng.js";import"./isObject-DVTTJpIa.js";const{expect:I,fn:J,userEvent:n,within:s}=__STORYBOOK_MODULE_TEST__,j="https://storybook.invalid/reference-details.md",o=(e="ready")=>[...[V,W].map(t=>R.get(`${t}/:id`,async()=>(e==="loading"&&await A("infinite"),e==="error"?i.json({errors:[{status:"503",detail:"Local specification unavailable"}]},{status:503}):i.json({data:M("specification_formula","991",e==="empty"?{name:"Oat drink target"}:{name:"Oat drink target",description:"Smooth oat beverage with a clean finish.",ingredients_min:2,ingredients_max:8,production_scale:"pilot"})})))),R.get(`${q}/:id/download-token`,async()=>(e==="loading"&&await A("infinite"),e==="error"?i.json({detail:"Local attachment unavailable"},{status:503}):i.json({download_url:j,expires_at:"2099-01-01T00:00:00Z"}))),R.get(j,()=>i.text(`# Ingredient specification

Oat flour, pilot batch.

- Store in a dry place.
- Contains oats.`))];function $({initialOpen:e=!1,reference:t,editable:c,off:T,rejectSave:D,onEdit:U}){const[O,p]=B.useState(e),[L,N]=B.useState({title:"Metric units",instruction:"Always answer in metric units.",entryType:"rule"}),H=k=>(U(k),D?Promise.resolve(!1):(N(k),Promise.resolve(!0)));return r.jsxs("div",{className:"pf-story-ai-assistant-reference-details-frame",children:[r.jsx(F,{onClick:()=>p(!0),children:"Open reference"}),r.jsx("p",{children:"Only local fixture state changes; no record is persisted."}),t==="instruction"&&r.jsx(_,{open:O,onOpenChange:p,name:"Metric units",badgeLabel:"Project",badgeClassName:"pf-story-ai-assistant-reference-details-trigger",isInEffect:!T,...L,entryTypes:["rule","context"],onSave:c?H:void 0}),t==="specification"&&r.jsx(P,{open:O,onOpenChange:p,specificationId:991,context:"formula",specName:"Oat drink target",editTo:"/recipes/1042?tab=specification",isOff:T}),t==="attachment"&&r.jsx(C,{open:O,onOpenChange:p,documentId:81,fileName:"Ingredient specification",fileExtension:"md",contentType:"text/markdown"})]})}const Me={title:"Patterns/AI/Reference detail dialogs",component:$,subcomponents:{InstructionDetailDialog:_,SpecDetailDialog:P,AttachmentPreviewDialog:C},tags:["autodocs"],args:{reference:"instruction",editable:!0,off:!1,rejectSave:!1,onEdit:J()},argTypes:{reference:{control:"inline-radio",options:["instruction","specification","attachment"]},editable:{control:"boolean"},off:{control:"boolean"},rejectSave:{control:"boolean"},onEdit:{control:!1}},parameters:{msw:{handlers:o()},docs:{description:{component:`Instruction, target specification and attachment details are distinct real dialog implementations grouped by the reference-inspection task. Select the source and open it; the controls affect only supported contracts. Instructions have editable/off states. Specification readiness comes from the JSON:API endpoint selected by formula/project context. Attachment preview requests a fresh live or snapshot download token, then uses the existing file-type renderer.

### API and ownership
InstructionDetailDialog owns its draft and saving lock, but onSave({title,instruction,entryType}) returns Promise<boolean> from the host. True exits editing; false keeps the draft and reports failure. This local adapter explicitly updates only fixture state. Without onSave the dialog is read-only or uses an optional editTo link. SpecDetailDialog receives specificationId, context, fallback specName and editTo; it loads the actual specification document. AttachmentPreviewDialog receives numeric documentId, optional snapshotId, fileName, extension and contentType. Its loader renews expiring URLs. No publishing, file deletion or real saving occurs here.

### Anatomy and accessibility
Each dialog has a named header, scrollable content and relevant footer actions. Preserve Radix focus trapping and Escape, input/textarea names, draft validation and the source saving-dismiss lock. Source-specific pending, empty and error states are exposed as scenarios. The attachment fixture renders actual Markdown through a local intercepted URL; PDF embedding and external-tab delivery require browser/runtime integration.`}}}},d={},a=async({canvasElement:e})=>{await n.click(s(e).getByRole("button",{name:"Open reference"}))},l={play:async e=>{await a(e);const t=s(await s(document.body).findByRole("dialog"));await n.click(t.getByRole("button",{name:"Edit"}));const c=t.getByRole("textbox",{name:"Instruction text"});await n.clear(c),await n.type(c,"Use grams for mass."),await n.click(t.getByRole("button",{name:"Save"})),await I(e.args.onEdit).toHaveBeenCalledWith({title:"Metric units",instruction:"Use grams for mass.",entryType:"rule"}),await I(t.getByText("Use grams for mass.")).toBeVisible(),await n.keyboard("{Escape}")}},m={args:{editable:!1,off:!0},play:a},u={args:{rejectSave:!0}},f={args:{reference:"specification"},play:async e=>{await a(e),await I(await s(document.body).findByText("Smooth oat beverage with a clean finish.")).toBeVisible(),await n.keyboard("{Escape}")}},g={args:{reference:"specification"},parameters:{msw:{handlers:o("empty")}},play:a},y={args:{reference:"specification"},parameters:{msw:{handlers:o("loading")}},play:a},h={args:{reference:"specification"},parameters:{msw:{handlers:o("error")}},play:a},w={args:{reference:"attachment"},play:async e=>{await a(e),await I(await s(document.body).findByText("Oat flour, pilot batch.")).toBeVisible(),await n.keyboard("{Escape}")}},b={args:{reference:"attachment"},parameters:{msw:{handlers:o("error")}},play:a},x={args:{reference:"attachment"},parameters:{msw:{handlers:o("loading")}},play:a},S={parameters:{docs:{description:{story:"Open the real instruction dialog: title and level/type badges, content or editing fields, then action footer. The source selector switches to the distinct target-spec and document-preview anatomies."}}}},v={args:{initialOpen:!0,reference:"instruction"}},E={args:{initialOpen:!0,reference:"specification"}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    initialOpen: true,
    reference: "instruction"
  }
}`,...v.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    initialOpen: true,
    reference: "specification"
  }
}`,...E.parameters?.docs?.source}}};const Fe=["Playground","EditInstruction","ReadOnlyInstruction","FailedInstructionSave","Specification","EmptySpecification","LoadingSpecification","SpecificationError","Attachment","AttachmentError","AttachmentLoading","Anatomy","AnatomyInstruction","AnatomySpecification"];export{S as Anatomy,v as AnatomyInstruction,E as AnatomySpecification,w as Attachment,b as AttachmentError,x as AttachmentLoading,l as EditInstruction,g as EmptySpecification,u as FailedInstructionSave,y as LoadingSpecification,d as Playground,m as ReadOnlyInstruction,f as Specification,h as SpecificationError,Fe as __namedExportsOrder,Me as default};
