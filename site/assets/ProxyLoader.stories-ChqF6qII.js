import{j as s,ab as t}from"./iframe-AqpYXns4.js";import"./preload-helper-PPVm8Dsz.js";const{expect:n,within:i}=__STORYBOOK_MODULE_TEST__,p={title:"Components/Feedback/Proxy Loader",component:t,tags:["autodocs"],args:{isLoading:!0},argTypes:{isLoading:{control:"boolean"},size:{control:{type:"range",min:12,max:80,step:1}},className:{control:"text"}},parameters:{docs:{description:{component:"ProxyLoader preserves the ClipLoader animation and public API. isLoading controls visibility; size optionally overrides the numeric spinner diameter; className passes through. Feedback-owned groups define the default 40px diameter, stroke, radius, duration and exact light/dark ink. The default playground exercises those tokens; Compact demonstrates an explicit 18px caller override. The loader inherits the active theme through CSS and uses the existing loading translation. Hosts provide the operation label and loading-state announcement around the spinner."}}},render:o=>s.jsx("div",{className:"pf-story-proxy-loader-loader-frame",children:s.jsx(t,{...o})})},e={},a={args:{size:18}},r={args:{isLoading:!1},play:async({canvasElement:o})=>{await n(i(o).queryByTestId("loader")).not.toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 18
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: false
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).queryByTestId("loader")).not.toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};const l=["Playground","Compact","Idle"];export{a as Compact,r as Idle,e as Playground,l as __namedExportsOrder,p as default};
