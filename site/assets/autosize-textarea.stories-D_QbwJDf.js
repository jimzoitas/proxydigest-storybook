import{j as a,C as h,S as f,r as c}from"./iframe-nhB53rPD.js";import{i as b}from"./input-size-control-Du2i_Jmn.js";import{A as y}from"./textarea-autosize-DCREtnDJ.js";import{B as v}from"./button-_tcBhp5_.js";import"./preload-helper-PPVm8Dsz.js";import"./input-sizes-BpjnQGTk.js";import"./index-8Dbc_Jva.js";import"./loader-circle-MxHlgpxw.js";const{expect:s,userEvent:m,within:p}=__STORYBOOK_MODULE_TEST__;function w({draft:t,error:e,errorMessage:d,...u}){const[x,l]=c.useState(t);return c.useEffect(()=>l(t),[t]),a.jsxs("div",{className:"pf-story-autosize-textarea-preview",children:[a.jsx(y,{...u,error:typeof e=="string"?e:e?d||!0:!1,value:x,onChange:g=>l(g.target.value)}),a.jsx(v,{variant:"outline",onClick:()=>l(t),children:"Reset example"})]})}const A={title:"Components/Inputs/Autosize Textarea",id:"components-inputs-selection-autosize-textarea",component:w,tags:["autodocs"],args:{label:"Prompt draft",labelPosition:"top",error:!1,errorMessage:"Review this field.",readOnly:!1,controlSize:"medium",draft:"",maxHeight:180,maxChars:100,disabled:!1},argTypes:{label:{type:"string",control:"text"},labelPosition:{type:"string",control:"inline-radio",options:["top","left","hidden"]},prefixAdornment:{type:"string",control:"inline-radio",options:["none","text","icon"],mapping:{none:void 0,text:"USD",icon:a.jsx(f,{"aria-hidden":"true"})},description:"Decorative prefix. Numerical prefix formatting remains a separate option."},suffixAdornment:{type:"string",control:"inline-radio",options:["none","text","icon"],mapping:{none:void 0,text:"kg",icon:a.jsx(h,{"aria-hidden":"true"})},description:"Decorative suffix. Numerical suffix formatting remains a separate option."},error:{type:"boolean",control:"boolean"},errorMessage:{type:"string",control:"text",if:{arg:"error",eq:!0},description:"Visible error message; empty keeps the invalid state without a message."},readOnly:{type:"boolean",control:"boolean"},controlSize:b,draft:{control:"text"},minHeight:{control:"number"},maxHeight:{control:"number"},maxChars:{control:"number"},disabled:{type:"boolean",control:"boolean"}},parameters:{docs:{description:{component:"AutosizeTextarea accepts native textarea props plus minHeight, maxHeight and maxChars. A controlled value/onChange keeps the counter current; the imperative ref exposes textArea/minHeight/maxHeight. maxChars is a warning threshold, **not a strict maximum**: the native maxlength is maxChars+5 so the over-limit state can appear. Host code must validate before submitting and provide a label. Draft seeds and Reset are fixture controls; actual geometry on content/viewport changes needs browser verification. Size sets the initial field height. The field grows with the draft, within the supplied bounds."}}}},r={play:async({canvasElement:t})=>{const e=p(t);await m.type(e.getByRole("textbox",{name:"Prompt draft"}),"Local draft"),await s(e.getByText("11 / 100")).toBeVisible(),await m.click(e.getByRole("button",{name:"Reset example"})),await s(e.getByRole("textbox",{name:"Prompt draft"})).toHaveValue("")}},n={args:{draft:`First requirement
Second requirement
Third requirement
Fourth requirement`}},o={args:{maxChars:10,draft:"Twelve chars"},play:async({canvasElement:t})=>{const e=p(t);await s(e.getByText("12 / 10")).toBeVisible(),await s(e.getByRole("textbox",{name:"Prompt draft"})).toHaveAttribute("maxlength","15")}},i={args:{draft:"Read-only while disabled",disabled:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await userEvent.type(c.getByRole("textbox", {
      name: "Prompt draft"
    }), "Local draft");
    await expect(c.getByText("11 / 100")).toBeVisible();
    await userEvent.click(c.getByRole("button", {
      name: "Reset example"
    }));
    await expect(c.getByRole("textbox", {
      name: "Prompt draft"
    })).toHaveValue("");
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    draft: "First requirement\\nSecond requirement\\nThird requirement\\nFourth requirement"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    maxChars: 10,
    draft: "Twelve chars"
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await expect(c.getByText("12 / 10")).toBeVisible();
    await expect(c.getByRole("textbox", {
      name: "Prompt draft"
    })).toHaveAttribute("maxlength", "15");
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    draft: "Read-only while disabled",
    disabled: true
  }
}`,...i.parameters?.docs?.source}}};const q=["Playground","Multiline","OverLimit","Disabled"];export{i as Disabled,n as Multiline,o as OverLimit,r as Playground,q as __namedExportsOrder,A as default};
