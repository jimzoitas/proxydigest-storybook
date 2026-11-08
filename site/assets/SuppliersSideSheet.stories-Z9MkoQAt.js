import i from"./SuppliersSideSheet-GE4WjE2n.js";import{p as a,d as l,o as n,s as d}from"./suppliersStoryFixtures-DuqSuwJA.js";import"./iframe-6uZ_OvXJ.js";import"./preload-helper-PPVm8Dsz.js";import"./side-sheet-B1_ZmcZ7.js";import"./sheet-024fQP7m.js";import"./overlay-dialog-_C1niahL.js";import"./index-BIEDR5QJ.js";import"./button-A8HzViyP.js";import"./loader-circle-DPzNQWfU.js";import"./tooltip-core-Ddkl4sOF.js";import"./panel-left-CatA2Q48.js";import"./external-link-D6KuruoI.js";import"./DetailHeader-fBs8Zy0u.js";import"./SuppliersDetailView-CK5SB4aO.js";import"./DetailSection-DMnQq-Rh.js";import"./KeyValueList-D4IN1McO.js";import"./collapsible-D5z7BIl8.js";import"./useCollapsiblePanel-CEEvXl-2.js";import"./dot-DJtYp8fS.js";import"./separator-CkvihxIh.js";import"./Separator-UJ0jSiK3.js";import"./parseDisplayValue-DSIM78G1.js";import"./apiUrl-o8N8i6mn.js";const o=s=>({suppliers:{isSuppliersSideSheetOpen:!0,selectedSupplier:s}}),A={title:"Product examples/Suppliers/SuppliersSideSheet",id:"modules-suppliers-supplierssidesheet",component:i,tags:["autodocs"],parameters:{layout:"fullscreen",route:"/suppliers",docs:{description:{component:"Read-only supplier detail `SideSheet` (p-0, max 800px, no footer), portalled to `#portal-root`. Its header is a `DetailHeader` with the supplier name and the formatted supplier type; the body is `SuppliersDetailView`. It renders only while `suppliers.isSuppliersSideSheetOpen` is true and a `selectedSupplier` is set, which a row click in the suppliers table does; closing clears both. Lazy-mounted by 1 file, `src/GlobalUI.tsx`, after the first open. Source: `src/modules/Suppliers/SuppliersForm/SuppliersSideSheet.tsx`."}}}},e={parameters:{store:{preloadedState:o(a)}}},r={parameters:{store:{preloadedState:o(l)}}},t={parameters:{store:{preloadedState:o(n)}}},p={parameters:{store:{preloadedState:o(d)}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
