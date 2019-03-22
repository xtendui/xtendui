//////////////////////
// import
//////////////////////

import Xt from '../xtend';
import Core from '../core';

//////////////////////
// Scroll
//////////////////////

class Scroll extends Core {

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
    let scrollHandler = Xt.dataStorage.put(window, options.on + '.' + self.namespace,
      self.eventScrollHandler.bind(self));
    if (options.on) {
      let events = [...options.on.split(' ')];
      for (let event of events) {
        addEventListener(event, scrollHandler, Xt.passiveSupported ? {passive: true} : false);
      }
    }
    addEventListener('scroll.xt.scroll', scrollHandler);
    requestAnimationFrame(self.eventScrollHandler.bind(self));
  }

  //////////////////////
  // handler
  //////////////////////

  /**
   * element on handler
   * @param {Event} e
   */
  eventScrollHandler(e = null) {
    let self = this;
    // handler
    if (!e || !e.detail || !e.detail.skip) { // needed because we trigger .xt event
      Xt.eventDelay(e, self.object, function () {
        self.eventScroll();
      }, 'resize.xt.scroll');
    }
  }

  //////////////////////
  // event
  //////////////////////

  /**
   * window scroll
   */
  eventScroll() {
    let self = this;
    let options = self.options;
    // disabled
    if (self.disabled && !self.initial) {
      return false;
    }
    // vars
    let currentOn = 0;
    let currentOff = 0;
    let currentsOn = [];
    let currentsOff = [];
    let scrollInverse = false;
    let scrollHeight = window.innerHeight;
    let scrollingElement = document.scrollingElement;
    let scrollTop = scrollingElement.scrollTop;
    // direction
    if (scrollTop < self.detail.scrollTopOld) {
      scrollInverse = true;
    }
    // core
    for (let el of self.elements) {
      if (!el.classList.contains('scroll--block') && el.offsetParent
        && (el.offsetWidth || el.offsetHeight || el.getClientRects().length)) { // :visible
        // vars
        let elTop = el.offsetParent.getBoundingClientRect().top + el.offsetTop; // we use parents to not include transforms animations
        let elHeight = el.offsetHeight;
        // scroll
        let changed = false;
        let top = elTop + scrollTop;
        let bottom = top + elHeight;
        let dist = options.distance;
        if (typeof dist == 'string' || dist instanceof String) {
          let posPercent = dist.indexOf('%');
          if (posPercent !== -1) {
            dist = scrollHeight * parseFloat(dist) / 100;
          }
        }
        // activation
        let topDist = top - scrollTop - scrollHeight + dist;
        let bottomDist = bottom - scrollTop - dist;
        if (topDist <= 0 && bottomDist >= 0) {
          // inside
          changed = self.checkOn(el);
          if (changed) {
            currentsOn.push(el);
            cancelAnimationFrame(parseFloat(el.dataset.xtEventFrame));
            el.dataset.xtEventFrame = requestAnimationFrame(function () {
              currentOn++;
              el.dataset.xtOnCount = currentOn.toString();
              el.dataset.xtOnTot = currentsOn.length.toString();
              self.eventOn(el);
            }).toString();
          }
        } else {
          // outside
          changed = self.checkOff(el);
          el.classList.add('scroll--visible');
          if (changed) {
            el.classList.add('scroll--scroll');
            currentsOff.push(el);
            cancelAnimationFrame(parseFloat(el.dataset.xtEventFrame));
            el.dataset.xtEventFrame = requestAnimationFrame(function () {
              currentOff++;
              el.dataset.xtOffCount = currentOff.toString();
              el.dataset.xtOffTot = currentsOff.length.toString();
              self.eventOff(el);
            }).toString();
          }
        }
        // direction
        if (changed) {
          if (scrollInverse) {
            el.classList.remove('scroll--down');
            el.classList.add('scroll--up');
          } else {
            el.classList.add('scroll--down');
            el.classList.remove('scroll--up');
          }
        }
        // ratio
        let totalDist = bottomDist - topDist;
        let ratio = -topDist / totalDist;
        ratio -= options.ratio;
        if (ratio < -options.ratio || ratio > 1 - options.ratio) {
          continue;
        }
        // dispatch
        let detail = self.eDetailSet();
        detail.scrollInverse = scrollInverse;
        detail.scrollingElement = scrollingElement;
        detail.scrollHeight = scrollHeight;
        detail.scrollTop = scrollTop;
        detail.currentsOn = currentsOn;
        detail.currentsOff = currentsOff;
        detail.elTop = elTop;
        detail.elHeight = elHeight;
        detail.top = top;
        detail.bottom = bottom;
        detail.dist = dist;
        detail.topDist = topDist;
        detail.bottomDist = bottomDist;
        detail.totalDist = totalDist;
        detail.ratio = ratio;
        el.dispatchEvent(new CustomEvent('change.xt.scroll', {detail: detail}));
      }
    }
    // save for direction
    cancelAnimationFrame(parseFloat(self.object.dataset.xtEventFrame));
    self.object.dataset.xtEventFrame = requestAnimationFrame(function () {
      self.detail.scrollTopOld = scrollTop;
    }).toString();
  }

}

//////////////////////
// option
//////////////////////

Scroll.componentName = 'xt-scroll';
Scroll.optionsDefault = {
  "elements": ".scroll",
  "class": "active",
  "on": "scroll resize",
  "min": 0,
  "max": "Infinity",
  "instant": true,
  "distance": "20%",
  "ratio": 0.5,
  "aria": false
};

//////////////////////
// export
//////////////////////

export default Scroll;