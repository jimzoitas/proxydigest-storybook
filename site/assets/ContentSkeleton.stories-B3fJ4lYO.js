import{j as e}from"./iframe-nhB53rPD.js";import{V as c}from"./ValueSkeleton-BA0XiIgT.js";import{T as i}from"./TableSkeleton-tNruK-Sq.js";import"./preload-helper-PPVm8Dsz.js";/* empty css                              */import"./skeleton-CMUv0H3w.js";function l({view:r,align:p,rows:m,columns:u}){return e.jsx("section",{"aria-label":"Recipe values loading","aria-busy":"true",children:r==="value"?e.jsxs("div",{className:"pf-story-content-skeleton-heading",children:[e.jsx("span",{children:"Calculated cost"}),e.jsx(c,{align:p})]}):e.jsx(i,{rows:m,columns:u})})}const x={title:"Components/Feedback/Content Skeletons",component:l,subcomponents:{ValueSkeleton:c,TableSkeleton:i},tags:["autodocs"],args:{view:"table",align:"right",rows:3,columns:2},argTypes:{view:{control:"inline-radio",options:["value","table"]},align:{control:"inline-radio",options:["left","center","right"]},rows:{control:{type:"range",min:0,max:8,step:1}},columns:{control:{type:"range",min:1,max:5,step:1}}},parameters:{docs:{description:{component:"Actual ValueSkeleton and TableSkeleton compose the canonical Skeleton primitive. ValueSkeleton keeps the row label present and defaults to right alignment for numeric cells; className customizes the pill. TableSkeleton takes row/column counts (defaults 3/2) and reserves a header plus value rows. They have no progress, fetch or announcement API; the host owns aria-busy and accessible loading context, as shown here. Screen-specific skeleton compositions stay with their product host because their geometry mirrors that view."}}},render:r=>e.jsx(l,{...r})},a={},o={args:{view:"value"}},s={args:{view:"value",align:"center"}},n={args:{rows:0}},t={render:r=>e.jsxs("div",{children:[e.jsx("p",{children:"A host-labelled busy region contains a table header/row structure or one aligned numeric value pill."}),e.jsx(l,{...r})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    view: "value"
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    view: "value",
    align: "center"
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 0
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <div>
      <p>
        A host-labelled busy region contains a table header/row structure or one
        aligned numeric value pill.
      </p>
      <ContentSkeletonExample {...args} />
    </div>
}`,...t.parameters?.docs?.source}}};const y=["Playground","Value","Centered","EmptyRows","Anatomy"];export{t as Anatomy,s as Centered,n as EmptyRows,a as Playground,o as Value,y as __namedExportsOrder,x as default};
