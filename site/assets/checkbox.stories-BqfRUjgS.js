import{j as c}from"./iframe-AqpYXns4.js";/* empty css                      */import{C as m}from"./checkbox-TIyFUyNd.js";import{L as l}from"./label-1kzVJgIY.js";import{C as u}from"./catalog.examples-zcZL5Oir.js";import"./preload-helper-PPVm8Dsz.js";import"./minus-0yDLMIrp.js";import"./useAriaLabelledBy-Da9KhbUQ.js";import"./button-B5FjjXWS.js";import"./index-DEXj3--c.js";import"./loader-circle-mWFWE2W9.js";import"./input-DLCq6ZzS.js";import"./textarea-uF5bUZhh.js";import"./switch-Dq-T1JeF.js";import"./radio-group-BybVJGC9.js";import"./roving-focus-0SK5-Aqb.js";import"./CompositeRoot-yL7bK7Jd.js";import"./circle-Dg6ojZlj.js";import"./CompositeItem-D1wyjQOR.js";import"./useCompositeItem-QlszIeBN.js";import"./slider-BaUfZmPE.js";import"./valueToPercent-DfWH2vGw.js";import"./toggle-group-DO0OQdfk.js";import"./card-ByHHR2Jw.js";import"./badge-CQKobhLs.js";import"./alert-vS_dpmu2.js";import"./avatar-DTkZwYDb.js";import"./separator-C7Zm_6nS.js";import"./Separator-DssPvI5G.js";import"./skeleton-C_SNY4zC.js";import"./progress-CmLHBdmj.js";import"./tabs-D2cBF9Wg.js";import"./accordion-B6UeQwZ6.js";import"./accordion-0FBKGPj-.js";import"./useCollapsiblePanel-DOTGH3aY.js";import"./collapsible-DZyMQ3Bu.js";import"./dialog-DnXWbC45.js";import"./overlay-dialog-aVFq0bEi.js";import"./sheet-dNUUpp2U.js";import"./alert-dialog-DbGCTr1F.js";import"./hover-card-sY2GMIgd.js";import"./dropdown-menu-qZhg1f8R.js";import"./menu-DaKubz4c.js";import"./chevron-right-B3hyZT-D.js";import"./context-menu-B8gpNJM6.js";import"./calendar-V3NmEFls.js";import"./chevron-left-DLgfJc_O.js";import"./resizable-YZsVPkgn.js";import"./grip-vertical-Dizk5hed.js";import"./table-DOkc2t6b.js";import"./search-field-Geq7aFHv.js";import"./index.module-B2X8Wkxy.js";const{expect:p,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,he={title:"Components/Controls/Checkbox",id:"components-inputs-selection-checkbox",component:m,tags:["autodocs"],parameters:{layout:"padded",controls:{include:["size","defaultChecked","disabled","required"]},docs:{description:{component:"Use Checkbox for independent choices and Radio group for mutually exclusive choices. Checkbox defaults to large (18px at a 16px root). Set size to sm for a 14px control with tighter corners. Both sizes use Control tokens and show keyboard focus on the border. Use defaultChecked for the initial state or checked and onCheckedChange to control it. A mixed selection shows a dash. Set name, value and required for forms."}}},render:e=>c.jsxs(l,{className:"pf-story-toolbar",children:[c.jsx(m,{...e},String(e.defaultChecked)),"Vegan"]}),args:{size:"lg",defaultChecked:!1,disabled:!1,required:!1,"aria-label":"Vegan"},argTypes:{size:{control:"inline-radio",options:["lg","sm"],description:"Large is the 18px default. Small uses a 14px box with tighter corners. Box dimensions scale with the root font size.",table:{defaultValue:{summary:"lg"}}},defaultChecked:{control:"select",options:[!1,!0,"indeterminate"]},disabled:{control:"boolean"},required:{control:"boolean"}}},o={},r={...u},t={args:{size:void 0},play:async({canvasElement:e,args:d})=>{const n=g(e).getByRole("checkbox");await p(n).toHaveAttribute("data-control-size",d.size??"lg"),n.focus(),await h.keyboard(" "),await p(n).toBeChecked()}},a={args:{defaultChecked:"indeterminate"}},s={args:{disabled:!0}},i={args:{size:"lg",defaultChecked:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...Checkboxes
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: undefined
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const checkbox = within(canvasElement).getByRole("checkbox");
    await expect(checkbox).toHaveAttribute("data-control-size", args.size ?? "lg");
    checkbox.focus();
    await userEvent.keyboard(" ");
    await expect(checkbox).toBeChecked();
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: "indeterminate"
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg",
    defaultChecked: true
  }
}`,...i.parameters?.docs?.source}}};const ge=["Playground","ExistingExample","KeyboardSelection","Indeterminate","Disabled","Large"];export{s as Disabled,r as ExistingExample,a as Indeterminate,t as KeyboardSelection,i as Large,o as Playground,ge as __namedExportsOrder,he as default};
