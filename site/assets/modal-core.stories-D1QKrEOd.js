import{j as a,r as i}from"./iframe-6uZ_OvXJ.js";/* empty css                      */import{B as v}from"./button-A8HzViyP.js";import{I as x}from"./input-xqFXePlz.js";import{M as h}from"./modal-core-DpT9xdL-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BIEDR5QJ.js";import"./loader-circle-DPzNQWfU.js";import"./dialog-DnvpmbSS.js";import"./overlay-dialog-_C1niahL.js";const{expect:u,fn:f,userEvent:l,within:r}=__STORYBOOK_MODULE_TEST__;function w(e){const[s,t]=i.useState(e.open),[n,y]=i.useState("Product notes"),[g,b]=i.useState(""),c=i.useId();return i.useEffect(()=>t(e.open),[e.open]),a.jsxs("div",{className:"pf-story-grid",children:[a.jsx(v,{onClick:()=>t(!0),children:"Open form modal"}),a.jsx("output",{"aria-live":"polite",children:g}),a.jsx(h,{...e,open:s,formName:c,onOpenChange:o=>{t(o),e.onOpenChange(o)},onCancel:()=>{t(!1),e.onCancel()},children:a.jsx("form",{id:`form_${c}`,onSubmit:o=>{o.preventDefault(),b(`Saved locally: ${n}`),t(!1)},children:a.jsxs("label",{htmlFor:`${c}-name`,className:"pf-story-modal-core-choices",children:["Name",a.jsx(x,{id:`${c}-name`,value:n,onChange:o=>y(o.target.value),required:!0})]})})})]})}const _={title:"Patterns/Form Modal",component:h,tags:["autodocs"],args:{open:!1,title:"Edit details",confirmLabel:"Save",cancelLabel:"Cancel",onOpenChange:f(),onCancel:f(),onConfirm:f(),children:null},argTypes:{open:{control:"boolean"},title:{control:"text"},confirmLabel:{control:"text"},cancelLabel:{control:"text"},children:{control:!1},formName:{control:!1},onOpenChange:{control:!1},onCancel:{control:!1},onConfirm:{control:!1,description:"Declared by the current type but not invoked by Modal. Confirm submits the external form named form_${formName}; use its onSubmit."}},parameters:{docs:{description:{component:"For the actual Product/Project duplicate modals and the create/edit sheets, open [Application form flows](?path=/docs/patterns-forms-application-form-flows--docs). This page documents the reusable shell contract. Actual proxy Modal: controlled open/onOpenChange, title, footer labels, children and external formName. The footer confirms through native form submission to id form_${formName}; the host form owns onSubmit, validation and persistence. Although onConfirm is currently required by its type, the implementation does not invoke it. This fixture deliberately demonstrates the real form contract and never fakes that callback. Cancel invokes onCancel; the host closes it. The local form saves to visible text only. This is distinct from DialogCore confirmation and does not add an unsaved-draft policy."}}},render:e=>a.jsx(w,{...e})},d={},m={args:{open:!0},parameters:{docs:{story:{inline:!1,height:480}}}},p={play:async({canvasElement:e,args:s})=>{const t=r(e);await l.click(t.getByRole("button",{name:"Open form modal"}));const n=r(await r(document.body).findByRole("dialog",{name:"Edit details"}));await l.clear(n.getByRole("textbox",{name:"Name"})),await l.type(n.getByRole("textbox",{name:"Name"}),"Updated title"),await l.click(n.getByRole("button",{name:"Save"})),await u(t.getByText("Saved locally: Updated title")).toBeVisible(),await u(s.onConfirm).not.toHaveBeenCalled(),await l.click(t.getByRole("button",{name:"Open form modal"})),await l.click(r(await r(document.body).findByRole("dialog",{name:"Edit details"})).getByRole("button",{name:"Cancel"})),await u(s.onCancel).toHaveBeenCalled()}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    open: true
  },
  parameters: {
    docs: {
      story: {
        inline: false,
        height: 480
      }
    }
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Open form modal"
    }));
    const dialog = within(await within(document.body).findByRole("dialog", {
      name: "Edit details"
    }));
    await userEvent.clear(dialog.getByRole("textbox", {
      name: "Name"
    }));
    await userEvent.type(dialog.getByRole("textbox", {
      name: "Name"
    }), "Updated title");
    await userEvent.click(dialog.getByRole("button", {
      name: "Save"
    }));
    await expect(canvas.getByText("Saved locally: Updated title")).toBeVisible();
    await expect(args.onConfirm).not.toHaveBeenCalled();
    await userEvent.click(canvas.getByRole("button", {
      name: "Open form modal"
    }));
    await userEvent.click(within(await within(document.body).findByRole("dialog", {
      name: "Edit details"
    })).getByRole("button", {
      name: "Cancel"
    }));
    await expect(args.onCancel).toHaveBeenCalled();
  }
}`,...p.parameters?.docs?.source}}};const M=["Playground","InitiallyOpen","SubmitAndCancel"];export{m as InitiallyOpen,d as Playground,p as SubmitAndCancel,M as __namedExportsOrder,_ as default};
