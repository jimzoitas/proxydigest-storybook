import{j as i}from"./iframe-nhB53rPD.js";import{S as a}from"./SuppliersDetailView-7VB3jd9E.js";import{p as n,o as l,d as c,a as d}from"./suppliersStoryFixtures-CzOTcFD5.js";import"./preload-helper-PPVm8Dsz.js";import"./DetailSection-3scdJTVF.js";import"./KeyValueList-BPMie1q5.js";import"./collapsible-pI4oVkh3.js";import"./useCollapsiblePanel-DVMF6qnG.js";import"./dot-DUZcs8Lz.js";import"./separator-Dmg9cS_7.js";import"./Separator-RhxJSB-Q.js";import"./parseDisplayValue-1ehyqZVN.js";import"./apiUrl-CtX1NveE.js";const j={title:"Product examples/Suppliers/SuppliersDetailView",id:"modules-suppliers-suppliersdetailview",component:a,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Read-only body of the supplier side sheet: the description (or a muted 'No description provided.' footnote), then General, Ingredient catalog and Contact sections, each a `DetailSection` + `KeyValueList` after a `Separator`. Fields whose value is empty are dropped and a section with no fields is hidden; JSON-encoded array columns render as lists through `parseDisplayValue`. 1 importer: `src/modules/Suppliers/SuppliersForm/SuppliersSideSheet.tsx`. Source: `src/modules/Suppliers/SuppliersForm/SuppliersDetailView.tsx`."}}},decorators:[p=>i.jsx("div",{className:"pf-story-suppliers-suppliers-detail-view-detail-frame",children:i.jsx(p,{})})],argTypes:{supplier:{control:"object",description:"The row the user clicked in the suppliers table."}},args:{supplier:n}},e={},r={args:{supplier:l}},s={args:{supplier:c}},o={args:{supplier:d}},t={args:{supplier:{id:"1299",name:"Unnamed supplier import"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source},description:{story:"Inside the supplier side sheet: a fully documented supplier, every section filled.",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
