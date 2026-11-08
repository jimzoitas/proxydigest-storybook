import{j as o,r as f}from"./iframe-BXubdNpd.js";import{B as v}from"./button-DOg3bB7T.js";import{P as u}from"./PromptGuidePopUp-BQ8eI4Ew.js";import{R as g,I as h,F as y}from"./RegulatoryPlaybook-CrHYI0yS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DKWiT4Fi.js";import"./loader-circle-WJxMtqtu.js";import"./proxy-ai-qmhPwT9V.js";import"./chevron-right-Bt7v18gP.js";import"./overlay-dialog-CQZe9RQv.js";import"./SidebarSection-BcPh9Ke7.js";import"./dropdown-menu-DwRzzotf.js";import"./menu-B8QO56XI.js";import"./CompositeItem-CBKa8E3y.js";import"./useCompositeItem-Bi8YYZ7L.js";import"./Separator-DI4aBzER.js";import"./circle-COTDYbAV.js";import"./ExpandableTextTrigger-CaPE-zBF.js";import"./ellipsis-LPZ0y5bO.js";import"./plus-BS0_boJY.js";import"./collapsible-BboTV2_X.js";import"./useCollapsiblePanel-C5JKJn3w.js";import"./search-field-DLF5WVFc.js";import"./input-BWeqiJDe.js";import"./index.module-B6UitgKw.js";import"./checkbox-R9lg0Zy-.js";import"./minus-BU5OS2V8.js";import"./useAriaLabelledBy-Dlr4qUIQ.js";import"./dialog-Gbr7wu8m.js";import"./separator-BKKMk4Xo.js";import"./sheet-C-ICznI3.js";import"./skeleton-BP5S_qG6.js";import"./panel-left-C46OxOcL.js";import"./link-CkdKlHel.js";import"./GradientButton-KU-jgc31.js";import"./input-field-DuMzWZ-u.js";import"./number-field-BX-ukorA.js";import"./GradientIcon-Bb0JhmPS.js";import"./InfoAlert-Hu-KbKIZ.js";import"./circle-x-Dpw0IbmW.js";import"./circle-check-big-Di0Hj0Q7.js";import"./triangle-alert-BGpQ_lRK.js";import"./info-CdrzFsvH.js";import"./EmptyState-DCD9wIrq.js";import"./StatusIndicator-Cx5rgCHr.js";import"./QuickActionCard-BETlFEdB.js";import"./badge-C4iUsAGF.js";import"./sparkle-v24urpwX.js";import"./accordion-CFT7Mw6-.js";import"./accordion-B-A_a53W.js";import"./roving-focus-0SK5-Aqb.js";import"./form-CNzkM0u6.js";import"./label-B-ScEoCq.js";import"./sonner-DorDIDGc.js";import"./icons-B9RA1GX8.js";const{expect:m,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__;function b({guide:t}){const[e,a]=f.useState(!1);return o.jsxs("div",{className:"pf-story-ai-assistant-prompt-guidance-frame",children:[o.jsx(v,{onClick:()=>a(!0),children:"Open guidance"}),o.jsx("output",{className:"pf-story-ai-assistant-prompt-guidance-trigger-offset","aria-label":"Guidance state",children:e?"Open":"Closed"}),t==="prompt"&&o.jsx(u,{open:e,onOpenChange:a}),t==="formulation"&&o.jsx(y,{open:e,onOpenChange:a}),t==="ideas"&&o.jsx(h,{open:e,onOpenChange:a}),t==="regulatory"&&o.jsx(g,{open:e,onOpenChange:a})]})}const Ce={title:"Patterns/AI/Prompt guidance",component:b,subcomponents:{PromptGuidePopUp:u,FormulationPlaybook:y,IdeasPlaybook:h,RegulatoryPlaybook:g},tags:["autodocs"],args:{guide:"prompt"},argTypes:{guide:{control:"inline-radio",options:["prompt","formulation","ideas","regulatory"]}},parameters:{layout:"fullscreen",docs:{description:{component:["The existing prompt guide and three playbooks render their actual translated content and shared ModalPanel. Choose the guide, then open it. These are contextual help surfaces for composing a request; no prompt is submitted and no assistant service is called.",`### API and composition
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
