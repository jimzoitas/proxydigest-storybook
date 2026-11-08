import{j as e,av as m}from"./iframe-BXubdNpd.js";/* empty css                      */import{G as n}from"./GradientIcon-Bb0JhmPS.js";import{S as t}from"./sparkles-TuN5CnLu.js";import{P as c}from"./package-CC18m6t3.js";import"./preload-helper-PPVm8Dsz.js";const i={Sparkles:t,Package:c,FlaskConical:m},d=["agentic","purple","amber","blue","rose"],x={title:"Components/Feedback/Gradient icon",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"Existing feature-highlight icon tile. The actual API is icon (a Lucide component), gradient (five schemes), size (sm/md/lg/xl), and className. The Icon control maps a serializable name to the real icon prop. This decorative tile is not an action or status by itself; accompany it with a text label and put any interaction on a real button or link."}},controls:{include:["iconName","gradient","size"]}},args:{icon:t,iconName:"Sparkles",gradient:"agentic",size:"md"},argTypes:{iconName:{name:"Icon",control:"select",options:Object.keys(i)},icon:{control:!1},gradient:{control:"select",options:d},size:{control:"inline-radio",options:["sm","md","lg","xl"]}},render:({iconName:a,...l})=>e.jsx(n,{...l,icon:i[a]})},s={},o={render:()=>e.jsx("div",{className:"pf-story-gradient-icon-variants",children:d.map(a=>e.jsxs("div",{className:"pf-story-compact-stack",children:[e.jsx(n,{icon:t,gradient:a}),e.jsx("p",{className:"pf-story-body",children:a})]},a))})},r={render:()=>e.jsx("div",{className:"pf-story-gradient-icon-comparison",children:["sm","md","lg","xl"].map(a=>e.jsxs("div",{className:"pf-story-compact-stack",children:[e.jsx(n,{icon:c,size:a}),e.jsx("p",{className:"pf-story-body",children:a})]},a))})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="pf-story-gradient-icon-variants">
      {variants.map(gradient => <div key={gradient} className="pf-story-compact-stack">
          <GradientIcon icon={Sparkles} gradient={gradient} />
          <p className="pf-story-body">{gradient}</p>
        </div>)}
    </div>
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="pf-story-gradient-icon-comparison">
      {(["sm", "md", "lg", "xl"] as const).map(size => <div key={size} className="pf-story-compact-stack">
          <GradientIcon icon={Package} size={size} />
          <p className="pf-story-body">{size}</p>
        </div>)}
    </div>
}`,...r.parameters?.docs?.source}}};const N=["Playground","AllGradients","AllSizes"];export{o as AllGradients,r as AllSizes,s as Playground,N as __namedExportsOrder,x as default};
