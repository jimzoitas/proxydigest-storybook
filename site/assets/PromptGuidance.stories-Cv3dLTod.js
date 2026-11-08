import{j as o,r as f}from"./iframe-6uZ_OvXJ.js";import{B as v}from"./button-A8HzViyP.js";import{P as u}from"./PromptGuidePopUp-BEM89YN_.js";import{R as g,I as h,F as y}from"./RegulatoryPlaybook-sI3Fp6B9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BIEDR5QJ.js";import"./loader-circle-DPzNQWfU.js";import"./proxy-ai-CS5Wnpgd.js";import"./chevron-right-DQAu3Wv6.js";import"./overlay-dialog-_C1niahL.js";import"./SidebarSection-texb4wwO.js";import"./dropdown-menu-CH01PJiV.js";import"./menu-BB0nZVv8.js";import"./CompositeItem-DiKjTF7g.js";import"./useCompositeItem-CEgqY0th.js";import"./Separator-UJ0jSiK3.js";import"./circle-BOSVkkPm.js";import"./ExpandableTextTrigger-CtaP99rt.js";import"./ellipsis-BdoQ7bBK.js";import"./plus-CjxSM-tB.js";import"./collapsible-D5z7BIl8.js";import"./useCollapsiblePanel-CEEvXl-2.js";import"./search-field-BYGbCLxi.js";import"./input-xqFXePlz.js";import"./index.module-Db1hQFPV.js";import"./checkbox-CzlPmnCo.js";import"./minus-CKlNa8RO.js";import"./useAriaLabelledBy-BKgySVsG.js";import"./dialog-DnvpmbSS.js";import"./separator-CkvihxIh.js";import"./sheet-024fQP7m.js";import"./skeleton-Bu9j_NfJ.js";import"./panel-left-CatA2Q48.js";import"./link-NVJJzIw5.js";import"./GradientButton-DYiJN-S0.js";import"./input-field-B_Y4AWYp.js";import"./number-field-Ru33oSuc.js";import"./GradientIcon-BcoxLprl.js";import"./InfoAlert-jeYOeLpI.js";import"./circle-x-BOcBs_hd.js";import"./circle-check-big-BhjVcHh1.js";import"./triangle-alert-B_zFvblH.js";import"./info-BfHyHFxU.js";import"./EmptyState-CE5-KyxB.js";import"./StatusIndicator-ENElgtKP.js";import"./QuickActionCard-BQt3A_CC.js";import"./badge-BfEYvfQV.js";import"./sparkle-d-08Tc3F.js";import"./accordion-COmVAh8t.js";import"./accordion-DuKcutha.js";import"./roving-focus-0SK5-Aqb.js";import"./form-DEF3hMXI.js";import"./label-ccPiVmVc.js";import"./sonner-CZxmX36P.js";import"./icons-C5dxDifF.js";const{expect:m,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__;function b({guide:t}){const[e,a]=f.useState(!1);return o.jsxs("div",{className:"pf-story-ai-assistant-prompt-guidance-frame",children:[o.jsx(v,{onClick:()=>a(!0),children:"Open guidance"}),o.jsx("output",{className:"pf-story-ai-assistant-prompt-guidance-trigger-offset","aria-label":"Guidance state",children:e?"Open":"Closed"}),t==="prompt"&&o.jsx(u,{open:e,onOpenChange:a}),t==="formulation"&&o.jsx(y,{open:e,onOpenChange:a}),t==="ideas"&&o.jsx(h,{open:e,onOpenChange:a}),t==="regulatory"&&o.jsx(g,{open:e,onOpenChange:a})]})}const Ce={title:"Patterns/AI/Prompt guidance",component:b,subcomponents:{PromptGuidePopUp:u,FormulationPlaybook:y,IdeasPlaybook:h,RegulatoryPlaybook:g},tags:["autodocs"],args:{guide:"prompt"},argTypes:{guide:{control:"inline-radio",options:["prompt","formulation","ideas","regulatory"]}},parameters:{layout:"fullscreen",docs:{description:{component:["The existing prompt guide and three playbooks render their actual translated content and shared ModalPanel. Choose the guide, then open it. These are contextual help surfaces for composing a request; no prompt is submitted and no assistant service is called.",`### API and composition
Each source accepts controlled open and onOpenChange. The host owns visibility and placement. The surrounding relative frame only supplies the same positioning context these absolute panels expect in the chat. Prompt guidance is a static role/task/context/reasoning/output/conditions reference; the playbooks use their real accordions, with Formulation initially opening Start here. Their different authored content is retained, not rewritten as story data.`,`### Interaction boundaries
The footer Close action calls onOpenChange(false); playbooks also close from their outer backdrop while the panel stops click propagation. ModalPanel now uses the shared Base UI dialog semantics for focus trapping, Escape and restoration, while retaining the existing panel position and backdrop ownership. Its icon close is named. The named footer Close action is exercised below. Formulation's copy-prompt actions depend on browser clipboard permission and are not exercised here.`].join(`

`)}}}},d=async({canvasElement:t})=>{const e=x(t);await n.click(e.getByRole("button",{name:"Open guidance"})),await m(e.getByLabelText("Guidance state")).toHaveTextContent("Open"),await n.click(e.getAllByRole("button",{name:"Close"}).slice(-1)[0]),await m(e.getByLabelText("Guidance state")).toHaveTextContent("Closed")},r={},i={play:d},s={args:{guide:"formulation"},play:d},p={args:{guide:"ideas"},play:async({canvasElement:t})=>{const e=x(t);await n.click(e.getByRole("button",{name:"Open guidance"}));const a=e.getByRole("button",{name:"Ideas Assistant"});await n.click(a),await m(a).toHaveAttribute("aria-expanded","true"),await m(e.getByText("Try asking:")).toBeVisible(),await n.click(e.getAllByRole("button",{name:"Close"}).slice(-1)[0])}},c={args:{guide:"regulatory"},play:d},l={render:t=>o.jsxs("div",{children:[o.jsxs("ol",{children:[o.jsx("li",{children:"The host trigger owns controlled visibility."}),o.jsx("li",{children:"ModalPanel supplies the dialog title, named icon close, focus containment and Escape restoration."}),o.jsx("li",{children:"The authored guidance content retains its original accordions and copy-prompt actions."}),o.jsx("li",{children:"The footer provides a persistent Close action."})]}),o.jsx(b,{...t})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  play: openAndClose
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    guide: "formulation"
  },
  play: openAndClose
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    guide: "regulatory"
  },
  play: openAndClose
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const Te=["Playground","OpenAndClose","Formulation","Ideas","Regulatory","Anatomy"];export{l as Anatomy,s as Formulation,p as Ideas,i as OpenAndClose,r as Playground,c as Regulatory,Te as __namedExportsOrder,Ce as default};
