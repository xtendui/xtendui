(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"33yf":function(e,n,t){(function(e){function t(e,n){for(var t=0,i=e.length-1;i>=0;i--){var s=e[i];"."===s?e.splice(i,1):".."===s?(e.splice(i,1),t++):t&&(e.splice(i,1),t--)}if(n)for(;t--;t)e.unshift("..");return e}function i(e,n){if(e.filter)return e.filter(n);for(var t=[],i=0;i<e.length;i++)n(e[i],i,e)&&t.push(e[i]);return t}n.resolve=function(){for(var n="",s=!1,r=arguments.length-1;r>=-1&&!s;r--){var a=r>=0?arguments[r]:e.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(n=a+"/"+n,s="/"===a.charAt(0))}return(s?"/":"")+(n=t(i(n.split("/"),(function(e){return!!e})),!s).join("/"))||"."},n.normalize=function(e){var r=n.isAbsolute(e),a="/"===s(e,-1);return(e=t(i(e.split("/"),(function(e){return!!e})),!r).join("/"))||r||(e="."),e&&a&&(e+="/"),(r?"/":"")+e},n.isAbsolute=function(e){return"/"===e.charAt(0)},n.join=function(){var e=Array.prototype.slice.call(arguments,0);return n.normalize(i(e,(function(e,n){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},n.relative=function(e,t){function i(e){for(var n=0;n<e.length&&""===e[n];n++);for(var t=e.length-1;t>=0&&""===e[t];t--);return n>t?[]:e.slice(n,t-n+1)}e=n.resolve(e).substr(1),t=n.resolve(t).substr(1);for(var s=i(e.split("/")),r=i(t.split("/")),a=Math.min(s.length,r.length),o=a,l=0;l<a;l++)if(s[l]!==r[l]){o=l;break}var c=[];for(l=o;l<s.length;l++)c.push("..");return(c=c.concat(r.slice(o))).join("/")},n.sep="/",n.delimiter=":",n.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var n=e.charCodeAt(0),t=47===n,i=-1,s=!0,r=e.length-1;r>=1;--r)if(47===(n=e.charCodeAt(r))){if(!s){i=r;break}}else s=!1;return-1===i?t?"/":".":t&&1===i?"/":e.slice(0,i)},n.basename=function(e,n){var t=function(e){"string"!=typeof e&&(e+="");var n,t=0,i=-1,s=!0;for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!s){t=n+1;break}}else-1===i&&(s=!1,i=n+1);return-1===i?"":e.slice(t,i)}(e);return n&&t.substr(-1*n.length)===n&&(t=t.substr(0,t.length-n.length)),t},n.extname=function(e){"string"!=typeof e&&(e+="");for(var n=-1,t=0,i=-1,s=!0,r=0,a=e.length-1;a>=0;--a){var o=e.charCodeAt(a);if(47!==o)-1===i&&(s=!1,i=a+1),46===o?-1===n?n=a:1!==r&&(r=1):-1!==n&&(r=-1);else if(!s){t=a+1;break}}return-1===n||-1===i||0===r||1===r&&n===i-1&&n===t+1?"":e.slice(n,i)};var s="b"==="ab".substr(-1)?function(e,n,t){return e.substr(n,t)}:function(e,n,t){return n<0&&(n=e.length+n),e.substr(n,t)}}).call(this,t("8oxB"))},IRUh:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var i=t("dI71"),s=t("q1tI"),r=t.n(s),a=t("iyGq"),o=t("KQm4"),l=function(e){function n(){return e.apply(this,arguments)||this}return Object(i.a)(n,e),n.prototype.render=function(){var e=this.props,n=e.demo,i=e.children;if("undefined"!=typeof window){var s;t("yLb1"),t("vkEH");var a=t("Zz1u").Xt,l="gatsby_iframe-inside";n.container&&(l+=" gatsby_iframe-container"),(s=document.documentElement.classList).add.apply(s,Object(o.a)(l.split(" "))),document.documentElement.setAttribute("id","iframe--"+n.name);a.ready((function(){window.self!==window.top&&window.parent.initIframe(window.name,n.htmlSource,n.jsxSource,n.cssSource,n.jsSource)}))}return r.a.createElement(r.a.Fragment,null,i)},n}(r.a.Component),c=function(e){function n(){return e.apply(this,arguments)||this}return Object(i.a)(n,e),n.prototype.render=function(){var e=this.props.demo,n={title:"Demo",description:"Demo"};return e.path=("/demos/"+e.dirs.join("/")+"/"+e.name).replace("/iframe","").replace("src/gatsby/code/",""),e.cssSource=e.path+".css",e.jsSource=e.path+".js",r.a.createElement(l,{demo:e},r.a.createElement(a.a,{title:n.title,description:n.description}),r.a.createElement("div",{id:"body-outer"},r.a.createElement("div",{id:"gatsby_body-inner",className:"gatsby_demo_source--from",dangerouslySetInnerHTML:{__html:e.htmlSource}})))},n}(r.a.Component)},r4Eb:function(e,n,t){"use strict";t.r(n),function(e){t.d(n,"demo",(function(){return f}));var i=t("dI71"),s=t("q1tI"),r=t.n(s),a=t("33yf"),o=t.n(a),l=t("IRUh"),c=t("sf5o").default,d=t("TaEE").iconArrowLeft,u=t("TaEE").iconArrowRight,v=e.replace(/\\/g,"/"),m=o.a.dirname(v).split("/"),f={container:!1,name:o.a.basename(v,".js"),dirs:m};f.htmlSource='\n<div class="slider">\n\n  <div class="slides">\n    <nav class="slides-inner duration-none transform-none">\n\n      <div class="slide w-full slide-absolute">\n        <div class="hero relative block overflow-hidden w-full">\n          <div class="hero-inner">\n            <div class="media-container h-screen">\n              <div class="media-inner">\n                <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">\n              </div>\n            </div>\n            <div class="hero-content container absolute inset-0 flex items-end justify-center text-center">\n              <a href="#" class="group block w-full max-w-xl container-y text-white links-inverse">\n                <div class="h1 h1-display">\n                  Lorem ipsum\n                </div>\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class="hero-cover absolute inset-0 pointer-events-none bg-accent-500 transform translate-x-full"></div>\n      </div>\n\n      <div class="slide w-full slide-absolute">\n        <div class="hero relative block overflow-hidden w-full">\n          <div class="hero-inner">\n            <div class="media-container h-screen">\n              <div class="media-inner">\n                <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">\n              </div>\n            </div>\n            <div class="hero-content container absolute inset-0 flex items-end justify-center text-center md:justify-start md:text-left">\n              <a href="#" class="group block w-full max-w-xl container-y text-white links-inverse">\n                <div class="h1">\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit\n                </div>\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class="hero-cover absolute inset-0 pointer-events-none bg-accent-500 transform translate-x-full"></div>\n      </div>\n\n      <div class="slide w-full slide-absolute">\n        <div class="hero relative block overflow-hidden w-full">\n          <div class="hero-inner">\n            <div class="media-container h-screen">\n              <div class="media-inner">\n                <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">\n              </div>\n            </div>\n            <div class="hero-content container absolute inset-0 flex items-end justify-center text-center md:items-center md:justify-start md:text-left">\n              <div class="block w-full max-w-xl container-y text-white links-inverse">\n                <div class="h1">\n                  Lorem ipsum dolor sit amet\n                </div>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>\n                <div class="list list-2 justify-center md:justify-start">\n                  <a href="#" class="btn btn-md rounded-md '+c()+'">\n                    Lorem ipsum\n                  </a>\n                  <a href="#" class="btn btn-md rounded-md '+c()+'">\n                    Dolor sit amet\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class="hero-cover absolute inset-0 pointer-events-none bg-accent-500 transform translate-x-full"></div>\n      </div>\n\n      <div class="slide w-full slide-absolute">\n        <div class="hero relative block overflow-hidden w-full">\n          <div class="hero-inner">\n            <div class="media-container h-screen">\n              <div class="media-inner">\n                <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">\n              </div>\n            </div>\n            <div class="hero-content container absolute inset-0 flex items-end justify-center text-center md:items-center md:justify-end md:text-right">\n              <div class="block w-full max-w-xl container-y text-white links-inverse">\n                <div class="h1">\n                  Lorem ipsum dolor sit amet\n                </div>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>\n                <div class="list list-2 justify-center md:justify-end">\n                  <a href="#" class="btn btn-md rounded-md '+c()+'">\n                    Lorem ipsum\n                  </a>\n                  <a href="#" class="btn btn-md rounded-md '+c()+'">\n                    Dolor sit amet\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class="hero-cover absolute inset-0 pointer-events-none bg-accent-500 transform translate-x-full"></div>\n      </div>\n\n    </nav>\n  </div>\n\n  <button type="button" class="nav-sides left-0" data-xt-nav="-1" aria-label="Previous slide" data-xt-mouse-follow="{ targets: \'.nav-sides-btn\' }">\n    <div class="nav-sides-btn mouse-follow text-white text-2xl">\n      '+d({classes:"icon-md"})+'\n    </div>\n  </button>\n\n  <button type="button" class="nav-sides right-0" data-xt-nav="1" aria-label="Next slide" data-xt-mouse-follow="{ targets: \'.nav-sides-btn\' }">\n    <div class="nav-sides-btn mouse-follow text-white text-2xl">\n      '+u({classes:"icon-md"})+'\n    </div>\n  </button>\n\n  <nav class="slider-pagination w-full list list-2 hidden">\n    <button type="button" class="btn xt-ignore" data-xt-pag title="Slide xt-num">\n    </button>\n  </nav>\n\n</div>\n';var h=function(e){function n(){return e.apply(this,arguments)||this}return Object(i.a)(n,e),n.prototype.render=function(){return r.a.createElement(l.a,{demo:f})},n}(r.a.Component);n.default=h}.call(this,"src/gatsby/code/iframe/themes/hero/fashion-hero-v2.js")}}]);
//# sourceMappingURL=component---src-gatsby-code-iframe-themes-hero-fashion-hero-v-2-js-553485a30f648c074878.js.map