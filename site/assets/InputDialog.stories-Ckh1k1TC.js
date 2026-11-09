import{j as s,r as c}from"./iframe-DgvZnKtv.js";/* empty css                      */import{B as v}from"./button-CEcYiQdY.js";import{I as f}from"./input-dialog-CEqzWZqu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWlKOsdO.js";import"./loader-circle-BsZrs7F6.js";/* empty css                            */import"./dialog-BGED6ss2.js";import"./overlay-dialog-i6vPmHIw.js";import"./input-DTWVrd6t.js";const{expect:y,userEvent:t,waitFor:w,within:o}=__STORYBOOK_MODULE_TEST__;function x(e){const[r,n]=c.useState(e.open),[a,i]=c.useState(e.initialValue);return c.useEffect(()=>n(e.open),[e.open]),c.useEffect(()=>i(e.initialValue),[e.initialValue]),s.jsxs("div",{className:"pf-story-regular-stack",children:[s.jsx(v,{onClick:()=>n(!0),children:"Rename formula"}),s.jsx(f,{...e,open:r,initialValue:a,onOpenChange:l=>{n(l),e.onOpenChange(l)},onConfirm:l=>{i(l),e.onConfirm(l)}}),s.jsxs("p",{role:"status",className:"pf-story-note",children:["Saved name: ",a||"none"]})]})}const L={title:"Components/Overlays/Input Dialog",component:f,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Controlled single-text dialog used for renaming. Each opening resets its draft from initialValue. Confirmation trims whitespace, refuses an empty result, reports the trimmed string and closes; Enter confirms unless Shift is held. Cancel and dismissal discard the draft. The host supplies a trigger and owns the saved value; the component restores focus to the opener."}}},args:{open:!1,initialValue:"Oat drink",title:"Rename formula",placeholder:"Formula name",confirmLabel:"Save name",cancelLabel:"Cancel",onConfirm:()=>{},onOpenChange:()=>{}},argTypes:{open:{control:"boolean"},initialValue:{control:"text"},title:{control:"text"},placeholder:{control:"text"},confirmLabel:{control:"text"},cancelLabel:{control:"text"},onConfirm:{action:"name confirmed"},onOpenChange:{action:"open changed"}},render:e=>s.jsx(x,{...e})},d={},m={args:{initialValue:""}},u={args:{title:void 0,placeholder:void 0,confirmLabel:void 0,cancelLabel:void 0}},p={play:async({canvasElement:e})=>{const r=o(e),n=r.getByRole("button",{name:"Rename formula"});await t.click(n);const a=o(await o(document.body).findByRole("dialog")),i=a.getByRole("textbox",{name:"Rename formula"});await t.clear(i),await t.type(i,"   "),await y(a.getByRole("button",{name:"Save name"})).toBeDisabled(),await t.type(i,"Barley drink  {Enter}"),await w(()=>y(r.getByRole("status")).toHaveTextContent("Saved name: Barley drink")),await y(n).toHaveFocus()}},g={play:async({canvasElement:e})=>{const n=o(e).getByRole("button",{name:"Rename formula"});await t.click(n);let a=o(await o(document.body).findByRole("dialog"));await t.clear(a.getByRole("textbox")),await t.type(a.getByRole("textbox"),"Unsaved name"),await t.click(a.getByRole("button",{name:"Cancel"})),await t.click(n),a=o(await o(document.body).findByRole("dialog")),await y(a.getByRole("textbox")).toHaveValue("Oat drink"),await t.click(a.getByRole("button",{name:"Cancel"}))}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    initialValue: ""
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined,
    placeholder: undefined,
    confirmLabel: undefined,
    cancelLabel: undefined
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", {
      name: "Rename formula"
    });
    await userEvent.click(trigger);
    const dialog = within(await within(document.body).findByRole("dialog"));
    const input = dialog.getByRole("textbox", {
      name: "Rename formula"
    });
    await userEvent.clear(input);
    await userEvent.type(input, "   ");
    await expect(dialog.getByRole("button", {
      name: "Save name"
    })).toBeDisabled();
    await userEvent.type(input, "Barley drink  {Enter}");
    await waitFor(() => expect(canvas.getByRole("status")).toHaveTextContent("Saved name: Barley drink"));
    await expect(trigger).toHaveFocus();
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", {
      name: "Rename formula"
    });
    await userEvent.click(trigger);
    let dialog = within(await within(document.body).findByRole("dialog"));
    await userEvent.clear(dialog.getByRole("textbox"));
    await userEvent.type(dialog.getByRole("textbox"), "Unsaved name");
    await userEvent.click(dialog.getByRole("button", {
      name: "Cancel"
    }));
    await userEvent.click(trigger);
    dialog = within(await within(document.body).findByRole("dialog"));
    await expect(dialog.getByRole("textbox")).toHaveValue("Oat drink");
    await userEvent.click(dialog.getByRole("button", {
      name: "Cancel"
    }));
  }
}`,...g.parameters?.docs?.source}}};const T=["Playground","EmptyInitialValue","LocalizedDefaults","TrimAndConfirm","CancelDiscardsDraft"];export{g as CancelDiscardsDraft,m as EmptyInitialValue,u as LocalizedDefaults,d as Playground,p as TrimAndConfirm,T as __namedExportsOrder,L as default};
