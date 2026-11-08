import i from"./SuppliersSideSheet-CnaKZ1Oh.js";import{p as a,d as l,o as n,a as d}from"./suppliersStoryFixtures-Nl6xvhdf.js";import"./iframe-AqpYXns4.js";import"./preload-helper-PPVm8Dsz.js";import"./side-sheet-BOVhFR3K.js";import"./sheet-dNUUpp2U.js";import"./overlay-dialog-aVFq0bEi.js";import"./index-DEXj3--c.js";import"./button-B5FjjXWS.js";import"./loader-circle-mWFWE2W9.js";import"./tooltip-core-B2gr90Lt.js";import"./panel-left-B2yi0UBt.js";import"./external-link-Dt5jxCST.js";import"./DetailHeader-BwUAOi_V.js";import"./SuppliersDetailView-BwP51kIf.js";import"./DetailSection-BO4Q-eON.js";import"./KeyValueList-am_sdcyo.js";import"./collapsible-DZyMQ3Bu.js";import"./useCollapsiblePanel-DOTGH3aY.js";import"./dot-BPTFyBm5.js";import"./separator-C7Zm_6nS.js";import"./Separator-DssPvI5G.js";import"./parseDisplayValue-Bw9YBrG4.js";import"./apiUrl-CtX1NveE.js";const o=s=>({suppliers:{isSuppliersSideSheetOpen:!0,selectedSupplier:s}}),A={title:"Product examples/Suppliers/SuppliersSideSheet",id:"modules-suppliers-supplierssidesheet",component:i,tags:["autodocs"],parameters:{layout:"fullscreen",route:"/suppliers",docs:{description:{component:"Read-only supplier detail `SideSheet` (p-0, max 800px, no footer), portalled to `#portal-root`. Its header is a `DetailHeader` with the supplier name and the formatted supplier type; the body is `SuppliersDetailView`. It renders only while `suppliers.isSuppliersSideSheetOpen` is true and a `selectedSupplier` is set, which a row click in the suppliers table does; closing clears both. Lazy-mounted by 1 file, `src/GlobalUI.tsx`, after the first open. Source: `src/modules/Suppliers/SuppliersForm/SuppliersSideSheet.tsx`."}}}},e={parameters:{store:{preloadedState:o(a)}}},r={parameters:{store:{preloadedState:o(l)}}},t={parameters:{store:{preloadedState:o(n)}}},p={parameters:{store:{preloadedState:o(d)}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
