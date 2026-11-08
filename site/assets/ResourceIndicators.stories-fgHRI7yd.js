import{j as e}from"./iframe-6uZ_OvXJ.js";/* empty css                      */import{E as l}from"./EquipmentSourceBadge-DvkoFiiH.js";import{P as m}from"./PermissionIcons-3qns-0oY.js";import"./preload-helper-PPVm8Dsz.js";import"./tooltip-core-Ddkl4sOF.js";import"./globe-Cx9ESZ5K.js";import"./factory-B6pYZqD4.js";import"./roleColors-C3j0TQHu.js";import"./user-star-DrcXs0v8.js";const{expect:d,within:u}=__STORYBOOK_MODULE_TEST__;function p({source:n,role:o}){return e.jsxs("div",{className:"pf-story-comfortable-toolbar",children:[e.jsx("span",{children:"Mixing equipment"}),e.jsx(l,{tenantId:n==="unknown"?null:n==="proxy"?1:42,proxyLabel:"Proxy equipment",organizationLabel:"Organization equipment"}),e.jsx(m,{permissions:o==="unknown"?void 0:{update:o==="editor",delete:!1,admin:o==="manager"}})]})}const j={title:"Components/Data Display/Resource Indicators",component:p,subcomponents:{EquipmentSourceBadge:l,PermissionIcons:m},tags:["autodocs"],args:{source:"proxy",role:"editor"},argTypes:{source:{control:"inline-radio",options:["proxy","organization","unknown"]},role:{control:"inline-radio",options:["viewer","editor","manager","unknown"]}},parameters:{docs:{description:{component:"Actual informational equipment-source and resource-permission indicators. EquipmentSourceBadge accepts tenantId and explicit proxyLabel/organizationLabel; null/undefined renders nothing, and the app's isProxyTenant rule chooses its icon. PermissionIcons accepts update/delete/admin: update OR delete chooses editor, otherwise viewer; admin adds the independent access-manager icon. Missing permissions renders nothing. Labels and tooltip triggers are keyboard reachable; the icons do not change permissions or navigate. The host obtains trusted permissions and appropriate tenant labels. iconSize/className remain optional presentation hooks. These are existing composed icon/tooltip primitives with no new service contract."}}},render:n=>e.jsx(p,{...n})},r={},a={args:{source:"organization",role:"viewer"}},s={args:{role:"manager"}},i={args:{source:"unknown",role:"unknown"},play:async({canvasElement:n})=>{await d(n.querySelector('[tabindex="0"]')).not.toBeInTheDocument()}},t={play:async({canvasElement:n})=>{const o=u(n).getByLabelText("Proxy equipment");await d(o).toHaveAttribute("tabindex","0")}},c={render:n=>e.jsxs("div",{className:"pf-story-stack",children:[e.jsxs("ol",{children:[e.jsx("li",{children:"The host supplies the resource label."}),e.jsx("li",{children:"A source icon identifies Proxy or organization ownership."}),e.jsx("li",{children:"Permission icons distinguish editing from access management."}),e.jsx("li",{children:"Focus reveals each localized explanation without triggering an action."})]}),e.jsx(p,{...n})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    source: "organization",
    role: "viewer"
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    role: "manager"
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    source: "unknown",
    role: "unknown"
  },
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelector('[tabindex="0"]')).not.toBeInTheDocument();
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const marker = within(canvasElement).getByLabelText("Proxy equipment");
    await expect(marker).toHaveAttribute("tabindex", "0");
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div className="pf-story-stack">
      <ol>
        <li>The host supplies the resource label.</li>
        <li>A source icon identifies Proxy or organization ownership.</li>
        <li>Permission icons distinguish editing from access management.</li>
        <li>
          Focus reveals each localized explanation without triggering an action.
        </li>
      </ol>
      <ResourceIndicatorsExample {...args} />
    </div>
}`,...c.parameters?.docs?.source}}};const z=["Playground","Organization","AccessManager","Unknown","NamedSource","Anatomy"];export{s as AccessManager,c as Anatomy,t as NamedSource,a as Organization,r as Playground,i as Unknown,z as __namedExportsOrder,j as default};
