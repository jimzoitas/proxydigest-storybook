import{e as c,u as g,a as p,cC as d,j as m,cD as n,cE as u}from"./iframe-AqpYXns4.js";import{D as y}from"./dialog-core-CPvK88Gp.js";const f=()=>{const{t:e}=c("common"),o=g(),{showRetryDialog:a,retryDialogMessage:t,retryDialogTitle:r}=p(d),i=()=>o(u()),s=()=>o(n());return m.jsx(y,{title:r||e("dialogs.confirmOperation.title"),description:t||e("dialogs.confirmOperation.retryMessage"),confirmLabel:e("buttons.ok"),cancelLabel:e("buttons.cancel"),open:a,onConfirm:i,onCancel:s,onOpenChange:l=>{l||o(n())}})};f.__docgenInfo={description:`A global dialog component used for retrying failed operations or operations that require user confirmation
It uses DialogCore for consistent UI and Redux state to control open/close and confirm/cancel logic.

This dialog is triggered when a retryable error occurs in a Redux-Saga
The saga dispatches \`showRetryDialog()\` and waits for the user's response via \`confirmRetry()\` or \`cancelRetry()\`.

Controlled via:
- state.ui.showRetryDialog (boolean)
- state.ui.retryDialogMessage (string, optional)
- state.ui.retryDialogTitle (string, optional)

Actions:
- confirmRetry(), cancelRetry() actions (handled in saga)`,methods:[],displayName:"RetryDialog"};export{f as R};
