import{r as h,j as o}from"./iframe-BXubdNpd.js";import{B as _}from"./button-DOg3bB7T.js";import{F as k}from"./FollowsBar-BC2bE4wp.js";import{R as I,a as A}from"./ReplyFollowsSummary-CYm1ZqO4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DKWiT4Fi.js";import"./loader-circle-WJxMtqtu.js";import"./target-BQ7sZOCu.js";import"./dialog-Gbr7wu8m.js";import"./overlay-dialog-CQZe9RQv.js";import"./alert-dialog-BBDZ61Tm.js";import"./switch-Bg3CCUCR.js";import"./useAriaLabelledBy-Dlr4qUIQ.js";import"./SpecDetailDialog-QKQeVC1Z.js";import"./input-BWeqiJDe.js";import"./textarea-autosize-tTaa6Uk0.js";import"./index-hSxp4k5w.js";import"./promptInstructionsSchema-bcXbMkX-.js";import"./book-Dn2V7hho.js";import"./pencil-yy7xBAIJ.js";import"./use-api-xoGr-U7J.js";import"./jsonApiHandler-4nyzgRht.js";import"./request-TLnfbZnK.js";import"./trackPosthogEvent-CBk16WCm.js";import"./apiUrl-o8N8i6mn.js";import"./featureFlags-R30pJjMx.js";import"./intensityLabel-DMPld_sc.js";import"./wrench-BrlfzOvT.js";import"./star-DP6ni_Cy.js";import"./chart-column-CdwwxRJ2.js";import"./file-text-P-Na7IsX.js";import"./editMode-DGYSJYwU.js";import"./chevron-right-Bt7v18gP.js";import"./aiAssistant.selectors-DeXBL1Y1.js";const{expect:s,fn:C,userEvent:r,within:n}=__STORYBOOK_MODULE_TEST__,R={id:"991",name:"Oat drink target",type:"specification_formula"},S={id:1,level:"project",entryType:"rule",title:"Metric units",instruction:"Always answer in metric units.",isInEffect:!0};function D({surface:t,state:e,onAction:T}){const[b,O]=h.useState(R),[w,f]=h.useState(!0),[j,E]=h.useState(!1),i=a=>T(a),B={isVisible:!0,options:e==="empty"?[]:[R],selected:e==="empty"?null:b,isLoading:e==="loading",projectId:"21",recipeId:"1042",isProjectSpecificationUnknown:e==="error",select:a=>{O(a),i(a?.id??"none")}},v={items:e==="empty"?[]:[{...S,isInEffect:w}],enabledCount:w&&e!=="empty"?1:0,totalCount:e==="empty"?0:1,truncatedGroups:[],instructionsProjectId:21,isLoading:e==="loading",hasError:e==="error",toggle:(a,F,x)=>{f(x),i(x?"enabled":"disabled")},setAll:a=>{f(a),i(a?"all enabled":"all disabled")},retry:()=>i("retry"),canEditInstructions:!1,saveInstruction:()=>Promise.resolve(!1)};return o.jsxs("div",{className:"pf-story-ai-assistant-follows-context-frame",children:[o.jsxs("output",{"aria-label":"Current context",children:[b?.name??"No target spec","; instruction"," ",w?"on":"off"]}),t==="current"&&o.jsx(k,{specification:B,instructions:v}),t==="dialog"&&o.jsxs(o.Fragment,{children:[o.jsx(_,{onClick:()=>E(!0),children:"Open reply context"}),o.jsx(A,{open:j,onOpenChange:E,readOnly:!0,specification:B,instructions:v})]}),t==="reply"&&o.jsx(I,{conversationId:"chat-local",interactionId:"reply-local",scope:"recipe_formulation_advisor"})]})}const we={title:"Patterns/AI/Follows context",component:D,subcomponents:{FollowsBar:k,FollowsDialog:A,ReplyFollowsSummary:I},tags:["autodocs"],args:{surface:"current",state:"ready",onAction:C()},argTypes:{surface:{control:"inline-radio",options:["current","dialog","reply"]},state:{control:"inline-radio",options:["ready","loading","error","empty"]},onAction:{control:!1}},parameters:{store:{preloadedState:{interactionPromptInstructions:{records:{"reply-local":[{...S,id:"record-local",promptInstructionId:1,position:0}]}}}},docs:{description:{component:`Current context and per-reply evidence intentionally have different ownership. FollowsBar receives the actual specification and instruction hook-result contracts; it expands in place and delegates changes. FollowsDialog wraps the same list, with readOnly removing switches and bulk changes. ReplyFollowsSummary reads the persisted interaction record and shows only instructions that were in effect for that reply. This fixture seeds that immutable record independently of the live bar.

### API and behavior
Specification options use \`{id,name,type}\` and select(spec|null). Instructions identify entries by \`(level,id)\` and call toggle(level,id,isInEffect), setAll(isInEffect), retry(), or async saveInstruction. Disabling requires the source confirmation. Loading suppresses counts; errors offer retry; an empty list keeps setup guidance. The host owns resolving records, permissions and persistence. Local toggles here update fixture state only.

### Anatomy and accessibility
The bar has summary and chevron disclosures, section bands, named trailing switches and name buttons opening details. A reply opens a read-only modal. Preserve separate selection and detail actions, named switches, the disclosure's expanded state, keyboard focus and Radix Escape/focus return. Do not replace the growing inline bar with a modal.`}}}},c={},l={play:async({canvasElement:t})=>{const e=n(t);await r.click(e.getAllByRole("button")[0]),await s(e.getByRole("switch",{name:"Metric units"})).toBeChecked(),await r.click(e.getByRole("button",{name:"Metric units"})),await s(await n(document.body).findByText("Always answer in metric units.")).toBeVisible(),await r.keyboard("{Escape}")}},p={args:{state:"loading"}},d={args:{state:"error"},play:async({canvasElement:t,args:e})=>{await r.click(n(t).getByRole("button",{name:/Retry/i})),await s(e.onAction).toHaveBeenCalledWith("retry")}},m={args:{state:"empty"}},u={args:{surface:"dialog"},play:async({canvasElement:t})=>{await r.click(n(t).getByRole("button",{name:"Open reply context"}));const e=n(await n(document.body).findByRole("dialog"));await s(e.queryByRole("switch")).not.toBeInTheDocument(),await s(e.getByText("Metric units")).toBeVisible(),await r.keyboard("{Escape}")}},y={args:{surface:"reply"},play:async({canvasElement:t})=>{await r.click(n(t).getByRole("button",{name:/Metric units/})),await s(await n(document.body).findByRole("dialog")).toBeVisible(),await s(n(document.body).queryByRole("switch")).not.toBeInTheDocument(),await r.keyboard("{Escape}")}},g={parameters:{docs:{description:{story:"Disclosure summary → target-spec section → instruction bands and trailing switches. Expand the actual bar to inspect its row anatomy."}}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const he=["Playground","ExpandAndInspect","Loading","Retry","Empty","ReadOnly","ReplyEvidence","Anatomy"];export{g as Anatomy,m as Empty,l as ExpandAndInspect,p as Loading,c as Playground,u as ReadOnly,y as ReplyEvidence,d as Retry,he as __namedExportsOrder,we as default};
