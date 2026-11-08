import{j as a}from"./iframe-AqpYXns4.js";/* empty css                      */import{a as x,T as E,N as T,L as I}from"./NutritionInfoBox-BI2REGRY.js";import{N as B}from"./TemplateFDA-BrbHqAEi.js";import{b,a as v}from"./nutrition-info-B1uhnHCL.js";import"./preload-helper-PPVm8Dsz.js";import"./button-B5FjjXWS.js";import"./index-DEXj3--c.js";import"./loader-circle-mWFWE2W9.js";import"./dropdown-menu-qZhg1f8R.js";import"./menu-DaKubz4c.js";import"./CompositeItem-D1wyjQOR.js";import"./useCompositeItem-QlszIeBN.js";import"./Separator-DssPvI5G.js";import"./chevron-right-B3hyZT-D.js";import"./circle-Dg6ojZlj.js";import"./jspdf.es.min-B2j8n_hT.js";import"./download-BxptYOlw.js";import"./circle-alert-CMkjFzHc.js";const{expect:t,userEvent:w,within:n}=__STORYBOOK_MODULE_TEST__,_={name:"Sample recipe",serving_size:100,serving_size_unit:"g",energy_name:"Energy",energy_amount:180,energy_unit:"kcal",other:[{name:"Total Fat",amount:4,unit:"g",daily_recommended_intake:5,is_bold:!0,level:0},{name:"Sodium",amount:120,unit:"mg",daily_recommended_intake:5,is_bold:!0,level:0},{name:"Protein",amount:8,unit:"g",daily_recommended_intake:null,is_bold:!0,level:0}]};function y({label:e,grade:r,incomplete:s,showFrame:N,downloadDisabled:D}){const f=e==="facts"?a.jsx(B,{formula:_,servingsPerContainer:2}):e==="nutri-score"?a.jsx(T,{grade:r==="unavailable"?null:r}):e==="traffic-lights"?a.jsx(E,{result:s?{...b,energy:null,missingInputs:["energy"]}:b,portionDescription:"one bowl (300 g)"}):a.jsx(x,{result:s?{...v,nutrients:[],missingInputs:["sodium"]}:v});return a.jsxs(a.Fragment,{children:[s&&(e==="traffic-lights"||e==="nutrition-info")&&a.jsx("p",{role:"status",children:"The source intentionally suppresses an incomplete label; the host supplies the missing-input explanation."}),N?a.jsx(I,{title:"Sample recipe",footerLabel:"Product label fixture",fileName:"sample-recipe",downloadDisabled:D||s,children:f}):f]})}const J={title:"Patterns/Analysis/Nutrition Labels",component:y,subcomponents:{LabelFrame:I,NutritionLabelFDATemplate:B,NutriScoreBadge:T,TrafficLightsLabel:E,NutritionInfoBox:x},tags:["autodocs"],args:{label:"facts",grade:"C",incomplete:!1,showFrame:!0,downloadDisabled:!1},argTypes:{label:{control:"select",options:["facts","nutri-score","traffic-lights","nutrition-info"]},grade:{control:"inline-radio",options:["A","B","C","D","E","unavailable"]}},parameters:{docs:{description:{component:`Actual product label renderers and shared LabelFrame. The fixture values use the component's typed, deserialized result shapes; no backend calculation, current regulatory claim or compliance validation is implied. The authored pack graphics preserve their black/white or grade/traffic colors in both themes, independently of the surrounding application surface.

LabelFrame accepts title/fileName/children, optional footerLabel, pdcaasChecked and downloadDisabled. Its actual menu exports PNG/PDF using browser DOM capture; these stories verify the menu and disabled state, not file delivery. The frame passes pdcaasChecked only to a component child. Nutrition Facts consumes FormulaBlock plus optional servings/ingredientItems, preserving declared-name order and the backend two-percent grouping. NutriScoreBadge consumes A–E or null; null is unscored, not grade A. TrafficLightsLabel and NutritionInfoBox suppress incomplete results. Their hosts own missing-input messages, calculation and persistence. Use the report family for comparison/view modes, not duplicated label markup.`}}},render:e=>a.jsx(y,{...e})},o={},i={args:{label:"nutri-score"},play:async({canvasElement:e})=>{await t(n(e).getByTestId("nutriscore-grade-C")).toHaveAttribute("data-active","true")}},l={args:{label:"nutri-score",grade:"unavailable"},play:async({canvasElement:e})=>{await t(e.querySelector('[data-active="true"]')).not.toBeInTheDocument()}},c={args:{label:"traffic-lights"},play:async({canvasElement:e})=>{await t(n(e).getByTestId("traffic-lights-label")).toHaveAccessibleName()}},u={args:{label:"nutrition-info"},play:async({canvasElement:e})=>{await t(n(e).getByTestId("nutrition-info-sodium")).toHaveAttribute("data-rating","high")}},m={args:{label:"traffic-lights",incomplete:!0},play:async({canvasElement:e})=>{await t(n(e).queryByTestId("traffic-lights-label")).not.toBeInTheDocument()}},d={args:{label:"nutrition-info",incomplete:!0},play:async({canvasElement:e})=>{await t(n(e).queryByTestId("nutrition-info-box")).not.toBeInTheDocument()}},p={play:async({canvasElement:e})=>{const r=n(e.ownerDocument.body);await w.click(r.getByRole("button",{name:/download/i})),await t(await r.findAllByRole("menuitem")).toHaveLength(2),await w.keyboard("{Escape}")}},g={args:{downloadDisabled:!0},play:async({canvasElement:e})=>{await t(n(e).getByRole("button",{name:/download/i})).toBeDisabled()}},h={render:e=>a.jsxs("div",{className:"pf-story-stack",children:[a.jsxs("ol",{children:[a.jsx("li",{children:"Frame title and named export menu identify the source recipe."}),a.jsx("li",{children:"Real label graphics use supplied calculation results and metadata."}),a.jsx("li",{children:"Incomplete results remain suppressed; host explains missing inputs."}),a.jsx("li",{children:"Footer describes the host-selected label scheme."})]}),a.jsx(y,{...e})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "nutri-score"
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId("nutriscore-grade-C")).toHaveAttribute("data-active", "true");
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "nutri-score",
    grade: "unavailable"
  },
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelector('[data-active="true"]')).not.toBeInTheDocument();
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "traffic-lights"
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId("traffic-lights-label")).toHaveAccessibleName();
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "nutrition-info"
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId("nutrition-info-sodium")).toHaveAttribute("data-rating", "high");
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "traffic-lights",
    incomplete: true
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).queryByTestId("traffic-lights-label")).not.toBeInTheDocument();
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "nutrition-info",
    incomplete: true
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).queryByTestId("nutrition-info-box")).not.toBeInTheDocument();
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement.ownerDocument.body);
    await userEvent.click(c.getByRole("button", {
      name: /download/i
    }));
    await expect(await c.findAllByRole("menuitem")).toHaveLength(2);
    await userEvent.keyboard("{Escape}");
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    downloadDisabled: true
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByRole("button", {
      name: /download/i
    })).toBeDisabled();
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div className="pf-story-stack">
      <ol>
        <li>Frame title and named export menu identify the source recipe.</li>
        <li>
          Real label graphics use supplied calculation results and metadata.
        </li>
        <li>
          Incomplete results remain suppressed; host explains missing inputs.
        </li>
        <li>Footer describes the host-selected label scheme.</li>
      </ol>
      <NutritionLabelsExample {...args} />
    </div>
}`,...h.parameters?.docs?.source}}};const Q=["Playground","NutriScore","Unscored","TrafficLights","NutritionInfo","IncompleteTrafficLights","IncompleteNutritionInfo","ExportMenu","DisabledExport","Anatomy"];export{h as Anatomy,g as DisabledExport,p as ExportMenu,d as IncompleteNutritionInfo,m as IncompleteTrafficLights,i as NutriScore,u as NutritionInfo,o as Playground,c as TrafficLights,l as Unscored,Q as __namedExportsOrder,J as default};
