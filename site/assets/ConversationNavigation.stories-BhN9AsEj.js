import{a as u,j as o}from"./iframe-BXubdNpd.js";import{C as l,a as d}from"./CreateNewChatButton-DAJdEEFl.js";import"./preload-helper-PPVm8Dsz.js";import"./button-DOg3bB7T.js";import"./index-DKWiT4Fi.js";import"./loader-circle-WJxMtqtu.js";import"./dropdown-menu-DwRzzotf.js";import"./menu-B8QO56XI.js";import"./CompositeItem-CBKa8E3y.js";import"./useCompositeItem-Bi8YYZ7L.js";import"./Separator-DI4aBzER.js";import"./chevron-right-Bt7v18gP.js";import"./circle-COTDYbAV.js";import"./tooltip-core-CGhIyYC9.js";import"./use-text-truncation-HniOEG3M.js";import"./input-BWeqiJDe.js";import"./trackPosthogEvent-CBk16WCm.js";import"./buildNoteSnapshot-aeprJUOL.js";import"./jspdf.es.min-CfZc37Z0.js";import"./marked.esm-B5D8JARp.js";import"./downloadIdea-C5QCInBl.js";import"./types-BtVgDmVp.js";import"./table-cell-sizing-CT2Y4_1Z.js";import"./SaveAsNoteDialog-C-EXi6fS.js";import"./label-B-ScEoCq.js";import"./dialog-Gbr7wu8m.js";import"./overlay-dialog-CQZe9RQv.js";import"./use-api-xoGr-U7J.js";import"./jsonApiHandler-4nyzgRht.js";import"./request-TLnfbZnK.js";import"./use-permissions-CoEJ2R_X.js";import"./createQuickFeedback-8u36rtbp.js";import"./apiUrl-o8N8i6mn.js";import"./use-current-formula-project-Dt61JhWa.js";import"./use-current-module-DLuqhIl3.js";import"./copy-CI5Px4Dq.js";import"./pencil-yy7xBAIJ.js";import"./download-Bw2ymobo.js";import"./notebook-pen-rQeBqWVa.js";import"./aiAssistant.selectors-DeXBL1Y1.js";import"./proxy-ai-qmhPwT9V.js";import"./SidebarSection-BcPh9Ke7.js";import"./ExpandableTextTrigger-CaPE-zBF.js";import"./ellipsis-LPZ0y5bO.js";import"./plus-BS0_boJY.js";import"./collapsible-BboTV2_X.js";import"./useCollapsiblePanel-C5JKJn3w.js";import"./search-field-DLF5WVFc.js";import"./index.module-B6UitgKw.js";import"./checkbox-R9lg0Zy-.js";import"./minus-BU5OS2V8.js";import"./useAriaLabelledBy-Dlr4qUIQ.js";import"./separator-BKKMk4Xo.js";import"./sheet-C-ICznI3.js";import"./skeleton-BP5S_qG6.js";import"./panel-left-C46OxOcL.js";import"./link-CkdKlHel.js";import"./GradientButton-KU-jgc31.js";import"./input-field-DuMzWZ-u.js";import"./number-field-BX-ukorA.js";import"./GradientIcon-Bb0JhmPS.js";import"./InfoAlert-Hu-KbKIZ.js";import"./circle-x-Dpw0IbmW.js";import"./circle-check-big-Di0Hj0Q7.js";import"./triangle-alert-BGpQ_lRK.js";import"./info-CdrzFsvH.js";import"./EmptyState-DCD9wIrq.js";import"./StatusIndicator-Cx5rgCHr.js";import"./QuickActionCard-BETlFEdB.js";import"./badge-C4iUsAGF.js";import"./use-route-formula-PJsh9E4e.js";const{expect:p,userEvent:e,within:m}=__STORYBOOK_MODULE_TEST__;function v(){const a=u(t=>t.aiAssistant.conversation.recipe_formulation_advisor);return o.jsxs("div",{className:"pf-story-ai-assistant-conversation-navigation-frame",children:[o.jsxs("div",{className:"pf-story-ai-assistant-conversation-navigation-header",children:[o.jsx(d,{}),o.jsx(l,{})]}),o.jsx("output",{"aria-label":"Conversation state",children:a.id?"Existing conversation":"Fresh conversation"})]})}const h={aiAssistant:{assistantScope:"recipe_formulation_advisor",conversation:{recipe_formulation_advisor:{id:"chat-local",title:"Oat drink exploration",messageHistory:[]}}}},Ot={title:"Patterns/AI/Conversation navigation",component:v,subcomponents:{ConversationTitle:d,CreateNewChatButton:l},tags:["autodocs"],parameters:{store:{preloadedState:h},docs:{description:{component:`These real Redux-connected controls navigate the current scoped conversation. ConversationTitle derives the title from the active conversation/history item and opens rename, copy ID, download and save-note actions. CreateNewChatButton is disabled without an active scope and existing conversation; it resets the target scope with the production compound actions. Regulatory preserves current-recipe context, and Ideas clears its selected/generated idea context.

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
