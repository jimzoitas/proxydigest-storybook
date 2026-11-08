import{r as u,j as e}from"./iframe-nhB53rPD.js";/* empty css                      */import{C as y,a as x,b as C,S as v}from"./scroll-button--WDdtHsL.js";import{M as B,a as b}from"./message-DTDVI7DO.js";import{B as g}from"./button-_tcBhp5_.js";import"./preload-helper-PPVm8Dsz.js";/* empty css                */import"./avatar-C4hdJ-kW.js";import"./index-8Dbc_Jva.js";import"./loader-circle-MxHlgpxw.js";const{expect:o,userEvent:d,within:w}=__STORYBOOK_MODULE_TEST__;function f({messageCount:a,height:t,showScrollButton:h}){const[l,i]=u.useState(0);return u.useEffect(()=>i(0),[a]),e.jsxs("div",{className:"pf-story-chat-container-preview",children:[e.jsxs(y,{"aria-label":"Conversation",className:"pf-story-chat-container-scroll-frame",style:{height:t},children:[e.jsxs(x,{className:"pf-story-chat-container-messages",children:[Array.from({length:a+l},(m,p)=>e.jsx(B,{children:e.jsxs(b,{children:["Local conversation message ",p+1]})},p)),e.jsx(C,{})]}),h&&e.jsx(v,{"aria-label":"Scroll to latest message",className:"pf-story-chat-container-scroll-button"})]}),e.jsxs("div",{className:"pf-story-actions",children:[e.jsx(g,{onClick:()=>i(m=>m+1),children:"Append local message"}),e.jsx(g,{variant:"outline",onClick:()=>i(0),children:"Reset example"})]}),e.jsxs("output",{"aria-label":"Message count",children:[a+l," messages"]})]})}const N={title:"Components/AI & Conversation/Chat Container",component:f,tags:["autodocs"],args:{messageCount:8,height:300,showScrollButton:!0},argTypes:{messageCount:{control:{type:"range",min:0,max:30}},height:{control:{type:"range",min:180,max:500,step:20}},showScrollButton:{control:"boolean"}},parameters:{docs:{description:{component:"ChatContainerRoot owns the use-stick-to-bottom context and role=log. Content and ScrollAnchor must be nested inside it; each accepts HTML div props and className. ScrollButton also requires that context and accepts Button variants/native button props plus a scrollToBottom imperative ref. The host supplies an accessible log label and scroll-button name, message identity/order, bounded height, live announcements and history loading. Local append/reset is functional. Scroll position, stickiness and the button's animated visibility require real browser geometry; portable checks verify structure and appended content, not scrolling physics. Existing implementation styles are retained."}}}},s={play:async({canvasElement:a})=>{const t=w(a);await o(t.getByRole("log",{name:"Conversation"})).toBeVisible(),await d.click(t.getByRole("button",{name:"Append local message"})),await o(t.getByText("Local conversation message 9")).toBeVisible(),await o(t.getByLabelText("Message count")).toHaveTextContent("9 messages"),await d.click(t.getByRole("button",{name:"Reset example"})),await o(t.queryByText("Local conversation message 9")).not.toBeInTheDocument()}},n={args:{messageCount:0}},r={args:{messageCount:30,height:400}},c={args:{showScrollButton:!1}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await expect(c.getByRole("log", {
      name: "Conversation"
    })).toBeVisible();
    await userEvent.click(c.getByRole("button", {
      name: "Append local message"
    }));
    await expect(c.getByText("Local conversation message 9")).toBeVisible();
    await expect(c.getByLabelText("Message count")).toHaveTextContent("9 messages");
    await userEvent.click(c.getByRole("button", {
      name: "Reset example"
    }));
    await expect(c.queryByText("Local conversation message 9")).not.toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    messageCount: 0
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    messageCount: 30,
    height: 400
  }
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    showScrollButton: false
  }
}`,...c.parameters?.docs?.source}}};const O=["Playground","Empty","LongConversation","WithoutScrollControl"];export{n as Empty,r as LongConversation,s as Playground,c as WithoutScrollControl,O as __namedExportsOrder,N as default};
