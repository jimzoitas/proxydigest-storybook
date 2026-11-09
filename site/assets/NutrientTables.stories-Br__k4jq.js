import{a4 as fe,a as he,eX as ve,j as e,ch as be,g as R,r as pe}from"./iframe-DgvZnKtv.js";import{n as r,N as ge,I as me}from"./IngredientNutritionalTable-BULIe3xv.js";import{T as xe,a as we,b as O,c as W,d as _e,e as C}from"./table-C0CN-w6L.js";import{f}from"./nutritional.utils-BsPohKBx.js";import{N as Ce}from"./NutritionalSummaryTable-BwRph7M1.js";import"./preload-helper-PPVm8Dsz.js";import"./composed-typography-BeKxRqyR.js";import"./chevron-right-B8SZue5v.js";/* empty css                               */import"./button-CEcYiQdY.js";import"./index-BWlKOsdO.js";import"./loader-circle-BsZrs7F6.js";import"./RetentionIndicator-B4_5eTyY.js";import"./arrow-up-DRg4XE8a.js";import"./arrow-up-right-QD6y7BbT.js";import"./arrow-right-C6VOmjZC.js";import"./arrow-down-right-D1ZCumsG.js";import"./arrow-down-D8en1gMt.js";import"./lock-keyhole-CLc1cPDN.js";const z=89,ye=({nutrient:a,depth:t,displayMode:l,hasTargetFormulas:T,anchorColor:o,targetColors:B,hasActualTarget:u=!1,isInsideOther:S=!1})=>{const[h,i]=pe.useState(!1),d=a.children.length>0,x=a.formulas,v=x?.anchor,w=(v?.quantity?.value||0)>0,b=`calc(${t} * var(--group-pattern-nutrient-tables-pf-hierarchy-step))`;function s(n,p,_,A){if(A){const H=n===0?0:p/(n-p)*100,I=H>0?"+":(H<0,""),E=H>0?"pf-analytics-analytics-table__difference--positive":H<0?"pf-analytics-analytics-table__difference--negative":"";return{actual:f(n,_),diff:`(${I}${H.toFixed(1)}%)`,colorClass:E}}const D=p>0?"+":(p<0,""),le=p>0?"pf-analytics-analytics-table__difference--positive":p<0?"pf-analytics-analytics-table__difference--negative":"";return{actual:f(n,_),diff:`(${D}${f(p,_)})`,colorClass:le}}function m(n,p,_){return p.id===z||S&&d?"":_?f(_.quantity.value,_.quantity.unit):"—"}function c(n,p,_,A,D){if(p.id===z||S&&d)return"";if(!_?.target?.[0])return"—";const I=A?.quantity?.value||0,E=_.target[0].quantity.value,P=_.target[0].quantity.unit,q=E-I,V=I===0?0:(E-I)/I*100;switch(D){case"actual-diff":{const{actual:N,diff:j,colorClass:L}=s(E,q,P,!1);return e.jsxs("span",{children:[N," ",e.jsx("span",{className:L,children:j})]})}case"actual-percentage":{const{actual:N,diff:j,colorClass:L}=s(E,V,P,!0);return e.jsxs("span",{children:[N," ",e.jsx("span",{className:L,children:j})]})}case"difference":{const N=q>0?"+":(q<0,""),j=q>0?"pf-analytics-analytics-table__difference--positive":q<0?"pf-analytics-analytics-table__difference--negative":"";return e.jsxs("span",{className:j,children:[N,f(q,P)]})}case"percentage":{const N=V>0?"+":"",j=V>0?"pf-analytics-analytics-table__difference--positive":V<0?"pf-analytics-analytics-table__difference--negative":"";return e.jsxs("span",{className:j,children:[N,V.toFixed(1),"%"]})}case"actual":default:return f(E,P)}}function y(n,p,_,A,D){if(p.id===z||S&&d)return"";const I=_?.quantity?.value||0,E=A.quantity.value,P=A.quantity.unit,q=E-I,V=I===0?0:(E-I)/I*100;switch(D){case"actual-diff":{const{actual:N,diff:j,colorClass:L}=s(E,q,P,!1);return e.jsxs("span",{children:[N," ",e.jsx("span",{className:L,children:j})]})}case"actual-percentage":{const{actual:N,diff:j,colorClass:L}=s(E,V,P,!0);return e.jsxs("span",{children:[N," ",e.jsx("span",{className:L,children:j})]})}case"difference":{const N=q>0?"+":(q<0,""),j=q>0?"pf-analytics-analytics-table__difference--positive":q<0?"pf-analytics-analytics-table__difference--negative":"";return e.jsxs("span",{className:j,children:[N,f(q,P)]})}case"percentage":{const N=V>0?"+":"",j=V>0?"pf-analytics-analytics-table__difference--positive":V<0?"pf-analytics-analytics-table__difference--negative":"";return e.jsxs("span",{className:j,children:[N,V.toFixed(1),"%"]})}case"actual":default:return f(E,P)}}return e.jsxs(e.Fragment,{children:[e.jsxs(O,{className:R(r.row,!w&&r.emptyRow),children:[e.jsx(C,{className:r.expansionCell,onClick:d?()=>i(!h):void 0,children:d?e.jsx(ge,{expanded:h,onToggle:()=>i(!h),style:{paddingLeft:b},children:e.jsx("span",{className:"pf-analytics-analytics-table__nutrient-name",children:a.name})}):e.jsxs("div",{className:r.label,style:{paddingLeft:b},children:[e.jsx("div",{className:r.leafSpacer}),e.jsx("span",{className:"pf-analytics-analytics-table__nutrient-name",children:a.name})]})}),e.jsx(C,{className:R(r.valueCell,"pf-analytics-analytics-table__anchor-cell"),children:m(t,a,v)}),T&&u&&e.jsx(C,{className:r.valueCell,children:c(t,a,x,v,l)}),T&&x?.target&&(u?x.target.slice(1):x.target).map((n,p)=>e.jsx(C,{className:r.valueCell,children:y(t,a,v,n,l)},p))]}),d&&h&&a.children.map(n=>e.jsx(ye,{nutrient:n,depth:t+1,displayMode:l,hasTargetFormulas:T,anchorColor:o,targetColors:B,hasActualTarget:u,isInsideOther:S||a.id===z},n.id))]})},Te=({item:a,displayMode:t,hasTargetFormulas:l,hasActualTarget:T=!1})=>{const o=a.formulas,B=o?.anchor;function u(i,d,x,v){if(v){const s=i===0?0:d/(i-d)*100,m=s>0?"+":(s<0,""),c=s>0?"pf-analytics-analytics-table__difference--positive":s<0?"pf-analytics-analytics-table__difference--negative":"";return{actual:f(i,x),diff:`(${m}${s.toFixed(1)}%)`,colorClass:c}}const w=d>0?"+":(d<0,""),b=d>0?"pf-analytics-analytics-table__difference--positive":d<0?"pf-analytics-analytics-table__difference--negative":"";return{actual:f(i,x),diff:`(${w}${f(d,x)})`,colorClass:b}}function S(i,d,x){if(!i?.target?.[0])return"—";const v=d?.quantity?.value||0,w=i.target[0].quantity.value,b=i.target[0].quantity.unit,s=w-v,m=v===0?0:(w-v)/v*100;switch(x){case"actual-diff":{const{actual:c,diff:y,colorClass:n}=u(w,s,b,!1);return e.jsxs("span",{children:[c," ",e.jsx("span",{className:n,children:y})]})}case"actual-percentage":{const{actual:c,diff:y,colorClass:n}=u(w,m,b,!0);return e.jsxs("span",{children:[c," ",e.jsx("span",{className:n,children:y})]})}case"difference":{const c=s>0?"+":(s<0,""),y=s>0?"pf-analytics-analytics-table__difference--positive":s<0?"pf-analytics-analytics-table__difference--negative":"";return e.jsxs("span",{className:y,children:[c,f(s,b)]})}case"percentage":{const c=m>0?"+":"",y=m>0?"pf-analytics-analytics-table__difference--positive":m<0?"pf-analytics-analytics-table__difference--negative":"";return e.jsxs("span",{className:y,children:[c,m.toFixed(1),"%"]})}case"actual":default:return f(w,b)}}function h(i,d,x){const v=i?.quantity?.value||0,w=d.quantity.value,b=d.quantity.unit,s=w-v,m=v===0?0:(w-v)/v*100;switch(x){case"actual-diff":{const{actual:c,diff:y,colorClass:n}=u(w,s,b,!1);return e.jsxs("span",{children:[c," ",e.jsx("span",{className:n,children:y})]})}case"actual-percentage":{const{actual:c,diff:y,colorClass:n}=u(w,m,b,!0);return e.jsxs("span",{children:[c," ",e.jsx("span",{className:n,children:y})]})}case"difference":{const c=s>0?"+":(s<0,""),y=s>0?"pf-analytics-analytics-table__difference--positive":s<0?"pf-analytics-analytics-table__difference--negative":"";return e.jsxs("span",{className:y,children:[c,f(s,b)]})}case"percentage":{const c=m>0?"+":"",y=m>0?"pf-analytics-analytics-table__difference--positive":m<0?"pf-analytics-analytics-table__difference--negative":"";return e.jsxs("span",{className:y,children:[c,m.toFixed(1),"%"]})}case"actual":default:return f(w,b)}}return e.jsxs(O,{className:r.row,children:[e.jsx(C,{className:R(r.dividedCell,"pf-analytics-analytics-table__flat-label"),children:a.categoryName}),e.jsx(C,{className:R(r.valueCell,"pf-analytics-analytics-table__anchor-cell"),children:B?f(B.quantity.value,B.quantity.unit):"—"}),l&&T&&e.jsx(C,{className:r.valueCell,children:S(o,B,t)}),l&&o?.target&&(T?o.target.slice(1):o.target).map((i,d)=>e.jsx(C,{className:r.valueCell,children:h(B,i,t)},d))]})},Ne=({category:a,expandedCategories:t,toggleCategory:l,hasTargetFormulas:T,hasActualTarget:o=!1})=>{const B=t.has(a.categoryId),u=a.formulas,S=u?.anchor;return e.jsxs(e.Fragment,{children:[e.jsxs(O,{className:"pf-analytics-analytics-table__radar-row",onClick:()=>l(a.categoryId),children:[e.jsx(C,{className:R(r.dividedCell,"pf-analytics-analytics-table__radar-cell"),children:e.jsx(ge,{expanded:B,onToggle:()=>l(a.categoryId),children:e.jsx("span",{className:"pf-analytics-analytics-table__radar-label",children:a.categoryName})})}),e.jsx(C,{className:R(r.valueCell,"pf-analytics-analytics-table__anchor-cell"),children:S?f(S.quantity.value,S.quantity.unit):"—"}),T&&u?.target&&e.jsxs(e.Fragment,{children:[o&&u.target[0]&&e.jsx(C,{className:r.valueCell,children:f(u.target[0].quantity.value,u.target[0].quantity.unit)}),(o?u.target.slice(1):u.target).map((h,i)=>e.jsx(C,{className:r.valueCell,children:f(h.quantity.value,h.quantity.unit)},i))]})]}),B&&a.labels.map((h,i)=>e.jsxs(O,{className:r.row,children:[e.jsx(C,{className:R(r.dividedCell,"pf-analytics-analytics-table__descriptor-cell"),children:h}),e.jsx(C,{className:R(r.valueCell,"pf-analytics-analytics-table__anchor-cell"),children:`${a.percentages.anchor[i]?.toFixed(1)||"0"}%`}),T&&a.percentages.target&&e.jsxs(e.Fragment,{children:[o&&a.percentages.target[0]&&e.jsx(C,{className:r.valueCell,children:`${a.percentages.target[0][i]?.toFixed(1)||"0"}%`}),(o?a.percentages.target.slice(1):a.percentages.target).map((d,x)=>e.jsx(C,{className:r.valueCell,children:`${d[i]?.toFixed(1)||"0"}%`},x))]})]},`${a.categoryId}-${i}`))]})},ce=({anchorColor:a,targetColors:t,hasActualTarget:l=!1,displayMode:T="actual",viewType:o="details",summaryData:B,radarData:u,expandedCategories:S=new Set,toggleCategory:h=()=>{}})=>{const{t:i}=fe("analytics"),{nutritionalDetails:d,summaryData:x,radarData:v,isLoading:w,formulaNames:b}=he(ve),s=o==="summary"?B||x?.tableData:o==="radar"?u||v:d,m=o==="summary"?s?.some(n=>n.formulas&&n.formulas.target&&n.formulas.target.length>0):o==="radar"?s?.some(n=>n.formulas&&n.formulas.target&&n.formulas.target.length>0):s?.some(n=>n.formulas&&n.formulas.target&&n.formulas.target.length>0);if(w)return e.jsx("div",{className:r.loading,children:e.jsx(be,{isLoading:!0})});let c=0;o==="summary"&&s&&s.length>0?c=s[0].formulas?.target?.length||0:o==="radar"&&s&&s.length>0?c=Math.max(...s.map(n=>n.formulas?.target?.length||0)):o==="details"&&s&&s.length>0&&(c=s[0].formulas?.target?.length||0);const y=()=>{switch(o){case"summary":return i("table.columnHeaders.category");case"radar":return i("table.columnHeaders.formulas");case"details":default:return i("table.columnHeaders.nutritions")}};return e.jsx("div",{className:"pf-analytics-analytics-table__root",children:e.jsxs(xe,{children:[e.jsx(we,{className:"pf-analytics-analytics-table__head",children:e.jsxs(O,{children:[e.jsx(W,{className:R(r.dividedCell,"pf-analytics-analytics-table__name-heading"),children:y()}),e.jsx(W,{className:R(r.valueHeading,"pf-analytics-analytics-table__value-heading"),children:e.jsxs("div",{className:r.label,children:[e.jsx("div",{className:"pf-analytics-analytics-table__legend-swatch",style:{backgroundColor:a||"var(--group-pattern-color-fill-nutrient-tables-chart-anchor-fallback)"}}),e.jsx("span",{children:b?.anchor||i("table.columnHeaders.anchor")})]})}),m&&e.jsxs(e.Fragment,{children:[l&&e.jsx(W,{className:R(r.valueHeading,"pf-analytics-analytics-table__value-heading"),children:e.jsxs("div",{className:r.label,children:[e.jsx("div",{className:"pf-analytics-analytics-table__legend-swatch",style:{backgroundColor:t?.[0]||"var(--group-pattern-color-fill-nutrient-tables-chart-target-fallback)"}}),e.jsx("span",{children:b?.target?.[0]||i("table.columnHeaders.target")})]})}),Array.from({length:l?c-1:c},(n,p)=>{const _=l?p+1:p,A=l?_:p,D=l?_:p;return e.jsx(W,{className:R(r.valueHeading,"pf-analytics-analytics-table__value-heading"),children:e.jsxs("div",{className:r.label,children:[e.jsx("div",{className:"pf-analytics-analytics-table__legend-swatch",style:{backgroundColor:t?.[A]||"var(--group-pattern-color-fill-nutrient-tables-chart-comparison-fallback)"}}),e.jsx("span",{children:b?.target?.[D]||i("table.columnHeaders.variant",{index:p+1})})]})},_)})]})]})}),e.jsx(_e,{children:s&&s.length>0?o==="summary"?s.map(n=>e.jsx(Te,{item:n,displayMode:T,hasTargetFormulas:m||!1,anchorColor:a,targetColors:t,hasActualTarget:l},n.category_id)):o==="radar"?s.map(n=>e.jsx(Ne,{category:n,expandedCategories:S,toggleCategory:h,hasTargetFormulas:m||!1,anchorColor:a,targetColors:t,hasActualTarget:l},n.categoryId)):s.map(n=>e.jsx(ye,{nutrient:n,depth:0,displayMode:T,hasTargetFormulas:m||!1,anchorColor:a,targetColors:t,hasActualTarget:l},n.id)):e.jsx(O,{children:e.jsx(C,{colSpan:2+(c||0),className:r.emptyCell,children:i("table.emptyState")})})})]})})};ce.__docgenInfo={description:"",methods:[],displayName:"AnalyticsTable",props:{hasActualTarget:{defaultValue:{value:"false",computed:!1},required:!1},displayMode:{defaultValue:{value:'"actual"',computed:!1},required:!1},viewType:{defaultValue:{value:'"details"',computed:!1},required:!1},expandedCategories:{defaultValue:{value:"new Set()",computed:!1},required:!1},toggleCategory:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};const je='# Nutrient Tables\n\nThe ingredient nutrient tree and recipe analysis tables use the same presentation parts for column dividers, minimum value-column width, expandable labels and result feedback. They retain their existing table structures, data APIs and calculations. This is a product-local pattern composed with the existing `Table` primitives and a shared native disclosure button. It does not add a universal table variant.\n\n## Parts and ownership\n\nImport `nutrientTableParts` from `@/design-system/patterns/nutrient-table`; the import loads its stylesheet. Apply each part to the existing native element through `className`. The exported `NutrientTablePart` type is the set of supported keys.\n\n| Part            | Apply to                              | Responsibility                                                                                       |\n| --------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------- |\n| `row` | Populated nutrient `TableRow` | Existing recessed hover feedback. This does not replace radar parent-row behavior. |\n| `emptyRow` | Host-selected de-emphasized nutrient `TableRow`, composed with `row` | Existing 60% opacity. Analytics applies this to non-positive anchor values. The ingredient host preserves its existing value-presence predicate; its row filter currently excludes the missing-value branch before rendering. |\n| `loading` | Existing loading container | Centered loader and vertical inset; host determines when to show it. |\n| `emptyCell` | Existing empty-result `TableCell` | Padded centered muted message; host supplies text and `colSpan`. |\n| `dividedCell`   | `TableHead` or `TableCell`            | Right column divider only. Compose with domain-specific cell styles.                                 |\n| `valueCell`     | Numeric `TableCell`                   | Divider and established left alignment.                                                              |\n| `valueHeading`  | Numeric `TableHead`                   | Divider and the existing 120px minimum value-column width; alignment is inherited from `TableHead`.  |\n| `expansionCell` | Existing expandable-label `TableCell` | Divider and label weight; a pointer cursor only when the cell contains a disclosure button. The host retains its wider pointer target. |\n| `label`         | Inner label container                 | Icon/text alignment and gap; also aligns the recipe header\'s existing legend swatch.                 |\n| `indicator`     | Existing expansion chevron            | Chevron size and muted icon color.                                                                   |\n| `leafSpacer`    | Existing non-branch spacer            | Keeps leaf labels aligned with branches.                                                             |\n\nData-display group tokens own these fixed presentation choices. The recipe host continues to own legend colors, anchor-cell background, comparison labels and positive/negative difference colors. Ingredient typography, reference quantity and energy-origin summary remain in the ingredient view. Host indentation continues to follow the existing tree depth. The disclosure replaces the branch label container with a button; no table columns or extra wrappers are introduced.\n\n```tsx\n<TableHead className={nutrientTableParts.valueHeading}>Value</TableHead>\n<TableCell className={nutrientTableParts.valueCell}>12.0 g</TableCell>\n```\n\n## Supported hosts\n\n`IngredientNutritionalTable` accepts its existing ingredient data, loading state and optional reference quantity. It sorts the top-level nutrients, expands each branch locally, formats values with the existing formatter and conditionally displays the energy-origin summary.\n\n`AnalyticsTable` retains details, summary and radar views. Details read the existing analytics store; summary and radar may receive their existing data props. Anchor, actual-target and variant columns retain their distinct meaning. `hasActualTarget` decides whether the first comparison is the actual target or the first variant. `displayMode` retains `actual`, `difference`, `percentage`, `actual-diff` and `actual-percentage`. Radar expansion remains controlled by `expandedCategories` and `toggleCategory(categoryId)`.\n\nLoading and empty views remain different from successful results. The recipe host still supplies formula names, comparison colors and result state. No fetch, calculation, persistence, transport or permission behavior belongs to the presentation recipe.\n\n## Anatomy and interaction\n\nThe anatomy is the native table frame, column headings with optional recipe legends, expandable label cell, value cells and conditional descendant rows. The ingredient view additionally retains reference text and energy summary outside the table. Radar descendants use the host-supplied percentage arrays.\n\n`NutrientDisclosure` renders a native `type="button"` with `aria-expanded`, a decorative chevron, visible keyboard focus and a label supplied by its children. Its API is `expanded: boolean`, `onToggle: () => void`, `children: ReactNode` and optional `style` for host tree indentation. Supply phrasing content only; ingredient labels use `Typography as="span"`.\n\nTab reaches each visible branch. Enter and Space toggle it through native button behavior. The button stops its click from bubbling to the wider cell/row click handler, so one activation produces one callback. Existing cell clicks (ingredient/details) and row clicks (radar) remain available to pointer users. Leaves remain plain text without a button or focus stop. The host still owns state and descendant rendering; the pattern neither stores expansion state nor alters calculation data.\n\n## Storybook and checks\n\n`Patterns/Analysis/Nutrient Tables` renders the real ingredient and recipe views with local typed data and the usual Storybook provider. Playground controls select existing views and comparison modes; they are fixture controls, not new props on the CSS recipe. The original implementations remain visible in the Ingredient, Comparison Details, Summary and Radar scenarios. Difference, Variants Without Target, Empty, Loading, Ingredient Empty and Ingredient Loading cover meaningful result conditions. Sticky Summary renders the production report\'s multi-row headings and sticky anchor columns, retaining their widths and offsets. Expand Ingredient, Expand Comparison and Expand Radar verify Enter/Space expansion, collapse and unchanged values. Anatomy is an unmodified, no-play comparison fixture for annotated documentation.\n\nFocused consumer tests assert native keyboard expansion/collapse, exactly-once controlled radar callbacks, leaf semantics, pointer-target compatibility, native empty-cell spans, conditional target/variant headings, formatted comparisons and host-controlled radar callbacks. These tests check behavior, not browser geometry. Resolved token/style equivalence and finite browser checks are recorded separately in the systemization record.\n',{expect:g,userEvent:M,within:k}=__STORYBOOK_MODULE_TEST__,oe={ingredientId:1,ingredientName:"Oat flour",nutrientsTree:[{id:1,name:"Carbohydrate",quantity:{value:12,unit:"g"},children:[{id:2,name:"Sugars",quantity:{value:2,unit:"g"},children:[]}]},{id:3,name:"Protein",quantity:{value:4,unit:"g"},children:[]}],energyOrigin:{totalEnergy:{value:64,unit:"kcal"},carbssPercentage:75,fatsPercentage:0,proteinsPercentage:25,alcoholsPercentage:0,fibersPercentage:0}},$=[{id:1,name:"Carbohydrate",level:0,formulas:{anchor:{quantity:{value:12,unit:"g"}},target:[{quantity:{value:15,unit:"g"}},{quantity:{value:18,unit:"g"}}]},children:[{id:2,name:"Sugars",level:1,formulas:{anchor:{quantity:{value:2,unit:"g"}},target:[{quantity:{value:3,unit:"g"}},{quantity:{value:4,unit:"g"}}]},children:[]}]},{id:3,name:"Protein",level:0,formulas:{anchor:{quantity:{value:4,unit:"g"}},target:[{quantity:{value:6,unit:"g"}},{quantity:{value:8,unit:"g"}}]},children:[]}],Be=[{category_id:1,categoryName:"Carbohydrate",formulas:{...$[0].formulas,target:$[0].formulas.target??[]}},{category_id:3,categoryName:"Protein",formulas:{...$[1].formulas,target:$[1].formulas.target??[]}}],Se=[{categoryId:8,categoryName:"Texture",labels:["Creaminess","Thickness"],percentages:{anchor:[10,30],target:[[20,40],[25,45]]},formulas:{anchor:{quantity:{value:10,unit:"%"}},target:[{quantity:{value:20,unit:"%"}},{quantity:{value:25,unit:"%"}}]}}],de={nutritionalDetails:$,isLoading:!1,formulaNames:{anchor:"Base recipe",target:["Comparison recipe","Variant recipe"]}};function ue({view:a,empty:t,isLoading:l,...T}){const[o,B]=pe.useState(new Set);return a==="ingredient"?e.jsx(me,{data:t?{...oe,nutrientsTree:[],energyOrigin:{...oe.energyOrigin,totalEnergy:{value:0,unit:"kcal"}}}:oe,isLoading:l,referenceQuantity:{amount:100,unit:"g"}}):e.jsx(ce,{...T,viewType:a,summaryData:t?[]:Be,radarData:t?[]:Se,expandedCategories:o,toggleCategory:u=>{B(S=>{const h=new Set(S);return h.has(u)?h.delete(u):h.add(u),h})}})}const Ye={title:"Patterns/Analysis/Nutrient Tables",component:ue,subcomponents:{AnalyticsTable:ce,IngredientNutritionalTable:me},tags:["autodocs"],args:{view:"details",displayMode:"actual",hasActualTarget:!0,empty:!1,isLoading:!1},argTypes:{view:{control:"select",options:["ingredient","details","summary","radar"],description:"Chooses the existing ingredient view or one of the existing AnalyticsTable views."},displayMode:{control:"select",options:["actual","difference","percentage","actual-diff","actual-percentage"],if:{arg:"view",neq:"ingredient"},description:"Existing recipe-comparison display API; radar uses its supplied percentages."},hasActualTarget:{control:"boolean",if:{arg:"view",neq:"ingredient"},description:"Treat the first comparison as a target; remaining comparisons stay variants."},empty:{control:!1,table:{disable:!0}},isLoading:{control:!1,table:{disable:!0}}},parameters:{store:{preloadedState:{analytics:de}},docs:{description:{component:je}}},render:a=>e.jsx(ue,{...a})},K={},U={args:{view:"ingredient"}},Y={},G={args:{view:"summary"}},Q={args:{view:"radar"}},X={args:{displayMode:"difference"}},Z={args:{hasActualTarget:!1}},J={args:{empty:!0},parameters:{store:{preloadedState:{analytics:{...de,nutritionalDetails:[]}}}},play:async({canvasElement:a})=>{const t=k(a);await g(t.getAllByRole("cell")).toHaveLength(1),await g(t.getByRole("cell")).toHaveAttribute("colspan","2")}},ee={args:{isLoading:!0},parameters:{store:{preloadedState:{analytics:{...de,isLoading:!0}}}},play:async({canvasElement:a})=>{await g(k(a).getByTestId("loader")).toBeVisible()}},ae={args:{view:"ingredient"},play:async({canvasElement:a})=>{const t=k(a);await g(t.queryByText("Sugars")).not.toBeInTheDocument();const l=t.getByRole("button",{name:"Carbohydrate"});l.focus(),await M.keyboard("{Enter}"),await g(l).toHaveAttribute("aria-expanded","true"),await g(t.getByText("Sugars")).toBeVisible(),await g(t.getByText("2.00 g")).toBeVisible(),await M.keyboard(" "),await g(t.queryByText("Sugars")).not.toBeInTheDocument()}},te={args:{displayMode:"difference"},play:async({canvasElement:a})=>{const t=k(a);t.getByRole("button",{name:"Carbohydrate"}).focus(),await M.keyboard(" ");const T=t.getByRole("row",{name:/Sugars/});await g(k(T).getAllByRole("cell").map(o=>o.textContent)).toEqual(["Sugars","2.00 g","+1.00 g","+2.00 g"])}},ne={args:{view:"radar"},play:async({canvasElement:a})=>{const t=k(a);t.getByRole("button",{name:"Texture"}).focus(),await M.keyboard("{Enter}"),await g(t.getByText("Creaminess")).toBeVisible(),await g(t.getByText("Thickness")).toBeVisible(),await M.keyboard(" "),await g(t.queryByText("Creaminess")).not.toBeInTheDocument()}},se={},re={args:{view:"ingredient",empty:!0},play:async({canvasElement:a})=>{const t=k(a);await g(t.getAllByRole("cell")).toHaveLength(1),await g(t.getByRole("cell")).toHaveAttribute("colspan","2")}},ie={args:{view:"ingredient",isLoading:!0},play:async({canvasElement:a})=>{const t=k(a);await g(t.getByTestId("loader")).toBeVisible(),await g(t.queryByRole("table")).not.toBeInTheDocument()}},F={render:()=>e.jsx(Ce,{formulasInScope:[{id:"base",name:"Base recipe",isAnchor:!0},{id:"comparison",name:"Comparison recipe",isAnchor:!1}],rows:[{categoryId:1,categoryName:"Carbohydrate",formulas:{anchor:{pre:{value:12,unit:"g"},post:{value:10,unit:"g"}},target:[{pre:{value:15,unit:"g"},post:{value:13,unit:"g"}}]}}],showPreProcessing:!0,forcePreOnly:!1}),play:async({canvasElement:a})=>{const t=k(a);await g(t.getByRole("table")).toBeVisible(),await g(t.getByText("Base recipe")).toBeVisible();const l=t.getByRole("row",{name:/Carbohydrate/});await g(k(l).getAllByRole("cell")).toHaveLength(7),await g(k(l).getByText("12.00 g")).toBeVisible(),await g(k(l).getByText("10.00 g")).toBeVisible()}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:"{}",...K.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    view: "ingredient"
  }
}`,...U.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:"{}",...Y.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    view: "summary"
  }
}`,...G.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    view: "radar"
  }
}`,...Q.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    displayMode: "difference"
  }
}`,...X.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    hasActualTarget: false
  }
}`,...Z.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    empty: true
  },
  parameters: {
    store: {
      preloadedState: {
        analytics: {
          ...initialAnalytics,
          nutritionalDetails: []
        }
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("cell")).toHaveLength(1);
    await expect(canvas.getByRole("cell")).toHaveAttribute("colspan", "2");
  }
}`,...J.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true
  },
  parameters: {
    store: {
      preloadedState: {
        analytics: {
          ...initialAnalytics,
          isLoading: true
        }
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId("loader")).toBeVisible();
  }
}`,...ee.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  args: {
    view: "ingredient"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByText("Sugars")).not.toBeInTheDocument();
    const trigger = canvas.getByRole("button", {
      name: "Carbohydrate"
    });
    trigger.focus();
    await userEvent.keyboard("{Enter}");
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    await expect(canvas.getByText("Sugars")).toBeVisible();
    await expect(canvas.getByText("2.00 g")).toBeVisible();
    await userEvent.keyboard(" ");
    await expect(canvas.queryByText("Sugars")).not.toBeInTheDocument();
  }
}`,...ae.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  args: {
    displayMode: "difference"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", {
      name: "Carbohydrate"
    });
    trigger.focus();
    await userEvent.keyboard(" ");
    const row = canvas.getByRole("row", {
      name: /Sugars/
    });
    await expect(within(row).getAllByRole("cell").map(cell => cell.textContent)).toEqual(["Sugars", "2.00 g", "+1.00 g", "+2.00 g"]);
  }
}`,...te.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
  args: {
    view: "radar"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", {
      name: "Texture"
    });
    trigger.focus();
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByText("Creaminess")).toBeVisible();
    await expect(canvas.getByText("Thickness")).toBeVisible();
    await userEvent.keyboard(" ");
    await expect(canvas.queryByText("Creaminess")).not.toBeInTheDocument();
  }
}`,...ne.parameters?.docs?.source}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:"{}",...se.parameters?.docs?.source}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
  args: {
    view: "ingredient",
    empty: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("cell")).toHaveLength(1);
    await expect(canvas.getByRole("cell")).toHaveAttribute("colspan", "2");
  }
}`,...re.parameters?.docs?.source}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
  args: {
    view: "ingredient",
    isLoading: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId("loader")).toBeVisible();
    await expect(canvas.queryByRole("table")).not.toBeInTheDocument();
  }
}`,...ie.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <NutritionalSummaryTable formulasInScope={[{
    id: "base",
    name: "Base recipe",
    isAnchor: true
  }, {
    id: "comparison",
    name: "Comparison recipe",
    isAnchor: false
  }]} rows={[{
    categoryId: 1,
    categoryName: "Carbohydrate",
    formulas: {
      anchor: {
        pre: {
          value: 12,
          unit: "g"
        },
        post: {
          value: 10,
          unit: "g"
        }
      },
      target: [{
        pre: {
          value: 15,
          unit: "g"
        },
        post: {
          value: 13,
          unit: "g"
        }
      }]
    }
  }]} showPreProcessing forcePreOnly={false} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("table")).toBeVisible();
    await expect(canvas.getByText("Base recipe")).toBeVisible();
    const row = canvas.getByRole("row", {
      name: /Carbohydrate/
    });
    await expect(within(row).getAllByRole("cell")).toHaveLength(7);
    await expect(within(row).getByText("12.00 g")).toBeVisible();
    await expect(within(row).getByText("10.00 g")).toBeVisible();
  }
}`,...F.parameters?.docs?.source},description:{story:"Actual sticky-column report; its fixed widths and offsets stay host-owned.",...F.parameters?.docs?.description}}};const Ge=["Playground","Ingredient","ComparisonDetails","Summary","Radar","Difference","VariantsWithoutTarget","Empty","Loading","ExpandIngredient","ExpandComparison","ExpandRadar","Anatomy","IngredientEmpty","IngredientLoading","StickySummary"];export{se as Anatomy,Y as ComparisonDetails,X as Difference,J as Empty,te as ExpandComparison,ae as ExpandIngredient,ne as ExpandRadar,U as Ingredient,re as IngredientEmpty,ie as IngredientLoading,ee as Loading,K as Playground,Q as Radar,F as StickySummary,G as Summary,Z as VariantsWithoutTarget,Ge as __namedExportsOrder,Ye as default};
