import{j as o,P as t,Q as l,bB as r}from"./iframe-AqpYXns4.js";import{S as g}from"./SourcesSidebar-BggtP09l.js";import"./preload-helper-PPVm8Dsz.js";import"./source-basic-GTpBQAiX.js";import"./source-BgvkpggK.js";import"./hover-card-sY2GMIgd.js";import"./aiAssistant.selectors-DhBhezDt.js";import"./panel-left-open-CsRXkfVG.js";const a=(e={})=>l({reducer:{aiAssistant:(c={showSources:!0,assistantScope:r.enum.regulatory_agent,conversation:{[r.enum.regulatory_agent]:{sources:[]}},...e})=>c,feedback:(c={isFeedbackSideSheetOpen:!1})=>c}}),y={title:"Product examples/AiAssistant/SourcesSidebar",id:"aiassistant-sourcessidebar",component:g,parameters:{layout:"padded"},tags:["autodocs"],decorators:[e=>o.jsx("div",{className:"pf-story-ai-assistant-sources-sidebar-viewport",children:o.jsx(e,{})})]},s={decorators:[e=>o.jsx(t,{store:a({conversation:{[r.enum.regulatory_agent]:{sources:[]}}}),children:o.jsx(e,{})})]},n={decorators:[e=>o.jsx(t,{store:a({conversation:{[r.enum.regulatory_agent]:{sources:[["1","FDA Food Labeling Guide","https://www.fda.gov/food/guidance-regulation-food-and-dietary-supplements/food-labeling-guide"],["2","EU Regulation 1169/2011","https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32011R1169"],["3","Codex Alimentarius Guidelines","https://www.codexalimentarius.org/"]]}}}),children:o.jsx(e,{})})]},i={decorators:[e=>o.jsx(t,{store:a({conversation:{[r.enum.regulatory_agent]:{sources:[["1","FDA Food Labeling Guide","https://www.fda.gov/food/guidance-regulation-food-and-dietary-supplements/food-labeling-guide"],["2","EU Regulation 1169/2011 on Food Information","https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32011R1169"],["3","Codex Alimentarius - General Standard for Food Additives","https://www.codexalimentarius.org/"],["4","FDA Nutrition Labeling Requirements","https://www.fda.gov/food/nutrition-facts-label"],["5","EFSA Scientific Opinion on Food Additives","https://www.efsa.europa.eu/en/topics/topic/food-additives"],["6","FDA Allergen Labeling Requirements","https://www.fda.gov/food/food-labeling-nutrition/food-allergies"],["7","EU Novel Food Regulation 2015/2283","https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32015R2283"],["8","FDA GRAS Substances Database","https://www.fda.gov/food/generally-recognized-safe-gras/gras-substances-scogs-database"]]}}}),children:o.jsx(e,{})})]},d={decorators:[e=>o.jsx(t,{store:a({showSources:!1,conversation:{[r.enum.regulatory_agent]:{sources:[["1","FDA Food Labeling Guide","https://www.fda.gov/"],["2","EU Regulation 1169/2011","https://eur-lex.europa.eu/"]]}}}),children:o.jsx(e,{})})]},u={decorators:[e=>o.jsx(t,{store:a({showSources:!0,conversation:{[r.enum.regulatory_agent]:{sources:null}}}),children:o.jsx(e,{})})]};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <Provider store={createMockStore({
    conversation: {
      [WebSocketScopeSchema.enum.regulatory_agent]: {
        sources: []
      }
    }
  })}>
        <Story />
      </Provider>]
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <Provider store={createMockStore({
    conversation: {
      [WebSocketScopeSchema.enum.regulatory_agent]: {
        sources: [["1", "FDA Food Labeling Guide", "https://www.fda.gov/food/guidance-regulation-food-and-dietary-supplements/food-labeling-guide"], ["2", "EU Regulation 1169/2011", "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32011R1169"], ["3", "Codex Alimentarius Guidelines", "https://www.codexalimentarius.org/"]]
      }
    }
  })}>
        <Story />
      </Provider>]
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <Provider store={createMockStore({
    conversation: {
      [WebSocketScopeSchema.enum.regulatory_agent]: {
        sources: [["1", "FDA Food Labeling Guide", "https://www.fda.gov/food/guidance-regulation-food-and-dietary-supplements/food-labeling-guide"], ["2", "EU Regulation 1169/2011 on Food Information", "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32011R1169"], ["3", "Codex Alimentarius - General Standard for Food Additives", "https://www.codexalimentarius.org/"], ["4", "FDA Nutrition Labeling Requirements", "https://www.fda.gov/food/nutrition-facts-label"], ["5", "EFSA Scientific Opinion on Food Additives", "https://www.efsa.europa.eu/en/topics/topic/food-additives"], ["6", "FDA Allergen Labeling Requirements", "https://www.fda.gov/food/food-labeling-nutrition/food-allergies"], ["7", "EU Novel Food Regulation 2015/2283", "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32015R2283"], ["8", "FDA GRAS Substances Database", "https://www.fda.gov/food/generally-recognized-safe-gras/gras-substances-scogs-database"]]
      }
    }
  })}>
        <Story />
      </Provider>]
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <Provider store={createMockStore({
    showSources: false,
    conversation: {
      [WebSocketScopeSchema.enum.regulatory_agent]: {
        sources: [["1", "FDA Food Labeling Guide", "https://www.fda.gov/"], ["2", "EU Regulation 1169/2011", "https://eur-lex.europa.eu/"]]
      }
    }
  })}>
        <Story />
      </Provider>]
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <Provider store={createMockStore({
    showSources: true,
    conversation: {
      [WebSocketScopeSchema.enum.regulatory_agent]: {
        sources: null
      }
    }
  })}>
        <Story />
      </Provider>]
}`,...u.parameters?.docs?.source}}};const x=["Empty","WithFewSources","WithManySources","Hidden","NoSourcesAvailable"];export{s as Empty,d as Hidden,u as NoSourcesAvailable,n as WithFewSources,i as WithManySources,x as __namedExportsOrder,y as default};
