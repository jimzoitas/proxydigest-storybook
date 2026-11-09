import{j as l,h as w,H as b,r as y}from"./iframe-DgvZnKtv.js";/* empty css                      */import{B as R}from"./button-CEcYiQdY.js";import{D as B,a as T}from"./apiUrl-o8N8i6mn.js";import{D}from"./document-picker-modal-RnYsGL5t.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWlKOsdO.js";import"./loader-circle-BsZrs7F6.js";import"./composed-surface-thTtt0jI.js";import"./dialog-BGED6ss2.js";import"./overlay-dialog-i6vPmHIw.js";import"./trigger-adapters-C3qlkAhu.js";import"./input-adapters-Ck_awmH0.js";import"./input-DTWVrd6t.js";import"./index.es-BGW_4PyL.js";import"./calendar-DNqmRJEy.js";import"./chevron-right-B8SZue5v.js";import"./chevron-left-96ijkid2.js";import"./restApiClient-D8hPIvng.js";import"./request-DN34u20v.js";import"./trackPosthogEvent-DQYu7Eh_.js";import"./server-side-faceted-filter-CoRav3S1.js";import"./index.module-C-pw7-ZN.js";import"./checkbox-CCvRjg_n.js";import"./minus-0s0hIbe7.js";import"./useAriaLabelledBy-C2v0UWUV.js";import"./separator-DZKac5zi.js";import"./Separator-BKJ0ZhJM.js";import"./badge-C-Jji8Kx.js";import"./faceted-filter-DUX0jO-b.js";import"./accordion-mjjl12TU.js";import"./roving-focus-0SK5-Aqb.js";import"./useCollapsiblePanel-jjkiJ8Ha.js";import"./circle-x-1SpwuOPE.js";import"./circle-plus-Cdylr7HA.js";import"./DocumentTypeBadge-SlWVtuEb.js";import"./fetchTagPage-BUr5Z5co.js";import"./documentAssociationsApi-BCX0wdNw.js";import"./jsonApiHandler-0tb7Ffsv.js";import"./Documents.types-DFMEX-rs.js";import"./calendar-days-BmGg2PUj.js";import"./plus-BMpb-JrX.js";const{expect:s,fn:h,userEvent:r,within:c}=__STORYBOOK_MODULE_TEST__,S=["Target specification.pdf","Supplier certificate.pdf","Archived note.txt"].map((e,t)=>({id:t+1,name:e,display_name:null,content_type:t===2?"text/plain":"application/pdf",size_bytes:4096*(t+1),status:"available",container_name:"storybook",canonical_blob_path:e,entities:["generic"],ingredient_ids:[],tags:t===0?["quality"]:[],document_types:{},created_at:"2026-10-20T09:00:00Z",created_by:"story-user",updated_at:"2026-10-20T09:00:00Z"})),v={id:1,name:S[0].name,displayName:null,contentType:"application/pdf",sizeBytes:4096,createdAt:S[0].created_at,tags:["quality"]},x=[w.get(B,({request:e})=>{const t=new URL(e.url).searchParams,i=(t.get("name")??"").toLowerCase(),o=S.filter(n=>n.name.toLowerCase().includes(i)&&(!t.has("tag_ids")||n.tags.includes("quality"))&&(!t.has("created_after")||new Date(n.created_at)>=new Date(t.get("created_after")??""))&&(!t.has("created_before")||new Date(n.created_at)<=new Date(t.get("created_before")??"")));return b.json({data:o,pagination:{page:1,size:30,total_count:o.length,total_pages:1}})}),w.get(T,()=>b.json({data:[{id:7,name:"quality"}],pagination:{page:1,size:50,total_count:1,total_pages:1}}))];function k(e){const[t,i]=y.useState(e.open),[o,n]=y.useState([]);return y.useEffect(()=>i(e.open),[e.open]),l.jsxs("div",{className:"pf-story-grid",children:[l.jsx(R,{onClick:()=>i(!0),children:"Choose documents"}),l.jsx("output",{"aria-live":"polite",children:o.length?`Selected locally: ${o.map(a=>a.name).join(", ")}`:"No documents committed."}),l.jsx(D,{...e,open:t,onOpenChange:a=>{i(a),e.onOpenChange(a)},onSelectDocuments:async a=>{n(a),await e.onSelectDocuments?.(a)},onSelect:async a=>{await e.onSelect?.(a),i(!1)}})]})}const ye={title:"Patterns/Document Picker",component:D,tags:["autodocs"],args:{open:!1,action:"link",title:"Choose from Documents",isLoading:!1,scope:"all-accessible",onOpenChange:h(),onSelect:h(),onSelectDocuments:h()},argTypes:{open:{control:"boolean"},action:{control:"inline-radio",options:["link","add"]},title:{control:"text"},selectLabel:{control:"text"},isLoading:{control:"boolean"},initialSelected:{control:"object"},scope:{control:!1},scopeProjectId:{control:!1},getDisabledReason:{control:!1},onOpenChange:{control:!1},onSelect:{control:!1},onSelectDocuments:{control:!1}},parameters:{msw:{handlers:x},docs:{description:{component:"The real shared DocumentPickerModal, including its trailing plus/check row treatment. It is not replaced with a leading-checkbox list. open/onOpenChange control the dialog; initialSelected initializes its draft each time it opens; onSelectDocuments receives full DocumentOption objects then onSelect receives numeric IDs. These callbacks can be async; the host owns saving/loading/closure. action only switches add/link wording. title/selectLabel override labels, isLoading locks confirmation, and getDisabledReason disables a row with an explanation. Search retains its 300ms debounce; tag/date filtering, selection across searches and the existing paginated API remain intact. The story mocks document/tag REST responses and commits local output only. scope/current-project and scopeProjectId belong to the actual API but the cross-service project roll-up is not simulated by this all-accessible fixture. Preselected/disabled/submitting examples preserve existing selection semantics. Network error is represented explicitly."}}},render:e=>l.jsx(k,{...e})},d={},p={args:{action:"add",open:!1}},m={args:{open:!1,initialSelected:[v],getDisabledReason:e=>e.id===3?"Already attached":void 0}},u={args:{open:!1,initialSelected:[v],isLoading:!0}},g={args:{open:!1},parameters:{msw:{handlers:[w.get(B,()=>b.json({detail:"Illustrative service unavailable"},{status:503})),x[1]]}},play:async({canvasElement:e})=>{await r.click(c(e).getByRole("button",{name:"Choose documents"}));const t=c(await c(document.body).findByRole("dialog",{name:"Choose from Documents"}));await s(await t.findByRole("alert")).toHaveTextContent("Failed to load documents"),await s(t.getByRole("button",{name:/Link.*documents/})).toBeDisabled(),await s(t.queryByRole("button",{name:/Target specification.pdf/})).toBeNull()}},f={play:async({canvasElement:e,args:t})=>{const i=c(e);await r.click(i.getByRole("button",{name:"Choose documents"}));const o=c(await c(document.body).findByRole("dialog",{name:"Choose from Documents"})),n=await o.findByRole("button",{name:/Target specification.pdf/});await r.click(n),await s(c(n).queryByRole("checkbox")).not.toBeInTheDocument(),await s(n.querySelector(".lucide-check")).not.toBeNull(),await r.type(o.getByPlaceholderText("Search documents..."),"Supplier");const a=await o.findByRole("button",{name:/Supplier certificate.pdf/});await r.click(a),await r.click(o.getByRole("button",{name:"Link 2 documents"})),await s(t.onSelect).toHaveBeenCalledWith([1,2]),await s(i.getByText(/Selected locally: Target specification.pdf, Supplier certificate.pdf/)).toBeVisible(),await s(c(document.body).queryByRole("dialog")).not.toBeInTheDocument()}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    action: "add",
    open: false
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    initialSelected: [initialDocument],
    getDisabledReason: document => document.id === 3 ? "Already attached" : undefined
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    initialSelected: [initialDocument],
    isLoading: true
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    open: false
  },
  parameters: {
    msw: {
      handlers: [http.get(DOCUMENTS, () => HttpResponse.json({
        detail: "Illustrative service unavailable"
      }, {
        status: 503
      })), handlers[1]]
    }
  },
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: "Choose documents"
    }));
    const dialog = within(await within(document.body).findByRole("dialog", {
      name: "Choose from Documents"
    }));
    // Wait for the real asynchronous failure before this story can unmount.
    await expect(await dialog.findByRole("alert")).toHaveTextContent("Failed to load documents");
    await expect(dialog.getByRole("button", {
      name: /Link.*documents/
    })).toBeDisabled();
    await expect(dialog.queryByRole("button", {
      name: /Target specification.pdf/
    })).toBeNull();
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Choose documents"
    }));
    const dialog = within(await within(document.body).findByRole("dialog", {
      name: "Choose from Documents"
    }));
    const first = await dialog.findByRole("button", {
      name: /Target specification.pdf/
    });
    await userEvent.click(first);
    await expect(within(first).queryByRole("checkbox")).not.toBeInTheDocument();
    await expect(first.querySelector(".lucide-check")).not.toBeNull();
    await userEvent.type(dialog.getByPlaceholderText("Search documents..."), "Supplier");
    const second = await dialog.findByRole("button", {
      name: /Supplier certificate.pdf/
    });
    await userEvent.click(second);
    await userEvent.click(dialog.getByRole("button", {
      name: "Link 2 documents"
    }));
    await expect(args.onSelect).toHaveBeenCalledWith([1, 2]);
    await expect(canvas.getByText(/Selected locally: Target specification.pdf, Supplier certificate.pdf/)).toBeVisible();
    await expect(within(document.body).queryByRole("dialog")).not.toBeInTheDocument();
  }
}`,...f.parameters?.docs?.source}}};const he=["Playground","AddToMessage","PreselectedAndDisabled","Submitting","LoadError","SelectAcrossSearch"];export{p as AddToMessage,g as LoadError,d as Playground,m as PreselectedAndDisabled,f as SelectAcrossSearch,u as Submitting,he as __namedExportsOrder,ye as default};
