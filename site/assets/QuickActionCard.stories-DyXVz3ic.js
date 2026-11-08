import{av as h,j as a}from"./iframe-6uZ_OvXJ.js";/* empty css                      */import{Q as g}from"./QuickActionCard-BQt3A_CC.js";import"./preload-helper-PPVm8Dsz.js";import"./GradientIcon-BcoxLprl.js";import"./StatusIndicator-ENElgtKP.js";import"./chevron-right-DQAu3Wv6.js";const{expect:t,fn:b,userEvent:m,within:r}=__STORYBOOK_MODULE_TEST__,T={title:"Components/Triggers/Quick Action Card",component:g,tags:["autodocs"],args:{title:"Create recipe",description:"Start a new formulation",icon:h,appearance:"feature",onClick:b(),disabled:!1,showChevron:!0},argTypes:{appearance:{control:"inline-radio",options:["feature","compact","tile"]},icon:{control:!1},onClick:{control:!1},href:{control:!1},statusVariant:{control:"select",options:["default","success","warning","info","gradient"]}},parameters:{docs:{description:{component:["A single quick-action pattern now owns the existing feature card, compact Home action and spacious Start New tile. The source consumers use appearance=compact/tile; their original icon treatment, alignment, typography, muted description, chevron and status placement remain separate supported variants.",`### API and state
The original feature API/default is preserved: title, description, icon, gradient, href, onClick, disabled, statusBadge/statusVariant, showChevron and className. Enabled href renders a router Link; enabled onClick renders a native button; a feature without action renders a noninteractive div. Compact/tile are native buttons, even while disabled; the host still owns permissions, feature flags and route/action callbacks. The Home coming-soon status is disabled, trailing, gradient and faded. A status badge replaces the compact/tile chevron. Native keyboard activation and disabled suppression are verified. Do not place nested controls in this whole-card trigger.`,`### Integration
StartNewModal keeps close-before-requestAnimationFrame navigation/reset actions and conditional creation permissions. HomeQuickActions keeps immediate navigation and creation permissions. These product-specific compositions use established button, icon and status primitives; there is no new backend or library-level interaction capability. No API requests are made by this card.`].join(`

`)}}}},s={},i={args:{appearance:"compact"},play:async({canvasElement:e,args:n})=>{const o=r(e).getByRole("button",{name:/Create recipe/});await m.click(o),await t(n.onClick).toHaveBeenCalledTimes(1)}},c={args:{appearance:"tile"},play:async({canvasElement:e,args:n})=>{r(e).getByRole("button",{name:/Create recipe/}).focus(),await m.keyboard("{Enter}"),await t(n.onClick).toHaveBeenCalledTimes(1)}},l={args:{appearance:"compact",title:"Batch import",disabled:!0,statusBadge:"Coming soon",statusVariant:"gradient"},play:async({canvasElement:e,args:n})=>{const o=r(e).getByRole("button",{name:/Batch import/});await t(o).toBeDisabled(),await m.click(o),await t(n.onClick).not.toHaveBeenCalled()}},p={args:{disabled:!0},play:async({canvasElement:e})=>{await t(r(e).queryByRole("button")).not.toBeInTheDocument(),await t(e.querySelector('[aria-disabled="true"]')).toBeInTheDocument()}},d={args:{href:"/recipes",onClick:void 0},play:async({canvasElement:e})=>{await t(r(e).getByRole("link",{name:/Create recipe/})).toHaveAttribute("href","/recipes")}},u={render:e=>a.jsxs("div",{className:"pf-story-stack",children:[a.jsxs("ol",{children:[a.jsx("li",{children:"One whole-card native action; routing and permissions belong to the host."}),a.jsx("li",{children:"Leading icon uses the authored feature, compact or tile treatment."}),a.jsx("li",{children:"Title and optional description keep each supported density."}),a.jsx("li",{children:"Trailing chevron or status shows availability."})]}),a.jsx(g,{...e})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: "compact"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const button = within(canvasElement).getByRole("button", {
      name: /Create recipe/
    });
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: "tile"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const button = within(canvasElement).getByRole("button", {
      name: /Create recipe/
    });
    button.focus();
    await userEvent.keyboard("{Enter}");
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: "compact",
    title: "Batch import",
    disabled: true,
    statusBadge: "Coming soon",
    statusVariant: "gradient"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const button = within(canvasElement).getByRole("button", {
      name: /Batch import/
    });
    await expect(button).toBeDisabled();
    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).queryByRole("button")).not.toBeInTheDocument();
    await expect(canvasElement.querySelector('[aria-disabled="true"]')).toBeInTheDocument();
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    href: "/recipes",
    onClick: undefined
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByRole("link", {
      name: /Create recipe/
    })).toHaveAttribute("href", "/recipes");
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <div className="pf-story-stack">
      <ol>
        <li>
          One whole-card native action; routing and permissions belong to the
          host.
        </li>
        <li>
          Leading icon uses the authored feature, compact or tile treatment.
        </li>
        <li>Title and optional description keep each supported density.</li>
        <li>Trailing chevron or status shows availability.</li>
      </ol>
      <QuickActionCard {...args} />
    </div>
}`,...u.parameters?.docs?.source}}};const E=["Playground","Compact","Tile","ComingSoon","DisabledFeature","Link","Anatomy"];export{u as Anatomy,l as ComingSoon,i as Compact,p as DisabledFeature,d as Link,s as Playground,c as Tile,E as __namedExportsOrder,T as default};
