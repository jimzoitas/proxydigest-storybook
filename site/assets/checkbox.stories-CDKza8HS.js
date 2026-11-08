import{j as c}from"./iframe-BXubdNpd.js";/* empty css                      */import{C as m}from"./checkbox-R9lg0Zy-.js";import{L as l}from"./label-B-ScEoCq.js";import{C as u}from"./catalog.examples-Cwih8HVY.js";import"./preload-helper-PPVm8Dsz.js";import"./minus-BU5OS2V8.js";import"./useAriaLabelledBy-Dlr4qUIQ.js";import"./button-DOg3bB7T.js";import"./index-DKWiT4Fi.js";import"./loader-circle-WJxMtqtu.js";import"./input-BWeqiJDe.js";import"./textarea-DKtx55-C.js";import"./switch-Bg3CCUCR.js";import"./radio-group-aNY93vS4.js";import"./roving-focus-0SK5-Aqb.js";import"./CompositeRoot-DuK6i5O1.js";import"./circle-COTDYbAV.js";import"./CompositeItem-CBKa8E3y.js";import"./useCompositeItem-Bi8YYZ7L.js";import"./slider-DyoUiGUN.js";import"./valueToPercent-DfWH2vGw.js";import"./toggle-group-D27B5ejm.js";import"./card-DpxWWElH.js";import"./badge-C4iUsAGF.js";import"./alert-Bzvx4AKs.js";import"./avatar-ZNaHiu8f.js";import"./separator-BKKMk4Xo.js";import"./Separator-DI4aBzER.js";import"./skeleton-BP5S_qG6.js";import"./progress-DkREujyU.js";import"./tabs-BrnZ_xpj.js";import"./accordion-CFT7Mw6-.js";import"./accordion-B-A_a53W.js";import"./useCollapsiblePanel-C5JKJn3w.js";import"./collapsible-BboTV2_X.js";import"./dialog-Gbr7wu8m.js";import"./overlay-dialog-CQZe9RQv.js";import"./sheet-C-ICznI3.js";import"./alert-dialog-BBDZ61Tm.js";import"./hover-card-DOvxW5L6.js";import"./dropdown-menu-DwRzzotf.js";import"./menu-B8QO56XI.js";import"./chevron-right-Bt7v18gP.js";import"./context-menu-BnFk_3DL.js";import"./calendar-BP-114aW.js";import"./chevron-left-fIYzLx4k.js";import"./resizable-CUcWS4h4.js";import"./grip-vertical-B-odIx2N.js";import"./table-BVVgfhwV.js";import"./search-field-DLF5WVFc.js";import"./index.module-B6UitgKw.js";const{expect:p,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,he={title:"Components/Controls/Checkbox",id:"components-inputs-selection-checkbox",component:m,tags:["autodocs"],parameters:{layout:"padded",controls:{include:["size","defaultChecked","disabled","required"]},docs:{description:{component:"Use Checkbox for independent choices and Radio group for mutually exclusive choices. Checkbox defaults to large (18px at a 16px root). Set size to sm for a 14px control with tighter corners. Both sizes use Control tokens and show keyboard focus on the border. Use defaultChecked for the initial state or checked and onCheckedChange to control it. A mixed selection shows a dash. Set name, value and required for forms."}}},render:e=>c.jsxs(l,{className:"pf-story-toolbar",children:[c.jsx(m,{...e},String(e.defaultChecked)),"Vegan"]}),args:{size:"lg",defaultChecked:!1,disabled:!1,required:!1,"aria-label":"Vegan"},argTypes:{size:{control:"inline-radio",options:["lg","sm"],description:"Large is the 18px default. Small uses a 14px box with tighter corners. Box dimensions scale with the root font size.",table:{defaultValue:{summary:"lg"}}},defaultChecked:{control:"select",options:[!1,!0,"indeterminate"]},disabled:{control:"boolean"},required:{control:"boolean"}}},o={},r={...u},t={args:{size:void 0},play:async({canvasElement:e,args:d})=>{const n=g(e).getByRole("checkbox");await p(n).toHaveAttribute("data-control-size",d.size??"lg"),n.focus(),await h.keyboard(" "),await p(n).toBeChecked()}},a={args:{defaultChecked:"indeterminate"}},s={args:{disabled:!0}},i={args:{size:"lg",defaultChecked:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
