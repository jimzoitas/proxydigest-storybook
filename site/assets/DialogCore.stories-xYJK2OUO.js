import{j as o,r as y}from"./iframe-6uZ_OvXJ.js";/* empty css                      */import{B as b}from"./button-A8HzViyP.js";import{D as h}from"./dialog-core-BISqHcOb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BIEDR5QJ.js";import"./loader-circle-DPzNQWfU.js";/* empty css                            */import"./dialog-DnvpmbSS.js";import"./overlay-dialog-_C1niahL.js";const{expect:r,userEvent:i,waitFor:w,within:a}=__STORYBOOK_MODULE_TEST__;function C(e){const[t,n]=y.useState(e.open??!1),[v,s]=y.useState("No action selected.");return y.useEffect(()=>n(e.open??!1),[e.open]),o.jsxs("div",{className:"pf-story-regular-stack",children:[o.jsx(h,{...e,open:t,onOpenChange:c=>{n(c),e.onOpenChange?.(c)},onConfirm:async()=>{try{await e.onConfirm(),s("Confirmed.")}catch(c){throw s("Confirmation failed. Try again or cancel."),c}},onCancel:()=>{e.onCancel?.(),s("Cancelled.")},secondaryAction:e.secondaryAction&&{...e.secondaryAction,onClick:async()=>{await e.secondaryAction?.onClick(),s("Secondary action completed.")}},children:o.jsx(b,{children:"Open confirmation"})}),o.jsx("p",{role:"status",className:"pf-story-note",children:v})]})}const j={title:"Components/Overlays/Confirmation Dialog",component:h,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"DialogCore supplies a title, description, optional body, and cancel/confirm actions. It supports a trigger or controlled open/onOpenChange pair. Async confirmation keeps the dialog busy until completion; rejected confirmation leaves it open. A secondary action closes after settling, including rejection. isLoading disables both actions and blocks Escape/outside dismissal. The host owns any success/error feedback; these examples report completed actions below the trigger."}}},args:{title:"Remove draft?",description:"This draft will be removed from the current collection.",confirmLabel:"Remove draft",cancelLabel:"Keep draft",confirmVariant:"destructive",isLoading:!1,open:!1,onConfirm:()=>{}},argTypes:{title:{control:"text"},description:{control:"text"},confirmLabel:{control:"text"},cancelLabel:{control:"text"},confirmVariant:{control:"select",options:["default","destructive"]},isLoading:{control:"boolean"},open:{control:"boolean"},children:{control:!1},body:{control:!1},secondaryAction:{control:!1},onConfirm:{action:"confirm"},onCancel:{action:"cancel"},onOpenChange:{action:"open changed"}},render:e=>o.jsx(C,{...e})},l={},d={args:{title:"Publish changes?",description:"Make this draft available to your team.",confirmLabel:"Publish",confirmVariant:"default"}},m={args:{body:o.jsx("p",{className:"pf-story-dialog-core-result",children:"Recipe: Oat drink · Last edited today"}),secondaryAction:{label:"Archive instead",onClick:()=>{}}}},p={args:{isLoading:!0},parameters:{docs:{description:{story:"Open the dialog to inspect the externally controlled busy state. Turn isLoading off in Controls to release the actions."}}}},u={args:{onConfirm:()=>new Promise(e=>{setTimeout(e,700)})},play:async({canvasElement:e})=>{const t=a(e);await i.click(t.getByRole("button",{name:"Open confirmation"}));const n=a(await a(document.body).findByRole("dialog"));await i.click(n.getByRole("button",{name:"Remove draft"})),await r(n.getByRole("button",{name:"Keep draft"})).toBeDisabled(),await w(()=>r(t.getByRole("status")).toHaveTextContent("Confirmed.")),await r(a(document.body).queryByRole("dialog")).toBeNull()}},f={render:e=>o.jsx(h,{...e,open:void 0,onOpenChange:void 0,children:o.jsx(b,{children:"Open uncontrolled dialog"})})},g={args:{onConfirm:()=>{throw new Error("Fixture action failed")}},play:async({canvasElement:e})=>{const t=a(e);await i.click(t.getByRole("button",{name:"Open confirmation"}));const n=a(await a(document.body).findByRole("dialog"));await i.click(n.getByRole("button",{name:"Remove draft"})),await w(()=>r(t.getByRole("status",{hidden:!0})).toHaveTextContent("Confirmation failed.")),await r(n.getByRole("button",{name:"Keep draft"})).toBeEnabled(),await i.click(n.getByRole("button",{name:"Keep draft"}))}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Publish changes?",
    description: "Make this draft available to your team.",
    confirmLabel: "Publish",
    confirmVariant: "default"
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    body: <p className="pf-story-dialog-core-result">
        Recipe: Oat drink · Last edited today
      </p>,
    secondaryAction: {
      label: "Archive instead",
      onClick: () => undefined
    }
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true
  },
  parameters: {
    docs: {
      description: {
        story: "Open the dialog to inspect the externally controlled busy state. Turn isLoading off in Controls to release the actions."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    onConfirm: () => new Promise<void>(resolve => {
      setTimeout(resolve, 700);
    })
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Open confirmation"
    }));
    const dialog = within(await within(document.body).findByRole("dialog"));
    await userEvent.click(dialog.getByRole("button", {
      name: "Remove draft"
    }));
    await expect(dialog.getByRole("button", {
      name: "Keep draft"
    })).toBeDisabled();
    await waitFor(() => expect(canvas.getByRole("status")).toHaveTextContent("Confirmed."));
    await expect(within(document.body).queryByRole("dialog")).toBeNull();
  }
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <DialogCore {...args} open={undefined} onOpenChange={undefined}>
      <Button>Open uncontrolled dialog</Button>
    </DialogCore>
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    onConfirm: () => {
      throw new Error("Fixture action failed");
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Open confirmation"
    }));
    const dialog = within(await within(document.body).findByRole("dialog"));
    await userEvent.click(dialog.getByRole("button", {
      name: "Remove draft"
    }));
    await waitFor(() => expect(canvas.getByRole("status", {
      hidden: true
    })).toHaveTextContent("Confirmation failed."));
    await expect(dialog.getByRole("button", {
      name: "Keep draft"
    })).toBeEnabled();
    await userEvent.click(dialog.getByRole("button", {
      name: "Keep draft"
    }));
  }
}`,...g.parameters?.docs?.source}}};const D=["Playground","StandardAction","WithBodyAndSecondaryAction","Loading","AsyncConfirmation","UncontrolledTrigger","FailedConfirmation"];export{u as AsyncConfirmation,g as FailedConfirmation,p as Loading,l as Playground,d as StandardAction,f as UncontrolledTrigger,m as WithBodyAndSecondaryAction,D as __namedExportsOrder,j as default};
