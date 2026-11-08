import{r as u,j as e}from"./iframe-nhB53rPD.js";/* empty css                      */import{M as h,c as v,a as w,b as x,d as y}from"./message-DTDVI7DO.js";import{a as M}from"./message-with-markdown-DdRtM4qV.js";import{B as A}from"./button-_tcBhp5_.js";import"./preload-helper-PPVm8Dsz.js";/* empty css                */import"./avatar-C4hdJ-kW.js";import"./ai-markdown-BYcrcK24.js";/* empty css                 */import"./marked.esm-B5D8JARp.js";import"./table-cell-sizing-PMkloevH.js";import"./source-basic-Bas-ESyx.js";import"./source-lsIaHBzb.js";import"./hover-card-DUsLCMGr.js";import"./code-block-BquPihnh.js";import"./index-8G61PpGJ.js";import"./index-C6ZnvOnQ.js";import"./chevron-right-CavErG_J.js";import"./index-DLZcMhiB.js";import"./index-DzqWsyd1.js";import"./collapsible-pI4oVkh3.js";import"./useCollapsiblePanel-DVMF6qnG.js";import"./aiAssistant.selectors-xGGE4Gfz.js";import"./index-8Dbc_Jva.js";import"./loader-circle-MxHlgpxw.js";const{expect:c,userEvent:l,within:T}=__STORYBOOK_MODULE_TEST__;function k({content:a,markdown:t,showAvatar:p,showActions:m}){const[i,d]=u.useState(!1);return e.jsxs("div",{className:"pf-story-contained-grid",children:[e.jsxs(h,{"aria-label":"Assistant message",children:[p&&e.jsx(v,{src:"",alt:"Assistant",fallback:"AI"}),e.jsxs("div",{className:"pf-story-message-content",children:[t?e.jsx(M,{markdown:!0,children:a}):e.jsx(w,{children:a}),m&&e.jsx(x,{children:e.jsx(y,{tooltip:"Save this response locally",children:e.jsx(A,{variant:"ghost",onClick:()=>d(g=>!g),"aria-pressed":i,children:i?"Saved":"Save response"})})})]})]}),e.jsx("output",{"aria-label":"Message action",children:i?"Response saved locally":"No local action"})]})}const V={title:"Components/AI & Conversation/Message",component:k,tags:["autodocs"],args:{content:"Consider **less sugar** and preserve the texture.",markdown:!0,showAvatar:!0,showActions:!0},argTypes:{content:{control:"text"},markdown:{control:"boolean"},showAvatar:{control:"boolean"},showActions:{control:"boolean"}},parameters:{docs:{description:{component:"Message, MessageAvatar, MessageContent, MessageActions and MessageAction form the anatomy. Root/content/actions accept HTML div props; Avatar accepts src, alt, fallback and delayMs; Action wraps a native interactive child with tooltip/side. The separate message-with-markdown implementation delegates MessageContent markdown=true to AiMarkdown and accepts its link/rendering options. **The plain message.tsx content does not interpret Markdown**, even though its historical type exposes markdown. Both actual implementations are demonstrated here. Host code owns identity, chronology and actions. The example Save is reversible local state, not persistence; no streaming/backend behavior is inferred."}}}},s={play:async({canvasElement:a})=>{const t=T(a);await c(t.getByText("less sugar").tagName).toBe("STRONG"),await l.click(t.getByRole("button",{name:"Save response"})),await c(t.getByLabelText("Message action")).toHaveTextContent("Response saved locally"),await l.click(t.getByRole("button",{name:"Saved"})),await c(t.getByLabelText("Message action")).toHaveTextContent("No local action")}},o={args:{markdown:!1,showAvatar:!1,content:"Literal **asterisks** stay literal in the plain message."}},n={args:{showActions:!1}},r={args:{content:`### Local reply

`+"A longer response wraps within its message container. ".repeat(20)}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await expect(c.getByText("less sugar").tagName).toBe("STRONG");
    await userEvent.click(c.getByRole("button", {
      name: "Save response"
    }));
    await expect(c.getByLabelText("Message action")).toHaveTextContent("Response saved locally");
    await userEvent.click(c.getByRole("button", {
      name: "Saved"
    }));
    await expect(c.getByLabelText("Message action")).toHaveTextContent("No local action");
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    markdown: false,
    showAvatar: false,
    content: "Literal **asterisks** stay literal in the plain message."
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    showActions: false
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    content: "### Local reply\\n\\n" + "A longer response wraps within its message container. ".repeat(20)
  }
}`,...r.parameters?.docs?.source}}};const W=["Playground","PlainText","ReadOnly","LongResponse"];export{r as LongResponse,o as PlainText,s as Playground,n as ReadOnly,W as __namedExportsOrder,V as default};
