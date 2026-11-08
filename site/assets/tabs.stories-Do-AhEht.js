import{j as e}from"./iframe-6uZ_OvXJ.js";import{T as c,a as u,b as l,c as m}from"./tabs-C1EIt9oS.js";import{h as v}from"./catalog.examples-BgvDZJ6P.js";import"./preload-helper-PPVm8Dsz.js";import"./CompositeRoot-Av_o_W_V.js";import"./useCompositeItem-CEgqY0th.js";import"./button-A8HzViyP.js";import"./index-BIEDR5QJ.js";import"./loader-circle-DPzNQWfU.js";import"./input-xqFXePlz.js";import"./textarea-BIg20vtR.js";import"./label-ccPiVmVc.js";import"./checkbox-CzlPmnCo.js";import"./minus-CKlNa8RO.js";import"./useAriaLabelledBy-BKgySVsG.js";import"./switch-DwXRQgw2.js";import"./radio-group-DXhz-kFN.js";import"./roving-focus-0SK5-Aqb.js";import"./circle-BOSVkkPm.js";import"./CompositeItem-DiKjTF7g.js";import"./slider-pWyGG5M1.js";import"./valueToPercent-DfWH2vGw.js";import"./toggle-group-C1nrCotT.js";import"./card-DXFGhtzm.js";import"./badge-BfEYvfQV.js";import"./alert-Bkb9iOAA.js";import"./avatar-Dmq_uy83.js";import"./separator-CkvihxIh.js";import"./Separator-UJ0jSiK3.js";import"./skeleton-Bu9j_NfJ.js";import"./progress-Bxl1-gCx.js";import"./accordion-COmVAh8t.js";import"./accordion-DuKcutha.js";import"./useCollapsiblePanel-CEEvXl-2.js";import"./collapsible-D5z7BIl8.js";import"./dialog-DnvpmbSS.js";import"./overlay-dialog-_C1niahL.js";import"./sheet-024fQP7m.js";import"./alert-dialog-DLLLKdzA.js";import"./hover-card-B1VUedu_.js";import"./dropdown-menu-CH01PJiV.js";import"./menu-BB0nZVv8.js";import"./chevron-right-DQAu3Wv6.js";import"./context-menu-CQ8VtaHB.js";import"./calendar-BzrEEUDg.js";import"./chevron-left-ByPwEqFW.js";import"./resizable-Ct2OPLwJ.js";import"./grip-vertical-jKrZikSe.js";import"./table-BkUZ_KQS.js";import"./search-field-BYGbCLxi.js";import"./index.module-Db1hQFPV.js";const{expect:d,userEvent:g,within:b}=__STORYBOOK_MODULE_TEST__,ve={title:"Components/Navigation/Tabs",component:c,tags:["autodocs"],parameters:{layout:"padded",controls:{include:["defaultValue","orientation","activationMode","appearance"]},docs:{description:{component:"Switches between related panels without route navigation. defaultValue initializes selection; value/onValueChange is controlled. activationMode chooses automatic or manual keyboard activation, and orientation chooses the keyboard axis. appearance selects pill, underline, or underline-strong. Underline keeps ingredient sheet labels at medium weight; underline-strong uses bold selection and compact vertical inset for document/proposal sections. It does not change selection, mounting or keyboard behavior. Host layout owns flex growth, overflow and hidden overflow-tab measurement. Owned by navigation tokens."}}},render:a=>e.jsxs(c,{...a,children:[e.jsxs(u,{"aria-label":"Recipe sections",children:[e.jsx(l,{value:"overview",children:"Overview"}),e.jsx(l,{value:"nutrition",children:"Nutrition"})]}),e.jsx(m,{value:"overview",children:"Recipe summary"}),e.jsx(m,{value:"nutrition",children:"Nutrition information"})]},a.defaultValue),args:{defaultValue:"overview",orientation:"horizontal",activationMode:"automatic",appearance:"pill"},argTypes:{defaultValue:{control:"select",options:["overview","nutrition"]},orientation:{control:"select",options:["horizontal","vertical"]},activationMode:{control:"select",options:["automatic","manual"]},appearance:{control:"inline-radio",options:["pill","underline","underline-strong"]}}},o={},r={...v},t={play:async({canvasElement:a})=>{const s=b(a),p=s.getByRole("tab",{name:"Nutrition"});await g.click(p),await d(p).toHaveAttribute("aria-selected","true"),await d(s.getByRole("tabpanel")).toHaveTextContent("Nutrition information")}},n={args:{appearance:"underline"},play:t.play},i={args:{appearance:"underline-strong"},play:t.play};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...TabPanels
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const tab = canvas.getByRole("tab", {
      name: "Nutrition"
    });
    await userEvent.click(tab);
    await expect(tab).toHaveAttribute("aria-selected", "true");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Nutrition information");
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: "underline"
  },
  play: SwitchPanels.play
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: "underline-strong"
  },
  play: SwitchPanels.play
}`,...i.parameters?.docs?.source}}};const ge=["Playground","ExistingExample","SwitchPanels","Underline","StrongUnderline"];export{r as ExistingExample,o as Playground,i as StrongUnderline,t as SwitchPanels,n as Underline,ge as __namedExportsOrder,ve as default};
