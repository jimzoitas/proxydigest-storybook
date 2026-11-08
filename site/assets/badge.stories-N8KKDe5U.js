import{j as i,r as c}from"./iframe-BXubdNpd.js";import{B as m,a as d}from"./badge-C4iUsAGF.js";import{B as l}from"./catalog.examples-Cwih8HVY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DKWiT4Fi.js";import"./button-DOg3bB7T.js";import"./loader-circle-WJxMtqtu.js";import"./input-BWeqiJDe.js";import"./textarea-DKtx55-C.js";import"./label-B-ScEoCq.js";import"./checkbox-R9lg0Zy-.js";import"./minus-BU5OS2V8.js";import"./useAriaLabelledBy-Dlr4qUIQ.js";import"./switch-Bg3CCUCR.js";import"./radio-group-aNY93vS4.js";import"./roving-focus-0SK5-Aqb.js";import"./CompositeRoot-DuK6i5O1.js";import"./circle-COTDYbAV.js";import"./CompositeItem-CBKa8E3y.js";import"./useCompositeItem-Bi8YYZ7L.js";import"./slider-DyoUiGUN.js";import"./valueToPercent-DfWH2vGw.js";import"./toggle-group-D27B5ejm.js";import"./card-DpxWWElH.js";import"./alert-Bzvx4AKs.js";import"./avatar-ZNaHiu8f.js";import"./separator-BKKMk4Xo.js";import"./Separator-DI4aBzER.js";import"./skeleton-BP5S_qG6.js";import"./progress-DkREujyU.js";import"./tabs-BrnZ_xpj.js";import"./accordion-CFT7Mw6-.js";import"./accordion-B-A_a53W.js";import"./useCollapsiblePanel-C5JKJn3w.js";import"./collapsible-BboTV2_X.js";import"./dialog-Gbr7wu8m.js";import"./overlay-dialog-CQZe9RQv.js";import"./sheet-C-ICznI3.js";import"./alert-dialog-BBDZ61Tm.js";import"./hover-card-DOvxW5L6.js";import"./dropdown-menu-DwRzzotf.js";import"./menu-B8QO56XI.js";import"./chevron-right-Bt7v18gP.js";import"./context-menu-BnFk_3DL.js";import"./calendar-BP-114aW.js";import"./chevron-left-fIYzLx4k.js";import"./resizable-CUcWS4h4.js";import"./grip-vertical-B-odIx2N.js";import"./table-BVVgfhwV.js";import"./search-field-DLF5WVFc.js";import"./index.module-B6UitgKw.js";const{expect:u,userEvent:v,within:g}=__STORYBOOK_MODULE_TEST__;function y({children:t,...e}){const[s,p]=c.useState(!1);return s?i.jsx("output",{children:"Label removed"}):i.jsxs(m,{...e,children:[t,e.layout==="action"&&i.jsx(d,{"aria-label":`Remove ${String(t)}`,onClick:()=>p(!0)})]})}const vt={title:"Components/Data Display/Badge",component:m,tags:["autodocs"],parameters:{layout:"padded",controls:{include:["variant","layout","children"]},docs:{description:{component:"Compact status or metadata label. Existing default, secondary, destructive, outline and reverse variants retain their contracts. Information is a quiet outlined metadata treatment for document types, tags and import-review labels; its fill stays stable on hover. Badge remains a span. Use layout=action for a 4px gap and 4px trailing inset around a separate BadgeRemove control. Label, optional icon and any independent selection action remain caller-owned children. BadgeRemove requires a translated aria-label, defaults to type=button and forwards disabled, events and ref. Omit removal for read-only values; do not wrap the entire badge in a button when it contains another action. Data-display tokens own all Badge parts."}}},render:t=>i.jsx(y,{...t},`${t.variant}-${t.layout}-${String(t.children)}`),args:{variant:"default",layout:"label",children:"Draft"},argTypes:{variant:{control:"select",options:["default","secondary","destructive","outline","reverse","information"]},layout:{control:"inline-radio",options:["label","action"],description:"Label-only geometry, or room for a separate trailing action. Does not add interaction to the badge itself."},children:{control:"text"}}},a={},o={...l},r={args:{variant:"information",children:"Specification"}},n={args:{variant:"secondary",layout:"action",children:"Oat drinks"},play:async({canvasElement:t})=>{const e=g(t);e.getByRole("button",{name:"Remove Oat drinks"}).focus(),await v.keyboard("{Enter}"),await u(e.getByRole("status")).toHaveTextContent("Label removed")}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
