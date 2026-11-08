import{j as e,S as c}from"./iframe-nhB53rPD.js";import{B as l}from"./button-_tcBhp5_.js";import{C as m}from"./component-name-with-external-id-Dh_Bw4fF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8Dbc_Jva.js";import"./loader-circle-MxHlgpxw.js";import"./ingredientExternalId-BfH8OSym.js";const I={title:"Components/Data Display/Data Grid/Internals/ComponentNameWithExternalId",id:"design-system-data-table-componentnamewithexternalid",component:m,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Design-system version of `src/components/proxy-reusables/table/components/custom-cells/component-name-with-external-id.tsx`. Its source is `src/design-system/components/data-table/components/custom-cells/component-name-with-external-id.tsx`; the usage notes below describe the original. Renders a formula component's name with the chosen ingredient's External System ID under it (or beside it with `inline`, for the edit-mode picker button). The id shows only for a customer tenant's own ingredients (`tenantId` above the Proxy tenant), except formula-backed components which always show it. Used by the 3 ingredient cells: `src/components/proxy-reusables/table/components/custom-cells/initial-ingredient-cell.tsx`, `component-ingredient-cell.tsx` and `output-ingredient-cell.tsx`. Source: `src/components/proxy-reusables/table/components/custom-cells/component-name-with-external-id.tsx`."}}},argTypes:{name:{control:"text",description:"Denormalised component name."},externalSystemId:{control:"text",description:"`componentExternalSystemId` from the formula-component read model."},tenantId:{control:"number",description:"Owner tenant of the ingredient; the id shows only when it is above the Proxy tenant (1)."},componentType:{control:"select",options:["ingredient","formula","processing_step_output"],description:"`formula` bypasses the tenant gate."},inline:{control:"boolean",description:"Name and id side by side (edit-mode picker button)."}},args:{name:"Whole milk",externalSystemId:"MLK-0042",tenantId:42,componentType:"ingredient",inline:!1}},t={},r={args:{inline:!0},render:n=>e.jsxs(l,{variant:"outline",className:"pf-story-data-grid-component-name-with-external-id-row-frame",children:[e.jsx(m,{...n}),e.jsx(c,{})]})},a={args:{name:"Cane sugar",externalSystemId:"PF-SUG-0007",tenantId:1}},o={args:{name:"Vanilla syrup base",externalSystemId:"SYR-VAN-01",tenantId:null,componentType:"formula"}},s={args:{name:"Cocoa powder",externalSystemId:null}},i={args:{name:"Organic skimmed milk powder, low heat, 34% protein",externalSystemId:"SKM-MLK-PWDR-LH-34-0001"},render:n=>e.jsx("div",{className:"pf-story-data-grid-component-name-with-external-id-constrained-frame",children:e.jsx(m,{...n})})},d={args:{name:"Organic skimmed milk powder, low heat, 34% protein",externalSystemId:"SKM-MLK-PWDR-LH-34-0001",inline:!0},render:n=>e.jsxs(l,{variant:"outline",className:"pf-story-data-grid-component-name-with-external-id-compact-row-frame",children:[e.jsx(m,{...n}),e.jsx(c,{})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source},description:{story:"A tenant-owned ingredient in a read-mode cell: the name with a footnote id under it.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    inline: true
  },
  render: args => <Button variant="outline" className="pf-story-data-grid-component-name-with-external-id-row-frame">
      <ComponentNameWithExternalId {...args} />
      <Search />
    </Button>
}`,...r.parameters?.docs?.source},description:{story:"Inside the edit-mode picker button of the ingredient cells: name and id on one line.",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Cane sugar",
    externalSystemId: "PF-SUG-0007",
    tenantId: 1
  }
}`,...a.parameters?.docs?.source},description:{story:"A Proxy (global) ingredient: its id is internal, so only the name renders.",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Vanilla syrup base",
    externalSystemId: "SYR-VAN-01",
    tenantId: null,
    componentType: "formula"
  }
}`,...o.parameters?.docs?.source},description:{story:"A nested formula component always shows its user-entered id, whatever the tenant.",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Cocoa powder",
    externalSystemId: null
  }
}`,...s.parameters?.docs?.source},description:{story:"No id on record: name only.",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Organic skimmed milk powder, low heat, 34% protein",
    externalSystemId: "SKM-MLK-PWDR-LH-34-0001"
  },
  render: args => <div className="pf-story-data-grid-component-name-with-external-id-constrained-frame">
      <ComponentNameWithExternalId {...args} />
    </div>
}`,...i.parameters?.docs?.source},description:{story:"Stacked layout breaks long names and ids inside a narrow column.",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Organic skimmed milk powder, low heat, 34% protein",
    externalSystemId: "SKM-MLK-PWDR-LH-34-0001",
    inline: true
  },
  render: args => <Button variant="outline" className="pf-story-data-grid-component-name-with-external-id-compact-row-frame">
      <ComponentNameWithExternalId {...args} />
      <Search />
    </Button>
}`,...d.parameters?.docs?.source},description:{story:"Inline layout truncates both parts instead of wrapping the picker button.",...d.parameters?.docs?.description}}};const S=["TenantIngredientStacked","InlineInPickerButton","ProxyIngredientHidesId","FormulaComponentAlwaysShowsId","WithoutExternalId","LongNameInNarrowCell","InlineTruncatesLongName"];export{o as FormulaComponentAlwaysShowsId,r as InlineInPickerButton,d as InlineTruncatesLongName,i as LongNameInNarrowCell,a as ProxyIngredientHidesId,t as TenantIngredientStacked,s as WithoutExternalId,S as __namedExportsOrder,I as default};
