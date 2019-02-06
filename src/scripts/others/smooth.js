/* xtend (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

'use strict';

import Xt from '../xtend';
import Core from '../core';

//////////////////////
// smooth
//////////////////////

class Smooth extends Core {

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
   * init
   */
  init() {
    let self = this;
    // var
    self.detail = {};
    self.destroyElements = [self.object];
    // destroy if already done
    if (self.object.getAttribute('data-' + self.componentName + '-done')) {
      self.destroy();
    }
    // setup
    self.object.setAttribute('data-' + self.componentName + '-done', 'true');
    // set component to element
    Xt.set(self.object, self.componentName, self);
    // init
    self.initDefaults();
    self.initSetup();
    self.initEvents();
  }

  /**
   * init defaults
   */
  initDefaults() {
    let self = this;
    // defaults
    self.defaults = self.constructor.defaults;
    // js options
    self.options = Xt.merge([self.defaults, self.jsOptions]);
    // markup options
    let markupOptions = self.object.getAttribute('data-' + self.componentName);
    self.options = Xt.merge([self.options, markupOptions ? JSON.parse(markupOptions) : {}]);
    // var
    self.scrollElement = self.options.scrollElement;
    self.destroyElements.push(self.scrollElement);
  }

  /**
   * init namespace, container and options
   */
  initSetup() {
    let self = this;
    // namespace
    self.container = self.object;
    self.container.dataset.uniqueId = self.container.dataset.uniqueId ? self.container.dataset.uniqueId : Xt.getuniqueId();
    self.namespace = self.componentName + '-' + self.container.dataset.uniqueId;
  }

  /**
   * init events
   */
  initEvents() {
    let self = this;
    // save scroll position for eventWheel
    self.detail.moving = false;
    self.detail.scrollTop = self.detail.scrollTopInitial = self.object.scrollTop;
    // vars
    let eWheel = 'onwheel' in self.object ? 'wheel' : self.object.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';
    self.object = self.object ? self.object : document.documentElement; // polyfill document.scrollingElement
    // wheel
    let wheelHandler = Xt.dataStorage.put(self.object, eWheel + '.' + self.namespace,
      self.eventWheel.bind(self));
    self.object.addEventListener(eWheel, wheelHandler);
    // scroll
    let scrollHandler = Xt.dataStorage.put(self.scrollElement, 'scroll' + '.' + self.namespace,
      self.eventScroll.bind(self));
    self.scrollElement.addEventListener('scroll', scrollHandler, Xt.passiveSupported ? {passive: true} : false);
  }

  //////////////////////
  // event
  //////////////////////

  /**
   * event scroll
   */
  eventScroll(e) {
    let self = this;
    if (self.detail.scrollTopInitial !== self.object.scrollTop) {
      // after finished scrolling
      clearTimeout(parseFloat(self.object.dataset.xtSmoothScrollTimeout));
      self.object.dataset.xtSmoothScrollTimeout = setTimeout(function() {
        // scroll
        if (!self.detail.moving) {
          // save scroll position for eventWheel
          self.detail.scrollTop = self.detail.scrollTopInitial = self.object.scrollTop;
        }
        // dispatch
        self.object.dispatchEvent(new CustomEvent('scroll.xt.smooth', {detail: self.eDetail}));
      }, 50).toString();
    }
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
    self.detail.scrollTop -= delta;
    self.detail.scrollTop = Math.max(0, Math.min(self.detail.scrollTop, scrollMax)); // scroll limit
    // friction
    if (!self.detail.moving) {
      self.friction();
    }
    // dispatch
    self.object.dispatchEvent(new CustomEvent('wheel.xt.smooth', {detail: self.eDetail}));
  }

  //////////////////////
  // event util
  //////////////////////

  /**
   * friction
   */
  friction() {
    let self = this;
    let options = self.options;
    // vars
    self.detail.moving = true;
    let scrollCurrent = self.object.scrollTop;
    // set
    let delta = (self.detail.scrollTop - scrollCurrent) / options.friction;
    let scrollFinal = scrollCurrent + delta;
    if (delta < 0) { // fix math on direction to stop loop
      scrollFinal = Math.floor(scrollFinal);
    } else if (delta > 0) {
      scrollFinal = Math.ceil(scrollFinal);
    }
    self.object.scrollTop = scrollFinal;
    // loop
    if (Math.abs(delta) >= options.delta.min) {
      cancelAnimationFrame(window.smoothFrame);
      window.smoothFrame = requestAnimationFrame(function () {
        self.friction();
      });
    } else {
      self.detail.moving = false;
    }
  }


}

//////////////////////
// defaults
//////////////////////

Smooth.componentName = 'xt-smooth';
Smooth.defaults = {
  "scrollElement": window,
  "friction": 9,
  "delta": {
    "min": .5
  }
};

//////////////////////
// export
//////////////////////

export default Smooth;