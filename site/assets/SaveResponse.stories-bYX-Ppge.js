import{h as f,O as D,H as B,K as H,a4 as k,r as R,j as l,bw as E}from"./iframe-nhB53rPD.js";/* empty css                      */import{B as T}from"./button-_tcBhp5_.js";import{T as _,Q as j}from"./apiUrl-CtX1NveE.js";import{S as C}from"./SaveRecipeModal-2yNGaIzC.js";import{S as O}from"./SaveIdeaDialog-CRKvetBg.js";import{S as P}from"./SaveAsNoteDialog-D54nYj7e.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8Dbc_Jva.js";import"./loader-circle-MxHlgpxw.js";import"./dialog-CyBaw9zK.js";import"./overlay-dialog-Co5KED9w.js";import"./separator-Dmg9cS_7.js";import"./Separator-RhxJSB-Q.js";import"./input-CAdeD_xm.js";import"./form-DNc3UjHH.js";import"./label-CIA21tYv.js";import"./sonner-C2ESV_mI.js";import"./dropdown-menu-6QYTqNVQ.js";import"./menu-DyIs6xZo.js";import"./CompositeItem-D_8UuHC1.js";import"./useCompositeItem-BquT0LDd.js";import"./chevron-right-CavErG_J.js";import"./circle-Byfpv97O.js";import"./icons-Byc42f6x.js";import"./collapsible-pI4oVkh3.js";import"./useCollapsiblePanel-DVMF6qnG.js";import"./checkbox-C9bOlqce.js";import"./minus-XaXcKlev.js";import"./useAriaLabelledBy-D8Oa7trO.js";import"./types-BtVgDmVp.js";import"./trackPosthogEvent-Zud5gl49.js";import"./aiAssistant.selectors-xGGE4Gfz.js";import"./use-api-C38r92YH.js";import"./jsonApiHandler-C4BMoVsw.js";import"./request-CGJ4zixB.js";import"./use-permissions-4TY4C38W.js";import"./createQuickFeedback-Bo7E3tju.js";const{expect:o,fn:I,userEvent:n,waitFor:q,within:a}=__STORYBOOK_MODULE_TEST__,x=I(),N=[f.get(_,()=>B.json(H([k("feedback_tag","7",{name:"Plant protein"})]))),f.post(j,async({request:t})=>{const e=await t.json();return x(e),B.json({data:k("quick_feedback","local-note-1",{name:"Saved local snapshot",text:"Local fixture"})},{status:201})})];function L(t){const[e,i]=R.useState(!1),[c,S]=R.useState("No result yet"),[b,A]=R.useState(0),r=s=>{t.onResult(s),S(JSON.stringify(s))};return l.jsxs("div",{className:"pf-story-wide-grid",children:[l.jsxs("div",{className:"pf-story-ai-assistant-save-response-actions",children:[l.jsx(T,{onClick:()=>i(!0),children:"Open save dialog"}),l.jsx(T,{variant:"outline",onClick:()=>{i(!1),A(s=>s+1),S("No result yet")},children:"Reset dialog"})]}),l.jsxs("p",{children:["Flow: ",t.flow,". Requests in this example are local fixtures; no record is written to the application."]}),l.jsx("output",{"aria-label":"Save result",children:c}),t.flow==="recipe"&&l.jsx(C,{open:e,onOpenChange:i,defaultName:t.defaultTitle,onSave:r},`recipe-${b}`),t.flow==="idea"&&l.jsx(O,{open:e,onOpenChange:i,idea:{id:"42",title:"A new oat drink",content:{summary:"A local generated idea for this example."}},defaultTitle:t.defaultTitle,onSuccess:s=>r({ideaId:s}),onNavigate:s=>r({navigateToIdea:s})},`idea-${b}`),t.flow==="note"&&l.jsx(P,{open:e,onOpenChange:i,mode:t.noteMode,snapshotText:t.snapshotText,defaultTitle:t.defaultTitle,defaultProject:t.prefillProject?{projectId:99,projectName:"Prefilled project outside this page"}:void 0,trackingContext:{conversationId:"local-conversation",scope:"recipe_formulation_advisor"},onSuccess:s=>r({noteId:s})},`note-${b}`)]})}const Se={title:"Patterns/AI/Save response",component:L,subcomponents:{SaveRecipeModal:C,SaveIdeaDialog:O,SaveAsNoteDialog:P},tags:["autodocs"],parameters:{layout:"padded",store:{preloadedState:{projects:{projectsList:[{id:"21",name:"Oat drinks",createdAt:"2026-01-01",updatedAt:"2026-01-01"}]}}},msw:{handlers:N},docs:{description:{component:["The real recipe, idea and note save dialogs share a contextual documentation page while retaining their different persistence contracts. Use the flow control to select the actual implementation; the trigger opens its controlled dialog. Default title changes follow each source contract; close/reopen or Reset dialog to reinitialize an example when needed.",`### Recipe callback contract
SaveRecipeModal accepts open, onOpenChange, defaultName and onSave({ name, projectId, navigateToRecipe }). Save trims the name, emits the optional numeric project ID and navigation choice, then closes. The host owns the actual creation and route change. The result below is that callback payload.`,`### Idea workflow boundary
SaveIdeaDialog accepts idea, defaultTitle, open/onOpenChange, onSuccess and onNavigate. It dispatches createIdea and expects the application saga to complete callbacks or the dispatchWithPromise contract. This fixture store deliberately has no sagas: saving demonstrates the actual pending state, not success or navigation. Cancel and Reset remain available. A real success/error/rejection workflow still requires the application host.`,`### Note request contract
SaveAsNoteDialog takes reply/conversation mode, a frozen snapshotText, defaultTitle, optional defaultProject, trackingContext and onSuccess. It enforces a nonempty name, the 50-character name limit and create permission, preserves a default project absent from the loaded list, and supports tag search/creation. Its real POST to quick-feedbacks and tag GET are intercepted locally; the API shape and callback are exercised without a backend. The error example retains the dialog and draft. Analytics delivery is not verified by this fixture.`,`### Accessibility and remaining limits
These are the production Radix dialogs with keyboard dismissal and controlled open state. The idea and note name inputs have persistent associated labels, including when a typed value replaces the placeholder. Project list loading uses existing Redux actions and is seeded here; remote paging and full application permissions are not simulated.`].join(`

`)}}},args:{flow:"recipe",defaultTitle:"Oat drink exploration",noteMode:"reply",prefillProject:!1,snapshotText:`## Assistant reply
A frozen local response snapshot.`,onResult:I()},argTypes:{flow:{control:"inline-radio",options:["recipe","idea","note"]},defaultTitle:{control:"text"},noteMode:{control:"inline-radio",options:["reply","conversation"]},prefillProject:{control:"boolean"},snapshotText:{control:"text"},onResult:{control:!1}}},d={},p={play:async({canvasElement:t,args:e})=>{const i=a(t);await n.click(i.getByRole("button",{name:"Open save dialog"}));const c=a(await a(document.body).findByRole("dialog",{name:"Save Generated Recipe"}));await n.clear(c.getByRole("textbox",{name:"Recipe name"})),await n.type(c.getByRole("textbox",{name:"Recipe name"}),"  Local recipe  "),await n.click(c.getByRole("checkbox",{name:"Add to project"})),await n.click(c.getByRole("combobox",{name:"Project"})),await n.click(await a(document.body).findByRole("option",{name:"Oat drinks"})),await n.click(c.getByRole("button",{name:"Save & Continue Chatting"})),await o(e.onResult).toHaveBeenCalledWith({name:"Local recipe",projectId:21,navigateToRecipe:!1}),await o(a(document.body).queryByRole("dialog")).not.toBeInTheDocument()}},m={play:async({canvasElement:t,args:e})=>{await n.click(a(t).getByRole("button",{name:"Open save dialog"}));const i=a(await a(document.body).findByRole("dialog"));await n.click(i.getByRole("button",{name:"Save & Open Recipe"})),await o(e.onResult).toHaveBeenCalledWith({name:e.defaultTitle,projectId:null,navigateToRecipe:!0})}},u={args:{flow:"idea"},play:async({canvasElement:t})=>{await n.click(a(t).getByRole("button",{name:"Open save dialog"}));const e=a(await a(document.body).findByRole("dialog",{name:"Save Generated Idea"}));await n.click(e.getByRole("button",{name:"Save & Continue Chatting"})),await o(e.getByRole("button",{name:"Save & Continue Chatting"})).toBeDisabled(),await o(e.getByRole("button",{name:/Save & Open/})).toBeDisabled(),await n.click(e.getByRole("button",{name:"Cancel"}))}},g={args:{flow:"note",prefillProject:!0},play:async({canvasElement:t,args:e})=>{x.mockClear(),await n.click(a(t).getByRole("button",{name:"Open save dialog"}));const i=a(await a(document.body).findByRole("dialog",{name:"Save as note"}));await o(i.getByRole("combobox",{name:"Project (optional)"})).toHaveTextContent("Prefilled project outside this page"),await n.click(i.getByRole("button",{name:"Save"})),await q(()=>o(e.onResult).toHaveBeenCalledWith({noteId:"local-note-1"})),await o(x).toHaveBeenCalledWith(o.objectContaining({data:o.objectContaining({type:"quick_feedback",attributes:o.objectContaining({name:e.defaultTitle,text:e.snapshotText,project_id:99})})})),E.dismiss()}},y={args:{flow:"note",noteMode:"conversation"}},w={args:{flow:"note"},parameters:{msw:{handlers:[f.post(j,()=>B.json({errors:[{status:"422",detail:"Local validation failure"}]},{status:422})),N[0]]}},play:async({canvasElement:t,args:e})=>{await n.click(a(t).getByRole("button",{name:"Open save dialog"}));const i=a(await a(document.body).findByRole("dialog",{name:"Save as note"}));await n.click(i.getByRole("button",{name:"Save"})),await a(document.body).findByText("Failed to save note"),await o(i.getByPlaceholderText("Note name")).toHaveValue(e.defaultTitle),await o(i.getByRole("button",{name:"Save"})).toBeEnabled(),await n.click(i.getByRole("button",{name:"Cancel"})),E.dismiss()}},v={args:{flow:"note"},parameters:{store:{preloadedState:{members:{userTenantPermissions:D}}}},play:async({canvasElement:t})=>{await n.click(a(t).getByRole("button",{name:"Open save dialog"}));const e=a(await a(document.body).findByRole("dialog",{name:"Save as note"}));await o(e.getByRole("button",{name:"Save"})).toBeDisabled(),await n.keyboard("{Escape}"),await o(a(document.body).queryByRole("dialog")).not.toBeInTheDocument()}},h={args:{flow:"note",defaultTitle:""},play:async({canvasElement:t})=>{await n.click(a(t).getByRole("button",{name:"Open save dialog"}));const e=a(await a(document.body).findByRole("dialog",{name:"Save as note"}));await o(e.getByRole("button",{name:"Save"})).toBeDisabled(),await o(e.getByPlaceholderText("Note name")).toHaveAttribute("maxlength","50"),await n.type(e.getByPlaceholderText("Note name"),"Named snapshot"),await o(e.getByRole("button",{name:"Save"})).toBeEnabled(),await n.click(e.getByRole("button",{name:"Cancel"}))}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Open save dialog"
    }));
    const dialog = within(await within(document.body).findByRole("dialog", {
      name: "Save Generated Recipe"
    }));
    await userEvent.clear(dialog.getByRole("textbox", {
      name: "Recipe name"
    }));
    await userEvent.type(dialog.getByRole("textbox", {
      name: "Recipe name"
    }), "  Local recipe  ");
    await userEvent.click(dialog.getByRole("checkbox", {
      name: "Add to project"
    }));
    await userEvent.click(dialog.getByRole("combobox", {
      name: "Project"
    }));
    await userEvent.click(await within(document.body).findByRole("option", {
      name: "Oat drinks"
    }));
    await userEvent.click(dialog.getByRole("button", {
      name: "Save & Continue Chatting"
    }));
    await expect(args.onResult).toHaveBeenCalledWith({
      name: "Local recipe",
      projectId: 21,
      navigateToRecipe: false
    });
    await expect(within(document.body).queryByRole("dialog")).not.toBeInTheDocument();
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: "Open save dialog"
    }));
    const dialog = within(await within(document.body).findByRole("dialog"));
    await userEvent.click(dialog.getByRole("button", {
      name: "Save & Open Recipe"
    }));
    await expect(args.onResult).toHaveBeenCalledWith({
      name: args.defaultTitle,
      projectId: null,
      navigateToRecipe: true
    });
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    flow: "idea"
  },
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: "Open save dialog"
    }));
    const dialog = within(await within(document.body).findByRole("dialog", {
      name: "Save Generated Idea"
    }));
    await userEvent.click(dialog.getByRole("button", {
      name: "Save & Continue Chatting"
    }));
    await expect(dialog.getByRole("button", {
      name: "Save & Continue Chatting"
    })).toBeDisabled();
    await expect(dialog.getByRole("button", {
      name: /Save & Open/
    })).toBeDisabled();
    await userEvent.click(dialog.getByRole("button", {
      name: "Cancel"
    }));
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    flow: "note",
    prefillProject: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    noteRequest.mockClear();
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: "Open save dialog"
    }));
    const dialog = within(await within(document.body).findByRole("dialog", {
      name: "Save as note"
    }));
    await expect(dialog.getByRole("combobox", {
      name: "Project (optional)"
    })).toHaveTextContent("Prefilled project outside this page");
    await userEvent.click(dialog.getByRole("button", {
      name: "Save"
    }));
    await waitFor(() => expect(args.onResult).toHaveBeenCalledWith({
      noteId: "local-note-1"
    }));
    await expect(noteRequest).toHaveBeenCalledWith(expect.objectContaining({
      data: expect.objectContaining({
        type: "quick_feedback",
        attributes: expect.objectContaining({
          name: args.defaultTitle,
          text: args.snapshotText,
          project_id: 99
        })
      })
    }));
    toast.dismiss();
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    flow: "note",
    noteMode: "conversation"
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    flow: "note"
  },
  parameters: {
    msw: {
      handlers: [http.post(QUICK_FEEDBACKS, () => HttpResponse.json({
        errors: [{
          status: "422",
          detail: "Local validation failure"
        }]
      }, {
        status: 422
      })), noteHandlers[0]]
    }
  },
  play: async ({
    canvasElement,
    args
  }) => {
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: "Open save dialog"
    }));
    const dialog = within(await within(document.body).findByRole("dialog", {
      name: "Save as note"
    }));
    await userEvent.click(dialog.getByRole("button", {
      name: "Save"
    }));
    await within(document.body).findByText("Failed to save note");
    await expect(dialog.getByPlaceholderText("Note name")).toHaveValue(args.defaultTitle);
    await expect(dialog.getByRole("button", {
      name: "Save"
    })).toBeEnabled();
    await userEvent.click(dialog.getByRole("button", {
      name: "Cancel"
    }));
    toast.dismiss();
  }
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    flow: "note"
  },
  parameters: {
    store: {
      preloadedState: {
        members: {
          userTenantPermissions: viewerTenantPermissions
        }
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: "Open save dialog"
    }));
    const dialog = within(await within(document.body).findByRole("dialog", {
      name: "Save as note"
    }));
    await expect(dialog.getByRole("button", {
      name: "Save"
    })).toBeDisabled();
    await userEvent.keyboard("{Escape}");
    await expect(within(document.body).queryByRole("dialog")).not.toBeInTheDocument();
  }
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    flow: "note",
    defaultTitle: ""
  },
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: "Open save dialog"
    }));
    const dialog = within(await within(document.body).findByRole("dialog", {
      name: "Save as note"
    }));
    await expect(dialog.getByRole("button", {
      name: "Save"
    })).toBeDisabled();
    await expect(dialog.getByPlaceholderText("Note name")).toHaveAttribute("maxlength", "50");
    await userEvent.type(dialog.getByPlaceholderText("Note name"), "Named snapshot");
    await expect(dialog.getByRole("button", {
      name: "Save"
    })).toBeEnabled();
    await userEvent.click(dialog.getByRole("button", {
      name: "Cancel"
    }));
  }
}`,...h.parameters?.docs?.source}}};const ke=["Playground","RecipeProjectAndStay","RecipeOpenEditor","IdeaPending","NoteSnapshot","NoteConversation","NoteError","NoteReadOnly","NoteEmptyTitle"];export{u as IdeaPending,y as NoteConversation,h as NoteEmptyTitle,w as NoteError,v as NoteReadOnly,g as NoteSnapshot,d as Playground,m as RecipeOpenEditor,p as RecipeProjectAndStay,ke as __namedExportsOrder,Se as default};
