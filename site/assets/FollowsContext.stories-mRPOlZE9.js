import{r as f,j as o}from"./iframe-DgvZnKtv.js";import{B as D}from"./button-CEcYiQdY.js";import{F as I}from"./FollowsBar-pLfv-ccE.js";import{R as A,a as S}from"./ReplyFollowsSummary-BESozHWv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWlKOsdO.js";import"./loader-circle-BsZrs7F6.js";import"./target-BnGO1hMh.js";import"./composed-surface-thTtt0jI.js";import"./dialog-BGED6ss2.js";import"./overlay-dialog-i6vPmHIw.js";import"./composed-typography-BeKxRqyR.js";import"./alert-dialog-C6IZFRS7.js";import"./switch-T4g98NFH.js";import"./useAriaLabelledBy-C2v0UWUV.js";import"./SpecDetailDialog-DZ0ny_yk.js";import"./input-DTWVrd6t.js";import"./textarea-autosize-Rs-IiBis.js";import"./index-CvRrJlmp.js";import"./promptInstructionsSchema-DLwppsvR.js";import"./book-BhBva0MR.js";import"./pencil-G2jds40a.js";import"./use-api-C0Z66OjA.js";import"./jsonApiHandler-0tb7Ffsv.js";import"./request-DN34u20v.js";import"./trackPosthogEvent-DQYu7Eh_.js";import"./apiUrl-o8N8i6mn.js";import"./featureFlags-R30pJjMx.js";import"./intensityLabel-DMPld_sc.js";import"./wrench-g6l4yt3b.js";import"./star-CS2ttwCh.js";import"./chart-column-BCfIkthV.js";import"./file-text-C-eb-1Yd.js";import"./editMode-DGYSJYwU.js";import"./chevron-right-B8SZue5v.js";import"./aiAssistant.selectors-p1arcQK4.js";const{expect:s,fn:F,userEvent:r,within:n}=__STORYBOOK_MODULE_TEST__,k={id:"991",name:"Oat drink target",type:"specification_formula"},O={id:1,level:"project",entryType:"rule",title:"Metric units",instruction:"Always answer in metric units.",isInEffect:!0};function M({surface:t,state:e,onAction:T,initialOpen:j=!1}){const[b,_]=f.useState(k),[h,E]=f.useState(!0),[C,B]=f.useState(j),i=a=>T(a),v={isVisible:!0,options:e==="empty"?[]:[k],selected:e==="empty"?null:b,isLoading:e==="loading",projectId:"21",recipeId:"1042",isProjectSpecificationUnknown:e==="error",select:a=>{_(a),i(a?.id??"none")}},x={items:e==="empty"?[]:[{...O,isInEffect:h}],enabledCount:h&&e!=="empty"?1:0,totalCount:e==="empty"?0:1,truncatedGroups:[],instructionsProjectId:21,isLoading:e==="loading",hasError:e==="error",toggle:(a,P,R)=>{E(R),i(R?"enabled":"disabled")},setAll:a=>{E(a),i(a?"all enabled":"all disabled")},retry:()=>i("retry"),canEditInstructions:!1,saveInstruction:()=>Promise.resolve(!1)};return o.jsxs("div",{className:"pf-story-ai-assistant-follows-context-frame",children:[o.jsxs("output",{"aria-label":"Current context",children:[b?.name??"No target spec","; instruction"," ",h?"on":"off"]}),t==="current"&&o.jsx(I,{specification:v,instructions:x}),t==="dialog"&&o.jsxs(o.Fragment,{children:[o.jsx(D,{onClick:()=>B(!0),children:"Open reply context"}),o.jsx(S,{open:C,onOpenChange:B,readOnly:!0,specification:v,instructions:x})]}),t==="reply"&&o.jsx(A,{conversationId:"chat-local",interactionId:"reply-local",scope:"recipe_formulation_advisor"})]})}const Ee={title:"Patterns/AI/Follows context",component:M,subcomponents:{FollowsBar:I,FollowsDialog:S,ReplyFollowsSummary:A},tags:["autodocs"],args:{surface:"current",state:"ready",onAction:F()},argTypes:{surface:{control:"inline-radio",options:["current","dialog","reply"]},state:{control:"inline-radio",options:["ready","loading","error","empty"]},onAction:{control:!1}},parameters:{store:{preloadedState:{interactionPromptInstructions:{records:{"reply-local":[{...O,id:"record-local",promptInstructionId:1,position:0}]}}}},docs:{description:{component:`Current context and per-reply evidence intentionally have different ownership. FollowsBar receives the actual specification and instruction hook-result contracts; it expands in place and delegates changes. FollowsDialog wraps the same list, with readOnly removing switches and bulk changes. ReplyFollowsSummary reads the persisted interaction record and shows only instructions that were in effect for that reply. This fixture seeds that immutable record independently of the live bar.

### API and behavior
Specification options use \`{id,name,type}\` and select(spec|null). Instructions identify entries by \`(level,id)\` and call toggle(level,id,isInEffect), setAll(isInEffect), retry(), or async saveInstruction. Disabling requires the source confirmation. Loading suppresses counts; errors offer retry; an empty list keeps setup guidance. The host owns resolving records, permissions and persistence. Local toggles here update fixture state only.

### Anatomy and accessibility
The bar has summary and chevron disclosures, section bands, named trailing switches and name buttons opening details. A reply opens a read-only modal. Preserve separate selection and detail actions, named switches, the disclosure's expanded state, keyboard focus and Radix Escape/focus return. Do not replace the growing inline bar with a modal.`}}}},c={},l={play:async({canvasElement:t})=>{const e=n(t);await r.click(e.getAllByRole("button")[0]),await s(e.getByRole("switch",{name:"Metric units"})).toBeChecked(),await r.click(e.getByRole("button",{name:"Metric units"})),await s(await n(document.body).findByText("Always answer in metric units.")).toBeVisible(),await r.keyboard("{Escape}")}},p={args:{state:"loading"}},d={args:{state:"error"},play:async({canvasElement:t,args:e})=>{await r.click(n(t).getByRole("button",{name:/Retry/i})),await s(e.onAction).toHaveBeenCalledWith("retry")}},m={args:{state:"empty"}},u={args:{surface:"dialog"},play:async({canvasElement:t})=>{await r.click(n(t).getByRole("button",{name:"Open reply context"}));const e=n(await n(document.body).findByRole("dialog"));await s(e.queryByRole("switch")).not.toBeInTheDocument(),await s(e.getByText("Metric units")).toBeVisible(),await r.keyboard("{Escape}")}},y={args:{surface:"reply"},play:async({canvasElement:t})=>{await r.click(n(t).getByRole("button",{name:/Metric units/})),await s(await n(document.body).findByRole("dialog")).toBeVisible(),await s(n(document.body).queryByRole("switch")).not.toBeInTheDocument(),await r.keyboard("{Escape}")}},g={parameters:{docs:{description:{story:"Disclosure summary → target-spec section → instruction bands and trailing switches. Expand the actual bar to inspect its row anatomy."}}}},w={args:{initialOpen:!0,surface:"dialog"}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getAllByRole("button")[0]);
    await expect(canvas.getByRole("switch", {
      name: "Metric units"
    })).toBeChecked();
    await userEvent.click(canvas.getByRole("button", {
      name: "Metric units"
    }));
    await expect(await within(document.body).findByText("Always answer in metric units.")).toBeVisible();
    await userEvent.keyboard("{Escape}");
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    state: "loading"
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    state: "error"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: /Retry/i
    }));
    await expect(args.onAction).toHaveBeenCalledWith("retry");
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    state: "empty"
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "dialog"
  },
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: "Open reply context"
    }));
    const dialog = within(await within(document.body).findByRole("dialog"));
    await expect(dialog.queryByRole("switch")).not.toBeInTheDocument();
    await expect(dialog.getByText("Metric units")).toBeVisible();
    await userEvent.keyboard("{Escape}");
  }
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "reply"
  },
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: /Metric units/
    }));
    await expect(await within(document.body).findByRole("dialog")).toBeVisible();
    await expect(within(document.body).queryByRole("switch")).not.toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Disclosure summary → target-spec section → instruction bands and trailing switches. Expand the actual bar to inspect its row anatomy."
      }
    }
  }
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    initialOpen: true,
    surface: "dialog"
  }
}`,...w.parameters?.docs?.source}}};const Be=["Playground","ExpandAndInspect","Loading","Retry","Empty","ReadOnly","ReplyEvidence","Anatomy","AnatomyOpen"];export{g as Anatomy,w as AnatomyOpen,m as Empty,l as ExpandAndInspect,p as Loading,c as Playground,u as ReadOnly,y as ReplyEvidence,d as Retry,Be as __namedExportsOrder,Ee as default};
