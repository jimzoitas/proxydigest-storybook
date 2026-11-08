import{r as x,j as a}from"./iframe-nhB53rPD.js";import{P as E,a as S,b as B,c as P}from"./prompt-input-DUnSkmpe.js";import{B as v}from"./button-_tcBhp5_.js";import"./preload-helper-PPVm8Dsz.js";import"./textarea-DEsuPIgK.js";import"./index-8Dbc_Jva.js";import"./loader-circle-MxHlgpxw.js";const{expect:o,userEvent:s,within:g}=__STORYBOOK_MODULE_TEST__;function R({draft:e,placeholder:t,disabled:n,isLoading:r,actionsDisabled:d,maxHeight:w}){const[i,l]=x.useState(e),[y,b]=x.useState([]);x.useEffect(()=>{l(e),b([])},[e]);const h=()=>{n||r||d||!i.trim()||(b(f=>[...f,i]),l(""))};return a.jsxs("div",{className:"pf-story-prompt-input-preview",children:[a.jsxs(E,{value:i,onValueChange:l,onSubmit:h,disabled:n,isLoading:r,actionsDisabled:d,maxHeight:w,children:[a.jsx(S,{"aria-label":"Prompt",placeholder:t}),a.jsx(B,{children:a.jsx(P,{tooltip:"Submit your prompt",children:a.jsx(v,{type:"button",onClick:h,disabled:n||r||d||!i.trim(),children:r?"Generating":"Send"})})})]}),a.jsx("output",{"aria-label":"Submitted prompts","aria-live":"polite",children:y.length?y.join(" | "):"No local submissions"}),a.jsx(v,{variant:"outline",onClick:()=>{l(e),b([])},children:"Reset example"})]})}const D={title:"Components/AI & Conversation/Prompt Input",component:R,tags:["autodocs"],args:{draft:"",placeholder:"Ask about your recipe",disabled:!1,isLoading:!1,actionsDisabled:!1,maxHeight:160},argTypes:{draft:{control:"text"},placeholder:{control:"text"},disabled:{control:"boolean"},isLoading:{control:"boolean"},actionsDisabled:{control:"boolean"},maxHeight:{control:{type:"range",min:60,max:320,step:20}}},parameters:{docs:{description:{component:"Compose PromptInput → PromptInputTextarea + PromptInputActions → PromptInputAction. Public root API: value/onValueChange (controlled; omit both for internal state), onSubmit, isLoading, disabled, actionsDisabled, maxHeight, className and children. Textarea accepts native textarea props and disableAutosize. Action takes tooltip, side and a real button child. Enter requests submission; Shift+Enter inserts a line break. **Host obligation:** validate empty text and guard submit while loading/disabled; isLoading alone does not block Enter. The playground draft is a fixture seed, synchronized when changed; Reset clears local submissions. No model or network request is made. Existing styling is retained; this page is not evidence of complete token migration."}}}},c={play:async({canvasElement:e})=>{const t=g(e),n=t.getByRole("textbox",{name:"Prompt"});await s.type(n,"Reduce sugar"),await s.keyboard("{Shift>}{Enter}{/Shift}Keep texture{Enter}"),await o(n).toHaveValue(""),await o(t.getByLabelText("Submitted prompts")).toHaveTextContent("Reduce sugar Keep texture"),await s.click(t.getByRole("button",{name:"Reset example"})),await o(t.getByLabelText("Submitted prompts")).toHaveTextContent("No local submissions")}},p={args:{draft:"Compare two ingredient options."}},m={args:{draft:"Waiting for a response",isLoading:!0},play:async({canvasElement:e})=>{const t=g(e);await s.click(t.getByRole("textbox",{name:"Prompt"})),await s.keyboard("{Enter}"),await o(t.getByLabelText("Submitted prompts")).toHaveTextContent("No local submissions"),await o(t.getByRole("button",{name:"Generating"})).toBeDisabled()}},u={args:{draft:"Submission unavailable",disabled:!0,actionsDisabled:!0},play:async({canvasElement:e})=>{await o(g(e).getByRole("textbox",{name:"Prompt"})).toBeDisabled()}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    const input = c.getByRole("textbox", {
      name: "Prompt"
    });
    await userEvent.type(input, "Reduce sugar");
    await userEvent.keyboard("{Shift>}{Enter}{/Shift}Keep texture{Enter}");
    await expect(input).toHaveValue("");
    await expect(c.getByLabelText("Submitted prompts")).toHaveTextContent("Reduce sugar Keep texture");
    await userEvent.click(c.getByRole("button", {
      name: "Reset example"
    }));
    await expect(c.getByLabelText("Submitted prompts")).toHaveTextContent("No local submissions");
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    draft: "Compare two ingredient options."
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    draft: "Waiting for a response",
    isLoading: true
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await userEvent.click(c.getByRole("textbox", {
      name: "Prompt"
    }));
    await userEvent.keyboard("{Enter}");
    await expect(c.getByLabelText("Submitted prompts")).toHaveTextContent("No local submissions");
    await expect(c.getByRole("button", {
      name: "Generating"
    })).toBeDisabled();
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    draft: "Submission unavailable",
    disabled: true,
    actionsDisabled: true
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByRole("textbox", {
      name: "Prompt"
    })).toBeDisabled();
  }
}`,...u.parameters?.docs?.source}}};const A=["Playground","Prefilled","Loading","Disabled"];export{u as Disabled,m as Loading,c as Playground,p as Prefilled,A as __namedExportsOrder,D as default};
