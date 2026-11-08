import{a as u,j as o}from"./iframe-6uZ_OvXJ.js";import{C as l,a as d}from"./CreateNewChatButton-C1m95H-0.js";import"./preload-helper-PPVm8Dsz.js";import"./button-A8HzViyP.js";import"./index-BIEDR5QJ.js";import"./loader-circle-DPzNQWfU.js";import"./dropdown-menu-CH01PJiV.js";import"./menu-BB0nZVv8.js";import"./CompositeItem-DiKjTF7g.js";import"./useCompositeItem-CEgqY0th.js";import"./Separator-UJ0jSiK3.js";import"./chevron-right-DQAu3Wv6.js";import"./circle-BOSVkkPm.js";import"./tooltip-core-Ddkl4sOF.js";import"./use-text-truncation-C64XvJm-.js";import"./input-xqFXePlz.js";import"./trackPosthogEvent-fthYs4K3.js";import"./buildNoteSnapshot-BKbDthV4.js";import"./jspdf.es.min-L34s-IBy.js";import"./marked.esm-B5D8JARp.js";import"./downloadIdea-2cBBT8qf.js";import"./types-BtVgDmVp.js";import"./table-cell-sizing-9Qu5gc3X.js";import"./SaveAsNoteDialog-BvWHojYK.js";import"./label-ccPiVmVc.js";import"./dialog-DnvpmbSS.js";import"./overlay-dialog-_C1niahL.js";import"./use-api-VM36FeDn.js";import"./jsonApiHandler-DHxZXfLw.js";import"./request-BbyBNZg4.js";import"./use-permissions-DhZfaxzb.js";import"./createQuickFeedback-8u36rtbp.js";import"./apiUrl-o8N8i6mn.js";import"./use-current-formula-project-QSi-_W8m.js";import"./use-current-module-CXq7_1uF.js";import"./copy-BILc6MVC.js";import"./pencil-Dx2daJ7d.js";import"./download-CFtDxXnS.js";import"./notebook-pen-x7uXq22C.js";import"./aiAssistant.selectors-CM8XrDL2.js";import"./proxy-ai-CS5Wnpgd.js";import"./SidebarSection-texb4wwO.js";import"./ExpandableTextTrigger-CtaP99rt.js";import"./ellipsis-BdoQ7bBK.js";import"./plus-CjxSM-tB.js";import"./collapsible-D5z7BIl8.js";import"./useCollapsiblePanel-CEEvXl-2.js";import"./search-field-BYGbCLxi.js";import"./index.module-Db1hQFPV.js";import"./checkbox-CzlPmnCo.js";import"./minus-CKlNa8RO.js";import"./useAriaLabelledBy-BKgySVsG.js";import"./separator-CkvihxIh.js";import"./sheet-024fQP7m.js";import"./skeleton-Bu9j_NfJ.js";import"./panel-left-CatA2Q48.js";import"./link-NVJJzIw5.js";import"./GradientButton-DYiJN-S0.js";import"./input-field-B_Y4AWYp.js";import"./number-field-Ru33oSuc.js";import"./GradientIcon-BcoxLprl.js";import"./InfoAlert-jeYOeLpI.js";import"./circle-x-BOcBs_hd.js";import"./circle-check-big-BhjVcHh1.js";import"./triangle-alert-B_zFvblH.js";import"./info-BfHyHFxU.js";import"./EmptyState-CE5-KyxB.js";import"./StatusIndicator-ENElgtKP.js";import"./QuickActionCard-BQt3A_CC.js";import"./badge-BfEYvfQV.js";import"./use-route-formula-B6ly3Buz.js";const{expect:p,userEvent:e,within:m}=__STORYBOOK_MODULE_TEST__;function v(){const a=u(t=>t.aiAssistant.conversation.recipe_formulation_advisor);return o.jsxs("div",{className:"pf-story-ai-assistant-conversation-navigation-frame",children:[o.jsxs("div",{className:"pf-story-ai-assistant-conversation-navigation-header",children:[o.jsx(d,{}),o.jsx(l,{})]}),o.jsx("output",{"aria-label":"Conversation state",children:a.id?"Existing conversation":"Fresh conversation"})]})}const h={aiAssistant:{assistantScope:"recipe_formulation_advisor",conversation:{recipe_formulation_advisor:{id:"chat-local",title:"Oat drink exploration",messageHistory:[]}}}},Ot={title:"Patterns/AI/Conversation navigation",component:v,subcomponents:{ConversationTitle:d,CreateNewChatButton:l},tags:["autodocs"],parameters:{store:{preloadedState:h},docs:{description:{component:`These real Redux-connected controls navigate the current scoped conversation. ConversationTitle derives the title from the active conversation/history item and opens rename, copy ID, download and save-note actions. CreateNewChatButton is disabled without an active scope and existing conversation; it resets the target scope with the production compound actions. Regulatory preserves current-recipe context, and Ideas clears its selected/generated idea context.

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
