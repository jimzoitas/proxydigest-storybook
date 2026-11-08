import{j as r,hK as k}from"./iframe-nhB53rPD.js";/* empty css                      */import{N as P,T,a as L}from"./NutritionInfoView-Pyv6VkVw.js";import{a as S,b as x}from"./nutrition-info-B1uhnHCL.js";import"./preload-helper-PPVm8Dsz.js";import"./button-_tcBhp5_.js";import"./index-8Dbc_Jva.js";import"./loader-circle-MxHlgpxw.js";import"./card-CGu-joF2.js";import"./input-CAdeD_xm.js";import"./skeleton-CMUv0H3w.js";import"./table-DKvxVw7S.js";import"./hexagon--G2aLCyG.js";import"./maximize-2-Do2IDjqB.js";import"./download-Bu76VvfY.js";import"./lock-keyhole-CzKgM_K6.js";import"./chevron-right-CavErG_J.js";import"./nutritional.utils-BsPohKBx.js";import"./NutritionInfoBox-DWs4Axjy.js";import"./dropdown-menu-6QYTqNVQ.js";import"./menu-DyIs6xZo.js";import"./CompositeItem-D_8UuHC1.js";import"./useCompositeItem-BquT0LDd.js";import"./Separator-RhxJSB-Q.js";import"./circle-Byfpv97O.js";import"./jspdf.es.min-CqjSVD7t.js";import"./circle-alert-DelDxBk1.js";/* empty css                               */import"./index-C6spud9v.js";import"./RetentionIndicator-BSlVrMpg.js";import"./arrow-up-DKYpIgT2.js";import"./arrow-up-right-CAOOAQi3.js";import"./arrow-right-CIPtz75h.js";import"./arrow-down-right-D0FuEsao.js";import"./arrow-down-DmmWOSCA.js";import"./triangle-alert-XMA8UGNQ.js";const w={formulaId:1,formulaName:"Demi-Glace Sauce (copy)",formulaHistoryId:null,algorithmVersion:"2023-foods",category:"general",score:4,grade:"C",gradeThresholds:[{grade:"A",min:null,max:0},{grade:"B",min:1,max:2},{grade:"C",min:3,max:10},{grade:"D",min:11,max:18},{grade:"E",min:19,max:null}],components:[{key:"energy",kind:"negative",value:200.72,unit:"kJ",points:0,maxPoints:10,counted:!0},{key:"saturates",kind:"negative",value:1.15,unit:"g",points:1,maxPoints:10,counted:!0},{key:"sugars",kind:"negative",value:.98,unit:"g",points:0,maxPoints:15,counted:!0},{key:"salt",kind:"negative",value:.71,unit:"g",points:3,maxPoints:20,counted:!0},{key:"fibre",kind:"positive",value:.35,unit:"g",points:0,maxPoints:5,counted:!0},{key:"fvl",kind:"positive",value:0,unit:"%",points:0,maxPoints:5,counted:!0},{key:"protein",kind:"positive",value:1.87,unit:"g",points:0,maxPoints:7,counted:!0}],missingInputs:[],disclaimerCodes:[],incompleteInputs:[]},{expect:y,fn:E,within:h}=__STORYBOOK_MODULE_TEST__,a=e=>({formulas:{anchor:e,targets:[]}}),t={analytics:{nutriScoreData:a(w),preNutriScoreData:a(w),trafficLightsData:a(x),preTrafficLightsData:a(x),trafficLightsPortion:{amount:300,description:"one bowl (300 g)"},nutritionInfoData:a(S),preNutritionInfoData:a(S),nutritionInfoServingGrams:200,selectedTargetFormulas:[],formulaNames:{anchor:"Sample recipe",target:[]}},formula:{formulaInfo:{formula:{id:"1",name:"Sample recipe",processingState:k.LockedForPostProcessing}}}};function v({report:e,...b}){return e==="nutri-score"?r.jsx(L,{...b}):e==="traffic-lights"?r.jsx(T,{...b}):r.jsx(P,{...b})}const pe={title:"Patterns/Analysis/Nutrition Reports",component:v,subcomponents:{NutriScoreView:L,TrafficLightsView:T,NutritionInfoView:P},tags:["autodocs"],args:{report:"nutri-score",labelView:"both",showPreProcessing:!1,onRemoveTargetFormula:E()},argTypes:{report:{control:"select",options:["nutri-score","traffic-lights","nutrition-info"]},labelView:{control:"inline-radio",options:["label","table","both"]},onRemoveTargetFormula:{control:!1}},parameters:{store:{preloadedState:t},docs:{description:{component:`Actual three nutrition report views with their real label frame, tables, settings/missing-input parts and Redux selectors. Report selection changes implementation; label/table/both and showPreProcessing are supported view APIs. The local store contains finite typed backend-result fixtures, not a successful API generation. Production calculation requests, units, formula processing state and selected comparisons remain host/reducer-owned.

Each report preserves distinct domain states: Nutri-Score grade/points; Traffic Lights requires a portion; Nutrition Info requires serving grams. Errors remain different from no result. Locked recipes can show before/after columns; editable recipes use their current basis. Multi-recipe output uses a horizontal label row and table below, while one recipe places label and table side by side when width permits. onRemoveTargetFormula preserves the target id callback; table settings change the real local reducer but no saga runs. These report-specific selectors/calculations remain separate; shared label frames, primitives, formatting and table controls are composed rather than copied as invented demo components.`}}},render:e=>r.jsx(v,{...e})},n={},s={args:{report:"traffic-lights"}},i={args:{report:"nutrition-info"}},o={args:{labelView:"label"}},l={args:{labelView:"table"}},c={args:{showPreProcessing:!0}},p={args:{report:"traffic-lights"},parameters:{store:{preloadedState:{...t,analytics:{...t.analytics,trafficLightsPortion:null}}}},play:async({canvasElement:e})=>{await y(h(e).getByTestId("traffic-lights-portion-required")).toBeVisible()}},m={args:{report:"nutrition-info"},parameters:{store:{preloadedState:{...t,analytics:{...t.analytics,nutritionInfoServingGrams:null}}}},play:async({canvasElement:e})=>{await y(h(e).getByTestId("nutrition-info-serving-required")).toBeVisible()}},u={parameters:{store:{preloadedState:{...t,analytics:{...t.analytics,nutriScoreLoading:!0}}}}},d={parameters:{store:{preloadedState:{...t,analytics:{...t.analytics,nutriScoreError:"Local calculation request unavailable"}}}},play:async({canvasElement:e})=>{await y(h(e).getByRole("alert")).toHaveTextContent("Local calculation request unavailable")}},g={parameters:{store:{preloadedState:{...t,analytics:{...t.analytics,nutriScoreData:null}}}},play:async({canvasElement:e})=>{await y(h(e).getByTestId("nutriscore-empty")).toBeVisible()}},f={render:e=>r.jsxs("div",{className:"pf-story-stack",children:[r.jsxs("ol",{children:[r.jsx("li",{children:"Host state chooses formula basis, report result and comparison targets."}),r.jsx("li",{children:"Required settings and loading/error/empty states remain domain-specific."}),r.jsx("li",{children:"LabelFrame owns exportable graphics; the report table explains the result."}),r.jsx("li",{children:"View layout keeps the established single/comparison ordering."})]}),r.jsx(v,{...e})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    report: "traffic-lights"
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    report: "nutrition-info"
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    labelView: "label"
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    labelView: "table"
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    showPreProcessing: true
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    report: "traffic-lights"
  },
  parameters: {
    store: {
      preloadedState: {
        ...initial,
        analytics: {
          ...initial.analytics,
          trafficLightsPortion: null
        }
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId("traffic-lights-portion-required")).toBeVisible();
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    report: "nutrition-info"
  },
  parameters: {
    store: {
      preloadedState: {
        ...initial,
        analytics: {
          ...initial.analytics,
          nutritionInfoServingGrams: null
        }
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId("nutrition-info-serving-required")).toBeVisible();
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    store: {
      preloadedState: {
        ...initial,
        analytics: {
          ...initial.analytics,
          nutriScoreLoading: true
        }
      }
    }
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    store: {
      preloadedState: {
        ...initial,
        analytics: {
          ...initial.analytics,
          nutriScoreError: "Local calculation request unavailable"
        }
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByRole("alert")).toHaveTextContent("Local calculation request unavailable");
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    store: {
      preloadedState: {
        ...initial,
        analytics: {
          ...initial.analytics,
          nutriScoreData: null
        }
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId("nutriscore-empty")).toBeVisible();
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div className="pf-story-stack">
      <ol>
        <li>
          Host state chooses formula basis, report result and comparison
          targets.
        </li>
        <li>
          Required settings and loading/error/empty states remain
          domain-specific.
        </li>
        <li>
          LabelFrame owns exportable graphics; the report table explains the
          result.
        </li>
        <li>View layout keeps the established single/comparison ordering.</li>
      </ol>
      <AnalysisReportsExample {...args} />
    </div>
}`,...f.parameters?.docs?.source}}};const me=["Playground","TrafficLights","NutritionInfo","LabelOnly","TableOnly","BeforeAfter","MissingPortion","MissingServing","Loading","Error","Empty","Anatomy"];export{f as Anatomy,c as BeforeAfter,g as Empty,d as Error,o as LabelOnly,u as Loading,p as MissingPortion,m as MissingServing,i as NutritionInfo,n as Playground,l as TableOnly,s as TrafficLights,me as __namedExportsOrder,pe as default};
