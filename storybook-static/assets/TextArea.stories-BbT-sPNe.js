import{j as f}from"./jsx-runtime-BjG_zV1W.js";import{R as y}from"./iframe-BQoFmE4d.js";import{t as g}from"./index-Csbs7JK-.js";import"./preload-helper-C1FmrZbK.js";const v=g({base:"block w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",variants:{inputSize:{sm:"px-2 py-1 text-sm",md:"px-3 py-2 text-base",lg:"px-4 py-3 text-lg"},variant:{default:"border-gray-300 focus:ring-blue-500",error:"border-red-500 focus:ring-red-500",success:"border-green-500 focus:ring-green-500"}},defaultVariants:{inputSize:"md",variant:"default"}}),s=y.forwardRef(({inputSize:a,variant:e,className:m,...u},x)=>f.jsx("textarea",{ref:x,className:v({inputSize:a,variant:e,className:m}),...u}));s.displayName="TextArea";s.__docgenInfo={description:"",methods:[],displayName:"TextArea"};const{expect:p,userEvent:E}=__STORYBOOK_MODULE_TEST__,_={title:"UI / TextArea",component:s,tags:["autodocs"],args:{inputSize:"md",variant:"default",disabled:!1,placeholder:"Type some text...",rows:3}},r={play:async({canvasElement:a})=>{const e=a.querySelector("textarea");await E.type(e,"lorem ipsum"),await p(e).toHaveValue("lorem ipsum")}},t={args:{variant:"error",placeholder:"Error state"},play:async({canvasElement:a})=>{const e=a.querySelector("textarea");await p(e).toHaveClass("border-red-500")}};var o,n,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const textarea = canvasElement.querySelector('textarea') as HTMLTextAreaElement;
    await userEvent.type(textarea, 'lorem ipsum');
    await expect(textarea).toHaveValue('lorem ipsum');
  }
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var l,i,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    placeholder: 'Error state'
  },
  play: async ({
    canvasElement
  }) => {
    const textarea = canvasElement.querySelector('textarea') as HTMLTextAreaElement;
    await expect(textarea).toHaveClass('border-red-500');
  }
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const A=["Default","Error"];export{r as Default,t as Error,A as __namedExportsOrder,_ as default};
