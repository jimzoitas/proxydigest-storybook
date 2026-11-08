import{j as s}from"./iframe-BXubdNpd.js";/* empty css                      */import{R as w,M as f,E as D,D as v,a as x}from"./RegenerateHint-ma8Zu8S3.js";import"./preload-helper-PPVm8Dsz.js";import"./button-DOg3bB7T.js";import"./index-DKWiT4Fi.js";import"./loader-circle-WJxMtqtu.js";import"./index-C6spud9v.js";import"./trackPosthogEvent-CBk16WCm.js";import"./triangle-alert-BGpQ_lRK.js";import"./tooltip-core-CGhIyYC9.js";import"./badge-C4iUsAGF.js";const{expect:n,userEvent:I,within:t}=__STORYBOOK_MODULE_TEST__,k=[{code:"missing_density",name:"Missing density",description:"No density is stored for this ingredient.",affectedResources:[{resourceType:"ingredient",resourceId:12,resourceName:"Oat flour"}]}];function y({empty:e,dismissible:a,showDetails:b,hasDensity:h,volumeUnit:B,estimated:E,showRegenerate:T}){const g=e?[]:k;return s.jsxs("div",{className:"pf-story-data-quality-examples",children:[s.jsx(x,{disclaimers:g,dismissible:a,showDetails:b}),s.jsxs("div",{className:"pf-story-comfortable-toolbar",children:[s.jsx("span",{children:"Oat flour — 20 mL"}),s.jsx(v,{disclaimers:g}),s.jsx(f,{hasDensity:h==="unknown"?void 0:h==="available",isVolumeUnit:B}),E&&s.jsx(D,{})]}),s.jsx(w,{show:T})]})}const F={title:"Components/Feedback/Data Quality",component:y,subcomponents:{DisclaimerBanner:x,DisclaimerIndicator:v,EstimatedBadge:D,MissingDensityMarker:f,RegenerateHint:w},tags:["autodocs"],args:{empty:!1,dismissible:!0,showDetails:!1,hasDensity:"missing",volumeUnit:!0,estimated:!0,showRegenerate:!0},argTypes:{hasDensity:{control:"inline-radio",options:["missing","available","unknown"]}},parameters:{docs:{description:{component:"Actual disclaimer and density indicators. DisclaimerBanner accepts the backend Disclaimer[] shape, optional title/description, dismissible (default true), showDetails (default false), and optional dismissKey. With a resource key, dismissal is scoped in sessionStorage to the disclaimer fingerprint; changed resource/gaps reappear. Without a key this fixture dismisses only in memory. Empty input renders no banner/indicator. The compact indicator and estimated badge expose their tooltip by keyboard focus. MissingDensityMarker renders only when hasDensity is explicitly false AND isVolumeUnit=true; unknown never invents a warning. EstimatedBadge supports a tooltip override. RegenerateHint is informational and conditional on show, not an action. Hosts select relevant server disclaimers and own calculations/regeneration; fixtures do not certify calculated nutrition or execute AI requests. Dismissal retains the product analytics event."}}},render:e=>s.jsx(y,{...e})},i={},r={args:{showDetails:!0}},o={play:async({canvasElement:e})=>{const a=t(e);await I.click(a.getByTestId("disclaimer-banner-dismiss")),await n(a.queryByRole("alert")).not.toBeInTheDocument()}},c={args:{dismissible:!1},play:async({canvasElement:e})=>{await n(t(e).queryByTestId("disclaimer-banner-dismiss")).not.toBeInTheDocument()}},l={args:{hasDensity:"unknown"},play:async({canvasElement:e})=>{await n(t(e).queryByTestId("missing-density-marker")).not.toBeInTheDocument()}},m={args:{volumeUnit:!1},play:async({canvasElement:e})=>{await n(t(e).queryByTestId("missing-density-marker")).not.toBeInTheDocument()}},d={args:{empty:!0,estimated:!1,showRegenerate:!1,hasDensity:"available"},play:async({canvasElement:e})=>{await n(t(e).queryByRole("alert")).not.toBeInTheDocument()}},p={play:async({canvasElement:e})=>{const a=t(e).getByTestId("disclaimer-indicator");a.focus(),await n(a).toHaveFocus(),await n(a).toHaveAccessibleName()}},u={render:e=>s.jsxs("div",{className:"pf-story-stack",children:[s.jsxs("ol",{children:[s.jsx("li",{children:"Summary banner announces a server data gap."}),s.jsx("li",{children:"Optional authored detail list identifies affected resources."}),s.jsx("li",{children:"Row indicators explain local warning/estimate conditions."}),s.jsx("li",{children:"Regeneration hint remains informational; the host owns the action."})]}),s.jsx(y,{...e})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    showDetails: true
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await userEvent.click(c.getByTestId("disclaimer-banner-dismiss"));
    await expect(c.queryByRole("alert")).not.toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    dismissible: false
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).queryByTestId("disclaimer-banner-dismiss")).not.toBeInTheDocument();
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    hasDensity: "unknown"
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).queryByTestId("missing-density-marker")).not.toBeInTheDocument();
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    volumeUnit: false
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).queryByTestId("missing-density-marker")).not.toBeInTheDocument();
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    empty: true,
    estimated: false,
    showRegenerate: false,
    hasDensity: "available"
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).queryByRole("alert")).not.toBeInTheDocument();
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const indicator = within(canvasElement).getByTestId("disclaimer-indicator");
    indicator.focus();
    await expect(indicator).toHaveFocus();
    await expect(indicator).toHaveAccessibleName();
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <div className="pf-story-stack">
      <ol>
        <li>Summary banner announces a server data gap.</li>
        <li>Optional authored detail list identifies affected resources.</li>
        <li>Row indicators explain local warning/estimate conditions.</li>
        <li>
          Regeneration hint remains informational; the host owns the action.
        </li>
      </ol>
      <DataQualityExample {...args} />
    </div>
}`,...u.parameters?.docs?.source}}};const Q=["Playground","Details","Dismiss","NonDismissible","UnknownDensity","MassUnit","Empty","KeyboardIndicator","Anatomy"];export{u as Anatomy,r as Details,o as Dismiss,d as Empty,p as KeyboardIndicator,m as MassUnit,c as NonDismissible,i as Playground,l as UnknownDensity,Q as __namedExportsOrder,F as default};
