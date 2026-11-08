import{r,j as i}from"./iframe-AqpYXns4.js";import{B as o}from"./button-B5FjjXWS.js";const l={agentic:"ai",purple:"gradient-purple",amber:"gradient-amber"},e=r.forwardRef(({gradient:a="agentic",...t},n)=>i.jsx(o,{variant:l[a],ref:n,...t}));e.displayName="GradientButton";e.__docgenInfo={description:`Gradient button for primary CTAs.
Uses the agentic teal-emerald-sky gradient by default.
Compatibility entry for existing CTAs. Prefer Button's documented variants
for new compositions. Agentic and Formula AI actions share the canonical ai treatment.

@example
<GradientButton onClick={handleClick}>
  <Plus className="h-4 w-4" />
  New Chat
</GradientButton>`,methods:[],displayName:"GradientButton",props:{gradient:{required:!1,tsType:{name:"union",raw:'"agentic" | "purple" | "amber"',elements:[{name:"literal",value:'"agentic"'},{name:"literal",value:'"purple"'},{name:"literal",value:'"amber"'}]},description:`Gradient color scheme
- agentic: teal-emerald-sky (default, primary CTA)
- purple: violet-purple-indigo (secondary/alternative)
- amber: amber-orange-rose (warning/attention)
Existing API; styles are owned by the Button family.`,defaultValue:{value:'"agentic"',computed:!1}}}};export{e as G};
