import{r as n,j as c,cr as U,ju as ie,jv as H,f7 as ke,a4 as K,u as se,a as T,jw as be,aI as Ie,dc as qe,jx as Se,jy as _e,jz as xe,h7 as ee,jA as D,jB as ne,a3 as P,f1 as Te,cS as Ce,jC as Re,ex as Ee,M as Me,g as te,fa as Ae,jD as re,jE as ae,f5 as Fe,T as je,ft as Le}from"./iframe-6uZ_OvXJ.js";import{u as V,C as Ne,a as Pe,S as Be}from"./scroll-button-DERK4iaj.js";import{M as Ge}from"./message-with-markdown-CHmGhMCx.js";import{u as ze}from"./response-stream-CM0NBABd.js";import{t as $,b as We}from"./trackPosthogEvent-fthYs4K3.js";import{Q as De}from"./QueryNavigator-b9_oEew2.js";import{u as Oe}from"./use-current-formula-project-QSi-_W8m.js";import{s as O,u as Qe}from"./use-ai-assistant-helpers-D5oKwwJi.js";import{g as Ue}from"./newestProposal-MNNSIW-a.js";import{b as $e,T as He}from"./loaders-BFkPE3wf.js";import{u as Ke}from"./use-current-module-CXq7_1uF.js";import{M as Ve}from"./MessageSelectionToolbar-udzTtLRz.js";import{A as Ye,U as Ze}from"./AssistantMessage-Bs42Qd_w.js";import{B as Xe}from"./button-A8HzViyP.js";import{s as le,b as oe,h as Je,i as en,j as nn,e as tn,k as rn}from"./aiAssistant.selectors-CM8XrDL2.js";const an=U["--group-conversation-pf-query-scroll-clearance"],sn=.33,ln=800,on=ie["--group-conversation-pf-query-highlight-hold"],un=ie["--group-conversation-pf-query-highlight-cleanup"],Q=["pf-ai-query-highlight__radius","pf-ai-query-highlight__transition","pf-ai-query-highlight__duration"];function dn(e,r){let t=!1;const s=()=>{t||(t=!0,e.removeEventListener("scrollend",s),window.clearTimeout(d),r())},d=window.setTimeout(s,ln);e.addEventListener("scrollend",s,{once:!0})}function ue({items:e,scope:r,userRequestedFollowRef:t}){const{scrollRef:s,stopScroll:d}=V(),i=n.useRef([]),g=n.useRef(null),[m,l]=n.useState(null);n.useEffect(()=>()=>{i.current.forEach(o=>window.clearTimeout(o))},[]),n.useEffect(()=>{const o=s.current;if(!o)return;const y=()=>{const A=o.querySelectorAll("[data-user-query-index]");if(!A.length){l(null);return}const S=o.getBoundingClientRect().top+o.clientHeight*sn;let F=0;A.forEach(j=>{j.getBoundingClientRect().top<=S&&(F=Number(j.dataset.userQueryIndex))}),l(F)};let a=0;const C=()=>{a||(a=window.requestAnimationFrame(()=>{a=0,y()}))};return y(),o.addEventListener("scroll",C,{passive:!0}),()=>{o.removeEventListener("scroll",C),a&&window.cancelAnimationFrame(a)}},[s,e.length]);const k=o=>{i.current.forEach(y=>window.clearTimeout(y)),g.current?.classList.remove("pf-ai-query-highlight__active",...Q),g.current=o,o.classList.add(...Q,"pf-ai-query-highlight__active"),i.current=[window.setTimeout(()=>o.classList.remove("pf-ai-query-highlight__active"),on),window.setTimeout(()=>{o.classList.remove(...Q),g.current=null},un)]},M=o=>{const y=s.current,a=y?.querySelector(`[data-user-query-index="${o}"]`);if(!y||!a)return;t.current=!1,d();const C=a.getBoundingClientRect().top-y.getBoundingClientRect().top+y.scrollTop-an;y.scrollTo({top:Math.max(C,0),behavior:"smooth"}),dn(y,()=>k(a)),$("proxy_chat_query_navigator_jumped",{scope:r,target_index:o,query_count:e.length})},q=o=>{o&&$("proxy_chat_query_navigator_opened",{scope:r,query_count:e.length})};return c.jsx(De,{items:e,onSelect:M,activeIndex:m,onOpenChange:q})}ue.__docgenInfo={description:`Bridges the pure QueryNavigator to the chat's stick-to-bottom scroll
context. Must be rendered inside ChatContainerRoot.`,methods:[],displayName:"QueryNavigatorController",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** Message id when present, otherwise a positional fallback. React key only. */
  key: string;
  /** Full query text; rendered single-line with CSS truncation. */
  text: string;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0},description:"Message id when present, otherwise a positional fallback. React key only."},{key:"text",value:{name:"string",required:!0},description:"Full query text; rendered single-line with CSS truncation."}]}}],raw:"QueryNavigatorItem[]"},description:""},scope:{required:!0,tsType:{name:"union",raw:"WebSocketScope | null",elements:[{name:"z.infer",elements:[{name:"WebSocketScopeSchema"}],raw:"z.infer<typeof WebSocketScopeSchema>"},{name:"null"}]},description:""},userRequestedFollowRef:{required:!0,tsType:{name:"ReactRefObject",raw:"React.RefObject<boolean>",elements:[{name:"boolean"}]},description:""}}};const cn=2;function mn(e){return e.role==="user"&&!!e.content}function fn(e){return e.filter(mn).map((r,t)=>({key:r.id??`q-${t}`,text:H(r.content??"")}))}const gn=1e3;function pn(e,r){const t=ke(e),[s,d]=n.useState(()=>O()),i=t!==null&&r;return n.useEffect(()=>{if(!i)return;d(O());const g=setInterval(()=>d(O()),gn);return()=>clearInterval(g)},[i,t]),t===null?null:Math.max(0,s-t)}function hn(e,r){const[t,s]=n.useState(null),d=n.useCallback(()=>s(null),[]);return n.useEffect(()=>{if(r){s(null);return}const i=()=>{const l=window.getSelection(),k=l?.toString()??"";if(!k.trim()||!l?.anchorNode)return;if(!(l.anchorNode.nodeType===Node.TEXT_NODE?l.anchorNode.parentElement:l.anchorNode)?.closest(e)){s(null);return}const o=l.getRangeAt(0).getBoundingClientRect();o.width!==0&&s({text:k,rect:o})},g=l=>{l.key==="Escape"&&s(null)},m=()=>{window.getSelection()?.toString().trim()||s(null)};return document.addEventListener("mouseup",i),document.addEventListener("keydown",g),document.addEventListener("selectionchange",m),()=>{document.removeEventListener("mouseup",i),document.removeEventListener("keydown",g),document.removeEventListener("selectionchange",m)}},[r,e]),[t,d]}function yn({messageHistory:e,lastMessage:r,lastAssistantMessage:t,displayedText:s,isComplete:d,conversationId:i,showLlmGeneratedFormula:g}){const m=n.useRef(null),l=n.useRef(null),[k,M]=n.useState(0),[q,o]=n.useState(!1),[y,a]=n.useState(!1),C=n.useRef(!1),A=n.useCallback(v=>{o(!v.isAtBottom)},[]);n.useEffect(()=>{if(m.current&&!t?.loadedFromHistory){const v=m.current.getBoundingClientRect().height;M(v)}r?.role==="user"&&M(0)},[s,d,t?.loadedFromHistory,t?.id,r]),n.useEffect(()=>{r?.role==="user"&&l.current&&l.current.scrollToBottom()},[r?.id,r?.role]);const S=n.useRef(0);n.useEffect(()=>{const v=e.length,R=S.current===0&&v>0,L=v-S.current>1;(R||L)&&l.current&&setTimeout(()=>{l.current?.scrollToBottom()},100),S.current=v},[e.length]);const F=n.useRef(void 0);n.useEffect(()=>{i&&F.current!==i&&l.current&&setTimeout(()=>{l.current?.scrollToBottom()},100),F.current=i},[i]),n.useEffect(()=>{e.length>0&&l.current&&setTimeout(()=>{l.current?.scrollToBottom()},150)},[]);const j=n.useRef(g);n.useEffect(()=>{j.current===!0&&g===!1&&l.current&&setTimeout(()=>{l.current?.scrollToBottom()},200),j.current=g},[g]),n.useEffect(()=>{const v=r?.role==="assistant",R=!d&&!t?.loadedFromHistory,L=v&&R;a(L),L&&(C.current=!1)},[r?.role,d,t?.loadedFromHistory]);const N=n.useMemo(()=>{const v=window.innerHeight;if(!t?.loadedFromHistory){const R=v-(U["--group-conversation-pf-chat-viewport-clearance"]+k);return R<U["--group-conversation-pf-chat-padding-threshold"]?"var(--group-conversation-pf-chat-padding-minimum)":`${R}px`}return"var(--group-conversation-pf-chat-padding-minimum)"},[t?.loadedFromHistory,k]);return{lastMessageRef:m,scrollButtonRef:l,showScrollButton:q,isModelResponding:y,userRequestedFollowRef:C,handleScrollStateChange:A,dynamicPaddingBottom:N}}function de({messageHistory:e,showScrollButton:r}){const{t}=K("assistant"),s=se(),d=T(le),i=T(oe);return e.length===0||i[d]?.loadAllMessages||i[d]?.messageHistory.length<20||!r?null:c.jsx("div",{className:"pf-ai-thread-jump__root",children:c.jsx(Xe,{variant:"outline",size:"sm",className:"pf-ai-thread-jump__button",onClick:()=>s(be({scope:d,loadAllMessages:!0})),children:t("chat.loadAllMessages")})})}de.__docgenInfo={description:"",methods:[],displayName:"ChatScrollButton",props:{messageHistory:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  role: "user" | "assistant";
  content: string;
  timestamp?: string;
  context?: Record<string, unknown>;
  attachedContent?: ChatAttachment[];
  data?: WebSocketMessageIncoming["data"];
  id?: string;
  loadedFromHistory?: boolean;
  scope?: WebSocketScope;
  isCancelled?: boolean;
  meta?: {
    attempt?: number | null;
    formulaModifications?: Record<string, unknown> | null;
    excludedIngredients?: Record<string, unknown>[] | null;
    maxAttempts?: number | null;
    llmGeneratedFormulaId?: string | null;
    ideaId?: string | null;
    llmGeneratedIdeaId?: string | null;
    userIdeaId?: string | null;
    interactionId?: string | null;
    relatedEntityId?: string | null;
    clarificationQuestions?: (Record<string, unknown> | string)[] | null;
    durationMs?: number | null;
  };
}`,signature:{properties:[{key:"role",value:{name:"union",raw:'"user" | "assistant"',elements:[{name:"literal",value:'"user"'},{name:"literal",value:'"assistant"'}],required:!0}},{key:"content",value:{name:"string",required:!0}},{key:"timestamp",value:{name:"string",required:!1}},{key:"context",value:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>",required:!1}},{key:"attachedContent",value:{name:"Array",elements:[{name:"union",raw:`| Partial<File & { id: string }>
| (Partial<ReferenceEntity> & { noteFileBytes?: number })
| Partial<ContextOption>
| UploadedFileAttachment`,elements:[{name:"Partial",elements:[{name:"intersection",raw:"File & { id: string }",elements:[{name:"File"},{name:"signature",type:"object",raw:"{ id: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}}]}],raw:"Partial<File & { id: string }>"},{name:"unknown"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  optionType?: "select";
  name: string;
  label?: string;
  description?: string;
  values: Array<{ value: string; label: string }>;
  scope?: WebSocketScope;
  id?: string;
  type?: "region" | "productCategory" | "quickFeedback" | string;
  allowEmpty?: boolean;
  allowMultiple?: boolean;
  allowMultipleLimit?: number | null;
}`,signature:{properties:[{key:"optionType",value:{name:"literal",value:'"select"',required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"values",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"Array<{ value: string; label: string }>",required:!0}},{key:"scope",value:{name:"z.infer",elements:[{name:"WebSocketScopeSchema"}],raw:"z.infer<typeof WebSocketScopeSchema>",required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:'"region" | "productCategory" | "quickFeedback" | string',elements:[{name:"literal",value:'"region"'},{name:"literal",value:'"productCategory"'},{name:"literal",value:'"quickFeedback"'},{name:"string"}],required:!1}},{key:"allowEmpty",value:{name:"boolean",required:!1}},{key:"allowMultiple",value:{name:"boolean",required:!1}},{key:"allowMultipleLimit",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}}]}}],raw:"Partial<ContextOption>"},{name:"signature",type:"object",raw:`{
  attachmentKind: "uploaded_file";
  id: string;
  fileName: string;
  fileExtension: string;
  /**
   * Set once the upload-session flow resolves to \`status: "available"\`, or
   * populated directly when this attachment backs an existing library
   * document selected from Documents. Sent as \`documentId\` in
   * create_interaction.
   */
  documentId?: number;
  /** Set on attachments read back from an interaction; previews the file as it was when sent. */
  snapshotId?: string;
  status: ChatAttachmentUploadStatus;
  /** The library document that already has this file's name, while status is "name_conflict". */
  existingDocumentId?: number;
  /** That library document's own size and type, so using it attaches what it really is, not the picked file. */
  existingSizeBytes?: number;
  existingMimeType?: string;
  /** 0-100 blob PUT progress; meaningful only while status is "uploading". */
  uploadProgress?: number;
  /** Populated when status is "quarantined" or "error" — the backend's failure_reason (free text). */
  errorMessage?: string;
  sizeBytes: number;
  mimeType?: string;
  // Other ChatAttachment arms expose optional name/type and many consumers read
  // them across the whole union without narrowing; declaring them here keeps that
  // access valid. They stay undefined for uploaded files.
  name?: string;
  type?: string;
}`,signature:{properties:[{key:"attachmentKind",value:{name:"literal",value:'"uploaded_file"',required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"fileName",value:{name:"string",required:!0}},{key:"fileExtension",value:{name:"string",required:!0}},{key:"documentId",value:{name:"number",required:!1},description:'Set once the upload-session flow resolves to `status: "available"`, or\npopulated directly when this attachment backs an existing library\ndocument selected from Documents. Sent as `documentId` in\ncreate_interaction.'},{key:"snapshotId",value:{name:"string",required:!1},description:"Set on attachments read back from an interaction; previews the file as it was when sent."},{key:"status",value:{name:"union",raw:`| "uploading"
| "scanning"
| "available"
| "quarantined"
| "error"
/** The library already holds a document with this file's name; the user picks what to do. */
| "name_conflict"`,elements:[{name:"literal",value:'"uploading"'},{name:"literal",value:'"scanning"'},{name:"literal",value:'"available"'},{name:"literal",value:'"quarantined"'},{name:"literal",value:'"error"'},{name:"literal",value:'"name_conflict"'}],required:!0}},{key:"existingDocumentId",value:{name:"number",required:!1},description:`The library document that already has this file's name, while status is "name_conflict".`},{key:"existingSizeBytes",value:{name:"number",required:!1},description:"That library document's own size and type, so using it attaches what it really is, not the picked file."},{key:"existingMimeType",value:{name:"string",required:!1}},{key:"uploadProgress",value:{name:"number",required:!1},description:'0-100 blob PUT progress; meaningful only while status is "uploading".'},{key:"errorMessage",value:{name:"string",required:!1},description:`Populated when status is "quarantined" or "error" — the backend's failure_reason (free text).`},{key:"sizeBytes",value:{name:"number",required:!0}},{key:"mimeType",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!1}}]}}]}],raw:"ChatAttachment[]",required:!1}},{key:"data",value:{name:'z.infer["data"]',raw:'WebSocketMessageIncoming["data"]',required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"loadedFromHistory",value:{name:"boolean",required:!1}},{key:"scope",value:{name:"z.infer",elements:[{name:"WebSocketScopeSchema"}],raw:"z.infer<typeof WebSocketScopeSchema>",required:!1}},{key:"isCancelled",value:{name:"boolean",required:!1}},{key:"meta",value:{name:"signature",type:"object",raw:`{
  attempt?: number | null;
  formulaModifications?: Record<string, unknown> | null;
  excludedIngredients?: Record<string, unknown>[] | null;
  maxAttempts?: number | null;
  llmGeneratedFormulaId?: string | null;
  ideaId?: string | null;
  llmGeneratedIdeaId?: string | null;
  userIdeaId?: string | null;
  interactionId?: string | null;
  relatedEntityId?: string | null;
  clarificationQuestions?: (Record<string, unknown> | string)[] | null;
  durationMs?: number | null;
}`,signature:{properties:[{key:"attempt",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}},{key:"formulaModifications",value:{name:"union",raw:"Record<string, unknown> | null",elements:[{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},{name:"null"}],required:!1}},{key:"excludedIngredients",value:{name:"union",raw:"Record<string, unknown>[] | null",elements:[{name:"Array",elements:[{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"}],raw:"Record<string, unknown>[]"},{name:"null"}],required:!1}},{key:"maxAttempts",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}},{key:"llmGeneratedFormulaId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"ideaId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"llmGeneratedIdeaId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"userIdeaId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"interactionId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"relatedEntityId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"clarificationQuestions",value:{name:"union",raw:"(Record<string, unknown> | string)[] | null",elements:[{name:"Array",elements:[{name:"unknown"}],raw:"(Record<string, unknown> | string)[]"},{name:"null"}],required:!1}},{key:"durationMs",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}}]},required:!1}}]}}],raw:"MessageHistoryItem[]"},description:""},showScrollButton:{required:!0,tsType:{name:"boolean"},description:""}}};function vn({onScrollStateChange:e}){const{isAtBottom:r,escapedFromLock:t}=V();return n.useEffect(()=>{e({isAtBottom:r,escapedFromLock:t})},[r,t,e]),null}function wn({isModelResponding:e,userRequestedFollowRef:r}){const{stopScroll:t,escapedFromLock:s}=V();return n.useEffect(()=>{if(e){r.current||t();const d=setInterval(()=>{r.current||t()},16);return()=>{clearInterval(d)}}},[e,t,r]),n.useEffect(()=>{e&&s&&r.current&&(r.current=!1)},[e,s,r]),null}function kn({startedAt:e}){const{t:r}=K(["assistant","common"]),t=pn(e,!0);return c.jsxs("div",{className:"pf-ai-thread__thinking",children:[c.jsx($e,{size:"md",className:"pf-ai-thread__thinking-dot"}),c.jsx(He,{size:"md",className:"pf-ai-thread__thinking-label",text:t===null?void 0:r("chat.thinkingWithElapsed",{elapsed:Le(t),label:r("common:loaders.thinking")})})]})}function bn(e,r){const t=e[0];if(!t||t.role!=="assistant"||!r)return;const s=r.indexOf(t),d=s>0?r[s-1]:void 0;return d?.role==="user"&&d.content?H(d.content):void 0}function In({messageHistory:e,className:r,onFollowUpClick:t,afterMessages:s}){const{t:d}=K("assistant"),i=T(le),g=T(oe),{formula:m,llmGeneratedFormulaLoading:l}=T(Ie),k=T(Je),M=k?.llmGeneratedFormula,q=T(en),o=T(nn),{selectedIdea:y}=T(qe),a=se(),C=Ke(),A=T(tn),S=i?A[i]?.id:void 0,F=i?A[i]?.title||g[i]?.title:void 0,j=i?A[i]?.relatedEntityId:void 0,N=i?g[i]?.messageHistory:void 0,v=Oe();n.useEffect(()=>()=>{a(Se()),a(_e())},[a]),n.useEffect(()=>{S&&a(xe({conversationId:S}))},[S,a]);const{isConversationReadyForInteraction:R}=Qe(),L=n.useRef(null),b=n.useMemo(()=>e.slice().reverse().find(u=>u.role==="assistant"),[e]),ce=n.useMemo(()=>e[e.length-1],[e]),Y=n.useMemo(()=>fn(e),[e]),{displayedText:B,isComplete:G}=ze({textStream:!b?.loadedFromHistory&&b?.content?b?.content:"",mode:"typewriter",characterChunkSize:15}),{lastMessageRef:me,scrollButtonRef:fe,showScrollButton:ge,isModelResponding:Z,userRequestedFollowRef:z,handleScrollStateChange:pe,dynamicPaddingBottom:he}=yn({messageHistory:e,lastMessage:ce,lastAssistantMessage:b,displayedText:B,isComplete:G,conversationId:S,showLlmGeneratedFormula:q}),[W,X]=hn("[data-assistant-message]",Z),_=n.useRef(new Set),ye=n.useMemo(()=>!R(i),[i,R]),ve=T(rn(i)),J=n.useCallback((u,p)=>{if(q){a(ee(!1));return}a(D(u)),m?.id&&a(ne({llmFormulaId:+u,userFormulaId:+m.id,interactionId:p??""})),a(ee(!0))},[a,m?.id,q]);n.useEffect(()=>{if(!m?.id)return;let u=!1;const p=e.find(h=>h.meta?.relatedEntityId&&h.meta.relatedEntityId!==m?.id&&h.scope===P.enum.recipe_formulation_advisor);if(!p)return;const f=`${p.meta?.relatedEntityId}-${m?.id}`;if(L.current!==f)return(async()=>{try{const h=i||P.enum.recipe_formulation_advisor;a(Te({scope:h}));const I=await Ce(Re,a,{scope:h,relatedEntityType:"formula",relatedEntityId:m?.id,page:1,size:1});if(u)return;a(Ee({conversationHistoryItem:I?.[0]||null,navigate:()=>{},match:C})),L.current=f}catch(h){Me.error("Failed to reload conversation after entity mismatch",h)}})(),()=>{u=!0}},[e,m?.id,a,C,i]);const we=n.useMemo(()=>{let u=-1,p=bn(e,N);return e.map((f,h)=>{if(!f.content)return null;const I=f.role==="assistant";I||(u+=1,p=H(f.content));const w=I&&f.id!==null&&f.id===b?.id;return c.jsx(Ge,{className:te(f.role==="user"?"pf-ai-thread__turn-user":"pf-ai-thread__turn-assistant"),children:c.jsx("div",{className:"pf-ai-thread__turn-content",children:I?c.jsx(Ye,{message:f,lastAssistantMessage:w?b:void 0,displayedText:w?B:"",lastMessageRef:me,llmGeneratedIdea:o,selectedIdea:y,assistantScope:i,onFollowUpClick:t,isStreamingComplete:w?G:!0,llmGeneratedFormula:M,showLlmGeneratedFormula:q,onPreviewRecipe:J,conversationTitle:F,conversationId:S,userQuery:p,relatedEntityId:j,currentFormulaProject:v}):c.jsx(Ze,{message:f,messageIndex:h,queryIndex:u})})},`${f.id?.toString()}-${f.role}-${h?.toString()}`)})},[e,N,b,B,o,y,F,S,j,v,i,t,G,M,q,J]);return n.useEffect(()=>{const u=b?.data?.timestamp;if(!u)return;const p=u.includes("Z")?u:`${u}Z`,f=new Date(p);if(new Date().getTime()-f.getTime()<1e4){for(let I=e.length-1;I>=0;I--){const w=e[I];if(w.role!=="assistant")continue;const x=w.meta?.llmGeneratedFormulaId;if(typeof x=="string"&&w.meta?.interactionId===k?.interaction.id&&k?.interaction.attributes.status==="completed"&&k?.interaction.shouldAutoOpenDiffMode&&!_.current.has(`diff-${x}`)){_.current.add(`diff-${x}`),a(D(x));const E=w.meta?.interactionId;typeof E=="string"&&m?.id&&(a(ne({llmFormulaId:+x,userFormulaId:+m.id,interactionId:E})),$("proxy_formulation_agent_proposal_compared",{...We(m.id),formula_id:String(m.id),llm_generated_formula_id:String(x),interaction_id:E,scope:w.scope,comparison_type:"proposed_vs_current",trigger:"auto"})),a(Ae(!1));break}}for(let I=e.length-1;I>=0;I--){const w=e[I];if(w.role!=="assistant")continue;const x=w.meta?.llmGeneratedIdeaId,E=w.meta?.userIdeaId;if(w.scope===P.enum.ideas_generation_agent&&(typeof x=="string"||typeof E=="string")&&!_.current.has(`idea-${x||E}`)){_.current.add(`idea-${x||E}`),typeof E=="string"?a(re(E)):typeof x=="string"&&(a(ae(x)),a(Fe(!0)));break}}}},[e,b,k,m?.id,a]),n.useEffect(()=>{e.length>0||_.current.forEach(u=>{u.startsWith("history-")&&_.current.delete(u)})},[e.length]),n.useEffect(()=>{if(!b?.loadedFromHistory||e.length===0)return;const u=Ue(e);if(!u)return;const p=`history-formula-${u}`;_.current.has(p)||q||l||(_.current.add(p),a(D({llmFormulaId:u,autoShowPreview:!1})))},[e,b?.loadedFromHistory,q,l,a]),n.useEffect(()=>{if(b?.loadedFromHistory&&e.length!==0)for(let u=e.length-1;u>=0;u--){const p=e[u];if(p.role!=="assistant"||p.scope!==P.enum.ideas_generation_agent)continue;const f=p.meta?.llmGeneratedIdeaId,h=p.meta?.userIdeaId;if(typeof h=="string"&&!_.current.has(`history-idea-${h}`)){_.current.add(`history-idea-${h}`),a(re(h));break}if(typeof f=="string"&&!_.current.has(`history-idea-${f}`)){_.current.add(`history-idea-${f}`),a(ae(f));break}}},[e,b?.loadedFromHistory,a]),c.jsx("div",{className:"pf-ai-thread__root",children:c.jsxs(Ne,{className:"pf-ai-thread__scroll",children:[c.jsxs(Pe,{className:te("pf-ai-thread__content",r),style:{paddingBottom:he},children:[e.length>0?we:c.jsx(je,{variant:"body-compact",className:"pf-ai-thread__empty",children:d("chat.noMessages")}),s,ye&&!g[i]?.error&&c.jsx(kn,{startedAt:ve})]}),c.jsx("div",{className:"pf-ai-thread__follow",onClick:()=>{z.current=!0},children:c.jsx(Be,{ref:fe,className:"pf-ai-thread__follow-button"})}),c.jsx(de,{messageHistory:e,showScrollButton:ge}),c.jsx(vn,{onScrollStateChange:pe}),c.jsx(wn,{isModelResponding:Z,userRequestedFollowRef:z}),Y.length>=cn&&c.jsx("div",{className:"pf-ai-thread__navigator",children:c.jsx(ue,{items:Y,scope:i,userRequestedFollowRef:z})}),W&&t&&c.jsx(Ve,{rect:W.rect,onAsk:()=>{t(W.text),X()},onDismiss:X})]})})}In.__docgenInfo={description:"",methods:[],displayName:"ChatWithCustomScroll",props:{messageHistory:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  role: "user" | "assistant";
  content: string;
  timestamp?: string;
  context?: Record<string, unknown>;
  attachedContent?: ChatAttachment[];
  data?: WebSocketMessageIncoming["data"];
  id?: string;
  loadedFromHistory?: boolean;
  scope?: WebSocketScope;
  isCancelled?: boolean;
  meta?: {
    attempt?: number | null;
    formulaModifications?: Record<string, unknown> | null;
    excludedIngredients?: Record<string, unknown>[] | null;
    maxAttempts?: number | null;
    llmGeneratedFormulaId?: string | null;
    ideaId?: string | null;
    llmGeneratedIdeaId?: string | null;
    userIdeaId?: string | null;
    interactionId?: string | null;
    relatedEntityId?: string | null;
    clarificationQuestions?: (Record<string, unknown> | string)[] | null;
    durationMs?: number | null;
  };
}`,signature:{properties:[{key:"role",value:{name:"union",raw:'"user" | "assistant"',elements:[{name:"literal",value:'"user"'},{name:"literal",value:'"assistant"'}],required:!0}},{key:"content",value:{name:"string",required:!0}},{key:"timestamp",value:{name:"string",required:!1}},{key:"context",value:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>",required:!1}},{key:"attachedContent",value:{name:"Array",elements:[{name:"union",raw:`| Partial<File & { id: string }>
| (Partial<ReferenceEntity> & { noteFileBytes?: number })
| Partial<ContextOption>
| UploadedFileAttachment`,elements:[{name:"Partial",elements:[{name:"intersection",raw:"File & { id: string }",elements:[{name:"File"},{name:"signature",type:"object",raw:"{ id: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}}]}],raw:"Partial<File & { id: string }>"},{name:"unknown"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  optionType?: "select";
  name: string;
  label?: string;
  description?: string;
  values: Array<{ value: string; label: string }>;
  scope?: WebSocketScope;
  id?: string;
  type?: "region" | "productCategory" | "quickFeedback" | string;
  allowEmpty?: boolean;
  allowMultiple?: boolean;
  allowMultipleLimit?: number | null;
}`,signature:{properties:[{key:"optionType",value:{name:"literal",value:'"select"',required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"values",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"Array<{ value: string; label: string }>",required:!0}},{key:"scope",value:{name:"z.infer",elements:[{name:"WebSocketScopeSchema"}],raw:"z.infer<typeof WebSocketScopeSchema>",required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:'"region" | "productCategory" | "quickFeedback" | string',elements:[{name:"literal",value:'"region"'},{name:"literal",value:'"productCategory"'},{name:"literal",value:'"quickFeedback"'},{name:"string"}],required:!1}},{key:"allowEmpty",value:{name:"boolean",required:!1}},{key:"allowMultiple",value:{name:"boolean",required:!1}},{key:"allowMultipleLimit",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}}]}}],raw:"Partial<ContextOption>"},{name:"signature",type:"object",raw:`{
  attachmentKind: "uploaded_file";
  id: string;
  fileName: string;
  fileExtension: string;
  /**
   * Set once the upload-session flow resolves to \`status: "available"\`, or
   * populated directly when this attachment backs an existing library
   * document selected from Documents. Sent as \`documentId\` in
   * create_interaction.
   */
  documentId?: number;
  /** Set on attachments read back from an interaction; previews the file as it was when sent. */
  snapshotId?: string;
  status: ChatAttachmentUploadStatus;
  /** The library document that already has this file's name, while status is "name_conflict". */
  existingDocumentId?: number;
  /** That library document's own size and type, so using it attaches what it really is, not the picked file. */
  existingSizeBytes?: number;
  existingMimeType?: string;
  /** 0-100 blob PUT progress; meaningful only while status is "uploading". */
  uploadProgress?: number;
  /** Populated when status is "quarantined" or "error" — the backend's failure_reason (free text). */
  errorMessage?: string;
  sizeBytes: number;
  mimeType?: string;
  // Other ChatAttachment arms expose optional name/type and many consumers read
  // them across the whole union without narrowing; declaring them here keeps that
  // access valid. They stay undefined for uploaded files.
  name?: string;
  type?: string;
}`,signature:{properties:[{key:"attachmentKind",value:{name:"literal",value:'"uploaded_file"',required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"fileName",value:{name:"string",required:!0}},{key:"fileExtension",value:{name:"string",required:!0}},{key:"documentId",value:{name:"number",required:!1},description:'Set once the upload-session flow resolves to `status: "available"`, or\npopulated directly when this attachment backs an existing library\ndocument selected from Documents. Sent as `documentId` in\ncreate_interaction.'},{key:"snapshotId",value:{name:"string",required:!1},description:"Set on attachments read back from an interaction; previews the file as it was when sent."},{key:"status",value:{name:"union",raw:`| "uploading"
| "scanning"
| "available"
| "quarantined"
| "error"
/** The library already holds a document with this file's name; the user picks what to do. */
| "name_conflict"`,elements:[{name:"literal",value:'"uploading"'},{name:"literal",value:'"scanning"'},{name:"literal",value:'"available"'},{name:"literal",value:'"quarantined"'},{name:"literal",value:'"error"'},{name:"literal",value:'"name_conflict"'}],required:!0}},{key:"existingDocumentId",value:{name:"number",required:!1},description:`The library document that already has this file's name, while status is "name_conflict".`},{key:"existingSizeBytes",value:{name:"number",required:!1},description:"That library document's own size and type, so using it attaches what it really is, not the picked file."},{key:"existingMimeType",value:{name:"string",required:!1}},{key:"uploadProgress",value:{name:"number",required:!1},description:'0-100 blob PUT progress; meaningful only while status is "uploading".'},{key:"errorMessage",value:{name:"string",required:!1},description:`Populated when status is "quarantined" or "error" — the backend's failure_reason (free text).`},{key:"sizeBytes",value:{name:"number",required:!0}},{key:"mimeType",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!1}}]}}]}],raw:"ChatAttachment[]",required:!1}},{key:"data",value:{name:'z.infer["data"]',raw:'WebSocketMessageIncoming["data"]',required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"loadedFromHistory",value:{name:"boolean",required:!1}},{key:"scope",value:{name:"z.infer",elements:[{name:"WebSocketScopeSchema"}],raw:"z.infer<typeof WebSocketScopeSchema>",required:!1}},{key:"isCancelled",value:{name:"boolean",required:!1}},{key:"meta",value:{name:"signature",type:"object",raw:`{
  attempt?: number | null;
  formulaModifications?: Record<string, unknown> | null;
  excludedIngredients?: Record<string, unknown>[] | null;
  maxAttempts?: number | null;
  llmGeneratedFormulaId?: string | null;
  ideaId?: string | null;
  llmGeneratedIdeaId?: string | null;
  userIdeaId?: string | null;
  interactionId?: string | null;
  relatedEntityId?: string | null;
  clarificationQuestions?: (Record<string, unknown> | string)[] | null;
  durationMs?: number | null;
}`,signature:{properties:[{key:"attempt",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}},{key:"formulaModifications",value:{name:"union",raw:"Record<string, unknown> | null",elements:[{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},{name:"null"}],required:!1}},{key:"excludedIngredients",value:{name:"union",raw:"Record<string, unknown>[] | null",elements:[{name:"Array",elements:[{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"}],raw:"Record<string, unknown>[]"},{name:"null"}],required:!1}},{key:"maxAttempts",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}},{key:"llmGeneratedFormulaId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"ideaId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"llmGeneratedIdeaId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"userIdeaId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"interactionId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"relatedEntityId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"clarificationQuestions",value:{name:"union",raw:"(Record<string, unknown> | string)[] | null",elements:[{name:"Array",elements:[{name:"unknown"}],raw:"(Record<string, unknown> | string)[]"},{name:"null"}],required:!1}},{key:"durationMs",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}}]},required:!1}}]}}],raw:"MessageHistoryItem[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""},onFollowUpClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(question: string) => void",signature:{arguments:[{type:{name:"string"},name:"question"}],return:{name:"void"}}},description:""},afterMessages:{required:!1,tsType:{name:"ReactNode"},description:`Rendered at the end of the thread, inside the message frame. Used for
client-side turns that are not part of the conversation history.`}}};export{In as C};
