(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _xtendUtils = require('../../../scripts/xtend-utils');

var _xtendUtils2 = _interopRequireDefault(_xtendUtils);

var _xtend = require('../../../scripts/xtend');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//////////////////////
// docs
//////////////////////

// highlight

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = document.querySelectorAll('pre code')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var el = _step.value;

    el.innerHTML = el.innerHTML.replace(/^\s+|\s+$/g, ''); // remove newline at start and end
    window.hljs.highlightBlock(el);
  }

  // .make-line
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = document.querySelectorAll('.site-article > h2, .site-article > h3')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var _el = _step2.value;

    _el.classList.add('make-line');
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  for (var _iterator3 = document.querySelectorAll('.make-line')[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    var _el2 = _step3.value;

    _el2.innerHTML = '<span class="line">' + _el2.innerHTML + '</div>';
    _el2.innerHTML = '<span class="line-container">' + _el2.innerHTML + '</div>';
  }

  // .make-anchor
} catch (err) {
  _didIteratorError3 = true;
  _iteratorError3 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion3 && _iterator3.return) {
      _iterator3.return();
    }
  } finally {
    if (_didIteratorError3) {
      throw _iteratorError3;
    }
  }
}

var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
  for (var _iterator4 = document.querySelectorAll('.site-article > h2, .site-article > h3')[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
    var _el3 = _step4.value;

    _el3.classList.add('make-line');
    var id = _el3.textContent.replace(/\s+/g, '-').toLowerCase();
    _el3.setAttribute('id', id);
    _el3.innerHTML = '<a href="#' + id + '">' + _el3.innerHTML + '</a>';
    _el3.classList.add('make-anchor');
    _el3.append(_xtendUtils2.default.createElement('<span class="site-article-anchor"><div class="btn"><span class="icon-link" aria-hidden="true"></span></div></span>'));
  }

  // .site-aside-text
} catch (err) {
  _didIteratorError4 = true;
  _iteratorError4 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion4 && _iterator4.return) {
      _iterator4.return();
    }
  } finally {
    if (_didIteratorError4) {
      throw _iteratorError4;
    }
  }
}

var _iteratorNormalCompletion5 = true;
var _didIteratorError5 = false;
var _iteratorError5 = undefined;

try {
  for (var _iterator5 = document.querySelectorAll('.site-aside-text > .btn:not(.different)')[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
    var _el4 = _step5.value;

    var container = _xtendUtils2.default.parents(_el4, '.site-aside-text')[0];
    var _iteratorNormalCompletion12 = true;
    var _didIteratorError12 = false;
    var _iteratorError12 = undefined;

    try {
      for (var _iterator12 = document.querySelectorAll('.site-article > h2, .site-article > h3')[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
        var element = _step12.value;

        if (element.tagName === 'H2') {
          container.append(_xtendUtils2.default.createElement('<a href="#' + element.getAttribute('id') + '" class="btn btn-site-aside-sub">' + element.textContent + '</a>'));
          container.append(_xtendUtils2.default.createElement('<div class="site-aside-subsub"></div>'));
        } else if (element.tagName === 'H3') {
          var subs = container.querySelectorAll('.site-aside-subsub');
          subs[subs.length - 1].append(_xtendUtils2.default.createElement('<a href="#' + element.getAttribute('id') + '" class="btn btn-site-aside-subsub">' + element.textContent + '</a>'));
        }
      }
    } catch (err) {
      _didIteratorError12 = true;
      _iteratorError12 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion12 && _iterator12.return) {
          _iterator12.return();
        }
      } finally {
        if (_didIteratorError12) {
          throw _iteratorError12;
        }
      }
    }
  }

  // activateAsideScroll
} catch (err) {
  _didIteratorError5 = true;
  _iteratorError5 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion5 && _iterator5.return) {
      _iterator5.return();
    }
  } finally {
    if (_didIteratorError5) {
      throw _iteratorError5;
    }
  }
}

var activateAsideScroll = function activateAsideScroll(els, scrollTop) {
  var dist = window.innerHeight / 5;
  var _iteratorNormalCompletion6 = true;
  var _didIteratorError6 = false;
  var _iteratorError6 = undefined;

  try {
    for (var _iterator6 = els[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
      var el = _step6.value;

      var href = el.getAttribute('href');
      if (href) {
        var target = document.querySelectorAll(href);
        var rect = target[0].getBoundingClientRect();
        var top = rect.top + scrollTop;
        var bottom = Infinity;
        if (scrollTop >= top - dist && scrollTop < bottom - dist) {
          if (!el.classList.contains('active')) {
            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
              for (var _iterator7 = els[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                var element = _step7.value;

                if (element !== el) {
                  element.classList.remove('active');
                } else {
                  el.classList.add('active');
                }
              }
            } catch (err) {
              _didIteratorError7 = true;
              _iteratorError7 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion7 && _iterator7.return) {
                  _iterator7.return();
                }
              } finally {
                if (_didIteratorError7) {
                  throw _iteratorError7;
                }
              }
            }
          }
        } else {
          if (el.classList.contains('active')) {
            el.classList.remove('active');
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError6 = true;
    _iteratorError6 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion6 && _iterator6.return) {
        _iterator6.return();
      }
    } finally {
      if (_didIteratorError6) {
        throw _iteratorError6;
      }
    }
  }
};
window.addEventListener('scroll', function (e) {
  var scrollTop = document.documentElement.scrollTop;
  var sub = Array.from(document.querySelectorAll('.btn-site-aside-sub'));
  sub = sub.filter(function (x) {
    return !_xtendUtils2.default.parents(x, '.xt-clone').length;
  }); // filter out parent
  activateAsideScroll(sub, scrollTop);
  var subsub = Array.from(document.querySelectorAll('.btn-site-aside-sub.active + .site-aside-subsub .btn-site-aside-subsub'));
  subsub = subsub.filter(function (x) {
    return !_xtendUtils2.default.parents(x, '.xt-clone').length;
  }); // filter out parent
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
  var append = _xtendUtils2.default.createElement('<button type="button" class="btn btn-secondary-empy btn-fullscreen" data-toggle="tooltip" data-placement="top" title="Open fullscreen"><span class="icon-enlarge2"></span></button>');
  container.querySelectorAll('.demo-tabs-right')[0].append(append);
  // single element and no demo tabs
  if (items.length === 1) {
    // && !$items.hasClass('demo-preview') && !$items.attr('data-iframe')
    items[0].style.display = 'block';
    container.querySelectorAll('.demo-tabs')[0].style.display = 'none';
  }
  // loop items
  var _iteratorNormalCompletion8 = true;
  var _didIteratorError8 = false;
  var _iteratorError8 = undefined;

  try {
    for (var _iterator8 = items.entries()[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
      var _step8$value = _slicedToArray(_step8.value, 2),
          k = _step8$value[0],
          item = _step8$value[1];

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
      var appendBtn = _xtendUtils2.default.createElement('<button type="button" class="btn btn-secondary-empy">' + name + '</button>');
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
      var appendItem = _xtendUtils2.default.createElement('<div class="demo-code"><div class="demo-code-tabs"><div class="demo-code-tabs-left"></div><div class="demo-code-tabs-right"><button type="button" class="btn btn-secondary-empy btn-clipboard" data-toggle="tooltip" data-placement="top" title="Copy to clipboard">copy</button></div></div><div class="demo-code-body"></div></div>');
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
        let $iframe = $item.find('> iframe');
        let initIframe = function() {
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
    }
  } catch (err) {
    _didIteratorError8 = true;
    _iteratorError8 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion8 && _iterator8.return) {
        _iterator8.return();
      }
    } finally {
      if (_didIteratorError8) {
        throw _iteratorError8;
      }
    }
  }
};

// populateInline
var populateInline = function populateInline(item, id) {
  var els = item.querySelectorAll('.demo-source');
  var _iteratorNormalCompletion9 = true;
  var _didIteratorError9 = false;
  var _iteratorError9 = undefined;

  try {
    for (var _iterator9 = els.entries()[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
      var _step9$value = _slicedToArray(_step9.value, 2),
          z = _step9$value[0],
          el = _step9$value[1];

      populateSources(item, el, id, z);
      if (!item.classList.contains('demo-preview')) {
        el.style.display = none;
      }
    }
  } catch (err) {
    _didIteratorError9 = true;
    _iteratorError9 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion9 && _iterator9.return) {
        _iterator9.return();
      }
    } finally {
      if (_didIteratorError9) {
        throw _iteratorError9;
      }
    }
  }

  new _xtend.XtToggle(item, {
    "elements": ".demo-code-tabs-left .btn",
    "targets": ".demo-code-body-item",
    "min": 1
  });
};

/*
window.resizeIframe = function(id) {
  let $iframe = $('#' + id);
  let $target = $iframe.contents().find('#body-inside');
  $target.hide().show(0); // fix scrollbars disappearing
  let h = $target.outerHeight();
  if (h !== $iframe.data('iframeHeight')) {
    $iframe.height(h);
    $iframe.data('iframeHeight', h);
  }
};
*/
/*
// populateIframe
function populateIframe($item, $iframe, id) {
  let html = $('body #body-inside', $iframe[0].contentWindow.document).html();
  let less = $('body less-style', $iframe[0].contentWindow.document).html();
  let css = $('body style[scoped]', $iframe[0].contentWindow.document).html();
  let js = $('body script', $iframe[0].contentWindow.document).html();
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
  let $sources = $item.find('.demo-source');
  $sources.each( function(z) {
    let $source = $(this);
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
  var appendBtn = _xtendUtils2.default.createElement('<button type="button" class="btn btn-secondary-empy">' + lang + '</button>');
  var btnInside = item.querySelectorAll('.demo-code-tabs-left')[0].append(appendBtn);
  //btnInside = item.querySelectorAll('.demo-code-tabs-left').querySelectorAll('.btn')[z];
  // format code
  if (!codeInside.classList.contains('hljs')) {
    var text = formatCode(element, lang);
    // remove tabs
    var arr = text.split('\n');
    var toRemove = arr[1].search(/\S/g);
    var _iteratorNormalCompletion10 = true;
    var _didIteratorError10 = false;
    var _iteratorError10 = undefined;

    try {
      for (var _iterator10 = arr.keys()[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
        var i = _step10.value;

        arr[i] = arr[i].substring(toRemove);
      }
    } catch (err) {
      _didIteratorError10 = true;
      _iteratorError10 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion10 && _iterator10.return) {
          _iterator10.return();
        }
      } finally {
        if (_didIteratorError10) {
          throw _iteratorError10;
        }
      }
    }

    text = arr.join('\n');
    // remove newline at start and end
    text = text.replace(/^\s+|\s+$/g, '');
    // set text
    codeInside.innerHTML = text;
    codeInside.classList.add(lang);
    window.hljs.highlightBlock(codeInside);
  }
};

// formatCode
var formatCode = function formatCode(source, lang) {
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
};

// init demos

var _iteratorNormalCompletion11 = true;
var _didIteratorError11 = false;
var _iteratorError11 = undefined;

try {
  for (var _iterator11 = document.querySelectorAll('.demo').entries()[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
    var _step11$value = _slicedToArray(_step11.value, 2),
        i = _step11$value[0],
        _el5 = _step11$value[1];

    populateDemo(_el5, i);
    // enable fullscreen
    /*
    element.find('.demo-tabs-left .button').on('on', function(e, obj) {
      let $fullscreen = $(this).parents('.demo').find('.button__fullscreen');
      let iframe = $(this).parents('.demo').find('.demo-item.active').attr('data-iframe');
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
    new _xtend.XtToggle(_el5, {
      "elements": ".demo-tabs-left .btn",
      "targets": ".demo-item",
      "min": 1
    });
  }

  //////////////////////
  // xtend
  //////////////////////
} catch (err) {
  _didIteratorError11 = true;
  _iteratorError11 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion11 && _iterator11.return) {
      _iterator11.return();
    }
  } finally {
    if (_didIteratorError11) {
      throw _iteratorError11;
    }
  }
}

_xtendUtils2.default.initAll();

},{"../../../scripts/xtend":3,"../../../scripts/xtend-utils":2}],2:[function(require,module,exports){
/*! xtend v0.1.3 (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _xtend = require('./xtend');

//////////////////////
// constructor
//////////////////////

var XtUtil = {};

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
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = document.querySelectorAll('[data-xt-toggle]')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var el = _step.value;

      new _xtend.XtToggle(el);
    }
    // xt-scroll
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = document.querySelectorAll('[data-xt-scroll]')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _el = _step2.value;

      new _xtend.XtScroll(_el);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
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
  return 'unique-id-' + XtUtil.uid++;
};

/**
 * Merge objects
 * @param {Array} arr Array of objects to merge
 * @returns {Object} Merged object
 */
XtUtil.merge = function (arr) {
  var final = {};
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = arr[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var obj = _step3.value;
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = Object.entries(obj)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _step4$value = _slicedToArray(_step4.value, 2),
              key = _step4$value[0],
              value = _step4$value[1];

          final[key] = value;
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
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

exports.default = XtUtil;

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
  try {
    // check if browser supports :scope natively
    doc.querySelector(':scope body');
  } catch (err) {
    // polyfill native methods if it doesn't
    var _arr = ['querySelector', 'querySelectorAll'];

    var _loop = function _loop() {
      var method = _arr[_i];
      var nativ = proto[method];
      proto[method] = function (selectors) {
        if (/(^|,)\s*:scope/.test(selectors)) {
          // only if selectors contains :scope
          var _id = this.id; // remember current element id
          this.id = 'ID_' + Date.now(); // assign new unique id
          selectors = selectors.replace(/((^|,)\s*):scope/g, '$1#' + this.id); // replace :scope with #ID
          var result = doc[method](selectors);
          this.id = _id; // restore previous id
          return result;
        } else {
          return nativ.call(this, selectors); // use native code for other selectors
        }
      };
    };

    for (var _i = 0; _i < _arr.length; _i++) {
      _loop();
    }
  }
})(window.document, Element.prototype);

},{"./xtend":3}],3:[function(require,module,exports){
/*! xtend v0.1.3 (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XtScroll = exports.XtToggle = exports.Xt = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _xtendUtils = require('./xtend-utils');

var _xtendUtils2 = _interopRequireDefault(_xtendUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//////////////////////
// Xt
//////////////////////

var Xt = exports.Xt = function () {

  /**
   * constructor
   * @param {Element} object Base element
   * @param {Object} options User options
   * @param {String} attr Attribute name with json options
   * @constructor
   */
  function Xt(object, jsOptions, attr) {
    _classCallCheck(this, Xt);

    this.object = object;
    this.defaults = this.constructor.defaults;
    // js options
    this.options = _xtendUtils2.default.merge([this.defaults, jsOptions || {}]);
    // markup options
    var markupOptions = this.object.getAttribute(attr);
    this.options = _xtendUtils2.default.merge([this.options, markupOptions ? JSON.parse(markupOptions) : {}]);
    // classes
    if (this.options.class) {
      this.options.classes = [].concat(_toConsumableArray(this.options.classes), _toConsumableArray(this.options.class.split(' ')));
    }
    // init
    this.initSetup();
    this.initScope();
  }

  //////////////////////
  // init
  //////////////////////

  /**
   * setup namespace, container and options
   */


  _createClass(Xt, [{
    key: 'initSetup',
    value: function initSetup() {
      var options = this.options;
      // setup (based on xtend mode)
      if (options.targets && options.targets.indexOf('#') !== -1) {
        // xtend all mode
        this.mode = 'all';
        this.container = document;
        options.max = Infinity;
        this.namespace = options.targets.toString() + '-' + options.classes.toString();
      } else {
        // xtend unique mode
        this.mode = 'unique';
        this.container = this.object;
        this.namespace = _xtendUtils2.default.getUniqueID();
      }
      // final namespace
      this.namespace = this.namespace.replace(/\W+/g, '');
      // currents array based on namespace (so shared between Xt objects)
      if (!this.getCurrents()) {
        this.setCurrents([]);
      }
    }

    /**
     * init elements, targets and currents
     */

  }, {
    key: 'initScope',
    value: function initScope() {
      var self = this;
      var options = this.options;
      // elements
      this.elements = [];
      if (options.elements) {
        this.elements = _xtendUtils2.default.arrSingle(this.container.querySelectorAll(options.elements));
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
        arr = arr.filter(function (x) {
          return !_xtendUtils2.default.parents(x, options.targets).length;
        }); // filter out parent
        this.targets = _xtendUtils2.default.arrSingle(arr);
      }
      // @FIX set namespace for next frame
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var el = _step.value;

          el.setAttribute('data-xt-namespace', self.namespace);
        }
        // currents
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      _xtendUtils2.default.requestAnimationFrame.call(window, function () {
        if (self.elements.length) {
          // activate defaults.class
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = self.elements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _el$classList;

              var el = _step2.value;

              if ((_el$classList = el.classList).contains.apply(_el$classList, _toConsumableArray(self.defaults.classes))) {
                self.eventOn(el);
              }
            }
            // if currents < min
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          var todo = options.min - self.getCurrents().length;
          if (todo) {
            for (var i = 0; i < todo; i++) {
              self.eventOn(self.elements[i]);
            }
          }
        }
      });
    }

    //////////////////////
    // utils
    //////////////////////

    /**
     * choose which elements to activate/deactivate (based on xtend mode and containers)
     * @param {Element} element Element that triggered interaction
     * @returns {Object} object.all and object.single
     */

  }, {
    key: 'getElements',
    value: function getElements(element) {
      if (!this.elements || !this.elements.length) {
        return { all: [], single: null };
      }
      if (this.mode === 'all') {
        // choose all elements
        return { all: this.elements, single: this.elements };
      } else if (this.mode === 'unique') {
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
          var _final = element;
          return { all: _xtendUtils2.default.arrSingle(_final), single: _final };
        }
      }
    }

    /**
     * choose which targets to activate/deactivate (based on xtend mode and containers)
     * @param {Element} element Element that triggered interaction
     * @returns {Array}
     */

  }, {
    key: 'getTargets',
    value: function getTargets(element) {
      if (!this.targets || !this.targets.length) {
        return [];
      }
      if (this.mode === 'all') {
        // choose all targets
        return this.targets;
      } else if (this.mode === 'unique') {
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
          var _final2 = groupTargets[index];
          return _xtendUtils2.default.arrSingle(_final2);
        }
      }
    }

    /**
     * get currents based on namespace (so shared between Xt objects)
     * @returns {Element}
     */

  }, {
    key: 'getCurrents',
    value: function getCurrents() {
      return _xtendUtils2.default.currents[this.namespace];
    }

    /**
     * set currents based on namespace (so shared between Xt objects)
     * @param {Array} arr
     */

  }, {
    key: 'setCurrents',
    value: function setCurrents(arr) {
      _xtendUtils2.default.currents[this.namespace] = arr;
    }

    /**
     * add current based on namespace (so shared between Xt objects)
     * @param {Element} element To be added
     */

  }, {
    key: 'addCurrent',
    value: function addCurrent(element) {
      var arr = _xtendUtils2.default.currents[this.namespace];
      arr.push(element);
    }

    /**
     * remove currents based on namespace (so shared between Xt objects)
     * @param {Element} element To be removed
     */

  }, {
    key: 'removeCurrent',
    value: function removeCurrent(element) {
      _xtendUtils2.default.currents[this.namespace] = _xtendUtils2.default.currents[this.namespace].filter(function (x) {
        return x !== element;
      });
    }

    //////////////////////
    // events
    //////////////////////

    /**
     * element on
     * @param {Element} element To be activated
     */

  }, {
    key: 'eventOn',
    value: function eventOn(element) {
      var _element$classList;

      var options = this.options;
      // activate or deactivate
      if (!(_element$classList = element.classList).contains.apply(_element$classList, _toConsumableArray(this.defaults.classes))) {
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
    }

    /**
     * element off
     * @param {Element} element To be deactivated
     */

  }, {
    key: 'eventOff',
    value: function eventOff(element) {
      var _element$classList2;

      var options = this.options;
      // if currents < min
      var todo = options.min - this.getCurrents().length;
      if (!todo) {
        return;
      }
      // deactivate
      if ((_element$classList2 = element.classList).contains.apply(_element$classList2, _toConsumableArray(this.defaults.classes))) {
        var fElements = this.getElements(element);
        this.removeCurrent(fElements.single);
        this.activationOff(fElements.all);
        var targets = this.getTargets(element);
        this.activationOff(targets);
      }
    }

    //////////////////////
    // activation
    //////////////////////

    /**
     * clear activations timeouts
     * @param {Element} element
     */

  }, {
    key: 'animationClear',
    value: function animationClear(el) {
      clearTimeout(parseFloat(el.getAttribute('xt-activation-animation-timeout')));
    }

    /**
     * element on activation
     * @param {Element} element To be activated
     */

  }, {
    key: 'activationOn',
    value: function activationOn(els) {
      var self = this;
      var options = this.options;
      // activate
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = els[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _el$classList2;

          var el = _step3.value;

          (_el$classList2 = el.classList).add.apply(_el$classList2, _toConsumableArray(options.classes));
          el.classList.remove('out');
          self.activationOnAnimate(el);
          // specials
          self.collapseOn(el);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }

    /**
     * element on animation
     * @param {Element} element To be animated
     */

  }, {
    key: 'activationOnAnimate',
    value: function activationOnAnimate(el) {
      var timing = this.activationTiming(el);
      // delay
      this.animationClear(el);
      if (!timing) {
        // collapse-width and collapse-height
        if (el.classList.contains('collapse-height')) {
          el.style.height = 'auto';
        }
        if (el.classList.contains('collapse-width')) {
          el.style.width = 'auto';
        }
      } else {
        var timeout = setTimeout(function (el) {
          // collapse-width and collapse-height
          if (el.classList.contains('collapse-height')) {
            el.style.height = 'auto';
          }
          if (el.classList.contains('collapse-width')) {
            el.style.width = 'auto';
          }
        }, timing, el);
        el.setAttribute('xt-activation-animation-timeout', timeout);
      }
    }

    /**
     * element off activation
     * @param {Element} element To be deactivated
     */

  }, {
    key: 'activationOff',
    value: function activationOff(els) {
      var self = this;
      var options = this.options;
      // deactivate
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = els[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _el$classList3;

          var el = _step4.value;

          (_el$classList3 = el.classList).remove.apply(_el$classList3, _toConsumableArray(options.classes));
          el.classList.add('out');
          self.activationOffAnimate(el);
          // specials
          self.collapseOff(el);
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }

    /**
     * element off animation
     * @param {Element} element To be animated
     */

  }, {
    key: 'activationOffAnimate',
    value: function activationOffAnimate(el) {
      var timing = this.activationTiming(el);
      // delay
      this.animationClear(el);
      if (!timing) {
        el.classList.remove('out');
      } else {
        var timeout = setTimeout(function (el) {
          el.classList.remove('out');
        }, timing, el);
        el.setAttribute('xt-activation-animation-timeout', timeout);
      }
    }

    /**
     * get transition or animation timing
     * @param {Element} element To be animated
     * @returns {Number} Milliseconds
     */

  }, {
    key: 'activationTiming',
    value: function activationTiming(el) {
      var options = this.options;
      // timing
      var timing = options.timing;
      var transition = parseFloat(getComputedStyle(el)['transitionDuration']) + parseFloat(getComputedStyle(el)['transitionDelay']);
      var animation = parseFloat(getComputedStyle(el)['animationDuration']) + parseFloat(getComputedStyle(el)['animationDelay']);
      if (transition || animation) {
        timing = Math.max(transition, animation);
      }
      return timing * 1000;
    }

    //////////////////////
    // activation specials
    //////////////////////

    /**
     * collapseOn on activation
     * @param {Element} element
     */

  }, {
    key: 'collapseOn',
    value: function collapseOn(el) {
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
    }

    /**
     * collapseOff on deactivation
     * @param {Element} element
     */

  }, {
    key: 'collapseOff',
    value: function collapseOff(el) {
      if (el.classList.contains('collapse-height')) {
        var h = el.clientHeight + 'px';
        var pt = el.style.paddingTop;
        var pb = el.style.paddingBottom;
        _xtendUtils2.default.requestAnimationFrame.call(window, function () {
          el.style.height = h;
          el.style.paddingTop = pt;
          el.style.paddingBottom = pb;
          _xtendUtils2.default.requestAnimationFrame.call(window, function () {
            el.style.height = '0';
            el.style.paddingTop = '0';
            el.style.paddingBottom = '0';
          });
        });
      }
      if (el.classList.contains('collapse-width')) {
        var w = el.clientWidth + 'px';
        var pl = el.style.paddingLeft;
        var pr = el.style.paddingRight;
        _xtendUtils2.default.requestAnimationFrame.call(window, function () {
          el.style.width = w;
          el.style.paddingLeft = pl;
          el.style.paddingRight = pr;
          _xtendUtils2.default.requestAnimationFrame.call(window, function () {
            el.style.width = '0';
            el.style.paddingLeft = '0';
            el.style.paddingRight = '0';
          });
        });
      }
    }
  }]);

  return Xt;
}();

// defaults

Xt.defaults = {
  classes: ['active']
};

//////////////////////
// XtToggle
//////////////////////

var XtToggle = exports.XtToggle = function (_Xt) {
  _inherits(XtToggle, _Xt);

  /**
   * constructor
   * @param {Element} object Base element
   * @param {Object} options User options
   * @constructor
   */
  function XtToggle(object, jsOptions) {
    _classCallCheck(this, XtToggle);

    var _this = _possibleConstructorReturn(this, (XtToggle.__proto__ || Object.getPrototypeOf(XtToggle)).call(this, object, jsOptions, 'data-xt-toggle'));

    _this.initEvents();
    return _this;
  }

  //////////////////////
  // init
  //////////////////////

  /**
   * init events
   */


  _createClass(XtToggle, [{
    key: 'initEvents',
    value: function initEvents() {
      var self = this;
      var options = this.options;
      // on and off
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = this.elements[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var el = _step5.value;

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
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }
    }
  }]);

  return XtToggle;
}(Xt);

// defaults

XtToggle.defaults = {
  elements: ':scope > .btn',
  targets: '[class^="toggle-"], [class*=" toggle-"]',
  classes: ['active'],
  on: 'click',
  min: 0,
  max: 1
};

//////////////////////
// XtScroll
//////////////////////

var XtScroll = exports.XtScroll = function (_Xt2) {
  _inherits(XtScroll, _Xt2);

  /**
   * constructor
   * @param {Element} object Base element
   * @param {Object} options User options
   * @constructor
   */
  function XtScroll(object, jsOptions) {
    _classCallCheck(this, XtScroll);

    var _this2 = _possibleConstructorReturn(this, (XtScroll.__proto__ || Object.getPrototypeOf(XtScroll)).call(this, object, jsOptions, 'data-xt-scroll'));

    _this2.initEvents();
    return _this2;
  }

  //////////////////////
  // init
  //////////////////////

  /**
   * init elements, targets and currents
   */


  _createClass(XtScroll, [{
    key: 'initScope',
    value: function initScope() {
      _get(XtScroll.prototype.__proto__ || Object.getPrototypeOf(XtScroll.prototype), 'initScope', this).call(this);
      // mode
      this.mode = 'all';
      // container
      this.container = _xtendUtils2.default.parents(this.object, '.xt-container.xt-position');
      if (!this.container.length) {
        this.container = _xtendUtils2.default.createElement('<div class="xt-container xt-position"></div>');
        this.object.before(this.container);
        this.container.append(this.object);
        this.container = _xtendUtils2.default.parents(this.object, '.xt-container.xt-position');
      }
      // targets
      this.targets = this.container[0].querySelectorAll('.xt-clone.xt-ignore');
      if (this.targets) {
        this.targets = this.object.cloneNode(true);
        this.targets.classList.add('xt-clone', 'xt-ignore');
        this.container[0].append(this.targets);
      }
      this.targets = _xtendUtils2.default.arrSingle(this.targets);
    }

    /**
     * init events
     */

  }, {
    key: 'initEvents',
    value: function initEvents() {
      var self = this;
      var options = this.options;
      // scroll
      window.addEventListener(options.on, function (e) {
        self.eventScroll(self.object);
      });
    }

    //////////////////////
    // events
    //////////////////////

    /**
     * window scroll
     * @param {Element} element To be activated or deactivated
     */

  }, {
    key: 'eventScroll',
    value: function eventScroll(element) {
      var self = this;
      var options = this.options;
      // scroll
      var scrollTop = document.documentElement.scrollTop;
      _xtendUtils2.default.cancelAnimationFrame.call(window, this.scrollFrame);
      this.scrollFrame = _xtendUtils2.default.requestAnimationFrame.call(window, function () {
        var rectContainer = self.container[0].getBoundingClientRect();
        var top = rectContainer.top;
        var bottom = Infinity;
        // top
        if (!isNaN(parseFloat(options.top))) {
          top = options.top;
        } else {
          var elTop = document.querySelectorAll(options.top);
          if (elTop.length) {
            var rectTop = elTop[0].getBoundingClientRect();
            top = rectTop.top + scrollTop;
          } else if (self.targets.length) {
            var _rectTop = self.targets[0].getBoundingClientRect();
            top = _rectTop.top + scrollTop;
          }
        }
        // bottom
        if (options.bottom !== undefined) {
          if (!isNaN(parseFloat(options.bottom))) {
            bottom = options.bottom;
          } else {
            var elBottom = document.querySelectorAll(options.bottom);
            if (elBottom.length) {
              var rectBottom = elBottom[0].getBoundingClientRect();
              bottom = rectBottom.top + scrollTop;
            } else if (self.targets.length) {
              var _rectBottom = self.targets[0].getBoundingClientRect();
              bottom = _rectBottom.top + scrollTop;
            }
          }
        }
        // check
        if (scrollTop >= top && scrollTop < bottom) {
          var _element$classList3;

          // inside
          if (!(_element$classList3 = element.classList).contains.apply(_element$classList3, _toConsumableArray(self.defaults.classes))) {
            self.eventOn(element);
            // direction
            var fElements = self.getElements(element);
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
              for (var _iterator6 = fElements.all[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                var el = _step6.value;

                el.classList.remove('scroll-off-top', 'scroll-off-bottom');
                if (self.scrollTop > scrollTop) {
                  el.classList.remove('scroll-on-top');
                  el.classList.add('scroll-on-bottom');
                } else {
                  el.classList.add('scroll-on-top');
                  el.classList.remove('scroll-on-bottom');
                }
              }
            } catch (err) {
              _didIteratorError6 = true;
              _iteratorError6 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion6 && _iterator6.return) {
                  _iterator6.return();
                }
              } finally {
                if (_didIteratorError6) {
                  throw _iteratorError6;
                }
              }
            }
          }
        } else {
          var _element$classList4;

          // outside
          if ((_element$classList4 = element.classList).contains.apply(_element$classList4, _toConsumableArray(self.defaults.classes))) {
            self.eventOff(element);
            // direction
            var _fElements = self.getElements(element);
            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
              for (var _iterator7 = _fElements.all[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                var _el = _step7.value;

                _el.classList.remove('scroll-on-top', 'scroll-on-bottom');
                if (self.scrollTop > scrollTop) {
                  _el.classList.remove('scroll-off-top');
                  _el.classList.add('scroll-off-bottom');
                } else {
                  _el.classList.add('scroll-off-top');
                  _el.classList.remove('scroll-off-bottom');
                }
              }
            } catch (err) {
              _didIteratorError7 = true;
              _iteratorError7 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion7 && _iterator7.return) {
                  _iterator7.return();
                }
              } finally {
                if (_didIteratorError7) {
                  throw _iteratorError7;
                }
              }
            }
          }
        }
        // save for direction
        self.scrollTop = scrollTop;
      });
    }
  }]);

  return XtScroll;
}(Xt);

// defaults

XtScroll.defaults = {
  classes: ['active'],
  on: 'scroll',
  min: 0,
  max: Infinity
};

/*
// overlay html
if (settings.name === 'xt-overlay') {
  var $additional = $('html');
  if (!$additional.hasClass(object.defaultClass)) {
    $additional.addClass(settings.class);
    // add paddings
    object.onFixed($('html, .xt-backdrop')); // use this for all position fixed $('*:fixed').not($target);
  }
}
// overlay html
if (settings.name === 'xt-overlay') {
  var $additional = $('html');
  if ($additional.hasClass(object.defaultClass)) {
    $additional.removeClass(settings.class);
    // remove paddings
    object.offFixed($('.xt-fixed')); // use this for all position fixed $('*:fixed').not($target);
  }
}

Xt.prototype.onFixed = function($el) {
  var object = this;
  var settings = this.settings;
  var group = this.group;
  var $group = $(this.group);
  // add scrollbar padding
  var w = object.scrollbarWidth($el);
  w = $el.css('overflow-y') === 'hidden' ? 0 : w;
  $el.addClass('xt-fixed').css('right', w).css('padding-right', w);
};

Xt.prototype.offFixed = function($el) {
  var object = this;
  var settings = this.settings;
  var group = this.group;
  var $group = $(this.group);
  // remove scrollbar padding
  $el.removeClass('xt-fixed').css('right', 0).css('padding-right', 0);
};
*/

},{"./xtend-utils":2}]},{},[1])

