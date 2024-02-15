"use strict";(self.webpackChunkclinext=self.webpackChunkclinext||[]).push([[8504],{22440:(e,a,t)=>{t.r(a),t.d(a,{default:()=>s});var r=t(11504),n=t(14971);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:a,hidden:t,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.c)(l.tabItem,s),hidden:t},a)}},86212:(e,a,t)=>{t.r(a),t.d(a,{default:()=>T});var r=t(45072),n=t(11504),l=t(14971),s=t(77288),o=t(55592),i=t(95068),u=t(30604),d=t(46432);function c(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:r,default:n}}=e;return{value:a,label:t,attributes:r,default:n}}))}function m(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??c(t);return function(e){const a=(0,u.w)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function p(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function f(e){let{queryString:a=!1,groupId:t}=e;const r=(0,o.Uz)(),l=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,i._M)(l),(0,n.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(r.location.search);a.set(l,e),r.replace({...r.location,search:a.toString()})}),[l,r])]}function y(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,l=m(e),[s,o]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:l}))),[i,u]=f({queryString:t,groupId:r}),[c,y]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,l]=(0,d.IN)(t);return[r,(0,n.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),b=(()=>{const e=i??c;return p({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),y(e)}),[u,y,l]),tabValues:l}}var b=t(89788);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:a,block:t,selectedValue:o,selectValue:i,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.MV)(),m=e=>{const a=e.currentTarget,t=d.indexOf(a),r=u[t].value;r!==o&&(c(a),i(r))},p=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;a=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;a=d[t]??d[d.length-1];break}}a?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.c)("tabs",{"tabs--block":t},a)},u.map((e=>{let{value:a,label:t,attributes:s}=e;return n.createElement("li",(0,r.c)({role:"tab",tabIndex:o===a?0:-1,"aria-selected":o===a,key:a,ref:e=>d.push(e),onKeyDown:p,onClick:m},s,{className:(0,l.c)("tabs__item",h.tabItem,s?.className,{"tabs__item--active":o===a})}),t??a)})))}function g(e){let{lazy:a,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==r}))))}function E(e){const a=y(e);return n.createElement("div",{className:(0,l.c)("tabs-container",h.tabList)},n.createElement(v,(0,r.c)({},e,a)),n.createElement(g,(0,r.c)({},e,a)))}function T(e){const a=(0,b.c)();return n.createElement(E,(0,r.c)({key:String(a)},e))}},46816:(e,a,t)=>{t.d(a,{c:()=>c});var r=t(45072),n=t(11504);const l=e=>{const{data:a}=e,{header:t,rows:r}=a;return n.createElement("table",null,n.createElement("thead",null,t.columns.map((e=>n.createElement("td",{key:e.id,className:"font-bold text-center"}," ",e.label," ")))),n.createElement("tbody",null,r.map((e=>n.createElement("tr",{key:e.id},e.columns.map((e=>n.createElement("td",{key:e.id,className:""},e.value))))))))},s=function(e){void 0===e&&(e={});const{name:a,url:t}=e;return n.createElement("div",{className:"           bg-slate-100 border border-customc-main                      rounded-lg           px-0 py-0        text-center      anakcss-affordance-base                               "},n.createElement("span",{className:"                                             "},`${a}`))},o=function(e){void 0===e&&(e={});const{name:a,url:t,tooltip:r}=e;return n.createElement("div",{className:" has-tooltip                                 "},r&&n.createElement("span",{className:"\n                tooltip\n                bg-slate-600\n                text-slate-100\n                rounded-full\n                shadow-lg \n                px-4 \n                p-2  \n                -mt-12\n                anakcss-affordance-base       \n            "},r),n.createElement("a",{href:`${t}`,className:" anakcss-affordance-base           hover:text-customc-main           no-underline  decoration-customc-main                                                  "},n.createElement("span",{className:"                                                         hover:text-customc-main                                 "},`${a}`)))},i=e=>{let{data:a,types:t}=e;const{header:r,rows:l}=a;let i=l.map((e=>{const{columns:a}=e,r=a.map(((e,a)=>{if(!e)return{id:a,value:n.createElement("span",null)};if("string"===typeof e)return{id:a,value:e};{const{type:r}=e;switch(r){case"boolean":return{id:a,value:n.createElement(s,{name:e.value?"True":"False"})};case"values":return{id:a,value:e.value.map((e=>n.createElement(s,{name:e})))};case"element":{const t=e.value;return{id:a,value:n.createElement(t,null)}}case"type":{const{value:r}=e;let l=t.items.filter((e=>e.id===r));if(!l||!l.length)break;l=l[0];const s=`${l.path}`,{mode:i}=e;let u=l.name;if("array"===i)u=`[${l.name}]`;return{id:a,value:n.createElement(o,{name:u,url:s,tooltip:l.description})}}}}return e}));return{...e,columns:r}}));return i=i.filter((e=>e)),{header:r,rows:i}},u=e=>e.filter(((a,t)=>e.indexOf(a)===t)),d=e=>{let{data:a,types:t,isPlain:r}=e;if(r)return i({data:a,types:t});const n=(e=>{let{data:a}=e;const{header:t,rows:r}=a;let n=[];return r.forEach((e=>{const a=Object.keys(e);n=n.concat(a)})),n=u(n),{header:t,rows:r.map(((e,t)=>({columns:a.header.columns.map((a=>{const{id:t}=a;return e[t]}))})))}})({data:a});return i({data:n,types:t})},c=e=>{const a=d({data:e.data,types:e.types,isPlain:e.isPlain});return n.createElement(l,(0,r.c)({},e,{data:a}))}},95820:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>u,default:()=>y,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var r=t(45072),n=(t(11504),t(95788)),l=t(46816),s=t(51944),o=t.n(s);const i={sidebar_position:3},u="Transformer",d={unversionedId:"reference/transformer",id:"version-1.0/reference/transformer",title:"Transformer",description:"Data structure & behavior",source:"@site/versioned_docs/version-1.0/reference/transformer.mdx",sourceDirName:"reference",slug:"/reference/transformer",permalink:"/documentation/docs/reference/transformer",draft:!1,editUrl:"https://github.com/clinext-core/generator-clinext/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0/reference/transformer.mdx",tags:[],version:"1.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Validator",permalink:"/documentation/docs/reference/validator"},next:{title:"Side Effect",permalink:"/documentation/docs/reference/sideeffect"}},c={},m=[{value:"Data structure &amp; behavior",id:"data-structure--behavior",level:2},{value:"Modes",id:"modes",level:3},{value:"In",id:"in",level:4},{value:"Out",id:"out",level:4},{value:"Display",id:"display",level:4},{value:"Create",id:"create",level:2},{value:"Use",id:"use",level:2},{value:"File based",id:"file-based",level:3},{value:"Inline",id:"inline",level:3},{value:"Template",id:"template",level:3}],p={toc:m},f="wrapper";function y(e){let{components:a,...t}=e;return(0,n.yg)(f,(0,r.c)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"transformer"},"Transformer"),(0,n.yg)("h2",{id:"data-structure--behavior"},"Data structure & behavior"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"A transformer's mode can either be display, in or out"),(0,n.yg)("li",{parentName:"ul"},"The ",(0,n.yg)("i",null,"transformers")," entry holds the information for these three types of transformation"),(0,n.yg)("li",{parentName:"ul"},"A display, in or out is an array of transformers"),(0,n.yg)("li",{parentName:"ul"},"The transformers will be called sequentially as per their order in the array")),(0,n.yg)("p",null,"Example"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"transformers: [\n    {\n        modes: ['in', 'display'],\n        id: \"capitalizeFirstLetter\",\n    },\n    {\n        modes: ['in', 'display'],\n        handler: ({ input }) => {\n            if(!input) {\n                return \"\"\n            }\n            return `{${input}}`\n        }\n    },\n    {\n        modes: ['out'],\n        template: `<%= destination %>/<%= featureId %>`\n    }\n]\n\n")),(0,n.yg)("h3",{id:"modes"},"Modes"),(0,n.yg)("h4",{id:"in"},"In"),(0,n.yg)("p",null,"An In transformer is applied to a value before it is presented to the inquirer."),(0,n.yg)("h4",{id:"out"},"Out"),(0,n.yg)("p",null,"An Out transformer is applied to a value after it is presented to the inquirer and filled by the user."),(0,n.yg)("h4",{id:"display"},"Display"),(0,n.yg)("p",null,"A Display transformer is applied to a value only for display formatting."),(0,n.yg)("h2",{id:"create"},"Create"),(0,n.yg)("p",null,"Create a project wide transformer in the form of a _cliNext file in ",(0,n.yg)("b",null,"src/transformers/{in|out|display}"),"."),(0,n.yg)(o(),{schema:{title:"Transformer schema",type:"object",description:"Allows for schema to be seen",properties:{_clinextType:{type:"string"},id:{type:"string",description:"Unique ID"},modes:{type:"array",enum:["in","out","display"],description:"Transformer modes"},description:{type:"string"},template:{type:"string"},handler:{type:"object",description:"Transformer modes"}},required:["modes"]},mdxType:"JSONSchemaViewer"}),(0,n.yg)("h2",{id:"use"},"Use"),(0,n.yg)("p",null,"You can declare a transformer in three different ways"),(0,n.yg)("h3",{id:"file-based"},"File based"),(0,n.yg)("p",null,"Pass the id of the transformer in the corresponding section of the ",(0,n.yg)("i",null,"transformers")," section."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"}," transformers: [\n   {\n      id: 'myDisplayTransformerId',\n      params: {\n        myParam1: true\n      }\n    }\n  ]\n")),(0,n.yg)(l.c,{types:{},data:{header:{columns:[{id:"parameter",label:"Parameter"},{id:"type",label:"Type"},{id:"description",label:"Description"},{id:"defaultValue",label:"Default value"},{id:"mandatory",label:"Mandatory"}]},rows:[{parameter:"id",type:"string",description:"Transformer id",defaultValue:"",mandatory:{type:"boolean",value:!0}},{parameter:"params",type:"object",description:"Transformer payload",defaultValue:"{}",mandatory:{type:"boolean",value:!1}},{parameter:"modes",type:"array",description:"Transformers modes",defaultValue:"",mandatory:{type:"boolean",value:!0}}]},mdxType:"ReferenceTable"}),(0,n.yg)("p",null,"Example"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"}," transformers: {\n    display: [{\n      id: 'isFolderEmpty',\n      params: {\n        excludeHiddenFiles: true\n      }\n    }]\n  }\n")),(0,n.yg)("h3",{id:"inline"},"Inline"),(0,n.yg)(l.c,{types:{},data:{header:{columns:[{id:"parameter",label:"Parameter"},{id:"type",label:"Type"},{id:"description",label:"Description"},{id:"defaultValue",label:"Default value"},{id:"mandatory",label:"Mandatory"}]},rows:[{parameter:"id",type:"string",description:"Transformer id",defaultValue:"",mandatory:{type:"boolean",value:!0}},{parameter:"params",type:"object",description:"Transformer payload",defaultValue:"{}",mandatory:{type:"boolean",value:!1}}]},mdxType:"ReferenceTable"}),(0,n.yg)("i",null,"Example"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"}," transformers: {\n    out: ['myOutTransformerId']\n  }\n")),(0,n.yg)("h3",{id:"template"},"Template"),(0,n.yg)(l.c,{types:{},data:{header:{columns:[{id:"parameter",label:"Parameter"},{id:"type",label:"Type"},{id:"description",label:"Description"},{id:"defaultValue",label:"Default value"},{id:"mandatory",label:"Mandatory"}]},rows:[{parameter:"id",type:"string",description:"Transformer id",defaultValue:"",mandatory:{type:"boolean",value:!0}},{parameter:"params",type:"object",description:"Transformer payload",defaultValue:"{}",mandatory:{type:"boolean",value:!1}}]},mdxType:"ReferenceTable"}),(0,n.yg)("i",null,"Example"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"transformers: {\n    out: [{\n        template: `<%= destination %>/<%= featureId %>`\n    }]\n}\n")))}y.isMDXComponent=!0}}]);