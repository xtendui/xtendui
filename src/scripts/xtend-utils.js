/*! xtend (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

'use strict';

import 'babel-polyfill';

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
XtUtil.initAll = function (container = document.documentElement) {
  // xt-toggle
  Array.from(container.querySelectorAll('[data-xt-toggle]')).forEach(function (el) {
    new XtToggle(el);
  });
  Array.from(container.querySelectorAll('[data-xt-drop]')).forEach(function (el) {
    new XtDrop(el);
  });
  Array.from(container.querySelectorAll('[data-xt-overlay]')).forEach(function (el) {
    new XtOverlay(el);
  });
  Array.from(container.querySelectorAll('[data-xt-fade]')).forEach(function (el) {
    new XtFade(el);
  });
  Array.from(container.querySelectorAll('[data-xt-sticky]')).forEach(function (el) {
    new XtSticky(el);
  });
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
 * dataStorage
 * https://stackoverflow.com/questions/29222027/vanilla-alternative-to-jquery-data-function-any-native-javascript-alternati
 * USAGE: XtUtil.dataStorage.put(element, 'key', value);
 */
XtUtil.dataStorage = {
  _storage: new WeakMap(),
  put: function (element, key, obj) {
    if (!this._storage.has(key)) {
      this._storage.set(element, new Map());
    }
    this._storage.get(element).set(key, obj);
    return this._storage.get(element).get(key);
  },
  get: function (element, key) {
    return this._storage.get(element).get(key);
  },
  has: function (element, key) {
    return this._storage.get(element).has(key);
  },
  remove: function (element, key) {
    let ret = this._storage.get(element).delete(key);
    if (!this._storage.get(key).size === false) {
      this._storage.delete(element);
    }
    return ret;
  }
};

//////////////////////
// api
//////////////////////

window.XtUtil = XtUtil;
export {XtUtil};

//////////////////////
// scope polyfill
// https://github.com/jonathantneal/element-qsa-scope
// USAGE: querySelectorAll(':scope > .selector');
//////////////////////

try {
  // test for scope support
  document.querySelector(':scope *');
} catch (error) {
  (function (ElementPrototype) {
    // scope regex
    var scope = /:scope(?![\w-])/gi;

    // polyfill Element#querySelector
    var querySelectorWithScope = polyfill(ElementPrototype.querySelector);

    ElementPrototype.querySelector = function querySelector(selectors) {
      return querySelectorWithScope.apply(this, arguments);
    };

    // polyfill Element#querySelectorAll
    var querySelectorAllWithScope = polyfill(ElementPrototype.querySelectorAll);

    ElementPrototype.querySelectorAll = function querySelectorAll(selectors) {
      return querySelectorAllWithScope.apply(this, arguments);
    };

    // polyfill Element#matches
    if (ElementPrototype.matches) {
      var matchesWithScope = polyfill(ElementPrototype.matches);

      ElementPrototype.matches = function matches(selectors) {
        return matchesWithScope.apply(this, arguments);
      };
    }

    // polyfill Element#closest
    if (ElementPrototype.closest) {
      var closestWithScope = polyfill(ElementPrototype.closest);

      ElementPrototype.closest = function closest(selectors) {
        return closestWithScope.apply(this, arguments);
      };
    }

    function polyfill(qsa) {
      return function (selectors) {
        // whether the selectors contain :scope
        var hasScope = selectors && scope.test(selectors);

        if (hasScope) {
          // fallback attribute
          var attr = 'q' + Math.floor(Math.random() * 9000000) + 1000000;

          // replace :scope with the fallback attribute
          arguments[0] = selectors.replace(scope, '[' + attr + ']');

          // add the fallback attribute
          this.setAttribute(attr, '');

          // results of the qsa
          var elementOrNodeList = qsa.apply(this, arguments);

          // remove the fallback attribute
          this.removeAttribute(attr);

          // return the results of the qsa
          return elementOrNodeList;
        } else {
          // return the results of the qsa
          return qsa.apply(this, arguments);
        }
      };
    }
  })(Element.prototype);
}

//////////////////////
// matches polyfill
// https://github.com/jonathantneal/closest
// USAGE: element.matches(query);
//////////////////////
/*
(function (proto) {
  if (typeof proto.matches !== 'function') {
    proto.matches = proto.msMatchesSelector || proto.webkitMatchesSelector || function matches(query) {
      let el = this;
      let els = (el.document || el.ownerDocument).querySelectorAll(query);
      let index = 0;
      while (els[index] && els[index] !== el) {
        ++index;
      }
      return Boolean(els[index]);
    };
  }
})(Element.prototype);
*/
//////////////////////
// closest polyfill
// https://github.com/jonathantneal/closest
// USAGE: element.closest(query);
//////////////////////

/*
(function (proto) {
  if (typeof proto.closest !== 'function') {
    proto.closest = function closest(query) {
      let el = this;
      while (el && el.nodeType === 1) {
        if (el.matches(query)) {
          return el;
        }
        el = el.parentNode;
      }
      return null;
    };
  }
})(Element.prototype);
*/
//////////////////////
// CustomEvent polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
//////////////////////

(function () {
  if (typeof window.CustomEvent === "function") {
    return false;
  }

  function CustomEvent(event, params) {
    params = params || {bubbles: false, cancelable: false, detail: undefined};
    let evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
})();

//////////////////////
// scrollingElement polyfill
// https://github.com/yangg/scrolling-element
//////////////////////

(function () {
  if (document.scrollingElement) {
    return;
  }
  let element = null;

  function scrollingElement() {
    if (element) {
      return element;
    } else if (document.body.scrollTop) {
      // speed up if scrollTop > 0
      return (element = document.body);
    }
    let iframe = document.createElement('iframe');
    iframe.style.height = '1px';
    document.documentElement.appendChild(iframe);
    let doc = iframe.contentWindow.document;
    doc.write('<!DOCTYPE html><div style="height:9999em">x</div>');
    doc.close();
    let isCompliant = doc.documentElement.scrollHeight > doc.body.scrollHeight;
    iframe.parentNode.removeChild(iframe);
    return (element = isCompliant ? document.documentElement : document.body);
  }

  Object.defineProperty(document, 'scrollingElement', {
    get: scrollingElement
  })
})();

//////////////////////
// append polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append
//////////////////////

(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('append')) {
      return;
    }
    Object.defineProperty(item, 'append', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function append() {
        let argArr = Array.prototype.slice.call(arguments),
          docFrag = document.createDocumentFragment();

        argArr.forEach(function (argItem) {
          let isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });

        this.appendChild(docFrag);
      }
    });
  });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);

//////////////////////
// before polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before
//////////////////////

(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('before')) {
      return;
    }
    Object.defineProperty(item, 'before', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function before() {
        let argArr = Array.prototype.slice.call(arguments),
          docFrag = document.createDocumentFragment();

        argArr.forEach(function (argItem) {
          let isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });

        this.parentNode.insertBefore(docFrag, this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

//////////////////////
// entries polyfill
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
//////////////////////

(function (obj) {
  if (!obj.entries) {
    obj.entries = function( obj ){
      let ownProps = Object.keys( obj ),
        i = ownProps.length,
        resArray = new Array(i); // preallocate the Array
      while (i--)
        resArray[i] = [ownProps[i], obj[ownProps[i]]];

      return resArray;
    };
  }
})(Object);

//////////////////////
// Array.from polyfill
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
//////////////////////

(function (arr) {
  if (!arr.from) {
    arr.from = (function () {
      var toStr = Object.prototype.toString;
      var isCallable = function (fn) {
        return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
      };
      var toInteger = function (value) {
        var number = Number(value);
        if (isNaN(number)) { return 0; }
        if (number === 0 || !isFinite(number)) { return number; }
        return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
      };
      var maxSafeInteger = Math.pow(2, 53) - 1;
      var toLength = function (value) {
        var len = toInteger(value);
        return Math.min(Math.max(len, 0), maxSafeInteger);
      };

      // The length property of the from method is 1.
      return function from(arrayLike/*, mapFn, thisArg */) {
        // 1. Let C be the this value.
        var C = this;

        // 2. Let items be ToObject(arrayLike).
        var items = Object(arrayLike);

        // 3. ReturnIfAbrupt(items).
        if (arrayLike == null) {
          throw new TypeError('Array.from requires an array-like object - not null or undefined');
        }

        // 4. If mapfn is undefined, then let mapping be false.
        var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
        var T;
        if (typeof mapFn !== 'undefined') {
          // 5. else
          // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
          if (!isCallable(mapFn)) {
            throw new TypeError('Array.from: when provided, the second argument must be a function');
          }

          // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
          if (arguments.length > 2) {
            T = arguments[2];
          }
        }

        // 10. Let lenValue be Get(items, "length").
        // 11. Let len be ToLength(lenValue).
        var len = toLength(items.length);

        // 13. If IsConstructor(C) is true, then
        // 13. a. Let A be the result of calling the [[Construct]] internal method
        // of C with an argument list containing the single item len.
        // 14. a. Else, Let A be ArrayCreate(len).
        var A = isCallable(C) ? Object(new C(len)) : new Array(len);

        // 16. Let k be 0.
        var k = 0;
        // 17. Repeat, while k < len… (also steps a - h)
        var kValue;
        while (k < len) {
          kValue = items[k];
          if (mapFn) {
            A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
          } else {
            A[k] = kValue;
          }
          k += 1;
        }
        // 18. Let putStatus be Put(A, "length", len, true).
        A.length = len;
        // 20. Return A.
        return A;
      };
    }());
  }
})(Array);
