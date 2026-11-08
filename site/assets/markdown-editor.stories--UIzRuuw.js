import{j as o,r as c}from"./iframe-BXubdNpd.js";import{i as x}from"./input-size-control-DFW6EEu5.js";/* empty css                      */import{B as p}from"./button-DOg3bB7T.js";import{D as v,M as y,a as b}from"./markdown-editor-BzgAldG0.js";import"./preload-helper-PPVm8Dsz.js";import"./input-sizes-DkBN8hE1.js";import"./index-DKWiT4Fi.js";import"./loader-circle-WJxMtqtu.js";import"./index-CIfgK9rU.js";import"./index-Ds3j0ZB7.js";import"./encodeBlobUrl-FLx_wV7M.js";import"./document-mention-D8YQlX_5.js";import"./markdown-table-DgN-cEBS.js";import"./table-cell-sizing-CT2Y4_1Z.js";import"./chevrons-right-BT3DzgxX.js";import"./chevron-left-fIYzLx4k.js";import"./chevron-right-Bt7v18gP.js";import"./index-BXGHVmqw.js";import"./index-D-ztsl9H.js";import"./EditableMarkdownTable-BQBeJrXl.js";import"./trash-2-BiFYt1e5.js";import"./plus-BS0_boJY.js";import"./file-text-P-Na7IsX.js";import"./undo-DV6EMIzj.js";import"./list-DgLOftpo.js";import"./table-CtLrx4FM.js";const{expect:n,fn:f,userEvent:h,waitFor:w,within:k}=__STORYBOOK_MODULE_TEST__;function E(e){const[a,t]=c.useState(e.value??""),[m,g]=c.useState(null);return c.useEffect(()=>t(e.value??""),[e.value]),o.jsxs("section",{"aria-label":"Markdown editor example",className:"pf-story-markdown-editor-editor-layout",children:[o.jsx(b,{...e,value:a,onChange:u=>{t(u),e.onChange?.(u)},onEditorReady:g}),o.jsxs("div",{className:"pf-story-actions",children:[o.jsx(p,{variant:"outline",disabled:!m||e.disabled,onClick:()=>m?.commands.insertContent(" Added from the host."),children:"Insert host text"}),o.jsx(p,{variant:"outline",onClick:()=>t(e.value??""),children:"Reset markdown"})]}),o.jsxs("label",{className:"pf-story-markdown-editor-editor-feedback",children:["Current markdown",o.jsx("textarea",{"aria-label":"Current markdown",value:a,readOnly:!0,rows:5,className:"pf-story-markdown-editor-source-value"})]})]})}const X={title:"Components/Markdown/Markdown Editor",id:"components-inputs-selection-markdown-editor",component:b,subcomponents:{MarkdownTableNodeView:y,DocumentMentionView:v},tags:["autodocs"],args:{controlSize:"medium",value:`## Product notes

Keep **texture** balanced.

- Review the formulation
- Record the outcome`,disabled:!1,placeholder:"Write a note…",maxHeight:"320px",showToolbarOnFocus:!1,onChange:f()},argTypes:{controlSize:x,value:{control:"text"},placeholder:{control:"text"},disabled:{control:"boolean"},showToolbarOnFocus:{control:"boolean"},minHeight:{control:"text"},maxHeight:{control:"text"},className:{control:"text"},toolbarEnd:{control:!1},onChange:{control:!1},onEditorReady:{control:!1},onFilesDropped:{control:!1}},parameters:{docs:{description:{component:"The real Tiptap MarkdownEditor. value/onChange exchange markdown; external value changes update content without re-emitting a user edit. disabled controls editor editability. Size sets the toolbar button height and the minimum height of the empty writing area. minHeight/maxHeight bound its scroll region; placeholder, className and toolbarEnd customize the existing composition. showToolbarOnFocus hides toolbar/border until focus or edits. onEditorReady receives Editor then null on cleanup; onFilesDropped reports the document position and deliberately leaves validation/upload to the host. The fixture's Insert host text uses that actual editor API; Reset restores the supplied value. It stores only local state. Rendering, markdown output, tables and document mention nodes remain the existing implementation. Document preview/upload/network workflows are not completed by this story. Toolbar buttons currently retain their production behavior when disabled; the host should not assume that flag is a full read-only toolbar contract."}}},render:e=>o.jsx(E,{...e})},r={},s={args:{value:"",showToolbarOnFocus:!0}},i={args:{disabled:!0}},l={args:{value:`| Ingredient | Amount |
| --- | --- |
| Oats | 25 g |
| Water | 250 ml |`}},d={play:async({canvasElement:e,args:a})=>{const t=k(e);await w(()=>n(t.getByRole("button",{name:"Insert host text"})).toBeEnabled()),await h.click(t.getByRole("button",{name:"Insert host text"})),await w(()=>n(t.getByRole("textbox",{name:"Current markdown"}).value).toContain("Added from the host.")),await n(a.onChange).toHaveBeenCalledWith(n.stringContaining("Added from the host.")),await h.click(t.getByRole("button",{name:"Reset markdown"})),await n(t.getByRole("textbox",{name:"Current markdown"})).toHaveValue(a.value)}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: "",
    showToolbarOnFocus: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: "| Ingredient | Amount |\\n| --- | --- |\\n| Oats | 25 g |\\n| Water | 250 ml |"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await waitFor(() => expect(canvas.getByRole("button", {
      name: "Insert host text"
    })).toBeEnabled());
    await userEvent.click(canvas.getByRole("button", {
      name: "Insert host text"
    }));
    await waitFor(() => expect((canvas.getByRole("textbox", {
      name: "Current markdown"
    }) as HTMLTextAreaElement).value).toContain("Added from the host."));
    await expect(args.onChange).toHaveBeenCalledWith(expect.stringContaining("Added from the host."));
    await userEvent.click(canvas.getByRole("button", {
      name: "Reset markdown"
    }));
    await expect(canvas.getByRole("textbox", {
      name: "Current markdown"
    })).toHaveValue(args.value);
  }
}`,...d.parameters?.docs?.source}}};const Z=["Playground","FocusToolbar","Disabled","MarkdownTable","EditorApi"];export{i as Disabled,d as EditorApi,s as FocusToolbar,l as MarkdownTable,r as Playground,Z as __namedExportsOrder,X as default};
