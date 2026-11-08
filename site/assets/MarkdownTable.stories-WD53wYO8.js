import{j as r,r as l}from"./iframe-6uZ_OvXJ.js";/* empty css                      */import{M as m,s as d}from"./markdown-table-Dwdj6C-H.js";import{E as n}from"./EditableMarkdownTable-BRdmstmo.js";import"./preload-helper-PPVm8Dsz.js";import"./button-A8HzViyP.js";import"./index-BIEDR5QJ.js";import"./loader-circle-DPzNQWfU.js";import"./table-cell-sizing-9Qu5gc3X.js";import"./chevrons-right-BhJPoqIC.js";import"./chevron-left-ByPwEqFW.js";import"./chevron-right-DQAu3Wv6.js";import"./index-C6UO2wHL.js";import"./index-D-ztsl9H.js";import"./trash-2-BanePgH0.js";import"./plus-CjxSM-tB.js";const i=e=>({headers:["#","Name","Value","Notes"],aligns:["right","left","right","left"],rows:Array.from({length:e},(o,a)=>[String(a+1),`Item ${a+1}`,String((a+1)*3),a%5===0?"**flagged**":"ok"])}),v={title:"Components/Markdown/Markdown Table",tags:["autodocs"],id:"markdown-markdowntable",component:m,subcomponents:{EditableMarkdownTable:n}},t={args:{table:i(3e3)}};function p(){const[e,o]=l.useState(()=>i(100));return r.jsxs("div",{className:"pf-story-stack",children:[r.jsx(n,{table:e,onChange:o}),r.jsxs("div",{children:[r.jsx("p",{className:"pf-story-markdown-table-result-label",children:"Serialized markdown (first rows):"}),r.jsxs("pre",{className:"pf-story-markdown-table-result-data",children:[d(e).split(`
`).slice(0,8).join(`
`),`
…`]})]})]})}const s={render:()=>r.jsx(p,{})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    table: buildTable(3000)
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <EditablePreview />
}`,...s.parameters?.docs?.source}}};const O=["ReadOnlyLarge","Editable"];export{s as Editable,t as ReadOnlyLarge,O as __namedExportsOrder,v as default};
