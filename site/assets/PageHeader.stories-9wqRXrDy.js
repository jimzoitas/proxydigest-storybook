import{j as e,r as P,a as E,f as R}from"./iframe-BXubdNpd.js";/* empty css                      */import{P as k,B as y,S as j}from"./site-header-sjLrhbNQ.js";import{L as B}from"./layers-CNa7rqq9.js";import{F as O}from"./file-text-P-Na7IsX.js";import"./preload-helper-PPVm8Dsz.js";import"./button-DOg3bB7T.js";import"./index-DKWiT4Fi.js";import"./loader-circle-WJxMtqtu.js";import"./shield-Ck_ILybz.js";import"./settings-WXazdeBH.js";import"./users-88prXwut.js";import"./package-CC18m6t3.js";import"./link-2-EuMxLnFC.js";import"./building-5MOaQPnU.js";import"./folder-75hp4uO8.js";import"./factory-DXqe8JVT.js";import"./wrench-BrlfzOvT.js";import"./clipboard-list-BuZquiGr.js";import"./share-2-cRYM-UIt.js";import"./aiAssistant.selectors-DeXBL1Y1.js";import"./dialog-core-c-ZvTlkW.js";/* empty css                            */import"./dialog-Gbr7wu8m.js";import"./overlay-dialog-CQZe9RQv.js";import"./use-current-module-DLuqhIl3.js";import"./search-combobox-server-Dj6Mk73t.js";import"./search-combobox-base-DpzvEg6P.js";import"./index.es-Cv4oNgR4.js";import"./badge-C4iUsAGF.js";import"./tooltip-core-CGhIyYC9.js";import"./chevrons-up-down-CHE9Wbz7.js";import"./index.module-B6UitgKw.js";import"./use-paginated-api-D8Vkcu94.js";import"./request-TLnfbZnK.js";import"./trackPosthogEvent-CBk16WCm.js";import"./jsonApiHandler-4nyzgRht.js";import"./apiUrl-o8N8i6mn.js";import"./use-permissions-CoEJ2R_X.js";import"./use-project-permission-state-DNU3q0fK.js";import"./use-api-xoGr-U7J.js";import"./chevron-right-Bt7v18gP.js";import"./search-field-DLF5WVFc.js";import"./input-BWeqiJDe.js";import"./avatar-ZNaHiu8f.js";import"./RoleSelector-BoChuzim.js";import"./separator-BKKMk4Xo.js";import"./Separator-DI4aBzER.js";import"./roleDisplayNames-Dspcvqxy.js";import"./user-plus-J0ht9P5W.js";import"./user-star-PqjnOx4C.js";import"./roleColors-C3j0TQHu.js";import"./trash-2-BiFYt1e5.js";import"./MemberAvatars-BhduQ4v_.js";const{expect:d,userEvent:N,within:b}=__STORYBOOK_MODULE_TEST__;function u({surface:r,showBorder:t,longName:S,pickerState:f}){const[g,x]=P.useState({value:"1",label:"Product development"}),v=E(R);return e.jsxs(e.Fragment,{children:[r==="header"?e.jsx(j,{showBorder:t}):r==="trail"?e.jsx(y,{entries:[{kind:"category",key:"category",category:"workbench"},{kind:"page",key:"projects",label:"Projects",icon:B,link:"/projects"},{kind:"page",key:"recipe",label:S?"An intentionally long recipe name that must remain bounded beside header actions":"Oat recipe",icon:O}]}):e.jsx(k,{state:f,selected:g,onChange:x,placeholder:"Choose project",allowEmpty:!0,transformResponse:w=>w.map(h=>({value:String(h.id),label:h.name}))}),e.jsx("output",{"aria-label":"Notebook state",children:JSON.stringify(v.isFeedbackSideSheetOpen)}),e.jsx("output",{"aria-label":"Chosen project",children:g?.label??"No project"})]})}const Te={title:"Patterns/Page Header",component:u,subcomponents:{SideHeader:j,BreadcrumbTrail:y,ProjectPicker:k},tags:["autodocs"],args:{surface:"header",showBorder:!0,longName:!1,pickerState:"view"},argTypes:{surface:{control:"select",options:["header","trail","project-picker"]},pickerState:{control:"select",options:["loading","no-access","read-only","view","edit"]}},parameters:{route:"/recipes",docs:{description:{component:`Actual application SideHeader, authored breadcrumb trail and shared project-picker state boundary. SideHeader defaults showBorder=true, derives breadcrumb entries from the real route/state and hides entirely on CDI wizard routes. Notebook action dispatches the existing side-sheet toggle; sharing stays conditional on Redux shareConfig.canShare and actual member data.

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
