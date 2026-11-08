import{j as e,z as t}from"./iframe-AqpYXns4.js";import{G as d}from"./GradientButton-BAnbENHo.js";function m({icon:i,title:o,description:s,actionLabel:a,onAction:n,iconColorClass:r="pf-empty-state-default-icon-color",iconBgClass:c="pf-empty-state-default-icon-fill",className:l,children:p}){return e.jsxs("div",{className:t("pf-empty-state-root",l),children:[e.jsx("div",{className:t("pf-empty-state-icon-frame",c),children:e.jsx(i,{className:t("pf-empty-state-icon",r)})}),e.jsx("h3",{className:"pf-empty-state-title",children:o}),s&&e.jsx("p",{className:"pf-empty-state-description",children:s}),p,a&&n&&e.jsx(d,{onClick:n,className:"pf-empty-state-actions",children:a})]})}m.__docgenInfo={description:`Empty state display for lists, tables, and content areas.
Centered layout with icon, title, description, and optional CTA.

@example
<EmptyState
  icon={Inbox}
  title="No messages yet"
  description="Start a conversation to see messages here."
  actionLabel="New Chat"
  onAction={handleNewChat}
/>`,methods:[],displayName:"EmptyState",props:{icon:{required:!0,tsType:{name:"LucideIcon"},description:"Icon to display"},title:{required:!0,tsType:{name:"string"},description:"Main title"},description:{required:!1,tsType:{name:"string"},description:"Description text"},actionLabel:{required:!1,tsType:{name:"string"},description:"Action button label"},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Action button click handler"},iconColorClass:{required:!1,tsType:{name:"string"},description:'Icon color class (e.g., "text-amber-500")',defaultValue:{value:'"pf-empty-state-default-icon-color"',computed:!1}},iconBgClass:{required:!1,tsType:{name:"string"},description:'Icon background class (e.g., "bg-amber-50")',defaultValue:{value:'"pf-empty-state-default-icon-fill"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for container"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children to render below description"}}};export{m as E};
