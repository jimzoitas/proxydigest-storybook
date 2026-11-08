import{j as l,r as v}from"./iframe-6uZ_OvXJ.js";import{A as d}from"./AmountField-DkoLp1Zb.js";import"./preload-helper-PPVm8Dsz.js";import"./input-xqFXePlz.js";const{expect:i,userEvent:u,within:f}=__STORYBOOK_MODULE_TEST__;function b({defaultValue:a,...c}){const[e,m]=v.useState(String(a??"")),p=e===""||!Number.isFinite(Number(e))||Number(e)<=0;return l.jsx(d,{...c,value:e,onChange:g=>m(g.target.value),error:p?"Enter an amount greater than zero.":void 0})}const x={title:"Patterns/Forms/Amount Field",component:d,tags:["autodocs"],parameters:{layout:"padded",controls:{include:["defaultValue","unit","disabled","readOnly"]},docs:{description:{component:"Native number draft, localized unit and associated validation feedback. The host validates and owns draft/Apply/Cancel behavior. The Nutrition Info and Traffic Lights settings use this composition without changing Redux actions, retry behavior or request contracts. Anatomy: number input, trailing unit, conditional warning. See the colocated contract and guidelines."}}},args:{defaultValue:"100",unit:"g","aria-label":"Serving amount in grams",disabled:!1,readOnly:!1},argTypes:{defaultValue:{control:"text"},unit:{control:"text"},disabled:{control:"boolean"},readOnly:{control:"boolean"}},render:a=>l.jsx(b,{...a},String(a.defaultValue))},t={},r={args:{defaultValue:""}},n={args:{defaultValue:"0.5"}},o={args:{disabled:!0}},s={play:async({canvasElement:a})=>{const e=f(a).getByRole("spinbutton",{name:"Serving amount in grams"});await u.clear(e),await i(e).toHaveAccessibleDescription("Enter an amount greater than zero."),await u.type(e,"0.5"),await i(e).toHaveValue(.5),await i(e).not.toHaveAttribute("aria-invalid","true")}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: ""
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "0.5"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole("spinbutton", {
      name: "Serving amount in grams"
    });
    await userEvent.clear(field);
    await expect(field).toHaveAccessibleDescription("Enter an amount greater than zero.");
    await userEvent.type(field, "0.5");
    await expect(field).toHaveValue(0.5);
    await expect(field).not.toHaveAttribute("aria-invalid", "true");
  }
}`,...s.parameters?.docs?.source}}};const E=["Playground","Required","SubGram","Disabled","NativeDraft"];export{o as Disabled,s as NativeDraft,t as Playground,r as Required,n as SubGram,E as __namedExportsOrder,x as default};
