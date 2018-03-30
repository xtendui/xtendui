/*! xtend v0.0.14 (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

(function (root, factory) {
  var pluginName = 'XtUtil';
  if (typeof define === 'function' && define.amd) {
    define([], factory(root));
  } else if (typeof exports === 'object') {
    module.exports = factory(root);
  } else {
    root[pluginName] = factory(root);
  }
})(typeof global !== "undefined" ? global : this.window || this.global, function (root) {

  'use strict';

  var window = root;

  //////////////////////
  // Constructor
  //////////////////////

  var XtUtil = {};

  //////////////////////
  // Methods
  //////////////////////

  XtUtil.uid = 0;

  /**
   * requestAnimationFrame
   */
  XtUtil.requestAnimationFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  }();

  /**
   * cancelAnimationFrame
   */
  XtUtil.cancelAnimationFrame = function () {
    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function (callback) {
      window.clearTimeout(id);
    };
  }();

  /**
   * Get unique id
   * @param {String} prefix Text to prepend
   * @param {String} suffix Text to append
   * @returns {String} Unique id
   */
  XtUtil.getUniqueID = function (prefix, suffix) {
    return prefix + '-' + (XtUtil.uid++) + '-' + suffix;
  };

  /**
   * Make an array when element is only one
   * @param {Object|Array} element
   * @returns {Array}
   */
  XtUtil.arrSingle = function (single) {
    if (!single.length) {
      var arr = new Array(1);
      arr[0] = single;
      return arr;
    } else {
      return single;
    }
  };

  /**
   * Merge defaults with user options
   * @param {Object} defaults Default settings
   * @param {Object} options User options
   * @returns {Object} Merged values of defaults and options
   */
  XtUtil.extend = function (defaults, options) {
    var extended = {};
    XtUtil.forEach(defaults, function (value, prop) {
      extended[prop] = defaults[prop];
    });
    XtUtil.forEach(options, function (value, prop) {
      extended[prop] = options[prop];
    });
    return extended;
  };

  /**
   * A simple forEach() implementation for Arrays, Objects and NodeLists
   * @param {Array|Object|NodeList} collection Collection of items to iterate
   * @param {Function} callback Callback function for each iteration
   * @param {Array|Object|NodeList} scope Object/NodeList/Array that forEach is iterating over (aka `this`)
   */
  XtUtil.forEach = function (collection, callback, scope) {
    if (Object.prototype.toString.call(collection) === '[object Object]') {
      for (var prop in collection) {
        if (Object.prototype.hasOwnProperty.call(collection, prop)) {
          callback.call(scope, collection[prop], prop, collection);
        }
      }
    } else {
      for (var i = 0, len = collection.length; i < len; i++) {
        callback.call(scope, collection[i], i, collection);
      }
    }
  };

  /**
   * Get element index
   * @param {Element} node Element to check the index of
   * @return {Number} Element's index
   */
  XtUtil.getElementIndex = function (node) {
    var index = 0;
    while ((node = node.previousElementSibling)) {
      index++;
    }
    return index;
  };

  /**
   * Get the closest matching element up the DOM tree
   * @param {Element} elem Starting element
   * @param {String} selector Selector to match against (class, ID, or data attribute)
   * @return {Boolean|Element} Returns false if not match found
   */
  XtUtil.getClosest = function (elem, selector) {
    var firstChar = selector.charAt(0);
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (firstChar === '.') {
        if (elem.classList.contains(selector.substr(1))) {
          return elem;
        }
      } else if (firstChar === '#') {
        if (elem.id === selector.substr(1)) {
          return elem;
        }
      } else if (firstChar === '[') {
        if (elem.hasAttribute(selector.substr(1, selector.length - 2))) {
          return elem;
        }
      }
    }
    return false;
  };

  //////////////////////
  // Public APIs
  //////////////////////

  return XtUtil;

});
