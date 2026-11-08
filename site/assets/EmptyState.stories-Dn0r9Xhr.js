import{e as m,j as t,S as u,r as h}from"./iframe-BXubdNpd.js";/* empty css                      */import{E as c}from"./EmptyState-DCD9wIrq.js";import{P as y}from"./package-CC18m6t3.js";import"./preload-helper-PPVm8Dsz.js";import"./GradientButton-KU-jgc31.js";import"./button-DOg3bB7T.js";import"./index-DKWiT4Fi.js";import"./loader-circle-WJxMtqtu.js";const g=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]],i=m("inbox",g),{expect:x,fn:f,userEvent:S,within:b}=__STORYBOOK_MODULE_TEST__,d={Inbox:i,Package:y,Search:u};function A({iconName:o,...e}){const[l,p]=h.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(c,{...e,icon:d[o],onAction:e.onAction?()=>{p(!0),e.onAction?.()}:void 0}),t.jsx("p",{role:"status",children:l?"Action requested":"Ready"})]})}const w={title:"Components/Feedback/Empty state",component:c,tags:["autodocs"],parameters:{docs:{description:{component:"Reusable centered empty-content state with a Lucide icon, title, optional description, children and the existing gradient CTA. The action renders only when actionLabel and onAction are both supplied. Icon is a story selector for the real icon prop. className, iconColorClass and iconBgClass are source-supported customization hooks; this specimen preserves the product defaults. A separate TableEmptyState exists for table-specific contexts and is documented within Data Grid."}},controls:{include:["iconName","title","description","actionLabel"]}},args:{icon:i,iconName:"Inbox",title:"No items yet",description:"Add the first item to start this collection.",actionLabel:"Add item",onAction:f()},argTypes:{icon:{control:!1},iconName:{name:"Icon",control:"inline-radio",options:Object.keys(d)},title:{control:"text"},description:{control:"text"},actionLabel:{control:"text"}},render:o=>t.jsx(A,{...o})},n={play:async({canvasElement:o})=>{const e=b(o);await S.click(e.getByRole("button",{name:"Add item"})),await x(e.getByRole("status")).toHaveTextContent("Action requested")}},a={args:{actionLabel:void 0,onAction:void 0}},s={args:{iconName:"Search",title:"No matches",description:"Try another search or adjust the filters.",actionLabel:"Clear filters"}},r={args:{children:t.jsx("p",{className:"pf-story-note",children:"Supported files: CSV and XLSX."})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Add item"
    }));
    await expect(canvas.getByRole("status")).toHaveTextContent("Action requested");
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    actionLabel: undefined,
    onAction: undefined
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "Search",
    title: "No matches",
    description: "Try another search or adjust the filters.",
    actionLabel: "Clear filters"
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: <p className="pf-story-note">Supported files: CSV and XLSX.</p>
  }
}`,...r.parameters?.docs?.source}}};const k=["Playground","NoAction","NoResults","WithSupportingContent"];export{a as NoAction,s as NoResults,n as Playground,r as WithSupportingContent,k as __namedExportsOrder,w as default};
