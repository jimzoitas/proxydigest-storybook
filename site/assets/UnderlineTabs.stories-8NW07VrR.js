import{j as t,r as p}from"./iframe-6uZ_OvXJ.js";/* empty css                      */import{U as v}from"./UnderlineTabs-BclR1UUh.js";import"./preload-helper-PPVm8Dsz.js";import"./button-A8HzViyP.js";import"./index-BIEDR5QJ.js";import"./loader-circle-DPzNQWfU.js";import"./tab-keyboard-C8RTK0_Y.js";import"./chevron-left-ByPwEqFW.js";import"./chevron-right-DQAu3Wv6.js";const{expect:o,userEvent:s,within:m}=__STORYBOOK_MODULE_TEST__,b=[{value:"overview",label:"Overview"},{value:"ingredients",label:"Ingredients"},{value:"history",label:"History"}];function g(e){const[a,n]=p.useState(e.value);return p.useEffect(()=>n(e.value),[e.value]),t.jsxs("div",{className:"pf-story-contained-stack",children:[t.jsx(v,{...e,value:a,onValueChange:d=>{n(d),e.onValueChange(d)}}),t.jsxs("div",{className:"pf-story-underline-tabs-tab-content",role:"status",children:["Selected section: ",a,". The host renders the section content."]})]})}const A={title:"Components/Navigation/Underline Tabs",component:v,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Application controlled tab strip. Supply tabs with stable string values and React labels, value and onValueChange. The host owns section content; this component only renders the tablist. Click or use Left/Right, Home and End to select a tab. It has no disabled-item or built-in tabpanel API. scrollable enables horizontal overflow and named scroll buttons; scrolling itself does not change selection."}}},args:{tabs:b,value:"overview",onValueChange:()=>{},scrollable:!1},argTypes:{tabs:{control:!1},value:{control:"select",options:["overview","ingredients","history"]},onValueChange:{action:"section changed"},scrollable:{control:"boolean"}},render:e=>t.jsx(g,{...e})},i={},l={args:{tabs:[{value:"overview",label:t.jsxs(t.Fragment,{children:["Overview ",t.jsx("span",{className:"pf-story-underline-tabs-count",children:"3"})]})},{value:"ingredients",label:"Ingredients"},{value:"history",label:"Version history"}]}},r={play:async({canvasElement:e})=>{const a=m(e),n=a.getByRole("tab",{name:"Overview"});n.focus(),await s.keyboard("{ArrowRight}"),await o(a.getByRole("tab",{name:"Ingredients"})).toHaveFocus(),await o(a.getByRole("status")).toHaveTextContent("ingredients"),await s.keyboard("{End}"),await o(a.getByRole("tab",{name:"History"})).toHaveAttribute("aria-selected","true"),await s.keyboard("{ArrowRight}"),await o(n).toHaveFocus(),await s.keyboard("{ArrowLeft}"),await o(a.getByRole("tab",{name:"History"})).toHaveFocus(),await s.keyboard("{Home}"),await o(n).toHaveAttribute("aria-selected","true")}},c={args:{scrollable:!0,tabs:[...b,{value:"nutrients",label:"Nutritional information"},{value:"suppliers",label:"Supplier information"},{value:"packaging",label:"Packaging"},{value:"documents",label:"Supporting documents"}]},argTypes:{value:{options:["overview","ingredients","history","nutrients","suppliers","packaging","documents"]}}},u={...r,args:{scrollable:!0}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      value: "overview",
      label: <>
            Overview <span className="pf-story-underline-tabs-count">3</span>
          </>
    }, {
      value: "ingredients",
      label: "Ingredients"
    }, {
      value: "history",
      label: "Version history"
    }]
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    scrollable: true,
    tabs: [...tabs, {
      value: "nutrients",
      label: "Nutritional information"
    }, {
      value: "suppliers",
      label: "Supplier information"
    }, {
      value: "packaging",
      label: "Packaging"
    }, {
      value: "documents",
      label: "Supporting documents"
    }]
  },
  argTypes: {
    value: {
      options: ["overview", "ingredients", "history", "nutrients", "suppliers", "packaging", "documents"]
    }
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...KeyboardSelection,
  args: {
    scrollable: true
  }
}`,...u.parameters?.docs?.source}}};const T=["Playground","CustomLabels","KeyboardSelection","Scrollable","ScrollableKeyboard"];export{l as CustomLabels,r as KeyboardSelection,i as Playground,c as Scrollable,u as ScrollableKeyboard,T as __namedExportsOrder,A as default};
