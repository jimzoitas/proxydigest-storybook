import{j as i,r as v}from"./iframe-nhB53rPD.js";import{i as B,a as C,b as P,r as k}from"./input-presentation-controls-C9fm3KGJ.js";import{i as E}from"./input-size-control-Du2i_Jmn.js";/* empty css                      */import{S}from"./search-combobox-wrapper-BVW6dzVE.js";import"./preload-helper-PPVm8Dsz.js";import"./info-BBafOREX.js";import"./input-sizes-BpjnQGTk.js";import"./search-combobox-base-CmOZw0Qn.js";import"./button-_tcBhp5_.js";import"./index-8Dbc_Jva.js";import"./loader-circle-MxHlgpxw.js";import"./dialog-CyBaw9zK.js";import"./overlay-dialog-Co5KED9w.js";import"./index.es-RINfVGjB.js";import"./badge-DF9-aVgV.js";import"./tooltip-core-i2pf0ZTE.js";import"./chevrons-up-down-D9M3rIvK.js";import"./index.module-B262ysEo.js";import"./search-combobox-server-BD1DcZzg.js";import"./use-paginated-api-QJatBdKg.js";import"./request-CGJ4zixB.js";import"./trackPosthogEvent-Zud5gl49.js";import"./jsonApiHandler-C4BMoVsw.js";const{expect:c,fn:O,userEvent:o,waitFor:I,within:l}=__STORYBOOK_MODULE_TEST__,x=[{value:"oats",label:"Oats",category:"Grain"},{value:"almond",label:"Almond",category:"Nut"},{value:"pea",label:"Pea protein",category:"Protein"}],N=t=>Promise.resolve(x.filter(e=>e.label.toLowerCase().includes(t.toLowerCase()))),L=Array.from({length:24},(t,e)=>({value:`supplier-${e+1}`,label:`Supplier ${String(e+1).padStart(2,"0")}`})),j=(t,e)=>{const a=L.filter(s=>s.label.toLowerCase().includes(t.toLowerCase()));return Promise.resolve({options:a.slice(e*10,(e+1)*10),hasMore:(e+1)*10<a.length})};function A(t){const e=k(t),[a,s]=v.useState(e.selected),[n,f]=v.useState(e.selectedValues);function T(r){n!==void 0?f(r?n.some(w=>w.value===r.value)?n.filter(w=>w.value!==r.value):[...n,r]:[]):s(r),e.onChange(r)}return i.jsxs("div",{className:"pf-story-search-combobox-preview",children:[i.jsx(S,{...e,selected:a,selectedValues:n,onChange:T}),i.jsxs("p",{className:"pf-story-note",children:["Selection:"," ",i.jsx("output",{"aria-label":"Selected options",children:n?n.map(r=>r.label).join(", ")||"None":a?.label??"None"})]})]})}const se={title:"Components/Inputs/Search combobox",id:"components-inputs-selection-search-combobox",component:S,tags:["autodocs"],parameters:{docs:{description:{component:"Product search selector with a controlled selected option and onChange callback. isClient + inputOptions selects local filtering; onSearch supplies custom async results; onSearchPage supplies paginated results and takes precedence. Otherwise the wrapper uses endpoint, queryParamName, additionalSearchParamNames, staticFilters, include and transformResponse/valueKey/labelKey through the app API hook. These examples use local fixtures, not live endpoints. selectedValues enables checkmarks for multiple values, but the parent must toggle the array in response to the single-option onChange callback. Each selection closes the popup. Read-only keeps the named trigger focusable and preserves the selected value without opening or changing it. Labels, errors and optional adornments surround the trigger. allowEmpty emits null. renderOption/renderSelected customize content; additionalProps adds metadata badges. Disabled renders the source's No options label. The current popup has a 400px minimum width, and the public isLoading prop is not consumed by client mode; loading in custom/server mode is driven by the data request."}},controls:{include:[...P,"controlSize","placeholder","selected","inputOptions","allowEmpty","disabled","additionalProps"]}},args:{...C,controlSize:"medium",isClient:!0,inputOptions:x,selected:null,placeholder:"Find an ingredient",allowEmpty:!0,disabled:!1,additionalProps:["category"],onChange:O()},argTypes:{...B,controlSize:E,placeholder:{control:"text"},selected:{control:"object"},inputOptions:{control:"object"},allowEmpty:{control:"boolean"},disabled:{control:"boolean"},additionalProps:{control:"object"}},render:t=>i.jsx(A,{...t},JSON.stringify([t.selected,t.selectedValues,t.isClient]))},p={play:async({canvasElement:t})=>{const e=l(t),a=e.getByRole("combobox");await o.click(a);const s=l(document.body),n=await s.findByTestId("search-combobox-input");await o.type(n,"alm"),await c(s.queryByTestId("search-combobox-option-oats")).toBeNull(),await o.click(s.getByTestId("search-combobox-option-almond")),await c(e.getByLabelText("Selected options")).toHaveTextContent("Almond"),await c(a).toHaveAttribute("aria-expanded","false"),await o.click(a),await o.click(s.getByTestId("search-combobox-option-empty")),await c(e.getByLabelText("Selected options")).toHaveTextContent("None")}},d={args:{disabled:!0}},m={args:{inputOptions:[],allowEmpty:!1}},u={args:{selectedValues:[x[0]],placeholder:"Ingredients (toggle a choice)"},play:async({canvasElement:t})=>{const e=l(t);await o.click(e.getByRole("combobox")),await o.click(l(document.body).getByTestId("search-combobox-option-almond")),await c(e.getByLabelText("Selected options")).toHaveTextContent("Oats, Almond")}},g={args:{isClient:!1,onSearch:N},play:async({canvasElement:t})=>{const e=l(t);await o.click(e.getByRole("combobox"));const a=l(document.body);await o.type(a.getByTestId("search-combobox-input"),"pea"),await I(()=>c(a.queryByTestId("search-combobox-option-oats")).toBeNull()),await o.click(await a.findByTestId("search-combobox-option-pea")),await c(e.getByLabelText("Selected options")).toHaveTextContent("Pea protein")}},b={args:{isClient:!1,onSearchPage:j,placeholder:"Find a supplier",additionalProps:[]},parameters:{docs:{description:{story:"The real custom pagination adapter: ten fixtures per page, additional pages on scrolling. onSearchPage takes a zero-based page and returns options plus hasMore. Backend network errors and pagination correctness remain the host's integration responsibility."}}}},h={args:{selected:x[0],renderOption:t=>i.jsxs("span",{children:[t.label," ",i.jsxs("small",{children:["(",String(t.category),")"]})]}),renderSelected:t=>i.jsxs("span",{children:[t.label," · selected ingredient"]})}},y={args:{isClient:!1,onSearch:()=>new Promise(()=>{})},parameters:{docs:{description:{story:"An intentionally pending local search fixture displays the adapter's real request-loading state. No request is sent to a backend."}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("combobox");
    await userEvent.click(trigger);
    const body = within(document.body);
    const searchbox = await body.findByTestId("search-combobox-input");
    await userEvent.type(searchbox, "alm");
    await expect(body.queryByTestId("search-combobox-option-oats")).toBeNull();
    await userEvent.click(body.getByTestId("search-combobox-option-almond"));
    await expect(canvas.getByLabelText("Selected options")).toHaveTextContent("Almond");
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(trigger);
    await userEvent.click(body.getByTestId("search-combobox-option-empty"));
    await expect(canvas.getByLabelText("Selected options")).toHaveTextContent("None");
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    inputOptions: [],
    allowEmpty: false
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    selectedValues: [options[0]],
    placeholder: "Ingredients (toggle a choice)"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("combobox"));
    await userEvent.click(within(document.body).getByTestId("search-combobox-option-almond"));
    await expect(canvas.getByLabelText("Selected options")).toHaveTextContent("Oats, Almond");
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    isClient: false,
    onSearch: search
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("combobox"));
    const body = within(document.body);
    await userEvent.type(body.getByTestId("search-combobox-input"), "pea");
    await waitFor(() => expect(body.queryByTestId("search-combobox-option-oats")).toBeNull());
    await userEvent.click(await body.findByTestId("search-combobox-option-pea"));
    await expect(canvas.getByLabelText("Selected options")).toHaveTextContent("Pea protein");
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    isClient: false,
    onSearchPage: searchPage,
    placeholder: "Find a supplier",
    additionalProps: []
  },
  parameters: {
    docs: {
      description: {
        story: "The real custom pagination adapter: ten fixtures per page, additional pages on scrolling. onSearchPage takes a zero-based page and returns options plus hasMore. Backend network errors and pagination correctness remain the host's integration responsibility."
      }
    }
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    selected: options[0],
    renderOption: option => <span>
        {option.label} <small>({String(option.category)})</small>
      </span>,
    renderSelected: option => <span>{option.label} · selected ingredient</span>
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    isClient: false,
    onSearch: () => new Promise<Option[]>(() => {
      /* Keep this loading specimen pending. */
    })
  },
  parameters: {
    docs: {
      description: {
        story: "An intentionally pending local search fixture displays the adapter's real request-loading state. No request is sent to a backend."
      }
    }
  }
}`,...y.parameters?.docs?.source}}};const re=["Playground","Disabled","EmptyOptions","MultipleValues","AsyncSearch","PaginatedSearch","CustomContent","Loading"];export{g as AsyncSearch,h as CustomContent,d as Disabled,m as EmptyOptions,y as Loading,u as MultipleValues,b as PaginatedSearch,p as Playground,re as __namedExportsOrder,se as default};
