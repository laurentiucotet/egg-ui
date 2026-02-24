import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as N}from"./iframe-WQlADSLx.js";import{t as j}from"./index-Csbs7JK-.js";import{B as l}from"./Button-7OL6MdZ0.js";import"./preload-helper-C1FmrZbK.js";const D=j({base:["fixed inset-0","bg-black/50","dark:bg-black/70","z-[var(--z-modal-backdrop)]"]}),q=j({base:["bg-[var(--color-bg-primary)]","overflow-hidden","shadow-[var(--shadow-xl)]","z-[var(--z-modal)]","rounded-[var(--radius-theme)]"],variants:{size:{sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg"}},defaultVariants:{size:"sm"}}),d=({open:t,title:a,description:n,header:r,children:o,confirmLabel:B="Confirm",cancelLabel:R="Cancel",size:k="sm",onConfirm:z,onCancel:p})=>t?e.jsxs("div",{className:"fixed inset-0 z-[var(--z-modal)] flex items-center justify-center",style:{fontFamily:"var(--font-sans)"},children:[e.jsx("div",{className:D(),onClick:p,style:{backgroundColor:"rgba(0, 0, 0, 0.5)"}}),e.jsxs("div",{className:q({size:k}),role:"dialog","aria-modal":"true",style:{borderRadius:"var(--radius-theme)"},children:[e.jsxs("div",{className:"p-[var(--spacing-4)]",style:{padding:"var(--spacing-4)"},children:[r||(a?e.jsx("h2",{className:"text-lg font-semibold",style:{color:"var(--color-text-primary)",fontSize:"var(--text-lg)",fontWeight:"var(--font-weight-semibold)",lineHeight:"var(--line-height-snug)"},children:a}):null),o?e.jsx("div",{className:"mt-[var(--spacing-2)]",style:{marginTop:"var(--spacing-2)"},children:o}):n?e.jsx("p",{className:"mt-[var(--spacing-2)] text-sm",style:{color:"var(--color-text-secondary)",fontSize:"var(--text-sm)",lineHeight:"var(--line-height-normal)",marginTop:"var(--spacing-2)"},children:n}):null]}),e.jsxs("div",{className:"flex justify-end gap-[var(--spacing-2)] p-[var(--spacing-4)] bg-[var(--color-bg-secondary)]",style:{padding:"var(--spacing-4)",gap:"var(--spacing-2)",backgroundColor:"var(--color-bg-secondary)",display:"flex",justifyContent:"flex-end"},children:[e.jsx(l,{intent:"secondary",label:R,onClick:p,size:"sm"}),e.jsx(l,{intent:"primary",label:B,onClick:z,size:"sm"})]})]})]}):null;d.__docgenInfo={description:"",methods:[],displayName:"ConfirmDialog",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!1,tsType:{name:"string"},description:"optional legacy title, use header for custom content"},description:{required:!1,tsType:{name:"string"},description:"optional legacy description, use children for custom body"},header:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},confirmLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Confirm'",computed:!1}},cancelLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Cancel'",computed:!1}},size:{required:!1,tsType:{name:"VariantProps['size']",raw:"VariantProps<typeof dialog>['size']"},description:"",defaultValue:{value:"'sm'",computed:!1}},onConfirm:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{expect:u,userEvent:g,within:E}=__STORYBOOK_MODULE_TEST__,V={title:"UI/ConfirmDialog",component:d,tags:["autodocs"],args:{open:!1,title:"Delete Item",description:"Are you sure you want to delete this item?",confirmLabel:"Delete",cancelLabel:"Cancel"}},m=t=>{const[a,n]=N.useState(t.open);return e.jsxs(e.Fragment,{children:[e.jsx(l,{label:"Open Dialog",onClick:()=>n(!0)}),e.jsx(d,{...t,open:a,onConfirm:()=>n(!1),onCancel:()=>n(!1)})]})},s={render:m,args:{onConfirm:()=>{},onCancel:()=>{}}},i={render:m,args:{onConfirm:()=>{},onCancel:()=>{}},play:async({canvasElement:t})=>{const a=E(t),n=a.getByRole("button",{name:/open dialog/i});await g.click(n);const r=await a.findByRole("dialog");await u(r).toBeInTheDocument();const o=a.getByRole("button",{name:/delete/i});await g.click(o),await u(r).not.toBeInTheDocument()}},c={render:m,args:{onConfirm:()=>{},onCancel:()=>{},header:e.jsx("div",{className:"text-xl font-bold",children:"Custom Header"}),children:e.jsx("div",{children:e.jsx("p",{children:"This is the body passed as children. You can put any content here."})}),confirmLabel:"OK",cancelLabel:"Back"}};var f,v,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: Template,
  args: {
    onConfirm: () => {},
    onCancel: () => {}
  }
}`,...(y=(v=s.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var h,x,b;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: Template,
  args: {
    onConfirm: () => {},
    onCancel: () => {}
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button', {
      name: /open dialog/i
    });
    await userEvent.click(openButton);
    const dialog = await canvas.findByRole('dialog');
    await expect(dialog).toBeInTheDocument();
    const confirm = canvas.getByRole('button', {
      name: /delete/i
    });
    await userEvent.click(confirm);
    await expect(dialog).not.toBeInTheDocument();
  }
}`,...(b=(x=i.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var C,w,T;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: Template,
  args: {
    onConfirm: () => {},
    onCancel: () => {},
    header: <div className="text-xl font-bold">Custom Header</div>,
    children: <div>\r
        <p>This is the body passed as children. You can put any content here.</p>\r
      </div>,
    confirmLabel: 'OK',
    cancelLabel: 'Back'
  }
}`,...(T=(w=c.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const H=["Basic","Interaction","WithSlots"];export{s as Basic,i as Interaction,c as WithSlots,H as __namedExportsOrder,V as default};
