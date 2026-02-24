import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{S as a}from"./SidebarMenuGroup-kFCRZJ64.js";import{S as r}from"./SidebarMenuItem-D4kpUH_K.js";import{U as j,a as n}from"./users-CvBZUzOs.js";import{a as g,F as M}from"./folder-C7UEUh-l.js";import"./iframe-WQlADSLx.js";import"./preload-helper-C1FmrZbK.js";import"./index-Csbs7JK-.js";import"./createLucideIcon-BZ9_-mRg.js";const v={title:"UI/SidebarMenu/SidebarMenuGroup",component:a,tags:["autodocs"],argTypes:{className:{control:"text"},title:{control:"text"}}},t={args:{title:"Section Title"},render:s=>e.jsxs(a,{...s,children:[e.jsx(r,{icon:e.jsx(j,{size:18}),label:"Users"}),e.jsx(r,{icon:e.jsx(g,{size:18}),label:"Projects"}),e.jsx(r,{icon:e.jsx(M,{size:18}),label:"Documents"})]})},o={args:{},render:s=>e.jsxs(a,{...s,children:[e.jsx(r,{icon:e.jsx(j,{size:18}),label:"Users"}),e.jsx(r,{icon:e.jsx(g,{size:18}),label:"Projects"})]})},i={args:{title:"Custom Section"},render:s=>e.jsxs(a,{...s,children:[e.jsx(r,{icon:e.jsx(n,{size:14}),label:"Active"}),e.jsx(r,{icon:e.jsx(n,{size:14}),label:"Completed"})]})};var l,c,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Section Title'
  },
  render: args => <SidebarMenuGroup {...args}>\r
      <SidebarMenuItem icon={<Users size={18} />} label="Users" />\r
      <SidebarMenuItem icon={<Folder size={18} />} label="Projects" />\r
      <SidebarMenuItem icon={<FileText size={18} />} label="Documents" />\r
    </SidebarMenuGroup>
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,d,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {},
  render: args => <SidebarMenuGroup {...args}>\r
      <SidebarMenuItem icon={<Users size={18} />} label="Users" />\r
      <SidebarMenuItem icon={<Folder size={18} />} label="Projects" />\r
    </SidebarMenuGroup>
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var b,S,x;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: 'Custom Section'
  },
  render: args => <SidebarMenuGroup {...args}>\r
      <SidebarMenuItem icon={<ChevronRight size={14} />} label="Active" />\r
      <SidebarMenuItem icon={<ChevronRight size={14} />} label="Completed" />\r
    </SidebarMenuGroup>
}`,...(x=(S=i.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};const D=["Default","WithoutTitle","WithCustomTitle"];export{t as Default,i as WithCustomTitle,o as WithoutTitle,D as __namedExportsOrder,v as default};
