/* xtend (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

'use strict';

import Xt from '../xtend';

//////////////////////
// smooth
//////////////////////

class Smooth {

  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} jsOptions User options
   * @constructor
   */
  constructor(object, jsOptions = {}) {
    let self = this;
    // constructor
    if (object && !object.dataset.xtSmoothDone) {
      object.dataset.xtSmoothDone = 'true';
      // init
      self.object = object;
      self.jsOptions = jsOptions;
      self.init();
    }
  }

  //////////////////////
  // init
  //////////////////////

  /**
   * init
   */
  init() {
    let self = this;
    // defaults
    self.defaults = self.constructor.defaults;
    // js options
    self.options = Xt.merge([self.defaults, self.jsOptions]);
    // markup options
    let markupOptions = self.object.getAttribute('data-xt-' + self.constructor.componentName);
    self.options = Xt.merge([self.options, markupOptions ? JSON.parse(markupOptions) : {}]);
    // var
    self.scrollElement = self.options.scrollElement;
    self.detail = {};
    // init
    self.initStart();
  }

  /**
   * init start
   */
  initStart() {
    let self = this;
    // vars
    self.detail.scrollTopInitial = self.detail.scrollTopFinal = self.object.scrollTop;
    // handler
    let eWheel = 'onwheel' in self.object ? 'wheel' : self.object.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';
    self.object = self.object ? self.object : document.documentElement; // polyfill document.scrollingElement
    self.object.removeEventListener(eWheel, self.eventWheel.bind(self));
    self.object.addEventListener(eWheel, self.eventWheel.bind(self));
    self.scrollElement.removeEventListener('scroll', self.eventScroll.bind(self));
    self.scrollElement.addEventListener('scroll', self.eventScroll.bind(self));
  }

  //////////////////////
  // event
  //////////////////////

  /**
   * event scroll
   */
  eventScroll() {
    let self = this;
    // save scroll position for eventWheel
    self.detail.scrollTopInitial = self.object.scrollTop;
    // dispatch
    self.object.dispatchEvent(new CustomEvent('scroll.xt.smooth', {detail: self.eDetail}));
  }

  /**
   * event on wheel
   * @param {Event} e
   */
  eventWheel(e) {
    let self = this;
    // prevent default scrolling
    e.preventDefault();
    // not when overflow hidden
    if (getComputedStyle(self.object).overflow.split(' ')[0] === 'hidden'
      || (self.object === document.documentElement && getComputedStyle(self.object.querySelectorAll('body')[0]).overflowY === 'hidden')) { // fix when using document.scrollingElement
      return false;
    }
    // vars
    let scrollMax = self.object.scrollHeight - self.object.clientHeight - 1;
    let delta = -e.deltaY || -e.detail || e.wheelDelta || e.wheelDeltaY;
    if (delta === 0) {
      return;
    }
    if (e.deltaMode === 1) {
      // deltaMode 1: by lines
      delta *= 30;
    } else if (e.deltaMode === 2) {
      // deltaMode 2: by pages
      delta *= self.object.clientHeight;
    }
    // set
    self.detail.scrollTopFinal -= delta;
    self.detail.scrollTopFinal = Math.max(0, Math.min(self.detail.scrollTopFinal, scrollMax)); // scroll limit
    // dispatch
    self.object.dispatchEvent(new CustomEvent('wheel.xt.smooth', {detail: self.eDetail}));
  }

}

//////////////////////
// defaults
//////////////////////

Smooth.componentName = 'smooth';
Smooth.defaults = {
  "scrollElement": window
};

//////////////////////
// export
//////////////////////

export default Smooth;