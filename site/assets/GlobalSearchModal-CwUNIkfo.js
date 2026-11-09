import{r as p,j as e,g as ee,a4 as T,as as P,ch as ge}from"./iframe-DgvZnKtv.js";import{C as ye,a as ve}from"./composed-surface-thTtt0jI.js";import{S as be,G as ke}from"./trigger-adapters-C3qlkAhu.js";import{b as fe}from"./input-adapters-Ck_awmH0.js";import{D as he,c as qe}from"./dialog-BGED6ss2.js";import{I as we}from"./index.es-BGW_4PyL.js";import{u as Se}from"./use-paginated-api-Br3kYEE1.js";import{a as Fe}from"./index.module-C-pw7-ZN.js";import{S as Ce}from"./skeleton-DwZsbo-S.js";import{a as xe,T as je}from"./toggle-group-D6oIStAM.js";import{S as Te}from"./slider-UYb5RKBF.js";import{F as Ne}from"./file-text-C-eb-1Yd.js";import{C as Ie}from"./cooking-pot-DZnilx8f.js";import{s as Ae}from"./ingredientExternalId-DOz8m7gY.js";import{B as $}from"./badge-C-Jji8Kx.js";import{F as Me}from"./file-spreadsheet-BffC2TlF.js";import{s as Oe}from"./SearchByConfig-Dg_Foj-v.js";import{S as K}from"./search-combobox-wrapper-D669X1G-.js";import{P as _e}from"./plus-BMpb-JrX.js";const ae=p.forwardRef(function({className:o,...s},c){return e.jsx(xe,{...s,ref:c,className:ee("pf-global-search-tab",o)})}),Re=p.forwardRef(function({className:o,...s},c){return e.jsx(Te,{...s,ref:c,className:ee("pf-form-slider-target",o)})});ae.__docgenInfo={description:"Existing shared-control modifiers, with component-owned styling and unchanged native contracts.",methods:[],displayName:"GlobalSearchTab"};Re.__docgenInfo={description:"",methods:[],displayName:"TargetSlider"};function ne({value:r,onValueChange:o,visibleTabs:s,dynamicTabsWithValues:c}){const{t:g}=T("common"),b=[{value:"ingredient",icon:Ne,label:g("searchModal.tabs.allIngredients")},{value:"initialComponent",icon:P,label:g("searchModal.tabs.initialComponents")},{value:"formula",icon:Ie,label:g("searchModal.tabs.formulas")},{value:"output",icon:P,label:g("searchModal.tabs.intermediates")},{value:"quickFeedback",icon:P,label:g("searchModal.tabs.quickFeedback")}],F=s?.map(u=>b.find(k=>k.value===u)).filter(u=>!!u);return e.jsx(je,{type:"single",value:r,onValueChange:o,className:"pf-global-search-tabs",children:F&&[...F,...c||[]].map(u=>e.jsx(ae,{value:"value"in u?u.value:u.name,children:e.jsx("span",{children:"label"in u?u.label:u.name})},"value"in u?u.value:u.name))})}ne.__docgenInfo={description:"",methods:[],displayName:"SearchByTabs",props:{value:{required:!0,tsType:{name:"string"},description:""},onValueChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(v: View) => void",signature:{arguments:[{type:{name:"union",raw:`| "ingredient"
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
}`,signature:{properties:[{key:"optionType",value:{name:"literal",value:'"select"',required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"values",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"Array<{ value: string; label: string }>",required:!0}},{key:"scope",value:{name:"z.infer",elements:[{name:"WebSocketScopeSchema"}],raw:"z.infer<typeof WebSocketScopeSchema>",required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:'"region" | "productCategory" | "quickFeedback" | string',elements:[{name:"literal",value:'"region"'},{name:"literal",value:'"productCategory"'},{name:"literal",value:'"quickFeedback"'},{name:"string"}],required:!1}},{key:"allowEmpty",value:{name:"boolean",required:!1}},{key:"allowMultiple",value:{name:"boolean",required:!1}},{key:"allowMultipleLimit",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}}]}}],raw:"ContextOption[]"},description:""}}};function Le(r,o,s){return!r||r.view!==o?!1:s?!!r.item.name?.toLowerCase().includes(s.toLowerCase()):!0}function j({item:r,decoration:o}){return e.jsxs("div",{className:"pf-search-result-row",children:[e.jsx("div",{className:"pf-search-result-identity",children:e.jsx("span",{className:"pf-search-result-name",children:r.name})}),o]})}j.__docgenInfo={description:"",methods:[],displayName:"AllListItem",props:{item:{required:!0,tsType:{name:"InitialComponent"},description:""},decoration:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};function re({item:r,decoration:o}){const{t:s}=T("ingredients"),c=r.branded?s("type.branded"):s("type.generic"),g=Ae(r)?`${c} · ${r.externalSystemId}`:c;return e.jsx("div",{className:"pf-search-result-compact-row",children:e.jsxs("div",{className:"pf-search-result-identity",children:[e.jsxs("div",{className:"pf-search-result-copy",children:[e.jsx("span",{className:"pf-search-result-name",children:r.name}),e.jsx("span",{className:"pf-search-result-description",children:g})]}),o]})})}re.__docgenInfo={description:"",methods:[],displayName:"IngredientListItem",props:{item:{required:!0,tsType:{name:"Ingredient"},description:""},decoration:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};function te({item:r}){const{t:o}=T("formula");return e.jsxs("div",{className:"pf-search-result-inline-row",children:[e.jsx("span",{className:"pf-search-result-name",children:r?.componentName}),r?.medium&&e.jsx($,{variant:"secondary",children:o("table.mediumLabel")}),e.jsxs($,{className:"pf-search-result-quantity",children:[r?.availableQuantityAmount,r?.availableQuantityUnitSymbol," "," / "," ",r?.amount,r?.unitSymbol]})]})}te.__docgenInfo={description:"",methods:[],displayName:"InitialComponentListItem",props:{item:{required:!0,tsType:{name:"ProcessStepComponent"},description:""}}};function le({item:r,decoration:o}){const{t:s}=T(["formula","common"]),c=r?.project?.name??s("common:breadcrumb.noProject");return e.jsxs("div",{className:"pf-search-result-row",children:[e.jsxs("div",{className:"pf-search-result-identity",children:[e.jsx(Me,{className:"pf-search-result-icon"}),e.jsxs("div",{className:"pf-search-result-copy",children:[e.jsx("span",{className:"pf-search-result-recipe-name",children:r?.name}),e.jsxs("span",{className:"pf-search-result-description",children:[c,r.externalSystemId&&e.jsxs(e.Fragment,{children:[" ","· ",s("table.columns.externalSystemId"),": ",r.externalSystemId]})]})]})]}),o]})}le.__docgenInfo={description:"",methods:[],displayName:"FormulaListItem",props:{item:{required:!0,tsType:{name:"intersection",raw:`Formula & {
  availableQuantityAmount?: number;
  availableQuantityUnitSymbol?: string;
}`,elements:[{name:"Formula"},{name:"signature",type:"object",raw:`{
  availableQuantityAmount?: number;
  availableQuantityUnitSymbol?: string;
}`,signature:{properties:[{key:"availableQuantityAmount",value:{name:"number",required:!1}},{key:"availableQuantityUnitSymbol",value:{name:"string",required:!1}}]}}]},description:""},decoration:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};function ie({item:r}){return e.jsxs("div",{className:"pf-search-result-compact-row",children:[e.jsx("span",{className:"pf-search-result-name",children:r?.name}),e.jsxs($,{className:"pf-search-result-quantity",children:[r.availableQuantityAmount,r.availableQuantityUnitSymbol," "," / "," ",r?.amount,r?.unitSymbol]})]})}ie.__docgenInfo={description:"",methods:[],displayName:"OutputListItem",props:{item:{required:!0,tsType:{name:"ProcessStepOutput"},description:""}}};const z={ingredient:re,initialComponent:te,formula:le,output:ie,quickFeedback:j,dynamicOptions:j,product_category:j,region:j};function M({item:r,searchBy:o,onSelect:s,decoration:c}){const g=z[o]?z[o]:z.dynamicOptions;return e.jsx(be,{variant:"ghost",onClick:()=>s(r),children:g?e.jsx(g,{item:r,decoration:c}):null})}M.__docgenInfo={description:"",methods:[],displayName:"SearchListItem",props:{item:{required:!0,tsType:{name:"union",raw:"Ingredient | InitialComponent | Formula | ContextOption | QuickFeedback",elements:[{name:"Ingredient"},{name:"InitialComponent"},{name:"Formula"},{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"optionType",value:{name:"literal",value:'"select"',required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"values",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"Array<{ value: string; label: string }>",required:!0}},{key:"scope",value:{name:"z.infer",elements:[{name:"WebSocketScopeSchema"}],raw:"z.infer<typeof WebSocketScopeSchema>",required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:'"region" | "productCategory" | "quickFeedback" | string',elements:[{name:"literal",value:'"region"'},{name:"literal",value:'"productCategory"'},{name:"literal",value:'"quickFeedback"'},{name:"string"}],required:!1}},{key:"allowEmpty",value:{name:"boolean",required:!1}},{key:"allowMultiple",value:{name:"boolean",required:!1}},{key:"allowMultipleLimit",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}}]}},{name:"QuickFeedback"}]},name:"item"}],return:{name:"void"}}},description:""},decoration:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};function Ee(){return e.jsx("div",{className:"pf-global-search-skeleton",children:Array.from({length:8}).map((r,o)=>e.jsx(Ce,{className:"pf-global-search-skeleton-row"},o))})}function Qe({open:r,onOpenChange:o,onSelect:s,visibleTabs:c,processStep:g,dynamicTabsWithValues:b,additionalFilters:F,additionalExtras:u,dynamicFilters:k=[],defaultSearchBy:N,createAction:O,renderItemDecoration:_,filterItem:I,pinnedItem:w,searchPlaceholder:B,ingredientAnyCost:D}){const{t:C}=T("common"),R=p.useRef(null),L=p.useRef(null),[G,U]=p.useState(""),[y]=Fe(G,500),[l,H]=p.useState(N||c?.[0]||b?.[0]?.name||""),[E,J]=p.useState({}),h=p.useMemo(()=>Oe[l],[l]),oe=p.useMemo(()=>{const a=h?.buildFilters(y,g?.order,{includeAnyCost:D})??[],n=F?.[l]||[];if(k.length===0)return[...a,...n];const t=new Map,d=new Map;k.forEach(i=>{if(i.tabToBeAppliedOn&&i.tabToBeAppliedOn!==l)return;const v=`${i.fieldName}-${i.title}`,m=E[v];if(m)if(Array.isArray(m)){if(m.length>0){const q=m.map(f=>f.value);if(t.has(i.fieldName)){const f=t.get(i.fieldName);Array.isArray(f)&&t.set(i.fieldName,[...f,...q])}else t.set(i.fieldName,q),d.set(i.fieldName,i.operator||"in")}}else{const q=m.value==="true"||m.value==="false",f=!isNaN(Number(m.value));if(q){const W=m.value==="true";t.set(i.fieldName,W)}if(f){const W=Number(m.value);t.set(i.fieldName,String(W))}d.set(i.fieldName,i.operator||"eq")}});const S=Array.from(t.entries()).map(([i,v])=>({name:i,op:d.get(i)||"in",val:v}));return[...a,...n,...S]},[h,y,g?.order,F?.[l],l,E,D]),se=p.useMemo(()=>{const a=h?.extras(y)||"",n=u?.[l]||"";return a&&n?`${a}&${n}`:a||n},[h,u,l,y]),{data:x,isLoading:Q,hasMore:ue,nextPage:me,error:X}=Se({url:h?.url,filters:oe,include:h?.include,extras:se,deps:[y,l,r],enabled:r&&!!h?.url,initialPageSize:20}),V=p.useMemo(()=>y?b?.map(a=>{const n=(a.values||[]).filter(t=>t.value.toLowerCase().includes(y.toLowerCase())||t.label.toLowerCase().includes(y.toLowerCase()));return n.length>0?{...a,values:n}:null}).filter(Boolean):b,[b,y]),A=Le(w,l,y),Y=()=>b?.some(n=>n.name===l)?V?.some(n=>n.name===l&&n.values.length>0):A||x?.some(n=>!I||I(n,l)),ce=()=>{const a=x?.filter(n=>{const t=!I||I(n,l),d=!A||String(n.id)!==String(w?.item.id);return t&&d});return e.jsxs(e.Fragment,{children:[A&&w&&e.jsx(M,{item:w.item,searchBy:l,onSelect:s,decoration:_?.(w.item,l)},`pinned-${w.item.id}`),a?.map(n=>e.jsx(M,{item:n,searchBy:l,onSelect:s,decoration:_?.(n,l)},n.id))]})},de=()=>{if(!V?.length)return null;const a=V.find(n=>n.name===l);return a?.values?.length?[...a.values].sort((n,t)=>n.label.localeCompare(t.label)).map(n=>{const t={...a,id:n.value,name:n.label,values:[{value:n.value,label:n.label}],label:n.label,type:a.name,description:n.label};return e.jsx(M,{item:t,searchBy:l,onSelect:s,decoration:_?.(t,l)},`${a.name}-${n.value}-${n.label}`)}):null},pe=()=>(x?.length>0||A)&&!b?.some(a=>a.name===l)?ce():de(),Z=p.useCallback((a,n)=>{k.length!==0&&J(t=>{if(n===null){const{[a]:v,...m}=t;return m}const d=t[a],S=a.split("-")[0],i=k.find(v=>v.fieldName===S)?.multiple;if(!d)return i?{...t,[a]:n?[n]:[]}:{...t,[a]:n};if(Array.isArray(d)){if(d.some(m=>m.value===n.value)){const m=d.filter(q=>q.value!==n.value);if(m.length===0){const{[a]:q,...f}=t;return f}return{...t,[a]:m}}return{...t,[a]:[...d,n]}}return i?{...t,[a]:[d,n]}:{...t,[a]:n}})},[k]);return p.useEffect(()=>{N!==void 0&&r&&(H(N),U(""))},[N,r]),p.useEffect(()=>{r&&R.current&&(R.current.scrollTop=0)},[y,r]),p.useEffect(()=>{r||J({})},[r]),e.jsx(he,{open:r,onOpenChange:o,children:e.jsxs(ye,{preset:"global-search-dialog",onOpenAutoFocus:()=>{const a=document.activeElement;L.current=a instanceof HTMLElement&&a!==document.body?a:null},onCloseAutoFocus:a=>{L.current?.isConnected&&(a.preventDefault(),L.current.focus())},"aria-describedby":void 0,className:"pf-global-search-dialog",children:[e.jsx(ve,{preset:"global-search-accessible-title",className:"pf-global-search-accessible-title",children:C("search.title")}),e.jsxs(qe,{className:"pf-global-search-header",children:[e.jsx(fe,{"aria-label":B??C("search.placeholder"),placeholder:B??C("search.placeholder"),className:"pf-field-focus-underline",value:G,onChange:a=>U(a.target.value)}),e.jsx(ne,{value:l,onValueChange:a=>H(a),visibleTabs:c,dynamicTabsWithValues:b})]}),k.length>0&&e.jsx("div",{className:"pf-global-search-filters",children:k.filter(a=>a.tabToBeAppliedOn===l)?.map(a=>{const n=`${a.fieldName}-${a.title}`,t=E[n],d=a.multiple===!0,S=d?Array.isArray(t)?t:t?[t]:[]:void 0,i=d?null:Array.isArray(t)?t[0]||null:t||null;return a.searchFn?e.jsx("div",{className:"pf-global-search-filter",children:e.jsx(K,{className:"pf-global-search-filter-control pf-global-search-slot",allowEmpty:!0,selected:i,selectedValues:S,onSearch:a.searchFn,placeholder:Array.isArray(t)&&t.length>0?`${a.title} (${t.length})`:a.title,onChange:v=>{Z(n,v)}},n)},n):e.jsx("div",{className:"pf-global-search-filter",children:e.jsx(K,{className:"pf-global-search-filter-control pf-global-search-slot",allowEmpty:!0,selected:i,selectedValues:S,isClient:!0,inputOptions:a.options||[],placeholder:Array.isArray(t)&&t.length>0?`${a.title} (${t.length})`:a.title,onChange:v=>{Z(n,v)}},n)},n)})}),O&&l===O.tabValue&&e.jsxs(ke,{variant:"ghost",onClick:O.onClick,children:[e.jsx(_e,{className:"pf-global-search-create-icon"}),"New Note"]}),e.jsxs("div",{id:"ingredients-list",ref:R,className:"pf-global-search-results",children:[Q&&x?.length===0&&e.jsx(Ee,{}),!!X&&e.jsx("p",{role:"alert",children:C("search.failed")}),!Q&&!X&&!Y()&&e.jsx("div",{className:"pf-global-search-empty",children:e.jsx("p",{className:"pf-global-search-empty-message",children:C("emptyStates.noItemsFound")})}),!Q&&Y()&&e.jsx(we,{dataLength:x?.length||0,next:me,hasMore:ue,loader:e.jsx("div",{className:"pf-global-search-loading-more",children:e.jsx(ge,{isLoading:!0})}),scrollableTarget:"ingredients-list",children:pe()})]})]})})}Qe.__docgenInfo={description:"",methods:[],displayName:"GlobalSearchModal",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:`(
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
(SCRM-8089). Used by formula create/edit ingredient pickers.`}}};export{Qe as G,M as S,Re as T,ne as a};
