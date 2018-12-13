/* xtend (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

'use strict';

import Xt from '../xtend';
import Core from '../core';

//////////////////////
// Fade
//////////////////////

class Fade extends Core {

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
   * init events
   */
  initEvents() {
    let self = this;
    let options = self.options;
    // event on
    let fadeHandler = Xt.dataStorage.put(window, 'fadeHandler' + self.namespace,
      self.eventFadeHandler.bind(self));
    if (options.on) {
      let events = [...options.on.split(' ')];
      for (let event of events) {
        window.removeEventListener(event, fadeHandler);
        window.addEventListener(event, fadeHandler);
      }
    }
    window.removeEventListener('scroll.xt.fade', fadeHandler);
    window.addEventListener('scroll.xt.fade', fadeHandler);
    // listener dispatch initial only 1 time next frame
    if (!document.documentElement.dataset.xtFadeDone) {
      document.documentElement.dataset.xtFadeDone = 'true';
      window.requestAnimationFrame(function () {
        window.dispatchEvent(new CustomEvent('scroll.xt.fade'));
        delete document.documentElement.dataset.xtFadeDone;
      });
    }
  }

  /**
   * element on handler
   * @param {Event} e
   */
  eventFadeHandler(e) {
    let self = this;
    // handler
    if (!e.detail || !e.detail.skip) {
      self.eventScroll(self.object);
    }
  }

  //////////////////////
  // events
  //////////////////////

  /**
   * window scroll
   */
  eventScroll() {
    let self = this;
    let options = self.options;
    // vars
    let current = 0;
    let currents = [];
    let scrollInverse = false;
    let windowHeight = window.innerHeight;
    let scrollingElement = document.scrollingElement;
    let scrollTop = scrollingElement.scrollTop;
    let scrollTopOld = self.detail.scrollTopOld;
    // direction
    if (scrollTop < scrollTopOld) {
      scrollInverse = true;
    }
    // core
    for (let el of self.elements) {
      if (el.offsetParent && !el.classList.contains('fade--block')) {
        // vars
        let rectElTop = el.offsetParent.getBoundingClientRect().top + el.offsetTop; // we use parents to not include transforms animations
        let heightEl = parseFloat(getComputedStyle(el).height);
        // scroll
        let changed = false;
        let top = rectElTop + scrollTop;
        let bottom = top + heightEl;
        let dist = windowHeight * options.distance;
        // activation
        let checkTop = scrollTop + windowHeight >= top + dist;
        let checkBottom = scrollTop < bottom - dist;
        if (checkTop && checkBottom) {
          // inside
          changed = self.checkOn(el);
          if (changed) {
            currents.push(el);
            window.cancelAnimationFrame(parseFloat(el.dataset.xtEventFrame));
            el.dataset.xtEventFrame = window.requestAnimationFrame(function () {
              current++;
              el.dataset.xtOnCount = current.toString();
              el.dataset.xtOnTot = currents.length.toString();
              self.eventOn(el);
            }).toString();
          }
        } else {
          // outside
          changed = self.checkOff(el);
          el.classList.add('fade--visible');
          if (changed) {
            el.classList.add('fade--scroll');
            currents.push(el);
            window.cancelAnimationFrame(parseFloat(el.dataset.xtEventFrame));
            el.dataset.xtEventFrame = window.requestAnimationFrame(function () {
              current++;
              el.dataset.xtOffCount = current.toString();
              el.dataset.xtOffTot = currents.length.toString();
              self.eventOff(el);
            }).toString();
          }
        }
        // direction
        if (changed) {
          if (scrollInverse) {
            el.classList.remove('fade--down');
            el.classList.add('fade--up');
          } else {
            el.classList.add('fade--down');
            el.classList.remove('fade--up');
          }
        }
      }
    }
    // save for direction
    self.detail.scrollTopOld = scrollTop;
  }

}

//////////////////////
// defaults
//////////////////////

Fade.componentName = 'fade';
Fade.defaults = {
  "elements": ".fade",
  "class": "active",
  "on": "scroll resize",
  "min": 0,
  "max": Infinity,
  "instant": true,
  "distance": 0.2,
  "aria": false
};

//////////////////////
// export
//////////////////////

export default Fade;