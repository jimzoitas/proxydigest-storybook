import{j as t,h as B,H as R,r as N,u as U,a as V,b as q,c as K,t as W}from"./iframe-BXubdNpd.js";/* empty css                      */import{B as $}from"./button-DOg3bB7T.js";import{F as T}from"./apiUrl-o8N8i6mn.js";import{S as J,a as z,G as H}from"./GlobalSearchModal-BhbQVhlq.js";import A from"./GlobalNavigationModal-CUD_PMuq.js";import{d as Y}from"./delay-CL7_evdi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DKWiT4Fi.js";import"./loader-circle-WJxMtqtu.js";import"./dialog-Gbr7wu8m.js";import"./overlay-dialog-CQZe9RQv.js";import"./index.es-Cv4oNgR4.js";import"./use-paginated-api-D8Vkcu94.js";import"./request-TLnfbZnK.js";import"./trackPosthogEvent-CBk16WCm.js";import"./jsonApiHandler-4nyzgRht.js";import"./index.module-B6UitgKw.js";import"./input-BWeqiJDe.js";import"./skeleton-BP5S_qG6.js";import"./toggle-group-D27B5ejm.js";import"./CompositeItem-CBKa8E3y.js";import"./useCompositeItem-Bi8YYZ7L.js";import"./roving-focus-0SK5-Aqb.js";import"./CompositeRoot-DuK6i5O1.js";import"./file-text-P-Na7IsX.js";import"./cooking-pot-pwofiaYQ.js";import"./ingredientExternalId-DmZUVRZ9.js";import"./badge-C4iUsAGF.js";import"./file-spreadsheet-Vw_HRQ61.js";import"./SearchByConfig-f3D-_Ft_.js";import"./search-combobox-wrapper-CsYvgqAX.js";import"./search-combobox-base-DpzvEg6P.js";import"./tooltip-core-CGhIyYC9.js";import"./chevrons-up-down-CHE9Wbz7.js";import"./search-combobox-server-Dj6Mk73t.js";import"./plus-BS0_boJY.js";import"./use-permissions-CoEJ2R_X.js";import"./circle-plus-D3OehnXk.js";import"./arrow-up-right-9RHswHod.js";import"./isObject-DVTTJpIa.js";const{expect:n,fn:j,userEvent:r,waitFor:k,within:s}=__STORYBOOK_MODULE_TEST__,Q=B.get(T,()=>R.json({data:[{type:"formula",id:"901",attributes:{name:"Oat demo recipe",externalSystemId:"OAT-01"}}]}));function E({surface:e,source:a,empty:i,pinned:x,createAction:L,onSelect:F,onCreate:I}){const[O,S]=N.useState(!1),[P,D]=N.useState("No selection"),M=U(),{showNavigationModal:_}=V(q),G=K();return t.jsxs(t.Fragment,{children:[t.jsx($,{onClick:()=>e==="navigation"?M(W()):S(!0),children:"Open search"}),t.jsx("output",{"aria-label":"Search selection",children:P}),t.jsx("output",{"aria-label":"Current route",children:G.pathname}),t.jsx("output",{"aria-label":"Search open",children:String(e==="navigation"?_:O)}),e==="navigation"?t.jsx(A,{}):t.jsx(H,{open:O,onOpenChange:S,visibleTabs:a==="recipes"?["formula"]:[],defaultSearchBy:a==="recipes"?"formula":"region",dynamicTabsWithValues:a==="dynamic"?[{name:"region",label:"Regions",values:i?[]:[{value:"eu",label:"Europe"},{value:"us",label:"United States"}]}]:void 0,onSelect:C=>{F(C),D(JSON.stringify(C)),S(!1)},pinnedItem:x&&a==="recipes"?{view:"formula",item:{id:"901",name:"Oat demo recipe"}}:void 0,createAction:L?{tabValue:a==="recipes"?"formula":"region",onClick:I}:void 0,searchPlaceholder:"Find a resource"})]})}const Me={title:"Patterns/Global Search",component:E,subcomponents:{GlobalSearchModal:H,GlobalNavigationModal:A,SearchByTabs:z,SearchListItem:J},tags:["autodocs"],args:{surface:"selection",source:"dynamic",empty:!1,pinned:!1,createAction:!1,onSelect:j(),onCreate:j()},argTypes:{surface:{control:"inline-radio",options:["selection","navigation"]},source:{control:"inline-radio",options:["dynamic","recipes"]},onSelect:{control:!1},onCreate:{control:!1}},parameters:{msw:{handlers:[Q]},docs:{description:{component:`The actual application search surfaces share dialog, named search field and real paginated-search hook. Selection search accepts controlled open/onOpenChange, visibleTabs/defaultSearchBy, optional dynamic ContextOption groups, and calls onSelect with the unchanged selected record; this fixture chooses to close after selection. Dynamic values are filtered locally, API records use the existing debounced JSON:API filters. Additional filters/extras, per-tab dynamic filters, processStep, ingredientAnyCost, pinnedItem, filterItem and renderItemDecoration remain host-owned contracts. A pinned item is deduplicated and hidden when it no longer matches. createAction retains its authored New Note label.

Navigation search is a separate global Redux/route integration: search is debounced 400ms, selecting a recipe navigates to /recipes/:id then closes; creation actions keep permission gates. Closing resets its search. Existing results/action rows are now native keyboard buttons, retaining original handlers and styling. A failed request is distinguished from an empty successful search. This example uses finite local search responses and the real router/reducers; it does not create, persist or authorize records. No production auth is bypassed. Escape and outside dismissal remain owned by the shared Dialog compatibility API backed by Base UI.`}}},render:e=>t.jsx(E,{...e},`${e.surface}-${e.source}-${e.empty}`)},o=async e=>{const a=s(e);return await r.click(a.getByRole("button",{name:"Open search"})),s(e.ownerDocument.body)},c={},l={play:async({canvasElement:e,args:a})=>{(await(await o(e)).findByRole("button",{name:"Europe"})).focus(),await r.keyboard("{Enter}"),await n(a.onSelect).toHaveBeenCalledWith(n.objectContaining({id:"eu",name:"Europe",type:"region"})),await n(s(e).getByLabelText("Search open")).toHaveTextContent("false")}},p={args:{source:"recipes"},play:async({canvasElement:e})=>{const a=await o(e);await n(await a.findByRole("button",{name:/Oat demo recipe/})).toBeVisible()}},d={args:{source:"recipes",pinned:!0},play:async({canvasElement:e})=>{const a=await o(e);await a.findByRole("button",{name:/Oat demo recipe/}),await n(a.getAllByRole("button",{name:/Oat demo recipe/})).toHaveLength(1)}},m={args:{empty:!0},play:async({canvasElement:e})=>{const a=await o(e);await n(await a.findByText("No items found.")).toBeVisible()}},u={args:{source:"recipes"},parameters:{msw:{handlers:[B.get(T,async()=>(await Y("infinite"),R.json({data:[]})))]}},play:async({canvasElement:e})=>{await o(e)}},y={args:{source:"recipes"},parameters:{msw:{handlers:[B.get(T,()=>R.json({errors:[{status:"503",detail:"Local search unavailable"}]},{status:503}))]}},play:async({canvasElement:e})=>{const a=await o(e);await n(await a.findByRole("alert")).toHaveTextContent("Could not load search results")}},g={args:{createAction:!0},play:async({canvasElement:e,args:a})=>{const i=await o(e);await r.click(i.getByRole("button",{name:"New Note"})),await n(a.onCreate).toHaveBeenCalledTimes(1)}},w={args:{surface:"navigation"},play:async({canvasElement:e})=>{const a=await o(e),i=a.getByRole("textbox");await r.type(i,"Oat"),(await a.findByRole("button",{name:/Oat demo recipe/})).focus(),await r.keyboard("{Enter}"),await n(s(e).getByLabelText("Current route")).toHaveTextContent("/recipes/901"),await n(s(e).getByLabelText("Search open")).toHaveTextContent("false")}},h={args:{surface:"navigation"},parameters:{store:{preloadedState:{members:{userTenantPermissions:[]}}}},play:async({canvasElement:e})=>{const a=await o(e);await n(a.queryByRole("button",{name:/New recipe|New project/i})).not.toBeInTheDocument()}},b={play:async({canvasElement:e})=>{await o(e),await r.keyboard("{Escape}"),await n(s(e).getByLabelText("Search open")).toHaveTextContent("false"),await k(()=>n(s(e).getByRole("button",{name:"Open search"})).toHaveFocus())}},v={args:{surface:"navigation"},play:async({canvasElement:e})=>{await o(e),await r.keyboard("{Escape}"),await k(()=>n(s(e).getByRole("button",{name:"Open search"})).toHaveFocus())}},f={render:e=>t.jsxs("div",{className:"pf-story-stack",children:[t.jsxs("ol",{children:[t.jsx("li",{children:"Named dialog and persistent search-field label."}),t.jsx("li",{children:"Supported source tabs and optional host filters."}),t.jsx("li",{children:"Keyboard-selectable result rows, optional pinned row and decoration."}),t.jsx("li",{children:"Host-specific selection callback or global route/permission actions."})]}),t.jsx(E,{...e})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const c = await open(canvasElement);
    const option = await c.findByRole("button", {
      name: "Europe"
    });
    option.focus();
    await userEvent.keyboard("{Enter}");
    await expect(args.onSelect).toHaveBeenCalledWith(expect.objectContaining({
      id: "eu",
      name: "Europe",
      type: "region"
    }));
    await expect(within(canvasElement).getByLabelText("Search open")).toHaveTextContent("false");
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    source: "recipes"
  },
  play: async ({
    canvasElement
  }) => {
    const c = await open(canvasElement);
    await expect(await c.findByRole("button", {
      name: /Oat demo recipe/
    })).toBeVisible();
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    source: "recipes",
    pinned: true
  },
  play: async ({
    canvasElement
  }) => {
    const c = await open(canvasElement);
    await c.findByRole("button", {
      name: /Oat demo recipe/
    });
    await expect(c.getAllByRole("button", {
      name: /Oat demo recipe/
    })).toHaveLength(1);
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    empty: true
  },
  play: async ({
    canvasElement
  }) => {
    const c = await open(canvasElement);
    await expect(await c.findByText("No items found.")).toBeVisible();
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    source: "recipes"
  },
  parameters: {
    msw: {
      handlers: [http.get(FORMULAS, async () => {
        await delay("infinite");
        return HttpResponse.json({
          data: []
        });
      })]
    }
  },
  play: async ({
    canvasElement
  }) => {
    await open(canvasElement);
  }
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    source: "recipes"
  },
  parameters: {
    msw: {
      handlers: [http.get(FORMULAS, () => HttpResponse.json({
        errors: [{
          status: "503",
          detail: "Local search unavailable"
        }]
      }, {
        status: 503
      }))]
    }
  },
  play: async ({
    canvasElement
  }) => {
    const c = await open(canvasElement);
    await expect(await c.findByRole("alert")).toHaveTextContent("Could not load search results");
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    createAction: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const c = await open(canvasElement);
    await userEvent.click(c.getByRole("button", {
      name: "New Note"
    }));
    await expect(args.onCreate).toHaveBeenCalledTimes(1);
  }
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "navigation"
  },
  play: async ({
    canvasElement
  }) => {
    const c = await open(canvasElement);
    const field = c.getByRole("textbox");
    await userEvent.type(field, "Oat");
    const row = await c.findByRole("button", {
      name: /Oat demo recipe/
    });
    row.focus();
    await userEvent.keyboard("{Enter}");
    await expect(within(canvasElement).getByLabelText("Current route")).toHaveTextContent("/recipes/901");
    await expect(within(canvasElement).getByLabelText("Search open")).toHaveTextContent("false");
  }
}`,...w.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "navigation"
  },
  parameters: {
    store: {
      preloadedState: {
        members: {
          userTenantPermissions: []
        }
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const c = await open(canvasElement);
    await expect(c.queryByRole("button", {
      name: /New recipe|New project/i
    })).not.toBeInTheDocument();
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await open(canvasElement);
    await userEvent.keyboard("{Escape}");
    await expect(within(canvasElement).getByLabelText("Search open")).toHaveTextContent("false");
    await waitFor(() => expect(within(canvasElement).getByRole("button", {
      name: "Open search"
    })).toHaveFocus());
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "navigation"
  },
  play: async ({
    canvasElement
  }) => {
    await open(canvasElement);
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(within(canvasElement).getByRole("button", {
      name: "Open search"
    })).toHaveFocus());
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div className="pf-story-stack">
      <ol>
        <li>Named dialog and persistent search-field label.</li>
        <li>Supported source tabs and optional host filters.</li>
        <li>
          Keyboard-selectable result rows, optional pinned row and decoration.
        </li>
        <li>
          Host-specific selection callback or global route/permission actions.
        </li>
      </ol>
      <GlobalSearchExample {...args} />
    </div>
}`,...f.parameters?.docs?.source}}};const _e=["Playground","SelectDynamic","RecipeResults","Pinned","Empty","Loading","Error","CreateNote","Navigation","ReadOnlyNavigation","Escape","NavigationEscape","Anatomy"];export{f as Anatomy,g as CreateNote,m as Empty,y as Error,b as Escape,u as Loading,w as Navigation,v as NavigationEscape,d as Pinned,c as Playground,h as ReadOnlyNavigation,p as RecipeResults,l as SelectDynamic,_e as __namedExportsOrder,Me as default};
