import{r as g,j as p}from"./iframe-6uZ_OvXJ.js";import{G as v}from"./GeneratedIdeaDisplay-B9knaeA6.js";import"./preload-helper-PPVm8Dsz.js";import"./button-A8HzViyP.js";import"./index-BIEDR5QJ.js";import"./loader-circle-DPzNQWfU.js";import"./types-BtVgDmVp.js";import"./IdeaDetailView-D1Mz6wnM.js";import"./tabs-C1EIt9oS.js";import"./CompositeRoot-Av_o_W_V.js";import"./useCompositeItem-CEgqY0th.js";import"./dropdown-menu-CH01PJiV.js";import"./menu-BB0nZVv8.js";import"./CompositeItem-DiKjTF7g.js";import"./Separator-UJ0jSiK3.js";import"./chevron-right-DQAu3Wv6.js";import"./circle-BOSVkkPm.js";import"./ai-markdown-jWYVUKx-.js";/* empty css                 */import"./marked.esm-B5D8JARp.js";import"./table-cell-sizing-9Qu5gc3X.js";import"./source-basic-LDqYNdC1.js";import"./source-DA44rwk5.js";import"./hover-card-B1VUedu_.js";import"./code-block-D11utLBN.js";import"./index-8G61PpGJ.js";import"./index-D-ztsl9H.js";import"./index-DDxzgSdf.js";import"./index-C6UO2wHL.js";import"./collapsible-D5z7BIl8.js";import"./useCollapsiblePanel-CEEvXl-2.js";import"./aiAssistant.selectors-CM8XrDL2.js";import"./toast-CehfyOwA.js";import"./trackPosthogEvent-fthYs4K3.js";import"./proxy-ai-CS5Wnpgd.js";import"./overlay-dialog-_C1niahL.js";import"./SidebarSection-texb4wwO.js";import"./ExpandableTextTrigger-CtaP99rt.js";import"./ellipsis-BdoQ7bBK.js";import"./plus-CjxSM-tB.js";import"./search-field-BYGbCLxi.js";import"./input-xqFXePlz.js";import"./index.module-Db1hQFPV.js";import"./checkbox-CzlPmnCo.js";import"./minus-CKlNa8RO.js";import"./useAriaLabelledBy-BKgySVsG.js";import"./dialog-DnvpmbSS.js";import"./separator-CkvihxIh.js";import"./sheet-024fQP7m.js";import"./skeleton-Bu9j_NfJ.js";import"./panel-left-CatA2Q48.js";import"./link-NVJJzIw5.js";import"./GradientButton-DYiJN-S0.js";import"./input-field-B_Y4AWYp.js";import"./number-field-Ru33oSuc.js";import"./GradientIcon-BcoxLprl.js";import"./InfoAlert-jeYOeLpI.js";import"./circle-x-BOcBs_hd.js";import"./circle-check-big-BhjVcHh1.js";import"./triangle-alert-B_zFvblH.js";import"./info-BfHyHFxU.js";import"./EmptyState-CE5-KyxB.js";import"./StatusIndicator-ENElgtKP.js";import"./QuickActionCard-BQt3A_CC.js";import"./badge-BfEYvfQV.js";import"./sticky-note-DkFcu8YS.js";import"./download-CFtDxXnS.js";import"./trash-BVEncoD6.js";import"./save-DEqa1Jl0.js";const{expect:l,fn:b,userEvent:m,within:h}=__STORYBOOK_MODULE_TEST__,f={id:"idea-local-1",title:"Oat protein breakfast drink",content:{summary:"A smooth oat drink with plant protein.",consumer_insight:"Busy mornings call for convenient breakfasts.",product_concept:"Single-serve oat beverage with cocoa and pea protein."}};function k({state:e,showClose:t,onAction:a}){const[y,w]=g.useState("No action"),o=u=>{w(u),a(u)};return p.jsxs("div",{className:"pf-story-ai-assistant-generated-idea-frame",children:[p.jsx("output",{"aria-label":"Idea action",children:y}),p.jsx(v,{idea:e==="empty"?null:f,showClose:t,onClose:()=>o("close"),onDownload:()=>o("download"),onSave:e==="generated"?()=>o("save"):void 0,onDelete:e==="saved"?()=>o("delete"):void 0})]})}const We={title:"Patterns/AI/Generated idea output",component:k,subcomponents:{GeneratedIdeaDisplay:v},tags:["autodocs"],args:{state:"generated",showClose:!0,onAction:b()},argTypes:{state:{control:"inline-radio",options:["generated","saved","empty"]},showClose:{control:"boolean"},onAction:{control:!1}},parameters:{layout:"fullscreen",docs:{description:{component:"The production GeneratedIdeaDisplay composes IdeaDetailView and buildIdeaTabs. Use it for a generated idea or a saved Idea payload. The content field controls the actual tabs; Overview and All sections are built by the production adapter. The state control chooses representative data and callback availability rather than inventing a new component variant.\n\n### API and host responsibilities\n`idea` accepts an LLMGeneratedIdea, saved Idea, null or undefined. `onClose` is required; `showClose` defaults true. Optional onSave and onDelete determine action presence. onDownload is optional but the download button currently remains visible; provide the callback whenever download is offered. Callbacks carry no payload: the host closes, exports, saves or deletes the current idea. This example only reports callbacks and never persists data.\n\n### Anatomy, states and accessibility\nThe header contains title, pre-actions (save/delete), download and optional close; the body contains the real section tabs and Markdown content. Keep tab keyboard handling, focus and names from the shared controls. Null content uses the actual empty composition. The generated and saved variants deliberately keep their different available actions."}}}},n={},r={play:async({canvasElement:e,args:t})=>{const a=h(e);await m.click(a.getByRole("button",{name:"Save"})),await l(t.onAction).toHaveBeenCalledWith("save"),await m.click(a.getByRole("button",{name:/Download/})),await l(t.onAction).toHaveBeenCalledWith("download")}},s={args:{state:"saved"},play:async({canvasElement:e,args:t})=>{await m.click(h(e).getByRole("button",{name:"Delete"})),await l(t.onAction).toHaveBeenCalledWith("delete")}},i={args:{state:"empty"}},c={args:{showClose:!1}},d={parameters:{docs:{description:{story:"Actual IdeaDetailView header actions, content-derived tablist and selected Markdown panel. No second rendering implementation is maintained."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    state: "empty"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    showClose: false
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Actual IdeaDetailView header actions, content-derived tablist and selected Markdown panel. No second rendering implementation is maintained."
      }
    }
  }
}`,...d.parameters?.docs?.source}}};const je=["Playground","SaveAndDownload","Saved","Empty","NoClose","Anatomy"];export{d as Anatomy,i as Empty,c as NoClose,n as Playground,r as SaveAndDownload,s as Saved,je as __namedExportsOrder,We as default};
