"use strict";(self.webpackChunkclinext=self.webpackChunkclinext||[]).push([[9552],{5788:(e,r,t)=>{t.d(r,{Iu:()=>u,yg:()=>g});var n=t(1504);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),o=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=o(e.components);return n.createElement(i.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=o(t),f=a,g=p["".concat(i,".").concat(f)]||p[f]||d[f]||l;return t?n.createElement(g,s(s({ref:r},u),{},{components:t})):n.createElement(g,s({ref:r},u))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,s=new Array(l);s[0]=f;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[p]="string"==typeof e?e:a,s[1]=c;for(var o=2;o<l;o++)s[o]=t[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9988:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var n=t(5072),a=(t(1504),t(5788));const l={sidebar_position:1},s="Index",c={unversionedId:"reference/feature/index",id:"reference/feature/index",title:"Index",description:"Concept",source:"@site/docs/reference/feature/index.mdx",sourceDirName:"reference/feature",slug:"/reference/feature/",permalink:"/docs/next/reference/feature/",draft:!1,editUrl:"https://github.com/clinext-core/generator-clinext/tree/main/packages/create-docusaurus/templates/shared/docs/reference/feature/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Feature \ud83d\udc1d",permalink:"/docs/next/category/feature-"},next:{title:"Class",permalink:"/docs/next/reference/feature/class"}},i={},o=[{value:"Concept",id:"concept",level:2},{value:"Folder structure",id:"folder-structure",level:2},{value:"Usage",id:"usage",level:2},{value:"Declare a class",id:"declare-a-class",level:3},{value:"Use features",id:"use-features",level:3},{value:"Use functions",id:"use-functions",level:3},{value:"Use triggers",id:"use-triggers",level:3},{value:"Example",id:"example",level:2}],u={toc:o},p="wrapper";function d(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.c)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"index"},"Index"),(0,a.yg)("h2",{id:"concept"},"Concept"),(0,a.yg)("p",null,"Contains the models logic handled by the feature."),(0,a.yg)("h2",{id:"folder-structure"},"Folder structure"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 models\n\u2502   \u251c\u2500\u2500 classA\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 class\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.js\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 features.js\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 functions\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.js\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 triggers\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.js\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The ",(0,a.yg)("strong",{parentName:"li"},"class")," folder contains ",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"the es6 models handled by the feature."),(0,a.yg)("li",{parentName:"ul"},"the features declaration."))),(0,a.yg)("li",{parentName:"ul"},"The ",(0,a.yg)("strong",{parentName:"li"},"functions")," folder contains cloud functions specific to the class"),(0,a.yg)("li",{parentName:"ul"},"The ",(0,a.yg)("strong",{parentName:"li"},"triggers")," folder contains triggers functions")),(0,a.yg)("h2",{id:"usage"},"Usage"),(0,a.yg)("h3",{id:"declare-a-class"},"Declare a class"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"export default class ClassA extends CliNext.App.Object {\n    constructor() {\n        super('ClassA')\n    }\n}\n")),(0,a.yg)("h3",{id:"use-features"},"Use features"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"export default [\n    //featureslist \n]\n")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/next/guides/use"},"See declaring features")),(0,a.yg)("h3",{id:"use-functions"},"Use functions"),(0,a.yg)("h3",{id:"use-triggers"},"Use triggers"),(0,a.yg)("h2",{id:"example"},"Example"))}d.isMDXComponent=!0}}]);