import{bB as i,r as v,u as x,a as B,hv as w,h_ as m,h$ as R,i0 as h,j as c}from"./iframe-AqpYXns4.js";/* empty css                      */import{g as y,M as k}from"./MessageFeedback-B3y1PKVe.js";import{B as E}from"./button-B5FjjXWS.js";import"./preload-helper-PPVm8Dsz.js";import"./thumbs-up-BdYuyiE_.js";import"./ban-B2bx095w.js";import"./index-DEXj3--c.js";import"./loader-circle-mWFWE2W9.js";const{expect:o,userEvent:g,within:b}=__STORYBOOK_MODULE_TEST__;function T({scope:a,selected:e,pending:t}){const n=v.useId(),s=x(),f=B(w(n));return v.useEffect(()=>(s(m(n)),e!=="none"&&s(R({id:"fixture-feedback",interactionId:n,userId:"local-user",feedbackType:e,textFeedback:y(a,e)[0].label,createdAt:"2026-01-01T00:00:00Z",updatedAt:"2026-01-01T00:00:00Z"})),s(h({interactionId:n,loading:t})),()=>{s(m(n))}),[s,n,a,e,t]),c.jsxs("div",{className:"pf-story-contained-grid",children:[c.jsxs("div",{className:"pf-story-actions",children:[c.jsx(k,{interactionId:n,feedbackType:"positive",scope:a}),c.jsx(k,{interactionId:n,feedbackType:"negative",scope:a})]}),c.jsx("output",{"aria-label":"Feedback request state",children:f?"Local Redux action pending; no backend request":"Ready to request feedback"}),c.jsx(E,{variant:"outline",onClick:()=>s(m(n)),children:"Clear local feedback"})]})}const I={title:"Patterns/AI/Response Feedback",component:T,tags:["autodocs"],args:{scope:i.enum.recipe_formulation_advisor,selected:"none",pending:!1},argTypes:{scope:{control:"select",options:[i.enum.recipe_formulation_advisor,i.enum.regulatory_agent,i.enum.ideas_generation_agent]},selected:{control:"inline-radio",options:["none","positive","negative"]},pending:{control:"boolean"}},parameters:{docs:{description:{component:"Actual MessageFeedback API: interactionId, feedbackType (positive/negative), scope. The component reads scoped feedback/loading from Redux, uses real translated reason options, and dispatches submit/update/delete actions. Clicking an active thumb requests deletion. A selected reason is preserved with its trailing selection treatment. This fixture uses the real reducers with isolated IDs, but Storybook has no saga middleware: selecting a reason intentionally reaches a pending state. Clear resets it locally. selected and pending are fixture seed controls, not component props. Persistence, request errors and server acknowledgement are not verified here."}}}},r={play:async({canvasElement:a,args:e})=>{const t=b(a);await g.click(t.getByRole("button",{name:"Positive feedback"})),await g.click(b(document.body).getByRole("button",{name:y(e.scope,"positive")[0].label})),await o(t.getByLabelText("Feedback request state")).toHaveTextContent("Local Redux action pending"),await o(t.getByRole("button",{name:"Positive feedback"})).toBeDisabled(),await g.click(t.getByRole("button",{name:"Clear local feedback"})),await o(t.getByRole("button",{name:"Positive feedback"})).toBeEnabled()}},d={args:{selected:"positive"},play:async({canvasElement:a})=>{const e=b(a),t=e.getByRole("button",{name:"Positive feedback"});await o(t).toHaveAttribute("aria-pressed","true"),await g.click(t),await o(e.getByLabelText("Feedback request state")).toHaveTextContent("Local Redux action pending")}},l={args:{selected:"negative"}},p={args:{pending:!0},play:async({canvasElement:a})=>{const e=b(a);await o(e.getByRole("button",{name:"Positive feedback"})).toBeDisabled(),await o(e.getByRole("button",{name:"Negative feedback"})).toBeDisabled()}},u={args:{scope:i.enum.regulatory_agent}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    selected: "negative"
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    scope: WebSocketScopeSchema.enum.regulatory_agent
  }
}`,...u.parameters?.docs?.source}}};const j=["Playground","PositiveSelection","NegativeSelection","Pending","RegulatoryReasons"];export{l as NegativeSelection,p as Pending,r as Playground,d as PositiveSelection,u as RegulatoryReasons,j as __namedExportsOrder,I as default};
