import{j as e,r as P,a as E,f as R}from"./iframe-nhB53rPD.js";/* empty css                      */import{P as k,B as y,S as j}from"./site-header-B6TxmWG_.js";import{L as B}from"./layers-Br_ymswd.js";import{F as O}from"./file-text-D6e9TeYA.js";import"./preload-helper-PPVm8Dsz.js";import"./button-_tcBhp5_.js";import"./index-8Dbc_Jva.js";import"./loader-circle-MxHlgpxw.js";import"./messages-square-DVqta8zF.js";import"./settings-Dsa5x8gH.js";import"./users-K76JIzYX.js";import"./package-D0DUPed6.js";import"./link-2-Ci0UgXpA.js";import"./building-BapC8Mf6.js";import"./folder-vQIC1Btl.js";import"./factory-Cnmrypbg.js";import"./wrench-jJnHgiLj.js";import"./clipboard-list-PbiY-GQf.js";import"./shield-MjsmpV3H.js";import"./aiAssistant.selectors-xGGE4Gfz.js";import"./dialog-core-DdCOp2-6.js";/* empty css                            */import"./dialog-CyBaw9zK.js";import"./overlay-dialog-Co5KED9w.js";import"./use-current-module-Bd9xlb44.js";import"./search-combobox-server-BD1DcZzg.js";import"./search-combobox-base-CmOZw0Qn.js";import"./index.es-RINfVGjB.js";import"./badge-DF9-aVgV.js";import"./tooltip-core-i2pf0ZTE.js";import"./chevrons-up-down-D9M3rIvK.js";import"./index.module-B262ysEo.js";import"./use-paginated-api-QJatBdKg.js";import"./request-CGJ4zixB.js";import"./trackPosthogEvent-Zud5gl49.js";import"./jsonApiHandler-C4BMoVsw.js";import"./apiUrl-CtX1NveE.js";import"./use-permissions-4TY4C38W.js";import"./use-project-permission-state-B7_q5Mis.js";import"./use-api-C38r92YH.js";import"./chevron-right-CavErG_J.js";import"./search-field-Dneu7mbv.js";import"./input-CAdeD_xm.js";import"./avatar-C4hdJ-kW.js";import"./RoleSelector-D8L4U-RL.js";import"./separator-Dmg9cS_7.js";import"./Separator-RhxJSB-Q.js";import"./roleDisplayNames-BrsNCoZr.js";import"./user-plus-8Fen-5K9.js";import"./user-star-HMgiT1gq.js";import"./roleColors-xN3vY7hc.js";import"./trash-2-DICbQNLz.js";import"./MemberAvatars-BfWJMA9p.js";const{expect:d,userEvent:N,within:b}=__STORYBOOK_MODULE_TEST__;function u({surface:r,showBorder:t,longName:S,pickerState:f}){const[g,x]=P.useState({value:"1",label:"Product development"}),v=E(R);return e.jsxs(e.Fragment,{children:[r==="header"?e.jsx(j,{showBorder:t}):r==="trail"?e.jsx(y,{entries:[{kind:"category",key:"category",category:"workbench"},{kind:"page",key:"projects",label:"Projects",icon:B,link:"/projects"},{kind:"page",key:"recipe",label:S?"An intentionally long recipe name that must remain bounded beside header actions":"Oat recipe",icon:O}]}):e.jsx(k,{state:f,selected:g,onChange:x,placeholder:"Choose project",allowEmpty:!0,transformResponse:w=>w.map(h=>({value:String(h.id),label:h.name}))}),e.jsx("output",{"aria-label":"Notebook state",children:JSON.stringify(v.isFeedbackSideSheetOpen)}),e.jsx("output",{"aria-label":"Chosen project",children:g?.label??"No project"})]})}const Te={title:"Patterns/Page Header",component:u,subcomponents:{SideHeader:j,BreadcrumbTrail:y,ProjectPicker:k},tags:["autodocs"],args:{surface:"header",showBorder:!0,longName:!1,pickerState:"view"},argTypes:{surface:{control:"select",options:["header","trail","project-picker"]},pickerState:{control:"select",options:["loading","no-access","read-only","view","edit"]}},parameters:{route:"/recipes",docs:{description:{component:`Actual application SideHeader, authored breadcrumb trail and shared project-picker state boundary. SideHeader defaults showBorder=true, derives breadcrumb entries from the real route/state and hides entirely on CDI wizard routes. Notebook action dispatches the existing side-sheet toggle; sharing stays conditional on Redux shareConfig.canShare and actual member data.

BreadcrumbTrail consumes discriminated entries (category, page, recipeProject, ideaProject), keeps current page non-link and earlier page links, and retains its narrow-screen rule showing the last page/picker rather than overflowing into actions. ProjectPicker's explicit loading/no-access/read-only/view/edit states preserve availability; only edit requests project choices and calls onChange. Optional projectLink separates navigation from the picker trigger. Its label, response transformer, allowEmpty and selected Option remain host-owned. Recipe/idea host adapters retain their distinct assignment APIs and permissions; this page does not simulate a successful assignment. The controls choose the real component/state rather than substitute markup.`}}},render:r=>e.jsx(u,{...r})},a={},o={args:{surface:"trail"},play:async({canvasElement:r})=>{const t=b(r);await d(t.getByRole("navigation")).toHaveAccessibleName(),await d(t.getByRole("link",{name:"Projects"})).toHaveAttribute("href","/projects"),await d(t.queryByRole("link",{name:"Oat recipe"})).not.toBeInTheDocument()}},s={args:{surface:"trail",longName:!0}},i={args:{surface:"project-picker",pickerState:"read-only"}},n={args:{surface:"project-picker",pickerState:"no-access"}},c={args:{surface:"project-picker",pickerState:"loading"}},p={args:{surface:"project-picker",pickerState:"edit"}},l={play:async({canvasElement:r})=>{const t=b(r);await N.click(t.getByRole("button",{name:"Notebooks"}))}},m={render:r=>e.jsxs("div",{className:"pf-story-stack",children:[e.jsxs("ol",{children:[e.jsx("li",{children:"Category and route-derived breadcrumb retain the current page."}),e.jsx("li",{children:"Optional project picker expresses permissions without changing assignment contracts."}),e.jsx("li",{children:"Sharing and notebook actions stay in the application's action area."})]}),e.jsx(u,{...r})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "trail"
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await expect(c.getByRole("navigation")).toHaveAccessibleName();
    await expect(c.getByRole("link", {
      name: "Projects"
    })).toHaveAttribute("href", "/projects");
    await expect(c.queryByRole("link", {
      name: "Oat recipe"
    })).not.toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "trail",
    longName: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "project-picker",
    pickerState: "read-only"
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "project-picker",
    pickerState: "no-access"
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "project-picker",
    pickerState: "loading"
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "project-picker",
    pickerState: "edit"
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await userEvent.click(c.getByRole("button", {
      name: "Notebooks"
    }));
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div className="pf-story-stack">
      <ol>
        <li>Category and route-derived breadcrumb retain the current page.</li>
        <li>
          Optional project picker expresses permissions without changing
          assignment contracts.
        </li>
        <li>
          Sharing and notebook actions stay in the application's action area.
        </li>
      </ol>
      <PageHeaderExample {...args} />
    </div>
}`,...m.parameters?.docs?.source}}};const Ae=["Playground","Trail","LongTrail","ReadOnlyProject","RestrictedProject","LoadingProject","EditableProject","NotebookAction","Anatomy"];export{m as Anatomy,p as EditableProject,c as LoadingProject,s as LongTrail,l as NotebookAction,a as Playground,i as ReadOnlyProject,n as RestrictedProject,o as Trail,Ae as __namedExportsOrder,Te as default};
