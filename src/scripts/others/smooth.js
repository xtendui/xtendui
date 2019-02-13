/* xtend (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

import Xt from '../xtend';
import Core from '../core';

//////////////////////
// smooth
//////////////////////

class Smooth extends Core {

  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsJs User options
   * @constructor
   */
  constructor(object, optionsJs = {}) {
    super(object, optionsJs);
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
    self.subject = null;
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
    self.initVars();
    self.initSetup();
    self.initEvents();
  }

  /**
   * init vars
   */
  initSetup() {
    let self = this;
    super.initSetup();
    // scrollElement
    self.scrollElement = self.options.scrollElement;
    self.destroyElements.push(self.scrollElement);
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
    self.object = self.object ? self.object : document.documentElement; // document.scrollingElement
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
    // subject
    self.subject = null;
    for (let el of e.path) {
      if (getComputedStyle(el).overflowY === 'scroll') {
        self.subject = el;
        break;
      }
    }
    if (!self.subject) {
      return false;
    } else if (self.subject === document.body) {
      self.subject = self.object; // document.scrollingElement
    }
    // prevent default scrolling
    e.preventDefault();
    // vars
    let scrollMax = self.subject.scrollHeight - self.subject.clientHeight - 1;
    let delta = -e.deltaY || -e.detail || e.wheelDelta || e.wheelDeltaY;
    if (delta === 0) {
      return;
    }
    if (e.deltaMode === 1) {
      // deltaMode 1: by lines
      delta *= 30;
    } else if (e.deltaMode === 2) {
      // deltaMode 2: by pages
      delta *= self.subject.clientHeight;
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
    let scrollCurrent = self.subject.scrollTop;
    let delta = self.detail.scrollTop - scrollCurrent;
    let sign = Math.sign(delta);
    // momentum
    let fncFriction = options.wheel.friction;
    if (typeof fncFriction === 'string') {
      fncFriction = new Function('delta', fncFriction);
    }
    delta = fncFriction(Math.abs(delta)) * sign;
    let scrollFinal = scrollCurrent + delta;
    // fix math on direction to stop loop
    if (delta < 0) {
      scrollFinal = Math.floor(scrollFinal);
    } else if (delta > 0) {
      scrollFinal = Math.ceil(scrollFinal);
    }
    // set
    self.subject.scrollTop = scrollFinal;
    // loop
    if (Math.abs(delta) >= options.wheel.limit) {
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
// option
//////////////////////

Smooth.componentName = 'xt-smooth';
Smooth.optionsDefault = {
  "scrollElement": window,
  "wheel": {
    "limit": .5,
    "friction": "return delta / 9"
  }
};

//////////////////////
// export
//////////////////////

export default Smooth;