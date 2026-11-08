import{j as o}from"./iframe-6uZ_OvXJ.js";import{S as t}from"./skeleton-Bu9j_NfJ.js";import"./preload-helper-PPVm8Dsz.js";const i={title:"Components/Feedback/Skeleton",component:t,tags:["autodocs"],parameters:{layout:"padded",controls:{include:["className","aria-label","aria-busy"]},docs:{description:{component:"Placeholder for content while the host loads it. This div has no variant API. Match its className to the expected content geometry and set aria-busy on the containing region. It does not fetch data or announce progress. Owned by feedback tokens."}}},args:{className:"pf-story-skeleton-placeholder","aria-label":"Loading recipe","aria-busy":!0},argTypes:{className:{control:"text"},"aria-label":{control:"text"},"aria-busy":{control:"boolean"}}},e={},a={render:n=>o.jsxs("div",{"aria-busy":"true",children:[o.jsx("p",{children:"The host owns the loading announcement and anticipated content dimensions."}),o.jsx(t,{...n})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <div aria-busy="true">
      <p>
        The host owns the loading announcement and anticipated content
        dimensions.
      </p>
      <Skeleton {...args} />
    </div>
}`,...a.parameters?.docs?.source}}};const d=["Playground","Anatomy"];export{a as Anatomy,e as Playground,d as __namedExportsOrder,i as default};
