"use strict";(self.webpackChunkclinext=self.webpackChunkclinext||[]).push([[512],{88016:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var a=l(45072),n=(l(11504),l(95788)),i=l(51944),r=l.n(i);const p={sidebar_position:2},o="CliNext",c={unversionedId:"reference/clinext",id:"reference/clinext",title:"CliNext",description:"- CliNext is globally available",source:"@site/docs/reference/clinext.mdx",sourceDirName:"reference",slug:"/reference/clinext",permalink:"/documentation/docs/next/reference/clinext",draft:!1,editUrl:"https://github.com/clinext-org/documentation/tree/main/packages/create-docusaurus/templates/shared/docs/reference/clinext.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Config",permalink:"/documentation/docs/next/reference/config"},next:{title:"Command",permalink:"/documentation/docs/next/reference/command"}},s={},u=[{value:"CliNext.payload",id:"clinextpayload",level:2},{value:"CliNext.prompt",id:"clinextprompt",level:2},{value:"CliNext.prompt.ask",id:"clinextpromptask",level:3},{value:"CliNext.env",id:"clinextenv",level:2},{value:"CliNext.template",id:"clinexttemplate",level:2},{value:"CliNext.spawn",id:"clinextspawn",level:2},{value:"CliNext.ui",id:"clinextui",level:2},{value:"CliNext.ui.drawSectionHeader",id:"clinextuidrawsectionheader",level:3}],d={toc:u},m="wrapper";function g(e){let{components:t,...l}=e;return(0,n.yg)(m,(0,a.c)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"clinext"},"CliNext"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"CliNext is globally available")),(0,n.yg)("h2",{id:"clinextpayload"},"CliNext.payload"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"CliNext.payload")," gives access to the current payload."),(0,n.yg)("li",{parentName:"ul"},"Can be read and written ")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Example")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"CliNext.payload.destination = `${CliNext.payload.appPath}/features/${CliNext.payload.featureId}`\n")),(0,n.yg)("h2",{id:"clinextprompt"},"CliNext.prompt"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"CliNext.prompt")," gives access to the prompting functions."),(0,n.yg)("li",{parentName:"ul"},"Can be called ")),(0,n.yg)("h3",{id:"clinextpromptask"},"CliNext.prompt.ask"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Ask a question to the user"),(0,n.yg)("li",{parentName:"ul"},"Can be either a single question (object) or an array of questions"),(0,n.yg)("li",{parentName:"ul"},"Async function"),(0,n.yg)("li",{parentName:"ul"},"Can be called")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Example")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"await CliNext.prompt.ask([\n    {\n        name: 'featureId',\n    },\n])\n")),(0,n.yg)("h2",{id:"clinextenv"},"CliNext.env"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"CliNext.env")," conveninetly gives the current environment values."),(0,n.yg)("li",{parentName:"ul"},"Can be called "),(0,n.yg)("li",{parentName:"ul"},"env files: ",(0,n.yg)("inlineCode",{parentName:"li"},".env")," for production and ",(0,n.yg)("inlineCode",{parentName:"li"},".env.development"),"for local development.")),(0,n.yg)("h2",{id:"clinexttemplate"},"CliNext.template"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"CliNext.template")," gives access to the template engine."),(0,n.yg)("li",{parentName:"ul"},"Can be called")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Example")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},'const data = await CliNext.template.render({ template: ``, data: {myVar: "value"} })\n')),(0,n.yg)("h2",{id:"clinextspawn"},"CliNext.spawn"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Spawns a cli command."),(0,n.yg)("li",{parentName:"ul"},"Can be called")),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Example")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"const options = {\n    cwd: destination\n}\nawait toolbox.spawn('git', ['init', '--quiet', '--initial-branch=main'], options)\n")),(0,n.yg)("h2",{id:"clinextui"},"CliNext.ui"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Namespace for drawing custom elements on the screen"),(0,n.yg)("li",{parentName:"ul"},"Can be called")),(0,n.yg)("h3",{id:"clinextuidrawsectionheader"},"CliNext.ui.drawSectionHeader"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Draws header text ")),(0,n.yg)(r(),{schema:{title:"args",type:"object",description:"",properties:{title:{type:"string",description:"Title"},subTitle:{type:"string",description:"Subtitle"},id:{type:"string",description:"Unique ID"},type:{type:"array",enum:["h1","h2","text"],description:"Element type",default:"text"}},required:["title"]},mdxType:"JSONSchemaViewer"}),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Example")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"CliNext.ui.drawSectionHeader({\n    type: 'h1',\n    title: \"Database configuration\"\n})\n")))}g.isMDXComponent=!0}}]);