import{j as e}from"./iframe-BXubdNpd.js";import{D as c,a as h,b as x,c as f,d as w,e as y,f as b,g as d}from"./dialog-Gbr7wu8m.js";import{B as s}from"./button-DOg3bB7T.js";import{I as D}from"./input-BWeqiJDe.js";import{L as E}from"./label-B-ScEoCq.js";import{D as v}from"./catalog.examples-Cwih8HVY.js";import"./preload-helper-PPVm8Dsz.js";import"./overlay-dialog-CQZe9RQv.js";import"./index-DKWiT4Fi.js";import"./loader-circle-WJxMtqtu.js";import"./textarea-DKtx55-C.js";import"./checkbox-R9lg0Zy-.js";import"./minus-BU5OS2V8.js";import"./useAriaLabelledBy-Dlr4qUIQ.js";import"./switch-Bg3CCUCR.js";import"./radio-group-aNY93vS4.js";import"./roving-focus-0SK5-Aqb.js";import"./CompositeRoot-DuK6i5O1.js";import"./circle-COTDYbAV.js";import"./CompositeItem-CBKa8E3y.js";import"./useCompositeItem-Bi8YYZ7L.js";import"./slider-DyoUiGUN.js";import"./valueToPercent-DfWH2vGw.js";import"./toggle-group-D27B5ejm.js";import"./card-DpxWWElH.js";import"./badge-C4iUsAGF.js";import"./alert-Bzvx4AKs.js";import"./avatar-ZNaHiu8f.js";import"./separator-BKKMk4Xo.js";import"./Separator-DI4aBzER.js";import"./skeleton-BP5S_qG6.js";import"./progress-DkREujyU.js";import"./tabs-BrnZ_xpj.js";import"./accordion-CFT7Mw6-.js";import"./accordion-B-A_a53W.js";import"./useCollapsiblePanel-C5JKJn3w.js";import"./collapsible-BboTV2_X.js";import"./sheet-C-ICznI3.js";import"./alert-dialog-BBDZ61Tm.js";import"./hover-card-DOvxW5L6.js";import"./dropdown-menu-DwRzzotf.js";import"./menu-B8QO56XI.js";import"./chevron-right-Bt7v18gP.js";import"./context-menu-BnFk_3DL.js";import"./calendar-BP-114aW.js";import"./chevron-left-fIYzLx4k.js";import"./resizable-CUcWS4h4.js";import"./grip-vertical-B-odIx2N.js";import"./table-BVVgfhwV.js";import"./search-field-DLF5WVFc.js";import"./index.module-B6UitgKw.js";const{expect:p,userEvent:g,within:a}=__STORYBOOK_MODULE_TEST__,De={title:"Components/Surfaces/Dialog",component:c,tags:["autodocs"],parameters:{layout:"padded",controls:{include:["defaultOpen","modal","size"]},docs:{description:{component:"A focused modal task. defaultOpen initializes state; open/onOpenChange allows host control. modal controls Base UI isolation; nonmodal content keeps the page accessible and omits the modal backdrop. DialogContent size=wide selects the shared 42rem content width used for saving ideas and notes; default keeps the existing width. Width does not change focus, dismissal or form behavior. Compose an accessible Title and Description; host callbacks own saving and cancellation. It overlays content and is not the push-filter pattern."}}},render:({size:t,...o})=>e.jsxs(c,{...o,children:[e.jsx(h,{asChild:!0,children:e.jsx(s,{children:"Edit recipe"})}),e.jsxs(x,{size:t,children:[e.jsxs(f,{children:[e.jsx(w,{children:"Edit recipe"}),e.jsx(y,{children:"Changes remain local in this specimen."})]}),e.jsx(E,{htmlFor:"family-dialog-name",children:"Name"}),e.jsx(D,{id:"family-dialog-name",defaultValue:"Oat drink"}),e.jsxs(b,{children:[e.jsx(d,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"Cancel"})}),e.jsx(d,{asChild:!0,children:e.jsx(s,{children:"Save"})})]})]})]},String(o.defaultOpen)),args:{defaultOpen:!1,modal:!0,size:"default"},argTypes:{defaultOpen:{control:"boolean"},modal:{control:"boolean"},size:{control:"inline-radio",options:["default","wide"],description:"DialogContent width; the root's modal and open state are unchanged."}}},i={},n={...v},r={args:{size:"wide"},play:async({canvasElement:t})=>{const o=a(t),u=a(t.ownerDocument.body),l=o.getByRole("button",{name:"Edit recipe"});await g.click(l);const m=await u.findByRole("dialog",{name:"Edit recipe"});await p(a(m).getByRole("textbox",{name:"Name"})).toHaveValue("Oat drink"),await g.click(a(m).getByRole("button",{name:"Cancel"})),await p(l).toHaveFocus()}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
