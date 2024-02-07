"use strict";(self.webpackChunkclinext=self.webpackChunkclinext||[]).push([[8896],{5788:(e,t,n)=>{n.d(t,{Iu:()=>u,yg:()=>y});var r=n(1504);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,y=p["".concat(l,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9020:(e,t,n)=>{n.d(t,{c:()=>l});var r=n(1504),i=n(1268),a=n(5388),o=n(4628),c=n(3608);const l=e=>{const t=e.npm?e.npm:(0,c.c)(e.yarn,"npm"),n=e.yarn?e.yarn:(0,c.c)(e.npm,"yarn");return r.createElement(i.c,null,r.createElement(a.c,{value:"npm",label:"npm",default:!0},r.createElement(o.c,{language:"bash"},t)),r.createElement(a.c,{value:"bash",label:"yarn"},r.createElement(o.c,{language:"bash"},n)))}},1060:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>we,contentTitle:()=>Te,default:()=>Ae,frontMatter:()=>ve,metadata:()=>xe,toc:()=>Ce});var r,i,a,o,c=n(5072),l=n(1504),s=n(5788),u=n(9020),p=n(3268),f=n.n(p),d=n(6584),y=n.n(d),m=n(448),h=n.n(m),g=n(9456),b=n.n(g),v=n(320),T="bodyAttributes",x="htmlAttributes",w="titleAttributes",C={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},O=(Object.keys(C).map((function(e){return C[e]})),"charset"),E="cssText",A="href",S="http-equiv",P="innerHTML",j="itemprop",k="name",N="property",I="rel",L="src",M="target",D={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},R="defaultTitle",F="defer",_="encodeSpecialCharacters",B="onChangeClientState",H="titleTemplate",q=Object.keys(D).reduce((function(e,t){return e[D[t]]=t,e}),{}),Y=[C.NOSCRIPT,C.SCRIPT,C.STYLE],U="data-react-helmet",W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},X=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},$=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=ee(e,C.TITLE),n=ee(e,H);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=ee(e,R);return t||r||void 0},J=function(e){return ee(e,B)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return K({},e,t)}),{})},V=function(e,t){return t.filter((function(e){return void 0!==e[C.BASE]})).map((function(e){return e[C.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var a=r[i].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},Z=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ae("Helmet: "+e+' should be of type "Array". Instead found type "'+W(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),o=0;o<a.length;o++){var c=a[o],l=c.toLowerCase();-1===t.indexOf(l)||n===I&&"canonical"===e[n].toLowerCase()||l===I&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==P&&c!==E&&c!==j||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][s]&&(i[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(i),o=0;o<a.length;o++){var c=a[o],l=b()({},r[c],i[c]);r[c]=l}return e}),[]).reverse()},ee=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},te=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){te(e)}),0)}),ne=function(e){return clearTimeout(e)},re="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||te:n.g.requestAnimationFrame||te,ie="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ne:n.g.cancelAnimationFrame||ne,ae=function(e){return v&&"function"==typeof v.warn&&v.warn(e)},oe=null,ce=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,p=e.title,f=e.titleAttributes;ue(C.BODY,r),ue(C.HTML,i),se(p,f);var d={baseTag:pe(C.BASE,n),linkTags:pe(C.LINK,a),metaTags:pe(C.META,o),noscriptTags:pe(C.NOSCRIPT,c),scriptTags:pe(C.SCRIPT,s),styleTags:pe(C.STYLE,u)},y={},m={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(y[e]=n),r.length&&(m[e]=d[e].oldTags)})),t&&t(),l(e,y,m)},le=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=le(e)),ue(C.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(U),i=r?r.split(","):[],a=[].concat(i),o=Object.keys(t),c=0;c<o.length;c++){var l=o[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===i.indexOf(l)&&i.push(l);var u=a.indexOf(l);-1!==u&&a.splice(u,1)}for(var p=a.length-1;p>=0;p--)n.removeAttribute(a[p]);i.length===a.length?n.removeAttribute(U):n.getAttribute(U)!==o.join(",")&&n.setAttribute(U,o.join(","))}},pe=function(e,t){var n=document.head||document.querySelector(C.HEAD),r=n.querySelectorAll(e+"["+U+"]"),i=Array.prototype.slice.call(r),a=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===P)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(U,"true"),i.some((function(e,t){return o=t,n.isEqualNode(e)}))?i.splice(o,1):a.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:a}},fe=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)},ye=function(e,t,n){switch(e){case C.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[U]=!0,i=de(n,r),[l.createElement(C.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=fe(n),a=le(t);return i?"<"+e+" "+U+'="true" '+i+">"+$(a,r)+"</"+e+">":"<"+e+" "+U+'="true">'+$(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case T:case x:return{toComponent:function(){return de(t)},toString:function(){return fe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[U]=!0,r);return Object.keys(t).forEach((function(e){var n=D[e]||e;if(n===P||n===E){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),l.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===P||e===E)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+$(r[t],n)+'"';return e?e+" "+i:i}),""),a=r.innerHTML||r.cssText||"",o=-1===Y.indexOf(e);return t+"<"+e+" "+U+'="true" '+i+(o?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},me=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,p=void 0===u?"":u,f=e.titleAttributes;return{base:ye(C.BASE,t,r),bodyAttributes:ye(T,n,r),htmlAttributes:ye(x,i,r),link:ye(C.LINK,a,r),meta:ye(C.META,o,r),noscript:ye(C.NOSCRIPT,c,r),script:ye(C.SCRIPT,l,r),style:ye(C.STYLE,s,r),title:ye(C.TITLE,{title:p,titleAttributes:f},r)}},he=y()((function(e){return{baseTag:V([A,M],e),bodyAttributes:Q(T,e),defer:ee(e,F),encode:ee(e,_),htmlAttributes:Q(x,e),linkTags:Z(C.LINK,[I,A],e),metaTags:Z(C.META,[k,O,S,N,j],e),noscriptTags:Z(C.NOSCRIPT,[P],e),onChangeClientState:J(e),scriptTags:Z(C.SCRIPT,[L,P],e),styleTags:Z(C.STYLE,[E],e),title:G(e),titleAttributes:Q(w,e)}}),(function(e){oe&&ie(oe),e.defer?oe=re((function(){ce(e,(function(){oe=null}))})):(ce(e),oe=null)}),me)((function(){return null})),ge=(i=he,o=a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!h()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case C.SCRIPT:case C.NOSCRIPT:return{innerHTML:t};case C.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return K({},r,((t={})[n.type]=[].concat(r[n.type]||[],[K({},i,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,a=e.newChildProps,o=e.nestedChildren;switch(r.type){case C.TITLE:return K({},i,((t={})[r.type]=o,t.titleAttributes=K({},a),t));case C.BODY:return K({},i,{bodyAttributes:K({},a)});case C.HTML:return K({},i,{htmlAttributes:K({},a)})}return K({},i,((n={})[r.type]=K({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=K({},t);return Object.keys(e).forEach((function(t){var r;n=K({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return l.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,a=i.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[q[n]||n]=e[n],t}),t)}(X(i,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case C.LINK:case C.META:case C.NOSCRIPT:case C.SCRIPT:case C.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=X(e,["children"]),r=K({},n);return t&&(r=this.mapChildrenToProps(t,r)),l.createElement(i,r)},z(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(l.Component),a.propTypes={base:f().object,bodyAttributes:f().object,children:f().oneOfType([f().arrayOf(f().node),f().node]),defaultTitle:f().string,defer:f().bool,encodeSpecialCharacters:f().bool,htmlAttributes:f().object,link:f().arrayOf(f().object),meta:f().arrayOf(f().object),noscript:f().arrayOf(f().object),onChangeClientState:f().func,script:f().arrayOf(f().object),style:f().arrayOf(f().object),title:f().string,titleAttributes:f().object,titleTemplate:f().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=i.peek,a.rewind=function(){var e=i.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);ge.renderStatic=ge.rewind;const be=e=>{const{id:t,size:n="s",mode:r="default"}=e;return l.createElement("div",{className:"mb-6"},l.createElement("div",{id:t,"data-id":t,"data-size":n,"data-mode":r,class:"clinext-feature-widget"},l.createElement("h4",null,`Feature ${t}`)),l.createElement(ge,null,l.createElement("link",{href:"https://cdn.clinext.app/widgets/feature/index.css",rel:"stylesheet"}),l.createElement("script",{async:!0,src:"https://cdn.clinext.app/widgets/feature/index.js"})))},ve={sidebar_position:7},Te="Packages",xe={unversionedId:"reference/packages",id:"version-1.0/reference/packages",title:"Packages",description:"CliNext Server",source:"@site/versioned_docs/version-1.0/reference/packages.mdx",sourceDirName:"reference",slug:"/reference/packages",permalink:"/documentation/docs/reference/packages",draft:!1,editUrl:"https://github.com/clinext-core/generator-clinext/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0/reference/packages.mdx",tags:[],version:"1.0",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"$ clinext app",permalink:"/documentation/docs/reference/commands/app"},next:{title:"Code of conduct",permalink:"/documentation/docs/codeofconduct"}},we={},Ce=[{value:"CliNext Server",id:"clinext-server",level:2},{value:"CliNext Manifest",id:"clinext-manifest",level:2},{value:"CliNext Parse Server Adapter",id:"clinext-parse-server-adapter",level:2},{value:"CliNext CLI (yeoman generator)",id:"clinext-cli-yeoman-generator",level:2},{value:"CliNext Registry",id:"clinext-registry",level:2},{value:"CliNext Dashboard",id:"clinext-dashboard",level:2},{value:"CliNext Widgets",id:"clinext-widgets",level:2}],Oe={toc:Ce},Ee="wrapper";function Ae(e){let{components:t,...n}=e;return(0,s.yg)(Ee,(0,c.c)({},Oe,n,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"packages"},"Packages"),(0,s.yg)("h2",{id:"clinext-server"},(0,s.yg)("a",{parentName:"h2",href:"https://github.com/clinext-core/clinext-engine"},"CliNext Server")),(0,s.yg)("p",null,"The clinext server is responsible for all the CliNext related operations on a clinext template project.\nIt is available as an npm dependency."),(0,s.yg)(u.c,{npm:"npm install -g @clinext/server",mdxType:"BashTabs"}),(0,s.yg)("h2",{id:"clinext-manifest"},(0,s.yg)("a",{parentName:"h2",href:"https://github.com/clinext-core/clinext-manifest"},"CliNext Manifest")),(0,s.yg)("p",null,"The CliNext manifest is a utility that builds a feature's manifest and documents it.\nIt is available as an npm dependency."),(0,s.yg)(u.c,{npm:"npm install -g @clinext/tools",mdxType:"BashTabs"}),(0,s.yg)("h2",{id:"clinext-parse-server-adapter"},(0,s.yg)("a",{parentName:"h2",href:"https://github.com/clinext-core/parse-server-engine"},"CliNext Parse Server Adapter")),(0,s.yg)("p",null,"The CliNext Parse Server Adapter is an example of a engine."),(0,s.yg)(u.c,{npm:"npm install @clinext/parse-server-engine",mdxType:"BashTabs"}),(0,s.yg)("h2",{id:"clinext-cli-yeoman-generator"},(0,s.yg)("a",{parentName:"h2",href:"https://github.com/clinext-core/generator-clinext"},"CliNext CLI (yeoman generator)")),(0,s.yg)("p",null,"The clinext CLI is responsible for scaffolding and manipulating clinext and feature projects."),(0,s.yg)("p",null,"It is available as an npm package. It uses under the hood:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"the CliNext server "),(0,s.yg)("li",{parentName:"ul"},"the CliNext Features Registry API")),(0,s.yg)(u.c,{npm:"npm install -g clinext",mdxType:"BashTabs"}),(0,s.yg)("h2",{id:"clinext-registry"},(0,s.yg)("a",{parentName:"h2",href:"https://clinext.app"},"CliNext Registry")),(0,s.yg)("p",null,"The clinext features registry is a centralized  features repository."),(0,s.yg)("p",null,"It is available at clinext.app"),(0,s.yg)("p",null,"It serves a public api at api.clinext.app"),(0,s.yg)("h2",{id:"clinext-dashboard"},"CliNext Dashboard"),(0,s.yg)("p",null,"The clinext dashboard is a fork of the Parse Dashboard aimed at providing the best CliNext experience."),(0,s.yg)("p",null,"It is available with the CLI when launching a full-fledged local app."),(0,s.yg)("h2",{id:"clinext-widgets"},"CliNext Widgets"),(0,s.yg)("p",null,"CliNext widgets are embeddable React components that can display a feature for example."),(0,s.yg)(be,{id:"@clinext-community/framable",mdxType:"FeatureWidget"}),(0,s.yg)(be,{id:"@clinext-community/framable",size:"m",mdxType:"FeatureWidget"}))}Ae.isMDXComponent=!0},6584:(e,t,n)=>{var r,i=n(1504),a=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),p.canUseDOM?t(l):n&&(l=n(l))}var p=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return l},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var o=i.prototype;return o.UNSAFE_componentWillMount=function(){s.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},o.render=function(){return a.createElement(r,this.props)},i}(i.PureComponent);return o(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(p,"canUseDOM",c),p}}}}]);