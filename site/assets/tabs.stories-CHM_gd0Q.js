import{j as e}from"./iframe-AqpYXns4.js";import{T as c,a as u,b as l,c as m}from"./tabs-D2cBF9Wg.js";import{h as v}from"./catalog.examples-zcZL5Oir.js";import"./preload-helper-PPVm8Dsz.js";import"./CompositeRoot-yL7bK7Jd.js";import"./useCompositeItem-QlszIeBN.js";import"./button-B5FjjXWS.js";import"./index-DEXj3--c.js";import"./loader-circle-mWFWE2W9.js";import"./input-DLCq6ZzS.js";import"./textarea-uF5bUZhh.js";import"./label-1kzVJgIY.js";import"./checkbox-TIyFUyNd.js";import"./minus-0yDLMIrp.js";import"./useAriaLabelledBy-Da9KhbUQ.js";import"./switch-Dq-T1JeF.js";import"./radio-group-BybVJGC9.js";import"./roving-focus-0SK5-Aqb.js";import"./circle-Dg6ojZlj.js";import"./CompositeItem-D1wyjQOR.js";import"./slider-BaUfZmPE.js";import"./valueToPercent-DfWH2vGw.js";import"./toggle-group-DO0OQdfk.js";import"./card-ByHHR2Jw.js";import"./badge-CQKobhLs.js";import"./alert-vS_dpmu2.js";import"./avatar-DTkZwYDb.js";import"./separator-C7Zm_6nS.js";import"./Separator-DssPvI5G.js";import"./skeleton-C_SNY4zC.js";import"./progress-CmLHBdmj.js";import"./accordion-B6UeQwZ6.js";import"./accordion-0FBKGPj-.js";import"./useCollapsiblePanel-DOTGH3aY.js";import"./collapsible-DZyMQ3Bu.js";import"./dialog-DnXWbC45.js";import"./overlay-dialog-aVFq0bEi.js";import"./sheet-dNUUpp2U.js";import"./alert-dialog-DbGCTr1F.js";import"./hover-card-sY2GMIgd.js";import"./dropdown-menu-qZhg1f8R.js";import"./menu-DaKubz4c.js";import"./chevron-right-B3hyZT-D.js";import"./context-menu-B8gpNJM6.js";import"./calendar-V3NmEFls.js";import"./chevron-left-DLgfJc_O.js";import"./resizable-YZsVPkgn.js";import"./grip-vertical-Dizk5hed.js";import"./table-DOkc2t6b.js";import"./search-field-Geq7aFHv.js";import"./index.module-B2X8Wkxy.js";const{expect:d,userEvent:g,within:b}=__STORYBOOK_MODULE_TEST__,ve={title:"Components/Navigation/Tabs",component:c,tags:["autodocs"],parameters:{layout:"padded",controls:{include:["defaultValue","orientation","activationMode","appearance"]},docs:{description:{component:"Switches between related panels without route navigation. defaultValue initializes selection; value/onValueChange is controlled. activationMode chooses automatic or manual keyboard activation, and orientation chooses the keyboard axis. appearance selects pill, underline, or underline-strong. Underline keeps ingredient sheet labels at medium weight; underline-strong uses bold selection and compact vertical inset for document/proposal sections. It does not change selection, mounting or keyboard behavior. Host layout owns flex growth, overflow and hidden overflow-tab measurement. Owned by navigation tokens."}}},render:a=>e.jsxs(c,{...a,children:[e.jsxs(u,{"aria-label":"Recipe sections",children:[e.jsx(l,{value:"overview",children:"Overview"}),e.jsx(l,{value:"nutrition",children:"Nutrition"})]}),e.jsx(m,{value:"overview",children:"Recipe summary"}),e.jsx(m,{value:"nutrition",children:"Nutrition information"})]},a.defaultValue),args:{defaultValue:"overview",orientation:"horizontal",activationMode:"automatic",appearance:"pill"},argTypes:{defaultValue:{control:"select",options:["overview","nutrition"]},orientation:{control:"select",options:["horizontal","vertical"]},activationMode:{control:"select",options:["automatic","manual"]},appearance:{control:"inline-radio",options:["pill","underline","underline-strong"]}}},o={},r={...v},t={play:async({canvasElement:a})=>{const s=b(a),p=s.getByRole("tab",{name:"Nutrition"});await g.click(p),await d(p).toHaveAttribute("aria-selected","true"),await d(s.getByRole("tabpanel")).toHaveTextContent("Nutrition information")}},n={args:{appearance:"underline"},play:t.play},i={args:{appearance:"underline-strong"},play:t.play};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
