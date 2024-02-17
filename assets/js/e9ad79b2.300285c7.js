"use strict";(self.webpackChunkclinext=self.webpackChunkclinext||[]).push([[1336],{95788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>d});var r=n(11504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(d,c(c({ref:t},p),{},{components:n})):r.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},86548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(45072),o=(n(11504),n(95788));const a={sidebar_position:2},c="Anatomy of a CliNext app",i={unversionedId:"reference/anatomy",id:"reference/anatomy",title:"Anatomy of a CliNext app",description:"Project structure",source:"@site/docs/reference/anatomy.mdx",sourceDirName:"reference",slug:"/reference/anatomy",permalink:"/documentation/docs/next/reference/anatomy",draft:!1,editUrl:"https://github.com/clinext-core/generator-clinext/tree/main/packages/create-docusaurus/templates/shared/docs/reference/anatomy.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Config",permalink:"/documentation/docs/next/reference/config"},next:{title:"CliNext",permalink:"/documentation/docs/next/reference/clinext"}},s={},l=[{value:"Project structure",id:"project-structure",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.c)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"anatomy-of-a-clinext-app"},"Anatomy of a CliNext app"),(0,o.yg)("h2",{id:"project-structure"},"Project structure"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 src\n\u251c\u2500\u2500\u2500\u2500 app.js\n\u251c\u2500\u2500\u2500\u2500 commands\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500 command A\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 sub command X\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 sub command Y\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500 command B\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 sub command Z\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 sub command W\n\u251c\u2500\u2500\u2500\u2500 extensions\n\u251c\u2500\u2500\u2500\u2500 questions\n\u251c\u2500\u2500\u2500\u2500 transformers\n\u251c\u2500\u2500\u2500\u2500 validators\n\u251c\u2500\u2500 clinext.config.js\n\u251c\u2500\u2500 .env\n\u2514\u2500\u2500 package.json\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The clinext config is clinext.config.js"),(0,o.yg)("li",{parentName:"ul"},"The clinext app entry point is index.js"),(0,o.yg)("li",{parentName:"ul"},"The local extensions are in /src/extensions")))}m.isMDXComponent=!0}}]);