import{j as a,h as R,H as j,K as H,r as i,a4 as k}from"./iframe-nhB53rPD.js";/* empty css                      */import{F as P}from"./apiUrl-CtX1NveE.js";import{B as E}from"./button-_tcBhp5_.js";import{I as N}from"./input-CAdeD_xm.js";import{P as O}from"./prompt-input-DUnSkmpe.js";import{T as D,M as z}from"./TiptapPromptInputTextarea-D6146DRm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8Dbc_Jva.js";import"./loader-circle-MxHlgpxw.js";import"./textarea-DEsuPIgK.js";import"./index-URUmE6_1.js";import"./index-t7ltDksz.js";import"./index.module-B262ysEo.js";import"./use-paginated-api-QJatBdKg.js";import"./request-CGJ4zixB.js";import"./trackPosthogEvent-Zud5gl49.js";import"./jsonApiHandler-C4BMoVsw.js";import"./SearchByConfig-YoiZjbOC.js";import"./FormulaMentionText-BluBa3i3.js";import"./FormulaMentionInlineChip-B2BLdKve.js";import"./dialog-CyBaw9zK.js";import"./overlay-dialog-Co5KED9w.js";import"./badge-DF9-aVgV.js";import"./accordion-B67wbHOw.js";import"./accordion-CHExsbqI.js";import"./roving-focus-0SK5-Aqb.js";import"./useCollapsiblePanel-DVMF6qnG.js";import"./skeleton-CMUv0H3w.js";import"./use-api-C38r92YH.js";import"./package-x-B5Y8c9RK.js";import"./arrow-up-right-CAOOAQi3.js";const{expect:r,fn:L,userEvent:c,waitFor:u,within:m}=__STORYBOOK_MODULE_TEST__,A={id:"101",name:"Current oat recipe"},_=[k("formulas","101",{name:A.name}),k("formulas","102",{name:"Oat protein beverage"}),k("formulas","103",{name:"Pea protein snack"})],F=L(),q=R.get(P,()=>j.json(H(_)));function K(e){const[t,n]=i.useState(e.enableMentions),[o,s]=i.useState(""),[h,C]=i.useState("");i.useEffect(()=>n(e.enableMentions),[e.enableMentions]);const d=()=>{e.disabled||!o.trim()||(C(o),s(""))};return a.jsxs("div",{className:"pf-story-wide-grid",children:[a.jsx("p",{children:"Type @ to search recipes, or /this to insert the current recipe. Enter submits; Shift+Enter adds a line."}),a.jsxs("div",{className:"pf-story-wrapping-actions",children:[a.jsx(E,{variant:"outline",onClick:()=>s("Compare protein sources"),disabled:e.disabled,children:"Insert sample prompt"}),a.jsxs(E,{variant:"outline","aria-pressed":t,onClick:()=>n(l=>!l),children:["Mentions ",t?"enabled":"disabled"]})]}),a.jsx("div",{className:"pf-story-ai-assistant-mentions-composer-popup-clearance",children:a.jsxs(O,{value:o,onValueChange:s,onSubmit:d,disabled:e.disabled,maxHeight:e.maxHeight,children:[a.jsx(D,{"aria-label":"Agent prompt",placeholder:e.placeholder,enableMentions:t,currentFormula:t&&e.currentFormula?A:null,mentionPosition:e.mentionPosition}),a.jsx(E,{onClick:d,disabled:e.disabled||!o.trim(),children:"Submit local prompt"})]})}),a.jsx("output",{"aria-label":"Submitted prompt",children:h||"No prompt submitted"}),a.jsxs("details",{children:[a.jsx("summary",{children:"Serialized draft"}),a.jsx("pre",{"data-testid":"serialized-draft",className:"pf-story-ai-assistant-mentions-composer-value",children:o||"Empty draft"})]})]})}function V(e){const t=i.useId(),[n,o]=i.useState(),s=i.useRef(null),[h,C]=i.useState(""),[d,l]=i.useState(!0),[I,M]=i.useState("");return a.jsxs("div",{className:"pf-story-contained-grid",children:[a.jsxs("label",{htmlFor:t,children:["Recipe query",a.jsx(N,{id:t,"aria-autocomplete":"list","aria-controls":d?`${t}-options`:void 0,"aria-activedescendant":d?n:void 0,value:h,disabled:e.disabled,onChange:p=>{C(p.target.value),l(!0)},onKeyDown:p=>{if(p.key==="Escape"){l(!1);return}s.current?.handleKeyDown(p)&&p.preventDefault()}})]}),a.jsx("p",{children:"The input host routes arrows/Enter to the real picker and owns Escape/dismissal."}),a.jsx("div",{className:"pf-story-ai-assistant-mentions-composer-popup-frame",children:d&&a.jsx(z,{id:`${t}-options`,onActiveOptionChange:o,ref:s,query:h,position:"below",currentFormula:e.currentFormula?A:null,onSelect:p=>{M(JSON.stringify(p)),l(!1)},onClose:()=>l(!1)})}),a.jsx(E,{variant:"outline",onClick:()=>l(!0),children:"Reopen picker"}),a.jsx("output",{"aria-label":"Selected recipe",children:I||"No recipe selected"})]})}function B(e){return e.view==="editor"?a.jsx(K,{...e}):a.jsx(V,{...e})}const Se={title:"Patterns/AI/Mentions Composer",component:B,tags:["autodocs"],args:{view:"editor",enableMentions:!0,currentFormula:!0,disabled:!1,placeholder:"Ask about this recipe…",mentionPosition:"above",maxHeight:220},argTypes:{view:{control:"inline-radio",options:["editor","picker"]},enableMentions:{control:"boolean"},currentFormula:{control:"boolean"},disabled:{control:"boolean"},placeholder:{control:"text"},mentionPosition:{control:"inline-radio",options:["above","below"]},maxHeight:{control:{type:"range",min:100,max:400,step:20}}},parameters:{msw:{handlers:[q]},docs:{description:{component:`Actual TiptapPromptInputTextarea and MentionPicker inside their real PromptInput context. This is the rich composer family, distinct from the plain PromptInputTextarea.

| Public API | Responsibility |
| --- | --- |
| TiptapPromptInputTextarea | aria-label, placeholder, className, enableMentions, mentionPosition, currentFormula, onPaste |
| PromptInput context | value/setValue, onSubmit, disabled and maxHeight; the host guards blank/disabled submission |
| MentionPicker | query, onSelect, onClose, currentFormula, position; optional id/onActiveOptionChange link the host textbox; ref.handleKeyDown routes arrows, Enter and Escape |

The editor preserves formula chips and serializes id/name/type references. Scope changes that disable mentions convert chips to plain @label text without discarding the draft. The host gates currentFormula together with enableMentions, as ChatInputWithAttachment does. /this inserts the supplied current formula. Source search is debounced by the real picker; local MSW JSON:API fixtures supply options, and the current formula is pinned once even if returned by search. The editor suggestion host dismisses on Escape; standalone hosts can route Escape through the picker ref, which invokes onClose.

Controls describe the fixture integration. Switching editor/picker remounts that view. Sample prompt updates the actual context value. Draft serialization and submitted text are local, observable outputs. No chat request, model response, attachment transport or backend formula lookup is performed. The keyboard test validates the existing ref/host contract; the multiline textbox controls a named listbox, exposes aria-autocomplete and its selected option through aria-activedescendant; Arrow/Enter selection and Escape are verified. IME, paste and pointer geometry still need separate browser evidence. The actual textbox now has a role and an accessible name. Returned HTTP error documents now use the existing error channel, so the HTTP 503 fixture renders the distinct search-failed state and does not advance pagination.`}}},beforeEach:()=>{const e=[],t=(n,o,s)=>{typeof n[o]!="function"&&(Object.defineProperty(n,o,{value:s,configurable:!0}),e.push(()=>Reflect.deleteProperty(n,o)))};return t(document,"elementFromPoint",()=>null),t(Range.prototype,"getClientRects",()=>[]),t(Range.prototype,"getBoundingClientRect",()=>new DOMRect),()=>e.forEach(n=>n())},render:e=>a.jsx(B,{...e})},b={play:async({canvasElement:e})=>{const t=m(e),n=await t.findByRole("textbox",{name:"Agent prompt"});await r(n).toHaveAttribute("aria-multiline","true"),await c.click(t.getByRole("button",{name:"Insert sample prompt"})),await u(()=>r(n).toHaveTextContent("Compare protein sources")),await c.click(t.getByRole("button",{name:"Submit local prompt"})),await r(t.getByLabelText("Submitted prompt")).toHaveTextContent("Compare protein sources"),await u(()=>r(n).toHaveTextContent(/^$/))}},x={play:async({canvasElement:e})=>{const t=m(e),n=await t.findByRole("textbox",{name:"Agent prompt"});await c.click(n),await c.type(n,"/this"),await t.findByText("@Current oat recipe"),await c.keyboard("{Enter}"),await u(()=>r(t.getByTestId("serialized-draft")).toHaveTextContent('"id":"101"')),await c.click(t.getByRole("button",{name:"Mentions enabled"})),await u(()=>r(t.getByTestId("serialized-draft")).toHaveTextContent("@Current oat recipe")),await r(t.getByTestId("serialized-draft")).not.toHaveTextContent('"id"')}},v={args:{enableMentions:!1}},y={args:{disabled:!0},play:async({canvasElement:e})=>{const t=m(e);await r(await t.findByRole("textbox",{name:"Agent prompt"})).toHaveAttribute("contenteditable","false"),await r(t.getByRole("button",{name:"Submit local prompt"})).toBeDisabled()}},f={args:{currentFormula:!1}},w={args:{view:"picker"},play:async({canvasElement:e})=>{const t=m(e);await t.findByText("Oat protein beverage"),await r(t.getAllByText("Current oat recipe")).toHaveLength(1);const n=t.getByRole("textbox",{name:"Recipe query"});await c.click(n),await c.keyboard("{ArrowDown}{Enter}"),await r(t.getByLabelText("Selected recipe")).toHaveTextContent('"id":"102"')}},g={play:async({canvasElement:e})=>{await r(await m(e).findByText("No recipes found")).toBeVisible()},args:{view:"picker",currentFormula:!1},parameters:{msw:{handlers:[R.get(P,()=>j.json(H([])))]}}},T={name:"Failed search",play:async({canvasElement:e})=>{await u(()=>r(F).toHaveBeenCalled()),await r(await m(e).findByText("Couldn't load recipes. Try again.")).toBeVisible()},args:{view:"picker",currentFormula:!1},parameters:{msw:{handlers:[R.get(P,()=>(F(),j.json({errors:[{detail:"Local fixture search failure"}]},{status:503})))]}}},S={render:e=>a.jsxs("div",{className:"pf-story-stack",children:[a.jsxs("ol",{children:[a.jsx("li",{children:"Named multiline editor: the PromptInput context owns draft and submission."}),a.jsx("li",{children:"Recipe suggestions: a named listbox exposes the keyboard-selected option while focus stays in the editor."}),a.jsx("li",{children:"Recipe chip: serializes the selected recipe reference; disabling mentions preserves its label as text."}),a.jsx("li",{children:"Submit action: the host guards blank and disabled drafts."})]}),a.jsx(B,{...e})]})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const editor = await canvas.findByRole("textbox", {
      name: "Agent prompt"
    });
    await expect(editor).toHaveAttribute("aria-multiline", "true");
    await userEvent.click(canvas.getByRole("button", {
      name: "Insert sample prompt"
    }));
    await waitFor(() => expect(editor).toHaveTextContent("Compare protein sources"));
    await userEvent.click(canvas.getByRole("button", {
      name: "Submit local prompt"
    }));
    await expect(canvas.getByLabelText("Submitted prompt")).toHaveTextContent("Compare protein sources");
    await waitFor(() => expect(editor).toHaveTextContent(/^$/));
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const editor = await canvas.findByRole("textbox", {
      name: "Agent prompt"
    });
    await userEvent.click(editor);
    await userEvent.type(editor, "/this");
    await canvas.findByText("@Current oat recipe");
    await userEvent.keyboard("{Enter}");
    await waitFor(() => expect(canvas.getByTestId("serialized-draft")).toHaveTextContent('"id":"101"'));
    await userEvent.click(canvas.getByRole("button", {
      name: "Mentions enabled"
    }));
    await waitFor(() => expect(canvas.getByTestId("serialized-draft")).toHaveTextContent("@Current oat recipe"));
    await expect(canvas.getByTestId("serialized-draft")).not.toHaveTextContent('"id"');
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    enableMentions: false
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(await canvas.findByRole("textbox", {
      name: "Agent prompt"
    })).toHaveAttribute("contenteditable", "false");
    await expect(canvas.getByRole("button", {
      name: "Submit local prompt"
    })).toBeDisabled();
  }
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    currentFormula: false
  }
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    view: "picker"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("Oat protein beverage");
    await expect(canvas.getAllByText("Current oat recipe")).toHaveLength(1);
    const input = canvas.getByRole("textbox", {
      name: "Recipe query"
    });
    await userEvent.click(input);
    await userEvent.keyboard("{ArrowDown}{Enter}");
    await expect(canvas.getByLabelText("Selected recipe")).toHaveTextContent('"id":"102"');
  }
}`,...w.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await expect(await within(canvasElement).findByText("No recipes found")).toBeVisible();
  },
  args: {
    view: "picker",
    currentFormula: false
  },
  parameters: {
    msw: {
      handlers: [http.get(FORMULAS, () => HttpResponse.json(jsonApiCollection([])))]
    }
  }
}`,...g.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Failed search",
  play: async ({
    canvasElement
  }) => {
    await waitFor(() => expect(receivedFailure).toHaveBeenCalled());
    // Returned JSON:API failures stay in the hook error channel.
    await expect(await within(canvasElement).findByText("Couldn't load recipes. Try again.")).toBeVisible();
  },
  args: {
    view: "picker",
    currentFormula: false
  },
  parameters: {
    msw: {
      handlers: [http.get(FORMULAS, () => {
        receivedFailure();
        return HttpResponse.json({
          errors: [{
            detail: "Local fixture search failure"
          }]
        }, {
          status: 503
        });
      })]
    }
  }
}`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <div className="pf-story-stack">
      <ol>
        <li>
          Named multiline editor: the PromptInput context owns draft and
          submission.
        </li>
        <li>
          Recipe suggestions: a named listbox exposes the keyboard-selected
          option while focus stays in the editor.
        </li>
        <li>
          Recipe chip: serializes the selected recipe reference; disabling
          mentions preserves its label as text.
        </li>
        <li>Submit action: the host guards blank and disabled drafts.</li>
      </ol>
      <Example {...args} />
    </div>
}`,...S.parameters?.docs?.source}}};const Ee=["Playground","CurrentRecipeShortcut","MentionsDisabled","Disabled","NoCurrentRecipe","PickerKeyboard","EmptySearch","FailedSearch","Anatomy"];export{S as Anatomy,x as CurrentRecipeShortcut,y as Disabled,g as EmptySearch,T as FailedSearch,v as MentionsDisabled,f as NoCurrentRecipe,w as PickerKeyboard,b as Playground,Ee as __namedExportsOrder,Se as default};
