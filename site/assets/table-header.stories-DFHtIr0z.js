import{j as t,r as w,g as A}from"./iframe-6uZ_OvXJ.js";/* empty css                      */import{u as M}from"./index-CEZdZdBw.js";import{T as U,a as W,b as H,c as Z,d as Q,e as F}from"./table-CxmeLn9K.js";import{D as O}from"./table-header-T_FgDZ52.js";import{b as G,g as Y}from"./index-DRlY9EGU.js";import"./preload-helper-PPVm8Dsz.js";import"./dropdown-menu-CH01PJiV.js";import"./menu-BB0nZVv8.js";import"./CompositeItem-DiKjTF7g.js";import"./useCompositeItem-CEgqY0th.js";import"./Separator-UJ0jSiK3.js";import"./chevron-right-DQAu3Wv6.js";import"./circle-BOSVkkPm.js";import"./helpers-Bv26rxH5.js";import"./arrow-up-DejSgtne.js";import"./arrow-down-LFNtcj0H.js";import"./arrow-up-down-lGFirNY0.js";import"./eye-off-BWZ1kMBz.js";import"./panel-left-CatA2Q48.js";import"./panel-right-Bw6XECzh.js";import"./pin-off-BFmEXCuD.js";import"./ellipsis-BdoQ7bBK.js";const{expect:S,within:R}=__STORYBOOK_MODULE_TEST__,q=[{id:"prod-1",name:"Oat barista blend",description:"Foamable oat drink for coffee bars",createdAt:"2026-02-03T10:15:00Z",updatedAt:"2026-03-01T08:00:00Z",createdBy:"Alex Storybook",tenantId:1,category:{id:"cat-1",name:"Beverages"}},{id:"prod-2",name:"Protein granola",description:"High protein clusters with pea crisps",createdAt:"2026-01-20T14:45:00Z",updatedAt:"2026-02-11T16:30:00Z",createdBy:"Alex Storybook",tenantId:1,category:{id:"cat-2",name:"Cereals"}}];function J({columnOptions:n,initialSorting:a=!1,initialPinning:v=!1,columnSize:P=240,title:C,...K}){const s=n?.accessorKey??"name",D=[{accessorKey:s,id:s,header:C,size:P,enableSorting:n?.enableSorting,enableHiding:n?.enableHiding,enablePinning:n?.enablePinning,meta:n?.meta}],[I,j]=w.useState(a?[{id:s,desc:a==="desc"}]:[]),[k,B]=w.useState({}),[E,z]=w.useState(v?{[v]:[s]}:{}),x=M({data:q,columns:D,state:{sorting:I,columnVisibility:k,columnPinning:E},onSortingChange:j,onColumnVisibilityChange:B,onColumnPinningChange:z,getCoreRowModel:Y(),getSortedRowModel:G()}),e=x.getColumn(s);if(!e)return null;const N=e.getSize(),_=e.columnDef.meta?.cellAlignment==="right"||!e.columnDef.meta?.cellAlignment&&e.columnDef.meta?.type==="number",V=e.columnDef.meta?.cellAlignment==="center",L=A("pf-story-data-grid-table-header-cell",_?"pf-story-align-end":V?"pf-story-align-center":"pf-story-align-start");return t.jsxs("div",{className:"pf-story-data-grid-table-header-preview",children:[t.jsxs(U,{className:"pf-story-fixed-table",style:{width:N},containerClassName:"pf-story-data-grid-table-header-table-frame",children:[t.jsx(W,{className:"pf-story-data-grid-table-header-header-surface",children:t.jsx(H,{className:"pf-story-data-grid-table-header-header-row",children:t.jsx(Z,{className:"pf-story-data-grid-table-header-header-cell",style:{width:N},children:e.getIsVisible()?t.jsx(O,{...K,column:e,title:C}):t.jsx("button",{type:"button",className:"pf-story-data-grid-table-header-header-help",onClick:()=>e.toggleVisibility(!0),children:"Column hidden. Click to show it again."})})})}),e.getIsVisible()&&t.jsx(Q,{children:x.getRowModel().rows.map(T=>t.jsx(H,{children:t.jsx(F,{className:A("pf-story-data-grid-table-header-body-cell",L),children:String(T.getValue(s)??"")})},T.id))})]}),t.jsxs("p",{className:"pf-story-data-grid-table-header-help",children:["Sorting: ",e.getIsSorted()||"none"," · Pinned:"," ",e.getIsPinned()||"no"]})]})}const ve={title:"Components/Data Display/Data Grid/Internals/DataTableColumnHeader",id:"design-system-data-table-datatablecolumnheader",component:O,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Design-system version of `src/components/proxy-reusables/table/components/table-header.tsx`. Source: `src/design-system/components/data-table/components/table-header.tsx`. The title is plain text aligned with the cell values below it (the th provides the padding); clicking it does nothing. **At rest the title gets the whole cell width** and only truncates (with the full text as a tooltip) when the column itself is too narrow. A small sort button sits right next to the title: while the column is unsorted it takes no space until the header is hovered or focused (it may then shorten a long title); while sorted it is always shown. It cycles unsorted → ascending → descending → unsorted. The ⋯ menu is an overlay at the far edge of the cell (inside the padding, clear of the resize handle) that fades in on hover / focus and stays while open; it takes no space and its header-coloured background covers the end of a long title. When the column also sorts, room for the ⋯ is reserved on hover so it never covers the sort button. The menu offers Sort ascending / descending, Hide column (disabled when the column can't hide) and Pin to left / right / Unpin. Number columns (or `meta.cellAlignment` right) mirror the layout: ⋯ on the left, sort, then the title flush right. If the column can neither sort, hide nor pin, only the title renders. Hover the header (or Tab into it) to see the controls."}}},args:{title:"Name",initialSorting:!1,initialPinning:!1},argTypes:{title:{control:"text"},className:{control:"text"},column:{control:!1,description:"TanStack Column; built by the story harness"},initialSorting:{control:"radio",options:[!1,"asc","desc"],description:"Harness: initial sorting state of the column"},initialPinning:{control:"radio",options:[!1,"left","right"],description:"Harness: initial pinning side of the column"},columnSize:{control:{type:"number",min:40,step:8},description:"Harness: column width in px (default 240)"},columnOptions:{control:"object",description:"Harness: column definition flags (enableSorting, enableHiding, enablePinning, meta)"}},render:n=>t.jsx(J,{...n})},r={args:{title:"Name"}},o={args:{title:"Name",initialSorting:"asc"},play:async({canvasElement:n})=>{const a=R(n);await S(a.getByRole("button",{name:"Sort descending"})).not.toHaveClass("pf-table-header-slot-end-reveal")}},i={args:{title:"Created",initialSorting:"desc",columnOptions:{accessorKey:"createdAt",meta:{type:"date"}}}},l={args:{title:"Description",columnOptions:{accessorKey:"description",enableSorting:!1,enableHiding:!1,enablePinning:!1}}},c={args:{title:"Category",columnOptions:{accessorKey:"category.name",meta:{disableSorting:!0}}}},d={args:{title:"Name",columnOptions:{accessorKey:"name",enableHiding:!1,enablePinning:!1}}},m={args:{title:"Tenant",columnOptions:{accessorKey:"tenantId",meta:{type:"number"}}}},p={args:{title:"Tenant",initialSorting:"desc",columnOptions:{accessorKey:"tenantId",meta:{type:"number"}}}},g={args:{title:"Name",initialPinning:"left"}},u={args:{title:"Created by",columnOptions:{accessorKey:"createdBy",meta:{cellAlignment:"center"}}}},h={args:{title:"A very long column title that will not fit in the header cell",initialSorting:"asc"}},y={args:{title:"Cost",columnSize:96,columnOptions:{accessorKey:"tenantId"}},play:async({canvasElement:n})=>{const a=R(n);await S(a.getByTitle("Cost")).toHaveTextContent("Cost"),await S(a.getByRole("button",{name:"Sort ascending"})).toHaveClass("pf-table-header-slot-end-reveal"),await S(a.getByRole("button",{name:"Column actions for Cost"})).toBeInTheDocument()}},b={args:{title:"Qty",columnSize:96,columnOptions:{accessorKey:"tenantId",meta:{type:"number"}}}},f={args:{title:"Name",className:"pf-story-data-grid-table-header-hint"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Name"
  }
}`,...r.parameters?.docs?.source},description:{story:"A regular text column: sort and ⋯ menu appear on hover; the title lines up with the cells.",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Name",
    initialSorting: "asc"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Sorted: the sort button keeps its space (no zero-width collapse).
    await expect(canvas.getByRole("button", {
      name: "Sort descending"
    })).not.toHaveClass("pf-table-header-slot-end-reveal");
  }
}`,...o.parameters?.docs?.source},description:{story:'Sorted ascending: the ArrowUp sort button stays visible; "Sort ascending" is checked in the menu.',...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Created",
    initialSorting: "desc",
    columnOptions: {
      accessorKey: "createdAt",
      meta: {
        type: "date"
      }
    }
  }
}`,...i.parameters?.docs?.source},description:{story:"Sorted descending: ArrowDown stays visible; the next click clears sorting.",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Description",
    columnOptions: {
      accessorKey: "description",
      enableSorting: false,
      enableHiding: false,
      enablePinning: false
    }
  }
}`,...l.parameters?.docs?.source},description:{story:"Can neither sort, hide nor pin: just the plain title, no controls.",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Category",
    columnOptions: {
      accessorKey: "category.name",
      meta: {
        disableSorting: true
      }
    }
  }
}`,...c.parameters?.docs?.source},description:{story:"Non-sortable (`meta.disableSorting`): no sort button; the menu offers Hide and Pin only.",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Name",
    columnOptions: {
      accessorKey: "name",
      enableHiding: false,
      enablePinning: false
    }
  }
}`,...d.parameters?.docs?.source},description:{story:"`enableHiding: false` (the app's name/description columns): no Hide option in the menu.",...d.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Tenant",
    columnOptions: {
      accessorKey: "tenantId",
      meta: {
        type: "number"
      }
    }
  }
}`,...m.parameters?.docs?.source},description:{story:"Number columns are right-aligned: ⋯ at the far left, then sort, then the title flush right.",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Tenant",
    initialSorting: "desc",
    columnOptions: {
      accessorKey: "tenantId",
      meta: {
        type: "number"
      }
    }
  }
}`,...p.parameters?.docs?.source},description:{story:"Right-aligned and sorted: the sort arrow stays visible just left of the title.",...p.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Name",
    initialPinning: "left"
  }
}`,...g.parameters?.docs?.source},description:{story:'Pinned left: the menu shows a check on "Pin to left" and offers "Unpin".',...g.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Created by",
    columnOptions: {
      accessorKey: "createdBy",
      meta: {
        cellAlignment: "center"
      }
    }
  }
}`,...u.parameters?.docs?.source},description:{story:'`meta.cellAlignment: "center"` centres the title; the ⋯ menu stays at the right edge.',...u.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: "A very long column title that will not fit in the header cell",
    initialSorting: "asc"
  }
}`,...h.parameters?.docs?.source},description:{story:"Long titles truncate (full text in the tooltip); the ⋯ overlay covers the end on hover and never leaves the cell.",...h.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Cost",
    columnSize: 96,
    columnOptions: {
      accessorKey: "tenantId"
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // The full title is also the tooltip, for when the column is too narrow.
    await expect(canvas.getByTitle("Cost")).toHaveTextContent("Cost");
    // Unsorted: the sort button takes no width until hover / focus.
    await expect(canvas.getByRole("button", {
      name: "Sort ascending"
    })).toHaveClass("pf-table-header-slot-end-reveal");
    await expect(canvas.getByRole("button", {
      name: "Column actions for Cost"
    })).toBeInTheDocument();
  }
}`,...y.parameters?.docs?.source},description:{story:`A short title in a narrow column (96px) stays fully visible: the sort and ⋯
controls take no space until the header is hovered (then the title may
shorten to make room for them).`,...y.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Qty",
    columnSize: 96,
    columnOptions: {
      accessorKey: "tenantId",
      meta: {
        type: "number"
      }
    }
  }
}`,...b.parameters?.docs?.source},description:{story:"Narrow right-aligned number column: the title stays flush right and fully visible.",...b.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Name",
    className: "pf-story-data-grid-table-header-hint"
  }
}`,...f.parameters?.docs?.source},description:{story:"Extra classes reach the header root.",...f.parameters?.docs?.description}}};const Ce=["SortableAndHideable","SortedAscending","SortedDescending","StaticTitle","HideOnly","SortOnly","RightAlignedNumber","RightAlignedNumberSorted","PinnedLeft","CenterAligned","LongTitle","NarrowColumn","NarrowRightAlignedNumber","WithClassName"];export{u as CenterAligned,c as HideOnly,h as LongTitle,y as NarrowColumn,b as NarrowRightAlignedNumber,g as PinnedLeft,m as RightAlignedNumber,p as RightAlignedNumberSorted,d as SortOnly,r as SortableAndHideable,o as SortedAscending,i as SortedDescending,l as StaticTitle,f as WithClassName,Ce as __namedExportsOrder,ve as default};
