import{r as m,j as n}from"./iframe-BXubdNpd.js";/* empty css                      */import{R as p,a as d,b as u}from"./reasoning-markdown-DIMgBLlb.js";import{B as g}from"./button-DOg3bB7T.js";import"./preload-helper-PPVm8Dsz.js";import"./ai-markdown-Cajo0Pov.js";/* empty css                 */import"./marked.esm-B5D8JARp.js";import"./table-cell-sizing-CT2Y4_1Z.js";import"./source-basic-BLiCKh-9.js";import"./source-Y1udLlHr.js";import"./hover-card-DOvxW5L6.js";import"./code-block-CVnXI3I9.js";import"./index-8G61PpGJ.js";import"./index-D-ztsl9H.js";import"./chevron-right-Bt7v18gP.js";import"./index-Cx-C-_RM.js";import"./index-BXGHVmqw.js";import"./collapsible-BboTV2_X.js";import"./useCollapsiblePanel-C5JKJn3w.js";import"./aiAssistant.selectors-DeXBL1Y1.js";import"./index-DKWiT4Fi.js";import"./loader-circle-WJxMtqtu.js";const{expect:l,userEvent:c,within:x}=__STORYBOOK_MODULE_TEST__;function h(t){const[e,a]=m.useState(t.open);return m.useEffect(()=>a(t.open),[t.open]),n.jsxs("div",{className:"pf-story-contained-grid",children:[n.jsxs(p,{open:e,onOpenChange:a,isStreaming:t.isStreaming,children:[n.jsx(d,{children:"Response explanation"}),n.jsx(u,{markdown:t.markdown,children:t.content})]}),n.jsx("output",{"aria-label":"Disclosure state",children:e?"Expanded":"Collapsed"}),n.jsx(g,{variant:"outline",onClick:()=>a(t.open),children:"Reset example"})]})}const I={title:"Components/AI & Conversation/Reasoning Disclosure",component:h,tags:["autodocs"],args:{open:!1,markdown:!0,content:"**User-facing rationale:** compare sweetness and texture against the stated constraints.",isStreaming:!1},argTypes:{open:{control:"boolean"},markdown:{control:"boolean"},content:{control:"text"},isStreaming:{control:"boolean"}},parameters:{docs:{description:{component:"Reasoning uses open/onOpenChange for controlled disclosure, or internal state when open is omitted. isStreaming automatically opens/closes only the uncontrolled version. ReasoningTrigger supplies the toggle; ReasoningContent supports markdown, contentClassName and HTML props. The playground deliberately controls open, so its control updates live; it does not simulate model reasoning. Supply a user-facing explanation or progress summary. Content remains authored by the host, and stream lifecycle is not a backend connection."}}}},o={play:async({canvasElement:t})=>{const e=x(t),a=e.getByRole("button",{name:"Response explanation"});await c.click(a),await l(e.getByLabelText("Disclosure state")).toHaveTextContent("Expanded"),await c.keyboard("{Enter}"),await l(e.getByLabelText("Disclosure state")).toHaveTextContent("Collapsed")}},s={args:{open:!0}},r={args:{open:!0,markdown:!1,content:"A concise explanation supplied by the host."}},i={render:function(){const[e,a]=m.useState(!1);return n.jsxs("div",{className:"pf-story-grid",children:[n.jsx(g,{onClick:()=>a(y=>!y),children:e?"Finish local stream":"Start local stream"}),n.jsxs(p,{isStreaming:e,children:[n.jsx(d,{children:"Response explanation"}),n.jsx(u,{children:"Local progress summary; no model request."})]}),n.jsx("output",{children:e?"Streaming":"Idle"})]})},play:async({canvasElement:t})=>{const e=x(t);await c.click(e.getByRole("button",{name:"Start local stream"})),await l(e.getByRole("button",{name:"Finish local stream"})).toBeVisible(),await c.click(e.getByRole("button",{name:"Finish local stream"})),await l(e.getByRole("button",{name:"Start local stream"})).toBeVisible()}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    const trigger = c.getByRole("button", {
      name: "Response explanation"
    });
    await userEvent.click(trigger);
    await expect(c.getByLabelText("Disclosure state")).toHaveTextContent("Expanded");
    await userEvent.keyboard("{Enter}");
    await expect(c.getByLabelText("Disclosure state")).toHaveTextContent("Collapsed");
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    open: true
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    markdown: false,
    content: "A concise explanation supplied by the host."
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Streaming() {
    const [streaming, setStreaming] = useState(false);
    return <div className="pf-story-grid">
        <Button onClick={() => setStreaming(value => !value)}>
          {streaming ? "Finish local stream" : "Start local stream"}
        </Button>
        <Reasoning isStreaming={streaming}>
          <ReasoningTrigger>Response explanation</ReasoningTrigger>
          <ReasoningContent>
            Local progress summary; no model request.
          </ReasoningContent>
        </Reasoning>
        <output>{streaming ? "Streaming" : "Idle"}</output>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await userEvent.click(c.getByRole("button", {
      name: "Start local stream"
    }));
    await expect(c.getByRole("button", {
      name: "Finish local stream"
    })).toBeVisible();
    await userEvent.click(c.getByRole("button", {
      name: "Finish local stream"
    }));
    await expect(c.getByRole("button", {
      name: "Start local stream"
    })).toBeVisible();
  }
}`,...i.parameters?.docs?.source}}};const q=["Playground","Expanded","PlainText","UncontrolledStreaming"];export{s as Expanded,r as PlainText,o as Playground,i as UncontrolledStreaming,q as __namedExportsOrder,I as default};
