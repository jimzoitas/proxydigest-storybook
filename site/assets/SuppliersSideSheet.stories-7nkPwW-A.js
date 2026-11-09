import i from"./SuppliersSideSheet-COYSNdOa.js";import{p as a,d as l,o as n,s as d}from"./suppliersStoryFixtures-BwbARWWd.js";import"./iframe-DgvZnKtv.js";import"./preload-helper-PPVm8Dsz.js";import"./side-sheet-I8kR9dzw.js";import"./sheet-BSYc4zIC.js";import"./overlay-dialog-i6vPmHIw.js";import"./index-BWlKOsdO.js";import"./button-CEcYiQdY.js";import"./loader-circle-BsZrs7F6.js";import"./tooltip-core-CEBHIfw_.js";import"./panel-left-D88YpPbL.js";import"./external-link-BJEc3Amj.js";import"./DetailHeader-BNoe9aTd.js";import"./SuppliersDetailView-CkGcdfp1.js";import"./DetailSection-D4qnrUr2.js";import"./KeyValueList-Buq_XkHz.js";import"./collapsible-BPKkR0Kq.js";import"./useCollapsiblePanel-jjkiJ8Ha.js";import"./dot-3Us1si8c.js";import"./separator-DZKac5zi.js";import"./Separator-BKJ0ZhJM.js";import"./parseDisplayValue-P1Ghs7CU.js";import"./apiUrl-o8N8i6mn.js";const o=s=>({suppliers:{isSuppliersSideSheetOpen:!0,selectedSupplier:s}}),A={title:"Product examples/Suppliers/SuppliersSideSheet",id:"modules-suppliers-supplierssidesheet",component:i,tags:["autodocs"],parameters:{layout:"fullscreen",route:"/suppliers",docs:{description:{component:"Read-only supplier detail `SideSheet` (p-0, max 800px, no footer), portalled to `#portal-root`. Its header is a `DetailHeader` with the supplier name and the formatted supplier type; the body is `SuppliersDetailView`. It renders only while `suppliers.isSuppliersSideSheetOpen` is true and a `selectedSupplier` is set, which a row click in the suppliers table does; closing clears both. Lazy-mounted by 1 file, `src/GlobalUI.tsx`, after the first open. Source: `src/modules/Suppliers/SuppliersForm/SuppliersSideSheet.tsx`."}}}},e={parameters:{store:{preloadedState:o(a)}}},r={parameters:{store:{preloadedState:o(l)}}},t={parameters:{store:{preloadedState:o(n)}}},p={parameters:{store:{preloadedState:o(d)}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
