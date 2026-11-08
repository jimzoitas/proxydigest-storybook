import{j as c,r as u}from"./iframe-6uZ_OvXJ.js";import{E as b}from"./ExpandableTextTrigger-CtaP99rt.js";import"./preload-helper-PPVm8Dsz.js";import"./button-A8HzViyP.js";import"./index-BIEDR5QJ.js";import"./loader-circle-DPzNQWfU.js";const{expect:a,fn:g,userEvent:p,within:m}=__STORYBOOK_MODULE_TEST__;function x(e){const[n,o]=u.useState(e.expanded),t=u.useId();return u.useEffect(()=>o(e.expanded),[e.expanded]),c.jsxs("div",{children:[c.jsx(b,{...e,expanded:n,"aria-controls":t,onExpandedChange:h=>{o(h),e.onExpandedChange(h)}}),c.jsx("p",{id:t,hidden:!n,children:"Additional information is visible."})]})}const C={title:"Components/Triggers/Expandable Text Trigger",component:b,tags:["autodocs"],parameters:{layout:"centered",controls:{include:["expanded","expandLabel","collapseLabel","size","disabled"]},docs:{description:{component:["A controlled text disclosure action built from the real shared Button. Use it to reveal more content in a list or section; the host owns content visibility and the limit. It does not fetch, paginate, navigate or move focus.",`## Usage and API
Provide expanded and onExpandedChange. Localize expandLabel (default Show all) and collapseLabel (default Show less), and pass aria-controls for the stable ID of the controlled region. Native button attributes, event handlers and the HTMLButtonElement ref are forwarded. type defaults to button, so an ordinary disclosure does not submit a surrounding form. Preventing the native onClick default suppresses the change request. There is no uncontrolled mode, children slot, link/asChild mode or independent aria-expanded override.`,`## Accessibility
Tab reaches the enabled button; Enter and Space request the opposite expanded value. The visible label is the default accessible name, the chevron is decorative, and aria-expanded always follows the controlled prop. Disabled blocks activation. Keep focus on the same button when its label changes. The host supplies meaningful labels, a real aria-controls target, localized content, and any extra announcement or focus handoff needed by its content. Keyboard focus and forced-colors focus treatment come from Button; pointer focus alone adds no focus ring.`,`## Sizes and tokens
Small, Medium and Large use the component heights 24, 28 and 32px at the standard root size. The Trigger category owns the nested Button's height, gap, padding, typography, icon size, corners, Action/Ghost state paint and focus groups. The wrapper owns its compact size and label groups (24/28/32px height and 12/13/14px type) and reuses the equal-height Button corner groups; its label is left aligned and truncates within available width. It introduces no raw design values. Metrics remain identical across ProxyDigestFixed/Floating and Light/Dark. The label stays complete in the accessible name when visually truncated.`,`## Contract and acceptance
The colocated ExpandableTextTrigger.contract.json defines component, host and design responsibilities (EXPAND-001–006). KeyboardToggle exercises pointer, Enter, Space and stable focus; Disabled verifies suppression. Unit tests cover controlled refusal, native callbacks/ref/attributes and safe form behavior. The 12-case matrix covers three sizes × expanded/collapsed × enabled/disabled. Portable tests establish these finite behavior cases; browser geometry and focus evidence are recorded separately in docs/systemization.`].join(`

`)}}},args:{expanded:!1,onExpandedChange:g(),expandLabel:"Show all",collapseLabel:"Show less",size:"medium",disabled:!1},argTypes:{expanded:{control:"boolean",description:"Host-owned state; the example synchronizes it with the controls."},expandLabel:{control:"text"},collapseLabel:{control:"text"},size:{options:["small","medium","large"],control:"inline-radio"},disabled:{control:"boolean"},onExpandedChange:{control:!1}},render:e=>c.jsx(x,{...e})},s={},r={},i={args:{expanded:!0}},d={args:{disabled:!0},play:async({canvasElement:e,args:n})=>{const o=m(e).getByRole("button",{name:"Show all"});await a(o).toBeDisabled(),await p.click(o),await a(n.onExpandedChange).not.toHaveBeenCalled()}},l={play:async({canvasElement:e,args:n})=>{const o=m(e),t=o.getByRole("button",{name:"Show all"});t.focus(),await p.keyboard("{Enter}"),await a(t).toHaveAttribute("aria-expanded","true"),await a(t).toHaveAccessibleName("Show less"),await a(t).toHaveFocus(),await a(o.getByText("Additional information is visible.")).toBeVisible(),await p.keyboard(" "),await a(t).toHaveAttribute("aria-expanded","false"),await a(t).toHaveFocus(),await p.click(t),await a(n.onExpandedChange).toHaveBeenNthCalledWith(1,!0),await a(n.onExpandedChange).toHaveBeenNthCalledWith(2,!1),await a(n.onExpandedChange).toHaveBeenNthCalledWith(3,!0)}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: true
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const button = within(canvasElement).getByRole("button", {
      name: "Show all"
    });
    await expect(button).toBeDisabled();
    await userEvent.click(button);
    await expect(args.onExpandedChange).not.toHaveBeenCalled();
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", {
      name: "Show all"
    });
    button.focus();
    await userEvent.keyboard("{Enter}");
    await expect(button).toHaveAttribute("aria-expanded", "true");
    await expect(button).toHaveAccessibleName("Show less");
    await expect(button).toHaveFocus();
    await expect(canvas.getByText("Additional information is visible.")).toBeVisible();
    await userEvent.keyboard(" ");
    await expect(button).toHaveAttribute("aria-expanded", "false");
    await expect(button).toHaveFocus();
    await userEvent.click(button);
    await expect(args.onExpandedChange).toHaveBeenNthCalledWith(1, true);
    await expect(args.onExpandedChange).toHaveBeenNthCalledWith(2, false);
    await expect(args.onExpandedChange).toHaveBeenNthCalledWith(3, true);
  }
}`,...l.parameters?.docs?.source}}};const B=["Playground","Anatomy","Expanded","Disabled","KeyboardToggle"];export{r as Anatomy,d as Disabled,i as Expanded,l as KeyboardToggle,s as Playground,B as __namedExportsOrder,C as default};
