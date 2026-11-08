import{j as e,r}from"./iframe-6uZ_OvXJ.js";/* empty css                      */import{B as b}from"./button-A8HzViyP.js";import{I as N}from"./input-xqFXePlz.js";import{S}from"./side-sheet-B1_ZmcZ7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BIEDR5QJ.js";import"./loader-circle-DPzNQWfU.js";import"./sheet-024fQP7m.js";import"./overlay-dialog-_C1niahL.js";import"./tooltip-core-Ddkl4sOF.js";import"./panel-left-CatA2Q48.js";import"./external-link-D6KuruoI.js";const{expect:v,userEvent:o,waitFor:j,within:l}=__STORYBOOK_MODULE_TEST__;function O(t){const i=r.useId(),[a,n]=r.useState(t.open),[C,d]=r.useState(t.expanded??!1),[w,E]=r.useState("Oat drink"),[R,k]=r.useState("No changes saved.");return r.useEffect(()=>n(t.open),[t.open]),r.useEffect(()=>d(t.expanded??!1),[t.expanded]),e.jsxs("div",{className:"pf-story-regular-stack",children:[e.jsx(b,{onClick:()=>n(!0),children:"Open details sheet"}),e.jsx("p",{role:"status",className:"pf-story-note",children:R}),e.jsx(S,{...t,open:a,expanded:C,onOpenChange:s=>{n(s),t.onOpenChange?.(s)},onExpandedChange:s=>{d(s),t.onExpandedChange?.(s)},onExpandButtonClick:()=>{d(!C),t.onExpandButtonClick?.()},onCancel:()=>{n(!1),t.onCancel()},expandedContent:t.expandedContent&&e.jsxs("div",{className:"pf-story-side-sheet-panel-content",children:[e.jsx("h2",{className:"pf-story-heading-weight",children:"Related specifications"}),e.jsx("p",{className:"pf-story-note",children:"Expanded content belongs to the caller. Width and side are configured on SideSheet."}),e.jsx(b,{variant:"outline",onClick:()=>d(!1),children:"Close expanded panel"}),e.jsx(b,{variant:"outline",onClick:()=>n(!1),children:"Close entire sheet"})]}),children:e.jsxs("form",{id:`form_${t.formName}`,className:"pf-story-side-sheet-panel-body",onSubmit:s=>{s.preventDefault(),k(`Saved ${w}.`),n(!1)},children:[e.jsxs("label",{htmlFor:i,className:"pf-story-side-sheet-field",children:[e.jsx("span",{className:"pf-story-field-label",children:"Formula name"}),e.jsx(N,{id:i,value:w,onChange:s=>E(s.target.value)})]}),e.jsx("p",{className:"pf-story-note",children:"The footer submit button targets this form by its form_ prefix plus formName. A real host supplies its own body and handles cancellation."})]})})]})}const $={title:"Components/Overlays/Side Sheet",component:S,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Application sheet with a fixed base column, optional expandable panel, custom header/footer slots and externally associated form submission. open/onOpenChange belongs to the host. expanded/onExpandedChange can control the second panel; header expansion uses onExpandButtonClick while the footer requests expanded=true. The fixture connects both intentionally. Expanded panels may appear on either side, occupy the full body when hideBase=true, or retain a collapsed navigation strip. Pixel widths remain the existing public API. This overlay is best inspected in a standalone canvas at desktop and narrow widths."}}},args:{open:!1,expanded:!1,title:"Formula details",subtitle:"Draft",description:"Review and edit the formula metadata.",formName:"side-sheet-example",children:null,onCancel:()=>{},submitButtonText:"Save details",cancelButtonText:"Cancel",expandButtonText:"Show specifications",expandedContent:e.jsx("span",{children:"Enabled"}),baseMaxWidthPx:560,expandedMaxWidthPx:1e3,expandPanelWidthPx:440,expandedContentSide:"right",hideFooter:!1,hasDefaultActions:!0,showCloseButton:!0,hideCollapseButton:!0,hideBase:!1,disableExpandButton:!1,hideExpandButton:!1,disableSubmitButton:!1,disableCancelButton:!1},argTypes:{open:{control:"boolean"},expanded:{control:"boolean"},title:{control:"text"},subtitle:{control:"text"},description:{control:"text"},expandedContentSide:{control:"select",options:["left","right"]},baseMaxWidthPx:{control:{type:"number",min:280}},expandedMaxWidthPx:{control:"number"},expandPanelWidthPx:{control:{type:"number",min:200}},expandedContent:{control:!1},children:{control:!1},actionButtons:{control:!1},customHeader:{control:!1},customSubmitButton:{control:!1},collapsedBase:{control:!1},onOpenChange:{action:"open changed"},onExpandedChange:{action:"expanded changed"},onCancel:{action:"cancel"},onExpandButtonClick:{action:"header expansion"}},render:t=>e.jsx("div",{className:"pf-story-panel-content",children:e.jsx(O,{...t})})},c={},p={args:{expandedContent:void 0}},u={args:{expanded:!0,expandedContentSide:"left"}},m={args:{expanded:!0,hideBase:!0}},h={args:{expanded:!0,hideBase:!0,collapsedBase:e.jsx("span",{className:"pf-story-side-sheet-vertical-tab-label",children:"Formula list"})}},x={args:{hideFooter:!0,hideExpandButton:!0,description:"Footerless sheet shell; the host still owns the body interaction."}},f={args:{disableSubmitButton:!0,disableCancelButton:!0,disableExpandButton:!0,disableExpandButtonText:"Select a specification first"}},y={args:{customHeader:e.jsxs("div",{children:[e.jsx("strong",{children:"Formula workspace"}),e.jsx("p",{className:"pf-story-note",children:"Custom header slot"})]}),hasDefaultActions:!1,hideExpandButton:!0,stretchActionButtons:!0,actionButtons:e.jsxs("div",{className:"pf-story-side-sheet-header",children:[e.jsx("span",{className:"pf-story-side-sheet-header-label",children:"Draft changes"}),e.jsx(b,{type:"submit",form:"form_side-sheet-example",children:"Save custom action"})]})}},g={play:async({canvasElement:t})=>{const i=l(t);await o.click(i.getByRole("button",{name:"Open details sheet"}));const a=l(await l(document.body).findByRole("dialog")),n=a.getByRole("textbox",{name:"Formula name"});await o.clear(n),await o.type(n,"Barley drink"),await o.click(a.getByRole("button",{name:"Save details"})),await j(()=>v(i.getByRole("status")).toHaveTextContent("Saved Barley drink."))}},B={play:async({canvasElement:t})=>{const i=l(t);await o.click(i.getByRole("button",{name:"Open details sheet"}));const a=l(await l(document.body).findByRole("dialog"));await o.click(a.getAllByRole("button",{name:"Show specifications"})[0]),await v(a.getByRole("heading",{name:"Related specifications"})).toBeVisible(),await o.click(a.getByRole("button",{name:"Close expanded panel"})),await v(a.queryByRole("heading",{name:"Related specifications"})).toBeNull(),await o.click(a.getAllByRole("button",{name:"Close"})[0])}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    expandedContent: undefined
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: true,
    expandedContentSide: "left"
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: true,
    hideBase: true
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: true,
    hideBase: true,
    collapsedBase: <span className="pf-story-side-sheet-vertical-tab-label">
        Formula list
      </span>
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    hideFooter: true,
    hideExpandButton: true,
    description: "Footerless sheet shell; the host still owns the body interaction."
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    disableSubmitButton: true,
    disableCancelButton: true,
    disableExpandButton: true,
    disableExpandButtonText: "Select a specification first"
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    customHeader: <div>
        <strong>Formula workspace</strong>
        <p className="pf-story-note">Custom header slot</p>
      </div>,
    hasDefaultActions: false,
    hideExpandButton: true,
    stretchActionButtons: true,
    actionButtons: <div className="pf-story-side-sheet-header">
        <span className="pf-story-side-sheet-header-label">Draft changes</span>
        <Button type="submit" form="form_side-sheet-example">
          Save custom action
        </Button>
      </div>
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Open details sheet"
    }));
    const dialog = within(await within(document.body).findByRole("dialog"));
    const input = dialog.getByRole("textbox", {
      name: "Formula name"
    });
    await userEvent.clear(input);
    await userEvent.type(input, "Barley drink");
    await userEvent.click(dialog.getByRole("button", {
      name: "Save details"
    }));
    await waitFor(() => expect(canvas.getByRole("status")).toHaveTextContent("Saved Barley drink."));
  }
}`,...g.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Open details sheet"
    }));
    const dialog = within(await within(document.body).findByRole("dialog"));
    await userEvent.click(dialog.getAllByRole("button", {
      name: "Show specifications"
    })[0]);
    await expect(dialog.getByRole("heading", {
      name: "Related specifications"
    })).toBeVisible();
    await userEvent.click(dialog.getByRole("button", {
      name: "Close expanded panel"
    }));
    await expect(dialog.queryByRole("heading", {
      name: "Related specifications"
    })).toBeNull();
    await userEvent.click(dialog.getAllByRole("button", {
      name: "Close"
    })[0]);
  }
}`,...B.parameters?.docs?.source}}};const K=["Playground","BaseOnly","ExpandedOnLeft","ExpandedOnly","CollapsedNavigationStrip","Footerless","DisabledActions","CustomHeaderAndFooter","SubmitAssociatedForm","ExpandAndCollapse"];export{p as BaseOnly,h as CollapsedNavigationStrip,y as CustomHeaderAndFooter,f as DisabledActions,B as ExpandAndCollapse,u as ExpandedOnLeft,m as ExpandedOnly,x as Footerless,c as Playground,g as SubmitAssociatedForm,K as __namedExportsOrder,$ as default};
