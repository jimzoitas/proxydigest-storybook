import{r as y,j as t}from"./iframe-BXubdNpd.js";import{B as E}from"./button-DOg3bB7T.js";import{a as b,F as v}from"./FormulationAgentWelcome-Cde4UFkd.js";import{P as f,R as w,I as x}from"./IdeasAgentWelcome-Dpmx4hdg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DKWiT4Fi.js";import"./loader-circle-WJxMtqtu.js";import"./message-circle-plus-c6Nmyz9w.js";import"./arrow-left-CYHLIe5X.js";import"./chart-column-CdwwxRJ2.js";import"./leaf-CmdhlPm3.js";import"./copy-CI5Px4Dq.js";import"./book-open-BpIDK6Wj.js";import"./sparkles-TuN5CnLu.js";import"./at-sign-CeRhvegG.js";import"./clipboard-list-BuZquiGr.js";import"./paperclip-B62R2Zl5.js";import"./info-CdrzFsvH.js";import"./chevron-right-Bt7v18gP.js";import"./prompt-suggestion-Df6caPy3.js";import"./proxy-ai-qmhPwT9V.js";import"./overlay-dialog-CQZe9RQv.js";import"./SidebarSection-BcPh9Ke7.js";import"./dropdown-menu-DwRzzotf.js";import"./menu-B8QO56XI.js";import"./CompositeItem-CBKa8E3y.js";import"./useCompositeItem-Bi8YYZ7L.js";import"./Separator-DI4aBzER.js";import"./circle-COTDYbAV.js";import"./ExpandableTextTrigger-CaPE-zBF.js";import"./ellipsis-LPZ0y5bO.js";import"./plus-BS0_boJY.js";import"./collapsible-BboTV2_X.js";import"./useCollapsiblePanel-C5JKJn3w.js";import"./search-field-DLF5WVFc.js";import"./input-BWeqiJDe.js";import"./index.module-B6UitgKw.js";import"./checkbox-R9lg0Zy-.js";import"./minus-BU5OS2V8.js";import"./useAriaLabelledBy-Dlr4qUIQ.js";import"./dialog-Gbr7wu8m.js";import"./separator-BKKMk4Xo.js";import"./sheet-C-ICznI3.js";import"./skeleton-BP5S_qG6.js";import"./panel-left-C46OxOcL.js";import"./link-CkdKlHel.js";import"./GradientButton-KU-jgc31.js";import"./input-field-DuMzWZ-u.js";import"./number-field-BX-ukorA.js";import"./GradientIcon-Bb0JhmPS.js";import"./InfoAlert-Hu-KbKIZ.js";import"./circle-x-Dpw0IbmW.js";import"./circle-check-big-Di0Hj0Q7.js";import"./triangle-alert-BGpQ_lRK.js";import"./EmptyState-DCD9wIrq.js";import"./StatusIndicator-Cx5rgCHr.js";import"./QuickActionCard-BETlFEdB.js";import"./badge-C4iUsAGF.js";const{expect:d,fn:B,userEvent:g,within:S}=__STORYBOOK_MODULE_TEST__;function P({surface:e,inline:a,onSelect:r}){const[R,h]=y.useState("No prompt selected"),[k,C]=y.useState(0),o=n=>{h(n),r(n)};return t.jsxs("div",{className:"pf-story-ai-assistant-agent-welcome-frame",children:[t.jsxs("div",{className:"pf-story-agent-welcome-actions",children:[t.jsx(E,{variant:"outline",onClick:()=>{C(n=>n+1),h("No prompt selected")},children:"Reset welcome"}),t.jsx("output",{"aria-label":"Selected prompt",children:R})]}),t.jsxs("div",{children:[e==="formulation"&&t.jsx(v,{inline:a,reopened:!0,onSuggestionClick:o}),e==="ideas"&&t.jsx(x,{onSuggestionClick:o}),e==="regulatory"&&t.jsx(w,{onSuggestionClick:o}),e==="prompt-card"&&t.jsx(b,{prompt:"Reduce sugar while preserving texture",onClick:()=>o("Reduce sugar while preserving texture")}),e==="choices"&&t.jsx(f,{onSuggestionClick:o,promptSuggestions:[{value:"prompt",label:"Reduce sugar while preserving texture"},{value:"panel",label:"Explore capabilities",onSelect:()=>o("Open capabilities action")}]})]},`${e}-${k}`)]})}const We={title:"Patterns/AI/Agent welcome and prompt choices",component:P,subcomponents:{FormulationAgentWelcome:v,FormulationPromptCard:b,IdeasAgentWelcome:x,RegulatoryAgentWelcome:w,PromptSuggestions:f},tags:["autodocs"],args:{surface:"formulation",inline:!1,onSelect:B()},argTypes:{surface:{control:"select",options:["formulation","ideas","regulatory","choices","prompt-card"]},inline:{control:"boolean"},onSelect:{control:!1}},parameters:{docs:{description:{component:"Use these real agent introductions at the start of a conversation. Formulation's welcome owns the capability-page transition and browser dismissal; `inline` removes its outer page padding, and `reopened` explicitly overrides a remembered dismissal. Reset remounts that real component. Ideas and Regulatory are informational introductions: their compatibility `onSuggestionClick` prop is intentionally unused. Do not promise clickable choices there.\n\n### Anatomy and API\nFormulation combines a named dismiss button, capability action, informational tiles and tips. `FormulationPromptCard({prompt,onClick})` is a native button. `PromptSuggestions` takes stable value/label choices and optional labelKey, icon and onSelect. A choice with onSelect invokes that action instead of onSuggestionClick(label). The result here records the real callback; no conversation is started.\n\n### Accessibility and composition\nTab to the actual choices and press Enter or Space. Retain native button semantics and translated source labels. The host controls how a chosen prompt fills a composer, whether to submit, and where panel actions open. Do not merge the agent-specific compositions into a generic prompt input or change their dismissal persistence. Text and icons inherit the application's theme and existing shared controls."}}}},i={},s={args:{surface:"choices"},play:async({canvasElement:e,args:a})=>{const r=S(e);await g.click(r.getByRole("button",{name:/Reduce sugar/})),await d(a.onSelect).toHaveBeenCalledWith("Reduce sugar while preserving texture"),await g.click(r.getByRole("button",{name:"Explore capabilities"})),await d(a.onSelect).toHaveBeenCalledWith("Open capabilities action")}},c={args:{surface:"prompt-card"},play:async({canvasElement:e,args:a})=>{S(e).getByRole("button",{name:/Reduce sugar/}).focus(),await g.keyboard("{Enter}"),await d(a.onSelect).toHaveBeenCalledWith("Reduce sugar while preserving texture")}},l={args:{inline:!0}},p={args:{surface:"ideas"}},m={args:{surface:"regulatory"}},u={parameters:{docs:{description:{story:"The same formulation welcome: header and dismiss, capability navigation, four informational tiles, then tips. Only the capability tile navigates; informational tiles remain inert."}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Ie=["Playground","PromptCallback","PromptCardKeyboard","InlineFormulation","Ideas","Regulatory","Anatomy"];export{u as Anatomy,p as Ideas,l as InlineFormulation,i as Playground,s as PromptCallback,c as PromptCardKeyboard,m as Regulatory,Ie as __namedExportsOrder,We as default};
