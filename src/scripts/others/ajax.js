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
   * init elements, targets and currents
   */
  initScope() {
    super.initScope();
  }

  //////////////////////
  //
  //////////////////////

  /**
   *
   */
  queueOnDone(obj, type, skipQueue = false) {
    super.queueOnDone(obj, type, skipQueue);
    let self = this;
    let options = self.options;
    // ajax on done
    for (let tr of self.targets) {
      //console.log(self.elements, self.targets);
      console.log(tr.querySelectorAll('[data-xt-ajax-keep]'));
    }
    /*
    var url;
    var found;
    if (history.state && history.state.url) {
      // detect from history
      url = history.state.url;
    } else {
      // detect from url location (absolute url without domain name)
      var loc = window.location.href.split('#')[0];
      url = loc.replace(/https?:\/\/[^\/]+/i, '');
    }
    settings.$elements.each( function() {
      if ($(this).attr('href') === url) {
        found = $(this);
        return false;
      }
    });
    if (found) {
      // set ajaxified
      settings.$targets.attr('data-xt-ajaxified', url);
      object.pushstate(url, document.title);
      // then on
      object.on(found);
      // api
      settings.$targets.trigger('ajax.init.xt', [object]);
    }
    */
  }


}

//////////////////////
// defaults
//////////////////////

Ajax.componentName = 'ajax';
Ajax.defaults = {
  "elements": "a[href^=\"/\"]",
  "targets": "body",
  "class": "active",
  "on": "click",
  "min": 0,
  "max": Infinity
};

//////////////////////
// export
//////////////////////

export default Ajax;