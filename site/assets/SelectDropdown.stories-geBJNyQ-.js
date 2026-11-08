import{j as c,r as u}from"./iframe-6uZ_OvXJ.js";import{i as b}from"./input-sizes-Bu-3fNTK.js";/* empty css                      */import{S as w}from"./index-CpoOuYZl.js";import"./preload-helper-PPVm8Dsz.js";const{expect:d,userEvent:m,within:v}=__STORYBOOK_MODULE_TEST__;function g(e){const[o,a]=u.useState(e.value);return u.useEffect(()=>a(e.value),[e.value]),c.jsxs("div",{className:"pf-story-select-dropdown-preview",children:[c.jsx(w,{...e,value:o,onChange:p=>{a(p),e.onChange?.(p)}}),c.jsxs("p",{role:"status",className:"pf-story-note",children:["Selected value: ",o||"none"]})]})}const R={title:"Components/Inputs/Select Dropdown",id:"components-inputs-selection-select-dropdown",component:w,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Application single-choice wrapper around Select. Supply options with string values, optional descriptions and disabled items; the selected trigger shows only the label. value/onChange is the public controlled contract. The fixture owns that value and reports the selection below. This wrapper does not expose an accessible-name prop; use the lower-level Select composition when a labelled form control is required."}}},args:{options:[{value:"draft",label:"Draft",description:"Still being edited"},{value:"review",label:"Ready for review",description:"Available to reviewers"},{value:"archived",label:"Archived",disabled:!0}],value:"",placeholder:"Choose status",disabled:!1},argTypes:{controlSize:{control:"inline-radio",options:b},value:{control:"select",options:["","draft","review"]},disabled:{control:"boolean"},placeholder:{control:"text"},options:{control:"object"},onChange:{action:"selection changed"}},render:e=>c.jsx(g,{...e})},t={},r={args:{value:"review"}},n={args:{value:"draft",disabled:!0}},s={args:{options:[{value:"draft",label:"Draft"},{value:"review",label:"Ready for review"}]}},i={args:{options:[]}},l={play:async({canvasElement:e})=>{const o=v(e);await m.click(o.getByRole("combobox"));const a=v(document.body);await d(await a.findByRole("option",{name:"Archived"})).toHaveAttribute("aria-disabled","true"),await m.click(a.getByRole("option",{name:/Ready for review/})),await d(o.getByRole("status")).toHaveTextContent("Selected value: review"),await d(o.getByRole("combobox")).toHaveTextContent("Ready for review")}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    value: "review"
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    value: "draft",
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      value: "draft",
      label: "Draft"
    }, {
      value: "review",
      label: "Ready for review"
    }]
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    options: []
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("combobox"));
    const menu = within(document.body);
    await expect(await menu.findByRole("option", {
      name: "Archived"
    })).toHaveAttribute("aria-disabled", "true");
    await userEvent.click(menu.getByRole("option", {
      name: /Ready for review/
    }));
    await expect(canvas.getByRole("status")).toHaveTextContent("Selected value: review");
    await expect(canvas.getByRole("combobox")).toHaveTextContent("Ready for review");
  }
}`,...l.parameters?.docs?.source}}};const C=["Playground","Selected","Disabled","PlainOptions","EmptyOptions","ChooseOption"];export{l as ChooseOption,n as Disabled,i as EmptyOptions,s as PlainOptions,t as Playground,r as Selected,C as __namedExportsOrder,R as default};
