import{j as e}from"./iframe-AqpYXns4.js";import{C as p,b as d,a as i}from"./code-block-B6Cq0LfI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8G61PpGJ.js";import"./index-C6ZnvOnQ.js";const{expect:m,waitFor:u,within:g}=__STORYBOOK_MODULE_TEST__;function h({code:r,language:n,theme:c,showHeader:l}){return e.jsxs(p,{className:"pf-story-code-block-preview",children:[l&&e.jsxs(d,{className:"pf-story-code-block-heading",children:[e.jsx("span",{children:"Response example"}),e.jsx("span",{children:n})]}),e.jsx(i,{"aria-label":"Code example",code:r,language:n,theme:c})]})}const f={title:"Components/AI & Conversation/Code Block",component:h,tags:["autodocs"],args:{code:'const recipe = { name: "Oat drink", reviewed: false };',language:"typescript",theme:"github-light",showHeader:!0},argTypes:{code:{control:"text"},language:{control:"select",options:["typescript","json","css","text","unsupported-example"]},theme:{control:"select",options:["github-light","github-dark"]},showHeader:{control:"boolean"}},parameters:{docs:{description:{component:"CodeBlock provides the surface, CodeBlockGroup composes a header/actions, and CodeBlockCode accepts code, language (default tsx), theme (default github-light), className and div props. Shiki highlights asynchronously; unsupported language/theme values preserve readable plain code. Host code chooses a syntax theme appropriate to its presentation and owns any copy/download controls. This specimen shows actual rendering, including empty and fallback states, without executing the supplied code."}}}},a={play:async({canvasElement:r})=>{await u(()=>m(g(r).getByLabelText("Code example")).toHaveTextContent('const recipe = { name: "Oat drink", reviewed: false };'))}},o={args:{theme:"github-dark"}},s={args:{language:"unsupported-example",code:"Readable fallback remains available."}},t={args:{code:"",showHeader:!1}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await waitFor(() => expect(within(canvasElement).getByLabelText("Code example")).toHaveTextContent('const recipe = { name: "Oat drink", reviewed: false };'));
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    theme: "github-dark"
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    language: "unsupported-example",
    code: "Readable fallback remains available."
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    code: "",
    showHeader: false
  }
}`,...t.parameters?.docs?.source}}};const C=["Playground","DarkSyntax","PlainFallback","Empty"];export{o as DarkSyntax,t as Empty,s as PlainFallback,a as Playground,C as __namedExportsOrder,f as default};
