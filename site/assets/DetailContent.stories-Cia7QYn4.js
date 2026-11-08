import{j as e,T as u}from"./iframe-nhB53rPD.js";/* empty css                      */import{D as g}from"./DetailHeader-CDOTnpwU.js";import{D as c}from"./DetailSection-3scdJTVF.js";import{D as v}from"./DetailTable-IIFBdyV_.js";import{K as h}from"./KeyValueList-BPMie1q5.js";import"./preload-helper-PPVm8Dsz.js";import"./table-DKvxVw7S.js";import"./collapsible-pI4oVkh3.js";import"./useCollapsiblePanel-DVMF6qnG.js";import"./dot-DUZcs8Lz.js";const{expect:d,userEvent:m,within:y}=__STORYBOOK_MODULE_TEST__,x=[{label:"Owner",value:"Product team"},{label:"Ingredients",value:["Oat flour","Water"]},{label:"Batch size",value:"100 kg"}];function p({variant:t,empty:r,showDescription:a,showTable:b}){return e.jsxs("div",{className:"pf-story-spacious-stack",children:[e.jsx(g,{title:e.jsx(u,{variant:"title",children:"Oat recipe"}),subtitle:e.jsx(u,{variant:"subtitle",children:"Draft formulation"}),description:a?"A representative detail view using the actual shared header, section and value components.":void 0}),e.jsx(c,{title:"Details",subtitle:"Labels remain visible while values change",children:e.jsx(h,{items:r?[]:x,variant:t},`${t}-${r}`)}),b&&e.jsx(c,{title:"Composition",children:e.jsx(v,{columns:[{id:"amount",header:"Amount"},{id:"unit",header:"Unit"}],rows:r?[]:[{label:"Initial ingredients",isHeader:!0,values:{}},{label:"Oat flour",indentLevel:1,values:{amount:"20",unit:"kg"}},{label:"Water",indentLevel:1,values:{amount:"80",unit:"kg"}}],emptyMessage:"No composition rows"})})]})}const B={title:"Patterns/Detail Content",component:p,subcomponents:{DetailHeader:g,DetailSection:c,KeyValueList:h,DetailTable:v},tags:["autodocs"],args:{variant:"default",empty:!1,showDescription:!0,showTable:!0},argTypes:{variant:{control:"inline-radio",options:["default","compact"]}},parameters:{docs:{description:{component:"Shared record-reading composition used by real entity detail views. DetailHeader forwards its div ref and renders title/subtitle nodes plus optional description; its legacy avatar props are accepted but currently have no rendered avatar. DetailSection forwards a div ref and provides optional title/subtitle around children. KeyValueList forwards a div ref, supports default one-column and compact two-column layouts, and initially opens multi-value disclosures. The disclosure trigger retains the label and toggles its values by keyboard or pointer; it does not edit data. DetailTable maps column IDs to row values, supports explicit group rows and indentation, uses a dash for missing values, and exposes an empty message. These are presentation parts; fetch, permissions, mutations, heading levels and business formatting belong to the host. This family reuses existing primitives and does not introduce a new service or control API."}}},render:t=>e.jsx(p,{...t})},s={},i={args:{variant:"compact"}},o={args:{empty:!0},play:async({canvasElement:t})=>{await d(y(t).getByText("No composition rows")).toBeVisible()}},n={play:async({canvasElement:t})=>{const a=y(t).getByRole("button",{name:"Ingredients"});await d(a).toHaveAttribute("aria-expanded","true"),a.focus(),await m.keyboard("{Enter}"),await d(a).toHaveAttribute("aria-expanded","false"),await m.keyboard("{Enter}"),await d(a).toHaveAttribute("aria-expanded","true")}},l={render:t=>e.jsxs("div",{className:"pf-story-stack",children:[e.jsxs("ol",{children:[e.jsx("li",{children:"Header provides entity identity and supporting description."}),e.jsx("li",{children:"Sections group authored headings with values or a detail table."}),e.jsx("li",{children:"Multi-value disclosures preserve their label while collapsed."}),e.jsx("li",{children:"Detail table group rows and indentation express the host's hierarchy."})]}),e.jsx(p,{...t})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "compact"
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    empty: true
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByText("No composition rows")).toBeVisible();
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    const trigger = c.getByRole("button", {
      name: "Ingredients"
    });
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    trigger.focus();
    await userEvent.keyboard("{Enter}");
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await userEvent.keyboard("{Enter}");
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div className="pf-story-stack">
      <ol>
        <li>Header provides entity identity and supporting description.</li>
        <li>Sections group authored headings with values or a detail table.</li>
        <li>Multi-value disclosures preserve their label while collapsed.</li>
        <li>
          Detail table group rows and indentation express the host's hierarchy.
        </li>
      </ol>
      <DetailContentExample {...args} />
    </div>
}`,...l.parameters?.docs?.source}}};const _=["Playground","Compact","Empty","Disclosure","Anatomy"];export{l as Anatomy,i as Compact,n as Disclosure,o as Empty,s as Playground,_ as __namedExportsOrder,B as default};
