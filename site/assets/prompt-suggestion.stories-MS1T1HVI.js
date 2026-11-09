import{r as m,j as a}from"./iframe-DgvZnKtv.js";import{l as u}from"./button-options-CPRis3fN.js";import{P as h}from"./prompt-suggestion-Dr-llbJO.js";import{B as b}from"./button-CEcYiQdY.js";import{S as v}from"./sparkles-CEAhmZN-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWlKOsdO.js";import"./loader-circle-BsZrs7F6.js";const{expect:c,userEvent:l,within:d}=__STORYBOOK_MODULE_TEST__;function y({text:t,...e}){const[s,g]=m.useState(""),p=e.size==="icon"||e.size?.startsWith("icon-");return a.jsxs("div",{className:"pf-story-prompt-suggestion-preview",children:[a.jsx(h,{...e,"aria-label":p?t:void 0,onClick:()=>g(t),children:p?a.jsx(v,{"aria-hidden":"true"}):t}),a.jsx("output",{"aria-label":"Selected suggestion",children:s||"Choose a suggestion"}),a.jsx(b,{variant:"outline",onClick:()=>g(""),children:"Reset example"})]})}const B={title:"Components/AI & Conversation/Prompt Suggestion",component:y,tags:["autodocs"],args:{text:"Create a low sugar recipe",highlight:"",disabled:!1,size:"lg",variant:"outline"},argTypes:{text:{control:"text"},highlight:{control:"text"},disabled:{control:"boolean"},size:{control:{type:"select",labels:u},options:["sm","default","lg","icon","icon-sm","icon-md","icon-lg"]},variant:{control:"select",options:["outline","ghost","default","secondary","destructive","link","ai","gradient-purple","gradient-amber"]}},parameters:{docs:{description:{component:"A native Button-backed suggested prompt. Public API: children, highlight, variant, size, className and native button props including disabled/onClick. A non-empty highlight enables list styling and emphasizes the first case-insensitive match; it does not perform filtering. Host code decides whether selection fills the composer or sends immediately. The local example only records the chosen text. Token migration remains separate from catalogue coverage."}}}},o={play:async({canvasElement:t})=>{const e=d(t);await l.tab(),await l.keyboard("{Enter}"),await c(e.getByLabelText("Selected suggestion")).toHaveTextContent("Create a low sugar recipe")}},n={args:{highlight:"SUGAR",variant:"ghost",size:"sm"}},r={args:{highlight:"protein",variant:"ghost",size:"sm"}},i={args:{disabled:!0},play:async({canvasElement:t})=>{const e=d(t),s=e.getByRole("button",{name:"Create a low sugar recipe"});await c(s).toBeDisabled(),await l.click(s),await c(e.getByLabelText("Selected suggestion")).toHaveTextContent("Choose a suggestion")}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await userEvent.tab();
    await userEvent.keyboard("{Enter}");
    await expect(c.getByLabelText("Selected suggestion")).toHaveTextContent("Create a low sugar recipe");
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    highlight: "SUGAR",
    variant: "ghost",
    size: "sm"
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    highlight: "protein",
    variant: "ghost",
    size: "sm"
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    const button = c.getByRole("button", {
      name: "Create a low sugar recipe"
    });
    await expect(button).toBeDisabled();
    await userEvent.click(button);
    await expect(c.getByLabelText("Selected suggestion")).toHaveTextContent("Choose a suggestion");
  }
}`,...i.parameters?.docs?.source}}};const z=["Playground","SearchMatch","NoMatch","Disabled"];export{i as Disabled,r as NoMatch,o as Playground,n as SearchMatch,z as __namedExportsOrder,B as default};
