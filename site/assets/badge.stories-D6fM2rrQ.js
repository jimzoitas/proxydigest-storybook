import{j as i,r as c}from"./iframe-DgvZnKtv.js";import{B as m,a as d}from"./badge-C-Jji8Kx.js";import{B as l}from"./catalog.examples-DLKY64EU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWlKOsdO.js";import"./button-CEcYiQdY.js";import"./loader-circle-BsZrs7F6.js";import"./input-DTWVrd6t.js";import"./textarea-D7qlXksG.js";import"./label-CPJsvsW3.js";import"./checkbox-CCvRjg_n.js";import"./minus-0s0hIbe7.js";import"./useAriaLabelledBy-C2v0UWUV.js";import"./switch-T4g98NFH.js";import"./radio-group-XMhZ7xiG.js";import"./roving-focus-0SK5-Aqb.js";import"./CompositeRoot-CLpK0Eip.js";import"./circle-CwHZP-HG.js";import"./CompositeItem-qKQIJE0X.js";import"./useCompositeItem-Dr13hnqh.js";import"./slider-UYb5RKBF.js";import"./valueToPercent-DfWH2vGw.js";import"./toggle-group-D6oIStAM.js";import"./card-LhCNN_F3.js";import"./alert-B2HkS6xL.js";import"./avatar-BapWT1f9.js";import"./separator-DZKac5zi.js";import"./Separator-BKJ0ZhJM.js";import"./skeleton-DwZsbo-S.js";import"./progress-DeKMlPS3.js";import"./tabs-ApBmGcl3.js";import"./accordion-BRTC14md.js";import"./accordion-mjjl12TU.js";import"./useCollapsiblePanel-jjkiJ8Ha.js";import"./collapsible-BPKkR0Kq.js";import"./dialog-BGED6ss2.js";import"./overlay-dialog-i6vPmHIw.js";import"./sheet-BSYc4zIC.js";import"./alert-dialog-C6IZFRS7.js";import"./hover-card-CbaK_QEc.js";import"./dropdown-menu-CuN8-u21.js";import"./menu-BIxLiaY6.js";import"./chevron-right-B8SZue5v.js";import"./context-menu-BkEuBydl.js";import"./calendar-DNqmRJEy.js";import"./chevron-left-96ijkid2.js";import"./resizable-38DPMN1p.js";import"./grip-vertical-Bc1r5WDV.js";import"./table-C0CN-w6L.js";import"./search-field-CzWqD7iz.js";import"./index.module-C-pw7-ZN.js";const{expect:u,userEvent:v,within:g}=__STORYBOOK_MODULE_TEST__;function y({children:t,...e}){const[s,p]=c.useState(!1);return s?i.jsx("output",{children:"Label removed"}):i.jsxs(m,{...e,children:[t,e.layout==="action"&&i.jsx(d,{"aria-label":`Remove ${String(t)}`,onClick:()=>p(!0)})]})}const vt={title:"Components/Data Display/Badge",component:m,tags:["autodocs"],parameters:{layout:"padded",controls:{include:["variant","layout","children"]},docs:{description:{component:"Compact status or metadata label. Existing default, secondary, destructive, outline and reverse variants retain their contracts. Information is a quiet outlined metadata treatment for document types, tags and import-review labels; its fill stays stable on hover. Badge remains a span. Use layout=action for a 4px gap and 4px trailing inset around a separate BadgeRemove control. Label, optional icon and any independent selection action remain caller-owned children. BadgeRemove requires a translated aria-label, defaults to type=button and forwards disabled, events and ref. Omit removal for read-only values; do not wrap the entire badge in a button when it contains another action. Data-display tokens own all Badge parts."}}},render:t=>i.jsx(y,{...t},`${t.variant}-${t.layout}-${String(t.children)}`),args:{variant:"default",layout:"label",children:"Draft"},argTypes:{variant:{control:"select",options:["default","secondary","destructive","outline","reverse","information"]},layout:{control:"inline-radio",options:["label","action"],description:"Label-only geometry, or room for a separate trailing action. Does not add interaction to the badge itself."},children:{control:"text"}}},a={},o={...l},r={args:{variant:"information",children:"Specification"}},n={args:{variant:"secondary",layout:"action",children:"Oat drinks"},play:async({canvasElement:t})=>{const e=g(t);e.getByRole("button",{name:"Remove Oat drinks"}).focus(),await v.keyboard("{Enter}"),await u(e.getByRole("status")).toHaveTextContent("Label removed")}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...Badges
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "information",
    children: "Specification"
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    layout: "action",
    children: "Oat drinks"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const remove = canvas.getByRole("button", {
      name: "Remove Oat drinks"
    });
    remove.focus();
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByRole("status")).toHaveTextContent("Label removed");
  }
}`,...n.parameters?.docs?.source}}};const gt=["Playground","ExistingExample","Information","Removable"];export{o as ExistingExample,r as Information,a as Playground,n as Removable,gt as __namedExportsOrder,vt as default};
