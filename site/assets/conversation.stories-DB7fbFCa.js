import{j as e,r as S,aa as v}from"./iframe-6uZ_OvXJ.js";/* empty css                      */import{B as n}from"./button-A8HzViyP.js";import{L as F}from"./label-ccPiVmVc.js";import{I as M}from"./input-xqFXePlz.js";import{A as k}from"./textarea-autosize-x8PjV6NH.js";import{P as R,a as w,b as I}from"./prompt-input-PIGRCKUH.js";import{P as N}from"./prompt-suggestion-CSR0MGqW.js";import{M as y,a as b,b as L}from"./message-jJ4Am6Ue.js";import{M as B,a as P}from"./message-with-markdown-CHmGhMCx.js";import{C as A,a as T,b as V,S as U}from"./scroll-button-DERK4iaj.js";import{R as D}from"./response-stream-CM0NBABd.js";import{R as E,a as O,b as H}from"./reasoning-markdown-CsIDZ9Qz.js";import{S as _,a as $,b as q}from"./source-DA44rwk5.js";import{C as z,a as G}from"./code-block-D11utLBN.js";import{F as J,a as K,b as Q}from"./file-upload-DtVSzQUD.js";import{C as W,a as X,P as Y,D as Z}from"./loaders-BFkPE3wf.js";import{c as ee,d as re,F as se,e as oe,f as ne,a as ae,h as te}from"./form-DEF3hMXI.js";import{I as ie}from"./icons-C5dxDifF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BIEDR5QJ.js";import"./loader-circle-DPzNQWfU.js";import"./textarea-BIg20vtR.js";/* empty css                */import"./avatar-Dmq_uy83.js";import"./ai-markdown-jWYVUKx-.js";/* empty css                 */import"./marked.esm-B5D8JARp.js";import"./table-cell-sizing-9Qu5gc3X.js";import"./source-basic-LDqYNdC1.js";import"./chevron-right-DQAu3Wv6.js";import"./index-DDxzgSdf.js";import"./index-C6UO2wHL.js";import"./index-D-ztsl9H.js";import"./index-8G61PpGJ.js";import"./collapsible-D5z7BIl8.js";import"./useCollapsiblePanel-CEEvXl-2.js";import"./aiAssistant.selectors-CM8XrDL2.js";import"./hover-card-B1VUedu_.js";const Je={title:"Migration audit/Conversation regression gallery",id:"ui-conversation-and-forms",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Functional local examples of existing Proxy UI APIs. Data is illustrative; no service requests, uploads or AI calls are made by these stories."}}}},t={render:function(){const[r,s]=S.useState(""),[a,j]=S.useState("");return e.jsxs("div",{className:"pf-story-conversation-examples",children:[e.jsx(N,{onClick:()=>s("Create an oat drink"),children:"Create an oat drink"}),e.jsxs(R,{value:r,onValueChange:s,onSubmit:()=>{j(r),s("")},children:[e.jsx(w,{"aria-label":"Message",placeholder:"Describe your recipe"}),e.jsx(I,{children:e.jsx(n,{type:"button",onClick:()=>{j(r),s("")},children:"Send"})})]}),e.jsx("output",{"aria-live":"polite",children:a&&`Local submission: ${a}`})]})}},i={render:()=>e.jsxs("div",{className:"pf-story-comfortable-grid",children:[e.jsxs(y,{children:[e.jsx(b,{children:"Could we reduce the sweetness?"}),e.jsx(L,{children:e.jsx(n,{variant:"ghost","aria-label":"Copy message",onClick:()=>v("Local copy action"),children:"Copy"})})]}),e.jsx(B,{children:e.jsx(P,{markdown:!0,children:"Consider **less sugar** and a balanced flavour profile."})})]})},c={render:()=>e.jsxs(A,{className:"pf-story-conversation-scroll-frame",children:[e.jsxs(T,{children:[Array.from({length:10},(o,r)=>e.jsx(y,{children:e.jsxs(b,{children:["Recipe development message ",r+1]})},r)),e.jsx(V,{})]}),e.jsx(U,{"aria-label":"Scroll to latest message"})]})},l={render:()=>e.jsx(D,{textStream:"Preparing a balanced ingredient proposal.",speed:90})},m={render:()=>e.jsxs(E,{children:[e.jsx(O,{children:"Method summary"}),e.jsx(H,{children:"Consider sweetness, texture and ingredient constraints."})]})},d={render:()=>e.jsxs(_,{href:"https://example.com/reference",children:[e.jsx($,{label:"Reference"}),e.jsx(q,{title:"Illustrative source",description:"This is a local citation specimen."})]})},p={render:()=>e.jsx(z,{children:e.jsx(G,{code:JSON.stringify({recipe:"Oat drink",status:"draft"}),language:"json"})})},u={render:()=>e.jsxs("div",{className:"pf-story-narrow-frame",children:[e.jsx(F,{htmlFor:"growing-notes",children:"Notes"}),e.jsx(k,{id:"growing-notes",minHeight:60,maxHeight:180,defaultValue:"Add more lines to grow this field."})]})},g={render:function(){const[r,s]=S.useState([]);return e.jsxs(J,{onFilesAdded:s,children:[e.jsx(K,{asChild:!0,children:e.jsx(n,{children:"Choose local files"})}),e.jsx(Q,{children:"Drop files here"}),e.jsx("ul",{children:r.map(a=>e.jsx("li",{children:a.name},a.name))})]})}},f={render:()=>e.jsxs("div",{className:"pf-story-conversation-controls",children:[e.jsx(W,{}),e.jsx(X,{}),e.jsx(Y,{}),e.jsx(Z,{})]})},C={render:function(){const r=ee({defaultValues:{name:""}});return e.jsx(re,{...r,children:e.jsxs("form",{className:"pf-story-conversation-compact-examples",onSubmit:r.handleSubmit(()=>v("Local form accepted")),children:[e.jsx(se,{control:r.control,name:"name",rules:{required:"Enter a name"},render:({field:s})=>e.jsxs(oe,{children:[e.jsx(ne,{children:"Recipe name"}),e.jsx(ae,{children:e.jsx(M,{...s})}),e.jsx(te,{})]})}),e.jsx(n,{type:"submit",children:"Save local example"})]})})}},h={render:()=>e.jsxs("div",{className:"pf-story-conversation-actions",children:[e.jsx(n,{onClick:()=>v.success("Recipe saved"),children:"Success notice"}),e.jsx(n,{variant:"outline",onClick:()=>v.error("Unable to save. Try again."),children:"Error notice"})]})},x={render:()=>e.jsx("div",{className:"pf-story-conversation-variants",children:Object.entries(ie).map(([o,r])=>typeof r=="function"?e.jsxs("div",{className:"pf-story-conversation-labeled-preview",children:[e.jsx(r,{className:"pf-story-conversation-preview-icon"}),e.jsx("span",{children:o})]},o):null)})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function ComposerStory() {
    const [value, setValue] = useState("");
    const [sent, setSent] = useState("");
    return <div className="pf-story-conversation-examples">
        <PromptSuggestion onClick={() => setValue("Create an oat drink")}>
          Create an oat drink
        </PromptSuggestion>
        <PromptInput value={value} onValueChange={setValue} onSubmit={() => {
        setSent(value);
        setValue("");
      }}>
          <PromptInputTextarea aria-label="Message" placeholder="Describe your recipe" />
          <PromptInputActions>
            <Button type="button" onClick={() => {
            setSent(value);
            setValue("");
          }}>
              Send
            </Button>
          </PromptInputActions>
        </PromptInput>
        <output aria-live="polite">
          {sent && \`Local submission: \${sent}\`}
        </output>
      </div>;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="pf-story-comfortable-grid">
      <Message>
        <MessageContent>Could we reduce the sweetness?</MessageContent>
        <MessageActions>
          <Button variant="ghost" aria-label="Copy message" onClick={() => toast("Local copy action")}>
            Copy
          </Button>
        </MessageActions>
      </Message>
      <MarkdownMessage>
        <MarkdownMessageContent markdown>
          {"Consider **less sugar** and a balanced flavour profile."}
        </MarkdownMessageContent>
      </MarkdownMessage>
    </div>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <ChatContainerRoot className="pf-story-conversation-scroll-frame">
      <ChatContainerContent>
        {Array.from({
        length: 10
      }, (_, i) => <Message key={i}>
            <MessageContent>Recipe development message {i + 1}</MessageContent>
          </Message>)}
        <ChatContainerScrollAnchor />
      </ChatContainerContent>
      <ScrollButton aria-label="Scroll to latest message" />
    </ChatContainerRoot>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <ResponseStream textStream="Preparing a balanced ingredient proposal." speed={90} />
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Reasoning>
      <ReasoningTrigger>Method summary</ReasoningTrigger>
      <ReasoningContent>
        Consider sweetness, texture and ingredient constraints.
      </ReasoningContent>
    </Reasoning>
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Source href="https://example.com/reference">
      <SourceTrigger label="Reference" />
      <SourceContent title="Illustrative source" description="This is a local citation specimen." />
    </Source>
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <CodeBlock>
      <CodeBlockCode code={JSON.stringify({
      recipe: "Oat drink",
      status: "draft"
    })} language="json" />
    </CodeBlock>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="pf-story-narrow-frame">
      <Label htmlFor="growing-notes">Notes</Label>
      <AutosizeTextarea id="growing-notes" minHeight={60} maxHeight={180} defaultValue="Add more lines to grow this field." />
    </div>
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function FilesStory() {
    const [files, setFiles] = useState<File[]>([]);
    return <FileUpload onFilesAdded={setFiles}>
        <FileUploadTrigger asChild>
          <Button>Choose local files</Button>
        </FileUploadTrigger>
        <FileUploadContent>Drop files here</FileUploadContent>
        <ul>
          {files.map(file => <li key={file.name}>{file.name}</li>)}
        </ul>
      </FileUpload>;
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="pf-story-conversation-controls">
      <CircularLoader />
      <ClassicLoader />
      <PulseLoader />
      <DotsLoader />
    </div>
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function FormStory() {
    const form = useForm({
      defaultValues: {
        name: ""
      }
    });
    return <Form {...form}>
        <form className="pf-story-conversation-compact-examples" onSubmit={form.handleSubmit(() => toast("Local form accepted"))}>
          <FormField control={form.control} name="name" rules={{
          required: "Enter a name"
        }} render={({
          field
        }) => <FormItem>
                <FormLabel>Recipe name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>} />
          <Button type="submit">Save local example</Button>
        </form>
      </Form>;
  }
}`,...C.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="pf-story-conversation-actions">
      <Button onClick={() => toast.success("Recipe saved")}>
        Success notice
      </Button>
      <Button variant="outline" onClick={() => toast.error("Unable to save. Try again.")}>
        Error notice
      </Button>
    </div>
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="pf-story-conversation-variants">
      {Object.entries(Icons).map(([name, Icon]) => typeof Icon === "function" ? <div key={name} className="pf-story-conversation-labeled-preview">
            <Icon className="pf-story-conversation-preview-icon" />
            <span>{name}</span>
          </div> : null)}
    </div>
}`,...x.parameters?.docs?.source}}};const Ke=["Composer","Messages","Conversation","Streaming","ReasoningDetails","SourceCitation","CodeSnippet","GrowingTextarea","Files","Loaders","FormValidation","Notifications","IconLibrary"];export{p as CodeSnippet,t as Composer,c as Conversation,g as Files,C as FormValidation,u as GrowingTextarea,x as IconLibrary,f as Loaders,i as Messages,h as Notifications,m as ReasoningDetails,d as SourceCitation,l as Streaming,Ke as __namedExportsOrder,Je as default};
