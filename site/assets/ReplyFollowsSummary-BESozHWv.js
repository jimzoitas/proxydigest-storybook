import{j as t,g as j,a4 as S,aa as _e,c as Ee,r as h,aj as de,T as $,ac as Fe,fq as P,Q as Re,u as Ue,a3 as Ae,a as ne,jD as qe,jE as Oe,N as $e,O as Le}from"./iframe-DgvZnKtv.js";import{C as Be,a as Ve,b as He}from"./composed-surface-thTtt0jI.js";import{D as Ge,c as Me}from"./dialog-BGED6ss2.js";import{C as b,c as se}from"./composed-typography-BeKxRqyR.js";import{A as We,b as Ye,c as Ke,d as ze,e as Qe,f as Xe,g as Je,h as Ze}from"./alert-dialog-C6IZFRS7.js";import{S as et}from"./switch-T4g98NFH.js";import{I as tt,S as nt}from"./SpecDetailDialog-DZ0ny_yk.js";import{S as ie}from"./editMode-DGYSJYwU.js";import{b as st}from"./promptInstructionsSchema-DLwppsvR.js";import{T as L}from"./target-BnGO1hMh.js";import{B}from"./book-BhBva0MR.js";import{C as it}from"./chevron-right-B8SZue5v.js";import{k as ot}from"./aiAssistant.selectors-p1arcQK4.js";const k=(e,n)=>`${e}:${n}`;function Dt(e,n){const o=new Map(n.map(i=>[k(i.level,i.id),i.isInEffect]));return e.map(i=>({...i,isInEffect:o.get(k(i.level,i.id))??!0}))}const _t=(e,n,o,i)=>e.map(s=>s.level===n&&s.id===o?{...s,...i}:s),Et=e=>e.map(({level:n,id:o,isInEffect:i})=>({level:n,id:o,isInEffect:i})),Ft=e=>e.map(({level:n,promptInstructionId:o,isInEffect:i})=>({level:n,id:o,isInEffect:i})),ue=e=>e.filter(n=>n.isInEffect).length,fe=(e,n=80)=>{const o=e.split(`
`)[0]?.trim()??"";return o.length>n?`${o.slice(0,n)}…`:o};function O({icon:e,name:n,badgeLabel:o,badgeClassName:i,checked:s,onCheckedChange:a,onNameClick:c,note:r}){return t.jsxs("div",{className:"pf-ai-follows-row-root",children:[t.jsx("span",{className:j("pf-ai-follows-row-selection","pf-ai-follows-row-off-copy"),children:e}),t.jsxs("div",{className:"pf-ai-follows-row-content",children:[c?t.jsx("button",{type:"button",onClick:c,className:j("pf-ai-follows-row-linked-title",s?"pf-ai-follows-row-active-copy":"pf-ai-follows-row-off-copy"),children:n}):t.jsx(b,{preset:"ai-follows-row-plain-title",tooltipIfTruncated:!0,tone:s?"default":"muted",className:"pf-ai-follows-row-plain-title",children:n}),r&&t.jsx(b,{preset:"ai-follows-row-subtitle",variant:"footnote",children:r})]}),t.jsx(b,{preset:"ai-follows-row-badge",weight:"medium",variant:"footnote",className:j("pf-ai-follows-row-badge",i),children:o}),a&&t.jsx(et,{checked:s,onCheckedChange:a,"aria-label":n,className:"pf-ai-follows-row-selection"})]})}O.__docgenInfo={description:"One row in the Follows list: a target spec or an instruction. No switch without `onCheckedChange`.",methods:[],displayName:"FollowsRow",props:{icon:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},name:{required:!0,tsType:{name:"string"},description:""},badgeLabel:{required:!0,tsType:{name:"string"},description:""},badgeClassName:{required:!0,tsType:{name:"string"},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"Omitted for a read-only row — then no switch renders."},onNameClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"When set, the name becomes a link (e.g. a spec opening its read-only view)."},note:{required:!1,tsType:{name:"string"},description:"Subtle note under the name."}}};const lt=new Set(["formula","user"]),U=e=>e?se.followBadgeOn:se.followBadgeOff,oe={specification_formula:"formula",specification_project:"project"},A=(e,n)=>`/projects/${e}?main-${e}Tab=${n}`,q=e=>e.title?.trim()||fe(e.instruction),le=(e,n,o=[])=>{const i=new URLSearchParams(e);return Object.entries(n).forEach(([s,a])=>i.set(s,a)),o.forEach(s=>i.delete(s)),i.toString()},ae={mainTab:"specs"};function me({readOnly:e=!1,specification:n,instructions:o,maxHeightClass:i="pf-ai-follows-list-default-height"}){const{t:s}=S("assistant"),{isVisible:a=!1,options:c=[],selected:r=null,select:d,projectId:m=null,recipeId:u=null,isProjectSpecificationUnknown:D=!1}=n??{},{items:x=[],toggle:v,setAll:p,truncatedGroups:je=[],instructionsProjectId:V=null,canEditInstructions:H=!1,saveInstruction:G}=o??{},Ie=_e(),C=Ee(),[M,xe]=h.useState(new Set),W=l=>xe(w=>{const I=new Set(w);return I.has(l)?I.delete(l):I.add(l),I}),[T,N]=h.useState(null),[ve,Y]=h.useState(null),g=x.find(l=>k(l.level,l.id)===ve)??null,[y,K]=h.useState(null),_=(l,w)=>N({title:s("followsDialog.confirmDisable.title",{name:l}),description:s("followsDialog.confirmDisable.description"),apply:w}),Se=(l,w)=>N({title:s("followsDialog.confirmDisableAll.title",{label:l}),description:s("followsDialog.confirmDisableAll.description"),apply:w}),be=(l,w)=>{const{level:I,id:te}=l;if(w){v?.(I,te,!0);return}_(q(l),()=>v?.(I,te,!1))},E=l=>r?.id===l.id&&r?.type===l.type,Pe=(l,w)=>{if(w){d?.(l);return}_(l.name,()=>d?.(null))},Ce=r?1:0,Te=c.length,Ne=c.some(l=>l.type==="specification_formula"),z=ue(x),F=x.length,Q=F>0,R=e||!M.has("spec"),X=e||!M.has("instr"),J={pathname:C.pathname,search:`?${le(C.search,ae,["tab"])}`},Z=l=>l==="specification_formula"?u?J:null:m?A(m,"specs"):null,ke=l=>l==="specification_formula"?u?{pathname:C.pathname,search:`?${le(C.search,{...ae,[ie]:"true"},["tab"])}`}:null:m?`${A(m,"specs")}&${ie}=true`:null,ee=()=>{u&&Ie(J)},De=[a?r?s("followsDialog.announcement.specFollowing",{name:r.name}):s("followsDialog.announcement.specNone"):null,Q?s("followsDialog.announcement.instructions",{on:z,total:F}):null].filter(Boolean).join(" ");return t.jsxs(de,{children:[!e&&t.jsx("div",{"aria-live":"polite",className:"pf-ai-follows-list-accessible-label",children:De}),t.jsxs("div",{className:j("pf-ai-follows-list-root",i),children:[a&&t.jsxs(t.Fragment,{children:[t.jsx(re,{label:s("followsDialog.targetSpecSection"),first:!0,on:Ce,total:Te,isOpen:R,readOnly:e,onToggleOpen:()=>W("spec"),onDisableAll:()=>_(r?.name??s("followsDialog.specBadge"),()=>d?.(null)),onEnableAll:()=>d?.(c[0]??null)}),R&&(c.length>0?c.map(l=>t.jsx(O,{icon:t.jsx(L,{className:"pf-ai-follows-list-action-icon"}),name:l.name,badgeLabel:s(`followsDialog.specLevel.${oe[l.type]}`),badgeClassName:U(E(l)),checked:E(l),onNameClick:e||!Z(l.type)?void 0:()=>K(l),onCheckedChange:e?void 0:w=>Pe(l,w)},`${l.type}:${l.id}`)):t.jsx(at,{isProjectSpecificationUnknown:D,onOpenRecipeSpecification:ee})),R&&c.length>0&&!Ne&&t.jsx(rt,{children:t.jsx(ge,{onClick:ee,children:s("followsBar.empty.recipeLink")})})]}),Q&&t.jsxs(t.Fragment,{children:[t.jsx(re,{label:s("followsDialog.instructionsSection"),first:!a,on:z,total:F,isOpen:X,readOnly:e,onToggleOpen:()=>W("instr"),onDisableAll:()=>Se(s("followsDialog.instructionsSection").toLowerCase(),()=>p?.(!1)),onEnableAll:()=>p?.(!0)}),X&&x.map(l=>t.jsx(O,{icon:t.jsx(B,{className:"pf-ai-follows-list-action-icon"}),name:q(l),badgeLabel:s(`followsDialog.level.${l.level}`),badgeClassName:U(l.isInEffect),checked:l.isInEffect,onNameClick:()=>Y(k(l.level,l.id)),note:l.isInEffect&&lt.has(l.level)?s("followsDialog.notAppliedYet"):void 0,onCheckedChange:e?void 0:w=>be(l,w)},`${l.level}:${l.id}`))]})]}),je.length>0&&t.jsx($,{variant:"footnote",className:"pf-ai-follows-list-notice",children:s("followsDialog.truncatedNote")}),T&&t.jsx(We,{open:!0,onOpenChange:l=>{l||N(null)},children:t.jsxs(Ye,{className:"pf-ai-follows-list-tooltip",children:[t.jsxs(Ke,{children:[t.jsx(ze,{children:T.title}),t.jsx(Qe,{children:T.description})]}),t.jsxs(Xe,{children:[t.jsx(Je,{children:s("followsDialog.confirmCancel")}),t.jsx(Ze,{onClick:()=>{T.apply(),N(null)},children:s("followsDialog.confirmConfirm")})]})]})}),g&&t.jsx(tt,{open:!0,onOpenChange:l=>{l||Y(null)},name:q(g),title:g.title,entryType:g.entryType,entryTypes:st(g.level),badgeLabel:s(`followsDialog.level.${g.level}`),badgeClassName:U(g.isInEffect),isInEffect:g.isInEffect,instruction:g.instruction,editTo:H&&g.level==="project"&&V!==null?A(V,"settings"):void 0,editHint:s("followsDialog.editProjectHint"),onSave:!e&&H&&G&&g.level==="project"?l=>G(g.level,g.id,l):void 0}),y&&Z(y.type)&&t.jsx(nt,{open:!0,onOpenChange:l=>{l||K(null)},specificationId:Number(y.id),context:oe[y.type],specName:y.name,editTo:ke(y.type)??"",isEditInNewTab:y.type==="specification_project",isOff:!E(y)})]})}function re({label:e,first:n,on:o,total:i,isOpen:s,readOnly:a,onToggleOpen:c,onDisableAll:r,onEnableAll:d}){const{t:m}=S("assistant"),u="pf-ai-follows-list-bulk-action";return a?t.jsxs("div",{className:j("pf-ai-follows-list-readonly-band",n&&"pf-ai-follows-list-first-band"),children:[t.jsx(b,{preset:"ai-follows-list-readonly-heading",variant:"footnote",className:"pf-ai-follows-list-readonly-heading",children:e}),t.jsx(b,{preset:"ai-follows-list-readonly-count",weight:"medium",variant:"footnote",children:i})]}):t.jsxs("div",{className:j("pf-ai-follows-list-editable-band",n&&"pf-ai-follows-list-first-band"),children:[t.jsxs("button",{type:"button",onClick:c,"aria-expanded":s,className:"pf-ai-follows-list-expand-trigger",children:[s?t.jsx(Fe,{className:"pf-ai-follows-list-expand-icon"}):t.jsx(it,{className:"pf-ai-follows-list-expand-icon"}),t.jsx("span",{className:"pf-ai-follows-list-heading",children:e}),t.jsxs("span",{className:"pf-ai-follows-list-enabled-count",children:[o,"/",i]})]}),t.jsxs("span",{className:"pf-ai-follows-list-bulk-actions",children:[t.jsx("button",{type:"button",onClick:r,disabled:o===0,className:u,children:m("followsDialog.disableAll")}),t.jsx("span",{className:"pf-ai-follows-list-separator",children:"|"}),t.jsx("button",{type:"button",onClick:d,disabled:o===i,className:u,children:m("followsDialog.enableAll")})]})]})}function at({isProjectSpecificationUnknown:e,onOpenRecipeSpecification:n}){const{t:o}=S("assistant");return t.jsxs("div",{className:"pf-ai-follows-list-empty",children:[t.jsx($,{variant:"footnote",className:"pf-ai-follows-list-empty-message",children:o(e?"followsBar.empty.projectUnavailable":"followsBar.empty.message")}),t.jsx("div",{className:"pf-ai-follows-list-setup-actions",children:t.jsx(ge,{onClick:n,children:o("followsBar.empty.recipeLink")})})]})}function rt({children:e}){return t.jsx("div",{className:"pf-ai-follows-list-setup-row",children:e})}function ge({onClick:e,children:n}){return t.jsx("button",{type:"button",onClick:e,className:"pf-ai-follows-list-setup-action",children:n})}me.__docgenInfo={description:`The "What this chat follows" body: Target Spec (single-select) and
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
>`}]},description:"Omitted when there are no instructions to list."},maxHeightClass:{required:!1,tsType:{name:"string"},description:"Height cap for the scroll area.",defaultValue:{value:'"pf-ai-follows-list-default-height"',computed:!1}}}};const ct=[P.shape.entityType.enum.specification_formula,P.shape.entityType.enum.specification_project];function we(e){return ct.some(n=>n===e)}function ce(e,n){return e?.id?{id:String(e.id),name:e.name??"",type:n}:null}function Rt({recipeSpecification:e,projectSpecification:n}){const o=ce(e,P.shape.entityType.enum.specification_formula),i=ce(n,P.shape.entityType.enum.specification_project);return[o,i].filter(s=>s!==null)}function Ut(e,n){return!e||!n?!e&&!n:e.id===n.id&&e.type===n.type&&e.name===n.name}function At(e){return e.find(n=>n.type===P.shape.entityType.enum.specification_formula)??null}const pt=e=>typeof e=="object"&&e!==null&&!Array.isArray(e),f=(e,n)=>pt(e)?e[n]:void 0;function dt(e){const n=f(e.attributes,"request")??e.request,o=f(f(n,"context"),"referenceEntities");return Array.isArray(o)?o:[]}function ut(e){const n=f(e,"entityType");if(typeof n!="string"||!we(n))return null;const o=f(e,"entityId");if(typeof o!="string"&&typeof o!="number")return null;const i=String(o);if(i==="")return null;const s=f(e,"entityName");return{id:i,name:typeof s=="string"?s:"",type:n}}function ft(e){const n=f(e.attributes,"request")??e.request,o=f(f(n,"context"),"editingEntity");if(f(o,"entityType")!=="formula")return null;const i=f(o,"entityId");if(typeof i!="string"&&typeof i!="number")return null;const s=String(i);return s===""?null:s}function qt(e,n){if(!e?.length)return;const o=n?e.filter(i=>ft(i)===String(n)):e;if(o.length!==0)return dt(o[o.length-1]).map(ut).find(i=>i!==null)??null}function mt(e,n){const o=e??[],i=o.findIndex(s=>s.role==="assistant"&&s.meta?.interactionId===n);for(let s=i-1;s>=0;s--)if(o[s].role==="user"){for(const a of o[s].attachedContent??[]){const c=f(a,"type"),r=f(a,"id");if(typeof c!="string"||!we(c)||typeof r!="string"&&typeof r!="number")continue;const d=f(a,"name");return{id:String(r),name:typeof d=="string"?d:"",type:c}}return null}return null}const gt={"ai-reply-context__tooltip":"pf-ai-reply-context__tooltip-component"},he=h.forwardRef(function({preset:n,className:o,...i},s){const a=typeof n=="string"?[n]:n;return t.jsx(Re,{...i,ref:s,className:j(a.map(c=>gt[c]),o)})});he.__docgenInfo={description:"",methods:[],displayName:"ComposedTooltipContent",props:{preset:{required:!0,tsType:{name:"union",raw:`| ComposedTooltipContentPreset
| readonly ComposedTooltipContentPreset[]`,elements:[{name:"union",raw:"keyof typeof TooltipContentPresets",elements:[{name:"literal",value:'"ai-reply-context__tooltip"'}]},{name:"unknown"}]},description:""}}};function ye({open:e,onOpenChange:n,title:o,description:i,...s}){const{t:a}=S("assistant"),{readOnly:c}=s;return t.jsx(Ge,{open:e,onOpenChange:n,children:t.jsxs(Be,{preset:"ai-follows-dialog-content",className:"pf-ai-follows-dialog-content",children:[t.jsxs(Me,{className:"pf-ai-follows-dialog-header",children:[t.jsx("span",{className:j("pf-ai-follows-dialog-icon-surface",c?"pf-ai-follows-dialog-icon-off":"pf-ai-follows-dialog-icon-on"),children:c?t.jsx(B,{className:"pf-ai-follows-dialog-icon"}):t.jsx(L,{className:"pf-ai-follows-dialog-icon"})}),t.jsxs("div",{className:"pf-ai-follows-dialog-heading-group",children:[t.jsx(Ve,{preset:"ai-follows-dialog-title",children:o??a("followsDialog.title")}),t.jsx(He,{preset:"ai-follows-dialog-description",className:"pf-ai-follows-dialog-description",children:i??a("followsDialog.description")})]})]}),t.jsx("div",{className:"pf-ai-follows-dialog-body",children:t.jsx(me,{...s,maxHeightClass:"pf-ai-follows-dialog-list"})})]})})}ye.__docgenInfo={description:`Modal shell around {@link FollowsList} for a reply's read-only record ("What this reply used").`,methods:[],displayName:"FollowsDialog",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:""},specification:{required:!1,tsType:{name:"intersection",raw:`Pick<
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
>`}]},description:"Omitted when there are no instructions to list."},maxHeightClass:{required:!1,tsType:{name:"string"},description:"Height cap for the scroll area."},open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""}}};function wt({conversationId:e,interactionId:n,scope:o}){const{t:i}=S("assistant"),s=Ue(),a=o===Ae.enum.recipe_formulation_advisor,c=ne(ot(o)),r=ne(qe(n)),[d,m]=h.useState(!1);h.useEffect(()=>{!a||!e||!n||r===void 0&&s(Oe({conversationId:e,interactionId:n}))},[a,e,n,r,s]);const u=h.useMemo(()=>a?mt(c,n):null,[a,c,n]),D=h.useMemo(()=>(r??[]).filter(p=>p.isInEffect).map(p=>({id:p.promptInstructionId,level:p.level,entryType:p.entryType,title:p.title,instruction:p.instruction,isInEffect:p.isInEffect})),[r]),x=h.useMemo(()=>(r??[]).filter(p=>p.isInEffect).map(p=>p.title?.trim()||fe(p.instruction,60)),[r]);if(!a||r===void 0)return null;const v=ue(r);return v===0&&!u?null:t.jsxs(t.Fragment,{children:[t.jsx(de,{delayDuration:150,children:t.jsxs("div",{className:"pf-ai-reply-context__root",children:[t.jsx($,{tone:"muted",variant:"caption",className:"pf-ai-reply-context__label",children:i("replyFollows.used")}),u&&t.jsx(pe,{icon:t.jsx(L,{className:"pf-ai-reply-context__icon"}),label:i("replyFollows.targetSpec"),head:i("replyFollows.targetSpec"),lines:[u.name],onClick:()=>m(!0)}),v>0&&t.jsx(pe,{icon:t.jsx(B,{className:"pf-ai-reply-context__icon"}),label:i("replyFollows.instructions",{count:v}),head:i("followsDialog.instructionsSection"),lines:x,onClick:()=>m(!0)})]})}),t.jsx(ye,{open:d,onOpenChange:m,readOnly:!0,title:i("replyFollows.detailTitle"),description:i("replyFollows.detailDescription"),specification:{isVisible:!!u,options:u?[u]:[],selected:u},instructions:{items:D}})]})}function pe({icon:e,label:n,head:o,lines:i,onClick:s}){const{t:a}=S("assistant"),c=i.slice(0,8),r=i.length-c.length;return t.jsxs($e,{children:[t.jsx(Le,{asChild:!0,children:t.jsxs("button",{type:"button",onClick:s,"aria-label":`${o}: ${i.join(", ")}`,className:"pf-ai-reply-context__chip",children:[e,t.jsx("span",{className:"pf-ai-reply-context__chip-label",children:n})]})}),t.jsxs(he,{preset:"ai-reply-context__tooltip",side:"top",sideOffset:4,className:"pf-ai-reply-context__tooltip",children:[t.jsx("div",{className:"pf-ai-reply-context__tooltip-title",children:o}),t.jsxs("ul",{className:"pf-ai-reply-context__items",children:[c.map((d,m)=>t.jsx("li",{className:"pf-ai-reply-context__item",children:d},`${m}-${d}`)),r>0&&t.jsx("li",{className:"pf-ai-reply-context__remaining",children:a("replyFollows.moreCount",{count:r})})]})]})]})}wt.__docgenInfo={description:`The "Used  Target spec · N instructions" line under an RFA reply. Hover lists
the names, click opens the record read-only.`,methods:[],displayName:"ReplyFollowsSummary",props:{conversationId:{required:!0,tsType:{name:"string"},description:""},interactionId:{required:!0,tsType:{name:"string"},description:""},scope:{required:!0,tsType:{name:"z.infer",elements:[{name:"WebSocketScopeSchema"}],raw:"z.infer<typeof WebSocketScopeSchema>"},description:""}}};export{me as F,wt as R,ye as a,Rt as b,At as c,ue as d,Dt as e,Ft as f,_t as g,we as h,Ut as i,qt as r,Et as s};
