import{j as n}from"./iframe-BXubdNpd.js";/* empty css                      */import{R as p,a as d}from"./radio-group-aNY93vS4.js";import{L as c}from"./label-B-ScEoCq.js";import{R as l}from"./catalog.examples-Cwih8HVY.js";import"./preload-helper-PPVm8Dsz.js";import"./roving-focus-0SK5-Aqb.js";import"./checkbox-R9lg0Zy-.js";import"./minus-BU5OS2V8.js";import"./useAriaLabelledBy-Dlr4qUIQ.js";import"./CompositeRoot-DuK6i5O1.js";import"./circle-COTDYbAV.js";import"./CompositeItem-CBKa8E3y.js";import"./useCompositeItem-Bi8YYZ7L.js";import"./button-DOg3bB7T.js";import"./index-DKWiT4Fi.js";import"./loader-circle-WJxMtqtu.js";import"./input-BWeqiJDe.js";import"./textarea-DKtx55-C.js";import"./switch-Bg3CCUCR.js";import"./slider-DyoUiGUN.js";import"./valueToPercent-DfWH2vGw.js";import"./toggle-group-D27B5ejm.js";import"./card-DpxWWElH.js";import"./badge-C4iUsAGF.js";import"./alert-Bzvx4AKs.js";import"./avatar-ZNaHiu8f.js";import"./separator-BKKMk4Xo.js";import"./Separator-DI4aBzER.js";import"./skeleton-BP5S_qG6.js";import"./progress-DkREujyU.js";import"./tabs-BrnZ_xpj.js";import"./accordion-CFT7Mw6-.js";import"./accordion-B-A_a53W.js";import"./useCollapsiblePanel-C5JKJn3w.js";import"./collapsible-BboTV2_X.js";import"./dialog-Gbr7wu8m.js";import"./overlay-dialog-CQZe9RQv.js";import"./sheet-C-ICznI3.js";import"./alert-dialog-BBDZ61Tm.js";import"./hover-card-DOvxW5L6.js";import"./dropdown-menu-DwRzzotf.js";import"./menu-B8QO56XI.js";import"./chevron-right-Bt7v18gP.js";import"./context-menu-BnFk_3DL.js";import"./calendar-BP-114aW.js";import"./chevron-left-fIYzLx4k.js";import"./resizable-CUcWS4h4.js";import"./grip-vertical-B-odIx2N.js";import"./table-BVVgfhwV.js";import"./search-field-DLF5WVFc.js";import"./index.module-B6UitgKw.js";const{expect:u,userEvent:m,within:g,waitFor:y}=__STORYBOOK_MODULE_TEST__,fo={title:"Components/Controls/Radio group",id:"components-inputs-selection-radio-group",component:p,tags:["autodocs"],parameters:{layout:"padded",controls:{include:["size","defaultValue","orientation","disabled","required","loop"]},docs:{description:{component:"Mutually exclusive choices with arrow-key navigation. value/onValueChange uses a string; defaultValue initializes selection. orientation and loop control navigation; disabled/required apply to the group. The host owns submission. The group size is inherited by its items: sm is 24px (default), lg is 32px at a 16px root. RadioGroupItem can override size. Control-owned tokens keep all four theme mappings identical in geometry; keyboard focus highlights the own border without an outer ring."}}},render:r=>n.jsx(p,{...r,children:["draft","ready"].map(o=>n.jsxs(c,{className:"pf-story-toolbar",children:[n.jsx(d,{value:o}),o]},o))},r.defaultValue),args:{size:"sm",defaultValue:"draft",orientation:"vertical",disabled:!1,required:!1,loop:!0,"aria-label":"Recipe status"},argTypes:{size:{control:"inline-radio",options:["sm","lg"],description:"Every item inherits sm 24px (default) or lg 32px at a 16px root. An individual RadioGroupItem can override size."},defaultValue:{control:"select",options:["draft","ready"]},orientation:{control:"select",options:["horizontal","vertical"]},disabled:{control:"boolean"},required:{control:"boolean"},loop:{control:"boolean"}}},e={},t={...l},a={args:{size:"lg"}},i={args:{disabled:!0}},s={play:async({canvasElement:r})=>{const o=g(r);o.getByRole("radio",{name:"draft"}).focus(),await m.keyboard("{ArrowDown>}"),await y(()=>u(o.getByRole("radio",{name:"ready"})).toBeChecked()),await m.keyboard("{/ArrowDown}")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
