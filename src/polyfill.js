/**
 * call only if in browser mode
 * https://www.gatsbyjs.org/docs/debugging-html-builds/#how-to-check-if-code-classlanguage-textwindowcode-is-defined
 */

if (typeof window !== 'undefined') {
  /**
   * remove
   * https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/remove()/remove().md
   */
  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty('remove')) {
        return;
      }
      Object.defineProperty(item, 'remove', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function remove() {
          this.parentNode.removeChild(this);
        }
      });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

  /**
   * prepend
   * https://github.com/jserz/js_piece/blob/master/DOM/ParentNode/prepend()/prepend().md
   */
  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty('prepend')) {
        return;
      }
      Object.defineProperty(item, 'prepend', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function prepend() {
          var argArr = Array.prototype.slice.call(arguments),
            docFrag = document.createDocumentFragment();

          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });

          this.insertBefore(docFrag, this.firstChild);
        }
      });
    });
  })([Element.prototype, Document.prototype, DocumentFragment.prototype]);

  /**
   * append
   * https://github.com/jserz/js_piece/blob/master/DOM/ParentNode/append()/append().md
   */
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

  /**
   * before
   * https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/before()/before().md
   */
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

  /**
   * after
   * https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/after()/after().md
   */
  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty('after')) {
        return;
      }
      Object.defineProperty(item, 'after', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function after() {
          var argArr = Array.prototype.slice.call(arguments),
            docFrag = document.createDocumentFragment();

          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });

          this.parentNode.insertBefore(docFrag, this.nextSibling);
        }
      });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

  /**
   * composedPath
   * https://gist.github.com/rockinghelvetica/00b9f7b5c97a16d3de75ba99192ff05c
   */
  (function(E, d, w) {
    if(!E.composedPath) {
      E.composedPath = function() {
        if (this.path) {
          return this.path;
        }
        var target = this.target;

        this.path = [];
        while (target.parentNode !== null) {
          this.path.push(target);
          target = target.parentNode;
        }
        this.path.push(d, w);
        return this.path;
      }
    }
  })(Event.prototype, document, window);

  /**
   * :scope
   * https://github.com/jonathantneal/element-qsa-scope
   */
  (function (ElementPrototype) {
    try {
      // test for scope support
      document.querySelector(':scope *');
    } catch (error) {
      let polyfill = function (qsa) {
        return function (selectors) {
          // whether the selectors contain :scope
          let hasScope = selectors && scope.test(selectors);
          if (hasScope) {
            // fallback attribute
            let attr = 'q' + Math.floor(Math.random() * 9000000) + 1000000;
            // replace :scope with the fallback attribute
            arguments[0] = selectors.replace(scope, '[' + attr + ']');
            // add the fallback attribute
            this.setAttribute(attr, '');
            // results of the qsa
            let elementOrNodeList = qsa.apply(this, arguments);
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
      // scope regex
      let scope = /:scope(?![\w-])/gi;
      // polyfill Element#querySelector
      let querySelectorWithScope = polyfill(ElementPrototype.querySelector);
      ElementPrototype.querySelector = function querySelector(selectors) {
        return querySelectorWithScope.apply(this, arguments);
      };
      // polyfill Element#querySelectorAll
      let querySelectorAllWithScope = polyfill(ElementPrototype.querySelectorAll);
      ElementPrototype.querySelectorAll = function querySelectorAll(selectors) {
        return querySelectorAllWithScope.apply(this, arguments);
      };
      // polyfill Element#matches
      if (ElementPrototype.matches) {
        let matchesWithScope = polyfill(ElementPrototype.matches);
        ElementPrototype.matches = function matches(selectors) {
          return matchesWithScope.apply(this, arguments);
        };
      }
      // polyfill Element#closest
      if (ElementPrototype.closest) {
        let closestWithScope = polyfill(ElementPrototype.closest);
        ElementPrototype.closest = function closest(selectors) {
          return closestWithScope.apply(this, arguments);
        };
      }
    }
  })(Element.prototype);

  /**
   * closest
   * https://github.com/jonathantneal/closest
   */
  (function (ElementProto) {
    if (typeof ElementProto.matches !== 'function') {
      ElementProto.matches = ElementProto.msMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.webkitMatchesSelector || function matches(selector) {
        var element = this;
        var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
        var index = 0;
        while (elements[index] && elements[index] !== element) {
          ++index;
        }
        return Boolean(elements[index]);
      };
    }
    if (typeof ElementProto.closest !== 'function') {
      ElementProto.closest = function closest(selector) {
        var element = this;
        while (element && element.nodeType === 1) {
          if (element.matches(selector)) {
            return element;
          }
          element = element.parentNode;
        }
        return null;
      };
    }
  })(window.Element.prototype);

  /**
   * scrollingElement
   * https://github.com/yangg/scrolling-element
   */
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

  /**
   * includes
   * https://tc39.github.io/ecma262/#sec-array.prototype.includes
   */
  if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
      value: function(valueToFind, fromIndex) {

        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }

        // 1. Let O be ? ToObject(this value).
        var o = Object(this);

        // 2. Let len be ? ToLength(? Get(O, "length")).
        var len = o.length >>> 0;

        // 3. If len is 0, return false.
        if (len === 0) {
          return false;
        }

        // 4. Let n be ? ToInteger(fromIndex).
        //    (If fromIndex is undefined, this step produces the value 0.)
        var n = fromIndex | 0;

        // 5. If n ≥ 0, then
        //  a. Let k be n.
        // 6. Else n < 0,
        //  a. Let k be len + n.
        //  b. If k < 0, let k be 0.
        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

        function sameValueZero(x, y) {
          return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
        }

        // 7. Repeat, while k < len
        while (k < len) {
          // a. Let elementK be the result of ? Get(O, ! ToString(k)).
          // b. If SameValueZero(valueToFind, elementK) is true, return true.
          if (sameValueZero(o[k], valueToFind)) {
            return true;
          }
          // c. Increase k by 1.
          k++;
        }

        // 8. Return false
        return false;
      }
    });
  }

  /**
   * findIndex
   * https://tc39.github.io/ecma262/#sec-array.prototype.findindex
   */
  if (!Array.prototype.findIndex) {
    Object.defineProperty(Array.prototype, 'findIndex', {
      value: function (predicate) {
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }
        var o = Object(this);
        var len = o.length >>> 0;
        if (typeof predicate !== 'function') {
          throw new TypeError('predicate must be a function');
        }
        var thisArg = arguments[1];
        var k = 0;
        while (k < len) {
          var kValue = o[k];
          if (predicate.call(thisArg, kValue, k, o)) {
            return k;
          }
          k++;
        }
        return -1;
      },
      configurable: true,
      writable: true
    });
  }
}
