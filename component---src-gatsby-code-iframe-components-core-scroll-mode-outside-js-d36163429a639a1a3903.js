(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"33yf":function(e,i,t){(function(e){function t(e,i){for(var t=0,s=e.length-1;s>=0;s--){var r=e[s];"."===r?e.splice(s,1):".."===r?(e.splice(s,1),t++):t&&(e.splice(s,1),t--)}if(i)for(;t--;t)e.unshift("..");return e}function s(e,i){if(e.filter)return e.filter(i);for(var t=[],s=0;s<e.length;s++)i(e[s],s,e)&&t.push(e[s]);return t}i.resolve=function(){for(var i="",r=!1,n=arguments.length-1;n>=-1&&!r;n--){var a=n>=0?arguments[n]:e.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(i=a+"/"+i,r="/"===a.charAt(0))}return(r?"/":"")+(i=t(s(i.split("/"),(function(e){return!!e})),!r).join("/"))||"."},i.normalize=function(e){var n=i.isAbsolute(e),a="/"===r(e,-1);return(e=t(s(e.split("/"),(function(e){return!!e})),!n).join("/"))||n||(e="."),e&&a&&(e+="/"),(n?"/":"")+e},i.isAbsolute=function(e){return"/"===e.charAt(0)},i.join=function(){var e=Array.prototype.slice.call(arguments,0);return i.normalize(s(e,(function(e,i){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},i.relative=function(e,t){function s(e){for(var i=0;i<e.length&&""===e[i];i++);for(var t=e.length-1;t>=0&&""===e[t];t--);return i>t?[]:e.slice(i,t-i+1)}e=i.resolve(e).substr(1),t=i.resolve(t).substr(1);for(var r=s(e.split("/")),n=s(t.split("/")),a=Math.min(r.length,n.length),u=a,o=0;o<a;o++)if(r[o]!==n[o]){u=o;break}var l=[];for(o=u;o<r.length;o++)l.push("..");return(l=l.concat(n.slice(u))).join("/")},i.sep="/",i.delimiter=":",i.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var i=e.charCodeAt(0),t=47===i,s=-1,r=!0,n=e.length-1;n>=1;--n)if(47===(i=e.charCodeAt(n))){if(!r){s=n;break}}else r=!1;return-1===s?t?"/":".":t&&1===s?"/":e.slice(0,s)},i.basename=function(e,i){var t=function(e){"string"!=typeof e&&(e+="");var i,t=0,s=-1,r=!0;for(i=e.length-1;i>=0;--i)if(47===e.charCodeAt(i)){if(!r){t=i+1;break}}else-1===s&&(r=!1,s=i+1);return-1===s?"":e.slice(t,s)}(e);return i&&t.substr(-1*i.length)===i&&(t=t.substr(0,t.length-i.length)),t},i.extname=function(e){"string"!=typeof e&&(e+="");for(var i=-1,t=0,s=-1,r=!0,n=0,a=e.length-1;a>=0;--a){var u=e.charCodeAt(a);if(47!==u)-1===s&&(r=!1,s=a+1),46===u?-1===i?i=a:1!==n&&(n=1):-1!==i&&(n=-1);else if(!r){t=a+1;break}}return-1===i||-1===s||0===n||1===n&&i===s-1&&i===t+1?"":e.slice(i,s)};var r="b"==="ab".substr(-1)?function(e,i,t){return e.substr(i,t)}:function(e,i,t){return i<0&&(i=e.length+i),e.substr(i,t)}}).call(this,t("8oxB"))},IRUh:function(e,i,t){"use strict";t.d(i,"a",(function(){return l}));var s=t("dI71"),r=t("q1tI"),n=t.n(r),a=t("iyGq"),u=t("KQm4"),o=function(e){function i(){return e.apply(this,arguments)||this}return Object(s.a)(i,e),i.prototype.render=function(){var e=this.props,i=e.demo,s=e.children;if("undefined"!=typeof window){var r;t("yLb1"),t("vkEH");var a=t("Zz1u").Xt,o="gatsby_iframe-inside";i.container&&(o+=" gatsby_iframe-container"),(r=document.documentElement.classList).add.apply(r,Object(u.a)(o.split(" "))),document.documentElement.setAttribute("id","iframe--"+i.name);a.ready((function(){window.self!==window.top&&window.parent.initIframe(window.name,i.htmlSource,i.jsxSource,i.cssSource,i.jsSource)}))}return n.a.createElement(n.a.Fragment,null,s)},i}(n.a.Component),l=function(e){function i(){return e.apply(this,arguments)||this}return Object(s.a)(i,e),i.prototype.render=function(){var e=this.props.demo,i={title:"Demo",description:"Demo"};return e.path=("/demos/"+e.dirs.join("/")+"/"+e.name).replace("/iframe","").replace("src/gatsby/code/",""),e.cssSource=e.path+".css",e.jsSource=e.path+".js",n.a.createElement(o,{demo:e},n.a.createElement(a.a,{title:i.title,description:i.description}),n.a.createElement("div",{id:"body-outer"},n.a.createElement("div",{id:"gatsby_body-inner",className:"gatsby_demo_source--from",dangerouslySetInnerHTML:{__html:e.htmlSource}})))},i}(n.a.Component)},dlrr:function(e,i,t){"use strict";t.r(i),function(e){t.d(i,"demo",(function(){return m}));var s=t("dI71"),r=t("q1tI"),n=t.n(r),a=t("33yf"),u=t.n(a),o=t("IRUh"),l=t("xu3J").default,c=e.replace(/\\/g,"/"),d=u.a.dirname(c).split("/"),m={container:!0,name:u.a.basename(c,".js"),dirs:d};m.htmlSource='\n<div class="row row-3 demo--scroll-outside"\n  data-xt-scroll="{ elements: \'.card\' }">\n\n  <div class="w-full">\n    <div class="card rounded-md '+l()+'">\n      <div class="h4">Lorem ipsum</div>\n      <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n    </div>\n  </div>\n\n  <div class="w-full">\n    <div class="card rounded-md '+l()+'">\n      <div class="h4">Lorem ipsum</div>\n      <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n    </div>\n  </div>\n\n  <div class="w-full md:w-6/12">\n    <div class="card rounded-md '+l()+'">\n      <div class="h4">Lorem ipsum</div>\n      <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n    </div>\n  </div>\n\n  <div class="w-full md:w-6/12">\n    <div class="card rounded-md '+l()+'">\n      <div class="h4">Lorem ipsum</div>\n      <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n    </div>\n  </div>\n\n  <div class="w-full md:w-6/12">\n    <div class="card rounded-md '+l()+'">\n      <div class="h4">Lorem ipsum</div>\n      <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n    </div>\n  </div>\n\n  <div class="w-full md:w-6/12">\n    <div class="card rounded-md '+l()+'">\n      <div class="h4">Lorem ipsum</div>\n      <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n    </div>\n  </div>\n\n  <div class="w-6/12 sm:w-4/12">\n    <div class="card rounded-md '+l()+'">\n      <div class="h4">Lorem ipsum</div>\n      <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n    </div>\n  </div>\n\n  <div class="w-6/12 sm:w-4/12">\n    <div class="card rounded-md '+l()+'">\n      <div class="h4">Lorem ipsum</div>\n      <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n    </div>\n  </div>\n\n  <div class="w-6/12 sm:w-4/12">\n    <div class="card rounded-md '+l()+'">\n      <div class="h4">Lorem ipsum</div>\n      <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n    </div>\n  </div>\n\n</div>\n';var p=function(e){function i(){return e.apply(this,arguments)||this}return Object(s.a)(i,e),i.prototype.render=function(){return n.a.createElement(o.a,{demo:m})},i}(n.a.Component);i.default=p}.call(this,"src/gatsby/code/iframe/components/core/scroll/mode-outside.js")},xu3J:function(e,i,t){"use strict";t.r(i),i.default=function(){return"card-sm text-black links-default bg-gray-200"}}}]);
//# sourceMappingURL=component---src-gatsby-code-iframe-components-core-scroll-mode-outside-js-d36163429a639a1a3903.js.map