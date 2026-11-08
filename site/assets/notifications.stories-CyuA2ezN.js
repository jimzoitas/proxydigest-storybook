import{j as a,e3 as q,cr as F,g as W,r as K,aa as E}from"./iframe-BXubdNpd.js";import{B as k}from"./button-DOg3bB7T.js";import{T as P,a as C,b as D,c as I,d as L,e as O,f as H,g as V,t as U}from"./toaster-_GPT7U4d.js";import{T as _}from"./sonner-DorDIDGc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DKWiT4Fi.js";import"./loader-circle-WJxMtqtu.js";function N({className:e,style:t,gap:c=F["--group-feedback-pf-sonner-gap"],offset:o="var(--group-feedback-pf-sonner-viewport-offset)",mobileOffset:r="var(--group-feedback-pf-sonner-mobile-offset)",...p}){return a.jsx(q,{...p,className:W("pf-application-toaster",e),gap:c,offset:o,mobileOffset:r,style:{"--width":"var(--group-feedback-pf-sonner-width)",...t}})}N.__docgenInfo={description:"The application's original Sonner delivery API and default-light scheme.",methods:[],displayName:"ApplicationToaster",props:{gap:{defaultValue:{value:'groupLengthDefaults["--group-feedback-pf-sonner-gap"]',computed:!0},required:!1},offset:{defaultValue:{value:'"var(--group-feedback-pf-sonner-viewport-offset)"',computed:!1},required:!1},mobileOffset:{defaultValue:{value:'"var(--group-feedback-pf-sonner-mobile-offset)"',computed:!1},required:!1}}};const{expect:n,fn:M,userEvent:s,waitFor:$,within:i}=__STORYBOOK_MODULE_TEST__;function R({variant:e,action:t,description:c,onAction:o}){const[r,p]=K.useState(!1);return a.jsxs(I,{duration:1/0,children:[a.jsx(k,{onClick:()=>p(!0),children:"Show notification"}),a.jsx("output",{"aria-label":"Notification open",children:String(r)}),a.jsxs(V,{open:r,onOpenChange:p,variant:e,children:[a.jsxs("div",{children:[a.jsx(D,{children:"Local example notification"}),a.jsx(L,{children:c})]}),t&&a.jsx(H,{altText:"Review the local example",onClick:o,children:"Review"}),a.jsx(O,{})]}),a.jsx(C,{})]})}const ee={title:"Components/Feedback/Notifications",component:R,subcomponents:{Toast:V,ToastAction:H,ToastClose:O,ToastDescription:L,ToastProvider:I,ToastTitle:D,ToastViewport:C,Toaster:P,SonnerToaster:_,ApplicationToaster:N},tags:["autodocs"],args:{variant:"default",action:!0,description:"This fixture has not saved or sent anything.",onAction:M()},argTypes:{variant:{control:"inline-radio",options:["default","success","destructive"]},onAction:{control:!1}},parameters:{docs:{description:{component:"The native notification composition with Base UI action controls, legacy hook Toaster, and Sonner adapter remain separate supported delivery APIs. Use a brief title, optional explanation and an action with useful altText; do not put a required decision in an expiring notification. Toast open/onOpenChange can be controlled, duration controls dismissal, swipeDirection/viewport hotkey follow the provider contract. A close control is named and focus visible. The hook Toaster consumes useToast's existing store; Sonner uses its own event store and optional toasterId. The production ApplicationToaster preserves the existing Sonner default-light scheme, richColors and delivery props; it binds the original frame and palette to Feedback tokens, with only four light foregrounds corrected for Normal AA. Its dark scheme is opt-in through the unchanged theme prop. The separate themed Sonner adapter retains its own supported styling. These adapters cannot share state without changing consumer contracts. Product success messages must follow an actual successful operation. All examples here explicitly report local fixtures only. Controls and action callbacks are live; permanent duration is fixture-only for inspection."}}},render:e=>a.jsx(R,{...e})},l=async e=>(await s.click(i(e).getByRole("button",{name:"Show notification"})),i(e.ownerDocument.body)),d={},m={play:async({canvasElement:e})=>{const t=await l(e);await n(t.getByText("Local example notification")).toBeVisible()}},u={args:{variant:"success"},play:async({canvasElement:e})=>{await l(e)}},f={args:{variant:"destructive"},play:async({canvasElement:e})=>{await l(e)}},y={args:{action:!1},play:async({canvasElement:e})=>{const t=await l(e);await n(t.queryByRole("button",{name:"Review"})).not.toBeInTheDocument()}},h={play:async({canvasElement:e,args:t})=>{(await l(e)).getByRole("button",{name:"Review"}).focus(),await s.keyboard("{Enter}"),await n(t.onAction).toHaveBeenCalledTimes(1)}},w={play:async({canvasElement:e})=>{const t=await l(e);await s.click(t.getByRole("button",{name:"Close"})),await n(i(e).getByLabelText("Notification open")).toHaveTextContent("false")}},x={render:()=>a.jsxs(a.Fragment,{children:[a.jsx(k,{onClick:()=>U({title:"Hook adapter example",description:"Local notification only."}),children:"Show hook notification"}),a.jsx(P,{})]}),play:async({canvasElement:e})=>{await s.click(i(e).getByRole("button",{name:"Show hook notification"}));const t=i(e.ownerDocument.body);await n(await t.findByText("Hook adapter example")).toBeVisible(),await s.click(t.getByRole("button",{name:"Close"}))}},g={render:()=>a.jsxs(a.Fragment,{children:[a.jsx(k,{onClick:()=>E("Sonner adapter example",{id:"family-notifications-example",toasterId:"family-notifications",description:"Local notification only.",duration:1/0}),children:"Show Sonner notification"}),a.jsx(_,{id:"family-notifications",closeButton:!0})]}),play:async({canvasElement:e})=>{await s.click(i(e).getByRole("button",{name:"Show Sonner notification"})),await n(await i(e).findByText("Sonner adapter example")).toBeVisible(),E.dismiss("family-notifications-example"),await $(()=>n(i(e).queryByText("Sonner adapter example")).not.toBeInTheDocument())}},v={render:e=>a.jsxs(a.Fragment,{children:[a.jsxs("ol",{children:[a.jsx("li",{children:"Provider owns timing, viewport and announcement behavior."}),a.jsx("li",{children:"Title and optional description convey a local event."}),a.jsx("li",{children:"Optional action names its purpose; independent close dismisses."})]}),a.jsx(R,{...e})]})},T={parameters:{docs:{description:{story:"The original toast primitives start open for anatomy inspection, with permanent fixture-only duration. The close action remains keyboard accessible and appears on hover/focus as in the product."}}},render:e=>a.jsxs(I,{duration:1/0,children:[a.jsxs(V,{defaultOpen:!0,variant:e.variant,"data-anatomy-notification":!0,children:[a.jsxs("div",{children:[a.jsx(D,{"data-anatomy-part":"title",children:"Local example notification"}),a.jsx(L,{"data-anatomy-part":"description",children:e.description})]}),e.action&&a.jsx(H,{altText:"Review the local example",onClick:e.onAction,children:"Review"}),a.jsx(O,{})]}),a.jsx(C,{})]})},j=e=>({parameters:{layout:"fullscreen",docs:{description:{story:"The actual production Sonner adapter. Descriptions and close controls inherit the checked rich message pair; action text uses the inverse neutral pair. No backend operation is represented."}}},render:t=>a.jsxs(a.Fragment,{children:[a.jsxs(k,{onClick:()=>E[e](`Application ${e} example`,{id:`application-${e}`,toasterId:`application-family-${e}`,description:t.description,duration:1/0,action:t.action?{label:"Review example",onClick:t.onAction}:void 0}),children:["Show application ",e]}),a.jsx(N,{id:`application-family-${e}`,richColors:!0,closeButton:!0})]}),play:async({canvasElement:t,args:c})=>{const o=i(t);await s.click(o.getByRole("button",{name:`Show application ${e}`}));const r=await o.findByText(`Application ${e} example`);await n(r.closest("[data-sonner-toast]")).toHaveAttribute("data-type",e),await n(r.closest("[data-sonner-toaster]")).toHaveAttribute("data-sonner-theme","light"),c.action&&await n(o.getByRole("button",{name:"Review example"})).toBeVisible(),o.getByRole("button",{name:"Close toast"}).focus(),await s.keyboard("{Enter}"),await $(()=>n(o.queryByText(`Application ${e} example`)).not.toBeInTheDocument())}}),b=j("success"),S=j("info"),B=j("warning"),A=j("error");d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const c = await show(canvasElement);
    await expect(c.getByText("Local example notification")).toBeVisible();
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success"
  },
  play: async ({
    canvasElement
  }) => {
    await show(canvasElement);
  }
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "destructive"
  },
  play: async ({
    canvasElement
  }) => {
    await show(canvasElement);
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    action: false
  },
  play: async ({
    canvasElement
  }) => {
    const c = await show(canvasElement);
    await expect(c.queryByRole("button", {
      name: "Review"
    })).not.toBeInTheDocument();
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const c = await show(canvasElement);
    c.getByRole("button", {
      name: "Review"
    }).focus();
    await userEvent.keyboard("{Enter}");
    await expect(args.onAction).toHaveBeenCalledTimes(1);
  }
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const c = await show(canvasElement);
    await userEvent.click(c.getByRole("button", {
      name: "Close"
    }));
    await expect(within(canvasElement).getByLabelText("Notification open")).toHaveTextContent("false");
  }
}`,...w.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Button onClick={() => legacyToast({
      title: "Hook adapter example",
      description: "Local notification only."
    })}>
        Show hook notification
      </Button>
      <Toaster />
    </>,
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: "Show hook notification"
    }));
    const c = within(canvasElement.ownerDocument.body);
    await expect(await c.findByText("Hook adapter example")).toBeVisible();
    await userEvent.click(c.getByRole("button", {
      name: "Close"
    }));
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Button onClick={() => notify("Sonner adapter example", {
      id: "family-notifications-example",
      toasterId: "family-notifications",
      description: "Local notification only.",
      duration: Infinity
    })}>
        Show Sonner notification
      </Button>
      <SonnerToaster id="family-notifications" closeButton />
    </>,
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: "Show Sonner notification"
    }));
    await expect(await within(canvasElement).findByText("Sonner adapter example")).toBeVisible();
    notify.dismiss("family-notifications-example");
    await waitFor(() => expect(within(canvasElement).queryByText("Sonner adapter example")).not.toBeInTheDocument());
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <>
      <ol>
        <li>Provider owns timing, viewport and announcement behavior.</li>
        <li>Title and optional description convey a local event.</li>
        <li>Optional action names its purpose; independent close dismisses.</li>
      </ol>
      <NotificationExample {...args} />
    </>
}`,...v.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "The original toast primitives start open for anatomy inspection, with permanent fixture-only duration. The close action remains keyboard accessible and appears on hover/focus as in the product."
      }
    }
  },
  render: args => <ToastProvider duration={Infinity}>
      <Toast defaultOpen variant={args.variant} data-anatomy-notification>
        <div>
          <ToastTitle data-anatomy-part="title">
            Local example notification
          </ToastTitle>
          <ToastDescription data-anatomy-part="description">
            {args.description}
          </ToastDescription>
        </div>
        {args.action && <ToastAction altText="Review the local example" onClick={args.onAction}>
            Review
          </ToastAction>}
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
}`,...T.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:'applicationStory("success")',...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:'applicationStory("info")',...S.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:'applicationStory("warning")',...B.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:'applicationStory("error")',...A.parameters?.docs?.source}}};const ae=["Playground","Default","Success","Destructive","WithoutAction","KeyboardAction","Dismiss","HookAdapter","SonnerAdapter","Anatomy","AnnotatedAnatomy","ApplicationSuccess","ApplicationInfo","ApplicationWarning","ApplicationError"];export{v as Anatomy,T as AnnotatedAnatomy,A as ApplicationError,S as ApplicationInfo,b as ApplicationSuccess,B as ApplicationWarning,m as Default,f as Destructive,w as Dismiss,x as HookAdapter,h as KeyboardAction,d as Playground,g as SonnerAdapter,u as Success,y as WithoutAction,ae as __namedExportsOrder,ee as default};
