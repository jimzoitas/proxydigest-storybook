import{j as r}from"./iframe-DgvZnKtv.js";/* empty css                      */import{M as v}from"./MemberAvatars-D96gCJJu.js";import"./preload-helper-PPVm8Dsz.js";import"./avatar-BapWT1f9.js";import"./roleDisplayNames-DRBlmhM2.js";import"./user-plus-DuOeJ2tP.js";import"./user-star-p3_xbT-o.js";import"./roleColors-C3j0TQHu.js";const{expect:a,userEvent:p,within:y}=__STORYBOOK_MODULE_TEST__,g=[{id:"one-owner",userId:"one",userDisplayName:"Maya Chen",role:"creator"},{id:"one-editor",userId:"one",userDisplayName:"Maya Chen",role:"editor"},{id:"two",userDisplayName:"Alex Rivera",role:"editor"},{id:"three",userDisplayName:"Sam",role:"viewer"},{id:"four",role:"viewer"},{id:"five",userDisplayName:"Noor Ali",role:"viewer"}],f={title:"Components/Data Display/Member Avatars",component:v,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Overlapping member initials with role color and hover tooltips. Duplicate records with the same userId (or id) are combined; maxDisplay counts unique members and the overflow avatar reports the remaining count. Sizes, border and grayscale are independent options. Roles can be supplied as role strings, role arrays or roles arrays; duplicate records aggregate the normalized values before choosing the strongest role color."}}},args:{members:g,maxDisplay:3,size:"sm",showBorder:!0,grayscale:!1},argTypes:{members:{control:"object"},maxDisplay:{control:{type:"number",min:0,max:6}},size:{control:"select",options:["sm","md","lg"]},showBorder:{control:"boolean"},grayscale:{control:"boolean"},roles:{control:"object"}}},o={},s={render:t=>r.jsx("div",{className:"pf-story-spacious-stack",children:["sm","md","lg"].map(e=>r.jsxs("div",{className:"pf-story-compact-stack",children:[r.jsx("p",{className:"pf-story-body",children:e}),r.jsx(v,{...t,size:e})]},e))})},n={args:{grayscale:!0,showBorder:!1}},i={args:{maxDisplay:6}},c={args:{members:[]}},l={args:{members:[{id:"custom",userDisplayName:"Rae Park",role:"team-editor"}],roles:[{name:"Editor",value:"team-editor"}]}},m={play:async({canvasElement:t})=>{const e=y(t);await a(e.getAllByText("MC")).toHaveLength(1),await a(e.getByText("+2")).toBeVisible(),await p.hover(e.getByText("MC")),await a(await y(document.body).findByRole("tooltip")).toHaveTextContent("Maya Chen"),await p.unhover(e.getByText("MC"))}},d={args:{members:[{id:"maya-a",userId:"maya",userDisplayName:"Maya Chen",roles:["viewer","editor"]},{id:"maya-b",userId:"maya",userDisplayName:"Maya Chen",role:["admin","editor"]},{id:"alex",userDisplayName:"Alex Rivera",role:"viewer; editor"}]},play:async({canvasElement:t})=>{const e=y(t);await a(e.getAllByText("MC")).toHaveLength(1),await a(e.getByText("MC")).toHaveClass("pf-role__avatar-admin"),await a(e.getByText("AR")).toHaveClass("pf-role__avatar-edit"),await p.hover(e.getByText("MC"));const u=await y(document.body).findByRole("tooltip");await a(u).toHaveTextContent(/Maya Chen/),await a(u).toHaveTextContent(/Viewer/),await a(u).toHaveTextContent(/Editor/),await p.unhover(e.getByText("MC"))}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div className="pf-story-spacious-stack">
      {(["sm", "md", "lg"] as const).map(size => <div key={size} className="pf-story-compact-stack">
          <p className="pf-story-body">{size}</p>
          <MemberAvatars {...args} size={size} />
        </div>)}
    </div>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    grayscale: true,
    showBorder: false
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    maxDisplay: 6
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    members: []
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    members: [{
      id: "custom",
      userDisplayName: "Rae Park",
      role: "team-editor"
    }],
    roles: [{
      name: "Editor",
      value: "team-editor"
    }]
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("MC")).toHaveLength(1);
    await expect(canvas.getByText("+2")).toBeVisible();
    await userEvent.hover(canvas.getByText("MC"));
    await expect(await within(document.body).findByRole("tooltip")).toHaveTextContent("Maya Chen");
    await userEvent.unhover(canvas.getByText("MC"));
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    members: [{
      id: "maya-a",
      userId: "maya",
      userDisplayName: "Maya Chen",
      roles: ["viewer", "editor"]
    }, {
      id: "maya-b",
      userId: "maya",
      userDisplayName: "Maya Chen",
      role: ["admin", "editor"]
    }, {
      id: "alex",
      userDisplayName: "Alex Rivera",
      role: "viewer; editor"
    }]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("MC")).toHaveLength(1);
    await expect(canvas.getByText("MC")).toHaveClass("pf-role__avatar-admin");
    await expect(canvas.getByText("AR")).toHaveClass("pf-role__avatar-edit");
    await userEvent.hover(canvas.getByText("MC"));
    const tooltip = await within(document.body).findByRole("tooltip");
    await expect(tooltip).toHaveTextContent(/Maya Chen/);
    await expect(tooltip).toHaveTextContent(/Viewer/);
    await expect(tooltip).toHaveTextContent(/Editor/);
    await userEvent.unhover(canvas.getByText("MC"));
  }
}`,...d.parameters?.docs?.source}}};const A=["Playground","Sizes","GrayscaleWithoutBorder","AllMembersAndFallback","Empty","RoleDefinitions","DeduplicationAndTooltip","ArrayRolesAndDuplicateRecords"];export{i as AllMembersAndFallback,d as ArrayRolesAndDuplicateRecords,m as DeduplicationAndTooltip,c as Empty,n as GrayscaleWithoutBorder,o as Playground,l as RoleDefinitions,s as Sizes,A as __namedExportsOrder,f as default};
