"use strict";(self.webpackChunkclinext=self.webpackChunkclinext||[]).push([[1920],{46816:(e,a,n)=>{n.d(a,{c:()=>p});var t=n(45072),r=n(11504);const l=e=>{const{data:a}=e,{header:n,rows:t}=a;return r.createElement("table",null,r.createElement("thead",null,n.columns.map((e=>r.createElement("td",{key:e.id,className:"font-bold text-center"}," ",e.label," ")))),r.createElement("tbody",null,t.map((e=>r.createElement("tr",{key:e.id},e.columns.map((e=>r.createElement("td",{key:e.id,className:""},e.value))))))))},s=function(e){void 0===e&&(e={});const{name:a,url:n}=e;return r.createElement("div",{className:"           bg-slate-100 border border-customc-main                      rounded-lg           px-0 py-0        text-center      anakcss-affordance-base                               "},r.createElement("span",{className:"                                             "},`${a}`))},i=function(e){void 0===e&&(e={});const{name:a,url:n,tooltip:t}=e;return r.createElement("div",{className:" has-tooltip                                 "},t&&r.createElement("span",{className:"\n                tooltip\n                bg-slate-600\n                text-slate-100\n                rounded-full\n                shadow-lg \n                px-4 \n                p-2  \n                -mt-12\n                anakcss-affordance-base       \n            "},t),r.createElement("a",{href:`${n}`,className:" anakcss-affordance-base           hover:text-customc-main           no-underline  decoration-customc-main                                                  "},r.createElement("span",{className:"                                                         hover:text-customc-main                                 "},`${a}`)))},o=e=>{let{data:a,types:n}=e;const{header:t,rows:l}=a;let o=l.map((e=>{const{columns:a}=e,t=a.map(((e,a)=>{if(!e)return{id:a,value:r.createElement("span",null)};if("string"===typeof e)return{id:a,value:e};{const{type:t}=e;switch(t){case"boolean":return{id:a,value:r.createElement(s,{name:e.value?"True":"False"})};case"values":return{id:a,value:e.value.map((e=>r.createElement(s,{name:e})))};case"element":{const n=e.value;return{id:a,value:r.createElement(n,null)}}case"type":{const{value:t}=e;let l=n.items.filter((e=>e.id===t));if(!l||!l.length)break;l=l[0];const s=`${l.path}`,{mode:o}=e;let d=l.name;if("array"===o)d=`[${l.name}]`;return{id:a,value:r.createElement(i,{name:d,url:s,tooltip:l.description})}}}}return e}));return{...e,columns:t}}));return o=o.filter((e=>e)),{header:t,rows:o}},d=e=>e.filter(((a,n)=>e.indexOf(a)===n)),m=e=>{let{data:a,types:n,isPlain:t}=e;if(t)return o({data:a,types:n});const r=(e=>{let{data:a}=e;const{header:n,rows:t}=a;let r=[];return t.forEach((e=>{const a=Object.keys(e);r=r.concat(a)})),r=d(r),{header:n,rows:t.map(((e,n)=>({columns:a.header.columns.map((a=>{const{id:n}=a;return e[n]}))})))}})({data:a});return o({data:r,types:n})},p=e=>{const a=m({data:e.data,types:e.types,isPlain:e.isPlain});return r.createElement(l,(0,t.c)({},e,{data:a}))}},78088:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var t=n(45072),r=(n(11504),n(95788)),l=(n(46816),n(51944)),s=n.n(l);const i={sidebar_position:6},o="Transformer",d={unversionedId:"reference/transformer",id:"reference/transformer",title:"Transformer",description:"- A transformer's mode can either be display, in or out",source:"@site/docs/reference/transformer.mdx",sourceDirName:"reference",slug:"/reference/transformer",permalink:"/documentation/docs/next/reference/transformer",draft:!1,editUrl:"https://github.com/clinext-core/generator-clinext/tree/main/packages/create-docusaurus/templates/shared/docs/reference/transformer.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Validator",permalink:"/documentation/docs/next/reference/validator"},next:{title:"Side Effect",permalink:"/documentation/docs/next/reference/sideeffect"}},m={},p=[{value:"Modes",id:"modes",level:3},{value:"In",id:"in",level:4},{value:"Out",id:"out",level:4},{value:"Display",id:"display",level:4},{value:"Usage",id:"usage",level:2},{value:"Previously declared transformer",id:"previously-declared-transformer",level:3},{value:"Inline",id:"inline",level:3},{value:"With a handler",id:"with-a-handler",level:4},{value:"With a template",id:"with-a-template",level:4},{value:"Example",id:"example",level:2}],u={toc:p},c="wrapper";function y(e){let{components:a,...n}=e;return(0,r.yg)(c,(0,t.c)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"transformer"},"Transformer"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"A transformer's mode can either be display, in or out"),(0,r.yg)("li",{parentName:"ul"},"The ",(0,r.yg)("i",null,"transformers")," entry holds the information for these three types of transformation"),(0,r.yg)("li",{parentName:"ul"},"A display, in or out is an array of transformers"),(0,r.yg)("li",{parentName:"ul"},"The transformers will be called sequentially as per their order in the array"),(0,r.yg)("li",{parentName:"ul"},"Create a project wide transformer in the form of a _cliNext file in ",(0,r.yg)("b",null,"src/transformers/{in|out|display}"),".")),(0,r.yg)(s(),{schema:{title:"Transformer schema",type:"object",description:"Allows for schema to be seen",properties:{_clinextType:{type:"string",default:"transformer",enum:["transformer"]},id:{type:"string",description:"Unique ID"},modes:{type:"array",enum:["in","out","display"],description:"Transformer modes"},description:{type:"string"},template:{type:"string",description:"The template is a regular [ejs](https://ejs.co) template. It will compile by using CliNext.payload as its data source."},params:{type:"object",description:"Params for a previously declared transformer"},handler:{type:"object",description:"Handler"}},required:["id","modes"]},mdxType:"JSONSchemaViewer"}),(0,r.yg)("h3",{id:"modes"},"Modes"),(0,r.yg)("h4",{id:"in"},"In"),(0,r.yg)("p",null,"An In transformer is applied to a value before it is presented to the inquirer."),(0,r.yg)("h4",{id:"out"},"Out"),(0,r.yg)("p",null,"An Out transformer is applied to a value after it is presented to the inquirer and filled by the user."),(0,r.yg)("h4",{id:"display"},"Display"),(0,r.yg)("p",null,"A Display transformer is applied to a value only for display formatting."),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("p",null,"You can use a transformer in any question."),(0,r.yg)("h3",{id:"previously-declared-transformer"},"Previously declared transformer"),(0,r.yg)("p",null,"To use a previously declared transformer, pass its id and params if needed:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"{\n    ...\n    transformers: [\n        {\n            id: 'myDisplayTransformerId',\n            params: {\n                myParam1: true\n            }\n        }\n    ]\n}\n")),(0,r.yg)("h3",{id:"inline"},"Inline"),(0,r.yg)("h4",{id:"with-a-handler"},"With a handler"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"{\n    ...\n    transformers: [\n        {\n            ...,\n            handler: ({ input }) => {\n               ...\n            }\n        }\n    ]\n}\n")),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"{\n    ...\n    transformers: [\n        {\n            modes: ['in', 'display'],\n            handler: ({ input }) => {\n                if(!input) {\n                    return \"\"\n                }\n                return `{${input}}`\n            }\n        }\n    ]\n}\n")),(0,r.yg)("h4",{id:"with-a-template"},"With a template"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"{\n    ...\n    transformers: [\n        {\n            ...,\n            template: '...<%= payloadVariable %>...'\n        }\n    ]\n}\n")),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"{\n    ...\n    transformers: [\n        {\n            modes: ['in', 'display'],\n            template: `<%= destination %>/<%= featureId %>`\n        }\n    ]\n}\n")),(0,r.yg)("p",null,"The template is a regular ",(0,r.yg)("a",{parentName:"p",href:"https://ejs.co"},"ejs")," template.\nIt will compile by using CliNext.payload as its data source."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://ejs.co/#docs"},"ejs documentation")),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"transformers: [\n    {\n        modes: ['in', 'display'],\n        id: \"capitalizeFirstLetter\",\n    },\n    {\n        modes: ['in', 'display'],\n        handler: ({ input }) => {\n            if(!input) {\n                return \"\"\n            }\n            return `{${input}}`\n        }\n    },\n    {\n        modes: ['out'],\n        template: `<%= destination %>/<%= featureId %>`\n    }\n]\n\n")))}y.isMDXComponent=!0}}]);