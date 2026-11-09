import{j as t,h as T,H as R,r as A,u as G,a as W,b as q,c as K,t as $}from"./iframe-DgvZnKtv.js";/* empty css                      */import{B as J}from"./button-CEcYiQdY.js";import{F as C}from"./apiUrl-o8N8i6mn.js";import{S as z,a as Y,G as O}from"./GlobalSearchModal-CwUNIkfo.js";import k from"./GlobalNavigationModal-CokPpT-l.js";import{d as Q}from"./delay-0VzXGcfu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWlKOsdO.js";import"./loader-circle-BsZrs7F6.js";import"./composed-surface-thTtt0jI.js";import"./dialog-BGED6ss2.js";import"./overlay-dialog-i6vPmHIw.js";import"./trigger-adapters-C3qlkAhu.js";import"./input-adapters-Ck_awmH0.js";import"./input-DTWVrd6t.js";import"./index.es-BGW_4PyL.js";import"./use-paginated-api-Br3kYEE1.js";import"./request-DN34u20v.js";import"./trackPosthogEvent-DQYu7Eh_.js";import"./jsonApiHandler-0tb7Ffsv.js";import"./index.module-C-pw7-ZN.js";import"./skeleton-DwZsbo-S.js";import"./toggle-group-D6oIStAM.js";import"./CompositeItem-qKQIJE0X.js";import"./useCompositeItem-Dr13hnqh.js";import"./roving-focus-0SK5-Aqb.js";import"./CompositeRoot-CLpK0Eip.js";import"./slider-UYb5RKBF.js";import"./valueToPercent-DfWH2vGw.js";import"./file-text-C-eb-1Yd.js";import"./cooking-pot-DZnilx8f.js";import"./ingredientExternalId-DOz8m7gY.js";import"./badge-C-Jji8Kx.js";import"./file-spreadsheet-BffC2TlF.js";import"./SearchByConfig-Dg_Foj-v.js";import"./search-combobox-wrapper-D669X1G-.js";import"./search-combobox-base-CHZkCXAm.js";import"./tooltip-core-CEBHIfw_.js";import"./chevrons-up-down-BQnVMOhW.js";import"./search-combobox-server-o9goOcxH.js";import"./plus-BMpb-JrX.js";import"./composed-typography-BeKxRqyR.js";import"./use-permissions-RIBDcgJE.js";import"./circle-plus-Cdylr7HA.js";import"./arrow-up-right-QD6y7BbT.js";import"./isObject-DVTTJpIa.js";const{expect:n,fn:H,userEvent:r,waitFor:L,within:s}=__STORYBOOK_MODULE_TEST__,X=T.get(C,()=>R.json({data:[{type:"formula",id:"901",attributes:{name:"Oat demo recipe",externalSystemId:"OAT-01"}}]}));function B({surface:e,source:a,empty:i,pinned:S,createAction:F,onSelect:P,onCreate:I}){const[N,E]=A.useState(!1),[D,V]=A.useState("No selection"),M=G(),{showNavigationModal:U}=W(q),_=K();return t.jsxs(t.Fragment,{children:[t.jsx(J,{onClick:()=>e==="navigation"?M($()):E(!0),children:"Open search"}),t.jsx("output",{"aria-label":"Search selection",children:D}),t.jsx("output",{"aria-label":"Current route",children:_.pathname}),t.jsx("output",{"aria-label":"Search open",children:String(e==="navigation"?U:N)}),e==="navigation"?t.jsx(k,{}):t.jsx(O,{open:N,onOpenChange:E,visibleTabs:a==="recipes"?["formula"]:[],defaultSearchBy:a==="recipes"?"formula":"region",dynamicTabsWithValues:a==="dynamic"?[{name:"region",label:"Regions",values:i?[]:[{value:"eu",label:"Europe"},{value:"us",label:"United States"}]}]:void 0,onSelect:j=>{P(j),V(JSON.stringify(j)),E(!1)},pinnedItem:S&&a==="recipes"?{view:"formula",item:{id:"901",name:"Oat demo recipe"}}:void 0,createAction:F?{tabValue:a==="recipes"?"formula":"region",onClick:I}:void 0,searchPlaceholder:"Find a resource"})]})}const Ke={title:"Patterns/Global Search",component:B,subcomponents:{GlobalSearchModal:O,GlobalNavigationModal:k,SearchByTabs:Y,SearchListItem:z},tags:["autodocs"],args:{surface:"selection",source:"dynamic",empty:!1,pinned:!1,createAction:!1,onSelect:H(),onCreate:H()},argTypes:{surface:{control:"inline-radio",options:["selection","navigation"]},source:{control:"inline-radio",options:["dynamic","recipes"]},onSelect:{control:!1},onCreate:{control:!1}},parameters:{msw:{handlers:[X]},docs:{description:{component:`The actual application search surfaces share dialog, named search field and real paginated-search hook. Selection search accepts controlled open/onOpenChange, visibleTabs/defaultSearchBy, optional dynamic ContextOption groups, and calls onSelect with the unchanged selected record; this fixture chooses to close after selection. Dynamic values are filtered locally, API records use the existing debounced JSON:API filters. Additional filters/extras, per-tab dynamic filters, processStep, ingredientAnyCost, pinnedItem, filterItem and renderItemDecoration remain host-owned contracts. A pinned item is deduplicated and hidden when it no longer matches. createAction retains its authored New Note label.

Navigation search is a separate global Redux/route integration: search is debounced 400ms, selecting a recipe navigates to /recipes/:id then closes; creation actions keep permission gates. Closing resets its search. Existing results/action rows are now native keyboard buttons, retaining original handlers and styling. A failed request is distinguished from an empty successful search. This example uses finite local search responses and the real router/reducers; it does not create, persist or authorize records. No production auth is bypassed. Escape and outside dismissal remain owned by the shared Dialog compatibility API backed by Base UI.`}}},render:e=>t.jsx(B,{...e},`${e.surface}-${e.source}-${e.empty}`)},o=async e=>{const a=s(e);return await r.click(a.getByRole("button",{name:"Open search"})),s(e.ownerDocument.body)},l={},p={play:async({canvasElement:e,args:a})=>{(await(await o(e)).findByRole("button",{name:"Europe"})).focus(),await r.keyboard("{Enter}"),await n(a.onSelect).toHaveBeenCalledWith(n.objectContaining({id:"eu",name:"Europe",type:"region"})),await n(s(e).getByLabelText("Search open")).toHaveTextContent("false")}},d={args:{source:"recipes"},play:async({canvasElement:e})=>{const a=await o(e);await n(await a.findByRole("button",{name:/Oat demo recipe/})).toBeVisible()}},m={args:{source:"recipes",pinned:!0},play:async({canvasElement:e})=>{const a=await o(e);await a.findByRole("button",{name:/Oat demo recipe/}),await n(a.getAllByRole("button",{name:/Oat demo recipe/})).toHaveLength(1)}},u={args:{empty:!0},play:async({canvasElement:e})=>{const a=await o(e);await n(await a.findByText("No items found.")).toBeVisible()}},y={args:{source:"recipes"},parameters:{msw:{handlers:[T.get(C,async()=>(await Q("infinite"),R.json({data:[]})))]}},play:async({canvasElement:e})=>{await o(e)}},g={args:{source:"recipes"},parameters:{msw:{handlers:[T.get(C,()=>R.json({errors:[{status:"503",detail:"Local search unavailable"}]},{status:503}))]}},play:async({canvasElement:e})=>{const a=await o(e);await n(await a.findByRole("alert")).toHaveTextContent("Could not load search results")}},h={args:{createAction:!0},play:async({canvasElement:e,args:a})=>{const i=await o(e);await r.click(i.getByRole("button",{name:"New Note"})),await n(a.onCreate).toHaveBeenCalledTimes(1)}},w={args:{surface:"navigation"},play:async({canvasElement:e})=>{const a=await o(e),i=a.getByRole("textbox");await r.type(i,"Oat"),(await a.findByRole("button",{name:/Oat demo recipe/})).focus(),await r.keyboard("{Enter}"),await n(s(e).getByLabelText("Current route")).toHaveTextContent("/recipes/901"),await n(s(e).getByLabelText("Search open")).toHaveTextContent("false")}},b={args:{surface:"navigation"},parameters:{store:{preloadedState:{members:{userTenantPermissions:[]}}}},play:async({canvasElement:e})=>{const a=await o(e);await n(a.queryByRole("button",{name:/New recipe|New project/i})).not.toBeInTheDocument()}},v={play:async({canvasElement:e})=>{await o(e),await r.keyboard("{Escape}"),await n(s(e).getByLabelText("Search open")).toHaveTextContent("false"),await L(()=>n(s(e).getByRole("button",{name:"Open search"})).toHaveFocus())}},f={args:{surface:"navigation"},play:async({canvasElement:e})=>{await o(e),await r.keyboard("{Escape}"),await L(()=>n(s(e).getByRole("button",{name:"Open search"})).toHaveFocus())}},x={render:e=>t.jsxs("div",{className:"pf-story-stack",children:[t.jsxs("ol",{children:[t.jsx("li",{children:"Named dialog and persistent search-field label."}),t.jsx("li",{children:"Supported source tabs and optional host filters."}),t.jsx("li",{children:"Keyboard-selectable result rows, optional pinned row and decoration."}),t.jsx("li",{children:"Host-specific selection callback or global route/permission actions."})]}),t.jsx(B,{...e})]})},c={render:e=>t.jsx(O,{open:!0,onOpenChange:()=>{},visibleTabs:[],defaultSearchBy:"region",dynamicTabsWithValues:[{name:"region",label:"Regions",values:[{value:"eu",label:"Europe"},{value:"us",label:"United States"}]}],searchPlaceholder:"Find a resource",onSelect:e.onSelect,createAction:{tabValue:"region",onClick:e.onCreate}})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    empty: true
  },
  play: async ({
    canvasElement
  }) => {
    const c = await open(canvasElement);
    await expect(await c.findByText("No items found.")).toBeVisible();
  }
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <GlobalSearchModal open onOpenChange={() => undefined} visibleTabs={[]} defaultSearchBy="region" dynamicTabsWithValues={[{
    name: "region",
    label: "Regions",
    values: [{
      value: "eu",
      label: "Europe"
    }, {
      value: "us",
      label: "United States"
    }]
  }]} searchPlaceholder="Find a resource" onSelect={args.onSelect} createAction={{
    tabValue: "region",
    onClick: args.onCreate
  }} />
}`,...c.parameters?.docs?.source},description:{story:"The actual selection surface, already open so documentation can show its parts.",...c.parameters?.docs?.description}}};const $e=["Playground","SelectDynamic","RecipeResults","Pinned","Empty","Loading","Error","CreateNote","Navigation","ReadOnlyNavigation","Escape","NavigationEscape","Anatomy","AnatomyOpen"];export{x as Anatomy,c as AnatomyOpen,h as CreateNote,u as Empty,g as Error,v as Escape,y as Loading,w as Navigation,f as NavigationEscape,m as Pinned,l as Playground,b as ReadOnlyNavigation,d as RecipeResults,p as SelectDynamic,$e as __namedExportsOrder,Ke as default};
