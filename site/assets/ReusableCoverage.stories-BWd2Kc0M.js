import{a4 as I,r as s,j as e,aK as O,ci as H}from"./iframe-BXubdNpd.js";/* empty css                      */import{u as j}from"./index-B8f7Yysh.js";import{B as F}from"./button-DOg3bB7T.js";import{I as L}from"./input-dialog-DSOxmmTp.js";import{C as V}from"./float-button-0bATWmK2.js";import{D as q}from"./DetailTable-wzPsNQN4.js";import{u as M,F as _}from"./form-context-08E-Rivj.js";import{a as z}from"./form-provider-CkIJRpUe.js";import{C as G}from"./index-s4i74wnq.js";import{u as W}from"./form-CNzkM0u6.js";import{l as C,T as K}from"./provider-CjR5TBRf.js";import{C as U}from"./create-button-DAuRpSQo.js";import{I as $}from"./import-button-CS0Yen6h.js";import{R as E}from"./reset-filters-button-DNgXSPFN.js";import{D as J}from"./date-time-filter-B5dE5sVu.js";import{S as Y}from"./server-date-time-filter-Cuy1MMrC.js";import{N as Q}from"./numeric-range-filter-epg-VdG7.js";import{d as X}from"./faceted-filter-CkmRgI-t.js";import{T as Z}from"./tree-faceted-filter-DrJAy0rH.js";import{T as ee}from"./table-empty-state-Dec7JMnS.js";import{D as te}from"./table-view-options-28eGDG9P.js";import{L as ae}from"./LazyHoverInfo-BanxnW2p.js";import{P as ne}from"./package-CC18m6t3.js";import{P as re}from"./plus-BS0_boJY.js";import{D as ie}from"./download-Bw2ymobo.js";import{g as P}from"./index-DRlY9EGU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DKWiT4Fi.js";import"./loader-circle-WJxMtqtu.js";/* empty css                            */import"./dialog-Gbr7wu8m.js";import"./overlay-dialog-CQZe9RQv.js";import"./input-BWeqiJDe.js";import"./settings-2-COf8Dv6f.js";import"./table-BVVgfhwV.js";import"./tooltip-core-CGhIyYC9.js";import"./circle-question-mark-BVRiBpAc.js";import"./triangle-alert-BGpQ_lRK.js";import"./checkbox-R9lg0Zy-.js";import"./minus-BU5OS2V8.js";import"./useAriaLabelledBy-Dlr4qUIQ.js";import"./label-B-ScEoCq.js";import"./helpers-BIKk5uC9.js";import"./v4-EwEgHOG0.js";import"./file-DRjoCCjF.js";import"./separator-BKKMk4Xo.js";import"./Separator-DI4aBzER.js";import"./calendar-BP-114aW.js";import"./chevron-right-Bt7v18gP.js";import"./chevron-left-fIYzLx4k.js";import"./circle-x-Dpw0IbmW.js";import"./calendar-Csa6w4tT.js";import"./circle-plus-D3OehnXk.js";import"./badge-C4iUsAGF.js";import"./accordion-B-A_a53W.js";import"./roving-focus-0SK5-Aqb.js";import"./useCollapsiblePanel-C5JKJn3w.js";import"./index-CUx3qPLd.js";import"./collapsible-BboTV2_X.js";import"./context-menu-BnFk_3DL.js";import"./menu-B8QO56XI.js";import"./CompositeItem-CBKa8E3y.js";import"./useCompositeItem-Bi8YYZ7L.js";import"./circle-COTDYbAV.js";import"./folder-75hp4uO8.js";import"./box-BE4yTrmz.js";import"./proxy-C-AB1_6R.js";import"./list-chevrons-up-down-DmooE8iQ.js";import"./proxy-ai-qmhPwT9V.js";import"./SidebarSection-BcPh9Ke7.js";import"./dropdown-menu-DwRzzotf.js";import"./ExpandableTextTrigger-CaPE-zBF.js";import"./ellipsis-LPZ0y5bO.js";import"./search-field-DLF5WVFc.js";import"./index.module-B6UitgKw.js";import"./sheet-C-ICznI3.js";import"./skeleton-BP5S_qG6.js";import"./panel-left-C46OxOcL.js";import"./link-CkdKlHel.js";import"./GradientButton-KU-jgc31.js";import"./input-field-DuMzWZ-u.js";import"./number-field-BX-ukorA.js";import"./GradientIcon-Bb0JhmPS.js";import"./InfoAlert-Hu-KbKIZ.js";import"./circle-check-big-Di0Hj0Q7.js";import"./info-CdrzFsvH.js";import"./EmptyState-DCD9wIrq.js";import"./StatusIndicator-Cx5rgCHr.js";import"./QuickActionCard-BETlFEdB.js";import"./search-x-C2yC8CUZ.js";function D(n){const{onClick:t,disabled:a,label:r,type:u}=n,{reset:m}=W(),{formData:l}=M(),{t:p}=I("common"),c=s.useRef(null);return s.useEffect(()=>{!C.isEmpty(l)&&!C.isEqual(c.current,l)&&(c.current={...l},m(l))},[l,m]),e.jsx(F,{disabled:a,onClick:t,type:u??"submit",children:r??p("buttons.save")})}D.displayName="ActionButtons.FormSave";D.__docgenInfo={description:"",methods:[],displayName:"ActionButtons.FormSave"};function A(n){return e.jsx(K,{...n,layout:"fixed"})}A.__docgenInfo={description:"Compatibility adapter preserving fixed sizing and TanStack's original sorting defaults.",methods:[],displayName:"TableProvider",props:{layout:{required:!1,tsType:{name:"union",raw:'"fixed" | "resizable"',elements:[{name:"literal",value:'"fixed"'},{name:"literal",value:'"resizable"'}]},description:"Fixed tables retain defined column caps and automatic sort direction; resizable tables distribute widths."},data:{required:!0,tsType:{name:"Array",elements:[{name:"TData"}],raw:"TData[]"},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"ColumnDef",elements:[{name:"TData"}],raw:"ColumnDef<TData>"}],raw:"ColumnDef<TData>[]"},description:""},isLoading:{required:!0,tsType:{name:"boolean"},description:""},totalPages:{required:!1,tsType:{name:"number"},description:""},tableId:{required:!1,tsType:{name:"string"},description:""},onParamsChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(params: TableServerParamsPayload) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  pageIndex?: number;
  pageSize?: number;
  sort?: { id: string; desc: boolean }[];
  filters?: { op: string; val: string | string[] | number[]; name: string }[];
  searchValue?: string;
  include?: string;
  extras?: string;
}`,signature:{properties:[{key:"pageIndex",value:{name:"number",required:!1}},{key:"pageSize",value:{name:"number",required:!1}},{key:"sort",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ id: string; desc: boolean }",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"desc",value:{name:"boolean",required:!0}}]}}],raw:"{ id: string; desc: boolean }[]",required:!1}},{key:"filters",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ op: string; val: string | string[] | number[]; name: string }",signature:{properties:[{key:"op",value:{name:"string",required:!0}},{key:"val",value:{name:"union",raw:"string | string[] | number[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"Array",elements:[{name:"number"}],raw:"number[]"}],required:!0}},{key:"name",value:{name:"string",required:!0}}]}}],raw:"{ op: string; val: string | string[] | number[]; name: string }[]",required:!1}},{key:"searchValue",value:{name:"string",required:!1}},{key:"include",value:{name:"string",required:!1}},{key:"extras",value:{name:"string",required:!1}}]}},name:"params"}],return:{name:"void"}}},description:""},onSaveRow:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  rowId: string | number,
  draft: Partial<TData>,
  cancelEditing?: () => void,
) => Promise<void>`,signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"rowId"},{type:{name:"Partial",elements:[{name:"TData"}],raw:"Partial<TData>"},name:"draft"},{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"cancelEditing"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},pagination:{required:!1,tsType:{name:"PaginationState"},description:""},onPaginationChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(pagination: PaginationState) => void",signature:{arguments:[{type:{name:"PaginationState"},name:"pagination"}],return:{name:"void"}}},description:""},onDeleteRow:{required:!1,tsType:{name:"signature",type:"function",raw:"(rowId: string | number, data: TData[]) => void | Promise<void>",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"rowId"},{type:{name:"Array",elements:[{name:"TData"}],raw:"TData[]"},name:"data"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:""},onRevertRow:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: TData[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"TData"}],raw:"TData[]"},name:"data"}],return:{name:"void"}}},description:""},onRowUpdate:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: TData[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"TData"}],raw:"TData[]"},name:"data"}],return:{name:"void"}}},description:""},onRowValidation:{required:!1,tsType:{name:"signature",type:"function",raw:"(errorMessages: Record<string, string>) => void",signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},name:"errorMessages"}],return:{name:"void"}}},description:""},initialSorting:{required:!1,tsType:{name:"SortingState"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},isEditable:{required:!1,tsType:{name:"boolean"},description:""},canStartEditing:{required:!1,tsType:{name:"signature",type:"function",raw:"(rowData: TData) => boolean",signature:{arguments:[{type:{name:"TData"},name:"rowData"}],return:{name:"boolean"}}},description:""},isCheckboxVisible:{required:!1,tsType:{name:"boolean"},description:""},isPaginationVisible:{required:!1,tsType:{name:"boolean"},description:""},shouldTruncate:{required:!1,tsType:{name:"boolean"},description:""},onBulkDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedItems: TData[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"TData"}],raw:"TData[]"},name:"selectedItems"}],return:{name:"void"}}},description:""},onBulkExport:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedItems: TData[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"TData"}],raw:"TData[]"},name:"selectedItems"}],return:{name:"void"}}},description:""},floatingBarContainer:{required:!1,tsType:{name:"union",raw:"Element | null",elements:[{name:"Element"},{name:"null"}]},description:""},canBulkDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedItems: TData[]) => boolean",signature:{arguments:[{type:{name:"Array",elements:[{name:"TData"}],raw:"TData[]"},name:"selectedItems"}],return:{name:"boolean"}}},description:""},deleteRowOnMultiSave:{required:!1,tsType:{name:"boolean"},description:""},schema:{required:!1,tsType:{name:"yup.ObjectSchema",elements:[{name:"Partial",elements:[{name:"TData"}],raw:"Partial<TData>"}],raw:"yup.ObjectSchema<Partial<TData>>"},description:""},enableRowSelection:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: TData) => boolean",signature:{arguments:[{type:{name:"TData"},name:"row"}],return:{name:"boolean"}}},description:""},manualSorting:{required:!1,tsType:{name:"boolean"},description:"When false, TanStack handles sorting client-side. Defaults to true (server-side)."},manualPagination:{required:!1,tsType:{name:"boolean"},description:"When false, TanStack handles pagination client-side. Defaults to true (server-side)."},initialNewRows:{required:!1,tsType:{name:"Array",elements:[{name:"Partial",elements:[{name:"TData"}],raw:"Partial<TData>"}],raw:"Partial<TData>[]"},description:`Initial rows to add as new (editable) rows on mount.
Each row will get a "new-" prefixed ID and be in edit mode.`},initialColumnPinning:{required:!1,tsType:{name:"ColumnPinningState"},description:"Initial pinned columns (TanStack ColumnPinningState)."},enableColumnPinning:{required:!1,tsType:{name:"boolean"},description:"When false, columns cannot be pinned. Defaults to true."},enableColumnResizing:{required:!1,tsType:{name:"boolean"},description:"When false, columns cannot be resized. Defaults to true."},density:{required:!1,tsType:{name:"union",raw:'"compact" | "default" | "comfortable" | "flex"',elements:[{name:"literal",value:'"compact"'},{name:"literal",value:'"default"'},{name:"literal",value:'"comfortable"'},{name:"literal",value:'"flex"'}]},description:'Row density. Defaults to "default".'},maxLines:{required:!1,tsType:{name:"number"},description:"Line clamp for flex density. Defaults to 2."}}};const{expect:i,userEvent:o,waitFor:B,within:d}=__STORYBOOK_MODULE_TEST__,Xt={title:"Migration audit/Composed regression gallery",id:"systemization-reusable-contexts",parameters:{layout:"padded",docs:{description:{component:"Composed specimens for previously unlinked reusable controls. Local state demonstrates the existing callbacks without network calls. This is a discoverability surface, not proof of every state or API integration."}}}};function se(){const[n,t]=s.useState(!1),[a,r]=s.useState("Oat beverage");return e.jsxs("div",{className:"pf-story-stack",children:[e.jsxs("p",{children:["Current name: ",e.jsx("output",{children:a})]}),e.jsx(F,{onClick:()=>t(!0),children:"Rename product"}),e.jsx(L,{open:n,onOpenChange:t,initialValue:a,onConfirm:r,title:"Product name",confirmLabel:"Save name"})]})}const g={render:()=>e.jsx(se,{}),play:async({canvasElement:n})=>{const t=d(n),a=t.getByRole("button",{name:"Rename product"});await o.click(a);const r=await d(document.body).findByRole("textbox",{name:"Product name"});await o.clear(r),await o.type(r,"  Almond beverage  "),await o.keyboard("{Enter}"),await B(()=>i(r).not.toBeInTheDocument()),await i(t.getByText("Almond beverage")).toBeVisible(),await i(a).toHaveFocus()}};function oe(){const[n,t]=s.useState("Choose an action from the lower-right menu.");return e.jsxs("div",{className:"pf-story-reusable-coverage-viewport",children:[e.jsx("p",{role:"status",children:n}),e.jsx(V,{actions:[{icon:re,label:"Add ingredient",onClick:()=>t("Add ingredient requested.")},{icon:ie,label:"Export ingredients",onClick:()=>t("Export ingredients requested.")}]})]})}const y={render:()=>e.jsx(oe,{}),play:async({canvasElement:n})=>{const t=d(n),a=t.getByRole("button",{name:"Open menu"});await i(a).toHaveAttribute("aria-expanded","false"),await i(t.queryByRole("button",{name:"Export ingredients"})).toBeNull(),await o.click(a),await o.click(t.getByRole("button",{name:"Export ingredients"})),await i(t.getByRole("status")).toHaveTextContent("Export ingredients requested."),await i(a).toHaveFocus(),await i(a).toHaveAttribute("aria-expanded","false")}},le=O({enabled:H()}),me={enabled:!1};function ce(){const[n,t]=s.useState("No changes submitted.");return e.jsx(_,{children:e.jsxs(z,{name:"coverage-preferences",schema:le,defaultValues:me,onSubmit:a=>t(`Notifications ${a.enabled?"enabled":"disabled"}.`),className:"pf-story-stack",children:[e.jsx(G,{name:"enabled",label:"Notify me when the formula changes"}),e.jsx(D,{label:"Save preferences"}),e.jsx("p",{role:"status",children:n})]})})}const f={render:()=>e.jsx(ce,{}),play:async({canvasElement:n})=>{const t=d(n),a=t.getByRole("checkbox",{name:"Notify me when the formula changes"});await o.click(t.getByText("Notify me when the formula changes")),await i(a).toBeChecked(),await o.click(t.getByRole("button",{name:"Save preferences"})),await B(()=>i(t.getByRole("status")).toHaveTextContent("Notifications enabled."))}},R=[{id:"current",header:"Current"},{id:"proposed",header:"Proposed"}],b={render:()=>e.jsxs("div",{className:"pf-story-reusable-coverage-sections",children:[e.jsx("section",{"aria-label":"Nutrition comparison",children:e.jsx(q,{columns:R,rows:[{label:"Per 100 g",isHeader:!0,values:{current:"Original recipe",proposed:"Version 2"}},{label:"Protein",indentLevel:1,values:{current:"12 g",proposed:"14 g"}},{label:"Sugar",indentLevel:1,values:{current:"4 g",proposed:"3 g"}}]})}),e.jsx("section",{"aria-label":"Empty detail table",children:e.jsx(q,{columns:R,rows:[],emptyMessage:"No nutritional data added."})}),e.jsx(ee,{icon:ne,title:"No packaging yet",description:"Add packaging to review its specification alongside the formula.",actionLabel:"Add packaging",onAction:()=>window.alert("Add packaging requested (Storybook fixture).")})]})},T=[{id:"oats",name:"Oats",updated:"2026-10-01"}],h=[{accessorKey:"name",header:"Ingredient"},{accessorKey:"updated",header:"Updated"}];function de(){const[n,t]=s.useState("Ready."),a=j({data:T,columns:h,getCoreRowModel:P()});return e.jsx(A,{data:T,columns:h,isLoading:!1,children:e.jsxs("div",{className:"pf-story-stack",children:[e.jsxs("div",{className:"pf-story-wrapping-actions",children:[e.jsx(U,{label:"Add ingredient",onClick:()=>t("Add ingredient requested.")}),e.jsx($,{}),e.jsx(E,{onReset:()=>t("Filters reset.")}),e.jsx(te,{table:a})]}),e.jsx("p",{role:"status",children:n}),e.jsxs("p",{children:["Visible columns:"," ",a.getVisibleLeafColumns().map(r=>r.id).join(", ")]}),e.jsx("p",{className:"pf-story-note",children:"The existing import button is a presentation-only control; its API does not expose an import callback."})]})})}const v={render:()=>e.jsx(de,{})},ue=[{label:"North mill",value:"north"},{label:"Coastal foods",value:"coastal"}],N=[{id:"grains",name:"Grains",type:"category",children:[{id:"oats",name:"Oats",type:"ingredient"},{id:"wheat",name:"Wheat",type:"ingredient"}]}];function pe(){const[n,t]=s.useState(),[a,r]=s.useState([]),[u,m]=s.useState({}),[l,p]=s.useState([]),[c,k]=s.useState([]),S=j({data:T,columns:h,getCoreRowModel:P()}).getColumn("updated");if(!S)throw new Error("Fixture requires its updated column.");return e.jsxs("div",{className:"pf-story-stack",children:[e.jsx("p",{children:"Apply or clear each existing filter. The output shows values owned by its host."}),e.jsxs("div",{className:"pf-story-wrapping-actions",children:[e.jsx(J,{title:"Created date",filterValue:n,onChange:t}),e.jsx(Y,{title:"Updated range",column:S,filters:a,onFiltersChange:r,multiple:!0}),e.jsx(Q,{title:"Cost",value:u,onChange:m}),e.jsx(X,{title:"Supplier",options:ue,selected:l,onChange:p,multiple:!0}),e.jsx(Z,{title:"Category",treeData:N,selectedIds:c,onChange:k}),e.jsx(E,{onReset:()=>{t(void 0),r([]),m({}),p([]),k([])}})]}),e.jsx("pre",{className:"pf-story-reusable-coverage-result","aria-label":"Host filter state",children:JSON.stringify({date:n,apiFilters:a,range:u,suppliers:l,categories:c},null,2)})]})}const w={render:()=>e.jsx(pe,{})},x={render:()=>e.jsxs("div",{className:"group pf-story-reusable-coverage-interactive-row",children:[e.jsx("span",{children:"Oats"}),e.jsx(ae,{item:{id:"oats",name:"Oats",type:"ingredient"},allItems:N,getItemPath:n=>`Ingredients / Grains / ${n.name}`})]}),play:async({canvasElement:n})=>{const t=d(n),a=t.getByRole("button",{name:"Oats — Details"});await o.tab(),await i(a).toHaveFocus();const r=await t.findByRole("tooltip");await i(a).toHaveAttribute("aria-describedby",r.id),await i(r).toHaveTextContent("Ingredients / Grains / Oats"),await o.keyboard("{Escape}"),await i(t.queryByRole("tooltip")).toBeNull(),await i(a).toHaveFocus()}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <RenameFixture />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const opener = canvas.getByRole("button", {
      name: "Rename product"
    });
    await userEvent.click(opener);
    const input = await within(document.body).findByRole("textbox", {
      name: "Product name"
    });
    await userEvent.clear(input);
    await userEvent.type(input, "  Almond beverage  ");
    await userEvent.keyboard("{Enter}");
    await waitFor(() => expect(input).not.toBeInTheDocument());
    await expect(canvas.getByText("Almond beverage")).toBeVisible();
    await expect(opener).toHaveFocus();
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <FloatingActionsFixture />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", {
      name: "Open menu"
    });
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await expect(canvas.queryByRole("button", {
      name: "Export ingredients"
    })).toBeNull();
    await userEvent.click(trigger);
    await userEvent.click(canvas.getByRole("button", {
      name: "Export ingredients"
    }));
    await expect(canvas.getByRole("status")).toHaveTextContent("Export ingredients requested.");
    await expect(trigger).toHaveFocus();
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
  }
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <FormFixture />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox", {
      name: "Notify me when the formula changes"
    });
    await userEvent.click(canvas.getByText("Notify me when the formula changes"));
    await expect(checkbox).toBeChecked();
    await userEvent.click(canvas.getByRole("button", {
      name: "Save preferences"
    }));
    await waitFor(() => expect(canvas.getByRole("status")).toHaveTextContent("Notifications enabled."));
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="pf-story-reusable-coverage-sections">
      <section aria-label="Nutrition comparison">
        <DetailTable columns={detailColumns} rows={[{
        label: "Per 100 g",
        isHeader: true,
        values: {
          current: "Original recipe",
          proposed: "Version 2"
        }
      }, {
        label: "Protein",
        indentLevel: 1,
        values: {
          current: "12 g",
          proposed: "14 g"
        }
      }, {
        label: "Sugar",
        indentLevel: 1,
        values: {
          current: "4 g",
          proposed: "3 g"
        }
      }]} />
      </section>
      <section aria-label="Empty detail table">
        <DetailTable columns={detailColumns} rows={[]} emptyMessage="No nutritional data added." />
      </section>
      <TableEmptyState icon={Package} title="No packaging yet" description="Add packaging to review its specification alongside the formula." actionLabel="Add packaging" onAction={() => window.alert("Add packaging requested (Storybook fixture).")} />
    </div>
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <TableActionsFixture />
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <FiltersFixture />
}`,...w.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="group pf-story-reusable-coverage-interactive-row">
      <span>Oats</span>
      <LazyHoverInfo item={{
      id: "oats",
      name: "Oats",
      type: "ingredient"
    }} allItems={categoryTree} getItemPath={item => \`Ingredients / Grains / \${item.name}\`} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", {
      name: "Oats — Details"
    });
    await userEvent.tab();
    await expect(trigger).toHaveFocus();
    const tooltip = await canvas.findByRole("tooltip");
    await expect(trigger).toHaveAttribute("aria-describedby", tooltip.id);
    await expect(tooltip).toHaveTextContent("Ingredients / Grains / Oats");
    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("tooltip")).toBeNull();
    await expect(trigger).toHaveFocus();
  }
}`,...x.parameters?.docs?.source}}};const Zt=["RenameDialog","FloatingActions","FormSubmission","DetailAndEmptyStates","TableActions","TableFilters","TreeItemDetails"];export{b as DetailAndEmptyStates,y as FloatingActions,f as FormSubmission,g as RenameDialog,v as TableActions,w as TableFilters,x as TreeItemDetails,Zt as __namedExportsOrder,Xt as default};
