import{r as i,j as a}from"./iframe-BXubdNpd.js";/* empty css                      */import{R as x}from"./response-stream-DNrXmpAP.js";import{B as g}from"./button-DOg3bB7T.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DKWiT4Fi.js";import"./loader-circle-WJxMtqtu.js";const{expect:l,userEvent:y,waitFor:p,within:h}=__STORYBOOK_MODULE_TEST__;function S(e){const[t,m]=i.useState(0),[d,c]=i.useState(!1);return i.useEffect(()=>{c(!1)},[e.text,e.mode,e.speed,e.characterChunkSize]),a.jsxs("div",{className:"pf-story-contained-grid",children:[a.jsx("div",{"aria-label":"Streamed response",children:a.jsx(x,{textStream:e.text,mode:e.mode,speed:e.speed,characterChunkSize:e.characterChunkSize,onComplete:()=>c(!0)},`${t}:${e.text}:${e.mode}:${e.speed}:${e.characterChunkSize}`)}),a.jsx("output",{"aria-label":"Stream status",children:d?"Local stream complete":"Playing local text"}),a.jsx(g,{variant:"outline",onClick:()=>{c(!1),m(u=>u+1)},children:"Replay local text"})]})}const E={title:"Components/AI & Conversation/Response Stream",component:S,tags:["autodocs"],args:{text:"A local response arrives progressively.",mode:"typewriter",speed:90,characterChunkSize:8},argTypes:{text:{control:"text"},mode:{control:"inline-radio",options:["typewriter","fade"]},speed:{control:{type:"range",min:1,max:100}},characterChunkSize:{control:{type:"range",min:1,max:20}}},parameters:{docs:{description:{component:"Public API: textStream accepts a string or AsyncIterable<string>; mode chooses typewriter/fade; speed controls timing, with characterChunkSize, fadeDuration and segmentDelay overrides. as selects the output element; onComplete reports completion. useTextStream also exposes displayedText/isComplete/segments. The playground replays a local string and remounts when timing controls change. The completion output records observed callbacks, not network delivery. Fade animation completion and reduced-motion behavior need browser verification; cancellation, reconnection and server streaming belong to the host."}}}},o={play:async({canvasElement:e})=>{const t=h(e);await p(()=>l(t.getByLabelText("Streamed response")).toHaveTextContent("A local response arrives progressively.")),await l(t.getByLabelText("Stream status")).toHaveTextContent("Local stream complete"),await y.click(t.getByRole("button",{name:"Replay local text"})),await p(()=>l(t.getByLabelText("Stream status")).toHaveTextContent("Local stream complete"))}},r={args:{mode:"fade"}},n={args:{text:""}},s={args:{text:`First suggestion.
Second suggestion.
Review before applying.`,characterChunkSize:16}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await waitFor(() => expect(c.getByLabelText("Streamed response")).toHaveTextContent("A local response arrives progressively."));
    await expect(c.getByLabelText("Stream status")).toHaveTextContent("Local stream complete");
    await userEvent.click(c.getByRole("button", {
      name: "Replay local text"
    }));
    await waitFor(() => expect(c.getByLabelText("Stream status")).toHaveTextContent("Local stream complete"));
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "fade"
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    text: ""
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: "First suggestion.\\nSecond suggestion.\\nReview before applying.",
    characterChunkSize: 16
  }
}`,...s.parameters?.docs?.source}}};const R=["Playground","Fade","Empty","Multiline"];export{n as Empty,r as Fade,s as Multiline,o as Playground,R as __namedExportsOrder,E as default};
