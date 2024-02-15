"use strict";(self.webpackChunkclinext=self.webpackChunkclinext||[]).push([[8060],{95788:(e,n,t)=>{t.d(n,{Iu:()=>s,yg:()=>g});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(g,i(i({ref:n},s),{},{components:t})):r.createElement(g,i({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},86060:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=t(45072),a=(t(11504),t(95788));const o={sidebar_position:2},i="$ clinext app",p={unversionedId:"reference/commands/new",id:"version-1.0/reference/commands/new",title:"$ clinext app",description:"Create a new app",source:"@site/versioned_docs/version-1.0/reference/commands/new.mdx",sourceDirName:"reference/commands",slug:"/reference/commands/new",permalink:"/documentation/docs/reference/commands/new",draft:!1,editUrl:"https://github.com/clinext-core/generator-clinext/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0/reference/commands/new.mdx",tags:[],version:"1.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/documentation/docs/reference/commands/install"},next:{title:"Ecosystem",permalink:"/documentation/docs/category/ecosystem"}},l={},c=[{value:"Create a new app",id:"create-a-new-app",level:2},{value:"Options",id:"options",level:3},{value:"Example",id:"example",level:3},{value:"Help",id:"help",level:3}],s={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.c)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"-clinext-app"},"$ clinext app"),(0,a.yg)("h2",{id:"create-a-new-app"},"Create a new app"),(0,a.yg)("p",null,"Creates a new clinext app and installs dependencies."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"clinext new\n")),(0,a.yg)("h3",{id:"options"},"Options"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'  -n, --appName              App name                                                      [string] [default: "MyAppName"]\n      --appDescription       App description                                          [string] [default: "A CliNext app"]\n      --bridgeframeworkId    Engine to use                  [string] [default: "@clinext/parse-server-engine"]\n  -i, --installDependencies  Install dependencies                                                [boolean] [default: true]\n  -l, --license              License                                                             [string] [default: "MIT"]\n  -p, --packageManager       Package manager (\'npm\', \'yarn\' or \'pnpm\')                           [string] [default: "npm"]\n  -g, --gitInit              Initialize a git repository                                         [boolean] [default: true]\n  -d, --destination          Choose a destination                                                                 [string]\n      --appPort              App port                                                             [number] [default: 1387]  \n')),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"clinext new --appName='MyApp'\n")),(0,a.yg)("h3",{id:"help"},"Help"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"clinext app -h\n")))}d.isMDXComponent=!0}}]);