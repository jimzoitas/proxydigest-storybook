import{j as t,u as p,a6 as m}from"./iframe-AqpYXns4.js";/* empty css                      */import{B as v}from"./button-B5FjjXWS.js";import{A as d}from"./autosave-status-d0AUN5qp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DEXj3--c.js";import"./loader-circle-mWFWE2W9.js";import"./utils-Br6VVUvW.js";import"./circle-check-D6tVVLQK.js";import"./circle-alert-CMkjFzHc.js";const{expect:n,userEvent:a,within:u}=__STORYBOOK_MODULE_TEST__,k={title:"Patterns/Autosave",tags:["autodocs"],id:"proxy-reusables-autosavestatus",component:d,args:{entityKey:"formula"},parameters:{store:{preloadedState:{ui:{showUpdateErrors:{formula:["Recipe name is required","Select at least one ingredient"]}}}}}};function S(){const c=p();return t.jsxs("section",{className:"pf-story-stack","aria-label":"Recipe save feedback",children:[t.jsxs("div",{className:"pf-story-toolbar",children:[t.jsx("span",{children:"Oat drink"}),t.jsx(d,{entityKey:"formula"})]}),t.jsx("div",{className:"pf-story-wrapping-actions",children:["loading","success","error","idle"].map(e=>t.jsx(v,{variant:"outline",onClick:()=>c(m({key:"formula",value:e})),children:e},e))})]})}const s={parameters:{store:{preloadedState:{ui:{showUpdateState:{formula:"loading"}}}}}},o={parameters:{store:{preloadedState:{ui:{showUpdateState:{formula:"success"}}}}}},r={parameters:{store:{preloadedState:{ui:{showUpdateState:{formula:"error"}}}}}},i={render:()=>t.jsx(S,{}),play:async({canvasElement:c})=>{const e=u(c);await a.click(e.getByRole("button",{name:"loading"})),await n(e.getByRole("status")).toHaveTextContent("Saving…"),await a.click(e.getByRole("button",{name:"success"})),await n(e.getByRole("status")).toHaveTextContent("Saved"),await a.click(e.getByRole("button",{name:"error"}));const l=e.getByRole("button",{name:"Save failed. Show details"});await a.tab({shift:!0}),await a.tab({shift:!0}),await a.tab({shift:!0}),await n(await u(document.body).findByRole("tooltip")).toHaveTextContent("Recipe name is required"),await a.keyboard("{Escape}"),await n(l).toHaveFocus()}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    store: {
      preloadedState: {
        ui: {
          showUpdateState: {
            formula: "loading"
          }
        }
      }
    }
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    store: {
      preloadedState: {
        ui: {
          showUpdateState: {
            formula: "success"
          }
        }
      }
    }
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    store: {
      preloadedState: {
        ui: {
          showUpdateState: {
            formula: "error"
          }
        }
      }
    }
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <SaveJourney />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "loading"
    }));
    await expect(canvas.getByRole("status")).toHaveTextContent("Saving…");
    await userEvent.click(canvas.getByRole("button", {
      name: "success"
    }));
    await expect(canvas.getByRole("status")).toHaveTextContent("Saved");
    await userEvent.click(canvas.getByRole("button", {
      name: "error"
    }));
    const details = canvas.getByRole("button", {
      name: "Save failed. Show details"
    });
    await userEvent.tab({
      shift: true
    });
    await userEvent.tab({
      shift: true
    });
    await userEvent.tab({
      shift: true
    });
    await expect(await within(document.body).findByRole("tooltip")).toHaveTextContent("Recipe name is required");
    await userEvent.keyboard("{Escape}");
    await expect(details).toHaveFocus();
  }
}`,...i.parameters?.docs?.source}}};const j=["Saving","Saved","Failed","StateJourney"];export{r as Failed,o as Saved,s as Saving,i as StateJourney,j as __namedExportsOrder,k as default};
