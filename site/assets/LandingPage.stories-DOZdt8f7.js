import{L as p}from"./LandingPage-C-haBy_2.js";import"./iframe-BXubdNpd.js";import"./preload-helper-PPVm8Dsz.js";import"./button-DOg3bB7T.js";import"./index-DKWiT4Fi.js";import"./loader-circle-WJxMtqtu.js";import"./separator-BKKMk4Xo.js";import"./Separator-DI4aBzER.js";const{expect:s,fn:c,userEvent:d,within:u}=__STORYBOOK_MODULE_TEST__,v={title:"Page layouts/Feature Landing",component:p,tags:["autodocs"],args:{title:"Explore formulation guidance",description:"A quiet introduction to a product area.",footer:"Early access",actionButtons:[{label:"Open local example",variant:"default",onClick:c()},{label:"Unavailable example",variant:"secondary",disabled:!0,onClick:c()}]},argTypes:{actionButtons:{control:!1},onGetStarted:{control:!1}},parameters:{docs:{description:{component:"The existing landing shell owns the centered title, explanatory copy, optional explicit actionButtons and early-access footer. Supply native button callbacks and disabled state; action labels must describe destinations or actions. With no actionButtons, the original Learn More visual and footer remain. Learn More currently has no callback in source; the legacy onGetStarted prop is accepted but unused. This page does not fabricate navigation for that placeholder. Explicit host actions are tested separately. Product modules choose their copy, permission visibility and routing."}}}},e={},t={play:async({canvasElement:i,args:l})=>{const r=u(i);await d.click(r.getByRole("button",{name:"Open local example"})),await s(l.actionButtons?.[0].onClick).toHaveBeenCalledTimes(1),await s(r.getByRole("button",{name:"Unavailable example"})).toBeDisabled()}},a={args:{actionButtons:void 0}},o={args:{title:"Develop and compare a complete collection of product concepts",description:"This longer explanation exercises natural wrapping without prescribing a product-specific route, request, authorization rule or success message."}},n={parameters:{docs:{description:{story:"Centered content frame → title and description → explicit action group OR authored early-access footer. The landing CSS file owns layout tokens; Button/Typography/Separator own their nested styles."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const c = within(canvasElement);
    await userEvent.click(c.getByRole("button", {
      name: "Open local example"
    }));
    await expect(args.actionButtons?.[0].onClick).toHaveBeenCalledTimes(1);
    await expect(c.getByRole("button", {
      name: "Unavailable example"
    })).toBeDisabled();
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    actionButtons: undefined
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Develop and compare a complete collection of product concepts",
    description: "This longer explanation exercises natural wrapping without prescribing a product-specific route, request, authorization rule or success message."
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Centered content frame → title and description → explicit action group OR authored early-access footer. The landing CSS file owns layout tokens; Button/Typography/Separator own their nested styles."
      }
    }
  }
}`,...n.parameters?.docs?.source}}};const w=["Playground","ExplicitActions","EarlyAccessPlaceholder","LongCopy","Anatomy"];export{n as Anatomy,a as EarlyAccessPlaceholder,t as ExplicitActions,o as LongCopy,e as Playground,w as __namedExportsOrder,v as default};
