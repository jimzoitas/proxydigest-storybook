import{a4 as x,j as e,r as D,u as j,fN as k}from"./iframe-DgvZnKtv.js";import{B as u}from"./button-CEcYiQdY.js";import{I as R}from"./proxyLogo-CzHoIAWe.js";import{D as S,b as N,c as B,d as E,e as I,f as L}from"./dialog-BGED6ss2.js";import{R as b}from"./retry-dialog-BylgX2tG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWlKOsdO.js";import"./loader-circle-BsZrs7F6.js";import"./overlay-dialog-i6vPmHIw.js";import"./dialog-core-jxwxwCsU.js";/* empty css                            */function f(){const{t:a}=x("common");return e.jsxs("div",{className:"pf-loading-screen",children:[e.jsxs("div",{className:"pf-loading-screen__art",children:[e.jsxs("div",{className:"pf-loading-screen__frame",children:[e.jsx("img",{src:R,alt:"",className:"pf-loading-screen__logo"}),e.jsx("div",{className:"pf-loading-screen__shimmer",style:{background:"var(--group-feedback-color-fill-motion-shimmer-gradient)",animation:"pf-loading-shimmer var(--group-feedback-pf-motion-loading-shimmer-duration) var(--group-feedback-pf-motion-loading-shimmer-easing) infinite"}})]}),e.jsx("div",{className:"pf-loading-screen__glow"})]}),e.jsxs("div",{className:"pf-loading-screen__copy",children:[e.jsx("p",{className:"pf-loading-screen__message",children:a("loading.preparingWorkspace")}),e.jsx("p",{className:"pf-loading-screen__submessage",children:a("loading.gettingStarted")})]}),e.jsxs("div",{className:"pf-loading-screen__dots",children:[e.jsx("span",{className:"pf-loading-screen__dot pf-loading-screen__dot--aqua",style:{animationDelay:"var(--group-feedback-pf-motion-stagger-instant)",animationDuration:"var(--group-feedback-pf-motion-bounce-duration)"}}),e.jsx("span",{className:"pf-loading-screen__dot pf-loading-screen__dot--small pf-loading-screen__dot--mint",style:{animationDelay:"var(--group-feedback-pf-motion-stagger-short)",animationDuration:"var(--group-feedback-pf-motion-bounce-duration)"}}),e.jsx("span",{className:"pf-loading-screen__dot pf-loading-screen__dot--sky",style:{animationDelay:"var(--group-feedback-pf-motion-stagger-long)",animationDuration:"var(--group-feedback-pf-motion-bounce-duration)"}})]})]})}f.__docgenInfo={description:`Full-screen loading screen shown during app initialization
(login, permissions loading, refresh)`,methods:[],displayName:"AppLoadingScreen"};function v({open:a,onStayLoggedIn:o,onLogout:n}){const{t:i}=x("auth");return e.jsx(S,{open:a,modal:!0,children:e.jsxs(N,{className:"pf-inactivity-dialog-dialog",onInteractOutside:t=>t.preventDefault(),onEscapeKeyDown:t=>t.preventDefault(),children:[e.jsxs(B,{children:[e.jsx(E,{children:i("inactivityDialog.title")}),e.jsx(I,{children:i("inactivityDialog.message")})]}),e.jsxs(L,{className:"pf-inactivity-dialog-actions",children:[e.jsx(u,{onClick:o,className:"pf-inactivity-dialog-action",children:i("inactivityDialog.keepLoggedIn")}),e.jsx(u,{onClick:n,variant:"outline",className:"pf-inactivity-dialog-action",children:i("inactivityDialog.logOutNow")})]})]})})}v.__docgenInfo={description:"",methods:[],displayName:"InactivityDialog",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onStayLoggedIn:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onLogout:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{expect:y,fn:h,userEvent:s,within:r}=__STORYBOOK_MODULE_TEST__;function w({surface:a,onStayLoggedIn:o,onLogout:n}){const[i,t]=D.useState(!1),_=j();return a==="loading"?e.jsx(f,{}):a==="retry"?e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>_(k({title:"Retry local operation",message:"This example reports a local failure; no request is running."})),children:"Open retry"}),e.jsx(b,{})]}):e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>t(!0),children:"Open inactivity warning"}),e.jsx(v,{open:i,onStayLoggedIn:()=>{o(),t(!1)},onLogout:()=>{n(),t(!1)}})]})}const M={title:"Patterns/Session Feedback",component:w,subcomponents:{AppLoadingScreen:f,InactivityDialog:v,RetryDialog:b},tags:["autodocs"],args:{surface:"inactivity",onStayLoggedIn:h(),onLogout:h()},argTypes:{surface:{control:"inline-radio",options:["inactivity","retry","loading"]},onStayLoggedIn:{control:!1},onLogout:{control:!1}},parameters:{docs:{description:{component:"Actual session surfaces preserve their distinct host contracts. InactivityDialog is a controlled two-choice modal: open, onStayLoggedIn and onLogout. Its intentional forced choice prevents Escape and outside dismissal; the owning session hook performs renewal/logout and controls closing. The fixture closes locally only after recording a choice. RetryDialog reads global retry state and dispatches confirmRetry/cancelRetry for the owning saga; this example mounts the real reducer and does not simulate a successful retry or automatically consume those saga signals. AppLoadingScreen is the real full-viewport branded initialization state. None of these examples changes authentication or contacts a tenant."}}},render:a=>e.jsx(w,{...a},a.surface)},c={},l={play:async({canvasElement:a,args:o})=>{await s.click(r(a).getByRole("button",{name:"Open inactivity warning"}));const n=r(a.ownerDocument.body);await s.keyboard("{Escape}"),await y(n.getByRole("dialog")).toBeVisible(),await s.click(n.getByRole("button",{name:"Keep me logged in"})),await y(o.onStayLoggedIn).toHaveBeenCalledTimes(1)}},d={play:async({canvasElement:a,args:o})=>{await s.click(r(a).getByRole("button",{name:"Open inactivity warning"}));const n=r(a.ownerDocument.body);await s.click(n.getByRole("button",{name:"Log out now"})),await y(o.onLogout).toHaveBeenCalledTimes(1)}},p={args:{surface:"retry"},play:async({canvasElement:a})=>{await s.click(r(a).getByRole("button",{name:"Open retry"})),await y(r(a.ownerDocument.body).getByRole("dialog")).toHaveAccessibleName("Retry local operation")}},g={args:{surface:"loading"}},m={parameters:{docs:{description:{story:"Inactivity: title, explanation, explicit renewal and logout choices. Retry: global dialog presentation plus saga-owned response actions. Initialization: full-screen branded animation and preparation copy."}}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: "Open inactivity warning"
    }));
    const c = within(canvasElement.ownerDocument.body);
    await userEvent.keyboard("{Escape}");
    await expect(c.getByRole("dialog")).toBeVisible();
    await userEvent.click(c.getByRole("button", {
      name: "Keep me logged in"
    }));
    await expect(args.onStayLoggedIn).toHaveBeenCalledTimes(1);
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: "Open inactivity warning"
    }));
    const c = within(canvasElement.ownerDocument.body);
    await userEvent.click(c.getByRole("button", {
      name: "Log out now"
    }));
    await expect(args.onLogout).toHaveBeenCalledTimes(1);
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "retry"
  },
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: "Open retry"
    }));
    await expect(within(canvasElement.ownerDocument.body).getByRole("dialog")).toHaveAccessibleName("Retry local operation");
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "loading"
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Inactivity: title, explanation, explicit renewal and logout choices. Retry: global dialog presentation plus saga-owned response actions. Initialization: full-screen branded animation and preparation copy."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};const U=["Playground","KeepSession","LogoutChoice","Retry","Initialization","Anatomy"];export{m as Anatomy,g as Initialization,l as KeepSession,d as LogoutChoice,c as Playground,p as Retry,U as __namedExportsOrder,M as default};
