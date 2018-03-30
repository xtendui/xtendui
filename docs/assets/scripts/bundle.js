(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _xtend = require('../../../scripts/xtend.js');

var _xtend2 = _interopRequireDefault(_xtend);

var _xtendUtils = require('../../../scripts/xtend-utils.js');

var _xtendUtils2 = _interopRequireDefault(_xtendUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//////////////////////
// imports
//////////////////////

console.log('theme loaded');

// init

var toggles = document.querySelectorAll('[data-xt-toggle]');
Array.prototype.forEach.call(toggles, function (toggle, i) {
  var xtend = new _xtend2.default(toggle, {
    someCustomOption: 'Plugin was loaded vanilla style!'
  });
  xtend.doSomething();
});

// test utils

console.log(_xtendUtils2.default.getElementIndex(toggles));

},{"../../../scripts/xtend-utils.js":2,"../../../scripts/xtend.js":3}],2:[function(require,module,exports){
(function (global){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! xtend v0.0.14 (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

(function (root, factory) {
  var pluginName = 'XtUtil';
  if (typeof define === 'function' && define.amd) {
    define([], factory(pluginName));
  } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
    module.exports = factory(pluginName);
  } else {
    root[pluginName] = factory(pluginName);
  }
})(typeof global !== "undefined" ? global : undefined.window || undefined.global, function (root) {
  'use strict';

  //////////////////////
  // Constructor
  //////////////////////

  var XtUtil = {};

  //////////////////////
  // Methods
  //////////////////////

  /**
   * Merge defaults with user options
   * @private
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
   * @private
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
    while (node = node.previousElementSibling) {
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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],3:[function(require,module,exports){
(function (global){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*! xtend v0.0.14 (https://getxtend.com/)
                                                                                                                                                                                                                                                                              @copyright (c) 2017 - 2018 Riccardo Caroli
                                                                                                                                                                                                                                                                              @license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

var _xtendUtils = require('./xtend-utils.js');

var _xtendUtils2 = _interopRequireDefault(_xtendUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function (root, factory) {
  var pluginName = 'Xt';
  if (typeof define === 'function' && define.amd) {
    define([], factory(pluginName));
  } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
    module.exports = factory(pluginName);
  } else {
    root[pluginName] = factory(pluginName);
  }
})(typeof global !== "undefined" ? global : undefined.window || undefined.global, function (root) {
  'use strict';

  //////////////////////
  // defaults
  //////////////////////

  var defaults = {
    classes: ['active'],
    someCustomOption: 'foo'
  };

  //////////////////////
  // Constructor
  //////////////////////

  /**
   * Plugin Object
   * @param {Object} options User options
   * @constructor
   */
  function Xt(element, options) {
    this.element = element;
    this.options = _xtendUtils2.default.extend(defaults, options || {}); // js options
    this.options = _xtendUtils2.default.extend(this.options, JSON.parse(this.element.getAttribute('data-xt-toggle')) || {}); // markup options
    // options
    this.group = this.element;
    if (this.options.class) {
      this.options.classes.push(this.options.class);
    }
    // init
    this.scope();
    this.events();
  }

  //////////////////////
  // Methods
  //////////////////////

  Xt.prototype = {

    /**
     * scope
     */
    scope: function scope() {
      var options = this.options;
      // els
      if (options.elements) {
        if (options.elements.indexOf('#') !== -1) {
          this.elements = document.querySelectorAll(options.elements); //.filter(':parents(.xt-ignore)');
        } else {
          this.elements = this.group.querySelectorAll(options.elements); //.filter(':parents(.xt-ignore)');
        }
      }
      if (!this.elements) {
        this.elements = this.group;
      }
      // trgs
      if (options.targets) {
        this.targets = document.querySelectorAll(options.targets);
      }
      // 1 object array
      if (!this.elements.length) {
        this.elements = [this.elements];
      }
      if (!this.targets.length) {
        this.targets = [this.elements];
      }
    },

    /**
     * Init
     */
    init: function init() {},

    /**
     * Events
     */
    events: function events() {
      var self = this;
      var options = this.options;
      var on = options.on || 'click';
      var off = options.off || null;
      _xtendUtils2.default.forEach(this.elements, function (element, i) {
        if (on) {
          element.addEventListener(on, function (e) {
            var index = _xtendUtils2.default.getElementIndex(this);
            if (!this.classList.contains('active')) {
              var _classList, _self$targets$index$c;

              (_classList = this.classList).add.apply(_classList, _toConsumableArray(options.classes));
              (_self$targets$index$c = self.targets[index].classList).add.apply(_self$targets$index$c, _toConsumableArray(options.classes));
            } else {
              var _classList2, _self$targets$index$c2;

              (_classList2 = this.classList).remove.apply(_classList2, _toConsumableArray(options.classes));
              (_self$targets$index$c2 = self.targets[index].classList).remove.apply(_self$targets$index$c2, _toConsumableArray(options.classes));
            }
          });
        }
        if (off) {
          element.addEventListener(off, function (e) {
            var index = _xtendUtils2.default.getElementIndex(this);
            if (this.classList.contains('active')) {
              var _classList3, _self$targets$index$c3;

              (_classList3 = this.classList).remove.apply(_classList3, _toConsumableArray(options.classes));
              (_self$targets$index$c3 = self.targets[index].classList).remove.apply(_self$targets$index$c3, _toConsumableArray(options.classes));
            }
          });
        }
      });
    },

    /**
     * doSomething
     */
    doSomething: function doSomething() {
      console.log(this.options.someCustomOption);
    }

  };

  return Xt;
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./xtend-utils.js":2}]},{},[1])

