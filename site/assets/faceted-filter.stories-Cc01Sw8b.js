import{e as w,j as s,ay as F,i as e,P as T,r as C}from"./iframe-BXubdNpd.js";import{d as O,c as U}from"./faceted-filter-CkmRgI-t.js";import{G as M}from"./globe-B0ftb1E8.js";import{B as _}from"./building-2-CVj16t1n.js";import{L as k}from"./leaf-CmdhlPm3.js";import"./preload-helper-PPVm8Dsz.js";import"./badge-C4iUsAGF.js";import"./index-DKWiT4Fi.js";import"./button-DOg3bB7T.js";import"./loader-circle-WJxMtqtu.js";import"./checkbox-R9lg0Zy-.js";import"./minus-BU5OS2V8.js";import"./useAriaLabelledBy-Dlr4qUIQ.js";import"./dialog-Gbr7wu8m.js";import"./overlay-dialog-CQZe9RQv.js";import"./separator-BKKMk4Xo.js";import"./Separator-DI4aBzER.js";import"./accordion-B-A_a53W.js";import"./roving-focus-0SK5-Aqb.js";import"./useCollapsiblePanel-C5JKJn3w.js";import"./circle-x-Dpw0IbmW.js";import"./circle-plus-D3OehnXk.js";const L=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],G=w("user",L),{fn:N}=__STORYBOOK_MODULE_TEST__;function b(t){const[f,v]=C.useState(t.selected);if(C.useEffect(()=>{v(t.selected)},[t.selected]),t.multiple){const y=Array.isArray(f)?f:[],I=x=>{v(x),t.onChange(x)};return s.jsx(O,{...t,selected:y,onChange:I})}const E=Array.isArray(f)?null:f,j=y=>{v(y),t.onChange(y)};return s.jsx(O,{...t,selected:E,onChange:j})}const h=[{label:e.t("ingredients:filters.ingredientUniverse.options.organization"),value:F},{label:e.t("ingredients:filters.ingredientUniverse.options.global"),value:T}],D=[{label:e.t("ingredients:filters.branded.options.yes"),value:"true"},{label:e.t("ingredients:filters.branded.options.no"),value:"false"}],q=[{label:e.t("equipment:filters.createdBy.options.me"),value:"me"},{label:e.t("equipment:filters.createdBy.options.organization"),value:"tenant"}],B=[{label:e.t("equipment:filters.source.options.proxy"),value:T},{label:e.t("equipment:filters.source.options.organization"),value:F}],i=[{label:e.t("specifications:filters.specType.options.template"),value:"template"},{label:e.t("specifications:filters.specType.options.formula"),value:"formula"},{label:e.t("specifications:filters.specType.options.project"),value:"project"}],S=[{label:"Proxy",value:T,icon:M},{label:"Organization",value:F,icon:_},{label:"Me",value:"me",icon:G},{label:"Plant based",value:"plant-based",icon:k}],ce={title:"Components/Data Display/Data Grid/Internals/FacetedFilter",id:"design-system-data-table-facetedfilter",component:O,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Design-system version of `src/components/proxy-reusables/table/components/filters/select/faceted-filter.tsx`. Its source is `src/design-system/components/data-table/components/filters/select/faceted-filter.tsx`; the usage notes below describe the original. Static-options filter chip: an outline sm Button with a PlusCircle (or an XCircle clear control), the title, a Separator and a secondary Badge summary, opening a Command list with square pseudo-checkboxes. The props are a discriminated union on `multiple`: single (closes on select, `Option | null`) or multiple (`Option[]`). Used by 8 files: list toolbars (src/modules/Equipment/EquipmentTableChildren.tsx, src/modules/Ingredients/IngredientsList/IngredientsTable/IngredientsChildren.tsx) and as a form chip (src/modules/Equipment/EquipmentForm/EquipmentFormFields.tsx). Source: src/components/proxy-reusables/table/components/filters/select/faceted-filter.tsx."}}},args:{onChange:N()},argTypes:{title:{control:"text"},multiple:{control:"boolean"},options:{control:"object"},selected:{control:"object"}},render:t=>s.jsx(b,{...t})},r={args:{title:e.t("ingredients:filters.ingredientUniverse.title"),options:h,selected:h[1],multiple:!1}},n={args:{title:e.t("ingredients:filters.branded.title"),options:D,selected:null,multiple:!1}},o={args:{title:e.t("equipment:filters.createdBy.title"),options:q,selected:q[0],multiple:!1}},a={args:{title:e.t("equipment:form.equipmentSourceFilterTitle"),options:B,selected:B[0],multiple:!1}},l={args:{title:e.t("specifications:filters.specType.title"),options:i,selected:[i[0]],multiple:!0}},c={args:{title:e.t("specifications:filters.specType.title"),options:i,selected:[i[0],i[2]],multiple:!0}},p={args:{title:e.t("specifications:filters.specType.title"),options:i,selected:[],multiple:!0}},d={args:{title:"Source",options:S,selected:[S[0],S[3]],multiple:!0}},u={args:{title:"Category",options:[{label:"Fermented dairy alternatives and plant-based cultured products",value:"fermented"},{label:"Bakery",value:"bakery"}],selected:{label:"Fermented dairy alternatives and plant-based cultured products",value:"fermented"},multiple:!1}},A="pf-story-data-grid-faceted-filter-filter-frame",m={args:{title:e.t("specifications:filters.specType.title"),options:i,selected:[],multiple:!0,layout:"sidebar"},render:t=>s.jsx("div",{className:A,children:s.jsx(U,{defaultOpen:[t.title??""],children:s.jsx(b,{...t})})})},g={args:{title:e.t("specifications:filters.specType.title"),options:i,selected:[i[0],i[2]],multiple:!0,layout:"sidebar"},render:t=>s.jsx("div",{className:A,children:s.jsxs(U,{defaultOpen:[t.title??"",e.t("ingredients:filters.ingredientUniverse.title")],children:[s.jsx(b,{...t}),s.jsx(b,{title:e.t("ingredients:filters.ingredientUniverse.title"),options:h,selected:h[1],multiple:!1,onChange:t.onChange,layout:"sidebar"})]})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: i18n.t("ingredients:filters.ingredientUniverse.title"),
    options: ingredientUniverseOptions,
    selected: ingredientUniverseOptions[1],
    multiple: false
  }
}`,...r.parameters?.docs?.source},description:{story:'Ingredients toolbar "Ingredient Universe": single select, defaults to the Proxy option.',...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: i18n.t("ingredients:filters.branded.title"),
    options: brandedOptions,
    selected: null,
    multiple: false
  }
}`,...n.parameters?.docs?.source},description:{story:'Ingredients toolbar "Branded": single select with nothing chosen.',...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: i18n.t("equipment:filters.createdBy.title"),
    options: createdByOptions,
    selected: createdByOptions[0],
    multiple: false
  }
}`,...o.parameters?.docs?.source},description:{story:'Equipment toolbar "Created By": Me / Organization.',...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: i18n.t("equipment:form.equipmentSourceFilterTitle"),
    options: equipmentSourceOptions,
    selected: equipmentSourceOptions[0],
    multiple: false
  }
}`,...a.parameters?.docs?.source},description:{story:'Equipment form "Source" chip, used outside a table toolbar.',...a.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: i18n.t("specifications:filters.specType.title"),
    options: specTypeOptions,
    selected: [specTypeOptions[0]],
    multiple: true
  }
}`,...l.parameters?.docs?.source},description:{story:'Specifications toolbar "Associated With": `multiple` with one selection, the badge shows the option label.',...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: i18n.t("specifications:filters.specType.title"),
    options: specTypeOptions,
    selected: [specTypeOptions[0], specTypeOptions[2]],
    multiple: true
  }
}`,...c.parameters?.docs?.source},description:{story:'Multiple mode with several selections: the badge shows "N selected".',...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: i18n.t("specifications:filters.specType.title"),
    options: specTypeOptions,
    selected: [],
    multiple: true
  }
}`,...p.parameters?.docs?.source},description:{story:"Multiple mode, nothing selected yet.",...p.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Source",
    options: iconOptions,
    selected: [iconOptions[0], iconOptions[3]],
    multiple: true
  }
}`,...d.parameters?.docs?.source},description:{story:"Options can carry an icon rendered before the label.",...d.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Category",
    options: [{
      label: "Fermented dairy alternatives and plant-based cultured products",
      value: "fermented"
    }, {
      label: "Bakery",
      value: "bakery"
    }],
    selected: {
      label: "Fermented dairy alternatives and plant-based cultured products",
      value: "fermented"
    },
    multiple: false
  }
}`,...u.parameters?.docs?.source},description:{story:"A long label is truncated inside the max-w-[120px] badge (title attribute keeps the full text).",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: i18n.t("specifications:filters.specType.title"),
    options: specTypeOptions,
    selected: [],
    multiple: true,
    layout: "sidebar"
  },
  render: args => <div className={sidebarFrame}>
      <FilterSectionGroup defaultOpen={[args.title ?? ""]}>
        <ControlledFacetedFilter {...args} />
      </FilterSectionGroup>
    </div>
}`,...m.parameters?.docs?.source},description:{story:'layout="sidebar": the same option list inline as a left filter panel section (multiple mode, nothing selected).',...m.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: i18n.t("specifications:filters.specType.title"),
    options: specTypeOptions,
    selected: [specTypeOptions[0], specTypeOptions[2]],
    multiple: true,
    layout: "sidebar"
  },
  render: args => <div className={sidebarFrame}>
      <FilterSectionGroup defaultOpen={[args.title ?? "", i18n.t("ingredients:filters.ingredientUniverse.title")]}>
        <ControlledFacetedFilter {...args} />
        <ControlledFacetedFilter title={i18n.t("ingredients:filters.ingredientUniverse.title")} options={ingredientUniverseOptions} selected={ingredientUniverseOptions[1]} multiple={false} onChange={args.onChange as (value: Option | null) => void} layout="sidebar" />
      </FilterSectionGroup>
    </div>
}`,...g.parameters?.docs?.source},description:{story:'Sidebar with values chosen: the header shows the count badge and the section offers "Clear". A single-mode section sits below.',...g.parameters?.docs?.description}}};const pe=["AsIngredientUniverseFilter","AsBrandedFilter","AsCreatedByFilter","AsEquipmentFormSourceChip","AsSpecificationTypeFilter","MultipleManySelected","MultipleEmpty","WithOptionIcons","LongSelectedLabel","Sidebar","SidebarWithSelection"];export{n as AsBrandedFilter,o as AsCreatedByFilter,a as AsEquipmentFormSourceChip,r as AsIngredientUniverseFilter,l as AsSpecificationTypeFilter,u as LongSelectedLabel,p as MultipleEmpty,c as MultipleManySelected,m as Sidebar,g as SidebarWithSelection,d as WithOptionIcons,pe as __namedExportsOrder,ce as default};
