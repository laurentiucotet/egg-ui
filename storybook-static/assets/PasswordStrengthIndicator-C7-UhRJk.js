import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as o}from"./iframe-BQoFmE4d.js";/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=(...e)=>e.filter((t,a,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===a).join(" ").trim();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,n)=>n?n.toUpperCase():a.toLowerCase());/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=e=>{const t=p(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=o.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:n,className:c="",children:s,iconNode:l,...i},x)=>o.createElement("svg",{ref:x,...y,width:t,height:t,stroke:e,strokeWidth:n?Number(a)*24/Number(t):a,className:d("lucide",c),...!s&&!v(i)&&{"aria-hidden":"true"},...i},[...l.map(([h,f])=>o.createElement(h,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=(e,t)=>{const a=o.forwardRef(({className:n,...c},s)=>o.createElement(b,{ref:s,iconNode:t,className:d(`lucide-${g(m(e))}`,`lucide-${e}`,n),...c}));return a.displayName=m(e),a};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],j=u("check",N);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],C=u("x",k),w=({password:e,className:t=""})=>{const a=s=>{let l=0;return s.length>=8&&l++,/[a-z]/.test(s)&&l++,/[A-Z]/.test(s)&&l++,/[0-9]/.test(s)&&l++,/[^A-Za-z0-9]/.test(s)&&l++,l<=2?{level:"weak",color:"bg-red-500",text:"Weak"}:l<=3?{level:"medium",color:"bg-yellow-500",text:"Medium"}:{level:"strong",color:"bg-green-500",text:"Strong"}},n=[{label:"At least 8 characters",met:e.length>=8},{label:"One lowercase letter (a-z)",met:/[a-z]/.test(e)},{label:"One uppercase letter (A-Z)",met:/[A-Z]/.test(e)},{label:"One number (0-9)",met:/[0-9]/.test(e)},{label:"One special character (!@#$%^&*)",met:/[^A-Za-z0-9]/.test(e)}],c=a(e);return e?r.jsxs("div",{className:`space-y-3 ${t}`,children:[r.jsx("div",{className:"space-y-1",children:r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("div",{className:"flex-1 bg-gray-200 rounded-full h-2",children:r.jsx("div",{className:`h-2 rounded-full transition-all duration-300 ${c.color}`,style:{width:c.level==="weak"?"33%":c.level==="medium"?"66%":"100%"}})}),r.jsx("span",{className:`text-xs font-medium ${c.level==="weak"?"text-red-600":c.level==="medium"?"text-yellow-600":"text-green-600"}`,children:c.text})]})}),r.jsxs("div",{className:"space-y-1",children:[r.jsx("p",{className:"text-xs text-gray-600 font-medium",children:"Password requirements:"}),r.jsx("ul",{className:"space-y-1",children:n.map((s,l)=>r.jsxs("li",{className:"flex items-center gap-2 text-xs",children:[s.met?r.jsx(j,{size:12,className:"text-green-500 flex-shrink-0"}):r.jsx(C,{size:12,className:"text-gray-400 flex-shrink-0"}),r.jsx("span",{className:s.met?"text-green-700":"text-gray-500",children:s.label})]},l))})]})]}):null};w.__docgenInfo={description:"",methods:[],displayName:"PasswordStrengthIndicator",props:{password:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};export{j as C,b as I,w as P,C as X,u as c};
