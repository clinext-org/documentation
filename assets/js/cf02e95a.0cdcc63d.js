"use strict";(self.webpackChunkclinext=self.webpackChunkclinext||[]).push([[7588],{5788:(e,n,t)=>{t.d(n,{Iu:()=>s,yg:()=>g});var r=t(1504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||p;return t?r.createElement(g,i(i({ref:n},s),{},{components:t})):r.createElement(g,i({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,i=new Array(p);i[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<p;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7316:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>l});var r=t(5072),a=(t(1504),t(5788));const p={sidebar_position:2},i="$ clinext app",o={unversionedId:"reference/commands/app",id:"reference/commands/app",title:"$ clinext app",description:"Create a new app",source:"@site/docs/reference/commands/app.mdx",sourceDirName:"reference/commands",slug:"/reference/commands/app",permalink:"/documentation/docs/next/reference/commands/app",draft:!1,editUrl:"https://github.com/clinext-core/generator-clinext/tree/main/packages/create-docusaurus/templates/shared/docs/reference/commands/app.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"$ clinext auth",permalink:"/documentation/docs/next/reference/commands/auth"},next:{title:"Packages",permalink:"/documentation/docs/next/reference/packages"}},c={},l=[{value:"Create a new app",id:"create-a-new-app",level:2},{value:"Options",id:"options",level:3},{value:"Example",id:"example",level:3},{value:"Help",id:"help",level:3}],s={toc:l},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.c)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"-clinext-app"},"$ clinext app"),(0,a.yg)("h2",{id:"create-a-new-app"},"Create a new app"),(0,a.yg)("p",null,"Creates a new clinext app and installs dependencies."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"clinext app new\n")),(0,a.yg)("h3",{id:"options"},"Options"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'  -n, --appName              App name                                                      [string] [default: "MyAppName"]\n      --appDescription       App description                                          [string] [default: "A CliNext app"]\n      --bridgeframeworkId    Engine to use                  [string] [default: "@clinext/parse-server-engine"]\n  -i, --installDependencies  Install dependencies                                                [boolean] [default: true]\n  -l, --license              License                                                             [string] [default: "MIT"]\n  -p, --packageManager       Package manager (\'npm\', \'yarn\' or \'pnpm\')                           [string] [default: "npm"]\n  -g, --gitInit              Initialize a git repository                                         [boolean] [default: true]\n  -d, --destination          Choose a destination                                                                 [string]\n      --appPort              App port                                                             [number] [default: 1387]  \n')),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"clinext app new --appName='MyApp' --adapter='@clinext/cli'\n")),(0,a.yg)("h3",{id:"help"},"Help"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"clinext app -h\n")))}d.isMDXComponent=!0}}]);