import{j as s,i as r,r as w}from"./iframe-BXubdNpd.js";import{S as x}from"./server-side-faceted-filter-BhNJLuvQ.js";import{c as C}from"./faceted-filter-CkmRgI-t.js";import"./preload-helper-PPVm8Dsz.js";import"./index.module-B6UitgKw.js";import"./button-DOg3bB7T.js";import"./index-DKWiT4Fi.js";import"./loader-circle-WJxMtqtu.js";import"./checkbox-R9lg0Zy-.js";import"./minus-BU5OS2V8.js";import"./useAriaLabelledBy-Dlr4qUIQ.js";import"./separator-BKKMk4Xo.js";import"./Separator-DI4aBzER.js";import"./badge-C4iUsAGF.js";import"./dialog-Gbr7wu8m.js";import"./overlay-dialog-CQZe9RQv.js";import"./circle-x-Dpw0IbmW.js";import"./circle-plus-D3OehnXk.js";import"./accordion-B-A_a53W.js";import"./roving-focus-0SK5-Aqb.js";import"./useCollapsiblePanel-C5JKJn3w.js";const{fn:N}=__STORYBOOK_MODULE_TEST__;function y({selected:e,onChange:n,...v}){const[S,b]=w.useState(e);w.useEffect(()=>{b(e)},[e]);const j=I=>{b(I),n(I)};return s.jsx(x,{...v,selected:S,onChange:j})}const q=e=>new Promise(n=>{setTimeout(n,e)}),T=[{id:1,name:"Lab"},{id:2,name:"Pilot plant"},{id:3,name:"Small batch"},{id:4,name:"Industrial"},{id:5,name:"Continuous line"}],O=T.map(e=>({label:e.name,value:e.id.toString()})),t=[{label:"Vegan",value:"fc-201"},{label:"Vegetarian",value:"fc-202"},{label:"Gluten free",value:"fc-203"},{label:"Lactose free",value:"fc-204"},{label:"Low sugar",value:"fc-205"},{label:"High protein",value:"fc-206"},{label:"Keto friendly",value:"fc-207"}],F=[{label:"Netherlands",value:"NL",count:42},{label:"Germany",value:"DE",count:17},{label:"France",value:"FR",count:9},{label:"Spain",value:"ES",count:4},{label:"Italy",value:"IT",count:1}],i=(e,n=350)=>async v=>{await q(n);const S=v.trim().toLowerCase();return S?e.filter(b=>b.label.toLowerCase().includes(S)):e},$={title:"Components/Data Display/Data Grid/Internals/ServerSideFacetedFilter",id:"design-system-data-table-serversidefacetedfilter",component:x,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Design-system version of `src/components/proxy-reusables/table/components/filters/select/server-side-faceted-filter.tsx`. Its source is `src/design-system/components/data-table/components/filters/select/server-side-faceted-filter.tsx`; the usage notes below describe the original. Async-search filter chip. Opening it calls `searchFn('')`, typing re-queries after a 300ms debounce (Command shouldFilter=false), selected options are pinned in a 'Selected' group above 'Results' and each option may show a count. On lg the trigger shows removable per-option badges (up to 2) or 'N selected'; below lg it shows a count badge. Used by list toolbars such as src/modules/Equipment/EquipmentTableChildren.tsx, src/modules/Ingredients/IngredientsList/IngredientsTable/IngredientsChildren.tsx and src/modules/Facilities/FacilitiesTableChildren.tsx. Source: src/components/proxy-reusables/table/components/filters/select/server-side-faceted-filter.tsx."}}},args:{onChange:N(),searchFn:i(O)},argTypes:{title:{control:"text"},multiple:{control:"boolean"},debounceMs:{control:"number"},selected:{control:"object"},initialOptions:{control:"object"},searchFn:{control:!1}},render:e=>s.jsx(y,{...e})},a={args:{title:r.t("equipment:filters.productionScales.title"),selected:[]}},o={args:{title:r.t("ingredients:filters.dietaryPreferences.title"),searchFn:i(t),selected:[t[0],t[2]]}},l={args:{title:r.t("ingredients:filters.dietaryPreferences.title"),searchFn:i(t),selected:[t[0],t[1],t[2],t[3]]}},c={args:{title:r.t("suppliers:filters.location"),multiple:!1,searchFn:i(F),selected:[F[0]]}},d={args:{title:r.t("suppliers:filters.location"),searchFn:i(F),initialOptions:F,selected:[]}},p={args:{title:r.t("equipment:filters.productionScales.title"),initialOptions:O,selected:[]}},u={args:{title:r.t("equipment:filters.productionScales.title"),searchFn:i(O,3e3),selected:[]}},m={args:{title:r.t("equipment:filters.productionScales.title"),searchFn:i([]),selected:[]}},g={args:{title:r.t("ingredients:filters.dietaryPreferences.title"),searchFn:i(t),selected:[t[0]]},render:e=>s.jsxs("div",{className:"pf-story-data-grid-server-side-faceted-filter-actions",children:[s.jsx(y,{...e}),s.jsx(y,{title:r.t("ingredients:filters.religion.title"),searchFn:i([{label:"Halal",value:"fc-301"},{label:"Kosher",value:"fc-302"}]),selected:[],onChange:e.onChange})]})},P="pf-story-data-grid-server-side-faceted-filter-filter-frame",h={args:{title:r.t("ingredients:filters.dietaryPreferences.title"),searchFn:i(t),selected:[],layout:"sidebar"},render:e=>s.jsx("div",{className:P,children:s.jsx(C,{defaultOpen:[e.title??""],children:s.jsx(y,{...e})})})},f={args:{title:r.t("ingredients:filters.dietaryPreferences.title"),searchFn:i(t),selected:[t[0],t[1]],layout:"sidebar"},render:e=>s.jsx("div",{className:P,children:s.jsx(C,{defaultOpen:[e.title??""],children:s.jsx(y,{...e})})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: i18n.t("equipment:filters.productionScales.title"),
    selected: []
  }
}`,...a.parameters?.docs?.source},description:{story:'Equipment toolbar "Production Scales" with nothing selected; open it to load the options.',...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: i18n.t("ingredients:filters.dietaryPreferences.title"),
    searchFn: searchIn(dietaryOptions),
    selected: [dietaryOptions[0], dietaryOptions[2]]
  }
}`,...o.parameters?.docs?.source},description:{story:'Ingredients toolbar "Dietary Preferences" with two selections: per-option badges on lg, a count below.',...o.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: i18n.t("ingredients:filters.dietaryPreferences.title"),
    searchFn: searchIn(dietaryOptions),
    selected: [dietaryOptions[0], dietaryOptions[1], dietaryOptions[2], dietaryOptions[3]]
  }
}`,...l.parameters?.docs?.source},description:{story:'More than two selections collapse into an "N selected" badge on lg.',...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: i18n.t("suppliers:filters.location"),
    multiple: false,
    searchFn: searchIn(countryOptions),
    selected: [countryOptions[0]]
  }
}`,...c.parameters?.docs?.source},description:{story:"`multiple={false}`: picking an option replaces the selection and closes the popover.",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: i18n.t("suppliers:filters.location"),
    searchFn: searchIn(countryOptions),
    initialOptions: countryOptions,
    selected: []
  }
}`,...d.parameters?.docs?.source},description:{story:"Options carrying a `count` show it right-aligned in mono.",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: i18n.t("equipment:filters.productionScales.title"),
    initialOptions: productionScaleOptions,
    selected: []
  }
}`,...p.parameters?.docs?.source},description:{story:"`initialOptions` are listed immediately while the first fetch runs.",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: i18n.t("equipment:filters.productionScales.title"),
    searchFn: searchIn(productionScaleOptions, 3000),
    selected: []
  }
}`,...u.parameters?.docs?.source},description:{story:"A slow searchFn (3s): the list shows the ProxyLoader while it resolves.",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: i18n.t("equipment:filters.productionScales.title"),
    searchFn: searchIn([]),
    selected: []
  }
}`,...m.parameters?.docs?.source},description:{story:'searchFn resolves to nothing: the list shows "No results found.".',...m.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: i18n.t("ingredients:filters.dietaryPreferences.title"),
    searchFn: searchIn(dietaryOptions),
    selected: [dietaryOptions[0]]
  },
  render: args => <div className="pf-story-data-grid-server-side-faceted-filter-actions">
      <ControlledServerSideFacetedFilter {...args} />
      <ControlledServerSideFacetedFilter title={i18n.t("ingredients:filters.religion.title")} searchFn={searchIn([{
      label: "Halal",
      value: "fc-301"
    }, {
      label: "Kosher",
      value: "fc-302"
    }])} selected={[]} onChange={args.onChange} />
    </div>
}`,...g.parameters?.docs?.source},description:{story:"Two chips side by side, as the Ingredients toolbar renders Dietary Preferences and Religion.",...g.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: i18n.t("ingredients:filters.dietaryPreferences.title"),
    searchFn: searchIn(dietaryOptions),
    selected: [],
    layout: "sidebar"
  },
  render: args => <div className={sidebarFrame}>
      <FilterSectionGroup defaultOpen={[args.title ?? ""]}>
        <ControlledServerSideFacetedFilter {...args} />
      </FilterSectionGroup>
    </div>
}`,...h.parameters?.docs?.source},description:{story:'layout="sidebar": search input and results inline as a left filter panel section; options load on mount.',...h.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: i18n.t("ingredients:filters.dietaryPreferences.title"),
    searchFn: searchIn(dietaryOptions),
    selected: [dietaryOptions[0], dietaryOptions[1]],
    layout: "sidebar"
  },
  render: args => <div className={sidebarFrame}>
      <FilterSectionGroup defaultOpen={[args.title ?? ""]}>
        <ControlledServerSideFacetedFilter {...args} />
      </FilterSectionGroup>
    </div>
}`,...f.parameters?.docs?.source},description:{story:'Sidebar with values chosen: they are pinned under "Selected" above the results, with a count badge and "Clear".',...f.parameters?.docs?.description}}};const ee=["AsProductionScalesFilter","AsDietaryPreferencesFilter","ManySelected","SingleSelect","WithOptionCounts","WithInitialOptions","SlowSearch","NoResults","InIngredientsToolbar","Sidebar","SidebarWithSelection"];export{o as AsDietaryPreferencesFilter,a as AsProductionScalesFilter,g as InIngredientsToolbar,l as ManySelected,m as NoResults,h as Sidebar,f as SidebarWithSelection,c as SingleSelect,u as SlowSearch,p as WithInitialOptions,d as WithOptionCounts,ee as __namedExportsOrder,$ as default};
