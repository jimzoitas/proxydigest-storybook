import{j as n}from"./iframe-nhB53rPD.js";/* empty css                      */import{R as p,a as d}from"./radio-group-BjJ6ZVS9.js";import{L as c}from"./label-CIA21tYv.js";import{R as l}from"./catalog.examples-BkhE3kuZ.js";import"./preload-helper-PPVm8Dsz.js";import"./roving-focus-0SK5-Aqb.js";import"./checkbox-C9bOlqce.js";import"./minus-XaXcKlev.js";import"./useAriaLabelledBy-D8Oa7trO.js";import"./CompositeRoot-B0On-XqY.js";import"./circle-Byfpv97O.js";import"./CompositeItem-D_8UuHC1.js";import"./useCompositeItem-BquT0LDd.js";import"./button-_tcBhp5_.js";import"./index-8Dbc_Jva.js";import"./loader-circle-MxHlgpxw.js";import"./input-CAdeD_xm.js";import"./textarea-DEsuPIgK.js";import"./switch-uMj7V9v_.js";import"./slider-DsOFUM94.js";import"./valueToPercent-DfWH2vGw.js";import"./toggle-group-WfIKaqgN.js";import"./card-CGu-joF2.js";import"./badge-DF9-aVgV.js";import"./alert-CuymrseY.js";import"./avatar-C4hdJ-kW.js";import"./separator-Dmg9cS_7.js";import"./Separator-RhxJSB-Q.js";import"./skeleton-CMUv0H3w.js";import"./progress-u2AUM0_6.js";import"./tabs-Fq9_gDeO.js";import"./accordion-B67wbHOw.js";import"./accordion-CHExsbqI.js";import"./useCollapsiblePanel-DVMF6qnG.js";import"./collapsible-pI4oVkh3.js";import"./dialog-CyBaw9zK.js";import"./overlay-dialog-Co5KED9w.js";import"./sheet-L7clkwH-.js";import"./alert-dialog-sQE9WhqY.js";import"./hover-card-DUsLCMGr.js";import"./dropdown-menu-6QYTqNVQ.js";import"./menu-DyIs6xZo.js";import"./chevron-right-CavErG_J.js";import"./context-menu-BgHQWO9B.js";import"./calendar-CXIh8-zC.js";import"./chevron-left-Dcrje28Y.js";import"./resizable-kngELX8h.js";import"./grip-vertical-Cr-UETSo.js";import"./table-DKvxVw7S.js";import"./search-field-Dneu7mbv.js";import"./index.module-B262ysEo.js";const{expect:u,userEvent:m,within:g,waitFor:y}=__STORYBOOK_MODULE_TEST__,fo={title:"Components/Controls/Radio group",id:"components-inputs-selection-radio-group",component:p,tags:["autodocs"],parameters:{layout:"padded",controls:{include:["size","defaultValue","orientation","disabled","required","loop"]},docs:{description:{component:"Mutually exclusive choices with arrow-key navigation. value/onValueChange uses a string; defaultValue initializes selection. orientation and loop control navigation; disabled/required apply to the group. The host owns submission. The group size is inherited by its items: sm is 24px (default), lg is 32px at a 16px root. RadioGroupItem can override size. Control-owned tokens keep all four theme mappings identical in geometry; keyboard focus highlights the own border without an outer ring."}}},render:r=>n.jsx(p,{...r,children:["draft","ready"].map(o=>n.jsxs(c,{className:"pf-story-toolbar",children:[n.jsx(d,{value:o}),o]},o))},r.defaultValue),args:{size:"sm",defaultValue:"draft",orientation:"vertical",disabled:!1,required:!1,loop:!0,"aria-label":"Recipe status"},argTypes:{size:{control:"inline-radio",options:["sm","lg"],description:"Every item inherits sm 24px (default) or lg 32px at a 16px root. An individual RadioGroupItem can override size."},defaultValue:{control:"select",options:["draft","ready"]},orientation:{control:"select",options:["horizontal","vertical"]},disabled:{control:"boolean"},required:{control:"boolean"},loop:{control:"boolean"}}},e={},t={...l},a={args:{size:"lg"}},i={args:{disabled:!0}},s={play:async({canvasElement:r})=>{const o=g(r);o.getByRole("radio",{name:"draft"}).focus(),await m.keyboard("{ArrowDown>}"),await y(()=>u(o.getByRole("radio",{name:"ready"})).toBeChecked()),await m.keyboard("{/ArrowDown}")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
