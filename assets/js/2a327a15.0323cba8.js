"use strict";(self.webpackChunkclinext=self.webpackChunkclinext||[]).push([[6476],{95788:(e,n,t)=>{t.d(n,{Iu:()=>p,yg:()=>g});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1412:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(45072),a=(t(11504),t(95788));const o={sidebar_position:8},i="Extension",l={unversionedId:"reference/extension",id:"reference/extension",title:"Extension",description:"- An extension needs to be registered through its index.js > register method",source:"@site/docs/reference/extension.mdx",sourceDirName:"reference",slug:"/reference/extension",permalink:"/documentation/docs/next/reference/extension",draft:!1,editUrl:"https://github.com/clinext-core/generator-clinext/tree/main/packages/create-docusaurus/templates/shared/docs/reference/extension.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Side Effect",permalink:"/documentation/docs/next/reference/sideeffect"},next:{title:"CLI \ud83e\udd16",permalink:"/documentation/docs/next/category/cli-"}},s={},c=[{value:"Create an extension",id:"create-an-extension",level:2},{value:"Standalone extension project",id:"standalone-extension-project",level:3},{value:"Inline extension",id:"inline-extension",level:3},{value:"Anatomy of an extension",id:"anatomy-of-an-extension",level:3},{value:"Use an extension",id:"use-an-extension",level:2},{value:"Declare / import",id:"declare--import",level:3}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.c)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"extension"},"Extension"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"An extension needs to be registered through its index.js > register method"),(0,a.yg)("li",{parentName:"ul"},"An extension can declare questions, validators and transformers the same way a CliNext app does")),(0,a.yg)("h2",{id:"create-an-extension"},"Create an extension"),(0,a.yg)("h3",{id:"standalone-extension-project"},"Standalone extension project"),(0,a.yg)("p",null,"This command creates a standalone npm module that can be imported in a CliNext app:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"clinext extension new -h\n")),(0,a.yg)("p",null,"The module will have this structure:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 src\n\u251c\u2500\u2500 \u251c\u2500\u2500 ... (extension content)\n\u2514\u2500\u2500 package.json\n")),(0,a.yg)("h3",{id:"inline-extension"},"Inline extension"),(0,a.yg)("p",null,"This command creates an extension content in the ",(0,a.yg)("em",{parentName:"p"},"extensions")," folder of a CliNext app:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"clinext extension add -h\n")),(0,a.yg)("h3",{id:"anatomy-of-an-extension"},"Anatomy of an extension"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 index.js\n\u251c\u2500\u2500 questions\n\u251c\u2500\u2500 \u251c\u2500\u2500 ...\n\u251c\u2500\u2500 validators\n\u251c\u2500\u2500 \u251c\u2500\u2500 ...\n\u251c\u2500\u2500 transformers\n\u2514\u2500\u2500 \u251c\u2500\u2500 ...\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"index.js")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'export default ({\n  id: "<%= uniqueId %>",\n  description: "<%= description %>",\n  register: async ({ toolbox }) => {\n    // At this point the CliNext object is available and can be manipulated (cautiously)\n  }\n})\n')),(0,a.yg)("h2",{id:"use-an-extension"},"Use an extension"),(0,a.yg)("h3",{id:"declare--import"},"Declare / import"),(0,a.yg)("p",null,"For inline extensions no need to explicitely import.\nFor standalone modules, "),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Declare the module in package.json"),(0,a.yg)("li",{parentName:"ol"},"Declare the module in clinext.config.js")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'export default ({\n  __clinextApiVersion: "1.0.0",\n  name: "<%= name %>",\n  usage: "<%= usage %>",  \n  extensions: [\n    "<%= moduleId %>"\n  ]\n})\n')),(0,a.yg)("p",null,"Then check the extension documentation."))}d.isMDXComponent=!0}}]);