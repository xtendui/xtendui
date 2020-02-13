/**
 * call only if in browser mode
 * https://www.gatsbyjs.org/docs/debugging-html-builds/#how-to-check-if-code-classlanguage-textwindowcode-is-defined
 */

if (typeof window !== 'undefined') {
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
