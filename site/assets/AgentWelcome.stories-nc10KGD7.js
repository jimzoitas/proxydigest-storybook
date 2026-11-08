import{r as y,j as t}from"./iframe-AqpYXns4.js";import{B as E}from"./button-B5FjjXWS.js";import{a as b,F as v}from"./FormulationAgentWelcome-BVjt1ZPm.js";import{P as f,R as w,I as x}from"./IdeasAgentWelcome-D1ryeCYc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DEXj3--c.js";import"./loader-circle-mWFWE2W9.js";import"./message-circle-plus-dQTesexh.js";import"./arrow-left-DVYUOIBR.js";import"./chart-column-CBH_1e1B.js";import"./leaf-Dzi45INt.js";import"./copy-v1dQLDSi.js";import"./book-open-By6bDDu1.js";import"./sparkles-CT90CegH.js";import"./at-sign-zjnwvoIG.js";import"./clipboard-list-Bobimkzm.js";import"./paperclip-wSJxakuV.js";import"./info-w0-6ezG6.js";import"./chevron-right-B3hyZT-D.js";import"./prompt-suggestion-BR85t6ts.js";import"./proxy-ai-B3foHNVL.js";import"./overlay-dialog-aVFq0bEi.js";import"./SidebarSection-jtR6GPtn.js";import"./collapsible-DZyMQ3Bu.js";import"./useCollapsiblePanel-DOTGH3aY.js";import"./plus-DzP923hm.js";import"./dropdown-menu-qZhg1f8R.js";import"./menu-DaKubz4c.js";import"./CompositeItem-D1wyjQOR.js";import"./useCompositeItem-QlszIeBN.js";import"./Separator-DssPvI5G.js";import"./circle-Dg6ojZlj.js";import"./input-DLCq6ZzS.js";import"./separator-C7Zm_6nS.js";import"./sheet-dNUUpp2U.js";import"./skeleton-C_SNY4zC.js";import"./panel-left-B2yi0UBt.js";import"./link-DDXehOCU.js";import"./GradientButton-BAnbENHo.js";import"./input-field-BL2Hx9MY.js";import"./number-field-DZ29WMCg.js";import"./GradientIcon-CfoM2wBY.js";import"./InfoAlert-C6GU9og2.js";import"./circle-x-DP398tgS.js";import"./circle-check-big-ezdSO-Al.js";import"./triangle-alert-DPRF-sLk.js";import"./EmptyState-W0H3wZQQ.js";import"./StatusIndicator-DrNvs6i-.js";import"./QuickActionCard-CS01mYDf.js";import"./badge-CQKobhLs.js";const{expect:d,fn:B,userEvent:g,within:S}=__STORYBOOK_MODULE_TEST__;function P({surface:e,inline:a,onSelect:r}){const[R,h]=y.useState("No prompt selected"),[k,C]=y.useState(0),o=n=>{h(n),r(n)};return t.jsxs("div",{className:"pf-story-ai-assistant-agent-welcome-frame",children:[t.jsxs("div",{className:"pf-story-agent-welcome-actions",children:[t.jsx(E,{variant:"outline",onClick:()=>{C(n=>n+1),h("No prompt selected")},children:"Reset welcome"}),t.jsx("output",{"aria-label":"Selected prompt",children:R})]}),t.jsxs("div",{children:[e==="formulation"&&t.jsx(v,{inline:a,reopened:!0,onSuggestionClick:o}),e==="ideas"&&t.jsx(x,{onSuggestionClick:o}),e==="regulatory"&&t.jsx(w,{onSuggestionClick:o}),e==="prompt-card"&&t.jsx(b,{prompt:"Reduce sugar while preserving texture",onClick:()=>o("Reduce sugar while preserving texture")}),e==="choices"&&t.jsx(f,{onSuggestionClick:o,promptSuggestions:[{value:"prompt",label:"Reduce sugar while preserving texture"},{value:"panel",label:"Explore capabilities",onSelect:()=>o("Open capabilities action")}]})]},`${e}-${k}`)]})}const Ce={title:"Patterns/AI/Agent welcome and prompt choices",component:P,subcomponents:{FormulationAgentWelcome:v,FormulationPromptCard:b,IdeasAgentWelcome:x,RegulatoryAgentWelcome:w,PromptSuggestions:f},tags:["autodocs"],args:{surface:"formulation",inline:!1,onSelect:B()},argTypes:{surface:{control:"select",options:["formulation","ideas","regulatory","choices","prompt-card"]},inline:{control:"boolean"},onSelect:{control:!1}},parameters:{docs:{description:{component:"Use these real agent introductions at the start of a conversation. Formulation's welcome owns the capability-page transition and browser dismissal; `inline` removes its outer page padding, and `reopened` explicitly overrides a remembered dismissal. Reset remounts that real component. Ideas and Regulatory are informational introductions: their compatibility `onSuggestionClick` prop is intentionally unused. Do not promise clickable choices there.\n\n### Anatomy and API\nFormulation combines a named dismiss button, capability action, informational tiles and tips. `FormulationPromptCard({prompt,onClick})` is a native button. `PromptSuggestions` takes stable value/label choices and optional labelKey, icon and onSelect. A choice with onSelect invokes that action instead of onSuggestionClick(label). The result here records the real callback; no conversation is started.\n\n### Accessibility and composition\nTab to the actual choices and press Enter or Space. Retain native button semantics and translated source labels. The host controls how a chosen prompt fills a composer, whether to submit, and where panel actions open. Do not merge the agent-specific compositions into a generic prompt input or change their dismissal persistence. Text and icons inherit the application's theme and existing shared controls."}}}},s={},i={args:{surface:"choices"},play:async({canvasElement:e,args:a})=>{const r=S(e);await g.click(r.getByRole("button",{name:/Reduce sugar/})),await d(a.onSelect).toHaveBeenCalledWith("Reduce sugar while preserving texture"),await g.click(r.getByRole("button",{name:"Explore capabilities"})),await d(a.onSelect).toHaveBeenCalledWith("Open capabilities action")}},c={args:{surface:"prompt-card"},play:async({canvasElement:e,args:a})=>{S(e).getByRole("button",{name:/Reduce sugar/}).focus(),await g.keyboard("{Enter}"),await d(a.onSelect).toHaveBeenCalledWith("Reduce sugar while preserving texture")}},l={args:{inline:!0}},p={args:{surface:"ideas"}},m={args:{surface:"regulatory"}},u={parameters:{docs:{description:{story:"The same formulation welcome: header and dismiss, capability navigation, four informational tiles, then tips. Only the capability tile navigates; informational tiles remain inert."}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
