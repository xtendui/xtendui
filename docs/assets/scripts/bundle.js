!function(){return function t(e,n,i){function r(l,o){if(!n[l]){if(!e[l]){var s="function"==typeof require&&require;if(!o&&s)return s(l,!0);if(a)return a(l,!0);var c=new Error("Cannot find module '"+l+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[l]={exports:{}};e[l][0].call(u.exports,function(t){return r(e[l][1][t]||t)},u,u.exports,t,e,n,i)}return n[l].exports}for(var a="function"==typeof require&&require,l=0;l<i.length;l++)r(i[l]);return r}}()({1:[function(t,e,n){"use strict";var i=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],i=!0,r=!1,a=void 0;try{for(var l,o=t[Symbol.iterator]();!(i=(l=o.next()).done)&&(n.push(l.value),!e||n.length!==e);i=!0);}catch(t){r=!0,a=t}finally{try{!i&&o.return&&o.return()}finally{if(r)throw a}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=t("../../../scripts/xtend-utils"),a=t("../../../scripts/xtend"),l=function(t,e){var n=t.querySelectorAll(".demo-source-from");n.length&&(t=n[0]);var i=t.innerHTML;"css"!==e&&"js"!==e||(-1!==i.search(/<[^>]*>/g)&&(i=(i=i.replace(/<[^>]*>/g,"")).substring(1)),i=i.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">")),i.match(/[&<>]/g)&&(i=(i=(i=(i=i.replace(/&quot;/g,'"')).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")).replace(/("{)/g,"'{").replace(/(}")/g,"}'")).replace(/=""/g,""));var r=i.split("\n"),a=r[1].search(/\S/g),l=!0,o=!1,s=void 0;try{for(var c,u=r.keys()[Symbol.iterator]();!(l=(c=u.next()).done);l=!0){var d=c.value;r[d]=r[d].substring(a)}}catch(t){o=!0,s=t}finally{try{!l&&u.return&&u.return()}finally{if(o)throw s}}return i=(i=r.join("\n")).replace(/^\s+|\s+$/g,"")},o=!0,s=!1,c=void 0;try{for(var u,d=document.querySelectorAll("pre code")[Symbol.iterator]();!(o=(u=d.next()).done);o=!0){var f=u.value,v=f.className,y=l(f,v);f.innerHTML=y,window.hljs.highlightBlock(f)}}catch(t){s=!0,c=t}finally{try{!o&&d.return&&d.return()}finally{if(s)throw c}}var p=!0,m=!1,h=void 0;try{for(var g,b=document.querySelectorAll(".site-article > h2, .site-article > h3")[Symbol.iterator]();!(p=(g=b.next()).done);p=!0){g.value.classList.add("make-line")}}catch(t){m=!0,h=t}finally{try{!p&&b.return&&b.return()}finally{if(m)throw h}}var w=!0,x=!1,S=void 0;try{for(var A,O=document.querySelectorAll(".make-line")[Symbol.iterator]();!(w=(A=O.next()).done);w=!0){var k=A.value;k.innerHTML='<div class="line">'+k.innerHTML+"</div>",k.innerHTML='<div class="line-container">'+k.innerHTML+"</div>"}}catch(t){x=!0,S=t}finally{try{!w&&O.return&&O.return()}finally{if(x)throw S}}var U=!0,q=!1,X=void 0;try{for(var L,E=document.querySelectorAll(".site-article > h2, .site-article > h3")[Symbol.iterator]();!(U=(L=E.next()).done);U=!0){var C=L.value;C.classList.add("make-line");var T=void 0;if("H3"===C.tagName)for(T=C;T.previousElementSibling&&"H2"!==T.tagName;)T=T.previousElementSibling;var j="";T&&(j+=T.textContent.replace(/\s+/g,"-").toLowerCase()+"-"),j+=C.textContent.replace(/\s+/g,"-").toLowerCase(),C.setAttribute("id",j),C.innerHTML='<a href="#'+j+'">'+C.innerHTML+"</a>",C.classList.add("make-anchor"),C.append(r.XtUtil.createElement('<span class="site-article-anchor"><div class="btn"><span class="icon-link" aria-hidden="true"></span></div></span>'))}}catch(t){q=!0,X=t}finally{try{!U&&E.return&&E.return()}finally{if(q)throw X}}var F=!0,_=!1,H=void 0;try{for(var R,B=document.querySelectorAll(".site-aside-text > .btn:not(.different)")[Symbol.iterator]();!(F=(R=B.next()).done);F=!0){var M=R.value,D=r.XtUtil.parents(M,".site-aside-text")[0],N=!0,I=!1,P=void 0;try{for(var W,z=document.querySelectorAll(".site-article > h2, .site-article > h3")[Symbol.iterator]();!(N=(W=z.next()).done);N=!0){var $=W.value;if("H2"===$.tagName){var J=r.XtUtil.createElement('<div class="site-aside-sub-container"></div>');D.append(J),J.append(r.XtUtil.createElement('<a href="#'+$.getAttribute("id")+'" class="btn btn-nodesign btn-site-aside-sub">'+$.textContent+"</a>")),J.append(r.XtUtil.createElement('<div class="site-aside-subsub collapse-height"></div>'))}else if("H3"===$.tagName){var G=D.querySelectorAll(".site-aside-subsub");G[G.length-1].append(r.XtUtil.createElement('<a href="#'+$.getAttribute("id")+'" class="btn btn-nodesign btn-site-aside-subsub">'+$.textContent+"</a>"))}}}catch(t){I=!0,P=t}finally{try{!N&&z.return&&z.return()}finally{if(I)throw P}}}}catch(t){_=!0,H=t}finally{try{!F&&B.return&&B.return()}finally{if(_)throw H}}var K=!0,Q=!1,V=void 0;try{for(var Y,Z=document.querySelectorAll(".site-aside-text")[Symbol.iterator]();!(K=(Y=Z.next()).done);K=!0){var tt=Y.value;new a.XtToggle(tt,{elements:".site-aside-sub-container",targets:".site-aside-subsub",on:"mouseenter",off:"mouseleave",min:0,max:1})}}catch(t){Q=!0,V=t}finally{try{!K&&Z.return&&Z.return()}finally{if(Q)throw V}}var et=function(t,e){var n=window.innerHeight/5,i=!0,r=!1,a=void 0;try{for(var l,o=t[Symbol.iterator]();!(i=(l=o.next()).done);i=!0){var s=l.value,c=s.getAttribute("href");if(c){if(e>=document.querySelectorAll(c)[0].getBoundingClientRect().top+e-n&&e<1/0-n){if(!s.classList.contains("active")){var u=!0,d=!1,f=void 0;try{for(var v,y=t[Symbol.iterator]();!(u=(v=y.next()).done);u=!0){var p=v.value;p!==s?p.classList.remove("active","open"):s.classList.add("active","open")}}catch(t){d=!0,f=t}finally{try{!u&&y.return&&y.return()}finally{if(d)throw f}}}}else s.classList.contains("active")&&s.classList.remove("active","open")}}}catch(t){r=!0,a=t}finally{try{!i&&o.return&&o.return()}finally{if(r)throw a}}};window.addEventListener("scroll",function(t){var e=document.documentElement.scrollTop,n=Array.from(document.querySelectorAll(".btn-site-aside-sub"));n=n.filter(function(t){return!r.XtUtil.parents(t,".xt-clone").length}),et(n,e);var i=Array.from(document.querySelectorAll(".btn-site-aside-sub.active + .site-aside-subsub .btn-site-aside-subsub"));i=i.filter(function(t){return!r.XtUtil.parents(t,".xt-clone").length}),et(i,e)});var nt=function(t,e){var n=t.querySelectorAll(".demo-item"),a=r.XtUtil.createElement('<div class="demo-tabs"><div class="demo-tabs-left"></div><div class="demo-tabs-right"></div></div>');t.prepend(a);var l=r.XtUtil.createElement('<button type="button" class="btn btn-secondary-empty btn-fullscreen" data-toggle="tooltip" data-placement="top" title="Open fullscreen"><span class="icon-enlarge2"></span></button>');t.querySelectorAll(".demo-tabs-right")[0].append(l),1===n.length&&(t.querySelectorAll(".demo-tabs")[0].style.display="none");var o=!0,s=!1,c=void 0;try{for(var u,d=n.entries()[Symbol.iterator]();!(o=(u=d.next()).done);o=!0){var f=i(u.value,2),v=f[0],y=f[1],p=y.getAttribute("data-name");1===n.length?y.getAttribute("data-name")||(p="demo"):y.getAttribute("data-name")||(p="demo #"+v);var m=r.XtUtil.createElement('<button type="button" class="btn btn-secondary-empty">'+p+"</button>");t.querySelectorAll(".demo-tabs-left")[0].append(m);t.querySelectorAll(".demo-tabs-left .btn")[v];var h="iframe"+e+v,g=r.XtUtil.createElement('<div class="demo-code"><div class="demo-code-tabs"><div class="demo-code-tabs-left"></div><div class="demo-code-tabs-right"><button type="button" class="btn btn-secondary-empty btn-clipboard" data-toggle="tooltip" data-placement="top" title="Copy to clipboard">copy</button></div></div><div class="demo-code-body"></div></div>');y.append(g);var b=new Clipboard(".btn-clipboard",{target:function(t){return r.XtUtil.parents(t,".demo")[0].querySelectorAll(".demo-item.active .demo-code-body-item.active .hljs")[0]}});b.on("success",function(t){t.clearSelection()}),b.on("error",function(t){}),y.getAttribute("data-iframe")||(it(y,h),setTimeout(function(t){t.classList.add("populated")},0,y))}}catch(t){s=!0,c=t}finally{try{!o&&d.return&&d.return()}finally{if(s)throw c}}},it=function(t,e){var n=t.querySelectorAll(".demo-source"),r=!0,l=!1,o=void 0;try{for(var s,c=n.entries()[Symbol.iterator]();!(r=(s=c.next()).done);r=!0){var u=i(s.value,2),d=u[0],f=u[1];rt(t,f,e,d),t.classList.contains("demo-preview")||(f.style.display=none)}}catch(t){l=!0,o=t}finally{try{!r&&c.return&&c.return()}finally{if(l)throw o}}new a.XtToggle(t,{elements:".demo-code-tabs-left .btn",targets:".demo-code-body-item",min:1})},rt=function(t,e,n,i){var a=e.getAttribute("data-lang"),o=r.XtUtil.createElement('<div class="demo-code-body-item"><pre><code></code></pre></div>'),s=t.querySelectorAll(".demo-code-body")[0].append(o);s=t.querySelectorAll(".demo-code-body .demo-code-body-item")[i].querySelectorAll("pre code")[0];var c=r.XtUtil.createElement('<button type="button" class="btn btn-secondary-empty">'+a+"</button>");t.querySelectorAll(".demo-code-tabs-left")[0].append(c);if(!s.classList.contains("hljs")){var u=l(e,a);s.innerHTML=u,s.classList.add(a),window.hljs.highlightBlock(s)}},at=!0,lt=!1,ot=void 0;try{for(var st,ct=document.querySelectorAll(".demo").entries()[Symbol.iterator]();!(at=(st=ct.next()).done);at=!0){var ut=i(st.value,2),dt=ut[0],ft=ut[1];nt(ft,dt),new a.XtToggle(ft,{elements:".demo-tabs-left .btn",targets:".demo-item",min:1})}}catch(t){lt=!0,ot=t}finally{try{!at&&ct.return&&ct.return()}finally{if(lt)throw ot}}var vt=!0,yt=!1,pt=void 0;try{for(var mt,ht=document.querySelectorAll(".demo-cols")[Symbol.iterator]();!(vt=(mt=ht.next()).done);vt=!0){var gt=mt.value,bt=!0,wt=!1,xt=void 0;try{for(var St,At=gt.querySelectorAll(".col").entries()[Symbol.iterator]();!(bt=(St=At.next()).done);bt=!0){var Ot=i(St.value,2);dt=Ot[0];Ot[1].setAttribute("data-index",dt)}}catch(t){wt=!0,xt=t}finally{try{!bt&&At.return&&At.return()}finally{if(wt)throw xt}}}}catch(t){yt=!0,pt=t}finally{try{!vt&&ht.return&&ht.return()}finally{if(yt)throw pt}}var kt=!0,Ut=!1,qt=void 0;try{for(var Xt,Lt=document.querySelectorAll(".demo-cols-nested .col")[Symbol.iterator]();!(kt=(Xt=Lt.next()).done);kt=!0){var Et=Xt.value,Ct=!0,Tt=!1,jt=void 0;try{for(var Ft,_t=Et.querySelectorAll(".col").entries()[Symbol.iterator]();!(Ct=(Ft=_t.next()).done);Ct=!0){var Ht=i(Ft.value,2);dt=Ht[0];Ht[1].setAttribute("data-index",dt)}}catch(t){Tt=!0,jt=t}finally{try{!Ct&&_t.return&&_t.return()}finally{if(Tt)throw jt}}}}catch(t){Ut=!0,qt=t}finally{try{!kt&&Lt.return&&Lt.return()}finally{if(Ut)throw qt}}function Rt(){r.XtUtil.initAll()}"loading"!==document.readyState?Rt():document.addEventListener&&document.addEventListener("DOMContentLoaded",Rt)},{"../../../scripts/xtend":3,"../../../scripts/xtend-utils":2}],2:[function(t,e,n){
/*! xtend (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */
"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.XtUtil=void 0;var i=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],i=!0,r=!1,a=void 0;try{for(var l,o=t[Symbol.iterator]();!(i=(l=o.next()).done)&&(n.push(l.value),!e||n.length!==e);i=!0);}catch(t){r=!0,a=t}finally{try{!i&&o.return&&o.return()}finally{if(r)throw a}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=t("./xtend"),a={currents:{},initAll:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=!0,n=!1,i=void 0;try{for(var a,l=t.querySelectorAll("[data-xt-toggle]")[Symbol.iterator]();!(e=(a=l.next()).done);e=!0){var o=a.value;new r.XtToggle(o)}}catch(t){n=!0,i=t}finally{try{!e&&l.return&&l.return()}finally{if(n)throw i}}var s=!0,c=!1,u=void 0;try{for(var d,f=t.querySelectorAll("[data-xt-drop]")[Symbol.iterator]();!(s=(d=f.next()).done);s=!0){var v=d.value;new r.XtDrop(v)}}catch(t){c=!0,u=t}finally{try{!s&&f.return&&f.return()}finally{if(c)throw u}}var y=!0,p=!1,m=void 0;try{for(var h,g=t.querySelectorAll("[data-xt-overlay]")[Symbol.iterator]();!(y=(h=g.next()).done);y=!0){var b=h.value;new r.XtOverlay(b)}}catch(t){p=!0,m=t}finally{try{!y&&g.return&&g.return()}finally{if(p)throw m}}var w=!0,x=!1,S=void 0;try{for(var A,O=t.querySelectorAll("[data-xt-sticky]")[Symbol.iterator]();!(w=(A=O.next()).done);w=!0){var k=A.value;new r.XtSticky(k)}}catch(t){x=!0,S=t}finally{try{!w&&O.return&&O.return()}finally{if(x)throw S}}}};a.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},a.cancelAnimationFrame=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(t){window.clearTimeout(id)},a.checkInside=function(t,e){var n=!1,i=!0,r=!1,a=void 0;try{for(var l,o=e[Symbol.iterator]();!(i=(l=o.next()).done);i=!0){var s=l.value;t.target===s&&(n=!0)}}catch(t){r=!0,a=t}finally{try{!i&&o.return&&o.return()}finally{if(r)throw a}}return n},a.checkOutside=function(t,e){var n=!1,i=!0,r=!1,a=void 0;try{for(var l,o=e[Symbol.iterator]();!(i=(l=o.next()).done);i=!0){var s=l.value;t.target===s||s.contains(t.target)||(n=!0)}}catch(t){r=!0,a=t}finally{try{!i&&o.return&&o.return()}finally{if(r)throw a}}return n},a.scrollbarWidth=function(){var t=document.createElement("div");t.style.visibility="hidden",t.style.width="100px",t.style.msOverflowStyle="scrollbar",document.body.appendChild(t);var e=t.offsetWidth;t.style.overflow="scroll";var n=document.createElement("div");n.style.width="100%",t.appendChild(n);var i=n.offsetWidth;return t.parentNode.removeChild(t),e-i},a.getUniqueID=function(){return a.uid=void 0!==a.uid?a.uid:0,"unique-id-"+a.uid++},a.merge=function(t){var e={},n=!0,r=!1,a=void 0;try{for(var l,o=t[Symbol.iterator]();!(n=(l=o.next()).done);n=!0){var s=l.value,c=!0,u=!1,d=void 0;try{for(var f,v=Object.entries(s)[Symbol.iterator]();!(c=(f=v.next()).done);c=!0){var y=i(f.value,2),p=y[0],m=y[1];e[p]=m}}catch(t){u=!0,d=t}finally{try{!c&&v.return&&v.return()}finally{if(u)throw d}}}}catch(t){r=!0,a=t}finally{try{!n&&o.return&&o.return()}finally{if(r)throw a}}return e},a.arrSingle=function(t){if(void 0===t.length){var e=new Array(1);return e[0]=t,e}return t},a.createElement=function(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild},a.parents=function(t,e){for(var n=[];t=t.parentElement.closest(e);)n.push(t);return n},a.xtUtilOn=function(t,e,n){this.namespaces||(this.namespaces={}),this.namespaces[t]=e;var i=n||!1;return this.addEventListener(t.split(".")[0],e,i),this},a.xtUtilOff=function(t){return this.namespaces&&(this.removeEventListener(t.split(".")[0],this.namespaces[t]),delete this.namespaces[t]),this},window.xtUtilOn=Element.prototype.xtUtilOn=a.xtUtilOn,window.xtUtilOff=Element.prototype.xtUtilOff=a.xtUtilOff,window.XtUtil=a,n.XtUtil=a,function(t,e){try{t.querySelector(":scope body")}catch(a){for(var n=["querySelector","querySelectorAll"],i=function(){var i=n[r],a=e[i];e[i]=function(e){if(/(^|,)\s*:scope/.test(e)){var n=this.id;this.id="ID_"+Date.now(),e=e.replace(/((^|,)\s*):scope/g,"$1#"+this.id);var r=t[i](e);return this.id=n,r}return a.call(this,e)}},r=0;r<n.length;r++)i()}}(window.document,Element.prototype)},{"./xtend":3}],3:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.XtSticky=n.XtOverlay=n.XtDrop=n.XtToggle=n.Xt=void 0;var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=t("./xtend-utils");function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var c=function(){function t(e,n,i){s(this,t),this.object=e,this.defaults=this.constructor.defaults,this.options=r.XtUtil.merge([this.defaults,n||{}]);var a=this.object.getAttribute(i);this.options=r.XtUtil.merge([this.options,a?JSON.parse(a):{}]),this.options.class&&(this.options.classes=[].concat(o(this.options.class.split(" ")))),this.initSetup(),this.initScope()}return i(t,[{key:"initSetup",value:function(){var t=this.options;t.targets&&-1!==t.targets.indexOf("#")?(this.mode="all",this.container=document,t.max=1/0,this.namespace=t.targets.toString()+"-"+t.classes.toString()):(this.mode="unique",this.container=this.object,this.namespace=r.XtUtil.getUniqueID()),this.namespace=this.namespace.replace(/\W+/g,""),this.getCurrents()||this.setCurrents([])}},{key:"initScope",value:function(){var t=this,e=this.options;if(this.elements=[],e.elements&&(this.elements=r.XtUtil.arrSingle(this.container.querySelectorAll(e.elements))),this.elements.length||(this.elements=r.XtUtil.arrSingle(this.object),r.XtUtil.requestAnimationFrame.call(window,function(){t.elements=r.XtUtil.arrSingle(document.querySelectorAll("[data-xt-namespace="+t.namespace+"]"))})),e.targets){var n=Array.from(this.container.querySelectorAll(e.targets));n=n.filter(function(t){return!r.XtUtil.parents(t,e.targets).length}),this.targets=r.XtUtil.arrSingle(n)}if(e.appendTo){var i=document.querySelectorAll(e.appendTo);i.length&&this.targets.forEach(function(t){i[0].appendChild(t)})}var a=!0,l=!1,s=void 0;try{for(var c,u=this.elements[Symbol.iterator]();!(a=(c=u.next()).done);a=!0){c.value.setAttribute("data-xt-namespace",t.namespace)}}catch(t){l=!0,s=t}finally{try{!a&&u.return&&u.return()}finally{if(l)throw s}}r.XtUtil.requestAnimationFrame.call(window,function(){if(t.elements.length){var n=t.options.classes,i=!0,r=!1,a=void 0;try{for(var l,s=t.elements[Symbol.iterator]();!(i=(l=s.next()).done);i=!0){var c,u=l.value;(c=u.classList).contains.apply(c,o(n))&&t.eventOn(u)}}catch(t){r=!0,a=t}finally{try{!i&&s.return&&s.return()}finally{if(r)throw a}}var d=e.min-t.getCurrents().length;if(d)for(var f=0;f<d;f++)t.eventOn(t.elements[f])}})}},{key:"initEvents",value:function(){var t=this,e=this.options,n=!0,i=!1,a=void 0;try{for(var l,s=this.elements[Symbol.iterator]();!(n=(l=s.next()).done);n=!0){var c=l.value;if(e.on){var u=[].concat(o(e.on.split(" "))),d=!0,f=!1,v=void 0;try{for(var y,p=u[Symbol.iterator]();!(d=(y=p.next()).done);d=!0){var m=y.value;c.xtUtilOff(m+".xtend"),c.xtUtilOn(m+".xtend",function(n){e.onOutside?r.XtUtil.checkOutside(n,t.container.querySelectorAll(e.targets))&&t.eventOn(this):t.eventOn(this)})}}catch(t){f=!0,v=t}finally{try{!d&&p.return&&p.return()}finally{if(f)throw v}}}if(e.off){var h=[].concat(o(e.off.split(" "))),g=!0,b=!1,w=void 0;try{for(var x,S=h[Symbol.iterator]();!(g=(x=S.next()).done);g=!0){var A=x.value;c.xtUtilOff(A+".xtend"),c.xtUtilOn(A+".xtend",function(n){e.offOutside?r.XtUtil.checkOutside(n,t.container.querySelectorAll(e.targets))&&t.eventOff(this):t.eventOff(this)})}}catch(t){b=!0,w=t}finally{try{!g&&S.return&&S.return()}finally{if(b)throw w}}}}}catch(t){i=!0,a=t}finally{try{!n&&s.return&&s.return()}finally{if(i)throw a}}}},{key:"getElements",value:function(t){if(!this.elements||!this.elements.length)return{all:[],single:null};if("all"===this.mode)return{all:this.elements,single:this.elements[0]};if("unique"===this.mode){var e=t.getAttribute("data-group");if(e){var n=Array.from(this.elements).filter(function(t){return t.getAttribute("data-group")===e}),i=r.XtUtil.arrSingle(n);return{all:i,single:i[0]}}var a=t;return{all:r.XtUtil.arrSingle(a),single:a}}}},{key:"getTargets",value:function(t){if(!this.targets||!this.targets.length)return[];if("all"===this.mode)return this.targets;if("unique"===this.mode){var e=t.getAttribute("data-group"),n=Array.from(this.elements).filter(function(t){return t.getAttribute("data-group")===e}),i=Array.from(this.targets).filter(function(t){return t.getAttribute("data-group")===e});if(e){var a=i;return r.XtUtil.arrSingle(a)}var l=i[n.findIndex(function(e){return e===t})];return r.XtUtil.arrSingle(l)}}},{key:"getAdditional",value:function(){var t=this.options;return this.object.querySelectorAll(t.additional)}},{key:"getCurrents",value:function(){return r.XtUtil.currents[this.namespace]}},{key:"setCurrents",value:function(t){r.XtUtil.currents[this.namespace]=t}},{key:"addCurrent",value:function(t){r.XtUtil.currents[this.namespace].push(t)}},{key:"removeCurrent",value:function(t){r.XtUtil.currents[this.namespace]=r.XtUtil.currents[this.namespace].filter(function(e){return e!==t})}},{key:"eventOn",value:function(t){var e,n=this,i=this.options;if((e=t.classList).contains.apply(e,o(this.options.classes)))this.eventOff(t);else{var r=this.getElements(t);this.addCurrent(r.single);var a=this.getTargets(t),l=this.getAdditional(r.single),s={elements:function(){n.activationOn(r.all,r,"elements")},targets:function(){n.activationOn(a,r,"targets")},additional:function(){n.activationOn(l,r,"additional")}},c=this.getCurrents();c.length>i.max?this.eventOff(c[0],s):(s.elements(),s.targets(),s.additional())}}},{key:"eventOff",value:function(t,e){var n;if(this.options.min-this.getCurrents().length&&(n=t.classList).contains.apply(n,o(this.options.classes))){var i=this.getElements(t);this.removeCurrent(i.single),this.activationOff(i.all,i,"elements",e);var r=this.getTargets(t);this.activationOff(r,i,"targets",e);var a=this.getAdditional(i.all);this.activationOff(a,i,"additional",e)}}},{key:"activationOn",value:function(t,e,n){var i=this.options,r=!0,a=!1,l=void 0;try{for(var s,c=t[Symbol.iterator]();!(r=(s=c.next()).done);r=!0){var u,d=s.value;(u=d.classList).add.apply(u,o(i.classes)),d.classList.remove("out"),this.activationOnAnimate(d,n),"targets"===n&&(this.specialClassHtmlOn(),this.specialBackdrop(d),this.specialCenterOn(d),this.specialMiddleOn(d),this.specialCollapseOn(d),this.specialCloseOn(d,e.single),this.specialScrollbarOn())}}catch(t){a=!0,l=t}finally{try{!r&&c.return&&c.return()}finally{if(a)throw l}}}},{key:"activationOnAnimate",value:function(t,e){var n=function(t,e){t.classList.contains("collapse-height")&&(t.style.height="auto"),t.classList.contains("collapse-width")&&(t.style.width="auto")},i=this.activationTiming(t);if(clearTimeout(parseFloat(t.getAttribute("xt-activation-animation-timeout"))),i){var r=setTimeout(function(t,e){n(t)},i,t,e);t.setAttribute("xt-activation-animation-timeout",r)}else n(t)}},{key:"activationOff",value:function(t,e,n,i){var r=this.options,a=!0,l=!1,s=void 0;try{for(var c,u=t[Symbol.iterator]();!(a=(c=u.next()).done);a=!0){var d,f=c.value;(d=f.classList).remove.apply(d,o(r.classes)),f.classList.add("out"),this.activationOffAnimate(f,n,i),i&&i[n]&&r.instant&&r.instant[n]&&i[n](),"targets"===n&&(this.specialClassHtmlOff(),this.specialCollapseOff(f),this.specialCloseOff(f))}}catch(t){l=!0,s=t}finally{try{!a&&u.return&&u.return()}finally{if(l)throw s}}}},{key:"activationOffAnimate",value:function(t,e,n){var i=this,r=this.options,a=function(t,e){t.classList.remove("out"),"targets"===e&&i.specialScrollbarOff(),n&&n[e]&&(r.instant&&r.instant[e]||n[e]())},l=this.activationTiming(t);if(clearTimeout(parseFloat(t.getAttribute("xt-activation-animation-timeout"))),l){var o=setTimeout(function(t,e){a(t,e)},l,t,e);t.setAttribute("xt-activation-animation-timeout",o)}else a(t,e)}},{key:"activationTiming",value:function(t){var e=this.options.timing,n=parseFloat(getComputedStyle(t).transitionDuration)+parseFloat(getComputedStyle(t).transitionDelay),i=parseFloat(getComputedStyle(t).animationDuration)+parseFloat(getComputedStyle(t).animationDelay);return(n||i)&&(e=Math.max(n,i)),1e3*e}},{key:"specialClassHtmlOn",value:function(){var t,e=this.options;e.classHtml&&(t=document.documentElement.classList).add.apply(t,o(e.classHtml.split(" ")))}},{key:"specialClassHtmlOff",value:function(){var t,e=this.options;e.classHtml&&(t=document.documentElement.classList).remove.apply(t,o(e.classHtml.split(" ")))}},{key:"specialBackdrop",value:function(t){var e=this.options;if(e.backdrop){var n=void 0;"object"===e.backdrop?n=r.XtUtil.arrSingle(this.object):"targets"===e.backdrop?n=r.XtUtil.arrSingle(t):(n=t.querySelectorAll(e.backdrop)).length||(n=this.object.querySelectorAll(e.backdrop));var i=!0,a=!1,l=void 0;try{for(var o,s=n[Symbol.iterator]();!(i=(o=s.next()).done);i=!0){var c=o.value,u=c.querySelectorAll(".xt-backdrop");u.length||(u=r.XtUtil.createElement('<div class="xt-backdrop"></div>'),c.append(u))}}catch(t){a=!0,l=t}finally{try{!i&&s.return&&s.return()}finally{if(a)throw l}}}}},{key:"specialCenterOn",value:function(t){if(t.classList.contains("drop-center")){var e=this.object.clientWidth,n=t.clientWidth;t.style.left=(e-n)/2+"px"}}},{key:"specialMiddleOn",value:function(t){if(t.classList.contains("drop-middle")){var e=this.object.clientHeight,n=t.clientHeight;t.style.top=(e-n)/2+"px"}}},{key:"specialCollapseOn",value:function(t){if(t.classList.contains("collapse-height")){t.classList.add("no-transition"),t.style.height="auto",t.style.paddingTop="",t.style.paddingBottom="";var e=t.clientHeight+"px",n=t.style.paddingTop,i=t.style.paddingBottom;r.XtUtil.requestAnimationFrame.call(window,function(){t.style.height="0",t.style.paddingTop="0",t.style.paddingBottom="0",r.XtUtil.requestAnimationFrame.call(window,function(){t.classList.remove("no-transition"),t.style.height=e,t.style.paddingTop=n,t.style.paddingBottom=i})})}if(t.classList.contains("collapse-width")){t.style.width="auto",t.style.paddingLeft="",t.style.paddingRight="";var a=t.clientHeight+"px",l=t.style.paddingLeft,o=t.style.paddingRight;r.XtUtil.requestAnimationFrame.call(window,function(){t.style.width="0",t.style.paddingLeft="0",t.style.paddingRight="0",r.XtUtil.requestAnimationFrame.call(window,function(){t.classList.remove("no-transition"),t.style.width=a,t.style.paddingLeft=l,t.style.paddingRight=o})})}}},{key:"specialCollapseOff",value:function(t){if(t.classList.contains("collapse-height")){var e=t.clientHeight+"px",n=t.style.paddingTop,i=t.style.paddingBottom;r.XtUtil.requestAnimationFrame.call(window,function(){t.style.height=e,t.style.paddingTop=n,t.style.paddingBottom=i,r.XtUtil.requestAnimationFrame.call(window,function(){t.style.height="0",t.style.paddingTop="0",t.style.paddingBottom="0"})})}if(t.classList.contains("collapse-width")){var a=t.clientWidth+"px",l=t.style.paddingLeft,o=t.style.paddingRight;r.XtUtil.requestAnimationFrame.call(window,function(){t.style.width=a,t.style.paddingLeft=l,t.style.paddingRight=o,r.XtUtil.requestAnimationFrame.call(window,function(){t.style.width="0",t.style.paddingLeft="0",t.style.paddingRight="0"})})}}},{key:"specialCloseOn",value:function(t,e){var n=this,i=this.options;if(i.closeInside){var a=t.querySelectorAll(i.closeInside);r.XtUtil.requestAnimationFrame.call(window,function(){var t=!0,i=!1,l=void 0;try{for(var o,s=a[Symbol.iterator]();!(t=(o=s.next()).done);t=!0){var c=o.value;c.xtUtilOff("click.xtend."+n.namespace),c.xtUtilOn("click.xtend."+n.namespace,function(t){r.XtUtil.checkInside(t,r.XtUtil.arrSingle(this))&&n.eventOff(e)})}}catch(t){i=!0,l=t}finally{try{!t&&s.return&&s.return()}finally{if(i)throw l}}})}if(i.closeOutside){var l=document.documentElement.querySelectorAll(i.closeOutside);r.XtUtil.requestAnimationFrame.call(window,function(){var i=!0,a=!1,o=void 0;try{for(var s,c=l[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var u=s.value;u.xtUtilOff("click.xtend."+n.namespace),u.xtUtilOn("click.xtend."+n.namespace,function(i){r.XtUtil.checkOutside(i,r.XtUtil.arrSingle(t))&&n.eventOff(e)})}}catch(t){a=!0,o=t}finally{try{!i&&c.return&&c.return()}finally{if(a)throw o}}})}}},{key:"specialCloseOff",value:function(t){var e=this.options;if(e.closeInside){var n=t.querySelectorAll(e.closeInside),i=!0,r=!1,a=void 0;try{for(var l,o=n[Symbol.iterator]();!(i=(l=o.next()).done);i=!0){l.value.xtUtilOff("click.xtend."+this.namespace)}}catch(t){r=!0,a=t}finally{try{!i&&o.return&&o.return()}finally{if(r)throw a}}}if(e.closeOutside){var s=document.documentElement.querySelectorAll(e.closeOutside),c=!0,u=!1,d=void 0;try{for(var f,v=s[Symbol.iterator]();!(c=(f=v.next()).done);c=!0){f.value.xtUtilOff("click.xtend."+this.namespace)}}catch(t){u=!0,d=t}finally{try{!c&&v.return&&v.return()}finally{if(u)throw d}}}}},{key:"specialScrollbarOn",value:function(){if(this.options.scrollbar){var t=r.XtUtil.scrollbarWidth(),e=document.documentElement;e.style.paddingRight=t+"px",e.classList.add("xt-scrollbar");var n=document.documentElement.querySelectorAll(".xt-check-fixed > *"),i=!0,a=!1,l=void 0;try{for(var o,s=n[Symbol.iterator]();!(i=(o=s.next()).done);i=!0){var c=o.value;"fixed"===(m=window.getComputedStyle(c)).position?c.classList.add("xt-fixed"):c.classList.remove("xt-fixed")}}catch(t){a=!0,l=t}finally{try{!i&&s.return&&s.return()}finally{if(a)throw l}}n=document.documentElement.querySelectorAll(".xt-fixed");var u=!0,d=!1,f=void 0;try{for(var v,y=function(){var e=v.value;e.style.paddingRight="",m=window.getComputedStyle(e),h=m.paddingRight,g="calc("+h+" + "+t+"px)",e.classList.add("no-transition"),e.style.paddingRight=g,r.XtUtil.requestAnimationFrame.call(window,function(){e.classList.remove("no-transition")})},p=n[Symbol.iterator]();!(u=(v=p.next()).done);u=!0){var m,h,g;y()}}catch(t){d=!0,f=t}finally{try{!u&&p.return&&p.return()}finally{if(d)throw f}}n=document.documentElement.querySelectorAll(".xt-backdrop");var b=!0,w=!1,x=void 0;try{for(var S,A=n[Symbol.iterator]();!(b=(S=A.next()).done);b=!0){S.value.style.right=t+"px"}}catch(t){w=!0,x=t}finally{try{!b&&A.return&&A.return()}finally{if(w)throw x}}}}},{key:"specialScrollbarOff",value:function(){if(this.options.scrollbar){var t=document.documentElement;t.style.paddingRight="",t.classList.remove("xt-scrollbar");var e=document.documentElement.querySelectorAll(".xt-fixed"),n=!0,i=!1,a=void 0;try{for(var l,o=function(){var t=l.value;t.classList.add("no-transition"),r.XtUtil.requestAnimationFrame.call(window,function(){t.style.paddingRight="",r.XtUtil.requestAnimationFrame.call(window,function(){t.classList.remove("no-transition")})})},s=e[Symbol.iterator]();!(n=(l=s.next()).done);n=!0)o()}catch(t){i=!0,a=t}finally{try{!n&&s.return&&s.return()}finally{if(i)throw a}}e=document.documentElement.querySelectorAll(".xt-backdrop");var c=!0,u=!1,d=void 0;try{for(var f,v=e[Symbol.iterator]();!(c=(f=v.next()).done);c=!0){f.value.style.right=""}}catch(t){u=!0,d=t}finally{try{!c&&v.return&&v.return()}finally{if(u)throw d}}}}}]),t}();c.defaults={class:"active"},window.Xt=c,n.Xt=c;var u=function(t){function e(t,n){s(this,e);var i=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,"data-xt-toggle"));return i.initEvents(),i}return l(e,c),e}();u.defaults={elements:":scope > a, :scope > button",targets:':scope > [class^="toggle-"], :scope > [class*=" toggle-"]',class:"active",instant:{elements:!0},on:"click",min:0,max:1},window.XtToggle=u,n.XtToggle=u;var d=function(t){function e(t,n){s(this,e);var i=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,"data-xt-drop"));return i.initEvents(),i}return l(e,c),e}();d.defaults={elements:":scope",targets:":scope > .drop",additional:":scope > a, :scope > button",class:"active",instant:{elements:!0},on:"click",onOutside:!0,offOutside:!0,min:0,max:1,closeOutside:"body"},window.XtDrop=d,n.XtDrop=d;var f=function(t){function e(t,n){s(this,e);var i=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,"data-xt-overlay"));return i.initEvents(),i}return l(e,c),e}();f.defaults={elements:":scope > a, :scope > button",targets:":scope > .overlay-outer",class:"active",instant:{elements:!0},on:"click",min:0,max:1,appendTo:"body",backdrop:"targets",closeInside:".overlay-dismiss, :scope > .xt-backdrop, :scope .overlay-inner > .btn-close",scrollbar:!0},window.XtOverlay=f,n.XtOverlay=f;var v=function(t){function e(t,n){s(this,e);var i=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,"data-xt-sticky"));return i.initEvents(),i}return l(e,c),i(e,[{key:"initScope",value:function(){(function t(e,n,i){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var a=Object.getPrototypeOf(e);return null===a?void 0:t(a,n,i)}if("value"in r)return r.value;var l=r.get;return void 0!==l?l.call(i):void 0})(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"initScope",this).call(this),this.mode="all",this.container=r.XtUtil.parents(this.object,".xt-container"),this.container.length||(this.container=r.XtUtil.createElement('<div class="xt-container xt-check-fixed"></div>'),this.object.before(this.container),this.container.append(this.object),this.container=r.XtUtil.parents(this.object,".xt-container")),this.targets=this.container[0].querySelectorAll(".xt-clone"),this.targets&&(this.targets=this.object.cloneNode(!0),this.targets.classList.add("xt-clone"),this.container[0].append(this.targets)),this.targets=r.XtUtil.arrSingle(this.targets),this.object.classList.add("xt-fixed")}},{key:"initEvents",value:function(){var t=this,e=this.options,n=[].concat(o(e.on.split(" "))),i=!0,r=!1,a=void 0;try{for(var l,s=n[Symbol.iterator]();!(i=(l=s.next()).done);i=!0){var c=l.value;window.xtUtilOff(c+".xtend"+this.namespace),window.xtUtilOn(c+".xtend"+this.namespace,function(e){t.eventScroll(t.object)})}}catch(t){r=!0,a=t}finally{try{!i&&s.return&&s.return()}finally{if(r)throw a}}}},{key:"eventScroll",value:function(t){var e=this,n=this.options,i=document.documentElement.scrollTop,a=i;r.XtUtil.cancelAnimationFrame.call(window,this.scrollFrame),this.scrollFrame=r.XtUtil.requestAnimationFrame.call(window,function(){var l=e.object,s=l.getBoundingClientRect(),c=e.container[0].getBoundingClientRect(),u=e.eventScrollBottom(n.bottom,1/0,a,l.clientHeight),d=e.eventScrollTop(n.top,c.top,a),f=0,v=0,y=0;n.contain&&(y=e.eventScrollAdd(n.contain.bottom,0),v=e.eventScrollAdd(n.contain.top,0)),f=i>e.scrollTopOld?y:v,a>=d-f&&a<u+f?(v||y)&&a<=d?"block-add-inside"!==l.getAttribute("xt-scroll-add")&&(l.setAttribute("xt-scroll-add","block-add-inside"),l.classList.add("no-transition"),l.style.top=s.top+"px",r.XtUtil.requestAnimationFrame.call(window,function(){l.classList.remove("no-transition"),l.style.top=f+"px"})):(l.setAttribute("xt-scroll-add",""),l.style.top=f+"px"):(v||y)&&a>=d-v?"block-add-outside"!==l.getAttribute("xt-scroll-add")&&(l.setAttribute("xt-scroll-add","block-add-outside"),l.classList.add("no-transition"),l.style.top=s.top-c.top+"px",console.log(l.style.top,s.top,c.top),r.XtUtil.requestAnimationFrame.call(window,function(){l.classList.remove("no-transition"),l.style.top=f+"px"})):(l.setAttribute("xt-scroll-add",""),l.style.top="");var p,m,h=a>=d-f,g=a<u+f;h&&g?(p=t.classList).contains.apply(p,o(e.options.classes))||e.eventOn(t):(m=t.classList).contains.apply(m,o(e.options.classes))&&e.eventOff(t);l.classList.remove("sticky-top","sticky-bottom"),h||l.classList.add("sticky-top"),g||l.classList.add("sticky-bottom"),i>e.scrollTopOld?(l.classList.remove("sticky-up"),l.classList.add("sticky-down")):(l.classList.remove("sticky-down"),l.classList.add("sticky-up")),e.scrollTopOld=i})}},{key:"eventScrollAdd",value:function(t,e){if(t)if(isNaN(parseFloat(t))){var n=document.querySelectorAll(t);n.length&&(n=n[0]).classList.contains("active")&&(e=n.clientHeight)}else e=t;return e}},{key:"eventScrollBottom",value:function(t,e,n,i){if(t)if(isNaN(parseFloat(t))){var r=document.querySelectorAll(t);if(r.length)e=r[0].getBoundingClientRect().top+n-i;else if(this.targets.length){e=this.targets[0].getBoundingClientRect().top+n}}else e=t;return e}},{key:"eventScrollTop",value:function(t,e,n){if(isNaN(parseFloat(t))){var i=document.querySelectorAll(t);if(i.length)e=i[0].getBoundingClientRect().top+n;else if(this.targets.length){e=this.targets[0].getBoundingClientRect().top+n}}else e=t;return e}}]),e}();v.defaults={class:"active",on:"scroll resize",min:0,max:1/0,contain:!1},window.XtSticky=v,n.XtSticky=v},{"./xtend-utils":2}]},{},[1]);
//# sourceMappingURL=bundle.js.map
