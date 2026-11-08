import{j as t,g as v,T as j,a4 as S,ab as Ce,c as ke,r as w,am as ce,ad as De,fr as P,u as Ee,a3 as Fe,a as te,is as _e,it as Re,N as Ue,O as Ae,Q as qe}from"./iframe-BXubdNpd.js";import{D as Oe,b as $e,c as Le,d as Be,e as Ve}from"./dialog-Gbr7wu8m.js";import{A as He,b as Ge,c as Me,d as We,e as Ye,f as Ke,g as ze,h as Qe}from"./alert-dialog-BBDZ61Tm.js";import{S as Xe}from"./switch-Bg3CCUCR.js";import{I as Je,S as Ze}from"./SpecDetailDialog-QKQeVC1Z.js";import{S as ne}from"./editMode-DGYSJYwU.js";import{b as et}from"./promptInstructionsSchema-bcXbMkX-.js";import{T as $}from"./target-BQ7sZOCu.js";import{B as L}from"./book-Dn2V7hho.js";import{C as tt}from"./chevron-right-Bt7v18gP.js";import{g as nt}from"./aiAssistant.selectors-DeXBL1Y1.js";const k=(e,n)=>`${e}:${n}`;function St(e,n){const l=new Map(n.map(o=>[k(o.level,o.id),o.isInEffect]));return e.map(o=>({...o,isInEffect:l.get(k(o.level,o.id))??!0}))}const Pt=(e,n,l,o)=>e.map(s=>s.level===n&&s.id===l?{...s,...o}:s),Tt=e=>e.map(({level:n,id:l,isInEffect:o})=>({level:n,id:l,isInEffect:o})),Nt=e=>e.map(({level:n,promptInstructionId:l,isInEffect:o})=>({level:n,id:l,isInEffect:o})),pe=e=>e.filter(n=>n.isInEffect).length,ue=(e,n=80)=>{const l=e.split(`
`)[0]?.trim()??"";return l.length>n?`${l.slice(0,n)}…`:l};function O({icon:e,name:n,badgeLabel:l,badgeClassName:o,checked:s,onCheckedChange:r,onNameClick:c,note:a}){return t.jsxs("div",{className:"pf-ai-follows-row-root",children:[t.jsx("span",{className:v("pf-ai-follows-row-selection","pf-ai-follows-row-off-copy"),children:e}),t.jsxs("div",{className:"pf-ai-follows-row-content",children:[c?t.jsx("button",{type:"button",onClick:c,className:v("pf-ai-follows-row-linked-title",s?"pf-ai-follows-row-active-copy":"pf-ai-follows-row-off-copy"),children:n}):t.jsx(j,{tooltipIfTruncated:!0,tone:s?"default":"muted",className:"pf-ai-follows-row-plain-title",children:n}),a&&t.jsx(j,{variant:"footnote",className:"pf-ai-follows-row-subtitle",children:a})]}),t.jsx(j,{weight:"medium",variant:"footnote",className:v("pf-ai-follows-row-badge",o),children:l}),r&&t.jsx(Xe,{checked:s,onCheckedChange:r,"aria-label":n,className:"pf-ai-follows-row-selection"})]})}O.__docgenInfo={description:"One row in the Follows list: a target spec or an instruction. No switch without `onCheckedChange`.",methods:[],displayName:"FollowsRow",props:{icon:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},name:{required:!0,tsType:{name:"string"},description:""},badgeLabel:{required:!0,tsType:{name:"string"},description:""},badgeClassName:{required:!0,tsType:{name:"string"},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"Omitted for a read-only row — then no switch renders."},onNameClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"When set, the name becomes a link (e.g. a spec opening its read-only view)."},note:{required:!1,tsType:{name:"string"},description:"Subtle note under the name."}}};const st=new Set(["formula","user"]),U=e=>e?"pf-ai-follows-list-badge-on":"pf-ai-follows-list-badge-off",se={specification_formula:"formula",specification_project:"project"},A=(e,n)=>`/projects/${e}?main-${e}Tab=${n}`,q=e=>e.title?.trim()||ue(e.instruction),ie=(e,n,l=[])=>{const o=new URLSearchParams(e);return Object.entries(n).forEach(([s,r])=>o.set(s,r)),l.forEach(s=>o.delete(s)),o.toString()},oe={mainTab:"specs"};function de({readOnly:e=!1,specification:n,instructions:l,maxHeightClass:o="pf-ai-follows-list-default-height"}){const{t:s}=S("assistant"),{isVisible:r=!1,options:c=[],selected:a=null,select:u,projectId:m=null,recipeId:d=null,isProjectSpecificationUnknown:D=!1}=n??{},{items:x=[],toggle:b,setAll:p,truncatedGroups:he=[],instructionsProjectId:B=null,canEditInstructions:V=!1,saveInstruction:H}=l??{},we=Ce(),T=ke(),[G,ye]=w.useState(new Set),M=i=>ye(h=>{const I=new Set(h);return I.has(i)?I.delete(i):I.add(i),I}),[N,C]=w.useState(null),[je,W]=w.useState(null),g=x.find(i=>k(i.level,i.id)===je)??null,[y,Y]=w.useState(null),E=(i,h)=>C({title:s("followsDialog.confirmDisable.title",{name:i}),description:s("followsDialog.confirmDisable.description"),apply:h}),Ie=(i,h)=>C({title:s("followsDialog.confirmDisableAll.title",{label:i}),description:s("followsDialog.confirmDisableAll.description"),apply:h}),ve=(i,h)=>{const{level:I,id:ee}=i;if(h){b?.(I,ee,!0);return}E(q(i),()=>b?.(I,ee,!1))},F=i=>a?.id===i.id&&a?.type===i.type,xe=(i,h)=>{if(h){u?.(i);return}E(i.name,()=>u?.(null))},be=a?1:0,Se=c.length,Pe=c.some(i=>i.type==="specification_formula"),K=pe(x),_=x.length,z=_>0,R=e||!G.has("spec"),Q=e||!G.has("instr"),X={pathname:T.pathname,search:`?${ie(T.search,oe,["tab"])}`},J=i=>i==="specification_formula"?d?X:null:m?A(m,"specs"):null,Te=i=>i==="specification_formula"?d?{pathname:T.pathname,search:`?${ie(T.search,{...oe,[ne]:"true"},["tab"])}`}:null:m?`${A(m,"specs")}&${ne}=true`:null,Z=()=>{d&&we(X)},Ne=[r?a?s("followsDialog.announcement.specFollowing",{name:a.name}):s("followsDialog.announcement.specNone"):null,z?s("followsDialog.announcement.instructions",{on:K,total:_}):null].filter(Boolean).join(" ");return t.jsxs(ce,{children:[!e&&t.jsx("div",{"aria-live":"polite",className:"pf-ai-follows-list-accessible-label",children:Ne}),t.jsxs("div",{className:v("pf-ai-follows-list-root",o),children:[r&&t.jsxs(t.Fragment,{children:[t.jsx(le,{label:s("followsDialog.targetSpecSection"),first:!0,on:be,total:Se,isOpen:R,readOnly:e,onToggleOpen:()=>M("spec"),onDisableAll:()=>E(a?.name??s("followsDialog.specBadge"),()=>u?.(null)),onEnableAll:()=>u?.(c[0]??null)}),R&&(c.length>0?c.map(i=>t.jsx(O,{icon:t.jsx($,{className:"pf-ai-follows-list-action-icon"}),name:i.name,badgeLabel:s(`followsDialog.specLevel.${se[i.type]}`),badgeClassName:U(F(i)),checked:F(i),onNameClick:e||!J(i.type)?void 0:()=>Y(i),onCheckedChange:e?void 0:h=>xe(i,h)},`${i.type}:${i.id}`)):t.jsx(it,{isProjectSpecificationUnknown:D,onOpenRecipeSpecification:Z})),R&&c.length>0&&!Pe&&t.jsx(ot,{children:t.jsx(fe,{onClick:Z,children:s("followsBar.empty.recipeLink")})})]}),z&&t.jsxs(t.Fragment,{children:[t.jsx(le,{label:s("followsDialog.instructionsSection"),first:!r,on:K,total:_,isOpen:Q,readOnly:e,onToggleOpen:()=>M("instr"),onDisableAll:()=>Ie(s("followsDialog.instructionsSection").toLowerCase(),()=>p?.(!1)),onEnableAll:()=>p?.(!0)}),Q&&x.map(i=>t.jsx(O,{icon:t.jsx(L,{className:"pf-ai-follows-list-action-icon"}),name:q(i),badgeLabel:s(`followsDialog.level.${i.level}`),badgeClassName:U(i.isInEffect),checked:i.isInEffect,onNameClick:()=>W(k(i.level,i.id)),note:i.isInEffect&&st.has(i.level)?s("followsDialog.notAppliedYet"):void 0,onCheckedChange:e?void 0:h=>ve(i,h)},`${i.level}:${i.id}`))]})]}),he.length>0&&t.jsx(j,{variant:"footnote",className:"pf-ai-follows-list-notice",children:s("followsDialog.truncatedNote")}),N&&t.jsx(He,{open:!0,onOpenChange:i=>{i||C(null)},children:t.jsxs(Ge,{className:"pf-ai-follows-list-tooltip",children:[t.jsxs(Me,{children:[t.jsx(We,{children:N.title}),t.jsx(Ye,{children:N.description})]}),t.jsxs(Ke,{children:[t.jsx(ze,{children:s("followsDialog.confirmCancel")}),t.jsx(Qe,{onClick:()=>{N.apply(),C(null)},children:s("followsDialog.confirmConfirm")})]})]})}),g&&t.jsx(Je,{open:!0,onOpenChange:i=>{i||W(null)},name:q(g),title:g.title,entryType:g.entryType,entryTypes:et(g.level),badgeLabel:s(`followsDialog.level.${g.level}`),badgeClassName:U(g.isInEffect),isInEffect:g.isInEffect,instruction:g.instruction,editTo:V&&g.level==="project"&&B!==null?A(B,"settings"):void 0,editHint:s("followsDialog.editProjectHint"),onSave:!e&&V&&H&&g.level==="project"?i=>H(g.level,g.id,i):void 0}),y&&J(y.type)&&t.jsx(Ze,{open:!0,onOpenChange:i=>{i||Y(null)},specificationId:Number(y.id),context:se[y.type],specName:y.name,editTo:Te(y.type)??"",isEditInNewTab:y.type==="specification_project",isOff:!F(y)})]})}function le({label:e,first:n,on:l,total:o,isOpen:s,readOnly:r,onToggleOpen:c,onDisableAll:a,onEnableAll:u}){const{t:m}=S("assistant"),d="pf-ai-follows-list-bulk-action";return r?t.jsxs("div",{className:v("pf-ai-follows-list-readonly-band",n&&"pf-ai-follows-list-first-band"),children:[t.jsx(j,{variant:"footnote",className:"pf-ai-follows-list-readonly-heading",children:e}),t.jsx(j,{weight:"medium",variant:"footnote",className:"pf-ai-follows-list-readonly-count",children:o})]}):t.jsxs("div",{className:v("pf-ai-follows-list-editable-band",n&&"pf-ai-follows-list-first-band"),children:[t.jsxs("button",{type:"button",onClick:c,"aria-expanded":s,className:"pf-ai-follows-list-expand-trigger",children:[s?t.jsx(De,{className:"pf-ai-follows-list-expand-icon"}):t.jsx(tt,{className:"pf-ai-follows-list-expand-icon"}),t.jsx("span",{className:"pf-ai-follows-list-heading",children:e}),t.jsxs("span",{className:"pf-ai-follows-list-enabled-count",children:[l,"/",o]})]}),t.jsxs("span",{className:"pf-ai-follows-list-bulk-actions",children:[t.jsx("button",{type:"button",onClick:a,disabled:l===0,className:d,children:m("followsDialog.disableAll")}),t.jsx("span",{className:"pf-ai-follows-list-separator",children:"|"}),t.jsx("button",{type:"button",onClick:u,disabled:l===o,className:d,children:m("followsDialog.enableAll")})]})]})}function it({isProjectSpecificationUnknown:e,onOpenRecipeSpecification:n}){const{t:l}=S("assistant");return t.jsxs("div",{className:"pf-ai-follows-list-empty",children:[t.jsx(j,{variant:"footnote",className:"pf-ai-follows-list-empty-message",children:l(e?"followsBar.empty.projectUnavailable":"followsBar.empty.message")}),t.jsx("div",{className:"pf-ai-follows-list-setup-actions",children:t.jsx(fe,{onClick:n,children:l("followsBar.empty.recipeLink")})})]})}function ot({children:e}){return t.jsx("div",{className:"pf-ai-follows-list-setup-row",children:e})}function fe({onClick:e,children:n}){return t.jsx("button",{type:"button",onClick:e,className:"pf-ai-follows-list-setup-action",children:n})}de.__docgenInfo={description:`The "What this chat follows" body: Target Spec (single-select) and
Instructions (multi-toggle) as collapsible bands with bulk actions. Inline in
the Follows bar, read-only in a reply's record modal.`,methods:[],displayName:"FollowsList",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},specification:{required:!1,tsType:{name:"intersection",raw:`Pick<
  UseFollowedSpecificationResult,
  "isVisible" | "options" | "selected"
> &
  Partial<
    Pick<
      UseFollowedSpecificationResult,
      "select" | "projectId" | "recipeId" | "isProjectSpecificationUnknown"
    >
  >`,elements:[{name:"Pick",elements:[{name:"UseFollowedSpecificationResult"},{name:"union",raw:'"isVisible" | "options" | "selected"',elements:[{name:"literal",value:'"isVisible"'},{name:"literal",value:'"options"'},{name:"literal",value:'"selected"'}]}],raw:`Pick<
  UseFollowedSpecificationResult,
  "isVisible" | "options" | "selected"
>`},{name:"Partial",elements:[{name:"Pick",elements:[{name:"UseFollowedSpecificationResult"},{name:"union",raw:'"select" | "projectId" | "recipeId" | "isProjectSpecificationUnknown"',elements:[{name:"literal",value:'"select"'},{name:"literal",value:'"projectId"'},{name:"literal",value:'"recipeId"'},{name:"literal",value:'"isProjectSpecificationUnknown"'}]}],raw:`Pick<
  UseFollowedSpecificationResult,
  "select" | "projectId" | "recipeId" | "isProjectSpecificationUnknown"
>`}],raw:`Partial<
  Pick<
    UseFollowedSpecificationResult,
    "select" | "projectId" | "recipeId" | "isProjectSpecificationUnknown"
  >
>`}]},description:"Omitted when the Target Spec section doesn't apply."},instructions:{required:!1,tsType:{name:"intersection",raw:`Pick<
  UseChatPromptInstructionsResult,
  "items"
> &
  Partial<
    Pick<
      UseChatPromptInstructionsResult,
      | "toggle"
      | "setAll"
      | "truncatedGroups"
      | "instructionsProjectId"
      | "canEditInstructions"
      | "saveInstruction"
    >
  >`,elements:[{name:"Pick",elements:[{name:"UseChatPromptInstructionsResult"},{name:"literal",value:'"items"'}],raw:`Pick<
  UseChatPromptInstructionsResult,
  "items"
>`},{name:"Partial",elements:[{name:"Pick",elements:[{name:"UseChatPromptInstructionsResult"},{name:"union",raw:`| "toggle"
| "setAll"
| "truncatedGroups"
| "instructionsProjectId"
| "canEditInstructions"
| "saveInstruction"`,elements:[{name:"literal",value:'"toggle"'},{name:"literal",value:'"setAll"'},{name:"literal",value:'"truncatedGroups"'},{name:"literal",value:'"instructionsProjectId"'},{name:"literal",value:'"canEditInstructions"'},{name:"literal",value:'"saveInstruction"'}]}],raw:`Pick<
  UseChatPromptInstructionsResult,
  | "toggle"
  | "setAll"
  | "truncatedGroups"
  | "instructionsProjectId"
  | "canEditInstructions"
  | "saveInstruction"
>`}],raw:`Partial<
  Pick<
    UseChatPromptInstructionsResult,
    | "toggle"
    | "setAll"
    | "truncatedGroups"
    | "instructionsProjectId"
    | "canEditInstructions"
    | "saveInstruction"
  >
>`}]},description:"Omitted when there are no instructions to list."},maxHeightClass:{required:!1,tsType:{name:"string"},description:"Height cap for the scroll area.",defaultValue:{value:'"pf-ai-follows-list-default-height"',computed:!1}}}};const lt=[P.shape.entityType.enum.specification_formula,P.shape.entityType.enum.specification_project];function me(e){return lt.some(n=>n===e)}function ae(e,n){return e?.id?{id:String(e.id),name:e.name??"",type:n}:null}function Ct({recipeSpecification:e,projectSpecification:n}){const l=ae(e,P.shape.entityType.enum.specification_formula),o=ae(n,P.shape.entityType.enum.specification_project);return[l,o].filter(s=>s!==null)}function kt(e,n){return!e||!n?!e&&!n:e.id===n.id&&e.type===n.type&&e.name===n.name}function Dt(e){return e.find(n=>n.type===P.shape.entityType.enum.specification_formula)??null}const at=e=>typeof e=="object"&&e!==null&&!Array.isArray(e),f=(e,n)=>at(e)?e[n]:void 0;function rt(e){const n=f(e.attributes,"request")??e.request,l=f(f(n,"context"),"referenceEntities");return Array.isArray(l)?l:[]}function ct(e){const n=f(e,"entityType");if(typeof n!="string"||!me(n))return null;const l=f(e,"entityId");if(typeof l!="string"&&typeof l!="number")return null;const o=String(l);if(o==="")return null;const s=f(e,"entityName");return{id:o,name:typeof s=="string"?s:"",type:n}}function pt(e){const n=f(e.attributes,"request")??e.request,l=f(f(n,"context"),"editingEntity");if(f(l,"entityType")!=="formula")return null;const o=f(l,"entityId");if(typeof o!="string"&&typeof o!="number")return null;const s=String(o);return s===""?null:s}function Et(e,n){if(!e?.length)return;const l=n?e.filter(o=>pt(o)===String(n)):e;if(l.length!==0)return rt(l[l.length-1]).map(ct).find(o=>o!==null)??null}function ut(e,n){const l=e??[],o=l.findIndex(s=>s.role==="assistant"&&s.meta?.interactionId===n);for(let s=o-1;s>=0;s--)if(l[s].role==="user"){for(const r of l[s].attachedContent??[]){const c=f(r,"type"),a=f(r,"id");if(typeof c!="string"||!me(c)||typeof a!="string"&&typeof a!="number")continue;const u=f(r,"name");return{id:String(a),name:typeof u=="string"?u:"",type:c}}return null}return null}function ge({open:e,onOpenChange:n,title:l,description:o,...s}){const{t:r}=S("assistant"),{readOnly:c}=s;return t.jsx(Oe,{open:e,onOpenChange:n,children:t.jsxs($e,{className:"pf-ai-follows-dialog-content",children:[t.jsxs(Le,{className:"pf-ai-follows-dialog-header",children:[t.jsx("span",{className:v("pf-ai-follows-dialog-icon-surface",c?"pf-ai-follows-dialog-icon-off":"pf-ai-follows-dialog-icon-on"),children:c?t.jsx(L,{className:"pf-ai-follows-dialog-icon"}):t.jsx($,{className:"pf-ai-follows-dialog-icon"})}),t.jsxs("div",{className:"pf-ai-follows-dialog-heading-group",children:[t.jsx(Be,{className:"pf-ai-follows-dialog-title",children:l??r("followsDialog.title")}),t.jsx(Ve,{className:"pf-ai-follows-dialog-description",children:o??r("followsDialog.description")})]})]}),t.jsx("div",{className:"pf-ai-follows-dialog-body",children:t.jsx(de,{...s,maxHeightClass:"pf-ai-follows-dialog-list"})})]})})}ge.__docgenInfo={description:`Modal shell around {@link FollowsList} for a reply's read-only record ("What this reply used").`,methods:[],displayName:"FollowsDialog",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:""},specification:{required:!1,tsType:{name:"intersection",raw:`Pick<
  UseFollowedSpecificationResult,
  "isVisible" | "options" | "selected"
> &
  Partial<
    Pick<
      UseFollowedSpecificationResult,
      "select" | "projectId" | "recipeId" | "isProjectSpecificationUnknown"
    >
  >`,elements:[{name:"Pick",elements:[{name:"UseFollowedSpecificationResult"},{name:"union",raw:'"isVisible" | "options" | "selected"',elements:[{name:"literal",value:'"isVisible"'},{name:"literal",value:'"options"'},{name:"literal",value:'"selected"'}]}],raw:`Pick<
  UseFollowedSpecificationResult,
  "isVisible" | "options" | "selected"
>`},{name:"Partial",elements:[{name:"Pick",elements:[{name:"UseFollowedSpecificationResult"},{name:"union",raw:'"select" | "projectId" | "recipeId" | "isProjectSpecificationUnknown"',elements:[{name:"literal",value:'"select"'},{name:"literal",value:'"projectId"'},{name:"literal",value:'"recipeId"'},{name:"literal",value:'"isProjectSpecificationUnknown"'}]}],raw:`Pick<
  UseFollowedSpecificationResult,
  "select" | "projectId" | "recipeId" | "isProjectSpecificationUnknown"
>`}],raw:`Partial<
  Pick<
    UseFollowedSpecificationResult,
    "select" | "projectId" | "recipeId" | "isProjectSpecificationUnknown"
  >
>`}]},description:"Omitted when the Target Spec section doesn't apply."},instructions:{required:!1,tsType:{name:"intersection",raw:`Pick<
  UseChatPromptInstructionsResult,
  "items"
> &
  Partial<
    Pick<
      UseChatPromptInstructionsResult,
      | "toggle"
      | "setAll"
      | "truncatedGroups"
      | "instructionsProjectId"
      | "canEditInstructions"
      | "saveInstruction"
    >
  >`,elements:[{name:"Pick",elements:[{name:"UseChatPromptInstructionsResult"},{name:"literal",value:'"items"'}],raw:`Pick<
  UseChatPromptInstructionsResult,
  "items"
>`},{name:"Partial",elements:[{name:"Pick",elements:[{name:"UseChatPromptInstructionsResult"},{name:"union",raw:`| "toggle"
| "setAll"
| "truncatedGroups"
| "instructionsProjectId"
| "canEditInstructions"
| "saveInstruction"`,elements:[{name:"literal",value:'"toggle"'},{name:"literal",value:'"setAll"'},{name:"literal",value:'"truncatedGroups"'},{name:"literal",value:'"instructionsProjectId"'},{name:"literal",value:'"canEditInstructions"'},{name:"literal",value:'"saveInstruction"'}]}],raw:`Pick<
  UseChatPromptInstructionsResult,
  | "toggle"
  | "setAll"
  | "truncatedGroups"
  | "instructionsProjectId"
  | "canEditInstructions"
  | "saveInstruction"
>`}],raw:`Partial<
  Pick<
    UseChatPromptInstructionsResult,
    | "toggle"
    | "setAll"
    | "truncatedGroups"
    | "instructionsProjectId"
    | "canEditInstructions"
    | "saveInstruction"
  >
>`}]},description:"Omitted when there are no instructions to list."},maxHeightClass:{required:!1,tsType:{name:"string"},description:"Height cap for the scroll area."},open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""}}};function dt({conversationId:e,interactionId:n,scope:l}){const{t:o}=S("assistant"),s=Ee(),r=l===Fe.enum.recipe_formulation_advisor,c=te(nt(l)),a=te(_e(n)),[u,m]=w.useState(!1);w.useEffect(()=>{!r||!e||!n||a===void 0&&s(Re({conversationId:e,interactionId:n}))},[r,e,n,a,s]);const d=w.useMemo(()=>r?ut(c,n):null,[r,c,n]),D=w.useMemo(()=>(a??[]).filter(p=>p.isInEffect).map(p=>({id:p.promptInstructionId,level:p.level,entryType:p.entryType,title:p.title,instruction:p.instruction,isInEffect:p.isInEffect})),[a]),x=w.useMemo(()=>(a??[]).filter(p=>p.isInEffect).map(p=>p.title?.trim()||ue(p.instruction,60)),[a]);if(!r||a===void 0)return null;const b=pe(a);return b===0&&!d?null:t.jsxs(t.Fragment,{children:[t.jsx(ce,{delayDuration:150,children:t.jsxs("div",{className:"pf-ai-reply-context__root",children:[t.jsx(j,{tone:"muted",variant:"caption",className:"pf-ai-reply-context__label",children:o("replyFollows.used")}),d&&t.jsx(re,{icon:t.jsx($,{className:"pf-ai-reply-context__icon"}),label:o("replyFollows.targetSpec"),head:o("replyFollows.targetSpec"),lines:[d.name],onClick:()=>m(!0)}),b>0&&t.jsx(re,{icon:t.jsx(L,{className:"pf-ai-reply-context__icon"}),label:o("replyFollows.instructions",{count:b}),head:o("followsDialog.instructionsSection"),lines:x,onClick:()=>m(!0)})]})}),t.jsx(ge,{open:u,onOpenChange:m,readOnly:!0,title:o("replyFollows.detailTitle"),description:o("replyFollows.detailDescription"),specification:{isVisible:!!d,options:d?[d]:[],selected:d},instructions:{items:D}})]})}function re({icon:e,label:n,head:l,lines:o,onClick:s}){const{t:r}=S("assistant"),c=o.slice(0,8),a=o.length-c.length;return t.jsxs(Ue,{children:[t.jsx(Ae,{asChild:!0,children:t.jsxs("button",{type:"button",onClick:s,"aria-label":`${l}: ${o.join(", ")}`,className:"pf-ai-reply-context__chip",children:[e,t.jsx("span",{className:"pf-ai-reply-context__chip-label",children:n})]})}),t.jsxs(qe,{side:"top",sideOffset:4,className:"pf-ai-reply-context__tooltip",children:[t.jsx("div",{className:"pf-ai-reply-context__tooltip-title",children:l}),t.jsxs("ul",{className:"pf-ai-reply-context__items",children:[c.map((u,m)=>t.jsx("li",{className:"pf-ai-reply-context__item",children:u},`${m}-${u}`)),a>0&&t.jsx("li",{className:"pf-ai-reply-context__remaining",children:r("replyFollows.moreCount",{count:a})})]})]})]})}dt.__docgenInfo={description:`The "Used  Target spec · N instructions" line under an RFA reply. Hover lists
the names, click opens the record read-only.`,methods:[],displayName:"ReplyFollowsSummary",props:{conversationId:{required:!0,tsType:{name:"string"},description:""},interactionId:{required:!0,tsType:{name:"string"},description:""},scope:{required:!0,tsType:{name:"z.infer",elements:[{name:"WebSocketScopeSchema"}],raw:"z.infer<typeof WebSocketScopeSchema>"},description:""}}};export{de as F,dt as R,ge as a,Ct as b,Dt as c,pe as d,St as e,Nt as f,Pt as g,me as h,kt as i,Et as r,Tt as s};
