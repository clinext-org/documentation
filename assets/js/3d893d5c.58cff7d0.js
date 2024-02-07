"use strict";(self.webpackChunkclinext=self.webpackChunkclinext||[]).push([[5456],{5788:(e,r,t)=>{t.d(r,{Iu:()=>u,yg:()=>g});var n=t(1504);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),f=a,g=p["".concat(i,".").concat(f)]||p[f]||d[f]||s;return t?n.createElement(g,l(l({ref:r},u),{},{components:t})):n.createElement(g,l({ref:r},u))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,l=new Array(s);l[0]=f;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<s;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1736:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=t(5072),a=(t(1504),t(5788));const s={sidebar_position:3},l="Models",o={unversionedId:"reference/feature/classes",id:"version-1.0/reference/feature/classes",title:"Models",description:"Concept",source:"@site/versioned_docs/version-1.0/reference/feature/classes.mdx",sourceDirName:"reference/feature",slug:"/reference/feature/classes",permalink:"/docs/reference/feature/classes",draft:!1,editUrl:"https://github.com/clinext-core/generator-clinext/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0/reference/feature/classes.mdx",tags:[],version:"1.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Class",permalink:"/docs/reference/feature/class"},next:{title:"Documentation",permalink:"/docs/reference/feature/documentation"}},i={},c=[{value:"Concept",id:"concept",level:2},{value:"Folder structure",id:"folder-structure",level:2},{value:"Variant entry points",id:"variant-entry-points",level:2},{value:"Usage",id:"usage",level:2},{value:"Declare a class",id:"declare-a-class",level:3},{value:"Use features",id:"use-features",level:3},{value:"Use functions",id:"use-functions",level:3},{value:"Use triggers",id:"use-triggers",level:3},{value:"Example",id:"example",level:2}],u={toc:c},p="wrapper";function d(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.c)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"models"},"Models"),(0,a.yg)("h2",{id:"concept"},"Concept"),(0,a.yg)("p",null,"Contains the models logic handled by the feature."),(0,a.yg)("h2",{id:"folder-structure"},"Folder structure"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 models\n\u2502   \u251c\u2500\u2500 classA\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 class\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.js\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 features.js\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 functions\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.js\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 triggers\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.js\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The ",(0,a.yg)("strong",{parentName:"li"},"class")," folder contains ",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"the es6 models handled by the feature."),(0,a.yg)("li",{parentName:"ul"},"the features declaration."))),(0,a.yg)("li",{parentName:"ul"},"The ",(0,a.yg)("strong",{parentName:"li"},"functions")," folder contains cloud functions specific to the class"),(0,a.yg)("li",{parentName:"ul"},"The ",(0,a.yg)("strong",{parentName:"li"},"triggers")," folder contains triggers functions")),(0,a.yg)("h2",{id:"variant-entry-points"},"Variant entry points"),(0,a.yg)("p",null,"None"),(0,a.yg)("h2",{id:"usage"},"Usage"),(0,a.yg)("h3",{id:"declare-a-class"},"Declare a class"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"export default class ClassA extends CliNext.App.Object {\n    constructor() {\n        super('ClassA')\n    }\n}\n")),(0,a.yg)("h3",{id:"use-features"},"Use features"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"export default [\n    //featureslist \n]\n")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/guides/use"},"See declaring features")),(0,a.yg)("h3",{id:"use-functions"},"Use functions"),(0,a.yg)("h3",{id:"use-triggers"},"Use triggers"),(0,a.yg)("h2",{id:"example"},"Example"))}d.isMDXComponent=!0}}]);