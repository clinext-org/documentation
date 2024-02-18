"use strict";(self.webpackChunkclinext=self.webpackChunkclinext||[]).push([[1284],{95788:(e,t,n)=>{n.d(t,{Iu:()=>u,yg:()=>g});var r=n(11504);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5320:(e,t,n)=>{n(11504)},86660:(e,t,n)=>{n(11504),n(49344)},33768:(e,t,n)=>{n.d(t,{c:()=>o});var r=n(11504),i=n(49344);const o=e=>{let{noLink:t=!1,align:n="center"}=e;return r.createElement("div",{class:"\nflex\njustify-center\n"},r.createElement("div",{class:`\n          ${"center"===n?"justify-center text-center":""}          \n          pt-8     \n          max-w-4xl\n        `},r.createElement("h2",{className:"text-4xl"},"What do we want? \ud83e\udd16"," ",r.createElement("i",null)),r.createElement("p",{className:"text-lg"},"Ok, what would the perfect CLI generator look like ?"),r.createElement("ul",{className:`\n            ${"center"===n?"list-none":"list-decimal"}          \n            text-lg \n            space-y-2\n            `},r.createElement("li",{className:""},"Easy to read"),r.createElement("li",{className:""},"Easy to add commands"),r.createElement("li",{className:""},"Programmatically add steps, inputs, transformers, etc"),r.createElement("li",{className:""},"Extensible")),!t&&r.createElement("p",null,r.createElement(i.c,{className:"button button--secondary button--md",to:"/docs/concepts/philosophy"},"Read more about CliNext philosophy"))))}},3032:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(45072),i=(n(11504),n(95788));n(5320),n(33768),n(86660);const o={sidebar_position:0},a="Philosophy",l={unversionedId:"concepts/philosophy",id:"version-1.3/concepts/philosophy",title:"Philosophy",description:"logo",source:"@site/versioned_docs/version-1.3/concepts/philosophy.mdx",sourceDirName:"concepts",slug:"/concepts/philosophy",permalink:"/documentation/docs/concepts/philosophy",draft:!1,editUrl:"https://github.com/clinext-org/documentation/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.3/concepts/philosophy.mdx",tags:[],version:"1.3",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Concepts",permalink:"/documentation/docs/category/concepts"},next:{title:"Terms, definitions and components",permalink:"/documentation/docs/concepts/components"}},s={},c=[{value:"Motivation",id:"motivation",level:2},{value:"Principles",id:"principles",level:2},{value:"Convention over configuration",id:"convention-over-configuration",level:3},{value:"Don&#39;t repeat yourself (DRY)",id:"dont-repeat-yourself-dry",level:3},{value:"Command Line Principles",id:"command-line-principles",level:3},{value:"Extreme refactoring",id:"extreme-refactoring",level:3},{value:"Functional programming",id:"functional-programming",level:3},{value:"Other influences",id:"other-influences",level:3},{value:"Should you use CliNext?",id:"should-you-use-clinext",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...o}=e;return(0,i.yg)(p,(0,r.c)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"philosophy"},"Philosophy"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"logo",src:n(62180).c,width:"76",height:"95"})),(0,i.yg)("h2",{id:"motivation"},"Motivation"),(0,i.yg)("p",null,"We used yeoman as our CLI framework in the past. Yeoman quickly became hard to maintain.\n#TODO"),(0,i.yg)("h2",{id:"principles"},"Principles"),(0,i.yg)("h3",{id:"convention-over-configuration"},"Convention over configuration"),(0,i.yg)("i",null,"Convention over configuration (also known as coding by convention) is a software design paradigm used by software frameworks that attempts to decrease the number of decisions that a developer using the framework is required to make without necessarily losing flexibility and don't repeat yourself (DRY) principles."),(0,i.yg)("br",null),(0,i.yg)("a",{href:"https://en.wikipedia.org/wiki/Convention_over_configuration"},"Wikipedia"),(0,i.yg)("h3",{id:"dont-repeat-yourself-dry"},"Don't repeat yourself (DRY)"),(0,i.yg)("i",null,'"Don\'t repeat yourself" (DRY) is a principle of software development aimed at reducing repetition of information which is likely to change, replacing it with abstractions that are less likely to change, or using data normalization which avoids redundancy in the first place.'),(0,i.yg)("br",null),(0,i.yg)("a",{href:"https://en.wikipedia.org/wiki/Don%27t_repeat_yourself"},"Wikipedia"),(0,i.yg)("h3",{id:"command-line-principles"},"Command Line Principles"),(0,i.yg)("p",null,"An open-source guide to help you write better command-line programs, taking traditional UNIX principles and updating them for the modern day.\n",(0,i.yg)("em",{parentName:"p"},"Traditionally, UNIX commands were written under the assumption they were going to be used primarily by other programs. They had more in common with functions in a programming language than with graphical applications.\nToday, even though many CLI programs are used primarily (or even exclusively) by humans, a lot of their interaction design still carries the baggage of the past. It\u2019s time to shed some of this baggage: if a command is going to be used primarily by humans, it should be designed for humans first.")),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://clig.dev"},"https://clig.dev"),"\n",(0,i.yg)("a",{parentName:"p",href:"https://blog.developer.atlassian.com/10-design-principles-for-delightful-clis/"},"https://blog.developer.atlassian.com/10-design-principles-for-delightful-clis/"),"\n",(0,i.yg)("a",{parentName:"p",href:"https://devcenter.heroku.com/articles/cli-style-guide"},"https://devcenter.heroku.com/articles/cli-style-guide")),(0,i.yg)("h3",{id:"extreme-refactoring"},"Extreme refactoring"),(0,i.yg)("i",null,"Refactor mercilessly"),(0,i.yg)("br",null),"CliNext takes refactoring to the extreme by decluttering the app from the underlying features that different models use into a single package called feature. Contrarily to a middleware or an extension, a feature is a high level, conventioned, predicatable and versioned piece of code that provides a functional feature. Extreme refactoring with features yield extreme reusability from the ground-up by instilling a feature driven culture in your teams.",(0,i.yg)("br",null),(0,i.yg)("i",null,"Variable \u2192 Function \u2192 Class \u2192 Module \u2192 Extension \u2192 ",(0,i.yg)("b",null,"Feature")),(0,i.yg)("br",null),(0,i.yg)("a",{href:"http://www.extremeprogramming.org/rules/refactor.html"},"Extreme refactoring"),(0,i.yg)("h3",{id:"functional-programming"},"Functional programming"),(0,i.yg)("p",null,"(over object programming)"),(0,i.yg)("i",null,"Functional programming is a paradigm of building computer programs using expressions and functions without mutating state and data. By respecting these restrictions, functional programming aims to write code that is clearer to understand and more bug resistant."),(0,i.yg)("h3",{id:"other-influences"},"Other influences"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{href:"https://blog.ploeh.dk/2021/06/14/new-book-code-that-fits-in-your-head/"},(0,i.yg)("i",null,"Code That Fits in Your Head"))," book by Mark Seemann"),(0,i.yg)("li",{parentName:"ul"},"Gluegun"),(0,i.yg)("li",{parentName:"ul"},"Yargs")),(0,i.yg)("h2",{id:"should-you-use-clinext"},"Should you use CliNext?"),(0,i.yg)("p",null,"CliNext is likely a good fit for you if"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"You want to quickly build a CLI for your project"),(0,i.yg)("li",{parentName:"ul"},"You want to reuse an option over different commands without copying it over and over"),(0,i.yg)("li",{parentName:"ul"},"You want to use conventionned validators and transformers"),(0,i.yg)("li",{parentName:"ul"},"You want to use validators, transformers and side effects programmatically")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"logo",src:n(98168).c,width:"846",height:"1198"})),(0,i.yg)("small",null,"Simon Buret, The blessings, 2022"))}d.isMDXComponent=!0},98168:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/buret-20d7c177699d7e5e6871dbe4bce605c7.png"},62180:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/icon_xs-f632e2b579c07991d06f221f250ea5a4.svg"}}]);