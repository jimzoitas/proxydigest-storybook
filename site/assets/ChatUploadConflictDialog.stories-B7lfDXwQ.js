import{j as c,r as f}from"./iframe-DgvZnKtv.js";/* empty css                      */import{B as E}from"./button-CEcYiQdY.js";import{C as T}from"./ChatUploadConflictDialog-B92wGk9U.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWlKOsdO.js";import"./loader-circle-BsZrs7F6.js";import"./dialog-BGED6ss2.js";import"./overlay-dialog-i6vPmHIw.js";const{expect:o,userEvent:n,waitFor:k,within:a}=__STORYBOOK_MODULE_TEST__;function x({fileName:e,keepBothDelay:t,initialOpen:w=!1}){const[v,i]=f.useState(w),[b,s]=f.useState("No choice yet"),h=f.useRef(0),B={attachmentKind:"uploaded_file",id:"local-conflict",fileName:e,fileExtension:"pdf",status:"name_conflict",existingDocumentId:41,sizeBytes:2048,mimeType:"application/pdf"};return c.jsxs("div",{className:"pf-story-grid",children:[c.jsx(E,{onClick:()=>{h.current++,i(!0),s("No choice yet")},children:"Resolve duplicate attachment"}),c.jsx("output",{"aria-label":"Conflict outcome",children:b}),c.jsx(T,{attachment:v?B:null,onUseExisting:()=>{s("Use existing requested locally"),i(!1)},onRemove:()=>{s("Remove requested locally"),i(!1)},onClose:()=>{s("Dismissed; conflict remains unresolved"),i(!1)},onKeepBoth:async()=>{const C=h.current;await new Promise(R=>{setTimeout(R,t)}),C===h.current&&(s("Keep both requested locally"),i(!1))}})]})}const N={title:"Patterns/AI/Attachment Conflict",component:x,tags:["autodocs"],args:{fileName:"Product brief.pdf",keepBothDelay:300},argTypes:{fileName:{control:"text"},keepBothDelay:{control:{type:"range",min:0,max:2e3,step:100}}},parameters:{docs:{story:{inline:!1,height:420},description:{component:"Actual ChatUploadConflictDialog API: attachment (UploadedFileAttachment with name_conflict, or null), onUseExisting, async onKeepBoth, onRemove, onClose. The supplied attachment opens the real dialog. Keep both disables all choices and prevents closing while its promise is pending. Dismissal leaves the conflict unresolved; remove and use-existing are distinct choices. This local fixture records callbacks and simulates a delayed resolved promise, not an upload. Real filename allocation, document validation, transport, failures and resulting attachment mutation remain host responsibilities. onKeepBoth must handle its own failures: the component currently resets pending in finally but does not catch a rejected promise, so this page does not fabricate an error UI."}}},render:e=>c.jsx(x,{...e})};async function y(e){return await n.click(a(e).getByRole("button",{name:"Resolve duplicate attachment"})),a(await a(document.body).findByRole("dialog"))}const r={},l={play:async({canvasElement:e})=>{const t=await y(e);await n.click(t.getByRole("button",{name:/use existing/i})),await o(a(e).getByLabelText("Conflict outcome")).toHaveTextContent("Use existing requested locally")}},p={args:{keepBothDelay:500},play:async({canvasElement:e})=>{const t=await y(e);await n.click(t.getByRole("button",{name:/keep both/i})),await o(t.getByRole("button",{name:/use existing/i})).toBeDisabled(),await n.keyboard("{Escape}"),await o(a(document.body).getByRole("dialog")).toBeVisible(),await k(()=>o(a(e).getByLabelText("Conflict outcome")).toHaveTextContent("Keep both requested locally"))}},m={play:async({canvasElement:e})=>{const t=await y(e);await n.click(t.getByRole("button",{name:/remove/i})),await o(a(e).getByLabelText("Conflict outcome")).toHaveTextContent("Remove requested locally")}},d={play:async({canvasElement:e})=>{await y(e),await n.keyboard("{Escape}"),await o(a(e).getByLabelText("Conflict outcome")).toHaveTextContent("conflict remains unresolved")}},u={args:{fileName:"Quarterly ingredient specification with detailed product preparation notes.pdf"}},g={args:{initialOpen:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const dialog = await open(canvasElement);
    await userEvent.click(dialog.getByRole("button", {
      name: /use existing/i
    }));
    await expect(within(canvasElement).getByLabelText("Conflict outcome")).toHaveTextContent("Use existing requested locally");
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    keepBothDelay: 500
  },
  play: async ({
    canvasElement
  }) => {
    const dialog = await open(canvasElement);
    await userEvent.click(dialog.getByRole("button", {
      name: /keep both/i
    }));
    await expect(dialog.getByRole("button", {
      name: /use existing/i
    })).toBeDisabled();
    await userEvent.keyboard("{Escape}");
    await expect(within(document.body).getByRole("dialog")).toBeVisible();
    await waitFor(() => expect(within(canvasElement).getByLabelText("Conflict outcome")).toHaveTextContent("Keep both requested locally"));
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const dialog = await open(canvasElement);
    await userEvent.click(dialog.getByRole("button", {
      name: /remove/i
    }));
    await expect(within(canvasElement).getByLabelText("Conflict outcome")).toHaveTextContent("Remove requested locally");
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await open(canvasElement);
    await userEvent.keyboard("{Escape}");
    await expect(within(canvasElement).getByLabelText("Conflict outcome")).toHaveTextContent("conflict remains unresolved");
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    fileName: "Quarterly ingredient specification with detailed product preparation notes.pdf"
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    initialOpen: true
  }
}`,...g.parameters?.docs?.source}}};const j=["Playground","ChooseAction","KeepBothPending","Remove","DismissWithoutResolving","LongFileName","AnatomyOpen"];export{g as AnatomyOpen,l as ChooseAction,d as DismissWithoutResolving,p as KeepBothPending,u as LongFileName,r as Playground,m as Remove,j as __namedExportsOrder,N as default};
