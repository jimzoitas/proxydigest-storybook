import{j as p}from"./iframe-nhB53rPD.js";import{T as m}from"./token-explorer-DDPopLUd.js";import{t as o,a as k}from"./token-data-BMpiapXH.js";import"./preload-helper-PPVm8Dsz.js";import"./token-specimen-esQVooIH.js";/* empty css                       */import"./copy-BeMWaBMA.js";const{expect:t,userEvent:n,within:i}=__STORYBOOK_MODULE_TEST__,f={title:"Migration audit/Token registry",id:"migration-audit-token-registry-all-tokens",component:m,tags:["autodocs"],args:{initialTier:"all"},parameters:{layout:"fullscreen",controls:{disable:!0},docs:{page:()=>p.jsx(m,{initialTier:"all"})}}},r={},c={name:"Search and category anchors",play:async({canvasElement:a})=>{const e=i(a);await t(e.queryByRole("button",{name:"Previous tokens"})).not.toBeInTheDocument(),await t(e.queryByRole("button",{name:"Next tokens"})).not.toBeInTheDocument(),await t(a.querySelectorAll(".pf-token-card")).toHaveLength(o.length),await t(e.getByRole("button",{name:"All tokens"})).toHaveAttribute("aria-pressed","true");const s=i(e.getByRole("navigation",{name:"Token categories"})).getAllByRole("link")[1],l=s.getAttribute("href")?.slice(1);if(!l)throw new Error("Category navigation must target a section heading");await n.click(s),await t(document.getElementById(l)).toHaveFocus(),await t(a.querySelectorAll(".pf-token-card")).toHaveLength(o.length),await n.click(e.getByRole("button",{name:"Groups"})),await t(a.querySelectorAll(".pf-token-card")).toHaveLength(o.filter(y=>y.tier==="group").length),await n.type(e.getByRole("textbox",{name:"Search tokens"}),"--group-trigger-color-fill-background"),await n.click(e.getByRole("button",{name:"Inspect --group-trigger-color-fill-background"}));const g=i(e.getByRole("complementary",{name:"Token details"})),u=k.get("--group-trigger-color-fill-background")?.semantic;if(!u)throw new Error("Trigger background must reference a canonical semantic choice");await t(g.getByRole("button",{name:u})).toBeVisible(),await t(g.getByText("Utility mapping")).toBeVisible(),await n.clear(e.getByRole("textbox",{name:"Search tokens"})),await n.type(e.getByRole("textbox",{name:"Search tokens"}),"no-such-source-token"),await t(e.getByText("No matching tokens")).toBeVisible(),await n.click(e.getByRole("button",{name:"Clear filters"})),await t(e.queryByText("No matching tokens")).not.toBeInTheDocument(),await n.click(e.getByRole("button",{name:"All tokens"})),await t(a.querySelectorAll(".pf-token-card")).toHaveLength(o.length)}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Search and category anchors",
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByRole("button", {
      name: "Previous tokens"
    })).not.toBeInTheDocument();
    await expect(canvas.queryByRole("button", {
      name: "Next tokens"
    })).not.toBeInTheDocument();
    await expect(canvasElement.querySelectorAll(".pf-token-card")).toHaveLength(tokenRows.length);
    await expect(canvas.getByRole("button", {
      name: "All tokens"
    })).toHaveAttribute("aria-pressed", "true");
    const categories = within(canvas.getByRole("navigation", {
      name: "Token categories"
    }));
    const category = categories.getAllByRole("link")[1];
    const targetId = category.getAttribute("href")?.slice(1);
    if (!targetId) throw new Error("Category navigation must target a section heading");
    await userEvent.click(category);
    await expect(document.getElementById(targetId)).toHaveFocus();
    await expect(canvasElement.querySelectorAll(".pf-token-card")).toHaveLength(tokenRows.length);
    await userEvent.click(canvas.getByRole("button", {
      name: "Groups"
    }));
    await expect(canvasElement.querySelectorAll(".pf-token-card")).toHaveLength(tokenRows.filter(row => row.tier === "group").length);
    await userEvent.type(canvas.getByRole("textbox", {
      name: "Search tokens"
    }), "--group-trigger-color-fill-background");
    await userEvent.click(canvas.getByRole("button", {
      name: "Inspect --group-trigger-color-fill-background"
    }));
    const details = within(canvas.getByRole("complementary", {
      name: "Token details"
    }));
    const semantic = tokenByName.get("--group-trigger-color-fill-background")?.semantic;
    if (!semantic) throw new Error("Trigger background must reference a canonical semantic choice");
    await expect(details.getByRole("button", {
      name: semantic
    })).toBeVisible();
    await expect(details.getByText("Utility mapping")).toBeVisible();
    await userEvent.clear(canvas.getByRole("textbox", {
      name: "Search tokens"
    }));
    await userEvent.type(canvas.getByRole("textbox", {
      name: "Search tokens"
    }), "no-such-source-token");
    await expect(canvas.getByText("No matching tokens")).toBeVisible();
    await userEvent.click(canvas.getByRole("button", {
      name: "Clear filters"
    }));
    await expect(canvas.queryByText("No matching tokens")).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "All tokens"
    }));
    await expect(canvasElement.querySelectorAll(".pf-token-card")).toHaveLength(tokenRows.length);
  }
}`,...c.parameters?.docs?.source}}};const T=["Browse","SearchAndPaginate"];export{r as Browse,c as SearchAndPaginate,T as __namedExportsOrder,f as default};
