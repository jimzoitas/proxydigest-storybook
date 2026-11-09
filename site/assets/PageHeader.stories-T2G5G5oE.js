import{j as e,r as P,a as E,f as R}from"./iframe-DgvZnKtv.js";/* empty css                      */import{P as k,B as y,S as j}from"./site-header-dm-egDKG.js";import{L as B}from"./layers-BsH7T5it.js";import{F as O}from"./file-text-C-eb-1Yd.js";import"./preload-helper-PPVm8Dsz.js";import"./button-CEcYiQdY.js";import"./index-BWlKOsdO.js";import"./loader-circle-BsZrs7F6.js";import"./shield-DGi51bnn.js";import"./settings-D5EomNIZ.js";import"./users-DzB7qB4B.js";import"./package-h90OOcBG.js";import"./link-2-CmRCtQ0C.js";import"./building-DGBJ2YKV.js";import"./folder-0T_wAgu6.js";import"./factory-BnfaonyC.js";import"./wrench-g6l4yt3b.js";import"./clipboard-list-DYh5gZBM.js";import"./share-2-DEfNQye1.js";import"./aiAssistant.selectors-p1arcQK4.js";import"./composed-typography-BeKxRqyR.js";import"./dialog-core-jxwxwCsU.js";/* empty css                            */import"./dialog-BGED6ss2.js";import"./overlay-dialog-i6vPmHIw.js";import"./use-current-module-CErwN2Yp.js";import"./typography-adapters-Dxsjgzk9.js";import"./search-combobox-server-o9goOcxH.js";import"./search-combobox-base-CHZkCXAm.js";import"./index.es-BGW_4PyL.js";import"./badge-C-Jji8Kx.js";import"./tooltip-core-CEBHIfw_.js";import"./chevrons-up-down-BQnVMOhW.js";import"./index.module-C-pw7-ZN.js";import"./use-paginated-api-Br3kYEE1.js";import"./request-DN34u20v.js";import"./trackPosthogEvent-DQYu7Eh_.js";import"./jsonApiHandler-0tb7Ffsv.js";import"./apiUrl-o8N8i6mn.js";import"./use-permissions-RIBDcgJE.js";import"./use-project-permission-state-lYZnVdHV.js";import"./use-api-C0Z66OjA.js";import"./chevron-right-B8SZue5v.js";import"./search-field-CzWqD7iz.js";import"./input-DTWVrd6t.js";import"./avatar-BapWT1f9.js";import"./RoleSelector-DMZkzadp.js";import"./separator-DZKac5zi.js";import"./Separator-BKJ0ZhJM.js";import"./roleDisplayNames-DRBlmhM2.js";import"./user-plus-DuOeJ2tP.js";import"./user-star-p3_xbT-o.js";import"./roleColors-C3j0TQHu.js";import"./trash-2-0mPhte3X.js";import"./MemberAvatars-D96gCJJu.js";const{expect:d,userEvent:N,within:b}=__STORYBOOK_MODULE_TEST__;function u({surface:r,showBorder:t,longName:S,pickerState:f}){const[g,x]=P.useState({value:"1",label:"Product development"}),v=E(R);return e.jsxs(e.Fragment,{children:[r==="header"?e.jsx(j,{showBorder:t}):r==="trail"?e.jsx(y,{entries:[{kind:"category",key:"category",category:"workbench"},{kind:"page",key:"projects",label:"Projects",icon:B,link:"/projects"},{kind:"page",key:"recipe",label:S?"An intentionally long recipe name that must remain bounded beside header actions":"Oat recipe",icon:O}]}):e.jsx(k,{state:f,selected:g,onChange:x,placeholder:"Choose project",allowEmpty:!0,transformResponse:w=>w.map(h=>({value:String(h.id),label:h.name}))}),e.jsx("output",{"aria-label":"Notebook state",children:JSON.stringify(v.isFeedbackSideSheetOpen)}),e.jsx("output",{"aria-label":"Chosen project",children:g?.label??"No project"})]})}const He={title:"Patterns/Page Header",component:u,subcomponents:{SideHeader:j,BreadcrumbTrail:y,ProjectPicker:k},tags:["autodocs"],args:{surface:"header",showBorder:!0,longName:!1,pickerState:"view"},argTypes:{surface:{control:"select",options:["header","trail","project-picker"]},pickerState:{control:"select",options:["loading","no-access","read-only","view","edit"]}},parameters:{route:"/recipes",docs:{description:{component:`Actual application SideHeader, authored breadcrumb trail and shared project-picker state boundary. SideHeader defaults showBorder=true, derives breadcrumb entries from the real route/state and hides entirely on CDI wizard routes. Notebook action dispatches the existing side-sheet toggle; sharing stays conditional on Redux shareConfig.canShare and actual member data.

BreadcrumbTrail consumes discriminated entries (category, page, recipeProject, ideaProject), keeps current page non-link and earlier page links, and retains its narrow-screen rule showing the last page/picker rather than overflowing into actions. ProjectPicker's explicit loading/no-access/read-only/view/edit states preserve availability; only edit requests project choices and calls onChange. Optional projectLink separates navigation from the picker trigger. Its label, response transformer, allowEmpty and selected Option remain host-owned. Recipe/idea host adapters retain their distinct assignment APIs and permissions; this page does not simulate a successful assignment. The controls choose the real component/state rather than substitute markup.`}}},render:r=>e.jsx(u,{...r})},a={},o={args:{surface:"trail"},play:async({canvasElement:r})=>{const t=b(r);await d(t.getByRole("navigation")).toHaveAccessibleName(),await d(t.getByRole("link",{name:"Projects"})).toHaveAttribute("href","/projects"),await d(t.queryByRole("link",{name:"Oat recipe"})).not.toBeInTheDocument()}},s={args:{surface:"trail",longName:!0}},i={args:{surface:"project-picker",pickerState:"read-only"}},n={args:{surface:"project-picker",pickerState:"no-access"}},c={args:{surface:"project-picker",pickerState:"loading"}},p={args:{surface:"project-picker",pickerState:"edit"}},m={play:async({canvasElement:r})=>{const t=b(r);await N.click(t.getByRole("button",{name:"Notebooks"}))}},l={render:r=>e.jsxs("div",{className:"pf-story-stack",children:[e.jsxs("ol",{children:[e.jsx("li",{children:"Category and route-derived breadcrumb retain the current page."}),e.jsx("li",{children:"Optional project picker expresses permissions without changing assignment contracts."}),e.jsx("li",{children:"Sharing and notebook actions stay in the application's action area."})]}),e.jsx(u,{...r})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await userEvent.click(c.getByRole("button", {
      name: "Notebooks"
    }));
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const Ce=["Playground","Trail","LongTrail","ReadOnlyProject","RestrictedProject","LoadingProject","EditableProject","NotebookAction","Anatomy"];export{l as Anatomy,p as EditableProject,c as LoadingProject,s as LongTrail,m as NotebookAction,a as Playground,i as ReadOnlyProject,n as RestrictedProject,o as Trail,Ce as __namedExportsOrder,He as default};
