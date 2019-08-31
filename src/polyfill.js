/**
 * call only if in browser mode
 * https://www.gatsbyjs.org/docs/debugging-html-builds/#how-to-check-if-code-classlanguage-textwindowcode-is-defined
 */

if (typeof window !== 'undefined') {
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
}
