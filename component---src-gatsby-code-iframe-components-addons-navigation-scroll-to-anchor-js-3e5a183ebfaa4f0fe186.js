(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"2iEb":function(n,e,r){"use strict";r.r(e),e.default=function(){return"text-black links-default bg-gray-200"}},"33yf":function(n,e,r){(function(n){function r(n,e){for(var r=0,i=n.length-1;i>=0;i--){var t=n[i];"."===t?n.splice(i,1):".."===t?(n.splice(i,1),r++):r&&(n.splice(i,1),r--)}if(e)for(;r--;r)n.unshift("..");return n}function i(n,e){if(n.filter)return n.filter(e);for(var r=[],i=0;i<n.length;i++)e(n[i],i,n)&&r.push(n[i]);return r}e.resolve=function(){for(var e="",t=!1,o=arguments.length-1;o>=-1&&!t;o--){var s=o>=0?arguments[o]:n.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(e=s+"/"+e,t="/"===s.charAt(0))}return(t?"/":"")+(e=r(i(e.split("/"),(function(n){return!!n})),!t).join("/"))||"."},e.normalize=function(n){var o=e.isAbsolute(n),s="/"===t(n,-1);return(n=r(i(n.split("/"),(function(n){return!!n})),!o).join("/"))||o||(n="."),n&&s&&(n+="/"),(o?"/":"")+n},e.isAbsolute=function(n){return"/"===n.charAt(0)},e.join=function(){var n=Array.prototype.slice.call(arguments,0);return e.normalize(i(n,(function(n,e){if("string"!=typeof n)throw new TypeError("Arguments to path.join must be strings");return n})).join("/"))},e.relative=function(n,r){function i(n){for(var e=0;e<n.length&&""===n[e];e++);for(var r=n.length-1;r>=0&&""===n[r];r--);return e>r?[]:n.slice(e,r-e+1)}n=e.resolve(n).substr(1),r=e.resolve(r).substr(1);for(var t=i(n.split("/")),o=i(r.split("/")),s=Math.min(t.length,o.length),l=s,a=0;a<s;a++)if(t[a]!==o[a]){l=a;break}var u=[];for(a=l;a<t.length;a++)u.push("..");return(u=u.concat(o.slice(l))).join("/")},e.sep="/",e.delimiter=":",e.dirname=function(n){if("string"!=typeof n&&(n+=""),0===n.length)return".";for(var e=n.charCodeAt(0),r=47===e,i=-1,t=!0,o=n.length-1;o>=1;--o)if(47===(e=n.charCodeAt(o))){if(!t){i=o;break}}else t=!1;return-1===i?r?"/":".":r&&1===i?"/":n.slice(0,i)},e.basename=function(n,e){var r=function(n){"string"!=typeof n&&(n+="");var e,r=0,i=-1,t=!0;for(e=n.length-1;e>=0;--e)if(47===n.charCodeAt(e)){if(!t){r=e+1;break}}else-1===i&&(t=!1,i=e+1);return-1===i?"":n.slice(r,i)}(n);return e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.length-e.length)),r},e.extname=function(n){"string"!=typeof n&&(n+="");for(var e=-1,r=0,i=-1,t=!0,o=0,s=n.length-1;s>=0;--s){var l=n.charCodeAt(s);if(47!==l)-1===i&&(t=!1,i=s+1),46===l?-1===e?e=s:1!==o&&(o=1):-1!==e&&(o=-1);else if(!t){r=s+1;break}}return-1===e||-1===i||0===o||1===o&&e===i-1&&e===r+1?"":n.slice(e,i)};var t="b"==="ab".substr(-1)?function(n,e,r){return n.substr(e,r)}:function(n,e,r){return e<0&&(e=n.length+e),n.substr(e,r)}}).call(this,r("8oxB"))},IRUh:function(n,e,r){"use strict";r.d(e,"a",(function(){return u}));var i=r("dI71"),t=r("q1tI"),o=r.n(t),s=r("iyGq"),l=r("KQm4"),a=(r("yLb1"),function(n){function e(){return n.apply(this,arguments)||this}return Object(i.a)(e,n),e.prototype.render=function(){var n=this.props,e=n.demo,i=n.children;if("undefined"!=typeof window){var t;r("RoSU");var s=r("Zz1u").Xt,a="gatsby_iframe-inside";e.container&&(a+=" gatsby_iframe-container"),(t=document.documentElement.classList).add.apply(t,Object(l.a)(a.split(" "))),document.documentElement.setAttribute("id","iframe--"+e.name);s.ready((function(){window.self!==window.top&&window.parent.initIframe(window.name,e.htmlSource,e.jsxSource,e.cssSource,e.jsSource)}))}return o.a.createElement(o.a.Fragment,null,i)},e}(o.a.Component)),u=function(n){function e(){return n.apply(this,arguments)||this}return Object(i.a)(e,n),e.prototype.render=function(){var n=this.props.demo,e={title:"Demo",description:"Demo"};return n.path=("/demos/"+n.dirs.join("/")+"/"+n.name).replace("/iframe","").replace("src/gatsby/code/",""),n.cssSource=n.path+".css",n.jsSource=n.path+".js",o.a.createElement(a,{demo:n},o.a.createElement(s.a,{title:e.title,description:e.description}),o.a.createElement("div",{id:"body-outer"},o.a.createElement("div",{id:"gatsby_body-inner",className:"gatsby_demo_source--from",dangerouslySetInnerHTML:{__html:n.htmlSource}})))},e}(o.a.Component)},TaEE:function(n,e,r){"use strict";r.r(e),r.d(e,"iconX",(function(){return i})),r.d(e,"iconSearch",(function(){return t})),r.d(e,"iconArrowLeft",(function(){return o})),r.d(e,"iconArrowRight",(function(){return s})),r.d(e,"iconArrowUp",(function(){return l})),r.d(e,"iconArrowDown",(function(){return a})),r.d(e,"iconChevronLeft",(function(){return u})),r.d(e,"iconChevronRight",(function(){return c})),r.d(e,"iconChevronUp",(function(){return d})),r.d(e,"iconChevronDown",(function(){return m})),r.d(e,"iconLocate",(function(){return v})),r.d(e,"iconPackage",(function(){return h})),r.d(e,"iconGithub",(function(){return b})),r.d(e,"iconLink",(function(){return p})),r.d(e,"iconCode",(function(){return f})),r.d(e,"iconMaximize",(function(){return g})),r.d(e,"iconExternal",(function(){return w})),r.d(e,"iconCopy",(function(){return y}));var i=function(n){var e=(void 0===n?{}:n).classes,r=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(r=r?" "+r:"")+'"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'},t=function(n){var e=(void 0===n?{}:n).classes,r=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(r=r?" "+r:"")+'"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>'},o=function(n){var e=(void 0===n?{}:n).classes,r=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(r=r?" "+r:"")+'"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>'},s=function(n){var e=(void 0===n?{}:n).classes,r=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(r=r?" "+r:"")+'"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>'},l=function(n){var e=(void 0===n?{}:n).classes,r=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(r=r?" "+r:"")+'"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>'},a=function(n){var e=(void 0===n?{}:n).classes,r=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(r=r?" "+r:"")+'"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>'},u=function(n){var e=(void 0===n?{}:n).classes,r=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(r=r?" "+r:"")+'"><polyline points="15 18 9 12 15 6"></polyline></svg>'},c=function(n){var e=(void 0===n?{}:n).classes,r=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(r=r?" "+r:"")+'"><polyline points="9 18 15 12 9 6"></polyline></svg>'},d=function(n){var e=(void 0===n?{}:n).classes,r=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(r=r?" "+r:"")+'"><polyline points="18 15 12 9 6 15"></polyline></svg>'},m=function(n){var e=(void 0===n?{}:n).classes,r=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(r=r?" "+r:"")+'"><polyline points="6 9 12 15 18 9"></polyline></svg>'},v=function(n){var e=(void 0===n?{}:n).classes,r=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(r=r?" "+r:"")+'"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>'},h=function(n){var e=(void 0===n?{}:n).classes,r=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(r=r?" "+r:"")+'"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>'},b=function(n){var e=(void 0===n?{}:n).classes,r=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(r=r?" "+r:"")+'"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>'},p=function(n){var e=(void 0===n?{}:n).classes,r=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(r=r?" "+r:"")+'"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>'},f=function(n){var e=(void 0===n?{}:n).classes,r=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(r=r?" "+r:"")+'"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>'},g=function(n){var e=(void 0===n?{}:n).classes,r=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(r=r?" "+r:"")+'"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>'},w=function(n){var e=(void 0===n?{}:n).classes,r=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(r=r?" "+r:"")+'"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>'},y=function(n){var e=(void 0===n?{}:n).classes,r=void 0===e?null:e;return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon'+(r=r?" "+r:"")+'"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>'}},Yg7f:function(n,e,r){"use strict";r.r(e),e.default=function(){return"text-white links-inverse bg-accent-500"}},emhF:function(n,e,r){"use strict";r.r(e),function(n){r.d(e,"demo",(function(){return p}));var i=r("dI71"),t=r("q1tI"),o=r.n(t),s=r("33yf"),l=r.n(s),a=r("IRUh"),u=r("Ybrd").default,c=r("sf5o").default,d=r("2iEb").default,m=r("Yg7f").default,v=r("TaEE").iconX,h=n.replace(/\\/g,"/"),b=l.a.dirname(h).split("/"),p={container:!1,name:l.a.basename(h,".js"),dirs:b};p.htmlSource='\n<div data-xt-sticky="{ sticky: \'fixed\' }">\n  <div class="card card-sm '+m()+'">\n    <div class="list list-2">\n      <a href="#anchor-0" class="btn btn-md rounded-md '+c()+'">\n        anchor 0\n      </a>\n      <a href="#anchor-1" class="btn btn-md rounded-md '+c()+'">\n        anchor 1\n      </a>\n      <a href="#anchor-2" class="btn btn-md rounded-md '+c()+'">\n        anchor 2\n      </a>\n      <button type="button" class="btn btn-md rounded-md '+u()+'" data-xt-overlay="{ targets: \'#demo--overlay-scroll-to-anchor\' }">\n        anchors within overlay\n      </button>\n    </div>\n  </div>\n</div>\n\n<div class="overlay" id="demo--overlay-scroll-to-anchor">\n  <div class="overlay-container p-0">\n    <div class="overlay-inner">\n\n      <div class="btn btn-close p-5 text-2xl" aria-label="Close">\n        '+v()+'\n      </div>\n\n      <div class="card card-sm '+d()+'" id="anchor-overlay-0">\n        <div class="h4">Lorem ipsum dolor sit amet</div>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>\n        <div class="list list-2">\n          <a href="#anchor-overlay-0" class="btn btn-md rounded-md '+u()+'">\n            anchor overlay 0\n          </a>\n          <a href="#anchor-overlay-1" class="btn btn-md rounded-md '+u()+'">\n            anchor overlay 1\n          </a>\n          <a href="#anchor-overlay-2" class="btn btn-md rounded-md '+u()+'">\n            anchor overlay 2\n          </a>\n        </div>\n      </div>\n\n      <br/><br/><br/><br/><br/><br/><br/>\n      <br/><br/><br/><br/><br/><br/><br/>\n      <br/><br/><br/><br/><br/><br/><br/>\n\n      <div class="card card-sm '+d()+'" id="anchor-overlay-1">\n        <div class="h4">Lorem ipsum dolor sit amet</div>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>\n        <div class="list list-2">\n          <a href="#anchor-overlay-0" class="btn btn-md rounded-md '+u()+'">\n            anchor overlay 0\n          </a>\n          <a href="#anchor-overlay-1" class="btn btn-md rounded-md '+u()+'">\n            anchor overlay 1\n          </a>\n          <a href="#anchor-overlay-2" class="btn btn-md rounded-md '+u()+'">\n            anchor overlay 2\n          </a>\n        </div>\n      </div>\n\n      <br/><br/><br/><br/><br/><br/><br/>\n      <br/><br/><br/><br/><br/><br/><br/>\n      <br/><br/><br/><br/><br/><br/><br/>\n\n      <div class="card card-sm '+d()+'" id="anchor-overlay-2">\n        <div class="h4">Lorem ipsum dolor sit amet</div>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>\n        <div class="list list-2">\n          <a href="#anchor-overlay-0" class="btn btn-md rounded-md '+u()+'">\n            anchor overlay 0\n          </a>\n          <a href="#anchor-overlay-1" class="btn btn-md rounded-md '+u()+'">\n            anchor overlay 1\n          </a>\n          <a href="#anchor-overlay-2" class="btn btn-md rounded-md '+u()+'">\n            anchor overlay 2\n          </a>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<div class="container">\n\n  <div class="card card-sm '+d()+'" id="anchor-0">\n    <div class="h4">Lorem ipsum dolor sit amet</div>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>\n    <div class="list list-2">\n      <a href="#anchor-0" class="btn btn-md rounded-md '+u()+'">\n        anchor 0\n      </a>\n      <a href="#anchor-1" class="btn btn-md rounded-md '+u()+'">\n        anchor 1\n      </a>\n      <a href="#anchor-2" class="btn btn-md rounded-md '+u()+'">\n        anchor 2\n      </a>\n    </div>\n  </div>\n\n  <br/><br/><br/><br/><br/><br/><br/>\n  <br/><br/><br/><br/><br/><br/><br/>\n  <br/><br/><br/><br/><br/><br/><br/>\n\n  <div class="card card-sm '+d()+'" id="anchor-1">\n    <div class="h4">Lorem ipsum dolor sit amet</div>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>\n    <div class="list list-2">\n      <a href="#anchor-0" class="btn btn-md rounded-md '+u()+'">\n        anchor 0\n      </a>\n      <a href="#anchor-1" class="btn btn-md rounded-md '+u()+'">\n        anchor 1\n      </a>\n      <a href="#anchor-2" class="btn btn-md rounded-md '+u()+'">\n        anchor 2\n      </a>\n    </div>\n  </div>\n\n  <br/><br/><br/><br/><br/><br/><br/>\n  <br/><br/><br/><br/><br/><br/><br/>\n  <br/><br/><br/><br/><br/><br/><br/>\n\n  <div class="card card-sm '+d()+'" id="anchor-2">\n    <div class="h4">Lorem ipsum dolor sit amet</div>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>\n    <div class="list list-2">\n      <a href="#anchor-0" class="btn btn-md rounded-md '+u()+'">\n        anchor 0\n      </a>\n      <a href="#anchor-1" class="btn btn-md rounded-md '+u()+'">\n        anchor 1\n      </a>\n      <a href="#anchor-2" class="btn btn-md rounded-md '+u()+'">\n        anchor 2\n      </a>\n    </div>\n  </div>\n\n</div>\n';var f=function(n){function e(){return n.apply(this,arguments)||this}return Object(i.a)(e,n),e.prototype.render=function(){return o.a.createElement(a.a,{demo:p})},e}(o.a.Component);e.default=f}.call(this,"src/gatsby/code/iframe/components/addons/navigation/scroll-to-anchor.js")}}]);
//# sourceMappingURL=component---src-gatsby-code-iframe-components-addons-navigation-scroll-to-anchor-js-3e5a183ebfaa4f0fe186.js.map