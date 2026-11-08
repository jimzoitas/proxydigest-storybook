import{e as N,aa as P,j as e,r as p,ab as pe}from"./iframe-nhB53rPD.js";import{D as ge,a as ye,c as ve,b as be}from"./dialog-CyBaw9zK.js";import{B as ee}from"./button-_tcBhp5_.js";import{I as ke}from"./index.es-RINfVGjB.js";import{u as fe}from"./use-paginated-api-QJatBdKg.js";import{a as qe}from"./index.module-B262ysEo.js";import{I as he}from"./input-CAdeD_xm.js";import{S as we}from"./skeleton-CMUv0H3w.js";import{T as Se,a as Fe}from"./toggle-group-WfIKaqgN.js";import{F as Ce}from"./file-text-D6e9TeYA.js";import{C as xe}from"./cooking-pot-DU1iV72K.js";import{s as je}from"./ingredientExternalId-BfH8OSym.js";import{B as $}from"./badge-DF9-aVgV.js";import{F as Ne}from"./file-spreadsheet-nRP4Hnad.js";import{s as Te}from"./SearchByConfig-YoiZjbOC.js";import{S as K}from"./search-combobox-wrapper-BVW6dzVE.js";import{P as Ae}from"./plus-0cDzJ2QO.js";function ae({value:r,onValueChange:o,visibleTabs:s,dynamicTabsWithValues:g}){const{t:d}=N("common"),b=[{value:"ingredient",icon:Ce,label:d("searchModal.tabs.allIngredients")},{value:"initialComponent",icon:P,label:d("searchModal.tabs.initialComponents")},{value:"formula",icon:xe,label:d("searchModal.tabs.formulas")},{value:"output",icon:P,label:d("searchModal.tabs.intermediates")},{value:"quickFeedback",icon:P,label:d("searchModal.tabs.quickFeedback")}],F=s?.map(u=>b.find(k=>k.value===u)).filter(u=>!!u);return e.jsx(Se,{type:"single",value:r,onValueChange:o,className:"pf-global-search-tabs",children:F&&[...F,...g||[]].map(u=>e.jsx(Fe,{value:"value"in u?u.value:u.name,className:"pf-global-search-tab",children:e.jsx("span",{children:"label"in u?u.label:u.name})},"value"in u?u.value:u.name))})}ae.__docgenInfo={description:"",methods:[],displayName:"SearchByTabs",props:{value:{required:!0,tsType:{name:"string"},description:""},onValueChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(v: View) => void",signature:{arguments:[{type:{name:"union",raw:`| "ingredient"
| "initialComponent"
| "formula"
| "output"
| "quickFeedback"
| "dynamicOptions"
| "product_category"
| "region"`,elements:[{name:"literal",value:'"ingredient"'},{name:"literal",value:'"initialComponent"'},{name:"literal",value:'"formula"'},{name:"literal",value:'"output"'},{name:"literal",value:'"quickFeedback"'},{name:"literal",value:'"dynamicOptions"'},{name:"literal",value:'"product_category"'},{name:"literal",value:'"region"'}]},name:"v"}],return:{name:"void"}}},description:""},visibleTabs:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:`| "ingredient"
| "initialComponent"
| "formula"
| "output"
| "quickFeedback"
| "dynamicOptions"
| "product_category"
| "region"`,elements:[{name:"literal",value:'"ingredient"'},{name:"literal",value:'"initialComponent"'},{name:"literal",value:'"formula"'},{name:"literal",value:'"output"'},{name:"literal",value:'"quickFeedback"'},{name:"literal",value:'"dynamicOptions"'},{name:"literal",value:'"product_category"'},{name:"literal",value:'"region"'}]}],raw:"View[]"},description:""},dynamicTabsWithValues:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"optionType",value:{name:"literal",value:'"select"',required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"values",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"Array<{ value: string; label: string }>",required:!0}},{key:"scope",value:{name:"z.infer",elements:[{name:"WebSocketScopeSchema"}],raw:"z.infer<typeof WebSocketScopeSchema>",required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:'"region" | "productCategory" | "quickFeedback" | string',elements:[{name:"literal",value:'"region"'},{name:"literal",value:'"productCategory"'},{name:"literal",value:'"quickFeedback"'},{name:"string"}],required:!1}},{key:"allowEmpty",value:{name:"boolean",required:!1}},{key:"allowMultiple",value:{name:"boolean",required:!1}},{key:"allowMultipleLimit",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}}]}}],raw:"ContextOption[]"},description:""}}};function Ie(r,o,s){return!r||r.view!==o?!1:s?!!r.item.name?.toLowerCase().includes(s.toLowerCase()):!0}function j({item:r,decoration:o}){return e.jsxs("div",{className:"pf-search-result-row",children:[e.jsx("div",{className:"pf-search-result-identity",children:e.jsx("span",{className:"pf-search-result-name",children:r.name})}),o]})}j.__docgenInfo={description:"",methods:[],displayName:"AllListItem",props:{item:{required:!0,tsType:{name:"InitialComponent"},description:""},decoration:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};function ne({item:r,decoration:o}){const{t:s}=N("ingredients"),g=r.branded?s("type.branded"):s("type.generic"),d=je(r)?`${g} · ${r.externalSystemId}`:g;return e.jsx("div",{className:"pf-search-result-compact-row",children:e.jsxs("div",{className:"pf-search-result-identity",children:[e.jsxs("div",{className:"pf-search-result-copy",children:[e.jsx("span",{className:"pf-search-result-name",children:r.name}),e.jsx("span",{className:"pf-search-result-description",children:d})]}),o]})})}ne.__docgenInfo={description:"",methods:[],displayName:"IngredientListItem",props:{item:{required:!0,tsType:{name:"Ingredient"},description:""},decoration:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};function re({item:r}){const{t:o}=N("formula");return e.jsxs("div",{className:"pf-search-result-inline-row",children:[e.jsx("span",{className:"pf-search-result-name",children:r?.componentName}),r?.medium&&e.jsx($,{variant:"secondary",children:o("table.mediumLabel")}),e.jsxs($,{className:"pf-search-result-quantity",children:[r?.availableQuantityAmount,r?.availableQuantityUnitSymbol," "," / "," ",r?.amount,r?.unitSymbol]})]})}re.__docgenInfo={description:"",methods:[],displayName:"InitialComponentListItem",props:{item:{required:!0,tsType:{name:"ProcessStepComponent"},description:""}}};function te({item:r,decoration:o}){const{t:s}=N(["formula","common"]),g=r?.project?.name??s("common:breadcrumb.noProject");return e.jsxs("div",{className:"pf-search-result-row",children:[e.jsxs("div",{className:"pf-search-result-identity",children:[e.jsx(Ne,{className:"pf-search-result-icon"}),e.jsxs("div",{className:"pf-search-result-copy",children:[e.jsx("span",{className:"pf-search-result-recipe-name",children:r?.name}),e.jsxs("span",{className:"pf-search-result-description",children:[g,r.externalSystemId&&e.jsxs(e.Fragment,{children:[" ","· ",s("table.columns.externalSystemId"),": ",r.externalSystemId]})]})]})]}),o]})}te.__docgenInfo={description:"",methods:[],displayName:"FormulaListItem",props:{item:{required:!0,tsType:{name:"intersection",raw:`Formula & {
  availableQuantityAmount?: number;
  availableQuantityUnitSymbol?: string;
}`,elements:[{name:"Formula"},{name:"signature",type:"object",raw:`{
  availableQuantityAmount?: number;
  availableQuantityUnitSymbol?: string;
}`,signature:{properties:[{key:"availableQuantityAmount",value:{name:"number",required:!1}},{key:"availableQuantityUnitSymbol",value:{name:"string",required:!1}}]}}]},description:""},decoration:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};function le({item:r}){return e.jsxs("div",{className:"pf-search-result-compact-row",children:[e.jsx("span",{className:"pf-search-result-name",children:r?.name}),e.jsxs($,{className:"pf-search-result-quantity",children:[r.availableQuantityAmount,r.availableQuantityUnitSymbol," "," / "," ",r?.amount,r?.unitSymbol]})]})}le.__docgenInfo={description:"",methods:[],displayName:"OutputListItem",props:{item:{required:!0,tsType:{name:"ProcessStepOutput"},description:""}}};const z={ingredient:ne,initialComponent:re,formula:te,output:le,quickFeedback:j,dynamicOptions:j,product_category:j,region:j};function M({item:r,searchBy:o,onSelect:s,decoration:g}){const d=z[o]?z[o]:z.dynamicOptions;return e.jsx(ee,{variant:"ghost",className:"pf-search-result-button",onClick:()=>s(r),children:d?e.jsx(d,{item:r,decoration:g}):null})}M.__docgenInfo={description:"",methods:[],displayName:"SearchListItem",props:{item:{required:!0,tsType:{name:"union",raw:"Ingredient | InitialComponent | Formula | ContextOption | QuickFeedback",elements:[{name:"Ingredient"},{name:"InitialComponent"},{name:"Formula"},{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"optionType",value:{name:"literal",value:'"select"',required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"values",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"Array<{ value: string; label: string }>",required:!0}},{key:"scope",value:{name:"z.infer",elements:[{name:"WebSocketScopeSchema"}],raw:"z.infer<typeof WebSocketScopeSchema>",required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:'"region" | "productCategory" | "quickFeedback" | string',elements:[{name:"literal",value:'"region"'},{name:"literal",value:'"productCategory"'},{name:"literal",value:'"quickFeedback"'},{name:"string"}],required:!1}},{key:"allowEmpty",value:{name:"boolean",required:!1}},{key:"allowMultiple",value:{name:"boolean",required:!1}},{key:"allowMultipleLimit",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}}]}},{name:"QuickFeedback"}]},description:""},searchBy:{required:!0,tsType:{name:"union",raw:`| "ingredient"
| "initialComponent"
| "formula"
| "output"
| "quickFeedback"
| "dynamicOptions"
| "product_category"
| "region"`,elements:[{name:"literal",value:'"ingredient"'},{name:"literal",value:'"initialComponent"'},{name:"literal",value:'"formula"'},{name:"literal",value:'"output"'},{name:"literal",value:'"quickFeedback"'},{name:"literal",value:'"dynamicOptions"'},{name:"literal",value:'"product_category"'},{name:"literal",value:'"region"'}]},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  item:
    | Ingredient
    | InitialComponent
    | Formula
    | ContextOption
    | QuickFeedback,
) => void`,signature:{arguments:[{type:{name:"union",raw:`| Ingredient
| InitialComponent
| Formula
| ContextOption
| QuickFeedback`,elements:[{name:"Ingredient"},{name:"InitialComponent"},{name:"Formula"},{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"optionType",value:{name:"literal",value:'"select"',required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"values",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"Array<{ value: string; label: string }>",required:!0}},{key:"scope",value:{name:"z.infer",elements:[{name:"WebSocketScopeSchema"}],raw:"z.infer<typeof WebSocketScopeSchema>",required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:'"region" | "productCategory" | "quickFeedback" | string',elements:[{name:"literal",value:'"region"'},{name:"literal",value:'"productCategory"'},{name:"literal",value:'"quickFeedback"'},{name:"string"}],required:!1}},{key:"allowEmpty",value:{name:"boolean",required:!1}},{key:"allowMultiple",value:{name:"boolean",required:!1}},{key:"allowMultipleLimit",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}}]}},{name:"QuickFeedback"}]},name:"item"}],return:{name:"void"}}},description:""},decoration:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};function Me(){return e.jsx("div",{className:"pf-global-search-skeleton",children:Array.from({length:8}).map((r,o)=>e.jsx(we,{className:"pf-global-search-skeleton-row"},o))})}function Oe({open:r,onOpenChange:o,onSelect:s,visibleTabs:g,processStep:d,dynamicTabsWithValues:b,additionalFilters:F,additionalExtras:u,dynamicFilters:k=[],defaultSearchBy:T,createAction:O,renderItemDecoration:L,filterItem:A,pinnedItem:w,searchPlaceholder:B,ingredientAnyCost:D}){const{t:C}=N("common"),_=p.useRef(null),R=p.useRef(null),[U,G]=p.useState(""),[y]=qe(U,500),[l,H]=p.useState(T||g?.[0]||b?.[0]?.name||""),[E,J]=p.useState({}),q=p.useMemo(()=>Te[l],[l]),ie=p.useMemo(()=>{const a=q?.buildFilters(y,d?.order,{includeAnyCost:D})??[],n=F?.[l]||[];if(k.length===0)return[...a,...n];const t=new Map,c=new Map;k.forEach(i=>{if(i.tabToBeAppliedOn&&i.tabToBeAppliedOn!==l)return;const v=`${i.fieldName}-${i.title}`,m=E[v];if(m)if(Array.isArray(m)){if(m.length>0){const h=m.map(f=>f.value);if(t.has(i.fieldName)){const f=t.get(i.fieldName);Array.isArray(f)&&t.set(i.fieldName,[...f,...h])}else t.set(i.fieldName,h),c.set(i.fieldName,i.operator||"in")}}else{const h=m.value==="true"||m.value==="false",f=!isNaN(Number(m.value));if(h){const W=m.value==="true";t.set(i.fieldName,W)}if(f){const W=Number(m.value);t.set(i.fieldName,String(W))}c.set(i.fieldName,i.operator||"eq")}});const S=Array.from(t.entries()).map(([i,v])=>({name:i,op:c.get(i)||"in",val:v}));return[...a,...n,...S]},[q,y,d?.order,F?.[l],l,E,D]),oe=p.useMemo(()=>{const a=q?.extras(y)||"",n=u?.[l]||"";return a&&n?`${a}&${n}`:a||n},[q,u,l,y]),{data:x,isLoading:Q,hasMore:se,nextPage:ue,error:X}=fe({url:q?.url,filters:ie,include:q?.include,extras:oe,deps:[y,l,r],enabled:r&&!!q?.url,initialPageSize:20}),V=p.useMemo(()=>y?b?.map(a=>{const n=(a.values||[]).filter(t=>t.value.toLowerCase().includes(y.toLowerCase())||t.label.toLowerCase().includes(y.toLowerCase()));return n.length>0?{...a,values:n}:null}).filter(Boolean):b,[b,y]),I=Ie(w,l,y),Y=()=>b?.some(n=>n.name===l)?V?.some(n=>n.name===l&&n.values.length>0):I||x?.some(n=>!A||A(n,l)),me=()=>{const a=x?.filter(n=>{const t=!A||A(n,l),c=!I||String(n.id)!==String(w?.item.id);return t&&c});return e.jsxs(e.Fragment,{children:[I&&w&&e.jsx(M,{item:w.item,searchBy:l,onSelect:s,decoration:L?.(w.item,l)},`pinned-${w.item.id}`),a?.map(n=>e.jsx(M,{item:n,searchBy:l,onSelect:s,decoration:L?.(n,l)},n.id))]})},ce=()=>{if(!V?.length)return null;const a=V.find(n=>n.name===l);return a?.values?.length?[...a.values].sort((n,t)=>n.label.localeCompare(t.label)).map(n=>{const t={...a,id:n.value,name:n.label,values:[{value:n.value,label:n.label}],label:n.label,type:a.name,description:n.label};return e.jsx(M,{item:t,searchBy:l,onSelect:s,decoration:L?.(t,l)},`${a.name}-${n.value}-${n.label}`)}):null},de=()=>(x?.length>0||I)&&!b?.some(a=>a.name===l)?me():ce(),Z=p.useCallback((a,n)=>{k.length!==0&&J(t=>{if(n===null){const{[a]:v,...m}=t;return m}const c=t[a],S=a.split("-")[0],i=k.find(v=>v.fieldName===S)?.multiple;if(!c)return i?{...t,[a]:n?[n]:[]}:{...t,[a]:n};if(Array.isArray(c)){if(c.some(m=>m.value===n.value)){const m=c.filter(h=>h.value!==n.value);if(m.length===0){const{[a]:h,...f}=t;return f}return{...t,[a]:m}}return{...t,[a]:[...c,n]}}return i?{...t,[a]:[c,n]}:{...t,[a]:n}})},[k]);return p.useEffect(()=>{T!==void 0&&r&&(H(T),G(""))},[T,r]),p.useEffect(()=>{r&&_.current&&(_.current.scrollTop=0)},[y,r]),p.useEffect(()=>{r||J({})},[r]),e.jsx(ge,{open:r,onOpenChange:o,children:e.jsxs(ye,{onOpenAutoFocus:()=>{const a=document.activeElement;R.current=a instanceof HTMLElement&&a!==document.body?a:null},onCloseAutoFocus:a=>{R.current?.isConnected&&(a.preventDefault(),R.current.focus())},"aria-describedby":void 0,className:"pf-global-search-dialog",children:[e.jsx(ve,{className:"pf-global-search-accessible-title",children:C("search.title")}),e.jsxs(be,{className:"pf-global-search-header",children:[e.jsx(he,{"aria-label":B??C("search.placeholder"),placeholder:B??C("search.placeholder"),className:"pf-global-search-input pf-field-focus-underline",value:U,onChange:a=>G(a.target.value)}),e.jsx(ae,{value:l,onValueChange:a=>H(a),visibleTabs:g,dynamicTabsWithValues:b})]}),k.length>0&&e.jsx("div",{className:"pf-global-search-filters",children:k.filter(a=>a.tabToBeAppliedOn===l)?.map(a=>{const n=`${a.fieldName}-${a.title}`,t=E[n],c=a.multiple===!0,S=c?Array.isArray(t)?t:t?[t]:[]:void 0,i=c?null:Array.isArray(t)?t[0]||null:t||null;return a.searchFn?e.jsx("div",{className:"pf-global-search-filter",children:e.jsx(K,{className:"pf-global-search-filter-control pf-global-search-slot",allowEmpty:!0,selected:i,selectedValues:S,onSearch:a.searchFn,placeholder:Array.isArray(t)&&t.length>0?`${a.title} (${t.length})`:a.title,onChange:v=>{Z(n,v)}},n)},n):e.jsx("div",{className:"pf-global-search-filter",children:e.jsx(K,{className:"pf-global-search-filter-control pf-global-search-slot",allowEmpty:!0,selected:i,selectedValues:S,isClient:!0,inputOptions:a.options||[],placeholder:Array.isArray(t)&&t.length>0?`${a.title} (${t.length})`:a.title,onChange:v=>{Z(n,v)}},n)},n)})}),O&&l===O.tabValue&&e.jsxs(ee,{variant:"ghost",className:"pf-global-search-create",onClick:O.onClick,children:[e.jsx(Ae,{className:"pf-global-search-create-icon"}),"New Note"]}),e.jsxs("div",{id:"ingredients-list",ref:_,className:"pf-global-search-results",children:[Q&&x?.length===0&&e.jsx(Me,{}),!!X&&e.jsx("p",{role:"alert",children:C("search.failed")}),!Q&&!X&&!Y()&&e.jsx("div",{className:"pf-global-search-empty",children:e.jsx("p",{className:"pf-global-search-empty-message",children:C("emptyStates.noItemsFound")})}),!Q&&Y()&&e.jsx(ke,{dataLength:x?.length||0,next:ue,hasMore:se,loader:e.jsx("div",{className:"pf-global-search-loading-more",children:e.jsx(pe,{isLoading:!0})}),scrollableTarget:"ingredients-list",children:de()})]})]})})}Oe.__docgenInfo={description:"",methods:[],displayName:"GlobalSearchModal",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  itemValue:
    | Ingredient
    | InitialComponent
    | Formula
    | ContextOption
    | QuickFeedback,
) => void`,signature:{arguments:[{type:{name:"union",raw:`| Ingredient
| InitialComponent
| Formula
| ContextOption
| QuickFeedback`,elements:[{name:"Ingredient"},{name:"InitialComponent"},{name:"Formula"},{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"optionType",value:{name:"literal",value:'"select"',required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"values",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"Array<{ value: string; label: string }>",required:!0}},{key:"scope",value:{name:"z.infer",elements:[{name:"WebSocketScopeSchema"}],raw:"z.infer<typeof WebSocketScopeSchema>",required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:'"region" | "productCategory" | "quickFeedback" | string',elements:[{name:"literal",value:'"region"'},{name:"literal",value:'"productCategory"'},{name:"literal",value:'"quickFeedback"'},{name:"string"}],required:!1}},{key:"allowEmpty",value:{name:"boolean",required:!1}},{key:"allowMultiple",value:{name:"boolean",required:!1}},{key:"allowMultipleLimit",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}}]}},{name:"QuickFeedback"}]},name:"itemValue"}],return:{name:"void"}}},description:""},visibleTabs:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:`| "ingredient"
| "initialComponent"
| "formula"
| "output"
| "quickFeedback"
| "dynamicOptions"
| "product_category"
| "region"`,elements:[{name:"literal",value:'"ingredient"'},{name:"literal",value:'"initialComponent"'},{name:"literal",value:'"formula"'},{name:"literal",value:'"output"'},{name:"literal",value:'"quickFeedback"'},{name:"literal",value:'"dynamicOptions"'},{name:"literal",value:'"product_category"'},{name:"literal",value:'"region"'}]}],raw:"View[]"},description:""},processStep:{required:!1,tsType:{name:"union",raw:"ProcessStep | null",elements:[{name:"ProcessStep"},{name:"null"}]},description:""},dynamicTabsWithValues:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"optionType",value:{name:"literal",value:'"select"',required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"values",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"Array<{ value: string; label: string }>",required:!0}},{key:"scope",value:{name:"z.infer",elements:[{name:"WebSocketScopeSchema"}],raw:"z.infer<typeof WebSocketScopeSchema>",required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:'"region" | "productCategory" | "quickFeedback" | string',elements:[{name:"literal",value:'"region"'},{name:"literal",value:'"productCategory"'},{name:"literal",value:'"quickFeedback"'},{name:"string"}],required:!1}},{key:"allowEmpty",value:{name:"boolean",required:!1}},{key:"allowMultiple",value:{name:"boolean",required:!1}},{key:"allowMultipleLimit",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}}]}}],raw:"ContextOption[]"},description:""},additionalFilters:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:`| "ingredient"
| "initialComponent"
| "formula"
| "output"
| "quickFeedback"
| "dynamicOptions"
| "product_category"
| "region"`,elements:[{name:"literal",value:'"ingredient"'},{name:"literal",value:'"initialComponent"'},{name:"literal",value:'"formula"'},{name:"literal",value:'"output"'},{name:"literal",value:'"quickFeedback"'},{name:"literal",value:'"dynamicOptions"'},{name:"literal",value:'"product_category"'},{name:"literal",value:'"region"'}]},{name:"Array",elements:[{name:"Filter"}],raw:"Filter[]"}],raw:"Record<View, Filter[]>"}],raw:"Partial<Record<View, Filter[]>>"},description:""},additionalExtras:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:`| "ingredient"
| "initialComponent"
| "formula"
| "output"
| "quickFeedback"
| "dynamicOptions"
| "product_category"
| "region"`,elements:[{name:"literal",value:'"ingredient"'},{name:"literal",value:'"initialComponent"'},{name:"literal",value:'"formula"'},{name:"literal",value:'"output"'},{name:"literal",value:'"quickFeedback"'},{name:"literal",value:'"dynamicOptions"'},{name:"literal",value:'"product_category"'},{name:"literal",value:'"region"'}]},{name:"string"}],raw:"Record<View, string>"}],raw:"Partial<Record<View, string>>"},description:""},dynamicFilters:{required:!1,tsType:{name:"Array",elements:[{name:"FilterConfig"}],raw:"FilterConfig[]"},description:"",defaultValue:{value:"[]",computed:!1}},defaultSearchBy:{required:!1,tsType:{name:"union",raw:`| "ingredient"
| "initialComponent"
| "formula"
| "output"
| "quickFeedback"
| "dynamicOptions"
| "product_category"
| "region"`,elements:[{name:"literal",value:'"ingredient"'},{name:"literal",value:'"initialComponent"'},{name:"literal",value:'"formula"'},{name:"literal",value:'"output"'},{name:"literal",value:'"quickFeedback"'},{name:"literal",value:'"dynamicOptions"'},{name:"literal",value:'"product_category"'},{name:"literal",value:'"region"'}]},description:""},createAction:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  tabValue: View;
  onClick: () => void;
}`,signature:{properties:[{key:"tabValue",value:{name:"union",raw:`| "ingredient"
| "initialComponent"
| "formula"
| "output"
| "quickFeedback"
| "dynamicOptions"
| "product_category"
| "region"`,elements:[{name:"literal",value:'"ingredient"'},{name:"literal",value:'"initialComponent"'},{name:"literal",value:'"formula"'},{name:"literal",value:'"output"'},{name:"literal",value:'"quickFeedback"'},{name:"literal",value:'"dynamicOptions"'},{name:"literal",value:'"product_category"'},{name:"literal",value:'"region"'}],required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},description:""},renderItemDecoration:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  item:
    | Ingredient
    | InitialComponent
    | Formula
    | ContextOption
    | QuickFeedback,
  view: View,
) => React.ReactNode`,signature:{arguments:[{type:{name:"union",raw:`| Ingredient
| InitialComponent
| Formula
| ContextOption
| QuickFeedback`,elements:[{name:"Ingredient"},{name:"InitialComponent"},{name:"Formula"},{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"optionType",value:{name:"literal",value:'"select"',required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"values",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"Array<{ value: string; label: string }>",required:!0}},{key:"scope",value:{name:"z.infer",elements:[{name:"WebSocketScopeSchema"}],raw:"z.infer<typeof WebSocketScopeSchema>",required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:'"region" | "productCategory" | "quickFeedback" | string',elements:[{name:"literal",value:'"region"'},{name:"literal",value:'"productCategory"'},{name:"literal",value:'"quickFeedback"'},{name:"string"}],required:!1}},{key:"allowEmpty",value:{name:"boolean",required:!1}},{key:"allowMultiple",value:{name:"boolean",required:!1}},{key:"allowMultipleLimit",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}}]}},{name:"QuickFeedback"}]},name:"item"},{type:{name:"union",raw:`| "ingredient"
| "initialComponent"
| "formula"
| "output"
| "quickFeedback"
| "dynamicOptions"
| "product_category"
| "region"`,elements:[{name:"literal",value:'"ingredient"'},{name:"literal",value:'"initialComponent"'},{name:"literal",value:'"formula"'},{name:"literal",value:'"output"'},{name:"literal",value:'"quickFeedback"'},{name:"literal",value:'"dynamicOptions"'},{name:"literal",value:'"product_category"'},{name:"literal",value:'"region"'}]},name:"view"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},filterItem:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  item:
    | Ingredient
    | InitialComponent
    | Formula
    | ContextOption
    | QuickFeedback,
  view: View,
) => boolean`,signature:{arguments:[{type:{name:"union",raw:`| Ingredient
| InitialComponent
| Formula
| ContextOption
| QuickFeedback`,elements:[{name:"Ingredient"},{name:"InitialComponent"},{name:"Formula"},{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"optionType",value:{name:"literal",value:'"select"',required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"values",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"Array<{ value: string; label: string }>",required:!0}},{key:"scope",value:{name:"z.infer",elements:[{name:"WebSocketScopeSchema"}],raw:"z.infer<typeof WebSocketScopeSchema>",required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:'"region" | "productCategory" | "quickFeedback" | string',elements:[{name:"literal",value:'"region"'},{name:"literal",value:'"productCategory"'},{name:"literal",value:'"quickFeedback"'},{name:"string"}],required:!1}},{key:"allowEmpty",value:{name:"boolean",required:!1}},{key:"allowMultiple",value:{name:"boolean",required:!1}},{key:"allowMultipleLimit",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}}]}},{name:"QuickFeedback"}]},name:"item"},{type:{name:"union",raw:`| "ingredient"
| "initialComponent"
| "formula"
| "output"
| "quickFeedback"
| "dynamicOptions"
| "product_category"
| "region"`,elements:[{name:"literal",value:'"ingredient"'},{name:"literal",value:'"initialComponent"'},{name:"literal",value:'"formula"'},{name:"literal",value:'"output"'},{name:"literal",value:'"quickFeedback"'},{name:"literal",value:'"dynamicOptions"'},{name:"literal",value:'"product_category"'},{name:"literal",value:'"region"'}]},name:"view"}],return:{name:"boolean"}}},description:""},pinnedItem:{required:!1,tsType:{name:"union",raw:`{
  view: View;
  item:
    | Ingredient
    | InitialComponent
    | Formula
    | ContextOption
    | QuickFeedback;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  view: View;
  item:
    | Ingredient
    | InitialComponent
    | Formula
    | ContextOption
    | QuickFeedback;
}`,signature:{properties:[{key:"view",value:{name:"union",raw:`| "ingredient"
| "initialComponent"
| "formula"
| "output"
| "quickFeedback"
| "dynamicOptions"
| "product_category"
| "region"`,elements:[{name:"literal",value:'"ingredient"'},{name:"literal",value:'"initialComponent"'},{name:"literal",value:'"formula"'},{name:"literal",value:'"output"'},{name:"literal",value:'"quickFeedback"'},{name:"literal",value:'"dynamicOptions"'},{name:"literal",value:'"product_category"'},{name:"literal",value:'"region"'}],required:!0}},{key:"item",value:{name:"union",raw:`| Ingredient
| InitialComponent
| Formula
| ContextOption
| QuickFeedback`,elements:[{name:"Ingredient"},{name:"InitialComponent"},{name:"Formula"},{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"optionType",value:{name:"literal",value:'"select"',required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"values",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"Array<{ value: string; label: string }>",required:!0}},{key:"scope",value:{name:"z.infer",elements:[{name:"WebSocketScopeSchema"}],raw:"z.infer<typeof WebSocketScopeSchema>",required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:'"region" | "productCategory" | "quickFeedback" | string',elements:[{name:"literal",value:'"region"'},{name:"literal",value:'"productCategory"'},{name:"literal",value:'"quickFeedback"'},{name:"string"}],required:!1}},{key:"allowEmpty",value:{name:"boolean",required:!1}},{key:"allowMultiple",value:{name:"boolean",required:!1}},{key:"allowMultipleLimit",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}}]}},{name:"QuickFeedback"}],required:!0}}]}},{name:"null"}]},description:`An item to always show first in its tab's results (e.g. the current
recipe in Regulatory's formula tab), independent of the API search
results. Hidden once the search term stops matching its name, and
de-duplicated against \`data\` if the API also returns it.`},searchPlaceholder:{required:!1,tsType:{name:"string"},description:""},ingredientAnyCost:{required:!1,tsType:{name:"boolean"},description:`When true, the "ingredient" tab search skips the USA/USD/retail cost
filters so ingredients without a priced cost are still selectable
(SCRM-8089). Used by formula create/edit ingredient pickers.`}}};export{Oe as G,M as S,ae as a};
