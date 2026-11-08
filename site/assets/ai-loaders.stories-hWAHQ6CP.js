import{j as g}from"./iframe-AqpYXns4.js";import{L as x}from"./loaders-Cac07gz3.js";import"./preload-helper-PPVm8Dsz.js";const T={title:"Components/AI & Conversation/Response Loaders",component:x,tags:["autodocs"],args:{variant:"typing",size:"md",text:"Preparing a local response"},argTypes:{variant:{control:"select",options:["circular","classic","pulse","pulse-dot","dots","typing","wave","bars","terminal","text-blink","text-shimmer","loading-dots"]},size:{control:"inline-radio",options:["sm","md","lg"]},text:{control:"text"}},parameters:{docs:{description:{component:"The actual Loader API selects twelve existing response animations using variant, size, text and className. Text is used only by text-blink, text-shimmer and loading-dots; other variants retain their own accessible loading text. The individual CircularLoader, ClassicLoader, PulseLoader, PulseDotLoader, DotsLoader, TypingLoader, WaveLoader, BarsLoader, TerminalLoader, TextBlinkLoader, TextShimmerLoader and TextDotsLoader exports remain available. Host code owns loading lifecycle and a status announcement; rendering animation does not imply an AI request. Owned group tokens define the visual and motion choices. Recorded interaction, compiled-value and accessibility checks cover the supported fixtures; hosts must verify their own loading announcements and composed backgrounds."}}},decorators:[v=>g.jsx("div",{role:"status","aria-label":"Response in progress",className:"pf-story-ai-loaders-status-frame",children:g.jsx(v,{})})]},a={},r={args:{variant:"circular"}},e={args:{variant:"classic"}},s={args:{variant:"pulse"}},o={args:{variant:"pulse-dot"}},t={args:{variant:"dots"}},n={args:{variant:"wave"}},i={args:{variant:"bars"}},c={args:{variant:"terminal"}},d={args:{variant:"text-blink"}},m={args:{variant:"text-shimmer"}},l={args:{variant:"loading-dots"}},p={args:{size:"sm"}},u={args:{size:"lg"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "circular"
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "classic"
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "pulse"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "pulse-dot"
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "dots"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "wave"
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "bars"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "terminal"
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "text-blink"
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "text-shimmer"
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "loading-dots"
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm"
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg"
  }
}`,...u.parameters?.docs?.source}}};const b=["Playground","Circular","Classic","Pulse","PulseDot","Dots","Wave","Bars","Terminal","BlinkText","ShimmerText","TextWithDots","Small","Large"];export{i as Bars,d as BlinkText,r as Circular,e as Classic,t as Dots,u as Large,a as Playground,s as Pulse,o as PulseDot,m as ShimmerText,p as Small,c as Terminal,l as TextWithDots,n as Wave,b as __namedExportsOrder,T as default};
