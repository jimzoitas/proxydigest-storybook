import{j as e}from"./iframe-6uZ_OvXJ.js";import{R as l}from"./RetentionIndicator-B-A-1DFP.js";import{R as u}from"./RetentionDeltaIndicator-bVH370OL.js";import"./preload-helper-PPVm8Dsz.js";import"./arrow-up-DejSgtne.js";import"./arrow-up-right-o-I_77_q.js";import"./arrow-right-Bn72iYWk.js";import"./arrow-down-right-C_Wxuqux.js";import"./arrow-down-LFNtcj0H.js";const{expect:d,within:g}=__STORYBOOK_MODULE_TEST__;function p({pre:t,post:a,targetPre:h,targetPost:x,missing:m}){return e.jsxs("dl",{children:[e.jsx("dt",{children:"Retained"}),e.jsx("dd",{"data-testid":"retained",children:e.jsx(l,{pre:m?void 0:t,post:a})}),e.jsx("dt",{children:"Difference from comparison"}),e.jsx("dd",{"data-testid":"difference",children:e.jsx(u,{anchorPre:m?void 0:t,anchorPost:a,targetPre:h,targetPost:x})})]})}const C={title:"Components/Data Display/Retention Indicators",component:p,subcomponents:{RetentionIndicator:l,RetentionDeltaIndicator:u},tags:["autodocs"],args:{pre:100,post:95,targetPre:100,targetPost:98,missing:!1},parameters:{docs:{description:{component:"Actual retention and comparison display, using the existing shared calculation/band functions. RetentionIndicator consumes pre/post and displays one-decimal percent with a decorative band arrow. RetentionDeltaIndicator consumes anchorPre/anchorPost/targetPre/targetPost and preserves the established signed difference convention; a larger target retention produces a negative delta. Missing values or zero denominators display an em dash. The host owns units, compatible quantities and calculation inputs. Color supplements visible numeric text rather than replacing it; arrows are hidden from accessibility APIs. Optional className is preserved."}}},render:t=>e.jsx(p,{...t})},n={play:async({canvasElement:t})=>{const a=g(t);await d(a.getByTestId("retained")).toHaveTextContent("95.0 %"),await d(a.getByTestId("difference")).toHaveTextContent("-3.0 %")}},r={args:{post:125}},s={args:{post:70}},o={args:{missing:!0},play:async({canvasElement:t})=>{await d(g(t).getByTestId("retained")).toHaveTextContent("—")}},i={args:{pre:0}},c={render:t=>e.jsxs("div",{children:[e.jsx("p",{children:"Host label, signed or unsigned numeric percentage, then a decorative band arrow; missing input produces a neutral dash."}),e.jsx(p,{...t})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await expect(c.getByTestId("retained")).toHaveTextContent("95.0 %");
    await expect(c.getByTestId("difference")).toHaveTextContent("-3.0 %");
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    post: 125
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    post: 70
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    missing: true
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId("retained")).toHaveTextContent("—");
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    pre: 0
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div>
      <p>
        Host label, signed or unsigned numeric percentage, then a decorative
        band arrow; missing input produces a neutral dash.
      </p>
      <CalculationIndicatorsExample {...args} />
    </div>
}`,...c.parameters?.docs?.source}}};const D=["Playground","Increase","Decrease","Missing","ZeroDenominator","Anatomy"];export{c as Anatomy,s as Decrease,r as Increase,o as Missing,n as Playground,i as ZeroDenominator,D as __namedExportsOrder,C as default};
