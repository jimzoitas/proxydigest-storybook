import{j as e}from"./iframe-BXubdNpd.js";import{T as c,a as u,b as l,c as m}from"./tabs-BrnZ_xpj.js";import{h as v}from"./catalog.examples-Cwih8HVY.js";import"./preload-helper-PPVm8Dsz.js";import"./CompositeRoot-DuK6i5O1.js";import"./useCompositeItem-Bi8YYZ7L.js";import"./button-DOg3bB7T.js";import"./index-DKWiT4Fi.js";import"./loader-circle-WJxMtqtu.js";import"./input-BWeqiJDe.js";import"./textarea-DKtx55-C.js";import"./label-B-ScEoCq.js";import"./checkbox-R9lg0Zy-.js";import"./minus-BU5OS2V8.js";import"./useAriaLabelledBy-Dlr4qUIQ.js";import"./switch-Bg3CCUCR.js";import"./radio-group-aNY93vS4.js";import"./roving-focus-0SK5-Aqb.js";import"./circle-COTDYbAV.js";import"./CompositeItem-CBKa8E3y.js";import"./slider-DyoUiGUN.js";import"./valueToPercent-DfWH2vGw.js";import"./toggle-group-D27B5ejm.js";import"./card-DpxWWElH.js";import"./badge-C4iUsAGF.js";import"./alert-Bzvx4AKs.js";import"./avatar-ZNaHiu8f.js";import"./separator-BKKMk4Xo.js";import"./Separator-DI4aBzER.js";import"./skeleton-BP5S_qG6.js";import"./progress-DkREujyU.js";import"./accordion-CFT7Mw6-.js";import"./accordion-B-A_a53W.js";import"./useCollapsiblePanel-C5JKJn3w.js";import"./collapsible-BboTV2_X.js";import"./dialog-Gbr7wu8m.js";import"./overlay-dialog-CQZe9RQv.js";import"./sheet-C-ICznI3.js";import"./alert-dialog-BBDZ61Tm.js";import"./hover-card-DOvxW5L6.js";import"./dropdown-menu-DwRzzotf.js";import"./menu-B8QO56XI.js";import"./chevron-right-Bt7v18gP.js";import"./context-menu-BnFk_3DL.js";import"./calendar-BP-114aW.js";import"./chevron-left-fIYzLx4k.js";import"./resizable-CUcWS4h4.js";import"./grip-vertical-B-odIx2N.js";import"./table-BVVgfhwV.js";import"./search-field-DLF5WVFc.js";import"./index.module-B6UitgKw.js";const{expect:d,userEvent:g,within:b}=__STORYBOOK_MODULE_TEST__,ve={title:"Components/Navigation/Tabs",component:c,tags:["autodocs"],parameters:{layout:"padded",controls:{include:["defaultValue","orientation","activationMode","appearance"]},docs:{description:{component:"Switches between related panels without route navigation. defaultValue initializes selection; value/onValueChange is controlled. activationMode chooses automatic or manual keyboard activation, and orientation chooses the keyboard axis. appearance selects pill, underline, or underline-strong. Underline keeps ingredient sheet labels at medium weight; underline-strong uses bold selection and compact vertical inset for document/proposal sections. It does not change selection, mounting or keyboard behavior. Host layout owns flex growth, overflow and hidden overflow-tab measurement. Owned by navigation tokens."}}},render:a=>e.jsxs(c,{...a,children:[e.jsxs(u,{"aria-label":"Recipe sections",children:[e.jsx(l,{value:"overview",children:"Overview"}),e.jsx(l,{value:"nutrition",children:"Nutrition"})]}),e.jsx(m,{value:"overview",children:"Recipe summary"}),e.jsx(m,{value:"nutrition",children:"Nutrition information"})]},a.defaultValue),args:{defaultValue:"overview",orientation:"horizontal",activationMode:"automatic",appearance:"pill"},argTypes:{defaultValue:{control:"select",options:["overview","nutrition"]},orientation:{control:"select",options:["horizontal","vertical"]},activationMode:{control:"select",options:["automatic","manual"]},appearance:{control:"inline-radio",options:["pill","underline","underline-strong"]}}},o={},r={...v},t={play:async({canvasElement:a})=>{const s=b(a),p=s.getByRole("tab",{name:"Nutrition"});await g.click(p),await d(p).toHaveAttribute("aria-selected","true"),await d(s.getByRole("tabpanel")).toHaveTextContent("Nutrition information")}},n={args:{appearance:"underline"},play:t.play},i={args:{appearance:"underline-strong"},play:t.play};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
