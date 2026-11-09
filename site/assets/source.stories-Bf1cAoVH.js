import{h,H as d,j as n}from"./iframe-DgvZnKtv.js";import{S as v,a as w,b as g}from"./source-DNdnJfIR.js";import"./preload-helper-PPVm8Dsz.js";import"./hover-card-CbaK_QEc.js";const{expect:i,userEvent:l,waitFor:b,within:p}=__STORYBOOK_MODULE_TEST__;function x({href:s,label:c,title:e,description:u,showFavicon:m}){return n.jsxs(v,{href:s,children:[n.jsx(w,{label:c||void 0,showFavicon:m}),n.jsx(g,{title:e,description:u})]})}const k={title:"Components/AI & Conversation/Source Preview",component:x,tags:["autodocs"],args:{href:"https://example.com/local-source",label:"Source 1",title:"Illustrative source",description:"Local preview data supplied by the host.",showFavicon:!1},argTypes:{href:{control:"text"},label:{control:"text"},title:{control:"text"},description:{control:"text"},showFavicon:{control:"boolean"}},parameters:{msw:{handlers:[h.get("https://www.google.com/s2/favicons",()=>new d('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><rect width="16" height="16" fill="#64748b"/></svg>',{headers:{"Content-Type":"image/svg+xml"}}))]},docs:{description:{component:"Source supplies href/domain context; SourceTrigger accepts label, showFavicon and className; SourceContent accepts title, description and className. Actual anchors open the supplied URL in a new tab with noopener/noreferrer. Hover reveals the preview; keyboard focus preserves link access. Trigger favicon waits 400ms for a stable URL; content always requests a favicon, replaced by a local MSW image in this story. Hosts must supply trustworthy URLs/content; the component does not verify source claims. This composed hover preview is distinct from the simpler Source Citation family."}}}},t={play:async({canvasElement:s})=>{const e=p(s).getByRole("link",{name:"Source 1"});await i(e).toHaveAttribute("href","https://example.com/local-source"),await i(e).toHaveAttribute("rel","noopener noreferrer"),await l.hover(e),await b(()=>i(p(document.body).getByText("Illustrative source")).toBeVisible()),await l.unhover(e)}},o={args:{label:""}},r={args:{showFavicon:!0}},a={args:{title:"A longer source title that should be clamped in the preview",description:"An illustrative explanation. ".repeat(12)}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    const link = c.getByRole("link", {
      name: "Source 1"
    });
    await expect(link).toHaveAttribute("href", "https://example.com/local-source");
    await expect(link).toHaveAttribute("rel", "noopener noreferrer");
    await userEvent.hover(link);
    await waitFor(() => expect(within(document.body).getByText("Illustrative source")).toBeVisible());
    await userEvent.unhover(link);
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: ""
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    showFavicon: true
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "A longer source title that should be clamped in the preview",
    description: "An illustrative explanation. ".repeat(12)
  }
}`,...a.parameters?.docs?.source}}};const A=["Playground","DomainLabel","Favicon","LongSummary"];export{o as DomainLabel,r as Favicon,a as LongSummary,t as Playground,A as __namedExportsOrder,k as default};
