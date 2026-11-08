import{j as o,bq as L,cj as I,br as P,c7 as O,cG as q,cH as A,aX as _,r as N,ax as E,c as F,a as j}from"./iframe-6uZ_OvXJ.js";import{B as M}from"./button-A8HzViyP.js";import{S as U,u as $,a as Y,b as Z}from"./SidebarSection-texb4wwO.js";import{A as D,g as z}from"./app-sidebar-CwMTuMSi.js";import{g as K}from"./use-recent-navigation-DeJyp4_X.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BIEDR5QJ.js";import"./loader-circle-DPzNQWfU.js";import"./dropdown-menu-CH01PJiV.js";import"./menu-BB0nZVv8.js";import"./CompositeItem-DiKjTF7g.js";import"./useCompositeItem-CEgqY0th.js";import"./Separator-UJ0jSiK3.js";import"./chevron-right-DQAu3Wv6.js";import"./circle-BOSVkkPm.js";import"./ExpandableTextTrigger-CtaP99rt.js";import"./ellipsis-BdoQ7bBK.js";import"./plus-CjxSM-tB.js";import"./collapsible-D5z7BIl8.js";import"./useCollapsiblePanel-CEEvXl-2.js";import"./search-field-BYGbCLxi.js";import"./input-xqFXePlz.js";import"./index.module-Db1hQFPV.js";import"./checkbox-CzlPmnCo.js";import"./minus-CKlNa8RO.js";import"./useAriaLabelledBy-BKgySVsG.js";import"./dialog-DnvpmbSS.js";import"./overlay-dialog-_C1niahL.js";import"./separator-CkvihxIh.js";import"./sheet-024fQP7m.js";import"./skeleton-Bu9j_NfJ.js";import"./panel-left-CatA2Q48.js";import"./sidebar-theme-K9_5uVgN.js";import"./avatar-Dmq_uy83.js";import"./chevrons-up-down-pYK2jq1f.js";import"./shield-BWKfEMZf.js";import"./settings-D5r3awjr.js";import"./proxyfoodlogo-BB_abrdL.js";import"./use-permissions-DhZfaxzb.js";import"./use-current-module-CXq7_1uF.js";import"./featureFlags-R30pJjMx.js";import"./apiClient-B5YImINg.js";import"./request-BbyBNZg4.js";import"./trackPosthogEvent-fthYs4K3.js";import"./jsonApiHandler-DHxZXfLw.js";import"./apiUrl-o8N8i6mn.js";import"./pencil-Dx2daJ7d.js";import"./pin-off-BFmEXCuD.js";import"./copy-BILc6MVC.js";import"./external-link-D6KuruoI.js";import"./layers-BabORPBc.js";import"./file-text-nCD9I8Xm.js";import"./clipboard-list-DmdHdt6q.js";import"./wrench-DBq1nVoF.js";import"./factory-B6pYZqD4.js";import"./folder-DCi5xMtm.js";import"./building-vmwbYbbz.js";import"./link-2-BmKVxluV.js";import"./package-DLCcUtGO.js";import"./users-DMpFL-9l.js";import"./sparkle-d-08Tc3F.js";import"./arrow-up-DejSgtne.js";import"./arrow-down-LFNtcj0H.js";import"./proxy-ai-CS5Wnpgd.js";import"./link-NVJJzIw5.js";import"./GradientButton-DYiJN-S0.js";import"./input-field-B_Y4AWYp.js";import"./number-field-Ru33oSuc.js";import"./GradientIcon-BcoxLprl.js";import"./InfoAlert-jeYOeLpI.js";import"./circle-x-BOcBs_hd.js";import"./circle-check-big-BhjVcHh1.js";import"./triangle-alert-B_zFvblH.js";import"./info-BfHyHFxU.js";import"./EmptyState-CE5-KyxB.js";import"./StatusIndicator-ENElgtKP.js";import"./QuickActionCard-BQt3A_CC.js";import"./badge-BfEYvfQV.js";import"./sparkles-BJvKFAq1.js";import"./upload-CRg0NstZ.js";import"./input-dialog-DJNP0dHL.js";/* empty css                            */import"./proxyLogo-CzHoIAWe.js";const{expect:n,userEvent:t,waitFor:p,within:s}=__STORYBOOK_MODULE_TEST__,G=[{id:"story-oat",title:"Oat drink formulation",starred:!1,scope:"recipe_formulation_advisor",updatedAt:"2026-10-01T09:00:00Z",status:"active"},{id:"story-label",title:"EU label review",starred:!1,scope:"regulatory_agent",updatedAt:"2026-10-02T09:00:00Z",status:"active"}],V={id:"story-pinned-yogurt",title:"Yogurt protein optimization",starred:!1,scope:"recipe_formulation_advisor",updatedAt:"2026-09-20T09:00:00Z",status:"active"},S=z(E.userId,E.tenantId),T=K(E.userId,E.tenantId),H=[{kind:"project",id:"77",title:"Plant-based yogurt",href:"/projects/77",visitedAt:"2026-11-08T10:00:00Z"},{kind:"recipe",id:"1042",title:"Oat yogurt base",href:"/recipes/1042",visitedAt:"2026-11-08T09:00:00Z"},{kind:"idea",id:"story-idea",title:"High-protein breakfast",visitedAt:"2026-11-08T08:00:00Z"}],J=Array.from({length:23},(a,e)=>({kind:"project",id:`history-${e+1}`,title:`Recent project ${e+1}`,href:`/projects/history-${e+1}`,visitedAt:new Date(Date.UTC(2026,10,8,12,0,-e)).toISOString()}));function C(a){try{return localStorage.getItem(a)}catch{return null}}function m(a,e){try{e===null?localStorage.removeItem(a):localStorage.setItem(a,e)}catch{}}function W(){const a=F(),{state:e,isMobile:i,openMobile:r}=$(),c=j(d=>d.ui.showNavigationModal),l=j(d=>d.formula.formulaInfo.isFormulaSideSheetOpen);return o.jsxs(Y,{className:"sb-app-navigation-content",children:[o.jsxs("header",{children:[o.jsx(Z,{"aria-label":"Toggle navigation preview"}),o.jsx("h2",{children:"Application navigation"})]}),o.jsx("p",{children:"This is the production AppSidebar. Follow a destination, explore Library, drag a recent item into Pinned, or open Create new. Additional destinations and account settings are in the account menu."}),o.jsxs("dl",{children:[o.jsx("dt",{children:"Current route"}),o.jsx("dd",{children:o.jsxs("output",{"aria-label":"Current route",children:[a.pathname,a.search]})}),o.jsx("dt",{children:"Sidebar state"}),o.jsx("dd",{children:o.jsx("output",{"aria-label":"Sidebar state",children:i?r?"mobile open":"mobile closed":e})}),o.jsx("dt",{children:"Search request"}),o.jsx("dd",{children:o.jsx("output",{"aria-label":"Search request",children:c?"Requested":"Not requested"})}),o.jsx("dt",{children:"Recipe request"}),o.jsx("dd",{children:o.jsx("output",{"aria-label":"Recipe request",children:l?"Requested":"Not requested"})})]}),o.jsx("p",{children:"Pins and recent items are saved locally for this preview account. Navigation stays in this preview. Search and recipe actions update the real Redux flags shown above; their application-wide overlays and backend workflows are not mounted here. Chat and idea selection require application sagas and are not completed backend workflows in this fixture. Use the local demo for those flows."})]})}function X({initiallyExpanded:a,side:e,variant:i,collapsible:r}){const[c,l]=N.useState(a);return o.jsx("div",{className:"sb-app-navigation-preview",children:o.jsxs(U,{open:c,onOpenChange:l,className:"v1 sb-app-navigation-provider","data-preview-side":e,children:[o.jsx(D,{side:e,variant:i,collapsible:r,style:{height:"100%"}}),o.jsx(W,{})]})})}function Q(a){const[e,i]=N.useState(0);return o.jsxs(o.Fragment,{children:[o.jsx(X,{...a},`${a.initiallyExpanded}-${e}`),o.jsx(M,{variant:"outline",onClick:()=>i(r=>r+1),children:"Reset sidebar state"})]})}const It={title:"Patterns/App Navigation",component:D,tags:["autodocs"],parameters:{layout:"fullscreen",shell:!1,route:"/projects",store:{preloadedState:{sidebarData:{sidebarChats:G,sidebarChatsLoading:!1},members:{userTenantPermissions:[...L,I.CREATE,I.UPDATE,P.CREATE,P.UPDATE,O.READ,q.CREATE,A.CREATE,A.UPDATE]}}},docs:{description:{component:["The real application sidebar composes Create new, Search, Chats, Projects, Recipes and Library, followed by matching section gaps above Pinned and Recents. Library contains Ingredients, Target specs, Documents and Ideas. Additional destinations and permission-aware administration remain available in the account menu. The preview renders the existing AppSidebar source and uses a local router and fixture Redux store.","### Public API and host obligations","AppSidebar accepts React.ComponentProps<typeof Sidebar>: side (left/right), variant (sidebar/floating/inset), collapsible (icon/offcanvas/none), and native div attributes. Its default collapsible behavior is icon. Its internal theme class replaces a caller className; the preview does not pretend className is a styling API. SidebarProvider owns open/onOpenChange, mobile state and Ctrl/Meta+B. The fixture controls initiallyExpanded and resets are preview-only, not AppSidebar props. Changing initiallyExpanded remounts the preview; Reset sidebar state restores it without resetting the current route or Redux actions.","The host must supply SidebarProvider, Redux with auth/members/sidebarData/formula/ui reducers, router, translations and tooltip providers. Production additionally supplies sagas, feature flags, authentication and global search/editor overlays. Storybook supplies those providers with mock authentication and no running sagas. Link destinations update the visible route. Create new opens the actual dialog; New Project navigates locally, New Recipe changes a visible Redux flag. Search only requests the absent global search overlay. No completed backend mutation is simulated.","Recents tracks opened or created projects, recipes, chats and ideas in this browser, scoped to the signed-in user and tenant. Existing service chat history also seeds the list. The Recents filter before the chevron matches titles and restricts type before pagination; Reset restores all types without deleting history or pins. The same controls remain available through the collapsed Recents menu. The first 15 items appear initially; Show more expands the rest, and Show less restores the compact list. Drag a recent item onto Pinned or use its named pin action with a keyboard. Repeated drops do not unpin. Pins remain available outside the recent results; fresh metadata updates their labels. Existing chat pins are retained when upgrading to mixed items. Pinning does not change the service's starred field. Fixtures restore prior local pins and recents after each story. Production logout clears browser storage, including pins and local history.","### States and appearance","Expanded, collapsed, offcanvas, right-side, floating, loading history and read-only permissions are represented below. Create new renders the same shared SidebarNavItem as Search and the other navigation rows. The compact density uses 224px desktop width, 256px mobile width, 32px rows, 13px labels and 14px icons, with a 40px brand row. Category-owned sidebar-part groups select existing semantic scales consistently across all four modes. A shared 24px section gap appears above both Pinned and Recents. Search and Chats use ordinary row spacing; neither boundary has a divider stroke. Pinned and Recents headings use the lighter muted reading color. Pinned and Recents use small uppercase SidebarNavGroup headings without expanded heading icons, extra space above, and flush history rows. Every history row reserves trailing space for its keyboard-accessible ellipsis menu and truncates long titles. The menu provides Open, permission-gated Rename, and Pin/Unpin; project and recipe routes also provide Copy link and Open in new tab. Navigation category groups own their appearance. The app computes active destinations from the current route. Small viewports use the existing mobile sheet; the external preview toggle opens it. AppSidebar owns its SidebarThemeProvider and reads pf_sidebar_theme: the Storybook app-theme toolbar does not independently select the sidebar theme. The account menu's appearance action uses the real provider. This documents current production appearance without claiming whole-application WCAG conformance. The frame bounds the desktop sidebar; real dialog/mobile portals can extend beyond it."].join(`

`)}}},args:{side:"left",variant:"sidebar",collapsible:"icon",initiallyExpanded:!0},argTypes:{side:{control:"inline-radio",options:["left","right"]},variant:{control:"select",options:["sidebar","floating","inset"]},collapsible:{control:"inline-radio",options:["icon","offcanvas"],description:"Public API also accepts none. This interactive fixture demonstrates the two collapsible modes."},initiallyExpanded:{control:"boolean",description:"Playground-only initial SidebarProvider state. Changes remount the preview so this control always takes effect."}},beforeEach:({parameters:a})=>{const e=document.cookie.split("; ").find(d=>d.startsWith("sidebar_state=")),i=C("pf_sidebar_theme"),r=C(S),c=C(T),l=a.navigationHistory??H;return m(T,JSON.stringify({version:1,items:l})),m(S,JSON.stringify({version:1,items:[V]})),()=>{document.cookie=e?`${e}; path=/; max-age=604800`:"sidebar_state=; path=/; max-age=0",m("pf_sidebar_theme",i),m(S,r),m(T,c)}},render:a=>o.jsx(Q,{...a})},u={},y={args:{initiallyExpanded:!1}},g={args:{initiallyExpanded:!1,collapsible:"offcanvas"}},b={args:{side:"right"}},h={args:{variant:"floating"}},w={parameters:{navigationHistory:[],store:{preloadedState:{sidebarData:{sidebarChats:[],sidebarChatsLoading:!0}}}}},v={parameters:{navigationHistory:J},play:async({canvasElement:a})=>{const e=s(a);await n(e.getByRole("link",{name:"Recent project 15"})).toBeInTheDocument(),await n(e.queryByRole("link",{name:"Recent project 16"})).not.toBeInTheDocument(),e.getByRole("button",{name:"Show more"}).focus(),await t.keyboard("{Enter}"),await n(e.getByRole("link",{name:"Recent project 23"})).toBeInTheDocument(),await n(e.getByRole("button",{name:"Show less"})).toHaveFocus(),await t.keyboard("{Enter}"),await n(e.queryByRole("link",{name:"Recent project 16"})).not.toBeInTheDocument(),await n(e.getByRole("button",{name:"Show more"})).toHaveFocus()}},R={parameters:{store:{preloadedState:{members:{userTenantPermissions:_}}}},play:async({canvasElement:a})=>{const e=s(a);await t.click(e.getByRole("button",{name:/Alex Storybook/})),await n(await s(document.body).findByRole("menuitem",{name:"Equipment"})).toBeInTheDocument(),await n(s(document.body).queryByRole("menuitem",{name:"Admin"})).not.toBeInTheDocument(),await t.keyboard("{Escape}");const i=e.getByRole("button",{name:"Create new"});i.focus(),await t.keyboard("{Enter}");const r=s(await s(document.body).findByRole("dialog",{name:"Create"}));await n(r.queryByRole("button",{name:/New Project/})).not.toBeInTheDocument(),await n(r.getByRole("button",{name:/New chat/})).toBeEnabled(),await t.keyboard("{Escape}"),await p(()=>n(i).toHaveFocus())}},x={play:async({canvasElement:a})=>{const e=s(a);await t.click(e.getByRole("button",{name:/Alex Storybook/})),await t.click(await s(document.body).findByRole("menuitem",{name:"Suppliers"})),await n(e.getByLabelText("Current route")).toHaveTextContent("/suppliers"),await t.click(e.getByRole("button",{name:"Toggle navigation preview"})),await n(e.getByLabelText("Sidebar state")).toHaveTextContent("collapsed");const i=e.getByRole("button",{name:"Create new"});i.focus(),await t.keyboard(" "),await s(document.body).findByRole("dialog",{name:"Create"}),await t.keyboard("{Escape}"),await p(()=>n(i).toHaveFocus()),await t.keyboard("{Enter}");const r=s(await s(document.body).findByRole("dialog",{name:"Create"}));await t.click(r.getByRole("button",{name:/New Project/})),await p(()=>n(e.getByLabelText("Current route")).toHaveTextContent("/projects/new")),await n(s(document.body).queryByRole("dialog",{name:"Create"})).not.toBeInTheDocument(),await t.click(e.getByRole("button",{name:"Reset sidebar state"})),await n(e.getByLabelText("Sidebar state")).toHaveTextContent("expanded"),await t.click(e.getByRole("button",{name:"Search"})),await n(e.getByLabelText("Search request")).toHaveTextContent("Requested")}},f={play:async({canvasElement:a})=>{const e=s(a),i=s(document.body);e.getAllByRole("button",{name:"Library"})[0].focus(),await t.keyboard("{Enter}"),await t.click(e.getByRole("link",{name:"Ingredients"})),await n(e.getByLabelText("Current route")).toHaveTextContent("/ingredients");const c=()=>e.getAllByRole("button",{name:"Actions for Oat drink formulation"});c()[0].focus(),await t.keyboard("{Enter}"),await t.click(await i.findByRole("menuitem",{name:"Pin"})),await n(c()).toHaveLength(1),await t.click(e.getByRole("button",{name:"Reset sidebar state"})),await n(c()).toHaveLength(1),await t.click(c()[0]),await t.click(await i.findByRole("menuitem",{name:"Unpin"})),await n(c()).toHaveLength(1),await n(e.getByRole("button",{name:"Actions for Yogurt protein optimization"})).toBeInTheDocument(),await t.click(e.getByRole("button",{name:"Actions for Oat yogurt base"})),await t.click(await i.findByRole("menuitem",{name:"Rename"}));const l=s(await i.findByRole("dialog",{name:"Rename item"}));await n(l.getByRole("textbox",{name:"Rename item"})).toHaveValue("Oat yogurt base"),await t.keyboard("{Escape}")}},B={parameters:{navigationHistory:H.map(a=>({...a,title:`${a.title} — an intentionally long working title that must truncate before the quick actions menu`}))}},k={play:async({canvasElement:a})=>{const e=s(a),i=s(document.body),r=e.getByRole("button",{name:"Filter recents"});r.focus(),await t.keyboard("{Enter}"),await t.click(await i.findByRole("checkbox",{name:"All types"})),await t.click(i.getByRole("checkbox",{name:"Recipes"})),await n(e.getByRole("link",{name:"Oat yogurt base"})).toBeInTheDocument(),await n(e.queryByRole("link",{name:"Plant-based yogurt"})).not.toBeInTheDocument();const c=i.getByRole("textbox",{name:"Search recent items"});await t.type(c,"missing"),await p(()=>n(e.getByText("No matching recent items")).toBeInTheDocument()),await t.keyboard("{Escape}"),await p(()=>n(r).toHaveFocus()),await t.click(r),await t.click(await i.findByRole("button",{name:"Reset filters"})),await t.keyboard("{Escape}"),await n(e.getByRole("link",{name:"Plant-based yogurt"})).toBeInTheDocument(),await n(e.getByRole("button",{name:"Actions for Yogurt protein optimization"})).toBeInTheDocument()}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{}",...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    initiallyExpanded: false
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    initiallyExpanded: false,
    collapsible: "offcanvas"
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    side: "right"
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "floating"
  }
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
    await expect(await within(document.body).findByRole("menuitem", {
      name: "Equipment"
    })).toBeInTheDocument();
    await expect(within(document.body).queryByRole("menuitem", {
      name: "Admin"
    })).not.toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    const startNew = canvas.getByRole("button", {
      name: "Create new"
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
}`,...R.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: /Alex Storybook/
    }));
    await userEvent.click(await within(document.body).findByRole("menuitem", {
      name: "Suppliers"
    }));
    await expect(canvas.getByLabelText("Current route")).toHaveTextContent("/suppliers");
    await userEvent.click(canvas.getByRole("button", {
      name: "Toggle navigation preview"
    }));
    await expect(canvas.getByLabelText("Sidebar state")).toHaveTextContent("collapsed");
    const startNew = canvas.getByRole("button", {
      name: "Create new"
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
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  parameters: {
    navigationHistory: mixedRecentItems.map(item => ({
      ...item,
      title: \`\${item.title} — an intentionally long working title that must truncate before the quick actions menu\`
    }))
  }
}`,...B.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};const Pt=["Playground","Collapsed","Offcanvas","RightSide","Floating","LoadingRecentChats","ManyRecents","ViewerPermissions","NavigationAndCreate","LibraryAndPins","LongHistoryTitles","FilterRecents"];export{y as Collapsed,k as FilterRecents,h as Floating,f as LibraryAndPins,w as LoadingRecentChats,B as LongHistoryTitles,v as ManyRecents,x as NavigationAndCreate,g as Offcanvas,u as Playground,b as RightSide,R as ViewerPermissions,Pt as __namedExportsOrder,It as default};
