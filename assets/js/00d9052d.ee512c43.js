"use strict";(self.webpackChunkclinext=self.webpackChunkclinext||[]).push([[3216],{5788:(e,t,r)=>{r.d(t,{Iu:()=>p,yg:()=>y});var n=r(1504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9020:(e,t,r)=>{r.d(t,{c:()=>s});var n=r(1504),a=r(1268),l=r(5388),o=r(4628),i=r(3608);const s=e=>{const t=e.npm?e.npm:(0,i.c)(e.yarn,"npm"),r=e.yarn?e.yarn:(0,i.c)(e.npm,"yarn");return n.createElement(a.c,null,n.createElement(l.c,{value:"npm",label:"npm",default:!0},n.createElement(o.c,{language:"bash"},t)),n.createElement(l.c,{value:"bash",label:"yarn"},n.createElement(o.c,{language:"bash"},r)))}},6728:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(5072),a=(r(1504),r(5788)),l=r(9020);const o={sidebar_position:0},i="Quick Start \ud83d\ude80",s={unversionedId:"quickStart",id:"version-1.0/quickStart",title:"Quick Start \ud83d\ude80",description:"This quick start will use the @clinext/parse-server-engine engine.",source:"@site/versioned_docs/version-1.0/quickStart.mdx",sourceDirName:".",slug:"/quickStart",permalink:"/docs/quickStart",draft:!1,editUrl:"https://github.com/clinext-core/generator-clinext/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0/quickStart.mdx",tags:[],version:"1.0",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Overview",permalink:"/docs/overview"}},c={},p=[{value:"Step 1: Install Node JS",id:"step-1-install-node-js",level:3},{value:"Step 3: Install the CliNext CLI",id:"step-3-install-the-clinext-cli",level:3},{value:"Step 4: Create a new CliNext app",id:"step-4-create-a-new-clinext-app",level:3},{value:"Step 5: Add your own model",id:"step-5-add-your-own-model",level:3},{value:"Step 6: Start the server",id:"step-6-start-the-server",level:3}],d={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.c)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"quick-start-"},"Quick Start \ud83d\ude80"),(0,a.yg)("p",null,"This quick start will use the @clinext/parse-server-engine engine."),(0,a.yg)("h3",{id:"step-1-install-node-js"},"Step 1: Install ",(0,a.yg)("a",{parentName:"h3",href:"https://nodejs.org/en/download/"},"Node JS")),(0,a.yg)("p",null,"Before you install CliNext, make sure to download and install Node.js (version 18.x or higher), a JavaScript runtime.\nWhen installing Node.js, you are recommended to check all checkboxes related to dependencies."),(0,a.yg)("h3",{id:"step-3-install-the-clinext-cli"},"Step 3: Install the CliNext CLI"),(0,a.yg)("p",null,"The CliNext Command Line Interface "),(0,a.yg)(l.c,{npm:"npm install -g @clinext/cli",mdxType:"BashTabs"}),(0,a.yg)("h3",{id:"step-4-create-a-new-clinext-app"},"Step 4: Create a new CliNext app"),(0,a.yg)("p",null,"Using the @clinext/parse-server-engine:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"clinext app new -q\n")),(0,a.yg)("p",null,"The CliNext app has a dedicated system docker-compose for local development that will start a mongodb database, a Parse Server dashboard, a Redis cache database and a Redis Live Query server."),(0,a.yg)("h3",{id:"step-5-add-your-own-model"},"Step 5: Add your own model"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"clinext model add\n")),(0,a.yg)("p",null,"Models definition are stored in the app/schema folder."),(0,a.yg)("h3",{id:"step-6-start-the-server"},"Step 6: Start the server"),(0,a.yg)(l.c,{npm:"npm run start",mdxType:"BashTabs"}),(0,a.yg)("p",null,"At this point the local CliNext docker compose has been launched and you can access"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The ",(0,a.yg)("strong",{parentName:"li"},"API endpoint")," at ",(0,a.yg)("a",{parentName:"li",href:"http://localhost:1387/clinext"},"http://localhost:1387/clinext")),(0,a.yg)("li",{parentName:"ul"},"The ",(0,a.yg)("strong",{parentName:"li"},"Parse Server Dashboard")," at ",(0,a.yg)("a",{parentName:"li",href:"http://localhost:4080"},"http://localhost:4080")," (username: admin, password: PASSWORD_TO_CHANGE)"),(0,a.yg)("li",{parentName:"ul"},"The ",(0,a.yg)("strong",{parentName:"li"},"Minio ui endpoint")," at ",(0,a.yg)("a",{parentName:"li",href:"http://localhost:9001"},"http://localhost:9001")," (username: MINIO_USERNAME_TO_CHANGE, password: MINIO_PASSWORD_TO_CHANGE)")),(0,a.yg)("p",null,"Learn more with ",(0,a.yg)("a",{parentName:"p",href:"/docs/tutorials/overview"},"tutorials")))}m.isMDXComponent=!0}}]);