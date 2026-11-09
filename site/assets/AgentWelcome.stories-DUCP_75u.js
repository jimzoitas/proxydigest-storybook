import{r as y,j as t}from"./iframe-DgvZnKtv.js";import{B as E}from"./button-CEcYiQdY.js";import{a as b,F as v}from"./FormulationAgentWelcome-Bv4LbqqE.js";import{P as f,R as w,I as x}from"./IdeasAgentWelcome-CrM_0sfu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWlKOsdO.js";import"./loader-circle-BsZrs7F6.js";import"./composed-typography-BeKxRqyR.js";import"./message-circle-plus-Bc9wC1an.js";import"./arrow-left-WTRpCszD.js";import"./chart-column-BCfIkthV.js";import"./leaf-DffB4HM-.js";import"./copy-BkjpvN59.js";import"./book-open-BBC4gIfG.js";import"./sparkles-CEAhmZN-.js";import"./at-sign-CYM4Otiz.js";import"./clipboard-list-DYh5gZBM.js";import"./paperclip-CrBO5tEC.js";import"./info-HwFtBdFw.js";import"./chevron-right-B8SZue5v.js";import"./composed-conversation-Vghu3nK9.js";import"./prompt-suggestion-Dr-llbJO.js";import"./proxy-ai-NSDrGgNE.js";import"./overlay-dialog-i6vPmHIw.js";import"./SidebarSection-BohYk_Y-.js";import"./dropdown-menu-CuN8-u21.js";import"./menu-BIxLiaY6.js";import"./CompositeItem-qKQIJE0X.js";import"./useCompositeItem-Dr13hnqh.js";import"./Separator-BKJ0ZhJM.js";import"./circle-CwHZP-HG.js";import"./ExpandableTextTrigger-Bw1577uH.js";import"./ellipsis-DdwwDVLo.js";import"./plus-BMpb-JrX.js";import"./collapsible-BPKkR0Kq.js";import"./useCollapsiblePanel-jjkiJ8Ha.js";import"./search-field-CzWqD7iz.js";import"./input-DTWVrd6t.js";import"./index.module-C-pw7-ZN.js";import"./checkbox-CCvRjg_n.js";import"./minus-0s0hIbe7.js";import"./useAriaLabelledBy-C2v0UWUV.js";import"./dialog-BGED6ss2.js";import"./separator-DZKac5zi.js";import"./sheet-BSYc4zIC.js";import"./skeleton-DwZsbo-S.js";import"./panel-left-D88YpPbL.js";import"./link-eK7RklLn.js";import"./GradientButton-Di_WK0D1.js";import"./input-field-D1k4gXrr.js";import"./number-field-BuEna-S2.js";import"./GradientIcon-Bt266YZo.js";import"./InfoAlert-D7bONhIx.js";import"./circle-x-1SpwuOPE.js";import"./circle-check-big-Dbn0EK-V.js";import"./triangle-alert-DoEEEFIM.js";import"./EmptyState-DqGHQ3U-.js";import"./StatusIndicator-CvY3R4FY.js";import"./QuickActionCard-Y4uBCWf1.js";import"./badge-C-Jji8Kx.js";const{expect:d,fn:B,userEvent:g,within:S}=__STORYBOOK_MODULE_TEST__;function P({surface:e,inline:a,onSelect:r}){const[R,h]=y.useState("No prompt selected"),[k,C]=y.useState(0),o=n=>{h(n),r(n)};return t.jsxs("div",{className:"pf-story-ai-assistant-agent-welcome-frame",children:[t.jsxs("div",{className:"pf-story-agent-welcome-actions",children:[t.jsx(E,{variant:"outline",onClick:()=>{C(n=>n+1),h("No prompt selected")},children:"Reset welcome"}),t.jsx("output",{"aria-label":"Selected prompt",children:R})]}),t.jsxs("div",{children:[e==="formulation"&&t.jsx(v,{inline:a,reopened:!0,onSuggestionClick:o}),e==="ideas"&&t.jsx(x,{onSuggestionClick:o}),e==="regulatory"&&t.jsx(w,{onSuggestionClick:o}),e==="prompt-card"&&t.jsx(b,{prompt:"Reduce sugar while preserving texture",onClick:()=>o("Reduce sugar while preserving texture")}),e==="choices"&&t.jsx(f,{onSuggestionClick:o,promptSuggestions:[{value:"prompt",label:"Reduce sugar while preserving texture"},{value:"panel",label:"Explore capabilities",onSelect:()=>o("Open capabilities action")}]})]},`${e}-${k}`)]})}const Fe={title:"Patterns/AI/Agent welcome and prompt choices",component:P,subcomponents:{FormulationAgentWelcome:v,FormulationPromptCard:b,IdeasAgentWelcome:x,RegulatoryAgentWelcome:w,PromptSuggestions:f},tags:["autodocs"],args:{surface:"formulation",inline:!1,onSelect:B()},argTypes:{surface:{control:"select",options:["formulation","ideas","regulatory","choices","prompt-card"]},inline:{control:"boolean"},onSelect:{control:!1}},parameters:{docs:{description:{component:"Use these real agent introductions at the start of a conversation. Formulation's welcome owns the capability-page transition and browser dismissal; `inline` removes its outer page padding, and `reopened` explicitly overrides a remembered dismissal. Reset remounts that real component. Ideas and Regulatory are informational introductions: their compatibility `onSuggestionClick` prop is intentionally unused. Do not promise clickable choices there.\n\n### Anatomy and API\nFormulation combines a named dismiss button, capability action, informational tiles and tips. `FormulationPromptCard({prompt,onClick})` is a native button. `PromptSuggestions` takes stable value/label choices and optional labelKey, icon and onSelect. A choice with onSelect invokes that action instead of onSuggestionClick(label). The result here records the real callback; no conversation is started.\n\n### Accessibility and composition\nTab to the actual choices and press Enter or Space. Retain native button semantics and translated source labels. The host controls how a chosen prompt fills a composer, whether to submit, and where panel actions open. Do not merge the agent-specific compositions into a generic prompt input or change their dismissal persistence. Text and icons inherit the application's theme and existing shared controls."}}}},i={},s={args:{surface:"choices"},play:async({canvasElement:e,args:a})=>{const r=S(e);await g.click(r.getByRole("button",{name:/Reduce sugar/})),await d(a.onSelect).toHaveBeenCalledWith("Reduce sugar while preserving texture"),await g.click(r.getByRole("button",{name:"Explore capabilities"})),await d(a.onSelect).toHaveBeenCalledWith("Open capabilities action")}},c={args:{surface:"prompt-card"},play:async({canvasElement:e,args:a})=>{S(e).getByRole("button",{name:/Reduce sugar/}).focus(),await g.keyboard("{Enter}"),await d(a.onSelect).toHaveBeenCalledWith("Reduce sugar while preserving texture")}},l={args:{inline:!0}},p={args:{surface:"ideas"}},m={args:{surface:"regulatory"}},u={parameters:{docs:{description:{story:"The same formulation welcome: header and dismiss, capability navigation, four informational tiles, then tips. Only the capability tile navigates; informational tiles remain inert."}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const _e=["Playground","PromptCallback","PromptCardKeyboard","InlineFormulation","Ideas","Regulatory","Anatomy"];export{u as Anatomy,p as Ideas,l as InlineFormulation,i as Playground,s as PromptCallback,c as PromptCardKeyboard,m as Regulatory,_e as __namedExportsOrder,Fe as default};
