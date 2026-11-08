import{j as m,C as f,S as x}from"./iframe-nhB53rPD.js";/* empty css                      */import{N as g}from"./number-field-DCKprIQw.js";import{N as b}from"./number-input-DGe5qE3P.js";import{i as y}from"./input-sizes-BpjnQGTk.js";import"./preload-helper-PPVm8Dsz.js";import"./input-CAdeD_xm.js";import"./input-field-CqPzWEoF.js";const{expect:d,fn:v,userEvent:n,within:S}=__STORYBOOK_MODULE_TEST__,T={title:"Components/Inputs/Number input",id:"components-inputs-selection-number-input",component:g,tags:["autodocs"],parameters:{docs:{description:{component:"Formatted numeric input backed by react-number-format. value is a number; onValueChange emits a number or null for an empty field. min/max clamp on blur, not while typing. prefix, suffix, thousandSeparator and decimalScale change display without changing the numeric callback. autoSize sizes to content; isLoading displays a spinner and does not disable editing. Native input props and refs are forwarded. Labels support top, left and visually hidden positions. Decorative prefixAdornment/suffixAdornment slots are separate from numeric prefix/suffix formatting. Error messages, read-only and disabled states retain the numerical callback API."}},controls:{include:["label","labelPosition","prefixAdornment","suffixAdornment","error","errorMessage","value","controlSize","min","max","prefix","suffix","thousandSeparator","decimalScale","fixedDecimalScale","autoSize","isLoading","disabled","readOnly","placeholder"]}},args:{label:"Amount",labelPosition:"top",error:!1,errorMessage:"Review this field.",value:12.5,controlSize:"medium",min:0,max:100,prefix:"",suffix:" kg",thousandSeparator:"",decimalScale:2,fixedDecimalScale:!1,autoSize:!1,isLoading:!1,disabled:!1,readOnly:!1,placeholder:"Enter amount","aria-label":"Amount",onValueChange:v()},argTypes:{label:{type:"string",control:"text"},labelPosition:{type:"string",control:"inline-radio",options:["top","left","hidden"]},prefixAdornment:{type:"string",control:"inline-radio",options:["none","text","icon"],mapping:{none:void 0,text:"USD",icon:m.jsx(x,{"aria-hidden":"true"})},description:"Decorative prefix. Numerical prefix formatting remains a separate option."},suffixAdornment:{type:"string",control:"inline-radio",options:["none","text","icon"],mapping:{none:void 0,text:"kg",icon:m.jsx(f,{"aria-hidden":"true"})},description:"Decorative suffix. Numerical suffix formatting remains a separate option."},error:{type:"boolean",control:"boolean"},errorMessage:{type:"string",control:"text",if:{arg:"error",eq:!0},description:"Visible error message; empty keeps the invalid state without a message."},value:{control:"number"},controlSize:{type:"string",control:"inline-radio",options:y},min:{control:"number"},max:{control:"number"},prefix:{control:"text"},suffix:{control:"text"},thousandSeparator:{control:"select",options:["",","," "]},decimalScale:{control:{type:"number",min:0,max:6}},fixedDecimalScale:{control:"boolean"},autoSize:{control:"boolean"},isLoading:{control:"boolean"},disabled:{type:"boolean",control:"boolean"},readOnly:{type:"boolean",control:"boolean"},placeholder:{control:"text"}},render:({error:t,errorMessage:a,...e})=>m.jsx(b,{...e,error:typeof t=="string"?t:t?a||!0:!1,"aria-label":e.label?void 0:e["aria-label"]},String(e.value))},r={},o={args:{value:1234.5,min:0,max:1e4,prefix:"$",suffix:"",thousandSeparator:",",fixedDecimalScale:!0}},i={args:{value:37.5,suffix:"%",autoSize:!0}},s={args:{value:void 0,suffix:""}},l={args:{isLoading:!0}},c={args:{disabled:!0}},u={args:{readOnly:!0}},p={args:{value:12,suffix:""},play:async({canvasElement:t})=>{const a=S(t),e=a.getByRole("textbox",{name:"Amount"});await n.clear(e),await n.type(e,"150"),await d(a.getByLabelText("Numeric value")).toHaveTextContent("150"),await n.click(a.getByRole("button",{name:"Finish editing"})),await d(e).toHaveValue("100"),await n.clear(e),await d(a.getByLabelText("Numeric value")).toHaveTextContent("empty")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: 1234.5,
    min: 0,
    max: 10000,
    prefix: "$",
    suffix: "",
    thousandSeparator: ",",
    fixedDecimalScale: true
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    value: 37.5,
    suffix: "%",
    autoSize: true
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: undefined,
    suffix: ""
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    value: 12,
    suffix: ""
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox", {
      name: "Amount"
    });
    await userEvent.clear(input);
    await userEvent.type(input, "150");
    await expect(canvas.getByLabelText("Numeric value")).toHaveTextContent("150");
    await userEvent.click(canvas.getByRole("button", {
      name: "Finish editing"
    }));
    await expect(input).toHaveValue("100");
    await userEvent.clear(input);
    await expect(canvas.getByLabelText("Numeric value")).toHaveTextContent("empty");
  }
}`,...p.parameters?.docs?.source}}};const z=["Playground","Currency","Percentage","Empty","Loading","Disabled","ReadOnly","ClampOnBlur"];export{p as ClampOnBlur,o as Currency,c as Disabled,s as Empty,l as Loading,i as Percentage,r as Playground,u as ReadOnly,z as __namedExportsOrder,T as default};
