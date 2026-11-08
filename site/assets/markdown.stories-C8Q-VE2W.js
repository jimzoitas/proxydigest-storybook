import{r as g,j as n,g as h}from"./iframe-6uZ_OvXJ.js";/* empty css                 */import{C as f,a as w}from"./code-block-D11utLBN.js";import{M as N,r as A}from"./index-C6UO2wHL.js";import{r as v,a as I}from"./index-DDxzgSdf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8G61PpGJ.js";import"./index-D-ztsl9H.js";function x(o){if(!o)return"plaintext";const e=o.match(/language-(\w+)/);return e?e[1]:"plaintext"}const k={code:function({className:e,children:r,...a}){if(!a.node?.position?.start.line||a.node?.position?.start.line===a.node?.position?.end.line)return n.jsx("span",{className:h("pf-markdown-inline-code",e),...a,children:r});const u=x(e);return n.jsx(f,{className:e,children:n.jsx(w,{code:r,language:u})})},pre:function({children:e}){return n.jsx(n.Fragment,{children:e})},u:function({children:e,...r}){return n.jsx("span",{className:"pf-markdown-underline",...r,children:e})},a:function({href:e,children:r,...a}){return n.jsx("a",{href:e,className:"pf-markdown-link",target:"_blank",rel:"noopener noreferrer",...a,children:r})},table:function({children:e,...r}){return n.jsx("div",{className:"pf-markdown-table-scroll",children:n.jsx("table",{className:"pf-markdown-table",...r,children:e})})},th:function({children:e,...r}){return n.jsx("th",{className:"pf-markdown-heading-cell",...r,children:e})},td:function({children:e,...r}){return n.jsx("td",{className:"pf-markdown-cell",...r,children:e})}};function p({children:o,className:e,components:r=k}){return n.jsx("div",{className:e,children:n.jsx(N,{remarkPlugins:[A,I],rehypePlugins:[v],components:r,children:o})})}const m=g.memo(p);m.displayName="Markdown";p.__docgenInfo={description:"",methods:[],displayName:"MarkdownComponent",props:{children:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},components:{required:!1,tsType:{name:"Partial",elements:[{name:"Components"}],raw:"Partial<Components>"},description:"",defaultValue:{value:`{
  code: function CodeComponent({ className, children, ...props }) {
    const isInline =
      !props.node?.position?.start.line ||
      props.node?.position?.start.line === props.node?.position?.end.line;

    if (isInline) {
      return (
        <span className={cn("pf-markdown-inline-code", className)} {...props}>
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
  a: function LinkComponent({ href, children, ...props }) {
    return (
      <a
        href={href}
        className="pf-markdown-link"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  },
  table: function TableComponent({ children, ...props }) {
    return (
      <div className="pf-markdown-table-scroll">
        <table className="pf-markdown-table" {...props}>
          {children}
        </table>
      </div>
    );
  },
  th: function ThComponent({ children, ...props }) {
    return (
      <th className="pf-markdown-heading-cell" {...props}>
        {children}
      </th>
    );
  },
  td: function TdComponent({ children, ...props }) {
    return (
      <td className="pf-markdown-cell" {...props}>
        {children}
      </td>
    );
  },
}`,computed:!1}}}};const l=`## Summary

**Bottom-line decision**

For styrene-divinylbenzene copolymer used as an ion-exchange resin/membrane/molecular sieve in oligosaccharides (and fibre-source ingredients), the provided ANVISA table shows no numerical maximum residue limit (MRL) stated (shown as "-"), but its use is restricted to process temperatures ≤ 20 °C. For beer production, the provided context does not state an applicable MRL or authorisation condition.

**Key legal/regulatory reasons**

- ANVISA's listing for ion exchange resins only shows the MRL column as "-" and limits use to process temperature ≤ 20 °C.
- Where a use (e.g. beer) is not incorporated in Brazilian legislation, the applicant should request inclusion/extension and identify the MRL by food category.

## References

| Jurisdiction | Citation | URL | Topic | Requirement/Limit | Implications |
|---|---|---|---|---|---|
| Brazil | ANVISA IN No. 407/2025, Annex IV, item 22.0 table row Ion exchange resin | https://anvisalegis.datalegis.net/action/ActionDatalegis.php?acao=abrirTextoAto&link=S&tipo=INM&numeroAto=00000407&seqAto=000&valorAno=2025&orgao=DC/ANVISA/MS&cod_modulo=310&cod_menu=8542 | Oligosaccharides use | Residue limit shown as "-"; process temp ≤ 20 °C | No numeric MRL stated; must meet ≤ 20 °C condition |
| Brazil | ANVISA IN No. 356/2025, table: Ion exchange resin styrene-divinylbenzene variants | https://anvisalegis.datalegis.net/action/ActionDatalegis.php?acao=abrirTextoAto&link=S&tipo=INM&numeroAto=00000356&seqAto=000&valorAno=2025&orgao=DC/ANVISA/MS&cod_modulo=310&cod_menu=8542 | Processing aid listing | Residue limit shown as "-" for listed resins | Supports that some listings may not state a numeric MRL in-table |
| Brazil | Guide No. 43/2020, ii.c and related text on limits for processing aids | https://anvisalegis.datalegis.net/action/ActionDatalegis.php?acao=abrirTextoAto&tipo=GUI&numeroAto=00000043&seqAto=222&valorAno=2020&orgao=ANVISA/MS&codTipo=&desItem=&desItemFim=&cod_menu=9483&cod_modulo=644&pesquisa=true | How limits are set | Limits relate to product sold/consumed; residue limit ppm/ppb | If beer use not listed, dossier should define residue limit + basis |
| Brazil | ANVISA IN No. 344/2025, Section 2.2 processing aids | https://anvisalegis.datalegis.net/action/ActionDatalegis.php?acao=abrirTextoAto&link=S&tipo=INM&numeroAto=00000344&seqAto=000&valorAno=2025&orgao=DC/ANVISA/MS&cod_modulo=310&cod_menu=9431 | Processing aid application | Request must include max residue limit for each food category | For beer, a formal request stating residue limit + method may be needed |
`,y=`## Summary

**Bottom-line decision**

In France, a food additive dossier must evaluate (and describe the methods used to evaluate) acute toxicity, long-term toxicity, reproductive effects, mutagenic and/or carcinogenic effects, allergenic properties and immune effects, plus possible nutritional effects, and include any relevant human data if available.

**Key legal/regulatory reasons**

- The French Order of 5 November 1991 (Article 2, Part III, section 8.1) lists the physio-toxicological endpoints that must be reported.
- The same Order requires inclusion of human physiological/toxicological information (8.2) and any other relevant information (8.3).

## References

| Jurisdiction | Citation | URL | Topic | Requirement/Limit | Implications |
|---|---|---|---|---|---|
| France | Order of 5 Nov 1991, Art. 2, Part III, sec. 8.1 | https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000327671/2022-06-13 | Toxicology endpoints | Acute; long-term; reproductive; mutagenic or carcinogenic; methods described | Must include these endpoints and methods in additive dossier |
| France | Order of 5 Nov 1991, Art. 2, Part III, sec. 8.1 | https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000327671/2022-06-13 | Allergenicity and nutrition | Allergenic and immune effects; possible nutritional effects; present results | Requires allergenicity-immune and nutrition effects reporting |
| France | Order of 5 Nov 1991, Art. 2, Part III, sec. 8.2-8.3 | https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000327671/2022-06-13 | Human data; other tox info | Include human physio-toxicological info; other useful similar info | Add relevant human evidence to strengthen dossier |
| France | Order of 5 Nov 1991, Annex II, I (General info) | https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000327671/2022-06-13 | Administrative format | Declaration files prepared in 5 copies; written in French | Submission formatting requirement for declaration pathway |
`,L={title:"Components/Markdown/Markdown",id:"ui-markdown",component:m,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{children:{control:"text",description:"Raw markdown string to render — paste a real agent response here to preview it"}},decorators:[o=>n.jsx("div",{className:"pf-story-markdown-preview",children:n.jsx(o,{})})]},t={args:{children:l}},i={args:{children:l}},s={args:{children:y}},c={args:{children:l},decorators:[o=>n.jsx("div",{className:"pf-story-markdown-compact-preview",children:n.jsx(o,{})})]},d={args:{children:l},decorators:[o=>n.jsx("div",{className:"dark",children:n.jsx("div",{className:"pf-story-markdown-compact-preview",children:n.jsx(o,{})})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: BRAZIL_REPORT
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: BRAZIL_REPORT
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: FRANCE_REPORT
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: BRAZIL_REPORT
  },
  decorators: [Story => <div className="pf-story-markdown-compact-preview">
        <Story />
      </div>]
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: BRAZIL_REPORT
  },
  decorators: [Story => <div className="dark">
        <div className="pf-story-markdown-compact-preview">
          <Story />
        </div>
      </div>]
}`,...d.parameters?.docs?.source}}};const O=["Playground","BrazilReport","FranceReport","NarrowPanel","DarkMode"];export{i as BrazilReport,d as DarkMode,s as FranceReport,c as NarrowPanel,t as Playground,O as __namedExportsOrder,L as default};
