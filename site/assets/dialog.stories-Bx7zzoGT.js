import{j as e}from"./iframe-6uZ_OvXJ.js";import{D as c,a as h,b as x,c as f,d as w,e as y,f as b,g as d}from"./dialog-DnvpmbSS.js";import{B as s}from"./button-A8HzViyP.js";import{I as D}from"./input-xqFXePlz.js";import{L as E}from"./label-ccPiVmVc.js";import{D as v}from"./catalog.examples-BgvDZJ6P.js";import"./preload-helper-PPVm8Dsz.js";import"./overlay-dialog-_C1niahL.js";import"./index-BIEDR5QJ.js";import"./loader-circle-DPzNQWfU.js";import"./textarea-BIg20vtR.js";import"./checkbox-CzlPmnCo.js";import"./minus-CKlNa8RO.js";import"./useAriaLabelledBy-BKgySVsG.js";import"./switch-DwXRQgw2.js";import"./radio-group-DXhz-kFN.js";import"./roving-focus-0SK5-Aqb.js";import"./CompositeRoot-Av_o_W_V.js";import"./circle-BOSVkkPm.js";import"./CompositeItem-DiKjTF7g.js";import"./useCompositeItem-CEgqY0th.js";import"./slider-pWyGG5M1.js";import"./valueToPercent-DfWH2vGw.js";import"./toggle-group-C1nrCotT.js";import"./card-DXFGhtzm.js";import"./badge-BfEYvfQV.js";import"./alert-Bkb9iOAA.js";import"./avatar-Dmq_uy83.js";import"./separator-CkvihxIh.js";import"./Separator-UJ0jSiK3.js";import"./skeleton-Bu9j_NfJ.js";import"./progress-Bxl1-gCx.js";import"./tabs-C1EIt9oS.js";import"./accordion-COmVAh8t.js";import"./accordion-DuKcutha.js";import"./useCollapsiblePanel-CEEvXl-2.js";import"./collapsible-D5z7BIl8.js";import"./sheet-024fQP7m.js";import"./alert-dialog-DLLLKdzA.js";import"./hover-card-B1VUedu_.js";import"./dropdown-menu-CH01PJiV.js";import"./menu-BB0nZVv8.js";import"./chevron-right-DQAu3Wv6.js";import"./context-menu-CQ8VtaHB.js";import"./calendar-BzrEEUDg.js";import"./chevron-left-ByPwEqFW.js";import"./resizable-Ct2OPLwJ.js";import"./grip-vertical-jKrZikSe.js";import"./table-BkUZ_KQS.js";import"./search-field-BYGbCLxi.js";import"./index.module-Db1hQFPV.js";const{expect:p,userEvent:g,within:a}=__STORYBOOK_MODULE_TEST__,De={title:"Components/Surfaces/Dialog",component:c,tags:["autodocs"],parameters:{layout:"padded",controls:{include:["defaultOpen","modal","size"]},docs:{description:{component:"A focused modal task. defaultOpen initializes state; open/onOpenChange allows host control. modal controls Base UI isolation; nonmodal content keeps the page accessible and omits the modal backdrop. DialogContent size=wide selects the shared 42rem content width used for saving ideas and notes; default keeps the existing width. Width does not change focus, dismissal or form behavior. Compose an accessible Title and Description; host callbacks own saving and cancellation. It overlays content and is not the push-filter pattern."}}},render:({size:t,...o})=>e.jsxs(c,{...o,children:[e.jsx(h,{asChild:!0,children:e.jsx(s,{children:"Edit recipe"})}),e.jsxs(x,{size:t,children:[e.jsxs(f,{children:[e.jsx(w,{children:"Edit recipe"}),e.jsx(y,{children:"Changes remain local in this specimen."})]}),e.jsx(E,{htmlFor:"family-dialog-name",children:"Name"}),e.jsx(D,{id:"family-dialog-name",defaultValue:"Oat drink"}),e.jsxs(b,{children:[e.jsx(d,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"Cancel"})}),e.jsx(d,{asChild:!0,children:e.jsx(s,{children:"Save"})})]})]})]},String(o.defaultOpen)),args:{defaultOpen:!1,modal:!0,size:"default"},argTypes:{defaultOpen:{control:"boolean"},modal:{control:"boolean"},size:{control:"inline-radio",options:["default","wide"],description:"DialogContent width; the root's modal and open state are unchanged."}}},i={},n={...v},r={args:{size:"wide"},play:async({canvasElement:t})=>{const o=a(t),u=a(t.ownerDocument.body),l=o.getByRole("button",{name:"Edit recipe"});await g.click(l);const m=await u.findByRole("dialog",{name:"Edit recipe"});await p(a(m).getByRole("textbox",{name:"Name"})).toHaveValue("Oat drink"),await g.click(a(m).getByRole("button",{name:"Cancel"})),await p(l).toHaveFocus()}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
