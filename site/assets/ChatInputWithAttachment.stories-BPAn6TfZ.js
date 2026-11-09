import{j as t,a3 as v,r}from"./iframe-DgvZnKtv.js";/* empty css                      */import{C as x}from"./ChatInputWithAttachment-Ch4lmyUt.js";import{B as A}from"./button-CEcYiQdY.js";import{F as _}from"./file-text-C-eb-1Yd.js";import{I as T}from"./image-C26LJlq7.js";import"./preload-helper-PPVm8Dsz.js";import"./file-upload-BRNvYMF3.js";import"./prompt-input-qQ5vF9bu.js";import"./textarea-D7qlXksG.js";import"./TiptapPromptInputTextarea-DOpmzvFw.js";import"./index-N07mmiZF.js";import"./index-YDFDGNNj.js";import"./index.module-C-pw7-ZN.js";import"./use-paginated-api-Br3kYEE1.js";import"./request-DN34u20v.js";import"./trackPosthogEvent-DQYu7Eh_.js";import"./jsonApiHandler-0tb7Ffsv.js";import"./SearchByConfig-Dg_Foj-v.js";import"./apiUrl-o8N8i6mn.js";import"./FormulaMentionText-B7IixALA.js";import"./FormulaMentionInlineChip-vd62xu-W.js";import"./dialog-BGED6ss2.js";import"./overlay-dialog-i6vPmHIw.js";import"./badge-C-Jji8Kx.js";import"./index-BWlKOsdO.js";import"./accordion-BRTC14md.js";import"./accordion-mjjl12TU.js";import"./roving-focus-0SK5-Aqb.js";import"./useCollapsiblePanel-jjkiJ8Ha.js";import"./skeleton-DwZsbo-S.js";import"./use-api-C0Z66OjA.js";import"./package-x-Ch_ehrzd.js";import"./arrow-up-right-QD6y7BbT.js";import"./ChatUploadConflictDialog-B92wGk9U.js";import"./loader-circle-BsZrs7F6.js";import"./acceptedFileTypes-BiiB-6uY.js";import"./use-ai-assistant-helpers-Cp-PQUDN.js";import"./aiAssistant.selectors-p1arcQK4.js";import"./paperclip-CrBO5tEC.js";import"./sliders-horizontal-oBt1PAKE.js";import"./corner-down-right-BBl2X9Rv.js";import"./globe-IXEZ4Xwm.js";import"./file-a_p6QzaJ.js";import"./file-spreadsheet-BffC2TlF.js";import"./presentation-DrKZmlSQ.js";import"./featureFlags-R30pJjMx.js";import"./use-current-module-CErwN2Yp.js";import"./square-CPm-TIYG.js";import"./arrow-up-DRg4XE8a.js";function i(n){const[e,a]=r.useState([]),s=n.externalAttachedContent??e;return t.jsx(x,{...n,externalAttachedContent:s,upload:{startUpload:()=>{},cancelUpload:()=>{},getAttachments:()=>s,setAttachments:n.onAttachedContentChange??a,linkPickedDocuments:()=>{},attachExistingDocument:()=>"abandoned",keepBothDocuments:()=>Promise.resolve("no_free_name")}})}const vt={title:"Product examples/AiAssistant/ChatInputWithAttachment",id:"aiassistant-chatinputwithattachment",component:i,parameters:{layout:"centered",store:{preloadedState:{aiAssistant:{assistantScope:v.enum.recipe_formulation_advisor}}}},tags:["autodocs"],decorators:[n=>t.jsx("div",{className:"pf-story-ai-assistant-chat-input-with-attachment-composer-frame",children:t.jsx(n,{})})],argTypes:{placeholder:{control:"text",description:"Placeholder text for the input"},isLoading:{control:"boolean",description:"Loading state of the input"},disabled:{control:"boolean",description:"Whether the input is disabled"}}},c={args:{placeholder:"Type a message or drop files..."}},m={args:{placeholder:"Ask me anything about your formula..."}},u={args:{placeholder:"Processing your request...",isLoading:!0}},l={args:{placeholder:"Chat is disabled",disabled:!0}},p={render:function(){const[e,a]=r.useState("How can I reduce the sugar content in my chocolate bar?");return t.jsx(i,{value:e,onValueChange:a,placeholder:"Type a message..."})}},d={render:function(){const[e,a]=r.useState(""),[s,o]=r.useState([{id:"1",type:"ingredient",attributes:{name:"Dark Chocolate.pdf"}},{id:"2",type:"formula",attributes:{name:"Formula v2.3"}}]);return t.jsx(i,{value:e,onValueChange:a,externalAttachedContent:s,onAttachedContentChange:o,placeholder:"Type a message with attachments..."})}},h={render:function(){const[e,a]=r.useState("Please review these files"),[s,o]=r.useState([{id:"1",type:"ingredient",attributes:{name:"Cocoa_Powder_Specs.pdf"}},{id:"2",type:"ingredient",attributes:{name:"Sugar_Analysis.pdf"}},{id:"3",type:"formula",attributes:{name:"Original_Formula_v1.0"}},{id:"4",type:"ingredient",attributes:{name:"Milk_Powder_Certificate.pdf"}},{id:"5",type:"formula",attributes:{name:"Test_Batch_Results"}}]);return t.jsx(i,{value:e,onValueChange:a,externalAttachedContent:s,onAttachedContentChange:o,placeholder:"Type a message..."})}},g={args:{placeholder:"Type a message...",leftActions:t.jsxs("div",{className:"pf-story-ai-assistant-chat-input-with-attachment-actions",children:[t.jsx(A,{size:"icon",variant:"ghost",className:"pf-story-ai-assistant-chat-input-with-attachment-action-icon",children:t.jsx(_,{className:"pf-story-icon"})}),t.jsx(A,{size:"icon",variant:"ghost",className:"pf-story-ai-assistant-chat-input-with-attachment-action-icon",children:t.jsx(T,{className:"pf-story-icon"})})]})}},f={args:{placeholder:"Type a message...",rightActions:t.jsx(A,{size:"sm",variant:"default",children:"Send & Close"})}},y={render:function(){const[e,a]=r.useState(""),[s,o]=r.useState([]),[S,C]=r.useState(!1),b=()=>{C(!0),setTimeout(()=>{console.log("Submitted:",{value:e,attachments:s}),a(""),o([]),C(!1)},2e3)};return t.jsx(i,{value:e,onValueChange:a,externalAttachedContent:s,onAttachedContentChange:o,onSubmit:b,isLoading:S,placeholder:"Type a message or drop files..."})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
