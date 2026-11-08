import{j as t}from"./iframe-AqpYXns4.js";/* empty css                      */import{I as n}from"./InfoAlert-C6GU9og2.js";import{S as c}from"./sparkles-CT90CegH.js";import"./preload-helper-PPVm8Dsz.js";import"./circle-x-DP398tgS.js";import"./circle-check-big-ezdSO-Al.js";import"./triangle-alert-DPRF-sLk.js";import"./info-w0-6ezG6.js";const i=["info","warning","success","error"],I={title:"Components/Feedback/Info alert",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"Contextual alert with the product's four semantic visual treatments, built-in variant icons, optional custom Lucide icon and hideIcon. children accepts rich content. This implementation always uses role=alert, including info; avoid repeatedly mounting it for passive instructions. className extends the root. It has no dismissal or title prop; compose these only when appropriate rather than inventing APIs."}},controls:{include:["children","variant","hideIcon"]}},args:{children:"Review the generated result before saving.",variant:"info",hideIcon:!1},argTypes:{children:{control:"text"},variant:{control:"inline-radio",options:i},hideIcon:{control:"boolean"}}},r={},e={render:()=>t.jsx("div",{className:"pf-story-regular-stack",children:i.map(s=>t.jsxs(n,{variant:s,children:[s,": review your changes."]},s))})},o={args:{icon:c,children:"AI suggestions are ready for review."}},a={args:{hideIcon:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <div className="pf-story-regular-stack">
      {variants.map(variant => <InfoAlert key={variant} variant={variant}>
          {variant}: review your changes.
        </InfoAlert>)}
    </div>
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    icon: Sparkles,
    children: "AI suggestions are ready for review."
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    hideIcon: true
  }
}`,...a.parameters?.docs?.source}}};const y=["Playground","AllVariants","CustomIcon","WithoutIcon"];export{e as AllVariants,o as CustomIcon,r as Playground,a as WithoutIcon,y as __namedExportsOrder,I as default};
