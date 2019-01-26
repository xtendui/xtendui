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
    let options = self.options;
    // queryElement
    self.queryElement = self.object.querySelectorAll(options.query)[0] || self.object;
    // generate groups
    self.groupLink = [];
    for (let element of self.elements) {
      // populate
      let link = element.getAttribute('href').split('#')[0];
      if (!self.groupLink[link]) {
        self.groupLink[link] = [];
      }
      self.groupLink[link].push(element);
      // assign group
      element.setAttribute('data-xt-group', self.namespace + '-' + link);
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
      if (location.hostname === element.hostname) {
        let loc = location.pathname + location.search;
        let url = options.baseUrl + element.pathname + element.search;
        if (url !== '' && loc === url) {
          element.classList.add(...options.classes);
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
      url = location.pathname;
    }
    // set pushstate
    self.pushState(url, document.title);
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
      self.ajaxCall(history.state.url);
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
   * @param {String} url Url to get
   */
  ajaxCall(url) {
    let self = this;
    // check url
    if (!self.detail.initial) {
      if (self.urlHasHost(url)) {
        if (location.pathname !== self.urlWithoutHost(url)) {
          return false;
        }
      }
      // ajax call
      if (url) {
        // dispatch
        self.eDetailSet();
        self.queryElement.dispatchEvent(new CustomEvent('request.xt.ajax', {detail: self.eDetail}));
        // call
        setTimeout(function(){
        let request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = function () {
          if (request.status >= 200 && request.status < 400) {
            self.ajaxSuccess(url, request.responseText);
          } else {
            self.ajaxError(url, request.responseText);
          }
        };
        request.onerror = function () {
          self.ajaxError(url, request.responseText);
        };
        request.send();
        }, 2000);
      }
    }
  }

  /**
   * ajax success
   * @param {String} url Url to get
   * @param {String} responseText Html response
   */
  ajaxSuccess(url, responseText) {
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
    self.queryElement.dispatchEvent(new CustomEvent('response.xt.ajax', {detail: self.eDetail}));
    self.queryElement.dispatchEvent(new CustomEvent('success.xt.ajax', {detail: self.eDetail}));
  }

  /**
   * ajax error
   * @param {String} url Url to get
   * @param {String} responseText Html response
   */
  ajaxError(url, responseText) {
    let self = this;
    // dispatch
    self.eDetailSet();
    self.queryElement.dispatchEvent(new CustomEvent('response.xt.ajax', {detail: self.eDetail}));
    self.queryElement.dispatchEvent(new CustomEvent('error.xt.ajax', {detail: self.eDetail}));
    console.log('ajax error error:', responseText);
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
// defaults
//////////////////////

Ajax.componentName = 'ajax';
Ajax.defaults = {
  "query": "body", // needs to be unique
  "baseUrl": "",
  "elements": "a[href]:not([href^='#'])",
  "class": "active",
  "on": "click",
  "toggle": false,
  "min": 0,
  "max": "Infinity",
  "aria": false
};

//////////////////////
// export
//////////////////////

export default Ajax;