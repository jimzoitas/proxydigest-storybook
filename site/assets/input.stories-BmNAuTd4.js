import{j as e,S as g,C as b}from"./iframe-AqpYXns4.js";/* empty css                      */import{I as f}from"./input-field-BL2Hx9MY.js";import{I as x}from"./input-DLCq6ZzS.js";import{N as v}from"./number-field-DZ29WMCg.js";import{i as S}from"./input-sizes-rXXyHHIZ.js";import{N as h}from"./number-input-R-uzubbZ.js";import"./preload-helper-PPVm8Dsz.js";const z={title:"Components/Inputs/Input",id:"components-inputs-selection-input",component:f,subcomponents:{Input:x,NumberInput:v},tags:["autodocs"],parameters:{layout:"padded",controls:{include:["label","labelPosition","prefixAdornment","suffixAdornment","error","errorMessage","Variant","value","min","max","thousandSeparator","decimalScale","fixedDecimalScale","prefix","suffix","autoSize","isLoading","defaultValue","placeholder","type","Size","disabled","readOnly","required","aria-invalid","leadingIcon","leadingIconSpacing","trailingAdornment"]},docs:{description:{component:"Text uses native input events, values, types and refs. Numerical uses NumberInput’s number-or-null change callback, number formatting and min/max clamp on blur. Both support 28px, 32px, 36px and 40px heights through controlSize. The existing Input and NumberInput APIs remain available. Provide a visible label in forms."}}},render:({error:n,errorMessage:d,...u})=>{const a={...u,error:typeof n=="string"?n:n?d||!0:!1};return a.variant==="numerical"?e.jsx(h,{...a,"aria-label":a.label?void 0:a["aria-label"]},String(a.value)):e.jsx("div",{className:"pf-story-narrow-frame",children:e.jsx(f,{...a,"aria-label":a.label?void 0:a["aria-label"]},String(a.defaultValue))})},args:{label:"Recipe name",labelPosition:"top",error:!1,errorMessage:"Review this field.",variant:"text",controlSize:"medium",defaultValue:"Oat drink",placeholder:"Recipe name",type:"text",disabled:!1,readOnly:!1,required:!1,"aria-invalid":!1,"aria-label":"Recipe name"},argTypes:{label:{type:"string",control:"text"},labelPosition:{type:"string",control:"inline-radio",options:["top","left","hidden"]},prefixAdornment:{type:"string",control:"inline-radio",options:["none","text","icon"],mapping:{none:void 0,text:"USD",icon:e.jsx(g,{"aria-hidden":"true"})},description:"Decorative prefix. Numerical prefix formatting remains a separate option."},suffixAdornment:{type:"string",control:"inline-radio",options:["none","text","icon"],mapping:{none:void 0,text:"kg",icon:e.jsx(b,{"aria-hidden":"true"})},description:"Decorative suffix. Numerical suffix formatting remains a separate option."},error:{type:"boolean",control:"boolean"},errorMessage:{type:"string",control:"text",if:{arg:"error",eq:!0},description:"Visible error message; empty keeps the invalid state without a message."},variant:{name:"Variant",type:"string",control:{type:"inline-radio",labels:{text:"Text",numerical:"Number"}},options:["text","numerical"]},value:{control:"number",if:{arg:"variant",eq:"numerical"}},min:{control:"number",if:{arg:"variant",eq:"numerical"}},max:{control:"number",if:{arg:"variant",eq:"numerical"}},prefix:{control:"text",if:{arg:"variant",eq:"numerical"}},suffix:{control:"text",if:{arg:"variant",eq:"numerical"}},thousandSeparator:{control:"select",options:["",","," "],if:{arg:"variant",eq:"numerical"}},decimalScale:{control:{type:"number",min:0,max:6},if:{arg:"variant",eq:"numerical"}},fixedDecimalScale:{control:"boolean",if:{arg:"variant",eq:"numerical"}},autoSize:{control:"boolean",if:{arg:"variant",eq:"numerical"}},isLoading:{control:"boolean",if:{arg:"variant",eq:"numerical"}},defaultValue:{control:"text",if:{arg:"variant",eq:"text"}},placeholder:{control:"text"},type:{if:{arg:"variant",eq:"text"},control:"select",options:["text","email","password","number","search"]},disabled:{type:"boolean",control:"boolean"},readOnly:{type:"boolean",control:"boolean"},required:{control:"boolean"},"aria-invalid":{control:"boolean"},leadingIcon:{if:{arg:"variant",eq:"text"},control:"radio",options:["none","search"],mapping:{none:void 0,search:e.jsx(g,{})}},trailingAdornment:{control:"text",if:{arg:"variant",eq:"text"}},controlSize:{name:"Size",type:"string",control:{type:"inline-radio",labels:{xsmall:"XSmall (28px)",small:"Small (32px)",medium:"Medium (36px)",regular:"Regular (40px)"}},options:S,description:"Field height. XSmall is 28px, Small is 32px, Medium is 36px and Regular is 40px. Medium is the default."},leadingIconSpacing:{if:{arg:"variant",eq:"text"},control:"radio",options:["compact","default","spacious"],description:"Leading-icon clearance: 28px, 36px or 40px. Field height and input events are unchanged."}}},i={},o={args:{"aria-invalid":!0,"aria-describedby":"input-error"},render:({error:n,errorMessage:d,...u})=>e.jsxs("div",{className:"pf-story-narrow-frame",children:[e.jsx(f,{...u,error:typeof n=="string"?n:n?d||!0:!1}),e.jsx("p",{id:"input-error",children:"Enter a valid recipe name."})]})},t={args:{disabled:!0}},r={args:{leadingIcon:e.jsx(g,{}),label:"Search members",placeholder:"Search members","aria-label":"Search members",defaultValue:""}},s={args:{trailingAdornment:"g",label:"Amount in grams",type:"number",defaultValue:"100","aria-label":"Amount in grams"}},l={...r,args:{...r.args,leadingIconSpacing:"compact"}},c={...r,args:{...r.args,leadingIconSpacing:"spacious"}},m={args:{controlSize:"compact"}},p={args:{variant:"numerical",label:"Amount",value:12.5,suffix:" kg",decimalScale:2,"aria-label":"Amount"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-invalid": true,
    "aria-describedby": "input-error"
  },
  render: ({
    error,
    errorMessage,
    ...args
  }: InputStoryArgs) => <div className="pf-story-narrow-frame">
      <InputField {...args} error={typeof error === "string" ? error : error ? errorMessage || true : false} />
      <p id="input-error">Enter a valid recipe name.</p>
    </div>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    leadingIcon: <Search />,
    label: "Search members",
    placeholder: "Search members",
    "aria-label": "Search members",
    defaultValue: ""
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    trailingAdornment: "g",
    label: "Amount in grams",
    type: "number",
    defaultValue: "100",
    "aria-label": "Amount in grams"
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...LeadingIcon,
  args: {
    ...LeadingIcon.args,
    leadingIconSpacing: "compact"
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...LeadingIcon,
  args: {
    ...LeadingIcon.args,
    leadingIconSpacing: "spacious"
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    controlSize: "compact"
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "numerical",
    label: "Amount",
    value: 12.5,
    suffix: " kg",
    decimalScale: 2,
    "aria-label": "Amount"
  }
}`,...p.parameters?.docs?.source}}};const C=["Playground","Invalid","Disabled","LeadingIcon","TrailingUnit","CompactLeadingIcon","SpaciousLeadingIcon","Compact","Numerical"];export{m as Compact,l as CompactLeadingIcon,t as Disabled,o as Invalid,r as LeadingIcon,p as Numerical,i as Playground,c as SpaciousLeadingIcon,s as TrailingUnit,C as __namedExportsOrder,z as default};
