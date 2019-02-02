/* xtend (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

'use strict';

import Xt from '../xtend';
import Core from '../core';

//////////////////////
// Drop
//////////////////////

class Ajax extends Core {

  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} jsOptions User options
   * @constructor
   */
  constructor(object, jsOptions = {}) {
    super(object, jsOptions);
  }

  //////////////////////
  // init
  //////////////////////

  /**
   * init elements
   */
  initScopeElements() {
    super.initScopeElements();
    let self = this;
    // remove external links
    for (let element of self.elements) {
      if (location.hostname !== element.hostname) {
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
   * init currents
   */
  initCurrents() {
    let self = this;
    let options = self.options;
    // automatic initial currents
    for (let element of self.elements) {
      let loc = location.pathname + location.search;
      let url = element.pathname + element.search;
      if (url !== '') {
        if (loc === url) {
          element.classList.add(...options.classes);
        } else {
          element.classList.remove(...options.classes);
        }
      }
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
    self.detail.locationFrom = new URL(url, location);
    self.pushState(url, document.title);
    // super
    super.initCurrents();
  }

  /**
   * init events
   */
  initEvents() {
    let self = this;
    super.initEvents();
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
    if (!e.detail || !e.detail.skip) { // needed because we trigger .xt event
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
      self.ajaxCall(null, history.state.url);
    }
  }

  //////////////////////
  // special util
  //////////////////////

  /**
   * check if an url contains host
   * @param {String} url Url to check
   * @returns {Boolean} If url has host
   */
  urlHasHost(url) {
    let found;
    found = url.indexOf('//') !== -1;
    return found;
  }

  /**
   * Remove host from an url
   * @param {String} url Url to get
   * @returns {String} Url without host
   */
  urlWithoutHost(url) {
    return url.replace('http://', '').replace('https://', '').replace('//', '').split('/')[0];
  }

  //////////////////////
  // special
  //////////////////////

  /**
   * ajax call
   * @param {Node|HTMLElement|EventTarget|Window} element Base node
   * @param {String} url Url to get
   */
  ajaxCall(element, url) {
    let self = this;
    let options = self.options;
    // queryElement
    self.queryElement = self.object.querySelectorAll(options.query)[0] || self.object;
    // url
    if (element) {
      url = element.getAttribute('href').split('#')[0];
    }
    // check url
    if (!self.detail.initial) {
      // location
      self.detail.locationTo = new URL(url, location);
      // dispatch
      self.eDetailSet();
      self.object.dispatchEvent(new CustomEvent('request.xt.ajax', {detail: self.eDetail}));
      // duration
      self.detail.requestDate = new Date();
      clearTimeout(parseFloat(self.object.dataset.xtAjaxDurationTimeout));
      requestAnimationFrame( function() {
        self.detail.requestDuration = options.duration || Xt.animTime(self.queryElement);
        // call
        let request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = function () {
          if (request.status >= 200 && request.status < 400) {
            // dispatch
            self.eDetailSet();
            self.object.dispatchEvent(new CustomEvent('response.xt.ajax', {detail: self.eDetail}));
            // duration
            self.detail.requestDuration -= new Date() - self.detail.requestDate;
            clearTimeout(parseFloat(self.object.dataset.xtAjaxDurationTimeout));
            if (self.detail.requestDuration > 0) {
              self.object.dataset.xtAjaxDurationTimeout = setTimeout( function() {
                // success
                self.ajaxSuccess(element, url, request.responseText);
              }, self.detail.requestDuration).toString();
            } else {
              // success
              self.ajaxSuccess(element, url, request.responseText);
            }
          } else {
            // dispatch
            self.eDetailSet();
            self.eDetail.error = true;
            self.object.dispatchEvent(new CustomEvent('response.xt.ajax', {detail: self.eDetail}));
            // error
            self.ajaxError(element, url, request.responseText);
          }
        };
        request.onerror = function () {
          self.ajaxError(element, url, request.responseText);
        };
        request.send();
      });
    }
  }

  /**
   * ajax success
   * @param {Node|HTMLElement|EventTarget|Window} element Base node
   * @param {String} url Url to get
   * @param {String} responseText Html response
   */
  ajaxSuccess(element, url, responseText) {
    let self = this;
    let options = self.options;
    // set substitute
    let html = document.createElement('html');
    html.innerHTML = responseText.trim();
    let title = html.querySelectorAll('head title')[0].innerHTML;
    let replace = html.querySelectorAll(options.query)[0];
    // data-xt-ajax-keep
    /*
    // NEEDS constructor && !object.dataset.xtAjaxKept // not when ajax-kept
    //DOES NOT WORK it doesn't copy the events..
    for (let tr of self.queryElement.querySelectorAll('[data-xt-ajax-keep]')) {
      // replace
      let trId = tr.getAttribute('data-xt-ajax-keep');
      let rep = replace.querySelectorAll('[data-xt-ajax-keep="' + trId + '"]');
      if (rep.length) {
        rep = rep[0];
        if (tr.dataset.xtAjaxKept !== url) {
          tr.dataset.xtAjaxKept = url;
          // copy
          let changed = rep.parentNode.replaceChild(tr, rep);
          // copy events
          let elsTr = Array.from(rep.querySelectorAll('*'));
          elsTr.push(rep);
          let elsCh = Array.from(changed.querySelectorAll('*'));
          elsCh.push(changed);
          for (let i = 0; i < elsTr.length; i++) {
            let elTr = elsTr[i];
            let elCh = elsCh[i];
            if (elCh) {
              // check storage for events
              let storages = Xt.dataStorage.getAll(elTr);
              if (storages) {
                for (let [key, value] of storages) {
                  // copy events
                  let handler = Xt.dataStorage.put(elCh, key, value);
                  elCh.removeEventListener('click', handler);
                  elCh.addEventListener('click', handler);
                }
              }
            }
          }

        }
      }
    }
    */
    // populate dom
    self.queryElement.outerHTML = replace.outerHTML;
    // pushstate
    self.pushState(url, title);
    // garbage collector
    html = null;
    replace = null;
    // dispatch
    self.eDetailSet();
    self.object.dispatchEvent(new CustomEvent('done.xt.ajax', {detail: self.eDetail}));
  }

  /**
   * ajax error
   * @param {Node|HTMLElement|EventTarget|Window} element Base node
   * @param {String} url Url to get
   * @param {String} responseText Html response
   */
  ajaxError(element, url, responseText) {
    let self = this;
    // off element
    if (element) {
      self.eventOff(element);
    }
    // dispatch
    self.eDetailSet();
    self.eDetail.error = true;
    self.object.dispatchEvent(new CustomEvent('done.xt.ajax', {detail: self.eDetail}));
  }

  /**
   * history pushstate
   */
  pushState(url, title) {
    let self = this;
    // push object state
    if (!history.state || !history.state.url || history.state.url !== url) {
      document.title = title;
      self.detail.locationFrom = new URL(location);
      history.pushState({'url': url, 'title': title}, title, url);
    } else {
      document.title = history.state.title;
    }
  }

}

//////////////////////
// defaults
//////////////////////

Ajax.componentName = 'ajax';
Ajax.defaults = {
  "query": "body", // needs to be unique
  "baseUrl": "/",
  "duration": false,
  "elements": "a[href]:not([href^='#'])",
  "class": "active",
  "on": "click",
  "toggle": false,
  "min": 0,
  "max": 1,
  "instant": true,
  "aria": false
};

//////////////////////
// export
//////////////////////

export default Ajax;