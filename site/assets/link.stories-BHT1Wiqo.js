import{j as i}from"./iframe-BXubdNpd.js";import{L as s}from"./link-CkdKlHel.js";import{A as l}from"./arrow-right-BP8w5RA1.js";import{B as d}from"./book-open-BpIDK6Wj.js";import"./preload-helper-PPVm8Dsz.js";const{expect:c,fn:p,userEvent:u,within:m}=__STORYBOOK_MODULE_TEST__,b={title:"Components/Triggers/Link",component:s,tags:["autodocs"],parameters:{layout:"padded",controls:{include:["children","href","intent","size","iconPlacement"]},docs:{description:{component:"Use Link to navigate to a URL, a file or a section. Give it an href and descriptive text. The native anchor supports Tab, Enter, context menus, opening in a new tab and normal anchor attributes. Select Action for routine navigation, Destructive for a destination related to removal, AI for an AI destination, and Accent for a highlighted destination. The text stays underlined. Optional leading and trailing icons are decorative. Use Button for an operation such as deleting an item."}}},args:{children:"Button guidelines",href:"/?path=/docs/ui-button--docs",target:"_top",intent:"action",size:"default",iconPlacement:"none"},argTypes:{children:{name:"Label",control:"text"},href:{control:"text"},intent:{options:["action","destructive","ai","accent"],control:{type:"select",labels:{action:"Action",destructive:"Destructive",ai:"AI",accent:"Accent"}}},size:{options:["xs","sm","default","lg"],control:{type:"select",labels:{xs:"X-small",sm:"Small",default:"Default",lg:"Large"}},description:"The four text sizes measure 8, 12, 14 and 16px at a 16px root."},iconPlacement:{name:"Icons",options:["none","leading","trailing","both"],control:"inline-radio",description:"This example supplies the leadingIcon and trailingIcon content slots."}},render:({iconPlacement:e,...t})=>i.jsx(s,{...t,leadingIcon:(e==="leading"||e==="both")&&i.jsx(d,{}),trailingIcon:(e==="trailing"||e==="both")&&i.jsx(l,{})})},n={},a={args:{iconPlacement:"both",intent:"accent"}},o={args:{onClick:p(e=>e.preventDefault())},play:async({canvasElement:e,args:t})=>{const r=m(e).getByRole("link",{name:"Button guidelines"});await c(r).toHaveAttribute("href",t.href),r.focus(),await u.keyboard("{Enter}"),await c(t.onClick).toHaveBeenCalledTimes(1)}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    iconPlacement: "both",
    intent: "accent"
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    onClick: fn(event => event.preventDefault())
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const link = within(canvasElement).getByRole("link", {
      name: "Button guidelines"
    });
    await expect(link).toHaveAttribute("href", args.href);
    link.focus();
    await userEvent.keyboard("{Enter}");
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  }
}`,...o.parameters?.docs?.source}}};const y=["Playground","WithIcons","KeyboardNavigation"];export{o as KeyboardNavigation,n as Playground,a as WithIcons,y as __namedExportsOrder,b as default};
