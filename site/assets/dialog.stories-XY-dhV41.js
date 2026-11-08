import{j as e}from"./iframe-AqpYXns4.js";import{D as c,f as h,a as x,b as f,c as w,d as y,e as b,g as d}from"./dialog-DnXWbC45.js";import{B as s}from"./button-B5FjjXWS.js";import{I as D}from"./input-DLCq6ZzS.js";import{L as E}from"./label-1kzVJgIY.js";import{D as v}from"./catalog.examples-zcZL5Oir.js";import"./preload-helper-PPVm8Dsz.js";import"./overlay-dialog-aVFq0bEi.js";import"./index-DEXj3--c.js";import"./loader-circle-mWFWE2W9.js";import"./textarea-uF5bUZhh.js";import"./checkbox-TIyFUyNd.js";import"./minus-0yDLMIrp.js";import"./useAriaLabelledBy-Da9KhbUQ.js";import"./switch-Dq-T1JeF.js";import"./radio-group-BybVJGC9.js";import"./roving-focus-0SK5-Aqb.js";import"./CompositeRoot-yL7bK7Jd.js";import"./circle-Dg6ojZlj.js";import"./CompositeItem-D1wyjQOR.js";import"./useCompositeItem-QlszIeBN.js";import"./slider-BaUfZmPE.js";import"./valueToPercent-DfWH2vGw.js";import"./toggle-group-DO0OQdfk.js";import"./card-ByHHR2Jw.js";import"./badge-CQKobhLs.js";import"./alert-vS_dpmu2.js";import"./avatar-DTkZwYDb.js";import"./separator-C7Zm_6nS.js";import"./Separator-DssPvI5G.js";import"./skeleton-C_SNY4zC.js";import"./progress-CmLHBdmj.js";import"./tabs-D2cBF9Wg.js";import"./accordion-B6UeQwZ6.js";import"./accordion-0FBKGPj-.js";import"./useCollapsiblePanel-DOTGH3aY.js";import"./collapsible-DZyMQ3Bu.js";import"./sheet-dNUUpp2U.js";import"./alert-dialog-DbGCTr1F.js";import"./hover-card-sY2GMIgd.js";import"./dropdown-menu-qZhg1f8R.js";import"./menu-DaKubz4c.js";import"./chevron-right-B3hyZT-D.js";import"./context-menu-B8gpNJM6.js";import"./calendar-V3NmEFls.js";import"./chevron-left-DLgfJc_O.js";import"./resizable-YZsVPkgn.js";import"./grip-vertical-Dizk5hed.js";import"./table-DOkc2t6b.js";import"./search-field-Geq7aFHv.js";import"./index.module-B2X8Wkxy.js";const{expect:p,userEvent:g,within:a}=__STORYBOOK_MODULE_TEST__,De={title:"Components/Surfaces/Dialog",component:c,tags:["autodocs"],parameters:{layout:"padded",controls:{include:["defaultOpen","modal","size"]},docs:{description:{component:"A focused modal task. defaultOpen initializes state; open/onOpenChange allows host control. modal controls Base UI isolation; nonmodal content keeps the page accessible and omits the modal backdrop. DialogContent size=wide selects the shared 42rem content width used for saving ideas and notes; default keeps the existing width. Width does not change focus, dismissal or form behavior. Compose an accessible Title and Description; host callbacks own saving and cancellation. It overlays content and is not the push-filter pattern."}}},render:({size:t,...o})=>e.jsxs(c,{...o,children:[e.jsx(h,{asChild:!0,children:e.jsx(s,{children:"Edit recipe"})}),e.jsxs(x,{size:t,children:[e.jsxs(f,{children:[e.jsx(w,{children:"Edit recipe"}),e.jsx(y,{children:"Changes remain local in this specimen."})]}),e.jsx(E,{htmlFor:"family-dialog-name",children:"Name"}),e.jsx(D,{id:"family-dialog-name",defaultValue:"Oat drink"}),e.jsxs(b,{children:[e.jsx(d,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"Cancel"})}),e.jsx(d,{asChild:!0,children:e.jsx(s,{children:"Save"})})]})]})]},String(o.defaultOpen)),args:{defaultOpen:!1,modal:!0,size:"default"},argTypes:{defaultOpen:{control:"boolean"},modal:{control:"boolean"},size:{control:"inline-radio",options:["default","wide"],description:"DialogContent width; the root's modal and open state are unchanged."}}},i={},n={...v},r={args:{size:"wide"},play:async({canvasElement:t})=>{const o=a(t),u=a(t.ownerDocument.body),l=o.getByRole("button",{name:"Edit recipe"});await g.click(l);const m=await u.findByRole("dialog",{name:"Edit recipe"});await p(a(m).getByRole("textbox",{name:"Name"})).toHaveValue("Oat drink"),await g.click(a(m).getByRole("button",{name:"Cancel"})),await p(l).toHaveFocus()}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
