import{j as a,r as u}from"./iframe-6uZ_OvXJ.js";/* empty css                      */import{P as d}from"./PillTabs-f9dugpVg.js";import"./preload-helper-PPVm8Dsz.js";import"./tab-keyboard-C8RTK0_Y.js";const{expect:s,userEvent:o,within:v}=__STORYBOOK_MODULE_TEST__,b=[{value:"overview",label:"Overview"},{value:"ingredients",label:"Ingredients"},{value:"history",label:"History"}];function p(e){const[t,n]=u.useState(e.value);return u.useEffect(()=>n(e.value),[e.value]),a.jsxs("div",{className:"pf-story-contained-stack",children:[a.jsx(d,{...e,value:t,onValueChange:c=>{n(c),e.onValueChange(c)}}),a.jsxs("div",{className:"pf-story-pill-tabs-tab-content",role:"status",children:["Selected section: ",t,". The host renders the section content."]})]})}const f={title:"Components/Navigation/Pill Tabs",component:d,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Application controlled tab strip. Supply tabs with stable string values and React labels, value and onValueChange. The host owns section content; this component only renders the tablist. Click or use Left/Right, Home and End to select a tab. It has no disabled-item or built-in tabpanel API."}}},args:{tabs:b,value:"overview",onValueChange:()=>{}},argTypes:{tabs:{control:!1},value:{control:"select",options:["overview","ingredients","history"]},onValueChange:{action:"section changed"},scrollable:{control:!1,table:{disable:!0}}},render:e=>a.jsx(p,{...e})},r={},i={args:{tabs:[{value:"overview",label:a.jsxs(a.Fragment,{children:["Overview ",a.jsx("span",{className:"pf-story-pill-tabs-count",children:"3"})]})},{value:"ingredients",label:"Ingredients"},{value:"history",label:"Version history"}]}},l={play:async({canvasElement:e})=>{const t=v(e),n=t.getByRole("tab",{name:"Overview"});n.focus(),await o.keyboard("{ArrowRight}"),await s(t.getByRole("tab",{name:"Ingredients"})).toHaveFocus(),await s(t.getByRole("status")).toHaveTextContent("ingredients"),await o.keyboard("{End}"),await s(t.getByRole("tab",{name:"History"})).toHaveAttribute("aria-selected","true"),await o.keyboard("{ArrowRight}"),await s(n).toHaveFocus(),await o.keyboard("{ArrowLeft}"),await s(t.getByRole("tab",{name:"History"})).toHaveFocus(),await o.keyboard("{Home}"),await s(n).toHaveAttribute("aria-selected","true")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      value: "overview",
      label: <>
            Overview <span className="pf-story-pill-tabs-count">3</span>
          </>
    }, {
      value: "ingredients",
      label: "Ingredients"
    }, {
      value: "history",
      label: "Version history"
    }]
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const first = canvas.getByRole("tab", {
      name: "Overview"
    });
    first.focus();
    await userEvent.keyboard("{ArrowRight}");
    await expect(canvas.getByRole("tab", {
      name: "Ingredients"
    })).toHaveFocus();
    await expect(canvas.getByRole("status")).toHaveTextContent("ingredients");
    await userEvent.keyboard("{End}");
    await expect(canvas.getByRole("tab", {
      name: "History"
    })).toHaveAttribute("aria-selected", "true");
    await userEvent.keyboard("{ArrowRight}");
    await expect(first).toHaveFocus();
    await userEvent.keyboard("{ArrowLeft}");
    await expect(canvas.getByRole("tab", {
      name: "History"
    })).toHaveFocus();
    await userEvent.keyboard("{Home}");
    await expect(first).toHaveAttribute("aria-selected", "true");
  }
}`,...l.parameters?.docs?.source}}};const H=["Playground","CustomLabels","KeyboardSelection"];export{i as CustomLabels,l as KeyboardSelection,r as Playground,H as __namedExportsOrder,f as default};
