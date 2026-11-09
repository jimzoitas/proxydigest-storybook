import{e as v,j as a,cs as I}from"./iframe-DgvZnKtv.js";/* empty css                      */import{L as E}from"./LazyHoverInfo-ecoUmPWR.js";import{T as F}from"./index-C5n_J3Ov.js";import{I as N}from"./image-C26LJlq7.js";import{F as M}from"./file-text-C-eb-1Yd.js";import{F as C}from"./file-a_p6QzaJ.js";import{F as w}from"./folder-0T_wAgu6.js";import{C as j}from"./copy-BkjpvN59.js";import{T}from"./trash-2-0mPhte3X.js";import"./preload-helper-PPVm8Dsz.js";import"./button-CEcYiQdY.js";import"./index-BWlKOsdO.js";import"./loader-circle-BsZrs7F6.js";import"./info-HwFtBdFw.js";import"./input-DTWVrd6t.js";import"./checkbox-CCvRjg_n.js";import"./minus-0s0hIbe7.js";import"./useAriaLabelledBy-C2v0UWUV.js";import"./collapsible-BPKkR0Kq.js";import"./useCollapsiblePanel-jjkiJ8Ha.js";import"./context-menu-BkEuBydl.js";import"./menu-BIxLiaY6.js";import"./CompositeItem-qKQIJE0X.js";import"./useCompositeItem-Dr13hnqh.js";import"./Separator-BKJ0ZhJM.js";import"./chevron-right-B8SZue5v.js";import"./circle-CwHZP-HG.js";import"./badge-C-Jji8Kx.js";import"./box-BYSN2-7z.js";import"./proxy-CgL5uqac.js";import"./list-chevrons-up-down-BbkN60Rn.js";const A=[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]],L=v("file-code",A);const W=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],P=v("music",W);const _=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],R=v("video",_),{expect:b,userEvent:B,within:H}=__STORYBOOK_MODULE_TEST__,t=[{id:"1",name:"Documents",type:"folder",children:[{id:"1-1",name:"Work",type:"folder",children:[{id:"1-1-1",name:"Report Q1.pdf",type:"pdf"},{id:"1-1-2",name:"Presentation.pptx",type:"file"},{id:"1-1-3",name:"Budget.xlsx",type:"file"}]},{id:"1-2",name:"Personal",type:"folder",children:[{id:"1-2-1",name:"Resume.pdf",type:"pdf"},{id:"1-2-2",name:"Cover Letter.docx",type:"file"}]}]},{id:"2",name:"Images",type:"folder",children:[{id:"2-1",name:"vacation.jpg",type:"image"},{id:"2-2",name:"profile.png",type:"image"},{id:"2-3",name:"screenshot.png",type:"image"}]},{id:"3",name:"Projects",type:"folder",children:[{id:"3-1",name:"Website",type:"folder",children:[{id:"3-1-1",name:"index.html",type:"code"},{id:"3-1-2",name:"styles.css",type:"code"},{id:"3-1-3",name:"app.js",type:"code"}]},{id:"3-2",name:"Mobile App",type:"folder",children:[{id:"3-2-1",name:"App.tsx",type:"code"},{id:"3-2-2",name:"package.json",type:"file"}]}]},{id:"4",name:"readme.md",type:"file"},{id:"5",name:"config.json",type:"file"}],V=[{id:"1",name:"Features",type:"folder",checked:!0,children:[{id:"1-1",name:"Authentication",type:"file",checked:!0},{id:"1-2",name:"Dashboard",type:"file",checked:!1},{id:"1-3",name:"Settings",type:"file",checked:!0}]},{id:"2",name:"Components",type:"folder",checked:!1,children:[{id:"2-1",name:"Button",type:"file",checked:!1},{id:"2-2",name:"Input",type:"file",checked:!0},{id:"2-3",name:"Modal",type:"file",checked:!1}]}],s={folder:a.jsx(w,{className:"pf-story-tree-view-folder-icon"}),file:a.jsx(C,{className:"pf-story-tree-view-file-icon"}),pdf:a.jsx(M,{className:"pf-story-tree-view-pdf-icon"}),image:a.jsx(N,{className:"pf-story-tree-view-document-icon"}),code:a.jsx(L,{className:"pf-story-tree-view-sheet-icon"}),audio:a.jsx(P,{className:"pf-story-tree-view-image-icon"}),video:a.jsx(R,{className:"pf-story-tree-view-slide-icon"})},D=[{id:"edit",label:"Edit",icon:a.jsx(I,{className:"pf-story-icon"}),action:e=>console.log("Edit:",e)},{id:"copy",label:"Copy",icon:a.jsx(j,{className:"pf-story-icon"}),action:e=>console.log("Copy:",e)},{id:"delete",label:"Delete",icon:a.jsx(T,{className:"pf-story-icon"}),action:e=>console.log("Delete:",e)}],Se={title:"Components/Navigation/Tree View",id:"components-treeview",component:F,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{showExpandAll:{control:"boolean",description:"Show expand/collapse all buttons"},showCheckboxes:{control:"boolean",description:"Show checkboxes for items"},selectable:{control:"boolean",description:"Enable click/drag selection"},stickySearch:{control:"boolean",description:"Make search input sticky when scrolling"},searchPlaceholder:{control:"text",description:"Placeholder text for search input"},selectionText:{control:"text",description:"Text to display next to selection count"},collapseAll:{control:"boolean",description:"When true, collapses all expanded nodes"}}},n={args:{data:t}},c={args:{data:t,iconMap:s}},i={args:{data:V,showCheckboxes:!0,checkboxLabels:{check:"Enable",uncheck:"Disable"},onCheckChange:(e,o)=>{console.log(`Item "${e.name}" checked:`,o)}}},l={args:{data:t,showExpandAll:!1}},d={args:{data:t,selectable:!1}},p={args:{data:t,stickySearch:!0,searchPlaceholder:"Find files..."}},m={args:{data:t,menuItems:D,iconMap:s}},h={args:{data:t,searchPlaceholder:"Find items...",selectionText:"items selected",iconMap:s}},u={args:{data:t,iconMap:s,onSelectionChange:e=>{console.log("Selected items:",e)}}},g={args:{data:t,getIcon:(e,o)=>e.children?a.jsx(w,{className:"pf-story-icon",style:{color:`hsl(${o*30}, 70%, 50%)`}}):a.jsx(C,{className:"pf-story-tree-view-muted-icon"})}},$=[{id:"root",name:"Root",type:"folder",children:[{id:"level-1",name:"Level 1",type:"folder",children:[{id:"level-2",name:"Level 2",type:"folder",children:[{id:"level-3",name:"Level 3",type:"folder",children:[{id:"level-4",name:"Level 4",type:"folder",children:[{id:"deep-file",name:"Deep File.txt",type:"file"}]}]}]}]}]}],y={args:{data:$,iconMap:s}},q=[{id:"1",name:"File 1.txt",type:"file"},{id:"2",name:"File 2.pdf",type:"pdf"},{id:"3",name:"File 3.jpg",type:"image"},{id:"4",name:"File 4.js",type:"code"},{id:"5",name:"File 5.mp3",type:"audio"}],f={args:{data:q,iconMap:s,showExpandAll:!1}},k={args:{data:t,iconMap:s,menuItems:D,showCheckboxes:!0,showExpandAll:!0,stickySearch:!0,searchPlaceholder:"Search files and folders...",selectionText:"items selected",checkboxLabels:{check:"Check All",uncheck:"Uncheck All"},onSelectionChange:e=>console.log("Selection changed:",e),onCheckChange:(e,o)=>console.log("Check changed:",e.name,o)}},x={args:{data:[]}},r={args:{data:t},render:()=>a.jsx("div",{className:"pf-tree-hover-scope pf-story-tree-view-hover-scope",children:a.jsx(E,{item:t[0],allItems:t,getItemPath:e=>e.name})}),play:async({canvasElement:e})=>{const o=H(e),S=o.getByRole("button",{name:/Documents.*Details/});S.focus(),await b(await o.findByRole("tooltip")).toHaveTextContent("Documents"),await B.keyboard("{Escape}"),await b(o.queryByRole("tooltip")).not.toBeInTheDocument(),await b(S).toHaveFocus()},parameters:{docs:{description:{story:"Actual LazyHoverInfo accepts item, allItems and a getItemPath resolver. Metadata opens on pointer hover or keyboard focus; Escape dismisses without changing node selection. The trigger's click stops propagation and keeps the host tree selection unchanged. Content is computed locally; this component does not fetch additional item data."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    iconMap
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    data: dataWithCheckboxes,
    showCheckboxes: true,
    checkboxLabels: {
      check: "Enable",
      uncheck: "Disable"
    },
    onCheckChange: (item, checked) => {
      console.log(\`Item "\${item.name}" checked:\`, checked);
    }
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    showExpandAll: false
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    selectable: false
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    stickySearch: true,
    searchPlaceholder: "Find files..."
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    menuItems,
    iconMap
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    searchPlaceholder: "Find items...",
    selectionText: "items selected",
    iconMap
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    iconMap,
    onSelectionChange: selectedItems => {
      console.log("Selected items:", selectedItems);
    }
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    getIcon: (item, depth) => {
      if (item.children) {
        return <Folder className="pf-story-icon" style={{
          color: \`hsl(\${depth * 30}, 70%, 50%)\`
        }} />;
      }
      return <File className="pf-story-tree-view-muted-icon" />;
    }
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    data: deepNestedData,
    iconMap
  }
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    data: flatData,
    iconMap,
    showExpandAll: false
  }
}`,...f.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    iconMap,
    menuItems,
    showCheckboxes: true,
    showExpandAll: true,
    stickySearch: true,
    searchPlaceholder: "Search files and folders...",
    selectionText: "items selected",
    checkboxLabels: {
      check: "Check All",
      uncheck: "Uncheck All"
    },
    onSelectionChange: items => console.log("Selection changed:", items),
    onCheckChange: (item, checked) => console.log("Check changed:", item.name, checked)
  }
}`,...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...x.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData
  },
  render: () => <div className="pf-tree-hover-scope pf-story-tree-view-hover-scope">
      <LazyHoverInfo item={sampleData[0]} allItems={sampleData} getItemPath={item => item.name} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    const trigger = c.getByRole("button", {
      name: /Documents.*Details/
    });
    trigger.focus();
    await expect(await c.findByRole("tooltip")).toHaveTextContent("Documents");
    await userEvent.keyboard("{Escape}");
    await expect(c.queryByRole("tooltip")).not.toBeInTheDocument();
    await expect(trigger).toHaveFocus();
  },
  parameters: {
    docs: {
      description: {
        story: "Actual LazyHoverInfo accepts item, allItems and a getItemPath resolver. Metadata opens on pointer hover or keyboard focus; Escape dismisses without changing node selection. The trigger's click stops propagation and keeps the host tree selection unchanged. Content is computed locally; this component does not fetch additional item data."
      }
    }
  }
}`,...r.parameters?.docs?.source},description:{story:"Retained tree metadata affordance, deliberately independent of node selection.",...r.parameters?.docs?.description}}};const Ce=["Default","WithIconMap","WithCheckboxes","WithoutExpandAll","NonSelectable","WithStickySearch","WithContextMenu","CustomLabels","WithSelectionCallback","WithCustomGetIcon","DeepNested","FlatStructure","AllFeatures","Empty","MetadataHint"];export{k as AllFeatures,h as CustomLabels,y as DeepNested,n as Default,x as Empty,f as FlatStructure,r as MetadataHint,d as NonSelectable,i as WithCheckboxes,m as WithContextMenu,g as WithCustomGetIcon,c as WithIconMap,u as WithSelectionCallback,p as WithStickySearch,l as WithoutExpandAll,Ce as __namedExportsOrder,Se as default};
