import{i as a,aY as b}from"./iframe-6uZ_OvXJ.js";import{P as v}from"./ProcessStepEditForm-nc7AZy40.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D1Z-KUMC.js";import"./form-provider-heL067O0.js";import"./form-DEF3hMXI.js";import"./label-ccPiVmVc.js";import"./tooltip-core-Ddkl4sOF.js";import"./circle-question-mark-34CNx7CZ.js";import"./triangle-alert-B_zFvblH.js";import"./input-xqFXePlz.js";import"./textarea-autosize-DFfiRlPW.js";import"./textarea-autosize-x8PjV6NH.js";import"./form-context-DwCij-uj.js";import"./button-A8HzViyP.js";import"./index-BIEDR5QJ.js";import"./loader-circle-DPzNQWfU.js";import"./useReportStepDraft-BcLsspr2.js";const{expect:e,fn:m,userEvent:n,waitFor:u,within:d}=__STORYBOOK_MODULE_TEST__,g={id:"step-73",name:"Mix ingredients",description:"Combine until smooth.",order:1,formulaId:"recipe-17"},M={title:"Product examples/Recipes/Processing Step Edit Form",id:"modules-recipes-processing-step-edit-form",component:v,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"The actual processing-step edit form. The two 24px square actions use the shared icon-sm size with zero horizontal inset; the former text-button inset cramped their icons. Validation, unsaved draft reporting, save/cancel handlers and saving guards remain the production implementation."}}},args:{activeProcessStep:g,stepId:73,isLoading:!1,onSubmit:m(),onCancel:m()},argTypes:{activeProcessStep:{control:!1},onSubmit:{control:!1},onCancel:{control:!1}}},o={play:async({canvasElement:r,args:t})=>{const i=d(r),c=i.getByRole("button",{name:a.t("formula:processStep.saveAriaLabel")}),l=i.getByRole("button",{name:a.t("formula:processStep.cancelAriaLabel")});await e(c).toHaveClass("pf-button--icon-small"),await e(l).toHaveAttribute("type","button");const p=i.getByLabelText(a.t("formula:processStep.stepNameLabel"));await n.clear(p),await n.type(p,"Mix slowly"),await u(()=>e(b().getState().formula.formulaProcessSteps.stepDrafts.length).toBeGreaterThan(0)),await n.click(c),await u(()=>e(t.onSubmit).toHaveBeenCalledWith({id:"73",name:"Mix slowly",description:"Combine until smooth."})),await n.click(l),await e(t.onCancel).toHaveBeenCalledOnce()}},s={args:{isLoading:!0},play:async({canvasElement:r})=>{const t=d(r);await e(t.getByRole("button",{name:a.t("formula:processStep.saveAriaLabel")})).toBeDisabled(),await e(t.getByRole("button",{name:a.t("formula:processStep.cancelAriaLabel")})).toBeDisabled(),await e(t.getByLabelText(a.t("formula:processStep.stepNameLabel"))).toBeDisabled()}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const save = canvas.getByRole("button", {
      name: i18n.t("formula:processStep.saveAriaLabel")
    });
    const cancel = canvas.getByRole("button", {
      name: i18n.t("formula:processStep.cancelAriaLabel")
    });
    await expect(save).toHaveClass("pf-button--icon-small");
    await expect(cancel).toHaveAttribute("type", "button");
    const input = canvas.getByLabelText(i18n.t("formula:processStep.stepNameLabel"));
    await userEvent.clear(input);
    await userEvent.type(input, "Mix slowly");
    await waitFor(() => expect(getCurrentStoryStore().getState().formula.formulaProcessSteps.stepDrafts.length).toBeGreaterThan(0));
    await userEvent.click(save);
    await waitFor(() => expect(args.onSubmit).toHaveBeenCalledWith({
      id: "73",
      name: "Mix slowly",
      description: "Combine until smooth."
    }));
    await userEvent.click(cancel);
    await expect(args.onCancel).toHaveBeenCalledOnce();
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("button", {
      name: i18n.t("formula:processStep.saveAriaLabel")
    })).toBeDisabled();
    await expect(canvas.getByRole("button", {
      name: i18n.t("formula:processStep.cancelAriaLabel")
    })).toBeDisabled();
    await expect(canvas.getByLabelText(i18n.t("formula:processStep.stepNameLabel"))).toBeDisabled();
  }
}`,...s.parameters?.docs?.source}}};const F=["Editable","Saving"];export{o as Editable,s as Saving,F as __namedExportsOrder,M as default};
