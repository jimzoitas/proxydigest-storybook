import{j as i}from"./iframe-6uZ_OvXJ.js";import{Q as c}from"./QueryNavigator-b9_oEew2.js";import"./preload-helper-PPVm8Dsz.js";import"./hover-card-B1VUedu_.js";const s=[{key:"q-0",text:"Generate a Tomato Soup recipe"},{key:"q-1",text:"How do we enhance umami perception"},{key:"q-2",text:"What formulation and processing strategies are available for sodium reduction"},{key:"q-3",text:"Swap the cream for a plant-based alternative"},{key:"q-4",text:"Summarize the allergen profile of the current formula"}],m=Array.from({length:30},(o,n)=>({key:`q-${n}`,text:`Query ${n+1}: a deliberately long question about formulation strategies, ingredient interactions, regulatory constraints and sensory trade-offs that will definitely overflow a single line`})),g={title:"Product examples/AiAssistant/QueryNavigator",id:"aiassistant-querynavigator",component:c,parameters:{layout:"fullscreen"},tags:["autodocs"],decorators:[o=>i.jsx("div",{className:"pf-story-ai-assistant-query-navigator-viewport",children:i.jsx(o,{})})]},e={args:{items:s,onSelect:()=>{}}},r={args:{items:s.slice(0,2),onSelect:()=>{}}},a={args:{items:m,onSelect:()=>{}}},t={args:{items:s,onSelect:()=>{},defaultOpen:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleQueries,
    onSelect: () => {}
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleQueries.slice(0, 2),
    onSelect: () => {}
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: manyLongQueries,
    onSelect: () => {}
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleQueries,
    onSelect: () => {},
    defaultOpen: true
  }
}`,...t.parameters?.docs?.source}}};const y=["Default","TwoQueries","ManyLongQueries","OpenByDefault"];export{e as Default,a as ManyLongQueries,t as OpenByDefault,r as TwoQueries,y as __namedExportsOrder,g as default};
