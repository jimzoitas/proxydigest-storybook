import{r as A,j as l}from"./iframe-DgvZnKtv.js";import{G as y}from"./GeneratedIdeaDisplay-DgjGpdBk.js";import"./preload-helper-PPVm8Dsz.js";import"./button-CEcYiQdY.js";import"./index-BWlKOsdO.js";import"./loader-circle-BsZrs7F6.js";import"./types-BtVgDmVp.js";import"./IdeaDetailView-DsrUBe1S.js";import"./tabs-ApBmGcl3.js";import"./CompositeRoot-CLpK0Eip.js";import"./useCompositeItem-Dr13hnqh.js";import"./dropdown-menu-CuN8-u21.js";import"./menu-BIxLiaY6.js";import"./CompositeItem-qKQIJE0X.js";import"./Separator-BKJ0ZhJM.js";import"./chevron-right-B8SZue5v.js";import"./circle-CwHZP-HG.js";import"./ai-markdown-CC8LF5ZU.js";/* empty css                 */import"./marked.esm-B5D8JARp.js";import"./table-cell-sizing-D_euRQfv.js";import"./source-basic-DMM_SACg.js";import"./source-DNdnJfIR.js";import"./hover-card-CbaK_QEc.js";import"./code-block-CpdE-boS.js";import"./index-8G61PpGJ.js";import"./index-D-ztsl9H.js";import"./index-NNW_ALEK.js";import"./index-KcL-zyNj.js";import"./collapsible-BPKkR0Kq.js";import"./useCollapsiblePanel-jjkiJ8Ha.js";import"./aiAssistant.selectors-p1arcQK4.js";import"./toast-CD2leqw5.js";import"./trackPosthogEvent-DQYu7Eh_.js";import"./proxy-ai-NSDrGgNE.js";import"./overlay-dialog-i6vPmHIw.js";import"./SidebarSection-BohYk_Y-.js";import"./ExpandableTextTrigger-Bw1577uH.js";import"./ellipsis-DdwwDVLo.js";import"./plus-BMpb-JrX.js";import"./search-field-CzWqD7iz.js";import"./input-DTWVrd6t.js";import"./index.module-C-pw7-ZN.js";import"./checkbox-CCvRjg_n.js";import"./minus-0s0hIbe7.js";import"./useAriaLabelledBy-C2v0UWUV.js";import"./dialog-BGED6ss2.js";import"./separator-DZKac5zi.js";import"./sheet-BSYc4zIC.js";import"./skeleton-DwZsbo-S.js";import"./panel-left-D88YpPbL.js";import"./link-eK7RklLn.js";import"./GradientButton-Di_WK0D1.js";import"./input-field-D1k4gXrr.js";import"./number-field-BuEna-S2.js";import"./GradientIcon-Bt266YZo.js";import"./InfoAlert-D7bONhIx.js";import"./circle-x-1SpwuOPE.js";import"./circle-check-big-Dbn0EK-V.js";import"./triangle-alert-DoEEEFIM.js";import"./info-HwFtBdFw.js";import"./EmptyState-DqGHQ3U-.js";import"./StatusIndicator-CvY3R4FY.js";import"./QuickActionCard-Y4uBCWf1.js";import"./badge-C-Jji8Kx.js";import"./sticky-note-dhXl-5XT.js";import"./download-D2YSvej-.js";import"./trash-CyB-c1sp.js";import"./save-TsAeE-zk.js";const{expect:u,fn:k,userEvent:v,within:w}=__STORYBOOK_MODULE_TEST__,m={id:"idea-local-1",title:"Oat protein breakfast drink",content:{summary:"A smooth oat drink with plant protein.",consumer_insight:"Busy mornings call for convenient breakfasts.",product_concept:"Single-serve oat beverage with cocoa and pea protein."}};function S({state:e,showClose:t,onAction:o,populatedOverview:g=!1}){const[b,f]=A.useState("No action"),n=h=>{f(h),o(h)};return l.jsxs("div",{className:"pf-story-ai-assistant-generated-idea-frame",children:[l.jsx("output",{"aria-label":"Idea action",children:b}),l.jsx(y,{idea:e==="empty"?null:g?{...m,content:{...m.content,brief_deconstruction:`## Product brief

A smooth, single-serve oat breakfast drink with plant protein. Balance a creamy texture, cocoa flavour and convenient preparation.`}}:m,showClose:t,onClose:()=>n("close"),onDownload:()=>n("download"),onSave:e==="generated"?()=>n("save"):void 0,onDelete:e==="saved"?()=>n("delete"):void 0})]})}const je={title:"Patterns/AI/Generated idea output",component:S,subcomponents:{GeneratedIdeaDisplay:y},tags:["autodocs"],args:{state:"generated",showClose:!0,onAction:k()},argTypes:{state:{control:"inline-radio",options:["generated","saved","empty"]},showClose:{control:"boolean"},onAction:{control:!1}},parameters:{layout:"fullscreen",docs:{description:{component:"The production GeneratedIdeaDisplay composes IdeaDetailView and buildIdeaTabs. Use it for a generated idea or a saved Idea payload. The content field controls the actual tabs; Overview and All sections are built by the production adapter. The state control chooses representative data and callback availability rather than inventing a new component variant.\n\n### API and host responsibilities\n`idea` accepts an LLMGeneratedIdea, saved Idea, null or undefined. `onClose` is required; `showClose` defaults true. Optional onSave and onDelete determine action presence. onDownload is optional but the download button currently remains visible; provide the callback whenever download is offered. Callbacks carry no payload: the host closes, exports, saves or deletes the current idea. This example only reports callbacks and never persists data.\n\n### Anatomy, states and accessibility\nThe header contains title, pre-actions (save/delete), download and optional close; the body contains the real section tabs and Markdown content. Keep tab keyboard handling, focus and names from the shared controls. Null content uses the actual empty composition. The generated and saved variants deliberately keep their different available actions."}}}},r={},s={play:async({canvasElement:e,args:t})=>{const o=w(e);await v.click(o.getByRole("button",{name:"Save"})),await u(t.onAction).toHaveBeenCalledWith("save"),await v.click(o.getByRole("button",{name:/Download/})),await u(t.onAction).toHaveBeenCalledWith("download")}},i={args:{state:"saved"},play:async({canvasElement:e,args:t})=>{await v.click(w(e).getByRole("button",{name:"Delete"})),await u(t.onAction).toHaveBeenCalledWith("delete")}},c={args:{state:"empty"}},p={args:{showClose:!1}},d={parameters:{docs:{description:{story:"Actual IdeaDetailView header actions, content-derived tablist and selected Markdown panel. No second rendering implementation is maintained."}}}},a={args:{populatedOverview:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Save"
    }));
    await expect(args.onAction).toHaveBeenCalledWith("save");
    await userEvent.click(canvas.getByRole("button", {
      name: /Download/
    }));
    await expect(args.onAction).toHaveBeenCalledWith("download");
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    state: "saved"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: "Delete"
    }));
    await expect(args.onAction).toHaveBeenCalledWith("delete");
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    state: "empty"
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    showClose: false
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Actual IdeaDetailView header actions, content-derived tablist and selected Markdown panel. No second rendering implementation is maintained."
      }
    }
  }
}`,...d.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    populatedOverview: true
  }
}`,...a.parameters?.docs?.source},description:{story:"Populated source section for the real default Overview tab.",...a.parameters?.docs?.description}}};const Me=["Playground","SaveAndDownload","Saved","Empty","NoClose","Anatomy","AnatomyPopulated"];export{d as Anatomy,a as AnatomyPopulated,c as Empty,p as NoClose,r as Playground,s as SaveAndDownload,i as Saved,Me as __namedExportsOrder,je as default};
