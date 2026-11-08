import{j as n}from"./iframe-6uZ_OvXJ.js";/* empty css                      */import{R as p,a as d}from"./radio-group-DXhz-kFN.js";import{L as c}from"./label-ccPiVmVc.js";import{R as l}from"./catalog.examples-BgvDZJ6P.js";import"./preload-helper-PPVm8Dsz.js";import"./roving-focus-0SK5-Aqb.js";import"./checkbox-CzlPmnCo.js";import"./minus-CKlNa8RO.js";import"./useAriaLabelledBy-BKgySVsG.js";import"./CompositeRoot-Av_o_W_V.js";import"./circle-BOSVkkPm.js";import"./CompositeItem-DiKjTF7g.js";import"./useCompositeItem-CEgqY0th.js";import"./button-A8HzViyP.js";import"./index-BIEDR5QJ.js";import"./loader-circle-DPzNQWfU.js";import"./input-xqFXePlz.js";import"./textarea-BIg20vtR.js";import"./switch-DwXRQgw2.js";import"./slider-pWyGG5M1.js";import"./valueToPercent-DfWH2vGw.js";import"./toggle-group-C1nrCotT.js";import"./card-DXFGhtzm.js";import"./badge-BfEYvfQV.js";import"./alert-Bkb9iOAA.js";import"./avatar-Dmq_uy83.js";import"./separator-CkvihxIh.js";import"./Separator-UJ0jSiK3.js";import"./skeleton-Bu9j_NfJ.js";import"./progress-Bxl1-gCx.js";import"./tabs-C1EIt9oS.js";import"./accordion-COmVAh8t.js";import"./accordion-DuKcutha.js";import"./useCollapsiblePanel-CEEvXl-2.js";import"./collapsible-D5z7BIl8.js";import"./dialog-DnvpmbSS.js";import"./overlay-dialog-_C1niahL.js";import"./sheet-024fQP7m.js";import"./alert-dialog-DLLLKdzA.js";import"./hover-card-B1VUedu_.js";import"./dropdown-menu-CH01PJiV.js";import"./menu-BB0nZVv8.js";import"./chevron-right-DQAu3Wv6.js";import"./context-menu-CQ8VtaHB.js";import"./calendar-BzrEEUDg.js";import"./chevron-left-ByPwEqFW.js";import"./resizable-Ct2OPLwJ.js";import"./grip-vertical-jKrZikSe.js";import"./table-BkUZ_KQS.js";import"./search-field-BYGbCLxi.js";import"./index.module-Db1hQFPV.js";const{expect:u,userEvent:m,within:g,waitFor:y}=__STORYBOOK_MODULE_TEST__,fo={title:"Components/Controls/Radio group",id:"components-inputs-selection-radio-group",component:p,tags:["autodocs"],parameters:{layout:"padded",controls:{include:["size","defaultValue","orientation","disabled","required","loop"]},docs:{description:{component:"Mutually exclusive choices with arrow-key navigation. value/onValueChange uses a string; defaultValue initializes selection. orientation and loop control navigation; disabled/required apply to the group. The host owns submission. The group size is inherited by its items: sm is 24px (default), lg is 32px at a 16px root. RadioGroupItem can override size. Control-owned tokens keep all four theme mappings identical in geometry; keyboard focus highlights the own border without an outer ring."}}},render:r=>n.jsx(p,{...r,children:["draft","ready"].map(o=>n.jsxs(c,{className:"pf-story-toolbar",children:[n.jsx(d,{value:o}),o]},o))},r.defaultValue),args:{size:"sm",defaultValue:"draft",orientation:"vertical",disabled:!1,required:!1,loop:!0,"aria-label":"Recipe status"},argTypes:{size:{control:"inline-radio",options:["sm","lg"],description:"Every item inherits sm 24px (default) or lg 32px at a 16px root. An individual RadioGroupItem can override size."},defaultValue:{control:"select",options:["draft","ready"]},orientation:{control:"select",options:["horizontal","vertical"]},disabled:{control:"boolean"},required:{control:"boolean"},loop:{control:"boolean"}}},e={},t={...l},a={args:{size:"lg"}},i={args:{disabled:!0}},s={play:async({canvasElement:r})=>{const o=g(r);o.getByRole("radio",{name:"draft"}).focus(),await m.keyboard("{ArrowDown>}"),await y(()=>u(o.getByRole("radio",{name:"ready"})).toBeChecked()),await m.keyboard("{/ArrowDown}")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
