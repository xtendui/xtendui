(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"33yf":function(n,i,r){(function(n){function r(n,i){for(var r=0,t=n.length-1;t>=0;t--){var o=n[t];"."===o?n.splice(t,1):".."===o?(n.splice(t,1),r++):r&&(n.splice(t,1),r--)}if(i)for(;r--;r)n.unshift("..");return n}function t(n,i){if(n.filter)return n.filter(i);for(var r=[],t=0;t<n.length;t++)i(n[t],t,n)&&r.push(n[t]);return r}i.resolve=function(){for(var i="",o=!1,e=arguments.length-1;e>=-1&&!o;e--){var s=e>=0?arguments[e]:n.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(i=s+"/"+i,o="/"===s.charAt(0))}return(o?"/":"")+(i=r(t(i.split("/"),(function(n){return!!n})),!o).join("/"))||"."},i.normalize=function(n){var e=i.isAbsolute(n),s="/"===o(n,-1);return(n=r(t(n.split("/"),(function(n){return!!n})),!e).join("/"))||e||(n="."),n&&s&&(n+="/"),(e?"/":"")+n},i.isAbsolute=function(n){return"/"===n.charAt(0)},i.join=function(){var n=Array.prototype.slice.call(arguments,0);return i.normalize(t(n,(function(n,i){if("string"!=typeof n)throw new TypeError("Arguments to path.join must be strings");return n})).join("/"))},i.relative=function(n,r){function t(n){for(var i=0;i<n.length&&""===n[i];i++);for(var r=n.length-1;r>=0&&""===n[r];r--);return i>r?[]:n.slice(i,r-i+1)}n=i.resolve(n).substr(1),r=i.resolve(r).substr(1);for(var o=t(n.split("/")),e=t(r.split("/")),s=Math.min(o.length,e.length),l=s,a=0;a<s;a++)if(o[a]!==e[a]){l=a;break}var d=[];for(a=l;a<o.length;a++)d.push("..");return(d=d.concat(e.slice(l))).join("/")},i.sep="/",i.delimiter=":",i.dirname=function(n){if("string"!=typeof n&&(n+=""),0===n.length)return".";for(var i=n.charCodeAt(0),r=47===i,t=-1,o=!0,e=n.length-1;e>=1;--e)if(47===(i=n.charCodeAt(e))){if(!o){t=e;break}}else o=!1;return-1===t?r?"/":".":r&&1===t?"/":n.slice(0,t)},i.basename=function(n,i){var r=function(n){"string"!=typeof n&&(n+="");var i,r=0,t=-1,o=!0;for(i=n.length-1;i>=0;--i)if(47===n.charCodeAt(i)){if(!o){r=i+1;break}}else-1===t&&(o=!1,t=i+1);return-1===t?"":n.slice(r,t)}(n);return i&&r.substr(-1*i.length)===i&&(r=r.substr(0,r.length-i.length)),r},i.extname=function(n){"string"!=typeof n&&(n+="");for(var i=-1,r=0,t=-1,o=!0,e=0,s=n.length-1;s>=0;--s){var l=n.charCodeAt(s);if(47!==l)-1===t&&(o=!1,t=s+1),46===l?-1===i?i=s:1!==e&&(e=1):-1!==i&&(e=-1);else if(!o){r=s+1;break}}return-1===i||-1===t||0===e||1===e&&i===t-1&&i===r+1?"":n.slice(i,t)};var o="b"==="ab".substr(-1)?function(n,i,r){return n.substr(i,r)}:function(n,i,r){return i<0&&(i=n.length+i),n.substr(i,r)}}).call(this,r("8oxB"))},"FP/v":function(n,i,r){"use strict";r.r(i),i.default=function(){return"text-black links-default"}},IRUh:function(n,i,r){"use strict";r.d(i,"a",(function(){return d}));var t=r("dI71"),o=r("q1tI"),e=r.n(o),s=r("iyGq"),l=r("KQm4"),a=(r("yLb1"),function(n){function i(){return n.apply(this,arguments)||this}return Object(t.a)(i,n),i.prototype.render=function(){var n=this.props,i=n.demo,t=n.children;if("undefined"!=typeof window){var o;r("RoSU");var s=r("Zz1u").Xt,a="gatsby_iframe-inside";i.container&&(a+=" gatsby_iframe-container"),(o=document.documentElement.classList).add.apply(o,Object(l.a)(a.split(" "))),document.documentElement.setAttribute("id","iframe--"+i.name);s.ready((function(){window.self!==window.top&&window.parent.initIframe(window.name,i.htmlSource,i.jsxSource,i.cssSource,i.jsSource)}))}return e.a.createElement(e.a.Fragment,null,t)},i}(e.a.Component)),d=function(n){function i(){return n.apply(this,arguments)||this}return Object(t.a)(i,n),i.prototype.render=function(){var n=this.props.demo,i={title:"Demo",description:"Demo"};return n.path=("/demos/"+n.dirs.join("/")+"/"+n.name).replace("/iframe","").replace("src/gatsby/code/",""),n.cssSource=n.path+".css",n.jsSource=n.path+".js",e.a.createElement(a,{demo:n},e.a.createElement(s.a,{title:i.title,description:i.description}),e.a.createElement("div",{id:"body-outer"},e.a.createElement("div",{id:"gatsby_body-inner",className:"gatsby_demo_source--from",dangerouslySetInnerHTML:{__html:n.htmlSource}})))},i}(e.a.Component)},TaEE:function(n,i,r){"use strict";r.r(i),r.d(i,"iconX",(function(){return t})),r.d(i,"iconSearch",(function(){return o})),r.d(i,"iconArrowLeft",(function(){return e})),r.d(i,"iconArrowRight",(function(){return s})),r.d(i,"iconArrowUp",(function(){return l})),r.d(i,"iconArrowDown",(function(){return a})),r.d(i,"iconChevronLeft",(function(){return d})),r.d(i,"iconChevronRight",(function(){return c})),r.d(i,"iconChevronUp",(function(){return v})),r.d(i,"iconChevronDown",(function(){return u})),r.d(i,"iconLocate",(function(){return g})),r.d(i,"iconPackage",(function(){return f})),r.d(i,"iconGithub",(function(){return h})),r.d(i,"iconLink",(function(){return m})),r.d(i,"iconCode",(function(){return p})),r.d(i,"iconMaximize",(function(){return w})),r.d(i,"iconExternal",(function(){return y})),r.d(i,"iconCopy",(function(){return b}));var t=function(n){var i=(void 0===n?{}:n).classes,r=void 0===i?null:i;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(r=r?" "+r:"")+'"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'},o=function(n){var i=(void 0===n?{}:n).classes,r=void 0===i?null:i;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(r=r?" "+r:"")+'"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>'},e=function(n){var i=(void 0===n?{}:n).classes,r=void 0===i?null:i;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(r=r?" "+r:"")+'"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>'},s=function(n){var i=(void 0===n?{}:n).classes,r=void 0===i?null:i;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(r=r?" "+r:"")+'"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>'},l=function(n){var i=(void 0===n?{}:n).classes,r=void 0===i?null:i;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(r=r?" "+r:"")+'"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>'},a=function(n){var i=(void 0===n?{}:n).classes,r=void 0===i?null:i;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(r=r?" "+r:"")+'"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>'},d=function(n){var i=(void 0===n?{}:n).classes,r=void 0===i?null:i;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(r=r?" "+r:"")+'"><polyline points="15 18 9 12 15 6"></polyline></svg>'},c=function(n){var i=(void 0===n?{}:n).classes,r=void 0===i?null:i;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(r=r?" "+r:"")+'"><polyline points="9 18 15 12 9 6"></polyline></svg>'},v=function(n){var i=(void 0===n?{}:n).classes,r=void 0===i?null:i;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(r=r?" "+r:"")+'"><polyline points="18 15 12 9 6 15"></polyline></svg>'},u=function(n){var i=(void 0===n?{}:n).classes,r=void 0===i?null:i;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(r=r?" "+r:"")+'"><polyline points="6 9 12 15 18 9"></polyline></svg>'},g=function(n){var i=(void 0===n?{}:n).classes,r=void 0===i?null:i;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(r=r?" "+r:"")+'"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>'},f=function(n){var i=(void 0===n?{}:n).classes,r=void 0===i?null:i;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(r=r?" "+r:"")+'"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>'},h=function(n){var i=(void 0===n?{}:n).classes,r=void 0===i?null:i;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(r=r?" "+r:"")+'"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>'},m=function(n){var i=(void 0===n?{}:n).classes,r=void 0===i?null:i;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(r=r?" "+r:"")+'"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>'},p=function(n){var i=(void 0===n?{}:n).classes,r=void 0===i?null:i;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(r=r?" "+r:"")+'"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>'},w=function(n){var i=(void 0===n?{}:n).classes,r=void 0===i?null:i;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(r=r?" "+r:"")+'"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>'},y=function(n){var i=(void 0===n?{}:n).classes,r=void 0===i?null:i;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(r=r?" "+r:"")+'"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>'},b=function(n){var i=(void 0===n?{}:n).classes,r=void 0===i?null:i;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(r=r?" "+r:"")+'"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>'}},Ue5z:function(n,i,r){"use strict";r.r(i),function(n){r.d(i,"demo",(function(){return g}));var t=r("dI71"),o=r("q1tI"),e=r.n(o),s=r("33yf"),l=r.n(s),a=r("IRUh"),d=r("FP/v").default,c=r("TaEE").iconX,v=n.replace(/\\/g,"/"),u=l.a.dirname(v).split("/"),g={container:!1,name:l.a.basename(v,".js"),dirs:u};g.htmlSource='\n<div class="listing py-10">\n  <div class="container">\n    <div class="row row-3 row-stretch">\n\n      <div class="w-full md:w-6/12 lg:w-4/12">\n        <div class="listing-item w-full">\n\n          <div class="listing-front card rounded-md '+d()+'">\n            <div class="media-container h-40">\n              <div class="media-inner">\n                <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">\n              </div>\n            </div>\n            <div class="mt-6 h-full flex flex-col">\n              <div class="card card-sm flex-initial py-0 border-l border-gray-300">\n                <div class="h5">\n                  Lorem Ipsum\n                </div>\n                <address class="p font-sm not-italic">\n                  Street lorem ipsum 42, 00134 City, Nation\n                </address>\n              </div>\n            </div>\n          </div>\n\n          <div class="listing-back h-full card rounded-md '+d()+'">\n            <div class="btn btn-close text-xl" aria-label="Close">\n              '+c()+'\n            </div>\n            <div class="card card-sm flex-initial py-0 border-l border-gray-300">\n              <div class="h5">\n                Contacts\n              </div>\n              <div class="p font-sm">\n                <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br/>\n                <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br/>\n              </div>\n              <div class="h5">\n                Timetable\n              </div>\n              <div class="p font-sm">\n                <strong>Monday:</strong> 15:30–19:30<br/>\n                <strong>Tuesday:</strong> 10:00–13:00, 15:30–19:30<br/>\n                <strong>Wednesday:</strong> 10:00–13:00, 15:30–19:30<br/>\n                <strong>Thursday:</strong> 10:00–13:00, 15:30–19:30<br/>\n                <strong>Friday:</strong> 10:00–13:00, 15:30–19:30<br/>\n                <strong>Saturday:</strong> 10:00–19:30<br/>\n                <strong>Sunday:</strong> 10:00–13:00, 15:30–19:30\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n      <div class="w-full md:w-6/12 lg:w-4/12">\n        <div class="listing-item w-full">\n\n          <div class="listing-front card rounded-md '+d()+'">\n            <div class="media-container h-40">\n              <div class="media-inner">\n                <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">\n              </div>\n            </div>\n            <div class="mt-6 h-full flex flex-col">\n              <div class="card card-sm flex-initial py-0 border-l border-gray-300">\n                <div class="h5">\n                  Lorem Ipsum\n                </div>\n                <address class="p font-sm not-italic">\n                  Street lorem ipsum 42, 00134 City, Nation\n                </address>\n              </div>\n            </div>\n          </div>\n\n          <div class="listing-back h-full card rounded-md '+d()+'">\n            <div class="btn btn-close text-xl" aria-label="Close">\n              '+c()+'\n            </div>\n            <div class="card card-sm flex-initial py-0 border-l border-gray-300">\n              <div class="h5">\n                Contacts\n              </div>\n              <div class="p font-sm">\n                <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br/>\n                <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br/>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n      <div class="w-full md:w-6/12 lg:w-4/12">\n        <div class="listing-item w-full">\n\n          <div class="listing-front card rounded-md '+d()+'">\n            <div class="media-container h-40">\n              <div class="media-inner">\n                <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">\n              </div>\n            </div>\n            <div class="mt-6 h-full flex flex-col">\n              <div class="card card-sm flex-initial py-0 border-l border-gray-300">\n                <div class="h5">\n                  Lorem Ipsum\n                </div>\n                <address class="p font-sm not-italic">\n                  Street lorem ipsum 42, 00134 City, Nation\n                </address>\n              </div>\n            </div>\n          </div>\n\n          <div class="listing-back h-full card rounded-md '+d()+'">\n            <div class="btn btn-close text-xl" aria-label="Close">\n              '+c()+'\n            </div>\n            <div class="card card-sm flex-initial py-0 border-l border-gray-300">\n              <div class="h5">\n                Contacts\n              </div>\n              <div class="p font-sm">\n                <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br/>\n                <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br/>\n              </div>\n              <div class="h5">\n                Timetable\n              </div>\n              <div class="p font-sm">\n                <strong>Monday:</strong> 15:30–19:30<br/>\n                <strong>Tuesday:</strong> 10:00–13:00, 15:30–19:30<br/>\n                <strong>Wednesday:</strong> 10:00–13:00, 15:30–19:30<br/>\n                <strong>Thursday:</strong> 10:00–13:00, 15:30–19:30<br/>\n                <strong>Friday:</strong> 10:00–13:00, 15:30–19:30<br/>\n                <strong>Saturday:</strong> 10:00–19:30<br/>\n                <strong>Sunday:</strong> 10:00–13:00, 15:30–19:30\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n      <div class="w-full md:w-6/12 lg:w-4/12">\n        <div class="listing-item w-full">\n\n          <div class="listing-front card rounded-md '+d()+'">\n            <div class="media-container h-40">\n              <div class="media-inner">\n                <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">\n              </div>\n            </div>\n            <div class="mt-6 h-full flex flex-col">\n              <div class="card card-sm flex-initial py-0 border-l border-gray-300">\n                <div class="h5">\n                  Lorem Ipsum\n                </div>\n                <address class="p font-sm not-italic">\n                  Street lorem ipsum 42, 00134 City, Nation\n                </address>\n              </div>\n            </div>\n          </div>\n\n          <div class="listing-back h-full card rounded-md '+d()+'">\n            <div class="btn btn-close text-xl" aria-label="Close">\n              '+c()+'\n            </div>\n            <div class="card card-sm flex-initial py-0 border-l border-gray-300">\n              <div class="h5">\n                Contacts\n              </div>\n              <div class="p font-sm">\n                <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br/>\n                <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br/>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n      <div class="w-full md:w-6/12 lg:w-4/12">\n        <div class="listing-item w-full">\n\n          <div class="listing-front card rounded-md '+d()+'">\n            <div class="media-container h-40">\n              <div class="media-inner">\n                <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">\n              </div>\n            </div>\n            <div class="mt-6 h-full flex flex-col">\n              <div class="card card-sm flex-initial py-0 border-l border-gray-300">\n                <div class="h5">\n                  Lorem Ipsum\n                </div>\n                <address class="p font-sm not-italic">\n                  Street lorem ipsum 42, 00134 City, Nation\n                </address>\n              </div>\n            </div>\n          </div>\n\n          <div class="listing-back h-full card rounded-md '+d()+'">\n            <div class="btn btn-close text-xl" aria-label="Close">\n              '+c()+'\n            </div>\n            <div class="card card-sm flex-initial py-0 border-l border-gray-300">\n              <div class="h5">\n                Contacts\n              </div>\n              <div class="p font-sm">\n                <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br/>\n                <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br/>\n              </div>\n              <div class="h5">\n                Timetable\n              </div>\n              <div class="p font-sm">\n                <strong>Monday:</strong> 15:30–19:30<br/>\n                <strong>Tuesday:</strong> 10:00–13:00, 15:30–19:30<br/>\n                <strong>Wednesday:</strong> 10:00–13:00, 15:30–19:30<br/>\n                <strong>Thursday:</strong> 10:00–13:00, 15:30–19:30<br/>\n                <strong>Friday:</strong> 10:00–13:00, 15:30–19:30<br/>\n                <strong>Saturday:</strong> 10:00–19:30<br/>\n                <strong>Sunday:</strong> 10:00–13:00, 15:30–19:30\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n      <div class="w-full md:w-6/12 lg:w-4/12">\n        <div class="listing-item w-full">\n\n          <div class="listing-front card rounded-md '+d()+'">\n            <div class="media-container h-40">\n              <div class="media-inner">\n                <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">\n              </div>\n            </div>\n            <div class="mt-6 h-full flex flex-col">\n              <div class="card card-sm flex-initial py-0 border-l border-gray-300">\n                <div class="h5">\n                  Lorem Ipsum\n                </div>\n                <address class="p font-sm not-italic">\n                  Street lorem ipsum 42, 00134 City, Nation\n                </address>\n              </div>\n            </div>\n          </div>\n\n          <div class="listing-back h-full card rounded-md '+d()+'">\n            <div class="btn btn-close text-xl" aria-label="Close">\n              '+c()+'\n            </div>\n            <div class="card card-sm flex-initial py-0 border-l border-gray-300">\n              <div class="h5">\n                Contacts\n              </div>\n              <div class="p font-sm">\n                <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br/>\n                <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br/>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n';var f=function(n){function i(){return n.apply(this,arguments)||this}return Object(t.a)(i,n),i.prototype.render=function(){return e.a.createElement(a.a,{demo:g})},i}(e.a.Component);i.default=f}.call(this,"src/gatsby/code/iframe/themes/listing/stores-listing-v2.js")}}]);
//# sourceMappingURL=component---src-gatsby-code-iframe-themes-listing-stores-listing-v-2-js-9bc88f1a5102ee2aab6e.js.map