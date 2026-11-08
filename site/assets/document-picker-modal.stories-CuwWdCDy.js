import{j as l,h as w,H as b,r as y}from"./iframe-nhB53rPD.js";/* empty css                      */import{B as R}from"./button-_tcBhp5_.js";import{D as B,b as T}from"./apiUrl-CtX1NveE.js";import{D}from"./document-picker-modal-DMkvXRN_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8Dbc_Jva.js";import"./loader-circle-MxHlgpxw.js";import"./index.es-RINfVGjB.js";import"./calendar-CXIh8-zC.js";import"./chevron-right-CavErG_J.js";import"./chevron-left-Dcrje28Y.js";import"./dialog-CyBaw9zK.js";import"./overlay-dialog-Co5KED9w.js";import"./input-CAdeD_xm.js";import"./restApiClient-aCt3el8Z.js";import"./request-CGJ4zixB.js";import"./trackPosthogEvent-Zud5gl49.js";import"./server-side-faceted-filter-YdvnQWig.js";import"./index.module-B262ysEo.js";import"./checkbox-C9bOlqce.js";import"./minus-XaXcKlev.js";import"./useAriaLabelledBy-D8Oa7trO.js";import"./separator-Dmg9cS_7.js";import"./Separator-RhxJSB-Q.js";import"./badge-DF9-aVgV.js";import"./faceted-filter-DsbKsO0z.js";import"./accordion-CHExsbqI.js";import"./roving-focus-0SK5-Aqb.js";import"./useCollapsiblePanel-DVMF6qnG.js";import"./circle-x-DQ_R-m_A.js";import"./circle-plus-sVp6LW1G.js";import"./DocumentTypeBadge-D--WNEAF.js";import"./fetchTagPage-BJbzY8Yf.js";import"./documentAssociationsApi-olAA_4ch.js";import"./jsonApiHandler-C4BMoVsw.js";import"./Documents.types-DFMEX-rs.js";import"./calendar-days-DiQO0_Qh.js";import"./plus-0cDzJ2QO.js";const{expect:s,fn:h,userEvent:r,within:c}=__STORYBOOK_MODULE_TEST__,S=["Target specification.pdf","Supplier certificate.pdf","Archived note.txt"].map((e,t)=>({id:t+1,name:e,display_name:null,content_type:t===2?"text/plain":"application/pdf",size_bytes:4096*(t+1),status:"available",container_name:"storybook",canonical_blob_path:e,entities:["generic"],ingredient_ids:[],tags:t===0?["quality"]:[],document_types:{},created_at:"2026-10-20T09:00:00Z",created_by:"story-user",updated_at:"2026-10-20T09:00:00Z"})),v={id:1,name:S[0].name,displayName:null,contentType:"application/pdf",sizeBytes:4096,createdAt:S[0].created_at,tags:["quality"]},x=[w.get(B,({request:e})=>{const t=new URL(e.url).searchParams,i=(t.get("name")??"").toLowerCase(),o=S.filter(n=>n.name.toLowerCase().includes(i)&&(!t.has("tag_ids")||n.tags.includes("quality"))&&(!t.has("created_after")||new Date(n.created_at)>=new Date(t.get("created_after")??""))&&(!t.has("created_before")||new Date(n.created_at)<=new Date(t.get("created_before")??"")));return b.json({data:o,pagination:{page:1,size:30,total_count:o.length,total_pages:1}})}),w.get(T,()=>b.json({data:[{id:7,name:"quality"}],pagination:{page:1,size:50,total_count:1,total_pages:1}}))];function k(e){const[t,i]=y.useState(e.open),[o,n]=y.useState([]);return y.useEffect(()=>i(e.open),[e.open]),l.jsxs("div",{className:"pf-story-grid",children:[l.jsx(R,{onClick:()=>i(!0),children:"Choose documents"}),l.jsx("output",{"aria-live":"polite",children:o.length?`Selected locally: ${o.map(a=>a.name).join(", ")}`:"No documents committed."}),l.jsx(D,{...e,open:t,onOpenChange:a=>{i(a),e.onOpenChange(a)},onSelectDocuments:async a=>{n(a),await e.onSelectDocuments?.(a)},onSelect:async a=>{await e.onSelect?.(a),i(!1)}})]})}const ue={title:"Patterns/Document Picker",component:D,tags:["autodocs"],args:{open:!1,action:"link",title:"Choose from Documents",isLoading:!1,scope:"all-accessible",onOpenChange:h(),onSelect:h(),onSelectDocuments:h()},argTypes:{open:{control:"boolean"},action:{control:"inline-radio",options:["link","add"]},title:{control:"text"},selectLabel:{control:"text"},isLoading:{control:"boolean"},initialSelected:{control:"object"},scope:{control:!1},scopeProjectId:{control:!1},getDisabledReason:{control:!1},onOpenChange:{control:!1},onSelect:{control:!1},onSelectDocuments:{control:!1}},parameters:{msw:{handlers:x},docs:{description:{component:"The real shared DocumentPickerModal, including its trailing plus/check row treatment. It is not replaced with a leading-checkbox list. open/onOpenChange control the dialog; initialSelected initializes its draft each time it opens; onSelectDocuments receives full DocumentOption objects then onSelect receives numeric IDs. These callbacks can be async; the host owns saving/loading/closure. action only switches add/link wording. title/selectLabel override labels, isLoading locks confirmation, and getDisabledReason disables a row with an explanation. Search retains its 300ms debounce; tag/date filtering, selection across searches and the existing paginated API remain intact. The story mocks document/tag REST responses and commits local output only. scope/current-project and scopeProjectId belong to the actual API but the cross-service project roll-up is not simulated by this all-accessible fixture. Preselected/disabled/submitting examples preserve existing selection semantics. Network error is represented explicitly."}}},render:e=>l.jsx(k,{...e})},d={},p={args:{action:"add",open:!1}},m={args:{open:!1,initialSelected:[v],getDisabledReason:e=>e.id===3?"Already attached":void 0}},u={args:{open:!1,initialSelected:[v],isLoading:!0}},g={args:{open:!1},parameters:{msw:{handlers:[w.get(B,()=>b.json({detail:"Illustrative service unavailable"},{status:503})),x[1]]}},play:async({canvasElement:e})=>{await r.click(c(e).getByRole("button",{name:"Choose documents"}));const t=c(await c(document.body).findByRole("dialog",{name:"Choose from Documents"}));await s(await t.findByRole("alert")).toHaveTextContent("Failed to load documents"),await s(t.getByRole("button",{name:/Link.*documents/})).toBeDisabled(),await s(t.queryByRole("button",{name:/Target specification.pdf/})).toBeNull()}},f={play:async({canvasElement:e,args:t})=>{const i=c(e);await r.click(i.getByRole("button",{name:"Choose documents"}));const o=c(await c(document.body).findByRole("dialog",{name:"Choose from Documents"})),n=await o.findByRole("button",{name:/Target specification.pdf/});await r.click(n),await s(c(n).queryByRole("checkbox")).not.toBeInTheDocument(),await s(n.querySelector(".lucide-check")).not.toBeNull(),await r.type(o.getByPlaceholderText("Search documents..."),"Supplier");const a=await o.findByRole("button",{name:/Supplier certificate.pdf/});await r.click(a),await r.click(o.getByRole("button",{name:"Link 2 documents"})),await s(t.onSelect).toHaveBeenCalledWith([1,2]),await s(i.getByText(/Selected locally: Target specification.pdf, Supplier certificate.pdf/)).toBeVisible(),await s(c(document.body).queryByRole("dialog")).not.toBeInTheDocument()}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const ge=["Playground","AddToMessage","PreselectedAndDisabled","Submitting","LoadError","SelectAcrossSearch"];export{p as AddToMessage,g as LoadError,d as Playground,m as PreselectedAndDisabled,f as SelectAcrossSearch,u as Submitting,ge as __namedExportsOrder,ue as default};
