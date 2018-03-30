(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*! xtend v0.0.14 (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xtend = require('./xtend');

var _xtend2 = _interopRequireDefault(_xtend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//////////////////////
// Constructor
//////////////////////

var XtUtil = {};

//////////////////////
// Methods
//////////////////////

/**
 * init all data-xt classes
 */
XtUtil.initAll = function () {
  var toggles = document.querySelectorAll('[data-xt-toggle]');
  XtUtil.forEach(toggles, function (toggle, i) {
    console.log(toggle);
    var xt = new _xtend2.default(toggle);
    //console.log(xt.getElements('test'));
  });
};

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
  XtUtil.uid = XtUtil.uid !== undefined ? XtUtil.uid : 0;
  return prefix + '-' + XtUtil.uid++ + '-' + suffix;
};

/**
 * Make an array when element is only one
 * @param {Object|Array} element
 * @returns {Array}
 */
XtUtil.arrSingle = function (single) {
  if (!single.length && single.value !== undefined) {
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

exports.default = XtUtil;

},{"./xtend":2}],2:[function(require,module,exports){
/*! xtend v0.0.14 (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xtendUtils = require('./xtend-utils');

var _xtendUtils2 = _interopRequireDefault(_xtendUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
  var self = this;
  this.element = element;
  this.options = _xtendUtils2.default.extend(defaults, options || {}); // js options
  this.options = _xtendUtils2.default.extend(this.options, JSON.parse(this.element.getAttribute('data-xt-toggle')) || {}); // markup options
  // classes
  if (this.options.class) {
    this.options.classes.push(this.options.class);
  }
  // init
  this.initSetup();
  this.initEvents();
}

//////////////////////
// Methods
//////////////////////

Xt.prototype = {

  //////////////////////
  // Init Methods
  //////////////////////

  /**
   * init
   */
  init: function init() {},

  /**
   * setup
   */
  initSetup: function initSetup() {
    var self = this;
    var options = this.options;
    // group and namespace
    this.namespace = options.targets.toString() + '-' + options.classes.toString();
    if (options.targets && options.targets.indexOf('#') !== -1) {
      this.group = document;
      /*} else if ($group.attr('id')) {
        settings.uid = $group.attr('id');
      */
    } else {
      this.group = this.element;
      this.namespace = _xtendUtils2.default.getUniqueID('xt', this.namespace);
    }
    this.namespace = this.namespace.split('#').join('');
    // elements
    if (options.elements) {
      this.elements = _xtendUtils2.default.arrSingle(this.group.querySelectorAll(options.elements)); //.filter(':parents(.xt-ignore)');
    } else {
      this.elements = _xtendUtils2.default.arrSingle(this.element);
      // on next frame set all elements querying the namespace
      _xtendUtils2.default.requestAnimationFrame.call(window, function () {
        self.elements = _xtendUtils2.default.arrSingle(document.querySelectorAll('[data-xt-namespace=' + self.namespace + ']'));
      });
    }
    // targets
    if (options.targets) {
      this.targets = _xtendUtils2.default.arrSingle(document.querySelectorAll(options.targets));
    }
    // set namespace for next frame
    if (this.elements.length) {
      _xtendUtils2.default.forEach(this.elements, function (element, i) {
        element.setAttribute('data-xt-namespace', self.namespace);
      });
    }
  },

  /**
   * events
   */
  initEvents: function initEvents() {
    var self = this;
    var options = this.options;
    var on = options.on || 'click';
    var off = options.off || null;
    _xtendUtils2.default.forEach(this.elements, function (element, i) {
      if (on) {
        element.addEventListener(on, function (e) {
          self.eventOn(this);
        });
      }
      if (off) {
        element.addEventListener(off, function (e) {
          self.eventOff(this);
        });
      }
    });
  },

  //////////////////////
  // Utils Methods
  //////////////////////

  /**
   * getElements
   */
  getElements: function getElements(elements, element, group) {
    return elements;
    /* @TODO groups
    var object = this;
    var settings = this.settings;
    var group = this.group;
    var $group = $(this.group);
    // $elements and $el
    if ($elements.is($group)) {
      return $g;
    } else if ($el.is('[data-group]')) {
      // with [data-group]
      var g = $el.attr('data-group');
      return $g.filter('[data-group="' + g + '"]');
    } else {
      if (settings.$targets.has($g)) {
        var index = object.getIndex($elements.not('[data-group]'), $el);
        return $g.not('[data-group]').eq(index);
      } else {
        return $el;
      }
    }
    */
  },

  //////////////////////
  // Event Methods
  //////////////////////

  /**
   * on
   */
  eventOn: function eventOn(element) {
    var options = this.options;
    var index = _xtendUtils2.default.getElementIndex(element);
    var elements = this.getElements(this.elements, element, this.group);
    if (!element.classList.contains('active')) {
      var _targets$index$classL;

      _xtendUtils2.default.forEach(elements, function (element, i) {
        var _element$classList;

        (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(options.classes));
      });
      (_targets$index$classL = this.targets[index].classList).add.apply(_targets$index$classL, _toConsumableArray(options.classes));
    } else {
      var _targets$index$classL2;

      _xtendUtils2.default.forEach(elements, function (element, i) {
        var _element$classList2;

        (_element$classList2 = element.classList).remove.apply(_element$classList2, _toConsumableArray(options.classes));
      });
      (_targets$index$classL2 = this.targets[index].classList).remove.apply(_targets$index$classL2, _toConsumableArray(options.classes));
    }
  },

  /**
   * off
   */
  eventOff: function eventOff(element) {
    var options = this.options;
    var index = _xtendUtils2.default.getElementIndex(element);
    var elements = this.getElements(this.elements, element, this.group);
    if (element.classList.contains('active')) {
      var _targets$index$classL3;

      _xtendUtils2.default.forEach(elements, function (element, i) {
        var _element$classList3;

        (_element$classList3 = element.classList).remove.apply(_element$classList3, _toConsumableArray(options.classes));
      });
      (_targets$index$classL3 = this.targets[index].classList).remove.apply(_targets$index$classL3, _toConsumableArray(options.classes));
    }
  }

};

//////////////////////
// Public APIs
//////////////////////

exports.default = Xt;

},{"./xtend-utils":1}]},{},[2])

