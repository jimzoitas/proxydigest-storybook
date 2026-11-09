import{a3 as r,r as y,u as w,a as B,aK as R,aL as v,aM as h,aN as S,j as c}from"./iframe-DgvZnKtv.js";/* empty css                      */import{g as f,M as k}from"./MessageFeedback-B7Fy4cBP.js";import{B as E}from"./button-CEcYiQdY.js";import"./preload-helper-PPVm8Dsz.js";import"./composed-trigger-B1u4J_6A.js";import"./composed-surface-thTtt0jI.js";import"./dialog-BGED6ss2.js";import"./overlay-dialog-i6vPmHIw.js";import"./thumbs-up-D84hYrmj.js";import"./ban-moHakZ75.js";import"./index-BWlKOsdO.js";import"./loader-circle-BsZrs7F6.js";const{expect:o,userEvent:g,within:b}=__STORYBOOK_MODULE_TEST__;function T({scope:a,selected:e,pending:t}){const n=y.useId(),s=w(),x=B(R(n));return y.useEffect(()=>(s(v(n)),e!=="none"&&s(h({id:"fixture-feedback",interactionId:n,userId:"local-user",feedbackType:e,textFeedback:f(a,e)[0].label,createdAt:"2026-01-01T00:00:00Z",updatedAt:"2026-01-01T00:00:00Z"})),s(S({interactionId:n,loading:t})),()=>{s(v(n))}),[s,n,a,e,t]),c.jsxs("div",{className:"pf-story-contained-grid",children:[c.jsxs("div",{className:"pf-story-actions",children:[c.jsx(k,{interactionId:n,feedbackType:"positive",scope:a}),c.jsx(k,{interactionId:n,feedbackType:"negative",scope:a})]}),c.jsx("output",{"aria-label":"Feedback request state",children:x?"Local Redux action pending; no backend request":"Ready to request feedback"}),c.jsx(E,{variant:"outline",onClick:()=>s(v(n)),children:"Clear local feedback"})]})}const M={title:"Patterns/AI/Response Feedback",component:T,tags:["autodocs"],args:{scope:r.enum.recipe_formulation_advisor,selected:"none",pending:!1},argTypes:{scope:{control:"select",options:[r.enum.recipe_formulation_advisor,r.enum.regulatory_agent,r.enum.ideas_generation_agent]},selected:{control:"inline-radio",options:["none","positive","negative"]},pending:{control:"boolean"}},parameters:{docs:{description:{component:"Actual MessageFeedback API: interactionId, feedbackType (positive/negative), scope. The component reads scoped feedback/loading from Redux, uses real translated reason options, and dispatches submit/update/delete actions. Clicking an active thumb requests deletion. A selected reason is preserved with its trailing selection treatment. This fixture uses the real reducers with isolated IDs, but Storybook has no saga middleware: selecting a reason intentionally reaches a pending state. Clear resets it locally. selected and pending are fixture seed controls, not component props. Persistence, request errors and server acknowledgement are not verified here."}}}},d={play:async({canvasElement:a,args:e})=>{const t=b(a);await g.click(t.getByRole("button",{name:"Positive feedback"})),await g.click(b(document.body).getByRole("button",{name:f(e.scope,"positive")[0].label})),await o(t.getByLabelText("Feedback request state")).toHaveTextContent("Local Redux action pending"),await o(t.getByRole("button",{name:"Positive feedback"})).toBeDisabled(),await g.click(t.getByRole("button",{name:"Clear local feedback"})),await o(t.getByRole("button",{name:"Positive feedback"})).toBeEnabled()}},l={args:{selected:"positive"},play:async({canvasElement:a})=>{const e=b(a),t=e.getByRole("button",{name:"Positive feedback"});await o(t).toHaveAttribute("aria-pressed","true"),await g.click(t),await o(e.getByLabelText("Feedback request state")).toHaveTextContent("Local Redux action pending")}},p={args:{selected:"negative"}},u={args:{pending:!0},play:async({canvasElement:a})=>{const e=b(a);await o(e.getByRole("button",{name:"Positive feedback"})).toBeDisabled(),await o(e.getByRole("button",{name:"Negative feedback"})).toBeDisabled()}},m={args:{scope:r.enum.regulatory_agent}},i={args:{selected:"positive"}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const c = within(canvasElement);
    await userEvent.click(c.getByRole("button", {
      name: "Positive feedback"
    }));
    await userEvent.click(within(document.body).getByRole("button", {
      name: getFeedbackOptions(args.scope, "positive")[0].label
    }));
    await expect(c.getByLabelText("Feedback request state")).toHaveTextContent("Local Redux action pending");
    await expect(c.getByRole("button", {
      name: "Positive feedback"
    })).toBeDisabled();
    await userEvent.click(c.getByRole("button", {
      name: "Clear local feedback"
    }));
    await expect(c.getByRole("button", {
      name: "Positive feedback"
    })).toBeEnabled();
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    selected: "positive"
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    const button = c.getByRole("button", {
      name: "Positive feedback"
    });
    await expect(button).toHaveAttribute("aria-pressed", "true");
    await userEvent.click(button);
    await expect(c.getByLabelText("Feedback request state")).toHaveTextContent("Local Redux action pending");
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    selected: "negative"
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    pending: true
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await expect(c.getByRole("button", {
      name: "Positive feedback"
    })).toBeDisabled();
    await expect(c.getByRole("button", {
      name: "Negative feedback"
    })).toBeDisabled();
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    scope: WebSocketScopeSchema.enum.regulatory_agent
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    selected: "positive"
  }
}`,...i.parameters?.docs?.source},description:{story:"Stable source specimen; no authored play changes its initial anatomy.",...i.parameters?.docs?.description}}};const K=["Playground","PositiveSelection","NegativeSelection","Pending","RegulatoryReasons","AnatomySelected"];export{i as AnatomySelected,p as NegativeSelection,u as Pending,d as Playground,l as PositiveSelection,m as RegulatoryReasons,K as __namedExportsOrder,M as default};
