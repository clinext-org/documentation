"use strict";(self.webpackChunkclinext=self.webpackChunkclinext||[]).push([[5352],{35440:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>m,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(45072),i=(t(11504),t(95788)),r=t(51944),s=t.n(r);const o={sidebar_position:4},m="Question",l={unversionedId:"reference/question",id:"version-1.3/reference/question",title:"Question",description:"- Project wide question in the form of a _cliNext file in src/questions/.",source:"@site/versioned_docs/version-1.3/reference/question.mdx",sourceDirName:"reference",slug:"/reference/question",permalink:"/documentation/docs/reference/question",draft:!1,editUrl:"https://github.com/clinext-org/documentation/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.3/reference/question.mdx",tags:[],version:"1.3",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Command",permalink:"/documentation/docs/reference/command"},next:{title:"Validator",permalink:"/documentation/docs/reference/validator"}},p={},c=[{value:"Usage",id:"usage",level:2}],d={toc:c},u="wrapper";function g(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,a.c)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"question"},"Question"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Project wide question in the form of a _cliNext file in ",(0,i.yg)("b",null,"src/questions/"),"."),(0,i.yg)("li",{parentName:"ul"},"To inherit a question the only required argument is ",(0,i.yg)("inlineCode",{parentName:"li"},"name"),". The rest of the arguments will be inherited."),(0,i.yg)("li",{parentName:"ul"},"Order of precedence: ",(0,i.yg)("strong",{parentName:"li"},"CliNext.prompt.ask")," > ",(0,i.yg)("strong",{parentName:"li"},"command")," > ",(0,i.yg)("strong",{parentName:"li"},"src/questions")),(0,i.yg)("li",{parentName:"ul"},"A ",(0,i.yg)("strong",{parentName:"li"},"CliNext.prompt.ask")," question inherits a matching ",(0,i.yg)("strong",{parentName:"li"},"command")," question if there's any"),(0,i.yg)("li",{parentName:"ul"},"If there's no matching ",(0,i.yg)("strong",{parentName:"li"},"command")," question, ",(0,i.yg)("strong",{parentName:"li"},"CliNext.prompt.ask")," question inherits a matching ",(0,i.yg)("strong",{parentName:"li"},"src/questions")," question if there's any"),(0,i.yg)("li",{parentName:"ul"},"A ",(0,i.yg)("strong",{parentName:"li"},"command")," question inherits a ",(0,i.yg)("strong",{parentName:"li"},"src/questions")," question if there's any"),(0,i.yg)("li",{parentName:"ul"},"A ",(0,i.yg)("strong",{parentName:"li"},"CliNext.prompt.ask")," question inherits a ",(0,i.yg)("strong",{parentName:"li"},"command")," question"),(0,i.yg)("li",{parentName:"ul"},"A question defined by ",(0,i.yg)("strong",{parentName:"li"},"Command")," takes precedence over a question defined in ",(0,i.yg)("strong",{parentName:"li"},"Command"))),(0,i.yg)(s(),{schema:{title:"Question",type:"object",description:"Allows for schema to be seen",properties:{_clinextType:{type:"string",default:"question",enum:["question"]},name:{type:"string",description:"Unique ID"},description:{type:"string",description:"Command description"},validators:{type:"array",description:"Validators"},transformers:{type:"array",description:"Transformers"},sideEffects:{type:"array",description:"Side effects"}},required:["name"]},mdxType:"JSONSchemaViewer"}),(0,i.yg)("h2",{id:"usage"},"Usage"),(0,i.yg)("p",null,"You can pass the name of the transformer in a command ",(0,i.yg)("i",null,"questions"),"."),(0,i.yg)("p",null,"In any ",(0,i.yg)("strong",{parentName:"p"},"Command")," (",(0,i.yg)("inlineCode",{parentName:"p"},"src/commands")," folder)"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"export default ({\n    _clinextType: \"command\",\n    name: 'schema',\n    questions: [\n    {\n        name: 'appPath',\n        message: \"Path to app\",\n        validators: [{ id: 'nonempty' }]\n    },\n]\n})\n")),(0,i.yg)("p",null,"In a command handler ",(0,i.yg)("strong",{parentName:"p"},"CliNext.prompt.ask")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"await CliNext.prompt.ask([\n    {        \n        name: 'appPath',\n        message: \"Path to app\",\n        validators: [{ id: 'nonempty' }]        \n    },\n])\n")))}g.isMDXComponent=!0}}]);