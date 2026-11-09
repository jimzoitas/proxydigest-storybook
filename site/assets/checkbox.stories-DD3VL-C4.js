import{j as c}from"./iframe-DgvZnKtv.js";/* empty css                      */import{C as m}from"./checkbox-CCvRjg_n.js";import{L as l}from"./label-CPJsvsW3.js";import{C as u}from"./catalog.examples-DLKY64EU.js";import"./preload-helper-PPVm8Dsz.js";import"./minus-0s0hIbe7.js";import"./useAriaLabelledBy-C2v0UWUV.js";import"./button-CEcYiQdY.js";import"./index-BWlKOsdO.js";import"./loader-circle-BsZrs7F6.js";import"./input-DTWVrd6t.js";import"./textarea-D7qlXksG.js";import"./switch-T4g98NFH.js";import"./radio-group-XMhZ7xiG.js";import"./roving-focus-0SK5-Aqb.js";import"./CompositeRoot-CLpK0Eip.js";import"./circle-CwHZP-HG.js";import"./CompositeItem-qKQIJE0X.js";import"./useCompositeItem-Dr13hnqh.js";import"./slider-UYb5RKBF.js";import"./valueToPercent-DfWH2vGw.js";import"./toggle-group-D6oIStAM.js";import"./card-LhCNN_F3.js";import"./badge-C-Jji8Kx.js";import"./alert-B2HkS6xL.js";import"./avatar-BapWT1f9.js";import"./separator-DZKac5zi.js";import"./Separator-BKJ0ZhJM.js";import"./skeleton-DwZsbo-S.js";import"./progress-DeKMlPS3.js";import"./tabs-ApBmGcl3.js";import"./accordion-BRTC14md.js";import"./accordion-mjjl12TU.js";import"./useCollapsiblePanel-jjkiJ8Ha.js";import"./collapsible-BPKkR0Kq.js";import"./dialog-BGED6ss2.js";import"./overlay-dialog-i6vPmHIw.js";import"./sheet-BSYc4zIC.js";import"./alert-dialog-C6IZFRS7.js";import"./hover-card-CbaK_QEc.js";import"./dropdown-menu-CuN8-u21.js";import"./menu-BIxLiaY6.js";import"./chevron-right-B8SZue5v.js";import"./context-menu-BkEuBydl.js";import"./calendar-DNqmRJEy.js";import"./chevron-left-96ijkid2.js";import"./resizable-38DPMN1p.js";import"./grip-vertical-Bc1r5WDV.js";import"./table-C0CN-w6L.js";import"./search-field-CzWqD7iz.js";import"./index.module-C-pw7-ZN.js";const{expect:p,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,he={title:"Components/Controls/Checkbox",id:"components-inputs-selection-checkbox",component:m,tags:["autodocs"],parameters:{layout:"padded",controls:{include:["size","defaultChecked","disabled","required"]},docs:{description:{component:"Use Checkbox for independent choices and Radio group for mutually exclusive choices. Checkbox defaults to large (18px at a 16px root). Set size to sm for a 14px control with tighter corners. Both sizes use Control tokens and show keyboard focus on the border. Use defaultChecked for the initial state or checked and onCheckedChange to control it. A mixed selection shows a dash. Set name, value and required for forms."}}},render:e=>c.jsxs(l,{className:"pf-story-toolbar",children:[c.jsx(m,{...e},String(e.defaultChecked)),"Vegan"]}),args:{size:"lg",defaultChecked:!1,disabled:!1,required:!1,"aria-label":"Vegan"},argTypes:{size:{control:"inline-radio",options:["lg","sm"],description:"Large is the 18px default. Small uses a 14px box with tighter corners. Box dimensions scale with the root font size.",table:{defaultValue:{summary:"lg"}}},defaultChecked:{control:"select",options:[!1,!0,"indeterminate"]},disabled:{control:"boolean"},required:{control:"boolean"}}},o={},r={...u},t={args:{size:void 0},play:async({canvasElement:e,args:d})=>{const n=g(e).getByRole("checkbox");await p(n).toHaveAttribute("data-control-size",d.size??"lg"),n.focus(),await h.keyboard(" "),await p(n).toBeChecked()}},a={args:{defaultChecked:"indeterminate"}},s={args:{disabled:!0}},i={args:{size:"lg",defaultChecked:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
