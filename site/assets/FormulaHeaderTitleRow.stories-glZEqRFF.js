import{aC as m,j as c,ba as u,i as s,aY as d,bb as p}from"./iframe-BXubdNpd.js";import{F as g}from"./FormulaHeaderTitleRow-CDqvgEgW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-hSxp4k5w.js";import"./button-DOg3bB7T.js";import"./index-DKWiT4Fi.js";import"./loader-circle-WJxMtqtu.js";import"./trackPosthogEvent-CBk16WCm.js";import"./pencil-yy7xBAIJ.js";const{expect:e,userEvent:y,within:l}=__STORYBOOK_MODULE_TEST__,b={id:"recipe-17",name:"Oat yogurt",description:null,stage:m.DEVELOPMENT,createdAt:"2026-01-02T10:00:00Z",updatedAt:"2026-01-02T10:00:00Z",projectId:null,historyId:1,externalSystemId:"YOG-17"},R={title:"Product examples/Recipes/Recipe Title Row",id:"modules-recipes-recipe-title-row",component:g,tags:["autodocs"],decorators:[t=>c.jsx(u,{children:c.jsx(t,{})})],parameters:{layout:"padded",docs:{description:{component:"The actual recipe title row. Its 28px square edit action uses shared icon-md sizing so a 16px pencil fits without inherited text-button inset. The existing muted color, recipe form payload, edit action, sheet toggle and permission gate are retained. The Storybook runtime handles local state without running backend sagas."}}},args:{formula:b,canUpdate:!0},argTypes:{formula:{control:!1}}},a={play:async({canvasElement:t})=>{const r=l(t).getByRole("button",{name:s.t("formula:tab.editFormulaButton")});await e(r).toHaveClass("pf-button--icon-medium"),await y.click(r);const i=d().getState().formula.formulaInfo;await e(i.action).toBe(p.EDIT),await e(i.isFormulaSideSheetOpen).toBe(!0)}},o={args:{canUpdate:!1},play:async({canvasElement:t})=>{const n=l(t);await e(n.queryByRole("button",{name:s.t("formula:tab.editFormulaButton")})).not.toBeInTheDocument(),await e(n.getByRole("combobox",{name:s.t("formula:table.columns.stage")})).toBeDisabled()}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const edit = canvas.getByRole("button", {
      name: i18n.t("formula:tab.editFormulaButton")
    });
    await expect(edit).toHaveClass("pf-button--icon-medium");
    await userEvent.click(edit);
    const state = getCurrentStoryStore().getState().formula.formulaInfo;
    await expect(state.action).toBe(Actions.EDIT);
    await expect(state.isFormulaSideSheetOpen).toBe(true);
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    canUpdate: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByRole("button", {
      name: i18n.t("formula:tab.editFormulaButton")
    })).not.toBeInTheDocument();
    await expect(canvas.getByRole("combobox", {
      name: i18n.t("formula:table.columns.stage")
    })).toBeDisabled();
  }
}`,...o.parameters?.docs?.source}}};const O=["Editable","ReadOnly"];export{a as Editable,o as ReadOnly,O as __namedExportsOrder,R as default};
