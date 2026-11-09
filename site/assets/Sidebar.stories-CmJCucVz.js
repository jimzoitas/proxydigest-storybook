import{e as R,j as e,r as C,e4 as H,c as D,g as L,S as G,T as N}from"./iframe-DgvZnKtv.js";import{c as f,S as F,d as _,e as M,f as T,g as U,h as S,i as z,a as q,b as W}from"./SidebarSection-BohYk_Y-.js";import{s as V}from"./sidebar-theme-EJkGBQZN.js";import{F as A}from"./folder-0T_wAgu6.js";import{S as K}from"./sparkles-CEAhmZN-.js";import{M as P}from"./message-square-CiLL6Ije.js";import{B as j}from"./book-open-BBC4gIfG.js";import"./preload-helper-PPVm8Dsz.js";import"./dropdown-menu-CuN8-u21.js";import"./menu-BIxLiaY6.js";import"./CompositeItem-qKQIJE0X.js";import"./useCompositeItem-Dr13hnqh.js";import"./Separator-BKJ0ZhJM.js";import"./chevron-right-B8SZue5v.js";import"./circle-CwHZP-HG.js";import"./button-CEcYiQdY.js";import"./index-BWlKOsdO.js";import"./loader-circle-BsZrs7F6.js";import"./ExpandableTextTrigger-Bw1577uH.js";import"./ellipsis-DdwwDVLo.js";import"./plus-BMpb-JrX.js";import"./collapsible-BPKkR0Kq.js";import"./useCollapsiblePanel-jjkiJ8Ha.js";import"./search-field-CzWqD7iz.js";import"./input-DTWVrd6t.js";import"./index.module-C-pw7-ZN.js";import"./checkbox-CCvRjg_n.js";import"./minus-0s0hIbe7.js";import"./useAriaLabelledBy-C2v0UWUV.js";import"./dialog-BGED6ss2.js";import"./overlay-dialog-i6vPmHIw.js";import"./separator-DZKac5zi.js";import"./sheet-BSYc4zIC.js";import"./skeleton-DwZsbo-S.js";import"./panel-left-D88YpPbL.js";const Q=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Y=R("house",Q),{expect:n,userEvent:y,within:x}=__STORYBOOK_MODULE_TEST__;function J({open:i,...t}){const[s,w]=C.useState(i),[I,o]=C.useState("No action yet"),{theme:k}=H(),O=D(),B=k==="system"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":k,a=V[B],E=[{label:"Resources",isCategory:!0},{label:"Documentation",href:"/sidebar-preview/docs",icon:j},{label:"New conversation",onClick:()=>o("New conversation"),icon:P},{label:"Unavailable resource",disabled:!0,onClick:()=>o("Unavailable resource")}];return e.jsx("div",{className:"pf-story-sidebar-frame",children:e.jsxs(F,{open:s,onOpenChange:w,className:"pf-story-sidebar-provider",children:[e.jsx(_,{collapsible:"icon",className:L("pf-story-sidebar-sidebar",a.bg,a.borderCol),children:e.jsx(M,{className:L(a.bg,a.text),children:e.jsxs("nav",{"aria-label":"Side navigation specimen",children:[e.jsxs(T,{label:t.sectionLabel,theme:a,children:[e.jsx(f,{icon:Y,label:t.label,href:"/sidebar-preview/dashboard",isActive:t.isActive,emphasis:t.emphasis,disabled:t.disabled,theme:a,onAction:()=>o("Create item"),actionTooltip:"Create item"}),e.jsx(f,{icon:G,label:"Search",emphasis:t.emphasis,onClick:()=>o("Search"),theme:a}),e.jsxs(U,{icon:A,label:"Projects",href:"/sidebar-preview/projects",defaultOpen:t.defaultOpen,heading:t.heading,itemLayout:t.itemLayout,chevronPosition:t.chevronPosition,isLoading:t.isLoading,theme:a,onAction:()=>o("Create project"),actionLabel:"Create project",children:[e.jsx(S,{label:"Oat drink",href:"/sidebar-preview/projects/oat-drink",icon:K,iconPosition:t.iconPosition,theme:a}),e.jsx(S,{label:"Open conversation",onClick:()=>o("Open conversation"),icon:P,iconPosition:t.iconPosition,theme:a}),e.jsx(S,{label:"Unavailable project",href:"/sidebar-preview/unavailable",disabled:!0,theme:a})]},String(t.defaultOpen)),e.jsx(z,{icon:j,label:"Resources",items:E,theme:a})]}),e.jsx(T,{label:"Account",theme:a,children:e.jsx(f,{label:"Unavailable setting",icon:A,disabled:!0,theme:a})})]})})}),e.jsx(q,{className:"pf-story-sidebar-inset",children:e.jsxs("div",{className:"pf-story-sidebar-content",children:[e.jsx(W,{"aria-label":"Toggle side navigation"}),e.jsx(N,{variant:"subtitle",children:"Navigation preview"}),e.jsx(N,{variant:"footnote",children:"Links change this isolated Storybook route. Actions are local examples."}),e.jsx("output",{"aria-label":"Current route",children:O.pathname}),e.jsx("output",{"aria-label":"Last action","aria-live":"polite",children:I})]})})]})})}const Oe={title:"Components/Navigation/Side Navigation",component:f,tags:["autodocs"],parameters:{layout:"padded",route:"/sidebar-preview",controls:{include:["open","sectionLabel","label","isActive","disabled","defaultOpen","heading","itemLayout","chevronPosition","isLoading","iconPosition"]},docs:{description:{component:`Reusable navigation primitives used by the application sidebar. They compose existing Sidebar UI, router links and Base UI interactions; they do not own permissions, active-route matching, data loading or product actions. Use this component family to assemble navigation in another host. Use [App Navigation](./?path=/docs/patterns-app-navigation--docs&docsTab=guidelines) for the complete product composition, its regions, component variants and host responsibilities. Both entries render the same shared navigation implementation at different levels of composition.

| Primitive | Public contract |
| --- | --- |
| SidebarNavItem | label, icon, href or onClick, isActive, disabled, emphasis (optional subtle), tooltip, trailing, theme, and the independent onAction/actionTooltip button. |
| SidebarNavGroup | label, icon, optional href, defaultOpen, chevronPosition (left/right), isLoading, children, theme and onAction/actionLabel. heading presents a small uppercase toggle without the icon; hasLeadingSpace avoids adding heading space when the host already supplies it. itemLayout=flat aligns children with primary links. onDropItem/canDropItem/dropLabel provide the host-owned pin target. filter places a separate search/type control before the right chevron. Its compact popup matches the full header width and opens below it over the recent rows. Navigation, expansion, filtering and creation remain separate actions. A collapsed group with href becomes a single navigation item. |
| SidebarNavSubItem | label, href or onClick, isCategory, disabled, icon, iconPosition (left/right), theme and dragId. onAction/actionLabel retains a separate quick action. actions/actionsLabel instead presents a named ellipsis menu with host-supplied callbacks; labels truncate within the reserved control space. Action rows use buttons; route rows use links. |
| SidebarDropdown | label, icon, theme and NavSubItem[] items. Each entry can be a category, route, action or disabled item. Contextual actions remain in a separately named submenu and legacy quick actions remain separate entries. The menu opens to the right, truncates long labels, and supports keyboard selection and host-validated pin drops. filter adds a menu entry opening the same search/type fields in a dialog, with focus returned to the group on close. |
| SidebarHistoryFilter | filter supplies translated label/searchLabel/typeLabel/allTypesLabel/resetLabel, controlled query/onQueryChange and types/onTypesChange, and value/label options. Checkboxes allow multiple types; All types is checked for every option and mixed for a partial selection. No selected type matches no items. Reset clears the query and selects every option. The host filters and limits its collection; this component owns only the accessible controls. |
| SidebarSection | optional label, children, className and theme. Groups related navigation items without owning route state. |

**Providers:** SidebarProvider supplies expanded/collapsed and mobile state plus tooltips. Supply a router for PrefetchLink. The application also supplies its theme classes, permission-filtered items and route-derived isActive values. The shared Storybook runtime supplies routing and app theme here. The frame uses the real Sidebar and an isolated route readout, with no backend calls.

**Selection ownership:** NavMain resolves one active row. SidebarProvider retains the chosen group/entity key across collapse and mobile remounts. The same entity in Pinned and Recents has distinct source keys. Host active hints identify visible chat and idea actions; matching routes identify links. Direct navigation falls back to one primary route. Context actions marked selectsItem select their row when opening it in the current view; pin, rename, copy and new-tab actions do not change selection. Modified link clicks do not select the current sidebar. Collapsed menus show the chosen child, while their closed trigger summarizes selection; both are never highlighted at once.

**Playground:** open initializes provider state; the preview trigger then changes it interactively. Changing open resets that preview state. defaultOpen initializes Projects and resets that group when changed. Other controls map directly to the named primitive's props. Initial state is explicit so a previously stored sidebar cookie cannot hide the example. On small viewports the existing Sidebar uses its mobile sheet.

**Accessibility and boundaries:** labels name navigation and actions; disabled links cannot activate; the create button is separate from the main link; group toggles expose expanded state. The host must supply meaningful action labels and retain access to destinations when collapsed. Existing sidebar theme classes and layout remain preserved; this page documents the shared group-token bindings but does not claim whole-application accessibility certification.

**Owned subcomponents and tokens:** SidebarNavItem owns a primary row; SidebarNavGroup owns the heading, nested/flat child layout and expansion; SidebarNavSubItem owns the full-width, explicitly left-aligned link/button row, truncating label and independent quick/contextual action; SidebarDropdown owns the collapsed presentation; SidebarSection owns an optional section label. Each imports its own CSS and consumes navigation category group variables, never semantic or primitive variables directly. Compact rows use --group-navigation-pf-sidebar-item-height, --group-navigation-pf-sidebar-item-font-size, --group-navigation-pf-sidebar-icon-size, --group-navigation-pf-sidebar-item-inset and --group-navigation-pf-sidebar-item-gap. Heading height uses --group-navigation-pf-sidebar-heading-height. The host NavMain applies --group-navigation-pf-sidebar-section-gap when a NavItem has spaceBefore, without rendering a divider. Focus and hover use navigation border/fill roles. Optional emphasis="subtle" adds a resting hover-like fill behind the icon of unselected rows, a stronger whole-row hover fill and a further pressed fill using existing Navigation groups. Native Space/mouse activation retains the pressed state; disabled rows do not receive hover/pressed changes. Selected-route styling takes precedence over emphasis. SidebarHistoryFilter owns its field layout; the composed Button, SearchInput, Checkbox, Popover and Dialog retain their own trigger, input, selection and surface tokens. Nested lists have no vertical border; child icons start at the parent label, including left-chevron and Existing geometry. Keyboard focus draws one component-owned ring; pointer activation keeps focus without displaying that ring. Alignment, flex sizing and ellipsis are structural CSS contracts.

**Browser check:** compare the Oat drink link and Open conversation button in HeadingWithFlatRows under a centered host: both root and label must compute to left alignment. The app's mixed-history stories additionally exercise all four entity kinds, truncation before the ellipsis, collapsed contextual actions, pinning and controlled Recents filtering. Verify that the filter trigger stays before the chevron, the 28px search and checkboxes open below the full header within the sidebar, and opening it leaves the group's expansion unchanged; Escape returns focus in expanded and collapsed presentations. Portable story tests run without CSS, so they verify interaction contracts but cannot prove alignment or pixel geometry.

Import the primitives and their prop types from @/design-system/components/sidebar. The discriminated NavItem configuration types distinguish action, link, group and dropdown responsibilities; product configuration remains with its host.`}}},args:{open:!0,sectionLabel:"Workspace",label:"Dashboard",isActive:!0,disabled:!1,defaultOpen:!0,heading:!1,itemLayout:"nested",chevronPosition:"left",isLoading:!1,iconPosition:"left"},argTypes:{open:{control:"boolean",description:"Initial SidebarProvider.open; changing it resets the preview. The trigger changes local provider state."},sectionLabel:{control:"text",description:"SidebarSection.label"},label:{control:"text",description:"SidebarNavItem.label for the first link"},emphasis:{control:"inline-radio",options:["default","subtle"],mapping:{default:void 0,subtle:"subtle"},description:"Optional SidebarNavItem emphasis. Subtle puts the resting standard-hover fill behind the icon, with distinct whole-row hover and pressed states; selected-route styling takes precedence."},isActive:{control:"boolean",description:"SidebarNavItem.isActive; the host normally derives it from routing."},disabled:{control:"boolean",description:"Disables the first link and its independent create action."},defaultOpen:{control:"boolean",description:"SidebarNavGroup.defaultOpen for Projects"},heading:{control:"boolean",description:"SidebarNavGroup.heading: uppercase section toggle without an expanded icon"},itemLayout:{control:"inline-radio",options:["nested","flat"],description:"SidebarNavGroup.itemLayout: nested library rows or flush history rows"},chevronPosition:{control:"inline-radio",options:["left","right"],description:"SidebarNavGroup.chevronPosition"},isLoading:{control:"boolean",description:"SidebarNavGroup.isLoading; replaces subitems with the existing loader."},iconPosition:{control:"inline-radio",options:["left","right"],description:"SidebarNavSubItem.iconPosition"}},render:i=>e.jsx(J,{...i},String(i.open))},r={},c={args:{emphasis:"subtle",isActive:!1}},l={args:{isActive:!1}},d={args:{disabled:!0}},p={args:{chevronPosition:"right",iconPosition:"right"}},h={args:{isLoading:!0}},m={args:{defaultOpen:!1}},u={args:{heading:!0,itemLayout:"flat",chevronPosition:"right"},decorators:[i=>e.jsx("div",{className:"pf-story-sidebar-centered-host",children:e.jsx(i,{})})]},b={args:{open:!1}},g={args:{open:!1},play:async({canvasElement:i})=>{const t=x(i),s=t.getByRole("button",{name:"Resources"});await y.click(s);const w=await x(document.body).findByRole("menuitem",{name:"New conversation"});await n(w).toBeVisible(),await y.keyboard("{Home}{ArrowDown}{Enter}"),await n(t.getByLabelText("Last action")).toHaveTextContent("New conversation"),await n(s).toHaveFocus()}},v={play:async({canvasElement:i})=>{const t=x(i);await y.click(t.getByRole("button",{name:"Create item"})),await n(t.getByLabelText("Current route")).toHaveTextContent("/sidebar-preview"),await n(t.getByLabelText("Last action")).toHaveTextContent("Create item"),await y.click(t.getByRole("link",{name:"Dashboard"})),await n(t.getByLabelText("Current route")).toHaveTextContent("/sidebar-preview/dashboard")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    emphasis: "subtle",
    isActive: false
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isActive: false
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    chevronPosition: "right",
    iconPosition: "right"
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: false
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    heading: true,
    itemLayout: "flat",
    chevronPosition: "right"
  },
  decorators: [Story => <div className="pf-story-sidebar-centered-host">
        <Story />
      </div>]
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    open: false
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const Be=["Playground","SubtleEmphasis","InactiveItem","DisabledItem","RightChevronAndIcons","LoadingGroup","ClosedGroup","HeadingWithFlatRows","Collapsed","CollapsedDropdown","NavigationAndCreateAreSeparate"];export{m as ClosedGroup,b as Collapsed,g as CollapsedDropdown,d as DisabledItem,u as HeadingWithFlatRows,l as InactiveItem,h as LoadingGroup,v as NavigationAndCreateAreSeparate,r as Playground,p as RightChevronAndIcons,c as SubtleEmphasis,Be as __namedExportsOrder,Oe as default};
