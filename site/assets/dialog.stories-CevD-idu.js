import{j as e}from"./iframe-DgvZnKtv.js";import{D as c,a as h,b as x,c as f,d as w,e as y,f as b,g as d}from"./dialog-BGED6ss2.js";import{B as s}from"./button-CEcYiQdY.js";import{I as D}from"./input-DTWVrd6t.js";import{L as E}from"./label-CPJsvsW3.js";import{D as v}from"./catalog.examples-DLKY64EU.js";import"./preload-helper-PPVm8Dsz.js";import"./overlay-dialog-i6vPmHIw.js";import"./index-BWlKOsdO.js";import"./loader-circle-BsZrs7F6.js";import"./textarea-D7qlXksG.js";import"./checkbox-CCvRjg_n.js";import"./minus-0s0hIbe7.js";import"./useAriaLabelledBy-C2v0UWUV.js";import"./switch-T4g98NFH.js";import"./radio-group-XMhZ7xiG.js";import"./roving-focus-0SK5-Aqb.js";import"./CompositeRoot-CLpK0Eip.js";import"./circle-CwHZP-HG.js";import"./CompositeItem-qKQIJE0X.js";import"./useCompositeItem-Dr13hnqh.js";import"./slider-UYb5RKBF.js";import"./valueToPercent-DfWH2vGw.js";import"./toggle-group-D6oIStAM.js";import"./card-LhCNN_F3.js";import"./badge-C-Jji8Kx.js";import"./alert-B2HkS6xL.js";import"./avatar-BapWT1f9.js";import"./separator-DZKac5zi.js";import"./Separator-BKJ0ZhJM.js";import"./skeleton-DwZsbo-S.js";import"./progress-DeKMlPS3.js";import"./tabs-ApBmGcl3.js";import"./accordion-BRTC14md.js";import"./accordion-mjjl12TU.js";import"./useCollapsiblePanel-jjkiJ8Ha.js";import"./collapsible-BPKkR0Kq.js";import"./sheet-BSYc4zIC.js";import"./alert-dialog-C6IZFRS7.js";import"./hover-card-CbaK_QEc.js";import"./dropdown-menu-CuN8-u21.js";import"./menu-BIxLiaY6.js";import"./chevron-right-B8SZue5v.js";import"./context-menu-BkEuBydl.js";import"./calendar-DNqmRJEy.js";import"./chevron-left-96ijkid2.js";import"./resizable-38DPMN1p.js";import"./grip-vertical-Bc1r5WDV.js";import"./table-C0CN-w6L.js";import"./search-field-CzWqD7iz.js";import"./index.module-C-pw7-ZN.js";const{expect:p,userEvent:g,within:a}=__STORYBOOK_MODULE_TEST__,De={title:"Components/Surfaces/Dialog",component:c,tags:["autodocs"],parameters:{layout:"padded",controls:{include:["defaultOpen","modal","size"]},docs:{description:{component:"A focused modal task. defaultOpen initializes state; open/onOpenChange allows host control. modal controls Base UI isolation; nonmodal content keeps the page accessible and omits the modal backdrop. DialogContent size=wide selects the shared 42rem content width used for saving ideas and notes; default keeps the existing width. Width does not change focus, dismissal or form behavior. Compose an accessible Title and Description; host callbacks own saving and cancellation. It overlays content and is not the push-filter pattern."}}},render:({size:t,...o})=>e.jsxs(c,{...o,children:[e.jsx(h,{asChild:!0,children:e.jsx(s,{children:"Edit recipe"})}),e.jsxs(x,{size:t,children:[e.jsxs(f,{children:[e.jsx(w,{children:"Edit recipe"}),e.jsx(y,{children:"Changes remain local in this specimen."})]}),e.jsx(E,{htmlFor:"family-dialog-name",children:"Name"}),e.jsx(D,{id:"family-dialog-name",defaultValue:"Oat drink"}),e.jsxs(b,{children:[e.jsx(d,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"Cancel"})}),e.jsx(d,{asChild:!0,children:e.jsx(s,{children:"Save"})})]})]})]},String(o.defaultOpen)),args:{defaultOpen:!1,modal:!0,size:"default"},argTypes:{defaultOpen:{control:"boolean"},modal:{control:"boolean"},size:{control:"inline-radio",options:["default","wide"],description:"DialogContent width; the root's modal and open state are unchanged."}}},i={},n={...v},r={args:{size:"wide"},play:async({canvasElement:t})=>{const o=a(t),u=a(t.ownerDocument.body),l=o.getByRole("button",{name:"Edit recipe"});await g.click(l);const m=await u.findByRole("dialog",{name:"Edit recipe"});await p(a(m).getByRole("textbox",{name:"Name"})).toHaveValue("Oat drink"),await g.click(a(m).getByRole("button",{name:"Cancel"})),await p(l).toHaveFocus()}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
