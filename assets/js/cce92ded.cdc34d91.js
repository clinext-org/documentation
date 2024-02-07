"use strict";(self.webpackChunkclinext=self.webpackChunkclinext||[]).push([[7796],{5788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>f});var r=n(1504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),g=a,f=p["".concat(s,".").concat(g)]||p[g]||d[g]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1168:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(5072),a=(n(1504),n(5788));const i={sidebar_position:4},l="Config",o={unversionedId:"reference/feature/configurations",id:"version-1.0/reference/feature/configurations",title:"Config",description:"Concept",source:"@site/versioned_docs/version-1.0/reference/feature/configurations.md",sourceDirName:"reference/feature",slug:"/reference/feature/configurations",permalink:"/docs/reference/feature/configurations",draft:!1,editUrl:"https://github.com/clinext-core/generator-clinext/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0/reference/feature/configurations.md",tags:[],version:"1.0",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"System",permalink:"/docs/reference/feature/system"},next:{title:"Triggers",permalink:"/docs/reference/feature/triggers"}},s={},u=[{value:"Concept",id:"concept",level:2},{value:"Entries",id:"entries",level:3},{value:"Conditions",id:"conditions",level:3},{value:"Types",id:"types",level:4},{value:"Groups",id:"groups",level:3},{value:"Implementation path",id:"implementation-path",level:3},{value:"Policies and limits",id:"policies-and-limits",level:3},{value:"Roadmap",id:"roadmap",level:3},{value:"Folder structure",id:"folder-structure",level:2},{value:"Variant entry points",id:"variant-entry-points",level:2},{value:"Usage",id:"usage",level:2},{value:"Declare a class",id:"declare-a-class",level:3},{value:"Use features",id:"use-features",level:3},{value:"Use functions",id:"use-functions",level:3},{value:"Use triggers",id:"use-triggers",level:3},{value:"Example",id:"example",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"config"},"Config"),(0,a.yg)("h2",{id:"concept"},"Concept"),(0,a.yg)("p",null,"CliNext config adds the ability to change the behaviour and appearance of your CliNext app without  redeploying your server or requiring users to update their app.\nParse Server Config is a simple way to set key values and to retrieve them from a client app. It's nevertheless not as complete as Firebase Remote Config for example. Thus CliNext Config adds feature based config with conditions and groups."),(0,a.yg)("p",null,"CliNext Config was built from the ground up to respect the feature lifecycle and separation of concerns. Every feature can define config entries that drive its behaviour at runtime, including the app feature. The config entries are defined along their conditions and groups in dedicated json files thus guaranteeing an environment agnostic deployment."),(0,a.yg)("p",null,"CliNext's unique manualable mechanism used for seeds (manualable feature) allows an hybrid config. You can define initial config entries in json files and manually add new configs or update existing live. Both the updated and new entries will keep their values while new entries in the json files will be taken into account."),(0,a.yg)("h3",{id:"entries"},"Entries"),(0,a.yg)("p",null,"CliNext Config entries are "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Data types")),(0,a.yg)("h3",{id:"conditions"},"Conditions"),(0,a.yg)("p",null,"CliNext Config conditions are a set of rules that determine the actual config entry value a particular user will receive."),(0,a.yg)("h4",{id:"types"},"Types"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Installation")),(0,a.yg)("h3",{id:"groups"},"Groups"),(0,a.yg)("p",null,"CliNext Config groups are a way to organise a set of entries."),(0,a.yg)("h3",{id:"implementation-path"},"Implementation path"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Add config entries in you feature/config dedicated files: entries"),(0,a.yg)("li",{parentName:"ol"},"Run / Deploy your CliNext app"),(0,a.yg)("li",{parentName:"ol"})),(0,a.yg)("h3",{id:"policies-and-limits"},"Policies and limits"),(0,a.yg)("p",null,"Note the following policies:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Don't use CliNext Config to make app updates that should require a user's authorization. This could cause your app to be perceived as untrustworthy."),(0,a.yg)("li",{parentName:"ul"},"Don't store confidential data in Remote Config parameter keys or parameter values. It is possible to decode any parameter keys or values stored in the Remote Config settings for your project."),(0,a.yg)("li",{parentName:"ul"},"Don't attempt to circumvent the requirements of your app's target platform using Remote Config.")),(0,a.yg)("p",null,"Note the following limits:"),(0,a.yg)("h3",{id:"roadmap"},"Roadmap"),(0,a.yg)("p",null,"CliNext Dashboard will include a dedicated UI for config entries, conditions and groups manipulation."),(0,a.yg)("p",null,"Generator tasks"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Generate client side defaults")),(0,a.yg)("h2",{id:"folder-structure"},"Folder structure"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 models\n\u2502   \u251c\u2500\u2500 classA\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 class\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.js\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 features.js\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 functions\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.js\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 triggers\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.js\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The ",(0,a.yg)("strong",{parentName:"li"},"class")," folder contains ",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"the es6 models handled by the feature."),(0,a.yg)("li",{parentName:"ul"},"the features declaration."))),(0,a.yg)("li",{parentName:"ul"},"The ",(0,a.yg)("strong",{parentName:"li"},"functions")," folder contains cloud functions specific to the class"),(0,a.yg)("li",{parentName:"ul"},"The ",(0,a.yg)("strong",{parentName:"li"},"triggers")," folder contains triggers functions")),(0,a.yg)("h2",{id:"variant-entry-points"},"Variant entry points"),(0,a.yg)("p",null,"None"),(0,a.yg)("h2",{id:"usage"},"Usage"),(0,a.yg)("h3",{id:"declare-a-class"},"Declare a class"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"export default class ClassA extends CliNext.App.Object {\n    constructor() {\n        super('ClassA')\n    }\n}\n")),(0,a.yg)("h3",{id:"use-features"},"Use features"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"export default [\n    //featureslist (see declaring features)\n]\n")),(0,a.yg)("h3",{id:"use-functions"},"Use functions"),(0,a.yg)("h3",{id:"use-triggers"},"Use triggers"),(0,a.yg)("h2",{id:"example"},"Example"))}d.isMDXComponent=!0}}]);