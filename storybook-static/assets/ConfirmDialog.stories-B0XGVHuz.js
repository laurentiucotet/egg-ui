import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as D}from"./iframe-BQoFmE4d.js";import{t as j}from"./index-Csbs7JK-.js";import{B as l}from"./Button-rWaW-_6o.js";import"./preload-helper-C1FmrZbK.js";const q=j({base:"fixed inset-0 bg-black bg-opacity-50"}),E=j({base:"bg-white rounded-lg overflow-hidden shadow-xl z-10",variants:{size:{sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg"}},defaultVariants:{size:"sm"}}),d=({open:t,title:n,description:a,header:o,children:s,confirmLabel:B="Confirm",cancelLabel:R="Cancel",size:N="sm",onConfirm:k,onCancel:p})=>t?e.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:[e.jsx("div",{className:q(),onClick:p}),e.jsxs("div",{className:E({size:N}),role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"p-4",children:[o||n&&e.jsx("h2",{className:"text-lg font-medium",children:n}),s?e.jsx("div",{className:"mt-2",children:s}):a&&e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:a})]}),e.jsxs("div",{className:"flex justify-end gap-2 p-4 bg-gray-50",children:[e.jsx(l,{intent:"secondary",label:R,onClick:p}),e.jsx(l,{intent:"primary",label:B,onClick:k})]})]})]}):null;d.__docgenInfo={description:"",methods:[],displayName:"ConfirmDialog",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!1,tsType:{name:"string"},description:"optional legacy title, use header for custom content"},description:{required:!1,tsType:{name:"string"},description:"optional legacy description, use children for custom body"},header:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},confirmLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Confirm'",computed:!1}},cancelLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Cancel'",computed:!1}},size:{required:!1,tsType:{name:"VariantProps['size']",raw:"VariantProps<typeof dialog>['size']"},description:"",defaultValue:{value:"'sm'",computed:!1}},onConfirm:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{expect:u,userEvent:f,within:_}=__STORYBOOK_MODULE_TEST__,V={title:"UI/ConfirmDialog",component:d,tags:["autodocs"],args:{open:!1,title:"Delete Item",description:"Are you sure you want to delete this item?",confirmLabel:"Delete",cancelLabel:"Cancel"}},m=t=>{const[n,a]=D.useState(t.open);return e.jsxs(e.Fragment,{children:[e.jsx(l,{label:"Open Dialog",onClick:()=>a(!0)}),e.jsx(d,{...t,open:n,onConfirm:()=>a(!1),onCancel:()=>a(!1)})]})},r={render:m,args:{onConfirm:()=>{},onCancel:()=>{}}},i={render:m,args:{onConfirm:()=>{},onCancel:()=>{}},play:async({canvasElement:t})=>{const n=_(t),a=n.getByRole("button",{name:/open dialog/i});await f.click(a);const o=await n.findByRole("dialog");await u(o).toBeInTheDocument();const s=n.getByRole("button",{name:/delete/i});await f.click(s),await u(o).not.toBeInTheDocument()}},c={render:m,args:{onConfirm:()=>{},onCancel:()=>{},header:e.jsx("div",{className:"text-xl font-bold",children:"Custom Header"}),children:e.jsx("div",{children:e.jsx("p",{children:"This is the body passed as children. You can put any content here."})}),confirmLabel:"OK",cancelLabel:"Back"}};var g,y,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: Template,
  args: {
    onConfirm: () => {},
    onCancel: () => {}
  }
}`,...(x=(y=r.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var h,v,C;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(C=(v=i.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var b,w,T;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: Template,
  args: {
    onConfirm: () => {},
    onCancel: () => {},
    header: <div className="text-xl font-bold">Custom Header</div>,
    children: <div>
        <p>This is the body passed as children. You can put any content here.</p>
      </div>,
    confirmLabel: 'OK',
    cancelLabel: 'Back'
  }
}`,...(T=(w=c.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const K=["Basic","Interaction","WithSlots"];export{r as Basic,i as Interaction,c as WithSlots,K as __namedExportsOrder,V as default};
