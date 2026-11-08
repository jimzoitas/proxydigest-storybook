import{e as $,j as e,e6 as J,e7 as Q,X as H,ad as Z}from"./iframe-BXubdNpd.js";/* empty css                      */import{G as P}from"./GradientButton-KU-jgc31.js";import{B as a}from"./button-DOg3bB7T.js";import{b as ee,a as ne,c as ae,d as V,e as N,f as te,g as re,h as ie,i as se,j as oe,k as ce}from"./button-options-CPRis3fN.js";import{P as o}from"./plus-BS0_boJY.js";import{S as K}from"./sparkles-TuN5CnLu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DKWiT4Fi.js";import"./loader-circle-WJxMtqtu.js";const le=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],X=$("mail",le),{expect:i,fn:de,userEvent:G,within:c}=__STORYBOOK_MODULE_TEST__,{filterArgTypes:ue}=__STORYBOOK_MODULE_PREVIEW_API__;function pe(){return e.jsxs(e.Fragment,{children:[e.jsx(J,{}),e.jsx("h2",{children:"Intent and emphasis"}),e.jsx("p",{children:"Use Action for standard tasks, Destructive for removal, Function for blue utility actions and ProxyAI for assistant actions. Accent Purple and Accent Golden provide the two accent palettes. Each intent offers Primary, Secondary, Tertiary (Outline) and Ghost emphasis."}),e.jsx("p",{children:"The playground starts with Action / Primary and a leading plus. Choose a size, place a decorative icon beside the label or select Icon only. Give an icon-only control a name that describes its action."}),e.jsx("h2",{children:"API and usage"}),e.jsxs("p",{children:[e.jsx("code",{children:"intent"})," and ",e.jsx("code",{children:"emphasis"})," set the appearance. Omitting ",e.jsx("code",{children:"size"})," uses Medium (36px). Use"," ",e.jsx("code",{children:'type="button"'})," for a non-submit action inside a form. Use"," ",e.jsx("code",{children:"asChild"})," for a link that needs button styling. Existing"," ",e.jsx("code",{children:"variant"})," and GradientButton callers retain their compatibility mappings."]}),e.jsx("h2",{children:"Sizes"}),e.jsxs("p",{children:["XSmall (28px), Small (32px), Medium (36px), Regular (40px) and Large (44px) use the same heights for labeled and icon-only buttons. XXSmall (24px) is available only for icon actions. For example,"," ",e.jsx("code",{children:'size="xsmall"'})," gives a 28px text button. Add"," ",e.jsx("code",{children:"iconOnly"})," for a 28px square and supply an accessible name. At the standard font size, labels measure 12px on XSmall and Small, 14px on Medium and Regular, and 16px on Large. Large icons and loading indicators measure 18px. The 24px XXSmall square has 4px corners. Standard corners match the input scale: XSmall 2px, Small 3px, Medium 4px and Regular 6px. ProxyAI retains its explicit pill shape. Text and icons scale with the root font size."]}),e.jsx("h2",{children:"Interaction states"}),e.jsxs("p",{children:["Hover and pressed previews use the same paint as pointer interactions. Secondary darkens on hover. Tertiary (Outline) has a soft resting border that darkens on hover and gains a light tinted fill. Ghost uses the same hover tint. Pressed deepens the tint. Keyboard focus adds its own indicator. ",e.jsx("code",{children:"disabled"})," prevents activation. Set"," ",e.jsx("code",{children:"loading"})," to show a spinner and keep the action name."]}),e.jsx("h2",{children:"API reference"}),e.jsx(Q,{})]})}const Be={title:"Components/Triggers/Button",id:"ui-button",component:a,parameters:{layout:"centered",controls:{include:["Intent","Emphasis","Action name","Size","Content","State","asChild"]},docs:{page:pe,description:{component:"Six intents and four levels of emphasis for Proxy actions, with labeled and icon-only sizes."}}},tags:["autodocs"],args:{onClick:de()},render:({label:n,icon:t="none",iconOnly:r=!1,size:F,previewState:s="default",children:T,disabled:_,loading:M,...l})=>{const D=F==="xxsmall"||t==="only"||r,U=n?.trim()||l["aria-label"]||"Add Recipe",q=_||M||s==="disabled"||s==="loading",W=D?T??e.jsx(o,{"aria-hidden":"true"}):e.jsxs(e.Fragment,{children:[t==="leading"&&e.jsx(o,{"aria-hidden":"true"}),T??U,t==="trailing"&&e.jsx(o,{"aria-hidden":"true"})]});return e.jsx(a,{...l,...oe(F,D),disabled:_||s==="disabled",loading:M||s==="loading","data-preview-state":s==="hover"||s==="pressed"?s:void 0,"aria-label":D?U:l["aria-label"],children:l.asChild?e.jsx("a",{href:"#button-family-example","aria-disabled":q||void 0,tabIndex:q?-1:void 0,onClick:Y=>Y.preventDefault(),children:W}):W})},argTypes:{intent:{name:"Intent",control:{type:"select",labels:se},options:ie},emphasis:{name:"Emphasis",control:{type:"inline-radio",labels:re},options:te},label:{name:"Action name",control:"text"},size:{name:"Size",control:{type:"select",labels:N},options:V,description:"XXSmall is icon-only. XSmall through Large work with either content type."},icon:{name:"Content",control:{type:"select",labels:ae},options:["none","leading","trailing","only"],if:{arg:"size",neq:"xxsmall"}},previewState:{name:"State",control:{type:"select",labels:ne},options:ee,description:"Hover and pressed use the pointer styles. Disabled and loading use the Button props."},children:{control:!1},variant:{control:!1,description:"Compatibility appearance for existing callers."},asChild:{control:"boolean",description:"Render the child element directly, preserving its semantics and handlers."},disabled:{control:"boolean",description:"Whether the button is disabled"}}},d={args:{label:"Add Recipe",intent:"action",emphasis:"primary",size:"regular",icon:"leading",previewState:"default",disabled:!1},play:async({argTypes:n,parameters:t})=>{const r=ue(n,t.controls?.include);await i(Object.keys(r??{}).sort()).toEqual(["asChild","emphasis","icon","intent","label","previewState","size"])}},u={args:{children:"Button",variant:"default"}},p={args:{children:"Delete",variant:"destructive"}},m={args:{children:"Outline",variant:"outline"}},h={args:{children:"Secondary",variant:"secondary"}},g={args:{children:"Ghost",variant:"ghost"}},b={args:{children:"Link",variant:"link"}},y={args:{children:"Small",size:"small"}},v={args:{children:"Large",size:"large"}},x={args:{size:"regular",icon:"only",children:e.jsx(X,{"aria-hidden":"true",className:"pf-story-icon"}),"aria-label":"Send email"}},f={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(X,{className:"pf-story-button-leading-icon"})," Login with Email"]})}},j={args:{children:e.jsxs(e.Fragment,{children:["Continue ",e.jsx(X,{className:"pf-story-button-trailing-icon"})]})}},S={args:{children:"Disabled",disabled:!0}},B={args:{label:"Please wait",loading:!0}},A={render:()=>e.jsxs("div",{className:"pf-story-button-variants",children:[e.jsxs("div",{className:"pf-story-wrapping-actions",children:[e.jsx(a,{variant:"default",children:"Default"}),e.jsx(a,{variant:"destructive",children:"Destructive"}),e.jsx(a,{variant:"outline",children:"Outline"}),e.jsx(a,{variant:"secondary",children:"Secondary"}),e.jsx(a,{variant:"ghost",children:"Ghost"}),e.jsx(a,{variant:"link",children:"Link"}),e.jsx(a,{variant:"ai",children:"AI"}),e.jsx(a,{variant:"gradient-purple",children:"Purple"}),e.jsx(a,{variant:"gradient-amber",children:"Amber"})]}),e.jsxs("div",{className:"pf-story-wrapping-actions",children:[ce.map(n=>e.jsx(a,{size:n,children:N[n]},n)),V.map(n=>e.jsx(a,{size:n,iconOnly:!0,"aria-label":`Add recipe, ${N[n]}`,children:e.jsx(o,{"aria-hidden":"true"})},n))]})]})},w={name:"XXSmall icon action",args:{variant:"ghost",size:"xxsmall",iconOnly:!0,icon:"only",label:"Remove recipe",children:e.jsx(H,{"aria-hidden":"true"})},play:async({canvasElement:n,args:t})=>{const r=c(n).getByRole("button",{name:"Remove recipe"});r.focus(),await i(r).toHaveFocus(),await G.keyboard("{Enter}"),await i(t.onClick).toHaveBeenCalled()}},k={name:"XSmall icon action",args:{variant:"ghost",size:"xsmall",icon:"only",label:"Unlink document",children:e.jsx(H,{"aria-hidden":"true"}),type:"button"},play:async({canvasElement:n,args:t})=>{const r=c(n).getByRole("button",{name:"Unlink document"});r.focus(),await i(r).toHaveFocus(),await G.keyboard("{Enter}"),await i(t.onClick).toHaveBeenCalled()}},C={args:{variant:"outline",size:"large",icon:"only",label:"Close panel",children:e.jsx(H,{"aria-hidden":"true"}),type:"button"},play:async({canvasElement:n,args:t})=>{const r=c(n).getByRole("button",{name:"Close panel"});r.focus(),await i(r).toHaveFocus(),await G.keyboard(" "),await i(t.onClick).toHaveBeenCalled()}},z={args:{label:"Create with AI",variant:"ai",icon:"leading"},play:async({canvasElement:n,args:t})=>{const r=c(n).getByRole("button",{name:"Create with AI"});r.focus(),await i(r).toHaveFocus(),await G.keyboard("{Enter}"),await i(t.onClick).toHaveBeenCalledOnce()}},I={name:"AI menu action",args:{label:"Proxy AI",variant:"ai",icon:"trailing"}},E={render:()=>e.jsxs("div",{className:"pf-story-button-variant-grid",children:[e.jsx(P,{gradient:"agentic",children:"Agentic adapter"}),e.jsx(P,{gradient:"purple",children:"Purple adapter"}),e.jsx(P,{gradient:"amber",children:"Amber adapter"}),e.jsx(a,{variant:"ai",children:"Formula AI action"})]})},L={render:()=>e.jsxs("div",{className:"pf-story-button-size-grid",children:[e.jsxs(a,{variant:"ai",children:[e.jsx(K,{"aria-hidden":"true"}),"Generate"]}),e.jsx(a,{variant:"ai",disabled:!0,children:"Unavailable"}),e.jsx(a,{intent:"proxy-ai",emphasis:"primary",loading:!0,children:"Generating"}),e.jsx(a,{variant:"ai",disabled:!0,children:"Formula AI unavailable"}),e.jsx(a,{variant:"ai",size:"regular",iconOnly:!0,"aria-label":"Generate suggestion",children:e.jsx(K,{"aria-hidden":"true"})})]})},O={render:()=>e.jsxs("figure",{className:"pf-story-spacious-stack",children:[e.jsxs(a,{intent:"action",emphasis:"primary","data-button-part":"root",children:[e.jsx("span",{"data-button-part":"leading-icon",children:e.jsx(o,{"aria-hidden":"true"})}),e.jsx("span",{"data-button-part":"label",children:"Add Recipe"}),e.jsx("span",{"data-button-part":"trailing-icon",children:e.jsx(Z,{"aria-hidden":"true"})})]}),e.jsx("figcaption",{className:"pf-story-button-guidance",children:e.jsxs("ol",{className:"pf-story-button-guidance-list",children:[e.jsxs("li",{children:[e.jsx("code",{children:'[data-button-part="root"]'}),": native action and focus target."]}),e.jsxs("li",{children:[e.jsx("code",{children:'[data-button-part="leading-icon"]'}),": optional decorative intent icon."]}),e.jsxs("li",{children:[e.jsx("code",{children:'[data-button-part="label"]'}),": visible accessible action name."]}),e.jsxs("li",{children:[e.jsx("code",{children:'[data-button-part="trailing-icon"]'}),": optional cue; the host supplies an actual menu or expansion interaction."]})]})})]})},R={args:{label:"Open recipes",variant:"ai",asChild:!0,icon:"leading"},play:async({canvasElement:n})=>{const t=c(n);await i(t.getByRole("link",{name:"Open recipes"})).toHaveAttribute("href","#button-family-example"),await i(t.queryByRole("button")).not.toBeInTheDocument()}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Add Recipe",
    intent: "action",
    emphasis: "primary",
    size: "regular",
    icon: "leading",
    previewState: "default",
    disabled: false
  },
  play: async ({
    argTypes,
    parameters
  }) => {
    // Storybook filters on display names, then its docs controls bind the surviving argument keys.
    const controls = filterArgTypes(argTypes, parameters.controls?.include);
    await expect(Object.keys(controls ?? {}).sort()).toEqual(["asChild", "emphasis", "icon", "intent", "label", "previewState", "size"]);
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "default"
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Delete",
    variant: "destructive"
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Outline",
    variant: "outline"
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Secondary",
    variant: "secondary"
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Ghost",
    variant: "ghost"
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Link",
    variant: "link"
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Small",
    size: "small"
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Large",
    size: "large"
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    size: "regular",
    icon: "only",
    children: <Mail aria-hidden="true" className="pf-story-icon" />,
    "aria-label": "Send email"
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Mail className="pf-story-button-leading-icon" /> Login with Email
      </>
  }
}`,...f.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        Continue <Mail className="pf-story-button-trailing-icon" />
      </>
  }
}`,...j.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Disabled",
    disabled: true
  }
}`,...S.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Please wait",
    loading: true
  }
}`,...B.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div className="pf-story-button-variants">
      <div className="pf-story-wrapping-actions">
        <Button variant="default">Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="ai">AI</Button>
        <Button variant="gradient-purple">Purple</Button>
        <Button variant="gradient-amber">Amber</Button>
      </div>
      <div className="pf-story-wrapping-actions">
        {labeledButtonSizes.map(size => <Button key={size} size={size}>
            {buttonSizeLabels[size]}
          </Button>)}
        {buttonSizes.map(size => <Button key={size} size={size} iconOnly aria-label={\`Add recipe, \${buttonSizeLabels[size]}\`}>
            <Plus aria-hidden="true" />
          </Button>)}
      </div>
    </div>
}`,...A.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "XXSmall icon action",
  args: {
    variant: "ghost",
    size: "xxsmall",
    iconOnly: true,
    icon: "only",
    label: "Remove recipe",
    children: <X aria-hidden="true" />
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const button = within(canvasElement).getByRole("button", {
      name: "Remove recipe"
    });
    button.focus();
    await expect(button).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    await expect(args.onClick).toHaveBeenCalled();
  }
}`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "XSmall icon action",
  args: {
    variant: "ghost",
    size: "xsmall",
    icon: "only",
    label: "Unlink document",
    children: <X aria-hidden="true" />,
    type: "button"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const button = within(canvasElement).getByRole("button", {
      name: "Unlink document"
    });
    button.focus();
    await expect(button).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    await expect(args.onClick).toHaveBeenCalled();
  }
}`,...k.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    size: "large",
    icon: "only",
    label: "Close panel",
    children: <X aria-hidden="true" />,
    type: "button"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const button = within(canvasElement).getByRole("button", {
      name: "Close panel"
    });
    button.focus();
    await expect(button).toHaveFocus();
    await userEvent.keyboard(" ");
    await expect(args.onClick).toHaveBeenCalled();
  }
}`,...C.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Create with AI",
    variant: "ai",
    icon: "leading"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const button = within(canvasElement).getByRole("button", {
      name: "Create with AI"
    });
    button.focus();
    await expect(button).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    await expect(args.onClick).toHaveBeenCalledOnce();
  }
}`,...z.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  // Keep the existing deep link while documenting the single canonical AI style.
  name: "AI menu action",
  args: {
    label: "Proxy AI",
    variant: "ai",
    icon: "trailing"
  }
}`,...I.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div className="pf-story-button-variant-grid">
      <GradientButton gradient="agentic">Agentic adapter</GradientButton>
      <GradientButton gradient="purple">Purple adapter</GradientButton>
      <GradientButton gradient="amber">Amber adapter</GradientButton>
      <Button variant="ai">Formula AI action</Button>
    </div>
}`,...E.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div className="pf-story-button-size-grid">
      <Button variant="ai">
        <Sparkles aria-hidden="true" />
        Generate
      </Button>
      <Button variant="ai" disabled>
        Unavailable
      </Button>
      <Button intent="proxy-ai" emphasis="primary" loading>
        Generating
      </Button>
      <Button variant="ai" disabled>
        Formula AI unavailable
      </Button>
      <Button variant="ai" size="regular" iconOnly aria-label="Generate suggestion">
        <Sparkles aria-hidden="true" />
      </Button>
    </div>
}`,...L.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <figure className="pf-story-spacious-stack">
      <Button intent="action" emphasis="primary" data-button-part="root">
        <span data-button-part="leading-icon">
          <Plus aria-hidden="true" />
        </span>
        <span data-button-part="label">Add Recipe</span>
        <span data-button-part="trailing-icon">
          <ChevronDown aria-hidden="true" />
        </span>
      </Button>
      <figcaption className="pf-story-button-guidance">
        <ol className="pf-story-button-guidance-list">
          <li>
            <code>[data-button-part="root"]</code>: native action and focus
            target.
          </li>
          <li>
            <code>[data-button-part="leading-icon"]</code>: optional decorative
            intent icon.
          </li>
          <li>
            <code>[data-button-part="label"]</code>: visible accessible action
            name.
          </li>
          <li>
            <code>[data-button-part="trailing-icon"]</code>: optional cue; the
            host supplies an actual menu or expansion interaction.
          </li>
        </ol>
      </figcaption>
    </figure>
}`,...O.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Open recipes",
    variant: "ai",
    asChild: true,
    icon: "leading"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("link", {
      name: "Open recipes"
    })).toHaveAttribute("href", "#button-family-example");
    await expect(canvas.queryByRole("button")).not.toBeInTheDocument();
  }
}`,...R.parameters?.docs?.source}}};const Ae=["Playground","Default","Destructive","Outline","Secondary","Ghost","Link","Small","Large","Icon","WithIconLeft","WithIconRight","Disabled","Loading","AllVariants","CompactIconAction","MediumIconAction","LargeIconAction","AiAction","AiMint","GradientCompatibility","AiStates","Anatomy","AsLink"];export{z as AiAction,I as AiMint,L as AiStates,A as AllVariants,O as Anatomy,R as AsLink,w as CompactIconAction,u as Default,p as Destructive,S as Disabled,g as Ghost,E as GradientCompatibility,x as Icon,v as Large,C as LargeIconAction,b as Link,B as Loading,k as MediumIconAction,m as Outline,d as Playground,h as Secondary,y as Small,f as WithIconLeft,j as WithIconRight,Ae as __namedExportsOrder,Be as default};
