import{j as r}from"./iframe-BXubdNpd.js";import{T as s}from"./truncated-markdown-BkdrxsMN.js";import"./preload-helper-PPVm8Dsz.js";import"./button-DOg3bB7T.js";import"./index-DKWiT4Fi.js";import"./loader-circle-WJxMtqtu.js";import"./encodeBlobUrl-FLx_wV7M.js";import"./document-mention-D8YQlX_5.js";import"./markdown-table-DgN-cEBS.js";import"./table-cell-sizing-CT2Y4_1Z.js";import"./chevrons-right-BT3DzgxX.js";import"./chevron-left-fIYzLx4k.js";import"./chevron-right-Bt7v18gP.js";import"./index-BXGHVmqw.js";import"./index-D-ztsl9H.js";import"./file-text-P-Na7IsX.js";import"./index-Cx-C-_RM.js";import"./index-8G61PpGJ.js";const{expect:i,userEvent:c,within:l}=__STORYBOOK_MODULE_TEST__,p=Array.from({length:24},(n,e)=>`Line ${e+1}: preserve the note's **meaning** and formatting.`).join(`

`),M={title:"Components/Markdown/Note Markdown",id:"components-data-display-note-markdown",component:s,tags:["autodocs"],args:{markdown:p,lines:3,showExpandButton:!0,showTooltip:!1},argTypes:{markdown:{control:"text"},lines:{control:{type:"number",min:1,max:20}},showExpandButton:{control:"boolean"},showTooltip:{control:"boolean"},className:{control:"text"}},parameters:{docs:{description:{component:"TruncatedMarkdown is the existing note/list preview renderer. markdown supplies content; omitting lines renders it in full. Positive lines clamp the preview, showExpandButton exposes Read more/Show less only when truncatable, and showTooltip enables the current tooltip treatment. The implementation caps collapsed source lines and routes tables through paginated MarkdownTable rather than rendering thousands of hidden rows. It supports its existing sanitized HTML and document-mention handling. Hosts own document-preview requests and use the full renderer in reading contexts; a clipped preview is not a replacement for the source content."}}},render:n=>r.jsx("div",{className:"pf-story-truncated-markdown-preview",children:r.jsx(s,{...n})})},t={},o={args:{markdown:`## Product note

This **full note** is not clamped.

- One requirement
- Another requirement`,lines:void 0,showExpandButton:!1}},a={play:async({canvasElement:n})=>{const e=l(n);await c.click(await e.findByRole("button",{name:/read more/i})),await i(e.getByText(/Line 24:/)).toBeVisible(),await c.click(e.getByRole("button",{name:/show less/i})),await i(e.queryByText(/Line 24:/)).not.toBeInTheDocument()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    markdown: "## Product note\\n\\nThis **full note** is not clamped.\\n\\n- One requirement\\n- Another requirement",
    lines: undefined,
    showExpandButton: false
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByRole("button", {
      name: /read more/i
    }));
    await expect(canvas.getByText(/Line 24:/)).toBeVisible();
    await userEvent.click(canvas.getByRole("button", {
      name: /show less/i
    }));
    await expect(canvas.queryByText(/Line 24:/)).not.toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};const O=["Playground","Full","ExpandAndCollapse"];export{a as ExpandAndCollapse,o as Full,t as Playground,O as __namedExportsOrder,M as default};
