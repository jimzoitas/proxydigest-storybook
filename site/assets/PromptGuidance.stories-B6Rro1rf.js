import{j as e,r as O}from"./iframe-DgvZnKtv.js";import{B as C}from"./button-CEcYiQdY.js";import{P as y}from"./PromptGuidePopUp-DzWA-3eX.js";import{R as x,I as f,F as b}from"./RegulatoryPlaybook-CIANOhpo.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWlKOsdO.js";import"./loader-circle-BsZrs7F6.js";import"./composed-typography-BeKxRqyR.js";import"./proxy-ai-NSDrGgNE.js";import"./chevron-right-B8SZue5v.js";import"./overlay-dialog-i6vPmHIw.js";import"./SidebarSection-BohYk_Y-.js";import"./dropdown-menu-CuN8-u21.js";import"./menu-BIxLiaY6.js";import"./CompositeItem-qKQIJE0X.js";import"./useCompositeItem-Dr13hnqh.js";import"./Separator-BKJ0ZhJM.js";import"./circle-CwHZP-HG.js";import"./ExpandableTextTrigger-Bw1577uH.js";import"./ellipsis-DdwwDVLo.js";import"./plus-BMpb-JrX.js";import"./collapsible-BPKkR0Kq.js";import"./useCollapsiblePanel-jjkiJ8Ha.js";import"./search-field-CzWqD7iz.js";import"./input-DTWVrd6t.js";import"./index.module-C-pw7-ZN.js";import"./checkbox-CCvRjg_n.js";import"./minus-0s0hIbe7.js";import"./useAriaLabelledBy-C2v0UWUV.js";import"./dialog-BGED6ss2.js";import"./separator-DZKac5zi.js";import"./sheet-BSYc4zIC.js";import"./skeleton-DwZsbo-S.js";import"./panel-left-D88YpPbL.js";import"./link-eK7RklLn.js";import"./GradientButton-Di_WK0D1.js";import"./input-field-D1k4gXrr.js";import"./number-field-BuEna-S2.js";import"./GradientIcon-Bt266YZo.js";import"./InfoAlert-D7bONhIx.js";import"./circle-x-1SpwuOPE.js";import"./circle-check-big-Dbn0EK-V.js";import"./triangle-alert-DoEEEFIM.js";import"./info-HwFtBdFw.js";import"./EmptyState-DqGHQ3U-.js";import"./StatusIndicator-CvY3R4FY.js";import"./QuickActionCard-Y4uBCWf1.js";import"./badge-C-Jji8Kx.js";import"./sparkle-FoMeVH5k.js";import"./composed-trigger-B1u4J_6A.js";import"./accordion-BRTC14md.js";import"./accordion-mjjl12TU.js";import"./roving-focus-0SK5-Aqb.js";import"./form-W1-tqjJc.js";import"./label-CPJsvsW3.js";import"./sonner-DxnW1Ch1.js";import"./icons-DxBitv7E.js";const{expect:g,userEvent:i,within:v}=__STORYBOOK_MODULE_TEST__;function w({guide:t,initialOpen:o=!1}){const[a,n]=O.useState(o);return e.jsxs("div",{className:"pf-story-ai-assistant-prompt-guidance-frame",children:[e.jsx(C,{onClick:()=>n(!0),children:"Open guidance"}),e.jsx("output",{className:"pf-story-ai-assistant-prompt-guidance-trigger-offset","aria-label":"Guidance state",children:a?"Open":"Closed"}),t==="prompt"&&e.jsx(y,{open:a,onOpenChange:n}),t==="formulation"&&e.jsx(b,{open:a,onOpenChange:n}),t==="ideas"&&e.jsx(f,{open:a,onOpenChange:n}),t==="regulatory"&&e.jsx(x,{open:a,onOpenChange:n})]})}const Be={title:"Patterns/AI/Prompt guidance",component:w,subcomponents:{PromptGuidePopUp:y,FormulationPlaybook:b,IdeasPlaybook:f,RegulatoryPlaybook:x},tags:["autodocs"],args:{guide:"prompt"},argTypes:{guide:{control:"inline-radio",options:["prompt","formulation","ideas","regulatory"]}},parameters:{layout:"fullscreen",docs:{description:{component:["The existing prompt guide and three playbooks render their actual translated content and shared ModalPanel. Choose the guide, then open it. These are contextual help surfaces for composing a request; no prompt is submitted and no assistant service is called.",`### API and composition
Each source accepts controlled open and onOpenChange. The host owns visibility and placement. The surrounding relative frame only supplies the same positioning context these absolute panels expect in the chat. Prompt guidance is a static role/task/context/reasoning/output/conditions reference; the playbooks use their real accordions, with Formulation initially opening Start here. Their different authored content is retained, not rewritten as story data.`,`### Interaction boundaries
The footer Close action calls onOpenChange(false); playbooks also close from their outer backdrop while the panel stops click propagation. ModalPanel now uses the shared Base UI dialog semantics for focus trapping, Escape and restoration, while retaining the existing panel position and backdrop ownership. Its icon close is named. The named footer Close action is exercised below. Formulation's copy-prompt actions depend on browser clipboard permission and are not exercised here.`].join(`

`)}}}},h=async({canvasElement:t})=>{const o=v(t);await i.click(o.getByRole("button",{name:"Open guidance"})),await g(o.getByLabelText("Guidance state")).toHaveTextContent("Open"),await i.click(o.getAllByRole("button",{name:"Close"}).slice(-1)[0]),await g(o.getByLabelText("Guidance state")).toHaveTextContent("Closed")},s={},p={play:h},c={args:{guide:"formulation"},play:h},l={args:{guide:"ideas"},play:async({canvasElement:t})=>{const o=v(t);await i.click(o.getByRole("button",{name:"Open guidance"}));const a=o.getByRole("button",{name:"Ideas Assistant"});await i.click(a),await g(a).toHaveAttribute("aria-expanded","true"),await g(o.getByText("Try asking:")).toBeVisible(),await i.click(o.getAllByRole("button",{name:"Close"}).slice(-1)[0])}},m={args:{guide:"regulatory"},play:h},d={render:t=>e.jsxs("div",{children:[e.jsxs("ol",{children:[e.jsx("li",{children:"The host trigger owns controlled visibility."}),e.jsx("li",{children:"ModalPanel supplies the dialog title, named icon close, focus containment and Escape restoration."}),e.jsx("li",{children:"The authored guidance content retains its original accordions and copy-prompt actions."}),e.jsx("li",{children:"The footer provides a persistent Close action."})]}),e.jsx(w,{...t})]})},r={args:{initialOpen:!0}},u={args:{initialOpen:!0,guide:"formulation"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  play: openAndClose
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    guide: "formulation"
  },
  play: openAndClose
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    guide: "regulatory"
  },
  play: openAndClose
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    initialOpen: true
  }
}`,...r.parameters?.docs?.source},description:{story:"Anatomy renders the actual controlled panel, without a synthetic screenshot or authored play.",...r.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    initialOpen: true,
    guide: "formulation"
  }
}`,...u.parameters?.docs?.source}}};const Pe=["Playground","OpenAndClose","Formulation","Ideas","Regulatory","Anatomy","AnatomyOpen","AnatomyFormulation"];export{d as Anatomy,u as AnatomyFormulation,r as AnatomyOpen,c as Formulation,l as Ideas,p as OpenAndClose,s as Playground,m as Regulatory,Pe as __namedExportsOrder,Be as default};
