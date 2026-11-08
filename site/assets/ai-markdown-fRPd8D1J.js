import{e as _,r as u,j as s,bC as K,bD as V,bE as Y,cB as J,u as Q,a as M,f as Z,ai as ee,bB as ne,T as te,ey as se,ez as oe,z as A,eA as ae,eB as re}from"./iframe-AqpYXns4.js";/* empty css                 */import{k as j}from"./marked.esm-B5D8JARp.js";import{c as ie,h as H,a as S,r as le}from"./table-cell-sizing-C0yGB5Oh.js";import{S as ce}from"./source-basic-GTpBQAiX.js";import{C as pe,a as de}from"./code-block-B6Cq0LfI.js";import{C as me}from"./chevron-right-B3hyZT-D.js";import{P as ue,T as m,a as he,b as fe,r as Ce,c as ge}from"./index-6EzalymI.js";import{a as ke,C as we,b as be}from"./collapsible-DZyMQ3Bu.js";import{M as xe,r as Ne}from"./index-C9pEX-zO.js";import{s as Te}from"./aiAssistant.selectors-DhBhezDt.js";function P({children:t}){const{t:n}=_("assistant"),[e,o]=u.useState(null),[l,a]=u.useState(!1);u.useEffect(()=>{e&&a(e.scrollHeight>e.clientHeight)},[t,e]),u.useEffect(()=>{if(!e||typeof ResizeObserver>"u")return;const p=new ResizeObserver(()=>a(e.scrollHeight>e.clientHeight));return p.observe(e),()=>p.disconnect()},[e]);const r=s.jsx("span",{ref:o,className:"pf-clamped-cell-text",children:t});return l?s.jsxs(K,{children:[s.jsx(V,{asChild:!0,children:s.jsxs("button",{type:"button",title:n("markdownTable.viewDetails"),className:"pf-clamped-cell-trigger",children:[r,s.jsx("span",{className:"pf-clamped-cell-label",children:n("markdownTable.viewDetails")}),s.jsx(me,{"aria-hidden":!0,className:"pf-clamped-cell-icon"})]})}),s.jsx(Y,{align:"start",className:"pf-clamped-cell-popup",children:t})]}):r}P.__docgenInfo={description:`Markdown table cell content clamped to one line, so long notes don't turn
every row into a wall of text. When the text is actually cut off, the note
itself becomes the trigger that opens the full content in a popover.`,methods:[],displayName:"ClampedTableCell"};function ye(){return(t,n)=>{const e=String(n.value);if(!/<table\b/i.test(e))return;const o=ue.getFragmentParser(),l=i=>o.tokenizer.write(i,!1),a=i=>o.openElements.hasInTableScope(i),r=()=>a(m.TD)||a(m.TH)||a(m.CAPTION),p=i=>a(m.TABLE)&&(r()||ve(i)),c=i=>{i.children.forEach((d,f)=>{d.type==="html"?l(d.value):d.type==="code"&&je(d,e)&&p(d.value)?(i.children[f]={type:"html",value:d.value},l(d.value)):"children"in d&&c(d)})};c(t)}}function je(t,n){const e=t.position?.start.offset;return e!==void 0&&!/^(?:`{3,}|~{3,})/.test(n.slice(e))}const Se=new Set([m.TABLE,m.CAPTION,m.COLGROUP,m.COL,m.TBODY,m.THEAD,m.TFOOT,m.TR,m.TD,m.TH]);function ve(t){let n=!1;const e=a=>{Se.has(a.tagID)&&(n=!0)},o=()=>{},l=new he({},{onStartTag:e,onEndTag:e,onComment:o,onDoctype:o,onEof:o,onCharacter:o,onNullCharacter:o,onWhitespaceCharacter:o});return l.write(t,!1),n||l.state>fe.PLAINTEXT&&/<\/?[a-z][^<]*$/i.test(t)}function E({sections:t,renderBlock:n,components:e,defaultOpen:o}){const[l,a]=u.useState({}),r=u.useMemo(()=>({...e,h2:({children:i})=>s.jsx("span",{className:"pf-markdown-reply-section__title",children:i})}),[e]),p=(i,d)=>l[i]??d===o,c=i=>d=>a(f=>({...f,[i]:d}));return s.jsx(s.Fragment,{children:t.map(({heading:i,body:d},f)=>s.jsxs(ke,{open:p(i,f),onOpenChange:c(i),children:[s.jsx("h2",{className:"pf-markdown-reply-section__heading",children:s.jsxs(we,{className:"pf-markdown-reply-section__trigger",children:[s.jsx(J,{"aria-hidden":!0,className:"pf-markdown-reply-section__chevron"}),n(i,r)]})}),s.jsx(be,{className:"pf-markdown-reply-section__body",children:d.map(g=>n(g))})]},i))})}E.__docgenInfo={description:"A reply's `##` sections as collapsible blocks; closed, only the heading shows. Only the\nsection at `defaultOpen` is open by default, while streaming too. A click overrides that\ndefault for the life of the component.",methods:[],displayName:"ReplySections",props:{sections:{required:!0,tsType:{name:"Array",raw:'ReplyGroups["sections"]'},description:""},renderBlock:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number, components?: Partial<Components>) => ReactNode",signature:{arguments:[{type:{name:"number"},name:"index"},{type:{name:"Partial",elements:[{name:"Components"}],raw:"Partial<Components>"},name:"components"}],return:{name:"ReactNode"}}},description:""},components:{required:!0,tsType:{name:"Partial",elements:[{name:"Components"}],raw:"Partial<Components>"},description:""},defaultOpen:{required:!0,tsType:{name:"number"},description:"Position of the section that starts open; -1 for none."}}};function Me(t){const n=j.lexer(t);if(n.some(a=>a.type!=="code"&&/^ {0,3}\[\^[^\]\s]+\]:/m.test(a.raw)))return[t];const o=n.map(a=>a.raw);if(!/<table\b/i.test(t))return o;const l=n.findIndex(a=>a.type==="html"||/<table\b/i.test(a.raw));return[...o.slice(0,l),o.slice(l).join("")]}function Ae(t){const n=[],e=[];let o=!1;return t.forEach((l,a)=>{/^##[ \t]+\S[^\n]*\n*$/.test(l)?e.push({heading:a,body:[]}):(o||=l.includes("##")&&j.lexer(l).some(r=>r.type==="heading"&&r.depth===2&&r.text.trim()!==""),e.length?e[e.length-1].body.push(a):n.push(a))}),e.length&&!o?{preface:n,sections:e}:null}function Ie(t){return t.includes("]:")?j.lexer(t).filter(n=>n.type==="def"&&!n.tag.startsWith("^")):[]}function Le(t,n){const e=I(t);return n.filter(o=>e.includes(I(`[${o.tag}]`))).map(o=>o.raw.trim()).join(`
`)}function I(t){return t.toLowerCase().replace(/\s+/g," ").replace(/\[ /g,"[").replace(/ \]/g,"]")}function O(t){const n=Array.from(t.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)),o=Array.from(t.matchAll(/https?:\/\/[^\s|)]+/g)).map(l=>{const a=l[0],r=l.index||0,c=t.substring(Math.max(0,r-100),r).match(/[|]\s*([^|]+?)\s*;\s*$/),i=c?c[1].trim():a;return[l[0],i,a]});return[...n,...o]}function _e(t){if(!t)return"plaintext";const n=t.match(/language-(\w+)/);return n?n[1]:"plaintext"}const L=u.createContext(new Set);function He(t){const e=y(t,"tbody").flatMap(r=>y(r,"tr")).map(r=>y(r,"td")),o=Math.max(0,...e.map(r=>r.length)),l=r=>e.every(p=>ae.test(S(p[r]))),a=Array.from({length:o},(r,p)=>p).find(r=>!l(r));return new Set(e.flatMap(r=>r.filter((p,c)=>c!==a&&Pe(p))))}function y(t,n){return t?.children.flatMap(e=>e.type==="element"&&e.tagName===n?[e]:[])??[]}function Pe(t){return!H(t)&&S(t).length>=re}const B={code:function({className:n,children:e,...o}){if(!o.node?.position?.start.line||o.node?.position?.start.line===o.node?.position?.end.line)return s.jsx("span",{className:A("pf-markdown-inline-code",n),...o,children:e});const a=_e(n);return s.jsx(pe,{className:n,children:s.jsx(de,{code:e,language:a})})},pre:function({children:n}){return s.jsx(s.Fragment,{children:n})},u:function({children:n,...e}){return s.jsx("span",{className:"pf-markdown-underline",...e,children:n})},h1:function({children:n,...e}){return s.jsx("h1",{className:"pf-ai-markdown-heading-1",...e,children:n})},h2:function({children:n,...e}){return s.jsx("h2",{className:"pf-ai-markdown-heading-2",...e,children:n})},h3:function({children:n,...e}){return s.jsx("h3",{className:"pf-ai-markdown-heading-3",...e,children:n})},h4:function({children:n,...e}){return s.jsx("h4",{className:"pf-ai-markdown-heading-4",...e,children:n})},h5:function({children:n,...e}){return s.jsx("h5",{className:"pf-ai-markdown-heading-minor",...e,children:n})},h6:function({children:n,...e}){return s.jsx("h6",{className:"pf-ai-markdown-heading-minor",...e,children:n})},ul:function({children:n,...e}){return s.jsx("ul",{className:"pf-ai-markdown-list",...e,children:n})},a:function({href:n,children:e,...o}){return s.jsx("a",{href:n,className:"pf-ai-markdown-link",target:"_blank",rel:"noopener noreferrer",...o,children:e})},table:function({children:n,node:e,...o}){return s.jsx(L.Provider,{value:He(e),children:s.jsx("div",{className:"pf-markdown-table-scroll",children:s.jsx("table",{className:"pf-markdown-table",...o,children:n})})})},th:function({children:n,...e}){return s.jsx("th",{className:"pf-ai-markdown-heading-cell",...e,children:n})},td:function({children:n,node:e,...o}){const l=u.useContext(L);return s.jsx("td",{className:A("pf-markdown-cell",ie(S(e),H(e))),...o,children:l.has(e)?s.jsx(P,{children:n}):n})}},R=u.memo(function({content:n,definitions:e,components:o=B}){const l=O(n);let a=null;return l?.length>0&&(a=l.map((r,p)=>{const c=r[2],i=r[1];return s.jsx("div",{className:"pf-ai-markdown-source",children:s.jsx(ce,{href:c,name:i,description:i})},`${c}-${i}-${p?.toString()}`)})),s.jsxs("div",{className:"pf-ai-markdown-block",children:[s.jsx(xe,{remarkPlugins:[Ne,ge,ye],rehypePlugins:[Ce,le],components:o,children:e?`${e}

${n}`:n}),s.jsx("div",{className:"pf-ai-markdown-sources",children:a||null})]})},function(n,e){return n.content===e.content&&n.definitions===e.definitions});R.displayName="MemoizedMarkdownBlock";function z({children:t,id:n,className:e,components:o=B,collapsibleSections:l,openSection:a,isStreaming:r}){const p=u.useId(),c=n??p,i=u.useMemo(()=>Me(t),[t]),d=u.useMemo(()=>Ie(t),[t]),{t:f}=_("assistant"),g=Q(),q=M(Te),{isFeedbackSideSheetOpen:D}=M(Z),k={[c]:[]},w=(h,b=o)=>{const x=i[h],U=O(x),$=new Set(k[c].map(T=>T[2])),W=U.filter(T=>!$.has(T[2]));k[c]=[...k[c],...W];const N=k[c],G=h===i.length-1,X=N?.length>0&&G;return s.jsxs(ee.Fragment,{children:[s.jsx(R,{content:x,definitions:Le(x,d),components:b}),X&&q===ne.enum.regulatory_agent&&!D&&s.jsx("div",{className:"pf-ai-markdown-all-sources",onClick:()=>{N?.length>0&&g(se(N)),g(oe(!0))},children:s.jsx(te,{className:"pf-ai-markdown-sources-label",children:f("generatedIdea.showAllSourcesCitations")})})]},`${c}-block-${h}`)},C=l?Ae(i):null,v=C&&a?C.sections.findIndex(({heading:h})=>i[h].toLowerCase().includes(a.toLowerCase())):-1,F=v===-1&&!!!(a&&r)?0:v;return s.jsx("div",{className:e,children:C?s.jsxs(s.Fragment,{children:[C.preface.map(h=>w(h)),s.jsx(E,{sections:C.sections,renderBlock:w,components:o,defaultOpen:F})]}):i.map((h,b)=>w(b))})}const Ee=u.memo(z);Ee.displayName="AiMarkdown";z.__docgenInfo={description:"",methods:[],displayName:"AiMarkdownComponent",props:{children:{required:!0,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},components:{required:!1,tsType:{name:"Partial",elements:[{name:"Components"}],raw:"Partial<Components>"},description:"",defaultValue:{value:`{
  code: function CodeComponent({ className, children, ...props }) {
    const isInline =
      !props.node?.position?.start.line ||
      props.node?.position?.start.line === props.node?.position?.end.line;

    if (isInline) {
      return (
        <span
          className={cn(
            "pf-markdown-inline-code",
            className,
          )}
          {...props}
        >
          {children}
        </span>
      );
    }

    const language = extractLanguage(className);

    return (
      <CodeBlock className={className}>
        <CodeBlockCode code={children as string} language={language} />
      </CodeBlock>
    );
  },
  pre: function PreComponent({ children }) {
    return <>{children}</>;
  },
  u: function UnderlineComponent({ children, ...props }) {
    return (
      <span className="pf-markdown-underline" {...props}>
        {children}
      </span>
    );
  },
  h1: function H1Component({ children, ...props }) {
    return (
      <h1 className="pf-ai-markdown-heading-1" {...props}>
        {children}
      </h1>
    );
  },
  h2: function H2Component({ children, ...props }) {
    return (
      <h2 className="pf-ai-markdown-heading-2" {...props}>
        {children}
      </h2>
    );
  },
  h3: function H3Component({ children, ...props }) {
    return (
      <h3 className="pf-ai-markdown-heading-3" {...props}>
        {children}
      </h3>
    );
  },
  h4: function H4Component({ children, ...props }) {
    return (
      <h4 className="pf-ai-markdown-heading-4" {...props}>
        {children}
      </h4>
    );
  },
  h5: function H5Component({ children, ...props }) {
    return (
      <h5 className="pf-ai-markdown-heading-minor" {...props}>
        {children}
      </h5>
    );
  },
  h6: function H6Component({ children, ...props }) {
    return (
      <h6 className="pf-ai-markdown-heading-minor" {...props}>
        {children}
      </h6>
    );
  },
  ul: function UlComponent({ children, ...props }) {
    return (
      <ul
        className="pf-ai-markdown-list"
        {...props}
      >
        {children}
      </ul>
    );
  },
  a: function LinkComponent({ href, children, ...props }) {
    return (
      <a
        href={href}
        className="pf-ai-markdown-link"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  },
  table: function TableComponent({ children, node, ...props }) {
    return (
      <CollapsibleCellsContext.Provider value={findCollapsibleCells(node)}>
        <div className="pf-markdown-table-scroll">
          <table className="pf-markdown-table" {...props}>
            {children}
          </table>
        </div>
      </CollapsibleCellsContext.Provider>
    );
  },
  th: function ThComponent({ children, ...props }) {
    return (
      <th
        className="pf-ai-markdown-heading-cell"
        {...props}
      >
        {children}
      </th>
    );
  },
  td: function TdComponent({ children, node, ...props }) {
    const collapsibleCells = useContext(CollapsibleCellsContext);
    return (
      <td
        className={cn(
          "pf-markdown-cell",
          cellSizingClasses(hastCellText(node), hastCellHasLink(node)),
        )}
        {...props}
      >
        {collapsibleCells.has(node) ? <ClampedTableCell>{children}</ClampedTableCell> : children}
      </td>
    );
  },
}`,computed:!1}},collapsibleSections:{required:!1,tsType:{name:"boolean"},description:"Renders each `##` section as a collapsible block."},openSection:{required:!1,tsType:{name:"string"},description:"With `collapsibleSections`, the section whose heading contains this text (any case) starts open; otherwise the first."},isStreaming:{required:!1,tsType:{name:"boolean"},description:"The reply is still arriving: with `openSection`, sections stay closed until that heading arrives."}}};export{Ee as A};
