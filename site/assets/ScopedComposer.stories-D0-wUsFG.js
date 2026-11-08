import{j as a,r as p}from"./iframe-6uZ_OvXJ.js";import{F as k,P as E,G as P,S as R,a as B,C as T}from"./ChatInput-CHQuq3Z_.js";import"./preload-helper-PPVm8Dsz.js";import"./ChatInputWithAttachment-DO7bP4_f.js";import"./file-upload-DtVSzQUD.js";import"./prompt-input-PIGRCKUH.js";import"./textarea-BIg20vtR.js";import"./button-A8HzViyP.js";import"./index-BIEDR5QJ.js";import"./loader-circle-DPzNQWfU.js";import"./TiptapPromptInputTextarea-nml69QIH.js";import"./index-Ca5md6L6.js";import"./index-BKYRpA89.js";import"./index.module-Db1hQFPV.js";import"./use-paginated-api-CWOeq5kV.js";import"./request-BbyBNZg4.js";import"./trackPosthogEvent-fthYs4K3.js";import"./jsonApiHandler-DHxZXfLw.js";import"./SearchByConfig-D5iGJPAi.js";import"./apiUrl-o8N8i6mn.js";import"./FormulaMentionText-f7B5dNgY.js";import"./FormulaMentionInlineChip-BCLPo4up.js";import"./dialog-DnvpmbSS.js";import"./overlay-dialog-_C1niahL.js";import"./badge-BfEYvfQV.js";import"./accordion-COmVAh8t.js";import"./accordion-DuKcutha.js";import"./roving-focus-0SK5-Aqb.js";import"./useCollapsiblePanel-CEEvXl-2.js";import"./skeleton-Bu9j_NfJ.js";import"./use-api-VM36FeDn.js";import"./package-x-BVy6z9Wy.js";import"./arrow-up-right-o-I_77_q.js";import"./ChatUploadConflictDialog-C__NKvs2.js";import"./acceptedFileTypes-BiiB-6uY.js";import"./use-ai-assistant-helpers-D5oKwwJi.js";import"./aiAssistant.selectors-CM8XrDL2.js";import"./paperclip-wH5rwyBQ.js";import"./sliders-horizontal-CmLnKvoy.js";import"./corner-down-right-QfyzFmxT.js";import"./globe-Cx9ESZ5K.js";import"./file-BtDCkXTu.js";import"./image-quU8knTU.js";import"./file-spreadsheet-BAZ-hhIc.js";import"./presentation-CssARQsw.js";import"./file-text-nCD9I8Xm.js";import"./featureFlags-R30pJjMx.js";import"./use-current-module-CXq7_1uF.js";import"./square-CitGoML8.js";import"./arrow-up-DejSgtne.js";import"./use-route-formula-B6ly3Buz.js";import"./use-permissions-DhZfaxzb.js";import"./book-open-CCsyC6yR.js";import"./book-vdmy697W.js";import"./plus-CjxSM-tB.js";const{expect:f,fn:U,userEvent:r,within:v}=__STORYBOOK_MODULE_TEST__;function w({state:e,onAction:n}){const[t,s]=p.useState(""),[c,j]=p.useState(!1),[_,O]=p.useState("No action"),[x,A]=p.useState(e==="uploading"?[{attachmentKind:"uploaded_file",id:"upload-local",fileName:"oat-spec",fileExtension:"pdf",status:"uploading",sizeBytes:1024,uploadProgress:35}]:[]),o=i=>{O(i),n(i)},S=e==="disabled"||e==="submitting",D={getAttachments:()=>x,setAttachments:A,startUpload:()=>o("Upload requested; no transport in this fixture"),cancelUpload:()=>o("Upload cancelled"),linkPickedDocuments:()=>o("Link requested"),attachExistingDocument:()=>"abandoned",keepBothDocuments:()=>Promise.resolve("no_free_name")},C=()=>o(`Send: ${t}`);return a.jsxs("div",{className:"pf-story-ai-assistant-scoped-composer-frame",children:[a.jsx(T,{upload:D,value:t,onValueChange:s,attachedContent:x,onAttachedContentChange:A,onSubmit:C,disabled:S,actionsDisabled:e==="disabled",isLoading:e==="submitting",isPending:e==="pending",onShowPromptGuide:()=>o("Open prompt guide"),leftActions:a.jsxs(a.Fragment,{children:[a.jsx(B,{}),a.jsx(k,{}),a.jsx(P,{onClick:()=>o("Open context search"),disabled:S}),a.jsx(E,{showPromptSuggestions:c,onClick:()=>{j(!c),o("Toggle examples")}})]}),rightActions:a.jsx(R,{onSubmit:C,disabled:!t.trim()||S||x.some(i=>"status"in i&&i.status==="uploading"),isPending:e==="pending",isSubmitting:e==="submitting",onCancel:()=>o("Stop generation")})},e),a.jsx("output",{"aria-label":"Composer result",children:_}),a.jsx("p",{children:"New uploads stay pending because this fixture has no upload transport."})]})}const He={title:"Patterns/AI/Scoped composer",component:w,subcomponents:{ChatInput:T,ScopeChangeAction:B,SubmitAction:R,GlobalSearchAction:P,PromptSuggestionsAction:E,FileUploadAction:k},tags:["autodocs"],render:e=>a.jsx(w,{...e},e.state),beforeEach:()=>{const e=[],n=(t,s,c)=>{typeof t[s]!="function"&&(Object.defineProperty(t,s,{value:c,configurable:!0}),e.push(()=>Reflect.deleteProperty(t,s)))};return n(document,"elementFromPoint",()=>null),n(Range.prototype,"getClientRects",()=>[]),n(Range.prototype,"getBoundingClientRect",()=>new DOMRect),()=>e.forEach(t=>t())},args:{state:"ready",onAction:U()},argTypes:{state:{control:"inline-radio",options:["ready","pending","submitting","disabled","uploading"]},onAction:{control:!1}},parameters:{store:{preloadedState:{aiAssistant:{assistantScope:"recipe_formulation_advisor"}}},route:"/assistant",docs:{description:{component:`The real ChatInput composes the Tiptap composer, attachments and source action components. The standalone scope selector lists the actual registry entries; recipe-bound scopes require the recipe route. The fixture uses the same controlled value and attachments contracts and reports host actions without connecting a WebSocket or pretending uploads succeed.

### API and lifecycle
ChatInput requires upload, value, onValueChange and onSubmit. Optional attachedContent/onAttachedContentChange own selection externally. leftActions/rightActions are actual React slots, not new visual variants. disabled controls editing; actionsDisabled defaults to disabled except during pending response, preserving stop access. SubmitAction distinguishes empty/disabled, pending (onCancel), submitting (locked) and ready (onSubmit). ScopeChangeAction dispatches the actual selected scope and performs route-recipe attachment for Regulatory.

### Accessibility and host obligations
The named rich textbox, agent combobox and action buttons retain native keyboard behavior. Prompt guidance is now a keyboard button using its existing callback. The host must gate submit while uploads block sending, maintain attachment lifecycle across responsive mounts, handle service failures and preserve typed text. This fixture starts empty so its typing is the actual editor interaction. Mention picker and conflict details have dedicated family pages. The state scenario picker remounts upload examples to preserve their initial-state contract.`}}}},d={},m={play:async({canvasElement:e,args:n})=>{const t=v(e);await r.click(t.getByRole("textbox")),await r.keyboard("Compare oat proteins"),await r.click(t.getByRole("button",{name:"Send message"})),await f(n.onAction).toHaveBeenCalledWith("Send: Compare oat proteins")}},l={args:{state:"pending"},play:async({canvasElement:e,args:n})=>{await r.click(v(e).getByRole("button",{name:"Stop generation"})),await f(n.onAction).toHaveBeenCalledWith("Stop generation")}},u={args:{state:"submitting"}},g={args:{state:"disabled"}},h={args:{state:"uploading"}},b={play:async({canvasElement:e,args:n})=>{await r.click(v(e).getByRole("button",{name:/Attach context/i})),await f(n.onAction).toHaveBeenCalledWith("Open context search")}},y={parameters:{docs:{description:{story:"Attachment chips → named rich editor → left scope/context/example actions and right submit/stop action → disclaimer and keyboard-accessible guidance."}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("textbox"));
    await userEvent.keyboard("Compare oat proteins");
    await userEvent.click(canvas.getByRole("button", {
      name: "Send message"
    }));
    await expect(args.onAction).toHaveBeenCalledWith("Send: Compare oat proteins");
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    state: "pending"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: "Stop generation"
    }));
    await expect(args.onAction).toHaveBeenCalledWith("Stop generation");
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    state: "submitting"
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    state: "disabled"
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    state: "uploading"
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: /Attach context/i
    }));
    await expect(args.onAction).toHaveBeenCalledWith("Open context search");
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Attachment chips → named rich editor → left scope/context/example actions and right submit/stop action → disclaimer and keyboard-accessible guidance."
      }
    }
  }
}`,...y.parameters?.docs?.source}}};const Ie=["Playground","TypeAndSend","PendingStop","Submitting","Disabled","Uploading","ContextAction","Anatomy"];export{y as Anatomy,b as ContextAction,g as Disabled,l as PendingStop,d as Playground,u as Submitting,m as TypeAndSend,h as Uploading,Ie as __namedExportsOrder,He as default};
