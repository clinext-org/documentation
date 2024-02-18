"use strict";(self.webpackChunkclinext=self.webpackChunkclinext||[]).push([[8240],{30124:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var t=i(45072),o=(i(11504),i(95788)),r=i(51944),a=i.n(r);const c={sidebar_position:1},s="Config",l={unversionedId:"reference/config",id:"reference/config",title:"Config",description:"- Location `/clinext.config.js`",source:"@site/docs/reference/config.mdx",sourceDirName:"reference",slug:"/reference/config",permalink:"/documentation/docs/next/reference/config",draft:!1,editUrl:"https://github.com/clinext-org/documentation/tree/main/packages/create-docusaurus/templates/shared/docs/reference/config.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Anatomy of a CliNext app",permalink:"/documentation/docs/next/reference/anatomy"},next:{title:"CliNext",permalink:"/documentation/docs/next/reference/clinext"}},p={},d=[{value:"Schema",id:"schema",level:3},{value:"Example",id:"example",level:3}],m={toc:d},g="wrapper";function u(e){let{components:n,...i}=e;return(0,o.yg)(g,(0,t.c)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"config"},"Config"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Location ",(0,o.yg)("inlineCode",{parentName:"li"},"/clinext.config.js"))),(0,o.yg)("h3",{id:"schema"},"Schema"),(0,o.yg)(a(),{schema:{title:"CliNext",type:"object",description:"",properties:{__clinextApiVersion:{type:"string",description:"Semver value of compatible CliNext versions."},name:{type:"string",description:"CLI name (actual bin value)"},epilog:{type:"string",description:"CLI epilog"},usage:{type:"string",description:"Usage description"},extensions:{type:"array",description:"Extension list"}},required:["__clinextApiVersion","name"]},mdxType:"JSONSchemaViewer"}),(0,o.yg)("h3",{id:"example"},"Example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},'export default ({\n  __clinextApiVersion: "1.0.0",\n  name: "@servable/cli",\n  usage: "servable <command>",\n  epilog: "Made by servable",\n  extensions: [\n    "@clinext/chunks-extension"\n  ]\n})\n')))}u.isMDXComponent=!0}}]);