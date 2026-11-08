import{h as r,H as s}from"./iframe-BXubdNpd.js";import{S as c}from"./source-basic-BLiCKh-9.js";import"./preload-helper-PPVm8Dsz.js";import"./source-Y1udLlHr.js";import"./hover-card-DOvxW5L6.js";const{expect:l,userEvent:p,within:o}=__STORYBOOK_MODULE_TEST__,v={title:"Components/Data Display/Source Citation",component:c,tags:["autodocs"],args:{href:"https://example.com/reference",name:"Illustrative reference",description:"An example citation used to explain this ingredient decision."},argTypes:{href:{control:"text"},name:{control:"text"},description:{control:"text"}},parameters:{msw:{handlers:[r.get("https://www.google.com/s2/favicons",()=>new s('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><rect width="16" height="16" rx="3" fill="#6b7280"/></svg>',{headers:{"Content-Type":"image/svg+xml"}}))]},docs:{description:{component:"SourceBasic is the product's compact citation wrapper over Source, SourceTrigger and SourceContent. href supplies the destination and derived domain, name is the hover-card title, description the summary. Hover or focus reveals context; activating the link opens a new tab. Favicon requests are mocked in these stories. The host owns trusted citation data and URL policy. This page demonstrates the existing API, not a new citation implementation."}}}},e={},t={args:{name:"A longer reference title used to review line clamping in the existing source card",description:"This is an intentionally long summary explaining the source context, applicability and limits. The production component controls truncation while the link retains its original destination."}},n={play:async({canvasElement:i})=>{const a=o(i);await p.hover(a.getByRole("link",{name:/example.com/})),await l(await o(document.body).findByText("Illustrative reference")).toBeVisible()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    name: "A longer reference title used to review line clamping in the existing source card",
    description: "This is an intentionally long summary explaining the source context, applicability and limits. The production component controls truncation while the link retains its original destination."
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByRole("link", {
      name: /example.com/
    }));
    await expect(await within(document.body).findByText("Illustrative reference")).toBeVisible();
  }
}`,...n.parameters?.docs?.source}}};const w=["Playground","LongDescription","HoverContext"];export{n as HoverContext,t as LongDescription,e as Playground,w as __namedExportsOrder,v as default};
