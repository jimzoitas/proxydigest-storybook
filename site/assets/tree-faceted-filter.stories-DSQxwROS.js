import{j as i,i as a,r as v}from"./iframe-6uZ_OvXJ.js";import{T as S}from"./tree-faceted-filter-DBnSkNXH.js";import{c as F}from"./faceted-filter-Bc-gkxm-.js";import"./preload-helper-PPVm8Dsz.js";import"./button-A8HzViyP.js";import"./index-BIEDR5QJ.js";import"./loader-circle-DPzNQWfU.js";import"./separator-CkvihxIh.js";import"./Separator-UJ0jSiK3.js";import"./badge-BfEYvfQV.js";import"./index-BQqMskN1.js";import"./input-xqFXePlz.js";import"./checkbox-CzlPmnCo.js";import"./minus-CKlNa8RO.js";import"./useAriaLabelledBy-BKgySVsG.js";import"./collapsible-D5z7BIl8.js";import"./useCollapsiblePanel-CEEvXl-2.js";import"./context-menu-CQ8VtaHB.js";import"./menu-BB0nZVv8.js";import"./CompositeItem-DiKjTF7g.js";import"./useCompositeItem-CEgqY0th.js";import"./chevron-right-DQAu3Wv6.js";import"./circle-BOSVkkPm.js";import"./folder-DCi5xMtm.js";import"./box-DT1itMff.js";import"./proxy-B45Ty6wS.js";import"./list-chevrons-up-down-5h4Yy5eO.js";import"./circle-x-BOcBs_hd.js";import"./circle-plus-CBh8aV2x.js";import"./dialog-DnvpmbSS.js";import"./overlay-dialog-_C1niahL.js";import"./accordion-DuKcutha.js";import"./roving-focus-0SK5-Aqb.js";const{fn:q}=__STORYBOOK_MODULE_TEST__,s=(e,r,t)=>({id:String(e),name:r,definition:`${r} process`,processCategoryId:t,tenantId:1,createdAt:"2026-01-12T09:30:00Z",createdBy:"user-storybook-0001",updatedAt:"2026-01-12T09:30:00Z"}),C=[{id:"1",name:"Thermal",parentId:0,parentName:"",processTypes:[s(1,"Pasteurisation",1),s(2,"Sterilisation",1),s(3,"Baking",1)]},{id:"2",name:"Mechanical",parentId:0,parentName:"",processTypes:[s(4,"Mixing",2),s(5,"Homogenisation",2),s(6,"Extrusion",2)]},{id:"3",name:"Separation",parentId:0,parentName:"",processTypes:[s(7,"Filtration",3),s(8,"Centrifugation",3)]},{id:"4",name:"Fermentation",parentId:0,parentName:"",processTypes:[]}],k=(e,r)=>{const t=new Set(r);return e.map(n=>({id:`category-${n.id}`,name:n.name,type:"category",checked:t.has(`category-${n.id}`),children:n.processTypes?.map(o=>({id:`type-${o.id}`,name:o.name,type:"processType",checked:t.has(`type-${o.id}`)}))??[]}))},g=(e,r)=>e.map(t=>({...t,checked:r.has(t.id),children:t.children?g(t.children,r):t.children}));function f({treeData:e,selectedIds:r,onChange:t,...n}){const[o,T]=v.useState(r);v.useEffect(()=>{T(r)},[r]);const I=b=>{T(b),t(b)};return i.jsx(S,{...n,treeData:g(e,new Set(o)),selectedIds:o,onChange:I})}const oe={title:"Components/Data Display/Data Grid/Internals/TreeFacetedFilter",id:"design-system-data-table-treefacetedfilter",component:S,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Design-system version of `src/components/proxy-reusables/table/components/filters/select/tree-faceted-filter.tsx`. Its source is `src/design-system/components/data-table/components/filters/select/tree-faceted-filter.tsx`; the usage notes below describe the original. Hierarchical (category tree) filter chip whose Popover holds a checkbox TreeView with sticky search and an expand-all toggle. Checking a parent selects its children, selecting every child selects the parent, and unchecking a child clears the parent; the badge counts selected leaves. The caller pre-bakes the checked state into `treeData[].checked`. Used by 2 toolbars: src/modules/Equipment/EquipmentTableChildren.tsx (process types) and src/modules/Facilities/FacilitiesTableChildren.tsx (locations). Source: src/components/proxy-reusables/table/components/filters/select/tree-faceted-filter.tsx."}}},args:{onChange:q(),treeData:k(C,[])},argTypes:{title:{control:"text"},isLoading:{control:"boolean"},selectedIds:{control:"object"},treeData:{control:"object"}},render:e=>i.jsx(f,{...e})},c={args:{title:a.t("equipment:filters.processTypes.title"),selectedIds:[]}},d={args:{title:a.t("equipment:filters.processTypes.title"),selectedIds:["type-2","type-4"]}},p={args:{title:a.t("equipment:filters.processTypes.title"),selectedIds:["category-2","type-4","type-5","type-6"]}},l={args:{title:a.t("equipment:filters.processTypes.title"),selectedIds:[],isLoading:!0,treeData:[]}},m={args:{title:a.t("facilities:filters.location"),selectedIds:["division-5281"],treeData:g([{id:"country-528",name:"Netherlands",type:"country",children:[{id:"division-5281",name:"North Holland",type:"division"},{id:"division-5282",name:"South Holland",type:"division"}]},{id:"country-276",name:"Germany",type:"country",children:[{id:"division-2761",name:"Bavaria",type:"division"},{id:"division-2762",name:"Berlin",type:"division"}]}],new Set(["division-5281"]))}},y={args:{title:a.t("equipment:filters.processTypes.title"),selectedIds:[],treeData:[]}},x="pf-story-data-grid-tree-faceted-filter-filter-frame",u={args:{title:a.t("equipment:filters.processTypes.title"),selectedIds:[],layout:"sidebar"},render:e=>i.jsx("div",{className:x,children:i.jsx(F,{defaultOpen:[e.title??""],children:i.jsx(f,{...e})})})},h={args:{title:a.t("equipment:filters.processTypes.title"),selectedIds:["category-2","type-4","type-5","type-6"],layout:"sidebar"},render:e=>i.jsx("div",{className:x,children:i.jsx(F,{defaultOpen:[e.title??""],children:i.jsx(f,{...e})})})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: i18n.t("equipment:filters.processTypes.title"),
    selectedIds: []
  }
}`,...c.parameters?.docs?.source},description:{story:'Equipment toolbar "Process Types" with nothing selected; open it to browse the categories.',...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: i18n.t("equipment:filters.processTypes.title"),
    selectedIds: ["type-2", "type-4"]
  }
}`,...d.parameters?.docs?.source},description:{story:'Two leaves selected under different categories: the badge reads "2 selected".',...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: i18n.t("equipment:filters.processTypes.title"),
    selectedIds: ["category-2", "type-4", "type-5", "type-6"]
  }
}`,...p.parameters?.docs?.source},description:{story:"A whole category selected: the parent and its children are checked, the badge counts the leaves only.",...p.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: i18n.t("equipment:filters.processTypes.title"),
    selectedIds: [],
    isLoading: true,
    treeData: []
  }
}`,...l.parameters?.docs?.source},description:{story:"While the categories load, the trigger is disabled.",...l.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: i18n.t("facilities:filters.location"),
    selectedIds: ["division-5281"],
    treeData: applyChecked([{
      id: "country-528",
      name: "Netherlands",
      type: "country",
      children: [{
        id: "division-5281",
        name: "North Holland",
        type: "division"
      }, {
        id: "division-5282",
        name: "South Holland",
        type: "division"
      }]
    }, {
      id: "country-276",
      name: "Germany",
      type: "country",
      children: [{
        id: "division-2761",
        name: "Bavaria",
        type: "division"
      }, {
        id: "division-2762",
        name: "Berlin",
        type: "division"
      }]
    }], new Set(["division-5281"]))
  }
}`,...m.parameters?.docs?.source},description:{story:'Facilities toolbar "Location": the same chip over the country > subnational-division tree FacilitiesTableChildren builds.',...m.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: i18n.t("equipment:filters.processTypes.title"),
    selectedIds: [],
    treeData: []
  }
}`,...y.parameters?.docs?.source},description:{story:"No categories at all: the popover opens on an empty tree.",...y.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: i18n.t("equipment:filters.processTypes.title"),
    selectedIds: [],
    layout: "sidebar"
  },
  render: args => <div className={sidebarFrame}>
      <FilterSectionGroup defaultOpen={[args.title ?? ""]}>
        <ControlledTreeFacetedFilter {...args} />
      </FilterSectionGroup>
    </div>
}`,...u.parameters?.docs?.source},description:{story:'layout="sidebar": the category tree with its search inline as a left filter panel section.',...u.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: i18n.t("equipment:filters.processTypes.title"),
    selectedIds: ["category-2", "type-4", "type-5", "type-6"],
    layout: "sidebar"
  },
  render: args => <div className={sidebarFrame}>
      <FilterSectionGroup defaultOpen={[args.title ?? ""]}>
        <ControlledTreeFacetedFilter {...args} />
      </FilterSectionGroup>
    </div>
}`,...h.parameters?.docs?.source},description:{story:'Sidebar with a whole category selected: the header badge counts leaves only, and "Clear" empties it.',...h.parameters?.docs?.description}}};const ce=["AsProcessTypesFilter","WithSelection","ParentSelected","Loading","AsFacilitiesLocationFilter","EmptyTree","Sidebar","SidebarWithSelection"];export{m as AsFacilitiesLocationFilter,c as AsProcessTypesFilter,y as EmptyTree,l as Loading,p as ParentSelected,u as Sidebar,h as SidebarWithSelection,d as WithSelection,ce as __namedExportsOrder,oe as default};
