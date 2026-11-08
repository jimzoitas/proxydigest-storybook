import{j as i,r as c}from"./iframe-nhB53rPD.js";import{B as m,a as d}from"./badge-DF9-aVgV.js";import{B as l}from"./catalog.examples-BkhE3kuZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8Dbc_Jva.js";import"./button-_tcBhp5_.js";import"./loader-circle-MxHlgpxw.js";import"./input-CAdeD_xm.js";import"./textarea-DEsuPIgK.js";import"./label-CIA21tYv.js";import"./checkbox-C9bOlqce.js";import"./minus-XaXcKlev.js";import"./useAriaLabelledBy-D8Oa7trO.js";import"./switch-uMj7V9v_.js";import"./radio-group-BjJ6ZVS9.js";import"./roving-focus-0SK5-Aqb.js";import"./CompositeRoot-B0On-XqY.js";import"./circle-Byfpv97O.js";import"./CompositeItem-D_8UuHC1.js";import"./useCompositeItem-BquT0LDd.js";import"./slider-DsOFUM94.js";import"./valueToPercent-DfWH2vGw.js";import"./toggle-group-WfIKaqgN.js";import"./card-CGu-joF2.js";import"./alert-CuymrseY.js";import"./avatar-C4hdJ-kW.js";import"./separator-Dmg9cS_7.js";import"./Separator-RhxJSB-Q.js";import"./skeleton-CMUv0H3w.js";import"./progress-u2AUM0_6.js";import"./tabs-Fq9_gDeO.js";import"./accordion-B67wbHOw.js";import"./accordion-CHExsbqI.js";import"./useCollapsiblePanel-DVMF6qnG.js";import"./collapsible-pI4oVkh3.js";import"./dialog-CyBaw9zK.js";import"./overlay-dialog-Co5KED9w.js";import"./sheet-L7clkwH-.js";import"./alert-dialog-sQE9WhqY.js";import"./hover-card-DUsLCMGr.js";import"./dropdown-menu-6QYTqNVQ.js";import"./menu-DyIs6xZo.js";import"./chevron-right-CavErG_J.js";import"./context-menu-BgHQWO9B.js";import"./calendar-CXIh8-zC.js";import"./chevron-left-Dcrje28Y.js";import"./resizable-kngELX8h.js";import"./grip-vertical-Cr-UETSo.js";import"./table-DKvxVw7S.js";import"./search-field-Dneu7mbv.js";import"./index.module-B262ysEo.js";const{expect:u,userEvent:v,within:g}=__STORYBOOK_MODULE_TEST__;function y({children:t,...e}){const[s,p]=c.useState(!1);return s?i.jsx("output",{children:"Label removed"}):i.jsxs(m,{...e,children:[t,e.layout==="action"&&i.jsx(d,{"aria-label":`Remove ${String(t)}`,onClick:()=>p(!0)})]})}const vt={title:"Components/Data Display/Badge",component:m,tags:["autodocs"],parameters:{layout:"padded",controls:{include:["variant","layout","children"]},docs:{description:{component:"Compact status or metadata label. Existing default, secondary, destructive, outline and reverse variants retain their contracts. Information is a quiet outlined metadata treatment for document types, tags and import-review labels; its fill stays stable on hover. Badge remains a span. Use layout=action for a 4px gap and 4px trailing inset around a separate BadgeRemove control. Label, optional icon and any independent selection action remain caller-owned children. BadgeRemove requires a translated aria-label, defaults to type=button and forwards disabled, events and ref. Omit removal for read-only values; do not wrap the entire badge in a button when it contains another action. Data-display tokens own all Badge parts."}}},render:t=>i.jsx(y,{...t},`${t.variant}-${t.layout}-${String(t.children)}`),args:{variant:"default",layout:"label",children:"Draft"},argTypes:{variant:{control:"select",options:["default","secondary","destructive","outline","reverse","information"]},layout:{control:"inline-radio",options:["label","action"],description:"Label-only geometry, or room for a separate trailing action. Does not add interaction to the badge itself."},children:{control:"text"}}},a={},o={...l},r={args:{variant:"information",children:"Specification"}},n={args:{variant:"secondary",layout:"action",children:"Oat drinks"},play:async({canvasElement:t})=>{const e=g(t);e.getByRole("button",{name:"Remove Oat drinks"}).focus(),await v.keyboard("{Enter}"),await u(e.getByRole("status")).toHaveTextContent("Label removed")}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
