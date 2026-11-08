import{j as o}from"./iframe-6uZ_OvXJ.js";import{C as i}from"./ConnectionStatusIndicator-7xhCYf5z.js";import"./preload-helper-PPVm8Dsz.js";const{expect:c,within:r}=__STORYBOOK_MODULE_TEST__,m={title:"Components/AI & Conversation/Connection Status",component:i,tags:["autodocs"],args:{health:"unstable"},argTypes:{health:{control:"inline-radio",options:["stable","unstable","disconnected","offline"]}},parameters:{docs:{description:{component:"The actual AiAssistant ConnectionStatusIndicator accepts health (stable/unstable/disconnected/offline) and className. Stable intentionally renders nothing; unstable/disconnected pulse, while offline is static. Visible text communicates the state independently of color. The hook that measures health, reconnect policy and WebSocket connection stay in the host. This playground changes a supplied state and does not test connectivity. Tooltip details are supplementary; no keyboard-only or reduced-motion conformance is inferred from these render checks."}}},decorators:[e=>o.jsx("div",{className:"pf-story-connection-status-indicator-status-frame",children:o.jsx(e,{})})]},t={play:async({canvasElement:e})=>{await c(r(e).getByText("Unstable Connection")).toBeVisible()}},n={args:{health:"stable"},play:async({canvasElement:e})=>{await c(r(e).queryByText("Connected")).not.toBeInTheDocument()}},a={args:{health:"disconnected"}},s={args:{health:"offline"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByText("Unstable Connection")).toBeVisible();
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    health: "stable"
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).queryByText("Connected")).not.toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    health: "disconnected"
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    health: "offline"
  }
}`,...s.parameters?.docs?.source}}};const h=["Playground","Stable","Disconnected","Offline"];export{a as Disconnected,s as Offline,t as Playground,n as Stable,h as __namedExportsOrder,m as default};
