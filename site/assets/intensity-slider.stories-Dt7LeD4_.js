import{a4 as A,r as o,j as e,g as u,T as C}from"./iframe-BXubdNpd.js";import"./preload-helper-PPVm8Dsz.js";const W=[0,1,2,3,4,5,6,7,8,9,10];function r({title:t,value:n,onValueChange:i,disabled:l=!1,showReference:j=!0,intensityLabels:N,className:L}){const{t:a}=A("common"),V=o.useMemo(()=>[{value:0,label:a("intensitySlider.levels.none")},{value:1,label:a("intensitySlider.levels.veryWeak")},{value:2,label:a("intensitySlider.levels.weak")},{value:3,label:a("intensitySlider.levels.mild")},{value:4,label:a("intensitySlider.levels.lightModerate")},{value:5,label:a("intensitySlider.levels.moderate")},{value:6,label:a("intensitySlider.levels.moderateStrong")},{value:7,label:a("intensitySlider.levels.strong")},{value:8,label:a("intensitySlider.levels.veryStrong")},{value:9,label:a("intensitySlider.levels.extremelyStrong")},{value:10,label:a("intensitySlider.levels.maximumDominant")}],[a]),T=N??V,M=T.find(s=>s.value===n)?.label??"",I=s=>{!l&&i&&i(s)};return e.jsxs("div",{className:u("pf-intensity-scale-root",L),children:[e.jsxs("div",{className:"pf-intensity-scale-header",children:[e.jsx(C,{variant:"body",className:"pf-intensity-scale-title",children:t}),e.jsxs("div",{className:"pf-intensity-scale-value-row",children:[e.jsx("span",{className:"pf-intensity-scale-value",children:n}),e.jsx("span",{className:"pf-intensity-scale-description",children:M})]})]}),e.jsxs("div",{className:"pf-intensity-scale-track-region",children:[e.jsx("div",{className:"pf-intensity-scale-track",style:{background:"var(--group-control-color-fill-intensity-track)"}}),e.jsx("div",{className:"pf-intensity-scale-markers",children:W.map(s=>{const c=s===n;return e.jsx("button",{type:"button",onClick:()=>I(s),disabled:l,className:u("pf-intensity-scale-marker",c?"pf-intensity-scale-selected":"pf-intensity-scale-unselected",l&&"pf-intensity-scale-disabled"),children:s},s)})})]}),j&&e.jsxs("div",{className:"pf-intensity-scale-reference",children:[e.jsx(C,{variant:"footnote",className:"pf-intensity-scale-reference-title",children:a("intensitySlider.referenceTitle")}),e.jsx("div",{className:"pf-intensity-scale-reference-grid",children:T.map(s=>{const c=s.value===n;return e.jsxs("div",{className:"pf-intensity-scale-reference-row",children:[e.jsxs("span",{className:u("pf-intensity-scale-reference-text",c?"pf-intensity-scale-selected":"pf-intensity-scale-reference-muted"),children:[s.value,":"]}),e.jsx("span",{className:u("pf-intensity-scale-reference-text",c?"pf-intensity-scale-selected":"pf-intensity-scale-reference-muted"),children:s.label})]},s.value)})})]})]})}r.__docgenInfo={description:"",methods:[],displayName:"IntensitySlider",props:{title:{required:!0,tsType:{name:"string"},description:'The title/label for the slider (e.g., "Floral", "Sweet", etc.)'},value:{required:!0,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"}]},description:"The current intensity value (0-10)"},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: IntensityLevel) => void",signature:{arguments:[{type:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"}]},name:"value"}],return:{name:"void"}}},description:"Callback when value changes"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the slider is disabled",defaultValue:{value:"false",computed:!1}},showReference:{required:!1,tsType:{name:"boolean"},description:"Whether to show the reference legend below the slider",defaultValue:{value:"true",computed:!1}},intensityLabels:{required:!1,tsType:{name:"Array",elements:[{name:"IntensityLabel"}],raw:"IntensityLabel[]"},description:"Custom intensity labels (defaults to standard 0-10 scale)"},className:{required:!1,tsType:{name:"string"},description:"Additional class name for the container"}}};const{expect:d,userEvent:k,within:E}=__STORYBOOK_MODULE_TEST__,O={title:"Components/Controls/Intensity Slider",id:"components-intensityslider",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:10,step:1},description:"The current intensity value (0-10)"},title:{control:"text",description:"The title/label for the slider"},showReference:{control:"boolean",description:"Whether to show the reference legend below the slider"},disabled:{control:"boolean",description:"Whether the slider is disabled"}},decorators:[t=>e.jsx("div",{className:"pf-story-intensity-slider-preview-card",children:e.jsx(t,{})})]},m={args:{title:"Floral",value:5,showReference:!0,disabled:!1}},p={args:{title:"Sweet",value:0,showReference:!0}},v={args:{title:"Citrus",value:1,showReference:!0}},y={args:{title:"Woody",value:3,showReference:!0}},f={args:{title:"Spicy",value:7,showReference:!0}},h={args:{title:"Menthol",value:10,showReference:!0}},g={args:{title:"Fruity",value:6,showReference:!1}},b={args:{title:"Herbal",value:4,showReference:!0,disabled:!0}};function q(){const[t,n]=o.useState(5);return e.jsx(r,{title:"Floral",value:t,onValueChange:n,showReference:!0})}const w={args:{title:"Floral",value:5},render:()=>e.jsx(q,{}),play:async({canvasElement:t})=>{const n=E(t),i=n.getAllByRole("button");await d(i).toHaveLength(11),await k.click(n.getByRole("button",{name:"7"})),await d(t.querySelector(".pf-intensity-scale-value")).toHaveTextContent("7");const l=n.getByRole("button",{name:"8"});l.focus(),await k.keyboard(" "),await d(t.querySelector(".pf-intensity-scale-value")).toHaveTextContent("8"),await d(l).toHaveClass("pf-intensity-scale-selected")}};function F(){const[t,n]=o.useState(5),[i,l]=o.useState(3),[j,N]=o.useState(7);return e.jsxs("div",{className:"pf-story-intensity-slider-comparison-list",children:[e.jsx(r,{title:"Floral",value:t,onValueChange:n,showReference:!1}),e.jsx(r,{title:"Sweet",value:i,onValueChange:l,showReference:!1}),e.jsx(r,{title:"Woody",value:j,onValueChange:N,showReference:!0})]})}const S={args:{title:"Multiple",value:5},render:()=>e.jsx(F,{}),decorators:[t=>e.jsx("div",{className:"pf-story-intensity-slider-preview-card",children:e.jsx(t,{})})]},_=[{value:0,label:"Absent"},{value:1,label:"Barely Detectable"},{value:2,label:"Faint"},{value:3,label:"Light"},{value:4,label:"Mild"},{value:5,label:"Medium"},{value:6,label:"Pronounced"},{value:7,label:"Intense"},{value:8,label:"Very Intense"},{value:9,label:"Overwhelming"},{value:10,label:"Maximum"}],x={args:{title:"Bitterness",value:6,showReference:!0,intensityLabels:_}};function B(){return e.jsx("div",{className:"pf-story-intensity-slider-examples",children:[0,2,5,8,10].map(t=>e.jsx(r,{title:`Value ${t}`,value:t,showReference:!1},t))})}const R={args:{title:"Showcase",value:5},render:()=>e.jsx(B,{}),decorators:[t=>e.jsx("div",{className:"pf-story-intensity-slider-preview-card",children:e.jsx(t,{})})]};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Floral",
    value: 5,
    showReference: true,
    disabled: false
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Sweet",
    value: 0,
    showReference: true
  }
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Citrus",
    value: 1,
    showReference: true
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Woody",
    value: 3,
    showReference: true
  }
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Spicy",
    value: 7,
    showReference: true
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Menthol",
    value: 10,
    showReference: true
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Fruity",
    value: 6,
    showReference: false
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Herbal",
    value: 4,
    showReference: true,
    disabled: true
  }
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Floral",
    value: 5
  },
  render: () => <InteractiveSlider />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const markers = canvas.getAllByRole("button");
    await expect(markers).toHaveLength(11);
    await userEvent.click(canvas.getByRole("button", {
      name: "7"
    }));
    await expect(canvasElement.querySelector(".pf-intensity-scale-value")).toHaveTextContent("7");
    const next = canvas.getByRole("button", {
      name: "8"
    });
    next.focus();
    await userEvent.keyboard(" ");
    await expect(canvasElement.querySelector(".pf-intensity-scale-value")).toHaveTextContent("8");
    await expect(next).toHaveClass("pf-intensity-scale-selected");
  }
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Multiple",
    value: 5
  },
  render: () => <MultipleSliders />,
  decorators: [Story => <div className="pf-story-intensity-slider-preview-card">
        <Story />
      </div>]
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Bitterness",
    value: 6,
    showReference: true,
    intensityLabels: customLabels
  }
}`,...x.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Showcase",
    value: 5
  },
  render: () => <AllValuesShowcase />,
  decorators: [Story => <div className="pf-story-intensity-slider-preview-card">
        <Story />
      </div>]
}`,...R.parameters?.docs?.source}}};const U=["Default","None","VeryWeak","Mild","Strong","Maximum","WithoutReference","Disabled","Interactive","MultipleAttributes","CustomLabels","AllValues"];export{R as AllValues,x as CustomLabels,m as Default,b as Disabled,w as Interactive,h as Maximum,y as Mild,S as MultipleAttributes,p as None,f as Strong,v as VeryWeak,g as WithoutReference,U as __namedExportsOrder,O as default};
