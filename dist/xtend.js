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
// Vars
//////////////////////

// Xt currents based on namespace (so shared between Xt objects)

XtUtil.currents = {};

//////////////////////
// Methods
//////////////////////

/**
 * init all data-xt classes
 */
XtUtil.initAll = function () {
  var elements = document.querySelectorAll('[data-xt-toggle]');
  XtUtil.forEach(elements, function (element, i) {
    new _xtend2.default(element);
    //var xt = new Xt(element);
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
  if (single.length === undefined) {
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

/**
 * Create DOM element from html string
 * @param {String} str Html string (only 1 root html tag)
 * @return {Element} DOM element
 */
XtUtil.createElement = function (str) {
  var div = document.createElement('div');
  div.innerHTML = str.trim();
  return div.firstChild;
};

/**
 * Query element's parents
 * @param {Element} element Child element
 * @return {Element} Parents elements by query
 */
XtUtil.parents = function (element, query) {
  var parents = [];
  while (element = element.parentElement.closest(query)) {
    parents.push(element);
  }
  return parents;
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
  on: 'click',
  min: 0,
  max: 1
};

//////////////////////
// Constructor
//////////////////////

/**
 * Plugin Object
 * @param {Element} object Base element
 * @param {Object} options User options
 * @constructor
 */
function Xt(object, options) {
  this.object = object;
  this.options = _xtendUtils2.default.extend(defaults, options || {}); // js options
  this.options = _xtendUtils2.default.extend(this.options, JSON.parse(this.object.getAttribute('data-xt-toggle')) || {}); // markup options
  // classes
  if (this.options.class) {
    this.options.classes.push(this.options.class);
  }
  // init
  this.initSetup();
  this.initScope();
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
   * setup namespace, group and options
   */
  initSetup: function initSetup() {
    var options = this.options;
    // default namespace
    this.namespace = options.targets.toString() + '-' + options.classes.toString();
    // setup (based on xtend mode)
    if (options.targets && options.targets.indexOf('#') !== -1) {
      // xtend document mode
      this.group = document;
      options.max = Infinity;
    } else {
      // xtend unique mode
      this.namespace = _xtendUtils2.default.getUniqueID('xt', this.namespace);
      this.group = this.object;
    }
    // final namespace
    this.namespace = this.namespace.replace('#', '');
    // currents array based on namespace (so shared between Xt objects)
    if (!this.getCurrents()) {
      this.setCurrents([]);
    }
  },

  /**
   * init elements, targets and currents
   */
  initScope: function initScope() {
    var self = this;
    var options = this.options;
    // elements
    if (options.elements) {
      this.elements = _xtendUtils2.default.arrSingle(this.group.querySelectorAll(options.elements)); //.filter(':parents(.xt-ignore)');
    } else {
      this.elements = _xtendUtils2.default.arrSingle(this.object);
      // @FIX on next frame set all elements querying the namespace
      _xtendUtils2.default.requestAnimationFrame.call(window, function () {
        self.elements = _xtendUtils2.default.arrSingle(document.querySelectorAll('[data-xt-namespace=' + self.namespace + ']'));
      });
    }
    // targets
    if (options.targets) {
      this.targets = _xtendUtils2.default.arrSingle(this.group.querySelectorAll(options.targets));
    }
    // @FIX set namespace for next frame
    if (this.elements.length) {
      _xtendUtils2.default.forEach(this.elements, function (element, i) {
        element.setAttribute('data-xt-namespace', self.namespace);
      });
    }
    // currents
    _xtendUtils2.default.requestAnimationFrame.call(window, function () {
      if (self.elements.length) {
        // activate defaults.class
        _xtendUtils2.default.forEach(self.elements, function (element, i) {
          if (element.classList.contains(defaults.class)) {
            var _element$classList;

            (_element$classList = element.classList).remove.apply(_element$classList, _toConsumableArray(options.classes));
            self.setCurrents(element);
            self.eventOn(element);
          }
        });
        // if currents < min
        var todo = options.min - self.getCurrents().length;
        if (todo) {
          for (var i = 0; i < todo; i++) {
            self.eventOn(self.elements[i]);
          }
        }
      }
    });
  },

  /**
   * init events
   */
  initEvents: function initEvents() {
    var self = this;
    var options = this.options;
    // on and off
    _xtendUtils2.default.forEach(this.elements, function (element, i) {
      if (options.on) {
        element.addEventListener(options.on, function (e) {
          self.eventOn(this);
        });
      }
      if (options.off) {
        element.addEventListener(options.off, function (e) {
          self.eventOff(this);
        });
      }
    });
  },

  //////////////////////
  // Utils Methods
  //////////////////////

  /**
   * choose which elements to activate/deactivate (based on xtend mode)
   * @param {Element} elements
   * @param {Element} element
   * @param {Element} group
   * @returns {Element}
   */
  getElements: function getElements(elements, element, group) {
    if (this.group === document) {
      // when group is document choose all elements
      return elements;
    } else if (this.group === this.object) {
      // when group is Xt object choose only element
      return _xtendUtils2.default.arrSingle(element);
    }
  },

  /**
   * get currents based on namespace (so shared between Xt objects)
   * @returns {Element}
   */

  getCurrents: function getCurrents() {
    return _xtendUtils2.default.currents[this.namespace];
  },

  /**
   * set currents based on namespace (so shared between Xt objects)
   * @param {Array} arr
   */

  setCurrents: function setCurrents(arr) {
    _xtendUtils2.default.currents[this.namespace] = arr;
  },

  /**
   * add current based on namespace (so shared between Xt objects)
   * @param {Element} element To be added
   */

  addCurrent: function addCurrent(element) {
    _xtendUtils2.default.currents[this.namespace].push(element);
  },

  /**
   * remove currents based on namespace (so shared between Xt objects)
   * @param {Element} element To be removed
   */

  removeCurrent: function removeCurrent(element) {
    _xtendUtils2.default.currents[this.namespace] = _xtendUtils2.default.currents[this.namespace].filter(function (current) {
      return current !== element;
    });
  },

  //////////////////////
  // Event Methods
  //////////////////////

  /**
   * element activation
   * @param {Element} element To be activated
   */
  eventOn: function eventOn(element) {
    var _element$classList2;

    var self = this;
    var options = this.options;
    // vars
    var index = _xtendUtils2.default.getElementIndex(element);
    var elements = this.getElements(this.elements, element, this.group);
    // activate or deactivate
    if (!(_element$classList2 = element.classList).contains.apply(_element$classList2, _toConsumableArray(defaults.classes))) {
      var _targets$index$classL;

      _xtendUtils2.default.forEach(elements, function (element, i) {
        var _element$classList3;

        (_element$classList3 = element.classList).add.apply(_element$classList3, _toConsumableArray(options.classes));
        self.addCurrent(element);
      });
      (_targets$index$classL = this.targets[index].classList).add.apply(_targets$index$classL, _toConsumableArray(options.classes));
    } else {
      this.eventOff(element);
    }
    // if currents > max
    var currents = this.getCurrents();
    if (currents.length > options.max) {
      this.eventOff(currents[0]);
    }
  },

  /**
   * element deactivation
   * @param {Element} element To be deactivated
   */
  eventOff: function eventOff(element) {
    var _element$classList4;

    var self = this;
    var options = this.options;
    // vars
    var index = _xtendUtils2.default.getElementIndex(element);
    var elements = this.getElements(this.elements, _xtendUtils2.default.arrSingle(element), this.group);
    // if currents < min
    var todo = options.min - this.getCurrents().length;
    if (!todo) {
      return;
    }
    // deactivate
    if ((_element$classList4 = element.classList).contains.apply(_element$classList4, _toConsumableArray(defaults.classes))) {
      var _targets$index$classL2;

      _xtendUtils2.default.forEach(elements, function (element, i) {
        var _element$classList5;

        (_element$classList5 = element.classList).remove.apply(_element$classList5, _toConsumableArray(options.classes));
        self.removeCurrent(element);
      });
      (_targets$index$classL2 = this.targets[index].classList).remove.apply(_targets$index$classL2, _toConsumableArray(options.classes));
    }
  }

};

//////////////////////
// Public APIs
//////////////////////

exports.default = Xt;

},{"./xtend-utils":1}]},{},[2])

