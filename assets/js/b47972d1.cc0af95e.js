"use strict";(self.webpackChunkclinext=self.webpackChunkclinext||[]).push([[6256],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>g});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=a,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},14092:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(45072),a=(t(11504),t(95788));const o={sidebar_position:2},i="Create",s={unversionedId:"guides/extensions/create",id:"guides/extensions/create",title:"Create",description:"- An extension needs to be registered through its index.js > register method",source:"@site/docs/guides/extensions/create.mdx",sourceDirName:"guides/extensions",slug:"/guides/extensions/create",permalink:"/documentation/docs/next/guides/extensions/create",draft:!1,editUrl:"https://github.com/clinext-org/documentation/tree/main/packages/create-docusaurus/templates/shared/docs/guides/extensions/create.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Anatomy",permalink:"/documentation/docs/next/guides/extensions/anatomy"},next:{title:"Use",permalink:"/documentation/docs/next/guides/extensions/use"}},c={},l=[{value:"Create an extension",id:"create-an-extension",level:2},{value:"Standalone extension project",id:"standalone-extension-project",level:3},{value:"Inline extension",id:"inline-extension",level:3}],u={toc:l},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"create"},"Create"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"An extension needs to be registered through its index.js > register method"),(0,a.yg)("li",{parentName:"ul"},"An extension can declare questions, validators and transformers the same way a CliNext app does")),(0,a.yg)("h2",{id:"create-an-extension"},"Create an extension"),(0,a.yg)("h3",{id:"standalone-extension-project"},"Standalone extension project"),(0,a.yg)("p",null,"This command creates a standalone npm module that can be imported in a CliNext app:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"clinext extension new -h\n")),(0,a.yg)("p",null,"The module will have this structure:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 src\n\u251c\u2500\u2500 \u251c\u2500\u2500 ... (extension content)\n\u2514\u2500\u2500 package.json\n")),(0,a.yg)("h3",{id:"inline-extension"},"Inline extension"),(0,a.yg)("p",null,"This command creates an extension content in the ",(0,a.yg)("em",{parentName:"p"},"extensions")," folder of a CliNext app:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"clinext extension add -h\n")))}d.isMDXComponent=!0}}]);