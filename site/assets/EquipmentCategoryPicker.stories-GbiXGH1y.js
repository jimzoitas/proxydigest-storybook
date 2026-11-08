import{r as d,j as c}from"./iframe-BXubdNpd.js";/* empty css                      */import{E as u}from"./EquipmentCategoryPicker-BcwEx084.js";import"./preload-helper-PPVm8Dsz.js";import"./input-BWeqiJDe.js";import"./accordion-B-A_a53W.js";import"./roving-focus-0SK5-Aqb.js";import"./useCollapsiblePanel-C5JKJn3w.js";import"./badge-C4iUsAGF.js";import"./index-DKWiT4Fi.js";import"./checkbox-R9lg0Zy-.js";import"./minus-BU5OS2V8.js";import"./useAriaLabelledBy-Dlr4qUIQ.js";import"./label-B-ScEoCq.js";import"./EquipmentSourceBadge-YGBExuqg.js";import"./tooltip-core-CGhIyYC9.js";import"./globe-B0ftb1E8.js";import"./factory-DXqe8JVT.js";import"./button-DOg3bB7T.js";import"./loader-circle-WJxMtqtu.js";function e(i,p,r){const l=r?.brandOwner||r?.model?{id:0,brandOwner:r?.brandOwner??null,model:r?.model??null}:void 0;return{id:i,name:p,definition:r?.definition??null,isBranded:!!r?.brandOwner,detail:l}}const m=[{id:"pt-mixers",name:"Mixers",equipment:[e("eq-1","Jacketed Pot with Agitator",{definition:"Steam- or glycol-jacketed vessel fitted with a motorised agitator for continuous blending.",brandOwner:"Lee Industries",model:"DCB-300"}),e("eq-2","Ribbon Blender",{definition:"Horizontal trough with ribbon agitator for low-shear dry powder mixing.",brandOwner:"Ross"}),e("eq-3","Planetary Mixer")]},{id:"pt-ovens",name:"Ovens",equipment:[e("eq-4","Convection Oven")]},{id:"pt-cookers",name:"Cookers",equipment:[e("eq-5","Steam Kettle")]},{id:"pt-dryers",name:"Dryers",equipment:[e("eq-6","Spray Dryer")]},{id:"pt-homogenizers",name:"Homogenizers",equipment:[e("eq-7","High-Pressure Homogenizer")]},{id:"pt-extruders",name:"Extruders",equipment:[e("eq-8","Twin-Screw Extruder")]},{id:"pt-fermenters",name:"Fermenters",equipment:[e("eq-9","Stirred-Tank Fermenter")]},{id:"pt-separators",name:"Separators",equipment:[e("eq-10","Disk Centrifuge")]},{id:"pt-freezers",name:"Freezers",equipment:[e("eq-11","Blast Freezer")]},{id:"pt-packaging",name:"Packaging",equipment:[e("eq-12","Flow Wrapper")]},{id:"pt-fillers",name:"Fillers",equipment:[e("eq-13","Piston Filler")]},{id:"pt-pasteurizers",name:"Pasteurizers",equipment:[e("eq-14","HTST Pasteurizer")]}];function g(i){const[p,r]=d.useState(i.initialValue??[]);return c.jsx("div",{className:"pf-story-panel-content",children:c.jsx(u,{categories:i.categories,value:p,onChange:l=>r(l),disabled:i.disabled})})}const T={title:"Product examples/Specifications/EquipmentCategoryPicker",id:"specifications-equipmentcategorypicker",component:g,parameters:{layout:"fullscreen"}},t={args:{categories:m,initialValue:["eq-1","eq-2"]}},a={args:{categories:m,initialValue:[]}},n={args:{categories:m,initialValue:["eq-1"],disabled:!0}},o={args:{categories:[],initialValue:[]}},s={args:{categories:m,initialValue:[]},parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    categories: SAMPLE_CATEGORIES,
    initialValue: ["eq-1", "eq-2"]
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    categories: SAMPLE_CATEGORIES,
    initialValue: []
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    categories: SAMPLE_CATEGORIES,
    initialValue: ["eq-1"],
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    categories: [],
    initialValue: []
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    categories: SAMPLE_CATEGORIES,
    initialValue: []
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...s.parameters?.docs?.source}}};const _=["Default","NoSelection","ReadOnly","EmptyFacilityFilter","MobileViewport"];export{t as Default,o as EmptyFacilityFilter,s as MobileViewport,a as NoSelection,n as ReadOnly,_ as __namedExportsOrder,T as default};
