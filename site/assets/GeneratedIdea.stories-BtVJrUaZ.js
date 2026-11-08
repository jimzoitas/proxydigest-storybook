import{r as g,j as l}from"./iframe-AqpYXns4.js";import{G as v}from"./GeneratedIdeaDisplay-DfDI_jQq.js";import"./preload-helper-PPVm8Dsz.js";import"./button-B5FjjXWS.js";import"./index-DEXj3--c.js";import"./loader-circle-mWFWE2W9.js";import"./types-BtVgDmVp.js";import"./IdeaDetailView-DZkx801V.js";import"./tabs-D2cBF9Wg.js";import"./CompositeRoot-yL7bK7Jd.js";import"./useCompositeItem-QlszIeBN.js";import"./dropdown-menu-qZhg1f8R.js";import"./menu-DaKubz4c.js";import"./CompositeItem-D1wyjQOR.js";import"./Separator-DssPvI5G.js";import"./chevron-right-B3hyZT-D.js";import"./circle-Dg6ojZlj.js";import"./ai-markdown-fRPd8D1J.js";/* empty css                 */import"./marked.esm-B5D8JARp.js";import"./table-cell-sizing-C0yGB5Oh.js";import"./source-basic-GTpBQAiX.js";import"./source-BgvkpggK.js";import"./hover-card-sY2GMIgd.js";import"./code-block-B6Cq0LfI.js";import"./index-8G61PpGJ.js";import"./index-C6ZnvOnQ.js";import"./index-6EzalymI.js";import"./index-C9pEX-zO.js";import"./collapsible-DZyMQ3Bu.js";import"./useCollapsiblePanel-DOTGH3aY.js";import"./aiAssistant.selectors-DhBhezDt.js";import"./toast-Cs22iz7x.js";import"./trackPosthogEvent-D3YuMJXm.js";import"./proxy-ai-B3foHNVL.js";import"./overlay-dialog-aVFq0bEi.js";import"./SidebarSection-jtR6GPtn.js";import"./plus-DzP923hm.js";import"./input-DLCq6ZzS.js";import"./separator-C7Zm_6nS.js";import"./sheet-dNUUpp2U.js";import"./skeleton-C_SNY4zC.js";import"./panel-left-B2yi0UBt.js";import"./link-DDXehOCU.js";import"./GradientButton-BAnbENHo.js";import"./input-field-BL2Hx9MY.js";import"./number-field-DZ29WMCg.js";import"./GradientIcon-CfoM2wBY.js";import"./InfoAlert-C6GU9og2.js";import"./circle-x-DP398tgS.js";import"./circle-check-big-ezdSO-Al.js";import"./triangle-alert-DPRF-sLk.js";import"./info-w0-6ezG6.js";import"./EmptyState-W0H3wZQQ.js";import"./StatusIndicator-DrNvs6i-.js";import"./QuickActionCard-CS01mYDf.js";import"./badge-CQKobhLs.js";import"./sticky-note-Bwuj76fp.js";import"./ellipsis-DnMQ-1iz.js";import"./download-BxptYOlw.js";import"./trash-7cQIy_ym.js";import"./save-hh9IRuRc.js";const{expect:p,fn:b,userEvent:m,within:h}=__STORYBOOK_MODULE_TEST__,f={id:"idea-local-1",title:"Oat protein breakfast drink",content:{summary:"A smooth oat drink with plant protein.",consumer_insight:"Busy mornings call for convenient breakfasts.",product_concept:"Single-serve oat beverage with cocoa and pea protein."}};function k({state:e,showClose:t,onAction:a}){const[y,w]=g.useState("No action"),o=u=>{w(u),a(u)};return l.jsxs("div",{className:"pf-story-ai-assistant-generated-idea-frame",children:[l.jsx("output",{"aria-label":"Idea action",children:y}),l.jsx(v,{idea:e==="empty"?null:f,showClose:t,onClose:()=>o("close"),onDownload:()=>o("download"),onSave:e==="generated"?()=>o("save"):void 0,onDelete:e==="saved"?()=>o("delete"):void 0})]})}const Te={title:"Patterns/AI/Generated idea output",component:k,subcomponents:{GeneratedIdeaDisplay:v},tags:["autodocs"],args:{state:"generated",showClose:!0,onAction:b()},argTypes:{state:{control:"inline-radio",options:["generated","saved","empty"]},showClose:{control:"boolean"},onAction:{control:!1}},parameters:{layout:"fullscreen",docs:{description:{component:"The production GeneratedIdeaDisplay composes IdeaDetailView and buildIdeaTabs. Use it for a generated idea or a saved Idea payload. The content field controls the actual tabs; Overview and All sections are built by the production adapter. The state control chooses representative data and callback availability rather than inventing a new component variant.\n\n### API and host responsibilities\n`idea` accepts an LLMGeneratedIdea, saved Idea, null or undefined. `onClose` is required; `showClose` defaults true. Optional onSave and onDelete determine action presence. onDownload is optional but the download button currently remains visible; provide the callback whenever download is offered. Callbacks carry no payload: the host closes, exports, saves or deletes the current idea. This example only reports callbacks and never persists data.\n\n### Anatomy, states and accessibility\nThe header contains title, pre-actions (save/delete), download and optional close; the body contains the real section tabs and Markdown content. Keep tab keyboard handling, focus and names from the shared controls. Null content uses the actual empty composition. The generated and saved variants deliberately keep their different available actions."}}}},n={},r={play:async({canvasElement:e,args:t})=>{const a=h(e);await m.click(a.getByRole("button",{name:"Save"})),await p(t.onAction).toHaveBeenCalledWith("save"),await m.click(a.getByRole("button",{name:/Download/})),await p(t.onAction).toHaveBeenCalledWith("download")}},s={args:{state:"saved"},play:async({canvasElement:e,args:t})=>{await m.click(h(e).getByRole("button",{name:"Delete"})),await p(t.onAction).toHaveBeenCalledWith("delete")}},i={args:{state:"empty"}},c={args:{showClose:!1}},d={parameters:{docs:{description:{story:"Actual IdeaDetailView header actions, content-derived tablist and selected Markdown panel. No second rendering implementation is maintained."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
