"use strict";(self.webpackChunkclinext=self.webpackChunkclinext||[]).push([[7238],{95788:(n,e,t)=>{t.d(e,{Iu:()=>d,yg:()=>y});var a=t(11504);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n,e){if(null==n)return{};var t,a,o=function(n,e){if(null==n)return{};var t,a,o={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var i=a.createContext({}),m=function(n){var e=a.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},d=function(n){var e=m(n.components);return a.createElement(i.Provider,{value:e},n.children)},l="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(n,e){var t=n.components,o=n.mdxType,r=n.originalType,i=n.parentName,d=p(n,["components","mdxType","originalType","parentName"]),l=m(t),c=o,y=l["".concat(i,".").concat(c)]||l[c]||u[c]||r;return t?a.createElement(y,s(s({ref:e},d),{},{components:t})):a.createElement(y,s({ref:e},d))}));function y(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var r=t.length,s=new Array(r);s[0]=c;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=n,p[l]="string"==typeof n?n:o,s[1]=p;for(var m=2;m<r;m++)s[m]=t[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},71664:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var a=t(45072),o=(t(11504),t(95788));const r={sidebar_position:4},s="Remote questions",p={unversionedId:"guides/questions/remote",id:"guides/questions/remote",title:"Remote questions",description:"You can ask a series of questions by providing a JSON array fetched remotely or loaded from a local file.",source:"@site/docs/guides/questions/remote.mdx",sourceDirName:"guides/questions",slug:"/guides/questions/remote",permalink:"/documentation/docs/next/guides/questions/remote",draft:!1,editUrl:"https://github.com/clinext-core/generator-clinext/tree/main/packages/create-docusaurus/templates/shared/docs/guides/questions/remote.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Structure questions in the app",permalink:"/documentation/docs/next/guides/questions/structure"},next:{title:"Samples",permalink:"/documentation/docs/next/guides/questions/samples"}},i={},m=[{value:"Example",id:"example",level:2}],d={toc:m},l="wrapper";function u(n){let{components:e,...t}=n;return(0,o.yg)(l,(0,a.c)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"remote-questions"},"Remote questions"),(0,o.yg)("p",null,"You can ask a series of questions by providing a JSON array fetched remotely or loaded from a local file.\nThis can be useful when the questions to ask can not be predetermined."),(0,o.yg)("h2",{id:"example"},"Example"),(0,o.yg)("p",null,"We want to ask questions depending on the type of engine the user chooses.\nThe questions are available on our server with a GET request."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},'import axios from "axios"\n\nconst askRemoteQuestions = async ({ id }) => {\n    const url = `https://myserver.com/questions`  \n    const result = await axios({\n        method: "GET",\n        url,\n        headers: {\n            "content-type": "application/json"\n        },\n        params: {\n            id,        \n        }\n    })\n\n    await CliNext.prompt.ask(result.data)  \n}\n')),(0,o.yg)("p",null,"Here is the payload returned from the server:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "type": "string",\n        "name": "appId",\n        "message": "App id",\n        "validators": [\n            {\n                "type": "nonempty"\n            }\n        ],\n        "sideEffects": [\n            {\n                "type": "payload",\n                "name": "authorName",\n                "template": ""\n            },\n            {\n                "type": "payload",\n                "name": "authorEmail",\n                "template": ""\n            },\n            {\n                "type": "payload",\n                "name": "authorUrl",\n                "template": ""\n            },\n            {\n                "type": "payload",\n                "name": "restApiKey",\n                "template": "REST_API_KEY_TO_CHANGE"\n            },\n            {\n                "type": "payload",\n                "name": "appJavascriptKey",\n                "template": "JAVASCRIPT_KEY_TO_CHANGE"\n            }\n        ]\n    },\n    {\n        "type": "string",\n        "name": "appMasterKey",\n        "message": "Master Key",\n        "validators": [\n            {\n                "id": "nonempty"\n            }\n        ]\n    },\n    {\n        "name": "appPort",\n        "type": "number",\n        "promptType": "input",\n        "defaultValue": 1387,\n        "message": "App port",\n        "validators": [\n            {\n                "id": "nonempty"\n            },\n            {\n                "id": "isnumber"\n            }\n        ],\n        "transformers": {\n            "in": [\n                {\n                    "id": "getPort"\n                }\n            ]\n        }\n    },\n    {\n        "type": "string",\n        "name": "appEndpoint",\n        "defaultValue": "servable",\n        "message": "App endpoint",\n        "validators": [\n            {\n                "id": "nonempty"\n            }\n        ]\n    },\n    {\n        "type": "string",\n        "name": "appId",\n        "message": "REST Api Key",\n        "defaultValue": "REST_API_KEY_TO_CHANGE",\n        "validators": [\n            {\n                "type": "nonempty"\n            }\n        ]\n    },\n    {\n        "type": "string",\n        "prompt": {\n            "type": "list"\n        },\n        "name": "appDatabaseType",\n        "choices": [\n            {\n                "name": "Mongo DB (required for standalone distribution)",\n                "value": "mongodb"\n            },\n            {\n                "name": "PostGresQL",\n                "value": "postGresQL",\n                "checked": true\n            }\n        ],\n        "message": "Database type",\n        "defaultValue": "mongodb",\n        "validators": [\n            {\n                "type": "nonempty"\n            }\n        ]\n    },\n    {\n        "name": "appDatabasePort",\n        "type": "number",\n        "message": "App database port?",\n        "promptType": "input",\n        "defaultValue": 27017,\n        "validators": [\n            {\n                "id": "nonempty"\n            },\n            {\n                "id": "isnumber"\n            }\n        ],\n        "transformers": [\n            {\n                "modes": [\n                    "in"\n                ],\n                "id": "getPort"\n            }\n        ],\n        "sideEffects": [\n            {\n                "position": "after",\n                "type": "payload",\n                "name": "databaseURI",\n                "template": "mongodb://root:DATABASE_PASSWORD_TO_CHANGE@localhost:<%= appDatabasePort %>/app?authSource=admin&readPreference=primary&ssl=false",\n                "conditions": [\n                    {\n                        "name": "appDatabaseType",\n                        "operator": "=",\n                        "operand": "mongodb"\n                    }\n                ]\n            }\n        ]\n    },\n    {\n        "prompt": {\n            "type": "confirm"\n        },\n        "name": "appUseCache",\n        "message": "Use app cache",\n        "defaultValue": true,\n        "type": "boolean",\n        "validators": [\n            {\n                "type": "nonempty"\n            }\n        ]\n    },\n    {\n        "name": "appCachePort",\n        "type": "number",\n        "message": "App cache port",\n        "promptType": "input",\n        "defaultValue": 6379,\n        "validators": [\n            {\n                "id": "nonempty"\n            },\n            {\n                "id": "isnumber"\n            }\n        ],\n        "conditions": [\n            {\n                "name": "appUseCache"\n            }\n        ],\n        "transformers": [\n            {\n                "modes": [\n                    "in"\n                ],\n                "id": "getPort"\n            }\n        ]\n    },\n    {\n        "prompt": {\n            "type": "confirm"\n        },\n        "name": "useLiveQueryServer",\n        "message": "Use Live Query server",\n        "defaultValue": true,\n        "type": "boolean",\n        "validators": [\n            {\n                "type": "nonempty"\n            }\n        ]\n    },\n    {\n        "name": "appLiveQueryServerPort",\n        "type": "number",\n        "message": "Livequery port",\n        "promptType": "input",\n        "defaultValue": 1392,\n        "validators": [\n            {\n                "id": "nonempty"\n            },\n            {\n                "id": "isnumber"\n            }\n        ],\n        "conditions": [\n            {\n                "name": "useLiveQueryServer"\n            }\n        ],\n        "transformers": [\n            {\n                "modes": [\n                    "in"\n                ],\n                "id": "getPort"\n            }\n        ]\n    },\n    {\n        "name": "appLiveQueryCachePort",\n        "type": "number",\n        "message": "Livequery cache port",\n        "promptType": "input",\n        "defaultValue": 6380,\n        "validators": [\n            {\n                "id": "nonempty"\n            },\n            {\n                "id": "isnumber"\n            }\n        ],\n        "conditions": [\n            {\n                "name": "useLiveQueryServer"\n            }\n        ],\n        "transformers": [\n            {\n                "modes": [\n                    "in"\n                ],\n                "id": "getPort"\n            }\n        ]\n    },\n    {\n        "name": "appUseLocalS3",\n        "message": "Use a local bucket storage (recommended)",\n        "defaultValue": true,\n        "prompt": {\n            "type": "confirm"\n        },\n        "type": "boolean",\n        "validators": [\n            {\n                "type": "nonempty"\n            }\n        ]\n    },\n    {\n        "type": "string",\n        "name": "appMinioUser",\n        "message": "Minio username",\n        "defaultValue": "MINIO_USERNAME_TO_CHANGE",\n        "validators": [\n            {\n                "type": "nonempty"\n            }\n        ],\n        "conditions": [\n            {\n                "name": "appUseLocalS3"\n            }\n        ]\n    },\n    {\n        "type": "string",\n        "name": "appMinioPassword",\n        "message": "Minio password",\n        "defaultValue": "MINIO_PASSWORD_TO_CHANGE",\n        "validators": [\n            {\n                "type": "nonempty"\n            }\n        ],\n        "conditions": [\n            {\n                "name": "appUseLocalS3"\n            }\n        ]\n    },\n    {\n        "type": "string",\n        "name": "appMinioEndpoint",\n        "message": "Minio endpoint",\n        "defaultValue": "http://localhost:9000",\n        "validators": [\n            {\n                "type": "nonempty"\n            }\n        ],\n        "conditions": [\n            {\n                "name": "appUseLocalS3"\n            }\n        ]\n    },\n    {\n        "type": "string",\n        "name": "appMinioBucket",\n        "message": "Minio bucket",\n        "defaultValue": "primary",\n        "validators": [\n            {\n                "type": "nonempty"\n            }\n        ],\n        "conditions": [\n            {\n                "name": "appUseLocalS3"\n            }\n        ]\n    },\n    {\n        "name": "appS3ApiPort",\n        "type": "number",\n        "message": "S3 API port",\n        "promptType": "input",\n        "defaultValue": 9000,\n        "validators": [\n            {\n                "id": "nonempty"\n            },\n            {\n                "id": "isnumber"\n            }\n        ],\n        "conditions": [\n            {\n                "name": "appUseLocalS3"\n            }\n        ],\n        "transformers": [\n            {\n                "modes": [\n                    "in"\n                ],\n                "id": "getPort"\n            }\n        ]\n    },\n    {\n        "name": "appS3UIPort",\n        "type": "number",\n        "message": "S3 UI port",\n        "promptType": "input",\n        "defaultValue": 9001,\n        "validators": [\n            {\n                "id": "nonempty"\n            },\n            {\n                "id": "isnumber"\n            }\n        ],\n        "conditions": [\n            {\n                "name": "appUseLocalS3"\n            }\n        ],\n        "transformers": [\n            {\n                "modes": [\n                    "in"\n                ],\n                "id": "getPort"\n            }\n        ]\n    },\n    {\n        "name": "appUseDashboard",\n        "message": "Use a Servable Dashboard (recommended)",\n        "defaultValue": true,\n        "prompt": {\n            "type": "confirm"\n        },\n        "type": "boolean",\n        "validators": [\n            {\n                "type": "nonempty"\n            }\n        ]\n    },\n    {\n        "type": "string",\n        "name": "appDashboardMainUsername",\n        "message": "Dashboard username",\n        "defaultValue": "admin",\n        "validators": [\n            {\n                "type": "nonempty"\n            }\n        ],\n        "conditions": [\n            {\n                "name": "appUseDashboard"\n            }\n        ]\n    },\n    {\n        "type": "string",\n        "name": "appDashboardMainPassword",\n        "message": "Dashboard password",\n        "defaultValue": "PASSWORD_TO_CHANGE",\n        "validators": [\n            {\n                "type": "nonempty"\n            }\n        ],\n        "conditions": [\n            {\n                "name": "appUseDashboard"\n            }\n        ]\n    },\n    {\n        "name": "appDashboardPort",\n        "type": "number",\n        "message": "Dashboard port",\n        "promptType": "input",\n        "defaultValue": 4040,\n        "validators": [\n            {\n                "id": "nonempty"\n            },\n            {\n                "id": "isnumber"\n            }\n        ],\n        "conditions": [\n            {\n                "name": "appUseDashboard"\n            }\n        ],\n        "transformers": [\n            {\n                "modes": [\n                    "in"\n                ],\n                "id": "getPort"\n            }\n        ]\n    },\n    {\n        "type": "string",\n        "prompt": {\n            "type": "list"\n        },\n        "name": "appDistributionType",\n        "choices": [\n            {\n                "name": "Standalone",\n                "value": "standalone",\n                "checked": true\n            },\n            {\n                "name": "Distributed (requires a separate replicated mongo database deployment)",\n                "value": "distributed"\n            }\n        ],\n        "message": "App distribution type",\n        "defaultValue": "standalone",\n        "validators": [\n            {\n                "type": "nonempty"\n            }\n        ],\n        "sideEffects": [\n            {\n                "position": "after",\n                "type": "payload",\n                "name": "utilsDatabaseURI",\n                "template": "mongodb://root:DATABASE_PASSWORD_TO_CHANGE@localhost:<%= appDatabasePort %>/utils?authSource=admin&readPreference=primary&ssl=false",\n                "conditions": [\n                    {\n                        "name": "appDistributionType",\n                        "operator": "=",\n                        "operand": "standalone"\n                    }\n                ]\n            }\n        ]\n    },\n    {\n        "type": "string",\n        "message": "App configurations",\n        "prompt": {\n            "type": "list"\n        },\n        "name": "appConfigurations",\n        "choices": [\n            {\n                "name": "Production (mandatory)",\n                "value": "production",\n                "checked": true\n            },\n            {\n                "name": "Staging (experimental)",\n                "value": "staging"\n            }\n        ],\n        "defaultValue": "production",\n        "validators": [\n            {\n                "type": "nonempty"\n            }\n        ]\n    },\n    {\n        "name": "appUtilsDatabasePort",\n        "type": "number",\n        "message": "App utils database port",\n        "defaultValue": 27018,\n        "promptType": "input",\n        "validators": [\n            {\n                "id": "nonempty"\n            },\n            {\n                "id": "isnumber"\n            }\n        ],\n        "conditions": [\n            {\n                "name": "appDistributionType",\n                "operator": "=",\n                "operand": "standalone"\n            }\n        ],\n        "transformers": [\n            {\n                "modes": [\n                    "in"\n                ],\n                "id": "getPort"\n            }\n        ]\n    }\n]\n')))}u.isMDXComponent=!0}}]);