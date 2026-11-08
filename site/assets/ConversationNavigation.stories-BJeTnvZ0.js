import{a as u,j as o}from"./iframe-nhB53rPD.js";import{a as l,C as d}from"./CreateNewChatButton-sElLW2lC.js";import"./preload-helper-PPVm8Dsz.js";import"./button-_tcBhp5_.js";import"./index-8Dbc_Jva.js";import"./loader-circle-MxHlgpxw.js";import"./dropdown-menu-6QYTqNVQ.js";import"./menu-DyIs6xZo.js";import"./CompositeItem-D_8UuHC1.js";import"./useCompositeItem-BquT0LDd.js";import"./Separator-RhxJSB-Q.js";import"./chevron-right-CavErG_J.js";import"./circle-Byfpv97O.js";import"./tooltip-core-i2pf0ZTE.js";import"./use-text-truncation-D1bP39pz.js";import"./input-CAdeD_xm.js";import"./trackPosthogEvent-Zud5gl49.js";import"./buildNoteSnapshot-dAjR3cvK.js";import"./jspdf.es.min-CqjSVD7t.js";import"./marked.esm-B5D8JARp.js";import"./downloadIdea-B9q15DSw.js";import"./types-BtVgDmVp.js";import"./table-cell-sizing-PMkloevH.js";import"./SaveAsNoteDialog-D54nYj7e.js";import"./label-CIA21tYv.js";import"./dialog-CyBaw9zK.js";import"./overlay-dialog-Co5KED9w.js";import"./use-api-C38r92YH.js";import"./jsonApiHandler-C4BMoVsw.js";import"./request-CGJ4zixB.js";import"./use-permissions-4TY4C38W.js";import"./createQuickFeedback-Bo7E3tju.js";import"./apiUrl-CtX1NveE.js";import"./use-current-formula-project-DB9lTLR-.js";import"./use-current-module-Bd9xlb44.js";import"./copy-BeMWaBMA.js";import"./pencil-B9iT6ulW.js";import"./download-Bu76VvfY.js";import"./notebook-pen-BlOrtSfC.js";import"./aiAssistant.selectors-xGGE4Gfz.js";import"./proxy-ai-o-RopWUa.js";import"./SidebarSection-BvXTZEYC.js";import"./collapsible-pI4oVkh3.js";import"./useCollapsiblePanel-DVMF6qnG.js";import"./plus-0cDzJ2QO.js";import"./separator-Dmg9cS_7.js";import"./sheet-L7clkwH-.js";import"./skeleton-CMUv0H3w.js";import"./panel-left-Bz3AW4zy.js";import"./link-BzrwOGkM.js";import"./GradientButton-Cf-GSuXl.js";import"./input-field-CqPzWEoF.js";import"./number-field-DCKprIQw.js";import"./GradientIcon-DZGaPdQM.js";import"./InfoAlert-BZotkcbw.js";import"./circle-x-DQ_R-m_A.js";import"./circle-check-big-Cp3rUY4Q.js";import"./triangle-alert-XMA8UGNQ.js";import"./info-BBafOREX.js";import"./EmptyState-DcYSBPq3.js";import"./StatusIndicator-Cxavf1go.js";import"./QuickActionCard-DRfpLGIV.js";import"./badge-DF9-aVgV.js";import"./use-route-formula-XvrOgHBN.js";const{expect:p,userEvent:e,within:m}=__STORYBOOK_MODULE_TEST__;function v(){const a=u(t=>t.aiAssistant.conversation.recipe_formulation_advisor);return o.jsxs("div",{className:"pf-story-ai-assistant-conversation-navigation-frame",children:[o.jsxs("div",{className:"pf-story-ai-assistant-conversation-navigation-header",children:[o.jsx(d,{}),o.jsx(l,{})]}),o.jsx("output",{"aria-label":"Conversation state",children:a.id?"Existing conversation":"Fresh conversation"})]})}const h={aiAssistant:{assistantScope:"recipe_formulation_advisor",conversation:{recipe_formulation_advisor:{id:"chat-local",title:"Oat drink exploration",messageHistory:[]}}}},_t={title:"Patterns/AI/Conversation navigation",component:v,subcomponents:{ConversationTitle:d,CreateNewChatButton:l},tags:["autodocs"],parameters:{store:{preloadedState:h},docs:{description:{component:`These real Redux-connected controls navigate the current scoped conversation. ConversationTitle derives the title from the active conversation/history item and opens rename, copy ID, download and save-note actions. CreateNewChatButton is disabled without an active scope and existing conversation; it resets the target scope with the production compound actions. Regulatory preserves current-recipe context, and Ideas clears its selected/generated idea context.

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
