import{j as r,r as l}from"./iframe-BXubdNpd.js";/* empty css                      */import{M as m,s as d}from"./markdown-table-DgN-cEBS.js";import{E as n}from"./EditableMarkdownTable-BQBeJrXl.js";import"./preload-helper-PPVm8Dsz.js";import"./button-DOg3bB7T.js";import"./index-DKWiT4Fi.js";import"./loader-circle-WJxMtqtu.js";import"./table-cell-sizing-CT2Y4_1Z.js";import"./chevrons-right-BT3DzgxX.js";import"./chevron-left-fIYzLx4k.js";import"./chevron-right-Bt7v18gP.js";import"./index-BXGHVmqw.js";import"./index-D-ztsl9H.js";import"./trash-2-BiFYt1e5.js";import"./plus-BS0_boJY.js";const i=e=>({headers:["#","Name","Value","Notes"],aligns:["right","left","right","left"],rows:Array.from({length:e},(o,a)=>[String(a+1),`Item ${a+1}`,String((a+1)*3),a%5===0?"**flagged**":"ok"])}),v={title:"Components/Markdown/Markdown Table",tags:["autodocs"],id:"markdown-markdowntable",component:m,subcomponents:{EditableMarkdownTable:n}},t={args:{table:i(3e3)}};function p(){const[e,o]=l.useState(()=>i(100));return r.jsxs("div",{className:"pf-story-stack",children:[r.jsx(n,{table:e,onChange:o}),r.jsxs("div",{children:[r.jsx("p",{className:"pf-story-markdown-table-result-label",children:"Serialized markdown (first rows):"}),r.jsxs("pre",{className:"pf-story-markdown-table-result-data",children:[d(e).split(`
`).slice(0,8).join(`
`),`
…`]})]})]})}const s={render:()=>r.jsx(p,{})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    table: buildTable(3000)
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <EditablePreview />
}`,...s.parameters?.docs?.source}}};const O=["ReadOnlyLarge","Editable"];export{s as Editable,t as ReadOnlyLarge,O as __namedExportsOrder,v as default};
