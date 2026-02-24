import{B as H}from"./Button-rWaW-_6o.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-Csbs7JK-.js";const{expect:i,userEvent:U,within:f}=__STORYBOOK_MODULE_TEST__,j={title:"UI/Button",component:H,tags:["autodocs"],args:{label:"Button"},argTypes:{intent:{control:"select",options:["primary","secondary","danger"]},size:{control:"select",options:["sm","md","lg"]}}},e={args:{intent:"primary",label:"Primary Button"}},n={args:{intent:"secondary",label:"Secondary Button"}},t={args:{intent:"danger",label:"Danger Button"}},r={args:{size:"sm",label:"Small Button"}},s={args:{size:"lg",label:"Large Button"}},o={args:{label:"Disabled Button",disabled:!0}},c={args:{label:"Click me"},play:async({canvasElement:m})=>{const a=f(m).getByRole("button",{name:/click me/i});await i(a).toBeInTheDocument(),await i(a).toBeEnabled(),await U.click(a),await i(a).toHaveFocus()}},l={args:{label:"Cannot click",disabled:!0},play:async({canvasElement:m})=>{const a=f(m).getByRole("button",{name:/cannot click/i});await i(a).toBeDisabled()}};var u,d,p;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    intent: 'primary',
    label: 'Primary Button'
  }
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,b,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    intent: 'secondary',
    label: 'Secondary Button'
  }
}`,...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var B,S,v;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    intent: 'danger',
    label: 'Danger Button'
  }
}`,...(v=(S=t.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var D,w,k;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Small Button'
  }
}`,...(k=(w=r.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var E,_,x;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Large Button'
  }
}`,...(x=(_=s.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var I,C,T;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Button',
    disabled: true
  }
}`,...(T=(C=o.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var h,z,L;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Click me'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: /click me/i
    });
    await expect(button).toBeInTheDocument();
    await expect(button).toBeEnabled();
    await userEvent.click(button);
    await expect(button).toHaveFocus();
  }
}`,...(L=(z=c.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var O,R,P;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Cannot click',
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: /cannot click/i
    });
    await expect(button).toBeDisabled();
  }
}`,...(P=(R=l.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};const q=["Primary","Secondary","Danger","Small","Large","Disabled","ClickInteraction","DisabledInteraction"];export{c as ClickInteraction,t as Danger,o as Disabled,l as DisabledInteraction,s as Large,e as Primary,n as Secondary,r as Small,q as __namedExportsOrder,j as default};
