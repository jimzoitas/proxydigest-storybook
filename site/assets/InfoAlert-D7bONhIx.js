import{j as e,g as l}from"./iframe-DgvZnKtv.js";import{C as c}from"./circle-x-1SpwuOPE.js";import{C as f}from"./circle-check-big-Dbn0EK-V.js";import{T as d}from"./triangle-alert-DoEEEFIM.js";import{I as u}from"./info-HwFtBdFw.js";const p={info:{icon:u,classes:"pf-info-alert-info"},warning:{icon:d,classes:"pf-info-alert-warning"},success:{icon:f,classes:"pf-info-alert-success"},error:{icon:c,classes:"pf-info-alert-error"}};function m({children:a,variant:r="info",icon:o,hideIcon:s=!1,className:i}){const n=p[r],t=o||n.icon;return e.jsxs("div",{className:l("pf-info-alert-root",n.classes,i),role:"alert",children:[!s&&e.jsx(t,{className:"pf-info-alert-icon"}),e.jsx("div",{className:"pf-info-alert-body",children:a})]})}m.__docgenInfo={description:`Alert/info box for contextual messages.
Includes proper dark mode support.

@example
<InfoAlert variant="warning">
  This action cannot be undone.
</InfoAlert>`,methods:[],displayName:"InfoAlert",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Alert content"},variant:{required:!1,tsType:{name:"union",raw:'"info" | "warning" | "success" | "error"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'}]},description:`Visual variant
- info: blue (default)
- warning: amber/yellow
- success: green
- error: red`,defaultValue:{value:'"info"',computed:!1}},icon:{required:!1,tsType:{name:"LucideIcon"},description:"Custom icon (overrides default variant icon)"},hideIcon:{required:!1,tsType:{name:"boolean"},description:"Hide the icon",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"}}};export{m as I};
