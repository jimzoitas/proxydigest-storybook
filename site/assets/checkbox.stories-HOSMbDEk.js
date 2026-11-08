import{j as c}from"./iframe-6uZ_OvXJ.js";/* empty css                      */import{C as m}from"./checkbox-CzlPmnCo.js";import{L as l}from"./label-ccPiVmVc.js";import{C as u}from"./catalog.examples-BgvDZJ6P.js";import"./preload-helper-PPVm8Dsz.js";import"./minus-CKlNa8RO.js";import"./useAriaLabelledBy-BKgySVsG.js";import"./button-A8HzViyP.js";import"./index-BIEDR5QJ.js";import"./loader-circle-DPzNQWfU.js";import"./input-xqFXePlz.js";import"./textarea-BIg20vtR.js";import"./switch-DwXRQgw2.js";import"./radio-group-DXhz-kFN.js";import"./roving-focus-0SK5-Aqb.js";import"./CompositeRoot-Av_o_W_V.js";import"./circle-BOSVkkPm.js";import"./CompositeItem-DiKjTF7g.js";import"./useCompositeItem-CEgqY0th.js";import"./slider-pWyGG5M1.js";import"./valueToPercent-DfWH2vGw.js";import"./toggle-group-C1nrCotT.js";import"./card-DXFGhtzm.js";import"./badge-BfEYvfQV.js";import"./alert-Bkb9iOAA.js";import"./avatar-Dmq_uy83.js";import"./separator-CkvihxIh.js";import"./Separator-UJ0jSiK3.js";import"./skeleton-Bu9j_NfJ.js";import"./progress-Bxl1-gCx.js";import"./tabs-C1EIt9oS.js";import"./accordion-COmVAh8t.js";import"./accordion-DuKcutha.js";import"./useCollapsiblePanel-CEEvXl-2.js";import"./collapsible-D5z7BIl8.js";import"./dialog-DnvpmbSS.js";import"./overlay-dialog-_C1niahL.js";import"./sheet-024fQP7m.js";import"./alert-dialog-DLLLKdzA.js";import"./hover-card-B1VUedu_.js";import"./dropdown-menu-CH01PJiV.js";import"./menu-BB0nZVv8.js";import"./chevron-right-DQAu3Wv6.js";import"./context-menu-CQ8VtaHB.js";import"./calendar-BzrEEUDg.js";import"./chevron-left-ByPwEqFW.js";import"./resizable-Ct2OPLwJ.js";import"./grip-vertical-jKrZikSe.js";import"./table-BkUZ_KQS.js";import"./search-field-BYGbCLxi.js";import"./index.module-Db1hQFPV.js";const{expect:p,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,he={title:"Components/Controls/Checkbox",id:"components-inputs-selection-checkbox",component:m,tags:["autodocs"],parameters:{layout:"padded",controls:{include:["size","defaultChecked","disabled","required"]},docs:{description:{component:"Use Checkbox for independent choices and Radio group for mutually exclusive choices. Checkbox defaults to large (18px at a 16px root). Set size to sm for a 14px control with tighter corners. Both sizes use Control tokens and show keyboard focus on the border. Use defaultChecked for the initial state or checked and onCheckedChange to control it. A mixed selection shows a dash. Set name, value and required for forms."}}},render:e=>c.jsxs(l,{className:"pf-story-toolbar",children:[c.jsx(m,{...e},String(e.defaultChecked)),"Vegan"]}),args:{size:"lg",defaultChecked:!1,disabled:!1,required:!1,"aria-label":"Vegan"},argTypes:{size:{control:"inline-radio",options:["lg","sm"],description:"Large is the 18px default. Small uses a 14px box with tighter corners. Box dimensions scale with the root font size.",table:{defaultValue:{summary:"lg"}}},defaultChecked:{control:"select",options:[!1,!0,"indeterminate"]},disabled:{control:"boolean"},required:{control:"boolean"}}},o={},r={...u},t={args:{size:void 0},play:async({canvasElement:e,args:d})=>{const n=g(e).getByRole("checkbox");await p(n).toHaveAttribute("data-control-size",d.size??"lg"),n.focus(),await h.keyboard(" "),await p(n).toBeChecked()}},a={args:{defaultChecked:"indeterminate"}},s={args:{disabled:!0}},i={args:{size:"lg",defaultChecked:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
