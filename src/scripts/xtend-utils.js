/*! xtend v0.1.2 (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

'use strict';

import {XtToggle, XtScroll} from './xtend';

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
XtUtil.initAll = function () {
  // xt-toggle
  for (let el of document.querySelectorAll('[data-xt-toggle]')) {
    new XtToggle(el);
  }
  // xt-scroll
  for (let el of document.querySelectorAll('[data-xt-scroll]')) {
    new XtScroll(el);
  }
};

/**
 * request animation frame
 * @param {Function} Function for animation frame
 * @returns {Number} AnimationFrame id
 * USAGE: let animationFrame = XtUtil.requestAnimationFrame.call(window, function () {});
 */
XtUtil.requestAnimationFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
}();

/**
 * cancel animation frame
 * @param {Number} id AnimationFrame id
 * USAGE: XtUtil.cancelAnimationFrame.call(window, animationFrame);
 */
XtUtil.cancelAnimationFrame = function () {
  return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function (callback) {
    window.clearTimeout(id);
  };
}();

/**
 * Get unique id
 * @returns {String} Unique id
 */
XtUtil.getUniqueID = function () {
  XtUtil.uid = XtUtil.uid !== undefined ? XtUtil.uid : 0;
  return 'unique-id-' + (XtUtil.uid++);
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
XtUtil.arrSingle = function (single) {
  if (single.length === undefined) {
    let arr = new Array(1);
    arr[0] = single;
    return arr;
  } else {
    return single;
  }
};

/**
 * Create DOM element from html string
 * @param {String} str Html string (only 1 root html tag)
 * @return {Element} DOM element
 */
XtUtil.createElement = function (str) {
  let div = document.createElement('div');
  div.innerHTML = str.trim();
  return div.firstChild;
};

/**
 * Query element's parents
 * @param {Element} element Child element
 * @param {String} query Query parents
 * @return {Element} Parents elements by query
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
 * @param {Element} node Element to check the index of
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
 * Get the closest matching element up the DOM tree
 * @param {Element} element Starting element
 * @param {String} selector Selector to match against (class, ID, or data attribute)
 * @return {Boolean|Element} Returns false if not match found
 */
/*
XtUtil.getClosest = function (element, selector) {
  let firstChar = selector.charAt(0);
  for (; element && element !== document; element = element.parentNode) {
    if (firstChar === '.') {
      if (element.classList.contains(selector.substr(1))) {
        return element;
      }
    } else if (firstChar === '#') {
      if (element.id === selector.substr(1)) {
        return element;
      }
    } else if (firstChar === '[') {
      if (element.hasAttribute(selector.substr(1, selector.length - 2))) {
        return element;
      }
    }
  }
  return false;
};
*/

//////////////////////
// api
//////////////////////

export default XtUtil;

//////////////////////
// anim-load-fix
//////////////////////

setTimeout(function () {
  document.documentElement.classList.remove('anim-load-fix');
}, 500);

//////////////////////
// scope polyfill (https://stackoverflow.com/questions/6481612/queryselector-search-immediate-children)
// USAGE : querySelectorAll(':scope > .selector');
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
