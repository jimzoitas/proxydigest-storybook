import{j as a,r as u}from"./iframe-DgvZnKtv.js";/* empty css                      */import{C as l}from"./clarification-questions-CAaO75jF.js";import"./preload-helper-PPVm8Dsz.js";import"./composed-conversation-Vghu3nK9.js";import"./prompt-suggestion-Dr-llbJO.js";import"./button-CEcYiQdY.js";import"./index-BWlKOsdO.js";import"./loader-circle-BsZrs7F6.js";import"./corner-down-right-BBl2X9Rv.js";const{expect:c,fn:p,userEvent:m,within:d}=__STORYBOOK_MODULE_TEST__;function g(e){const[t,s]=u.useState("");return a.jsxs("div",{className:"pf-story-wide-grid",children:[a.jsx(l,{...e,onQuestionClick:i=>{s(i),e.onQuestionClick(i)}}),a.jsx("output",{"aria-live":"polite",children:t?`Selected: ${t}`:"Choose a follow-up question."})]})}const E={title:"Patterns/AI/Clarification Questions",component:l,tags:["autodocs"],args:{questions:["What texture should we target?",{question:"Are there **allergen** restrictions?"}],onQuestionClick:p()},argTypes:{questions:{control:"object"},className:{control:"text"},onQuestionClick:{control:!1}},parameters:{docs:{description:{component:"Actual proxy-reusables ClarificationQuestions. questions accepts strings or objects with question/text; numbered lists are split and markdown bold markers removed. onQuestionClick receives the normalized displayed string. The fixture shows the chosen question locally; the host owns prompt insertion and AI requests. An empty normalized list renders nothing. This pattern retains the existing full-row prompt suggestion action, with no added checkbox or selection redesign."}}},render:e=>a.jsx(g,{...e})},r={},o={args:{questions:[`1) **Target texture?**
2. Allergen restrictions?`]},play:async({canvasElement:e,args:t})=>{const s=d(e);await m.click(s.getByRole("button",{name:"Target texture?"})),await c(t.onQuestionClick).toHaveBeenCalledWith("Target texture?"),await c(s.getByText("Selected: Target texture?")).toBeVisible()}},n={args:{questions:[]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    questions: ["1) **Target texture?**\\n2. Allergen restrictions?"]
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Target texture?"
    }));
    await expect(args.onQuestionClick).toHaveBeenCalledWith("Target texture?");
    await expect(canvas.getByText("Selected: Target texture?")).toBeVisible();
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    questions: []
  }
}`,...n.parameters?.docs?.source}}};const q=["Playground","NumberedList","Empty"];export{n as Empty,o as NumberedList,r as Playground,q as __namedExportsOrder,E as default};
