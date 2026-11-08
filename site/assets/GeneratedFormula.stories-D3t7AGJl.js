import{h as H,H as W,K as F,r as N,j as r,a4 as I}from"./iframe-nhB53rPD.js";import{r as U,g as n}from"./ai-output-P-GOZMG9.js";import{d as J}from"./apiUrl-CtX1NveE.js";import{R as E}from"./RecipePreviewCard-JPA_moIw.js";import{L as k}from"./LLMFormulaOverview-BeAl3-F2.js";import{G as M,T as q}from"./TotalDisplayContext-It5yWvZF.js";import{F as D,I as L}from"./IngredientReviewPanel-BhoD4NgW.js";import"./preload-helper-PPVm8Dsz.js";import"./delay-2aHnKAHT.js";import"./isObject-DVTTJpIa.js";import"./button-_tcBhp5_.js";import"./index-8Dbc_Jva.js";import"./loader-circle-MxHlgpxw.js";import"./use-api-C38r92YH.js";import"./jsonApiHandler-C4BMoVsw.js";import"./request-CGJ4zixB.js";import"./trackPosthogEvent-Zud5gl49.js";import"./eye-Cx_PqIi_.js";import"./use-measurements-bttmMHn2.js";import"./CollapsibleCard-DbAqaAfJ.js";import"./ValueSkeleton-BA0XiIgT.js";/* empty css                              */import"./skeleton-CMUv0H3w.js";import"./PillTabs-CjbN5M8I.js";import"./tab-keyboard-C8RTK0_Y.js";import"./label-CIA21tYv.js";import"./switch-uMj7V9v_.js";import"./useAriaLabelledBy-D8Oa7trO.js";import"./columns-3-CQcU9YzF.js";import"./collapsible-pI4oVkh3.js";import"./useCollapsiblePanel-DVMF6qnG.js";import"./tooltip-core-i2pf0ZTE.js";import"./IngredientModalTrigger-JMXoJH9d.js";import"./file-text-D6e9TeYA.js";import"./RegenerateHint-HiCTReCR.js";import"./index-C6spud9v.js";import"./triangle-alert-XMA8UGNQ.js";import"./badge-DF9-aVgV.js";import"./getIngredientIconsColumn-D1YdyeAY.js";import"./context-menu-BgHQWO9B.js";import"./menu-DyIs6xZo.js";import"./CompositeItem-D_8UuHC1.js";import"./useCompositeItem-BquT0LDd.js";import"./Separator-RhxJSB-Q.js";import"./chevron-right-CavErG_J.js";import"./circle-Byfpv97O.js";import"./square-arrow-out-up-right-DmGITzLA.js";import"./globe-BvWp6hod.js";import"./factory-Cnmrypbg.js";import"./row-context-menu-BHRxYP77.js";import"./arrow-up-DKYpIgT2.js";import"./arrow-down-DmmWOSCA.js";import"./arrow-up-down-B8dx3m8U.js";import"./accordion-B67wbHOw.js";import"./accordion-CHExsbqI.js";import"./roving-focus-0SK5-Aqb.js";import"./EquipmentSourceBadge-ClMYQXkk.js";import"./use-text-truncation-D1bP39pz.js";import"./number-field-DCKprIQw.js";import"./input-CAdeD_xm.js";import"./pencil-B9iT6ulW.js";import"./pencil-off-CiQaU1-6.js";import"./rotate-ccw-C4xWb7Mp.js";import"./sparkles-DtPcgZXv.js";import"./thermometer-Da3ZdED8.js";import"./arrow-right-CIPtz75h.js";import"./arrow-up-right-CAOOAQi3.js";import"./chevrons-up-down-D9M3rIvK.js";import"./tabs-Fq9_gDeO.js";import"./CompositeRoot-B0On-XqY.js";import"./proxy-ai-o-RopWUa.js";import"./overlay-dialog-Co5KED9w.js";import"./SidebarSection-BvXTZEYC.js";import"./plus-0cDzJ2QO.js";import"./dropdown-menu-6QYTqNVQ.js";import"./separator-Dmg9cS_7.js";import"./sheet-L7clkwH-.js";import"./panel-left-Bz3AW4zy.js";import"./link-BzrwOGkM.js";import"./GradientButton-Cf-GSuXl.js";import"./input-field-CqPzWEoF.js";import"./GradientIcon-DZGaPdQM.js";import"./InfoAlert-BZotkcbw.js";import"./circle-x-DQ_R-m_A.js";import"./circle-check-big-Cp3rUY4Q.js";import"./info-BBafOREX.js";import"./EmptyState-DcYSBPq3.js";import"./StatusIndicator-Cxavf1go.js";import"./QuickActionCard-DRfpLGIV.js";import"./minus-XaXcKlev.js";import"./aiAssistant.selectors-xGGE4Gfz.js";import"./search-combobox-wrapper-BVW6dzVE.js";import"./search-combobox-base-CmOZw0Qn.js";import"./dialog-CyBaw9zK.js";import"./index.es-RINfVGjB.js";import"./index.module-B262ysEo.js";import"./search-combobox-server-BD1DcZzg.js";import"./use-paginated-api-QJatBdKg.js";import"./SearchByConfig-YoiZjbOC.js";import"./ingredientExternalId-BfH8OSym.js";import"./circle-plus-sVp6LW1G.js";import"./trash-2-DICbQNLz.js";const{expect:o,fn:O,userEvent:x,within:i}=__STORYBOOK_MODULE_TEST__;function K({surface:e,previewing:t,submitting:c,onAction:T}){const[G,j]=N.useState("No action"),R=C=>{j(C),T(C)};return r.jsxs("div",{className:"pf-story-ai-assistant-generated-formula-frame",children:[r.jsx("output",{"aria-label":"Proposal action",children:G}),e==="card"&&r.jsx(E,{recipe:n,onPreview:()=>R("preview"),isPreviewing:t}),e==="overview"&&r.jsx(q,{children:r.jsx(k,{formula:n})}),(e==="comparison"||e==="proposed")&&r.jsx(M,{standalone:e==="proposed"},e),e==="review"&&r.jsx(L,{scope:"recipe_formulation_advisor",conversationId:"chat-local",interactionId:"interaction-local"}),e==="actions"&&r.jsx(D,{onCancel:()=>R("cancel"),onSave:()=>R("save"),isSubmitting:c})]})}const B={message:"Confirm ingredient matches before generation.",reviewPayload:[{initialLlmIngredientName:"Oat flour",llmSelectedMatch:{id:"102",name:"Oat flour"},alternativeMatches:[{id:"103",name:"Whole oat flour"}]}]},a={aiAssistant:{assistantScope:"recipe_formulation_advisor",conversation:{recipe_formulation_advisor:{id:"chat-local",llmGeneratedFormula:n,formulaUserLLMGeneratedDiff:{...n,description:n.description??"",type:"formula_diff",historyId:null,createdAt:"2026-01-01",updatedAt:"2026-01-01",createdBy:"fixture",tenantId:1,hasSemanticChanges:!0},humanReviewPayload:B}}}},P=O(),Fa={title:"Patterns/AI/Generated formula and proposal output",component:K,subcomponents:{RecipePreviewCard:E,LLMFormulaOverview:k,GeneratedFormulaDisplay:M,IngredientReviewPanel:L,FormulaProposalActionBanner:D},tags:["autodocs"],args:{surface:"card",previewing:!1,submitting:!1,onAction:O()},argTypes:{surface:{control:"select",options:["card","overview","comparison","proposed","review","actions"]},previewing:{control:"boolean"},submitting:{control:"boolean"},onAction:{control:!1}},parameters:{layout:"fullscreen",store:{preloadedState:a},websocket:{sendJsonMessage:P},msw:{handlers:[...U(),H.get(J,()=>W.json(F([I("ingredient","102",{name:"Oat flour",branded:!1,tenant_id:"1"}),I("ingredient","103",{name:"Whole oat flour",branded:!0,tenant_id:"tenant-storybook-0001"})])))]},docs:{description:{component:`These are the actual generated-recipe surfaces: compact preview card, full read-only overview, generated/proposed comparison, ingredient review and apply/cancel banner. They retain separate state and action contracts. The surface control selects the real implementation with the same finite recipe payload; it does not normalize different workflows into a replacement table.

### API and data contracts
RecipePreviewCard takes recipe, onPreview, isPreviewing=false and className. LLMFormulaOverview takes an LLMGeneratedFormula and adapts it into the existing formula table reducers. Both request authoritative weight/cost totals; this catalogue uses explicit local sample responses and never treats raw mixed units as a sum. GeneratedFormulaDisplay reads the active scoped conversation and its proposal/diff/component choices; standalone=true hides comparison and uses compatible-unit totals. IngredientReviewPanel takes scope, conversationId and interactionId and uses scoped humanReviewPayload; confirm sends resume_interaction_review with selected matches, while cancel sends cancel_pending_interaction. The WebSocket here is a callback recorder. FormulaProposalActionBanner calls onSave to open the host save workflow, onCancel to dismiss, and disables Save only during isSubmitting.

### Anatomy, interactions and limits
The card combines title, authoritative stats, ingredient pills and preview action. Overview preserves ingredients and processing columns. Comparison retains diff annotations and missing-density warnings. Review keeps selected catalog matches, alternative search, add/delete and confirm. Named delete/cancel buttons now expose their existing actions to keyboard and assistive technology. Do not fabricate generation, application or persisted success from a click; the host owns those transactions. Local fixtures cover callback payloads, mixed units, missing density, selected ingredients, disconnected review and submitting actions. Backend calculation fidelity and production transport require their existing integration tests.`}}}},p={},m={play:async({canvasElement:e,args:t})=>{await x.click(i(e).getByRole("button",{name:"Preview"})),await o(t.onAction).toHaveBeenCalledWith("preview")}},l={args:{previewing:!0}},d={args:{surface:"overview"}},u={args:{surface:"comparison"}},v={args:{surface:"proposed"}},g={args:{surface:"proposed"},parameters:{store:{preloadedState:{...a,aiAssistant:{...a.aiAssistant,conversation:{recipe_formulation_advisor:{...a.aiAssistant.conversation.recipe_formulation_advisor,llmGeneratedFormula:{...n,initialComponents:n.initialComponents.map((e,t)=>t?{...e,unitId:2,unitSymbol:"ml"}:e)}}}}}}}},s={args:{surface:"comparison"},parameters:{store:{preloadedState:{...a,aiAssistant:{...a.aiAssistant,conversation:{recipe_formulation_advisor:{...a.aiAssistant.conversation.recipe_formulation_advisor,formulaUserLLMGeneratedDiff:{...a.aiAssistant.conversation.recipe_formulation_advisor.formulaUserLLMGeneratedDiff,meta:{disclaimers:[{target_type:"component",target_id:2,target_name:"Oat flour"}]}}}}}}}}},w={...s,play:async({canvasElement:e})=>{await o(i(e).getByTestId("estimated-badge")).toBeVisible()}},f={args:{surface:"review"},play:async({canvasElement:e})=>{await o(await i(e).findByRole("combobox")).toHaveTextContent("Oat flour")}},y={args:{surface:"review"},play:async({canvasElement:e})=>{P.mockClear(),await x.click(i(e).getByRole("button",{name:/Next/})),await o(P).toHaveBeenCalledWith({type:"resume_interaction_review",data:{conversationId:"chat-local",interactionId:"interaction-local",reviewPayload:B.reviewPayload}})}},h={args:{surface:"review"},parameters:{store:{preloadedState:{...a,aiAssistant:{...a.aiAssistant,conversation:{recipe_formulation_advisor:{humanReviewPayload:{...B,reviewPayload:[]}}}}}}}},b={args:{surface:"review"},parameters:{websocket:{readyState:3,sendJsonMessage:P}}},S={args:{surface:"actions"},play:async({canvasElement:e,args:t})=>{const c=i(e);await x.click(c.getByRole("button",{name:"Save"})),await o(t.onAction).toHaveBeenCalledWith("save"),await x.click(c.getAllByRole("button",{name:"Cancel"})[1]),await o(t.onAction).toHaveBeenCalledWith("cancel")}},_={args:{surface:"actions",submitting:!0},play:async({canvasElement:e})=>{await o(i(e).getByRole("button",{name:"Save"})).toBeDisabled()}},A={parameters:{docs:{description:{story:"The actual recipe card's leading icon, title/state, statistic line, ingredient pills and trailing Preview action. Select Overview or Comparison in the playground for the corresponding full recipe anatomy."}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"{}",...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: "Preview"
    }));
    await expect(args.onAction).toHaveBeenCalledWith("preview");
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    previewing: true
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "overview"
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "comparison"
  }
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "proposed"
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "proposed"
  },
  parameters: {
    store: {
      preloadedState: {
        ...baseState,
        aiAssistant: {
          ...baseState.aiAssistant,
          conversation: {
            recipe_formulation_advisor: {
              ...baseState.aiAssistant.conversation.recipe_formulation_advisor,
              llmGeneratedFormula: {
                ...generatedRecipe,
                initialComponents: generatedRecipe.initialComponents.map((item, index) => index ? {
                  ...item,
                  unitId: 2,
                  unitSymbol: "ml"
                } : item)
              }
            }
          }
        }
      }
    }
  }
}`,...g.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "comparison"
  },
  parameters: {
    store: {
      preloadedState: {
        ...baseState,
        aiAssistant: {
          ...baseState.aiAssistant,
          conversation: {
            recipe_formulation_advisor: {
              ...baseState.aiAssistant.conversation.recipe_formulation_advisor,
              formulaUserLLMGeneratedDiff: {
                ...baseState.aiAssistant.conversation.recipe_formulation_advisor.formulaUserLLMGeneratedDiff,
                meta: {
                  disclaimers: [{
                    target_type: "component",
                    target_id: 2,
                    target_name: "Oat flour"
                  }]
                }
              }
            }
          }
        }
      }
    }
  }
}`,...s.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  ...MissingDensity,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId("estimated-badge")).toBeVisible();
  }
}`,...w.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "review"
  },
  play: async ({
    canvasElement
  }) => {
    await expect(await within(canvasElement).findByRole("combobox")).toHaveTextContent("Oat flour");
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "review"
  },
  play: async ({
    canvasElement
  }) => {
    sendMessage.mockClear();
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: /Next/
    }));
    await expect(sendMessage).toHaveBeenCalledWith({
      type: "resume_interaction_review",
      data: {
        conversationId: "chat-local",
        interactionId: "interaction-local",
        reviewPayload: review.reviewPayload
      }
    });
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "review"
  },
  parameters: {
    store: {
      preloadedState: {
        ...baseState,
        aiAssistant: {
          ...baseState.aiAssistant,
          conversation: {
            recipe_formulation_advisor: {
              humanReviewPayload: {
                ...review,
                reviewPayload: []
              }
            }
          }
        }
      }
    }
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "review"
  },
  parameters: {
    websocket: {
      readyState: 3,
      sendJsonMessage: sendMessage
    }
  }
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "actions"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Save"
    }));
    await expect(args.onAction).toHaveBeenCalledWith("save");
    await userEvent.click(canvas.getAllByRole("button", {
      name: "Cancel"
    })[1]);
    await expect(args.onAction).toHaveBeenCalledWith("cancel");
  }
}`,...S.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "actions",
    submitting: true
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByRole("button", {
      name: "Save"
    })).toBeDisabled();
  }
}`,..._.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "The actual recipe card's leading icon, title/state, statistic line, ingredient pills and trailing Preview action. Select Overview or Comparison in the playground for the corresponding full recipe anatomy."
      }
    }
  }
}`,...A.parameters?.docs?.source}}};const Na=["Playground","PreviewAction","Previewing","Overview","Comparison","Proposed","MixedUnits","MissingDensity","DensityWarning","IngredientReview","ConfirmIngredientReview","EmptyIngredientReview","DisconnectedReview","ProposalActions","Submitting","Anatomy"];export{A as Anatomy,u as Comparison,y as ConfirmIngredientReview,w as DensityWarning,b as DisconnectedReview,h as EmptyIngredientReview,f as IngredientReview,s as MissingDensity,g as MixedUnits,d as Overview,p as Playground,m as PreviewAction,l as Previewing,S as ProposalActions,v as Proposed,_ as Submitting,Na as __namedExportsOrder,Fa as default};
