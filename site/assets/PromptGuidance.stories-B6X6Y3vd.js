import{j as o,r as f}from"./iframe-nhB53rPD.js";import{B as v}from"./button-_tcBhp5_.js";import{P as u}from"./PromptGuidePopUp-DHtTLbhF.js";import{R as g,I as h,F as y}from"./RegulatoryPlaybook-ws7pP0J1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8Dbc_Jva.js";import"./loader-circle-MxHlgpxw.js";import"./proxy-ai-o-RopWUa.js";import"./chevron-right-CavErG_J.js";import"./overlay-dialog-Co5KED9w.js";import"./SidebarSection-BvXTZEYC.js";import"./collapsible-pI4oVkh3.js";import"./useCollapsiblePanel-DVMF6qnG.js";import"./plus-0cDzJ2QO.js";import"./dropdown-menu-6QYTqNVQ.js";import"./menu-DyIs6xZo.js";import"./CompositeItem-D_8UuHC1.js";import"./useCompositeItem-BquT0LDd.js";import"./Separator-RhxJSB-Q.js";import"./circle-Byfpv97O.js";import"./input-CAdeD_xm.js";import"./separator-Dmg9cS_7.js";import"./sheet-L7clkwH-.js";import"./skeleton-CMUv0H3w.js";import"./panel-left-Bz3AW4zy.js";import"./link-BzrwOGkM.js";import"./GradientButton-Cf-GSuXl.js";import"./input-field-CqPzWEoF.js";import"./number-field-DCKprIQw.js";import"./GradientIcon-DZGaPdQM.js";import"./InfoAlert-BZotkcbw.js";import"./circle-x-DQ_R-m_A.js";import"./circle-check-big-Cp3rUY4Q.js";import"./triangle-alert-XMA8UGNQ.js";import"./info-BBafOREX.js";import"./EmptyState-DcYSBPq3.js";import"./StatusIndicator-Cxavf1go.js";import"./QuickActionCard-DRfpLGIV.js";import"./badge-DF9-aVgV.js";import"./sparkle-fjey4UQG.js";import"./accordion-B67wbHOw.js";import"./accordion-CHExsbqI.js";import"./roving-focus-0SK5-Aqb.js";import"./form-DNc3UjHH.js";import"./label-CIA21tYv.js";import"./sonner-C2ESV_mI.js";import"./icons-Byc42f6x.js";const{expect:d,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__;function b({guide:t}){const[e,a]=f.useState(!1);return o.jsxs("div",{className:"pf-story-ai-assistant-prompt-guidance-frame",children:[o.jsx(v,{onClick:()=>a(!0),children:"Open guidance"}),o.jsx("output",{className:"pf-story-ai-assistant-prompt-guidance-trigger-offset","aria-label":"Guidance state",children:e?"Open":"Closed"}),t==="prompt"&&o.jsx(u,{open:e,onOpenChange:a}),t==="formulation"&&o.jsx(y,{open:e,onOpenChange:a}),t==="ideas"&&o.jsx(h,{open:e,onOpenChange:a}),t==="regulatory"&&o.jsx(g,{open:e,onOpenChange:a})]})}const ge={title:"Patterns/AI/Prompt guidance",component:b,subcomponents:{PromptGuidePopUp:u,FormulationPlaybook:y,IdeasPlaybook:h,RegulatoryPlaybook:g},tags:["autodocs"],args:{guide:"prompt"},argTypes:{guide:{control:"inline-radio",options:["prompt","formulation","ideas","regulatory"]}},parameters:{layout:"fullscreen",docs:{description:{component:["The existing prompt guide and three playbooks render their actual translated content and shared ModalPanel. Choose the guide, then open it. These are contextual help surfaces for composing a request; no prompt is submitted and no assistant service is called.",`### API and composition
Each source accepts controlled open and onOpenChange. The host owns visibility and placement. The surrounding relative frame only supplies the same positioning context these absolute panels expect in the chat. Prompt guidance is a static role/task/context/reasoning/output/conditions reference; the playbooks use their real accordions, with Formulation initially opening Start here. Their different authored content is retained, not rewritten as story data.`,`### Interaction boundaries
The footer Close action calls onOpenChange(false); playbooks also close from their outer backdrop while the panel stops click propagation. ModalPanel now uses the shared Base UI dialog semantics for focus trapping, Escape and restoration, while retaining the existing panel position and backdrop ownership. Its icon close is named. The named footer Close action is exercised below. Formulation's copy-prompt actions depend on browser clipboard permission and are not exercised here.`].join(`

`)}}}},m=async({canvasElement:t})=>{const e=x(t);await n.click(e.getByRole("button",{name:"Open guidance"})),await d(e.getByLabelText("Guidance state")).toHaveTextContent("Open"),await n.click(e.getAllByRole("button",{name:"Close"}).slice(-1)[0]),await d(e.getByLabelText("Guidance state")).toHaveTextContent("Closed")},r={},s={play:m},i={args:{guide:"formulation"},play:m},c={args:{guide:"ideas"},play:async({canvasElement:t})=>{const e=x(t);await n.click(e.getByRole("button",{name:"Open guidance"}));const a=e.getByRole("button",{name:"Ideas Assistant"});await n.click(a),await d(a).toHaveAttribute("aria-expanded","true"),await d(e.getByText("Try asking:")).toBeVisible(),await n.click(e.getAllByRole("button",{name:"Close"}).slice(-1)[0])}},p={args:{guide:"regulatory"},play:m},l={render:t=>o.jsxs("div",{children:[o.jsxs("ol",{children:[o.jsx("li",{children:"The host trigger owns controlled visibility."}),o.jsx("li",{children:"ModalPanel supplies the dialog title, named icon close, focus containment and Escape restoration."}),o.jsx("li",{children:"The authored guidance content retains its original accordions and copy-prompt actions."}),o.jsx("li",{children:"The footer provides a persistent Close action."})]}),o.jsx(b,{...t})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  play: openAndClose
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    guide: "formulation"
  },
  play: openAndClose
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    guide: "ideas"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Open guidance"
    }));
    const accordion = canvas.getByRole("button", {
      name: "Ideas Assistant"
    });
    await userEvent.click(accordion);
    await expect(accordion).toHaveAttribute("aria-expanded", "true");
    await expect(canvas.getByText("Try asking:")).toBeVisible();
    await userEvent.click(canvas.getAllByRole("button", {
      name: "Close"
    }).slice(-1)[0]);
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    guide: "regulatory"
  },
  play: openAndClose
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div>
      <ol>
        <li>The host trigger owns controlled visibility.</li>
        <li>
          ModalPanel supplies the dialog title, named icon close, focus
          containment and Escape restoration.
        </li>
        <li>
          The authored guidance content retains its original accordions and
          copy-prompt actions.
        </li>
        <li>The footer provides a persistent Close action.</li>
      </ol>
      <PromptGuidanceExample {...args} />
    </div>
}`,...l.parameters?.docs?.source}}};const he=["Playground","OpenAndClose","Formulation","Ideas","Regulatory","Anatomy"];export{l as Anatomy,i as Formulation,c as Ideas,s as OpenAndClose,r as Playground,p as Regulatory,he as __namedExportsOrder,ge as default};
