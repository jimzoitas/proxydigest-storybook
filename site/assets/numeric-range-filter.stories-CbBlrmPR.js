import{j as r,m as t,r as y}from"./iframe-AqpYXns4.js";import{e as U}from"./faceted-filter-DrOfbNuJ.js";import{N as x}from"./numeric-range-filter-CiASua6d.js";import"./preload-helper-PPVm8Dsz.js";import"./badge-CQKobhLs.js";import"./index-DEXj3--c.js";import"./button-B5FjjXWS.js";import"./loader-circle-mWFWE2W9.js";import"./checkbox-TIyFUyNd.js";import"./minus-0yDLMIrp.js";import"./useAriaLabelledBy-Da9KhbUQ.js";import"./dialog-DnXWbC45.js";import"./overlay-dialog-aVFq0bEi.js";import"./separator-C7Zm_6nS.js";import"./Separator-DssPvI5G.js";import"./accordion-0FBKGPj-.js";import"./roving-focus-0SK5-Aqb.js";import"./useCollapsiblePanel-DOTGH3aY.js";import"./circle-x-DP398tgS.js";import"./circle-plus-JvGGZ7kp.js";import"./input-DLCq6ZzS.js";const{expect:C,fn:I,userEvent:E,within:w}=__STORYBOOK_MODULE_TEST__;function g({value:e,onChange:n,...i}){const[v,f]=y.useState(e);y.useEffect(()=>{f(e)},[e]);const S=b=>{f(b),n(b)},h=r.jsx(x,{...i,value:v,onChange:S});return i.layout==="sidebar"?r.jsx(F,{title:i.sectionValue??i.title??"",children:h}):h}function F({title:e,children:n}){return r.jsx("div",{className:"pf-story-data-grid-numeric-range-filter-filter-frame",children:r.jsx(U,{defaultOpen:[e],children:n})})}const z={title:"Components/Data Display/Data Grid/Internals/NumericRangeFilter",id:"design-system-data-table-numericrangefilter",component:x,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Design-system version of `src/components/proxy-reusables/table/components/filters/numeric/numeric-range-filter.tsx`. Its source is `src/design-system/components/data-table/components/filters/numeric/numeric-range-filter.tsx`; the usage notes below describe the original. Numeric range filter chip for table toolbars. The trigger shows a '≥ min', '≤ max' or 'min - max' Badge and an XCircle clear control once active; the Popover holds Min and Max number Inputs (step 0.01) with Reset and Apply buttons. Used by 2 files, twice per Ingredients toolbar for the USD and EUR cost ranges (src/modules/Ingredients/IngredientsList/IngredientsTable/IngredientsChildren.tsx). Source: src/components/proxy-reusables/table/components/filters/numeric/numeric-range-filter.tsx."}}},args:{onChange:I()},argTypes:{title:{control:"text"},value:{control:"object",description:"{ min?: string; max?: string }"},layout:{control:"inline-radio",options:["toolbar","sidebar"],description:"`toolbar` (default): chip + popover. `sidebar`: inline section of the left filter panel."},sectionValue:{control:"text",description:"Accordion item value of the sidebar section; defaults to the title."}},render:e=>r.jsx(g,{...e})},s={args:{title:t.t("ingredients:filters.costUS.title"),value:{}}},a={args:{title:t.t("ingredients:filters.costEU.title"),value:{}}},o={args:{title:t.t("ingredients:filters.costUS.title"),value:{min:"2.5"}}},l={args:{title:t.t("ingredients:filters.costUS.title"),value:{max:"10"}}},c={args:{title:t.t("ingredients:filters.costUS.title"),value:{min:"2.5",max:"10"}}},d={args:{title:void 0,value:{min:"1",max:"5"}}},m={args:{title:t.t("ingredients:filters.costUS.title"),value:{min:"2.5"}},render:e=>r.jsxs("div",{className:"pf-story-data-grid-numeric-range-filter-actions",children:[r.jsx(g,{...e}),r.jsx(g,{title:t.t("ingredients:filters.costEU.title"),value:{},onChange:e.onChange})]})},p={args:{title:t.t("ingredients:filters.costUS.title"),value:{},layout:"sidebar"}},u={args:{title:t.t("ingredients:filters.costUS.title"),value:{min:"2.5",max:"10"},layout:"sidebar"},play:async({canvasElement:e,args:n})=>{const i=w(e);await E.click(i.getByRole("button",{name:t.t("common:table.filter.clearFilter",{title:n.title})})),await C(n.onChange).toHaveBeenCalledWith({min:void 0,max:void 0})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: i18n.t("ingredients:filters.costUS.title"),
    value: {}
  }
}`,...s.parameters?.docs?.source},description:{story:'Ingredients toolbar, "Cost US" with nothing applied.',...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: i18n.t("ingredients:filters.costEU.title"),
    value: {}
  }
}`,...a.parameters?.docs?.source},description:{story:'Ingredients toolbar, "Cost EU" with nothing applied.',...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: i18n.t("ingredients:filters.costUS.title"),
    value: {
      min: "2.5"
    }
  }
}`,...o.parameters?.docs?.source},description:{story:'Only a minimum applied: the badge reads "≥ min".',...o.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: i18n.t("ingredients:filters.costUS.title"),
    value: {
      max: "10"
    }
  }
}`,...l.parameters?.docs?.source},description:{story:'Only a maximum applied: the badge reads "≤ max".',...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: i18n.t("ingredients:filters.costUS.title"),
    value: {
      min: "2.5",
      max: "10"
    }
  }
}`,...c.parameters?.docs?.source},description:{story:'Both bounds applied: the badge reads "min - max".',...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined,
    value: {
      min: "1",
      max: "5"
    }
  }
}`,...d.parameters?.docs?.source},description:{story:"No title: only the icon and, once active, the range badge.",...d.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: i18n.t("ingredients:filters.costUS.title"),
    value: {
      min: "2.5"
    }
  },
  render: args => <div className="pf-story-data-grid-numeric-range-filter-actions">
      <ControlledNumericRangeFilter {...args} />
      <ControlledNumericRangeFilter title={i18n.t("ingredients:filters.costEU.title")} value={{}} onChange={args.onChange} />
    </div>
}`,...m.parameters?.docs?.source},description:{story:"Two instances side by side, as the Ingredients toolbar renders them.",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: i18n.t("ingredients:filters.costUS.title"),
    value: {},
    layout: "sidebar"
  }
}`,...p.parameters?.docs?.source},description:{story:'layout="sidebar": Min/Max inputs with Reset/Apply inline in a filter-panel section.',...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: i18n.t("ingredients:filters.costUS.title"),
    value: {
      min: "2.5",
      max: "10"
    },
    layout: "sidebar"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: i18n.t("common:table.filter.clearFilter", {
        title: args.title
      })
    }));
    await expect(args.onChange).toHaveBeenCalledWith({
      min: undefined,
      max: undefined
    });
  }
}`,...u.parameters?.docs?.source},description:{story:'Sidebar section with both bounds applied; "Clear" emits the same empty range as Reset.',...u.parameters?.docs?.description}}};const J=["AsIngredientsCostUsFilter","AsIngredientsCostEuFilter","MinOnly","MaxOnly","MinAndMax","WithoutTitle","InIngredientsToolbar","Sidebar","SidebarWithValue"];export{a as AsIngredientsCostEuFilter,s as AsIngredientsCostUsFilter,m as InIngredientsToolbar,l as MaxOnly,c as MinAndMax,o as MinOnly,p as Sidebar,u as SidebarWithValue,d as WithoutTitle,J as __namedExportsOrder,z as default};
