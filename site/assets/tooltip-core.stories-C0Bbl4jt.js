import{j as t,ci as T}from"./iframe-nhB53rPD.js";/* empty css                      */import{T as e}from"./tooltip-core-i2pf0ZTE.js";import{B as o}from"./button-_tcBhp5_.js";import{I as B}from"./info-BBafOREX.js";import{C as j}from"./circle-question-mark-HwM0B90G.js";import{T as v}from"./triangle-alert-XMA8UGNQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8Dbc_Jva.js";import"./loader-circle-MxHlgpxw.js";const P={title:"Components/Feedback/Tooltip Wrapper",id:"proxy-reusables-tooltipcore",component:e,decorators:[x=>t.jsx(T,{delayDuration:200,children:t.jsx(x,{})})],parameters:{layout:"centered"},tags:["autodocs"],argTypes:{disabled:{control:"boolean",description:"When true, the tooltip will never open"},side:{control:"select",options:["top","right","bottom","left"],description:"The preferred side of the trigger to render against"},sideOffset:{control:"number",description:"The distance in pixels from the trigger"},content:{description:"The content to display in the tooltip"}}},r={args:{trigger:t.jsx(o,{children:"Hover me"}),content:"This is a helpful tooltip!",side:"top"}},n={args:{children:t.jsx(o,{variant:"outline",children:"Hover for info"}),content:"You can pass children instead of trigger prop",side:"top"}},s={args:{trigger:t.jsx(o,{children:"Top"}),content:"Tooltip appears on top",side:"top"}},i={args:{trigger:t.jsx(o,{children:"Right"}),content:"Tooltip appears on the right",side:"right"}},a={args:{trigger:t.jsx(o,{children:"Bottom"}),content:"Tooltip appears below",side:"bottom"}},c={args:{trigger:t.jsx(o,{children:"Left"}),content:"Tooltip appears on the left",side:"left"}},p={args:{trigger:t.jsx(o,{size:"icon",variant:"ghost",children:t.jsx(B,{className:"pf-story-icon"})}),content:"Additional information about this feature",side:"top"}},l={args:{trigger:t.jsx(o,{size:"icon",variant:"outline",children:t.jsx(j,{className:"pf-story-icon"})}),content:"Click for help documentation",side:"right"}},d={args:{trigger:t.jsx(o,{size:"icon",variant:"destructive",children:t.jsx(v,{className:"pf-story-icon"})}),content:"Warning: This action cannot be undone",side:"bottom"}},g={args:{trigger:t.jsx(o,{children:"Hover me (disabled tooltip)"}),content:"You should not see this",disabled:!0}},m={args:{trigger:t.jsx(o,{variant:"secondary",children:"Rich Content"}),content:t.jsxs("div",{className:"pf-story-compact-stack",children:[t.jsx("p",{className:"pf-story-heading-weight",children:"Tooltip Title"}),t.jsxs("p",{className:"pf-story-body",children:["Tooltips can contain ",t.jsx("strong",{children:"rich content"})," including:"]}),t.jsxs("ul",{className:"pf-story-tooltip-core-instructions",children:[t.jsx("li",{children:"Multiple paragraphs"}),t.jsx("li",{children:"Formatted text"}),t.jsx("li",{children:"Lists and more"})]})]}),side:"top"}},u={args:{trigger:t.jsx(o,{children:"Large Offset"}),content:"This tooltip has a custom offset of 20px",side:"top",sideOffset:20}},h={args:{trigger:t.jsx("span",{className:"pf-story-tooltip-core-help-anchor",children:"Hover over this text"}),content:"Tooltips work on any element, not just buttons!",side:"top"}},f={args:{trigger:t.jsx(o,{children:"Top"}),content:"Top position",side:"top"},render:()=>t.jsxs("div",{className:"pf-story-tooltip-core-comparison",children:[t.jsx(e,{trigger:t.jsx(o,{children:"Top"}),content:"Top position",side:"top"}),t.jsxs("div",{className:"pf-story-tooltip-core-placements",children:[t.jsx(e,{trigger:t.jsx(o,{children:"Left"}),content:"Left position",side:"left"}),t.jsx(e,{trigger:t.jsx(o,{children:"Right"}),content:"Right position",side:"right"})]}),t.jsx(e,{trigger:t.jsx(o,{children:"Bottom"}),content:"Bottom position",side:"bottom"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button>Hover me</Button>,
    content: "This is a helpful tooltip!",
    side: "top"
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Button variant="outline">Hover for info</Button>,
    content: "You can pass children instead of trigger prop",
    side: "top"
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button>Top</Button>,
    content: "Tooltip appears on top",
    side: "top"
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button>Right</Button>,
    content: "Tooltip appears on the right",
    side: "right"
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button>Bottom</Button>,
    content: "Tooltip appears below",
    side: "bottom"
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button>Left</Button>,
    content: "Tooltip appears on the left",
    side: "left"
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button size="icon" variant="ghost">
        <Info className="pf-story-icon" />
      </Button>,
    content: "Additional information about this feature",
    side: "top"
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button size="icon" variant="outline">
        <HelpCircle className="pf-story-icon" />
      </Button>,
    content: "Click for help documentation",
    side: "right"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button size="icon" variant="destructive">
        <AlertTriangle className="pf-story-icon" />
      </Button>,
    content: "Warning: This action cannot be undone",
    side: "bottom"
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button>Hover me (disabled tooltip)</Button>,
    content: "You should not see this",
    disabled: true
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button variant="secondary">Rich Content</Button>,
    content: <div className="pf-story-compact-stack">
        <p className="pf-story-heading-weight">Tooltip Title</p>
        <p className="pf-story-body">
          Tooltips can contain <strong>rich content</strong> including:
        </p>
        <ul className="pf-story-tooltip-core-instructions">
          <li>Multiple paragraphs</li>
          <li>Formatted text</li>
          <li>Lists and more</li>
        </ul>
      </div>,
    side: "top"
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button>Large Offset</Button>,
    content: "This tooltip has a custom offset of 20px",
    side: "top",
    sideOffset: 20
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <span className="pf-story-tooltip-core-help-anchor">Hover over this text</span>,
    content: "Tooltips work on any element, not just buttons!",
    side: "top"
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button>Top</Button>,
    content: "Top position",
    side: "top"
  },
  render: () => <div className="pf-story-tooltip-core-comparison">
      <TooltipCore trigger={<Button>Top</Button>} content="Top position" side="top" />
      <div className="pf-story-tooltip-core-placements">
        <TooltipCore trigger={<Button>Left</Button>} content="Left position" side="left" />
        <TooltipCore trigger={<Button>Right</Button>} content="Right position" side="right" />
      </div>
      <TooltipCore trigger={<Button>Bottom</Button>} content="Bottom position" side="bottom" />
    </div>
}`,...f.parameters?.docs?.source}}};const O=["Default","WithChildren","PositionTop","PositionRight","PositionBottom","PositionLeft","WithInfoIcon","WithHelpIcon","WithWarningIcon","Disabled","RichContent","CustomOffset","OnTextElement","AllPositions"];export{f as AllPositions,u as CustomOffset,r as Default,g as Disabled,h as OnTextElement,a as PositionBottom,c as PositionLeft,i as PositionRight,s as PositionTop,m as RichContent,n as WithChildren,l as WithHelpIcon,p as WithInfoIcon,d as WithWarningIcon,O as __namedExportsOrder,P as default};
