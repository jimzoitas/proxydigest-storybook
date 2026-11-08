import{j as a,r as c}from"./iframe-AqpYXns4.js";/* empty css                      */import{B as h}from"./button-B5FjjXWS.js";import{C as m}from"./CollapsibleCard-CWxyjK0b.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DEXj3--c.js";import"./loader-circle-mWFWE2W9.js";const{expect:d,userEvent:p,within:b}=__STORYBOOK_MODULE_TEST__;function v(e){const[t,u]=c.useState(e.open??!0),[f,y]=c.useState("No header action yet.");return c.useEffect(()=>u(e.open??!0),[e.open]),a.jsxs("div",{className:"pf-story-collapsible-card-preview",children:[a.jsx(m,{...e,open:t,onOpenChange:g=>{u(g),e.onOpenChange?.(g)},actions:a.jsx(h,{variant:"outline",size:"sm",onClick:()=>y("Header action selected."),children:"Add item"})}),a.jsxs("p",{role:"status",className:"pf-story-note",children:[f," Body is"," ",e.collapsible===!1||t?"visible":"hidden","."]})]})}const j={title:"Components/Surfaces/Collapsible Card",component:m,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Card shell with a title or custom React node, independent header actions, and optional collapsed body. open/onOpenChange makes it controlled; defaultOpen initializes the uncontrolled form. collapsible=false keeps the body visible regardless of open. This page uses the real shell and keeps header actions distinct from its toggle."}}},args:{title:"Formula details",collapsible:!0,open:!0,toggleAriaLabel:"Toggle formula details",children:a.jsx("div",{className:"pf-story-section-content",children:"Ingredients and specifications appear in the body."})},argTypes:{title:{control:"text"},open:{control:"boolean"},collapsible:{control:"boolean"},toggleAriaLabel:{control:"text"},children:{control:!1},actions:{control:!1},defaultOpen:{control:!1},onOpenChange:{action:"open changed"}},render:e=>a.jsx(v,{...e})},n={},o={args:{open:!1}},s={args:{collapsible:!1,open:!1}},r={args:{title:a.jsxs("div",{children:[a.jsx("strong",{children:"Specification"}),a.jsx("p",{className:"pf-story-note",children:"Custom header content"})]})},argTypes:{title:{control:!1}}},l={render:e=>a.jsx(m,{...e,open:void 0,defaultOpen:!1})},i={play:async({canvasElement:e})=>{const t=b(e);await p.click(t.getByRole("button",{name:"Add item"})),await d(t.getByRole("status")).toHaveTextContent("Header action selected. Body is visible."),await p.click(t.getByRole("button",{name:"Toggle formula details"})),await d(t.queryByText("Ingredients and specifications appear in the body.")).toBeNull(),await p.click(t.getByRole("button",{name:"Toggle formula details"})),await d(t.getByText("Ingredients and specifications appear in the body.")).toBeVisible()}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    open: false
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: false,
    open: false
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: <div>
        <strong>Specification</strong>
        <p className="pf-story-note">Custom header content</p>
      </div>
  },
  argTypes: {
    title: {
      control: false
    }
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <CollapsibleCard {...args} open={undefined} defaultOpen={false} />
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Add item"
    }));
    await expect(canvas.getByRole("status")).toHaveTextContent("Header action selected. Body is visible.");
    await userEvent.click(canvas.getByRole("button", {
      name: "Toggle formula details"
    }));
    await expect(canvas.queryByText("Ingredients and specifications appear in the body.")).toBeNull();
    await userEvent.click(canvas.getByRole("button", {
      name: "Toggle formula details"
    }));
    await expect(canvas.getByText("Ingredients and specifications appear in the body.")).toBeVisible();
  }
}`,...i.parameters?.docs?.source}}};const E=["Playground","InitiallyCollapsed","StaticCard","CustomHeader","Uncontrolled","IndependentActions"];export{r as CustomHeader,i as IndependentActions,o as InitiallyCollapsed,n as Playground,s as StaticCard,l as Uncontrolled,E as __namedExportsOrder,j as default};
