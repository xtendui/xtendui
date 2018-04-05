(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*! xtend v0.0.14 (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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
  // xt
  /*
  document.querySelectorAll('[data-xt]').forEach(function (el, i) {
    new Xt(el, {});
  });
  */
  // xt-toggle
  document.querySelectorAll('[data-xt-toggle]').forEach(function (el, i) {
    new _xtend2.default(el, {
      elements: ':scope > .btn',
      targets: '[class^="toggle-"], [class*=" toggle-"]'
    });
  });
};

/**
 * request animation frame
 * @param {Function} Function for animation frame
 * @returns {Number} AnimationFrame id
 * USAGE: var animationFrame = XtUtil.requestAnimationFrame.call(window, function () {});
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
  return 'unique-id-' + XtUtil.uid++;
};

/**
 * Merge objects
 * @param {Array} arr Array of objects to merge
 * @returns {Object} Merged object
 */
XtUtil.merge = function (arr) {
  var final = {};
  arr.forEach(function (obj, i) {
    Object.entries(obj).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      return final[key] = value;
    });
  });
  return final;
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
 * @param {String} query Query parents
 * @return {Element} Parents elements by query
 */
XtUtil.parents = function (element, query) {
  var parents = [];
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
  var index = 0;
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
  var firstChar = selector.charAt(0);
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
// Public APIs
//////////////////////

exports.default = XtUtil;

//////////////////////
// Scope polyfill (https://stackoverflow.com/questions/6481612/queryselector-search-immediate-children)
// USAGE : querySelectorAll(':scope > .selector');
//////////////////////

(function (doc, proto) {
  try {
    // check if browser supports :scope natively
    doc.querySelector(':scope body');
  } catch (err) {
    // polyfill native methods if it doesn't
    ['querySelector', 'querySelectorAll'].forEach(function (method) {
      var nativ = proto[method];
      proto[method] = function (selectors) {
        if (/(^|,)\s*:scope/.test(selectors)) {
          // only if selectors contains :scope
          var id = this.id; // remember current element id
          this.id = 'ID_' + Date.now(); // assign new unique id
          selectors = selectors.replace(/((^|,)\s*):scope/g, '$1#' + this.id); // replace :scope with #ID
          var result = doc[method](selectors);
          this.id = id; // restore previous id
          return result;
        } else {
          return nativ.call(this, selectors); // use native code for other selectors
        }
      };
    });
  }
})(window.document, Element.prototype);

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
function Xt(object, jsOptions) {
  this.object = object;
  // js options
  this.options = _xtendUtils2.default.merge([defaults, jsOptions || {}]);
  // markup options
  var markupOptions = this.object.getAttribute('data-xt-toggle');
  this.options = _xtendUtils2.default.merge([this.options, markupOptions ? JSON.parse(markupOptions) : {}]);
  // classes
  if (this.options.class) {
    this.options.classes = [].concat(_toConsumableArray(this.options.classes), _toConsumableArray(this.options.class.split(' ')));
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
   * setup namespace, container and options
   */
  initSetup: function initSetup() {
    var options = this.options;
    // setup (based on xtend mode)
    if (options.targets && options.targets.indexOf('#') !== -1) {
      // xtend document mode
      this.container = document;
      options.max = Infinity;
      this.namespace = options.targets.toString() + '-' + options.classes.toString();
    } else {
      // xtend unique mode
      this.container = this.object;
      this.namespace = _xtendUtils2.default.getUniqueID();
    }
    // final namespace
    this.namespace = this.namespace.replace(/\W+/g, '');
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
      this.elements = _xtendUtils2.default.arrSingle(this.container.querySelectorAll(options.elements)); //.filter(':parents(.xt-ignore)');
    }
    if (!this.elements.length) {
      this.elements = _xtendUtils2.default.arrSingle(this.object);
      // @FIX on next frame set all elements querying the namespace
      _xtendUtils2.default.requestAnimationFrame.call(window, function () {
        self.elements = _xtendUtils2.default.arrSingle(document.querySelectorAll('[data-xt-namespace=' + self.namespace + ']'));
      });
    }
    // targets
    if (options.targets) {
      var arr = Array.from(this.container.querySelectorAll(options.targets));
      arr = arr.filter(
      // filter out nested options.targets
      function (x) {
        return !_xtendUtils2.default.parents(x, options.targets).length;
      });
      this.targets = _xtendUtils2.default.arrSingle(arr);
    }
    // @FIX set namespace for next frame
    this.elements.forEach(function (el, i) {
      el.setAttribute('data-xt-namespace', self.namespace);
    });
    // currents
    _xtendUtils2.default.requestAnimationFrame.call(window, function () {
      if (self.elements.length) {
        // activate defaults.class
        self.elements.forEach(function (el, i) {
          var _el$classList;

          if ((_el$classList = el.classList).contains.apply(_el$classList, _toConsumableArray(defaults.classes))) {
            self.eventOn(el);
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
    this.elements.forEach(function (el, i) {
      if (options.on) {
        el.addEventListener(options.on, function (e) {
          self.eventOn(this);
        });
      }
      if (options.off) {
        el.addEventListener(options.off, function (e) {
          self.eventOff(this);
        });
      }
    });
  },

  //////////////////////
  // Utils Methods
  //////////////////////

  /**
   * choose which elements to activate/deactivate (based on xtend mode and containers)
   * @param {Element} element Element that triggered interaction
   * @returns {Object} object.all and object.single
   */
  getElements: function getElements(element) {
    if (!this.elements.length) {
      return { all: null, single: null };
    }
    if (this.container === document) {
      // when container is document choose all elements
      return { all: this.elements, single: this.elements };
    }
    // choose element by group
    var group = element.getAttribute('data-group');
    if (group) {
      // all group elements if group
      var groupElements = Array.from(this.elements).filter(function (x) {
        return x.getAttribute('data-group') === group;
      });
      var final = _xtendUtils2.default.arrSingle(groupElements);
      return { all: final, single: final[0] };
    } else {
      // element if not group
      var final = element;
      return { all: _xtendUtils2.default.arrSingle(final), single: final };
    }
  },

  /**
   * choose which targets to activate/deactivate (based on xtend mode and containers)
   * @param {Element} element Element that triggered interaction
   * @returns {Array}
   */
  getTargets: function getTargets(element) {
    if (!this.targets.length) {
      return null;
    }
    if (this.container === document) {
      // when container is document choose all targets
      return this.targets;
    }
    // choose only target by group
    var group = element.getAttribute('data-group');
    var groupElements = Array.from(this.elements).filter(function (x) {
      return x.getAttribute('data-group') === group;
    });
    var groupTargets = Array.from(this.targets).filter(function (x) {
      return x.getAttribute('data-group') === group;
    });
    if (group) {
      // all group targets if group
      var final = groupTargets;
      return _xtendUtils2.default.arrSingle(final);
    } else {
      // not group targets by index if not group
      var index = groupElements.findIndex(function (x) {
        return x === element;
      });
      var final = groupTargets[index];
      return _xtendUtils2.default.arrSingle(final);
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
    var arr = _xtendUtils2.default.currents[this.namespace];
    arr.push(element);
  },

  /**
   * remove currents based on namespace (so shared between Xt objects)
   * @param {Element} element To be removed
   */
  removeCurrent: function removeCurrent(element) {
    _xtendUtils2.default.currents[this.namespace] = _xtendUtils2.default.currents[this.namespace].filter(function (x) {
      return x !== element;
    });
  },

  //////////////////////
  // Event Methods
  //////////////////////

  /**
   * element on
   * @param {Element} element To be activated
   */
  eventOn: function eventOn(element) {
    var _element$classList;

    var options = this.options;
    // activate or deactivate
    if (!(_element$classList = element.classList).contains.apply(_element$classList, _toConsumableArray(defaults.classes))) {
      var fElements = this.getElements(element);
      this.addCurrent(fElements.single);
      this.activationOn(fElements.all);
      var targets = this.getTargets(element);
      this.activationOn(targets);
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
   * element off
   * @param {Element} element To be deactivated
   */
  eventOff: function eventOff(element) {
    var _element$classList2;

    var options = this.options;
    // if currents < min
    var todo = options.min - this.getCurrents().length;
    if (!todo) {
      return;
    }
    // deactivate
    if ((_element$classList2 = element.classList).contains.apply(_element$classList2, _toConsumableArray(defaults.classes))) {
      var fElements = this.getElements(element);
      this.removeCurrent(fElements.single);
      this.activationOff(fElements.all);
      var targets = this.getTargets(element);
      this.activationOff(targets);
    }
  },

  //////////////////////
  // Activation Methods
  //////////////////////

  /**
   * element activation
   * @param {Element} element To be activated
   */
  activationOn: function activationOn(elements) {
    var self = this;
    var options = this.options;
    // activate
    elements.forEach(function (el, i) {
      var _el$classList2;

      (_el$classList2 = el.classList).add.apply(_el$classList2, _toConsumableArray(options.classes));
      el.classList.remove('out');
      self.activationOffClear(el);
      // specials
      self.collapseOn(el);
    });
  },

  /**
   * element deactivation
   * @param {Element} element To be deactivated
   */
  activationOff: function activationOff(elements) {
    var self = this;
    var options = this.options;
    // deactivate
    elements.forEach(function (el, i) {
      var _el$classList3;

      (_el$classList3 = el.classList).remove.apply(_el$classList3, _toConsumableArray(options.classes));
      el.classList.add('out');
      self.activationOffAnimate(el);
      // specials
      self.collapseOff(el);
    });
  },

  /**
   * element out animation
   * @param {Element} element To be animated
   */
  activationOffAnimate: function activationOffAnimate(el) {
    this.activationOffClear(el);
    // timing
    var timing = options.timing;
    var transition = parseFloat(getComputedStyle(el)['transitionDuration']);
    var animation = parseFloat(getComputedStyle(el)['animationDuration']);
    if (transition || animation) {
      timing = Math.max(transition, animation);
    }
    // delay
    if (!timing) {
      el.classList.remove('out');
    } else {
      timing = timing * 1000;
      var timeout = setTimeout(function (el) {
        el.classList.remove('out');
      }, timing, el);
      el.setAttribute('xt-out-timeout', timeout);
    }
  },

  /**
   * clear activationOffAnimate
   * @param {Element} element
   */
  activationOffClear: function activationOffClear(el) {
    clearTimeout(parseFloat(el.getAttribute('xt-out-timeout')));
  },

  //////////////////////
  // Special Methods
  //////////////////////

  /**
   *
   * @param {Element} element
   */
  collapseOn: function collapseOn(el) {
    if (el.classList.contains('collapse-height')) {
      el.classList.add('no-transition');
      el.style.height = 'auto';
      el.style.paddingTop = '';
      el.style.paddingBottom = '';
      var h = el.clientHeight + 'px';
      var pt = el.style.paddingTop;
      var pb = el.style.paddingBottom;
      _xtendUtils2.default.requestAnimationFrame.call(window, function () {
        el.style.height = '0';
        el.style.paddingTop = '0';
        el.style.paddingBottom = '0';
        _xtendUtils2.default.requestAnimationFrame.call(window, function () {
          el.classList.remove('no-transition');
          el.style.height = h;
          el.style.paddingTop = pt;
          el.style.paddingBottom = pb;
        });
      });
    }
    if (el.classList.contains('collapse-width')) {
      el.style.width = 'auto';
      el.style.paddingLeft = '';
      el.style.paddingRight = '';
      var w = el.clientHeight + 'px';
      var pl = el.style.paddingLeft;
      var pr = el.style.paddingRight;
      _xtendUtils2.default.requestAnimationFrame.call(window, function () {
        el.style.width = '0';
        el.style.paddingLeft = '0';
        el.style.paddingRight = '0';
        _xtendUtils2.default.requestAnimationFrame.call(window, function () {
          el.classList.remove('no-transition');
          el.style.width = w;
          el.style.paddingLeft = pl;
          el.style.paddingRight = pr;
        });
      });
    }
  },

  /**
   *
   * @param {Element} element
   */
  collapseOff: function collapseOff(el) {
    if (el.classList.contains('collapse-height')) {
      el.style.height = '0';
      el.style.paddingTop = '0';
      el.style.paddingBottom = '0';
    }
    if (el.classList.contains('collapse-width')) {
      el.style.width = '0';
      el.style.paddingLeft = '0';
      el.style.paddingRight = '0';
    }
  }

};

//////////////////////
// Public APIs
//////////////////////

exports.default = Xt;

},{"./xtend-utils":1}]},{},[2])

