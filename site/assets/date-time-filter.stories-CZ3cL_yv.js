import{j as m,i as f,r as g}from"./iframe-DgvZnKtv.js";import{c as v}from"./faceted-filter-DUX0jO-b.js";import{D as y}from"./date-time-filter-CgjWm36C.js";import"./preload-helper-PPVm8Dsz.js";import"./badge-C-Jji8Kx.js";import"./index-BWlKOsdO.js";import"./button-CEcYiQdY.js";import"./loader-circle-BsZrs7F6.js";import"./checkbox-CCvRjg_n.js";import"./minus-0s0hIbe7.js";import"./useAriaLabelledBy-C2v0UWUV.js";import"./dialog-BGED6ss2.js";import"./overlay-dialog-i6vPmHIw.js";import"./separator-DZKac5zi.js";import"./Separator-BKJ0ZhJM.js";import"./accordion-mjjl12TU.js";import"./roving-focus-0SK5-Aqb.js";import"./useCollapsiblePanel-jjkiJ8Ha.js";import"./circle-x-1SpwuOPE.js";import"./circle-plus-Cdylr7HA.js";import"./helpers-Uv_-GrLc.js";import"./calendar-DNqmRJEy.js";import"./chevron-right-B8SZue5v.js";import"./chevron-left-96ijkid2.js";import"./calendar-Dd3MHzMl.js";const{expect:w,fn:D,userEvent:b,within:S}=__STORYBOOK_MODULE_TEST__,a=(e,t,r)=>new Date(e,t,r).getTime();function C(e){const[t,r]=g.useState(e.filterValue);g.useEffect(()=>{r(e.filterValue)},[e.filterValue]);const u=m.jsx(y,{...e,filterValue:t,onChange:h=>{r(h),e.onChange(h)}});return e.layout==="sidebar"?m.jsx(x,{title:e.sectionValue??e.title??"",children:u}):u}function x({title:e,children:t}){return m.jsx("div",{className:"pf-story-data-grid-date-time-filter-filter-frame",children:m.jsx(v,{defaultOpen:[e],children:t})})}const Q={title:"Components/Data Display/Data Grid/Internals/DataTableDateFilter",id:"design-system-data-table-datatabledatefilter",component:y,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Design-system version of `src/components/proxy-reusables/table/components/filters/date/date-time-filter.tsx`. Its source is `src/design-system/components/data-table/components/filters/date/date-time-filter.tsx`; the usage notes below describe the original. Date filter chip for table toolbars: an outline button (calendar icon, or a clear control once a value is set, then the title and the formatted date or range) that opens a Popover with the Calendar in single or range mode. Values are epoch milliseconds (`number` or `[from, to]`). Used directly by `src/modules/Documents/components/DocumentsFilterPanel.tsx` and through ServerDateFilter by the list toolbars. Source: `src/components/proxy-reusables/table/components/filters/date/date-time-filter.tsx`."}}},argTypes:{filterValue:{control:!1,description:"Epoch ms: a single day, or `[from, to]` when `multiple`."},onChange:{description:"Called with the new value, or `undefined` when cleared."},title:{control:"text",description:"Label shown before the selected date."},multiple:{control:"boolean",description:"Range mode (true) or single day (false)."},layout:{control:"inline-radio",options:["toolbar","sidebar"],description:"`toolbar` (default): chip + popover. `sidebar`: inline section of the left filter panel."},sectionValue:{control:"text",description:"Accordion item value of the sidebar section; defaults to the title."}},args:{title:f.t("formula:productsTable.filters.createdAt.title"),multiple:!0,onChange:D()},render:e=>m.jsx(C,{...e})},o={},s={args:{filterValue:[a(2026,8,1),a(2026,8,15)]}},n={args:{multiple:!1}},i={args:{multiple:!1,filterValue:a(2026,8,12)}},l={args:{title:void 0,filterValue:[a(2026,8,1),a(2026,8,15)]}},c={play:async({canvasElement:e})=>{await b.click(S(e).getByRole("button"))}},d={args:{layout:"sidebar"}},p={args:{layout:"sidebar",filterValue:[a(2026,8,1),a(2026,8,15)]},play:async({canvasElement:e,args:t})=>{const r=S(e);await b.click(r.getByRole("button",{name:f.t("common:table.filter.clearFilter",{title:t.title})})),await w(t.onChange).toHaveBeenCalledWith(void 0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source},description:{story:'The Documents toolbar filter: a "Created At" range with nothing selected yet.',...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    filterValue: [day(2026, 8, 1), day(2026, 8, 15)]
  }
}`,...s.parameters?.docs?.source},description:{story:"A complete range: the chip shows both dates and the clear control replaces the calendar icon.",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: false
  }
}`,...n.parameters?.docs?.source},description:{story:`Single-day mode, empty: the "Select date" hint is the calendar's only prompt.`,...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: false,
    filterValue: day(2026, 8, 12)
  }
}`,...i.parameters?.docs?.source},description:{story:"Single-day mode with a value.",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined,
    filterValue: [day(2026, 8, 1), day(2026, 8, 15)]
  }
}`,...l.parameters?.docs?.source},description:{story:"Without a title only the icon and the selected date render.",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(within(canvasElement).getByRole("button"));
  }
}`,...c.parameters?.docs?.source},description:{story:"The popover opened by clicking the chip: the range Calendar.",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "sidebar"
  }
}`,...d.parameters?.docs?.source},description:{story:'layout="sidebar": the same range Calendar inline in a filter-panel section (one month, fits the panel width).',...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "sidebar",
    filterValue: [day(2026, 8, 1), day(2026, 8, 15)]
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: i18n.t("common:table.filter.clearFilter", {
        title: args.title
      })
    }));
    await expect(args.onChange).toHaveBeenCalledWith(undefined);
  }
}`,...p.parameters?.docs?.source},description:{story:'Sidebar section with a range set: the count badge shows 1 and "Clear" resets the filter to `undefined`.',...p.parameters?.docs?.description}}};const X=["AsDocumentsCreatedAtRange","RangeSelected","SingleDateEmpty","SingleDateSelected","WithoutTitle","CalendarOpen","Sidebar","SidebarWithValue"];export{o as AsDocumentsCreatedAtRange,c as CalendarOpen,s as RangeSelected,d as Sidebar,p as SidebarWithValue,n as SingleDateEmpty,i as SingleDateSelected,l as WithoutTitle,X as __namedExportsOrder,Q as default};
