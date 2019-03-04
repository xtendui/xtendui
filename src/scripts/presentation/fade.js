//////////////////////
// import
//////////////////////

import Xt from '../xtend';
import Core from '../core';

//////////////////////
// Fade
//////////////////////

class Fade extends Core {

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
   * init events
   */
  initEvents() {
    let self = this;
    let options = self.options;
    // event on
    let fadeHandler = Xt.dataStorage.put(window, options.on + '.' + self.namespace,
      self.eventFadeHandler.bind(self));
    if (options.on) {
      let events = [...options.on.split(' ')];
      for (let event of events) {
        addEventListener(event, fadeHandler, Xt.passiveSupported ? {passive: true} : false);
      }
    }
    addEventListener('scroll.xt.fade', fadeHandler);
    self.eventFadeHandler();
  }

  //////////////////////
  // handler
  //////////////////////

  /**
   * element on handler
   * @param {Event} e
   */
  eventFadeHandler(e = null) {
    let self = this;
    // handler
    if (!e || !e.detail || !e.detail.skip) { // needed because we trigger .xt event
      Xt.eventDelay(e, self.object, function () {
        self.eventFade();
      }, 'resize.xt.fade');
    }
  }

  //////////////////////
  // event
  //////////////////////

  /**
   * window scroll
   */
  eventFade() {
    let self = this;
    let options = self.options;
    // disabled
    if (self.disabled && !self.initial) {
      return false;
    }
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
      if (!el.classList.contains('fade--block') && el.offsetParent
        && (el.offsetWidth || el.offsetHeight || el.getClientRects().length)) { // :visible
        // vars
        let rectElTop = el.offsetParent.getBoundingClientRect().top + el.offsetTop; // we use parents to not include transforms animations
        let heightEl = parseFloat(getComputedStyle(el).height);
        // scroll
        let changed = false;
        let top = rectElTop + scrollTop;
        let bottom = top + heightEl;
        let dist = options.distance;
        if (typeof dist == 'string' || dist instanceof String) {
          let posPercent = dist.indexOf('%');
          if (posPercent !== -1) {
            dist = windowHeight * parseFloat(dist) / 100;
          }
        }
        // activation
        let checkTop = scrollTop + windowHeight >= top + dist;
        let checkBottom = scrollTop < bottom - dist;
        if (checkTop && checkBottom) {
          // inside
          changed = self.checkOn(el);
          if (changed) {
            currents.push(el);
            cancelAnimationFrame(parseFloat(el.dataset.xtEventFrame));
            el.dataset.xtEventFrame = requestAnimationFrame(function () {
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
            cancelAnimationFrame(parseFloat(el.dataset.xtEventFrame));
            el.dataset.xtEventFrame = requestAnimationFrame(function () {
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
// option
//////////////////////

Fade.componentName = 'xt-fade';
Fade.optionsDefault = {
  "elements": ".fade",
  "class": "active",
  "on": "scroll resize",
  "min": 0,
  "max": "Infinity",
  "instant": true,
  "distance": "20%",
  "aria": false
};

//////////////////////
// export
//////////////////////

export default Fade;