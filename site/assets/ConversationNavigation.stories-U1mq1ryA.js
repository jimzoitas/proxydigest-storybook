import{a as u,j as o}from"./iframe-DgvZnKtv.js";import{C as l,a as d}from"./CreateNewChatButton-CGR505Lq.js";import"./preload-helper-PPVm8Dsz.js";import"./button-CEcYiQdY.js";import"./index-BWlKOsdO.js";import"./loader-circle-BsZrs7F6.js";import"./dropdown-menu-CuN8-u21.js";import"./menu-BIxLiaY6.js";import"./CompositeItem-qKQIJE0X.js";import"./useCompositeItem-Dr13hnqh.js";import"./Separator-BKJ0ZhJM.js";import"./chevron-right-B8SZue5v.js";import"./circle-CwHZP-HG.js";import"./tooltip-core-CEBHIfw_.js";import"./use-text-truncation-BBhDtax8.js";import"./input-DTWVrd6t.js";import"./trackPosthogEvent-DQYu7Eh_.js";import"./buildNoteSnapshot-C1TBG1Z5.js";import"./jspdf.es.min-BAbMmM1k.js";import"./marked.esm-B5D8JARp.js";import"./downloadIdea-D7eUGsfA.js";import"./types-BtVgDmVp.js";import"./table-cell-sizing-D_euRQfv.js";import"./SaveAsNoteDialog-BUCkWTPH.js";import"./label-CPJsvsW3.js";import"./dialog-BGED6ss2.js";import"./overlay-dialog-i6vPmHIw.js";import"./use-api-C0Z66OjA.js";import"./jsonApiHandler-0tb7Ffsv.js";import"./request-DN34u20v.js";import"./use-permissions-RIBDcgJE.js";import"./createQuickFeedback-8u36rtbp.js";import"./apiUrl-o8N8i6mn.js";import"./use-current-formula-project-BakUZZ-y.js";import"./use-current-module-CErwN2Yp.js";import"./copy-BkjpvN59.js";import"./pencil-G2jds40a.js";import"./download-D2YSvej-.js";import"./notebook-pen-CuULEEWv.js";import"./aiAssistant.selectors-p1arcQK4.js";import"./proxy-ai-NSDrGgNE.js";import"./SidebarSection-BohYk_Y-.js";import"./ExpandableTextTrigger-Bw1577uH.js";import"./ellipsis-DdwwDVLo.js";import"./plus-BMpb-JrX.js";import"./collapsible-BPKkR0Kq.js";import"./useCollapsiblePanel-jjkiJ8Ha.js";import"./search-field-CzWqD7iz.js";import"./index.module-C-pw7-ZN.js";import"./checkbox-CCvRjg_n.js";import"./minus-0s0hIbe7.js";import"./useAriaLabelledBy-C2v0UWUV.js";import"./separator-DZKac5zi.js";import"./sheet-BSYc4zIC.js";import"./skeleton-DwZsbo-S.js";import"./panel-left-D88YpPbL.js";import"./link-eK7RklLn.js";import"./GradientButton-Di_WK0D1.js";import"./input-field-D1k4gXrr.js";import"./number-field-BuEna-S2.js";import"./GradientIcon-Bt266YZo.js";import"./InfoAlert-D7bONhIx.js";import"./circle-x-1SpwuOPE.js";import"./circle-check-big-Dbn0EK-V.js";import"./triangle-alert-DoEEEFIM.js";import"./info-HwFtBdFw.js";import"./EmptyState-DqGHQ3U-.js";import"./StatusIndicator-CvY3R4FY.js";import"./QuickActionCard-Y4uBCWf1.js";import"./badge-C-Jji8Kx.js";import"./use-route-formula-Wcdielod.js";const{expect:p,userEvent:e,within:m}=__STORYBOOK_MODULE_TEST__;function v(){const a=u(t=>t.aiAssistant.conversation.recipe_formulation_advisor);return o.jsxs("div",{className:"pf-story-ai-assistant-conversation-navigation-frame",children:[o.jsxs("div",{className:"pf-story-ai-assistant-conversation-navigation-header",children:[o.jsx(d,{}),o.jsx(l,{})]}),o.jsx("output",{"aria-label":"Conversation state",children:a.id?"Existing conversation":"Fresh conversation"})]})}const h={aiAssistant:{assistantScope:"recipe_formulation_advisor",conversation:{recipe_formulation_advisor:{id:"chat-local",title:"Oat drink exploration",messageHistory:[]}}}},Ot={title:"Patterns/AI/Conversation navigation",component:v,subcomponents:{ConversationTitle:d,CreateNewChatButton:l},tags:["autodocs"],parameters:{store:{preloadedState:h},docs:{description:{component:`These real Redux-connected controls navigate the current scoped conversation. ConversationTitle derives the title from the active conversation/history item and opens rename, copy ID, download and save-note actions. CreateNewChatButton is disabled without an active scope and existing conversation; it resets the target scope with the production compound actions. Regulatory preserves current-recipe context, and Ideas clears its selected/generated idea context.

### API and ownership
Both controls use the application's store and route rather than invented props. The scenario picker selects Existing or Fresh Redux fixtures. Rename dispatches updateConversationTitle with trimmed title and conversation ID; the saga owns persistence and completion. New chat changes the actual reducer state here. Copy, downloads and save-note retain their source implementations; clipboard/file delivery and backend persistence are not implied by this fixture.

### Accessibility and anatomy
Title button → menu → optional rename field and Save/Cancel; adjacent new-chat button → fresh scoped state. Preserve menu keyboard navigation, cancellation and focus return. A title with no conversation is omitted, not replaced with dummy content. Use the real conversation host when pending-upload policies need enforcement; this button alone has no upload guard contract.`}}}},n={},r={play:async({canvasElement:a})=>{const t=m(a);await e.click(t.getByRole("button",{name:/New chat/i})),await p(t.getByLabelText("Conversation state")).toHaveTextContent("Fresh conversation"),await p(t.getByRole("button",{name:/New chat/i})).toBeDisabled()}},i={play:async({canvasElement:a})=>{const t=m(a);await e.click(t.getByRole("button",{name:"Oat drink exploration"})),await e.click(await m(document.body).findByRole("menuitem",{name:"Rename"})),await e.clear(t.getByRole("textbox")),await e.type(t.getByRole("textbox"),"Uncommitted title"),await e.click(t.getByRole("button",{name:"Cancel"})),await p(t.getByRole("button",{name:"Oat drink exploration"})).toBeVisible()}},s={parameters:{store:{preloadedState:{aiAssistant:{assistantScope:"recipe_formulation_advisor"}}}}},c={parameters:{docs:{description:{story:"The actual conversation title menu and adjacent fresh-chat action. The readout below observes the reducer and is story-only."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: /New chat/i
    }));
    await expect(canvas.getByLabelText("Conversation state")).toHaveTextContent("Fresh conversation");
    await expect(canvas.getByRole("button", {
      name: /New chat/i
    })).toBeDisabled();
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Oat drink exploration"
    }));
    await userEvent.click(await within(document.body).findByRole("menuitem", {
      name: "Rename"
    }));
    await userEvent.clear(canvas.getByRole("textbox"));
    await userEvent.type(canvas.getByRole("textbox"), "Uncommitted title");
    await userEvent.click(canvas.getByRole("button", {
      name: "Cancel"
    }));
    await expect(canvas.getByRole("button", {
      name: "Oat drink exploration"
    })).toBeVisible();
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    store: {
      preloadedState: {
        aiAssistant: {
          assistantScope: "recipe_formulation_advisor"
        }
      }
    }
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "The actual conversation title menu and adjacent fresh-chat action. The readout below observes the reducer and is story-only."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};const Ft=["Playground","NewChat","RenameCancel","Fresh","Anatomy"];export{c as Anatomy,s as Fresh,r as NewChat,n as Playground,i as RenameCancel,Ft as __namedExportsOrder,Ot as default};
