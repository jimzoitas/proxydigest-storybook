import{j as i,r as c}from"./iframe-AqpYXns4.js";import{B as m,a as d}from"./badge-CQKobhLs.js";import{B as l}from"./catalog.examples-zcZL5Oir.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DEXj3--c.js";import"./button-B5FjjXWS.js";import"./loader-circle-mWFWE2W9.js";import"./input-DLCq6ZzS.js";import"./textarea-uF5bUZhh.js";import"./label-1kzVJgIY.js";import"./checkbox-TIyFUyNd.js";import"./minus-0yDLMIrp.js";import"./useAriaLabelledBy-Da9KhbUQ.js";import"./switch-Dq-T1JeF.js";import"./radio-group-BybVJGC9.js";import"./roving-focus-0SK5-Aqb.js";import"./CompositeRoot-yL7bK7Jd.js";import"./circle-Dg6ojZlj.js";import"./CompositeItem-D1wyjQOR.js";import"./useCompositeItem-QlszIeBN.js";import"./slider-BaUfZmPE.js";import"./valueToPercent-DfWH2vGw.js";import"./toggle-group-DO0OQdfk.js";import"./card-ByHHR2Jw.js";import"./alert-vS_dpmu2.js";import"./avatar-DTkZwYDb.js";import"./separator-C7Zm_6nS.js";import"./Separator-DssPvI5G.js";import"./skeleton-C_SNY4zC.js";import"./progress-CmLHBdmj.js";import"./tabs-D2cBF9Wg.js";import"./accordion-B6UeQwZ6.js";import"./accordion-0FBKGPj-.js";import"./useCollapsiblePanel-DOTGH3aY.js";import"./collapsible-DZyMQ3Bu.js";import"./dialog-DnXWbC45.js";import"./overlay-dialog-aVFq0bEi.js";import"./sheet-dNUUpp2U.js";import"./alert-dialog-DbGCTr1F.js";import"./hover-card-sY2GMIgd.js";import"./dropdown-menu-qZhg1f8R.js";import"./menu-DaKubz4c.js";import"./chevron-right-B3hyZT-D.js";import"./context-menu-B8gpNJM6.js";import"./calendar-V3NmEFls.js";import"./chevron-left-DLgfJc_O.js";import"./resizable-YZsVPkgn.js";import"./grip-vertical-Dizk5hed.js";import"./table-DOkc2t6b.js";import"./search-field-Geq7aFHv.js";import"./index.module-B2X8Wkxy.js";const{expect:u,userEvent:v,within:g}=__STORYBOOK_MODULE_TEST__;function y({children:t,...e}){const[s,p]=c.useState(!1);return s?i.jsx("output",{children:"Label removed"}):i.jsxs(m,{...e,children:[t,e.layout==="action"&&i.jsx(d,{"aria-label":`Remove ${String(t)}`,onClick:()=>p(!0)})]})}const vt={title:"Components/Data Display/Badge",component:m,tags:["autodocs"],parameters:{layout:"padded",controls:{include:["variant","layout","children"]},docs:{description:{component:"Compact status or metadata label. Existing default, secondary, destructive, outline and reverse variants retain their contracts. Information is a quiet outlined metadata treatment for document types, tags and import-review labels; its fill stays stable on hover. Badge remains a span. Use layout=action for a 4px gap and 4px trailing inset around a separate BadgeRemove control. Label, optional icon and any independent selection action remain caller-owned children. BadgeRemove requires a translated aria-label, defaults to type=button and forwards disabled, events and ref. Omit removal for read-only values; do not wrap the entire badge in a button when it contains another action. Data-display tokens own all Badge parts."}}},render:t=>i.jsx(y,{...t},`${t.variant}-${t.layout}-${String(t.children)}`),args:{variant:"default",layout:"label",children:"Draft"},argTypes:{variant:{control:"select",options:["default","secondary","destructive","outline","reverse","information"]},layout:{control:"inline-radio",options:["label","action"],description:"Label-only geometry, or room for a separate trailing action. Does not add interaction to the badge itself."},children:{control:"text"}}},a={},o={...l},r={args:{variant:"information",children:"Specification"}},n={args:{variant:"secondary",layout:"action",children:"Oat drinks"},play:async({canvasElement:t})=>{const e=g(t);e.getByRole("button",{name:"Remove Oat drinks"}).focus(),await v.keyboard("{Enter}"),await u(e.getByRole("status")).toHaveTextContent("Label removed")}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
