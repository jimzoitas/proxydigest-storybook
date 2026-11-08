import{j as i,r as c}from"./iframe-6uZ_OvXJ.js";import{B as m,a as d}from"./badge-BfEYvfQV.js";import{B as l}from"./catalog.examples-BgvDZJ6P.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BIEDR5QJ.js";import"./button-A8HzViyP.js";import"./loader-circle-DPzNQWfU.js";import"./input-xqFXePlz.js";import"./textarea-BIg20vtR.js";import"./label-ccPiVmVc.js";import"./checkbox-CzlPmnCo.js";import"./minus-CKlNa8RO.js";import"./useAriaLabelledBy-BKgySVsG.js";import"./switch-DwXRQgw2.js";import"./radio-group-DXhz-kFN.js";import"./roving-focus-0SK5-Aqb.js";import"./CompositeRoot-Av_o_W_V.js";import"./circle-BOSVkkPm.js";import"./CompositeItem-DiKjTF7g.js";import"./useCompositeItem-CEgqY0th.js";import"./slider-pWyGG5M1.js";import"./valueToPercent-DfWH2vGw.js";import"./toggle-group-C1nrCotT.js";import"./card-DXFGhtzm.js";import"./alert-Bkb9iOAA.js";import"./avatar-Dmq_uy83.js";import"./separator-CkvihxIh.js";import"./Separator-UJ0jSiK3.js";import"./skeleton-Bu9j_NfJ.js";import"./progress-Bxl1-gCx.js";import"./tabs-C1EIt9oS.js";import"./accordion-COmVAh8t.js";import"./accordion-DuKcutha.js";import"./useCollapsiblePanel-CEEvXl-2.js";import"./collapsible-D5z7BIl8.js";import"./dialog-DnvpmbSS.js";import"./overlay-dialog-_C1niahL.js";import"./sheet-024fQP7m.js";import"./alert-dialog-DLLLKdzA.js";import"./hover-card-B1VUedu_.js";import"./dropdown-menu-CH01PJiV.js";import"./menu-BB0nZVv8.js";import"./chevron-right-DQAu3Wv6.js";import"./context-menu-CQ8VtaHB.js";import"./calendar-BzrEEUDg.js";import"./chevron-left-ByPwEqFW.js";import"./resizable-Ct2OPLwJ.js";import"./grip-vertical-jKrZikSe.js";import"./table-BkUZ_KQS.js";import"./search-field-BYGbCLxi.js";import"./index.module-Db1hQFPV.js";const{expect:u,userEvent:v,within:g}=__STORYBOOK_MODULE_TEST__;function y({children:t,...e}){const[s,p]=c.useState(!1);return s?i.jsx("output",{children:"Label removed"}):i.jsxs(m,{...e,children:[t,e.layout==="action"&&i.jsx(d,{"aria-label":`Remove ${String(t)}`,onClick:()=>p(!0)})]})}const vt={title:"Components/Data Display/Badge",component:m,tags:["autodocs"],parameters:{layout:"padded",controls:{include:["variant","layout","children"]},docs:{description:{component:"Compact status or metadata label. Existing default, secondary, destructive, outline and reverse variants retain their contracts. Information is a quiet outlined metadata treatment for document types, tags and import-review labels; its fill stays stable on hover. Badge remains a span. Use layout=action for a 4px gap and 4px trailing inset around a separate BadgeRemove control. Label, optional icon and any independent selection action remain caller-owned children. BadgeRemove requires a translated aria-label, defaults to type=button and forwards disabled, events and ref. Omit removal for read-only values; do not wrap the entire badge in a button when it contains another action. Data-display tokens own all Badge parts."}}},render:t=>i.jsx(y,{...t},`${t.variant}-${t.layout}-${String(t.children)}`),args:{variant:"default",layout:"label",children:"Draft"},argTypes:{variant:{control:"select",options:["default","secondary","destructive","outline","reverse","information"]},layout:{control:"inline-radio",options:["label","action"],description:"Label-only geometry, or room for a separate trailing action. Does not add interaction to the badge itself."},children:{control:"text"}}},a={},o={...l},r={args:{variant:"information",children:"Specification"}},n={args:{variant:"secondary",layout:"action",children:"Oat drinks"},play:async({canvasElement:t})=>{const e=g(t);e.getByRole("button",{name:"Remove Oat drinks"}).focus(),await v.keyboard("{Enter}"),await u(e.getByRole("status")).toHaveTextContent("Label removed")}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
