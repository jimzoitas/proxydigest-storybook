import{j as e}from"./iframe-nhB53rPD.js";import{D as c,f as h,a as x,b as f,c as w,d as y,e as b,g as d}from"./dialog-CyBaw9zK.js";import{B as s}from"./button-_tcBhp5_.js";import{I as D}from"./input-CAdeD_xm.js";import{L as E}from"./label-CIA21tYv.js";import{D as v}from"./catalog.examples-BkhE3kuZ.js";import"./preload-helper-PPVm8Dsz.js";import"./overlay-dialog-Co5KED9w.js";import"./index-8Dbc_Jva.js";import"./loader-circle-MxHlgpxw.js";import"./textarea-DEsuPIgK.js";import"./checkbox-C9bOlqce.js";import"./minus-XaXcKlev.js";import"./useAriaLabelledBy-D8Oa7trO.js";import"./switch-uMj7V9v_.js";import"./radio-group-BjJ6ZVS9.js";import"./roving-focus-0SK5-Aqb.js";import"./CompositeRoot-B0On-XqY.js";import"./circle-Byfpv97O.js";import"./CompositeItem-D_8UuHC1.js";import"./useCompositeItem-BquT0LDd.js";import"./slider-DsOFUM94.js";import"./valueToPercent-DfWH2vGw.js";import"./toggle-group-WfIKaqgN.js";import"./card-CGu-joF2.js";import"./badge-DF9-aVgV.js";import"./alert-CuymrseY.js";import"./avatar-C4hdJ-kW.js";import"./separator-Dmg9cS_7.js";import"./Separator-RhxJSB-Q.js";import"./skeleton-CMUv0H3w.js";import"./progress-u2AUM0_6.js";import"./tabs-Fq9_gDeO.js";import"./accordion-B67wbHOw.js";import"./accordion-CHExsbqI.js";import"./useCollapsiblePanel-DVMF6qnG.js";import"./collapsible-pI4oVkh3.js";import"./sheet-L7clkwH-.js";import"./alert-dialog-sQE9WhqY.js";import"./hover-card-DUsLCMGr.js";import"./dropdown-menu-6QYTqNVQ.js";import"./menu-DyIs6xZo.js";import"./chevron-right-CavErG_J.js";import"./context-menu-BgHQWO9B.js";import"./calendar-CXIh8-zC.js";import"./chevron-left-Dcrje28Y.js";import"./resizable-kngELX8h.js";import"./grip-vertical-Cr-UETSo.js";import"./table-DKvxVw7S.js";import"./search-field-Dneu7mbv.js";import"./index.module-B262ysEo.js";const{expect:p,userEvent:g,within:a}=__STORYBOOK_MODULE_TEST__,De={title:"Components/Surfaces/Dialog",component:c,tags:["autodocs"],parameters:{layout:"padded",controls:{include:["defaultOpen","modal","size"]},docs:{description:{component:"A focused modal task. defaultOpen initializes state; open/onOpenChange allows host control. modal controls Base UI isolation; nonmodal content keeps the page accessible and omits the modal backdrop. DialogContent size=wide selects the shared 42rem content width used for saving ideas and notes; default keeps the existing width. Width does not change focus, dismissal or form behavior. Compose an accessible Title and Description; host callbacks own saving and cancellation. It overlays content and is not the push-filter pattern."}}},render:({size:t,...o})=>e.jsxs(c,{...o,children:[e.jsx(h,{asChild:!0,children:e.jsx(s,{children:"Edit recipe"})}),e.jsxs(x,{size:t,children:[e.jsxs(f,{children:[e.jsx(w,{children:"Edit recipe"}),e.jsx(y,{children:"Changes remain local in this specimen."})]}),e.jsx(E,{htmlFor:"family-dialog-name",children:"Name"}),e.jsx(D,{id:"family-dialog-name",defaultValue:"Oat drink"}),e.jsxs(b,{children:[e.jsx(d,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"Cancel"})}),e.jsx(d,{asChild:!0,children:e.jsx(s,{children:"Save"})})]})]})]},String(o.defaultOpen)),args:{defaultOpen:!1,modal:!0,size:"default"},argTypes:{defaultOpen:{control:"boolean"},modal:{control:"boolean"},size:{control:"inline-radio",options:["default","wide"],description:"DialogContent width; the root's modal and open state are unchanged."}}},i={},n={...v},r={args:{size:"wide"},play:async({canvasElement:t})=>{const o=a(t),u=a(t.ownerDocument.body),l=o.getByRole("button",{name:"Edit recipe"});await g.click(l);const m=await u.findByRole("dialog",{name:"Edit recipe"});await p(a(m).getByRole("textbox",{name:"Name"})).toHaveValue("Oat drink"),await g.click(a(m).getByRole("button",{name:"Cancel"})),await p(l).toHaveFocus()}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...DialogTask
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: "wide"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole("button", {
      name: "Edit recipe"
    });
    await userEvent.click(trigger);
    const dialog = await body.findByRole("dialog", {
      name: "Edit recipe"
    });
    await expect(within(dialog).getByRole("textbox", {
      name: "Name"
    })).toHaveValue("Oat drink");
    await userEvent.click(within(dialog).getByRole("button", {
      name: "Cancel"
    }));
    await expect(trigger).toHaveFocus();
  }
}`,...r.parameters?.docs?.source}}};const Ee=["Playground","ExistingExample","Wide"];export{n as ExistingExample,i as Playground,r as Wide,Ee as __namedExportsOrder,De as default};
