import{j as a,r}from"./iframe-AqpYXns4.js";/* empty css                      */import{B as x}from"./button-B5FjjXWS.js";import{C as v}from"./collapsible-sidebar-DvvglLsy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DEXj3--c.js";import"./loader-circle-mWFWE2W9.js";import"./search-field-Geq7aFHv.js";import"./input-DLCq6ZzS.js";import"./index.module-B2X8Wkxy.js";import"./message-square-Dlvdptdj.js";const{expect:s,fn:h,userEvent:i,waitFor:B,within:E}=__STORYBOOK_MODULE_TEST__;function k(e){const[n,t]=r.useState(e.open),[m,b]=r.useState(e.searchValue??""),[y,f]=r.useState(!1),[C,S]=r.useState(""),g=r.useRef(null);r.useEffect(()=>t(e.open),[e.open]),r.useEffect(()=>b(e.searchValue??""),[e.searchValue]);const w=["Oat drink review","Cocoa formulation",...y?["Citrus beverage"]:[]].filter(o=>o.toLowerCase().includes(m.toLowerCase()));return a.jsxs("div",{className:"pf-story-grid",children:[a.jsx(x,{ref:g,onClick:()=>t(!0),children:"Open collection sidebar"}),a.jsxs("div",{className:"pf-story-collapsible-sidebar-frame",children:[a.jsx(v,{...e,open:n,className:"pf-story-collapsible-sidebar-sidebar",searchValue:m,onSearchChange:o=>{b(o),e.onSearchChange?.(o)},isEmpty:e.isEmpty||w.length===0,hasMore:e.hasMore&&!y,onLoadMore:()=>{f(!0),e.onLoadMore?.()},onClose:()=>{t(!1),e.onClose?.(),g.current?.focus()},children:w.map(o=>a.jsx(x,{variant:"ghost",className:"pf-story-collapsible-sidebar-nav-item",onClick:()=>S(o),children:o},o))}),a.jsxs("main",{className:"pf-story-collapsible-sidebar-split-content",children:[a.jsx("h2",{className:"pf-story-heading-weight",children:"Page content"}),a.jsx("p",{children:"The sidebar keeps its existing push behavior."}),a.jsx("output",{"aria-label":"Selected item",children:C||"No item selected"})]})]}),a.jsx("output",{"aria-label":"Sidebar visibility",children:n?"Open":"Closed"})]})}const _={title:"Patterns/Collection Sidebar",component:v,tags:["autodocs"],args:{open:!0,title:"Recent work",searchValue:"",searchPlaceholder:"Search recent work",isLoading:!1,isEmpty:!1,sectionLabel:"Recent items",hasMore:!0,onClose:h(),onSearchChange:h(),onLoadMore:h()},argTypes:{open:{control:"boolean"},title:{control:"text"},searchValue:{control:"text"},searchPlaceholder:{control:"text"},isLoading:{control:"boolean"},isEmpty:{control:"boolean"},emptyStateMessage:{control:"text"},sectionLabel:{control:"text"},hasMore:{control:"boolean"},loadMoreLabel:{control:"text"},openWidthClass:{control:"text"},children:{control:!1},emptyStateIcon:{control:!1},className:{control:!1},headerClassName:{control:"text"}},parameters:{docs:{description:{component:"The existing controlled CollapsibleSidebar with header, optional search, loading/empty states, content and load-more action. open controls width while retaining mounted content; closed content is inert and hidden from assistive technology. onClose requests closure; the host controls state and focus return (demonstrated here). Search uses the existing SearchInput debounce rather than a new instant behavior. onLoadMore requests more data; the host owns paging and requests. title, sectionLabel, emptyStateMessage and labels are configurable; openWidthClass defaults to w-80. Header and EmptyState are also exported subparts. The fixture supplies local list items and bounds height via className, preserving the actual push composition and selection across closing."}}},render:e=>a.jsx(k,{...e})},c={},l={args:{isLoading:!0}},d={args:{isEmpty:!0,emptyStateMessage:"No recent work found"}},u={args:{open:!1}},p={play:async({canvasElement:e,args:n})=>{const t=E(e);await i.click(t.getByRole("button",{name:"Oat drink review"})),t.getByRole("button",{name:"Close"}).focus(),await i.keyboard("{Enter}"),await s(n.onClose).toHaveBeenCalled(),await s(t.getByLabelText("Sidebar visibility")).toHaveTextContent("Closed"),await s(t.queryByRole("button",{name:"Oat drink review"})).not.toBeInTheDocument(),await s(e.querySelector("[inert][aria-hidden='true']")).not.toBeNull(),await s(t.getByRole("button",{name:"Open collection sidebar"})).toHaveFocus(),await i.keyboard("{Enter}"),await s(t.getByLabelText("Selected item")).toHaveTextContent("Oat drink review"),await i.type(t.getByPlaceholderText("Search recent work"),"Cocoa"),await B(()=>s(t.queryByRole("button",{name:"Oat drink review"})).not.toBeInTheDocument(),{timeout:2500}),await s(t.getByRole("button",{name:"Cocoa formulation"})).toBeVisible()}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    isEmpty: true,
    emptyStateMessage: "No recent work found"
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    open: false
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Oat drink review"
    }));
    const close = canvas.getByRole("button", {
      name: "Close"
    });
    close.focus();
    await userEvent.keyboard("{Enter}");
    await expect(args.onClose).toHaveBeenCalled();
    await expect(canvas.getByLabelText("Sidebar visibility")).toHaveTextContent("Closed");
    await expect(canvas.queryByRole("button", {
      name: "Oat drink review"
    })).not.toBeInTheDocument();
    await expect(canvasElement.querySelector("[inert][aria-hidden='true']")).not.toBeNull();
    await expect(canvas.getByRole("button", {
      name: "Open collection sidebar"
    })).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByLabelText("Selected item")).toHaveTextContent("Oat drink review");
    await userEvent.type(canvas.getByPlaceholderText("Search recent work"), "Cocoa");
    await waitFor(() => expect(canvas.queryByRole("button", {
      name: "Oat drink review"
    })).not.toBeInTheDocument(), {
      timeout: 2500
    });
    await expect(canvas.getByRole("button", {
      name: "Cocoa formulation"
    })).toBeVisible();
  }
}`,...p.parameters?.docs?.source}}};const I=["Playground","Loading","Empty","Closed","KeyboardAndSearch"];export{u as Closed,d as Empty,p as KeyboardAndSearch,l as Loading,c as Playground,I as __namedExportsOrder,_ as default};
