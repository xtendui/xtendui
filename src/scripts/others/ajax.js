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
   * init currents
   */
  initCurrents() {
    let self = this;
    super.initCurrents();
    // detect url
    let url;
    if (history.state && history.state.url) {
      // detect from history
      url = history.state.url;
    } else {
      // detect from url location (absolute url without domain name)
      let loc = window.location.href.split('#')[0];
      url = loc.replace(/https?:\/\/[^\/]+/i, '');
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
   * element popstate handler
   * @param {Event} e
   */
  eventPopstateHandler(e) {
    let self = this;
    // handler
    if (!e.detail || !e.detail.skip) {
      if (history.state && history.state.url) {
        self.ajaxCall(history.state.url);
      }
    }
  }

  //////////////////////
  // queue util
  //////////////////////

  /**
   * queue on done
   * @param {Object} obj Queue object
   * @param {String} type Type of element
   * @param {Boolean} skipQueue If skip queue
   */
  queueOnDone(obj, type, skipQueue = false) {
    super.queueOnDone(obj, type, skipQueue);
    let self = this;
    // check
    if (obj[type] && !skipQueue) {
      // done
      let done = 0;
      for (let type in obj) {
        if (obj[type].done) {
          done++;
        }
      }
      // ajax on done
      if (done === Object.entries(obj).length) {
        self.ajaxCall(obj[type].groupElements.single.getAttribute('href'));
      }
    }
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
    let index = function (url) {
      let found;
      found = url.indexOf('//') !== -1;
      return found;
    };
    let domain = function (url) {
      return url.replace('http://', '').replace('https://', '').replace('//', '').split('/')[0];
    };
    if (index(url)) {
      if (domain(location.href) !== domain(url)) {
        return false;
      }
    }
    // make ajax call
    if (url) {
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
    let target = self.object.querySelectorAll(options.query)[0] || self.object;
    let html = document.createElement('html');
    html.innerHTML = responseText.trim();
    let title = html.querySelectorAll('head title')[0].innerHTML;
    let replace = html.querySelectorAll(options.query)[0];
    // data-xt-ajax-keep
    /*
    // NEEDS constructor && !object.dataset.xtAjaxKept // not when ajax-kept
    //DOES NOT WORK it doesn't copy the events..
    for (let tr of target.querySelectorAll('[data-xt-ajax-keep]')) {
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
    target.outerHTML = replace.outerHTML;
    // pushstate
    self.pushState(url, title);
    // garbage collector
    html = null;
    replace = null;
    // dispatch
    self.eDetailSet();
    target.dispatchEvent(new CustomEvent('ajax.xt', {detail: self.eDetail}));
  }

  /**
   * ajax error
   * @param {String} url Url to get
   * @param {String} responseText Html response
   */
  ajaxError(url, responseText) {
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
  "elements": "a[href]",
  "class": "active",
  "on": "click",
  "min": 0,
  "max": "Infinity",
  "aria": false
};

//////////////////////
// export
//////////////////////

export default Ajax;