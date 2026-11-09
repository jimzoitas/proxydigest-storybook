import{j as v,T as f}from"./iframe-DgvZnKtv.js";import"./preload-helper-PPVm8Dsz.js";const{expect:b,userEvent:a,within:y}=__STORYBOOK_MODULE_TEST__;function T({tone:t,weight:h,as:e,...w}){const x={...w,tone:t==="variant"?void 0:t,weight:h==="variant"?void 0:h};return e==="span"?v.jsx(f,{...x,as:"span"}):v.jsx(f,{...x,as:"p"})}const W={title:"Components/Content/Typography",component:f,tags:["autodocs"],parameters:{layout:"padded",controls:{include:["children","variant","tone","weight","as","tooltipIfTruncated"]},docs:{description:{component:"Proxy's text roles preserve their existing metrics: body 14px with relaxed lines, title 20px, subtitle 14px, and footnote 12px. Body-compact uses 14px/20px; caption uses 12px/16px. Section-title uses 18px/28px bold; body-large 16px/24px regular; title-compact 20px/28px semibold; detail 13.5px with relaxed lines. Both compact roles default to regular reading ink and regular weight. Variant keeps the role's ink and emphasis: footnote is muted; subtitle is semibold. Optional tone and weight change only ink or emphasis. Use as=span inside a control; all other roles remain paragraphs, not semantic headings. The host owns layout, wrapping and truncation. A truncation tooltip appears only when the actual text element overflows. See Typography.contract.json and Typography.md for anatomy, compatibility and usage."}}},args:{children:"Recipe summary",variant:"body",tone:"variant",weight:"variant",as:"p",tooltipIfTruncated:!1},argTypes:{children:{control:"text",name:"Text"},variant:{control:"inline-radio",options:["body","body-compact","title","subtitle","footnote","caption","section-title","body-large","title-compact","detail"]},tone:{control:"inline-radio",options:["variant","default","muted"],description:"Variant keeps the role's ink. Default explicitly selects regular reading ink, including on a footnote."},weight:{control:"inline-radio",options:["variant","medium","semibold"],description:"Variant keeps the role's emphasis. Medium and semibold preserve its font size and line height."},as:{control:"inline-radio",options:["p","span"]},tooltipIfTruncated:{control:"boolean"}},render:t=>v.jsx(T,{...t})},o={},n={args:{tone:"muted"}},r={args:{variant:"body-compact"}},s={args:{variant:"caption"}},i={args:{variant:"section-title"}},c={args:{variant:"body-large"}},l={args:{variant:"title-compact"}},p={args:{variant:"detail"}},d={args:{variant:"footnote",weight:"medium"}},u={args:{variant:"footnote",tone:"default"}},m={args:{as:"span",variant:"subtitle"}},g={args:{children:"A complete formulation summary",tooltipIfTruncated:!0},play:async({canvasElement:t})=>{const e=y(t).getByText("A complete formulation summary");Object.defineProperties(e,{scrollWidth:{configurable:!0,value:200},clientWidth:{configurable:!0,value:100}}),await a.hover(e),await b(await y(t.ownerDocument.body).findByRole("tooltip")).toHaveTextContent("A complete formulation summary"),await a.unhover(e),Object.defineProperties(e,{scrollWidth:{configurable:!0,value:100},clientWidth:{configurable:!0,value:100}}),await a.hover(e),await b(y(t.ownerDocument.body).queryByRole("tooltip")).not.toBeInTheDocument(),await a.unhover(e),Reflect.deleteProperty(e,"scrollWidth"),Reflect.deleteProperty(e,"clientWidth")}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    tone: "muted"
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "body-compact"
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "caption"
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "section-title"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "body-large"
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "title-compact"
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "detail"
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "footnote",
    weight: "medium"
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "footnote",
    tone: "default"
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    as: "span",
    variant: "subtitle"
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: "A complete formulation summary",
    tooltipIfTruncated: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const text = canvas.getByText("A complete formulation summary");
    // The story tests both branches without imposing host layout on Typography.
    Object.defineProperties(text, {
      scrollWidth: {
        configurable: true,
        value: 200
      },
      clientWidth: {
        configurable: true,
        value: 100
      }
    });
    await userEvent.hover(text);
    await expect(await within(canvasElement.ownerDocument.body).findByRole("tooltip")).toHaveTextContent("A complete formulation summary");
    await userEvent.unhover(text);
    Object.defineProperties(text, {
      scrollWidth: {
        configurable: true,
        value: 100
      },
      clientWidth: {
        configurable: true,
        value: 100
      }
    });
    await userEvent.hover(text);
    await expect(within(canvasElement.ownerDocument.body).queryByRole("tooltip")).not.toBeInTheDocument();
    await userEvent.unhover(text);
    Reflect.deleteProperty(text, "scrollWidth");
    Reflect.deleteProperty(text, "clientWidth");
  }
}`,...g.parameters?.docs?.source}}};const R=["Playground","MutedBody","CompactBody","Caption","SectionTitle","LargeBody","CompactTitle","Detail","MediumFootnote","ReadingFootnote","InlineContent","TooltipOnlyWhenTruncated"];export{s as Caption,r as CompactBody,l as CompactTitle,p as Detail,m as InlineContent,c as LargeBody,d as MediumFootnote,n as MutedBody,o as Playground,u as ReadingFootnote,i as SectionTitle,g as TooltipOnlyWhenTruncated,R as __namedExportsOrder,W as default};
