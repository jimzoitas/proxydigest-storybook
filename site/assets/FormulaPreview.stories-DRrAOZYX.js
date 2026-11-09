import{j as r}from"./iframe-DgvZnKtv.js";import{r as g}from"./ai-output-BbVULUaU.js";import{b as v,F as f,c as h}from"./FormulaMentionInlineChip-vd62xu-W.js";import{B as b}from"./button-CEcYiQdY.js";import"./preload-helper-PPVm8Dsz.js";import"./apiUrl-o8N8i6mn.js";import"./delay-0VzXGcfu.js";import"./isObject-DVTTJpIa.js";import"./dialog-BGED6ss2.js";import"./overlay-dialog-i6vPmHIw.js";import"./badge-C-Jji8Kx.js";import"./index-BWlKOsdO.js";import"./accordion-BRTC14md.js";import"./accordion-mjjl12TU.js";import"./roving-focus-0SK5-Aqb.js";import"./useCollapsiblePanel-jjkiJ8Ha.js";import"./skeleton-DwZsbo-S.js";import"./use-api-C0Z66OjA.js";import"./jsonApiHandler-0tb7Ffsv.js";import"./request-DN34u20v.js";import"./trackPosthogEvent-DQYu7Eh_.js";import"./package-x-Ch_ehrzd.js";import"./arrow-up-right-QD6y7BbT.js";import"./loader-circle-BsZrs7F6.js";const{expect:i,userEvent:y,within:n}=__STORYBOOK_MODULE_TEST__;function x({surface:e,formulaId:a,formulaName:w}){return r.jsx("div",{className:"pf-story-ai-assistant-formula-preview-frame",children:e==="preview"?r.jsx(h,{formulaId:a||null}):e==="inline"?r.jsxs("p",{children:["Compare against"," ",r.jsx(v,{formulaId:a||null,formulaName:w}),"."]}):r.jsx(f,{formulaId:a||null,formulaName:w,children:r.jsx(b,{children:"Open recipe preview"})})})}const U={title:"Patterns/AI/Formula mentions and preview",component:x,subcomponents:{FormulaMentionPreview:h,FormulaMentionDialog:f,FormulaMentionInlineChip:v},tags:["autodocs"],args:{surface:"inline",formulaId:"1042",formulaName:"Oat cocoa drink"},argTypes:{surface:{control:"inline-radio",options:["inline","dialog","preview"]},formulaId:{control:"text"},formulaName:{control:"text"}},parameters:{msw:{handlers:g()},docs:{description:{component:`The real inline mention button opens FormulaMentionDialog; the same FormulaMentionPreview is also available as a read-only embedded view. The source currently uses click/dialog resolution, not an invented hover card. The hook loads formula, initial ingredients, processing steps and yields, then related equipment variables and weight/cost totals. Local JSON:API handlers preserve those request boundaries and response shape.

### API and states
formulaId is a string or null; null gives details-unavailable content without a request. formulaName names the dialog and mention. Dialog children must accept the Radix asChild trigger props. Ready, pending, empty and error examples use actual responses; the processing example contains a mixing step. Open recipe links to the source's existing \`/formulas/{id}\` route in a new tab. No recipe is saved or applied.

### Accessibility and host obligations
The inline button is named by the recipe, the modal is titled and scroll capped, and the production Radix shell owns Escape/focus return. Keep ingredients and processing details read-only. Yield/cost values are explicit finite sample responses, not client-calculated authoritative results. Keyboard and click dismissal are exercised; server calculations and browser downloading remain integration responsibilities.`}}}},t={},o={play:async({canvasElement:e})=>{await y.click(n(e).getByRole("button",{name:"@Oat cocoa drink"}));const a=n(await n(document.body).findByRole("dialog"));await i(await a.findByText("Oat flour")).toBeVisible(),await i(await a.findByText("Mix beverage")).toBeVisible(),await y.keyboard("{Escape}"),await i(n(document.body).queryByRole("dialog")).not.toBeInTheDocument()}},c={args:{surface:"preview"},play:async({canvasElement:e})=>{await i(await n(e).findByText("Mix beverage")).toBeVisible()}},l={args:{surface:"preview"},parameters:{msw:{handlers:g("loading")}}},p={args:{surface:"preview"},parameters:{msw:{handlers:g("error")}},play:async({canvasElement:e})=>{await i(await n(e).findByText("Local recipe preview unavailable")).toBeVisible()}},d={args:{surface:"preview"},parameters:{msw:{handlers:g("empty")}}},m={args:{surface:"preview",formulaId:""}},u={args:{surface:"dialog"},parameters:{docs:{description:{story:"Trigger → titled modal → formula details → initial ingredients → processing steps → source-recipe link. Open the real modal to inspect its sections."}}}},s={args:{surface:"preview"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "preview"
  },
  play: async ({
    canvasElement
  }) => {
    await expect(await within(canvasElement).findByText("Mix beverage")).toBeVisible();
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "preview"
  },
  parameters: {
    msw: {
      handlers: recipePreviewHandlers("loading")
    }
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "preview"
  },
  parameters: {
    msw: {
      handlers: recipePreviewHandlers("empty")
    }
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "preview",
    formulaId: ""
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "preview"
  }
}`,...s.parameters?.docs?.source},description:{story:"Stable source specimen; no authored play changes its initial anatomy.",...s.parameters?.docs?.description}}};const z=["Playground","OpenMention","Processing","Loading","Error","Empty","NoIdentifier","Anatomy","AnatomyPreview"];export{u as Anatomy,s as AnatomyPreview,d as Empty,p as Error,l as Loading,m as NoIdentifier,o as OpenMention,t as Playground,c as Processing,z as __namedExportsOrder,U as default};
