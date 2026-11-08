import{r as g,j as l}from"./iframe-nhB53rPD.js";import{G as v}from"./GeneratedIdeaDisplay-wAulRJnV.js";import"./preload-helper-PPVm8Dsz.js";import"./button-_tcBhp5_.js";import"./index-8Dbc_Jva.js";import"./loader-circle-MxHlgpxw.js";import"./types-BtVgDmVp.js";import"./IdeaDetailView-BLGx8rNz.js";import"./tabs-Fq9_gDeO.js";import"./CompositeRoot-B0On-XqY.js";import"./useCompositeItem-BquT0LDd.js";import"./dropdown-menu-6QYTqNVQ.js";import"./menu-DyIs6xZo.js";import"./CompositeItem-D_8UuHC1.js";import"./Separator-RhxJSB-Q.js";import"./chevron-right-CavErG_J.js";import"./circle-Byfpv97O.js";import"./ai-markdown-BYcrcK24.js";/* empty css                 */import"./marked.esm-B5D8JARp.js";import"./table-cell-sizing-PMkloevH.js";import"./source-basic-Bas-ESyx.js";import"./source-lsIaHBzb.js";import"./hover-card-DUsLCMGr.js";import"./code-block-BquPihnh.js";import"./index-8G61PpGJ.js";import"./index-C6ZnvOnQ.js";import"./index-DLZcMhiB.js";import"./index-DzqWsyd1.js";import"./collapsible-pI4oVkh3.js";import"./useCollapsiblePanel-DVMF6qnG.js";import"./aiAssistant.selectors-xGGE4Gfz.js";import"./toast-lTWx0pzV.js";import"./trackPosthogEvent-Zud5gl49.js";import"./proxy-ai-o-RopWUa.js";import"./overlay-dialog-Co5KED9w.js";import"./SidebarSection-BvXTZEYC.js";import"./plus-0cDzJ2QO.js";import"./input-CAdeD_xm.js";import"./separator-Dmg9cS_7.js";import"./sheet-L7clkwH-.js";import"./skeleton-CMUv0H3w.js";import"./panel-left-Bz3AW4zy.js";import"./link-BzrwOGkM.js";import"./GradientButton-Cf-GSuXl.js";import"./input-field-CqPzWEoF.js";import"./number-field-DCKprIQw.js";import"./GradientIcon-DZGaPdQM.js";import"./InfoAlert-BZotkcbw.js";import"./circle-x-DQ_R-m_A.js";import"./circle-check-big-Cp3rUY4Q.js";import"./triangle-alert-XMA8UGNQ.js";import"./info-BBafOREX.js";import"./EmptyState-DcYSBPq3.js";import"./StatusIndicator-Cxavf1go.js";import"./QuickActionCard-DRfpLGIV.js";import"./badge-DF9-aVgV.js";import"./sticky-note-B2XYwvIE.js";import"./ellipsis-BrpwIqY2.js";import"./download-Bu76VvfY.js";import"./trash-Dz_hRIG8.js";import"./save-2mrbXhN_.js";const{expect:p,fn:b,userEvent:m,within:h}=__STORYBOOK_MODULE_TEST__,f={id:"idea-local-1",title:"Oat protein breakfast drink",content:{summary:"A smooth oat drink with plant protein.",consumer_insight:"Busy mornings call for convenient breakfasts.",product_concept:"Single-serve oat beverage with cocoa and pea protein."}};function k({state:e,showClose:t,onAction:a}){const[y,w]=g.useState("No action"),o=u=>{w(u),a(u)};return l.jsxs("div",{className:"pf-story-ai-assistant-generated-idea-frame",children:[l.jsx("output",{"aria-label":"Idea action",children:y}),l.jsx(v,{idea:e==="empty"?null:f,showClose:t,onClose:()=>o("close"),onDownload:()=>o("download"),onSave:e==="generated"?()=>o("save"):void 0,onDelete:e==="saved"?()=>o("delete"):void 0})]})}const Te={title:"Patterns/AI/Generated idea output",component:k,subcomponents:{GeneratedIdeaDisplay:v},tags:["autodocs"],args:{state:"generated",showClose:!0,onAction:b()},argTypes:{state:{control:"inline-radio",options:["generated","saved","empty"]},showClose:{control:"boolean"},onAction:{control:!1}},parameters:{layout:"fullscreen",docs:{description:{component:"The production GeneratedIdeaDisplay composes IdeaDetailView and buildIdeaTabs. Use it for a generated idea or a saved Idea payload. The content field controls the actual tabs; Overview and All sections are built by the production adapter. The state control chooses representative data and callback availability rather than inventing a new component variant.\n\n### API and host responsibilities\n`idea` accepts an LLMGeneratedIdea, saved Idea, null or undefined. `onClose` is required; `showClose` defaults true. Optional onSave and onDelete determine action presence. onDownload is optional but the download button currently remains visible; provide the callback whenever download is offered. Callbacks carry no payload: the host closes, exports, saves or deletes the current idea. This example only reports callbacks and never persists data.\n\n### Anatomy, states and accessibility\nThe header contains title, pre-actions (save/delete), download and optional close; the body contains the real section tabs and Markdown content. Keep tab keyboard handling, focus and names from the shared controls. Null content uses the actual empty composition. The generated and saved variants deliberately keep their different available actions."}}}},n={},r={play:async({canvasElement:e,args:t})=>{const a=h(e);await m.click(a.getByRole("button",{name:"Save"})),await p(t.onAction).toHaveBeenCalledWith("save"),await m.click(a.getByRole("button",{name:/Download/})),await p(t.onAction).toHaveBeenCalledWith("download")}},s={args:{state:"saved"},play:async({canvasElement:e,args:t})=>{await m.click(h(e).getByRole("button",{name:"Delete"})),await p(t.onAction).toHaveBeenCalledWith("delete")}},i={args:{state:"empty"}},c={args:{showClose:!1}},d={parameters:{docs:{description:{story:"Actual IdeaDetailView header actions, content-derived tablist and selected Markdown panel. No second rendering implementation is maintained."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const _e=["Playground","SaveAndDownload","Saved","Empty","NoClose","Anatomy"];export{d as Anatomy,i as Empty,c as NoClose,n as Playground,r as SaveAndDownload,s as Saved,_e as __namedExportsOrder,Te as default};
