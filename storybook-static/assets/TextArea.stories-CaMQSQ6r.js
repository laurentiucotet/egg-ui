import{j as g}from"./jsx-runtime-BjG_zV1W.js";import{R as f}from"./iframe-WQlADSLx.js";import{t as b}from"./index-Csbs7JK-.js";import"./preload-helper-C1FmrZbK.js";const y=b({base:["block w-full","shadow-sm","focus:outline-none focus:ring-2 focus:ring-offset-2","disabled:opacity-50 disabled:cursor-not-allowed","bg-[var(--color-bg-primary)]","text-[var(--color-text-primary)]","placeholder:text-[var(--color-text-muted)]","dark:bg-[var(--color-bg-inverse)]","dark:text-[var(--color-text-inverse)]","rounded-[var(--radius-theme)]","border border-[var(--color-border)]"],variants:{inputSize:{sm:["px-2 py-1 text-sm","leading-[var(--line-height-tight)]"].join(" "),md:["px-3 py-2 text-base","leading-[var(--line-height-normal)]"].join(" "),lg:["px-4 py-3 text-lg","leading-[var(--line-height-relaxed)]"].join(" ")},variant:{default:["border-[var(--color-border)]","focus:border-[var(--color-primary)]","focus:ring-[var(--color-primary)]","dark:border-[var(--color-border)]","dark:focus:border-[var(--color-primary-hover)]","dark:focus:ring-[var(--color-primary-hover)]"].join(" "),error:["border-[var(--color-error)]","focus:border-[var(--color-error)]","focus:ring-[var(--color-error)]","dark:border-[var(--color-error-light)]","dark:focus:border-[var(--color-error-light)]","dark:focus:ring-[var(--color-error-light)]"].join(" "),success:["border-[var(--color-success)]","focus:border-[var(--color-success)]","focus:ring-[var(--color-success)]","dark:border-[var(--color-success-light)]","dark:focus:border-[var(--color-success-light)]","dark:focus:ring-[var(--color-success-light)]"].join(" ")}},defaultVariants:{inputSize:"md",variant:"default"}}),t=f.forwardRef(({inputSize:e,variant:r,className:m,style:p,...v},x)=>g.jsx("textarea",{ref:x,className:y({inputSize:e,variant:r,className:m}),style:{borderRadius:"var(--radius-theme)",fontFamily:"var(--font-sans)",fontSize:"var(--text-base)",lineHeight:"var(--line-height-normal)",...p},...v}));t.displayName="TextArea";t.__docgenInfo={description:"",methods:[],displayName:"TextArea"};const{expect:u,userEvent:h}=__STORYBOOK_MODULE_TEST__,w={title:"UI / TextArea",component:t,tags:["autodocs"],args:{inputSize:"md",variant:"default",disabled:!1,placeholder:"Type some text...",rows:3}},a={play:async({canvasElement:e})=>{const r=e.querySelector("textarea");await h.type(r,"lorem ipsum"),await u(r).toHaveValue("lorem ipsum")}},o={args:{variant:"error",placeholder:"Error state"},play:async({canvasElement:e})=>{const r=e.querySelector("textarea");await u(r).toHaveClass("border-red-500")}};var s,c,n;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const textarea = canvasElement.querySelector('textarea') as HTMLTextAreaElement;
    await userEvent.type(textarea, 'lorem ipsum');
    await expect(textarea).toHaveValue('lorem ipsum');
  }
}`,...(n=(c=a.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var l,i,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const _=["Default","Error"];export{a as Default,o as Error,_ as __namedExportsOrder,w as default};
