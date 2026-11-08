import{j as u,r as l}from"./iframe-6uZ_OvXJ.js";import{u as v}from"./index-CEZdZdBw.js";import{D as g}from"./table-footer-CnmAOHQy.js";import{a as z,g as A}from"./index-DRlY9EGU.js";import"./preload-helper-PPVm8Dsz.js";import"./button-A8HzViyP.js";import"./index-BIEDR5QJ.js";import"./loader-circle-DPzNQWfU.js";import"./helpers-Bv26rxH5.js";import"./chevrons-right-BhJPoqIC.js";import"./chevron-left-ByPwEqFW.js";import"./chevron-right-DQAu3Wv6.js";const D=e=>({id:`prod-${e+1}`,name:`Product ${e+1}`,description:"Storybook fixture",createdAt:"2026-02-03T10:15:00Z",updatedAt:"2026-03-01T08:00:00Z",createdBy:"Alex Storybook",tenantId:1}),k=[{accessorKey:"name",header:"Name"},{accessorKey:"description",header:"Description"}];function M({rowCount:e=50,manualPageCount:d,pageIndex:b=0,pageSize:m=10,enableRowSelection:w=!1,selectedIds:S=[],...f}){const[y]=l.useState(()=>Array.from({length:d?m:e},(p,I)=>D(I))),[C,x]=l.useState({pageIndex:b,pageSize:m}),[h,P]=l.useState(()=>Object.fromEntries(S.map(p=>[p,!0]))),R=v({data:y,columns:k,state:{pagination:C,rowSelection:h},onPaginationChange:x,onRowSelectionChange:P,getRowId:p=>p.id,getCoreRowModel:A(),enableRowSelection:w,enableMultiRowSelection:!0,...d?{manualPagination:!0,pageCount:d}:{getPaginationRowModel:z()}});return u.jsx(g,{...f,table:R})}const Z={title:"Components/Data Display/Data Grid/Internals/DataTablePagination",id:"design-system-data-table-datatablepagination",component:g,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Design-system version of `src/components/proxy-reusables/table/components/table-footer.tsx`. Its source is `src/design-system/components/data-table/components/table-footer.tsx`; the usage notes below describe the original. Pagination footer rendered under every paginated DataTable: an optional 'X of Y row(s) selected' summary (only when the table has row selection, i.e. isCheckboxVisible), a 'Rows per page' Select, 'Page N of M' and outline icon buttons for first, previous, next and last page (first/last hidden below lg; the row stacks below sm). Used by 1 file, src/components/proxy-reusables/table/components/table-body.tsx. Source: src/components/proxy-reusables/table/components/table-footer.tsx."}}},args:{rowCount:50,pageIndex:0,pageSize:10,enableRowSelection:!1},argTypes:{table:{control:!1,description:"TanStack table; built by the story harness"},pageSizeOptions:{control:"object"},className:{control:"text"},rowCount:{control:"number",description:"Harness: rows paginated client-side"},manualPageCount:{control:"number",description:"Harness: server-side page count (manualPagination)"},pageIndex:{control:"number",description:"Harness: initial page index"},pageSize:{control:"number",description:"Harness: initial page size"},enableRowSelection:{control:"boolean",description:"Harness: enables the selection summary"},selectedIds:{control:"object",description:"Harness: row ids selected on mount"}},render:e=>u.jsx(M,{...e})},o={args:{manualPageCount:12}},t={args:{rowCount:50,pageIndex:0}},s={args:{rowCount:50,pageIndex:2}},r={args:{rowCount:50,pageIndex:4}},a={args:{rowCount:25,enableRowSelection:!0,selectedIds:["prod-2","prod-5","prod-7"]}},n={args:{rowCount:6}},i={args:{pageSizeOptions:[5,25,100],rowCount:120,pageSize:25}},c={args:{className:"pf-story-data-grid-table-footer-footer-surface",rowCount:30}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    manualPageCount: 12
  }
}`,...o.parameters?.docs?.source},description:{story:"A list module's table: server-side pagination (12 pages known from the API meta), no selection column.",...o.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    rowCount: 50,
    pageIndex: 0
  }
}`,...t.parameters?.docs?.source},description:{story:"First page: previous/first buttons disabled.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    rowCount: 50,
    pageIndex: 2
  }
}`,...s.parameters?.docs?.source},description:{story:"A middle page: every button enabled.",...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    rowCount: 50,
    pageIndex: 4
  }
}`,...r.parameters?.docs?.source},description:{story:"Last page: next/last buttons disabled.",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    rowCount: 25,
    enableRowSelection: true,
    selectedIds: ["prod-2", "prod-5", "prod-7"]
  }
}`,...a.parameters?.docs?.source},description:{story:"With row selection enabled (isCheckboxVisible tables) the left summary appears.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    rowCount: 6
  }
}`,...n.parameters?.docs?.source},description:{story:"Everything fits on one page: all four buttons disabled.",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    pageSizeOptions: [5, 25, 100],
    rowCount: 120,
    pageSize: 25
  }
}`,...i.parameters?.docs?.source},description:{story:"Custom `pageSizeOptions` (the app never overrides the default [10, 20, 30, 40, 50]).",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    className: "pf-story-data-grid-table-footer-footer-surface",
    rowCount: 30
  }
}`,...c.parameters?.docs?.source},description:{story:"Extra classes reach the wrapper.",...c.parameters?.docs?.description}}};const $=["AsServerSideListFooter","FirstPage","MiddlePage","LastPage","WithRowSelection","SinglePage","CustomPageSizes","WithClassName"];export{o as AsServerSideListFooter,i as CustomPageSizes,t as FirstPage,r as LastPage,s as MiddlePage,n as SinglePage,c as WithClassName,a as WithRowSelection,$ as __namedExportsOrder,Z as default};
