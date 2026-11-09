import{j as e,i as a,X as B,r as C}from"./iframe-DgvZnKtv.js";/* empty css                      */import{T as w,u as j}from"./provider-BVn9KhLs.js";import{a as t,D}from"./table-floating-actions-DIV78n7W.js";import{D as s}from"./download-D2YSvej-.js";import{T as y}from"./trash-2-0mPhte3X.js";import{C as S}from"./copy-BkjpvN59.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DHqvz3mz.js";import"./index-DRlY9EGU.js";import"./helpers-Uv_-GrLc.js";import"./v4-EwEgHOG0.js";import"./button-CEcYiQdY.js";import"./index-BWlKOsdO.js";import"./loader-circle-BsZrs7F6.js";import"./proxy-CgL5uqac.js";import"./loader-Nqr3GeRO.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,v=[{id:"prod-1",name:"Oat barista blend",description:"Foamable oat drink for coffee bars",createdAt:"2026-02-03T10:15:00Z",updatedAt:"2026-03-01T08:00:00Z",createdBy:"Alex Storybook",tenantId:1},{id:"prod-2",name:"Protein granola",description:"High protein clusters with pea crisps",createdAt:"2026-01-20T14:45:00Z",updatedAt:"2026-02-11T16:30:00Z",createdBy:"Alex Storybook",tenantId:1},{id:"prod-3",name:"Cashew cream cheese",description:"Cultured cashew spread",createdAt:"2025-12-02T09:00:00Z",updatedAt:"2026-01-05T11:20:00Z",createdBy:"Alex Storybook",tenantId:1}],k=[{accessorKey:"name",header:"Name"},{accessorKey:"description",header:"Description"}];function z({ids:o}){const{table:r}=j();return C.useEffect(()=>{r.setRowSelection(Object.fromEntries(o.map(T=>[T,!0])))},[r,o]),null}function x(){const{table:o}=j(),r=o.getFilteredSelectedRowModel().rows.length;return e.jsxs("div",{className:"pf-story-data-grid-table-floating-actions-action-trigger",children:[a.t("common:table.floatingActions.selected",{count:r}),e.jsx("button",{type:"button",onClick:()=>o.resetRowSelection(),className:"pf-story-data-grid-table-floating-actions-action-dismiss",title:a.t("common:table.floatingActions.deselectAll"),children:e.jsx(B,{className:"pf-story-icon"})})]})}function i({selectedIds:o=[],children:r,...T}){return e.jsxs(w,{data:v,columns:k,isLoading:!1,isCheckboxVisible:!0,isPaginationVisible:!1,children:[e.jsx(z,{ids:o}),e.jsx("p",{className:"pf-story-note",children:"The bar is portalled to document.body and fixed at the bottom centre of the viewport. Press Escape to clear the selection."}),e.jsx(D,{...T,children:r})]})}const X={title:"Components/Data Display/Data Grid/Internals/DataTableActionBar",id:"design-system-data-table-datatableactionbar",component:D,subcomponents:{DataTableActionBarAction:t},tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Design-system version of `src/components/proxy-reusables/table/components/table-floating-actions.tsx`. Its source is `src/design-system/components/data-table/components/table-floating-actions.tsx`; the usage notes below describe the original. Floating bulk-actions toolbar: a framer-motion animated role=toolbar portalled to `container` (or document.body) and fixed at the bottom centre, visible while the table has a selection or when forced with `visible`; a global Escape clears the selection. `DataTableActionBarAction` is its compact secondary Button with an optional tooltip and an isPending spinner. Used by 1 file, src/components/proxy-reusables/table/components/table-floating-actions-content.tsx (TableSelectionBar), which TableCore mounts for every table with checkboxes. Source: src/components/proxy-reusables/table/components/table-floating-actions.tsx."}}},argTypes:{visible:{control:"boolean"},className:{control:"text"},container:{control:!1},children:{control:!1}},render:o=>e.jsx(i,{...o})},c={args:{className:"pf-story-data-grid-table-floating-actions-action-bar"},render:o=>e.jsxs(i,{...o,selectedIds:["prod-1","prod-3"],children:[e.jsx(x,{}),e.jsx("div",{className:"pf-story-data-grid-table-floating-actions-action-separator"}),e.jsxs("div",{className:"pf-story-toolbar",children:[e.jsx(t,{size:"icon",tooltip:a.t("common:buttons.download"),onClick:n(),children:e.jsx(s,{})}),e.jsx(t,{size:"icon",tooltip:a.t("common:buttons.delete"),onClick:n(),children:e.jsx(y,{})})]})]})},l={args:{},render:o=>e.jsxs(i,{...o,selectedIds:["prod-1","prod-2"],children:[e.jsx(x,{}),e.jsxs(t,{onClick:n(),children:[e.jsx(S,{}),"Duplicate"]})]})},d={args:{visible:!0},render:o=>e.jsx(i,{...o,children:e.jsxs(t,{onClick:n(),children:[e.jsx(s,{}),"Export all"]})})},p={args:{},render:o=>e.jsx(i,{...o,children:e.jsx(x,{})})},m={args:{visible:!1},render:o=>e.jsx(i,{...o,selectedIds:["prod-1"],children:e.jsx(x,{})})},f={size:{control:"select",options:["sm","default","lg","icon"]},tooltip:{control:"text"},isPending:{control:"boolean"},disabled:{control:"boolean"}},b={args:{size:"icon",tooltip:a.t("common:buttons.delete"),onClick:n(),children:e.jsx(y,{})},argTypes:f,render:o=>e.jsx(t,{...o})},g={args:{onClick:n(),children:e.jsxs(e.Fragment,{children:[e.jsx(s,{}),"Export"]})},argTypes:f,render:o=>e.jsx(t,{...o})},u={args:{isPending:!0,tooltip:a.t("common:buttons.download"),onClick:n(),children:e.jsxs(e.Fragment,{children:[e.jsx(s,{}),"Export"]})},argTypes:f,render:o=>e.jsx(t,{...o})},h={args:{disabled:!0,size:"icon",tooltip:a.t("common:buttons.delete"),onClick:n(),children:e.jsx(y,{})},argTypes:f,render:o=>e.jsx(t,{...o})},A={args:{onClick:n()},argTypes:f,render:o=>e.jsxs("div",{className:"pf-story-toolbar",children:[e.jsxs(t,{...o,size:"sm",children:[e.jsx(s,{}),"sm"]}),e.jsxs(t,{...o,size:"default",children:[e.jsx(s,{}),"default"]}),e.jsxs(t,{...o,size:"lg",children:[e.jsx(s,{}),"lg"]}),e.jsx(t,{...o,size:"icon",tooltip:"icon",children:e.jsx(s,{})})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    className: "pf-story-data-grid-table-floating-actions-action-bar"
  },
  render: args => <ActionBarHarness {...args} selectedIds={["prod-1", "prod-3"]}>
      <SelectedCountChip />
      <div className="pf-story-data-grid-table-floating-actions-action-separator" />
      <div className="pf-story-toolbar">
        <DataTableActionBarAction size="icon" tooltip={i18n.t("common:buttons.download")} onClick={fn()}>
          <Download />
        </DataTableActionBarAction>
        <DataTableActionBarAction size="icon" tooltip={i18n.t("common:buttons.delete")} onClick={fn()}>
          <Trash2 />
        </DataTableActionBarAction>
      </div>
    </ActionBarHarness>
}`,...c.parameters?.docs?.source},description:{story:"What TableSelectionBar renders: the count chip, a divider and Download / Trash icon actions.",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <ActionBarHarness {...args} selectedIds={["prod-1", "prod-2"]}>
      <SelectedCountChip />
      <DataTableActionBarAction onClick={fn()}>
        <Copy />
        Duplicate
      </DataTableActionBarAction>
    </ActionBarHarness>
}`,...l.parameters?.docs?.source},description:{story:"Auto visibility: shown because two rows are selected.",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    visible: true
  },
  render: args => <ActionBarHarness {...args}>
      <DataTableActionBarAction onClick={fn()}>
        <Download />
        Export all
      </DataTableActionBarAction>
    </ActionBarHarness>
}`,...d.parameters?.docs?.source},description:{story:"`visible` forced on without any selection.",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <ActionBarHarness {...args}>
      <SelectedCountChip />
    </ActionBarHarness>
}`,...p.parameters?.docs?.source},description:{story:"Nothing selected and `visible` not forced: the portal renders nothing.",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    visible: false
  },
  render: args => <ActionBarHarness {...args} selectedIds={["prod-1"]}>
      <SelectedCountChip />
    </ActionBarHarness>
}`,...m.parameters?.docs?.source},description:{story:"`visible={false}` hides the bar even with a selection.",...m.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    size: "icon",
    tooltip: i18n.t("common:buttons.delete"),
    onClick: fn(),
    children: <Trash2 />
  },
  argTypes: actionArgTypes,
  render: args => <DataTableActionBarAction {...args} />
}`,...b.parameters?.docs?.source},description:{story:"The icon action TableSelectionBar uses, with its tooltip.",...b.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    onClick: fn(),
    children: <>
        <Download />
        Export
      </>
  },
  argTypes: actionArgTypes,
  render: args => <DataTableActionBarAction {...args} />
}`,...g.parameters?.docs?.source},description:{story:"Default `sm` size with an icon and a label.",...g.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    isPending: true,
    tooltip: i18n.t("common:buttons.download"),
    onClick: fn(),
    children: <>
        <Download />
        Export
      </>
  },
  argTypes: actionArgTypes,
  render: args => <DataTableActionBarAction {...args} />
}`,...u.parameters?.docs?.source},description:{story:"`isPending` swaps the content for a spinning Loader and disables the button.",...u.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    size: "icon",
    tooltip: i18n.t("common:buttons.delete"),
    onClick: fn(),
    children: <Trash2 />
  },
  argTypes: actionArgTypes,
  render: args => <DataTableActionBarAction {...args} />
}`,...h.parameters?.docs?.source},description:{story:"Disabled action.",...h.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    onClick: fn()
  },
  argTypes: actionArgTypes,
  render: args => <div className="pf-story-toolbar">
      <DataTableActionBarAction {...args} size="sm">
        <Download />
        sm
      </DataTableActionBarAction>
      <DataTableActionBarAction {...args} size="default">
        <Download />
        default
      </DataTableActionBarAction>
      <DataTableActionBarAction {...args} size="lg">
        <Download />
        lg
      </DataTableActionBarAction>
      <DataTableActionBarAction {...args} size="icon" tooltip="icon">
        <Download />
      </DataTableActionBarAction>
    </div>
}`,...A.parameters?.docs?.source},description:{story:"Every size is forced to 28px height (h-7 / size-7).",...A.parameters?.docs?.description}}};const Y=["AsSelectionBar","VisibleWithSelection","ForcedVisible","HiddenWithoutSelection","ForcedHidden","ActionIconWithTooltip","ActionWithLabel","ActionPending","ActionDisabled","ActionSizes"];export{h as ActionDisabled,b as ActionIconWithTooltip,u as ActionPending,A as ActionSizes,g as ActionWithLabel,c as AsSelectionBar,m as ForcedHidden,d as ForcedVisible,p as HiddenWithoutSelection,l as VisibleWithSelection,Y as __namedExportsOrder,X as default};
