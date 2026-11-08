import{j as e,r as P}from"./iframe-6uZ_OvXJ.js";/* empty css                      */import{c as I,f as K,e as o,a as B,T as V,u as L}from"./provider-CyKcivnd.js";import{T as U,a as _,b as z,c as W,d as $,e as Y}from"./table-CxmeLn9K.js";import{C as H}from"./table-cell-edit-DFj-hTEz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CEZdZdBw.js";import"./index-DRlY9EGU.js";import"./helpers-Bv26rxH5.js";import"./v4-EwEgHOG0.js";import"./input-xqFXePlz.js";import"./index.module-Db1hQFPV.js";import"./textarea-BIg20vtR.js";import"./output-ingredient-cell-CpP8xia2.js";import"./IngredientModalTrigger-CUmH2jzr.js";import"./tooltip-core-Ddkl4sOF.js";import"./file-text-nCD9I8Xm.js";import"./use-api-VM36FeDn.js";import"./jsonApiHandler-DHxZXfLw.js";import"./request-BbyBNZg4.js";import"./trackPosthogEvent-fthYs4K3.js";import"./apiUrl-o8N8i6mn.js";import"./component-name-with-external-id-CYAABj69.js";import"./ingredientExternalId-ACOjU166.js";import"./number-field-Ru33oSuc.js";import"./component-ingredient-cell-DdSZOunt.js";import"./button-A8HzViyP.js";import"./index-BIEDR5QJ.js";import"./loader-circle-DPzNQWfU.js";import"./GlobalSearchModal-Lf0syAO-.js";import"./dialog-DnvpmbSS.js";import"./overlay-dialog-_C1niahL.js";import"./index.es-z8489JTU.js";import"./use-paginated-api-CWOeq5kV.js";import"./skeleton-Bu9j_NfJ.js";import"./toggle-group-C1nrCotT.js";import"./CompositeItem-DiKjTF7g.js";import"./useCompositeItem-CEgqY0th.js";import"./roving-focus-0SK5-Aqb.js";import"./CompositeRoot-Av_o_W_V.js";import"./cooking-pot-D_JNOFZA.js";import"./badge-BfEYvfQV.js";import"./file-spreadsheet-BAZ-hhIc.js";import"./SearchByConfig-D5iGJPAi.js";import"./search-combobox-wrapper-BvBJnliu.js";import"./search-combobox-base-Des8xucS.js";import"./chevrons-up-down-pYK2jq1f.js";import"./search-combobox-server-EQthR1mJ.js";import"./plus-CjxSM-tB.js";import"./useFocusNextColumn-BcynM7fv.js";import"./check-check-Ijw77S4O.js";import"./initial-ingredient-cell-lNUS-4SE.js";import"./multi-select-cell-BDyT88Np.js";import"./circle-alert-COabV-gQ.js";const{expect:N,waitFor:Z,within:J}=__STORYBOOK_MODULE_TEST__,E={id:"ing-1",name:"Sunflower lecithin",notes:"Liquid, non-GMO, deoiled grade for bakery emulsions.",supplier:"sup-3",category:"emulsifier",costPerKg:12.75,temperature:-18,currency:"EUR",tags:["organic","non-gmo"],createdAt:"2026-02-03T14:30:00Z",reference:"LEC-0042"},Q={...E,id:"new-1",name:"",costPerKg:null,reference:""},X={...E,id:"ing-9",name:"",notes:"",supplier:"",category:"",costPerKg:-3,tags:[]},ee=I({name:o().required("Name is required"),supplier:o().required("Pick a supplier"),costPerKg:B().nullable().min(0,"Cost per kg cannot be negative").required("Cost per kg is required"),category:o().required("Category is required"),notes:o().required("Add a note"),tags:K().of(o()).min(1,"Add at least one tag")}),te=[{id:"sup-1",descr:"Nordic Grains",hint:"NL"},{id:"sup-2",descr:"ProteinWorks",hint:"DE"},{id:"sup-3",descr:"Lecico",hint:"FR"}],re=[{label:"Functional",options:[{id:"emulsifier",descr:"Emulsifier"},{id:"stabiliser",descr:"Stabiliser"}]},{label:"Bulk",options:[{id:"flour",descr:"Flour"},{id:"sugar",descr:"Sugar"}]}],q=[{id:"EUR",descr:"EUR"},{id:"USD",descr:"USD"}],se=[{value:"organic",label:"Organic"},{value:"non-gmo",label:"Non-GMO"},{value:"vegan",label:"Vegan"},{value:"allergen-free",label:"Allergen free"}],n={accessorKey:"name",header:"Ingredient",meta:{type:"text",defaultValue:""}},T={accessorKey:"costPerKg",header:"Cost / kg",size:140,meta:{type:"number",defaultValue:0}},ae={accessorKey:"temperature",header:"Storage °C",size:160,meta:{type:"number",allowNegative:!0,autoSize:!1,cellAlignment:"left"}},D={accessorKey:"currency",header:"Currency",size:140,meta:{type:"select",options:q,defaultValue:"EUR"}},O={accessorKey:"category",header:"Category",size:180,meta:{type:"select",optionGroups:re}},F={accessorKey:"notes",header:"Notes",size:320,meta:{type:"textarea"}},k={accessorKey:"supplier",header:"Supplier",size:220,meta:{type:"combobox",options:te}},j={accessorKey:"tags",header:"Tags",size:280,meta:{type:"multi-select",multiSelectOptions:se,multiSelectTriggerSearchOnFocus:!0,multiSelectPlaceholder:"Add tags"}},G={accessorKey:"createdAt",header:"Created",size:170,meta:{type:"date"}},oe={accessorKey:"reference",header:"Reference",size:140,meta:{type:"none"}},ne=[n,k,T,D,O,G];function ie({columns:t,schema:i}){const{table:r,startEditing:R,validateTable:A}=L(),s=r.getRowModel().rows[0];return P.useEffect(()=>{s&&R(s.id),s&&i&&A(i,s.id)},[]),s?e.jsxs(U,{className:"pf-story-fixed-table",containerClassName:"pf-story-overflow-panel",children:[e.jsx(_,{className:"pf-story-data-grid-table-cell-edit-cell-surface",children:e.jsx(z,{children:t.map((a,M)=>e.jsx(W,{className:"pf-story-data-grid-table-cell-edit-cell-copy",style:{width:a.size},children:typeof a.header=="string"?a.header:null},String(a.id??M)))})}),e.jsx($,{children:e.jsx(z,{children:s.getVisibleCells().map(a=>e.jsx(Y,{className:"pf-story-data-grid-table-cell-edit-edit-cell",style:{width:a.column.getSize()},children:e.jsx(H,{column:a.column,table:r,row:s,getValue:a.getValue})},a.id))})})]}):null}function ce({columns:t=ne,data:i=E,schema:r}){return e.jsx(V,{data:[i],columns:t,isLoading:!1,isPaginationVisible:!1,isEditable:!0,schema:r,children:e.jsx(ie,{columns:t,schema:r})})}const lt={title:"Components/Data Display/Data Grid/Internals/CustomCell",id:"design-system-data-table-customcell",component:H,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Design-system version of `src/components/proxy-reusables/table/components/table-cell-edit.tsx`. Its source is `src/design-system/components/data-table/components/table-cell-edit.tsx`; the usage notes below describe the original. Edit-mode cell editor dispatched on `meta.type`: ui/Select (flat options or optionGroups), SearchCombobox (client options or a server endpoint), ui/Input, NumberInput (min 0 unless allowNegative), Textarea, a read-only formatted date, the multi-select and ingredient pickers and the Feedback score cells, falling back to a text-xs span. It keeps local value state, writes to the provider draft through updateDraft and fires meta.onCellChange debounced by 300ms. Used by 1 file, src/components/proxy-reusables/table/components/table-cell-view.tsx, whenever a row is in edit mode. Source: src/components/proxy-reusables/table/components/table-cell-edit.tsx."}}},argTypes:{getValue:{control:!1,description:"Cell value getter; built by the story harness"},row:{control:!1,description:"TanStack Row; built by the story harness"},column:{control:!1,description:"TanStack Column; built by the story harness"},table:{control:!1,description:"TanStack table; built by the story harness"},columns:{control:!1,description:"Harness: column definitions (meta.type drives the editor)"},data:{control:"object",description:"Harness: the row being edited"},schema:{control:!1,description:"Harness: yup schema the row is validated against on mount"}},render:t=>e.jsx(ce,{...t})},c={args:{}},l={args:{columns:[n]}},d={args:{columns:[T]}},m={args:{columns:[ae]}},p={args:{columns:[D]}},u={args:{columns:[O]}},g={args:{columns:[F]}},b={args:{columns:[k]}},y={args:{columns:[j]}},h={args:{columns:[G]}},f={args:{columns:[oe]}},x={args:{columns:[{...n,size:180},k,T,O,F,j],data:X,schema:ee}},w={args:{columns:[j],data:E,schema:I({tags:K().of(o()).min(3,"Add at least three tags")})},play:async({canvasElement:t})=>{const r=await J(t).findByTestId("multi-search-select-input");await Z(()=>N(r).toHaveAttribute("aria-invalid","true"));const R=r.closest("[data-invalid]"),A=r.getAttribute("aria-describedby")??"";N(t.ownerDocument.getElementById(A)).toHaveTextContent("Add at least three tags"),R?.querySelectorAll("button").forEach(s=>{N(s).not.toHaveAttribute("aria-invalid")})}},C={args:{columns:[{...n,meta:{type:"text",disabled:!0}},{...D,meta:{type:"select",options:q,disabled:!0}}]}},v={args:{columns:[{...n,meta:{type:"text",disableEdit:!0}}]}},S={args:{columns:[{...n,meta:{type:"text",disableEdit:!0}},T],data:Q}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...c.parameters?.docs?.source},description:{story:"An editable row as the app shows it: text, combobox, number, select, grouped select and a read-only date.",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [textColumn]
  }
}`,...l.parameters?.docs?.source},description:{story:'`type: "text"`: ui/Input on a bg-background surface.',...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [numberColumn]
  }
}`,...d.parameters?.docs?.source},description:{story:'`type: "number"`: NumberInput, min 0, auto-sized to its content, right-aligned.',...d.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [negativeNumberColumn]
  }
}`,...m.parameters?.docs?.source},description:{story:"`allowNegative` and `autoSize: false` (Equipment variables): full-width input that accepts negatives.",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [selectColumn]
  }
}`,...p.parameters?.docs?.source},description:{story:'`type: "select"` with flat options.',...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [groupedSelectColumn]
  }
}`,...u.parameters?.docs?.source},description:{story:'`type: "select"` with `optionGroups`: SelectGroup, SelectLabel and separators.',...u.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [textareaColumn]
  }
}`,...g.parameters?.docs?.source},description:{story:'`type: "textarea"`.',...g.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [comboboxColumn]
  }
}`,...b.parameters?.docs?.source},description:{story:'`type: "combobox"` with client `meta.options` (label, value and hint).',...b.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [multiSelectColumn]
  }
}`,...y.parameters?.docs?.source},description:{story:'`type: "multi-select"` with static options.',...y.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [dateColumn]
  }
}`,...h.parameters?.docs?.source},description:{story:'`type: "date"` is never editable: formatted text ("dd/MM/yyyy, hh:mm").',...h.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [referenceColumn]
  }
}`,...f.parameters?.docs?.source},description:{story:"An unknown type falls back to a text-xs span with the raw value.",...f.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      ...textColumn,
      size: 180
    }, comboboxColumn, numberColumn, groupedSelectColumn, textareaColumn, multiSelectColumn],
    data: invalidRow,
    schema: editRowSchema
  }
}`,...x.parameters?.docs?.source},description:{story:`Every editor with a validation error: the field border turns danger (focus
ring too), the control gets aria-invalid and aria-describedby, and hovering or
focusing the editor shows its message. Fixing a value clears its error at once.`,...x.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [multiSelectColumn],
    data: row,
    schema: yup.object({
      tags: yup.array().of(yup.string()).min(3, "Add at least three tags")
    }) as yup.ObjectSchema<Partial<EditRow>>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByTestId("multi-search-select-input");
    await waitFor(() => expect(input).toHaveAttribute("aria-invalid", "true"));
    const frame = input.closest<HTMLElement>("[data-invalid]");
    const describedBy = input.getAttribute("aria-describedby") ?? "";
    expect(canvasElement.ownerDocument.getElementById(describedBy)).toHaveTextContent("Add at least three tags");
    frame?.querySelectorAll("button").forEach(button => {
      expect(button).not.toHaveAttribute("aria-invalid");
    });
  }
}`,...w.parameters?.docs?.source},description:{story:`A multi-select with tags selected and an error: aria-invalid and
aria-describedby go on its input (the combobox), not on a tag's Remove
button, and only the field turns danger, not its open options list.`,...w.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      ...textColumn,
      meta: {
        type: "text",
        disabled: true
      }
    }, {
      ...selectColumn,
      meta: {
        type: "select",
        options: currencyOptions,
        disabled: true
      }
    }]
  }
}`,...C.parameters?.docs?.source},description:{story:"`meta.disabled`: the editor renders disabled.",...C.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      ...textColumn,
      meta: {
        type: "text",
        disableEdit: true
      }
    }]
  }
}`,...v.parameters?.docs?.source},description:{story:"`meta.disableEdit` on an existing row: the editor is disabled ...",...v.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      ...textColumn,
      meta: {
        type: "text",
        disableEdit: true
      }
    }, numberColumn],
    data: newRow
  }
}`,...S.parameters?.docs?.source},description:{story:'... but a new row (id "new-...") may still fill a `disableEdit` column.',...S.parameters?.docs?.description}}};const dt=["AsEditingRow","TextEditor","NumberEditor","NumberAllowNegativeFullWidth","SelectEditor","SelectGroupedEditor","TextareaEditor","ComboboxClientEditor","MultiSelectEditor","DateReadOnly","DefaultFallback","InvalidEditors","InvalidMultiSelectWithTags","DisabledEditor","DisableEditOnExistingRow","DisableEditOnNewRow"];export{c as AsEditingRow,b as ComboboxClientEditor,h as DateReadOnly,f as DefaultFallback,v as DisableEditOnExistingRow,S as DisableEditOnNewRow,C as DisabledEditor,x as InvalidEditors,w as InvalidMultiSelectWithTags,y as MultiSelectEditor,m as NumberAllowNegativeFullWidth,d as NumberEditor,p as SelectEditor,u as SelectGroupedEditor,l as TextEditor,g as TextareaEditor,dt as __namedExportsOrder,lt as default};
