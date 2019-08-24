//////////////////////
// import
//////////////////////

import {Xt} from 'xtend-library'
import 'xtend-library/src/core/controller/controller.js'

//////////////////////
// Drop
//////////////////////

class Ajax extends Xt.Controller {

  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsJs User options
   * @constructor
   */
  constructor(object, optionsJs = {}) {
    super(object, optionsJs);
    // prevent scroll on popstate
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }

  //////////////////////
  // init
  //////////////////////

  /**
   * init
   */
  init(object = false, optionsJs = false) {
    let self = this;
    // vars
    self.locationFrom = self.locationTo || null; // fix popstate
    self.locationTo = null;
    // super
    super.init();
  }

  /**
   * init setup
   */
  initSetup() {
    super.initSetup();
    let self = this;
    let options = self.options;
    // queryElement
    self.queryElement = self.object.querySelector(options.query) || self.object;
  }

  /**
   * init elements
   */
  initScopeElements() {
    super.initScopeElements();
    let self = this;
    // remove external links
    for (let element of self.elements) {
      if (location.hostname !== element.hostname || element.getAttribute('href').split('#')[0] === '') {
        self.elements = Array.from(self.elements).filter(x => x !== element);
      }
    }
    // generate groups
    self.groupUrl = [];
    for (let element of self.elements) {
      // populate
      let url = element.getAttribute('href').split('#')[0];
      if (!self.groupUrl[url]) {
        self.groupUrl[url] = [];
      }
      self.groupUrl[url].push(element);
      // assign group
      element.setAttribute('data-xt-group', self.namespace + '-' + url);
    }
  }

  /**
   * init start
   * @param {Boolean} saveCurrents
   */
  initStart(saveCurrents = false) {
    let self = this;
    // initial
    self.initial = true;
    self.currentIndex = null;
    // automatic initial currents
    let elements = self.getGroups();
    if (elements.length) {
      let found = false;
      for (let element of elements) {
        let loc = location.pathname + location.search;
        let url = element.pathname + element.search;
        if (url !== '') {
          if (loc === url) {
            found = true;
            // activate
            self.eventOn(element, true);
          } else {
            // deactivate
            self.eventOff(element, true);
          }
        }
      }
      if (!found) {
        // initial
        self.initial = false;
      }
    } else {
      // initial
      self.initial = false;
    }
    // detect url
    let url;
    if (history.state && history.state.url) {
      // detect from history
      url = history.state.url;
    } else {
      // detect from url location (absolute url without domain name)
      url = location.pathname + location.search;
    }
    // set pushstate
    if (!self.locationFrom) {
      self.locationFrom = new URL(url, location);
    }
    self.pushState(url, document.title);
    // init events
    self.initEvents();
    // listener dispatch
    requestAnimationFrame( function () {
      let detail = self.eDetailSet();
      self.object.dispatchEvent(new CustomEvent('init.xt', {detail: detail}));
    });
  }

  /**
   * init events
   */
  initEvents() {
    super.initEvents();
    let self = this;
    // event popstate
    window.onpopstate = self.eventPopstateHandler.bind(self);
  }

  //////////////////////
  // handler
  //////////////////////

  /**
   * element on handler
   * @param {Node|HTMLElement|EventTarget|Window} element
   * @param {Event} e
   */
  eventOnHandler(element, e) {
    if (!e || !e.detail || !e.detail.skip) { // needed because we trigger .xt event
      // not when opening in new tab
      if (e.metaKey || e.ctrlKey) {
        return false;
      }
      // prevent links (needed for xt-ajax to go to links and propagate event if inside targets)
      e.preventDefault();
    }
    // super
    super.eventOnHandler(element, e);
  }

  /**
   * element popstate handler
   * @param {Event} e
   */
  eventPopstateHandler(e) {
    let self = this;
    // handler
    if (history.state && history.state.url) {
      // reinit currents
      self.initStart();
      // request set
      requestAnimationFrame(function () {
        self.ajaxRequest(null, history.state.url);
      });
    }
  }

  //////////////////////
  // queue
  //////////////////////

  /**
   * logic to execute on queue complete
   * @param {String} actionCurrent Current action
   * @param {Object} obj Queue object
   */
  queueComplete(actionCurrent, obj) {
    let self = this;
    if (actionCurrent === 'On') {
      if (!self.initial) {
        // trigger ajax request
        self.ajaxRequest(obj['elements'].queueEls[0], null);
      }
    }
    super.queueComplete(actionCurrent, obj);
  }

  //////////////////////
  // special
  //////////////////////

  /**
   * ajax request
   * @param {Node|HTMLElement|EventTarget|Window} element Base node
   * @param {String} url Url to get
   */
  ajaxRequest(element, url) {
    let self = this;
    let options = self.options;
    // url
    if (element) {
      url = element.getAttribute('href').split('#')[0];
    }
    // location
    self.locationFrom = self.locationTo || self.locationFrom; // fix fast change page
    self.locationTo = new URL(url, location);
    // autoClose
    dispatchEvent(new CustomEvent('autoClose.xt'));
    // dispatch
    let detail = self.eDetailSet();
    self.object.dispatchEvent(new CustomEvent('request.xt.ajax', {detail: detail}));
    // duration
    self.detail.requestDate = new Date();
    clearTimeout(Xt.dataStorage.get(self.object, self.componentNamespace + 'AjaxDurationTimeout'));
    if (self.detail.request) {
      self.detail.request.abort();
    } // fix fast change page
    requestAnimationFrame(function () {
      self.detail.requestDuration = options.duration || Xt.animTime(self.queryElement);
      // call
      let request = new XMLHttpRequest();
      request.open('GET', url, true);
      request.onload = function () {
        self.ajaxResponse(element, url, request, self.detail.requestDate);
      };
      request.onerror = function () {
        self.ajaxResponse(element, url, request, self.detail.requestDate);
      };
      if (Xt.debug === true) {
        console.debug('xt-ajax request:', url);
      }
      request.send();
      self.detail.request = request;
    });
  }

  /**
   * ajax response
   * @param {Node|HTMLElement|EventTarget|Window} element Base node
   * @param {String} url Url to get
   * @param {XMLHttpRequest} request Html response
   * @param {Date} date Html response
   */
  ajaxResponse(element, url, request, date) {
    let self = this;
    // dispatch
    let detail = self.eDetailSet();
    self.object.dispatchEvent(new CustomEvent('response.xt.ajax', {detail: detail}));
    // duration
    self.detail.requestDuration -= new Date() - date;
    if (self.detail.requestDuration > 0) {
      Xt.dataStorage.set(self.object, self.componentNamespace + 'AjaxDurationTimeout', setTimeout(function () {
        // request
        if (request.status >= 200 && request.status <= 300) {
          self.ajaxSuccess(element, url, request, date);
        } else {
          self.ajaxError(element, url, request);
        }
      }, self.detail.requestDuration));
    } else {
      // request
      if (request.status >= 200 && request.status <= 300) {
        self.ajaxSuccess(element, url, request, date);
      } else {
        self.ajaxError(element, url, request);
      }
    }
  }

  /**
   * ajax success
   * @param {Node|HTMLElement|EventTarget|Window} element Base node
   * @param {String} url Url to get
   * @param {XMLHttpRequest} request Html response
   * @param {Date} date Html response
   */
  ajaxSuccess(element, url, request, date) {
    let self = this;
    let options = self.options;
    // debug
    if (Xt.debug === true) {
      console.debug('xt-ajax request success:', url);
    }
    // set substitute
    let html = document.createElement('html');
    html.innerHTML = request.responseText.trim();
    let title = html.querySelector('head title').innerHTML;
    let replace = html.querySelector(options.query);
    // populate dom
    self.queryElement.outerHTML = replace.outerHTML;
    // queryElement
    self.queryElement = self.object.querySelector(options.query) || self.object;
    // pushstate
    self.pushState(url, title);
    // garbage collector
    html = null;
    replace = null;
    // dispatch
    let detail = self.eDetailSet();
    self.object.dispatchEvent(new CustomEvent('replace.xt.ajax', {detail: detail}));
    // reinit
    if (!self.initial
      && date === self.detail.requestDate) { // fix fast change page
      requestAnimationFrame(function () {
        self.initial = true;
        self.init();
      });
    }
  }

  /**
   * ajax error
   * @param {Node|HTMLElement|EventTarget|Window} element Base node
   * @param {String} url Url to get
   * @param {XMLHttpRequest} request Html response
   */
  ajaxError(element, url, request) {
    let self = this;
    // debug
    if (Xt.debug === true) {
      console.debug('xt-ajax request failed:', url);
    }
    // reinit currents
    self.initStart();
    // dispatch
    let detail = self.eDetailSet();
    self.object.dispatchEvent(new CustomEvent('replace.xt.ajax', {detail: detail}));
  }

  /**
   * history pushstate
   */
  pushState(url, title) {
    // push object state
    if (!history.state || !history.state.url || history.state.url !== url) {
      document.title = title;
      history.pushState({'url': url, 'title': title}, title, url);
    } else {
      document.title = history.state.title;
    }
  }

}

//////////////////////
// option
//////////////////////

Ajax.componentName = 'xt-ajax';
Ajax.optionsDefault = {
  "query": "body", // needs to be unique
  "baseUrl": "/",
  "duration": false,
  "elements": "a[href]:not([href^='#'])",
  "on": "click",
  "min": 0,
  "max": 1,
  "instant": true,
  "aria": false
};

//////////////////////
// export
//////////////////////

Xt.Ajax = Ajax;

//////////////////////
// observe
//////////////////////

Xt.mount.push({
  matches: '[data-' + Xt.Ajax.componentName + ']',
  fnc: function mount(object) {

    let self = new Xt.Ajax(object, object.getAttribute('data-' + Xt.Ajax.componentName));

    // unmount

    return function unmount() {
      self.destroy();
      self = null;
    };

  }
});

