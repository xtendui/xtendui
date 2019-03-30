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
          container = Xt.createElement('<div class="xt-container xt-fixed--check"></div>');
          el.before(container);
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
        let indicatorTrigger = Xt.createElement('<div class="xt-indicator xt-indicator--trigger"></div>');
        document.body.append(indicatorTrigger);
        let indicatorStart = Xt.createElement('<div class="xt-indicator xt-indicator--start"></div>');
        document.body.append(indicatorStart);
        let indicatorEnd = Xt.createElement('<div class="xt-indicator xt-indicator--end"></div>');
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
    let scrollHandler = Xt.dataStorage.put(window, options.on + '.' + self.namespace,
      self.eventScrollHandler.bind(self));
    if (options.on) {
      let events = [...options.on.split(' ')];
      for (let event of events) {
        addEventListener(event, scrollHandler, Xt.passiveSupported ? {passive: true} : false);
      }
    }
    addEventListener('scroll.xt.scroll', scrollHandler);
    requestAnimationFrame(function () {
      self.eventScrollHandler(null, true);
    });
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
      }, self.namespaceComponent + 'Resize');
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
        let distance = Xt.windowPercent(options.scroll.distance);
        let trigger = Xt.windowPercent(options.scroll.trigger);
        let start = elTop - windowHeight + Xt.windowPercent(options.scroll.start) + distance;
        start = start < trigger ? trigger : start; // limit fixes activation on page top
        let end = options.scroll.end ? start + Xt.windowPercent(options.scroll.end) - distance : elTop + elHeight + trigger - distance;
        end = end > trigger + scrollHeight - window.innerHeight ? trigger + scrollHeight - window.innerHeight : end; // limit fixes deactivation on page bottom
        let startMin = end - Xt.windowPercent(options.scroll.min);
        start = start > startMin ? startMin : start; // limit fixes deactivation on page bottom
        // ratio
        let current = scrollTop + trigger - start;
        let total = end - start;
        let ratio = Math.max(0, current) / total;
        ratio = ratio > 0 ? ratio : 0;
        ratio = ratio < 1 ? ratio : 1;
        // activation
        if (current >= 0 && current <= total) {
          // inside
          changed = self.checkOn(el);
          if (changed) {
            currentsOn.push(el);
            el.dataset[self.namespaceComponent + 'ScrollFrame'] = requestAnimationFrame(function () {
              // initial
              if (initial) {
                el.dataset[self.namespaceComponent + 'Initial'] = 'true';
              } else {
                delete el.dataset[self.namespaceComponent + 'Initial'];
              }
              // activate
              el.dataset[self.namespaceComponent + 'OnCount'] = currentOn.toString();
              el.dataset[self.namespaceComponent + 'OnTot'] = currentsOn.length.toString();
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
            cancelAnimationFrame(parseFloat(el.dataset[self.namespaceComponent + 'ScrollFrame']));
            el.dataset[self.namespaceComponent + 'ScrollFrame'] = requestAnimationFrame(function () {
              // initial
              if (initial) {
                el.dataset[self.namespaceComponent + 'Initial'] = 'true';
              } else {
                delete el.dataset[self.namespaceComponent + 'Initial'];
              }
              // deactivate
              el.dataset[self.namespaceComponent + 'OffCount'] = currentOff.toString();
              el.dataset[self.namespaceComponent + 'OffTot'] = currentsOff.length.toString();
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
          triggerEl.style.top = trigger + 'px';
          let startEl = document.body.querySelectorAll('.xt-indicator--start')[0];
          startEl.style.top = (start - scrollTop) + 'px';
          let endEl = document.body.querySelectorAll('.xt-indicator--end')[0];
          endEl.style.top = (end - scrollTop) + 'px';
          console.log('start: ' + start, 'end: ' + end, 'ratio: ' + ratio, 'current: ' + current, 'total: ' + total);
        }
        // dispatch
        let detail = self.eDetailSet();
        detail.ratio = ratio;
        detail.ratioInverse = 1 - ratio;
        detail.ratioDouble = 1 - Math.abs((ratio - 0.5) * 2);
        el.dispatchEvent(new CustomEvent('change.xt.scroll', {detail: detail}));
      }
    }
    // save for direction
    cancelAnimationFrame(parseFloat(self.object.dataset[self.namespaceComponent + 'ScrollObjectFrame']));
    self.object.dataset[self.namespaceComponent + 'ScrollObjectFrame'] = requestAnimationFrame(function () {
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