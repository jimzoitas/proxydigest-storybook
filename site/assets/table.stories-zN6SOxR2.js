import{j as e,g as w,ac as R}from"./iframe-DgvZnKtv.js";/* empty css                      */import{B as S}from"./badge-C-Jji8Kx.js";import{B as N}from"./button-CEcYiQdY.js";import{C}from"./checkbox-CCvRjg_n.js";import{T as o,a as d,b as n,c as l,d as i,e as s,f as B,g as D}from"./table-_TMMC7yC.js";import{C as U}from"./circle-plus-Cdylr7HA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWlKOsdO.js";import"./loader-circle-BsZrs7F6.js";import"./minus-0s0hIbe7.js";import"./useAriaLabelledBy-C2v0UWUV.js";const K={title:"Components/Data Display/Data Grid/Internals/Primitives/Table",id:"design-system-data-table-primitives-table",component:o,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Design-system version of `src/components/ui/table.tsx`. Its source is `src/design-system/components/data-table/primitives/table.tsx`; the usage notes below describe the original. Plain HTML table primitives: `Table` wraps a `<table>` in an `overflow-auto` container (custom `containerClassName`), rows are a fixed `h-10` with hover and `data-state=selected` styles, header cells are `h-10 text-sm font-semibold` and data cells `px-3` with no vertical padding. Imported by 25 files, for example `src/components/proxy-reusables/table/components/table-body.tsx` (the shared DataTable), `src/components/proxy-reusables/general/DetailTable.tsx` (zebra label/value grid) and `src/modules/Ingredients/cdi/IngredientBatchWizard/components/ReviewTable.tsx`. `TableCaption` and `TableFooter` are exported but unused. Source: `src/components/ui/table.tsx`."}}},argTypes:{className:{control:"text",description:"Classes on the `<table>` (e.g. `table-fixed`)"},containerClassName:{control:"text",description:"Classes on the scroll container (the DataTable passes `overflow-visible`)"}},args:{}},I=[{role:"Admin",capabilities:"Manage members, billing and every resource"},{role:"Editor",capabilities:"Create and edit formulas, ingredients and projects"},{role:"Viewer",capabilities:"Read-only access to shared resources"}],v=[{id:"anchor",header:"Plant-based burger patty"},{id:"v1",header:"Variant 1"},{id:"v2",header:"Variant 2"}],k=[{label:"Energy (kcal)",values:{anchor:"245",v1:"238",v2:"251"},isHeader:!0},{label:"Protein (g)",values:{anchor:"18.2",v1:"19.0",v2:"17.6"},indentLevel:1},{label:"Fat (g)",values:{anchor:"14.1",v1:"13.2",v2:"15.0"},indentLevel:1},{label:"of which saturates (g)",values:{anchor:"6.8",v1:"6.1",v2:"7.4"},indentLevel:2},{label:"Carbohydrate (g)",values:{anchor:"8.9",v1:"9.4",v2:"8.1"},indentLevel:1}],u=[{id:"ing-1",name:"Pea protein isolate",category:"Protein",info:"85% protein, non-GMO",allergens:[],costUS:"$4.20",costEU:"€3.85",documents:3},{id:"ing-2",name:"Coconut oil",category:"Fat",info:"Refined, deodorised",allergens:[],costUS:"$2.10",costEU:"€1.95",documents:1},{id:"ing-3",name:"Wheat gluten",category:"Binder",info:"Vital wheat gluten, 75% protein",allergens:["Gluten","Wheat"],costUS:"$1.60",costEU:"€1.45",documents:0}],E=[{ingredient:"Pea protein isolate",docs:["Spec sheet.pdf","Allergen statement.pdf"]},{ingredient:"Coconut oil",docs:["CoA batch 2026-09.pdf"]}],c={render:r=>e.jsx("div",{className:"pf-story-table-panel",children:e.jsxs(o,{...r,children:[e.jsx(d,{children:e.jsxs(n,{children:[e.jsx(l,{className:"pf-story-data-grid-table-leading-cell"}),v.map(a=>e.jsx(l,{className:"pf-story-align-start",children:a.header},a.id))]})}),e.jsx(i,{children:k.map((a,t)=>e.jsxs(n,{className:w("pf-story-data-grid-table-hover-row",t%2===1&&"pf-story-data-grid-table-subdued-row"),children:[e.jsx(s,{className:w("pf-story-data-grid-table-label-cell",a.isHeader?"pf-story-data-grid-table-emphasis":"pf-story-label-weight"),style:{paddingLeft:a.indentLevel?`${a.indentLevel*16}px`:void 0},children:a.label}),v.map(j=>e.jsx(s,{className:"pf-story-align-start",children:a.values[j.id]},j.id))]},a.label))})]})})},b={render:r=>e.jsx("div",{className:"pf-story-detail-frame",children:e.jsxs(o,{...r,children:[e.jsx(d,{children:e.jsxs(n,{children:[e.jsx(l,{children:"Role"}),e.jsx(l,{children:"Capabilities"})]})}),e.jsx(i,{children:I.map(a=>e.jsxs(n,{children:[e.jsx(s,{children:a.role}),e.jsx(s,{children:a.capabilities})]},a.role))})]})})},m={render:r=>e.jsx("div",{className:"pf-story-detail-frame",children:e.jsxs(o,{...r,children:[e.jsx(d,{children:e.jsxs(n,{children:[e.jsx(l,{children:"Role"}),e.jsx(l,{children:"Capabilities"})]})}),e.jsx(i,{children:e.jsx(n,{children:e.jsx(s,{colSpan:2,className:"pf-story-table-danger",children:"Could not load your organisation roles."})})})]})})},p={render:r=>e.jsx("div",{className:"pf-story-data-grid-table-table-frame",children:e.jsxs(o,{...r,children:[e.jsx(d,{children:e.jsxs(n,{children:[e.jsx(l,{className:"pf-story-align-start",children:"Name"}),e.jsx(l,{className:"pf-story-align-start",children:"Category"}),e.jsx(l,{className:"pf-story-align-start",children:"Ingredient Information"}),e.jsx(l,{className:"pf-story-align-start",children:"Allergens"}),e.jsx(l,{className:"pf-story-align-end",children:"Cost US"}),e.jsx(l,{className:"pf-story-align-end",children:"Cost EU"}),e.jsx(l,{className:"pf-story-align-center",children:"Documents"})]})}),e.jsx(i,{children:u.map(a=>e.jsxs(n,{children:[e.jsx(s,{className:"pf-story-data-grid-table-heading-cell",children:a.name}),e.jsx(s,{className:"pf-story-data-grid-table-text-cell",children:a.category}),e.jsx(s,{className:"pf-story-data-grid-table-text-cell",children:a.info}),e.jsx(s,{className:"pf-story-data-grid-table-text-cell",children:a.allergens.length>0?e.jsx("div",{className:"pf-story-data-grid-table-badge-list",children:a.allergens.map(t=>e.jsx(S,{className:"pf-story-data-grid-table-badge",children:t},t))}):"-"}),e.jsx(s,{className:"pf-story-data-grid-table-value-cell",children:a.costUS}),e.jsx(s,{className:"pf-story-data-grid-table-value-cell",children:a.costEU}),e.jsx(s,{className:"pf-story-data-grid-table-centered-cell",children:a.documents})]},a.id))})]})})},g={render:r=>e.jsx("div",{className:"pf-story-data-grid-table-table-frame",children:e.jsxs(o,{...r,children:[e.jsx(d,{children:e.jsxs(n,{children:[e.jsx(l,{className:"pf-story-align-start",children:"Name"}),e.jsx(l,{className:"pf-story-align-start",children:"Category"}),e.jsx(l,{className:"pf-story-align-start",children:"Ingredient Information"}),e.jsx(l,{className:"pf-story-align-start",children:"Allergens"}),e.jsx(l,{className:"pf-story-align-end",children:"Cost US"}),e.jsx(l,{className:"pf-story-align-end",children:"Cost EU"}),e.jsx(l,{className:"pf-story-align-center",children:"Documents"})]})}),e.jsx(i,{children:e.jsx(n,{children:e.jsx(s,{colSpan:7,className:"pf-story-data-grid-table-empty-message",children:"No ingredients to review"})})})]})})},T={render:r=>e.jsx("div",{className:"pf-story-data-grid-table-table-frame",children:e.jsxs(o,{...r,children:[e.jsx(d,{children:e.jsxs(n,{children:[e.jsx(l,{className:"pf-story-align-start",children:"Ingredient / Document"}),e.jsx(l,{className:"pf-story-align-start",children:"Document Type"}),e.jsx(l,{className:"pf-story-align-end",children:"Created At"}),e.jsx(l,{className:"pf-story-align-center",children:"Actions"})]})}),e.jsx(i,{children:E.map(a=>e.jsx(A,{group:a},a.ingredient))})]})})};function A({group:r}){return e.jsxs(e.Fragment,{children:[e.jsx(n,{className:"pf-story-data-grid-table-group-row",children:e.jsx(s,{colSpan:4,className:"pf-story-data-grid-table-group-heading",children:e.jsxs("div",{className:"pf-story-comfortable-toolbar",children:[e.jsx("span",{children:r.ingredient}),e.jsxs(N,{size:"sm",variant:"ghost",className:"pf-story-data-grid-table-group-toggle",children:[e.jsx(U,{className:"pf-story-data-grid-table-group-chevron","aria-hidden":"true"}),e.jsx("span",{className:"pf-story-data-grid-table-group-label",children:"Add Document"})]})]})})}),r.docs.map(a=>e.jsxs(n,{children:[e.jsx(s,{className:"pf-story-data-grid-table-nested-label",children:a}),e.jsx(s,{className:"pf-story-align-start",children:"Specification"}),e.jsx(s,{className:"pf-story-align-end",children:"27 Sep 2026"}),e.jsx(s,{className:"pf-story-align-center",children:e.jsx(N,{size:"sm",variant:"ghost",className:"pf-story-data-grid-table-compact-row",children:e.jsx(R,{className:"pf-story-icon"})})})]},a))]})}const y={args:{className:"pf-story-fixed-table",containerClassName:"pf-story-overflow-panel"},render:r=>e.jsxs(o,{...r,children:[e.jsx(d,{children:e.jsxs(n,{children:[e.jsx(l,{className:"pf-story-data-grid-table-selection-cell",children:e.jsx(C,{"aria-label":"Select all"})}),e.jsx(l,{children:"Name"}),e.jsx(l,{children:"Category"}),e.jsx(l,{className:"pf-story-align-end",children:"Cost US"})]})}),e.jsx(i,{children:u.map((a,t)=>e.jsxs(n,{"data-state":t===0?"selected":void 0,children:[e.jsx(s,{children:e.jsx(C,{"aria-label":`Select ${a.name}`,defaultChecked:t===0})}),e.jsx(s,{className:"pf-story-data-grid-table-truncated-name",children:a.name}),e.jsx(s,{children:a.category}),e.jsx(s,{className:"pf-story-align-end",children:a.costUS})]},a.id))})]})},h={render:r=>e.jsxs(o,{...r,children:[e.jsx(B,{children:"Ingredient costs for the current batch."}),e.jsx(d,{children:e.jsxs(n,{children:[e.jsx(l,{className:"pf-story-data-grid-table-overflow-frame",children:"Ingredient"}),e.jsx(l,{children:"Category"}),e.jsx(l,{className:"pf-story-align-end",children:"Cost US"})]})}),e.jsx(i,{children:u.map(a=>e.jsxs(n,{children:[e.jsx(s,{className:"pf-story-label-weight",children:a.name}),e.jsx(s,{children:a.category}),e.jsx(s,{className:"pf-story-align-end",children:a.costUS})]},a.id))}),e.jsx(D,{children:e.jsxs(n,{children:[e.jsx(s,{colSpan:2,children:"Total"}),e.jsx(s,{className:"pf-story-align-end",children:"$7.90"})]})})]})},f={render:r=>e.jsxs(o,{...r,children:[e.jsx(d,{children:e.jsxs(n,{children:[e.jsx(l,{children:"Ingredient"}),e.jsx(l,{children:"Category"})]})}),e.jsx(i,{children:u.map((a,t)=>e.jsxs(n,{"data-state":t===1?"selected":void 0,children:[e.jsx(s,{children:a.name}),e.jsx(s,{children:a.category})]},a.id))})]})},H=Array.from({length:10},(r,a)=>`Column ${a+1}`),P=Array.from({length:3},(r,a)=>`Row ${a+1}`),x={render:r=>e.jsx("div",{className:"pf-story-data-grid-table-wide-frame",children:e.jsxs(o,{...r,children:[e.jsx(d,{children:e.jsx(n,{children:H.map(a=>e.jsx(l,{className:"pf-story-data-grid-table-no-wrap",children:a},a))})}),e.jsx(i,{children:P.map(a=>e.jsx(n,{children:H.map(t=>e.jsxs(s,{className:"pf-story-data-grid-table-no-wrap",children:[a," / ",t]},t))},a))})]})})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div className="pf-story-table-panel">
      <Table {...args}>
        <TableHeader>
          <TableRow>
            <TableHead className="pf-story-data-grid-table-leading-cell" />
            {nutritionColumns.map(column => <TableHead key={column.id} className="pf-story-align-start">
                {column.header}
              </TableHead>)}
          </TableRow>
        </TableHeader>
        <TableBody>
          {nutritionRows.map((row, index) => <TableRow key={row.label} className={cn("pf-story-data-grid-table-hover-row", index % 2 === 1 && "pf-story-data-grid-table-subdued-row")}>
              <TableCell className={cn("pf-story-data-grid-table-label-cell", row.isHeader ? "pf-story-data-grid-table-emphasis" : "pf-story-label-weight")} style={{
            paddingLeft: row.indentLevel ? \`\${row.indentLevel * 16}px\` : undefined
          }}>
                {row.label}
              </TableCell>
              {nutritionColumns.map(column => <TableCell key={column.id} className="pf-story-align-start">
                  {row.values[column.id as keyof typeof row.values]}
                </TableCell>)}
            </TableRow>)}
        </TableBody>
      </Table>
    </div>
}`,...c.parameters?.docs?.source},description:{story:"`DetailTable`: an empty header cell with a right border, zebra rows (`bg-muted/30`) and indented labels.",...c.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div className="pf-story-detail-frame">
      <Table {...args}>
        <TableHeader>
          <TableRow>
            <TableHead>Role</TableHead>
            <TableHead>Capabilities</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {roleRows.map(item => <TableRow key={item.role}>
              <TableCell>{item.role}</TableCell>
              <TableCell>{item.capabilities}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </div>
}`,...b.parameters?.docs?.source},description:{story:"`SettingsPage` organisation access: two plain columns inside a card.",...b.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div className="pf-story-detail-frame">
      <Table {...args}>
        <TableHeader>
          <TableRow>
            <TableHead>Role</TableHead>
            <TableHead>Capabilities</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell colSpan={2} className="pf-story-table-danger">
              Could not load your organisation roles.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
}`,...m.parameters?.docs?.source},description:{story:"`SettingsPage` when the assignments request fails: a single destructive row.",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div className="pf-story-data-grid-table-table-frame">
      <Table {...args}>
        <TableHeader>
          <TableRow>
            <TableHead className="pf-story-align-start">Name</TableHead>
            <TableHead className="pf-story-align-start">Category</TableHead>
            <TableHead className="pf-story-align-start">
              Ingredient Information
            </TableHead>
            <TableHead className="pf-story-align-start">Allergens</TableHead>
            <TableHead className="pf-story-align-end">Cost US</TableHead>
            <TableHead className="pf-story-align-end">Cost EU</TableHead>
            <TableHead className="pf-story-align-center">Documents</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reviewRows.map(ingredient => <TableRow key={ingredient.id}>
              <TableCell className="pf-story-data-grid-table-heading-cell">
                {ingredient.name}
              </TableCell>
              <TableCell className="pf-story-data-grid-table-text-cell">
                {ingredient.category}
              </TableCell>
              <TableCell className="pf-story-data-grid-table-text-cell">
                {ingredient.info}
              </TableCell>
              <TableCell className="pf-story-data-grid-table-text-cell">
                {ingredient.allergens.length > 0 ? <div className="pf-story-data-grid-table-badge-list">
                    {ingredient.allergens.map(allergen => <Badge key={allergen} className="pf-story-data-grid-table-badge">
                        {allergen}
                      </Badge>)}
                  </div> : "-"}
              </TableCell>
              <TableCell className="pf-story-data-grid-table-value-cell">
                {ingredient.costUS}
              </TableCell>
              <TableCell className="pf-story-data-grid-table-value-cell">
                {ingredient.costEU}
              </TableCell>
              <TableCell className="pf-story-data-grid-table-centered-cell">
                {ingredient.documents}
              </TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </div>
}`,...p.parameters?.docs?.source},description:{story:"CDI `ReviewTable`: `rounded-lg border` wrapper, right-aligned cost columns, centered document count.",...p.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div className="pf-story-data-grid-table-table-frame">
      <Table {...args}>
        <TableHeader>
          <TableRow>
            <TableHead className="pf-story-align-start">Name</TableHead>
            <TableHead className="pf-story-align-start">Category</TableHead>
            <TableHead className="pf-story-align-start">
              Ingredient Information
            </TableHead>
            <TableHead className="pf-story-align-start">Allergens</TableHead>
            <TableHead className="pf-story-align-end">Cost US</TableHead>
            <TableHead className="pf-story-align-end">Cost EU</TableHead>
            <TableHead className="pf-story-align-center">Documents</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell colSpan={7} className="pf-story-data-grid-table-empty-message">
              No ingredients to review
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
}`,...g.parameters?.docs?.source},description:{story:"CDI `ReviewTable` with nothing to review: one muted, centered row spanning all seven columns.",...g.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <div className="pf-story-data-grid-table-table-frame">
      <Table {...args}>
        <TableHeader>
          <TableRow>
            <TableHead className="pf-story-align-start">
              Ingredient / Document
            </TableHead>
            <TableHead className="pf-story-align-start">
              Document Type
            </TableHead>
            <TableHead className="pf-story-align-end">Created At</TableHead>
            <TableHead className="pf-story-align-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {documentRows.map(group => <GroupRows key={group.ingredient} group={group} />)}
        </TableBody>
      </Table>
    </div>
}`,...T.parameters?.docs?.source},description:{story:"CDI `DocumentsTable` + `IngredientRow`: a `bg-muted/50` group header row per ingredient, documents beneath.",...T.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    className: "pf-story-fixed-table",
    containerClassName: "pf-story-overflow-panel"
  },
  render: args => <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHead className="pf-story-data-grid-table-selection-cell">
            <Checkbox aria-label="Select all" />
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="pf-story-align-end">Cost US</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {reviewRows.map((row, index) => <TableRow key={row.id} data-state={index === 0 ? "selected" : undefined}>
            <TableCell>
              <Checkbox aria-label={\`Select \${row.name}\`} defaultChecked={index === 0} />
            </TableCell>
            <TableCell className="pf-story-data-grid-table-truncated-name">
              {row.name}
            </TableCell>
            <TableCell>{row.category}</TableCell>
            <TableCell className="pf-story-align-end">{row.costUS}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...y.parameters?.docs?.source},description:{story:'The shared DataTable passes `containerClassName="overflow-visible"` and a fixed layout so sticky cells and popovers escape the wrapper.',...y.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Table {...args}>
      <TableCaption>Ingredient costs for the current batch.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="pf-story-data-grid-table-overflow-frame">
            Ingredient
          </TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="pf-story-align-end">Cost US</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {reviewRows.map(row => <TableRow key={row.id}>
            <TableCell className="pf-story-label-weight">{row.name}</TableCell>
            <TableCell>{row.category}</TableCell>
            <TableCell className="pf-story-align-end">{row.costUS}</TableCell>
          </TableRow>)}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="pf-story-align-end">$7.90</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
}`,...h.parameters?.docs?.source},description:{story:"Every part, including the unused `TableCaption` and `TableFooter`.",...h.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHead>Ingredient</TableHead>
          <TableHead>Category</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {reviewRows.map((row, index) => <TableRow key={row.id} data-state={index === 1 ? "selected" : undefined}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.category}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...f.parameters?.docs?.source},description:{story:'`data-state="selected"` on a row (`bg-muted`) next to the hover state.',...f.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <div className="pf-story-data-grid-table-wide-frame">
      <Table {...args}>
        <TableHeader>
          <TableRow>
            {wideColumns.map(column => <TableHead key={column} className="pf-story-data-grid-table-no-wrap">
                {column}
              </TableHead>)}
          </TableRow>
        </TableHeader>
        <TableBody>
          {wideRows.map(row => <TableRow key={row}>
              {wideColumns.map(column => <TableCell key={column} className="pf-story-data-grid-table-no-wrap">
                  {row} / {column}
                </TableCell>)}
            </TableRow>)}
        </TableBody>
      </Table>
    </div>
}`,...x.parameters?.docs?.source},description:{story:"Many columns: the container scrolls horizontally.",...x.parameters?.docs?.description}}};const Q=["DetailTable","SettingsRoles","SettingsRolesError","CdiReviewTable","CdiReviewTableEmpty","GroupedDocumentRows","DataTableContainer","AllParts","SelectedRow","Overflowing"];export{h as AllParts,p as CdiReviewTable,g as CdiReviewTableEmpty,y as DataTableContainer,c as DetailTable,T as GroupedDocumentRows,x as Overflowing,f as SelectedRow,b as SettingsRoles,m as SettingsRolesError,Q as __namedExportsOrder,K as default};
