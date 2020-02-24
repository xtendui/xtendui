/**
 * call only if in browser mode
 * https://www.gatsbyjs.org/docs/debugging-html-builds/#how-to-check-if-code-classlanguage-textwindowcode-is-defined
 */

if (typeof window !== 'undefined') {

  /**
   * contains
   * https://github.com/Financial-Times/polyfill-library/blob/master/polyfills/Node/prototype/contains/polyfill.js
   */
  (function() {

    function contains(node) {
      if (!(0 in arguments)) {
        throw new TypeError('1 argument is required');
      }

      do {
        if (this === node) {
          return true;
        }
      // eslint-disable-next-line no-cond-assign
      } while (node = node && node.parentNode);

      return false;
    }

    // IE
    if ('HTMLElement' in self && 'contains' in HTMLElement.prototype) {
      try {
        delete HTMLElement.prototype.contains;
      // eslint-disable-next-line no-empty
      } catch (e) {}
    }

    if ('Node' in self) {
      Node.prototype.contains = contains;
    } else {
      document.contains = Element.prototype.contains = contains;
    }

  }());

  /**
   * classlist
   * https://www.npmjs.com/package/classlist.js
   */
  require('classlist.js');

  /**
   * url-polyfill
   * https://www.npmjs.com/package/url-polyfill
   */
  require('url-polyfill');

  /**
   * CustomEvent
   * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
   */
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
}
