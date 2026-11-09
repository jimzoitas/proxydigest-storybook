import{j as i}from"./iframe-DgvZnKtv.js";import{S as a}from"./SuppliersDetailView-CkGcdfp1.js";import{p as n,o as l,d as c,s as d}from"./suppliersStoryFixtures-BwbARWWd.js";import"./preload-helper-PPVm8Dsz.js";import"./DetailSection-D4qnrUr2.js";import"./KeyValueList-Buq_XkHz.js";import"./collapsible-BPKkR0Kq.js";import"./useCollapsiblePanel-jjkiJ8Ha.js";import"./dot-3Us1si8c.js";import"./separator-DZKac5zi.js";import"./Separator-BKJ0ZhJM.js";import"./parseDisplayValue-P1Ghs7CU.js";import"./apiUrl-o8N8i6mn.js";const j={title:"Product examples/Suppliers/SuppliersDetailView",id:"modules-suppliers-suppliersdetailview",component:a,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Read-only body of the supplier side sheet: the description (or a muted 'No description provided.' footnote), then General, Ingredient catalog and Contact sections, each a `DetailSection` + `KeyValueList` after a `Separator`. Fields whose value is empty are dropped and a section with no fields is hidden; JSON-encoded array columns render as lists through `parseDisplayValue`. 1 importer: `src/modules/Suppliers/SuppliersForm/SuppliersSideSheet.tsx`. Source: `src/modules/Suppliers/SuppliersForm/SuppliersDetailView.tsx`."}}},decorators:[p=>i.jsx("div",{className:"pf-story-suppliers-suppliers-detail-view-detail-frame",children:i.jsx(p,{})})],argTypes:{supplier:{control:"object",description:"The row the user clicked in the suppliers table."}},args:{supplier:n}},e={},r={args:{supplier:l}},s={args:{supplier:c}},o={args:{supplier:d}},t={args:{supplier:{id:"1299",name:"Unnamed supplier import"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source},description:{story:"Inside the supplier side sheet: a fully documented supplier, every section filled.",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    supplier: oatSupplier
  }
}`,...r.parameters?.docs?.source},description:{story:"No `description`: the muted footnote replaces the paragraph; the sections still render.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    supplier: distributorSupplier
  }
}`,...s.parameters?.docs?.source},description:{story:"No catalog or contact data yet: only the General section is shown.",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    supplier: sparseSupplier
  }
}`,...o.parameters?.docs?.source},description:{story:"Only name and country known: the footnote plus a General section with a single Country row.",...o.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    supplier: {
      id: "1299",
      name: "Unnamed supplier import"
    }
  }
}`,...t.parameters?.docs?.source},description:{story:"A bare record (name only): every section is hidden, just the footnote remains.",...t.parameters?.docs?.description}}};const G=["InSupplierSideSheet","WithoutDescription","GeneralSectionOnly","MinimalSupplier","NoDetails"];export{s as GeneralSectionOnly,e as InSupplierSideSheet,o as MinimalSupplier,t as NoDetails,r as WithoutDescription,G as __namedExportsOrder,j as default};
