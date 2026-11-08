import{j as c}from"./iframe-nhB53rPD.js";/* empty css                      */import{C as m}from"./checkbox-C9bOlqce.js";import{L as l}from"./label-CIA21tYv.js";import{C as u}from"./catalog.examples-BkhE3kuZ.js";import"./preload-helper-PPVm8Dsz.js";import"./minus-XaXcKlev.js";import"./useAriaLabelledBy-D8Oa7trO.js";import"./button-_tcBhp5_.js";import"./index-8Dbc_Jva.js";import"./loader-circle-MxHlgpxw.js";import"./input-CAdeD_xm.js";import"./textarea-DEsuPIgK.js";import"./switch-uMj7V9v_.js";import"./radio-group-BjJ6ZVS9.js";import"./roving-focus-0SK5-Aqb.js";import"./CompositeRoot-B0On-XqY.js";import"./circle-Byfpv97O.js";import"./CompositeItem-D_8UuHC1.js";import"./useCompositeItem-BquT0LDd.js";import"./slider-DsOFUM94.js";import"./valueToPercent-DfWH2vGw.js";import"./toggle-group-WfIKaqgN.js";import"./card-CGu-joF2.js";import"./badge-DF9-aVgV.js";import"./alert-CuymrseY.js";import"./avatar-C4hdJ-kW.js";import"./separator-Dmg9cS_7.js";import"./Separator-RhxJSB-Q.js";import"./skeleton-CMUv0H3w.js";import"./progress-u2AUM0_6.js";import"./tabs-Fq9_gDeO.js";import"./accordion-B67wbHOw.js";import"./accordion-CHExsbqI.js";import"./useCollapsiblePanel-DVMF6qnG.js";import"./collapsible-pI4oVkh3.js";import"./dialog-CyBaw9zK.js";import"./overlay-dialog-Co5KED9w.js";import"./sheet-L7clkwH-.js";import"./alert-dialog-sQE9WhqY.js";import"./hover-card-DUsLCMGr.js";import"./dropdown-menu-6QYTqNVQ.js";import"./menu-DyIs6xZo.js";import"./chevron-right-CavErG_J.js";import"./context-menu-BgHQWO9B.js";import"./calendar-CXIh8-zC.js";import"./chevron-left-Dcrje28Y.js";import"./resizable-kngELX8h.js";import"./grip-vertical-Cr-UETSo.js";import"./table-DKvxVw7S.js";import"./search-field-Dneu7mbv.js";import"./index.module-B262ysEo.js";const{expect:p,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,he={title:"Components/Controls/Checkbox",id:"components-inputs-selection-checkbox",component:m,tags:["autodocs"],parameters:{layout:"padded",controls:{include:["size","defaultChecked","disabled","required"]},docs:{description:{component:"Use Checkbox for independent choices and Radio group for mutually exclusive choices. Checkbox defaults to large (18px at a 16px root). Set size to sm for a 14px control with tighter corners. Both sizes use Control tokens and show keyboard focus on the border. Use defaultChecked for the initial state or checked and onCheckedChange to control it. A mixed selection shows a dash. Set name, value and required for forms."}}},render:e=>c.jsxs(l,{className:"pf-story-toolbar",children:[c.jsx(m,{...e},String(e.defaultChecked)),"Vegan"]}),args:{size:"lg",defaultChecked:!1,disabled:!1,required:!1,"aria-label":"Vegan"},argTypes:{size:{control:"inline-radio",options:["lg","sm"],description:"Large is the 18px default. Small uses a 14px box with tighter corners. Box dimensions scale with the root font size.",table:{defaultValue:{summary:"lg"}}},defaultChecked:{control:"select",options:[!1,!0,"indeterminate"]},disabled:{control:"boolean"},required:{control:"boolean"}}},o={},r={...u},t={args:{size:void 0},play:async({canvasElement:e,args:d})=>{const n=g(e).getByRole("checkbox");await p(n).toHaveAttribute("data-control-size",d.size??"lg"),n.focus(),await h.keyboard(" "),await p(n).toBeChecked()}},a={args:{defaultChecked:"indeterminate"}},s={args:{disabled:!0}},i={args:{size:"lg",defaultChecked:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
