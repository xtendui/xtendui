!function(){return function t(e,n,i){function r(o,l){if(!n[o]){if(!e[o]){var s="function"==typeof require&&require;if(!l&&s)return s(o,!0);if(a)return a(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[o]={exports:{}};e[o][0].call(u.exports,function(t){return r(e[o][1][t]||t)},u,u.exports,t,e,n,i)}return n[o].exports}for(var a="function"==typeof require&&require,o=0;o<i.length;o++)r(i[o]);return r}}()({1:[function(t,e,n){"use strict";var i=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],i=!0,r=!1,a=void 0;try{for(var o,l=t[Symbol.iterator]();!(i=(o=l.next()).done)&&(n.push(o.value),!e||n.length!==e);i=!0);}catch(t){r=!0,a=t}finally{try{!i&&l.return&&l.return()}finally{if(r)throw a}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=t("../../../scripts/xtend-utils"),a=t("../../../scripts/xtend"),o=function(t,e){var n=t.querySelectorAll(".demo-source-from");n.length&&(t=n[0]);var i=t.innerHTML;"css"!==e&&"js"!==e||(i=(i=(i=i.replace(/<[^>]*>/g,"")).substring(1)).replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">")),i.match(/[&<>]/g)&&(i=(i=(i=(i=i.replace(/&quot;/g,'"')).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")).replace(/("{)/g,"'{").replace(/(}")/g,"}'")).replace(/=""/g,""));var r=i.split("\n"),a=r[1].search(/\S/g),o=!0,l=!1,s=void 0;try{for(var c,u=r.keys()[Symbol.iterator]();!(o=(c=u.next()).done);o=!0){var d=c.value;r[d]=r[d].substring(a)}}catch(t){l=!0,s=t}finally{try{!o&&u.return&&u.return()}finally{if(l)throw s}}return i=(i=r.join("\n")).replace(/^\s+|\s+$/g,"")},l=!0,s=!1,c=void 0;try{for(var u,d=document.querySelectorAll("pre code")[Symbol.iterator]();!(l=(u=d.next()).done);l=!0){var f=u.value,y=f.className,v=o(f,y);f.innerHTML=v,window.hljs.highlightBlock(f)}}catch(t){s=!0,c=t}finally{try{!l&&d.return&&d.return()}finally{if(s)throw c}}var m=!0,h=!1,p=void 0;try{for(var g,b=document.querySelectorAll(".site-article > h2, .site-article > h3")[Symbol.iterator]();!(m=(g=b.next()).done);m=!0){g.value.classList.add("make-line")}}catch(t){h=!0,p=t}finally{try{!m&&b.return&&b.return()}finally{if(h)throw p}}var w=!0,x=!1,S=void 0;try{for(var A,O=document.querySelectorAll(".make-line")[Symbol.iterator]();!(w=(A=O.next()).done);w=!0){var q=A.value;q.innerHTML='<span class="line">'+q.innerHTML+"</div>",q.innerHTML='<span class="line-container">'+q.innerHTML+"</div>"}}catch(t){x=!0,S=t}finally{try{!w&&O.return&&O.return()}finally{if(x)throw S}}var k=!0,U=!1,X=void 0;try{for(var L,E=document.querySelectorAll(".site-article > h2, .site-article > h3")[Symbol.iterator]();!(k=(L=E.next()).done);k=!0){var C=L.value;C.classList.add("make-line");var T=void 0;if("H3"===C.tagName)for(T=C;T.previousElementSibling&&"H2"!==T.tagName;)T=T.previousElementSibling;var j="";T&&(j+=T.textContent.replace(/\s+/g,"-").toLowerCase()+"-"),j+=C.textContent.replace(/\s+/g,"-").toLowerCase(),C.setAttribute("id",j),C.innerHTML='<a href="#'+j+'">'+C.innerHTML+"</a>",C.classList.add("make-anchor"),C.append(r.XtUtil.createElement('<span class="site-article-anchor"><div class="btn"><span class="icon-link" aria-hidden="true"></span></div></span>'))}}catch(t){U=!0,X=t}finally{try{!k&&E.return&&E.return()}finally{if(U)throw X}}var F=!0,_=!1,R=void 0;try{for(var H,I=document.querySelectorAll(".site-aside-text > .btn:not(.different)")[Symbol.iterator]();!(F=(H=I.next()).done);F=!0){var B=H.value,M=r.XtUtil.parents(B,".site-aside-text")[0],D=!0,N=!1,P=void 0;try{for(var W,z=document.querySelectorAll(".site-article > h2, .site-article > h3")[Symbol.iterator]();!(D=(W=z.next()).done);D=!0){var $=W.value;if("H2"===$.tagName){var J=r.XtUtil.createElement('<div class="site-aside-sub-container"></div>');M.append(J),J.append(r.XtUtil.createElement('<a href="#'+$.getAttribute("id")+'" class="btn btn-site-aside-sub">'+$.textContent+"</a>")),J.append(r.XtUtil.createElement('<div class="site-aside-subsub collapse-height"></div>'))}else if("H3"===$.tagName){var G=M.querySelectorAll(".site-aside-subsub");G[G.length-1].append(r.XtUtil.createElement('<a href="#'+$.getAttribute("id")+'" class="btn btn-site-aside-subsub">'+$.textContent+"</a>"))}}}catch(t){N=!0,P=t}finally{try{!D&&z.return&&z.return()}finally{if(N)throw P}}}}catch(t){_=!0,R=t}finally{try{!F&&I.return&&I.return()}finally{if(_)throw R}}var K=!0,Q=!1,V=void 0;try{for(var Y,Z=document.querySelectorAll(".site-aside-text")[Symbol.iterator]();!(K=(Y=Z.next()).done);K=!0){var tt=Y.value;new a.XtToggle(tt,{elements:".site-aside-sub-container",targets:".site-aside-subsub",on:"mouseenter",off:"mouseleave",min:0,max:1})}}catch(t){Q=!0,V=t}finally{try{!K&&Z.return&&Z.return()}finally{if(Q)throw V}}var et=function(t,e){var n=window.innerHeight/5,i=!0,r=!1,a=void 0;try{for(var o,l=t[Symbol.iterator]();!(i=(o=l.next()).done);i=!0){var s=o.value,c=s.getAttribute("href");if(c){if(e>=document.querySelectorAll(c)[0].getBoundingClientRect().top+e-n&&e<1/0-n){if(!s.classList.contains("active")){var u=!0,d=!1,f=void 0;try{for(var y,v=t[Symbol.iterator]();!(u=(y=v.next()).done);u=!0){var m=y.value;m!==s?m.classList.remove("active","open"):s.classList.add("active","open")}}catch(t){d=!0,f=t}finally{try{!u&&v.return&&v.return()}finally{if(d)throw f}}}}else s.classList.contains("active")&&s.classList.remove("active","open")}}}catch(t){r=!0,a=t}finally{try{!i&&l.return&&l.return()}finally{if(r)throw a}}};window.addEventListener("scroll",function(t){var e=document.documentElement.scrollTop,n=Array.from(document.querySelectorAll(".btn-site-aside-sub"));n=n.filter(function(t){return!r.XtUtil.parents(t,".xt-clone").length}),et(n,e);var i=Array.from(document.querySelectorAll(".btn-site-aside-sub.active + .site-aside-subsub .btn-site-aside-subsub"));i=i.filter(function(t){return!r.XtUtil.parents(t,".xt-clone").length}),et(i,e)});var nt=function(t,e){var n=t.querySelectorAll(".demo-item"),a=r.XtUtil.createElement('<div class="demo-tabs"><div class="demo-tabs-left"></div><div class="demo-tabs-right"></div></div>');t.prepend(a);var o=r.XtUtil.createElement('<button type="button" class="btn btn-secondary-empty btn-fullscreen" data-toggle="tooltip" data-placement="top" title="Open fullscreen"><span class="icon-enlarge2"></span></button>');t.querySelectorAll(".demo-tabs-right")[0].append(o),1===n.length&&(t.querySelectorAll(".demo-tabs")[0].style.display="none");var l=!0,s=!1,c=void 0;try{for(var u,d=n.entries()[Symbol.iterator]();!(l=(u=d.next()).done);l=!0){var f=i(u.value,2),y=f[0],v=f[1],m=v.getAttribute("data-name");1===n.length?v.getAttribute("data-name")||(m="demo"):v.getAttribute("data-name")||(m="demo #"+y);var h=r.XtUtil.createElement('<button type="button" class="btn btn-secondary-empty">'+m+"</button>");t.querySelectorAll(".demo-tabs-left")[0].append(h);t.querySelectorAll(".demo-tabs-left .btn")[y];var p="iframe"+e+y,g=r.XtUtil.createElement('<div class="demo-code"><div class="demo-code-tabs"><div class="demo-code-tabs-left"></div><div class="demo-code-tabs-right"><button type="button" class="btn btn-secondary-empty btn-clipboard" data-toggle="tooltip" data-placement="top" title="Copy to clipboard">copy</button></div></div><div class="demo-code-body"></div></div>');v.append(g);var b=new Clipboard(".btn-clipboard",{target:function(t){return r.XtUtil.parents(t,".demo")[0].querySelectorAll(".demo-item.active .demo-code-body-item.active .hljs")[0]}});b.on("success",function(t){t.clearSelection()}),b.on("error",function(t){}),v.getAttribute("data-iframe")||(it(v,p),setTimeout(function(t){t.classList.add("populated")},0,v))}}catch(t){s=!0,c=t}finally{try{!l&&d.return&&d.return()}finally{if(s)throw c}}},it=function(t,e){var n=t.querySelectorAll(".demo-source"),r=!0,o=!1,l=void 0;try{for(var s,c=n.entries()[Symbol.iterator]();!(r=(s=c.next()).done);r=!0){var u=i(s.value,2),d=u[0],f=u[1];rt(t,f,e,d),t.classList.contains("demo-preview")||(f.style.display=none)}}catch(t){o=!0,l=t}finally{try{!r&&c.return&&c.return()}finally{if(o)throw l}}new a.XtToggle(t,{elements:".demo-code-tabs-left .btn",targets:".demo-code-body-item",min:1})},rt=function(t,e,n,i){var a=e.getAttribute("data-lang"),l=r.XtUtil.createElement('<div class="demo-code-body-item"><pre><code></code></pre></div>'),s=t.querySelectorAll(".demo-code-body")[0].append(l);s=t.querySelectorAll(".demo-code-body .demo-code-body-item")[i].querySelectorAll("pre code")[0];var c=r.XtUtil.createElement('<button type="button" class="btn btn-secondary-empty">'+a+"</button>");t.querySelectorAll(".demo-code-tabs-left")[0].append(c);if(!s.classList.contains("hljs")){var u=o(e,a);s.innerHTML=u,s.classList.add(a),window.hljs.highlightBlock(s)}},at=!0,ot=!1,lt=void 0;try{for(var st,ct=document.querySelectorAll(".demo").entries()[Symbol.iterator]();!(at=(st=ct.next()).done);at=!0){var ut=i(st.value,2),dt=ut[0],ft=ut[1];nt(ft,dt),new a.XtToggle(ft,{elements:".demo-tabs-left .btn",targets:".demo-item",min:1})}}catch(t){ot=!0,lt=t}finally{try{!at&&ct.return&&ct.return()}finally{if(ot)throw lt}}var yt=!0,vt=!1,mt=void 0;try{for(var ht,pt=document.querySelectorAll(".demo-cols")[Symbol.iterator]();!(yt=(ht=pt.next()).done);yt=!0){var gt=ht.value,bt=!0,wt=!1,xt=void 0;try{for(var St,At=gt.querySelectorAll(".col").entries()[Symbol.iterator]();!(bt=(St=At.next()).done);bt=!0){var Ot=i(St.value,2);dt=Ot[0];Ot[1].setAttribute("data-index",dt)}}catch(t){wt=!0,xt=t}finally{try{!bt&&At.return&&At.return()}finally{if(wt)throw xt}}}}catch(t){vt=!0,mt=t}finally{try{!yt&&pt.return&&pt.return()}finally{if(vt)throw mt}}var qt=!0,kt=!1,Ut=void 0;try{for(var Xt,Lt=document.querySelectorAll(".demo-cols-nested .col")[Symbol.iterator]();!(qt=(Xt=Lt.next()).done);qt=!0){var Et=Xt.value,Ct=!0,Tt=!1,jt=void 0;try{for(var Ft,_t=Et.querySelectorAll(".col").entries()[Symbol.iterator]();!(Ct=(Ft=_t.next()).done);Ct=!0){var Rt=i(Ft.value,2);dt=Rt[0];Rt[1].setAttribute("data-index",dt)}}catch(t){Tt=!0,jt=t}finally{try{!Ct&&_t.return&&_t.return()}finally{if(Tt)throw jt}}}}catch(t){kt=!0,Ut=t}finally{try{!qt&&Lt.return&&Lt.return()}finally{if(kt)throw Ut}}function Ht(){r.XtUtil.initAll()}"loading"!==document.readyState?Ht():document.addEventListener&&document.addEventListener("DOMContentLoaded",Ht)},{"../../../scripts/xtend":3,"../../../scripts/xtend-utils":2}],2:[function(t,e,n){
/*! xtend (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */
"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.XtUtil=void 0;var i=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],i=!0,r=!1,a=void 0;try{for(var o,l=t[Symbol.iterator]();!(i=(o=l.next()).done)&&(n.push(o.value),!e||n.length!==e);i=!0);}catch(t){r=!0,a=t}finally{try{!i&&l.return&&l.return()}finally{if(r)throw a}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=t("./xtend"),a={currents:{},initAll:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=!0,n=!1,i=void 0;try{for(var a,o=t.querySelectorAll("[data-xt-toggle]")[Symbol.iterator]();!(e=(a=o.next()).done);e=!0){var l=a.value;new r.XtToggle(l)}}catch(t){n=!0,i=t}finally{try{!e&&o.return&&o.return()}finally{if(n)throw i}}var s=!0,c=!1,u=void 0;try{for(var d,f=t.querySelectorAll("[data-xt-drop]")[Symbol.iterator]();!(s=(d=f.next()).done);s=!0){var y=d.value;new r.XtDrop(y)}}catch(t){c=!0,u=t}finally{try{!s&&f.return&&f.return()}finally{if(c)throw u}}var v=!0,m=!1,h=void 0;try{for(var p,g=t.querySelectorAll("[data-xt-overlay]")[Symbol.iterator]();!(v=(p=g.next()).done);v=!0){var b=p.value;new r.XtOverlay(b)}}catch(t){m=!0,h=t}finally{try{!v&&g.return&&g.return()}finally{if(m)throw h}}var w=!0,x=!1,S=void 0;try{for(var A,O=t.querySelectorAll("[data-xt-sticky]")[Symbol.iterator]();!(w=(A=O.next()).done);w=!0){var q=A.value;new r.XtSticky(q)}}catch(t){x=!0,S=t}finally{try{!w&&O.return&&O.return()}finally{if(x)throw S}}}};a.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},a.cancelAnimationFrame=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(t){window.clearTimeout(id)},a.checkInside=function(t,e){return t.target===e},a.checkOutside=function(t,e){return t.target!==e&&!e.contains(t.target)},a.scrollbarWidth=function(){var t=document.createElement("div");t.style.visibility="hidden",t.style.width="100px",t.style.msOverflowStyle="scrollbar",document.body.appendChild(t);var e=t.offsetWidth;t.style.overflow="scroll";var n=document.createElement("div");n.style.width="100%",t.appendChild(n);var i=n.offsetWidth;return t.parentNode.removeChild(t),e-i},a.getUniqueID=function(){return a.uid=void 0!==a.uid?a.uid:0,"unique-id-"+a.uid++},a.merge=function(t){var e={},n=!0,r=!1,a=void 0;try{for(var o,l=t[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var s=o.value,c=!0,u=!1,d=void 0;try{for(var f,y=Object.entries(s)[Symbol.iterator]();!(c=(f=y.next()).done);c=!0){var v=i(f.value,2),m=v[0],h=v[1];e[m]=h}}catch(t){u=!0,d=t}finally{try{!c&&y.return&&y.return()}finally{if(u)throw d}}}}catch(t){r=!0,a=t}finally{try{!n&&l.return&&l.return()}finally{if(r)throw a}}return e},a.arrSingle=function(t){if(void 0===t.length){var e=new Array(1);return e[0]=t,e}return t},a.createElement=function(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild},a.parents=function(t,e){for(var n=[];t=t.parentElement.closest(e);)n.push(t);return n},a.xtUtilOn=function(t,e,n){this.namespaces||(this.namespaces={}),this.namespaces[t]=e;var i=n||!1;return this.addEventListener(t.split(".")[0],e,i),this},a.xtUtilOff=function(t){return this.namespaces&&(this.removeEventListener(t.split(".")[0],this.namespaces[t]),delete this.namespaces[t]),this},window.xtUtilOn=Element.prototype.xtUtilOn=a.xtUtilOn,window.xtUtilOff=Element.prototype.xtUtilOff=a.xtUtilOff,window.XtUtil=a,n.XtUtil=a,function(t,e){try{t.querySelector(":scope body")}catch(a){for(var n=["querySelector","querySelectorAll"],i=function(){var i=n[r],a=e[i];e[i]=function(e){if(/(^|,)\s*:scope/.test(e)){var n=this.id;this.id="ID_"+Date.now(),e=e.replace(/((^|,)\s*):scope/g,"$1#"+this.id);var r=t[i](e);return this.id=n,r}return a.call(this,e)}},r=0;r<n.length;r++)i()}}(window.document,Element.prototype)},{"./xtend":3}],3:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.XtSticky=n.XtOverlay=n.XtDrop=n.XtToggle=n.Xt=void 0;var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=t("./xtend-utils");function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function l(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var c=function(){function t(e,n,i){s(this,t),this.object=e,this.defaults=this.constructor.defaults,this.options=r.XtUtil.merge([this.defaults,n||{}]);var a=this.object.getAttribute(i);this.options=r.XtUtil.merge([this.options,a?JSON.parse(a):{}]),this.options.class&&(this.options.classes=[].concat(l(this.options.class.split(" ")))),this.initSetup(),this.initScope()}return i(t,[{key:"initSetup",value:function(){var t=this.options;t.targets&&-1!==t.targets.indexOf("#")?(this.mode="all",this.container=document,t.max=1/0,this.namespace=t.targets.toString()+"-"+t.classes.toString()):(this.mode="unique",this.container=this.object,this.namespace=r.XtUtil.getUniqueID()),this.namespace=this.namespace.replace(/\W+/g,""),this.getCurrents()||this.setCurrents([])}},{key:"initScope",value:function(){var t=this,e=this.options;if(this.elements=[],e.elements&&(this.elements=r.XtUtil.arrSingle(this.container.querySelectorAll(e.elements))),this.elements.length||(this.elements=r.XtUtil.arrSingle(this.object),r.XtUtil.requestAnimationFrame.call(window,function(){t.elements=r.XtUtil.arrSingle(document.querySelectorAll("[data-xt-namespace="+t.namespace+"]"))})),e.targets){var n=Array.from(this.container.querySelectorAll(e.targets));n=n.filter(function(t){return!r.XtUtil.parents(t,e.targets).length}),this.targets=r.XtUtil.arrSingle(n)}if(e.appendTo){var i=document.querySelectorAll(e.appendTo);i.length&&this.targets.forEach(function(t){i[0].appendChild(t)})}var a=!0,o=!1,s=void 0;try{for(var c,u=this.elements[Symbol.iterator]();!(a=(c=u.next()).done);a=!0){c.value.setAttribute("data-xt-namespace",t.namespace)}}catch(t){o=!0,s=t}finally{try{!a&&u.return&&u.return()}finally{if(o)throw s}}r.XtUtil.requestAnimationFrame.call(window,function(){if(t.elements.length){var n=t.options.class||t.defaults.classes,i=!0,r=!1,a=void 0;try{for(var o,s=t.elements[Symbol.iterator]();!(i=(o=s.next()).done);i=!0){var c,u=o.value;(c=u.classList).contains.apply(c,l(n))&&t.eventOn(u)}}catch(t){r=!0,a=t}finally{try{!i&&s.return&&s.return()}finally{if(r)throw a}}var d=e.min-t.getCurrents().length;if(d)for(var f=0;f<d;f++)t.eventOn(t.elements[f])}})}},{key:"initEvents",value:function(){var t=this,e=this.options,n=function(t,e){var n=!1,i=!0,a=!1,o=void 0;try{for(var l,s=e[Symbol.iterator]();!(i=(l=s.next()).done);i=!0){var c=l.value;r.XtUtil.checkOutside(t,c)&&(n=!0)}}catch(t){a=!0,o=t}finally{try{!i&&s.return&&s.return()}finally{if(a)throw o}}return n},i=!0,a=!1,o=void 0;try{for(var l,s=this.elements[Symbol.iterator]();!(i=(l=s.next()).done);i=!0){var c=l.value;e.on&&(c.xtUtilOff(e.on+".xtend"),c.xtUtilOn(e.on+".xtend",function(i){e.onOutside?n(i,t.container.querySelectorAll(e.targets))&&t.eventOn(this):e.onInside?checkInside(i,t.container.querySelectorAll(e.targets))&&t.eventOn(this):t.eventOn(this)})),e.off&&(c.xtUtilOff(e.off+".xtend"),c.xtUtilOn(e.off+".xtend",function(i){e.offOutside&&n(i,t.container.querySelectorAll(e.targets))?t.eventOff(this):e.offInside&&checkInside(i,t.container.querySelectorAll(e.targets))?t.eventOn(this):t.eventOff(this)}))}}catch(t){a=!0,o=t}finally{try{!i&&s.return&&s.return()}finally{if(a)throw o}}}},{key:"getElements",value:function(t){if(!this.elements||!this.elements.length)return{all:[],single:null};if("all"===this.mode)return{all:this.elements,single:this.elements[0]};if("unique"===this.mode){var e=t.getAttribute("data-group");if(e){var n=Array.from(this.elements).filter(function(t){return t.getAttribute("data-group")===e}),i=r.XtUtil.arrSingle(n);return{all:i,single:i[0]}}var a=t;return{all:r.XtUtil.arrSingle(a),single:a}}}},{key:"getTargets",value:function(t){if(!this.targets||!this.targets.length)return[];if("all"===this.mode)return this.targets;if("unique"===this.mode){var e=t.getAttribute("data-group"),n=Array.from(this.elements).filter(function(t){return t.getAttribute("data-group")===e}),i=Array.from(this.targets).filter(function(t){return t.getAttribute("data-group")===e});if(e){var a=i;return r.XtUtil.arrSingle(a)}var o=i[n.findIndex(function(e){return e===t})];return r.XtUtil.arrSingle(o)}}},{key:"getAdditional",value:function(){var t=this.options;return this.object.querySelectorAll(t.additional)}},{key:"getCurrents",value:function(){return r.XtUtil.currents[this.namespace]}},{key:"setCurrents",value:function(t){r.XtUtil.currents[this.namespace]=t}},{key:"addCurrent",value:function(t){r.XtUtil.currents[this.namespace].push(t)}},{key:"removeCurrent",value:function(t){r.XtUtil.currents[this.namespace]=r.XtUtil.currents[this.namespace].filter(function(e){return e!==t})}},{key:"eventOn",value:function(t){var e,n=this,i=this.options;if((e=t.classList).contains.apply(e,l(this.defaults.classes)))this.eventOff(t);else{var r=this.getElements(t);this.addCurrent(r.single);var a=this.getTargets(t),o=this.getAdditional(r.single),s={elements:function(){n.activationOn(r.all,r,"elements")},targets:function(){n.activationOn(a,r,"targets")},additional:function(){n.activationOn(o,r,"additional")}},c=this.getCurrents();c.length>i.max?this.eventOff(c[0],s):(s.elements(),s.targets(),s.additional())}}},{key:"eventOff",value:function(t,e){var n;if(this.options.min-this.getCurrents().length&&(n=t.classList).contains.apply(n,l(this.defaults.classes))){var i=this.getElements(t);this.removeCurrent(i.single),this.activationOff(i.all,i,"elements",e);var r=this.getTargets(t);this.activationOff(r,i,"targets",e);var a=this.getAdditional(i.all);this.activationOff(a,i,"additional",e)}}},{key:"animationClear",value:function(t){clearTimeout(parseFloat(t.getAttribute("xt-activation-animation-timeout")))}},{key:"activationOn",value:function(t,e,n){var i=this.options,r=!0,a=!1,o=void 0;try{for(var s,c=t[Symbol.iterator]();!(r=(s=c.next()).done);r=!0){var u,d=s.value;(u=d.classList).add.apply(u,l(i.classes)),d.classList.remove("out"),this.activationOnAnimate(d,n),"targets"===n&&(this.specialBackdrop(d),this.specialCenterOn(d),this.specialMiddleOn(d),this.specialCollapseOn(d),this.specialCloseOn(d,e.single),this.specialScrollbarOn())}}catch(t){a=!0,o=t}finally{try{!r&&c.return&&c.return()}finally{if(a)throw o}}}},{key:"activationOnAnimate",value:function(t,e){var n=function(t,e){t.classList.contains("collapse-height")&&(t.style.height="auto"),t.classList.contains("collapse-width")&&(t.style.width="auto")},i=this.activationTiming(t);if(this.animationClear(t),i){var r=setTimeout(function(t,e){n(t)},i,t,e);t.setAttribute("xt-activation-animation-timeout",r)}else n(t)}},{key:"activationOff",value:function(t,e,n,i){var r=this.options,a=!0,o=!1,s=void 0;try{for(var c,u=t[Symbol.iterator]();!(a=(c=u.next()).done);a=!0){var d,f=c.value;(d=f.classList).remove.apply(d,l(r.classes)),f.classList.add("out"),this.activationOffAnimate(f,n,i),"targets"===n&&(this.specialCollapseOff(f),this.specialCloseOff(f))}}catch(t){o=!0,s=t}finally{try{!a&&u.return&&u.return()}finally{if(o)throw s}}}},{key:"activationOffAnimate",value:function(t,e,n){var i=this,r=function(t,e){t.classList.remove("out"),i.specialScrollbarOff(),n&&n[e]&&n[e]()},a=this.activationTiming(t);if(this.animationClear(t),a){var o=setTimeout(function(t,e){r(t,e)},a,t,e);t.setAttribute("xt-activation-animation-timeout",o)}else r(t,e)}},{key:"activationTiming",value:function(t){var e=this.options.timing,n=parseFloat(getComputedStyle(t).transitionDuration)+parseFloat(getComputedStyle(t).transitionDelay),i=parseFloat(getComputedStyle(t).animationDuration)+parseFloat(getComputedStyle(t).animationDelay);return(n||i)&&(e=Math.max(n,i)),1e3*e}},{key:"specialBackdrop",value:function(t){var e=this.options;if(e.backdrop){var n=t.querySelectorAll(e.backdrop);n.length||(n=this.object.querySelectorAll(e.backdrop)),n.length||(n=r.XtUtil.arrSingle(this.object));var i=!0,a=!1,o=void 0;try{for(var l,s=n[Symbol.iterator]();!(i=(l=s.next()).done);i=!0){var c=l.value,u=c.querySelectorAll(".xt-backdrop");u.length||(u=r.XtUtil.createElement('<div class="xt-backdrop"></div>'),c.append(u))}}catch(t){a=!0,o=t}finally{try{!i&&s.return&&s.return()}finally{if(a)throw o}}}}},{key:"specialCenterOn",value:function(t){if(t.classList.contains("drop-center")){var e=this.object.clientWidth,n=t.clientWidth;t.style.left=(e-n)/2+"px"}}},{key:"specialMiddleOn",value:function(t){if(t.classList.contains("drop-middle")){var e=this.object.clientHeight,n=t.clientHeight;t.style.top=(e-n)/2+"px"}}},{key:"specialCollapseOn",value:function(t){if(t.classList.contains("collapse-height")){t.classList.add("no-transition"),t.style.height="auto",t.style.paddingTop="",t.style.paddingBottom="";var e=t.clientHeight+"px",n=t.style.paddingTop,i=t.style.paddingBottom;r.XtUtil.requestAnimationFrame.call(window,function(){t.style.height="0",t.style.paddingTop="0",t.style.paddingBottom="0",r.XtUtil.requestAnimationFrame.call(window,function(){t.classList.remove("no-transition"),t.style.height=e,t.style.paddingTop=n,t.style.paddingBottom=i})})}if(t.classList.contains("collapse-width")){t.style.width="auto",t.style.paddingLeft="",t.style.paddingRight="";var a=t.clientHeight+"px",o=t.style.paddingLeft,l=t.style.paddingRight;r.XtUtil.requestAnimationFrame.call(window,function(){t.style.width="0",t.style.paddingLeft="0",t.style.paddingRight="0",r.XtUtil.requestAnimationFrame.call(window,function(){t.classList.remove("no-transition"),t.style.width=a,t.style.paddingLeft=o,t.style.paddingRight=l})})}}},{key:"specialCollapseOff",value:function(t){if(t.classList.contains("collapse-height")){var e=t.clientHeight+"px",n=t.style.paddingTop,i=t.style.paddingBottom;r.XtUtil.requestAnimationFrame.call(window,function(){t.style.height=e,t.style.paddingTop=n,t.style.paddingBottom=i,r.XtUtil.requestAnimationFrame.call(window,function(){t.style.height="0",t.style.paddingTop="0",t.style.paddingBottom="0"})})}if(t.classList.contains("collapse-width")){var a=t.clientWidth+"px",o=t.style.paddingLeft,l=t.style.paddingRight;r.XtUtil.requestAnimationFrame.call(window,function(){t.style.width=a,t.style.paddingLeft=o,t.style.paddingRight=l,r.XtUtil.requestAnimationFrame.call(window,function(){t.style.width="0",t.style.paddingLeft="0",t.style.paddingRight="0"})})}}},{key:"specialCloseOn",value:function(t,e){var n=this,i=this.options;if(i.closeInside){var a=t.querySelectorAll(i.closeInside);r.XtUtil.requestAnimationFrame.call(window,function(){var t=!0,i=!1,o=void 0;try{for(var l,s=a[Symbol.iterator]();!(t=(l=s.next()).done);t=!0){var c=l.value;c.xtUtilOff("click.xtend"),c.xtUtilOn("click.xtend",function(t){r.XtUtil.checkInside(t,this)&&n.eventOff(e)})}}catch(t){i=!0,o=t}finally{try{!t&&s.return&&s.return()}finally{if(i)throw o}}})}if(i.closeOutside){var o=document.documentElement.querySelectorAll(i.closeOutside);r.XtUtil.requestAnimationFrame.call(window,function(){var i=!0,a=!1,l=void 0;try{for(var s,c=o[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var u=s.value;u.xtUtilOff("click.xtend"),u.xtUtilOn("click.xtend",function(i){r.XtUtil.checkOutside(i,t)&&n.eventOff(e)})}}catch(t){a=!0,l=t}finally{try{!i&&c.return&&c.return()}finally{if(a)throw l}}})}}},{key:"specialCloseOff",value:function(t){var e=this.options;if(e.closeInside){var n=t.querySelectorAll(e.closeInside),i=!0,r=!1,a=void 0;try{for(var o,l=n[Symbol.iterator]();!(i=(o=l.next()).done);i=!0){o.value.xtUtilOff("click.xtend")}}catch(t){r=!0,a=t}finally{try{!i&&l.return&&l.return()}finally{if(r)throw a}}}if(e.closeOutside){var s=document.documentElement.querySelectorAll(e.closeOutside),c=!0,u=!1,d=void 0;try{for(var f,y=s[Symbol.iterator]();!(c=(f=y.next()).done);c=!0){f.value.xtUtilOff("click.xtend")}}catch(t){u=!0,d=t}finally{try{!c&&y.return&&y.return()}finally{if(u)throw d}}}}},{key:"specialScrollbarOn",value:function(){if(this.options.scrollbar){var t=r.XtUtil.scrollbarWidth(),e=document.documentElement;e.style.paddingRight=t+"px",e.classList.add("xt-scrollbar");var n=document.documentElement.querySelectorAll(".xt-check-fixed > *"),i=!0,a=!1,o=void 0;try{for(var l,s=n[Symbol.iterator]();!(i=(l=s.next()).done);i=!0){var c=l.value;"absolute"===(h=window.getComputedStyle(c)).position||"fixed"===h.position?c.classList.add("xt-fixed"):c.classList.remove("xt-fixed")}}catch(t){a=!0,o=t}finally{try{!i&&s.return&&s.return()}finally{if(a)throw o}}n=document.documentElement.querySelectorAll(".xt-fixed");var u=!0,d=!1,f=void 0;try{for(var y,v=function(){var e=y.value;e.style.paddingRight="",h=window.getComputedStyle(e),p=h.paddingRight,g="calc("+p+" + "+t+"px)",e.classList.add("no-transition"),e.style.paddingRight=g,r.XtUtil.requestAnimationFrame.call(window,function(){e.classList.remove("no-transition")})},m=n[Symbol.iterator]();!(u=(y=m.next()).done);u=!0){var h,p,g;v()}}catch(t){d=!0,f=t}finally{try{!u&&m.return&&m.return()}finally{if(d)throw f}}n=document.documentElement.querySelectorAll(".xt-backdrop");var b=!0,w=!1,x=void 0;try{for(var S,A=n[Symbol.iterator]();!(b=(S=A.next()).done);b=!0){S.value.style.right=t+"px"}}catch(t){w=!0,x=t}finally{try{!b&&A.return&&A.return()}finally{if(w)throw x}}}}},{key:"specialScrollbarOff",value:function(){if(this.options.scrollbar){var t=document.documentElement;t.style.paddingRight="",t.classList.remove("xt-scrollbar");var e=document.documentElement.querySelectorAll(".xt-fixed"),n=!0,i=!1,a=void 0;try{for(var o,l=function(){var t=o.value;t.classList.add("no-transition"),r.XtUtil.requestAnimationFrame.call(window,function(){t.style.paddingRight="",r.XtUtil.requestAnimationFrame.call(window,function(){t.classList.remove("no-transition")})})},s=e[Symbol.iterator]();!(n=(o=s.next()).done);n=!0)l()}catch(t){i=!0,a=t}finally{try{!n&&s.return&&s.return()}finally{if(i)throw a}}e=document.documentElement.querySelectorAll(".xt-backdrop");var c=!0,u=!1,d=void 0;try{for(var f,y=e[Symbol.iterator]();!(c=(f=y.next()).done);c=!0){f.value.style.right=""}}catch(t){u=!0,d=t}finally{try{!c&&y.return&&y.return()}finally{if(u)throw d}}}}}]),t}();c.defaults={classes:["active"]},window.Xt=c,n.Xt=c;var u=function(t){function e(t,n){s(this,e);var i=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,"data-xt-toggle"));return i.initEvents(),i}return o(e,c),e}();u.defaults={elements:":scope > a, :scope > button",targets:':scope > [class^="toggle-"], :scope > [class*=" toggle-"]',classes:["active"],on:"click",min:0,max:1},window.XtToggle=u,n.XtToggle=u;var d=function(t){function e(t,n){s(this,e);var i=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,"data-xt-drop"));return i.initEvents(),i}return o(e,c),e}();d.defaults={elements:":scope",targets:":scope > .drop",additional:":scope > a, :scope > button",classes:["active"],on:"click",onOutside:"true",onInside:"true",offOutside:"true",offInside:"true",min:0,max:1,closeOutside:"body"},window.XtDrop=d,n.XtDrop=d;var f=function(t){function e(t,n){s(this,e);var i=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,"data-xt-overlay"));return i.initEvents(),i}return o(e,c),e}();f.defaults={elements:":scope > a, :scope > button",targets:":scope > .overlay-outer",classes:["active"],on:"click",min:0,max:1,appendTo:"body",backdrop:":scope > .overlay",closeInside:":scope > .overlay > .xt-backdrop, :scope > .overlay > .overlay-inner > .btn-close",scrollbar:!0},window.XtOverlay=f,n.XtOverlay=f;var y=function(t){function e(t,n){s(this,e);var i=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,"data-xt-sticky"));return i.initEvents(),i}return o(e,c),i(e,[{key:"initScope",value:function(){(function t(e,n,i){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var a=Object.getPrototypeOf(e);return null===a?void 0:t(a,n,i)}if("value"in r)return r.value;var o=r.get;return void 0!==o?o.call(i):void 0})(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"initScope",this).call(this),this.mode="all",this.container=r.XtUtil.parents(this.object,".xt-container"),this.container.length||(this.container=r.XtUtil.createElement('<div class="xt-container xt-check-fixed"></div>'),this.object.before(this.container),this.container.append(this.object),this.container=r.XtUtil.parents(this.object,".xt-container")),this.targets=this.container[0].querySelectorAll(".xt-clone"),this.targets&&(this.targets=this.object.cloneNode(!0),this.targets.classList.add("xt-clone"),this.container[0].append(this.targets)),this.targets=r.XtUtil.arrSingle(this.targets)}},{key:"initEvents",value:function(){var t=this,e=this.options;window.xtUtilOff(e.on+".xtend"),window.xtUtilOn(e.on,function(e){t.eventScroll(t.object)})}},{key:"eventScroll",value:function(t){var e=this,n=this.options,i=document.documentElement.scrollTop;r.XtUtil.cancelAnimationFrame.call(window,this.scrollFrame),this.scrollFrame=r.XtUtil.requestAnimationFrame.call(window,function(){var r,a,o=e.container[0].getBoundingClientRect().top,s=1/0;if(isNaN(parseFloat(n.top))){var c=document.querySelectorAll(n.top);if(c.length)o=c[0].getBoundingClientRect().top+i;else if(e.targets.length){o=e.targets[0].getBoundingClientRect().top+i}}else o=n.top;if(void 0!==n.bottom)if(isNaN(parseFloat(n.bottom))){var u=document.querySelectorAll(n.bottom);if(u.length)s=u[0].getBoundingClientRect().top+i;else if(e.targets.length){s=e.targets[0].getBoundingClientRect().top+i}}else s=n.bottom;if(i>=o&&i<s){if(!(r=t.classList).contains.apply(r,l(e.defaults.classes))){e.eventOn(t);var d=e.getElements(t),f=!0,y=!1,v=void 0;try{for(var m,h=d.all[Symbol.iterator]();!(f=(m=h.next()).done);f=!0){var p=m.value;p.classList.remove("sticky-off-top","sticky-off-bottom"),p.classList.add("xt-fixed"),e.scrollTop>i?(p.classList.remove("sticky-on-top"),p.classList.add("sticky-on-bottom")):(p.classList.add("sticky-on-top"),p.classList.remove("sticky-on-bottom"))}}catch(t){y=!0,v=t}finally{try{!f&&h.return&&h.return()}finally{if(y)throw v}}}}else if((a=t.classList).contains.apply(a,l(e.defaults.classes))){e.eventOff(t);var g=e.getElements(t),b=!0,w=!1,x=void 0;try{for(var S,A=g.all[Symbol.iterator]();!(b=(S=A.next()).done);b=!0){var O=S.value;O.classList.remove("sticky-on-top","sticky-on-bottom"),e.scrollTop>i?(O.classList.remove("sticky-off-top"),O.classList.add("sticky-off-bottom")):(O.classList.add("sticky-off-top"),O.classList.remove("sticky-off-bottom"))}}catch(t){w=!0,x=t}finally{try{!b&&A.return&&A.return()}finally{if(w)throw x}}}e.scrollTop=i})}}]),e}();y.defaults={classes:["active"],on:"scroll",min:0,max:1/0},window.XtSticky=y,n.XtSticky=y},{"./xtend-utils":2}]},{},[1]);
//# sourceMappingURL=bundle.js.map
