(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"33yf":function(e,t,i){(function(e){function i(e,t){for(var i=0,u=e.length-1;u>=0;u--){var a=e[u];"."===a?e.splice(u,1):".."===a?(e.splice(u,1),i++):i&&(e.splice(u,1),i--)}if(t)for(;i--;i)e.unshift("..");return e}function u(e,t){if(e.filter)return e.filter(t);for(var i=[],u=0;u<e.length;u++)t(e[u],u,e)&&i.push(e[u]);return i}t.resolve=function(){for(var t="",a=!1,n=arguments.length-1;n>=-1&&!a;n--){var s=n>=0?arguments[n]:e.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(t=s+"/"+t,a="/"===s.charAt(0))}return(a?"/":"")+(t=i(u(t.split("/"),(function(e){return!!e})),!a).join("/"))||"."},t.normalize=function(e){var n=t.isAbsolute(e),s="/"===a(e,-1);return(e=i(u(e.split("/"),(function(e){return!!e})),!n).join("/"))||n||(e="."),e&&s&&(e+="/"),(n?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(u(e,(function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,i){function u(e){for(var t=0;t<e.length&&""===e[t];t++);for(var i=e.length-1;i>=0&&""===e[i];i--);return t>i?[]:e.slice(t,i-t+1)}e=t.resolve(e).substr(1),i=t.resolve(i).substr(1);for(var a=u(e.split("/")),n=u(i.split("/")),s=Math.min(a.length,n.length),r=s,l=0;l<s;l++)if(a[l]!==n[l]){r=l;break}var o=[];for(l=r;l<a.length;l++)o.push("..");return(o=o.concat(n.slice(r))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),i=47===t,u=-1,a=!0,n=e.length-1;n>=1;--n)if(47===(t=e.charCodeAt(n))){if(!a){u=n;break}}else a=!1;return-1===u?i?"/":".":i&&1===u?"/":e.slice(0,u)},t.basename=function(e,t){var i=function(e){"string"!=typeof e&&(e+="");var t,i=0,u=-1,a=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!a){i=t+1;break}}else-1===u&&(a=!1,u=t+1);return-1===u?"":e.slice(i,u)}(e);return t&&i.substr(-1*t.length)===t&&(i=i.substr(0,i.length-t.length)),i},t.extname=function(e){"string"!=typeof e&&(e+="");for(var t=-1,i=0,u=-1,a=!0,n=0,s=e.length-1;s>=0;--s){var r=e.charCodeAt(s);if(47!==r)-1===u&&(a=!1,u=s+1),46===r?-1===t?t=s:1!==n&&(n=1):-1!==t&&(n=-1);else if(!a){i=s+1;break}}return-1===t||-1===u||0===n||1===n&&t===u-1&&t===i+1?"":e.slice(t,u)};var a="b"==="ab".substr(-1)?function(e,t,i){return e.substr(t,i)}:function(e,t,i){return t<0&&(t=e.length+t),e.substr(t,i)}}).call(this,i("8oxB"))},IRUh:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var u=i("dI71"),a=i("q1tI"),n=i.n(a),s=i("iyGq"),r=i("KQm4"),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(u.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.demo,u=e.children;if("undefined"!=typeof window){var a;i("yLb1"),i("vkEH");var s=i("Zz1u").Xt,l="gatsby_iframe-inside";t.container&&(l+=" gatsby_iframe-container"),(a=document.documentElement.classList).add.apply(a,Object(r.a)(l.split(" "))),document.documentElement.setAttribute("id","iframe--"+t.name);s.ready((function(){window.self!==window.top&&window.parent.initIframe(window.name,t.htmlSource,t.jsxSource,t.cssSource,t.jsSource)}))}return n.a.createElement(n.a.Fragment,null,u)},t}(n.a.Component),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(u.a)(t,e),t.prototype.render=function(){var e=this.props.demo,t={title:"Demo",description:"Demo"};return e.path=("/demos/"+e.dirs.join("/")+"/"+e.name).replace("/iframe","").replace("src/gatsby/code/",""),e.cssSource=e.path+".css",e.jsSource=e.path+".js",n.a.createElement(l,{demo:e},n.a.createElement(s.a,{title:t.title,description:t.description}),n.a.createElement("div",{id:"body-outer"},n.a.createElement("div",{id:"gatsby_body-inner",className:"gatsby_demo_source--from",dangerouslySetInnerHTML:{__html:e.htmlSource}})))},t}(n.a.Component)},UOJH:function(e,t,i){"use strict";i.r(t),function(e){i.d(t,"demo",(function(){return p}));var u=i("dI71"),a=i("q1tI"),n=i.n(a),s=i("33yf"),r=i.n(s),l=i("IRUh"),o=i("sf5o").default,c=i("xu3J").default,m=e.replace(/\\/g,"/"),d=r.a.dirname(m).split("/"),p={container:!0,name:r.a.basename(m,".js"),dirs:d};p.htmlSource='\n<div class="jump-to-content toggle sr-only xt-fixed">\n  <a href="#jump-to-content" class="btn btn-md rounded-md '+o()+'">\n    Jump to content\n  </a>\n</div>\n\n<div class="row row-3">\n\n  <div class="w-full">\n    <div class="card rounded-md '+c()+'">\n      <div class="h4">Lorem ipsum</div>\n      <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n    </div>\n  </div>\n\n  <div class="w-full">\n    <div class="card rounded-md '+c()+'">\n      <div class="h4">Lorem ipsum</div>\n      <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n    </div>\n  </div>\n\n  <div class="w-full" id="jump-to-content">\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est. Etiam egestas efficitur semper. Donec imperdiet eget justo at pellentesque. Proin a ultricies orci. Vivamus ut scelerisque lorem. Suspendisse lobortis consequat magna ut ultricies. Duis consequat vitae justo nec commodo. Vestibulum id eros eu sapien aliquam feugiat. Aenean id accumsan orci, nec elementum ex. Fusce a dolor in lacus facilisis vulputate vitae vitae nunc. Phasellus odio quam, semper in finibus at, consequat quis lacus. Sed varius sem commodo tellus pretium, posuere pharetra mauris elementum. Nunc et aliquam velit, quis suscipit justo. Ut ac pretium massa. Aenean ullamcorper mollis urna eu pharetra.</p>\n    <p>Proin eget lectus pharetra, pretium nunc sed, pulvinar nibh. Quisque ac tellus ac mi posuere tristique. Ut dictum elit sed facilisis rutrum. In sagittis ac ante at blandit. Sed at felis fermentum, semper lorem sed, sagittis lacus. Cras justo massa, molestie sit amet lacinia a, luctus ac velit. Cras tristique, urna in hendrerit laoreet, nisi sem interdum urna, rutrum elementum nisl turpis id est.</p>\n    <p>Morbi eget odio nibh. Pellentesque consectetur vitae libero ac blandit. Ut et lectus id diam pretium mattis ac at massa. Sed sagittis fermentum dictum. Nulla interdum justo vitae orci pharetra congue. Nullam enim dui, tempor ac dapibus in, maximus eget orci. Pellentesque mollis felis vel sapien sagittis luctus. Etiam vitae condimentum ligula. Cras blandit vehicula arcu fermentum blandit. Ut eu urna finibus felis bibendum tincidunt at vitae ante.</p>\n    <p>Vestibulum tempus nunc sed varius pellentesque. Fusce feugiat non ex eu consequat. Donec neque ligula, vehicula et felis at, imperdiet malesuada odio. Quisque metus felis, consequat et mollis sit amet, malesuada ac quam. Phasellus eu cursus purus. Nullam eleifend auctor ipsum eu semper. Morbi volutpat tortor lectus, vitae ullamcorper nibh congue ut. In hac habitasse platea dictumst. Mauris a est at enim hendrerit porttitor sit amet vitae felis. Morbi sollicitudin urna at dignissim gravida. Aliquam in quam sapien.</p>\n    <p>Maecenas pharetra ante id tortor scelerisque, id vehicula nibh finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent et ante et mauris condimentum tempus. Donec efficitur sodales lobortis. In eu mi nec arcu lacinia aliquet vel et dolor. Integer feugiat mauris non erat hendrerit, eu sollicitudin tellus vestibulum. Duis convallis malesuada nunc vel imperdiet. Donec in ligula et nisl vestibulum lobortis vitae in nunc. Morbi non lorem nibh. Mauris blandit viverra interdum. In bibendum orci vel molestie vulputate.</p>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est. Etiam egestas efficitur semper. Donec imperdiet eget justo at pellentesque. Proin a ultricies orci. Vivamus ut scelerisque lorem. Suspendisse lobortis consequat magna ut ultricies. Duis consequat vitae justo nec commodo. Vestibulum id eros eu sapien aliquam feugiat. Aenean id accumsan orci, nec elementum ex. Fusce a dolor in lacus facilisis vulputate vitae vitae nunc. Phasellus odio quam, semper in finibus at, consequat quis lacus. Sed varius sem commodo tellus pretium, posuere pharetra mauris elementum. Nunc et aliquam velit, quis suscipit justo. Ut ac pretium massa. Aenean ullamcorper mollis urna eu pharetra.</p>\n    <p>Proin eget lectus pharetra, pretium nunc sed, pulvinar nibh. Quisque ac tellus ac mi posuere tristique. Ut dictum elit sed facilisis rutrum. In sagittis ac ante at blandit. Sed at felis fermentum, semper lorem sed, sagittis lacus. Cras justo massa, molestie sit amet lacinia a, luctus ac velit. Cras tristique, urna in hendrerit laoreet, nisi sem interdum urna, rutrum elementum nisl turpis id est.</p>\n    <p>Morbi eget odio nibh. Pellentesque consectetur vitae libero ac blandit. Ut et lectus id diam pretium mattis ac at massa. Sed sagittis fermentum dictum. Nulla interdum justo vitae orci pharetra congue. Nullam enim dui, tempor ac dapibus in, maximus eget orci. Pellentesque mollis felis vel sapien sagittis luctus. Etiam vitae condimentum ligula. Cras blandit vehicula arcu fermentum blandit. Ut eu urna finibus felis bibendum tincidunt at vitae ante.</p>\n    <p>Vestibulum tempus nunc sed varius pellentesque. Fusce feugiat non ex eu consequat. Donec neque ligula, vehicula et felis at, imperdiet malesuada odio. Quisque metus felis, consequat et mollis sit amet, malesuada ac quam. Phasellus eu cursus purus. Nullam eleifend auctor ipsum eu semper. Morbi volutpat tortor lectus, vitae ullamcorper nibh congue ut. In hac habitasse platea dictumst. Mauris a est at enim hendrerit porttitor sit amet vitae felis. Morbi sollicitudin urna at dignissim gravida. Aliquam in quam sapien.</p>\n    <p>Maecenas pharetra ante id tortor scelerisque, id vehicula nibh finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent et ante et mauris condimentum tempus. Donec efficitur sodales lobortis. In eu mi nec arcu lacinia aliquet vel et dolor. Integer feugiat mauris non erat hendrerit, eu sollicitudin tellus vestibulum. Duis convallis malesuada nunc vel imperdiet. Donec in ligula et nisl vestibulum lobortis vitae in nunc. Morbi non lorem nibh. Mauris blandit viverra interdum. In bibendum orci vel molestie vulputate.</p>\n  </div>\n\n</div>\n';var f=function(e){function t(){return e.apply(this,arguments)||this}return Object(u.a)(t,e),t.prototype.render=function(){return n.a.createElement(l.a,{demo:p})},t}(n.a.Component);t.default=f}.call(this,"src/gatsby/code/iframe/components/addons/layout/jump-to-content.js")},xu3J:function(e,t,i){"use strict";i.r(t),t.default=function(){return"card-sm text-black links-default bg-gray-200"}}}]);
//# sourceMappingURL=component---src-gatsby-code-iframe-components-addons-layout-jump-to-content-js-fedc8fb964efafb42ead.js.map