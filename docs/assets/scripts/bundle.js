(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _xtendUtils = require('../../../scripts/xtend-utils');

var _xtendUtils2 = _interopRequireDefault(_xtendUtils);

var _xtend = require('../../../scripts/xtend');

var _xtend2 = _interopRequireDefault(_xtend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//////////////////////
// docs
//////////////////////

// highlight

var elements = document.querySelectorAll('pre code');
elements.forEach(function (element, i) {
  element.innerHTML = element.innerHTML.replace(/^\s+|\s+$/g, ''); // remove newline at start and end
  window.hljs.highlightBlock(element);
});

// .make-line

var elements = document.querySelectorAll('.site-article > h2, .site-article > h3');
elements.forEach(function (element, i) {
  element.classList.add('make-line');
});
var elements = document.querySelectorAll('.make-line');
elements.forEach(function (element, i) {
  element.innerHTML = '<span class="line">' + element.innerHTML + '</div>';
  element.innerHTML = '<span class="line-container">' + element.innerHTML + '</div>';
});

// .make-anchor

var elements = document.querySelectorAll('.site-article > h2, .site-article > h3');
elements.forEach(function (element, i) {
  element.classList.add('make-line');
  var id = element.textContent.replace(/\s+/g, '-').toLowerCase();
  element.setAttribute('id', id);
  element.innerHTML = '<a href="#' + id + '">' + element.innerHTML + '</a>';
  element.classList.add('make-anchor');
  var append = _xtendUtils2.default.createElement('<span class="site-article-anchor"><div class="btn"><span class="icon-link" aria-hidden="true"></span></div></span>');
  element.append(append);
});

// .site-aside-text

var elements = document.querySelectorAll('.site-aside-text > .btn:not(.different)');
elements.forEach(function (element, i) {
  var container = _xtendUtils2.default.parents(element, '.site-aside-text')[0];
  var els = document.querySelectorAll('.site-article > h2');
  els.forEach(function (el, i) {
    var append = _xtendUtils2.default.createElement('<a href="#' + el.getAttribute('id') + '" class="btn btn-secondary-alt btn-small site-aside-sub">' + el.textContent + '</a>');
    container.append(append);
    var append = _xtendUtils2.default.createElement('<div class="site-aside-subsub"></div>');
    container.append(append);
  });
  var els = document.querySelectorAll('.site-article > h3');
  els.forEach(function (el, i) {
    var append = _xtendUtils2.default.createElement('<a href="#' + el.getAttribute('id') + '" class="btn btn-secondary-alt btn-tiny">' + el.textContent + '</a>');
    var item = container.querySelectorAll('.site-aside-subsub');
    item[item.length - 1].append(append);
  });
});

// activateAsideScroll

var activateAsideScroll = function activateAsideScroll(elements, scrollTop) {
  elements.forEach(function (element, i) {
    var href = element.getAttribute('href');
    if (href) {
      var target = document.querySelectorAll(href);
      var rect = target[0].getBoundingClientRect();
      var top = rect.top;
      var bottom = Infinity;
      if (scrollTop >= top && scrollTop < bottom) {
        if (!element.classList.contains('active')) {
          elements.forEach(function (el, i) {
            el.classList.remove('active');
          });
          element.classList.add('active');
        }
      } else {
        if (element.classList.contains('active')) {
          element.classList.remove('active');
        }
      }
    }
  });
};
window.addEventListener('scroll', function (e) {
  var scrollTop = document.documentElement.scrollTop;
  var sub = document.querySelectorAll('.btn.site-aside-sub'); // .filter(':parents(.xt-ignore)');
  activateAsideScroll(sub, scrollTop);
  var subsub = document.querySelectorAll('.btn.site-aside-sub.active + .site-aside-subsub .btn'); // .filter(':parents(.xt-ignore)');
  activateAsideScroll(subsub, scrollTop);
});

//////////////////////
// demos
//////////////////////

// populateDemo

var populateDemo = function populateDemo(container, i) {
  var items = container.querySelectorAll('.demo-item');
  // multiple elements
  var prepend = _xtendUtils2.default.createElement('<div class="demo-tabs"><div class="demo-tabs-left"></div><div class="demo-tabs-right"></div></div>');
  container.prepend(prepend);
  var append = _xtendUtils2.default.createElement('<button type="button" class="btn btn-secondary-alt btn-fullscreen" data-toggle="tooltip" data-placement="top" title="Open fullscreen"><span class="icon-enlarge2"></span></button>');
  container.querySelectorAll('.demo-tabs-right')[0].append(append);
  // single element and no demo tabs
  if (items.length === 1) {
    // && !$items.hasClass('demo-preview') && !$items.attr('data-iframe')
    items[0].style.display = 'block';
    container.querySelectorAll('.demo-tabs')[0].style.display = 'none';
  }
  // loop items
  items.forEach(function (item, k) {
    // populate tabs
    var name = item.getAttribute('data-name');
    if (items.length === 1) {
      if (!item.getAttribute('data-name')) {
        name = 'demo';
      }
    } else {
      if (!item.getAttribute('data-name')) {
        name = 'demo #' + k;
      }
    }
    var appendBtn = _xtendUtils2.default.createElement('<button type="button" class="btn btn-secondary-alt">' + name + '</button>');
    var btn = container.querySelectorAll('.demo-tabs-left')[0].append(appendBtn);
    btn = container.querySelectorAll('.demo-tabs-left .btn')[k];
    /*
    // iframe append
    if ($item.attr('data-iframe')) {
      $item.append('<iframe data-src="' + $item.attr('data-iframe') + '" frameborder="0"></iframe>');
    }
    */
    // tabs
    var id = 'iframe' + i + k;
    var appendItem = _xtendUtils2.default.createElement('<div class="demo-code"><div class="demo-code-tabs"><div class="demo-code-tabs-left"></div><div class="demo-code-tabs-right"><button type="button" class="btn btn-secondary-alt btn-clipboard" data-toggle="tooltip" data-placement="top" title="Copy to clipboard">copy</button></div></div><div class="demo-code-body"></div></div>');
    item.append(appendItem);
    // https://github.com/zenorocha/clipboard.js/
    var clipboard = new Clipboard('.btn-clipboard', {
      target: function target(trigger) {
        return _xtendUtils2.default.parents(trigger, '.demo')[0].querySelectorAll('.demo-item.active .demo-code-body-item.active .hljs')[0];
      }
    });
    clipboard.on('success', function (e) {
      e.clearSelection();
      //$(e.trigger).attr('data-original-title', 'Done').tooltip('show');
    });
    clipboard.on('error', function (e) {
      //$(e.trigger).attr('data-original-title', 'Error: copy manually').tooltip('show');
    });
    // inject iframe
    if (item.getAttribute('data-iframe')) {
      /*
      var $iframe = $item.find('> iframe');
      var initIframe = function() {
        if (!$iframe.attr('src')) {
          $item.addClass('demo-iframe');
          $iframe.attr('id', id);
          $iframe.attr('src', $iframe.attr('data-src'));
          $iframe.on('load', function(e){
            populateIframe($item, $iframe, id);
            window.resizeIframe(id);
            $iframe[0].contentWindow.init();
            // .populated fix scroll
            setTimeout( function($item) {
              $item.addClass('populated');
            }, 0, $item);
          });
        }
      };
      if (k === 0) {
        initIframe();
      }
      // iframe resize on show
      $item.on('on', function(e, obj) {
        if (e.target === this) {
          window.resizeIframe(id);
          if (k !== 0) {
            initIframe();
          }
        }
      });
      */
    } else {
      populateInline(item, id);
      // .populated fix scroll
      setTimeout(function (item) {
        item.classList.add('populated');
      }, 0, item);
    }
  });
};

// populateInline
var populateInline = function populateInline(item, id) {
  var elements = item.querySelectorAll('.demo-source');
  elements.forEach(function (element, z) {
    populateSources(item, element, id, z);
    if (!item.classList.contains('demo-preview')) {
      element.style.display = none;
    }
  });
  new _xtend2.default(item, {
    "elements": ".demo-code-tabs-left .btn",
    "targets": ".demo-code-body-item",
    "min": 1
  });
};

/*
window.resizeIframe = function(id) {
  var $iframe = $('#' + id);
  var $target = $iframe.contents().find('#body-inside');
  $target.hide().show(0); // fix scrollbars disappearing
  var h = $target.outerHeight();
  if (h !== $iframe.data('iframeHeight')) {
    $iframe.height(h);
    $iframe.data('iframeHeight', h);
  }
};
*/
/*
// populateIframe
function populateIframe($item, $iframe, id) {
  var html = $('body #body-inside', $iframe[0].contentWindow.document).html();
  var less = $('body less-style', $iframe[0].contentWindow.document).html();
  var css = $('body style[scoped]', $iframe[0].contentWindow.document).html();
  var js = $('body script', $iframe[0].contentWindow.document).html();
  // inject code
  if (html) {
    $iframe.append('<div class="demo-source" data-lang="html">' + html + '</div>');
  }
  if (less) {
    $iframe.append('<div class="demo-source" data-lang="less">' + less + '</div>');
  }
  if (js) {
    $iframe.append('<div class="demo-source" data-lang="js">' + js + '</div>');
  }
  // populate
  var $sources = $item.find('.demo-source');
  $sources.each( function(z) {
    var $source = $(this);
    populateSources($item, $source, id, z);
  });
  $item.xtToggle({"elements": ".demo-code-tabs-left .button", "targets": ".demo-code-body-item", "min": 1});
}
*/

// populateSources

var populateSources = function populateSources(item, element, id, z) {
  var lang = element.getAttribute('data-lang');
  // populate tabs
  var appendCode = _xtendUtils2.default.createElement('<div class="demo-code-body-item"><pre><code></code></pre></div>');
  var codeInside = item.querySelectorAll('.demo-code-body')[0].append(appendCode);
  codeInside = item.querySelectorAll('.demo-code-body .demo-code-body-item')[z].querySelectorAll('pre code')[0];
  var appendBtn = _xtendUtils2.default.createElement('<button type="button" class="btn btn-secondary-alt">' + lang + '</button>');
  var btnInside = item.querySelectorAll('.demo-code-tabs-left')[0].append(appendBtn);
  //btnInside = item.querySelectorAll('.demo-code-tabs-left').querySelectorAll('.btn')[z];
  // format code
  if (!codeInside.classList.contains('hljs')) {
    var text = formatCode(element, lang);
    text = text.replace(/^\s+|\s+$/g, ''); // remove newline at start and end
    codeInside.innerHTML = text;
    codeInside.classList.add(lang);
    window.hljs.highlightBlock(codeInside);
  }
};

// formatCode
function formatCode(source, lang) {
  var text = source.innerHTML;
  if (lang === 'css' || lang === 'js') {
    text = text.replace(/<[^>]*>/g, '');
  }
  if (text.match(/[&<>]/g)) {
    // replace quote entities
    text = text.replace(/&quot;/g, '"');
    // replace entities
    text = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    // replace json quotes
    text = text.replace(/("{)/g, '\'{').replace(/(}")/g, '}\'');
    // replace empty quotes
    text = text.replace(/=""/g, '');
  }
  return text;
}

// init demos

var elements = document.querySelectorAll('.demo');
elements.forEach(function (element, i) {
  populateDemo(element, i);
  // enable fullscreen
  /*
  element.find('.demo-tabs-left .button').on('on', function(e, obj) {
    var $fullscreen = $(this).parents('.demo').find('.button__fullscreen');
    var iframe = $(this).parents('.demo').find('.demo-item.active').attr('data-iframe');
    if (iframe) {
      $fullscreen.css('display', 'block');
      $fullscreen.off('click');
      $fullscreen.on('click', function() {
        window.open(iframe, '_blank');
      });
    }
  });
  */
  // demo tabs
  new _xtend2.default(element, {
    "elements": ".demo-tabs-left .btn",
    "targets": ".demo-item",
    "min": 1
  });
});

//////////////////////
// xtend
//////////////////////

_xtendUtils2.default.initAll();

},{"../../../scripts/xtend":3,"../../../scripts/xtend-utils":2}],2:[function(require,module,exports){
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

},{"./xtend":3}],3:[function(require,module,exports){
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

},{"./xtend-utils":2}]},{},[1])

