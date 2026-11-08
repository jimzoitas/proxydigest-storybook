import{j as e}from"./iframe-nhB53rPD.js";import{T as c,a as u,b as l,c as m}from"./tabs-Fq9_gDeO.js";import{h as v}from"./catalog.examples-BkhE3kuZ.js";import"./preload-helper-PPVm8Dsz.js";import"./CompositeRoot-B0On-XqY.js";import"./useCompositeItem-BquT0LDd.js";import"./button-_tcBhp5_.js";import"./index-8Dbc_Jva.js";import"./loader-circle-MxHlgpxw.js";import"./input-CAdeD_xm.js";import"./textarea-DEsuPIgK.js";import"./label-CIA21tYv.js";import"./checkbox-C9bOlqce.js";import"./minus-XaXcKlev.js";import"./useAriaLabelledBy-D8Oa7trO.js";import"./switch-uMj7V9v_.js";import"./radio-group-BjJ6ZVS9.js";import"./roving-focus-0SK5-Aqb.js";import"./circle-Byfpv97O.js";import"./CompositeItem-D_8UuHC1.js";import"./slider-DsOFUM94.js";import"./valueToPercent-DfWH2vGw.js";import"./toggle-group-WfIKaqgN.js";import"./card-CGu-joF2.js";import"./badge-DF9-aVgV.js";import"./alert-CuymrseY.js";import"./avatar-C4hdJ-kW.js";import"./separator-Dmg9cS_7.js";import"./Separator-RhxJSB-Q.js";import"./skeleton-CMUv0H3w.js";import"./progress-u2AUM0_6.js";import"./accordion-B67wbHOw.js";import"./accordion-CHExsbqI.js";import"./useCollapsiblePanel-DVMF6qnG.js";import"./collapsible-pI4oVkh3.js";import"./dialog-CyBaw9zK.js";import"./overlay-dialog-Co5KED9w.js";import"./sheet-L7clkwH-.js";import"./alert-dialog-sQE9WhqY.js";import"./hover-card-DUsLCMGr.js";import"./dropdown-menu-6QYTqNVQ.js";import"./menu-DyIs6xZo.js";import"./chevron-right-CavErG_J.js";import"./context-menu-BgHQWO9B.js";import"./calendar-CXIh8-zC.js";import"./chevron-left-Dcrje28Y.js";import"./resizable-kngELX8h.js";import"./grip-vertical-Cr-UETSo.js";import"./table-DKvxVw7S.js";import"./search-field-Dneu7mbv.js";import"./index.module-B262ysEo.js";const{expect:d,userEvent:g,within:b}=__STORYBOOK_MODULE_TEST__,ve={title:"Components/Navigation/Tabs",component:c,tags:["autodocs"],parameters:{layout:"padded",controls:{include:["defaultValue","orientation","activationMode","appearance"]},docs:{description:{component:"Switches between related panels without route navigation. defaultValue initializes selection; value/onValueChange is controlled. activationMode chooses automatic or manual keyboard activation, and orientation chooses the keyboard axis. appearance selects pill, underline, or underline-strong. Underline keeps ingredient sheet labels at medium weight; underline-strong uses bold selection and compact vertical inset for document/proposal sections. It does not change selection, mounting or keyboard behavior. Host layout owns flex growth, overflow and hidden overflow-tab measurement. Owned by navigation tokens."}}},render:a=>e.jsxs(c,{...a,children:[e.jsxs(u,{"aria-label":"Recipe sections",children:[e.jsx(l,{value:"overview",children:"Overview"}),e.jsx(l,{value:"nutrition",children:"Nutrition"})]}),e.jsx(m,{value:"overview",children:"Recipe summary"}),e.jsx(m,{value:"nutrition",children:"Nutrition information"})]},a.defaultValue),args:{defaultValue:"overview",orientation:"horizontal",activationMode:"automatic",appearance:"pill"},argTypes:{defaultValue:{control:"select",options:["overview","nutrition"]},orientation:{control:"select",options:["horizontal","vertical"]},activationMode:{control:"select",options:["automatic","manual"]},appearance:{control:"inline-radio",options:["pill","underline","underline-strong"]}}},o={},r={...v},t={play:async({canvasElement:a})=>{const s=b(a),p=s.getByRole("tab",{name:"Nutrition"});await g.click(p),await d(p).toHaveAttribute("aria-selected","true"),await d(s.getByRole("tabpanel")).toHaveTextContent("Nutrition information")}},n={args:{appearance:"underline"},play:t.play},i={args:{appearance:"underline-strong"},play:t.play};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
