"use strict";(self.webpackChunkclinext=self.webpackChunkclinext||[]).push([[9268],{5388:(e,t,n)=>{n.d(t,{c:()=>c});var r=n(1504),a=n(4971);const u={tabItem:"tabItem_Ymn6"};function c(e){let{children:t,hidden:n,className:c}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.c)(u.tabItem,c),hidden:n},t)}},1268:(e,t,n)=>{n.d(t,{c:()=>y});var r=n(5072),a=n(1504),u=n(4971),c=n(3943),i=n(5592),l=n(632),s=n(7128),o=n(1148);function f(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??f(n);return function(e){const t=(0,s.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.Uz)(),u=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._M)(u),(0,a.useCallback)((e=>{if(!u)return;const t=new URLSearchParams(r.location.search);t.set(u,e),r.replace({...r.location,search:t.toString()})}),[u,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,u=d(e),[c,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:u}))),[l,s]=m({queryString:n,groupId:r}),[f,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,u]=(0,o.IN)(n);return[r,(0,a.useCallback)((e=>{n&&u.set(e)}),[n,u])]}({groupId:r}),v=(()=>{const e=l??f;return p({value:e,tabValues:u})?e:null})();(0,a.useLayoutEffect)((()=>{v&&i(v)}),[v]);return{selectedValue:c,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:u}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),h(e)}),[s,h,u]),tabValues:u}}var v=n(3664);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:f}=(0,c.MV)(),d=e=>{const t=e.currentTarget,n=o.indexOf(t),r=s[n].value;r!==i&&(f(t),l(r))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.c)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:c}=e;return a.createElement("li",(0,r.c)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>o.push(e),onKeyDown:p,onClick:d},c,{className:(0,u.c)("tabs__item",b.tabItem,c?.className,{"tabs__item--active":i===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const u=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=u.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},u.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=h(e);return a.createElement("div",{className:(0,u.c)("tabs-container",b.tabList)},a.createElement(g,(0,r.c)({},e,t)),a.createElement(k,(0,r.c)({},e,t)))}function y(e){const t=(0,v.c)();return a.createElement(w,(0,r.c)({key:String(t)},e))}},3608:(e,t,n)=>{n.d(t,{c:()=>g});var r=["test","login","logout","link","unlink","publish","cache","start","stop","test"],a=["init","run","add","audit","autoclean","bin","check","config","create","dedupe","generate-lock-entry","global","help","import","info","install","licenses","list","lockfile","outdated","owner","pack","policies","prune","remove","self-update","tag","team","upgrade","upgrade-interactive","version","versions","why","workspace","workspaces"];function u(e){for(var t=[],n=!1,r=!1,a="",u=0;u<e.length;++u){var c=e.charAt(u);"\\"===c?(a+=c,r=!0):(" "!==c||n?r||'"'!==c&&"'"!==c?a+=c:(a+=c,c===n?n=!1:n||(n=c)):(t.push(a),a=""),r=!1)}return t.push(a),t}function c(e){return e.map((function(e){switch(e){case"--no-lockfile":return"--no-package-lock";case"--production":return"--save-prod";case"--dev":return"--save-dev";case"--optional":return"--save-optional";case"--exact":return"--save-exact";default:return e}}))}var i={add:function(e){return 2===e.length&&"--force"===e[1]?["rebuild"]:(e[0]="install",c(e))},remove:function(e){return e[0]="uninstall",c(e)},version:function(e){return e.map((function(e){switch(e){case"--major":return"major";case"--minor":return"minor";case"--patch":return"patch";default:return e}}))},install:"install",list:function(e){e[0]="ls";var t=e.findIndex((function(e){return"--pattern"===e}));if(t>=0&&e[t+1]){var n=e[t+1].replace(/["']([^"']+)["']/,"$1").split("|");e.splice(t,2,n.join(" "))}return e},init:"init",create:"init",outdated:"outdated",run:"run",global:function(e){switch(e[1]){case"add":return e.shift(),(e=i.add(e)).push("--global"),e;case"remove":return e.shift(),(e=i.remove(e)).push("--global"),e;case"list":return e.shift(),(e=i.list(e)).push("--global"),e;default:return e.push("\n# couldn't auto-convert command"),e}},pack:function(e){return e.map((function(e){return"--filename"===e?"--pack-destination":e}))}};function l(e,t){if(""===(t=(t||"").trim()))return"npm install";var n=u(t),c=(/\w+/.exec(t)||[""])[0];if(r.includes(n[0]))return"npm "+t;if(n[0]in i){var l=i[n[0]];return"function"==typeof l?n=l(n):n[0]=l,"npm "+n.filter(Boolean).join(" ")}return a.includes(c)?"npm "+t+"\n# couldn't auto-convert command":"npm run "+t}function s(e){return(e.includes("--global")||e.includes("-g"))&&e.unshift("global"),e.map((function(e){switch(e){case"--save-dev":case"-D":return"--dev";case"--save-prod":case"-P":return"--production";case"--no-package-lock":return"--no-lockfile";case"--save-optional":case"-O":return"--optional";case"--save-exact":case"-E":return"--exact";case"--save":case"-S":case"--global":case"-g":return"";default:return e}}))}var o={install:function(e){return 1===e.length?["install"]:(e[0]="add",s(e))},i:function(e){return o.install(e)},uninstall:function(e){return e[0]="remove",s(e)},un:function(e){return o.uninstall(e)},remove:function(e){return o.uninstall(e)},r:function(e){return o.uninstall(e)},rm:function(e){return o.uninstall(e)},version:function(e){return e.map((function(e){switch(e){case"major":return"--major";case"minor":return"--minor";case"patch":return"--patch";default:return e}}))},rb:function(e){return o.rebuild(e)},rebuild:function(e){return e[0]="add",e.push("--force"),e},run:function(e){return!e[1]||r.includes(e[1])||a.includes(e[1])||e.splice(0,1),e},exec:function(e){return e[0]="run",o.run(e)},ls:function(e){e[0]="list";var t=!1,n=e.filter((function(e,n){return n>0&&!t&&!(t=e.startsWith("-"))}));return n.length>0&&e.splice(1,n.length,"--pattern",'"'+n.join("|")+'"'),e},list:function(e){return o.ls(e)},init:function(e){return e[1]&&!e[1].startsWith("-")&&(e[0]="create"),e.filter((function(e){return"--scope"!==e}))},ln:"link",t:"test",tst:"test",outdated:"outdated",pack:function(e){return e.map((function(e){return e.startsWith("--pack-destination")?e.replace(/^--pack-destination[\s=]/,"--filename "):e}))}};function f(e,t){var n=u((t||"").trim()),a=n.findIndex((function(e){return"--"===e}));if(a>=0&&n.splice(a,1),r.includes(n[0]))return"yarn "+n.filter(Boolean).join(" ");if(n[0]in o){var c=o[n[0]];return"function"==typeof c?n=c(n):n[0]=c,"yarn "+n.filter(Boolean).join(" ")}return"npm "+t+"\n# couldn't auto-convert command"}function d(e){return e.map((function(e){switch(e){case"--save":case"-S":return"";case"--no-package-lock":return"--frozen-lockfile";default:return e}}))}function p(e){if(e.length>1){var t=e.filter((function(e,t){return 0!==t&&!e.startsWith("-")}));t.length>0&&((e=e.filter((function(e,t){return 0===t||e.startsWith("-")}))).push("--filter"),e.push(t.join(" ")))}return e}var m={install:function(e){return e.length>1&&e.filter((function(e){return!e.startsWith("-")})).length>1&&(e[0]="add"),d(e)},i:function(e){return m.install(e)},uninstall:function(e){return e[0]="remove",d(e)},un:function(e){return m.uninstall(e)},remove:function(e){return m.uninstall(e)},r:function(e){return m.uninstall(e)},rm:function(e){return m.uninstall(e)},rb:function(e){return m.rebuild(e)},rebuild:function(e){return e[0]="rebuild",p(e)},run:"run",exec:"exec",ls:function(e){return m.list(e)},list:function(e){return e.map((function(e){if(e.startsWith("--depth="))return"--depth ".concat(e.split("=")[1]);switch(e){case"--production":return"--prod";case"--development":return"--dev";default:return e}}))},init:function(e){return e[1]&&!e[1].startsWith("-")&&(e[0]="create"),e.filter((function(e){return"--scope"!==e}))},ln:"link",t:"test",test:"test",tst:"test",start:"start",link:"link",unlink:function(e){return p(e)},outdated:"outdated",pack:function(e){return e.map((function(e){return e.startsWith("--pack-destination")?e.replace(/^--pack-destination[\s=]/,"--pack-destination "):e}))}};function h(e,t){var n=u((t||"").trim());if(n[0]in m){var r=m[n[0]];return"function"==typeof r?n=r(n):n[0]=r,"pnpm "+n.filter(Boolean).join(" ")}return"npm "+t+"\n# couldn't auto-convert command"}function v(e){return e.map((function(e){switch(e){case"--save-dev":case"--development":case"-D":return"--dev";case"--save-prod":case"-P":return"--production";case"--no-package-lock":return"--no-save";case"--save-optional":case"-O":return"--optional";case"--save-exact":case"-E":return"--exact";case"--save":case"-S":return"";case"--global":case"-g":return"--global";default:return e}}))}function b(e,t){var n=u((t||"").trim()),r=n.findIndex((function(e){return"--"===e}));r>=0&&n.splice(r,1);var a="bun";switch(n[0]){case"install":case"i":1===n.length?n=["install"]:n[0]="add",n=v(n);break;case"uninstall":case"un":case"remove":case"r":case"rm":n[0]="remove",n=v(n);break;case"cache":"clean"===n[1]?n=["pm","cache","rm"].concat(n.slice(2)):a="npm";break;case"rebuild":case"rb":n[0]="add",n.push("--force");break;case"run":case"stop":case"start":case"unlink":break;case"list":case"ls":(n=v(n))[0]="ls",n.unshift("pm");break;case"init":case"create":n[1]&&(n[1].startsWith("@")?(a="bunx",n[1]=n[1].replace("/","/create-"),n=n.slice(1)):n[1].startsWith("-")?n[0]="init":(a="bunx",n[1]="create-".concat(n[1]),n=n.slice(1)));break;case"link":case"ln":(n=v(n))[0]="link";break;case"test":case"t":case"tst":n[0]="test",n.unshift("run");break;case"exec":a="bunx",n.splice(0,1);break;default:a="npm"}var c=n.filter(Boolean).filter((function(e){return"--"!==e}));return"".concat(a," ").concat(c.join(" ")).concat("npm"===a?"\n# couldn't auto-convert command":"").replace("="," ")}function g(e,t){return"npm"===t?e.replace(/yarn(?: +([^&\n\r]*))?/gm,l):"pnpm"===t?e.replace(/npm(?: +([^&\n\r]*))?/gm,h):"bun"===t?e.replace(/npm(?: +([^&\n\r]*))?/gm,b):e.replace(/npm(?: +([^&\n\r]*))?/gm,f)}}}]);