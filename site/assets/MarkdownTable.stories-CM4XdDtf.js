import{j as r,r as l}from"./iframe-nhB53rPD.js";/* empty css                      */import{M as m,s as d}from"./markdown-table-ZsHX39Lh.js";import{E as n}from"./EditableMarkdownTable-BhoEcxSk.js";import"./preload-helper-PPVm8Dsz.js";import"./button-_tcBhp5_.js";import"./index-8Dbc_Jva.js";import"./loader-circle-MxHlgpxw.js";import"./table-cell-sizing-PMkloevH.js";import"./chevrons-right-BOcK7-GR.js";import"./chevron-left-Dcrje28Y.js";import"./chevron-right-CavErG_J.js";import"./index-DzqWsyd1.js";import"./index-C6ZnvOnQ.js";import"./trash-2-DICbQNLz.js";import"./plus-0cDzJ2QO.js";const i=e=>({headers:["#","Name","Value","Notes"],aligns:["right","left","right","left"],rows:Array.from({length:e},(o,a)=>[String(a+1),`Item ${a+1}`,String((a+1)*3),a%5===0?"**flagged**":"ok"])}),v={title:"Components/Markdown/Markdown Table",tags:["autodocs"],id:"markdown-markdowntable",component:m,subcomponents:{EditableMarkdownTable:n}},t={args:{table:i(3e3)}};function p(){const[e,o]=l.useState(()=>i(100));return r.jsxs("div",{className:"pf-story-stack",children:[r.jsx(n,{table:e,onChange:o}),r.jsxs("div",{children:[r.jsx("p",{className:"pf-story-markdown-table-result-label",children:"Serialized markdown (first rows):"}),r.jsxs("pre",{className:"pf-story-markdown-table-result-data",children:[d(e).split(`
`).slice(0,8).join(`
`),`
…`]})]})]})}const s={render:()=>r.jsx(p,{})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    table: buildTable(3000)
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <EditablePreview />
}`,...s.parameters?.docs?.source}}};const O=["ReadOnlyLarge","Editable"];export{s as Editable,t as ReadOnlyLarge,O as __namedExportsOrder,v as default};
