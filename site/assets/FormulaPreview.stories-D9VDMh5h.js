import{j as r}from"./iframe-nhB53rPD.js";import{r as u}from"./ai-output-P-GOZMG9.js";import{b as y,F as v,c as f}from"./FormulaMentionInlineChip-B2BLdKve.js";import{B as h}from"./button-_tcBhp5_.js";import"./preload-helper-PPVm8Dsz.js";import"./apiUrl-CtX1NveE.js";import"./delay-2aHnKAHT.js";import"./isObject-DVTTJpIa.js";import"./dialog-CyBaw9zK.js";import"./overlay-dialog-Co5KED9w.js";import"./badge-DF9-aVgV.js";import"./index-8Dbc_Jva.js";import"./accordion-B67wbHOw.js";import"./accordion-CHExsbqI.js";import"./roving-focus-0SK5-Aqb.js";import"./useCollapsiblePanel-DVMF6qnG.js";import"./skeleton-CMUv0H3w.js";import"./use-api-C38r92YH.js";import"./jsonApiHandler-C4BMoVsw.js";import"./request-CGJ4zixB.js";import"./trackPosthogEvent-Zud5gl49.js";import"./package-x-B5Y8c9RK.js";import"./arrow-up-right-CAOOAQi3.js";import"./loader-circle-MxHlgpxw.js";const{expect:i,userEvent:w,within:n}=__STORYBOOK_MODULE_TEST__;function x({surface:e,formulaId:a,formulaName:g}){return r.jsx("div",{className:"pf-story-ai-assistant-formula-preview-frame",children:e==="preview"?r.jsx(f,{formulaId:a||null}):e==="inline"?r.jsxs("p",{children:["Compare against"," ",r.jsx(y,{formulaId:a||null,formulaName:g}),"."]}):r.jsx(v,{formulaId:a||null,formulaName:g,children:r.jsx(h,{children:"Open recipe preview"})})})}const J={title:"Patterns/AI/Formula mentions and preview",component:x,subcomponents:{FormulaMentionPreview:f,FormulaMentionDialog:v,FormulaMentionInlineChip:y},tags:["autodocs"],args:{surface:"inline",formulaId:"1042",formulaName:"Oat cocoa drink"},argTypes:{surface:{control:"inline-radio",options:["inline","dialog","preview"]},formulaId:{control:"text"},formulaName:{control:"text"}},parameters:{msw:{handlers:u()},docs:{description:{component:`The real inline mention button opens FormulaMentionDialog; the same FormulaMentionPreview is also available as a read-only embedded view. The source currently uses click/dialog resolution, not an invented hover card. The hook loads formula, initial ingredients, processing steps and yields, then related equipment variables and weight/cost totals. Local JSON:API handlers preserve those request boundaries and response shape.

### API and states
formulaId is a string or null; null gives details-unavailable content without a request. formulaName names the dialog and mention. Dialog children must accept the Radix asChild trigger props. Ready, pending, empty and error examples use actual responses; the processing example contains a mixing step. Open recipe links to the source's existing \`/formulas/{id}\` route in a new tab. No recipe is saved or applied.

### Accessibility and host obligations
The inline button is named by the recipe, the modal is titled and scroll capped, and the production Radix shell owns Escape/focus return. Keep ingredients and processing details read-only. Yield/cost values are explicit finite sample responses, not client-calculated authoritative results. Keyboard and click dismissal are exercised; server calculations and browser downloading remain integration responsibilities.`}}}},s={},t={play:async({canvasElement:e})=>{await w.click(n(e).getByRole("button",{name:"@Oat cocoa drink"}));const a=n(await n(document.body).findByRole("dialog"));await i(await a.findByText("Oat flour")).toBeVisible(),await i(await a.findByText("Mix beverage")).toBeVisible(),await w.keyboard("{Escape}"),await i(n(document.body).queryByRole("dialog")).not.toBeInTheDocument()}},o={args:{surface:"preview"},play:async({canvasElement:e})=>{await i(await n(e).findByText("Mix beverage")).toBeVisible()}},c={args:{surface:"preview"},parameters:{msw:{handlers:u("loading")}}},l={args:{surface:"preview"},parameters:{msw:{handlers:u("error")}},play:async({canvasElement:e})=>{await i(await n(e).findByText("Local recipe preview unavailable")).toBeVisible()}},p={args:{surface:"preview"},parameters:{msw:{handlers:u("empty")}}},d={args:{surface:"preview",formulaId:""}},m={args:{surface:"dialog"},parameters:{docs:{description:{story:"Trigger → titled modal → formula details → initial ingredients → processing steps → source-recipe link. Open the real modal to inspect its sections."}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: "@Oat cocoa drink"
    }));
    const dialog = within(await within(document.body).findByRole("dialog"));
    await expect(await dialog.findByText("Oat flour")).toBeVisible();
    await expect(await dialog.findByText("Mix beverage")).toBeVisible();
    await userEvent.keyboard("{Escape}");
    await expect(within(document.body).queryByRole("dialog")).not.toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "preview"
  },
  play: async ({
    canvasElement
  }) => {
    await expect(await within(canvasElement).findByText("Mix beverage")).toBeVisible();
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "preview"
  },
  parameters: {
    msw: {
      handlers: recipePreviewHandlers("loading")
    }
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "preview"
  },
  parameters: {
    msw: {
      handlers: recipePreviewHandlers("error")
    }
  },
  play: async ({
    canvasElement
  }) => {
    await expect(await within(canvasElement).findByText("Local recipe preview unavailable")).toBeVisible();
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "preview"
  },
  parameters: {
    msw: {
      handlers: recipePreviewHandlers("empty")
    }
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "preview",
    formulaId: ""
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "dialog"
  },
  parameters: {
    docs: {
      description: {
        story: "Trigger → titled modal → formula details → initial ingredients → processing steps → source-recipe link. Open the real modal to inspect its sections."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};const U=["Playground","OpenMention","Processing","Loading","Error","Empty","NoIdentifier","Anatomy"];export{m as Anatomy,p as Empty,l as Error,c as Loading,d as NoIdentifier,t as OpenMention,s as Playground,o as Processing,U as __namedExportsOrder,J as default};
