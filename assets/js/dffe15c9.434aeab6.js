"use strict";(self.webpackChunkclinext=self.webpackChunkclinext||[]).push([[2848],{5788:(e,t,n)=>{n.d(t,{Iu:()=>u,yg:()=>d});var a=n(1504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,d=p["".concat(c,".").concat(m)]||p[m]||g[m]||l;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9020:(e,t,n)=>{n.d(t,{c:()=>c});var a=n(1504),r=n(1268),l=n(5388),o=n(4628),i=n(3608);const c=e=>{const t=e.npm?e.npm:(0,i.c)(e.yarn,"npm"),n=e.yarn?e.yarn:(0,i.c)(e.npm,"yarn");return a.createElement(r.c,null,a.createElement(l.c,{value:"npm",label:"npm",default:!0},a.createElement(o.c,{language:"bash"},t)),a.createElement(l.c,{value:"bash",label:"yarn"},a.createElement(o.c,{language:"bash"},n)))}},5768:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(5072),r=(n(1504),n(5788));n(9020);const l={sidebar_position:1},o="$ clinext auth",i={unversionedId:"reference/commands/auth",id:"reference/commands/auth",title:"$ clinext auth",description:"Status",source:"@site/docs/reference/commands/auth.mdx",sourceDirName:"reference/commands",slug:"/reference/commands/auth",permalink:"/documentation/docs/next/reference/commands/auth",draft:!1,editUrl:"https://github.com/clinext-core/generator-clinext/tree/main/packages/create-docusaurus/templates/shared/docs/reference/commands/auth.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/documentation/docs/next/reference/commands/install"},next:{title:"$ clinext app",permalink:"/documentation/docs/next/reference/commands/app"}},c={},s=[{value:"Status",id:"status",level:2},{value:"Options",id:"options",level:3},{value:"Example",id:"example",level:3},{value:"Help",id:"help",level:3},{value:"Login",id:"login",level:2},{value:"Options",id:"options-1",level:3},{value:"Example",id:"example-1",level:3},{value:"Help",id:"help-1",level:3},{value:"Logout",id:"logout",level:2},{value:"Options",id:"options-2",level:3},{value:"Example",id:"example-2",level:3},{value:"Help",id:"help-2",level:3}],u={toc:s},p="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.c)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"-clinext-auth"},"$ clinext auth"),(0,r.yg)("h2",{id:"status"},"Status"),(0,r.yg)("p",null,"Checks authentication status with CliNext server."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"clinext auth status\n")),(0,r.yg)("h3",{id:"options"},"Options"),(0,r.yg)("p",null,"N/A"),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"clinext auth status\n")),(0,r.yg)("h3",{id:"help"},"Help"),(0,r.yg)("p",null,"N/A"),(0,r.yg)("h2",{id:"login"},"Login"),(0,r.yg)("p",null,"Log into CliNext server."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"clinext auth login\n")),(0,r.yg)("h3",{id:"options-1"},"Options"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"      --registryUsername      Username                                                                            [string]\n  -u, --registryPassword      Password                                                                            [string]\n      --registrySessionToken                                                              [number] [default: 1387]  \n")),(0,r.yg)("h3",{id:"example-1"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"clinext auth login --registryUsername myemail@gmail.com --registryPassword XXXX-XXXX\n")),(0,r.yg)("h3",{id:"help-1"},"Help"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"clinext auth login -h\n")),(0,r.yg)("h2",{id:"logout"},"Logout"),(0,r.yg)("p",null,"Logout of CliNext server."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"clinext auth logout\n")),(0,r.yg)("h3",{id:"options-2"},"Options"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"    --registryConfirmLogout  Logout of CliNext                                                           [number] [default: 1387]  \n")),(0,r.yg)("h3",{id:"example-2"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"clinext auth logout\n")),(0,r.yg)("h3",{id:"help-2"},"Help"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"clinext auth logout -h\n")))}g.isMDXComponent=!0}}]);