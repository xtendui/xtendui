!function(){return function t(e,i,n){function r(o,l){if(!i[o]){if(!e[o]){var s="function"==typeof require&&require;if(!l&&s)return s(o,!0);if(a)return a(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var u=i[o]={exports:{}};e[o][0].call(u.exports,function(t){return r(e[o][1][t]||t)},u,u.exports,t,e,i,n)}return i[o].exports}for(var a="function"==typeof require&&require,o=0;o<n.length;o++)r(n[o]);return r}}()({1:[function(t,e,i){
/*! xtend v0.4.27 (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */
"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.XtUtil=void 0;var n=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var i=[],n=!0,r=!1,a=void 0;try{for(var o,l=t[Symbol.iterator]();!(n=(o=l.next()).done)&&(i.push(o.value),!e||i.length!==e);n=!0);}catch(t){r=!0,a=t}finally{try{!n&&l.return&&l.return()}finally{if(r)throw a}}return i}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=t("./xtend"),a={currents:{},initAll:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=!0,i=!1,n=void 0;try{for(var a,o=t.querySelectorAll("[data-xt-toggle]")[Symbol.iterator]();!(e=(a=o.next()).done);e=!0){var l=a.value;new r.XtToggle(l)}}catch(t){i=!0,n=t}finally{try{!e&&o.return&&o.return()}finally{if(i)throw n}}var s=!0,c=!1,u=void 0;try{for(var d,f=t.querySelectorAll("[data-xt-drop]")[Symbol.iterator]();!(s=(d=f.next()).done);s=!0){var v=d.value;new r.XtDrop(v)}}catch(t){c=!0,u=t}finally{try{!s&&f.return&&f.return()}finally{if(c)throw u}}var h=!0,y=!1,m=void 0;try{for(var p,g=t.querySelectorAll("[data-xt-overlay]")[Symbol.iterator]();!(h=(p=g.next()).done);h=!0){var w=p.value;new r.XtOverlay(w)}}catch(t){y=!0,m=t}finally{try{!h&&g.return&&g.return()}finally{if(y)throw m}}var b=!0,S=!1,O=void 0;try{for(var k,x=t.querySelectorAll("[data-xt-fade]")[Symbol.iterator]();!(b=(k=x.next()).done);b=!0){var A=k.value;new r.XtFade(A)}}catch(t){S=!0,O=t}finally{try{!b&&x.return&&x.return()}finally{if(S)throw O}}var L=!0,X=!1,U=void 0;try{for(var q,E=t.querySelectorAll("[data-xt-sticky]")[Symbol.iterator]();!(L=(q=E.next()).done);L=!0){var C=q.value;new r.XtSticky(C)}}catch(t){X=!0,U=t}finally{try{!L&&E.return&&E.return()}finally{if(X)throw U}}}};a.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},a.cancelAnimationFrame=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(t){window.clearTimeout(id)},a.checkInside=function(t,e){var i=!1,n=!0,r=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var s=o.value;(t.target===s||s.contains(t.target))&&(i=!0)}}catch(t){r=!0,a=t}finally{try{!n&&l.return&&l.return()}finally{if(r)throw a}}return i},a.checkOutside=function(t,e){var i=!0,n=!0,r=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var s=o.value;(t.target===s||s.contains(t.target))&&(i=!1)}}catch(t){r=!0,a=t}finally{try{!n&&l.return&&l.return()}finally{if(r)throw a}}return i},a.scrollbarWidth=function(){var t=document.createElement("div");t.style.visibility="hidden",t.style.width="100px",t.style.msOverflowStyle="scrollbar",document.body.appendChild(t);var e=t.offsetWidth;t.style.overflow="scroll";var i=document.createElement("div");i.style.width="100%",t.appendChild(i);var n=i.offsetWidth;return t.parentNode.removeChild(t),e-n},a.getUniqueID=function(){return a.uid=void 0!==a.uid?a.uid:0,"unique-id-"+a.uid++},a.getUniqueNum=function(){return a.unumber=void 0!==a.unumber?a.unumber:0,a.unumber++},a.merge=function(t){var e={},i=!0,r=!1,a=void 0;try{for(var o,l=t[Symbol.iterator]();!(i=(o=l.next()).done);i=!0){var s=o.value,c=!0,u=!1,d=void 0;try{for(var f,v=Object.entries(s)[Symbol.iterator]();!(c=(f=v.next()).done);c=!0){var h=n(f.value,2),y=h[0],m=h[1];e[y]=m}}catch(t){u=!0,d=t}finally{try{!c&&v.return&&v.return()}finally{if(u)throw d}}}}catch(t){r=!0,a=t}finally{try{!i&&l.return&&l.return()}finally{if(r)throw a}}return e},a.arrSingle=function(t){if(void 0===t.length){var e=new Array(1);return e[0]=t,e}return t},a.createElement=function(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild},a.parents=function(t,e){for(var i=[];t=t.parentElement.closest(e);)i.push(t);return i},a.dataStorage={_storage:new WeakMap,put:function(t,e,i){return this._storage.has(e)||this._storage.set(t,new Map),this._storage.get(t).set(e,i),this._storage.get(t).get(e)},get:function(t,e){return this._storage.get(t).get(e)},has:function(t,e){return this._storage.get(t).has(e)},remove:function(t,e){var i=this._storage.get(t).delete(e);return 0===!this._storage.get(e).size&&this._storage.delete(t),i}},window.XtUtil=a,i.XtUtil=a,function(t,e){try{t.querySelector(":scope body")}catch(a){for(var i=["querySelector","querySelectorAll"],n=function(){var n=i[r],a=e[n];e[n]=function(e){if(/(^|,)\s*:scope/.test(e)){var i=this.id;this.id="ID_"+Date.now(),e=e.replace(/((^|,)\s*):scope/g,"$1#"+this.id);var r=t[n](e);return this.id=i,r}return a.call(this,e)}},r=0;r<i.length;r++)n()}}(window.document,Element.prototype)},{"./xtend":2}],2:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.XtFade=i.XtSticky=i.XtOverlay=i.XtDrop=i.XtToggle=i.Xt=void 0;var n=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var i=[],n=!0,r=!1,a=void 0;try{for(var o,l=t[Symbol.iterator]();!(n=(o=l.next()).done)&&(i.push(o.value),!e||i.length!==e);n=!0);}catch(t){r=!0,a=t}finally{try{!n&&l.return&&l.return()}finally{if(r)throw a}}return i}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=t("./xtend-utils");function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var u=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments[2];if(c(this,t),this.object=e,this.object){this.defaults=this.constructor.defaults,this.options=a.XtUtil.merge([this.defaults,i]);var r=this.object.getAttribute(n);this.options=a.XtUtil.merge([this.options,r?JSON.parse(r):{}]),this.options.class&&(this.options.classes=[].concat(s(this.options.class.split(" ")))),this.initSetup(),this.initScope(),this.initEvents()}}return r(t,[{key:"initSetup",value:function(){var t=this.options;t.targets&&-1!==t.targets.indexOf("#")?(this.mode="all",this.container=document,t.max=1/0,this.namespace=t.targets.toString()+"-"+t.classes.toString()):(this.mode="unique",this.container=this.object,this.namespace=a.XtUtil.getUniqueID()),this.namespace=this.namespace.replace(/\W+/g,""),this.getCurrents()||this.setCurrents([])}},{key:"initScope",value:function(){var t=this,e=t.options;if(this.elements=[],e.elements&&(this.elements=a.XtUtil.arrSingle(this.container.querySelectorAll(e.elements))),this.elements.length||(this.elements=a.XtUtil.arrSingle(this.object),a.XtUtil.requestAnimationFrame.call(window,function(){var e="[data-xt-id="+t.namespace+"]";t.elements=a.XtUtil.arrSingle(document.querySelectorAll(e))})),e.targets){var i=Array.from(this.container.querySelectorAll(e.targets));i=i.filter(function(t){return!a.XtUtil.parents(t,e.targets).length}),this.targets=a.XtUtil.arrSingle(i)}if(e.appendTo){var n=document.querySelectorAll(e.appendTo);n.length&&this.targets.forEach(function(t){n[0].appendChild(t)})}var r=!0,o=!1,l=void 0;try{for(var c,u=this.elements[Symbol.iterator]();!(r=(c=u.next()).done);r=!0){c.value.setAttribute("data-xt-id",t.namespace)}}catch(t){o=!0,l=t}finally{try{!r&&u.return&&u.return()}finally{if(o)throw l}}a.XtUtil.requestAnimationFrame.call(window,function(){if(t.elements.length){var i=!0,n=!1,r=void 0;try{for(var a,o=t.elements[Symbol.iterator]();!(i=(a=o.next()).done);i=!0){var l,c,u=a.value;if((l=u.classList).contains.apply(l,s(e.classes)))(c=u.classList).remove.apply(c,s(e.classes)),t.eventOn(u)}}catch(t){n=!0,r=t}finally{try{!i&&o.return&&o.return()}finally{if(n)throw r}}var d=e.min-t.getCurrents().length;if(d)for(var f=0;f<d;f++)t.eventOn(t.elements[f])}})}},{key:"initEvents",value:function(){var t=this,e=t.options,i=!0,n=!1,r=void 0;try{for(var o,l=this.elements[Symbol.iterator]();!(i=(o=l.next()).done);i=!0){var c=o.value;if(e.on){var u=a.XtUtil.dataStorage.put(c,"xtOnHandler",t.eventOnHandler.bind(t).bind(t,c)),d=[].concat(s(e.on.split(" "))),f=!0,v=!1,h=void 0;try{for(var y,m=d[Symbol.iterator]();!(f=(y=m.next()).done);f=!0){var p=y.value;c.removeEventListener(p,u),c.addEventListener(p,u)}}catch(t){v=!0,h=t}finally{try{!f&&m.return&&m.return()}finally{if(v)throw h}}c.addEventListener("on.trigger",u)}if(e.off){var g=a.XtUtil.dataStorage.put(c,"xtOffHandler",t.eventOffHandler.bind(t).bind(t,c)),w=[].concat(s(e.off.split(" "))),b=!0,S=!1,O=void 0;try{for(var k,x=w[Symbol.iterator]();!(b=(k=x.next()).done);b=!0){var A=k.value;c.removeEventListener(A,g),c.addEventListener(A,g)}}catch(t){S=!0,O=t}finally{try{!b&&x.return&&x.return()}finally{if(S)throw O}}c.addEventListener("off.trigger",g)}}}catch(t){n=!0,r=t}finally{try{!i&&l.return&&l.return()}finally{if(n)throw r}}var L=!0,X=!1,U=void 0;try{for(var q,E=this.targets[Symbol.iterator]();!(L=(q=E.next()).done);L=!0){var C=q.value,T=this.getElementsFromTarget(C)[0];if(T){var F=a.XtUtil.dataStorage.put(T,"xtOnHandler",t.eventOnHandler.bind(t).bind(t,T)),H=a.XtUtil.dataStorage.put(T,"xtOffHandler",t.eventOffHandler.bind(t).bind(t,T));C.addEventListener("on.trigger",F),C.addEventListener("off.trigger",H)}}}catch(t){X=!0,U=t}finally{try{!L&&E.return&&E.return()}finally{if(X)throw U}}e.auto&&(this.auto(),window.addEventListener("focus",function(){t.auto()}),window.addEventListener("blur",function(){t.autoStop()}))}},{key:"eventOnHandler",value:function(t,e){var i=this.container.querySelectorAll(".event-limit");i.length?a.XtUtil.checkOutside(e,i)&&this.eventOn(t):this.eventOn(t),this.options.autoPause?this.autoPause():this.options.auto&&this.auto()}},{key:"eventOffHandler",value:function(t,e){var i=this.container.querySelectorAll(".event-limit");i.length?a.XtUtil.checkOutside(e,i)&&this.eventOff(t):this.eventOff(t)}},{key:"auto",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this,i=e.options;this.autoStop();var n=t?0:i.auto;e.autoInterval=setInterval(function(){if(!i.autoAlways&&null===e.object.offsetParent)return!1;e.autoCurrent=void 0!==e.autoCurrent?e.autoCurrent+1:0,e.autoCurrent=e.autoCurrent>=e.elements.length?0:e.autoCurrent,e.eventOn(e.elements[e.autoCurrent])},n)}},{key:"autoPause",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this,i=e.options;this.autoStop();var n=t?0:i.autoPause;"stop"!==n&&(e.autoPauseTimeout=setTimeout(function(){e.auto(!0),e.auto()},n))}},{key:"autoStop",value:function(){clearInterval(this.autoInterval),clearTimeout(this.autoPauseTimeout)}},{key:"getElements",value:function(t){if(!this.elements||!this.elements.length)return{all:[],single:null};if("all"===this.mode)return{all:this.elements,single:this.elements[0]};if("unique"===this.mode){var e=t.getAttribute("data-group");if(e){var i=Array.from(this.elements).filter(function(t){return t.getAttribute("data-group")===e}),n=a.XtUtil.arrSingle(i);return{all:n,single:n[0]}}var r=t;return{all:a.XtUtil.arrSingle(r),single:r}}}},{key:"getTargets",value:function(t){if(!this.targets||!this.targets.length)return[];if("all"===this.mode)return this.targets;if("unique"===this.mode){var e=t.getAttribute("data-group"),i=Array.from(this.elements).filter(function(t){return t.getAttribute("data-group")===e}),n=Array.from(this.targets).filter(function(t){return t.getAttribute("data-group")===e}),r=void 0;return e?(r=n,a.XtUtil.arrSingle(r)):(r=n[i.findIndex(function(e){return e===t})],a.XtUtil.arrSingle(r))}}},{key:"getElementsFromTarget",value:function(t){if(!this.elements||!this.elements.length)return[];var e=t.getAttribute("data-group"),i=Array.from(this.elements).filter(function(t){return t.getAttribute("data-group")===e}),n=Array.from(this.targets).filter(function(t){return t.getAttribute("data-group")===e}),r=void 0;return e?(r=i,a.XtUtil.arrSingle(r)):(r=i[n.findIndex(function(e){return e===t})],a.XtUtil.arrSingle(r))}},{key:"getAdditional",value:function(){return this.object.querySelectorAll(this.options.additional)}},{key:"getCurrents",value:function(){return a.XtUtil.currents[this.namespace]}},{key:"setCurrents",value:function(t){a.XtUtil.currents[this.namespace]=t}},{key:"addCurrent",value:function(t){a.XtUtil.currents[this.namespace].push(t)}},{key:"removeCurrent",value:function(t){a.XtUtil.currents[this.namespace]=a.XtUtil.currents[this.namespace].filter(function(e){return e!==t})}},{key:"checkOn",value:function(t){var e;return!((e=t.classList).contains.apply(e,s(this.options.classes))&&!t.classList.contains("off-block")||t.classList.contains("on-block"))}},{key:"checkOff",value:function(t){var e;return!!(this.options.min-this.getCurrents().length)&&!(!(e=t.classList).contains.apply(e,s(this.options.classes))&&!t.classList.contains("on-block")||t.classList.contains("off-block"))}},{key:"eventOn",value:function(t){var e=this,i=e.options;if(this.checkOn(t)){var r=this.getElements(t);this.addCurrent(r.single);var a=this.getTargets(t),o=this.getAdditional(),l={elements:function(){e.activationOn(r.all,r,"elements")},targets:function(){e.activationOn(a,r,"targets")},additional:function(){e.activationOn(o,r,"additional")}};if(i.auto){var s=0,c=!0,u=!1,d=void 0;try{for(var f,v=e.elements.entries()[Symbol.iterator]();!(c=(f=v.next()).done);c=!0){var h=n(f.value,2),y=h[0];if(h[1]===t){s=y;break}}}catch(t){u=!0,d=t}finally{try{!c&&v.return&&v.return()}finally{if(u)throw d}}e.autoCurrent=s}var m=this.getCurrents();m.length>i.max?this.eventOff(m[0],l):(l.elements(),l.targets(),l.additional())}else i.toggle&&this.eventOff(t)}},{key:"eventOff",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(this.checkOff(t)){var i=this.getElements(t);this.removeCurrent(i.single),this.activationOff(i.all,i,"elements",e);var n=this.getTargets(t);this.activationOff(n,i,"targets",e);var r=this.getAdditional();this.activationOff(r,i,"additional",e)}}},{key:"activationOn",value:function(t,e,i){var n=this.options,r=function(t,e,i,r){var a;(a=e.classList).add.apply(a,s(n.classes)),e.classList.remove("out"),t.activationOnAnimate(e,r),"targets"===r&&(t.specialClassHtmlOn(),t.specialBackdrop(e),t.specialCenterOn(e),t.specialMiddleOn(e),t.specialCollapseOn(e),t.specialCloseOn(e,i.single),t.specialScrollbarOn()),e.dispatchEvent(new Event("on"))},a=!0,o=!1,l=void 0;try{for(var c,u=t[Symbol.iterator]();!(a=(c=u.next()).done);a=!0){var d=c.value;d.classList.remove("off-block"),clearTimeout(d.dataset.xtDelayTimeout),clearTimeout(d.dataset.xtAnimTimeout);var f=d.dataset.xtOnDelay;f?(d.classList.add("on-block"),d.dataset.xtDelayTimeout=setTimeout(function(t,e,i,n){e.classList.remove("on-block"),r(t,e,i,n)},parseFloat(f),this,d,e,i).toString()):r(this,d,e,i)}}catch(t){o=!0,l=t}finally{try{!a&&u.return&&u.return()}finally{if(o)throw l}}}},{key:"activationOff",value:function(t,e,i,n){var r=this.options,a=function(t,e,i,n,a){var o;(o=e.classList).remove.apply(o,s(r.classes)),e.classList.add("out"),t.activationOffAnimate(e,n,a),a&&a[n]&&!a[n+"done"]&&r.instant&&r.instant[n]&&(a[n](),a[n+"done"]=!0),"targets"===n&&(t.specialClassHtmlOff(),t.specialCollapseOff(e),t.specialCloseOff(e)),e.dispatchEvent(new Event("off"))},o=!0,l=!1,c=void 0;try{for(var u,d=t[Symbol.iterator]();!(o=(u=d.next()).done);o=!0){var f=u.value;f.classList.remove("on-block"),clearTimeout(f.dataset.xtDelayTimeout),clearTimeout(f.dataset.xtAnimTimeout);var v=f.dataset.xtOffDelay;v?(f.classList.add("off-block"),f.dataset.xtDelayTimeout=setTimeout(function(t,e,i,n,r){e.classList.remove("off-block"),a(t,e,0,n,r)},parseFloat(v),this,f,e,i,n).toString()):a(this,f,0,i,n)}}catch(t){l=!0,c=t}finally{try{!o&&d.return&&d.return()}finally{if(l)throw c}}}},{key:"activationOnAnimate",value:function(t,e){var i=function(t,e){t.classList.contains("collapse-height")&&(t.style.height="auto"),t.classList.contains("collapse-width")&&(t.style.width="auto")},n=this.activationTiming(t);clearTimeout(t.dataset.xtAnimTimeout),n?t.dataset.xtAnimTimeout=setTimeout(function(t,e){i(t)},n,t,e).toString():i(t)}},{key:"activationOffAnimate",value:function(t,e,i){var n=this,r=n.options,a=function(t,e){t.classList.remove("out"),"targets"===e&&n.specialScrollbarOff(),i&&i[e]&&!i[e+"done"]&&(r.instant&&r.instant[e]||(i[e](),i[e+"done"]=!0))},o=this.activationTiming(t);clearTimeout(t.dataset.xtAnimTimeout),o?t.dataset.xtAnimTimeout=setTimeout(function(t,e){a(t,e)},o,t,e).toString():a(t,e)}},{key:"activationTiming",value:function(t){var e=this.options.timing;if(void 0!==e)return e;var i=getComputedStyle(t),n=parseFloat(i.transitionDuration)+parseFloat(i.transitionDelay),r=parseFloat(i.animationDuration)+parseFloat(i.animationDelay);return(n||r)&&(e=Math.max(n,r)),1e3*e}},{key:"specialClassHtmlOn",value:function(){var t,e=this.options;e.classHtml&&(t=document.documentElement.classList).add.apply(t,s(e.classHtml.split(" ")))}},{key:"specialClassHtmlOff",value:function(){var t,e=this.options;e.classHtml&&(t=document.documentElement.classList).remove.apply(t,s(e.classHtml.split(" ")))}},{key:"specialBackdrop",value:function(t){var e=this.options;if(e.backdrop){var i=void 0;"object"===e.backdrop?i=a.XtUtil.arrSingle(this.object):"targets"===e.backdrop?i=a.XtUtil.arrSingle(t):(i=t.querySelectorAll(e.backdrop)).length||(i=this.object.querySelectorAll(e.backdrop));var n=!0,r=!1,o=void 0;try{for(var l,s=i[Symbol.iterator]();!(n=(l=s.next()).done);n=!0){var c=l.value,u=c.querySelectorAll(".xt-backdrop");u.length||(u=a.XtUtil.createElement('<div class="xt-backdrop"></div>'),c.append(u))}}catch(t){r=!0,o=t}finally{try{!n&&s.return&&s.return()}finally{if(r)throw o}}}}},{key:"specialCenterOn",value:function(t){if(t.classList.contains("drop-center")){var e=this.object.clientWidth,i=t.clientWidth;t.style.left=(e-i)/2+"px"}}},{key:"specialMiddleOn",value:function(t){if(t.classList.contains("drop-middle")){var e=this.object.clientHeight,i=t.clientHeight;t.style.top=(e-i)/2+"px"}}},{key:"specialCollapseOn",value:function(t){if(t.classList.contains("collapse-height")){t.classList.add("no-transition"),t.style.height="auto",t.style.paddingTop="",t.style.paddingBottom="";var e=t.clientHeight+"px",i=t.style.paddingTop,n=t.style.paddingBottom;a.XtUtil.requestAnimationFrame.call(window,function(){t.style.height="0",t.style.paddingTop="0",t.style.paddingBottom="0",a.XtUtil.requestAnimationFrame.call(window,function(){t.classList.remove("no-transition"),t.style.height=e,t.style.paddingTop=i,t.style.paddingBottom=n})})}if(t.classList.contains("collapse-width")){t.style.width="auto",t.style.paddingLeft="",t.style.paddingRight="";var r=t.clientHeight+"px",o=t.style.paddingLeft,l=t.style.paddingRight;a.XtUtil.requestAnimationFrame.call(window,function(){t.style.width="0",t.style.paddingLeft="0",t.style.paddingRight="0",a.XtUtil.requestAnimationFrame.call(window,function(){t.classList.remove("no-transition"),t.style.width=r,t.style.paddingLeft=o,t.style.paddingRight=l})})}}},{key:"specialCollapseOff",value:function(t){if(t.classList.contains("collapse-height")){var e=t.clientHeight+"px",i=t.style.paddingTop,n=t.style.paddingBottom;a.XtUtil.requestAnimationFrame.call(window,function(){t.style.height=e,t.style.paddingTop=i,t.style.paddingBottom=n,a.XtUtil.requestAnimationFrame.call(window,function(){t.style.height="0",t.style.paddingTop="0",t.style.paddingBottom="0"})})}if(t.classList.contains("collapse-width")){var r=t.clientWidth+"px",o=t.style.paddingLeft,l=t.style.paddingRight;a.XtUtil.requestAnimationFrame.call(window,function(){t.style.width=r,t.style.paddingLeft=o,t.style.paddingRight=l,a.XtUtil.requestAnimationFrame.call(window,function(){t.style.width="0",t.style.paddingLeft="0",t.style.paddingRight="0"})})}}},{key:"specialCloseOn",value:function(t,e){var i=this,n=i.options;if(n.closeInside){var r=t.querySelectorAll(n.closeInside);a.XtUtil.requestAnimationFrame.call(window,function(){var n=!0,o=!1,l=void 0;try{for(var s,c=r[Symbol.iterator]();!(n=(s=c.next()).done);n=!0){var u=s.value,d=a.XtUtil.dataStorage.put(t,"specialCloseOnHandler",i.specialCloseOnHandler.bind(i).bind(i,u,e));u.removeEventListener("click",d),u.addEventListener("click",d)}}catch(t){o=!0,l=t}finally{try{!n&&c.return&&c.return()}finally{if(o)throw l}}})}if(n.closeOutside){var o=document.querySelectorAll(n.closeOutside);a.XtUtil.requestAnimationFrame.call(window,function(){var n=!0,r=!1,l=void 0;try{for(var s,c=o[Symbol.iterator]();!(n=(s=c.next()).done);n=!0){var u=s.value,d=a.XtUtil.dataStorage.put(t,"specialCloseOffHandler",i.specialCloseOffHandler.bind(i).bind(i,t,e));u.removeEventListener("click",d),u.addEventListener("click",d)}}catch(t){r=!0,l=t}finally{try{!n&&c.return&&c.return()}finally{if(r)throw l}}})}}},{key:"specialCloseOff",value:function(t){var e=this.options;if(e.closeInside){var i=t.querySelectorAll(e.closeInside),n=!0,r=!1,o=void 0;try{for(var l,s=i[Symbol.iterator]();!(n=(l=s.next()).done);n=!0){var c=l.value,u=a.XtUtil.dataStorage.get(t,"specialCloseOnHandler");c.removeEventListener("click",u)}}catch(t){r=!0,o=t}finally{try{!n&&s.return&&s.return()}finally{if(r)throw o}}}if(e.closeOutside){var d=document.querySelectorAll(e.closeOutside),f=!0,v=!1,h=void 0;try{for(var y,m=d[Symbol.iterator]();!(f=(y=m.next()).done);f=!0){var p=y.value,g=a.XtUtil.dataStorage.get(t,"specialCloseOffHandler");p.removeEventListener("click",g)}}catch(t){v=!0,h=t}finally{try{!f&&m.return&&m.return()}finally{if(v)throw h}}}}},{key:"specialCloseOnHandler",value:function(t,e,i){a.XtUtil.checkInside(i,a.XtUtil.arrSingle(t))&&this.eventOff(e)}},{key:"specialCloseOffHandler",value:function(t,e,i){a.XtUtil.checkOutside(i,a.XtUtil.arrSingle(t))&&this.eventOff(e)}},{key:"specialScrollbarOn",value:function(){var t=this;if(t.options.scrollbar){var e=void 0,i=a.XtUtil.scrollbarWidth();e=document.querySelectorAll(".xt-check-fixed > *");var n=!0,r=!1,o=void 0;try{for(var l,s=e[Symbol.iterator]();!(n=(l=s.next()).done);n=!0){var c=l.value;"fixed"===getComputedStyle(c).position?c.classList.add("xt-fixed"):c.classList.remove("xt-fixed")}}catch(t){r=!0,o=t}finally{try{!n&&s.return&&s.return()}finally{if(r)throw o}}e=document.querySelectorAll(".xt-fixed");var u=!0,d=!1,f=void 0;try{for(var v,h=function(){var e=v.value;if(e.style.paddingRight="",""===t.normalizeWidth(e.clientWidth)){var n="calc("+getComputedStyle(e).paddingRight+" + "+i+"px)";e.classList.add("no-transition"),a.XtUtil.requestAnimationFrame.call(window,function(){e.style.paddingRight=n,a.XtUtil.requestAnimationFrame.call(window,function(){e.classList.remove("no-transition")})})}},y=e[Symbol.iterator]();!(u=(v=y.next()).done);u=!0)h()}catch(t){d=!0,f=t}finally{try{!u&&y.return&&y.return()}finally{if(d)throw f}}e=document.querySelectorAll(".xt-backdrop");var m=!0,p=!1,g=void 0;try{for(var w,b=e[Symbol.iterator]();!(m=(w=b.next()).done);m=!0){w.value.style.right=i+"px"}}catch(t){p=!0,g=t}finally{try{!m&&b.return&&b.return()}finally{if(p)throw g}}var S=document.documentElement;S.style.paddingRight=i+"px",S.classList.add("xt-scrollbar")}}},{key:"specialScrollbarOff",value:function(){if(this.options.scrollbar){var t=void 0,e=document.documentElement;e.style.paddingRight="",e.classList.remove("xt-scrollbar"),t=document.querySelectorAll(".xt-fixed");var i=!0,n=!1,r=void 0;try{for(var o,l=function(){var t=o.value;t.classList.add("no-transition"),a.XtUtil.requestAnimationFrame.call(window,function(){t.style.paddingRight="",a.XtUtil.requestAnimationFrame.call(window,function(){t.classList.remove("no-transition")})})},s=t[Symbol.iterator]();!(i=(o=s.next()).done);i=!0)l()}catch(t){n=!0,r=t}finally{try{!i&&s.return&&s.return()}finally{if(n)throw r}}t=document.querySelectorAll(".xt-backdrop");var c=!0,u=!1,d=void 0;try{for(var f,v=t[Symbol.iterator]();!(c=(f=v.next()).done);c=!0){f.value.style.right=""}}catch(t){u=!0,d=t}finally{try{!c&&v.return&&v.return()}finally{if(u)throw d}}}}},{key:"normalizeWidth",value:function(t){return(t=parseFloat(t))+a.XtUtil.scrollbarWidth()>=window.innerWidth?t="":t+="px",t}}]),t}();u.defaults={auto:!1,autoPause:!1,autoAlways:!1},window.Xt=u,i.Xt=u;var d=function(t){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return c(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,"data-xt-toggle"))}return l(e,u),e}();d.defaults={elements:":scope > a, :scope > button",targets:':scope > [class^="toggle-"], :scope > [class*=" toggle-"]',class:"active",instant:{elements:!0},on:"click",toggle:!0,min:0,max:1},window.XtToggle=d,i.XtToggle=d;var f=function(t){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return c(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,"data-xt-drop"))}return l(e,u),e}();f.defaults={elements:":scope",targets:":scope > .drop",additional:":scope > a, :scope > button",class:"active",instant:{elements:!0},on:"click",toggle:!0,min:0,max:1,closeOutside:"body"},window.XtDrop=f,i.XtDrop=f;var v=function(t){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return c(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,"data-xt-overlay"))}return l(e,u),e}();v.defaults={elements:":scope > a, :scope > button",targets:":scope > .overlay-outer",class:"active",instant:{elements:!0},on:"click",toggle:!0,min:0,max:1,appendTo:"body",backdrop:"targets",classHtml:"xt-overlay",closeInside:".overlay-dismiss, :scope > .xt-backdrop, :scope .overlay-inner > .btn-close",scrollbar:!0},window.XtOverlay=v,i.XtOverlay=v;var h=function(t){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return c(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,"data-xt-sticky"))}return l(e,u),r(e,[{key:"initScope",value:function(){if(function t(e,i,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,i);if(void 0===r){var a=Object.getPrototypeOf(e);return null===a?void 0:t(a,i,n)}if("value"in r)return r.value;var o=r.get;return void 0!==o?o.call(n):void 0}(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"initScope",this).call(this),this.mode="all",this.container=a.XtUtil.parents(this.object,".xt-container"),this.container.length||(this.container=a.XtUtil.createElement('<div class="xt-container xt-check-fixed"></div>'),this.object.before(this.container),this.container.append(this.object),this.container=a.XtUtil.parents(this.object,".xt-container")),this.targets=this.container[0].querySelectorAll(".xt-clone"),!this.targets.length){this.targets=this.object.cloneNode(!0),this.targets.classList.add("xt-clone"),this.targets.setAttribute("aria-hidden","true");var t=!0,i=!1,n=void 0;try{for(var r,o=this.targets.querySelectorAll("[id]")[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var l=r.value;l.setAttribute("id",l.getAttribute("id")+"-clone")}}catch(t){i=!0,n=t}finally{try{!t&&o.return&&o.return()}finally{if(i)throw n}}var s=!0,c=!1,u=void 0;try{for(var d,f=this.targets.querySelectorAll("[name]")[Symbol.iterator]();!(s=(d=f.next()).done);s=!0){var v=d.value;v.setAttribute("name",v.getAttribute("name")+"-clone")}}catch(t){c=!0,u=t}finally{try{!s&&f.return&&f.return()}finally{if(c)throw u}}this.container[0].append(this.targets)}this.targets=a.XtUtil.arrSingle(this.targets),this.object.classList.add("xt-fixed"),"down"===this.options.hide?this.object.classList.add("sticky-hide-down"):this.object.classList.remove("sticky-hide-down"),"up"===this.options.hide?this.object.classList.add("sticky-hide-up"):this.object.classList.remove("sticky-hide-up"),this.unique=a.XtUtil.getUniqueNum(),this.object.style.zIndex=""+(100-this.unique)}},{key:"initEvents",value:function(){var t=this.options;if(t.on){var e=a.XtUtil.dataStorage.put(window,"stickyHandler",this.eventOnHandler.bind(this)),i=[].concat(s(t.on.split(" "))),n=!0,r=!1,o=void 0;try{for(var l,c=i[Symbol.iterator]();!(n=(l=c.next()).done);n=!0){var u=l.value;window.removeEventListener(u,e),window.addEventListener(u,e)}}catch(t){r=!0,o=t}finally{try{!n&&c.return&&c.return()}finally{if(r)throw o}}window.addEventListener("on.sticky",e)}window.dispatchEvent(new Event("on.sticky"))}},{key:"eventOnHandler",value:function(t){this.eventScroll(this.object)}},{key:"eventScroll",value:function(t){var e=this.options,i=!0,n=!1,r=!1,o=0,l=0,s=window.innerHeight,c=document.documentElement.scrollHeight,u=this.object,d=u.getBoundingClientRect().top,f=parseFloat(getComputedStyle(u).height),v=parseFloat(getComputedStyle(this.targets[0]).height),h=this.container[0].getBoundingClientRect().top,y=document.documentElement.scrollTop,m=this.scrollTopOld;y<m?(u.classList.remove("sticky-down"),u.classList.add("sticky-up"),r=!0):(u.classList.add("sticky-down"),u.classList.remove("sticky-up")),"down"===e.hide&&(r||(l=v)),"up"===e.hide&&r&&(l=v);var p=this.eventScrollPos(e.limit.top||this.targets,y,h),g=this.eventScrollPos(e.limit.bottom,y,1/0);"top"===e.position&&(g-=v),"bottom"===e.position&&(p-=s-v,g=Math.abs(c-s-g));var w=0,b=0;if(e.contain){if(e.contain.top){var S=this.eventScrollHeight(e.contain.top,r);null!==(w=S.val)&&w>h?(o=w,S.foundHide||(i=!1)):w=null}e.contain.bottom&&(null!==(b=this.eventScrollPos(e.contain.bottom))&&b<f+w?(o=b-f,i=!1):b=null)}u.dataset.xtAddSticky=o.toString();var O=y>=p-o+l,k=y<g+o-l;O&&k?(this.eventOn(t),l&&(n=!0)):this.eventOff(t),u.classList.contains("active")?n?(o=-f,u.classList.contains("sticky-hide")||(u.classList.add("sticky-hide"),u.dispatchEvent(new Event("sticky.hide")))):u.classList.contains("sticky-hide")&&(u.classList.remove("sticky-hide"),u.dispatchEvent(new Event("sticky.show"))):(o=0,i=!1),i&&void 0!==m?u.classList.contains("sticky-anim")||u.classList.add("sticky-anim"):u.classList.contains("sticky-anim")&&u.classList.remove("sticky-anim"),O?u.classList.contains("sticky-top")&&u.classList.remove("sticky-top"):u.classList.contains("sticky-top")||u.classList.add("sticky-top"),k?u.classList.contains("sticky-bottom")&&u.classList.remove("sticky-bottom"):u.classList.contains("sticky-bottom")||u.classList.add("sticky-bottom"),o!==this.addOld&&(u.classList.add("no-transition"),void 0!==this.addOld&&(u.style[e.position]=d+"px"),a.XtUtil.cancelAnimationFrame.call(window,this.eventFrame),this.eventFrame=a.XtUtil.requestAnimationFrame.call(window,function(){u.classList.remove("no-transition"),u.style[e.position]=o+"px"}));var x=this.normalizeWidth(this.container[0].clientWidth);u.style.width!==x&&(u.style.width=x),this.addOld=o,this.scrollTopOld=y}},{key:"eventScrollPos",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(isNaN(parseFloat(t))){var n=Array.isArray(t)?t:document.querySelectorAll(t);if(n.length){var r=!1;i=0;var a=!0,o=!1,l=void 0;try{for(var s,c=n[Symbol.iterator]();!(a=(s=c.next()).done);a=!0){var u=s.value,d=parseFloat(u.dataset.xtAddSticky);if(d)"none"!==getComputedStyle(u).display&&(i+=d,r=!0);else i+=u.getBoundingClientRect().top,r=!0}}catch(t){o=!0,l=t}finally{try{!a&&c.return&&c.return()}finally{if(o)throw l}}r?i+=e:i=null}}else i=t;return i}},{key:"eventScrollHeight",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=!1;if(isNaN(parseFloat(t))){var r=Array.isArray(t)?t:document.querySelectorAll(t);if(r.length){var a=!0,o=!1,l=void 0;try{for(var s,c=r[Symbol.iterator]();!(a=(s=c.next()).done);a=!0){var u=s.value;u.classList.contains("sticky-hide-down")&&u.classList.contains("active")?e&&(i+=u.clientHeight,n=!0):u.classList.contains("sticky-hide-up")&&u.classList.contains("active")?e||(i+=u.clientHeight,n=!0):i+=u.clientHeight}}catch(t){o=!0,l=t}finally{try{!a&&c.return&&c.return()}finally{if(o)throw l}}}}else i=t;return{val:i,foundHide:n}}}]),e}();h.defaults={class:"active",on:"scroll resize",min:0,max:1/0,position:"top",limit:{bottom:1/0},contain:!1,hide:!1},window.XtSticky=h,i.XtSticky=h;var y=function(t){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return c(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,"data-xt-fade"))}return l(e,u),r(e,[{key:"initEvents",value:function(){var t=this.options;if(t.on){var e=a.XtUtil.dataStorage.put(window,"fadeHandler",this.eventOnHandler.bind(this)),i=[].concat(s(t.on.split(" "))),n=!0,r=!1,o=void 0;try{for(var l,c=i[Symbol.iterator]();!(n=(l=c.next()).done);n=!0){var u=l.value;window.removeEventListener(u,e),window.addEventListener(u,e)}}catch(t){r=!0,o=t}finally{try{!n&&c.return&&c.return()}finally{if(r)throw o}}window.addEventListener("on.fade",e)}window.dispatchEvent(new Event("on.fade"))}},{key:"eventOnHandler",value:function(t){this.eventScroll(this.object)}},{key:"eventScroll",value:function(){var t=this,e=t.options,i=0,n=[],r=!1,o=window.innerHeight,l=document.documentElement.scrollTop,s=t.scrollTopOld;l<s&&(r=!0);var c=!0,u=!1,d=void 0;try{for(var f,v=function(){var s=f.value;if(s.offsetParent&&!s.classList.contains("fade-block")){var c=s.offsetParent.getBoundingClientRect().top+s.offsetTop,u=parseFloat(getComputedStyle(s).height),d=!1,v=c+l,h=v+u,y=o*e.distance;l+o>=v+y&&l<h-y?(d=t.checkOn(s))&&(n.push(s),a.XtUtil.cancelAnimationFrame.call(window,s.dataset.eventFrame),s.dataset.eventFrame=a.XtUtil.requestAnimationFrame.call(window,function(){if(e.delayOn){var r=new Function("current","total",e.delayOn);s.dataset.xtOnDelay=r(i,n.length).toString(),i++}t.eventOn(s)})):(d=t.checkOff(s),s.classList.add("fade-visible"),d&&(s.classList.add("fade-scroll"),n.push(s),a.XtUtil.cancelAnimationFrame.call(window,s.dataset.eventFrame),s.dataset.eventFrame=a.XtUtil.requestAnimationFrame.call(window,function(){if(e.delayOff){var r=new Function("current","total",e.delayOff);s.dataset.xtOffDelay=r(i,n.length).toString(),i++}d=t.eventOff(s)}))),d&&(r?(s.classList.remove("fade-down"),s.classList.add("fade-up")):(s.classList.add("fade-down"),s.classList.remove("fade-up")))}},h=t.elements[Symbol.iterator]();!(c=(f=h.next()).done);c=!0)v()}catch(t){u=!0,d=t}finally{try{!c&&h.return&&h.return()}finally{if(u)throw d}}t.scrollTopOld=l}}]),e}();y.defaults={elements:".fade",class:"in",on:"scroll resize",min:0,max:1/0,distance:.2,delayOn:!1,delayOff:!1},window.XtFade=y,i.XtFade=y},{"./xtend-utils":1}]},{},[2]);
//# sourceMappingURL=xtend.js.map
