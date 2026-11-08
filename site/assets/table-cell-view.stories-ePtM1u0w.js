import{j as e,r as G}from"./iframe-AqpYXns4.js";/* empty css                      */import{T as V,a as _,b as K,c as H,d as z}from"./table-DdxS99cd.js";import{T as U,u as W}from"./provider-C59A3RFb.js";import{V as O}from"./table-cell-view-6aAKiQ-A.js";import{L as F}from"./leaf-Dzi45INt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BGaQFUmx.js";import"./index-DZbIA93o.js";import"./helpers-DEgn9JgJ.js";import"./v4-EwEgHOG0.js";import"./table-DOkc2t6b.js";import"./table-cell-edit-gcXN8N_a.js";import"./input-DLCq6ZzS.js";import"./index.module-B2X8Wkxy.js";import"./textarea-uF5bUZhh.js";import"./output-ingredient-cell-C9Wc5V7R.js";import"./IngredientModalTrigger-DT1O9iNJ.js";import"./tooltip-core-B2gr90Lt.js";import"./file-text-cneRnGIV.js";import"./use-api-DWwVMkDM.js";import"./jsonApiHandler-Dm7XqYVj.js";import"./request-CjBGnTdg.js";import"./trackPosthogEvent-D3YuMJXm.js";import"./apiUrl-CtX1NveE.js";import"./component-name-with-external-id-Lz6ZVSJv.js";import"./ingredientExternalId-BEs0YHso.js";import"./number-field-DZ29WMCg.js";import"./component-ingredient-cell-rhJJU742.js";import"./button-B5FjjXWS.js";import"./index-DEXj3--c.js";import"./loader-circle-mWFWE2W9.js";import"./GlobalSearchModal-CcGZnyia.js";import"./dialog-DnXWbC45.js";import"./overlay-dialog-aVFq0bEi.js";import"./index.es-QUTdyhZn.js";import"./use-paginated-api-V0po_pzL.js";import"./skeleton-C_SNY4zC.js";import"./toggle-group-DO0OQdfk.js";import"./CompositeItem-D1wyjQOR.js";import"./useCompositeItem-QlszIeBN.js";import"./roving-focus-0SK5-Aqb.js";import"./CompositeRoot-yL7bK7Jd.js";import"./cooking-pot-CNjGHLaY.js";import"./badge-CQKobhLs.js";import"./file-spreadsheet-DT5RyHn5.js";import"./SearchByConfig-BwS2JSrg.js";import"./search-combobox-wrapper-CtTUbRue.js";import"./search-combobox-base-CuHuTJW4.js";import"./chevrons-up-down-Q_ZLaTHI.js";import"./search-combobox-server-BdgqnvXw.js";import"./plus-DzP923hm.js";import"./useFocusNextColumn-DouuCGGZ.js";import"./check-check-CwXQJexe.js";import"./initial-ingredient-cell-EpeGOR0-.js";import"./multi-select-cell-DCg22EFO.js";import"./circle-alert-CMkjFzHc.js";import"./truncated-markdown-BMtK9WjV.js";import"./encodeBlobUrl-FLx_wV7M.js";import"./document-mention-BYX0PbGQ.js";import"./markdown-table-C7cvUrXU.js";import"./table-cell-sizing-C0yGB5Oh.js";import"./chevrons-right-Ca-LUumR.js";import"./chevron-left-DLgfJc_O.js";import"./chevron-right-B3hyZT-D.js";import"./index-C9pEX-zO.js";import"./index-C6ZnvOnQ.js";import"./index-6EzalymI.js";import"./index-8G61PpGJ.js";import"./use-text-truncation-DJQMBD6R.js";const{fn:B}=__STORYBOOK_MODULE_TEST__,q={id:"ing-1",name:"Sunflower lecithin",notes:"Liquid, non-GMO, deoiled grade for bakery emulsions; store below 25°C and keep away from direct light.",supplier:"sup-3",region:{label:"Western Europe",value:"eu-west"},category:"emulsifier",costPerKg:12.75,currency:"EUR",createdAt:"2026-02-03T14:30:00Z",description:`**Sunflower lecithin** is a natural emulsifier.

- Improves dough handling
- Extends shelf life
- Replaces soy lecithin 1:1`},Y=[{id:"sup-1",descr:"Nordic Grains"},{id:"sup-2",descr:"ProteinWorks"},{id:"sup-3",descr:"Lecico"}],Z=[{label:"Functional",options:[{id:"emulsifier",descr:"Emulsifier"},{id:"stabiliser",descr:"Stabiliser"}]},{label:"Bulk",options:[{id:"flour",descr:"Flour"},{id:"sugar",descr:"Sugar"}]}],R=[{id:"EUR",descr:"Euro"},{id:"USD",descr:"US Dollar"}],r={accessorKey:"name",header:"Ingredient",meta:{type:"text"}},D={accessorKey:"notes",header:"Notes",size:200,meta:{type:"text"}},M={accessorKey:"supplier",header:"Supplier",meta:{type:"combobox",options:Y}},A={accessorKey:"region",header:"Region",meta:{type:"combobox",comboboxEndpoint:"/regions",comboboxLabelKey:"name"}},I={accessorKey:"category",header:"Category",meta:{type:"select",optionGroups:Z}},j={accessorKey:"costPerKg",header:"Cost / kg",size:120,meta:{type:"number"}},S={accessorKey:"currency",header:"Currency",size:120,meta:{type:"select",options:R,cellAlignment:"center"}},N={accessorKey:"createdAt",header:"Created",size:170,meta:{type:"date"}},L={accessorKey:"description",header:"Description",size:260,meta:{type:"markdown"}},J=[{...r,meta:{type:"text",isClickable:!0}},D,M,A,I,j,S,N,L];function Q({editing:o,columns:T,...k}){const{table:v,startEditing:P}=W(),s=v.getRowModel().rows[0];return G.useEffect(()=>{o&&s&&P(s.id)},[]),s?e.jsxs(V,{className:"pf-story-fixed-table",containerClassName:"pf-story-overflow-panel",children:[e.jsx(_,{className:"pf-story-data-grid-table-cell-view-cell-surface",children:e.jsx(K,{children:T.map((t,E)=>e.jsx(H,{className:"pf-story-data-grid-table-cell-view-cell-copy",style:{width:t.size},children:typeof t.header=="string"?t.header:null},String(t.id??E)))})}),e.jsx(z,{children:e.jsx(K,{children:s.getVisibleCells().map((t,E)=>e.jsx(O,{...k,row:s,cell:t,index:E},t.id))})})]}):null}function X({columns:o=J,data:T=q,shouldTruncate:k=!0,...v}){return e.jsx(U,{data:[T],columns:o,isLoading:!1,isPaginationVisible:!1,isEditable:!0,shouldTruncate:k,children:e.jsx(Q,{...v,columns:o})})}const yr={title:"Components/Data Display/Data Grid/Internals/ViewCell",id:"design-system-data-table-viewcell",component:O,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Design-system version of `src/components/proxy-reusables/table/components/table-cell-view.tsx`. Its source is `src/design-system/components/data-table/components/table-cell-view.tsx`; the usage notes below describe the original. Per-cell dispatcher driven by `columnDef.meta.type`. In edit mode it renders CustomCell (unless the column is disabled, disableEdit, actions or expander); otherwise a read-mode renderer: select (option descr lookup), combobox (server label or client option), date, ingredient-cost, percentage, the Feedback score cells, the ingredient pickers, markdown (1-line TruncatedMarkdown with a 15-line tooltip) or the default flexRender with truncation and a tooltip only when the text overflows. Used by 1 file, src/components/proxy-reusables/table/components/table-body.tsx, for every body cell of the app's tables. Source: src/components/proxy-reusables/table/components/table-cell-view.tsx."}}},args:{className:"pf-story-data-grid-table-cell-view-text-loading",onRowClick:B(),shouldTruncate:!0,editing:!1},argTypes:{className:{control:"text"},row:{control:!1,description:"TanStack Row; built by the story harness"},cell:{control:!1,description:"TanStack Cell; built by the story harness"},index:{control:!1},columns:{control:!1,description:"Harness: column definitions (meta.type drives the renderer)"},data:{control:"object",description:"Harness: the row data"},shouldTruncate:{control:"boolean",description:"Harness: TableProvider shouldTruncate"},editing:{control:"boolean",description:"Harness: start the row in edit mode"}},render:o=>e.jsx(X,{...o})},a={args:{}},n={args:{columns:[r]}},i={args:{columns:[D]}},c={args:{columns:[D],shouldTruncate:!1}},l={args:{columns:[r,j]}},m={args:{columns:[r,S]}},d={args:{columns:[{...S,meta:{type:"select",options:R}}]}},p={args:{columns:[I]}},u={args:{columns:[M]}},g={args:{columns:[A]}},y={args:{columns:[N]}},b={args:{columns:[L]}},h={args:{columns:[{...r,meta:{type:"text",isClickable:!0}}]}},C={args:{columns:[{...r,meta:{type:"text",isClickable:o=>o.id!=="ing-1"}}]}},f={args:{columns:[{...r,meta:{type:"text",showIcon:F}}]}},w={args:{editing:!0,columns:[r,j,{...S,meta:{type:"select",options:R}}]}},x={args:{editing:!0,columns:[r,{...N,meta:{type:"date",disableEdit:!0}}]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...a.parameters?.docs?.source},description:{story:"One row with every read-mode renderer DataTable passes the same className to.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [nameColumn]
  }
}`,...n.parameters?.docs?.source},description:{story:"Default text cell: flexRender inside a truncating div.",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [notesColumn]
  }
}`,...i.parameters?.docs?.source},description:{story:"Long text in a narrow column: truncated, with the full text in a TooltipCore on hover.",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [notesColumn],
    shouldTruncate: false
  }
}`,...c.parameters?.docs?.source},description:{story:"`shouldTruncate={false}` (TableCore shouldTruncate=false): the text wraps instead.",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [nameColumn, costColumn]
  }
}`,...l.parameters?.docs?.source},description:{story:"Number columns align right by default.",...l.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [nameColumn, currencyColumn]
  }
}`,...m.parameters?.docs?.source},description:{story:'`meta.cellAlignment: "center"`.',...m.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      ...currencyColumn,
      meta: {
        type: "select",
        options: currencyOptions
      }
    }]
  }
}`,...d.parameters?.docs?.source},description:{story:'`type: "select"`: the stored id is shown through its option `descr`.',...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [categoryColumn]
  }
}`,...p.parameters?.docs?.source},description:{story:'`type: "select"` with `optionGroups`: the lookup flattens the groups.',...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [supplierColumn]
  }
}`,...u.parameters?.docs?.source},description:{story:"Client combobox: the stored id resolves through `meta.options`.",...u.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [regionColumn]
  }
}`,...g.parameters?.docs?.source},description:{story:"Server combobox (`comboboxEndpoint`): the stored `{ label, value }` object shows its label.",...g.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [createdColumn]
  }
}`,...y.parameters?.docs?.source},description:{story:'`type: "date"`: formatted as "dd MMM yyyy, hh:mm".',...y.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [descriptionColumn]
  }
}`,...b.parameters?.docs?.source},description:{story:'`type: "markdown"`: one rendered line, the full markdown (15 lines) in a tooltip.',...b.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      ...nameColumn,
      meta: {
        type: "text",
        isClickable: true
      }
    }]
  }
}`,...h.parameters?.docs?.source},description:{story:"`meta.isClickable` with an `onRowClick`: pointer cursor and underline on hover.",...h.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      ...nameColumn,
      meta: {
        type: "text",
        isClickable: (data: CellRow) => data.id !== "ing-1"
      }
    }]
  }
}`,...C.parameters?.docs?.source},description:{story:"`meta.isClickable` as a predicate that rejects this row: no click affordance.",...C.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      ...nameColumn,
      meta: {
        type: "text",
        showIcon: Leaf
      }
    }]
  }
}`,...f.parameters?.docs?.source},description:{story:"`meta.showIcon`: a muted icon before the value.",...f.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    editing: true,
    columns: [nameColumn, costColumn, {
      ...currencyColumn,
      meta: {
        type: "select",
        options: currencyOptions
      }
    }]
  }
}`,...w.parameters?.docs?.source},description:{story:"The row is in edit mode: text, number and select cells delegate to CustomCell.",...w.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    editing: true,
    columns: [nameColumn, {
      ...createdColumn,
      meta: {
        type: "date",
        disableEdit: true
      }
    }]
  }
}`,...x.parameters?.docs?.source},description:{story:"`meta.disableEdit` columns stay in read mode even while the row is being edited.",...x.parameters?.docs?.description}}};const br=["AsTableRow","TextCell","TruncatedWithTooltip","NotTruncated","NumberRightAligned","CenterAligned","SelectCell","SelectGroupedCell","ComboboxClientCell","ComboboxServerValueCell","DateCell","MarkdownCell","ClickableCell","ClickablePredicateFalse","WithShowIcon","EditModeDelegatesToCustomCell","DisableEditStaysReadOnly"];export{a as AsTableRow,m as CenterAligned,h as ClickableCell,C as ClickablePredicateFalse,u as ComboboxClientCell,g as ComboboxServerValueCell,y as DateCell,x as DisableEditStaysReadOnly,w as EditModeDelegatesToCustomCell,b as MarkdownCell,c as NotTruncated,l as NumberRightAligned,d as SelectCell,p as SelectGroupedCell,n as TextCell,i as TruncatedWithTooltip,f as WithShowIcon,br as __namedExportsOrder,yr as default};
