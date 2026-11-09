import{j as n}from"./iframe-DgvZnKtv.js";/* empty css                      */import{R as p,a as d}from"./radio-group-XMhZ7xiG.js";import{L as c}from"./label-CPJsvsW3.js";import{R as l}from"./catalog.examples-DLKY64EU.js";import"./preload-helper-PPVm8Dsz.js";import"./roving-focus-0SK5-Aqb.js";import"./checkbox-CCvRjg_n.js";import"./minus-0s0hIbe7.js";import"./useAriaLabelledBy-C2v0UWUV.js";import"./CompositeRoot-CLpK0Eip.js";import"./circle-CwHZP-HG.js";import"./CompositeItem-qKQIJE0X.js";import"./useCompositeItem-Dr13hnqh.js";import"./button-CEcYiQdY.js";import"./index-BWlKOsdO.js";import"./loader-circle-BsZrs7F6.js";import"./input-DTWVrd6t.js";import"./textarea-D7qlXksG.js";import"./switch-T4g98NFH.js";import"./slider-UYb5RKBF.js";import"./valueToPercent-DfWH2vGw.js";import"./toggle-group-D6oIStAM.js";import"./card-LhCNN_F3.js";import"./badge-C-Jji8Kx.js";import"./alert-B2HkS6xL.js";import"./avatar-BapWT1f9.js";import"./separator-DZKac5zi.js";import"./Separator-BKJ0ZhJM.js";import"./skeleton-DwZsbo-S.js";import"./progress-DeKMlPS3.js";import"./tabs-ApBmGcl3.js";import"./accordion-BRTC14md.js";import"./accordion-mjjl12TU.js";import"./useCollapsiblePanel-jjkiJ8Ha.js";import"./collapsible-BPKkR0Kq.js";import"./dialog-BGED6ss2.js";import"./overlay-dialog-i6vPmHIw.js";import"./sheet-BSYc4zIC.js";import"./alert-dialog-C6IZFRS7.js";import"./hover-card-CbaK_QEc.js";import"./dropdown-menu-CuN8-u21.js";import"./menu-BIxLiaY6.js";import"./chevron-right-B8SZue5v.js";import"./context-menu-BkEuBydl.js";import"./calendar-DNqmRJEy.js";import"./chevron-left-96ijkid2.js";import"./resizable-38DPMN1p.js";import"./grip-vertical-Bc1r5WDV.js";import"./table-C0CN-w6L.js";import"./search-field-CzWqD7iz.js";import"./index.module-C-pw7-ZN.js";const{expect:u,userEvent:m,within:g,waitFor:y}=__STORYBOOK_MODULE_TEST__,fo={title:"Components/Controls/Radio group",id:"components-inputs-selection-radio-group",component:p,tags:["autodocs"],parameters:{layout:"padded",controls:{include:["size","defaultValue","orientation","disabled","required","loop"]},docs:{description:{component:"Mutually exclusive choices with arrow-key navigation. value/onValueChange uses a string; defaultValue initializes selection. orientation and loop control navigation; disabled/required apply to the group. The host owns submission. The group size is inherited by its items: sm is 24px (default), lg is 32px at a 16px root. RadioGroupItem can override size. Control-owned tokens keep all four theme mappings identical in geometry; keyboard focus highlights the own border without an outer ring."}}},render:r=>n.jsx(p,{...r,children:["draft","ready"].map(o=>n.jsxs(c,{className:"pf-story-toolbar",children:[n.jsx(d,{value:o}),o]},o))},r.defaultValue),args:{size:"sm",defaultValue:"draft",orientation:"vertical",disabled:!1,required:!1,loop:!0,"aria-label":"Recipe status"},argTypes:{size:{control:"inline-radio",options:["sm","lg"],description:"Every item inherits sm 24px (default) or lg 32px at a 16px root. An individual RadioGroupItem can override size."},defaultValue:{control:"select",options:["draft","ready"]},orientation:{control:"select",options:["horizontal","vertical"]},disabled:{control:"boolean"},required:{control:"boolean"},loop:{control:"boolean"}}},e={},t={...l},a={args:{size:"lg"}},i={args:{disabled:!0}},s={play:async({canvasElement:r})=>{const o=g(r);o.getByRole("radio",{name:"draft"}).focus(),await m.keyboard("{ArrowDown>}"),await y(()=>u(o.getByRole("radio",{name:"ready"})).toBeChecked()),await m.keyboard("{/ArrowDown}")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...RadioChoices
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg"
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const draft = canvas.getByRole("radio", {
      name: "draft"
    });
    draft.focus();
    // Let the primitive move focus while the arrow key is held.
    await userEvent.keyboard("{ArrowDown>}");
    await waitFor(() => expect(canvas.getByRole("radio", {
      name: "ready"
    })).toBeChecked());
    await userEvent.keyboard("{/ArrowDown}");
  }
}`,...s.parameters?.docs?.source}}};const ho=["Playground","ExistingExample","Large","Disabled","KeyboardSelection"];export{i as Disabled,t as ExistingExample,s as KeyboardSelection,a as Large,e as Playground,ho as __namedExportsOrder,fo as default};
