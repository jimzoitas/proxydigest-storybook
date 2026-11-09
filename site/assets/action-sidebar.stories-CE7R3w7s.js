import{u as x,cp as u,dH as f,j as t,a as g,r as a}from"./iframe-DgvZnKtv.js";/* empty css                      */import{B as b}from"./button-CEcYiQdY.js";import{A as S}from"./action-sidebar-CVoyF_Q5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWlKOsdO.js";import"./loader-circle-BsZrs7F6.js";function w(){const e=x();return{openSidebar:({title:d,icon:o,content:s})=>{e(f({title:d,icon:o,content:s})),e(u(!0))},closeSidebar:()=>{e(u(!1))}}}const{expect:i,userEvent:h,within:C}=__STORYBOOK_MODULE_TEST__;function A(e){const n=x(),{openSidebar:m,closeSidebar:d}=w(),o=g(v=>v.ui.showActionSideBar),s=a.useRef(null),y=a.useRef(!1);return a.useEffect(()=>{n(f({title:e.title,content:e.empty?null:t.jsx("p",{className:"pf-story-section-content",children:e.content})}))},[e.title,e.content,e.empty,n]),a.useEffect(()=>{n(u(e.initiallyOpen))},[e.initiallyOpen,n]),a.useEffect(()=>{y.current&&!o&&s.current?.focus(),y.current=o},[o]),t.jsxs("div",{className:"pf-story-grid",children:[t.jsxs("div",{className:"pf-story-actions",children:[t.jsx(b,{ref:s,onClick:()=>m({title:e.title,content:e.empty?null:t.jsx("p",{className:"pf-story-section-content",children:e.content})}),children:"Open action sidebar"}),t.jsx(b,{variant:"outline",onClick:d,children:"Close from host"})]}),t.jsxs("div",{className:"sb-proxy-action-sidebar-frame",children:[t.jsx(S,{}),t.jsxs("main",{className:"pf-story-action-sidebar-split-content",children:[t.jsx("h2",{className:"pf-story-heading-weight",children:"Application content"}),t.jsx("p",{children:"The real Redux-backed panel pushes this content."})]})]}),t.jsx("output",{"aria-label":"Action sidebar visibility",children:o?"Open":"Closed"})]})}const _={title:"Patterns/Action Sidebar",component:S,tags:["autodocs"],args:{title:"Context actions",content:"Select an item in the host application to show contextual controls here.",initiallyOpen:!0,empty:!1},argTypes:{title:{control:"text"},content:{control:"text"},initiallyOpen:{control:"boolean"},empty:{control:"boolean"}},parameters:{docs:{description:{component:"Actual ActionSidebar has no props. It consumes ui.showActionSideBar, ui.sidebarTitle and ui.sidebarContent from Redux. useActionSidebar.openSidebar({ title, content, icon? }) sets content and opens; closeSidebar closes. The present renderer does not display sidebarIcon. This playground's title/content/initiallyOpen/empty controls are fixture inputs mapped through those real APIs, not invented component props. The host places the panel in a flex layout, owns content and returns focus to its trigger. Closed content remains mounted but is inert/aria-hidden; the named close button dispatches the existing close action. Story-only CSS bounds the original viewport-height panel for documentation; production widths and push behavior are unchanged."}}},render:e=>t.jsx(A,{...e})},r={},c={args:{empty:!0}},l={args:{initiallyOpen:!1}},p={play:async({canvasElement:e})=>{const n=C(e);n.getByRole("button",{name:"Close"}).focus(),await h.keyboard("{Enter}"),await i(n.getByLabelText("Action sidebar visibility")).toHaveTextContent("Closed"),await i(e.querySelector("[inert][aria-hidden='true']")).not.toBeNull(),await i(n.getByRole("button",{name:"Open action sidebar"})).toHaveFocus(),await h.keyboard("{Enter}"),await i(n.getByLabelText("Action sidebar visibility")).toHaveTextContent("Open")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    empty: true
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    initiallyOpen: false
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    canvas.getByRole("button", {
      name: "Close"
    }).focus();
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByLabelText("Action sidebar visibility")).toHaveTextContent("Closed");
    await expect(canvasElement.querySelector("[inert][aria-hidden='true']")).not.toBeNull();
    await expect(canvas.getByRole("button", {
      name: "Open action sidebar"
    })).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByLabelText("Action sidebar visibility")).toHaveTextContent("Open");
  }
}`,...p.parameters?.docs?.source}}};const k=["Playground","Empty","Closed","KeyboardClose"];export{l as Closed,c as Empty,p as KeyboardClose,r as Playground,k as __namedExportsOrder,_ as default};
