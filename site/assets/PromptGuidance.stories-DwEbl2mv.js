import{j as o,r as f}from"./iframe-AqpYXns4.js";import{B as v}from"./button-B5FjjXWS.js";import{P as u}from"./PromptGuidePopUp-CpcbF3Dl.js";import{R as g,I as h,F as y}from"./RegulatoryPlaybook-D3puELF5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DEXj3--c.js";import"./loader-circle-mWFWE2W9.js";import"./proxy-ai-B3foHNVL.js";import"./chevron-right-B3hyZT-D.js";import"./overlay-dialog-aVFq0bEi.js";import"./SidebarSection-jtR6GPtn.js";import"./collapsible-DZyMQ3Bu.js";import"./useCollapsiblePanel-DOTGH3aY.js";import"./plus-DzP923hm.js";import"./dropdown-menu-qZhg1f8R.js";import"./menu-DaKubz4c.js";import"./CompositeItem-D1wyjQOR.js";import"./useCompositeItem-QlszIeBN.js";import"./Separator-DssPvI5G.js";import"./circle-Dg6ojZlj.js";import"./input-DLCq6ZzS.js";import"./separator-C7Zm_6nS.js";import"./sheet-dNUUpp2U.js";import"./skeleton-C_SNY4zC.js";import"./panel-left-B2yi0UBt.js";import"./link-DDXehOCU.js";import"./GradientButton-BAnbENHo.js";import"./input-field-BL2Hx9MY.js";import"./number-field-DZ29WMCg.js";import"./GradientIcon-CfoM2wBY.js";import"./InfoAlert-C6GU9og2.js";import"./circle-x-DP398tgS.js";import"./circle-check-big-ezdSO-Al.js";import"./triangle-alert-DPRF-sLk.js";import"./info-w0-6ezG6.js";import"./EmptyState-W0H3wZQQ.js";import"./StatusIndicator-DrNvs6i-.js";import"./QuickActionCard-CS01mYDf.js";import"./badge-CQKobhLs.js";import"./sparkle-CstBys91.js";import"./accordion-B6UeQwZ6.js";import"./accordion-0FBKGPj-.js";import"./roving-focus-0SK5-Aqb.js";import"./form-p-7CV84H.js";import"./label-1kzVJgIY.js";import"./sonner-CdS3_HUj.js";import"./icons-DOlZ42O0.js";const{expect:d,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__;function b({guide:t}){const[e,a]=f.useState(!1);return o.jsxs("div",{className:"pf-story-ai-assistant-prompt-guidance-frame",children:[o.jsx(v,{onClick:()=>a(!0),children:"Open guidance"}),o.jsx("output",{className:"pf-story-ai-assistant-prompt-guidance-trigger-offset","aria-label":"Guidance state",children:e?"Open":"Closed"}),t==="prompt"&&o.jsx(u,{open:e,onOpenChange:a}),t==="formulation"&&o.jsx(y,{open:e,onOpenChange:a}),t==="ideas"&&o.jsx(h,{open:e,onOpenChange:a}),t==="regulatory"&&o.jsx(g,{open:e,onOpenChange:a})]})}const ge={title:"Patterns/AI/Prompt guidance",component:b,subcomponents:{PromptGuidePopUp:u,FormulationPlaybook:y,IdeasPlaybook:h,RegulatoryPlaybook:g},tags:["autodocs"],args:{guide:"prompt"},argTypes:{guide:{control:"inline-radio",options:["prompt","formulation","ideas","regulatory"]}},parameters:{layout:"fullscreen",docs:{description:{component:["The existing prompt guide and three playbooks render their actual translated content and shared ModalPanel. Choose the guide, then open it. These are contextual help surfaces for composing a request; no prompt is submitted and no assistant service is called.",`### API and composition
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
