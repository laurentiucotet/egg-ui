import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{S as u}from"./SidebarMenuItem-D4kpUH_K.js";import{L as p,S as q,B as H}from"./settings-B1Gtl-yw.js";import{U as F,a as b}from"./users-CvBZUzOs.js";import"./iframe-WQlADSLx.js";import"./preload-helper-C1FmrZbK.js";import"./index-Csbs7JK-.js";import"./createLucideIcon-BZ9_-mRg.js";const{expect:x,userEvent:U,within:W}=__STORYBOOK_MODULE_TEST__,$={title:"UI/List Items/SidebarMenuItem",component:u,tags:["autodocs"],argTypes:{className:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},icon:{control:"text"},action:{control:"text"},label:{control:"text"},expandable:{control:"boolean"},open:{control:"boolean"}}},n={args:{label:"Menu Item",icon:e.jsx(p,{size:18})}},s={args:{label:"Active Item",icon:e.jsx(p,{size:18}),active:!0}},r={args:{label:"Disabled Item",icon:e.jsx(F,{size:18}),disabled:!0}},o={args:{label:"Item with Action",icon:e.jsx(H,{size:18}),action:e.jsx("span",{className:"ml-auto text-xs bg-blue-500 text-white rounded-full px-1.5 py-0.5",children:"3"})}},c={args:{label:"Parent Item",icon:e.jsx(p,{size:18}),expandable:!0},play:async({canvasElement:d})=>{const a=W(d),t=a.getByText("Parent Item");x(a.queryByText("Child 1")).toBeNull(),await U.click(t),await x(a.getByText("Child 1")).toBeInTheDocument()}},i={args:{label:"Parent Item",icon:e.jsx(p,{size:18}),expandable:!0,open:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(u,{icon:e.jsx(b,{size:14}),label:"Child 1"}),e.jsx(u,{icon:e.jsx(b,{size:14}),label:"Child 2"})]})}},l={args:{label:"Sub-item",icon:e.jsx(b,{size:14})}},m={args:{label:"Interactive Item",icon:e.jsx(q,{size:18})},play:async({canvasElement:d})=>{const t=W(d).getByText("Interactive Item");await U.click(t),await x(t).toHaveClass("bg-[var(--color-primary)]")}};var g,h,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Menu Item',
    icon: <LayoutDashboard size={18} />
  }
}`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var I,y,z;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Active Item',
    icon: <LayoutDashboard size={18} />,
    active: true
  }
}`,...(z=(y=s.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var S,C,j;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Item',
    icon: <Users size={18} />,
    disabled: true
  }
}`,...(j=(C=r.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var B,w,E;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Item with Action',
    icon: <Bell size={18} />,
    action: <span className="ml-auto text-xs bg-blue-500 text-white rounded-full px-1.5 py-0.5">3</span>
  }
}`,...(E=(w=o.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var T,D,f;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Parent Item',
    icon: <LayoutDashboard size={18} />,
    expandable: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const parent = canvas.getByText('Parent Item');
    // initially children should not be visible
    expect(canvas.queryByText('Child 1')).toBeNull();
    // click to expand
    await userEvent.click(parent);
    await expect(canvas.getByText('Child 1')).toBeInTheDocument();
  }
}`,...(f=(D=c.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};var A,L,_;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Parent Item',
    icon: <LayoutDashboard size={18} />,
    expandable: true,
    open: true,
    children: <>\r
        <SidebarMenuItem icon={<ChevronRight size={14} />} label="Child 1" />\r
        <SidebarMenuItem icon={<ChevronRight size={14} />} label="Child 2" />\r
      </>
  }
}`,...(_=(L=i.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var M,O,k;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Sub-item',
    icon: <ChevronRight size={14} />
  }
}`,...(k=(O=l.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var P,R,N;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Interactive Item',
    icon: <Settings size={18} />
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const item = canvas.getByText('Interactive Item');

    // Test clicking on the menu item
    await userEvent.click(item);
    await expect(item).toHaveClass('bg-[var(--color-primary)]');
  }
}`,...(N=(R=m.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};const ee=["Default","Active","Disabled","WithAction","ExpandableCollapsed","ExpandableOpen","WithChevron","Interactive"];export{s as Active,n as Default,r as Disabled,c as ExpandableCollapsed,i as ExpandableOpen,m as Interactive,o as WithAction,l as WithChevron,ee as __namedExportsOrder,$ as default};
