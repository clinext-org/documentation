"use strict";(self.webpackChunkclinext=self.webpackChunkclinext||[]).push([[7376],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>f});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},28304:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(45072),a=(t(11504),t(95788));const o={sidebar_position:2},i="Components",s={unversionedId:"concepts/components",id:"concepts/components",title:"Components",description:"Commands",source:"@site/docs/concepts/components.mdx",sourceDirName:"concepts",slug:"/concepts/components",permalink:"/documentation/docs/next/concepts/components",draft:!1,editUrl:"https://github.com/clinext-core/generator-clinext/tree/main/packages/create-docusaurus/templates/shared/docs/concepts/components.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Motivation",permalink:"/documentation/docs/next/concepts/motivation"},next:{title:"Extensions",permalink:"/documentation/docs/next/concepts/extensions"}},l={},c=[{value:"Commands",id:"commands",level:3},{value:"Questions",id:"questions",level:3},{value:"Validators",id:"validators",level:4},{value:"Transformers",id:"transformers",level:4},{value:"Side effects",id:"side-effects",level:4}],u={toc:c},d="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"components"},"Components"),(0,a.yg)("h3",{id:"commands"},"Commands"),(0,a.yg)("p",null,"Commands folders are a direct representation of the arborescence of commands the end user will see."),(0,a.yg)("h3",{id:"questions"},"Questions"),(0,a.yg)("p",null,"A CLI will certainly make use of inquiries to the user. We call them questions, and they are built with certain requirements in mind:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Questions can be declared in a conventional way in the src/questions folder"),(0,a.yg)("li",{parentName:"ul"},"Any command can declare the questions it will use, by doing so CliNext will automatically extract the cli parameters from those questions and inject them in the help view."),(0,a.yg)("li",{parentName:"ul"},"When a question is declared in a command, it inherits the question that is declared project wide in the src/questions folder. By doing so you can simply declare a command question by giving its id."),(0,a.yg)("li",{parentName:"ul"},"Any extension can declare its questions as well")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/documentation/docs/next/guides/questions/create"},"Guides")," ",(0,a.yg)("br",null),"\n",(0,a.yg)("a",{parentName:"p",href:"/documentation/docs/next/reference/question"},"Reference")),(0,a.yg)("h4",{id:"validators"},"Validators"),(0,a.yg)("p",null,"Validators are used to check user's input for a question."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Validators can be declared separately in the src/validators folder"),(0,a.yg)("li",{parentName:"ul"},"They can also be declared inline in reference to a question"),(0,a.yg)("li",{parentName:"ul"},"Any extension can declare its validators as well")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/documentation/docs/next/guides/questions/create"},"Guides")," ",(0,a.yg)("br",null),"\n",(0,a.yg)("a",{parentName:"p",href:"/documentation/docs/next/reference/question"},"Reference")),(0,a.yg)("h4",{id:"transformers"},"Transformers"),(0,a.yg)("p",null,"Transformers are used to format a value before or after a user's input. They can also be used to format the data displayed to a user without having an actual effect on the final input."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Transformers can be declared separately in the src/validators folder"),(0,a.yg)("li",{parentName:"ul"},"They can also be declared inline in reference to a question"),(0,a.yg)("li",{parentName:"ul"},"Any extension can declare its transformers as well")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/documentation/docs/next/guides/questions/create"},"Guides")," ",(0,a.yg)("br",null),"\n",(0,a.yg)("a",{parentName:"p",href:"/documentation/docs/next/reference/question"},"Reference")),(0,a.yg)("h4",{id:"side-effects"},"Side effects"),(0,a.yg)("p",null,"Side effects are used to format a value before or after a user's input. They can also be used to format the data displayed to a user without having an actual effect on the final input."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Side effects can be declared separately in the src/validators folder"),(0,a.yg)("li",{parentName:"ul"},"They can also be declared inline in reference to a question"),(0,a.yg)("li",{parentName:"ul"},"Any extension can declare its side effects as well")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/documentation/docs/next/guides/questions/create"},"Guides")," ",(0,a.yg)("br",null),"\n",(0,a.yg)("a",{parentName:"p",href:"/documentation/docs/next/reference/question"},"Reference")))}p.isMDXComponent=!0}}]);