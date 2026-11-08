import{r as g,j as e}from"./iframe-6uZ_OvXJ.js";import{F as f,a as x,b as h}from"./file-upload-DtVSzQUD.js";import{B as p}from"./button-A8HzViyP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BIEDR5QJ.js";import"./loader-circle-DPzNQWfU.js";const{expect:c,userEvent:d,within:u}=__STORYBOOK_MODULE_TEST__;function y(t){const[a,n]=g.useState([]);return e.jsxs("div",{className:"pf-story-file-upload-preview",children:[e.jsxs(f,{...t,onFilesAdded:r=>n(m=>[...m,...r]),children:[e.jsx(x,{asChild:!0,children:e.jsx(p,{children:"Select local files"})}),e.jsx(h,{children:e.jsx("p",{children:"Drop files to attach locally"})})]}),e.jsx("output",{"aria-label":"Selected files",children:a.length?a.map(r=>r.name).join(", "):"No files selected"}),e.jsx(p,{variant:"outline",onClick:()=>n([]),children:"Clear local files"})]})}const T={title:"Components/AI & Conversation/File Attachment",component:y,tags:["autodocs"],args:{multiple:!0,accept:".txt,.pdf",disabled:!1},argTypes:{multiple:{control:"boolean"},accept:{control:"text"},disabled:{control:"boolean"}},parameters:{docs:{story:{inline:!1,height:"260px"},description:{component:"FileUpload accepts onFilesAdded(File[]), multiple, accept, disabled and children. FileUploadTrigger opens its hidden native input; asChild requires an interactive child. FileUploadContent is a page-wide overlay for real file drags only; internal navigation, text, and link drags remain with their own targets. This story is isolated in an iframe because the real component attaches window drag handlers; multiple instances must not compete on the same page. It ignores drops inside role=dialog. accept is a picker hint, not validation for dragged files. Host code owns file type/size checks, deduplication, progress, upload and errors. Selection here stores File objects locally and never uploads them."}}}},l={play:async({canvasElement:t})=>{const a=u(t),n=t.querySelector("input[type=file]");if(!n)throw new Error("Expected actual file input");await d.upload(n,new File(["local"],"recipe.txt",{type:"text/plain"})),await c(a.getByLabelText("Selected files")).toHaveTextContent("recipe.txt"),await d.click(a.getByRole("button",{name:"Clear local files"})),await c(a.getByLabelText("Selected files")).toHaveTextContent("No files selected")}},s={args:{multiple:!1}},i={args:{accept:"image/*"}},o={args:{disabled:!0},play:async({canvasElement:t})=>{await c(u(t).getByRole("button",{name:"Select local files"})).toBeDisabled()}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    const input = canvasElement.querySelector<HTMLInputElement>("input[type=file]");
    if (!input) throw new Error("Expected actual file input");
    await userEvent.upload(input, new File(["local"], "recipe.txt", {
      type: "text/plain"
    }));
    await expect(c.getByLabelText("Selected files")).toHaveTextContent("recipe.txt");
    await userEvent.click(c.getByRole("button", {
      name: "Clear local files"
    }));
    await expect(c.getByLabelText("Selected files")).toHaveTextContent("No files selected");
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: false
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    accept: "image/*"
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByRole("button", {
      name: "Select local files"
    })).toBeDisabled();
  }
}`,...o.parameters?.docs?.source}}};const C=["Playground","SingleFile","Images","Disabled"];export{o as Disabled,i as Images,l as Playground,s as SingleFile,C as __namedExportsOrder,T as default};
