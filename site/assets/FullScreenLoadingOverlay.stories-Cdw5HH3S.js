import{j as o,r as i}from"./iframe-nhB53rPD.js";/* empty css                      */import{B as c}from"./button-_tcBhp5_.js";import{F as m}from"./FullScreenLoadingOverlay-DGqLk5vN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8Dbc_Jva.js";import"./loader-circle-MxHlgpxw.js";/* empty css                          */const{expect:l,userEvent:p,within:d}=__STORYBOOK_MODULE_TEST__;function u(e){const[a,r]=i.useState(e.open);return i.useEffect(()=>r(e.open),[e.open]),o.jsxs("div",{className:"pf-story-grid",children:[o.jsxs("div",{className:"pf-story-actions",children:[o.jsx(c,{onClick:()=>r(!0),children:"Show overlay"}),o.jsx(c,{variant:"outline",onClick:()=>r(!1),children:"Finish local operation"})]}),o.jsxs("div",{style:{position:"relative",transform:"translateZ(0)",height:340,overflow:"hidden"},children:[o.jsx("p",{children:"Bounded application area"}),o.jsx(m,{...e,open:a})]})]})}const B={title:"Patterns/Loading Overlay",component:m,tags:["autodocs"],args:{open:!1,message:"Preparing your recipe",subMessage:"This example makes no network request."},argTypes:{open:{control:"boolean"},message:{control:"text"},subMessage:{control:"text"}},parameters:{docs:{description:{component:"Actual full-screen loading overlay, bounded only by the story's transformed frame. open controls rendering, message names its dialog, subMessage gives supporting context. The host owns operation completion and visibility. This source is a visual blocking overlay: it does not implement a focus trap or make background content inert. Supply a nonempty message, coordinate focus/background interaction at the host, and do not treat this specimen as a complete accessible modal primitive. Local controls remain outside the bounded frame so the experiment can be ended."}}},render:e=>o.jsx(u,{...e})},n={},t={args:{open:!0},parameters:{docs:{story:{inline:!1,height:460}}}},s={play:async({canvasElement:e})=>{const a=d(e);await p.click(a.getByRole("button",{name:"Show overlay"})),await l(a.getByRole("dialog",{name:"Preparing your recipe"})).toBeVisible(),await p.click(a.getByRole("button",{name:"Finish local operation"})),await l(a.queryByRole("dialog")).not.toBeInTheDocument()}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    open: true
  },
  parameters: {
    docs: {
      story: {
        inline: false,
        height: 460
      }
    }
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Show overlay"
    }));
    await expect(canvas.getByRole("dialog", {
      name: "Preparing your recipe"
    })).toBeVisible();
    await userEvent.click(canvas.getByRole("button", {
      name: "Finish local operation"
    }));
    await expect(canvas.queryByRole("dialog")).not.toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};const k=["Playground","Visible","LocalLifecycle"];export{s as LocalLifecycle,n as Playground,t as Visible,k as __namedExportsOrder,B as default};
