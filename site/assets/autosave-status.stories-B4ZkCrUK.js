import{j as a,u as p,s as m}from"./iframe-6uZ_OvXJ.js";/* empty css                      */import{B as v}from"./button-A8HzViyP.js";import{A as d}from"./autosave-status-B1bT7vy0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BIEDR5QJ.js";import"./loader-circle-DPzNQWfU.js";import"./utils-CGXFBF48.js";import"./circle-check-CkQLVZDT.js";import"./circle-alert-COabV-gQ.js";const{expect:n,userEvent:t,within:u}=__STORYBOOK_MODULE_TEST__,k={title:"Patterns/Autosave",tags:["autodocs"],id:"proxy-reusables-autosavestatus",component:d,args:{entityKey:"formula"},parameters:{store:{preloadedState:{ui:{showUpdateErrors:{formula:["Recipe name is required","Select at least one ingredient"]}}}}}};function S(){const c=p();return a.jsxs("section",{className:"pf-story-stack","aria-label":"Recipe save feedback",children:[a.jsxs("div",{className:"pf-story-toolbar",children:[a.jsx("span",{children:"Oat drink"}),a.jsx(d,{entityKey:"formula"})]}),a.jsx("div",{className:"pf-story-wrapping-actions",children:["loading","success","error","idle"].map(e=>a.jsx(v,{variant:"outline",onClick:()=>c(m({key:"formula",value:e})),children:e},e))})]})}const s={parameters:{store:{preloadedState:{ui:{showUpdateState:{formula:"loading"}}}}}},o={parameters:{store:{preloadedState:{ui:{showUpdateState:{formula:"success"}}}}}},r={parameters:{store:{preloadedState:{ui:{showUpdateState:{formula:"error"}}}}}},i={render:()=>a.jsx(S,{}),play:async({canvasElement:c})=>{const e=u(c);await t.click(e.getByRole("button",{name:"loading"})),await n(e.getByRole("status")).toHaveTextContent("Saving…"),await t.click(e.getByRole("button",{name:"success"})),await n(e.getByRole("status")).toHaveTextContent("Saved"),await t.click(e.getByRole("button",{name:"error"}));const l=e.getByRole("button",{name:"Save failed. Show details"});await t.tab({shift:!0}),await t.tab({shift:!0}),await t.tab({shift:!0}),await n(await u(document.body).findByRole("tooltip")).toHaveTextContent("Recipe name is required"),await t.keyboard("{Escape}"),await n(l).toHaveFocus()}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
