"use strict";(self.webpackChunkclinext=self.webpackChunkclinext||[]).push([[7064],{5788:(e,n,t)=>{t.d(n,{Iu:()=>p,yg:()=>g});var r=t(1504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,g=d["".concat(c,".").concat(m)]||d[m]||l[m]||a;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8496:(e,n,t)=>{t(1504)},3808:(e,n,t)=>{t.d(n,{c:()=>a});var r=t(1504),o=t(6528);const a=e=>{let{light:n,dark:t,className:a="",role:i="img"}=e;const{colorMode:s}=(0,o.U)(),c="dark"===s?t:n;return r.createElement(c,{className:` \n            ${a}         \n          w-full`,role:i})}},3988:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=t(5072),o=(t(1504),t(5788));t(8496),t(3808);const a={sidebar_position:1},i="Add a GET route",s={unversionedId:"guides/routes/add",id:"guides/routes/add",title:"Add a GET route",description:"API stands for Application Programming Interface, meaning it's how to communicate with the system you are creating. A route within an API is a specific path to take to get specific information or data out of.",source:"@site/docs/guides/routes/add.mdx",sourceDirName:"guides/routes",slug:"/guides/routes/add",permalink:"/documentation/docs/next/guides/routes/add",draft:!1,editUrl:"https://github.com/clinext-core/generator-clinext/tree/main/packages/create-docusaurus/templates/shared/docs/guides/routes/add.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Routes",permalink:"/documentation/docs/next/category/routes"},next:{title:"Add a POST route",permalink:"/documentation/docs/next/guides/routes/post"}},c={},u=[{value:"References",id:"references",level:2}],p={toc:u},d="wrapper";function l(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,r.c)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"add-a-get-route"},"Add a GET route"),(0,o.yg)("p",null,"API stands for Application Programming Interface, meaning it's how to communicate with the system you are creating. A route within an API is a specific path to take to get specific information or data out of."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},'export default ({\n    __clinextType: \'route\',\n    method: CliNext.App.Route.Constants.Methods.GET,\n    path: \'/engine/byname\',\n    cache: {\n        type: CliNext.App.Route.Constants.Cache.Type.InMemory,\n        params: {\n            window: 10\n        }\n    },    \n    rateLimiting: {\n        type: CliNext.App.Route.Constants.RateLimiting.Type.FixedByIp,\n        params: {\n            limit: 10,\n            window: 100,\n            message: \'Too many requests\'\n        }\n    },\n    schema: {\n        queryString: {\n            featureId: { type: \'string\' }\n        },\n        response: {\n            200: {\n                type: \'object\',\n                properties: {\n                    index: { type: \'Object\' }\n                }\n            }\n        }\n    },\n    specification: {\n        tags: [\n            "bridge"\n        ],\n        summary: "Get user by user name",\n        description: "",\n        operationId: "getUserByName",\n        parameters: [\n            {\n                "name": "username",\n                "in": "path",\n                "description": "The name that needs to be fetched. Use user1 for testing. ",\n                "required": true,\n                "schema": {\n                    "type": "string"\n                }\n            }\n        ],\n        responses: {\n            200: {\n                "description": "successful operation",\n                "content": {\n                    "application/json": {\n                        "schema": {\n                            "$ref": "#/components/schemas/User"\n                        }\n                    },\n                    "application/xml": {\n                        "schema": {\n                            "$ref": "#/components/schemas/User"\n                        }\n                    }\n                }\n            },\n            400: {\n                "description": "Invalid username supplied"\n            },\n            404: {\n                "description": "Engine not found"\n            }\n        }\n    },\n    request: {\n        type: \'application/json\'\n    },\n    handler: async (request, response, next) => {\n        const { query } = request\n        // const { searchTerm, page = 0, pageSize = 10, sort = \'asc\', } = query\n        const { bridgeId, } = query\n        let _query = new CliNext.App.Query(\'Engine\')\n        _query.equalTo(\'uniqueRef\', bridgeId)\n        _query.select([\'name\', \'description\', \'manifest\', \'indexContent\', \'documentation\', \'owner\'])\n        _query.include([\'owner\'])\n        let result = await _query.first({ useMasterKey: true })\n\n        if (!result) {\n            throw ({ message: "No adapter found", code: 204 })\n        }\n        const payload = {\n            featureId: bridgeId,\n            id: result.id,\n            index: result.get(\'indexContent\'),\n            documentation: result.get(\'documentation\'),\n            manifest: result.get(\'manifest\'),\n            user: {\n                lastname: result.get(\'owner\').get(\'lastname\'),\n                id: result.get(\'owner\').id,\n                slug: result.get(\'owner\').get(\'slugableValue\'),\n                avatarUrl: result.get(\'owner\').get(\'avatarUrl\'),\n            },\n            interaction: {\n                comments: {\n                    count: 20,\n                },\n                likes: {\n                    count: 20,\n                }\n            }\n        }\n        return payload\n    }\n})\n')),(0,o.yg)("h2",{id:"references"},"References"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/documentation/docs/next/reference/feature/routes"},"Feature routes"))))}l.isMDXComponent=!0}}]);