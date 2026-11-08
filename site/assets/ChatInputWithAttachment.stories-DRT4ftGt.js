import{j as t,a3 as v,r}from"./iframe-6uZ_OvXJ.js";/* empty css                      */import{C as x}from"./ChatInputWithAttachment-DO7bP4_f.js";import{B as A}from"./button-A8HzViyP.js";import{F as _}from"./file-text-nCD9I8Xm.js";import{I as T}from"./image-quU8knTU.js";import"./preload-helper-PPVm8Dsz.js";import"./file-upload-DtVSzQUD.js";import"./prompt-input-PIGRCKUH.js";import"./textarea-BIg20vtR.js";import"./TiptapPromptInputTextarea-nml69QIH.js";import"./index-Ca5md6L6.js";import"./index-BKYRpA89.js";import"./index.module-Db1hQFPV.js";import"./use-paginated-api-CWOeq5kV.js";import"./request-BbyBNZg4.js";import"./trackPosthogEvent-fthYs4K3.js";import"./jsonApiHandler-DHxZXfLw.js";import"./SearchByConfig-D5iGJPAi.js";import"./apiUrl-o8N8i6mn.js";import"./FormulaMentionText-f7B5dNgY.js";import"./FormulaMentionInlineChip-BCLPo4up.js";import"./dialog-DnvpmbSS.js";import"./overlay-dialog-_C1niahL.js";import"./badge-BfEYvfQV.js";import"./index-BIEDR5QJ.js";import"./accordion-COmVAh8t.js";import"./accordion-DuKcutha.js";import"./roving-focus-0SK5-Aqb.js";import"./useCollapsiblePanel-CEEvXl-2.js";import"./skeleton-Bu9j_NfJ.js";import"./use-api-VM36FeDn.js";import"./package-x-BVy6z9Wy.js";import"./arrow-up-right-o-I_77_q.js";import"./ChatUploadConflictDialog-C__NKvs2.js";import"./loader-circle-DPzNQWfU.js";import"./acceptedFileTypes-BiiB-6uY.js";import"./use-ai-assistant-helpers-D5oKwwJi.js";import"./aiAssistant.selectors-CM8XrDL2.js";import"./paperclip-wH5rwyBQ.js";import"./sliders-horizontal-CmLnKvoy.js";import"./corner-down-right-QfyzFmxT.js";import"./globe-Cx9ESZ5K.js";import"./file-BtDCkXTu.js";import"./file-spreadsheet-BAZ-hhIc.js";import"./presentation-CssARQsw.js";import"./featureFlags-R30pJjMx.js";import"./use-current-module-CXq7_1uF.js";import"./square-CitGoML8.js";import"./arrow-up-DejSgtne.js";function i(n){const[e,a]=r.useState([]),s=n.externalAttachedContent??e;return t.jsx(x,{...n,externalAttachedContent:s,upload:{startUpload:()=>{},cancelUpload:()=>{},getAttachments:()=>s,setAttachments:n.onAttachedContentChange??a,linkPickedDocuments:()=>{},attachExistingDocument:()=>"abandoned",keepBothDocuments:()=>Promise.resolve("no_free_name")}})}const vt={title:"Product examples/AiAssistant/ChatInputWithAttachment",id:"aiassistant-chatinputwithattachment",component:i,parameters:{layout:"centered",store:{preloadedState:{aiAssistant:{assistantScope:v.enum.recipe_formulation_advisor}}}},tags:["autodocs"],decorators:[n=>t.jsx("div",{className:"pf-story-ai-assistant-chat-input-with-attachment-composer-frame",children:t.jsx(n,{})})],argTypes:{placeholder:{control:"text",description:"Placeholder text for the input"},isLoading:{control:"boolean",description:"Loading state of the input"},disabled:{control:"boolean",description:"Whether the input is disabled"}}},c={args:{placeholder:"Type a message or drop files..."}},m={args:{placeholder:"Ask me anything about your formula..."}},u={args:{placeholder:"Processing your request...",isLoading:!0}},l={args:{placeholder:"Chat is disabled",disabled:!0}},p={render:function(){const[e,a]=r.useState("How can I reduce the sugar content in my chocolate bar?");return t.jsx(i,{value:e,onValueChange:a,placeholder:"Type a message..."})}},d={render:function(){const[e,a]=r.useState(""),[s,o]=r.useState([{id:"1",type:"ingredient",attributes:{name:"Dark Chocolate.pdf"}},{id:"2",type:"formula",attributes:{name:"Formula v2.3"}}]);return t.jsx(i,{value:e,onValueChange:a,externalAttachedContent:s,onAttachedContentChange:o,placeholder:"Type a message with attachments..."})}},h={render:function(){const[e,a]=r.useState("Please review these files"),[s,o]=r.useState([{id:"1",type:"ingredient",attributes:{name:"Cocoa_Powder_Specs.pdf"}},{id:"2",type:"ingredient",attributes:{name:"Sugar_Analysis.pdf"}},{id:"3",type:"formula",attributes:{name:"Original_Formula_v1.0"}},{id:"4",type:"ingredient",attributes:{name:"Milk_Powder_Certificate.pdf"}},{id:"5",type:"formula",attributes:{name:"Test_Batch_Results"}}]);return t.jsx(i,{value:e,onValueChange:a,externalAttachedContent:s,onAttachedContentChange:o,placeholder:"Type a message..."})}},g={args:{placeholder:"Type a message...",leftActions:t.jsxs("div",{className:"pf-story-ai-assistant-chat-input-with-attachment-actions",children:[t.jsx(A,{size:"icon",variant:"ghost",className:"pf-story-ai-assistant-chat-input-with-attachment-action-icon",children:t.jsx(_,{className:"pf-story-icon"})}),t.jsx(A,{size:"icon",variant:"ghost",className:"pf-story-ai-assistant-chat-input-with-attachment-action-icon",children:t.jsx(T,{className:"pf-story-icon"})})]})}},f={args:{placeholder:"Type a message...",rightActions:t.jsx(A,{size:"sm",variant:"default",children:"Send & Close"})}},y={render:function(){const[e,a]=r.useState(""),[s,o]=r.useState([]),[S,C]=r.useState(!1),b=()=>{C(!0),setTimeout(()=>{console.log("Submitted:",{value:e,attachments:s}),a(""),o([]),C(!1)},2e3)};return t.jsx(i,{value:e,onValueChange:a,externalAttachedContent:s,onAttachedContentChange:o,onSubmit:b,isLoading:S,placeholder:"Type a message or drop files..."})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Type a message or drop files..."
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Ask me anything about your formula..."
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Processing your request...",
    isLoading: true
  }
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Chat is disabled",
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState("How can I reduce the sugar content in my chocolate bar?");
    return <ChatInputWithAttachment value={value} onValueChange={setValue} placeholder="Type a message..." />;
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState("");
    const [attachments, setAttachments] = useState<Array<{
      id: string;
      type: string;
      attributes: {
        name: string;
      };
    }>>([{
      id: "1",
      type: "ingredient",
      attributes: {
        name: "Dark Chocolate.pdf"
      }
    }, {
      id: "2",
      type: "formula",
      attributes: {
        name: "Formula v2.3"
      }
    }]);
    return <ChatInputWithAttachment value={value} onValueChange={setValue} externalAttachedContent={attachments as any} onAttachedContentChange={setAttachments as any} placeholder="Type a message with attachments..." />;
  }
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState("Please review these files");
    const [attachments, setAttachments] = useState<Array<{
      id: string;
      type: string;
      attributes: {
        name: string;
      };
    }>>([{
      id: "1",
      type: "ingredient",
      attributes: {
        name: "Cocoa_Powder_Specs.pdf"
      }
    }, {
      id: "2",
      type: "ingredient",
      attributes: {
        name: "Sugar_Analysis.pdf"
      }
    }, {
      id: "3",
      type: "formula",
      attributes: {
        name: "Original_Formula_v1.0"
      }
    }, {
      id: "4",
      type: "ingredient",
      attributes: {
        name: "Milk_Powder_Certificate.pdf"
      }
    }, {
      id: "5",
      type: "formula",
      attributes: {
        name: "Test_Batch_Results"
      }
    }]);
    return <ChatInputWithAttachment value={value} onValueChange={setValue} externalAttachedContent={attachments as any} onAttachedContentChange={setAttachments as any} placeholder="Type a message..." />;
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Type a message...",
    leftActions: <div className="pf-story-ai-assistant-chat-input-with-attachment-actions">
        <Button size="icon" variant="ghost" className="pf-story-ai-assistant-chat-input-with-attachment-action-icon">
          <FileText className="pf-story-icon" />
        </Button>
        <Button size="icon" variant="ghost" className="pf-story-ai-assistant-chat-input-with-attachment-action-icon">
          <ImageIcon className="pf-story-icon" />
        </Button>
      </div>
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Type a message...",
    rightActions: <Button size="sm" variant="default">
        Send & Close
      </Button>
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState("");
    const [attachments, setAttachments] = useState<Array<{
      id: string;
      type: string;
      attributes: {
        name: string;
      };
    }>>([]);
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = () => {
      setIsLoading(true);
      setTimeout(() => {
        console.log("Submitted:", {
          value,
          attachments
        });
        setValue("");
        setAttachments([]);
        setIsLoading(false);
      }, 2000);
    };
    return <ChatInputWithAttachment value={value} onValueChange={setValue} externalAttachedContent={attachments as any} onAttachedContentChange={setAttachments as any} onSubmit={handleSubmit} isLoading={isLoading} placeholder="Type a message or drop files..." />;
  }
}`,...y.parameters?.docs?.source}}};const xt=["Default","WithPlaceholder","Loading","Disabled","WithPrefilledText","WithAttachments","WithManyAttachments","WithCustomLeftActions","WithCustomRightActions","Interactive"];export{c as Default,l as Disabled,y as Interactive,u as Loading,d as WithAttachments,g as WithCustomLeftActions,f as WithCustomRightActions,h as WithManyAttachments,m as WithPlaceholder,p as WithPrefilledText,xt as __namedExportsOrder,vt as default};
