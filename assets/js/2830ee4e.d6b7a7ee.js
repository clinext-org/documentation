"use strict";(self.webpackChunkclinext=self.webpackChunkclinext||[]).push([[884],{94016:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(45072),i=(a(11504),a(95788)),r=a(51944),s=a.n(r);const l={sidebar_position:7},o="Side Effect",p={unversionedId:"reference/sideeffect",id:"reference/sideeffect",title:"Side Effect",description:"Data structure & behavior",source:"@site/docs/reference/sideeffect.mdx",sourceDirName:"reference",slug:"/reference/sideeffect",permalink:"/documentation/docs/next/reference/sideeffect",draft:!1,editUrl:"https://github.com/clinext-core/generator-clinext/tree/main/packages/create-docusaurus/templates/shared/docs/reference/sideeffect.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Transformer",permalink:"/documentation/docs/next/reference/transformer"},next:{title:"Extension",permalink:"/documentation/docs/next/reference/extension"}},d={},c=[{value:"Data structure &amp; behavior",id:"data-structure--behavior",level:2},{value:"Usage",id:"usage",level:2},{value:"<strike>Previously declared</strike>",id:"previously-declared",level:3},{value:"Inline",id:"inline",level:3},{value:"<strike>With a handler</strike>",id:"with-a-handler",level:4},{value:"With a template",id:"with-a-template",level:4},{value:"Conditions",id:"conditions",level:3}],u={toc:c},m="wrapper";function y(e){let{components:t,...a}=e;return(0,i.yg)(m,(0,n.c)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"side-effect"},"Side Effect"),(0,i.yg)("h2",{id:"data-structure--behavior"},"Data structure & behavior"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"A side effect can be used at any step to change an object (usually the CliNext payload) as a side effect of the step itself."),(0,i.yg)("li",{parentName:"ul"},"A side effect can be applied following a template"),(0,i.yg)("li",{parentName:"ul"},"A side effect can be applied barring conditions "),(0,i.yg)("li",{parentName:"ul"},"The side effects will be called sequentially as per their order in the array"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strike",null,"Create a project wide sideEffects in the form of a _cliNext file in ",(0,i.yg)("b",null,"src/validators/"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strike",null,"Any extension can declare its validators as well"))),(0,i.yg)(s(),{schema:{title:"Schema",type:"object",description:"",properties:{_clinextType:{type:"string",default:"sideeffect",enum:["sideeffect"]},name:{type:"string",description:"Unique ID"},description:{type:"string"},position:{type:"string",enum:["before","after"],description:"The moment the side effect is applied"},params:{type:"array",description:"Conditions to verify before applying the side effect"},handler:{type:"object",description:"Handler with parameters: params"},template:{type:"string",description:"The template is a regular [ejs](https://ejs.co) template. It will compile by using CliNext.payload as its data source."}},required:["id"]},mdxType:"JSONSchemaViewer"}),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"Example")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'"sideEffects": [\n    {\n        "position": "after",\n        "type": "payload",\n        "name": "databaseURI",\n        "template": "mongodb://root:DATABASE_PASSWORD_TO_CHANGE@localhost:<%= appDatabasePort %>/app?authSource=admin&readPreference=primary&ssl=false",\n        "conditions": [\n            {\n                "name": "appDatabaseType",\n                "operator": "=",\n                "operand": "mongodb"\n            }\n        ]\n    }\n]\n')),(0,i.yg)("h2",{id:"usage"},"Usage"),(0,i.yg)("p",null,"You can use a side effect in any question."),(0,i.yg)("h3",{id:"previously-declared"},(0,i.yg)("strike",null,"Previously declared")),(0,i.yg)("p",null,"To use a previously declared validator, pass its id and params if needed:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"{\n    ...\n    sideEffects: [\n        {\n            id: 'mySideEffectId',\n            params: {\n                myParam1: true\n            }\n        }\n    ]\n}\n")),(0,i.yg)("h3",{id:"inline"},"Inline"),(0,i.yg)("h4",{id:"with-a-handler"},(0,i.yg)("strike",null,"With a handler")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"{\n    ...\n    sideEffects: [\n        {            \n            handler: ({ input }) => {\n               ...\n            }\n        }\n    ]\n}\n")),(0,i.yg)("h4",{id:"with-a-template"},"With a template"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"{\n    ...\n    sideEffects: [\n        {\n            ...,\n            template: '...<%= variable %>...'\n        }\n    ]\n}\n")),(0,i.yg)("p",null,"The template is a regular ",(0,i.yg)("a",{parentName:"p",href:"https://ejs.co"},"ejs")," template.\nIt will compile by using CliNext.payload as its data source."),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://ejs.co/#docs"},"ejs documentation")),(0,i.yg)("h3",{id:"conditions"},"Conditions"),(0,i.yg)(s(),{schema:{title:"Schema",type:"object",description:"",properties:{_clinextType:{type:"string",default:"condition",enum:["condition"]},name:{type:"string",description:"The name of the "},description:{type:"string"},type:{type:"string",description:"Object type to use for comparisons",default:"payload"},operator:{type:"string",enum:["=",">","<"],description:"The operator used for comparison"},operand:{type:"string",description:"The key to get the value from the object"},template:{type:"string",description:"The template used to change the target value. It is a regular [ejs](https://ejs.co) template. It will compile by using CliNext.payload as its data source."}}},mdxType:"JSONSchemaViewer"}),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"Example")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'    {\n        "name": "appDatabaseType",\n        "operator": "=",\n        "operand": "mongodb",\n        "template": ""\n    }\n]\n')))}y.isMDXComponent=!0}}]);