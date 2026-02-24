import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{R as $}from"./iframe-WQlADSLx.js";import{a as l,b as d,c,S as r,d as z}from"./SidebarMenuItem-D4kpUH_K.js";import{S as s}from"./SidebarMenuGroup-kFCRZJ64.js";import{M as Y,C as q,S as I}from"./search-Ey2_f9VZ.js";import{L as b,S as f,B as ee}from"./settings-B1Gtl-yw.js";import{U as x,a as n}from"./users-CvBZUzOs.js";import{a as m,F as y}from"./folder-C7UEUh-l.js";import{X as J}from"./x-DgN5ph3h.js";import"./preload-helper-C1FmrZbK.js";import"./index-Csbs7JK-.js";import"./createLucideIcon-BZ9_-mRg.js";const{expect:u,userEvent:N,within:V}=__STORYBOOK_MODULE_TEST__,xe={title:"UI/SidebarMenu",component:l,tags:["autodocs"],argTypes:{className:{control:"text"},size:{control:{type:"select"},options:["sm","md","lg"]},variant:{control:{type:"select"},options:["default","inset"]},collapsed:{control:"boolean"}}},p={args:{size:"md",variant:"default"},render:a=>e.jsxs(l,{...a,children:[e.jsx(d,{children:e.jsxs("div",{className:"px-3 py-2",children:[e.jsx("h2",{className:"text-lg font-semibold text-(--color-text-primary) dark:text-(--color-neutral-100)",children:"Menu"}),e.jsx("p",{className:"text-sm text-(--color-text-secondary) dark:text-(--color-neutral-400)",children:"Navigation"})]})}),e.jsxs(c,{children:[e.jsxs(s,{title:"Overview",children:[e.jsx(r,{icon:e.jsx(b,{size:18}),label:"Dashboard"}),e.jsx(r,{icon:e.jsx(q,{size:18}),label:"Activity"})]}),e.jsxs(s,{title:"Management",children:[e.jsx(r,{icon:e.jsx(x,{size:18}),label:"Users"}),e.jsx(r,{icon:e.jsx(m,{size:18}),label:"Projects"}),e.jsx(r,{icon:e.jsx(y,{size:18}),label:"Documents"})]})]}),e.jsx(z,{children:e.jsx("div",{className:"px-3 py-2",children:e.jsx(r,{icon:e.jsx(f,{size:18}),label:"Settings"})})})]})},S={args:{size:"md",variant:"default"},render:a=>e.jsxs(l,{...a,children:[e.jsx(d,{children:e.jsx("div",{className:"px-3 py-2",children:e.jsx("h2",{className:"text-lg font-semibold text-(--color-text-primary) dark:text-(--color-neutral-100)",children:"Menu"})})}),e.jsx(c,{children:e.jsx(s,{title:"Expandable",children:e.jsxs(r,{icon:e.jsx(b,{size:18}),label:"Parent",expandable:!0,children:[e.jsx(r,{icon:e.jsx(n,{size:14}),label:"Child 1"}),e.jsx(r,{icon:e.jsx(n,{size:14}),label:"Child 2"})]})})})]})},j={args:{size:"md",variant:"default"},play:async({canvasElement:a})=>{const o=V(a),t=o.getByText("Dashboard");await N.click(t),await u(t).toHaveClass("bg-(--color-primary)"),await u(t).toHaveClass("border-l-4");const i=o.getByText("Users");await N.click(i),await u(i).toHaveClass("bg-(--color-primary)"),await u(i).toHaveClass("border-l-4")},render:a=>e.jsxs(l,{...a,children:[e.jsx(d,{children:e.jsx("div",{className:"px-3 py-2",children:e.jsx("h2",{className:"text-lg font-semibold text-(--color-text-primary) dark:text-(--color-neutral-100)",children:"Menu"})})}),e.jsxs(c,{children:[e.jsxs(s,{title:"Overview",children:[e.jsx(r,{icon:e.jsx(b,{size:18}),label:"Dashboard"}),e.jsx(r,{icon:e.jsx(q,{size:18}),label:"Activity"})]}),e.jsxs(s,{title:"Management",children:[e.jsx(r,{icon:e.jsx(x,{size:18}),label:"Users"}),e.jsx(r,{icon:e.jsx(m,{size:18}),label:"Projects"})]})]})]})},h={args:{size:"sm",variant:"inset"},render:a=>e.jsxs(l,{...a,children:[e.jsx(d,{children:e.jsx("div",{className:"px-2 py-2",children:e.jsxs("div",{className:"relative",children:[e.jsx(I,{className:"absolute left-2 top-1.5 h-4 w-4 text-(--color-text-secondary) dark:text-(--color-neutral-400)"}),e.jsx("input",{type:"text",placeholder:"Search...",className:"w-full rounded-md border border-(--color-border) bg-transparent px-8 py-1.5 text-sm outline-none focus:ring-2 focus:ring-(--color-primary) dark:border-neutral-700 dark:text-(--color-neutral-100)"})]})})}),e.jsxs(c,{children:[e.jsxs(s,{title:"Quick Actions",children:[e.jsx(r,{icon:e.jsx(ee,{size:18}),label:"Notifications",action:e.jsx("span",{className:"ml-auto text-xs bg-(--color-primary) text-white rounded-full px-1.5 py-0.5",children:"3"})}),e.jsx(r,{icon:e.jsx(I,{size:18}),label:"Search"})]}),e.jsxs(s,{title:"Recent",children:[e.jsx(r,{icon:e.jsx(y,{size:18}),label:"Report.pdf"}),e.jsx(r,{icon:e.jsx(y,{size:18}),label:"Notes.txt"})]})]}),e.jsx(z,{children:e.jsx("div",{className:"px-2 py-2",children:e.jsx(r,{icon:e.jsx(f,{size:18}),label:"Settings"})})})]})},M={args:{size:"md",variant:"default"},render:a=>e.jsxs(l,{...a,children:[e.jsx(d,{children:e.jsxs("div",{className:"flex items-center justify-between px-3 py-2",children:[e.jsx("h2",{className:"text-lg font-semibold text-(--color-text-primary) dark:text-(--color-neutral-100)",children:"Sidebar"}),e.jsx("button",{className:"p-1 rounded hover:bg-(--color-bg-tertiary) dark:hover:border-neutral-700",children:e.jsx(Y,{size:18,className:"text-(--color-text-primary) dark:text-(--color-neutral-100)"})})]})}),e.jsxs(c,{children:[e.jsxs(s,{title:"Dashboard",children:[e.jsx(r,{icon:e.jsx(b,{size:18}),label:"Overview",active:!0}),e.jsx(r,{icon:e.jsx(x,{size:18}),label:"Team"})]}),e.jsxs(s,{title:"Projects",children:[e.jsx(r,{icon:e.jsx(m,{size:18}),label:"All Projects"}),e.jsx(r,{icon:e.jsx(n,{size:14}),label:"Active"}),e.jsx(r,{icon:e.jsx(n,{size:14}),label:"Completed"})]}),e.jsx(s,{title:"Settings",children:e.jsx(r,{icon:e.jsx(f,{size:18}),label:"Preferences"})})]}),e.jsx(z,{children:e.jsx("div",{className:"px-3 py-2",children:e.jsx(r,{icon:e.jsx(J,{size:18}),label:"Close"})})})]})},v={args:{size:"md",variant:"default"},play:async({canvasElement:a})=>{const o=V(a),t=o.getByRole("button"),i=o.getByRole("navigation");await u(i).not.toHaveClass("w-20"),await N.click(t),await u(i).toHaveClass("w-20")},render:a=>{const o=()=>{const[t,i]=$.useState(!1);return e.jsxs(l,{...a,collapsed:t,children:[e.jsx(d,{children:e.jsxs("div",{className:"flex items-center justify-between px-3 py-2",children:[e.jsx("h2",{className:"text-lg font-semibold text-(--color-text-primary) dark:text-(--color-neutral-100)",children:"Sidebar"}),e.jsx("button",{onClick:()=>i(Z=>!Z),className:"p-1 rounded hover:bg-(--color-bg-tertiary) dark:hover:bg-neutral-700",children:t?e.jsx(n,{size:18,className:"text-(--color-text-primary) dark:text-(--color-neutral-100)"}):e.jsx(Y,{size:18,className:"text-(--color-text-primary) dark:text-(--color-neutral-100)"})})]})}),e.jsxs(c,{children:[e.jsxs(s,{title:"Dashboard",children:[e.jsx(r,{icon:e.jsx(b,{size:18}),label:"Overview",active:!0}),e.jsx(r,{icon:e.jsx(x,{size:18}),label:"Team"})]}),e.jsxs(s,{title:"Projects",children:[e.jsx(r,{icon:e.jsx(m,{size:18}),label:"All Projects"}),e.jsx(r,{icon:e.jsx(n,{size:14}),label:"Active"}),e.jsx(r,{icon:e.jsx(n,{size:14}),label:"Completed"})]}),e.jsx(s,{title:"Settings",children:e.jsx(r,{icon:e.jsx(f,{size:18}),label:"Preferences"})})]}),e.jsx(z,{children:e.jsx("div",{className:t?"px-0 py-2":"px-3 py-2",children:e.jsx(r,{icon:e.jsx(J,{size:18}),label:"Close"})})})]})};return e.jsx(o,{})}},g={args:{size:"md",variant:"default"},render:a=>e.jsxs(l,{...a,children:[e.jsx(d,{children:e.jsx("div",{className:"px-3 py-2",children:e.jsx("h2",{className:"text-lg font-semibold text-(--color-text-primary) dark:text-(--color-neutral-100)",children:"Menu"})})}),e.jsx(c,{children:e.jsxs(s,{title:"Features",children:[e.jsx(r,{icon:e.jsx(b,{size:18}),label:"Dashboard"}),e.jsx(r,{icon:e.jsx(x,{size:18}),label:"Users",disabled:!0}),e.jsx(r,{icon:e.jsx(m,{size:18}),label:"Projects"}),e.jsx(r,{icon:e.jsx(y,{size:18}),label:"Documents",disabled:!0})]})})]})};var C,k,w;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'default'
  },
  render: args => <SidebarMenu {...args}>\r
      <SidebarMenuHeader>\r
        <div className="px-3 py-2">\r
          <h2 className="text-lg font-semibold text-(--color-text-primary) dark:text-(--color-neutral-100)">\r
            Menu\r
          </h2>\r
          <p className="text-sm text-(--color-text-secondary) dark:text-(--color-neutral-400)">\r
            Navigation\r
          </p>\r
        </div>\r
      </SidebarMenuHeader>\r
      <SidebarMenuList>\r
        <SidebarMenuGroup title="Overview">\r
          <SidebarMenuItem icon={<LayoutDashboard size={18} />} label="Dashboard" />\r
          <SidebarMenuItem icon={<Clock size={18} />} label="Activity" />\r
        </SidebarMenuGroup>\r
        <SidebarMenuGroup title="Management">\r
          <SidebarMenuItem icon={<Users size={18} />} label="Users" />\r
          <SidebarMenuItem icon={<Folder size={18} />} label="Projects" />\r
          <SidebarMenuItem icon={<FileText size={18} />} label="Documents" />\r
        </SidebarMenuGroup>\r
      </SidebarMenuList>\r
      <SidebarMenuFooter>\r
        <div className="px-3 py-2">\r
          <SidebarMenuItem icon={<Settings size={18} />} label="Settings" />\r
        </div>\r
      </SidebarMenuFooter>\r
    </SidebarMenu>
}`,...(w=(k=p.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var G,D,H;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'default'
  },
  render: args => <SidebarMenu {...args}>\r
      <SidebarMenuHeader>\r
        <div className="px-3 py-2">\r
          <h2 className="text-lg font-semibold text-(--color-text-primary) dark:text-(--color-neutral-100)">\r
            Menu\r
          </h2>\r
        </div>\r
      </SidebarMenuHeader>\r
      <SidebarMenuList>\r
        <SidebarMenuGroup title="Expandable">\r
          <SidebarMenuItem icon={<LayoutDashboard size={18} />} label="Parent" expandable>\r
            <SidebarMenuItem icon={<ChevronRight size={14} />} label="Child 1" />\r
            <SidebarMenuItem icon={<ChevronRight size={14} />} label="Child 2" />\r
          </SidebarMenuItem>\r
        </SidebarMenuGroup>\r
      </SidebarMenuList>\r
    </SidebarMenu>
}`,...(H=(D=S.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var F,L,R;j.parameters={...j.parameters,docs:{...(F=j.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'default'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Test clicking on a menu item
    const dashboardItem = canvas.getByText('Dashboard');
    await userEvent.click(dashboardItem);
    await expect(dashboardItem).toHaveClass('bg-(--color-primary)');
    await expect(dashboardItem).toHaveClass('border-l-4');

    // Test clicking on another item
    const usersItem = canvas.getByText('Users');
    await userEvent.click(usersItem);
    await expect(usersItem).toHaveClass('bg-(--color-primary)');
    await expect(usersItem).toHaveClass('border-l-4');
  },
  render: args => <SidebarMenu {...args}>\r
      <SidebarMenuHeader>\r
        <div className="px-3 py-2">\r
          <h2 className="text-lg font-semibold text-(--color-text-primary) dark:text-(--color-neutral-100)">\r
            Menu\r
          </h2>\r
        </div>\r
      </SidebarMenuHeader>\r
      <SidebarMenuList>\r
        <SidebarMenuGroup title="Overview">\r
          <SidebarMenuItem icon={<LayoutDashboard size={18} />} label="Dashboard" />\r
          <SidebarMenuItem icon={<Clock size={18} />} label="Activity" />\r
        </SidebarMenuGroup>\r
        <SidebarMenuGroup title="Management">\r
          <SidebarMenuItem icon={<Users size={18} />} label="Users" />\r
          <SidebarMenuItem icon={<Folder size={18} />} label="Projects" />\r
        </SidebarMenuGroup>\r
      </SidebarMenuList>\r
    </SidebarMenu>
}`,...(R=(L=j.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var P,E,T;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    variant: 'inset'
  },
  render: args => <SidebarMenu {...args}>\r
      <SidebarMenuHeader>\r
        <div className="px-2 py-2">\r
          <div className="relative">\r
            <Search className="absolute left-2 top-1.5 h-4 w-4 text-(--color-text-secondary) dark:text-(--color-neutral-400)" />\r
            <input type="text" placeholder="Search..." className="w-full rounded-md border border-(--color-border) bg-transparent px-8 py-1.5 text-sm outline-none focus:ring-2 focus:ring-(--color-primary) dark:border-neutral-700 dark:text-(--color-neutral-100)" />\r
          </div>\r
        </div>\r
      </SidebarMenuHeader>\r
      <SidebarMenuList>\r
        <SidebarMenuGroup title="Quick Actions">\r
          <SidebarMenuItem icon={<Bell size={18} />} label="Notifications" action={<span className="ml-auto text-xs bg-(--color-primary) text-white rounded-full px-1.5 py-0.5">3</span>} />\r
          <SidebarMenuItem icon={<Search size={18} />} label="Search" />\r
        </SidebarMenuGroup>\r
        <SidebarMenuGroup title="Recent">\r
          <SidebarMenuItem icon={<FileText size={18} />} label="Report.pdf" />\r
          <SidebarMenuItem icon={<FileText size={18} />} label="Notes.txt" />\r
        </SidebarMenuGroup>\r
      </SidebarMenuList>\r
      <SidebarMenuFooter>\r
        <div className="px-2 py-2">\r
          <SidebarMenuItem icon={<Settings size={18} />} label="Settings" />\r
        </div>\r
      </SidebarMenuFooter>\r
    </SidebarMenu>
}`,...(T=(E=h.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var A,U,O;M.parameters={...M.parameters,docs:{...(A=M.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'default'
  },
  render: args => <SidebarMenu {...args}>\r
      <SidebarMenuHeader>\r
        <div className="flex items-center justify-between px-3 py-2">\r
          <h2 className="text-lg font-semibold text-(--color-text-primary) dark:text-(--color-neutral-100)">\r
            Sidebar\r
          </h2>\r
          <button className="p-1 rounded hover:bg-(--color-bg-tertiary) dark:hover:border-neutral-700">\r
            <Menu size={18} className="text-(--color-text-primary) dark:text-(--color-neutral-100)" />\r
          </button>\r
        </div>\r
      </SidebarMenuHeader>\r
      <SidebarMenuList>\r
        <SidebarMenuGroup title="Dashboard">\r
          <SidebarMenuItem icon={<LayoutDashboard size={18} />} label="Overview" active />\r
          <SidebarMenuItem icon={<Users size={18} />} label="Team" />\r
        </SidebarMenuGroup>\r
        <SidebarMenuGroup title="Projects">\r
          <SidebarMenuItem icon={<Folder size={18} />} label="All Projects" />\r
          <SidebarMenuItem icon={<ChevronRight size={14} />} label="Active" />\r
          <SidebarMenuItem icon={<ChevronRight size={14} />} label="Completed" />\r
        </SidebarMenuGroup>\r
        <SidebarMenuGroup title="Settings">\r
          <SidebarMenuItem icon={<Settings size={18} />} label="Preferences" />\r
        </SidebarMenuGroup>\r
      </SidebarMenuList>\r
      <SidebarMenuFooter>\r
        <div className="px-3 py-2">\r
          <SidebarMenuItem icon={<X size={18} />} label="Close" />\r
        </div>\r
      </SidebarMenuFooter>\r
    </SidebarMenu>
}`,...(O=(U=M.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};var B,_,W;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'default'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('button');
    const nav = canvas.getByRole('navigation');
    // initially expanded
    await expect(nav).not.toHaveClass('w-20');
    await userEvent.click(toggle);
    // now collapsed width class applied
    await expect(nav).toHaveClass('w-20');
  },
  render: args => {
    const Example: React.FC<typeof args> = () => {
      const [collapsed, setCollapsed] = React.useState(false);
      return <SidebarMenu {...args} collapsed={collapsed}>\r
          <SidebarMenuHeader>\r
            <div className="flex items-center justify-between px-3 py-2">\r
              <h2 className="text-lg font-semibold text-(--color-text-primary) dark:text-(--color-neutral-100)">\r
                Sidebar\r
              </h2>\r
              <button onClick={() => setCollapsed(c => !c)} className="p-1 rounded hover:bg-(--color-bg-tertiary) dark:hover:bg-neutral-700">\r
                {collapsed ? <ChevronRight size={18} className="text-(--color-text-primary) dark:text-(--color-neutral-100)" /> : <Menu size={18} className="text-(--color-text-primary) dark:text-(--color-neutral-100)" />}\r
              </button>\r
            </div>\r
          </SidebarMenuHeader>\r
          <SidebarMenuList>\r
            <SidebarMenuGroup title="Dashboard">\r
              <SidebarMenuItem icon={<LayoutDashboard size={18} />} label="Overview" active />\r
              <SidebarMenuItem icon={<Users size={18} />} label="Team" />\r
            </SidebarMenuGroup>\r
            <SidebarMenuGroup title="Projects">\r
              <SidebarMenuItem icon={<Folder size={18} />} label="All Projects" />\r
              <SidebarMenuItem icon={<ChevronRight size={14} />} label="Active" />\r
              <SidebarMenuItem icon={<ChevronRight size={14} />} label="Completed" />\r
            </SidebarMenuGroup>\r
            <SidebarMenuGroup title="Settings">\r
              <SidebarMenuItem icon={<Settings size={18} />} label="Preferences" />\r
            </SidebarMenuGroup>\r
          </SidebarMenuList>\r
          <SidebarMenuFooter>\r
            <div className={collapsed ? 'px-0 py-2' : 'px-3 py-2'}>\r
              <SidebarMenuItem icon={<X size={18} />} label="Close" />\r
            </div>\r
          </SidebarMenuFooter>\r
        </SidebarMenu>;
    };
    return <Example />;
  }
}`,...(W=(_=v.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var X,Q,K;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'default'
  },
  render: args => <SidebarMenu {...args}>\r
      <SidebarMenuHeader>\r
        <div className="px-3 py-2">\r
          <h2 className="text-lg font-semibold text-(--color-text-primary) dark:text-(--color-neutral-100)">\r
            Menu\r
          </h2>\r
        </div>\r
      </SidebarMenuHeader>\r
      <SidebarMenuList>\r
        <SidebarMenuGroup title="Features">\r
          <SidebarMenuItem icon={<LayoutDashboard size={18} />} label="Dashboard" />\r
          <SidebarMenuItem icon={<Users size={18} />} label="Users" disabled />\r
          <SidebarMenuItem icon={<Folder size={18} />} label="Projects" />\r
          <SidebarMenuItem icon={<FileText size={18} />} label="Documents" disabled />\r
        </SidebarMenuGroup>\r
      </SidebarMenuList>\r
    </SidebarMenu>
}`,...(K=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:K.source}}};const me=["Default","WithExpandableItems","Interactive","WithSearchAndActions","CollapsibleGroups","CollapsedMenu","DisabledItems"];export{v as CollapsedMenu,M as CollapsibleGroups,p as Default,g as DisabledItems,j as Interactive,S as WithExpandableItems,h as WithSearchAndActions,me as __namedExportsOrder,xe as default};
