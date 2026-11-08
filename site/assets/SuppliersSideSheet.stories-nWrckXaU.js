import i from"./SuppliersSideSheet-DWZJxD-1.js";import{p as a,d as l,o as n,a as d}from"./suppliersStoryFixtures-CzOTcFD5.js";import"./iframe-nhB53rPD.js";import"./preload-helper-PPVm8Dsz.js";import"./side-sheet-C_qxc1cm.js";import"./sheet-L7clkwH-.js";import"./overlay-dialog-Co5KED9w.js";import"./index-8Dbc_Jva.js";import"./button-_tcBhp5_.js";import"./loader-circle-MxHlgpxw.js";import"./tooltip-core-i2pf0ZTE.js";import"./panel-left-Bz3AW4zy.js";import"./external-link-BYvKAsSg.js";import"./DetailHeader-CDOTnpwU.js";import"./SuppliersDetailView-7VB3jd9E.js";import"./DetailSection-3scdJTVF.js";import"./KeyValueList-BPMie1q5.js";import"./collapsible-pI4oVkh3.js";import"./useCollapsiblePanel-DVMF6qnG.js";import"./dot-DUZcs8Lz.js";import"./separator-Dmg9cS_7.js";import"./Separator-RhxJSB-Q.js";import"./parseDisplayValue-1ehyqZVN.js";import"./apiUrl-CtX1NveE.js";const o=s=>({suppliers:{isSuppliersSideSheetOpen:!0,selectedSupplier:s}}),A={title:"Product examples/Suppliers/SuppliersSideSheet",id:"modules-suppliers-supplierssidesheet",component:i,tags:["autodocs"],parameters:{layout:"fullscreen",route:"/suppliers",docs:{description:{component:"Read-only supplier detail `SideSheet` (p-0, max 800px, no footer), portalled to `#portal-root`. Its header is a `DetailHeader` with the supplier name and the formatted supplier type; the body is `SuppliersDetailView`. It renders only while `suppliers.isSuppliersSideSheetOpen` is true and a `selectedSupplier` is set, which a row click in the suppliers table does; closing clears both. Lazy-mounted by 1 file, `src/GlobalUI.tsx`, after the first open. Source: `src/modules/Suppliers/SuppliersForm/SuppliersSideSheet.tsx`."}}}},e={parameters:{store:{preloadedState:o(a)}}},r={parameters:{store:{preloadedState:o(l)}}},t={parameters:{store:{preloadedState:o(n)}}},p={parameters:{store:{preloadedState:o(d)}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    store: {
      preloadedState: openWith(proteinSupplier)
    }
  }
}`,...e.parameters?.docs?.source},description:{story:"Opened from a row of the `/suppliers` table: name and type in the header, all three sections below.",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    store: {
      preloadedState: openWith(distributorSupplier)
    }
  }
}`,...r.parameters?.docs?.source},description:{story:'A multi-valued `supplierType` (`["Distributor", "Importer"]`) is joined in the header subtitle.',...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    store: {
      preloadedState: openWith(oatSupplier)
    }
  }
}`,...t.parameters?.docs?.source},description:{story:"No description on file: the body starts with the muted footnote.",...t.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    store: {
      preloadedState: openWith(sparseSupplier)
    }
  }
}`,...p.parameters?.docs?.source},description:{story:"No supplier type: the header shows the name only, and the body has just the Country row.",...p.parameters?.docs?.description}}};const C=["OpenedFromSuppliersTable","MultipleSupplierTypes","WithoutDescription","WithoutSupplierType"];export{r as MultipleSupplierTypes,e as OpenedFromSuppliersTable,t as WithoutDescription,p as WithoutSupplierType,C as __namedExportsOrder,A as default};
