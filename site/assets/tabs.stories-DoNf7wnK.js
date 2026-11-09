import{j as e}from"./iframe-DgvZnKtv.js";import{T as c,a as u,b as l,c as m}from"./tabs-ApBmGcl3.js";import{h as v}from"./catalog.examples-DLKY64EU.js";import"./preload-helper-PPVm8Dsz.js";import"./CompositeRoot-CLpK0Eip.js";import"./useCompositeItem-Dr13hnqh.js";import"./button-CEcYiQdY.js";import"./index-BWlKOsdO.js";import"./loader-circle-BsZrs7F6.js";import"./input-DTWVrd6t.js";import"./textarea-D7qlXksG.js";import"./label-CPJsvsW3.js";import"./checkbox-CCvRjg_n.js";import"./minus-0s0hIbe7.js";import"./useAriaLabelledBy-C2v0UWUV.js";import"./switch-T4g98NFH.js";import"./radio-group-XMhZ7xiG.js";import"./roving-focus-0SK5-Aqb.js";import"./circle-CwHZP-HG.js";import"./CompositeItem-qKQIJE0X.js";import"./slider-UYb5RKBF.js";import"./valueToPercent-DfWH2vGw.js";import"./toggle-group-D6oIStAM.js";import"./card-LhCNN_F3.js";import"./badge-C-Jji8Kx.js";import"./alert-B2HkS6xL.js";import"./avatar-BapWT1f9.js";import"./separator-DZKac5zi.js";import"./Separator-BKJ0ZhJM.js";import"./skeleton-DwZsbo-S.js";import"./progress-DeKMlPS3.js";import"./accordion-BRTC14md.js";import"./accordion-mjjl12TU.js";import"./useCollapsiblePanel-jjkiJ8Ha.js";import"./collapsible-BPKkR0Kq.js";import"./dialog-BGED6ss2.js";import"./overlay-dialog-i6vPmHIw.js";import"./sheet-BSYc4zIC.js";import"./alert-dialog-C6IZFRS7.js";import"./hover-card-CbaK_QEc.js";import"./dropdown-menu-CuN8-u21.js";import"./menu-BIxLiaY6.js";import"./chevron-right-B8SZue5v.js";import"./context-menu-BkEuBydl.js";import"./calendar-DNqmRJEy.js";import"./chevron-left-96ijkid2.js";import"./resizable-38DPMN1p.js";import"./grip-vertical-Bc1r5WDV.js";import"./table-C0CN-w6L.js";import"./search-field-CzWqD7iz.js";import"./index.module-C-pw7-ZN.js";const{expect:d,userEvent:g,within:b}=__STORYBOOK_MODULE_TEST__,ve={title:"Components/Navigation/Tabs",component:c,tags:["autodocs"],parameters:{layout:"padded",controls:{include:["defaultValue","orientation","activationMode","appearance"]},docs:{description:{component:"Switches between related panels without route navigation. defaultValue initializes selection; value/onValueChange is controlled. activationMode chooses automatic or manual keyboard activation, and orientation chooses the keyboard axis. appearance selects pill, underline, or underline-strong. Underline keeps ingredient sheet labels at medium weight; underline-strong uses bold selection and compact vertical inset for document/proposal sections. It does not change selection, mounting or keyboard behavior. Host layout owns flex growth, overflow and hidden overflow-tab measurement. Owned by navigation tokens."}}},render:a=>e.jsxs(c,{...a,children:[e.jsxs(u,{"aria-label":"Recipe sections",children:[e.jsx(l,{value:"overview",children:"Overview"}),e.jsx(l,{value:"nutrition",children:"Nutrition"})]}),e.jsx(m,{value:"overview",children:"Recipe summary"}),e.jsx(m,{value:"nutrition",children:"Nutrition information"})]},a.defaultValue),args:{defaultValue:"overview",orientation:"horizontal",activationMode:"automatic",appearance:"pill"},argTypes:{defaultValue:{control:"select",options:["overview","nutrition"]},orientation:{control:"select",options:["horizontal","vertical"]},activationMode:{control:"select",options:["automatic","manual"]},appearance:{control:"inline-radio",options:["pill","underline","underline-strong"]}}},o={},r={...v},t={play:async({canvasElement:a})=>{const s=b(a),p=s.getByRole("tab",{name:"Nutrition"});await g.click(p),await d(p).toHaveAttribute("aria-selected","true"),await d(s.getByRole("tabpanel")).toHaveTextContent("Nutrition information")}},n={args:{appearance:"underline"},play:t.play},i={args:{appearance:"underline-strong"},play:t.play};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
