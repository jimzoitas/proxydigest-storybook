import{j as e,fa as R,ac as T,ad as B,O as E,r as f,c as C,a as x}from"./iframe-AqpYXns4.js";import{B as k}from"./button-B5FjjXWS.js";import{S as j,u as N,a as P,b as _}from"./SidebarSection-jtR6GPtn.js";import{A as S}from"./app-sidebar-CNUwbpKL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DEXj3--c.js";import"./loader-circle-mWFWE2W9.js";import"./collapsible-DZyMQ3Bu.js";import"./useCollapsiblePanel-DOTGH3aY.js";import"./plus-DzP923hm.js";import"./chevron-right-B3hyZT-D.js";import"./dropdown-menu-qZhg1f8R.js";import"./menu-DaKubz4c.js";import"./CompositeItem-D1wyjQOR.js";import"./useCompositeItem-QlszIeBN.js";import"./Separator-DssPvI5G.js";import"./circle-Dg6ojZlj.js";import"./input-DLCq6ZzS.js";import"./separator-C7Zm_6nS.js";import"./sheet-dNUUpp2U.js";import"./overlay-dialog-aVFq0bEi.js";import"./skeleton-C_SNY4zC.js";import"./panel-left-B2yi0UBt.js";import"./sidebar-theme-B91nszDb.js";import"./avatar-DTkZwYDb.js";import"./chevrons-up-down-Q_ZLaTHI.js";import"./settings-BlD8SRjQ.js";import"./proxyfoodlogo-2I26lGWq.js";import"./use-permissions-BnpTYHzZ.js";import"./use-current-module-hqtS5qxe.js";import"./featureFlags-R30pJjMx.js";import"./messages-square-CBk5369g.js";import"./layers-DZdJ4b-u.js";import"./file-text-cneRnGIV.js";import"./clipboard-list-Bobimkzm.js";import"./wrench-CN14mh1R.js";import"./factory-DLcwBI8a.js";import"./folder-HfUeaZJD.js";import"./building-x63BvAoL.js";import"./link-2-DRKfB1-u.js";import"./package-D3h3S5MO.js";import"./users-XmurezKW.js";import"./sparkle-CstBys91.js";import"./dialog-DnXWbC45.js";import"./proxy-ai-B3foHNVL.js";import"./link-DDXehOCU.js";import"./GradientButton-BAnbENHo.js";import"./input-field-BL2Hx9MY.js";import"./number-field-DZ29WMCg.js";import"./GradientIcon-CfoM2wBY.js";import"./InfoAlert-C6GU9og2.js";import"./circle-x-DP398tgS.js";import"./circle-check-big-ezdSO-Al.js";import"./triangle-alert-DPRF-sLk.js";import"./info-w0-6ezG6.js";import"./EmptyState-W0H3wZQQ.js";import"./StatusIndicator-DrNvs6i-.js";import"./QuickActionCard-CS01mYDf.js";import"./badge-CQKobhLs.js";import"./sparkles-CT90CegH.js";import"./upload-iVzrZjOh.js";import"./proxyLogo-CzHoIAWe.js";const{expect:o,userEvent:i,waitFor:y,within:s}=__STORYBOOK_MODULE_TEST__,q=[{id:"story-oat",title:"Oat drink formulation",starred:!1,scope:"recipe_formulation_advisor",updatedAt:"2026-10-01T09:00:00Z",status:"active"},{id:"story-label",title:"EU label review",starred:!1,scope:"regulatory_agent",updatedAt:"2026-10-02T09:00:00Z",status:"active"}];function A(){const a=C(),{state:t,isMobile:n,openMobile:r}=N(),g=x(v=>v.ui.showNavigationModal),w=x(v=>v.formula.formulaInfo.isFormulaSideSheetOpen);return e.jsxs(P,{className:"sb-app-navigation-content",children:[e.jsxs("header",{children:[e.jsx(_,{"aria-label":"Toggle navigation preview"}),e.jsx("h2",{children:"Application navigation"})]}),e.jsx("p",{children:"This is the production AppSidebar. Follow a destination, collapse the sidebar, or open Start new."}),e.jsxs("dl",{children:[e.jsx("dt",{children:"Current route"}),e.jsx("dd",{children:e.jsxs("output",{"aria-label":"Current route",children:[a.pathname,a.search]})}),e.jsx("dt",{children:"Sidebar state"}),e.jsx("dd",{children:e.jsx("output",{"aria-label":"Sidebar state",children:n?r?"mobile open":"mobile closed":t})}),e.jsx("dt",{children:"Search request"}),e.jsx("dd",{children:e.jsx("output",{"aria-label":"Search request",children:g?"Requested":"Not requested"})}),e.jsx("dt",{children:"Recipe request"}),e.jsx("dd",{children:e.jsx("output",{"aria-label":"Recipe request",children:w?"Requested":"Not requested"})})]}),e.jsx("p",{children:"Navigation stays in this preview. Search and recipe actions update the real Redux flags shown above; their application-wide overlays and backend workflows are not mounted here. Recent-chat selection requires the application's saga and is not a completed workflow in this fixture."})]})}function I({initiallyExpanded:a,side:t,variant:n,collapsible:r}){const[g,w]=f.useState(a);return e.jsx("div",{className:"sb-app-navigation-preview",children:e.jsxs(j,{open:g,onOpenChange:w,className:"v1 sb-app-navigation-provider","data-preview-side":t,children:[e.jsx(S,{side:t,variant:n,collapsible:r,style:{height:"100%"}}),e.jsx(A,{})]})})}function L(a){const[t,n]=f.useState(0);return e.jsxs(e.Fragment,{children:[e.jsx(I,{...a},`${a.initiallyExpanded}-${t}`),e.jsx(k,{variant:"outline",onClick:()=>n(r=>r+1),children:"Reset sidebar state"})]})}const Ve={title:"Patterns/App Navigation",component:S,tags:["autodocs"],parameters:{layout:"fullscreen",shell:!1,route:"/projects",store:{preloadedState:{sidebarData:{sidebarChats:q,sidebarChatsLoading:!1},members:{userTenantPermissions:[...R,T.CREATE,B.CREATE]}}},docs:{description:{component:["The real application sidebar composes Proxy's navigation primitives, permission-aware groups, recent chats, account menu and Start new dialog. The preview renders the existing AppSidebar source and uses a local router and fixture Redux store.","### Public API and host obligations","AppSidebar accepts React.ComponentProps<typeof Sidebar>: side (left/right), variant (sidebar/floating/inset), collapsible (icon/offcanvas/none), and native div attributes. Its default collapsible behavior is icon. Its internal theme class replaces a caller className; the preview does not pretend className is a styling API. SidebarProvider owns open/onOpenChange, mobile state and Ctrl/Meta+B. The fixture controls initiallyExpanded and resets are preview-only, not AppSidebar props. Changing initiallyExpanded remounts the preview; Reset sidebar state restores it without resetting the current route or Redux actions.","The host must supply SidebarProvider, Redux with auth/members/sidebarData/formula/ui reducers, router, translations and tooltip providers. Production additionally supplies sagas, feature flags, authentication and global search/editor overlays. Storybook supplies those providers with mock authentication and no running sagas. Link destinations update the visible route. Start new opens the actual dialog; New Project navigates locally, New Recipe changes a visible Redux flag. Search only requests the absent global search overlay. No completed backend mutation is simulated.","### States and appearance","Expanded, collapsed, offcanvas, right-side, floating, loading chats and read-only permissions are represented below. Start new uses the shared primary Button: default size with full-width placement when expanded, icon size with its accessible name when collapsed. Button owns its padding, icon, colors, hover and focus; the sidebar does not override these. The app computes active destinations from the current route. Small viewports use the existing mobile sheet; the external preview toggle opens it. AppSidebar owns its SidebarThemeProvider and reads pf_sidebar_theme: the Storybook app-theme toolbar does not independently select the sidebar theme. The account menu's appearance action uses the real provider. This documents current production appearance without claiming whole-application WCAG conformance. The frame bounds the desktop sidebar; real dialog/mobile portals can extend beyond it."].join(`

`)}}},args:{side:"left",variant:"sidebar",collapsible:"icon",initiallyExpanded:!0},argTypes:{side:{control:"inline-radio",options:["left","right"]},variant:{control:"select",options:["sidebar","floating","inset"]},collapsible:{control:"inline-radio",options:["icon","offcanvas"],description:"Public API also accepts none. This interactive fixture demonstrates the two collapsible modes."},initiallyExpanded:{control:"boolean",description:"Playground-only initial SidebarProvider state. Changes remount the preview so this control always takes effect."}},beforeEach:()=>{const a=document.cookie.split("; ").find(n=>n.startsWith("sidebar_state=")),t=localStorage.getItem("pf_sidebar_theme");return()=>{document.cookie=a?`${a}; path=/; max-age=604800`:"sidebar_state=; path=/; max-age=0",t===null?localStorage.removeItem("pf_sidebar_theme"):localStorage.setItem("pf_sidebar_theme",t)}},render:a=>e.jsx(L,{...a})},c={},l={args:{initiallyExpanded:!1}},d={args:{initiallyExpanded:!1,collapsible:"offcanvas"}},p={args:{side:"right"}},m={args:{variant:"floating"}},u={parameters:{store:{preloadedState:{sidebarData:{sidebarChats:[],sidebarChatsLoading:!0}}}}},h={parameters:{store:{preloadedState:{members:{userTenantPermissions:E}}}},play:async({canvasElement:a})=>{const t=s(a);await o(t.queryByRole("link",{name:"Members"})).not.toBeInTheDocument();const n=t.getByRole("button",{name:"Start new"});n.focus(),await i.keyboard("{Enter}");const r=s(await s(document.body).findByRole("dialog",{name:"Create"}));await o(r.queryByRole("button",{name:/New Project/})).not.toBeInTheDocument(),await o(r.getByRole("button",{name:/New chat/})).toBeEnabled(),await i.keyboard("{Escape}"),await y(()=>o(n).toHaveFocus())}},b={play:async({canvasElement:a})=>{const t=s(a);await i.click(t.getByRole("link",{name:"Suppliers"})),await o(t.getByLabelText("Current route")).toHaveTextContent("/suppliers"),await i.click(t.getByRole("button",{name:"Toggle navigation preview"})),await o(t.getByLabelText("Sidebar state")).toHaveTextContent("collapsed");const n=t.getByRole("button",{name:"Start new"});n.focus(),await i.keyboard(" "),await s(document.body).findByRole("dialog",{name:"Create"}),await i.keyboard("{Escape}"),await y(()=>o(n).toHaveFocus()),await i.keyboard("{Enter}");const r=s(await s(document.body).findByRole("dialog",{name:"Create"}));await i.click(r.getByRole("button",{name:/New Project/})),await y(()=>o(t.getByLabelText("Current route")).toHaveTextContent("/projects/new")),await o(s(document.body).queryByRole("dialog",{name:"Create"})).not.toBeInTheDocument(),await i.click(t.getByRole("button",{name:"Reset sidebar state"})),await o(t.getByLabelText("Sidebar state")).toHaveTextContent("expanded"),await i.click(t.getByRole("button",{name:"Search"})),await o(t.getByLabelText("Search request")).toHaveTextContent("Requested")}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    initiallyExpanded: false
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    initiallyExpanded: false,
    collapsible: "offcanvas"
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    side: "right"
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "floating"
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    store: {
      preloadedState: {
        sidebarData: {
          sidebarChats: [],
          sidebarChatsLoading: true
        }
      }
    }
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.queryByRole("link", {
      name: "Members"
    })).not.toBeInTheDocument();
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
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
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
}`,...b.parameters?.docs?.source}}};const We=["Playground","Collapsed","Offcanvas","RightSide","Floating","LoadingRecentChats","ViewerPermissions","NavigationAndCreate"];export{l as Collapsed,m as Floating,u as LoadingRecentChats,b as NavigationAndCreate,d as Offcanvas,c as Playground,p as RightSide,h as ViewerPermissions,We as __namedExportsOrder,Ve as default};
