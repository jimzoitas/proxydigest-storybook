import{j as r,r as l}from"./iframe-DgvZnKtv.js";/* empty css                      */import{M as m,s as d}from"./markdown-table-BE98YWmw.js";import{E as n}from"./EditableMarkdownTable-9MT7TvQS.js";import"./preload-helper-PPVm8Dsz.js";import"./button-CEcYiQdY.js";import"./index-BWlKOsdO.js";import"./loader-circle-BsZrs7F6.js";import"./table-cell-sizing-D_euRQfv.js";import"./chevrons-right-BCdjAw1-.js";import"./chevron-left-96ijkid2.js";import"./chevron-right-B8SZue5v.js";import"./index-KcL-zyNj.js";import"./index-D-ztsl9H.js";import"./trash-2-0mPhte3X.js";import"./plus-BMpb-JrX.js";const i=e=>({headers:["#","Name","Value","Notes"],aligns:["right","left","right","left"],rows:Array.from({length:e},(o,a)=>[String(a+1),`Item ${a+1}`,String((a+1)*3),a%5===0?"**flagged**":"ok"])}),v={title:"Components/Markdown/Markdown Table",tags:["autodocs"],id:"markdown-markdowntable",component:m,subcomponents:{EditableMarkdownTable:n}},t={args:{table:i(3e3)}};function p(){const[e,o]=l.useState(()=>i(100));return r.jsxs("div",{className:"pf-story-stack",children:[r.jsx(n,{table:e,onChange:o}),r.jsxs("div",{children:[r.jsx("p",{className:"pf-story-markdown-table-result-label",children:"Serialized markdown (first rows):"}),r.jsxs("pre",{className:"pf-story-markdown-table-result-data",children:[d(e).split(`
`).slice(0,8).join(`
`),`
…`]})]})]})}const s={render:()=>r.jsx(p,{})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    table: buildTable(3000)
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <EditablePreview />
}`,...s.parameters?.docs?.source}}};const O=["ReadOnlyLarge","Editable"];export{s as Editable,t as ReadOnlyLarge,O as __namedExportsOrder,v as default};
