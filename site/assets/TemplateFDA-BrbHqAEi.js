import{e as k,j as e,i1 as w,r as _}from"./iframe-AqpYXns4.js";function h(n){try{const a=JSON.parse(n);if(Array.isArray(a))return a.join(", ")}catch{}return n}const q=n=>n.labelName?.trim()||n.ingredientName,s="var(--group-page-color-border-print-border)",u=w,j=n=>{const a=n.other.find(t=>t.name.toLowerCase()==="calories");return u(a?a.amount:n.energy_amount)},p=()=>e.jsx("div",{className:"pf-analytics-template-fda__divider",children:e.jsx("div",{className:"pf-analytics-template-fda__hairline",style:{borderColor:s}})}),x=({formula:n,servingsPerContainer:a,className:t="",pdcaasChecked:l=!1,ingredientItems:d})=>{const{t:r}=k("analytics"),f=j(n),o=n.other.filter(i=>i.name.toLowerCase()!=="calories"),b=!!d&&d.length>0,c=(d??[]).filter(i=>!i.isTwoPercentOrLess),g=(d??[]).filter(i=>i.isTwoPercentOrLess);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:["pf-analytics-template-fda__root","pf-analytics-template-fda__typeface","pf-analytics-template-fda__leading",t].join(" "),style:{border:`var(--group-page-pf-print-thin) solid ${s}`},role:"figure","aria-label":r("nutritionLabel.nutritionFacts"),children:[e.jsx("div",{className:"pf-analytics-template-fda__title",style:{borderBottom:`var(--group-page-pf-print-emphasis) solid ${s}`},children:r("nutritionLabel.nutritionFacts")}),(a||n.serving_size)&&e.jsxs("div",{className:"pf-analytics-template-fda__serving",style:{borderBottom:`var(--group-page-pf-print-rule) solid ${s}`},children:[a&&e.jsxs("div",{className:"pf-analytics-template-fda__serving-label",children:[u(a)," ",r("nutritionLabel.servingsPerContainer")]}),e.jsxs("div",{className:"pf-analytics-template-fda__label-row",children:[e.jsx("div",{className:"pf-analytics-template-fda__serving-label",children:r("nutritionLabel.servingSize")}),e.jsxs("div",{className:"pf-analytics-template-fda__serving-value",children:[u(n.serving_size)," ",n.serving_size_unit??""]})]})]}),e.jsxs("div",{className:"pf-analytics-template-fda__calories",style:{borderBottom:`var(--group-page-pf-print-emphasis) solid ${s}`},children:[e.jsx("div",{className:"pf-analytics-template-fda__amount-label",children:r("nutritionLabel.amountPerServing")}),e.jsxs("div",{className:"pf-analytics-template-fda__label-row",children:[e.jsx("div",{className:"pf-analytics-template-fda__calories-label",children:r("nutritionLabel.calories")}),e.jsx("div",{className:"pf-analytics-template-fda__calories-value",children:f})]})]}),e.jsx("div",{className:"pf-analytics-template-fda__daily-value-heading",style:{borderBottom:`var(--group-page-pf-print-rule) solid ${s}`},children:r("nutritionLabel.percentDailyValue")}),e.jsx("div",{children:o.map((i,m)=>e.jsxs(_.Fragment,{children:[e.jsx(v,{nutrient:i,pdcaasChecked:l}),m<o.length-1&&e.jsx(p,{})]},`${i.name}-${i.level}-${i.amount}-${m}`))}),!!n.vitamins_and_minerals?.length&&e.jsx("div",{className:"pf-analytics-template-fda__vitamins",style:{borderTop:`var(--group-page-pf-print-rule) solid ${s}`},children:n.vitamins_and_minerals.map((i,m)=>e.jsxs(_.Fragment,{children:[e.jsx(v,{nutrient:i,pdcaasChecked:l}),m<(n.vitamins_and_minerals?.length??0)-1&&e.jsx(p,{})]},`vm-${i.name}-${i.level}-${i.amount}-${m}`))}),e.jsx("div",{className:"pf-analytics-template-fda__footnote",children:r("nutritionLabel.dailyValueFootnote")})]}),b&&e.jsxs("div",{className:"pf-analytics-template-fda__ingredients",children:[e.jsxs("span",{className:"pf-analytics-template-fda__emphasis",children:[r("ingredientList.heading")," "]}),e.jsx(y,{items:c}),g.length>0&&e.jsxs(e.Fragment,{children:[c.length>0&&", ",e.jsx("span",{"data-testid":"two-percent-or-less-phrase",children:r("ingredientList.twoPercentOrLess")})," ",e.jsx(y,{items:g})]}),"."]}),!!n.allergens?.length&&e.jsxs("div",{className:"pf-analytics-template-fda__allergens",children:[e.jsxs("span",{className:"pf-analytics-template-fda__emphasis",children:[r("nutritionLabel.contains")," "]}),n.allergens.join(", "),"."]})]})},y=({items:n})=>e.jsx(e.Fragment,{children:n.map((a,t)=>{const l=a.ingredientList?h(a.ingredientList):null;return e.jsxs("span",{children:[t>0&&", ",q(a),l&&e.jsxs("span",{className:"pf-analytics-template-fda__subingredients",children:[" (",l,")"]})]},a.ingredientId??`${a.ingredientName}-${t}`)})}),A=n=>{switch(!0){case n>=3:return"pf-analytics-template-fda__nutrient--level-deep";case n===2:return"pf-analytics-template-fda__nutrient--level-two";case n===1:return"pf-analytics-template-fda__nutrient--level-one";default:return"pf-analytics-template-fda__nutrient--level-root"}},N=n=>n?"pf-analytics-template-fda__emphasis":"pf-analytics-template-fda__nutrient--regular",v=({nutrient:n,pdcaasChecked:a=!1})=>{const t=n.name.toLowerCase().includes("protein"),l=n.daily_recommended_intake!==null&&n.daily_recommended_intake!==void 0&&(!t||a);return e.jsxs("div",{className:"pf-analytics-template-fda__nutrient",children:[e.jsxs("div",{className:[A(n.level),N(n.is_bold),"pf-analytics-template-fda__nutrient-label"].join(" "),children:[n.name," ",e.jsxs("span",{className:"pf-analytics-template-fda__nutrient-amount",children:[u(n.amount),n.unit?n.unit:""]})]}),e.jsx("div",{className:"pf-analytics-template-fda__daily-value",children:l?`${u(n.daily_recommended_intake)}%`:""})]})};x.__docgenInfo={description:"",methods:[],displayName:"NutritionLabelFDATemplate",props:{formula:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  name: string; // formula name (optional display)
  serving_size: number | string | null;
  serving_size_unit: string | null;
  energy_name: string; // e.g., "Total Energy" (we’ll prefer "Calories" row if present)
  energy_amount: number;
  energy_unit: string; // kcal
  other: Nutrient[];
  vitamins_and_minerals?: Nutrient[];
  allergens?: Allergens;
  pdcaas?: PDCAASData;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"serving_size",value:{name:"union",raw:"number | string | null",elements:[{name:"number"},{name:"string"},{name:"null"}],required:!0}},{key:"serving_size_unit",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"energy_name",value:{name:"string",required:!0}},{key:"energy_amount",value:{name:"number",required:!0}},{key:"energy_unit",value:{name:"string",required:!0}},{key:"other",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string;
  amount: number;
  unit: string | null;
  daily_recommended_intake: number | null; // %DV already (0-100); if null, hide
  is_bold: boolean;
  level: number; // 0, 1, 2... indenting level
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"amount",value:{name:"number",required:!0}},{key:"unit",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"daily_recommended_intake",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"is_bold",value:{name:"boolean",required:!0}},{key:"level",value:{name:"number",required:!0}}]}}],raw:"Nutrient[]",required:!0}},{key:"vitamins_and_minerals",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string;
  amount: number;
  unit: string | null;
  daily_recommended_intake: number | null; // %DV already (0-100); if null, hide
  is_bold: boolean;
  level: number; // 0, 1, 2... indenting level
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"amount",value:{name:"number",required:!0}},{key:"unit",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"daily_recommended_intake",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"is_bold",value:{name:"boolean",required:!0}},{key:"level",value:{name:"number",required:!0}}]}}],raw:"Nutrient[]",required:!1}},{key:"allergens",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"pdcaas",value:{name:"signature",type:"object",raw:`{
  score: number | null;
  amino_acid_score: number | null;
  digestibility: number | null;
  limiting_amino_acid: {
    name: string;
    nutrient_id: number;
    ratio: number;
  } | null;
  ingredient_warnings: PDCAASIngredientWarning[];
  formula_warnings: PDCAASFormulaWarning[];
  // API also returns camelCase
  ingredientWarnings?: PDCAASIngredientWarning[];
  formulaWarnings?: PDCAASFormulaWarning[];
}`,signature:{properties:[{key:"score",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"amino_acid_score",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"digestibility",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"limiting_amino_acid",value:{name:"union",raw:`{
  name: string;
  nutrient_id: number;
  ratio: number;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  name: string;
  nutrient_id: number;
  ratio: number;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"nutrient_id",value:{name:"number",required:!0}},{key:"ratio",value:{name:"number",required:!0}}]}},{name:"null"}],required:!0}},{key:"ingredient_warnings",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  ingredient_id?: number;
  ingredient_name?: string;
  // API also returns camelCase
  ingredientId?: number;
  ingredientName?: string;
  status: "excluded" | "included";
  reason:
    | "insufficient_amino_acids"
    | "incomplete_amino_acids"
    | "missing_digestibility";
  missing_amino_acids?: string[] | null;
  missing_count?: number | null;
  // API also returns camelCase
  missingAminoAcids?: string[] | null;
  missingCount?: number | null;
}`,signature:{properties:[{key:"ingredient_id",value:{name:"number",required:!1}},{key:"ingredient_name",value:{name:"string",required:!1}},{key:"ingredientId",value:{name:"number",required:!1}},{key:"ingredientName",value:{name:"string",required:!1}},{key:"status",value:{name:"union",raw:'"excluded" | "included"',elements:[{name:"literal",value:'"excluded"'},{name:"literal",value:'"included"'}],required:!0}},{key:"reason",value:{name:"union",raw:`| "insufficient_amino_acids"
| "incomplete_amino_acids"
| "missing_digestibility"`,elements:[{name:"literal",value:'"insufficient_amino_acids"'},{name:"literal",value:'"incomplete_amino_acids"'},{name:"literal",value:'"missing_digestibility"'}],required:!0}},{key:"missing_amino_acids",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"missing_count",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}},{key:"missingAminoAcids",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"missingCount",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}}]}}],raw:"PDCAASIngredientWarning[]",required:!0}},{key:"formula_warnings",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  reason: "all_ingredients_excluded" | "zero_protein";
  message: string;
}`,signature:{properties:[{key:"reason",value:{name:"union",raw:'"all_ingredients_excluded" | "zero_protein"',elements:[{name:"literal",value:'"all_ingredients_excluded"'},{name:"literal",value:'"zero_protein"'}],required:!0}},{key:"message",value:{name:"string",required:!0}}]}}],raw:"PDCAASFormulaWarning[]",required:!0}},{key:"ingredientWarnings",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  ingredient_id?: number;
  ingredient_name?: string;
  // API also returns camelCase
  ingredientId?: number;
  ingredientName?: string;
  status: "excluded" | "included";
  reason:
    | "insufficient_amino_acids"
    | "incomplete_amino_acids"
    | "missing_digestibility";
  missing_amino_acids?: string[] | null;
  missing_count?: number | null;
  // API also returns camelCase
  missingAminoAcids?: string[] | null;
  missingCount?: number | null;
}`,signature:{properties:[{key:"ingredient_id",value:{name:"number",required:!1}},{key:"ingredient_name",value:{name:"string",required:!1}},{key:"ingredientId",value:{name:"number",required:!1}},{key:"ingredientName",value:{name:"string",required:!1}},{key:"status",value:{name:"union",raw:'"excluded" | "included"',elements:[{name:"literal",value:'"excluded"'},{name:"literal",value:'"included"'}],required:!0}},{key:"reason",value:{name:"union",raw:`| "insufficient_amino_acids"
| "incomplete_amino_acids"
| "missing_digestibility"`,elements:[{name:"literal",value:'"insufficient_amino_acids"'},{name:"literal",value:'"incomplete_amino_acids"'},{name:"literal",value:'"missing_digestibility"'}],required:!0}},{key:"missing_amino_acids",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"missing_count",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}},{key:"missingAminoAcids",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"missingCount",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}}]}}],raw:"PDCAASIngredientWarning[]",required:!1}},{key:"formulaWarnings",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  reason: "all_ingredients_excluded" | "zero_protein";
  message: string;
}`,signature:{properties:[{key:"reason",value:{name:"union",raw:'"all_ingredients_excluded" | "zero_protein"',elements:[{name:"literal",value:'"all_ingredients_excluded"'},{name:"literal",value:'"zero_protein"'}],required:!0}},{key:"message",value:{name:"string",required:!0}}]}}],raw:"PDCAASFormulaWarning[]",required:!1}}]},required:!1}}]}},description:""},servingsPerContainer:{required:!1,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},pdcaasChecked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},ingredientItems:{required:!1,tsType:{name:"union",raw:"IngredientListItem[] | null",elements:[{name:"Array",elements:[{name:"IngredientListItem"}],raw:"IngredientListItem[]"},{name:"null"}]},description:""}}};export{x as N};
