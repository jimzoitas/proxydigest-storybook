import{j as e,r as l}from"./iframe-DgvZnKtv.js";import{B as h}from"./button-CEcYiQdY.js";import{M as f}from"./MessageSelectionToolbar-pWE0w3mQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWlKOsdO.js";import"./loader-circle-BsZrs7F6.js";import"./composed-trigger-B1u4J_6A.js";import"./quote-BOGSpSGi.js";const{expect:x,userEvent:g,within:r}=__STORYBOOK_MODULE_TEST__;function w({text:t,placement:n,initialOpen:o=!1}){const a=l.useRef(null),[b,i]=l.useState(null),[k,c]=l.useState("No selection action");return l.useLayoutEffect(()=>{o&&a.current&&i(a.current.getBoundingClientRect())},[o]),e.jsxs("div",{className:"pf-story-ai-assistant-message-selection-toolbar-frame",children:[e.jsx("p",{ref:a,className:"pf-story-ai-assistant-message-selection-toolbar-message",children:t}),!o&&e.jsxs(e.Fragment,{children:[e.jsx(h,{onClick:()=>{const y=a.current?.getBoundingClientRect()??new DOMRect(24,120,440,60);i(n==="near-top"?new DOMRect(y.left,12,y.width||440,32):y),c("Selection toolbar open")},children:"Show selection action"}),e.jsx(h,{variant:"outline",onClick:()=>c("Clicked outside selection"),children:"Outside action"}),e.jsx("output",{"aria-label":"Selection outcome",children:k})]}),b&&e.jsx(f,{rect:b,onAsk:()=>{c(`Ask about: ${t}`),i(null)},onDismiss:()=>{c("Selection dismissed"),i(null)}})]})}const j={title:"Patterns/AI/Message Selection Action",component:w,tags:["autodocs"],args:{text:"Compare the texture implications of the proposed ingredients.",placement:"normal"},argTypes:{text:{control:"text"},placement:{control:"inline-radio",options:["normal","near-top"]}},parameters:{docs:{story:{inline:!1,height:420},description:{component:"Actual MessageSelectionToolbar public API: rect (DOMRect), onAsk and onDismiss. It portals to document.body, centers over the supplied selection, and flips below selections near the viewport top. Pointer-down outside dismisses it; mouse-down on Ask preserves the selection. The host owns obtaining the text/range, keyboard access to opening the action, resetting selection and inserting the quoted prompt. This fixture provides an explicit keyboard-accessible opener using the real paragraph rectangle, or a near-top rectangle for the flip state. Ask and dismissal are observable local actions. This is not a simulated browser text-selection engine; positioning, zoom, scrolling and clipping need browser inspection. The existing toolbar does not implement Escape dismissal itself."}}},render:t=>e.jsx(w,{...t})},p={},m={play:async({canvasElement:t,args:n})=>{const o=r(t);await g.click(o.getByRole("button",{name:"Show selection action"})),(await r(document.body).findByRole("button",{name:/ask proxy/i})).focus(),await g.keyboard("{Enter}"),await x(o.getByLabelText("Selection outcome")).toHaveTextContent(`Ask about: ${n.text}`)}},u={play:async({canvasElement:t})=>{const n=r(t);await g.click(n.getByRole("button",{name:"Show selection action"})),await r(document.body).findByRole("button",{name:/ask proxy/i}),await g.click(n.getByRole("button",{name:"Outside action"})),await x(r(document.body).queryByRole("button",{name:/ask proxy/i})).not.toBeInTheDocument()}},d={args:{placement:"near-top"}},s={args:{initialOpen:!0}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"{}",...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    placement: "near-top"
  }
}`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    initialOpen: true
  }
}`,...s.parameters?.docs?.source},description:{story:"Uses the actual rendered passage rectangle; selection and service transport remain host-owned.",...s.parameters?.docs?.description}}};const C=["Playground","ChooseAction","OutsideDismissal","NearViewportTop","AnatomyOpen"];export{s as AnatomyOpen,m as ChooseAction,d as NearViewportTop,u as OutsideDismissal,p as Playground,C as __namedExportsOrder,j as default};
