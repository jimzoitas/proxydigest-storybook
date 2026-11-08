import{j as t,r as y}from"./iframe-BXubdNpd.js";import{B as g}from"./button-DOg3bB7T.js";import{M as x}from"./MessageSelectionToolbar-sXTTmb_-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DKWiT4Fi.js";import"./loader-circle-WJxMtqtu.js";import"./quote-BuJfB6Y2.js";const{expect:h,userEvent:p,within:a}=__STORYBOOK_MODULE_TEST__;function b({text:e,placement:n}){const o=y.useRef(null),[m,u]=y.useState(null),[w,s]=y.useState("No selection action");return t.jsxs("div",{className:"pf-story-ai-assistant-message-selection-toolbar-frame",children:[t.jsx("p",{ref:o,className:"pf-story-ai-assistant-message-selection-toolbar-message",children:e}),t.jsx(g,{onClick:()=>{const d=o.current?.getBoundingClientRect()??new DOMRect(24,120,440,60);u(n==="near-top"?new DOMRect(d.left,12,d.width||440,32):d),s("Selection toolbar open")},children:"Show selection action"}),t.jsx(g,{variant:"outline",onClick:()=>s("Clicked outside selection"),children:"Outside action"}),t.jsx("output",{"aria-label":"Selection outcome",children:w}),m&&t.jsx(x,{rect:m,onAsk:()=>{s(`Ask about: ${e}`),u(null)},onDismiss:()=>{s("Selection dismissed"),u(null)}})]})}const T={title:"Patterns/AI/Message Selection Action",component:b,tags:["autodocs"],args:{text:"Compare the texture implications of the proposed ingredients.",placement:"normal"},argTypes:{text:{control:"text"},placement:{control:"inline-radio",options:["normal","near-top"]}},parameters:{docs:{story:{inline:!1,height:420},description:{component:"Actual MessageSelectionToolbar public API: rect (DOMRect), onAsk and onDismiss. It portals to document.body, centers over the supplied selection, and flips below selections near the viewport top. Pointer-down outside dismisses it; mouse-down on Ask preserves the selection. The host owns obtaining the text/range, keyboard access to opening the action, resetting selection and inserting the quoted prompt. This fixture provides an explicit keyboard-accessible opener using the real paragraph rectangle, or a near-top rectangle for the flip state. Ask and dismissal are observable local actions. This is not a simulated browser text-selection engine; positioning, zoom, scrolling and clipping need browser inspection. The existing toolbar does not implement Escape dismissal itself."}}},render:e=>t.jsx(b,{...e})},i={},r={play:async({canvasElement:e,args:n})=>{const o=a(e);await p.click(o.getByRole("button",{name:"Show selection action"})),(await a(document.body).findByRole("button",{name:/ask proxy/i})).focus(),await p.keyboard("{Enter}"),await h(o.getByLabelText("Selection outcome")).toHaveTextContent(`Ask about: ${n.text}`)}},c={play:async({canvasElement:e})=>{const n=a(e);await p.click(n.getByRole("button",{name:"Show selection action"})),await a(document.body).findByRole("button",{name:/ask proxy/i}),await p.click(n.getByRole("button",{name:"Outside action"})),await h(a(document.body).queryByRole("button",{name:/ask proxy/i})).not.toBeInTheDocument()}},l={args:{placement:"near-top"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Show selection action"
    }));
    const ask = await within(document.body).findByRole("button", {
      name: /ask proxy/i
    });
    ask.focus();
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByLabelText("Selection outcome")).toHaveTextContent(\`Ask about: \${args.text}\`);
  }
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Show selection action"
    }));
    await within(document.body).findByRole("button", {
      name: /ask proxy/i
    });
    await userEvent.click(canvas.getByRole("button", {
      name: "Outside action"
    }));
    await expect(within(document.body).queryByRole("button", {
      name: /ask proxy/i
    })).not.toBeInTheDocument();
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    placement: "near-top"
  }
}`,...l.parameters?.docs?.source}}};const A=["Playground","ChooseAction","OutsideDismissal","NearViewportTop"];export{r as ChooseAction,l as NearViewportTop,c as OutsideDismissal,i as Playground,A as __namedExportsOrder,T as default};
