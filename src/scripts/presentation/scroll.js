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
   * init elements, targets and currents
   */
  initScope() {
    super.initScope();
    let self = this;
    let options = self.options;
    // loop
    self.targets = [];
    for (let el of self.elements) {
      if (!options.scroll.sticky) {
        // not sticky
        self.targets.push(el);
      } else {
        // sticky container
        let container = Xt.parents(el, '.xt-container')[0];
        if (!container) {
          container = Xt.createElement('<div class="xt-container xt-ignore xt-fixed--check"></div>');
          el.before(container);
          el.classList.add('xt-ignore');
          container.append(el);
        }
        // sticky clone
        let target = container.querySelectorAll('.xt-clone')[0];
        if (!target) {
          target = el.cloneNode(true);
          target.classList.add('xt-clone', 'xt-ignore');
          for (let elId of target.querySelectorAll('[id]')) {
            elId.setAttribute('id', elId.getAttribute('id') + '-clone');
          }
          for (let elName of target.querySelectorAll('[name]')) {
            elName.setAttribute('name', elName.getAttribute('name') + '-clone');
          }
          container.append(target);
        }
        self.targets.push(target);
        // sticky
        el.classList.add('xt-fixed', 'xt-sticky');
        if (options.scroll.sticky === 'absolute') {
          el.classList.add('xt-sticky--absolute');
        } else if (options.scroll.sticky === 'fixed') {
          el.classList.add('xt-sticky--fixed');
        } else if (options.scroll.sticky === 'fixed-always') {
          el.classList.add('xt-sticky--fixed-always');
        }
        if (target) {
          target.classList.add('xt-fixed', 'xt-sticky');
          if (options.scroll.sticky === 'absolute') {
            target.classList.add('xt-sticky--absolute');
          } else if (options.scroll.sticky === 'fixed') {
            target.classList.add('xt-sticky--fixed');
          } else if (options.scroll.sticky === 'fixed-always') {
            target.classList.add('xt-sticky--fixed-always');
          }
        }
      }
      // indicator
      if (el.classList.contains('indicator')) {
        let indicatorTrigger = Xt.createElement('<div class="xt-ignore xt-indicator xt-indicator--trigger"></div>');
        document.body.append(indicatorTrigger);
        let indicatorStart = Xt.createElement('<div class="xt-ignore xt-indicator xt-indicator--start"></div>');
        document.body.append(indicatorStart);
        let indicatorEnd = Xt.createElement('<div class="xt-ignore xt-indicator xt-indicator--end"></div>');
        document.body.append(indicatorEnd);
      }
    }
  }

  /**
   * init events
   */
  initEvents() {
    let self = this;
    let options = self.options;
    // event on
    if (options.on) {
      let scrollHandler = Xt.dataStorage.put(window, options.on + '.' + self.namespace,
        self.eventScrollHandler.bind(self));
      let events = [...options.on.split(' ')];
      for (let event of events) {
        addEventListener(event, scrollHandler, Xt.passiveSupported ? {passive: true} : false);
      }
      requestAnimationFrame(function () {
        self.eventScrollHandler(null, true);
      });
    }
  }

  //////////////////////
  // handler
  //////////////////////

  /**
   * element on handler
   * @param {Event} e
   * @param {Boolean} initial
   */
  eventScrollHandler(e = null, initial = false) {
    let self = this;
    // handler
    if (!e || !e.detail || !e.detail.skip) { // needed because we trigger .xt event
      Xt.eventDelay(e, self.object, function () {
        self.eventScroll(e, initial);
      }, self.componentNamespace + 'Resize');
    }
  }

  //////////////////////
  // event
  //////////////////////

  /**
   * window scroll
   * @param {Event} e
   * @param {Boolean} initial
   */
  eventScroll(e, initial) {
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
    let scrollingElement = document.scrollingElement;
    let scrollHeight = scrollingElement.scrollHeight;
    let scrollTop = scrollingElement.scrollTop;
    let windowHeight = Xt.windowHeight;
    // direction
    if (scrollTop < self.detail.scrollTopOld) {
      scrollInverse = true;
    }
    // core
    for (let tr of self.targets) {
      let el = self.getElementsFromTarget(tr)[0];
      el = el ? el : tr; // for not sticky: el is the same as tr
      if (!el.classList.contains('scroll--block') && Xt.visible(el)
        && tr.offsetParent) { // filter out document.documentElement
        // vars
        let changed = false;
        let elTop = tr.offsetParent.getBoundingClientRect().top + tr.offsetTop + scrollTop; // we use parents to not include transforms animations
        let elHeight = tr.offsetHeight;
        // position
        self.detail.distance = Xt.windowPercent(options.scroll.distance);
        self.detail.trigger = Xt.windowPercent(options.scroll.trigger);
        self.detail.start = elTop - windowHeight + Xt.windowPercent(options.scroll.start) + self.detail.distance;
        self.detail.start = self.detail.start < self.detail.trigger ? self.detail.trigger : self.detail.start; // limit fixes activation on page top
        self.detail.end = options.scroll.end ? self.detail.start + Xt.windowPercent(options.scroll.end) - self.detail.distance : elTop + elHeight + self.detail.trigger - self.detail.distance;
        self.detail.end = self.detail.end > self.detail.trigger + scrollHeight - window.innerHeight ? self.detail.trigger + scrollHeight - window.innerHeight : self.detail.end; // limit fixes deactivation on page bottom
        self.detail.min = self.detail.end - Xt.windowPercent(options.scroll.min);
        self.detail.start = self.detail.start > self.detail.min ? self.detail.min : self.detail.start; // limit fixes deactivation on page bottom
        // ratio
        let current = scrollTop + self.detail.trigger - self.detail.start;
        let total = self.detail.end - self.detail.start;
        self.detail.ratio = Math.max(0, current) / total;
        self.detail.ratio = self.detail.ratio > 0 ? self.detail.ratio : 0;
        self.detail.ratio = self.detail.ratio < 1 ? self.detail.ratio : 1;
        self.detail.ratioInverse = 1 - self.detail.ratio;
        self.detail.ratioDouble = 1 - Math.abs((self.detail.ratio - 0.5) * 2);
        // activation
        if (current >= 0 && current <= total) {
          // inside
          changed = self.checkOn(el);
          if (changed) {
            currentsOn.push(el);
            cancelAnimationFrame(parseFloat(el.dataset[self.componentNamespace + 'ScrollFrame']));
            el.dataset[self.componentNamespace + 'ScrollFrame'] = requestAnimationFrame(function () {
              // initial
              if (initial) {
                el.dataset[self.componentNamespace + 'Initial'] = 'true';
              } else {
                delete el.dataset[self.componentNamespace + 'Initial'];
              }
              // activate
              el.dataset[self.componentNamespace + 'OnCount'] = currentOn.toString();
              el.dataset[self.componentNamespace + 'OnTot'] = currentsOn.length.toString();
              currentOn++;
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
            cancelAnimationFrame(parseFloat(el.dataset[self.componentNamespace + 'ScrollFrame']));
            el.dataset[self.componentNamespace + 'ScrollFrame'] = requestAnimationFrame(function () {
              // initial
              if (initial) {
                el.dataset[self.componentNamespace + 'Initial'] = 'true';
              } else {
                delete el.dataset[self.componentNamespace + 'Initial'];
              }
              // deactivate
              el.dataset[self.componentNamespace + 'OffCount'] = currentOff.toString();
              el.dataset[self.componentNamespace + 'OffTot'] = currentsOff.length.toString();
              currentOff++;
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
        // indicator
        if (el.classList.contains('indicator')) {
          let triggerEl = document.body.querySelectorAll('.xt-indicator--trigger')[0];
          triggerEl.style.top = self.detail.trigger + 'px';
          let startEl = document.body.querySelectorAll('.xt-indicator--start')[0];
          startEl.style.top = (self.detail.start - scrollTop) + 'px';
          let endEl = document.body.querySelectorAll('.xt-indicator--end')[0];
          endEl.style.top = (self.detail.end - scrollTop) + 'px';
          console.log('start: ' + self.detail.start, 'end: ' + self.detail.end, 'ratio: ' + self.detail.ratio, 'ratioInverse: ' + self.detail.ratioInverse, 'ratioDouble: ' + self.detail.ratioDouble);
        }
        // dispatch
        cancelAnimationFrame(parseFloat(el.dataset[self.componentNamespace + 'ScrollDispatchFrame']));
        el.dataset[self.componentNamespace + 'ScrollDispatchFrame'] = requestAnimationFrame(function () {
          let detail = self.eDetailSet();
          el.dispatchEvent(new CustomEvent('change.xt.scroll', {detail: detail}));
        }).toString();
      }
    }
    // save for direction
    cancelAnimationFrame(parseFloat(self.object.dataset[self.componentNamespace + 'ScrollObjectFrame']));
    self.object.dataset[self.componentNamespace + 'ScrollObjectFrame'] = requestAnimationFrame(function () {
      self.detail.scrollTopOld = scrollTop;
    }).toString();
  }

}

//////////////////////
// option
//////////////////////

Scroll.componentName = 'xt-scroll';
Scroll.optionsDefault = {
  "elements": false,
  "on": "scroll resize",
  "instant": true,
  "scroll": {
    "sticky": false,
    "distance": 0,
    "trigger": "100%",
    "start": "100%",
    "end": false,
    "min": 100
  },
  "aria": false
};

//////////////////////
// export
//////////////////////

export default Scroll;