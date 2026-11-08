import{j as i}from"./iframe-AqpYXns4.js";import{A as d}from"./ai-markdown-fRPd8D1J.js";import"./preload-helper-PPVm8Dsz.js";/* empty css                 */import"./marked.esm-B5D8JARp.js";import"./table-cell-sizing-C0yGB5Oh.js";import"./source-basic-GTpBQAiX.js";import"./source-BgvkpggK.js";import"./hover-card-sY2GMIgd.js";import"./code-block-B6Cq0LfI.js";import"./index-8G61PpGJ.js";import"./index-C6ZnvOnQ.js";import"./chevron-right-B3hyZT-D.js";import"./index-6EzalymI.js";import"./index-C9pEX-zO.js";import"./collapsible-DZyMQ3Bu.js";import"./useCollapsiblePanel-DOTGH3aY.js";import"./aiAssistant.selectors-DhBhezDt.js";const{expect:s,within:c}=__STORYBOOK_MODULE_TEST__,M={title:"Components/Markdown/AI Markdown",id:"components-data-display-ai-markdown",component:d,tags:["autodocs"],args:{children:`## Formulation summary

Use **oats** for body and a balanced texture.

- Review sweetness
- Validate stability

| Ingredient | Amount |
| --- | --- |
| Oats | 25 g |
| Water | 250 ml |`},argTypes:{children:{control:"text"},id:{control:"text"},className:{control:"text"},components:{control:!1,description:"Optional react-markdown renderer overrides.",table:{defaultValue:{summary:"Built-in markdown renderers"}}}},parameters:{docs:{description:{component:"AiMarkdown renders the product's assistant response blocks. children is markdown, id optionally stabilizes block identity, className styles the root, and components supplies react-markdown renderer overrides. It preserves GFM tables, lists, code, reference definitions, footnotes and the existing long-cell expansion behavior. Redux assistant scope/feedback state determine whether the source-list action appears; the host owns that sidebar. Global Storybook providers supply the store and translations. These fixtures use trusted local markdown and do not claim an untrusted-HTML sanitization boundary. This family is separate from the clipped note renderer and the editable MarkdownEditor."}}},render:o=>i.jsx("div",{className:"pf-story-ai-markdown-preview",children:i.jsx(d,{...o})})},e={},t={args:{children:'```json\n{"status":"draft","name":"Oat drink"}\n```'}},a={args:{children:`The summary keeps its footnote.[^note]

[^note]: Review this illustrative evidence before applying the result.`}},r={play:async({canvasElement:o})=>{const n=c(o);await s(n.getByRole("heading",{name:"Formulation summary"})).toBeVisible(),await s(n.getByRole("table")).toBeVisible(),await s(n.getByRole("columnheader",{name:"Ingredient"})).toBeVisible()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: \'```json\\n{"status":"draft","name":"Oat drink"}\\n```\'\n  }\n}',...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: "The summary keeps its footnote.[^note]\\n\\n[^note]: Review this illustrative evidence before applying the result."
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("heading", {
      name: "Formulation summary"
    })).toBeVisible();
    await expect(canvas.getByRole("table")).toBeVisible();
    await expect(canvas.getByRole("columnheader", {
      name: "Ingredient"
    })).toBeVisible();
  }
}`,...r.parameters?.docs?.source}}};const V=["Playground","Code","Footnotes","TableStructure"];export{t as Code,a as Footnotes,e as Playground,r as TableStructure,V as __namedExportsOrder,M as default};
