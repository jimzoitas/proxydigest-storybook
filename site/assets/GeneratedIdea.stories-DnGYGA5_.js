import{r as g,j as p}from"./iframe-BXubdNpd.js";import{G as v}from"./GeneratedIdeaDisplay-Bc1TnwR1.js";import"./preload-helper-PPVm8Dsz.js";import"./button-DOg3bB7T.js";import"./index-DKWiT4Fi.js";import"./loader-circle-WJxMtqtu.js";import"./types-BtVgDmVp.js";import"./IdeaDetailView-BVjrYrpU.js";import"./tabs-BrnZ_xpj.js";import"./CompositeRoot-DuK6i5O1.js";import"./useCompositeItem-Bi8YYZ7L.js";import"./dropdown-menu-DwRzzotf.js";import"./menu-B8QO56XI.js";import"./CompositeItem-CBKa8E3y.js";import"./Separator-DI4aBzER.js";import"./chevron-right-Bt7v18gP.js";import"./circle-COTDYbAV.js";import"./ai-markdown-Cajo0Pov.js";/* empty css                 */import"./marked.esm-B5D8JARp.js";import"./table-cell-sizing-CT2Y4_1Z.js";import"./source-basic-BLiCKh-9.js";import"./source-Y1udLlHr.js";import"./hover-card-DOvxW5L6.js";import"./code-block-CVnXI3I9.js";import"./index-8G61PpGJ.js";import"./index-D-ztsl9H.js";import"./index-Cx-C-_RM.js";import"./index-BXGHVmqw.js";import"./collapsible-BboTV2_X.js";import"./useCollapsiblePanel-C5JKJn3w.js";import"./aiAssistant.selectors-DeXBL1Y1.js";import"./toast-CcwsLbYZ.js";import"./trackPosthogEvent-CBk16WCm.js";import"./proxy-ai-qmhPwT9V.js";import"./overlay-dialog-CQZe9RQv.js";import"./SidebarSection-BcPh9Ke7.js";import"./ExpandableTextTrigger-CaPE-zBF.js";import"./ellipsis-LPZ0y5bO.js";import"./plus-BS0_boJY.js";import"./search-field-DLF5WVFc.js";import"./input-BWeqiJDe.js";import"./index.module-B6UitgKw.js";import"./checkbox-R9lg0Zy-.js";import"./minus-BU5OS2V8.js";import"./useAriaLabelledBy-Dlr4qUIQ.js";import"./dialog-Gbr7wu8m.js";import"./separator-BKKMk4Xo.js";import"./sheet-C-ICznI3.js";import"./skeleton-BP5S_qG6.js";import"./panel-left-C46OxOcL.js";import"./link-CkdKlHel.js";import"./GradientButton-KU-jgc31.js";import"./input-field-DuMzWZ-u.js";import"./number-field-BX-ukorA.js";import"./GradientIcon-Bb0JhmPS.js";import"./InfoAlert-Hu-KbKIZ.js";import"./circle-x-Dpw0IbmW.js";import"./circle-check-big-Di0Hj0Q7.js";import"./triangle-alert-BGpQ_lRK.js";import"./info-CdrzFsvH.js";import"./EmptyState-DCD9wIrq.js";import"./StatusIndicator-Cx5rgCHr.js";import"./QuickActionCard-BETlFEdB.js";import"./badge-C4iUsAGF.js";import"./sticky-note-Cjfmb6wu.js";import"./download-Bw2ymobo.js";import"./trash-DGTZHlCy.js";import"./save-DnNAOhGR.js";const{expect:l,fn:b,userEvent:m,within:h}=__STORYBOOK_MODULE_TEST__,f={id:"idea-local-1",title:"Oat protein breakfast drink",content:{summary:"A smooth oat drink with plant protein.",consumer_insight:"Busy mornings call for convenient breakfasts.",product_concept:"Single-serve oat beverage with cocoa and pea protein."}};function k({state:e,showClose:t,onAction:a}){const[y,w]=g.useState("No action"),o=u=>{w(u),a(u)};return p.jsxs("div",{className:"pf-story-ai-assistant-generated-idea-frame",children:[p.jsx("output",{"aria-label":"Idea action",children:y}),p.jsx(v,{idea:e==="empty"?null:f,showClose:t,onClose:()=>o("close"),onDownload:()=>o("download"),onSave:e==="generated"?()=>o("save"):void 0,onDelete:e==="saved"?()=>o("delete"):void 0})]})}const We={title:"Patterns/AI/Generated idea output",component:k,subcomponents:{GeneratedIdeaDisplay:v},tags:["autodocs"],args:{state:"generated",showClose:!0,onAction:b()},argTypes:{state:{control:"inline-radio",options:["generated","saved","empty"]},showClose:{control:"boolean"},onAction:{control:!1}},parameters:{layout:"fullscreen",docs:{description:{component:"The production GeneratedIdeaDisplay composes IdeaDetailView and buildIdeaTabs. Use it for a generated idea or a saved Idea payload. The content field controls the actual tabs; Overview and All sections are built by the production adapter. The state control chooses representative data and callback availability rather than inventing a new component variant.\n\n### API and host responsibilities\n`idea` accepts an LLMGeneratedIdea, saved Idea, null or undefined. `onClose` is required; `showClose` defaults true. Optional onSave and onDelete determine action presence. onDownload is optional but the download button currently remains visible; provide the callback whenever download is offered. Callbacks carry no payload: the host closes, exports, saves or deletes the current idea. This example only reports callbacks and never persists data.\n\n### Anatomy, states and accessibility\nThe header contains title, pre-actions (save/delete), download and optional close; the body contains the real section tabs and Markdown content. Keep tab keyboard handling, focus and names from the shared controls. Null content uses the actual empty composition. The generated and saved variants deliberately keep their different available actions."}}}},n={},r={play:async({canvasElement:e,args:t})=>{const a=h(e);await m.click(a.getByRole("button",{name:"Save"})),await l(t.onAction).toHaveBeenCalledWith("save"),await m.click(a.getByRole("button",{name:/Download/})),await l(t.onAction).toHaveBeenCalledWith("download")}},s={args:{state:"saved"},play:async({canvasElement:e,args:t})=>{await m.click(h(e).getByRole("button",{name:"Delete"})),await l(t.onAction).toHaveBeenCalledWith("delete")}},i={args:{state:"empty"}},c={args:{showClose:!1}},d={parameters:{docs:{description:{story:"Actual IdeaDetailView header actions, content-derived tablist and selected Markdown panel. No second rendering implementation is maintained."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
