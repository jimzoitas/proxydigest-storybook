import{ag as B,j as e,r as x,fr as E,c as R,z as C,S as D,T as k}from"./iframe-nhB53rPD.js";import{g as v,S as H,k as G,m as _,c as T,d as U,e as w,f as M,a as z,b as F}from"./SidebarSection-BvXTZEYC.js";import{s as V}from"./sidebar-theme-CqlXNAjF.js";import{F as L}from"./folder-vQIC1Btl.js";import{S as q}from"./sparkles-DtPcgZXv.js";import{M as N}from"./message-square-DJ-XnDxf.js";import{B as P}from"./book-open-BhS68PxU.js";import"./preload-helper-PPVm8Dsz.js";import"./collapsible-pI4oVkh3.js";import"./useCollapsiblePanel-DVMF6qnG.js";import"./plus-0cDzJ2QO.js";import"./chevron-right-CavErG_J.js";import"./dropdown-menu-6QYTqNVQ.js";import"./menu-DyIs6xZo.js";import"./CompositeItem-D_8UuHC1.js";import"./useCompositeItem-BquT0LDd.js";import"./Separator-RhxJSB-Q.js";import"./circle-Byfpv97O.js";import"./button-_tcBhp5_.js";import"./index-8Dbc_Jva.js";import"./loader-circle-MxHlgpxw.js";import"./input-CAdeD_xm.js";import"./separator-Dmg9cS_7.js";import"./sheet-L7clkwH-.js";import"./overlay-dialog-Co5KED9w.js";import"./skeleton-CMUv0H3w.js";import"./panel-left-Bz3AW4zy.js";const K=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],W=B("house",K),{expect:n,userEvent:g,within:y}=__STORYBOOK_MODULE_TEST__;function Y({open:o,...a}){const[s,f]=x.useState(o),[j,i]=x.useState("No action yet"),{theme:S}=E(),A=R(),I=S==="system"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":S,t=V[I],O=[{label:"Resources",isCategory:!0},{label:"Documentation",href:"/sidebar-preview/docs",icon:P},{label:"New conversation",onClick:()=>i("New conversation"),icon:N},{label:"Unavailable resource",disabled:!0,onClick:()=>i("Unavailable resource")}];return e.jsx("div",{className:"pf-story-sidebar-frame",children:e.jsxs(H,{open:s,onOpenChange:f,className:"pf-story-sidebar-provider",children:[e.jsx(G,{collapsible:"icon",className:C("pf-story-sidebar-sidebar",t.bg,t.borderCol),children:e.jsx(_,{className:C(t.bg,t.text),children:e.jsxs("nav",{"aria-label":"Side navigation specimen",children:[e.jsxs(T,{label:a.sectionLabel,theme:t,children:[e.jsx(v,{icon:W,label:a.label,href:"/sidebar-preview/dashboard",isActive:a.isActive,disabled:a.disabled,theme:t,onAction:()=>i("Create item"),actionTooltip:"Create item"}),e.jsx(v,{icon:D,label:"Search",onClick:()=>i("Search"),theme:t}),e.jsxs(U,{icon:L,label:"Projects",href:"/sidebar-preview/projects",defaultOpen:a.defaultOpen,chevronPosition:a.chevronPosition,isLoading:a.isLoading,theme:t,onAction:()=>i("Create project"),actionLabel:"Create project",children:[e.jsx(w,{label:"Oat drink",href:"/sidebar-preview/projects/oat-drink",icon:q,iconPosition:a.iconPosition,theme:t}),e.jsx(w,{label:"Open conversation",onClick:()=>i("Open conversation"),icon:N,iconPosition:a.iconPosition,theme:t}),e.jsx(w,{label:"Unavailable project",href:"/sidebar-preview/unavailable",disabled:!0,theme:t})]},String(a.defaultOpen)),e.jsx(M,{icon:P,label:"Resources",items:O,theme:t})]}),e.jsx(T,{label:"Account",theme:t,children:e.jsx(v,{label:"Unavailable setting",icon:L,disabled:!0,theme:t})})]})})}),e.jsx(z,{className:"pf-story-sidebar-inset",children:e.jsxs("div",{className:"pf-story-sidebar-content",children:[e.jsx(F,{"aria-label":"Toggle side navigation"}),e.jsx(k,{variant:"subtitle",children:"Navigation preview"}),e.jsx(k,{variant:"footnote",children:"Links change this isolated Storybook route. Actions are local examples."}),e.jsx("output",{"aria-label":"Current route",children:A.pathname}),e.jsx("output",{"aria-label":"Last action","aria-live":"polite",children:j})]})})]})})}const xe={title:"Components/Navigation/Side Navigation",component:v,tags:["autodocs"],parameters:{layout:"padded",route:"/sidebar-preview",controls:{include:["open","sectionLabel","label","isActive","disabled","defaultOpen","chevronPosition","isLoading","iconPosition"]},docs:{description:{component:`Reusable navigation primitives used by the application sidebar. They compose existing Sidebar UI, router links and Base UI interactions; they do not own permissions, active-route matching, data loading or product actions. The complete application composition is documented separately under Patterns.

| Primitive | Public contract |
| --- | --- |
| SidebarNavItem | label, icon, href or onClick, isActive, disabled, tooltip, trailing, theme, and the independent onAction/actionTooltip button. |
| SidebarNavGroup | label, icon, optional href, defaultOpen, chevronPosition (left/right), isLoading, children, theme and onAction/actionLabel. Navigation, expansion and creation remain separate actions. A collapsed group with href becomes a single navigation item. |
| SidebarNavSubItem | label, href or onClick, isCategory, disabled, icon, iconPosition (left/right) and theme. Action rows use buttons; route rows use links. |
| SidebarDropdown | label, icon, theme and NavSubItem[] items. Each entry can be a category, route, action or disabled item. The menu opens to the right and supports keyboard selection. |
| SidebarSection | optional label, children, className and theme. Groups related navigation items without owning route state. |

**Providers:** SidebarProvider supplies expanded/collapsed and mobile state plus tooltips. Supply a router for PrefetchLink. The application also supplies its theme classes, permission-filtered items and route-derived isActive values. The shared Storybook runtime supplies routing and app theme here. The frame uses the real Sidebar and an isolated route readout, with no backend calls.

**Playground:** open initializes provider state; the preview trigger then changes it interactively. Changing open resets that preview state. defaultOpen initializes Projects and resets that group when changed. Other controls map directly to the named primitive's props. Initial state is explicit so a previously stored sidebar cookie cannot hide the example. On small viewports the existing Sidebar uses its mobile sheet.

**Accessibility and boundaries:** labels name navigation and actions; disabled links cannot activate; the create button is separate from the main link; group toggles expose expanded state. The host must supply meaningful action labels and retain access to destinations when collapsed. Existing sidebar theme classes and layout remain preserved; this page documents the shared group-token bindings but does not claim whole-application accessibility certification.

Import the primitives and their prop types from @/design-system/components/sidebar. The discriminated NavItem configuration types distinguish action, link, group and dropdown responsibilities; product configuration remains with its host.`}}},args:{open:!0,sectionLabel:"Workspace",label:"Dashboard",isActive:!0,disabled:!1,defaultOpen:!0,chevronPosition:"left",isLoading:!1,iconPosition:"left"},argTypes:{open:{control:"boolean",description:"Initial SidebarProvider.open; changing it resets the preview. The trigger changes local provider state."},sectionLabel:{control:"text",description:"SidebarSection.label"},label:{control:"text",description:"SidebarNavItem.label for the first link"},isActive:{control:"boolean",description:"SidebarNavItem.isActive; the host normally derives it from routing."},disabled:{control:"boolean",description:"Disables the first link and its independent create action."},defaultOpen:{control:"boolean",description:"SidebarNavGroup.defaultOpen for Projects"},chevronPosition:{control:"inline-radio",options:["left","right"],description:"SidebarNavGroup.chevronPosition"},isLoading:{control:"boolean",description:"SidebarNavGroup.isLoading; replaces subitems with the existing loader."},iconPosition:{control:"inline-radio",options:["left","right"],description:"SidebarNavSubItem.iconPosition"}},render:o=>e.jsx(Y,{...o},String(o.open))},r={},c={args:{isActive:!1}},l={args:{disabled:!0}},d={args:{chevronPosition:"right",iconPosition:"right"}},p={args:{isLoading:!0}},m={args:{defaultOpen:!1}},u={args:{open:!1}},b={args:{open:!1},play:async({canvasElement:o})=>{const a=y(o),s=a.getByRole("button",{name:"Resources"});await g.click(s);const f=await y(document.body).findByRole("menuitem",{name:"New conversation"});await n(f).toBeVisible(),await g.keyboard("{Home}{ArrowDown}{Enter}"),await n(a.getByLabelText("Last action")).toHaveTextContent("New conversation"),await n(s).toHaveFocus()}},h={play:async({canvasElement:o})=>{const a=y(o);await g.click(a.getByRole("button",{name:"Create item"})),await n(a.getByLabelText("Current route")).toHaveTextContent("/sidebar-preview"),await n(a.getByLabelText("Last action")).toHaveTextContent("Create item"),await g.click(a.getByRole("link",{name:"Dashboard"})),await n(a.getByLabelText("Current route")).toHaveTextContent("/sidebar-preview/dashboard")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    isActive: false
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    chevronPosition: "right",
    iconPosition: "right"
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: false
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    open: false
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    open: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const resources = canvas.getByRole("button", {
      name: "Resources"
    });
    await userEvent.click(resources);
    const menuAction = await within(document.body).findByRole("menuitem", {
      name: "New conversation"
    });
    await expect(menuAction).toBeVisible();
    await userEvent.keyboard("{Home}{ArrowDown}{Enter}");
    await expect(canvas.getByLabelText("Last action")).toHaveTextContent("New conversation");
    await expect(resources).toHaveFocus();
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Create item"
    }));
    await expect(canvas.getByLabelText("Current route")).toHaveTextContent("/sidebar-preview");
    await expect(canvas.getByLabelText("Last action")).toHaveTextContent("Create item");
    await userEvent.click(canvas.getByRole("link", {
      name: "Dashboard"
    }));
    await expect(canvas.getByLabelText("Current route")).toHaveTextContent("/sidebar-preview/dashboard");
  }
}`,...h.parameters?.docs?.source}}};const Ce=["Playground","InactiveItem","DisabledItem","RightChevronAndIcons","LoadingGroup","ClosedGroup","Collapsed","CollapsedDropdown","NavigationAndCreateAreSeparate"];export{m as ClosedGroup,u as Collapsed,b as CollapsedDropdown,l as DisabledItem,c as InactiveItem,p as LoadingGroup,h as NavigationAndCreateAreSeparate,r as Playground,d as RightChevronAndIcons,Ce as __namedExportsOrder,xe as default};
