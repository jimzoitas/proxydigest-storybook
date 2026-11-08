import{h as H,H as W,K as F,r as N,j as r,a4 as I}from"./iframe-AqpYXns4.js";import{r as U,g as n}from"./ai-output-B6RuyynK.js";import{d as J}from"./apiUrl-CtX1NveE.js";import{R as E}from"./RecipePreviewCard-C1knLH9X.js";import{L as k}from"./LLMFormulaOverview-BSg0p8Wz.js";import{G as M,T as q}from"./TotalDisplayContext-CEqHjqk2.js";import{F as D,I as L}from"./IngredientReviewPanel-CPU5BeOs.js";import"./preload-helper-PPVm8Dsz.js";import"./delay-B1MW13Nt.js";import"./isObject-DVTTJpIa.js";import"./button-B5FjjXWS.js";import"./index-DEXj3--c.js";import"./loader-circle-mWFWE2W9.js";import"./use-api-DWwVMkDM.js";import"./jsonApiHandler-Dm7XqYVj.js";import"./request-CjBGnTdg.js";import"./trackPosthogEvent-D3YuMJXm.js";import"./eye-CMaaO3To.js";import"./use-measurements-DNVqnrZd.js";import"./CollapsibleCard-CWxyjK0b.js";import"./ValueSkeleton-M2sr9ZRW.js";/* empty css                              */import"./skeleton-C_SNY4zC.js";import"./PillTabs-DcwKG9P0.js";import"./tab-keyboard-C8RTK0_Y.js";import"./label-1kzVJgIY.js";import"./switch-Dq-T1JeF.js";import"./useAriaLabelledBy-Da9KhbUQ.js";import"./columns-3-DI-AIizw.js";import"./collapsible-DZyMQ3Bu.js";import"./useCollapsiblePanel-DOTGH3aY.js";import"./tooltip-core-B2gr90Lt.js";import"./IngredientModalTrigger-DT1O9iNJ.js";import"./file-text-cneRnGIV.js";import"./RegenerateHint-By8vYRJt.js";import"./index-C6spud9v.js";import"./triangle-alert-DPRF-sLk.js";import"./badge-CQKobhLs.js";import"./getIngredientIconsColumn-AHu6LRIc.js";import"./context-menu-B8gpNJM6.js";import"./menu-DaKubz4c.js";import"./CompositeItem-D1wyjQOR.js";import"./useCompositeItem-QlszIeBN.js";import"./Separator-DssPvI5G.js";import"./chevron-right-B3hyZT-D.js";import"./circle-Dg6ojZlj.js";import"./square-arrow-out-up-right-3i9U-f-N.js";import"./globe-CPLjxi2a.js";import"./factory-DLcwBI8a.js";import"./row-context-menu-fnc_5PnO.js";import"./arrow-up-DwlW2-lT.js";import"./arrow-down-mqIMPpot.js";import"./arrow-up-down-Cn8VFZI8.js";import"./accordion-B6UeQwZ6.js";import"./accordion-0FBKGPj-.js";import"./roving-focus-0SK5-Aqb.js";import"./EquipmentSourceBadge-2JGaHW0x.js";import"./use-text-truncation-DJQMBD6R.js";import"./number-field-DZ29WMCg.js";import"./input-DLCq6ZzS.js";import"./pencil-RUyFOvPb.js";import"./pencil-off-DObeHMvp.js";import"./rotate-ccw-DSaEPQwv.js";import"./sparkles-CT90CegH.js";import"./thermometer-DWPtX7v8.js";import"./arrow-right-B-_i2YlE.js";import"./arrow-up-right-B_fVAkKA.js";import"./chevrons-up-down-Q_ZLaTHI.js";import"./tabs-D2cBF9Wg.js";import"./CompositeRoot-yL7bK7Jd.js";import"./proxy-ai-B3foHNVL.js";import"./overlay-dialog-aVFq0bEi.js";import"./SidebarSection-jtR6GPtn.js";import"./plus-DzP923hm.js";import"./dropdown-menu-qZhg1f8R.js";import"./separator-C7Zm_6nS.js";import"./sheet-dNUUpp2U.js";import"./panel-left-B2yi0UBt.js";import"./link-DDXehOCU.js";import"./GradientButton-BAnbENHo.js";import"./input-field-BL2Hx9MY.js";import"./GradientIcon-CfoM2wBY.js";import"./InfoAlert-C6GU9og2.js";import"./circle-x-DP398tgS.js";import"./circle-check-big-ezdSO-Al.js";import"./info-w0-6ezG6.js";import"./EmptyState-W0H3wZQQ.js";import"./StatusIndicator-DrNvs6i-.js";import"./QuickActionCard-CS01mYDf.js";import"./minus-0yDLMIrp.js";import"./aiAssistant.selectors-DhBhezDt.js";import"./search-combobox-wrapper-CtTUbRue.js";import"./search-combobox-base-CuHuTJW4.js";import"./dialog-DnXWbC45.js";import"./index.es-QUTdyhZn.js";import"./index.module-B2X8Wkxy.js";import"./search-combobox-server-BdgqnvXw.js";import"./use-paginated-api-V0po_pzL.js";import"./SearchByConfig-BwS2JSrg.js";import"./ingredientExternalId-BEs0YHso.js";import"./circle-plus-JvGGZ7kp.js";import"./trash-2-jYeXWi9f.js";const{expect:o,fn:O,userEvent:x,within:i}=__STORYBOOK_MODULE_TEST__;function K({surface:e,previewing:t,submitting:c,onAction:T}){const[G,j]=N.useState("No action"),R=C=>{j(C),T(C)};return r.jsxs("div",{className:"pf-story-ai-assistant-generated-formula-frame",children:[r.jsx("output",{"aria-label":"Proposal action",children:G}),e==="card"&&r.jsx(E,{recipe:n,onPreview:()=>R("preview"),isPreviewing:t}),e==="overview"&&r.jsx(q,{children:r.jsx(k,{formula:n})}),(e==="comparison"||e==="proposed")&&r.jsx(M,{standalone:e==="proposed"},e),e==="review"&&r.jsx(L,{scope:"recipe_formulation_advisor",conversationId:"chat-local",interactionId:"interaction-local"}),e==="actions"&&r.jsx(D,{onCancel:()=>R("cancel"),onSave:()=>R("save"),isSubmitting:c})]})}const B={message:"Confirm ingredient matches before generation.",reviewPayload:[{initialLlmIngredientName:"Oat flour",llmSelectedMatch:{id:"102",name:"Oat flour"},alternativeMatches:[{id:"103",name:"Whole oat flour"}]}]},a={aiAssistant:{assistantScope:"recipe_formulation_advisor",conversation:{recipe_formulation_advisor:{id:"chat-local",llmGeneratedFormula:n,formulaUserLLMGeneratedDiff:{...n,description:n.description??"",type:"formula_diff",historyId:null,createdAt:"2026-01-01",updatedAt:"2026-01-01",createdBy:"fixture",tenantId:1,hasSemanticChanges:!0},humanReviewPayload:B}}}},P=O(),Fa={title:"Patterns/AI/Generated formula and proposal output",component:K,subcomponents:{RecipePreviewCard:E,LLMFormulaOverview:k,GeneratedFormulaDisplay:M,IngredientReviewPanel:L,FormulaProposalActionBanner:D},tags:["autodocs"],args:{surface:"card",previewing:!1,submitting:!1,onAction:O()},argTypes:{surface:{control:"select",options:["card","overview","comparison","proposed","review","actions"]},previewing:{control:"boolean"},submitting:{control:"boolean"},onAction:{control:!1}},parameters:{layout:"fullscreen",store:{preloadedState:a},websocket:{sendJsonMessage:P},msw:{handlers:[...U(),H.get(J,()=>W.json(F([I("ingredient","102",{name:"Oat flour",branded:!1,tenant_id:"1"}),I("ingredient","103",{name:"Whole oat flour",branded:!0,tenant_id:"tenant-storybook-0001"})])))]},docs:{description:{component:`These are the actual generated-recipe surfaces: compact preview card, full read-only overview, generated/proposed comparison, ingredient review and apply/cancel banner. They retain separate state and action contracts. The surface control selects the real implementation with the same finite recipe payload; it does not normalize different workflows into a replacement table.

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
