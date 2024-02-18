"use strict";(self.webpackChunkclinext=self.webpackChunkclinext||[]).push([[5336],{95788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>g});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(g,c(c({ref:t},p),{},{components:n})):r.createElement(g,c({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55152:(e,t,n)=>{n.d(t,{c:()=>l});var r=n(11504),a=n(86212),o=n(22440),c=n(35784),i=n(73608);const l=e=>{const t=e.npm?e.npm:(0,i.c)(e.yarn,"npm"),n=e.yarn?e.yarn:(0,i.c)(e.npm,"yarn");return r.createElement(a.default,null,r.createElement(o.default,{value:"npm",label:"npm",default:!0},r.createElement(c.default,{language:"bash"},t)),r.createElement(o.default,{value:"bash",label:"yarn"},r.createElement(c.default,{language:"bash"},n)))}},8760:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var r=n(45072),a=(n(11504),n(95788)),o=n(55152);const c={sidebar_position:8},i="Packages",l={unversionedId:"reference/packages",id:"reference/packages",title:"Packages",description:"CliNext SDK",source:"@site/docs/reference/packages.mdx",sourceDirName:"reference",slug:"/reference/packages",permalink:"/documentation/docs/next/reference/packages",draft:!1,editUrl:"https://github.com/clinext-org/documentation/tree/main/packages/create-docusaurus/templates/shared/docs/reference/packages.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Extension",permalink:"/documentation/docs/next/reference/extension"},next:{title:"CLI \ud83e\udd16",permalink:"/documentation/docs/next/category/cli-"}},s={},p=[{value:"CliNext SDK",id:"clinext-sdk",level:2},{value:"CliNext Generator",id:"clinext-generator",level:2},{value:"CliNext documentation",id:"clinext-documentation",level:2}],u={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.c)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"packages"},"Packages"),(0,a.yg)("h2",{id:"clinext-sdk"},"CliNext SDK"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/clinext-org/sdk"},"Github")),(0,a.yg)(o.c,{npm:"npm install @clinext/sdk",mdxType:"BashTabs"}),(0,a.yg)("h2",{id:"clinext-generator"},"CliNext Generator"),(0,a.yg)("p",null,"The CliNext generator bootstraps ready to use CliNext projects.\nIt uses CliNext itself with the Chunks extension."),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/clinext-org/generator"},"Github")),(0,a.yg)(o.c,{npm:"npm install -g clinext",mdxType:"BashTabs"}),"Or",(0,a.yg)(o.c,{npm:"npx clinext",mdxType:"BashTabs"}),(0,a.yg)("h2",{id:"clinext-documentation"},"CliNext documentation"),(0,a.yg)("p",null,"The CliNext documentation is a Docusaurus based project hosted on Github Pages.\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/clinext-org/documentation"},"Source"),"\n",(0,a.yg)("a",{parentName:"p",href:"https://clinext-org.github.io/documentation"},"Online")))}d.isMDXComponent=!0}}]);