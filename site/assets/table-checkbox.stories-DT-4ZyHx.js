import{j as m,r as l}from"./iframe-DgvZnKtv.js";import{T as h}from"./table-checkbox-5PpntlgQ.js";import"./preload-helper-PPVm8Dsz.js";import"./checkbox-CCvRjg_n.js";import"./minus-0s0hIbe7.js";import"./useAriaLabelledBy-C2v0UWUV.js";const{expect:i,fn:g,userEvent:b,within:k}=__STORYBOOK_MODULE_TEST__;function x(e){const[c,a]=l.useState(e.checked),[p,u]=l.useState(e.indeterminate);return m.jsx(h,{...e,checked:c,indeterminate:p,onCheckedChange:d=>{a(d),u(!1),e.onCheckedChange(d)}})}const T={title:"Components/Data Display/Table Checkbox",component:h,tags:["autodocs"],parameters:{controls:{include:["size","checked","indeterminate","disabled"]},docs:{description:{component:"The Data Grid uses the shared Checkbox for row and select-all controls. Supply checked and onCheckedChange to manage selection. Set indeterminate to show a dash for a partial selection. The grid uses the large Checkbox by default (18px at a 16px root). A table with its own selection controls can request the small size (14px). The grid owns the selection column width."}}},args:{size:"lg",checked:!1,indeterminate:!1,disabled:!1,"aria-label":"Select row",onCheckedChange:g()},argTypes:{size:{control:"inline-radio",options:["sm","lg"]},checked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"}},render:e=>m.jsx(x,{...e},`${e.checked}:${e.indeterminate}`)},t={},o={args:{size:"lg",checked:!0}},r={args:{indeterminate:!0}},n={args:{disabled:!0}},s={play:async({canvasElement:e,args:c})=>{const a=k(e).getByRole("checkbox");a.focus(),await i(a).toHaveAttribute("data-control-size","lg"),await b.keyboard(" "),await i(a).toBeChecked(),await i(c.onCheckedChange).toHaveBeenCalledWith(!0)}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg",
    checked: true
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const checkbox = within(canvasElement).getByRole("checkbox");
    checkbox.focus();
    await expect(checkbox).toHaveAttribute("data-control-size", "lg");
    await userEvent.keyboard(" ");
    await expect(checkbox).toBeChecked();
    await expect(args.onCheckedChange).toHaveBeenCalledWith(true);
  }
}`,...s.parameters?.docs?.source}}};const z=["Playground","Large","Indeterminate","Disabled","KeyboardSelection"];export{n as Disabled,r as Indeterminate,s as KeyboardSelection,o as Large,t as Playground,z as __namedExportsOrder,T as default};
