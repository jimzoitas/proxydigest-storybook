import{C as g}from"./float-button-BZvZGDYN.js";import{P as u}from"./plus-BMpb-JrX.js";import{D as p}from"./download-D2YSvej-.js";import{S as b}from"./settings-2-CsZd8sXG.js";import"./iframe-DgvZnKtv.js";import"./preload-helper-PPVm8Dsz.js";import"./button-CEcYiQdY.js";import"./index-BWlKOsdO.js";import"./loader-circle-BsZrs7F6.js";const{expect:t,fn:i,userEvent:l,within:y}=__STORYBOOK_MODULE_TEST__,T={title:"Components/Triggers/Floating Actions",id:"components-actions-floating-actions",component:g,tags:["autodocs"],args:{actions:[{icon:u,label:"Add local item",onClick:i()},{icon:p,label:"Export example",onClick:i()}]},argTypes:{actions:{control:!1},icon:{control:!1}},parameters:{docs:{description:{component:"The actual fixed floating action group accepts actions [{icon,label,onClick}] and optional icon. Its native trigger exposes expanded state; each action has its own accessible label. Collapsed controls remain mounted for the authored staggered animation but are inert and hidden from accessibility navigation. Activating an action invokes the host callback once, collapses and returns keyboard focus to the trigger. Supply unique meaningful labels and keep navigation/persistence/permissions in the host. The fixed bottom-right location and 50ms per-item animation are intentional product behavior. Empty groups preserve the existing toggle but offer no actions; hosts should omit the group when no actions are available."}}}},a={},o={play:async({canvasElement:m,args:d})=>{const c=y(m),e=c.getByRole("button",{name:"Open menu"});e.focus(),await l.keyboard("{Enter}"),await t(e).toHaveAttribute("aria-expanded","true"),c.getByRole("button",{name:"Add local item"}).focus(),await l.keyboard("{Enter}"),await t(d.actions[0].onClick).toHaveBeenCalledTimes(1),await t(e).toHaveAttribute("aria-expanded","false"),await t(e).toHaveFocus()}},n={args:{actions:[]}},r={args:{icon:b,actions:[{icon:p,label:"Export example",onClick:i()}]}},s={parameters:{docs:{description:{story:"Trigger → animated action stack → host callback. Labels are the only action text exposed in this icon-only presentation."}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const c = within(canvasElement);
    const trigger = c.getByRole("button", {
      name: "Open menu"
    });
    trigger.focus();
    await userEvent.keyboard("{Enter}");
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    const action = c.getByRole("button", {
      name: "Add local item"
    });
    action.focus();
    await userEvent.keyboard("{Enter}");
    await expect(args.actions[0].onClick).toHaveBeenCalledTimes(1);
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await expect(trigger).toHaveFocus();
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    actions: []
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    icon: Settings2,
    actions: [{
      icon: Download,
      label: "Export example",
      onClick: fn()
    }]
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Trigger → animated action stack → host callback. Labels are the only action text exposed in this icon-only presentation."
      }
    }
  }
}`,...s.parameters?.docs?.source}}};const H=["Playground","KeyboardAction","Empty","CustomIcon","Anatomy"];export{s as Anatomy,r as CustomIcon,n as Empty,o as KeyboardAction,a as Playground,H as __namedExportsOrder,T as default};
