"use strict";(self.webpackChunkclinext=self.webpackChunkclinext||[]).push([[2480],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>f});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(t),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},55152:(e,n,t)=>{t.d(n,{c:()=>c});var r=t(11504),a=t(86212),o=t(22440),l=t(35784),i=t(73608);const c=e=>{const n=e.npm?e.npm:(0,i.c)(e.yarn,"npm"),t=e.yarn?e.yarn:(0,i.c)(e.npm,"yarn");return r.createElement(a.default,null,r.createElement(o.default,{value:"npm",label:"npm",default:!0},r.createElement(l.default,{language:"bash"},n)),r.createElement(o.default,{value:"bash",label:"yarn"},r.createElement(l.default,{language:"bash"},t)))}},58132:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=t(45072),a=(t(11504),t(95788)),o=t(55152);const l={sidebar_position:0},i="Installation",c={unversionedId:"reference/commands/install",id:"version-1.3/reference/commands/install",title:"Installation",description:"Global installation",source:"@site/versioned_docs/version-1.3/reference/commands/install.mdx",sourceDirName:"reference/commands",slug:"/reference/commands/install",permalink:"/documentation/docs/reference/commands/install",draft:!1,editUrl:"https://github.com/clinext-core/documentation/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.3/reference/commands/install.mdx",tags:[],version:"1.3",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"CLI \ud83e\udd16",permalink:"/documentation/docs/category/cli-"},next:{title:"$ clinext app new",permalink:"/documentation/docs/reference/commands/appnew"}},s={},u=[{value:"Global installation",id:"global-installation",level:2},{value:"Quick usage",id:"quick-usage",level:2}],p={toc:u},m="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,r.c)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"installation"},"Installation"),(0,a.yg)("h2",{id:"global-installation"},"Global installation"),(0,a.yg)(o.c,{npm:"npm install -g clinext",mdxType:"BashTabs"}),(0,a.yg)("h2",{id:"quick-usage"},"Quick usage"),(0,a.yg)(o.c,{npm:"npx clinext",mdxType:"BashTabs"}))}d.isMDXComponent=!0}}]);