/*! xtend (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

'use strict';

import {XtToggle, XtDrop, XtOverlay, XtFade, XtSticky} from './xtend';

//////////////////////
// constructor
//////////////////////

const XtUtil = {};

//////////////////////
// properties
//////////////////////

// Xt currents based on namespace (so shared between Xt objects)

XtUtil.currents = {};

//////////////////////
// methods
//////////////////////

/**
 * init all data-xt classes
 */
XtUtil.initAll = function (container = document) {
  // xt-toggle
  for (let el of container.querySelectorAll('[data-xt-toggle]')) {
    new XtToggle(el);
  }
  // xt-drop
  for (let el of container.querySelectorAll('[data-xt-drop]')) {
    new XtDrop(el);
  }
  // xt-overlay
  for (let el of container.querySelectorAll('[data-xt-overlay]')) {
    new XtOverlay(el);
  }
  // xt-fade
  for (let el of container.querySelectorAll('[data-xt-fade]')) {
    new XtFade(el);
  }
  // xt-scroll
  for (let el of container.querySelectorAll('[data-xt-sticky]')) {
    new XtSticky(el);
  }
};

/**
 * request animation frame
 * @returns {Number} animationFrameID
 * USAGE: let animationFrame = XtUtil.requestAnimationFrame.call(window, function () {});
 */
XtUtil.requestAnimationFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
}();

/**
 * cancel animation frame
 * USAGE: XtUtil.cancelAnimationFrame.call(window, animationFrameID);
 */
XtUtil.cancelAnimationFrame = function () {
  return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function (callback) {
    window.clearTimeout(id);
  };
}();

/**
 * Check if event target is inside elements
 * @param {Event} e Event to check target
 * @param {NodeList|Array} targets Elements to check inside
 * @return {Boolean}
 */
XtUtil.checkInside = function (e, targets) {
  let result = false;
  for (let t of targets) {
    if (e.target === t || t.contains(e.target)) {
      result = true;
    }
  }
  return result;
};

/**
 * Check if event target is outside elements
 * @param {Event} e Event to check target
 * @param {NodeList|Array} targets Elements to check Outside
 * @return {Boolean}
 */
XtUtil.checkOutside = function (e, targets) {
  let result = true;
  for (let t of targets) {
    if (e.target === t || t.contains(e.target)) {
      result = false;
    }
  }
  return result;
};

/**
 * Get scrollbar width of document
 * @returns {Number} Scrollbar width
 */
XtUtil.scrollbarWidth = function () {
  // add outer
  let outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
  document.body.appendChild(outer);
  let widthNoScroll = outer.offsetWidth;
  // force scrollbars
  outer.style.overflow = 'scroll';
  // add inner
  let inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);
  let widthWithScroll = inner.offsetWidth;
  // remove
  outer.parentNode.removeChild(outer);
  return widthNoScroll - widthWithScroll;
};

/**
 * Get unique id
 * @returns {String} Unique id
 */
XtUtil.getUniqueID = function () {
  XtUtil.uid = XtUtil.uid !== undefined ? XtUtil.uid : 0;
  return 'unique-id-' + (XtUtil.uid++);
};

/**
 * Get unique number
 * @returns {Number} Unique number
 */
XtUtil.getUniqueNum = function () {
  XtUtil.unumber = XtUtil.unumber !== undefined ? XtUtil.unumber : 0;
  return XtUtil.unumber++;
};

/**
 * Merge objects
 * @param {Array} arr Array of objects to merge
 * @returns {Object} Merged object
 */
XtUtil.merge = function (arr) {
  let final = {};
  for (let obj of arr) {
    for (let [key, value] of Object.entries(obj)) {
      final[key] = value;
    }
  }
  return final;
};

/**
 * Make an array when element is only one
 * @param {Object|Array} element
 * @returns {Array}
 */
XtUtil.arrSingle = function (element) {
  if (element.length === undefined) {
    let arr = new Array(1);
    arr[0] = element;
    return arr;
  } else {
    return element;
  }
};

/**
 * Create DOM element from html string
 * @param {String} str Html string (only 1 root html tag)
 * @return {Node|HTMLElement} DOM element
 */
XtUtil.createElement = function (str) {
  let div = document.createElement('div');
  div.innerHTML = str.trim();
  return div.firstChild;
};

/**
 * Query element's parents
 * @param {Node|HTMLElement} element Child element
 * @param {String} query Query parents
 * @return {Array} Parents elements by query
 */
XtUtil.parents = function (element, query) {
  let parents = [];
  while (element = element.parentElement.closest(query)) {
    parents.push(element);
  }
  return parents;
};

/**
 * Get element index
 * @param {Node|HTMLElement} node Element to check the index of
 * @return {Number} Element's index
 */
/*
XtUtil.getElementIndex = function (node) {
  let index = 0;
  while ((node = node.previousElementSibling)) {
    index++;
  }
  return index;
};
*/

/**
 * Events with namespace
 * element.xtUtilOn('click.namespace', function (e) {});
 * element.xtUtilOff('click.namespace');
 * https://stackoverflow.com/questions/21817397/event-handler-namespace-in-vanilla-javascript
 */
XtUtil.xtUtilOn = function (event, cb, opts) {
  if (!this.namespaces) {
    this.namespaces = {}; // save the namespaces on the DOM element itself
  }
  this.namespaces[event] = cb;
  let options = opts || false;
  this.addEventListener(event.split('.')[0], cb, options);
  return this;
};
XtUtil.xtUtilOff = function (event) {
  if (this.namespaces) {
    this.removeEventListener(event.split('.')[0], this.namespaces[event]);
    delete this.namespaces[event];
  }
  return this;
};

window.xtUtilOn = Element.prototype.xtUtilOn = XtUtil.xtUtilOn;
window.xtUtilOff = Element.prototype.xtUtilOff = XtUtil.xtUtilOff;

//////////////////////
// api
//////////////////////

window.XtUtil = XtUtil;
export {XtUtil};

//////////////////////
// scope polyfill (https://stackoverflow.com/questions/6481612/queryselector-search-immediate-children)
// USAGE: querySelectorAll(':scope > .selector');
//////////////////////

(function (doc, proto) {
  try { // check if browser supports :scope natively
    doc.querySelector(':scope body');
  } catch (err) { // polyfill native methods if it doesn't
    for (let method of ['querySelector', 'querySelectorAll']) {
      let nativ = proto[method];
      proto[method] = function (selectors) {
        if (/(^|,)\s*:scope/.test(selectors)) { // only if selectors contains :scope
          let id = this.id; // remember current element id
          this.id = 'ID_' + Date.now(); // assign new unique id
          selectors = selectors.replace(/((^|,)\s*):scope/g, '$1#' + this.id); // replace :scope with #ID
          let result = doc[method](selectors);
          this.id = id; // restore previous id
          return result;
        } else {
          return nativ.call(this, selectors); // use native code for other selectors
        }
      }
    }
  }
})(window.document, Element.prototype);
