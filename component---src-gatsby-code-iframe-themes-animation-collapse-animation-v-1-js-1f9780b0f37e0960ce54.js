(window.webpackJsonp=window.webpackJsonp||[]).push([[43,44,46],{"+jkl":function(n,e,t){"use strict";t.r(e),e.default=()=>"text-black text-opacity-75 font-semibold"},"33yf":function(n,e,t){(function(n){function t(n,e){for(var t=0,o=n.length-1;o>=0;o--){var r=n[o];"."===r?n.splice(o,1):".."===r?(n.splice(o,1),t++):t&&(n.splice(o,1),t--)}if(e)for(;t--;t)n.unshift("..");return n}function o(n,e){if(n.filter)return n.filter(e);for(var t=[],o=0;o<n.length;o++)e(n[o],o,n)&&t.push(n[o]);return t}e.resolve=function(){for(var e="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var s=i>=0?arguments[i]:n.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(e=s+"/"+e,r="/"===s.charAt(0))}return(r?"/":"")+(e=t(o(e.split("/"),(function(n){return!!n})),!r).join("/"))||"."},e.normalize=function(n){var i=e.isAbsolute(n),s="/"===r(n,-1);return(n=t(o(n.split("/"),(function(n){return!!n})),!i).join("/"))||i||(n="."),n&&s&&(n+="/"),(i?"/":"")+n},e.isAbsolute=function(n){return"/"===n.charAt(0)},e.join=function(){var n=Array.prototype.slice.call(arguments,0);return e.normalize(o(n,(function(n,e){if("string"!=typeof n)throw new TypeError("Arguments to path.join must be strings");return n})).join("/"))},e.relative=function(n,t){function o(n){for(var e=0;e<n.length&&""===n[e];e++);for(var t=n.length-1;t>=0&&""===n[t];t--);return e>t?[]:n.slice(e,t-e+1)}n=e.resolve(n).substr(1),t=e.resolve(t).substr(1);for(var r=o(n.split("/")),i=o(t.split("/")),s=Math.min(r.length,i.length),l=s,c=0;c<s;c++)if(r[c]!==i[c]){l=c;break}var a=[];for(c=l;c<r.length;c++)a.push("..");return(a=a.concat(i.slice(l))).join("/")},e.sep="/",e.delimiter=":",e.dirname=function(n){if("string"!=typeof n&&(n+=""),0===n.length)return".";for(var e=n.charCodeAt(0),t=47===e,o=-1,r=!0,i=n.length-1;i>=1;--i)if(47===(e=n.charCodeAt(i))){if(!r){o=i;break}}else r=!1;return-1===o?t?"/":".":t&&1===o?"/":n.slice(0,o)},e.basename=function(n,e){var t=function(n){"string"!=typeof n&&(n+="");var e,t=0,o=-1,r=!0;for(e=n.length-1;e>=0;--e)if(47===n.charCodeAt(e)){if(!r){t=e+1;break}}else-1===o&&(r=!1,o=e+1);return-1===o?"":n.slice(t,o)}(n);return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t},e.extname=function(n){"string"!=typeof n&&(n+="");for(var e=-1,t=0,o=-1,r=!0,i=0,s=n.length-1;s>=0;--s){var l=n.charCodeAt(s);if(47!==l)-1===o&&(r=!1,o=s+1),46===l?-1===e?e=s:1!==i&&(i=1):-1!==e&&(i=-1);else if(!r){t=s+1;break}}return-1===e||-1===o||0===i||1===i&&e===o-1&&e===t+1?"":n.slice(e,o)};var r="b"==="ab".substr(-1)?function(n,e,t){return n.substr(e,t)}:function(n,e,t){return e<0&&(e=n.length+e),n.substr(e,t)}}).call(this,t("8oxB"))},IRUh:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var o=t("q1tI"),r=t.n(o),i=t("iyGq"),s=t("KQm4");t("yLb1");class l extends r.a.Component{render(){const{demo:n,children:e}=this.props;if("undefined"!=typeof window){var o;t("RoSU");const e=t("Zz1u").Xt;let r="gatsby_iframe-inside";n.container&&(r+=" gatsby_iframe-container"),(o=document.documentElement.classList).add.apply(o,Object(s.a)(r.split(" "))),document.documentElement.setAttribute("id","iframe--"+n.name);const i=()=>{window.self!==window.top&&window.parent.initIframe(window.name,n.htmlSource,n.jsxSource,n.cssSource,n.jsSource)};e.ready(i)}return r.a.createElement(r.a.Fragment,null,e)}}class c extends r.a.Component{render(){const{demo:n}=this.props,e={title:"Demo",description:"Demo"};return n.path=("/demos/"+n.dirs.join("/")+"/"+n.name).replace("/iframe","").replace("src/gatsby/code/",""),n.cssSource=n.path+".css",n.jsSource=n.path+".js",r.a.createElement(l,{demo:n},r.a.createElement(i.a,{title:e.title,description:e.description}),r.a.createElement("div",{id:"body-outer"},r.a.createElement("div",{id:"gatsby_body-inner",className:"gatsby_demo_source--from",dangerouslySetInnerHTML:{__html:n.htmlSource}})))}}},PJgn:function(n,e,t){"use strict";t.r(e),e.default=()=>"border text-accent-500 border-gray-400 bg-gray-200 transition-all"},Sl05:function(n,e,t){"use strict";t.r(e),e.default=()=>"border text-accent-500 border-gray-400 bg-gray-200 transition-all"},TaEE:function(n,e,t){"use strict";t.r(e),t.d(e,"iconX",(function(){return o})),t.d(e,"iconSearch",(function(){return r})),t.d(e,"iconArrowLeft",(function(){return i})),t.d(e,"iconArrowRight",(function(){return s})),t.d(e,"iconArrowUp",(function(){return l})),t.d(e,"iconArrowDown",(function(){return c})),t.d(e,"iconChevronLeft",(function(){return a})),t.d(e,"iconChevronRight",(function(){return u})),t.d(e,"iconChevronUp",(function(){return h})),t.d(e,"iconChevronDown",(function(){return d})),t.d(e,"iconLocate",(function(){return w})),t.d(e,"iconTwitter",(function(){return p})),t.d(e,"iconPackage",(function(){return g})),t.d(e,"iconGithub",(function(){return f})),t.d(e,"iconLink",(function(){return v})),t.d(e,"iconCode",(function(){return k})),t.d(e,"iconMaximize",(function(){return y})),t.d(e,"iconExternal",(function(){return x})),t.d(e,"iconCopy",(function(){return m}));const o=({classes:n=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon'+(n=n?" "+n:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',r=({classes:n=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon'+(n=n?" "+n:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',i=({classes:n=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon'+(n=n?" "+n:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>',s=({classes:n=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon'+(n=n?" "+n:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',l=({classes:n=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon'+(n=n?" "+n:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>',c=({classes:n=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon'+(n=n?" "+n:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>',a=({classes:n=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon'+(n=n?" "+n:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>',u=({classes:n=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon'+(n=n?" "+n:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>',h=({classes:n=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon'+(n=n?" "+n:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>',d=({classes:n=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon'+(n=n?" "+n:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>',w=({classes:n=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon'+(n=n?" "+n:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',p=({classes:n=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon'+(n=n?" "+n:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>',g=({classes:n=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon'+(n=n?" "+n:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>',f=({classes:n=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon'+(n=n?" "+n:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>',v=({classes:n=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon'+(n=n?" "+n:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>',k=({classes:n=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon'+(n=n?" "+n:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',y=({classes:n=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon'+(n=n?" "+n:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>',x=({classes:n=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon'+(n=n?" "+n:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>',m=({classes:n=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon'+(n=n?" "+n:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>'},Xu6d:function(n,e,t){"use strict";t.r(e),e.default=()=>"py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition"}}]);
//# sourceMappingURL=component---src-gatsby-code-iframe-themes-animation-collapse-animation-v-1-js-1f9780b0f37e0960ce54.js.map