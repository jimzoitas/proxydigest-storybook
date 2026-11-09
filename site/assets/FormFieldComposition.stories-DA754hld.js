import{j as t,r as h,aH as g,cf as C,aJ as l,aR as T}from"./iframe-DgvZnKtv.js";/* empty css                      */import{B as f}from"./button-CEcYiQdY.js";import{a as k}from"./form-provider-DS9xGhZv.js";import{I as j}from"./index-Nn_857-a.js";import{N,R as H}from"./index-L0rYNyen.js";import{S as I}from"./index-CUzTI4yP.js";import{T as O}from"./index-CPQkIXTw.js";import{C as A}from"./index-6XpHZ951.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWlKOsdO.js";import"./loader-circle-BsZrs7F6.js";import"./form-W1-tqjJc.js";import"./label-CPJsvsW3.js";import"./tooltip-core-CEBHIfw_.js";import"./circle-question-mark-ot_TbBR2.js";import"./triangle-alert-DoEEEFIM.js";import"./input-DTWVrd6t.js";import"./number-field-BuEna-S2.js";import"./radio-group-XMhZ7xiG.js";import"./roving-focus-0SK5-Aqb.js";import"./checkbox-CCvRjg_n.js";import"./minus-0s0hIbe7.js";import"./useAriaLabelledBy-C2v0UWUV.js";import"./CompositeRoot-CLpK0Eip.js";import"./circle-CwHZP-HG.js";import"./CompositeItem-qKQIJE0X.js";import"./useCompositeItem-Dr13hnqh.js";import"./input-adapters-Ck_awmH0.js";import"./textarea-D7qlXksG.js";const{expect:i,userEvent:n,waitFor:P,within:v}=__STORYBOOK_MODULE_TEST__,_=g({name:l().trim().min(2,"Enter at least two characters."),amount:T().min(0).max(100),status:l().optional(),visibility:l(),notes:l()}),w={name:"Oat drink",amount:24.5,status:"draft",visibility:"team",notes:"Review the ingredient sources."};function x({disabled:e,autoSave:a,initialName:o,showDescriptions:y}){const[B,S]=h.useState("No submission yet."),[R,F]=h.useState("No field event yet.");return t.jsxs("div",{className:"pf-story-contained-stack",children:[t.jsx(k,{name:"field-composition",schema:_,defaultValues:{...w,name:o},disabled:e,onSubmit:s=>S(`Saved ${s.name}; amount ${s.amount}; status ${s.status??"none"}; visibility ${s.visibility}.`),onBlur:a?(s,b,E)=>F(`Changed ${String(E)}: ${JSON.stringify(s)}`):void 0,className:"pf-story-stack",children:s=>t.jsxs(t.Fragment,{children:[t.jsx(j,{name:"name",label:"Formula name",placeholder:"Enter a name",maxLength:60,"data-testid":"composition-name",disabled:e,description:y?"Name is required and must contain at least two characters.":null,tooltip:"This name appears in the formula list."}),t.jsx(N,{name:"amount",label:"Amount",min:0,max:100,decimalScale:2,suffix:" %","data-testid":"composition-amount",disabled:e,description:y?"A numeric value between 0 and 100; the suffix is presentation.":null}),t.jsx(I,{name:"status",label:"Status",placeholder:"Choose a status",options:[{label:"Draft",value:"draft"},{label:"In review",value:"review"}],emptyOption:!0,disabled:e}),t.jsx(H,{name:"visibility",label:"Visibility",options:[{label:"My team",value:"team",description:"Available to project members"},{label:"Private",value:"private",description:"Available only to you"}],disabled:e}),t.jsx(O,{name:"notes",label:"Notes",disabled:e}),t.jsxs("div",{className:"pf-story-actions",children:[t.jsx(f,{type:"submit",disabled:e,children:"Save fields"}),t.jsx(f,{type:"button",variant:"outline",onClick:()=>s.reset({...w,name:o}),children:"Reset fields"})]}),Object.keys(s.formState.errors).length>0&&t.jsx("p",{role:"alert",className:"pf-story-form-field-composition-error",children:Object.values(s.formState.errors).map(b=>b?.message).filter(Boolean).join(" ")})]})}),t.jsx("p",{role:"status",className:"pf-story-body",children:B}),t.jsx("pre",{className:"pf-story-form-field-composition-field-description",children:R})]})}const ve={title:"Patterns/Forms/Field Composition",component:x,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Real FormProvider with InputField, NumberField, SelectField, RadioGroupField and TextAreaField adapters. The provider owns React Hook Form state and Zod validation; adapters consume its context and FormItemInfo renders their labels, descriptions and error indicator. This pattern's Controls configure the composition, not a substitute form API. Input/number/text-area report changed values on blur when the provider opts into onBlur; select/radio report immediately after selection. The host owns persistence, the optional error summary and saved-result output. Reset uses the actual form.reset method. Other specialized adapters (search, chips, tree selection, markdown and sliders) remain separate contracts."}}},args:{disabled:!1,autoSave:!1,initialName:"Oat drink",showDescriptions:!0},argTypes:{disabled:{control:"boolean"},autoSave:{control:"boolean"},initialName:{control:"text"},showDescriptions:{control:"boolean"}},render:e=>t.jsx(x,{...e},e.initialName)},c={},m={args:{disabled:!0}},d={args:{initialName:""},play:async({canvasElement:e})=>{const a=v(e);await n.click(a.getByRole("button",{name:"Save fields"})),await i(await a.findByRole("alert")).toHaveTextContent("Enter at least two characters."),await i(a.getByRole("status")).toHaveTextContent("No submission yet.")}},p={play:async({canvasElement:e})=>{const a=v(e),o=a.getByTestId("composition-name");await n.clear(o),await n.type(o,"Barley drink"),await n.click(a.getByRole("radio",{name:/Private/})),await n.click(a.getByRole("button",{name:"Save fields"})),await P(()=>i(a.getByRole("status")).toHaveTextContent("Saved Barley drink; amount 24.5; status draft; visibility private.")),await n.click(a.getByRole("button",{name:"Reset fields"})),await i(o).toHaveValue("Oat drink")}},u={args:{autoSave:!0},play:async({canvasElement:e})=>{const a=v(e),o=a.getByTestId("composition-name");await n.click(o),await n.tab(),await i(a.getByText("No field event yet.")).toBeVisible(),await n.clear(o),await n.type(o,"Barley drink"),await n.tab(),await i(a.getByText(/^Changed name:/)).toHaveTextContent("Barley drink")}},r={render:()=>t.jsx(k,{name:"checkbox-adapter",schema:g({approved:C()}),defaultValues:{approved:!1},onSubmit:()=>{},children:t.jsx(A,{name:"approved",label:"Reviewed locally"})}),play:async({canvasElement:e})=>{const a=v(e).getByRole("checkbox",{name:"Reviewed locally"});a.focus(),await n.keyboard(" "),await i(a).toBeChecked()},parameters:{docs:{description:{story:"Actual CheckboxField wraps the existing Checkbox in React Hook Form. Boolean checked state updates the field; optional FormProvider onBlur receives a cloned form snapshot and itemId-based added/removed metadata. No callback means no automatic submission. Headless empty-label usage requires an accessible name supplied by its host."}}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    initialName: ""
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Save fields"
    }));
    await expect(await canvas.findByRole("alert")).toHaveTextContent("Enter at least two characters.");
    await expect(canvas.getByRole("status")).toHaveTextContent("No submission yet.");
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const name = canvas.getByTestId("composition-name");
    await userEvent.clear(name);
    await userEvent.type(name, "Barley drink");
    await userEvent.click(canvas.getByRole("radio", {
      name: /Private/
    }));
    await userEvent.click(canvas.getByRole("button", {
      name: "Save fields"
    }));
    await waitFor(() => expect(canvas.getByRole("status")).toHaveTextContent("Saved Barley drink; amount 24.5; status draft; visibility private."));
    await userEvent.click(canvas.getByRole("button", {
      name: "Reset fields"
    }));
    await expect(name).toHaveValue("Oat drink");
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    autoSave: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const name = canvas.getByTestId("composition-name");
    await userEvent.click(name);
    await userEvent.tab();
    await expect(canvas.getByText("No field event yet.")).toBeVisible();
    await userEvent.clear(name);
    await userEvent.type(name, "Barley drink");
    await userEvent.tab();
    await expect(canvas.getByText(/^Changed name:/)).toHaveTextContent("Barley drink");
  }
}`,...u.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <FormProvider name="checkbox-adapter" schema={z.object({
    approved: z.boolean()
  })} defaultValues={{
    approved: false
  }} onSubmit={() => {}}>
      <CheckboxField name="approved" label="Reviewed locally" />
    </FormProvider>,
  play: async ({
    canvasElement
  }) => {
    const field = within(canvasElement).getByRole("checkbox", {
      name: "Reviewed locally"
    });
    field.focus();
    await userEvent.keyboard(" ");
    await expect(field).toBeChecked();
  },
  parameters: {
    docs: {
      description: {
        story: "Actual CheckboxField wraps the existing Checkbox in React Hook Form. Boolean checked state updates the field; optional FormProvider onBlur receives a cloned form snapshot and itemId-based added/removed metadata. No callback means no automatic submission. Headless empty-label usage requires an accessible name supplied by its host."
      }
    }
  }
}`,...r.parameters?.docs?.source},description:{story:"The retained named checkbox adapter has a distinct opt-in blur/save event contract.",...r.parameters?.docs?.description}}};const ye=["Playground","DisabledFields","InvalidSubmission","SaveAndReset","ChangedBlurEvents","CheckboxAdapter"];export{u as ChangedBlurEvents,r as CheckboxAdapter,m as DisabledFields,d as InvalidSubmission,c as Playground,p as SaveAndReset,ye as __namedExportsOrder,ve as default};
