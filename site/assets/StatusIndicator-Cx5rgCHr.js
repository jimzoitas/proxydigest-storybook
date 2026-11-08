import{j as s,g as i}from"./iframe-BXubdNpd.js";const r={default:"pf-status-indicator-default",success:"pf-status-indicator-success",warning:"pf-status-indicator-warning",error:"pf-status-indicator-error",info:"pf-status-indicator-info",muted:"pf-status-indicator-muted",gradient:"pf-status-indicator-gradient"},u={sm:"pf-status-indicator-small",md:"pf-status-indicator-medium"};function l({children:a,variant:e="default",size:t="sm",className:n}){return s.jsx("span",{className:i("pf-status-indicator-root",r[e],u[t],n),children:a})}l.__docgenInfo={description:`Inline status indicator/badge.
Used for "Coming Soon", "In Progress", "Beta", etc.

@example
<StatusIndicator variant="warning">Coming Soon</StatusIndicator>
<StatusIndicator variant="success">Active</StatusIndicator>`,methods:[],displayName:"StatusIndicator",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Status label text"},variant:{required:!1,tsType:{name:"union",raw:`| "default"
| "success"
| "warning"
| "error"
| "info"
| "muted"
| "gradient"`,elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'},{name:"literal",value:'"muted"'},{name:"literal",value:'"gradient"'}]},description:`Visual variant
- default: neutral gray
- success: green
- warning: amber
- error: red
- info: blue
- muted: subtle gray
- gradient: agentic gradient`,defaultValue:{value:'"default"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'}]},description:"Size of the indicator",defaultValue:{value:'"sm"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"}}};export{l as S};
