import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{t as a}from"./index-Csbs7JK-.js";const N=a({base:["flex flex-col","bg-[var(--color-bg-secondary)]","rounded-[var(--radius-lg)]","border border-[var(--color-border)]","shadow-sm","transition-all duration-200","dark:bg-[var(--color-neutral-800)]","dark:border-[var(--color-neutral-700)]"]}),_=a({base:["flex flex-col","p-6","border-b border-[var(--color-border)]","dark:border-[var(--color-neutral-700)]"]}),w=a({base:["text-lg font-semibold","text-[var(--color-text-primary)]","mb-1","dark:text-[var(--color-neutral-100)]"]}),D=a({base:["text-sm","text-[var(--color-text-secondary)]","dark:text-[var(--color-neutral-400)]"]}),I=a({base:["p-6","flex-1"]}),k=a({base:["flex flex-col sm:flex-row sm:items-center sm:justify-between","p-6","border-t border-[var(--color-border)]","dark:border-[var(--color-neutral-700)]"]}),n=({className:e,...t})=>r.jsx("div",{className:N({className:e}),...t}),c=({className:e,...t})=>r.jsx("div",{className:_({className:e}),...t}),i=({className:e,...t})=>r.jsx("h3",{className:w({className:e}),...t}),l=({className:e,...t})=>r.jsx("p",{className:D({className:e}),...t}),p=({className:e,...t})=>r.jsx("div",{className:I({className:e}),...t}),u=({className:e,...t})=>r.jsx("div",{className:k({className:e}),...t});n.__docgenInfo={description:"",methods:[],displayName:"Card"};c.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};i.__docgenInfo={description:"",methods:[],displayName:"CardTitle"};l.__docgenInfo={description:"",methods:[],displayName:"CardDescription"};p.__docgenInfo={description:"",methods:[],displayName:"CardContent"};u.__docgenInfo={description:"",methods:[],displayName:"CardFooter"};const{expect:m,within:H}=__STORYBOOK_MODULE_TEST__,S={title:"UI/Card",component:n,tags:["autodocs"],argTypes:{className:{control:"text"}}},o={args:{},render:e=>r.jsxs(n,{...e,children:[r.jsxs(c,{children:[r.jsx(i,{children:"Card Title"}),r.jsx(l,{children:"Card description goes here"})]}),r.jsx(p,{children:r.jsx("p",{children:"Card content goes here. This is where you would place your main content."})}),r.jsx(u,{children:r.jsx("span",{children:"Card footer"})})]})},s={args:{},play:async({canvasElement:e})=>{const C=H(e).getByRole("article");await m(C).toBeInTheDocument(),await m(C).toHaveClass("card")},render:e=>r.jsxs(n,{...e,children:[r.jsxs(c,{children:[r.jsx(i,{children:"Interactive Card"}),r.jsx(l,{children:"This card has interactive elements"})]}),r.jsxs(p,{children:[r.jsx("p",{children:"Click the button below to test interaction:"}),r.jsx("button",{className:"mt-4 px-4 py-2 bg-blue-500 text-white rounded",onClick:()=>alert("Button clicked!"),children:"Test Button"})]}),r.jsx(u,{children:r.jsx("button",{className:"px-4 py-2 bg-gray-200 rounded",children:"Action"})})]})},d={args:{},render:e=>r.jsxs(n,{...e,children:[r.jsxs(c,{children:[r.jsx(i,{children:"Settings"}),r.jsx(l,{children:"Manage your account settings"})]}),r.jsx(p,{children:r.jsx("p",{children:"Update your preferences and account settings here."})}),r.jsxs(u,{children:[r.jsx("button",{className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"Save Changes"}),r.jsx("button",{className:"px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 ml-2",children:"Cancel"})]})]})};var x,h,g;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {},
  render: args => <Card {...args}>\r
      <CardHeader>\r
        <CardTitle>Card Title</CardTitle>\r
        <CardDescription>Card description goes here</CardDescription>\r
      </CardHeader>\r
      <CardContent>\r
        <p>Card content goes here. This is where you would place your main content.</p>\r
      </CardContent>\r
      <CardFooter>\r
        <span>Card footer</span>\r
      </CardFooter>\r
    </Card>
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,y,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {},
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const card = canvas.getByRole('article');
    await expect(card).toBeInTheDocument();
    await expect(card).toHaveClass('card');
  },
  render: args => <Card {...args}>\r
      <CardHeader>\r
        <CardTitle>Interactive Card</CardTitle>\r
        <CardDescription>This card has interactive elements</CardDescription>\r
      </CardHeader>\r
      <CardContent>\r
        <p>Click the button below to test interaction:</p>\r
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => alert('Button clicked!')}>\r
          Test Button\r
        </button>\r
      </CardContent>\r
      <CardFooter>\r
        <button className="px-4 py-2 bg-gray-200 rounded">Action</button>\r
      </CardFooter>\r
    </Card>
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var j,f,T;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {},
  render: args => <Card {...args}>\r
      <CardHeader>\r
        <CardTitle>Settings</CardTitle>\r
        <CardDescription>Manage your account settings</CardDescription>\r
      </CardHeader>\r
      <CardContent>\r
        <p>Update your preferences and account settings here.</p>\r
      </CardContent>\r
      <CardFooter>\r
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">\r
          Save Changes\r
        </button>\r
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 ml-2">\r
          Cancel\r
        </button>\r
      </CardFooter>\r
    </Card>
}`,...(T=(f=d.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};const E=["Default","Interactive","WithActions"];export{o as Default,s as Interactive,d as WithActions,E as __namedExportsOrder,S as default};
