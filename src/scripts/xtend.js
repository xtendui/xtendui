/* xtend (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

'use strict';

import {XtUtil} from './xtend-utils';

//////////////////////
// Xt
//////////////////////

class Xt {

  /**
   * constructor
   * @param {Node|HTMLElement} object Base node
   * @param {Object} jsOptions User options
   * @param {String} attr Attribute name with json options
   * @constructor
   */
  constructor(object, jsOptions = {}, attr) {
    this.object = object;
    if (this.object) {
      this.defaults = this.constructor.defaults;
      // js options
      this.options = XtUtil.merge([this.defaults, jsOptions]);
      // markup options
      let markupOptions = this.object.getAttribute(attr);
      this.options = XtUtil.merge([this.options, markupOptions ? JSON.parse(markupOptions) : {}]);
      // classes
      if (this.options.class) {
        this.options.classes = [...this.options.class.split(' ')];
      }
      // init
      this.initSetup();
      this.initScope();
      this.initEvents();
      this.initAria();
    }
  }

  //////////////////////
  // init
  //////////////////////

  /**
   * setup namespace, container and options
   */
  initSetup() {
    let self = this;
    let options = self.options;
    // setup (based on xtend mode)
    if (options.targets && options.targets.indexOf('#') !== -1) {
      // xtend all mode
      this.mode = 'unique';
      this.container = document.documentElement;
      options.max = Infinity;
      this.namespace = options.targets.toString() + '-' + options.classes.toString();
    } else {
      // xtend unique mode
      this.mode = 'multiple';
      this.container = this.object;
      this.namespace = XtUtil.getUniqueID();
    }
    // final namespace
    this.namespace = this.namespace.replace(/^[^a-z]+|[^\w:.-]+/gi, '');
    // currents array based on namespace (so shared between Xt objects)
    if (!this.getCurrents()) {
      this.setCurrents([]);
    }
  }

  /**
   * init elements, targets and currents
   */
  initScope() {
    let self = this;
    let options = self.options;
    // elements
    this.elements = [];
    if (options.elements) {
      this.elements = XtUtil.arrSingle(this.container.querySelectorAll(options.elements));
    }
    if (!this.elements.length) {
      this.elements = XtUtil.arrSingle(this.object);
      // @FIX on next frame set all elements querying the namespace
      XtUtil.requestAnimationFrame.call(window, function () {
        let namespaceQuery = '[data-xt-namespace=' + self.namespace + ']';
        self.elements = XtUtil.arrSingle(document.querySelectorAll(namespaceQuery));
      });
    }
    // targets
    this.targets = [];
    if (options.targets) {
      let arr = Array.from(this.container.querySelectorAll(options.targets));
      arr = arr.filter(x => !XtUtil.parents(x, options.targets).length); // filter out parent
      this.targets = arr;
    }
    // appendTo
    if (options.appendTo) {
      let appendToTarget = document.querySelectorAll(options.appendTo);
      if (appendToTarget.length) {
        for (let el of this.targets) {
          appendToTarget[0].appendChild(el);
        }
      }
    }
    // @FIX set namespace for next frame
    for (let el of this.elements) {
      el.setAttribute('data-xt-namespace', self.namespace);
    }
    // currents
    XtUtil.requestAnimationFrame.call(window, function () {
      if (self.elements.length) {
        // activate options.class
        for (let el of self.elements) {
          if (el.classList.contains(...options.classes)) {
            el.classList.remove(...options.classes); // remove to activate also targets
            self.eventOn(el);
          }
        }
        // if currents < min
        let todo = options.min - self.getCurrents().length;
        if (todo) {
          for (let i = 0; i < todo; i++) {
            self.eventOn(self.elements[i]);
          }
        }
      }
    });
  }

  /**
   * init aria
   */
  initAria() {
    let self = this;
    let options = self.options;
    // aria
    if (options.aria) {
      if (this.targets.length) {
        for (let el of this.elements) {
          // id
          let ariaEls = self.getInside(el, options.controls);
          let ariaEl = ariaEls.length ? ariaEls[0] : el;
          let id = ariaEl.getAttribute('id');
          el.dataset.namespace = XtUtil.getUniqueID();
          if (!id) {
            ariaEl.setAttribute('id', el.dataset.namespace + '-element');
          }
          // selected
          ariaEl.setAttribute('aria-selected', 'false');
        }
        for (let tr of this.targets) {
          // id
          let el = this.getElementsFromTarget(tr)[0];
          let id = tr.getAttribute('id');
          tr.dataset.namespace = el.dataset.namespace;
          if (!id) {
            id = tr.dataset.namespace + '-target';
            tr.setAttribute('id', id);
          }
          // tabindex
          tr.setAttribute('tabindex', '-1');
          // expanded
          let role = tr.getAttribute('role');
          if (role === 'tabpanel' || role === 'listbox' || role === 'dialog') {
            tr.setAttribute('aria-expanded', 'false');
          }
          // depending on el
          let ariaEls = self.getInside(el, options.controls);
          let ariaEl = ariaEls.length ? ariaEls[0] : el;
          ariaEl.setAttribute('aria-controls', id);
          tr.setAttribute('aria-labelledby', ariaEl.getAttribute('id'));
        }
      }
    }
  }

  /**
   * init events
   */
  initEvents() {
    let self = this;
    let options = self.options;
    // events
    for (let el of this.elements) {
      if (options.on) {
        // handler
        let onHandler = XtUtil.dataStorage.put(el, 'onHandler', self.eventOnHandler.bind(self).bind(self, el));
        // event
        let events = [...options.on.split(' ')];
        for (let event of events) {
          el.removeEventListener(event, onHandler);
          el.addEventListener(event, onHandler);
        }
        // listener
        el.addEventListener('on', onHandler);
      }
      if (options.off) {
        // handler
        let offHandler = XtUtil.dataStorage.put(el, 'offHandler', self.eventOffHandler.bind(self).bind(self, el));
        // event
        let events = [...options.off.split(' ')];
        for (let event of events) {
          el.removeEventListener(event, offHandler);
          el.addEventListener(event, offHandler);
        }
        // listener
        el.addEventListener('off', offHandler);
      }
    }
    // listener
    for (let tr of this.targets) {
      let el = this.getElementsFromTarget(tr)[0];
      if (el) {
        // handler
        let onHandler = XtUtil.dataStorage.put(el, 'onHandler', self.eventOnHandler.bind(self).bind(self, el));
        let offHandler = XtUtil.dataStorage.put(el, 'offHandler', self.eventOffHandler.bind(self).bind(self, el));
        // listener
        tr.addEventListener('on', onHandler);
        tr.addEventListener('off', offHandler);
      }
    }
    // auto
    if (options.auto) {
      this.auto();
      // focus and blur
      window.addEventListener('focus', function () {
        self.auto();
      });
      window.addEventListener('blur', function () {
        self.autoStop();
      });
    }
  }

  /**
   * element on handler
   * @param {Node|HTMLElement} element
   * @param {Event} e
   */
  eventOnHandler(element, e) {
    if (!e.detail || !e.detail.skip) {
      let eventLimit = this.container.querySelectorAll('.event-limit');
      if (eventLimit.length) {
        if (XtUtil.checkOutside(e, eventLimit)) {
          this.eventOn(element);
        }
      } else {
        this.eventOn(element);
      }
      // auto
      if (this.options.autoPause) {
        this.autoPause();
      } else if (this.options.auto) {
        this.auto();
      }
    }
  }

  /**
   * element off handler
   * @param {Node|HTMLElement} element
   * @param {Event} e
   */
  eventOffHandler(element, e) {
    if (!e.detail || !e.detail.skip) {
      let eventLimit = this.container.querySelectorAll('.event-limit');
      if (eventLimit.length) {
        if (XtUtil.checkOutside(e, eventLimit)) {
          this.eventOff(element);
        }
      } else {
        this.eventOff(element);
      }
    }
  }

  /**
   * set auto change
   * @param {Boolean} instant
   */
  auto(instant = false) {
    let self = this;
    let options = self.options;
    // auto
    this.autoStop();
    let time = !instant ? options.auto : 0;
    self.autoInterval = setInterval(function () {
      if (!options.autoAlways && self.object.offsetParent === null) { // if not :visible don't change
        return false;
      }
      self.autoCurrent = self.autoCurrent !== undefined ? self.autoCurrent + 1 : 0;
      self.autoCurrent = self.autoCurrent >= self.elements.length ? 0 : self.autoCurrent;
      self.eventOn(self.elements[self.autoCurrent]);
    }, time);
  }

  /**
   * set autoPause change
   * @param {Boolean} instant
   */
  autoPause(instant = false) {
    let self = this;
    let options = self.options;
    // autoPause
    this.autoStop();
    let time = !instant ? options.autoPause : 0;
    if (time !== 'stop') {
      self.autoPauseTimeout = setTimeout(function () {
        self.auto(true);
        self.auto();
      }, time);
    }
  }

  /**
   * stop auto change
   */
  autoStop() {
    clearInterval(this.autoInterval);
    clearTimeout(this.autoPauseTimeout);
  }

  //////////////////////
  // utils
  //////////////////////

  /**
   * choose which elements to activate/deactivate (based on xtend mode and containers)
   * @param {Node|HTMLElement} element Element that triggered interaction
   * @returns {Object} object.all and object.single
   */
  getElements(element) {
    if (!this.elements || !this.elements.length) {
      return {all: [], single: null};
    }
    if (this.mode === 'unique') {
      // choose all elements
      return {all: this.elements, single: this.elements[0]};
    } else if (this.mode === 'multiple') {
      // choose element by group
      let group = element.getAttribute('data-group');
      if (group) {
        // all group elements if group
        let groupElements = Array.from(this.elements).filter(x => x.getAttribute('data-group') === group);
        let final = XtUtil.arrSingle(groupElements);
        return {all: final, single: final[0]};
      } else {
        // element if not group
        let final = element;
        return {all: XtUtil.arrSingle(final), single: final};
      }
    }
  }

  /**
   * choose which targets to activate/deactivate (based on xtend mode and containers)
   * @param {Node|HTMLElement} element Element that triggered interaction
   * @returns {Array}
   */
  getTargets(element) {
    if (!this.targets || !this.targets.length) {
      return [];
    }
    if (this.mode === 'unique') {
      // choose all targets
      return this.targets;
    } else if (this.mode === 'multiple') {
      // choose only target by group
      let group = element.getAttribute('data-group');
      let groupElements = Array.from(this.elements).filter(x => x.getAttribute('data-group') === group);
      let groupTargets = Array.from(this.targets).filter(x => x.getAttribute('data-group') === group);
      let final;
      if (group) {
        // all group targets if group
        final = groupTargets;
        return XtUtil.arrSingle(final);
      } else {
        // not group targets by index if not group
        let index = groupElements.findIndex(x => x === element);
        final = groupTargets[index];
        return XtUtil.arrSingle(final);
      }
    }
  }
  
  /**
   * query for inside
   * @param {Node|HTMLElement} element Element to search from
   * @param {String} query Query for querySelectorAll
   * @returns {Array}
   */
  getInside(element, query) {
    if (!query) {
      return [];
    }
    return XtUtil.arrSingle(element.querySelectorAll(query));
  }

  /**
   * choose which elements to activate/deactivate from target (based on xtend mode and containers)
   * @param {Node|HTMLElement} element Target to trigger interaction on
   * @returns {Array}
   */
  getElementsFromTarget(target) {
    if (!this.elements || !this.elements.length) {
      return [];
    }
    // choose only target by group
    let group = target.getAttribute('data-group');
    let groupElements = Array.from(this.elements).filter(x => x.getAttribute('data-group') === group);
    let groupTargets = Array.from(this.targets).filter(x => x.getAttribute('data-group') === group);
    let final;
    if (group) {
      // all group targets if group
      final = groupElements;
      return XtUtil.arrSingle(final);
    } else {
      // not group targets by index if not group
      let index = groupTargets.findIndex(x => x === target);
      final = groupElements[index];
      return XtUtil.arrSingle(final);
    }
  }

  /**
   * get currents based on namespace (so shared between Xt objects)
   * @returns {Array}
   */
  getCurrents() {
    return XtUtil.currents[this.namespace];
  }

  /**
   * set currents based on namespace (so shared between Xt objects)
   * @param {Array} arr
   */
  setCurrents(arr) {
    XtUtil.currents[this.namespace] = arr;
  }

  /**
   * add current based on namespace (so shared between Xt objects)
   * @param {Node|HTMLElement} element To be added
   */
  addCurrent(element) {
    let arr = XtUtil.currents[this.namespace];
    arr.push(element);
  }

  /**
   * remove currents based on namespace (so shared between Xt objects)
   * @param {Node|HTMLElement} element To be removed
   */
  removeCurrent(element) {
    XtUtil.currents[this.namespace] = XtUtil.currents[this.namespace].filter(x => x !== element);
  }

  //////////////////////
  // events
  //////////////////////

  /**
   * check element on
   * @param {Node|HTMLElement} element To be activated
   * @returns {Boolean} If eventOn changes activation
   */
  checkOn(element) {
    // check
    return (!element.classList.contains(...this.options.classes) || element.classList.contains('off-block')) && !element.classList.contains('on-block');
  }

  /**
   * check element off
   * @param {Node|HTMLElement} element To be activated
   * @returns {Boolean} If eventOff changes activation
   */
  checkOff(element) {
    // skip if currents < min
    let todo = this.options.min - this.getCurrents().length;
    if (!todo) {
      return false;
    }
    // check
    return (element.classList.contains(...this.options.classes) || element.classList.contains('on-block')) && !element.classList.contains('off-block');
  }

  /**
   * element on
   * @param {Node|HTMLElement} element To be activated
   */
  eventOn(element) {
    let self = this;
    let options = self.options;
    // toggle
    if (this.checkOn(element)) {
      // on
      let fElements = this.getElements(element);
      this.addCurrent(fElements.single);
      let targets = this.getTargets(element);
      let controls = this.getInside(element, this.options.controls);
      // execute defer @FIX delay animation
      this.activationDelay = {};
      if (fElements.all.length) {
        this.activationDelay['elements'] = function () {
          self.activationOn(fElements.all, fElements, 'elements');
        };
      }
      if (targets.length) {
        this.activationDelay['targets'] = function () {
          self.activationOn(targets, fElements, 'targets');
        };
      }
      if (controls.length) {
        this.activationDelay['controls'] = function () {
          self.activationOn(controls, fElements, 'controls');
        };
      }
      // set autoCurrent
      if (options.auto) {
        let index = 0;
        for (let [i, el] of this.elements.entries()) {
          if (el === element) {
            index = i;
            break;
          }
        }
        this.autoCurrent = index;
      }
      // delay activation if currents > max
      let currents = this.getCurrents();
      if (currents.length > options.max) {
        // delayed activation
        this.eventOff(currents[0]);
      } else {
        // instant activation @FIX delay animation
        if (this.activationDelay) {
          for (let type in this.activationDelay) {
            self.activationDelayRun(type, true);
          }
          this.activationDelayCheckAndReset();
        }
      }
    } else if (options.toggle) {
      // off
      this.eventOff(element);
    }
  }

  /**
   * element off
   * @param {Node|HTMLElement} element To be deactivated
   */
  eventOff(element) {
    // toggle
    if (this.checkOff(element)) {
      // off
      let fElements = this.getElements(element);
      this.removeCurrent(fElements.single);
      let targets = this.getTargets(element);
      let controls = this.getInside(element, this.options.controls);
      // execute
      this.activationOff(fElements.all, fElements, 'elements');
      this.activationOff(targets, fElements, 'targets');
      this.activationOff(controls, fElements, 'controls');
    }
  }

  /**
   * element on activation
   * @param {NodeList|Array} els Elements to be activated
   * @param {Object} fElements
   * @param {String} type Type of elements
   */
  activationOn(els, fElements, type) {
    let self = this;
    // delay
    for (let el of els) {
      if (!el.classList.contains(...this.options.classes)) { // check each element @FIX delay animation
        el.classList.remove('on-block', 'off-block');
        clearTimeout(el.dataset.xtDelayTimeout);
        clearTimeout(el.dataset.xtAnimTimeout);
        let delay = el.dataset.xtOnDelay;
        if (delay) {
          el.classList.add('on-block');
          el.dataset.xtDelayTimeout = setTimeout(function (el, fElements, type) {
            el.classList.remove('on-block');
            self.activationOnActivate(el, fElements, type);
          }, parseFloat(delay), el, fElements, type).toString();
        } else {
          self.activationOnActivate(el, fElements, type);
        }
      }
    }
  }

  /**
   * element off activation
   * @param {NodeList|Array} els Elements to be deactivated
   * @param {Object} fElements
   * @param {String} type Type of elements
   */
  activationOff(els, fElements, type) {
    let self = this;
    // delay
    for (let el of els) {
      if (el.classList.contains(...this.options.classes)) { // check each element @FIX delay animation
        el.classList.remove('on-block', 'off-block');
        clearTimeout(el.dataset.xtDelayTimeout);
        clearTimeout(el.dataset.xtAnimTimeout);
        let delay = el.dataset.xtOffDelay;
        if (delay) {
          el.classList.add('off-block');
          el.dataset.xtDelayTimeout = setTimeout(function (el, fElements, type) {
            el.classList.remove('off-block');
            self.activationOffDeactivate(el, fElements, type);
          }, parseFloat(delay), el, fElements, type).toString();
        } else {
          self.activationOffDeactivate(el, fElements, type);
        }
      }
    }
  }

  /**
   * element activation
   * @param {Node|HTMLElement} el Elements to be deactivated
   * @param {Object} fElements
   * @param {String} type Type of elements
   */
  activationOnActivate(el, fElements, type) {
    let self = this;
    let options = self.options;
    // activate
    el.classList.add(...options.classes);
    el.classList.remove('out');
    self.activationOnAnimate(el, type);
    // specials
    if (type === 'elements') {
      // aria
      if (options.aria) {
        let ariaEls = self.getInside(el, options.controls);
        let ariaEl = ariaEls.length ? ariaEls[0] : el;
        ariaEl.setAttribute('aria-selected', 'true');
      }
    }
    if (type === 'targets') {
      self.specialClassHtmlOn();
      self.specialBackdrop(el);
      self.specialCenterOn(el);
      self.specialMiddleOn(el);
      self.specialCollapseOn(el);
      self.specialCloseOn(el, fElements.single);
      self.specialScrollbarOn();
      // aria
      if (options.aria) {
        let role = el.getAttribute('role');
        if (role === 'tabpanel' || role === 'listbox' || role === 'dialog') {
          el.setAttribute('aria-expanded', 'true');
        }
      }
      // focus
      if (options.aria) {
        if (options.scrollbar) {
          XtUtil.focusBlock = true;
          el.focus();
          XtUtil.focusLimitOn(el);
        }
      }
    }
    // listener dispatch
    el.dispatchEvent(new CustomEvent('on', {detail: {skip: true}}));
  }

  /**
   * element deactivation
   * @param {Node|HTMLElement} el Elements to be deactivated
   * @param {Object} fElements
   * @param {String} type Type of elements
   */
  activationOffDeactivate(el, fElements, type) {
    let self = this;
    let options = self.options;
    // deactivate
    el.classList.remove(...options.classes);
    el.classList.add('out');
    this.activationOffAnimate(el, type);
    // activationDelay @FIX delay animation
    if (this.activationDelay) {
      this.activationDelayRun(type, options.instant && options.instant[type]);
      this.activationDelayCheckAndReset();
    }
    // specials
    if (type === 'targets') {
      self.specialClassHtmlOff();
      self.specialCollapseOff(el);
      self.specialCloseOff(el);
    }
    // listener dispatch
    el.dispatchEvent(new CustomEvent('off', {detail: {skip: true}}));
  }

  /**
   * element on animation
   * @param {Node|HTMLElement} el Element to be animated
   * @param {String} type Type of element
   */
  activationOnAnimate(el, type) {
    // onDone
    let onDone = function (el, type) {
      // collapse-width and collapse-height
      if (el.classList.contains('collapse-height')) {
        el.style.height = 'auto';
      }
      if (el.classList.contains('collapse-width')) {
        el.style.width = 'auto';
      }
    };
    // delay onDone
    let timing = this.activationTiming(el);
    clearTimeout(el.dataset.xtAnimTimeout);
    if (!timing) {
      onDone(el, type);
    } else {
      el.dataset.xtAnimTimeout = setTimeout(function (el, type) {
        onDone(el, type);
      }, timing, el, type).toString();
    }
  }

  /**
   * element off animation
   * @param {Node|HTMLElement} el Element to be animated
   * @param {String} type Type of element
   */
  activationOffAnimate(el, type) {
    let self = this;
    let options = self.options;
    // onDone
    let onDone = function (el, type) {
      el.classList.remove('out');
      // specials
      if (type === 'elements') {
        // aria
        if (options.aria) {
          let ariaEls = self.getInside(el, options.controls);
          let ariaEl = ariaEls.length ? ariaEls[0] : el;
          ariaEl.setAttribute('aria-selected', 'false');
        }
      }
      if (type === 'targets') {
        self.specialScrollbarOff();
        // aria
        if (options.aria) {
          let role = el.getAttribute('role');
          if (role === 'tabpanel' || role === 'listbox' || role === 'dialog') {
            el.setAttribute('aria-expanded', 'false');
          }
        }
        // focus
        if (options.aria) {
          if (options.scrollbar) {
            let focus = XtUtil.focus;
            if (focus) {
              focus.focus();
            }
            XtUtil.focusBlock = false;
            XtUtil.focusLimitOff();
          }
        }
      }
      // activationDelay @FIX delay animation
      if (self.activationDelay) {
        self.activationDelayRun(type, !options.instant || !options.instant[type]);
        self.activationDelayCheckAndReset();
      }
    };
    // delay onDone
    let timing = this.activationTiming(el);
    clearTimeout(el.dataset.xtAnimTimeout);
    if (!timing) {
      onDone(el, type);
    } else {
      el.dataset.xtAnimTimeout = setTimeout(function (el, type) {
        onDone(el, type);
      }, timing, el, type).toString();
    }
  }

  /**
   * get transition or animation timing
   * @param {Node|HTMLElement} el To be animated
   * @returns {Number} Time in milliseconds
   */
  activationTiming(el) {
    let self = this;
    let options = self.options;
    // timing
    let timing = options.timing;
    if (timing !== undefined) {
      return timing;
    } else {
      let style = getComputedStyle(el);
      let transition = parseFloat(style.transitionDuration) + parseFloat(style.transitionDelay);
      let animation = parseFloat(style.animationDuration) + parseFloat(style.animationDelay);
      if (transition || animation) {
        timing = Math.max(transition, animation);
      }
      return timing * 1000;
    }
  }

  /**
   * run activationDelay and set done @FIX delay animation
   */
  activationDelayRun(type, check) {
    let func = this.activationDelay[type];
    if (func && !func.done && check) {
      func();
      func.done = true;
    }
  }

  /**
   * check and reset if all activationDelay are done @FIX delay animation
   */
  activationDelayCheckAndReset() {
    let count = 0;
    for (let type in this.activationDelay) {
      let func = this.activationDelay[type];
      if (func.done) {
        count++;
      }
    }
    if (count === this.activationDelay.length) {
      this.activationDelay = {};
    }
  }

  //////////////////////
  // activation specials
  //////////////////////

  /**
   * add html class
   */
  specialClassHtmlOn() {
    let self = this;
    let options = self.options;
    //
    if (options.classHtml) {
      let container = document.documentElement;
      container.classList.add(...options.classHtml.split(' '));
    }
  }

  /**
   * remove html class
   */
  specialClassHtmlOff() {
    let self = this;
    let options = self.options;
    //
    if (options.classHtml) {
      let container = document.documentElement;
      container.classList.remove(...options.classHtml.split(' '));
    }
  }

  /**
   * backdrop append to element
   * @param {Node|HTMLElement} el Element
   */
  specialBackdrop(el) {
    let self = this;
    let options = self.options;
    //
    if (options.backdrop) {
      let elements;
      if (options.backdrop === 'object') {
        elements = XtUtil.arrSingle(this.object);
      } else if (options.backdrop === 'targets') {
        elements = XtUtil.arrSingle(el);
      } else {
        elements = el.querySelectorAll(options.backdrop);
        if (!elements.length) {
          elements = this.object.querySelectorAll(options.backdrop);
        }
      }
      for (let element of elements) {
        let backdrop = element.querySelectorAll('.xt-backdrop');
        if (!backdrop.length) {
          backdrop = XtUtil.createElement('<div class="xt-backdrop"></div>');
          element.append(backdrop);
        }
      }
    }
  }

  /**
   * center position on activation
   * @param {Node|HTMLElement} el Element
   */
  specialCenterOn(el) {
    let style = getComputedStyle(el);
    if (style.getPropertyValue('--center') === 'true') {
      let add = this.object.clientWidth;
      let remove = el.clientWidth;
      el.style.left = ((add - remove) / 2) + 'px';
    }
  }

  /**
   * middle position on activation
   * @param {Node|HTMLElement} el Element
   */
  specialMiddleOn(el) {
    let style = getComputedStyle(el);
    if (style.getPropertyValue('--middle') === 'true') {
      let add = this.object.clientHeight;
      let remove = el.clientHeight;
      el.style.top = ((add - remove) / 2) + 'px';
    }
  }

  /**
   * open collapse on activation
   * @param {Node|HTMLElement} el Element
   */
  specialCollapseOn(el) {
    if (el.classList.contains('collapse-height')) {
      el.classList.add('no-transition');
      el.style.height = 'auto';
      el.style.paddingTop = '';
      el.style.paddingBottom = '';
      let h = el.clientHeight + 'px';
      let pt = el.style.paddingTop;
      let pb = el.style.paddingBottom;
      XtUtil.requestAnimationFrame.call(window, function () {
        el.style.height = '0';
        el.style.paddingTop = '0';
        el.style.paddingBottom = '0';
        XtUtil.requestAnimationFrame.call(window, function () {
          el.classList.remove('no-transition');
          el.style.height = h;
          el.style.paddingTop = pt;
          el.style.paddingBottom = pb;
        });
      });
    }
    if (el.classList.contains('collapse-width')) {
      el.style.width = 'auto';
      el.style.paddingLeft = '';
      el.style.paddingRight = '';
      let w = el.clientHeight + 'px';
      let pl = el.style.paddingLeft;
      let pr = el.style.paddingRight;
      XtUtil.requestAnimationFrame.call(window, function () {
        el.style.width = '0';
        el.style.paddingLeft = '0';
        el.style.paddingRight = '0';
        XtUtil.requestAnimationFrame.call(window, function () {
          el.classList.remove('no-transition');
          el.style.width = w;
          el.style.paddingLeft = pl;
          el.style.paddingRight = pr;
        });
      });
    }
  }

  /**
   * close collapse on deactivation
   * @param {Node|HTMLElement} el Element
   */
  specialCollapseOff(el) {
    if (el.classList.contains('collapse-height')) {
      let h = el.clientHeight + 'px';
      let pt = el.style.paddingTop;
      let pb = el.style.paddingBottom;
      XtUtil.requestAnimationFrame.call(window, function () {
        el.style.height = h;
        el.style.paddingTop = pt;
        el.style.paddingBottom = pb;
        XtUtil.requestAnimationFrame.call(window, function () {
          el.style.height = '0';
          el.style.paddingTop = '0';
          el.style.paddingBottom = '0';
        });
      });
    }
    if (el.classList.contains('collapse-width')) {
      let w = el.clientWidth + 'px';
      let pl = el.style.paddingLeft;
      let pr = el.style.paddingRight;
      XtUtil.requestAnimationFrame.call(window, function () {
        el.style.width = w;
        el.style.paddingLeft = pl;
        el.style.paddingRight = pr;
        XtUtil.requestAnimationFrame.call(window, function () {
          el.style.width = '0';
          el.style.paddingLeft = '0';
          el.style.paddingRight = '0';
        });
      });
    }
  }

  /**
   * add close events on element
   * @param {Node|HTMLElement} el Element
   * @param {Node|HTMLElement} single Element to toggle
   */
  specialCloseOn(el, single) {
    let self = this;
    let options = self.options;
    // closeInside
    if (options.closeInside) {
      let closeElements = el.querySelectorAll(options.closeInside);
      XtUtil.requestAnimationFrame.call(window, function () {
        for (let closeElement of closeElements) {
          // handler
          let specialCloseOnHandler = XtUtil.dataStorage.put(el, 'specialCloseOnHandler', self.specialCloseOnHandler.bind(self).bind(self, closeElement, single));
          // event
          closeElement.removeEventListener('click', specialCloseOnHandler);
          closeElement.addEventListener('click', specialCloseOnHandler);
        }
      });
    }
    // closeOutside
    if (options.closeOutside) {
      let closeElements = document.querySelectorAll(options.closeOutside);
      XtUtil.requestAnimationFrame.call(window, function () {
        for (let closeElement of closeElements) {
          // handler
          let specialCloseOffHandler = XtUtil.dataStorage.put(el, 'specialCloseOffHandler', self.specialCloseOffHandler.bind(self).bind(self, el, single));
          // event
          closeElement.removeEventListener('click', specialCloseOffHandler);
          closeElement.addEventListener('click', specialCloseOffHandler);
        }
      });
    }
  }

  /**
   * remove close events on element
   * @param {Node|HTMLElement} el Element
   */
  specialCloseOff(el) {
    let self = this;
    let options = self.options;
    // closeInside
    if (options.closeInside) {
      let closeElements = el.querySelectorAll(options.closeInside);
      for (let closeElement of closeElements) {
        // handler
        let specialCloseOnHandler = XtUtil.dataStorage.get(el, 'specialCloseOnHandler');
        closeElement.removeEventListener('click', specialCloseOnHandler);
      }
    }
    // closeOutside
    if (options.closeOutside) {
      let closeElements = document.querySelectorAll(options.closeOutside);
      for (let closeElement of closeElements) {
        let specialCloseOffHandler = XtUtil.dataStorage.get(el, 'specialCloseOffHandler');
        closeElement.removeEventListener('click', specialCloseOffHandler);
      }
    }
  }

  /**
   * element on handler
   * @param {Node|HTMLElement} checkEl
   * @param {Node|HTMLElement} single
   * @param {Event} e
   */
  specialCloseOnHandler(checkEl, single, e) {
    if (XtUtil.checkInside(e, XtUtil.arrSingle(checkEl))) {
      this.eventOff(single);
    }
  }

  /**
   * element off handler
   * @param {Node|HTMLElement} checkEl
   * @param {Node|HTMLElement} single
   * @param {Event} e
   */
  specialCloseOffHandler(checkEl, single, e) {
    if (XtUtil.checkOutside(e, XtUtil.arrSingle(checkEl))) {
      this.eventOff(single);
    }
  }

  /**
   * scrollbar activation
   */
  specialScrollbarOn() {
    let self = this;
    let options = self.options;
    // scrollbar on
    if (options.scrollbar) {
      let elements;
      let width = XtUtil.scrollbarWidth();
      // check fixed
      elements = document.querySelectorAll('.xt-check-fixed > *');
      for (let element of elements) {
        let style = getComputedStyle(element);
        if (style.position === 'fixed') {
          element.classList.add('xt-fixed');
        } else {
          element.classList.remove('xt-fixed');
        }
      }
      // fixed
      elements = document.querySelectorAll('.xt-fixed');
      for (let element of elements) {
        element.style.paddingRight = '';
        if (self.normalizeWidth(element.clientWidth) === '') {
          let style = getComputedStyle(element);
          let padding = style.paddingRight;
          let str = 'calc(' + padding + ' + ' + width + 'px)';
          element.classList.add('no-transition');
          XtUtil.requestAnimationFrame.call(window, function () {
            element.style.paddingRight = str;
            XtUtil.requestAnimationFrame.call(window, function () {
              element.classList.remove('no-transition');
            });
          });
        }
      }
      // backdrop
      elements = document.querySelectorAll('.xt-backdrop');
      for (let element of elements) {
        element.style.right = width + 'px';
      }
      // scroll
      let container = document.documentElement;
      container.style.paddingRight = width + 'px';
      container.classList.add('xt-scrollbar');
    }
  }

  /**
   * scrollbar deactivation
   */
  specialScrollbarOff() {
    let self = this;
    let options = self.options;
    // scrollbar off
    if (options.scrollbar) {
      let elements;
      // fixed
      elements = document.querySelectorAll('.xt-fixed');
      for (let element of elements) {
        element.classList.add('no-transition');
        XtUtil.requestAnimationFrame.call(window, function () {
          element.style.paddingRight = '';
          XtUtil.requestAnimationFrame.call(window, function () {
            element.classList.remove('no-transition');
          });
        });
      }
      // backdrop
      elements = document.querySelectorAll('.xt-backdrop');
      for (let element of elements) {
        element.style.right = '';
      }
      // scroll
      let container = document.documentElement;
      container.style.paddingRight = '';
      container.classList.remove('xt-scrollbar');
    }
  }

  /**
   * if full width return '' else return value in px
   * @param {Number|String} width
   * @returns {String} Value in px
   */
  normalizeWidth(width) {
    width = parseFloat(width);
    if (width + XtUtil.scrollbarWidth() >= window.innerWidth) {
      width = '';
    } else {
      width += 'px';
    }
    return width;
  }

}

// default

Xt.defaults = {
  "auto": false,
  "autoPause": false,
  "autoAlways": false
};

// export

window.Xt = Xt;
export {Xt};

//////////////////////
// XtToggle
//////////////////////

class XtToggle extends Xt {

  /**
   * constructor
   * @param {Node|HTMLElement} object Base node
   * @param {Object} jsOptions User options
   * @constructor
   */
  constructor(object, jsOptions = {}) {
    super(object, jsOptions, 'data-xt-toggle');
  }

  /**
   * init aria
   */
  initAria() {
    super.initAria();
    let self = this;
    let options = self.options;
    // aria
    if (options.aria) {
      if (this.targets.length) {
        if (this.mode === 'multiple') {
          this.object.setAttribute('role', 'tablist');
          if (options.max > 1) {
            this.object.setAttribute('aria-multiselectable', 'true');
          }
          for (let el of this.elements) {
            let ariaEls = self.getInside(el, options.controls);
            let ariaEl = ariaEls.length ? ariaEls[0] : el;
            ariaEl.setAttribute('role', 'tab');
          }
          for (let tr of this.targets) {
            tr.setAttribute('role', 'tabpanel');
          }
        }
      }
    }
  }

}

// default

XtToggle.defaults = {
  "elements": ":scope > a, :scope > button",
  "targets": ":scope > [class^=\"toggle-\"], :scope > [class*=\" toggle-\"]",
  "class": "active",
  "instant": {"elements": true},
  "on": "click",
  "toggle": true,
  "min": 0,
  "max": 1,
  "aria": true
};

// export

window.XtToggle = XtToggle;
export {XtToggle};

//////////////////////
// XtDrop
//////////////////////

class XtDrop extends Xt {

  /**
   * constructor
   * @param {Node|HTMLElement} object Base node
   * @param {Object} jsOptions User options
   * @constructor
   */
  constructor(object, jsOptions = {}) {
    super(object, jsOptions, 'data-xt-drop');
  }

  /**
   * init aria
   */
  initAria() {
    super.initAria();
    let self = this;
    let options = self.options;
    // aria
    if (options.aria) {
      if (this.targets.length) {
        for (let el of this.elements) {
          let ariaEls = self.getInside(el, options.controls);
          let ariaEl = ariaEls.length ? ariaEls[0] : el;
          ariaEl.setAttribute('aria-haspopup', 'listbox');
        }
        for (let tr of this.targets) {
          tr.setAttribute('role', 'listbox');
        }
      }
    }
  }

}

// default

XtDrop.defaults = {
  "targets": ":scope > .drop",
  "controls": ":scope > a, :scope > button",
  "class": "active",
  "instant": {"elements": true},
  "on": "click",
  "toggle": true,
  "min": 0,
  "max": 1,
  "closeOutside": "body",
  "aria": true
};

// export

window.XtDrop = XtDrop;
export {XtDrop};

//////////////////////
// XtOverlay
//////////////////////

class XtOverlay extends Xt {

  /**
   * constructor
   * @param {Node|HTMLElement} object Base node
   * @param {Object} jsOptions User options
   * @constructor
   */
  constructor(object, jsOptions = {}) {
    super(object, jsOptions, 'data-xt-overlay');
  }

  /**
   * init aria
   */
  initAria() {
    super.initAria();
    let self = this;
    let options = self.options;
    // aria
    if (options.aria) {
      if (this.targets.length) {
        for (let el of this.elements) {
          let ariaEls = self.getInside(el, options.controls);
          let ariaEl = ariaEls.length ? ariaEls[0] : el;
          ariaEl.setAttribute('aria-haspopup', 'dialog');
        }
        for (let tr of this.targets) {
          tr.setAttribute('role', 'dialog');
          tr.setAttribute('aria-modal', 'true');
        }
      }
    }
  }

}

// default

XtOverlay.defaults = {
  "elements": ":scope > a, :scope > button",
  "targets": ":scope > .overlay-outer",
  "class": "active",
  "instant": {"elements": true},
  "on": "click",
  "toggle": true,
  "min": 0,
  "max": 1,
  "appendTo": "body",
  "backdrop": "targets",
  "classHtml": "xt-overlay",
  "closeInside": ".overlay-dismiss, :scope > .xt-backdrop, :scope .overlay-inner > .btn-close",
  "scrollbar": true,
  "aria": true
};

// export

window.XtOverlay = XtOverlay;
export {XtOverlay};

//////////////////////
// XtSticky
//////////////////////

class XtSticky extends Xt {

  /**
   * constructor
   * @param {Node|HTMLElement} object Base node
   * @param {Object} jsOptions User options
   * @constructor
   */
  constructor(object, jsOptions = {}) {
    super(object, jsOptions, 'data-xt-sticky');
  }

  //////////////////////
  // init
  //////////////////////

  /**
   * init elements, targets and currents
   */
  initScope() {
    super.initScope();
    // mode
    this.mode = 'unique';
    // container
    this.container = XtUtil.parents(this.object, '.xt-container');
    if (!this.container.length) {
      this.container = XtUtil.createElement('<div class="xt-container xt-check-fixed"></div>');
      this.object.before(this.container);
      this.container.append(this.object);
      this.container = XtUtil.parents(this.object, '.xt-container');
    }
    // targets
    this.targets = this.container[0].querySelectorAll('.xt-clone');
    if (!this.targets.length) {
      this.targets = this.object.cloneNode(true);
      this.targets.classList.add('xt-clone');
      for (let elId of this.targets.querySelectorAll('[id]')) {
        elId.setAttribute('id', elId.getAttribute('id') + '-clone');
      }
      for (let elName of this.targets.querySelectorAll('[name]')) {
        elName.setAttribute('name', elName.getAttribute('name') + '-clone');
      }
      this.container[0].append(this.targets);
    }
    this.targets = XtUtil.arrSingle(this.targets);
    // xt-fixed
    this.object.classList.add('xt-fixed');
    // hide
    if (this.options.hide === 'down') {
      this.object.classList.add('sticky-hide-down');
    } else {
      this.object.classList.remove('sticky-hide-down');
    }
    if (this.options.hide === 'up') {
      this.object.classList.add('sticky-hide-up');
    } else {
      this.object.classList.remove('sticky-hide-up');
    }
    // z-index
    this.unique = XtUtil.getUniqueNum();
    this.object.style.zIndex = '' + (100 - this.unique);
  }

  /**
   * init events
   */
  initEvents() {
    let self = this;
    let options = self.options;
    // events
    if (options.on) {
      // handler
      let stickyHandler = XtUtil.dataStorage.put(window, 'stickyHandler', self.eventOnHandler.bind(self));
      // event
      let events = [...options.on.split(' ')];
      for (let event of events) {
        window.removeEventListener(event, stickyHandler);
        window.addEventListener(event, stickyHandler);
      }
      // listener
      window.addEventListener('scroll.sticky', stickyHandler);
    }
    // listener dispatch initial
    window.dispatchEvent(new CustomEvent('scroll.sticky'));
  }

  /**
   * element on handler
   * @param {Node|HTMLElement} element
   * @param {Event} e
   */
  eventOnHandler(e) {
    if (!e.detail || !e.detail.skip) {
      this.eventScroll(this.object);
    }
  }

  //////////////////////
  // events
  //////////////////////

  /**
   * window scroll
   * @param {Node|HTMLElement} element To be activated or deactivated
   */
  eventScroll(element) {
    let self = this;
    let options = self.options;
    // vars
    let anim = true;
    let hide = false;
    let scrollInverse = false;
    let add = 0;
    let addHide = 0;
    let windowHeight = window.innerHeight;
    let el = self.object;
    let rectElTop = el.getBoundingClientRect().top;
    let heightEl = parseFloat(getComputedStyle(el).height);
    let heightTarget = parseFloat(getComputedStyle(self.targets[0]).height);
    let rectContainerTop = self.container[0].getBoundingClientRect().top;
    let scrollingElement = document.scrollingElement;
    let scrollHeight = scrollingElement.scrollHeight;
    let scrollTop = scrollingElement.scrollTop;
    let scrollTopOld = self.scrollTopOld;
    // direction
    if (scrollTop < scrollTopOld) {
      el.classList.remove('sticky-down');
      el.classList.add('sticky-up');
      scrollInverse = true;
    } else {
      el.classList.add('sticky-down');
      el.classList.remove('sticky-up');
    }
    // hide
    if (options.hide === 'down') {
      if (!scrollInverse) {
        addHide = heightTarget;
      }
    }
    if (options.hide === 'up') {
      if (scrollInverse) {
        addHide = heightTarget;
      }
    }
    // scroll
    let top = self.eventScrollPos(options.limit['top'] || self.targets, scrollTop, rectContainerTop);
    let bottom = self.eventScrollPos(options.limit['bottom'], scrollTop, Infinity);
    if (options.position === 'top') {
      bottom -= heightTarget;
    }
    if (options.position === 'bottom') {
      top -= windowHeight - heightTarget;
      bottom = Math.abs(scrollHeight - windowHeight - bottom);
    }
    // contain and add
    let addTop = 0;
    let addBottom = 0;
    if (options.contain) {
      if (options.contain['top']) {
        let addTopObj = self.eventScrollHeight(options.contain['top'], scrollInverse);
        addTop = addTopObj.val;
        if (addTop !== null && addTop > rectContainerTop) {
          add = addTop;
          if (!addTopObj.foundHide) {
            anim = false;
          }
        } else {
          addTop = null;
        }
      }
      if (options.contain['bottom']) {
        addBottom = self.eventScrollPos(options.contain['bottom']);
        if (addBottom !== null && addBottom < heightEl + addTop) {
          add = addBottom - heightEl;
          anim = false;
        } else {
          addBottom = null;
        }
      }
    }
    // save real add for calculation
    el.dataset.xtAddSticky = add.toString();
    // activation
    let checkTop = scrollTop >= top - add + addHide;
    let checkBottom = scrollTop < bottom + add - addHide;
    if (checkTop && checkBottom) {
      // inside
      self.eventOn(element);
      // hide
      if (addHide) {
        hide = true;
      }
    } else {
      // outside
      self.eventOff(element);
    }
    // after active
    if (el.classList.contains('active')) {
      // hide
      if (hide) {
        add = -heightEl;
        if (!el.classList.contains('sticky-hide')) {
          el.classList.add('sticky-hide');
          // listener dispatch
          el.dispatchEvent(new CustomEvent('hide.sticky', {detail: {skip: true}}));
        }
      } else {
        if (el.classList.contains('sticky-hide')) {
          el.classList.remove('sticky-hide');
          // listener dispatch
          el.dispatchEvent(new CustomEvent('show.sticky', {detail: {skip: true}}));
        }
      }
    } else {
      // reset
      add = 0;
      anim = false;
    }
    // anim
    if (anim && scrollTopOld !== undefined) {
      if (!el.classList.contains('sticky-anim')) {
        el.classList.add('sticky-anim');
      }
    } else {
      if (el.classList.contains('sticky-anim')) {
        el.classList.remove('sticky-anim');
      }
    }
    // top and bottom
    if (!checkTop) {
      if (!el.classList.contains('sticky-top')) {
        el.classList.add('sticky-top');
      }
    } else {
      if (el.classList.contains('sticky-top')) {
        el.classList.remove('sticky-top');
      }
    }
    if (!checkBottom) {
      if (!el.classList.contains('sticky-bottom')) {
        el.classList.add('sticky-bottom');
      }
    } else {
      if (el.classList.contains('sticky-bottom')) {
        el.classList.remove('sticky-bottom');
      }
    }
    // set add
    if (add !== self.addOld) {
      el.classList.add('no-transition');
      if (self.addOld !== undefined) {
        el.style[options.position] = rectElTop + 'px';
      }
      XtUtil.cancelAnimationFrame.call(window, el.dataset.eventFrame);
      el.dataset.eventFrame = XtUtil.requestAnimationFrame.call(window, function () {
        el.classList.remove('no-transition');
        el.style[options.position] = add + 'px';
      });
    }
    // fix position fixed width 100% of parent
    let width = self.normalizeWidth(self.container[0].clientWidth);
    if (el.style.width !== width) {
      el.style.width = width;
    }
    // save for direction
    self.addOld = add;
    self.scrollTopOld = scrollTop;
  }

  /**
   * get position of option
   * @param {String|Number|Element} option
   * @param {Number} val Default value
   * @param {Number} scrollTop Window's scrollTop
   * @returns {Number} value Option's position (px)
   */
  eventScrollPos(option, scrollTop = 0, val = null) {
    if (!isNaN(parseFloat(option))) {
      val = option;
    } else {
      let elements = Array.isArray(option) ? option : document.querySelectorAll(option);
      if (elements.length) {
        let found = false;
        val = 0;
        for (let el of elements) {
          let addSticky = parseFloat(el.dataset.xtAddSticky);
          if (addSticky) { // if sticky-hide get real add
            let style = getComputedStyle(el);
            if (style.display !== 'none') {
              val += addSticky;
              found = true;
            }
          } else {
            let rect = el.getBoundingClientRect();
            val += rect.top;
            found = true;
          }
        }
        if (found) {
          val += scrollTop;
        } else {
          val = null;
        }
      }
    }
    return val;
  }

  /**
   * get height of option
   * @param {String|Number|Element} option
   * @param {Boolean} scrollInverse
   * @param {Number} val Default value
   * @returns {Object} obj Option's height (px) and if found hide element
   */
  eventScrollHeight(option, scrollInverse, val = null) {
    let foundHide = false;
    if (!isNaN(parseFloat(option))) {
      val = option;
    } else {
      let elements = Array.isArray(option) ? option : document.querySelectorAll(option);
      if (elements.length) {
        for (let el of elements) {
          if (el.classList.contains('sticky-hide-down') && el.classList.contains('active')) {
            if (scrollInverse) {
              val += el.clientHeight;
              foundHide = true;
            }
          } else if (el.classList.contains('sticky-hide-up') && el.classList.contains('active')) {
            if (!scrollInverse) {
              val += el.clientHeight;
              foundHide = true;
            }
          } else {
            val += el.clientHeight;
          }
        }
      }
    }
    return {val: val, foundHide: foundHide};
  }

}

// default

XtSticky.defaults = {
  "class": "active",
  "on": "scroll resize",
  "min": 0,
  "max": Infinity,
  "position": "top",
  "limit": {"bottom": Infinity},
  "contain": false,
  "hide": false,
  "aria": false
};

// export

window.XtSticky = XtSticky;
export {XtSticky};

//////////////////////
// XtFade
//////////////////////

class XtFade extends Xt {

  /**
   * constructor
   * @param {Node|HTMLElement} object Base node
   * @param {Object} jsOptions User options
   * @constructor
   */
  constructor(object, jsOptions = {}) {
    super(object, jsOptions, 'data-xt-fade');
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
    // events
    if (options.on) {
      // handler
      let fadeHandler = XtUtil.dataStorage.put(window, 'fadeHandler', self.eventOnHandler.bind(self));
      // event
      let events = [...options.on.split(' ')];
      for (let event of events) {
        window.removeEventListener(event, fadeHandler);
        window.addEventListener(event, fadeHandler);
      }
      // listener
      window.addEventListener('scroll.fade', fadeHandler);
    }
    // listener dispatch initial
    window.dispatchEvent(new CustomEvent('scroll.fade'));
  }

  /**
   * element on handler
   * @param {Node|HTMLElement} element
   * @param {Event} e
   */
  eventOnHandler(e) {
    if (!e.detail || !e.detail.skip) {
      this.eventScroll(this.object);
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
    let scrollTopOld = self.scrollTopOld;
    // direction
    if (scrollTop < scrollTopOld) {
      scrollInverse = true;
    }
    // core
    for (let el of self.elements) {
      if (el.offsetParent && !el.classList.contains('fade-block')) {
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
            XtUtil.cancelAnimationFrame.call(window, el.dataset.eventFrame);
            el.dataset.eventFrame = XtUtil.requestAnimationFrame.call(window, function () {
              if (options.delayOn) {
                let func = new Function('current', 'total', options.delayOn);
                el.dataset.xtOnDelay = func(current, currents.length).toString();
                current++;
              }
              self.eventOn(el);
            });
          }
        } else {
          // outside
          changed = self.checkOff(el);
          el.classList.add('fade-visible');
          if (changed) {
            el.classList.add('fade-scroll');
            currents.push(el);
            XtUtil.cancelAnimationFrame.call(window, el.dataset.eventFrame);
            el.dataset.eventFrame = XtUtil.requestAnimationFrame.call(window, function () {
              if (options.delayOff) {
                let func = new Function('current', 'total', options.delayOff);
                el.dataset.xtOffDelay = func(current, currents.length).toString();
                current++;
              }
              changed = self.eventOff(el);
            });
          }
        }
        // direction
        if (changed) {
          if (scrollInverse) {
            el.classList.remove('fade-down');
            el.classList.add('fade-up');
          } else {
            el.classList.add('fade-down');
            el.classList.remove('fade-up');
          }
        }
      }
    }
    // save for direction
    self.scrollTopOld = scrollTop;
  }

}

// default

XtFade.defaults = {
  "elements": ".fade",
  "class": "in",
  "on": "scroll resize",
  "min": 0,
  "max": Infinity,
  "distance": 0.2,
  "delayOn": false,
  "delayOff": false,
  "aria": false
};

// export

window.XtFade = XtFade;
export {XtFade};
