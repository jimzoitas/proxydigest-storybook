import{j as a,h as A,H as P,aw as M,r as s,ax as R}from"./iframe-DgvZnKtv.js";/* empty css                      */import{F}from"./apiUrl-o8N8i6mn.js";import{B as C}from"./button-CEcYiQdY.js";import{I as D}from"./input-DTWVrd6t.js";import{P as z}from"./prompt-input-qQ5vF9bu.js";import{T as L,M as _}from"./TiptapPromptInputTextarea-DOpmzvFw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWlKOsdO.js";import"./loader-circle-BsZrs7F6.js";import"./textarea-D7qlXksG.js";import"./index-N07mmiZF.js";import"./index-YDFDGNNj.js";import"./index.module-C-pw7-ZN.js";import"./use-paginated-api-Br3kYEE1.js";import"./request-DN34u20v.js";import"./trackPosthogEvent-DQYu7Eh_.js";import"./jsonApiHandler-0tb7Ffsv.js";import"./SearchByConfig-Dg_Foj-v.js";import"./FormulaMentionText-B7IixALA.js";import"./FormulaMentionInlineChip-vd62xu-W.js";import"./dialog-BGED6ss2.js";import"./overlay-dialog-i6vPmHIw.js";import"./badge-C-Jji8Kx.js";import"./accordion-BRTC14md.js";import"./accordion-mjjl12TU.js";import"./roving-focus-0SK5-Aqb.js";import"./useCollapsiblePanel-jjkiJ8Ha.js";import"./skeleton-DwZsbo-S.js";import"./use-api-C0Z66OjA.js";import"./package-x-Ch_ehrzd.js";import"./arrow-up-right-QD6y7BbT.js";const{expect:r,fn:q,userEvent:c,waitFor:h,within:m}=__STORYBOOK_MODULE_TEST__,H={id:"101",name:"Current oat recipe"},V=[R("formulas","101",{name:H.name}),R("formulas","102",{name:"Oat protein beverage"}),R("formulas","103",{name:"Pea protein snack"})],I=q(),K=A.get(F,()=>P.json(M(V)));function U(e){const[t,n]=s.useState(e.enableMentions),[o,i]=s.useState(""),[b,B]=s.useState("");s.useEffect(()=>n(e.enableMentions),[e.enableMentions]);const d=()=>{e.disabled||!o.trim()||(B(o),i(""))};return a.jsxs("div",{className:"pf-story-wide-grid",children:[a.jsx("p",{children:"Type @ to search recipes, or /this to insert the current recipe. Enter submits; Shift+Enter adds a line."}),a.jsxs("div",{className:"pf-story-wrapping-actions",children:[a.jsx(C,{variant:"outline",onClick:()=>i("Compare protein sources"),disabled:e.disabled,children:"Insert sample prompt"}),a.jsxs(C,{variant:"outline","aria-pressed":t,onClick:()=>n(l=>!l),children:["Mentions ",t?"enabled":"disabled"]})]}),a.jsx("div",{className:"pf-story-ai-assistant-mentions-composer-popup-clearance",children:a.jsxs(z,{value:o,onValueChange:i,onSubmit:d,disabled:e.disabled,maxHeight:e.maxHeight,children:[a.jsx(L,{"aria-label":"Agent prompt",placeholder:e.placeholder,enableMentions:t,currentFormula:t&&e.currentFormula?H:null,mentionPosition:e.mentionPosition}),a.jsx(C,{onClick:d,disabled:e.disabled||!o.trim(),children:"Submit local prompt"})]})}),a.jsx("output",{"aria-label":"Submitted prompt",children:b||"No prompt submitted"}),a.jsxs("details",{children:[a.jsx("summary",{children:"Serialized draft"}),a.jsx("pre",{"data-testid":"serialized-draft",className:"pf-story-ai-assistant-mentions-composer-value",children:o||"Empty draft"})]})]})}function $(e){const t=s.useId(),[n,o]=s.useState(),i=s.useRef(null),[b,B]=s.useState(""),[d,l]=s.useState(!0),[N,O]=s.useState("");return a.jsxs("div",{className:"pf-story-contained-grid",children:[a.jsxs("label",{htmlFor:t,children:["Recipe query",a.jsx(D,{id:t,"aria-autocomplete":"list","aria-controls":d?`${t}-options`:void 0,"aria-activedescendant":d?n:void 0,value:b,disabled:e.disabled,onChange:p=>{B(p.target.value),l(!0)},onKeyDown:p=>{if(p.key==="Escape"){l(!1);return}i.current?.handleKeyDown(p)&&p.preventDefault()}})]}),a.jsx("p",{children:"The input host routes arrows/Enter to the real picker and owns Escape/dismissal."}),a.jsx("div",{className:"pf-story-ai-assistant-mentions-composer-popup-frame",children:d&&a.jsx(_,{id:`${t}-options`,onActiveOptionChange:o,ref:i,query:b,position:"below",currentFormula:e.currentFormula?H:null,onSelect:p=>{O(JSON.stringify(p)),l(!1)},onClose:()=>l(!1)})}),a.jsx(C,{variant:"outline",onClick:()=>l(!0),children:"Reopen picker"}),a.jsx("output",{"aria-label":"Selected recipe",children:N||"No recipe selected"})]})}function j(e){return e.view==="editor"?a.jsx(U,{...e}):a.jsx($,{...e})}const ke={title:"Patterns/AI/Mentions Composer",component:j,tags:["autodocs"],args:{view:"editor",enableMentions:!0,currentFormula:!0,disabled:!1,placeholder:"Ask about this recipe…",mentionPosition:"above",maxHeight:220},argTypes:{view:{control:"inline-radio",options:["editor","picker"]},enableMentions:{control:"boolean"},currentFormula:{control:"boolean"},disabled:{control:"boolean"},placeholder:{control:"text"},mentionPosition:{control:"inline-radio",options:["above","below"]},maxHeight:{control:{type:"range",min:100,max:400,step:20}}},parameters:{msw:{handlers:[K]},docs:{description:{component:`Actual TiptapPromptInputTextarea and MentionPicker inside their real PromptInput context. This is the rich composer family, distinct from the plain PromptInputTextarea.

| Public API | Responsibility |
| --- | --- |
| TiptapPromptInputTextarea | aria-label, placeholder, className, enableMentions, mentionPosition, currentFormula, onPaste |
| PromptInput context | value/setValue, onSubmit, disabled and maxHeight; the host guards blank/disabled submission |
| MentionPicker | query, onSelect, onClose, currentFormula, position; optional id/onActiveOptionChange link the host textbox; ref.handleKeyDown routes arrows, Enter and Escape |

The editor preserves formula chips and serializes id/name/type references. Scope changes that disable mentions convert chips to plain @label text without discarding the draft. The host gates currentFormula together with enableMentions, as ChatInputWithAttachment does. /this inserts the supplied current formula. Source search is debounced by the real picker; local MSW JSON:API fixtures supply options, and the current formula is pinned once even if returned by search. The editor suggestion host dismisses on Escape; standalone hosts can route Escape through the picker ref, which invokes onClose.

Controls describe the fixture integration. Switching editor/picker remounts that view. Sample prompt updates the actual context value. Draft serialization and submitted text are local, observable outputs. No chat request, model response, attachment transport or backend formula lookup is performed. The keyboard test validates the existing ref/host contract; the multiline textbox controls a named listbox, exposes aria-autocomplete and its selected option through aria-activedescendant; Arrow/Enter selection and Escape are verified. IME, paste and pointer geometry still need separate browser evidence. The actual textbox now has a role and an accessible name. Returned HTTP error documents now use the existing error channel, so the HTTP 503 fixture renders the distinct search-failed state and does not advance pagination.`}}},beforeEach:()=>{const e=[],t=(n,o,i)=>{typeof n[o]!="function"&&(Object.defineProperty(n,o,{value:i,configurable:!0}),e.push(()=>Reflect.deleteProperty(n,o)))};return t(document,"elementFromPoint",()=>null),t(Range.prototype,"getClientRects",()=>[]),t(Range.prototype,"getBoundingClientRect",()=>new DOMRect),()=>e.forEach(n=>n())},render:e=>a.jsx(j,{...e})},x={play:async({canvasElement:e})=>{const t=m(e),n=await t.findByRole("textbox",{name:"Agent prompt"});await r(n).toHaveAttribute("aria-multiline","true"),await c.click(t.getByRole("button",{name:"Insert sample prompt"})),await h(()=>r(n).toHaveTextContent("Compare protein sources")),await c.click(t.getByRole("button",{name:"Submit local prompt"})),await r(t.getByLabelText("Submitted prompt")).toHaveTextContent("Compare protein sources"),await h(()=>r(n).toHaveTextContent(/^$/))}},y={play:async({canvasElement:e})=>{const t=m(e),n=await t.findByRole("textbox",{name:"Agent prompt"});await c.click(n),await c.type(n,"/this"),await t.findByText("@Current oat recipe"),await c.keyboard("{Enter}"),await h(()=>r(t.getByTestId("serialized-draft")).toHaveTextContent('"id":"101"')),await c.click(t.getByRole("button",{name:"Mentions enabled"})),await h(()=>r(t.getByTestId("serialized-draft")).toHaveTextContent("@Current oat recipe")),await r(t.getByTestId("serialized-draft")).not.toHaveTextContent('"id"')}},v={args:{enableMentions:!1}},w={args:{disabled:!0},play:async({canvasElement:e})=>{const t=m(e);await r(await t.findByRole("textbox",{name:"Agent prompt"})).toHaveAttribute("contenteditable","false"),await r(t.getByRole("button",{name:"Submit local prompt"})).toBeDisabled()}},f={args:{currentFormula:!1}},g={args:{view:"picker"},play:async({canvasElement:e})=>{const t=m(e);await t.findByText("Oat protein beverage"),await r(t.getAllByText("Current oat recipe")).toHaveLength(1);const n=t.getByRole("textbox",{name:"Recipe query"});await c.click(n),await c.keyboard("{ArrowDown}{Enter}"),await r(t.getByLabelText("Selected recipe")).toHaveTextContent('"id":"102"')}},T={play:async({canvasElement:e})=>{await r(await m(e).findByText("No recipes found")).toBeVisible()},args:{view:"picker",currentFormula:!1},parameters:{msw:{handlers:[A.get(F,()=>P.json(M([])))]}}},S={name:"Failed search",play:async({canvasElement:e})=>{await h(()=>r(I).toHaveBeenCalled()),await r(await m(e).findByText("Couldn't load recipes. Try again.")).toBeVisible()},args:{view:"picker",currentFormula:!1},parameters:{msw:{handlers:[A.get(F,()=>(I(),P.json({errors:[{detail:"Local fixture search failure"}]},{status:503})))]}}},E={render:e=>a.jsxs("div",{className:"pf-story-stack",children:[a.jsxs("ol",{children:[a.jsx("li",{children:"Named multiline editor: the PromptInput context owns draft and submission."}),a.jsx("li",{children:"Recipe suggestions: a named listbox exposes the keyboard-selected option while focus stays in the editor."}),a.jsx("li",{children:"Recipe chip: serializes the selected recipe reference; disabling mentions preserves its label as text."}),a.jsx("li",{children:"Submit action: the host guards blank and disabled drafts."})]}),a.jsx(j,{...e})]})},u={},k={args:{view:"picker"}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    enableMentions: false
  }
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    currentFormula: false
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{}",...u.parameters?.docs?.source},description:{story:"Stable source specimen; no authored play changes its initial anatomy.",...u.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    view: "picker"
  }
}`,...k.parameters?.docs?.source}}};const Ce=["Playground","CurrentRecipeShortcut","MentionsDisabled","Disabled","NoCurrentRecipe","PickerKeyboard","EmptySearch","FailedSearch","Anatomy","AnatomyEditor","AnatomyPicker"];export{E as Anatomy,u as AnatomyEditor,k as AnatomyPicker,y as CurrentRecipeShortcut,w as Disabled,T as EmptySearch,S as FailedSearch,v as MentionsDisabled,f as NoCurrentRecipe,g as PickerKeyboard,x as Playground,Ce as __namedExportsOrder,ke as default};
