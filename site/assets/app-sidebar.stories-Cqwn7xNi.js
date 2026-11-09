import{j as i,bn as W,cg as H,bo as L,c4 as z,cG as Y,cH as O,aU as Z,r as I,au as P,c as K,a as V}from"./iframe-DgvZnKtv.js";import{B as G}from"./button-CEcYiQdY.js";import{S as F,u as J,a as Q,b as X}from"./SidebarSection-BohYk_Y-.js";import{A as q,g as ee}from"./app-sidebar-CAajS1AC.js";import{g as te}from"./use-recent-navigation-Dz_fMAMJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWlKOsdO.js";import"./loader-circle-BsZrs7F6.js";import"./dropdown-menu-CuN8-u21.js";import"./menu-BIxLiaY6.js";import"./CompositeItem-qKQIJE0X.js";import"./useCompositeItem-Dr13hnqh.js";import"./Separator-BKJ0ZhJM.js";import"./chevron-right-B8SZue5v.js";import"./circle-CwHZP-HG.js";import"./ExpandableTextTrigger-Bw1577uH.js";import"./ellipsis-DdwwDVLo.js";import"./plus-BMpb-JrX.js";import"./collapsible-BPKkR0Kq.js";import"./useCollapsiblePanel-jjkiJ8Ha.js";import"./search-field-CzWqD7iz.js";import"./input-DTWVrd6t.js";import"./index.module-C-pw7-ZN.js";import"./checkbox-CCvRjg_n.js";import"./minus-0s0hIbe7.js";import"./useAriaLabelledBy-C2v0UWUV.js";import"./dialog-BGED6ss2.js";import"./overlay-dialog-i6vPmHIw.js";import"./separator-DZKac5zi.js";import"./sheet-BSYc4zIC.js";import"./skeleton-DwZsbo-S.js";import"./panel-left-D88YpPbL.js";import"./sidebar-theme-EJkGBQZN.js";import"./avatar-BapWT1f9.js";import"./chevrons-up-down-BQnVMOhW.js";import"./shield-DGi51bnn.js";import"./settings-D5EomNIZ.js";import"./proxyfoodlogo-BxWo52ug.js";import"./use-permissions-RIBDcgJE.js";import"./use-current-module-CErwN2Yp.js";import"./featureFlags-R30pJjMx.js";import"./apiClient-BBKcaUP_.js";import"./request-DN34u20v.js";import"./trackPosthogEvent-DQYu7Eh_.js";import"./jsonApiHandler-0tb7Ffsv.js";import"./apiUrl-o8N8i6mn.js";import"./pencil-G2jds40a.js";import"./pin-off-Dh2RwGgx.js";import"./copy-BkjpvN59.js";import"./external-link-BJEc3Amj.js";import"./layers-BsH7T5it.js";import"./file-text-C-eb-1Yd.js";import"./clipboard-list-DYh5gZBM.js";import"./wrench-g6l4yt3b.js";import"./factory-BnfaonyC.js";import"./folder-0T_wAgu6.js";import"./building-DGBJ2YKV.js";import"./link-2-CmRCtQ0C.js";import"./package-h90OOcBG.js";import"./users-DzB7qB4B.js";import"./sparkle-FoMeVH5k.js";import"./arrow-up-DRg4XE8a.js";import"./arrow-down-D8en1gMt.js";import"./proxy-ai-NSDrGgNE.js";import"./link-eK7RklLn.js";import"./GradientButton-Di_WK0D1.js";import"./input-field-D1k4gXrr.js";import"./number-field-BuEna-S2.js";import"./GradientIcon-Bt266YZo.js";import"./InfoAlert-D7bONhIx.js";import"./circle-x-1SpwuOPE.js";import"./circle-check-big-Dbn0EK-V.js";import"./triangle-alert-DoEEEFIM.js";import"./info-HwFtBdFw.js";import"./EmptyState-DqGHQ3U-.js";import"./StatusIndicator-CvY3R4FY.js";import"./QuickActionCard-Y4uBCWf1.js";import"./badge-C-Jji8Kx.js";import"./sparkles-CEAhmZN-.js";import"./upload-Czib59ZL.js";import"./input-dialog-CEqzWZqu.js";/* empty css                            */import"./proxyLogo-CzHoIAWe.js";const{expect:a,userEvent:t,waitFor:m,within:r}=__STORYBOOK_MODULE_TEST__,ae=[{id:"story-oat",title:"Oat drink formulation",starred:!1,scope:"recipe_formulation_advisor",updatedAt:"2026-10-01T09:00:00Z",status:"active"},{id:"story-label",title:"EU label review",starred:!1,scope:"regulatory_agent",updatedAt:"2026-10-02T09:00:00Z",status:"active"}],ne={id:"story-pinned-yogurt",title:"Yogurt protein optimization",starred:!1,scope:"recipe_formulation_advisor",updatedAt:"2026-09-20T09:00:00Z",status:"active"},N=ee(P.userId,P.tenantId),j=te(P.userId,P.tenantId),_=[{kind:"project",id:"77",title:"Plant-based yogurt",href:"/projects/77",visitedAt:"2026-11-08T10:00:00Z"},{kind:"recipe",id:"1042",title:"Oat yogurt base",href:"/recipes/1042",visitedAt:"2026-11-08T09:00:00Z"},{kind:"idea",id:"story-idea",title:"High-protein breakfast",visitedAt:"2026-11-08T08:00:00Z"}],ie=Array.from({length:23},(n,e)=>({kind:"project",id:`history-${e+1}`,title:`Recent project ${e+1}`,href:`/projects/history-${e+1}`,visitedAt:new Date(Date.UTC(2026,10,8,12,0,-e)).toISOString()}));function D(n){try{return localStorage.getItem(n)}catch{return null}}function p(n,e){try{e===null?localStorage.removeItem(n):localStorage.setItem(n,e)}catch{}}function oe(){const n=K(),{state:e,isMobile:o,openMobile:s}=J(),c=V(d=>d.ui.showNavigationModal),l=V(d=>d.formula.formulaInfo.isFormulaSideSheetOpen);return i.jsxs(Q,{className:"sb-app-navigation-content",children:[i.jsxs("header",{children:[i.jsx(X,{"aria-label":"Toggle navigation preview"}),i.jsx("h2",{children:"Application navigation"})]}),i.jsx("p",{children:"This is the production AppSidebar. Follow a destination, explore Library or Supply Chain, drag a recent item into Pinned, or open Start new. Account → Navigation switches between Existing and Experimental."}),i.jsxs("dl",{children:[i.jsx("dt",{children:"Current route"}),i.jsx("dd",{children:i.jsxs("output",{"aria-label":"Current route",children:[n.pathname,n.search]})}),i.jsx("dt",{children:"Sidebar state"}),i.jsx("dd",{children:i.jsx("output",{"aria-label":"Sidebar state",children:o?s?"mobile open":"mobile closed":e})}),i.jsx("dt",{children:"Search request"}),i.jsx("dd",{children:i.jsx("output",{"aria-label":"Search request",children:c?"Requested":"Not requested"})}),i.jsx("dt",{children:"Recipe request"}),i.jsx("dd",{children:i.jsx("output",{"aria-label":"Recipe request",children:l?"Requested":"Not requested"})})]}),i.jsx("p",{children:"Pins and recent items are saved locally for this preview account. Navigation stays in this preview. Search and recipe actions update the real Redux flags shown above; their application-wide overlays and backend workflows are not mounted here. Chat and idea selection require application sagas and are not completed backend workflows in this fixture. Use the local demo for those flows."})]})}function re({initiallyExpanded:n,side:e,variant:o,collapsible:s,navigationVariant:c="experimental"}){const[l,d]=I.useState(n),[U,$]=I.useState(c);return i.jsx("div",{className:"sb-app-navigation-preview",children:i.jsxs(F,{open:l,onOpenChange:d,className:"v1 sb-app-navigation-provider","data-preview-side":e,children:[i.jsx(q,{side:e,navigationVariant:U,onNavigationVariantChange:$,variant:o,collapsible:s,style:{height:"100%"}}),i.jsx(oe,{})]})})}function M({navigationVariant:n}){const[e,o]=I.useState(n);return i.jsx("div",{className:"sb-app-navigation-preview sb-app-navigation-anatomy","data-anatomy-navigation":e,children:i.jsx(F,{defaultOpen:!0,className:"v1 sb-app-navigation-provider",children:i.jsx(q,{navigationVariant:e,onNavigationVariantChange:o,style:{height:"100%"}})})})}function se(n){const[e,o]=I.useState(0);return i.jsxs(i.Fragment,{children:[i.jsx(re,{...n},`${n.initiallyExpanded}-${n.navigationVariant}-${e}`),i.jsx(G,{variant:"outline",onClick:()=>o(s=>s+1),children:"Reset sidebar state"})]})}const Lt={title:"Patterns/App Navigation",component:q,tags:["autodocs"],parameters:{layout:"fullscreen",shell:!1,route:"/projects",store:{preloadedState:{sidebarData:{sidebarChats:ae,sidebarChatsLoading:!1},members:{userTenantPermissions:[...W,H.CREATE,H.UPDATE,L.CREATE,L.UPDATE,z.READ,Y.CREATE,O.CREATE,O.UPDATE]}}},docs:{description:{component:["The actual AppSidebar has Existing and Experimental navigation compositions. Existing restores Start new and Search, Recent chats, titled Workbench, Library, Supply Chain and conditional Admin sections. Experimental puts Search beside the header collapse control, emphasizes Start new, then lists Chats, Projects, Recipes, expandable Library and Supply Chain, followed by Pinned and Recents. Supply Chain contains direct Equipment, Facilities, Co-Manufacturers, Suppliers and feature-gated Packaging links; quick-create actions stay beside the supported links. Experimental administration stays in the account menu. Both variants expose Navigation, Settings, Theme and Logout in that menu. The preview renders the existing AppSidebar source and uses a local router and fixture Redux store.","### Public API and host obligations","AppSidebar adds navigationVariant (existing/experimental) and onNavigationVariantChange to React.ComponentProps<typeof Sidebar>. Uncontrolled application instances persist the choice in pf_navigation_variant and default to experimental; controlled previews never read or write that preference. Sidebar variant still describes only the frame. Sidebar props: side (left/right), variant (sidebar/floating/inset), collapsible (icon/offcanvas/none), and native div attributes. Its default collapsible behavior is icon. Its internal theme class replaces a caller className; the preview does not pretend className is a styling API. SidebarProvider owns open/onOpenChange, mobile state and Ctrl/Meta+B. The fixture controls initiallyExpanded and resets are preview-only, not AppSidebar props. Changing initiallyExpanded or navigationVariant remounts the preview; Reset sidebar state restores it without resetting the current route or Redux actions.","The host must supply SidebarProvider, Redux with auth/members/sidebarData/formula/ui reducers, router, translations and tooltip providers. Production additionally supplies sagas, feature flags, authentication and global search/editor overlays. Storybook supplies those providers with mock authentication and no running sagas. Link destinations update the visible route. Start new opens the actual dialog; New Project navigates locally, New Recipe changes a visible Redux flag. Search only requests the absent global search overlay. No completed backend mutation is simulated.","Recents tracks opened or created projects, recipes, chats and ideas in this browser, scoped to the signed-in user and tenant. Existing service chat history also seeds the list. The Recents filter before the chevron matches titles and restricts type before pagination; Reset restores all types without deleting history or pins. The same controls remain available through the collapsed Recents menu. The first 15 items appear initially; Show more expands the rest, and Show less restores the compact list. Drag a recent item onto Pinned or use its named pin action with a keyboard. Repeated drops do not unpin. Pins remain available outside the recent results; fresh metadata updates their labels. Existing chat pins are retained when upgrading to mixed items. Pinning does not change the service's starred field. Fixtures restore prior local pins and recents after each story. Production logout clears browser storage, including pins and local history.","### States and appearance","Expanded, collapsed, offcanvas, right-side, floating, loading history and read-only permissions are represented below. Experimental Start new renders shared SidebarNavItem with subtle resting icon background with distinct whole-row hover and pressed states, without selected-route semantics; Search is an accessible shared icon Button in the header. Existing uses the earlier filled Start new action and titled sections. Experimental uses 224px desktop width, 256px mobile width, 32px rows, 13px labels and 14px icons, with a 40px brand row. Existing restores the earlier 256px desktop/288px mobile widths, 36px rows, 13.5px labels, 16px effective icons and 10px row insets. Category-owned sidebar-part groups select existing semantic scales consistently across all four modes. A shared 24px section gap appears above both Pinned and Recents. Primary rows use ordinary row spacing without divider strokes. Pinned and Recents headings use the lighter muted reading color. Pinned and Recents use small uppercase SidebarNavGroup headings without expanded heading icons, extra space above, and flush history rows. Every history row reserves trailing space for its keyboard-accessible ellipsis menu and truncates long titles. The menu provides Open, permission-gated Rename, and Pin/Unpin; project and recipe routes also provide Copy link and Open in new tab. Navigation category groups own their appearance. The app computes active destinations from the current route. Small viewports use the existing mobile sheet; the external preview toggle opens it. AppSidebar owns its SidebarThemeProvider and reads pf_sidebar_theme: the Storybook app-theme toolbar does not independently select the sidebar theme. The account menu's appearance action uses the real provider. This documents current production appearance without claiming whole-application WCAG conformance. The frame bounds the desktop sidebar; real dialog/mobile portals can extend beyond it."].join(`

`)}}},args:{side:"left",navigationVariant:"experimental",variant:"sidebar",collapsible:"icon",initiallyExpanded:!0},argTypes:{navigationVariant:{control:"inline-radio",options:["existing","experimental"],description:"Actual application composition. This controlled fixture isolates the browser preference; the account menu changes only this preview."},side:{control:"inline-radio",options:["left","right"]},variant:{control:"select",options:["sidebar","floating","inset"]},collapsible:{control:"inline-radio",options:["icon","offcanvas"],description:"Public API also accepts none. This interactive fixture demonstrates the two collapsible modes."},initiallyExpanded:{control:"boolean",description:"Playground-only initial SidebarProvider state. Changes remount the preview so this control always takes effect."}},beforeEach:({parameters:n})=>{const e=document.cookie.split("; ").find(d=>d.startsWith("sidebar_state=")),o=D("pf_sidebar_theme"),s=D(N),c=D(j),l=n.navigationHistory??_;return p(j,JSON.stringify({version:1,items:l})),p(N,JSON.stringify({version:1,items:[ne]})),()=>{document.cookie=e?`${e}; path=/; max-age=604800`:"sidebar_state=; path=/; max-age=0",p("pf_sidebar_theme",o),p(N,s),p(j,c)}},render:n=>i.jsx(se,{...n})},u={},g={args:{navigationVariant:"experimental"},render:()=>i.jsx(M,{navigationVariant:"experimental"})},y={args:{navigationVariant:"existing"},render:()=>i.jsx(M,{navigationVariant:"existing"})},h={args:{navigationVariant:"existing"}},b={args:{navigationVariant:"existing",initiallyExpanded:!1}},w={play:async({canvasElement:n})=>{const e=r(n),o=r(document.body);await t.click(e.getByRole("button",{name:/Alex Storybook/})),(await o.findByRole("menuitem",{name:"Navigation"})).focus(),await t.keyboard("{ArrowRight}"),(await o.findByRole("menuitemradio",{name:"Existing"})).focus(),await t.keyboard("{Enter}"),await a(e.getByRole("button",{name:"Start new"})).toBeVisible(),await a(e.getByText("Workbench")).toBeVisible(),await a(e.getByRole("link",{name:"Equipment"})).toHaveAttribute("href","/equipment"),await a(e.queryByRole("button",{name:"Supply Chain"})).not.toBeInTheDocument(),await t.click(e.getByRole("button",{name:/Alex Storybook/})),(await o.findByRole("menuitem",{name:"Navigation"})).focus(),await t.keyboard("{ArrowRight}"),await t.click(await o.findByRole("menuitemradio",{name:"Experimental"})),await a(e.getByRole("button",{name:"Start new"})).toBeVisible(),await a(e.getByRole("button",{name:"Supply Chain"})).toBeVisible(),await a(e.queryByText("Workbench")).not.toBeInTheDocument()}},v={args:{initiallyExpanded:!1}},x={args:{initiallyExpanded:!1,collapsible:"offcanvas"}},R={args:{side:"right"}},B={args:{variant:"floating"}},f={parameters:{navigationHistory:[],store:{preloadedState:{sidebarData:{sidebarChats:[],sidebarChatsLoading:!0}}}}},E={parameters:{navigationHistory:ie},play:async({canvasElement:n})=>{const e=r(n);await a(e.getByRole("link",{name:"Recent project 15"})).toBeInTheDocument(),await a(e.queryByRole("link",{name:"Recent project 16"})).not.toBeInTheDocument(),e.getByRole("button",{name:"Show more"}).focus(),await t.keyboard("{Enter}"),await a(e.getByRole("link",{name:"Recent project 23"})).toBeInTheDocument(),await a(e.getByRole("button",{name:"Show less"})).toHaveFocus(),await t.keyboard("{Enter}"),await a(e.queryByRole("link",{name:"Recent project 16"})).not.toBeInTheDocument(),await a(e.getByRole("button",{name:"Show more"})).toHaveFocus()}},S={parameters:{store:{preloadedState:{members:{userTenantPermissions:Z}}}},play:async({canvasElement:n})=>{const e=r(n);await t.click(e.getByRole("button",{name:/Alex Storybook/})),await a(r(document.body).queryByRole("menuitem",{name:"Equipment"})).not.toBeInTheDocument(),await a(await r(document.body).findByRole("menuitem",{name:"Navigation"})).toBeInTheDocument(),await a(r(document.body).queryByRole("menuitem",{name:"Admin"})).not.toBeInTheDocument(),await t.keyboard("{Escape}");const o=e.getByRole("button",{name:"Start new"});o.focus(),await t.keyboard("{Enter}");const s=r(await r(document.body).findByRole("dialog",{name:"Create"}));await a(s.queryByRole("button",{name:/New Project/})).not.toBeInTheDocument(),await a(s.getByRole("button",{name:/New chat/})).toBeEnabled(),await t.keyboard("{Escape}"),await m(()=>a(o).toHaveFocus())}},k={play:async({canvasElement:n})=>{const e=r(n);await t.click(e.getByRole("button",{name:"Supply Chain"})),await t.click(e.getByRole("link",{name:"Suppliers"})),await a(e.getByLabelText("Current route")).toHaveTextContent("/suppliers"),await t.click(e.getByRole("button",{name:"Toggle navigation preview"})),await a(e.getByLabelText("Sidebar state")).toHaveTextContent("collapsed");const o=e.getByRole("button",{name:"Start new"});o.focus(),await t.keyboard(" "),await r(document.body).findByRole("dialog",{name:"Create"}),await t.keyboard("{Escape}"),await m(()=>a(o).toHaveFocus()),await t.keyboard("{Enter}");const s=r(await r(document.body).findByRole("dialog",{name:"Create"}));await t.click(s.getByRole("button",{name:/New Project/})),await m(()=>a(e.getByLabelText("Current route")).toHaveTextContent("/projects/new")),await a(r(document.body).queryByRole("dialog",{name:"Create"})).not.toBeInTheDocument(),await t.click(e.getByRole("button",{name:"Reset sidebar state"})),await a(e.getByLabelText("Sidebar state")).toHaveTextContent("expanded"),await t.click(e.getByRole("button",{name:"Search"})),await a(e.getByLabelText("Search request")).toHaveTextContent("Requested")}},T={play:async({canvasElement:n})=>{const e=r(n),o=r(document.body);e.getAllByRole("button",{name:"Library"})[0].focus(),await t.keyboard("{Enter}"),await t.click(e.getByRole("link",{name:"Ingredients"})),await a(e.getByLabelText("Current route")).toHaveTextContent("/ingredients");const c=()=>e.getAllByRole("button",{name:"Actions for Oat drink formulation"});c()[0].focus(),await t.keyboard("{Enter}"),await t.click(await o.findByRole("menuitem",{name:"Pin"})),await a(c()).toHaveLength(1),await t.click(e.getByRole("button",{name:"Reset sidebar state"})),await a(c()).toHaveLength(1),await t.click(c()[0]),await t.click(await o.findByRole("menuitem",{name:"Unpin"})),await a(c()).toHaveLength(1),await a(e.getByRole("button",{name:"Actions for Yogurt protein optimization"})).toBeInTheDocument(),await t.click(e.getByRole("button",{name:"Actions for Oat yogurt base"})),await t.click(await o.findByRole("menuitem",{name:"Rename"}));const l=r(await o.findByRole("dialog",{name:"Rename item"}));await a(l.getByRole("textbox",{name:"Rename item"})).toHaveValue("Oat yogurt base"),await t.keyboard("{Escape}")}},C={parameters:{navigationHistory:_.map(n=>({...n,title:`${n.title} — an intentionally long working title that must truncate before the quick actions menu`}))}},A={play:async({canvasElement:n})=>{const e=r(n),o=r(document.body),s=e.getByRole("button",{name:"Filter recents"});s.focus(),await t.keyboard("{Enter}"),await t.click(await o.findByRole("checkbox",{name:"All types"})),await t.click(o.getByRole("checkbox",{name:"Recipes"})),await a(e.getByRole("link",{name:"Oat yogurt base"})).toBeInTheDocument(),await a(e.queryByRole("link",{name:"Plant-based yogurt"})).not.toBeInTheDocument();const c=o.getByRole("textbox",{name:"Search recent items"});await t.type(c,"missing"),await m(()=>a(e.getByText("No matching recent items")).toBeInTheDocument()),await t.keyboard("{Escape}"),await m(()=>a(s).toHaveFocus()),await t.click(s),await t.click(await o.findByRole("button",{name:"Reset filters"})),await t.keyboard("{Escape}"),await a(e.getByRole("link",{name:"Plant-based yogurt"})).toBeInTheDocument(),await a(e.getByRole("button",{name:"Actions for Yogurt protein optimization"})).toBeInTheDocument()}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{}",...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    navigationVariant: "experimental"
  },
  render: () => <NavigationAnatomyFixture navigationVariant="experimental" />
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    navigationVariant: "existing"
  },
  render: () => <NavigationAnatomyFixture navigationVariant="existing" />
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    navigationVariant: "existing"
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    navigationVariant: "existing",
    initiallyExpanded: false
  }
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    await userEvent.click(canvas.getByRole("button", {
      name: /Alex Storybook/
    }));
    (await body.findByRole("menuitem", {
      name: "Navigation"
    })).focus();
    await userEvent.keyboard("{ArrowRight}");
    const existing = await body.findByRole("menuitemradio", {
      name: "Existing"
    });
    existing.focus();
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByRole("button", {
      name: "Start new"
    })).toBeVisible();
    await expect(canvas.getByText("Workbench")).toBeVisible();
    await expect(canvas.getByRole("link", {
      name: "Equipment"
    })).toHaveAttribute("href", "/equipment");
    await expect(canvas.queryByRole("button", {
      name: "Supply Chain"
    })).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: /Alex Storybook/
    }));
    (await body.findByRole("menuitem", {
      name: "Navigation"
    })).focus();
    await userEvent.keyboard("{ArrowRight}");
    await userEvent.click(await body.findByRole("menuitemradio", {
      name: "Experimental"
    }));
    await expect(canvas.getByRole("button", {
      name: "Start new"
    })).toBeVisible();
    await expect(canvas.getByRole("button", {
      name: "Supply Chain"
    })).toBeVisible();
    await expect(canvas.queryByText("Workbench")).not.toBeInTheDocument();
  }
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    initiallyExpanded: false
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    initiallyExpanded: false,
    collapsible: "offcanvas"
  }
}`,...x.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    side: "right"
  }
}`,...R.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "floating"
  }
}`,...B.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    navigationHistory: [],
    store: {
      preloadedState: {
        sidebarData: {
          sidebarChats: [],
          sidebarChatsLoading: true
        }
      }
    }
  }
}`,...f.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    navigationHistory: manyRecentItems
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("link", {
      name: "Recent project 15"
    })).toBeInTheDocument();
    await expect(canvas.queryByRole("link", {
      name: "Recent project 16"
    })).not.toBeInTheDocument();
    canvas.getByRole("button", {
      name: "Show more"
    }).focus();
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByRole("link", {
      name: "Recent project 23"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("button", {
      name: "Show less"
    })).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    await expect(canvas.queryByRole("link", {
      name: "Recent project 16"
    })).not.toBeInTheDocument();
    await expect(canvas.getByRole("button", {
      name: "Show more"
    })).toHaveFocus();
  }
}`,...E.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    store: {
      preloadedState: {
        members: {
          userTenantPermissions: viewerTenantPermissions
        }
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: /Alex Storybook/
    }));
    await expect(within(document.body).queryByRole("menuitem", {
      name: "Equipment"
    })).not.toBeInTheDocument();
    await expect(await within(document.body).findByRole("menuitem", {
      name: "Navigation"
    })).toBeInTheDocument();
    await expect(within(document.body).queryByRole("menuitem", {
      name: "Admin"
    })).not.toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    const startNew = canvas.getByRole("button", {
      name: "Start new"
    });
    startNew.focus();
    await userEvent.keyboard("{Enter}");
    const dialog = within(await within(document.body).findByRole("dialog", {
      name: "Create"
    }));
    await expect(dialog.queryByRole("button", {
      name: /New Project/
    })).not.toBeInTheDocument();
    await expect(dialog.getByRole("button", {
      name: /New chat/
    })).toBeEnabled();
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(startNew).toHaveFocus());
  }
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Supply Chain"
    }));
    await userEvent.click(canvas.getByRole("link", {
      name: "Suppliers"
    }));
    await expect(canvas.getByLabelText("Current route")).toHaveTextContent("/suppliers");
    await userEvent.click(canvas.getByRole("button", {
      name: "Toggle navigation preview"
    }));
    await expect(canvas.getByLabelText("Sidebar state")).toHaveTextContent("collapsed");
    const startNew = canvas.getByRole("button", {
      name: "Start new"
    });
    startNew.focus();
    await userEvent.keyboard(" ");
    await within(document.body).findByRole("dialog", {
      name: "Create"
    });
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(startNew).toHaveFocus());
    await userEvent.keyboard("{Enter}");
    const dialog = within(await within(document.body).findByRole("dialog", {
      name: "Create"
    }));
    await userEvent.click(dialog.getByRole("button", {
      name: /New Project/
    }));
    await waitFor(() => expect(canvas.getByLabelText("Current route")).toHaveTextContent("/projects/new"));
    await expect(within(document.body).queryByRole("dialog", {
      name: "Create"
    })).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Reset sidebar state"
    }));
    await expect(canvas.getByLabelText("Sidebar state")).toHaveTextContent("expanded");
    await userEvent.click(canvas.getByRole("button", {
      name: "Search"
    }));
    await expect(canvas.getByLabelText("Search request")).toHaveTextContent("Requested");
  }
}`,...k.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const library = canvas.getAllByRole("button", {
      name: "Library"
    })[0];
    library.focus();
    await userEvent.keyboard("{Enter}");
    await userEvent.click(canvas.getByRole("link", {
      name: "Ingredients"
    }));
    await expect(canvas.getByLabelText("Current route")).toHaveTextContent("/ingredients");
    const actions = () => canvas.getAllByRole("button", {
      name: "Actions for Oat drink formulation"
    });
    actions()[0].focus();
    await userEvent.keyboard("{Enter}");
    await userEvent.click(await body.findByRole("menuitem", {
      name: "Pin"
    }));
    await expect(actions()).toHaveLength(1);
    await userEvent.click(canvas.getByRole("button", {
      name: "Reset sidebar state"
    }));
    await expect(actions()).toHaveLength(1);
    await userEvent.click(actions()[0]);
    await userEvent.click(await body.findByRole("menuitem", {
      name: "Unpin"
    }));
    await expect(actions()).toHaveLength(1);
    await expect(canvas.getByRole("button", {
      name: "Actions for Yogurt protein optimization"
    })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Actions for Oat yogurt base"
    }));
    await userEvent.click(await body.findByRole("menuitem", {
      name: "Rename"
    }));
    const rename = within(await body.findByRole("dialog", {
      name: "Rename item"
    }));
    await expect(rename.getByRole("textbox", {
      name: "Rename item"
    })).toHaveValue("Oat yogurt base");
    await userEvent.keyboard("{Escape}");
  }
}`,...T.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    navigationHistory: mixedRecentItems.map(item => ({
      ...item,
      title: \`\${item.title} — an intentionally long working title that must truncate before the quick actions menu\`
    }))
  }
}`,...C.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const trigger = canvas.getByRole("button", {
      name: "Filter recents"
    });
    trigger.focus();
    await userEvent.keyboard("{Enter}");
    await userEvent.click(await body.findByRole("checkbox", {
      name: "All types"
    }));
    await userEvent.click(body.getByRole("checkbox", {
      name: "Recipes"
    }));
    await expect(canvas.getByRole("link", {
      name: "Oat yogurt base"
    })).toBeInTheDocument();
    await expect(canvas.queryByRole("link", {
      name: "Plant-based yogurt"
    })).not.toBeInTheDocument();
    const search = body.getByRole("textbox", {
      name: "Search recent items"
    });
    await userEvent.type(search, "missing");
    await waitFor(() => expect(canvas.getByText("No matching recent items")).toBeInTheDocument());
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(trigger).toHaveFocus());
    await userEvent.click(trigger);
    await userEvent.click(await body.findByRole("button", {
      name: "Reset filters"
    }));
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("link", {
      name: "Plant-based yogurt"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("button", {
      name: "Actions for Yogurt protein optimization"
    })).toBeInTheDocument();
  }
}`,...A.parameters?.docs?.source}}};const Ot=["Playground","AnatomyExperimental","AnatomyExisting","Existing","ExistingCollapsed","NavigationChoice","Collapsed","Offcanvas","RightSide","Floating","LoadingRecentChats","ManyRecents","ViewerPermissions","NavigationAndCreate","LibraryAndPins","LongHistoryTitles","FilterRecents"];export{y as AnatomyExisting,g as AnatomyExperimental,v as Collapsed,h as Existing,b as ExistingCollapsed,A as FilterRecents,B as Floating,T as LibraryAndPins,f as LoadingRecentChats,C as LongHistoryTitles,E as ManyRecents,k as NavigationAndCreate,w as NavigationChoice,x as Offcanvas,u as Playground,R as RightSide,S as ViewerPermissions,Ot as __namedExportsOrder,Lt as default};
