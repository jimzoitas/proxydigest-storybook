import{j as n}from"./iframe-AqpYXns4.js";/* empty css                      */import{R as p,a as d}from"./radio-group-BybVJGC9.js";import{L as c}from"./label-1kzVJgIY.js";import{R as l}from"./catalog.examples-zcZL5Oir.js";import"./preload-helper-PPVm8Dsz.js";import"./roving-focus-0SK5-Aqb.js";import"./checkbox-TIyFUyNd.js";import"./minus-0yDLMIrp.js";import"./useAriaLabelledBy-Da9KhbUQ.js";import"./CompositeRoot-yL7bK7Jd.js";import"./circle-Dg6ojZlj.js";import"./CompositeItem-D1wyjQOR.js";import"./useCompositeItem-QlszIeBN.js";import"./button-B5FjjXWS.js";import"./index-DEXj3--c.js";import"./loader-circle-mWFWE2W9.js";import"./input-DLCq6ZzS.js";import"./textarea-uF5bUZhh.js";import"./switch-Dq-T1JeF.js";import"./slider-BaUfZmPE.js";import"./valueToPercent-DfWH2vGw.js";import"./toggle-group-DO0OQdfk.js";import"./card-ByHHR2Jw.js";import"./badge-CQKobhLs.js";import"./alert-vS_dpmu2.js";import"./avatar-DTkZwYDb.js";import"./separator-C7Zm_6nS.js";import"./Separator-DssPvI5G.js";import"./skeleton-C_SNY4zC.js";import"./progress-CmLHBdmj.js";import"./tabs-D2cBF9Wg.js";import"./accordion-B6UeQwZ6.js";import"./accordion-0FBKGPj-.js";import"./useCollapsiblePanel-DOTGH3aY.js";import"./collapsible-DZyMQ3Bu.js";import"./dialog-DnXWbC45.js";import"./overlay-dialog-aVFq0bEi.js";import"./sheet-dNUUpp2U.js";import"./alert-dialog-DbGCTr1F.js";import"./hover-card-sY2GMIgd.js";import"./dropdown-menu-qZhg1f8R.js";import"./menu-DaKubz4c.js";import"./chevron-right-B3hyZT-D.js";import"./context-menu-B8gpNJM6.js";import"./calendar-V3NmEFls.js";import"./chevron-left-DLgfJc_O.js";import"./resizable-YZsVPkgn.js";import"./grip-vertical-Dizk5hed.js";import"./table-DOkc2t6b.js";import"./search-field-Geq7aFHv.js";import"./index.module-B2X8Wkxy.js";const{expect:u,userEvent:m,within:g,waitFor:y}=__STORYBOOK_MODULE_TEST__,fo={title:"Components/Controls/Radio group",id:"components-inputs-selection-radio-group",component:p,tags:["autodocs"],parameters:{layout:"padded",controls:{include:["size","defaultValue","orientation","disabled","required","loop"]},docs:{description:{component:"Mutually exclusive choices with arrow-key navigation. value/onValueChange uses a string; defaultValue initializes selection. orientation and loop control navigation; disabled/required apply to the group. The host owns submission. The group size is inherited by its items: sm is 24px (default), lg is 32px at a 16px root. RadioGroupItem can override size. Control-owned tokens keep all four theme mappings identical in geometry; keyboard focus highlights the own border without an outer ring."}}},render:r=>n.jsx(p,{...r,children:["draft","ready"].map(o=>n.jsxs(c,{className:"pf-story-toolbar",children:[n.jsx(d,{value:o}),o]},o))},r.defaultValue),args:{size:"sm",defaultValue:"draft",orientation:"vertical",disabled:!1,required:!1,loop:!0,"aria-label":"Recipe status"},argTypes:{size:{control:"inline-radio",options:["sm","lg"],description:"Every item inherits sm 24px (default) or lg 32px at a 16px root. An individual RadioGroupItem can override size."},defaultValue:{control:"select",options:["draft","ready"]},orientation:{control:"select",options:["horizontal","vertical"]},disabled:{control:"boolean"},required:{control:"boolean"},loop:{control:"boolean"}}},e={},t={...l},a={args:{size:"lg"}},i={args:{disabled:!0}},s={play:async({canvasElement:r})=>{const o=g(r);o.getByRole("radio",{name:"draft"}).focus(),await m.keyboard("{ArrowDown>}"),await y(()=>u(o.getByRole("radio",{name:"ready"})).toBeChecked()),await m.keyboard("{/ArrowDown}")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...RadioChoices
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg"
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const draft = canvas.getByRole("radio", {
      name: "draft"
    });
    draft.focus();
    // Let the primitive move focus while the arrow key is held.
    await userEvent.keyboard("{ArrowDown>}");
    await waitFor(() => expect(canvas.getByRole("radio", {
      name: "ready"
    })).toBeChecked());
    await userEvent.keyboard("{/ArrowDown}");
  }
}`,...s.parameters?.docs?.source}}};const ho=["Playground","ExistingExample","Large","Disabled","KeyboardSelection"];export{i as Disabled,t as ExistingExample,s as KeyboardSelection,a as Large,e as Playground,ho as __namedExportsOrder,fo as default};
