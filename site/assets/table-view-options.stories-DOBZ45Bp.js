import{j as e,r as y}from"./iframe-BXubdNpd.js";import{u as g}from"./index-B8f7Yysh.js";import{c as f}from"./ProductsTableColumns-Dtpbi-Ro.js";import{B as h}from"./badge-C4iUsAGF.js";import{D as l}from"./table-view-options-28eGDG9P.js";import{g as C}from"./index-DRlY9EGU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DKWiT4Fi.js";import"./dialog-Gbr7wu8m.js";import"./overlay-dialog-CQZe9RQv.js";import"./button-DOg3bB7T.js";import"./loader-circle-WJxMtqtu.js";import"./settings-2-COf8Dv6f.js";const x=[{id:"prod-1",name:"Oat barista blend",description:"Foamable oat drink for coffee bars",createdAt:"2026-02-03T10:15:00Z",updatedAt:"2026-03-01T08:00:00Z",createdBy:"Alex Storybook",tenantId:1,category:{id:"cat-1",name:"Beverages"}}],v=[{accessorKey:"name",id:"name",header:()=>e.jsx("span",{children:"Name"})},{accessorKey:"description",id:"description",header:()=>e.jsx("span",{children:"Description"})},{accessorKey:"createdAt",id:"document_types",header:()=>e.jsx("span",{children:"Types"})}],w=[{accessorKey:"name",header:"Name",enableHiding:!1},{accessorKey:"description",header:"Description",enableHiding:!1}];function V({columns:n=f,columnVisibility:m,...p}){const[u,b]=y.useState(()=>{const s={};return n.forEach(c=>{c.meta?.isVisible===!1&&c.id&&(s[c.id]=!1)}),{...s,...m}}),d=g({data:x,columns:n,state:{columnVisibility:u},onColumnVisibilityChange:b,getCoreRowModel:C()});return e.jsxs("div",{className:"pf-story-data-grid-table-view-options-controls",children:[e.jsx(l,{...p,table:d}),e.jsxs("div",{className:"pf-story-data-grid-table-view-options-visibility-summary",children:["Visible:",d.getVisibleLeafColumns().map(s=>e.jsx(h,{variant:"secondary",className:"pf-story-data-grid-table-view-options-visibility-tag",children:typeof s.columnDef.header=="string"?s.columnDef.header:s.id},s.id))]})]})}const M={title:"Components/Data Display/Data Grid/Internals/DataTableViewOptions",id:"design-system-data-table-datatableviewoptions",component:l,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Design-system version of `src/components/proxy-reusables/table/components/table-view-options.tsx`. Its source is `src/design-system/components/data-table/components/table-view-options.tsx`; the usage notes below describe the original. The 'View' column-visibility toggle of the table toolbars: an outline sm Button (Settings2, role=combobox) opening a Popover with a searchable Command list of the hideable accessor columns, each with a trailing Check when visible. Used by 18 toolbar files (src/modules/Products/ProductsTable/ProductsTableChildren.tsx, src/modules/Equipment/EquipmentTableChildren.tsx, src/modules/CDI/CDITable/CDITableToolbar.tsx). Source: src/components/proxy-reusables/table/components/table-view-options.tsx."}}},argTypes:{table:{control:!1,description:"TanStack table; built by the story harness"},columns:{control:!1,description:"Harness: column definitions"},columnVisibility:{control:"object",description:"Harness: visibility overrides"}},render:n=>e.jsx(V,{...n})},t={args:{}},o={args:{columnVisibility:{createdAt:!0,updatedAt:!0,createdBy:!0}}},a={args:{columnVisibility:{"category.name":!1,createdAt:!1,updatedAt:!1,createdBy:!1}}},r={args:{columns:v}},i={args:{columns:w}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...t.parameters?.docs?.source},description:{story:"Products toolbar: name/description are not hideable, Created/Updated/Created By start hidden (`meta.isVisible: false`).",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    columnVisibility: {
      createdAt: true,
      updatedAt: true,
      createdBy: true
    }
  }
}`,...o.parameters?.docs?.source},description:{story:"Every hideable column visible: each row carries a Check.",...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    columnVisibility: {
      "category.name": false,
      createdAt: false,
      updatedAt: false,
      createdBy: false
    }
  }
}`,...a.parameters?.docs?.source},description:{story:"Most columns hidden: the Checks are transparent (opacity-0).",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    columns: functionHeaderColumns
  }
}`,...r.parameters?.docs?.source},description:{story:'Function-form headers fall back to upperFirst(column.id), e.g. "Document_types".',...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    columns: noHideableColumns
  }
}`,...i.parameters?.docs?.source},description:{story:'No hideable columns at all: the list is empty and shows "No columns found.".',...i.parameters?.docs?.description}}};const O=["AsProductsToolbar","AllColumnsVisible","MostColumnsHidden","NonStringHeaders","NoHideableColumns"];export{o as AllColumnsVisible,t as AsProductsToolbar,a as MostColumnsHidden,i as NoHideableColumns,r as NonStringHeaders,O as __namedExportsOrder,M as default};
