import{j as i,cS as B,r as S}from"./iframe-nhB53rPD.js";import{i as E}from"./input-sizes-BpjnQGTk.js";/* empty css                      */import"./preload-helper-PPVm8Dsz.js";const{expect:n,fn:x,userEvent:a,within:r}=__STORYBOOK_MODULE_TEST__,s=[{value:"oats",label:"Oats",group:"Grains"},{value:"rice",label:"Rice",group:"Grains"},{value:"almond",label:"Almond",group:"Nuts"},{value:"locked",label:"Unavailable",group:"Other",disable:!0}],k=t=>Promise.resolve(s.filter(e=>e.label.toLowerCase().includes(t.toLowerCase())));function I(t){const[e,T]=S.useState(t.value??[]),[f,w]=S.useState("Ready");return i.jsxs("div",{className:"pf-story-multi-search-select-popup-frame",children:[i.jsx(B,{...t,value:e,onChange:o=>{T(o),t.onChange?.(o)},onCreate:(o,C)=>{w(`Created ${o}`),t.onCreate?.(o,C)},onMaxSelected:o=>{w(`Selection limit reached: ${o}`),t.onMaxSelected?.(o)}}),i.jsxs("p",{className:"pf-story-note",children:["Selected:"," ",i.jsx("output",{"aria-label":"Selected ingredients",children:e.map(o=>o.label).join(", ")||"None"})]}),i.jsx("p",{role:"status","aria-label":"Selection notice",children:f})]})}const F={title:"Components/Inputs/Multiple selector",id:"components-inputs-selection-multiple-selector",component:B,tags:["autodocs"],parameters:{docs:{description:{component:"The product's chip-based multiple selection field. value/onChange is the controlled selection; options is the live option list, defaultOptions is the initial list. Options support fixed, disable and a groupBy metadata key. creatable emits an optimistic onChange plus onCreate(value, fullSelection); persist new entities in onCreate before saving references. maxSelected/onMaxSelected enforce a selection limit. onSearch or onSearchSync supply remote/custom search, with delay and triggerSearchOnFocus. commandProps.label supplies the cmdk accessible input name; inputProps forwards other input attributes. singleLine keeps chips on one line; portalDropdown escapes clipping ancestors but the current source documents degraded arrow navigation in this mode. Fixed chips cannot be removed; disabled locks all removal. No backend persistence is performed by the specimen."}},controls:{include:["controlSize","value","placeholder","disabled","creatable","maxSelected","groupBy","singleLine","portalDropdown","hideClearAllButton","hidePlaceholderWhenSelected","selectFirstItem"]}},args:{value:[],options:s,placeholder:"Choose ingredients",disabled:!1,creatable:!1,maxSelected:3,groupBy:"",singleLine:!1,portalDropdown:!1,hideClearAllButton:!1,hidePlaceholderWhenSelected:!1,selectFirstItem:!1,commandProps:{label:"Ingredients"},inputProps:{"aria-label":"Ingredients"},onChange:x(),onCreate:x(),onMaxSelected:x()},argTypes:{controlSize:{control:"inline-radio",options:E},value:{control:"object"},placeholder:{control:"text"},disabled:{control:"boolean"},creatable:{control:"boolean"},maxSelected:{control:{type:"number",min:1}},groupBy:{control:"inline-radio",options:["","group"]},singleLine:{control:"boolean"},portalDropdown:{control:"boolean"},hideClearAllButton:{control:"boolean"},hidePlaceholderWhenSelected:{control:"boolean"},selectFirstItem:{control:"boolean"}},render:t=>i.jsx(I,{...t},JSON.stringify([t.value,t.groupBy,!!t.onSearch]))},c={play:async({canvasElement:t})=>{const e=r(t);await a.click(e.getByRole("combobox",{name:"Ingredients"})),await a.click(e.getByTestId("multi-search-select-option-oats")),await n(e.getByLabelText("Selected ingredients")).toHaveTextContent("Oats"),await a.click(e.getByTestId("multi-search-select-clear-all")),await n(e.getByLabelText("Selected ingredients")).toHaveTextContent("None")}},l={args:{groupBy:"group"}},d={args:{value:[{...s[0],fixed:!0},s[1]]},play:async({canvasElement:t})=>{const e=r(t);await a.click(e.getByTestId("multi-search-select-clear-all")),await n(e.getByLabelText("Selected ingredients")).toHaveTextContent(/^Oats$/),await n(e.getByRole("button",{name:"Remove"})).toBeDisabled()}},p={args:{disabled:!0,value:[s[0],s[1]]}},u={args:{creatable:!0},play:async({canvasElement:t})=>{const e=r(t);await a.type(e.getByRole("combobox",{name:"Ingredients"}),"Quinoa"),await a.click(e.getByRole("option",{name:/Create.*Quinoa/i})),await n(e.getByLabelText("Selected ingredients")).toHaveTextContent("Quinoa"),await n(e.getByRole("status",{name:"Selection notice"})).toHaveTextContent("Created Quinoa")}},m={args:{maxSelected:1,value:[s[0]]},play:async({canvasElement:t})=>{const e=r(t);await a.click(e.getByRole("combobox",{name:"Ingredients"})),await a.click(e.getByTestId("multi-search-select-option-rice")),await n(e.getByLabelText("Selected ingredients")).toHaveTextContent(/^Oats$/),await n(e.getByRole("status",{name:"Selection notice"})).toHaveTextContent("Selection limit reached: 1")}},g={args:{onSearch:k,options:void 0,delay:100,triggerSearchOnFocus:!0},play:async({canvasElement:t})=>{const e=r(t);await a.type(e.getByRole("combobox",{name:"Ingredients"}),"alm"),await a.click(await e.findByTestId("multi-search-select-option-almond")),await n(e.getByLabelText("Selected ingredients")).toHaveTextContent("Almond")}},y={args:{singleLine:!0,value:s.slice(0,3)}},v={args:{portalDropdown:!0},parameters:{docs:{description:{story:"Use when clipping ancestors require a portal. The source preserves pointer and text filtering behavior; cross-portal arrow-key navigation is a documented limitation, not claimed as complete keyboard coverage."}}}},h={args:{onSearch:()=>new Promise(()=>{}),triggerSearchOnFocus:!0},parameters:{docs:{description:{story:"Focus the field to show the real async loading indicator. This fixture intentionally keeps the local search pending and sends no network request."}}},play:async({canvasElement:t})=>{const e=r(t);await a.click(e.getByRole("combobox",{name:"Ingredients"})),await n(await e.findByTestId("loader")).toBeVisible()}},b={args:{options:[],delay:100,emptyIndicator:"No matching ingredients"},play:async({canvasElement:t})=>{const e=r(t);await a.type(e.getByRole("combobox",{name:"Ingredients"}),"unlisted"),await n(await e.findByText("No matching ingredients")).toBeVisible()}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("combobox", {
      name: "Ingredients"
    }));
    await userEvent.click(canvas.getByTestId("multi-search-select-option-oats"));
    await expect(canvas.getByLabelText("Selected ingredients")).toHaveTextContent("Oats");
    await userEvent.click(canvas.getByTestId("multi-search-select-clear-all"));
    await expect(canvas.getByLabelText("Selected ingredients")).toHaveTextContent("None");
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    groupBy: "group"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: [{
      ...options[0],
      fixed: true
    }, options[1]]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId("multi-search-select-clear-all"));
    await expect(canvas.getByLabelText("Selected ingredients")).toHaveTextContent(/^Oats$/);
    await expect(canvas.getByRole("button", {
      name: "Remove"
    })).toBeDisabled();
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: [options[0], options[1]]
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    creatable: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole("combobox", {
      name: "Ingredients"
    }), "Quinoa");
    await userEvent.click(canvas.getByRole("option", {
      name: /Create.*Quinoa/i
    }));
    await expect(canvas.getByLabelText("Selected ingredients")).toHaveTextContent("Quinoa");
    await expect(canvas.getByRole("status", {
      name: "Selection notice"
    })).toHaveTextContent("Created Quinoa");
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    maxSelected: 1,
    value: [options[0]]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("combobox", {
      name: "Ingredients"
    }));
    await userEvent.click(canvas.getByTestId("multi-search-select-option-rice"));
    await expect(canvas.getByLabelText("Selected ingredients")).toHaveTextContent(/^Oats$/);
    await expect(canvas.getByRole("status", {
      name: "Selection notice"
    })).toHaveTextContent("Selection limit reached: 1");
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    onSearch: search,
    options: undefined,
    delay: 100,
    triggerSearchOnFocus: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole("combobox", {
      name: "Ingredients"
    }), "alm");
    await userEvent.click(await canvas.findByTestId("multi-search-select-option-almond"));
    await expect(canvas.getByLabelText("Selected ingredients")).toHaveTextContent("Almond");
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    singleLine: true,
    value: options.slice(0, 3)
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    portalDropdown: true
  },
  parameters: {
    docs: {
      description: {
        story: "Use when clipping ancestors require a portal. The source preserves pointer and text filtering behavior; cross-portal arrow-key navigation is a documented limitation, not claimed as complete keyboard coverage."
      }
    }
  }
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    onSearch: () => new Promise<Option[]>(() => {
      /* Keep this loading specimen pending. */
    }),
    triggerSearchOnFocus: true
  },
  parameters: {
    docs: {
      description: {
        story: "Focus the field to show the real async loading indicator. This fixture intentionally keeps the local search pending and sends no network request."
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("combobox", {
      name: "Ingredients"
    }));
    await expect(await canvas.findByTestId("loader")).toBeVisible();
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    options: [],
    delay: 100,
    emptyIndicator: "No matching ingredients"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole("combobox", {
      name: "Ingredients"
    }), "unlisted");
    await expect(await canvas.findByText("No matching ingredients")).toBeVisible();
  }
}`,...b.parameters?.docs?.source}}};const P=["Playground","Grouped","FixedSelection","Disabled","Creatable","SelectionLimit","AsyncSearch","SingleLine","PortalDropdown","Loading","EmptyResults"];export{g as AsyncSearch,u as Creatable,p as Disabled,b as EmptyResults,d as FixedSelection,l as Grouped,h as Loading,c as Playground,v as PortalDropdown,m as SelectionLimit,y as SingleLine,P as __namedExportsOrder,F as default};
