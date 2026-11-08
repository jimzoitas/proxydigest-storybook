import{r as y,j as t}from"./iframe-nhB53rPD.js";import{B as E}from"./button-_tcBhp5_.js";import{a as b,F as v}from"./FormulationAgentWelcome-L6aGzpmL.js";import{P as f,R as w,I as x}from"./IdeasAgentWelcome-DdUueLKq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8Dbc_Jva.js";import"./loader-circle-MxHlgpxw.js";import"./message-circle-plus-CALoZNb8.js";import"./arrow-left-BLait6ow.js";import"./chart-column-DvfjpCqh.js";import"./leaf-Cbk-JkQ7.js";import"./copy-BeMWaBMA.js";import"./book-open-BhS68PxU.js";import"./sparkles-DtPcgZXv.js";import"./at-sign-DyPsl_JO.js";import"./clipboard-list-PbiY-GQf.js";import"./paperclip-CV-BI8ve.js";import"./info-BBafOREX.js";import"./chevron-right-CavErG_J.js";import"./prompt-suggestion-Zrv528Zx.js";import"./proxy-ai-o-RopWUa.js";import"./overlay-dialog-Co5KED9w.js";import"./SidebarSection-BvXTZEYC.js";import"./collapsible-pI4oVkh3.js";import"./useCollapsiblePanel-DVMF6qnG.js";import"./plus-0cDzJ2QO.js";import"./dropdown-menu-6QYTqNVQ.js";import"./menu-DyIs6xZo.js";import"./CompositeItem-D_8UuHC1.js";import"./useCompositeItem-BquT0LDd.js";import"./Separator-RhxJSB-Q.js";import"./circle-Byfpv97O.js";import"./input-CAdeD_xm.js";import"./separator-Dmg9cS_7.js";import"./sheet-L7clkwH-.js";import"./skeleton-CMUv0H3w.js";import"./panel-left-Bz3AW4zy.js";import"./link-BzrwOGkM.js";import"./GradientButton-Cf-GSuXl.js";import"./input-field-CqPzWEoF.js";import"./number-field-DCKprIQw.js";import"./GradientIcon-DZGaPdQM.js";import"./InfoAlert-BZotkcbw.js";import"./circle-x-DQ_R-m_A.js";import"./circle-check-big-Cp3rUY4Q.js";import"./triangle-alert-XMA8UGNQ.js";import"./EmptyState-DcYSBPq3.js";import"./StatusIndicator-Cxavf1go.js";import"./QuickActionCard-DRfpLGIV.js";import"./badge-DF9-aVgV.js";const{expect:d,fn:B,userEvent:g,within:S}=__STORYBOOK_MODULE_TEST__;function P({surface:e,inline:a,onSelect:r}){const[R,h]=y.useState("No prompt selected"),[k,C]=y.useState(0),o=n=>{h(n),r(n)};return t.jsxs("div",{className:"pf-story-ai-assistant-agent-welcome-frame",children:[t.jsxs("div",{className:"pf-story-agent-welcome-actions",children:[t.jsx(E,{variant:"outline",onClick:()=>{C(n=>n+1),h("No prompt selected")},children:"Reset welcome"}),t.jsx("output",{"aria-label":"Selected prompt",children:R})]}),t.jsxs("div",{children:[e==="formulation"&&t.jsx(v,{inline:a,reopened:!0,onSuggestionClick:o}),e==="ideas"&&t.jsx(x,{onSuggestionClick:o}),e==="regulatory"&&t.jsx(w,{onSuggestionClick:o}),e==="prompt-card"&&t.jsx(b,{prompt:"Reduce sugar while preserving texture",onClick:()=>o("Reduce sugar while preserving texture")}),e==="choices"&&t.jsx(f,{onSuggestionClick:o,promptSuggestions:[{value:"prompt",label:"Reduce sugar while preserving texture"},{value:"panel",label:"Explore capabilities",onSelect:()=>o("Open capabilities action")}]})]},`${e}-${k}`)]})}const Ce={title:"Patterns/AI/Agent welcome and prompt choices",component:P,subcomponents:{FormulationAgentWelcome:v,FormulationPromptCard:b,IdeasAgentWelcome:x,RegulatoryAgentWelcome:w,PromptSuggestions:f},tags:["autodocs"],args:{surface:"formulation",inline:!1,onSelect:B()},argTypes:{surface:{control:"select",options:["formulation","ideas","regulatory","choices","prompt-card"]},inline:{control:"boolean"},onSelect:{control:!1}},parameters:{docs:{description:{component:"Use these real agent introductions at the start of a conversation. Formulation's welcome owns the capability-page transition and browser dismissal; `inline` removes its outer page padding, and `reopened` explicitly overrides a remembered dismissal. Reset remounts that real component. Ideas and Regulatory are informational introductions: their compatibility `onSuggestionClick` prop is intentionally unused. Do not promise clickable choices there.\n\n### Anatomy and API\nFormulation combines a named dismiss button, capability action, informational tiles and tips. `FormulationPromptCard({prompt,onClick})` is a native button. `PromptSuggestions` takes stable value/label choices and optional labelKey, icon and onSelect. A choice with onSelect invokes that action instead of onSuggestionClick(label). The result here records the real callback; no conversation is started.\n\n### Accessibility and composition\nTab to the actual choices and press Enter or Space. Retain native button semantics and translated source labels. The host controls how a chosen prompt fills a composer, whether to submit, and where panel actions open. Do not merge the agent-specific compositions into a generic prompt input or change their dismissal persistence. Text and icons inherit the application's theme and existing shared controls."}}}},s={},i={args:{surface:"choices"},play:async({canvasElement:e,args:a})=>{const r=S(e);await g.click(r.getByRole("button",{name:/Reduce sugar/})),await d(a.onSelect).toHaveBeenCalledWith("Reduce sugar while preserving texture"),await g.click(r.getByRole("button",{name:"Explore capabilities"})),await d(a.onSelect).toHaveBeenCalledWith("Open capabilities action")}},c={args:{surface:"prompt-card"},play:async({canvasElement:e,args:a})=>{S(e).getByRole("button",{name:/Reduce sugar/}).focus(),await g.keyboard("{Enter}"),await d(a.onSelect).toHaveBeenCalledWith("Reduce sugar while preserving texture")}},l={args:{inline:!0}},p={args:{surface:"ideas"}},m={args:{surface:"regulatory"}},u={parameters:{docs:{description:{story:"The same formulation welcome: header and dismiss, capability navigation, four informational tiles, then tips. Only the capability tile navigates; informational tiles remain inert."}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "choices"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: /Reduce sugar/
    }));
    await expect(args.onSelect).toHaveBeenCalledWith("Reduce sugar while preserving texture");
    await userEvent.click(canvas.getByRole("button", {
      name: "Explore capabilities"
    }));
    await expect(args.onSelect).toHaveBeenCalledWith("Open capabilities action");
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "prompt-card"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    within(canvasElement).getByRole("button", {
      name: /Reduce sugar/
    }).focus();
    await userEvent.keyboard("{Enter}");
    await expect(args.onSelect).toHaveBeenCalledWith("Reduce sugar while preserving texture");
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    inline: true
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "ideas"
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "regulatory"
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "The same formulation welcome: header and dismiss, capability navigation, four informational tiles, then tips. Only the capability tile navigates; informational tiles remain inert."
      }
    }
  }
}`,...u.parameters?.docs?.source}}};const Ee=["Playground","PromptCallback","PromptCardKeyboard","InlineFormulation","Ideas","Regulatory","Anatomy"];export{u as Anatomy,p as Ideas,l as InlineFormulation,s as Playground,i as PromptCallback,c as PromptCardKeyboard,m as Regulatory,Ee as __namedExportsOrder,Ce as default};
