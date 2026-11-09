import{j as e,i as a}from"./iframe-DgvZnKtv.js";/* empty css                      */import{B as n}from"./button-CEcYiQdY.js";import{S as i}from"./search-field-CzWqD7iz.js";import{R as l}from"./reset-filters-button-9c6S5aRE.js";import{T as c}from"./table-legend-Bd9X6OO1.js";import{P as d}from"./plus-BMpb-JrX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWlKOsdO.js";import"./loader-circle-BsZrs7F6.js";import"./input-DTWVrd6t.js";import"./index.module-C-pw7-ZN.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,B={title:"Components/Data Display/Data Grid/Internals/TableLegend",id:"design-system-data-table-tablelegend",component:c,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Design-system version of `src/components/proxy-reusables/table/components/table-legend.tsx`. Its source is `src/design-system/components/data-table/components/table-legend.tsx`; the usage notes below describe the original. Structural passthrough (`<>{children}</>`) that TableCore uses as the toolbar slot for its children; it renders no markup of its own. Used by 1 file, src/components/proxy-reusables/table/table-core.tsx, where every module's `<Module>TableChildren` toolbar lands. Source: src/components/proxy-reusables/table/components/table-legend.tsx."}}},argTypes:{children:{control:!1}}},s={args:{children:e.jsxs("div",{className:"pf-story-data-grid-table-legend-toolbar",children:[e.jsxs("div",{className:"pf-story-toolbar",children:[e.jsx(i,{initialValue:"",onSearch:o()}),e.jsx(l,{onReset:o()})]}),e.jsxs(n,{variant:"outline",size:"sm",className:"pf-story-data-grid-table-legend-summary",children:[e.jsx(d,{}),a.t("formula:productsTable.createButton")]})]})}},t={args:{children:"Toolbar content goes here"}},r={args:{}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div className="pf-story-data-grid-table-legend-toolbar">
        <div className="pf-story-toolbar">
          <SearchInput initialValue="" onSearch={fn()} />
          <ResetFiltersButton onReset={fn()} />
        </div>
        <Button variant="outline" size="sm" className="pf-story-data-grid-table-legend-summary">
          <Plus />
          {i18n.t("formula:productsTable.createButton")}
        </Button>
      </div>
  }
}`,...s.parameters?.docs?.source},description:{story:"The toolbar row a list module passes as TableCore children: search, reset and a create button.",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Toolbar content goes here"
  }
}`,...t.parameters?.docs?.source},description:{story:"Any node passes straight through.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source},description:{story:"Without children it renders nothing.",...r.parameters?.docs?.description}}};const j=["AsToolbarSlot","WithPlainText","Empty"];export{s as AsToolbarSlot,r as Empty,t as WithPlainText,j as __namedExportsOrder,B as default};
