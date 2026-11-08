import{a as u,j as o}from"./iframe-AqpYXns4.js";import{a as l,C as d}from"./CreateNewChatButton-dQKWd-a7.js";import"./preload-helper-PPVm8Dsz.js";import"./button-B5FjjXWS.js";import"./index-DEXj3--c.js";import"./loader-circle-mWFWE2W9.js";import"./dropdown-menu-qZhg1f8R.js";import"./menu-DaKubz4c.js";import"./CompositeItem-D1wyjQOR.js";import"./useCompositeItem-QlszIeBN.js";import"./Separator-DssPvI5G.js";import"./chevron-right-B3hyZT-D.js";import"./circle-Dg6ojZlj.js";import"./tooltip-core-B2gr90Lt.js";import"./use-text-truncation-DJQMBD6R.js";import"./input-DLCq6ZzS.js";import"./trackPosthogEvent-D3YuMJXm.js";import"./buildNoteSnapshot-DtXgh_Pw.js";import"./jspdf.es.min-B2j8n_hT.js";import"./marked.esm-B5D8JARp.js";import"./downloadIdea-D98ymEgc.js";import"./types-BtVgDmVp.js";import"./table-cell-sizing-C0yGB5Oh.js";import"./SaveAsNoteDialog-K9FTmQoU.js";import"./label-1kzVJgIY.js";import"./dialog-DnXWbC45.js";import"./overlay-dialog-aVFq0bEi.js";import"./use-api-DWwVMkDM.js";import"./jsonApiHandler-Dm7XqYVj.js";import"./request-CjBGnTdg.js";import"./use-permissions-BnpTYHzZ.js";import"./createQuickFeedback-Bo7E3tju.js";import"./apiUrl-CtX1NveE.js";import"./use-current-formula-project-Do8ss-fi.js";import"./use-current-module-hqtS5qxe.js";import"./copy-v1dQLDSi.js";import"./pencil-RUyFOvPb.js";import"./download-BxptYOlw.js";import"./notebook-pen-BF5oIrRw.js";import"./aiAssistant.selectors-DhBhezDt.js";import"./proxy-ai-B3foHNVL.js";import"./SidebarSection-jtR6GPtn.js";import"./collapsible-DZyMQ3Bu.js";import"./useCollapsiblePanel-DOTGH3aY.js";import"./plus-DzP923hm.js";import"./separator-C7Zm_6nS.js";import"./sheet-dNUUpp2U.js";import"./skeleton-C_SNY4zC.js";import"./panel-left-B2yi0UBt.js";import"./link-DDXehOCU.js";import"./GradientButton-BAnbENHo.js";import"./input-field-BL2Hx9MY.js";import"./number-field-DZ29WMCg.js";import"./GradientIcon-CfoM2wBY.js";import"./InfoAlert-C6GU9og2.js";import"./circle-x-DP398tgS.js";import"./circle-check-big-ezdSO-Al.js";import"./triangle-alert-DPRF-sLk.js";import"./info-w0-6ezG6.js";import"./EmptyState-W0H3wZQQ.js";import"./StatusIndicator-DrNvs6i-.js";import"./QuickActionCard-CS01mYDf.js";import"./badge-CQKobhLs.js";import"./use-route-formula-r5EtVElG.js";const{expect:p,userEvent:e,within:m}=__STORYBOOK_MODULE_TEST__;function v(){const a=u(t=>t.aiAssistant.conversation.recipe_formulation_advisor);return o.jsxs("div",{className:"pf-story-ai-assistant-conversation-navigation-frame",children:[o.jsxs("div",{className:"pf-story-ai-assistant-conversation-navigation-header",children:[o.jsx(d,{}),o.jsx(l,{})]}),o.jsx("output",{"aria-label":"Conversation state",children:a.id?"Existing conversation":"Fresh conversation"})]})}const h={aiAssistant:{assistantScope:"recipe_formulation_advisor",conversation:{recipe_formulation_advisor:{id:"chat-local",title:"Oat drink exploration",messageHistory:[]}}}},_t={title:"Patterns/AI/Conversation navigation",component:v,subcomponents:{ConversationTitle:d,CreateNewChatButton:l},tags:["autodocs"],parameters:{store:{preloadedState:h},docs:{description:{component:`These real Redux-connected controls navigate the current scoped conversation. ConversationTitle derives the title from the active conversation/history item and opens rename, copy ID, download and save-note actions. CreateNewChatButton is disabled without an active scope and existing conversation; it resets the target scope with the production compound actions. Regulatory preserves current-recipe context, and Ideas clears its selected/generated idea context.

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
}`,...c.parameters?.docs?.source}}};const Tt=["Playground","NewChat","RenameCancel","Fresh","Anatomy"];export{c as Anatomy,s as Fresh,r as NewChat,n as Playground,i as RenameCancel,Tt as __namedExportsOrder,_t as default};
