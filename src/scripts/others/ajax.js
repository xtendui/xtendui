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
    document.title = 'initial';
    self.pushState(url, 'initial');
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

  /**
   * element popstate handler
   * @param {Event} e
   */
  eventPopstateHandler(e) {
    let self = this;
    // handler
    //console.log(e, history);
    if (!e.detail || !e.detail.skip) {
      if (history.state && history.state.url) {
        self.ajaxCall(history.state.url, self.targets);
      }
    }
  }

  //////////////////////
  // queue utils
  //////////////////////

  /**
   * queue on done
   * @param {Object} obj Queue object
   * @param {String} type Type of element
   * @param {Boolean} skipQueue If skip queue
   */
  queueOnDone(obj, type, skipQueue = false) {
    let self = this;
    super.queueOnDone(obj, type, skipQueue);
    // done
    obj[type].done = true;
    let done = 0;
    for (let type in obj) {
      if (obj[type].done) {
        done++;
      }
    }
    // ajax on done
    if (done === Object.entries(obj).length) {
      self.ajaxCall(obj[type].groupElements.single.getAttribute('href'), self.targets);
    }
  }

  //////////////////////
  // ajax
  //////////////////////

  /**
   * ajax call
   * @param {String} url Url to get
   * @param {NodeList|Array} targets Targets to replace content
   */
  ajaxCall(url, targets) {
    let self = this;
    // make ajax call
    if (url) {
      let request = new XMLHttpRequest();
      request.open('GET', url, true);
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          self.ajaxSuccess(url, targets, request.responseText);
        } else {
          self.ajaxError(url, targets, request.responseText);
        }
      };
      request.onerror = function() {
        self.ajaxError(url, targets, request.responseText);
      };
      request.send();
    }
  }

  /**
   * ajax success
   * @param {String} url Url to get
   * @param {NodeList|Array} targets Targets to replace content
   * @param {String} responseText Html response
   */
  ajaxSuccess(url, targets, responseText) {
    let self = this;
    let options = self.options;
    // content
    let target = targets[0];
    let html = document.createElement('html');
    html.innerHTML = responseText.trim();
    let replace = html.querySelectorAll(options.targets)[0];
    // replace data-xt-ajax-keep
    for (let keep of target.querySelectorAll('[data-xt-ajax-keep]')) {
      let id = keep.getAttribute('data-xt-ajax-keep');
      replace.querySelectorAll('[data-xt-ajax-keep="' + id + '"]')[0].outerHTML = keep.outerHTML;
    }
    // populate dom
    target.innerHTML = replace.innerHTML;
    // pushstate
    console.log(html.title);
    self.pushState(url, html.title);
  }

  /**
   * ajax error
   * @param {String} url Url to get
   * @param {NodeList|Array} targets Targets to replace content
   * @param {String} responseText Html response
   */
  ajaxError(url, targets, responseText) {
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
    }
  }

}

//////////////////////
// defaults
//////////////////////

Ajax.componentName = 'ajax';
Ajax.defaults = {
  "elements": "a[href^=\"/\"]",
  "targets": "body", // MUST BE UNIQUE
  "class": "active",
  "on": "click",
  "min": 0,
  "max": Infinity
};

//////////////////////
// export
//////////////////////

export default Ajax;