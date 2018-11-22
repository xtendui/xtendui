/* xtend (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

'use strict';

import Xt from '../xtend';

//////////////////////
// Core
//////////////////////

class Core {

  /**
   * constructor
   * @param {Node|HTMLElement} object Base node
   * @param {Object} jsOptions User options
   * @constructor
   */
  constructor(object, jsOptions = {}) {
    let self = this;
    // constructor
    self.object = object;
    if (self.object && !self.object.dataset.xtCoreDone) {
      self.object.dataset.xtCoreDone = 'true';
      // defaults
      self.defaults = {
        "onBlock": false,
        "offBlock": false,
        "auto": false,
        "autoPause": false,
        "autoAlways": false,
        "delayOn": false,
        "delayOff": false,
        "durationOn": false,
        "durationOff": false
      };
      self.defaults = Xt.merge([self.defaults, self.constructor.defaults]);
      // js options
      self.options = Xt.merge([self.defaults, jsOptions]);
      // markup options
      let markupOptions = self.object.getAttribute('data-xt-' + self.constructor.componentName);
      self.options = Xt.merge([self.options, markupOptions ? JSON.parse(markupOptions) : {}]);
      // classes
      if (self.options.class) {
        self.options.classes = [...self.options.class.split(' ')];
      }
      // vars
      self.elements = [];
      self.targets = [];
      self.detail = {};
      self.detail.queueOn = [];
      self.detail.queueOff = [];
      self.detail.appendOrigin = null;
      // init
      self.initSetup();
      self.initScope();
      self.initCurrents();
      self.initEvents();
      self.initAria();
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
      self.mode = 'unique';
      self.container = document.documentElement;
      options.max = Infinity;
      self.namespace = self.constructor.componentName + '-' + options.targets.toString() + '-' + options.classes.toString();
    } else {
      // xtend unique mode
      self.mode = 'multiple';
      self.container = self.object;
      self.namespace = self.constructor.componentName + '-' + Xt.getUniqueID();
    }
    // final namespace
    self.namespace = self.namespace.replace(/^[^a-z]+|[^\w:.-]+/gi, '');
    // currents array based on namespace (so shared between Xt objects)
    if (!self.getCurrents()) {
      self.setCurrents([]);
    }
  }

  /**
   * init elements, targets and currents
   */
  initScope() {
    let self = this;
    let options = self.options;
    // elements
    if (options.elements) {
      self.elements = Xt.arrSingle(self.container.querySelectorAll(options.elements));
    }
    if (!self.elements.length) {
      self.elements = Xt.arrSingle(self.object);
      // @FIX set namespace for next frame
      window.requestAnimationFrame(function () {
        self.elements = Xt.arrSingle(document.querySelectorAll('[data-xt-namespace=' + self.namespace + ']'));
      });
    }
    // targets
    if (options.targets) {
      let arr = Array.from(self.container.querySelectorAll(options.targets));
      arr = arr.filter(x => !Xt.parents(x, options.targets).length); // filter out parent
      self.targets = arr;
    }
  }

  /**
   * init currents
   */
  initCurrents() {
    let self = this;
    let options = self.options;
    // @FIX set namespace for next frame
    for (let el of self.elements) {
      el.dataset.xtNamespace = self.namespace;
    }
    // automatic initial currents
    window.requestAnimationFrame(function () {
      if (self.elements.length) {
        // elements
        for (let el of self.elements) {
          let found = false;
          if (el.classList.contains(options.classes[0])) {
            el.classList.remove(...options.classes);
            found = true;
          }
          let targets = self.getTargets(el);
          for (let tr of targets) {
            if (tr.classList.contains(options.classes[0])) {
              tr.classList.remove(...options.classes);
              found = true;
            }
          }
          if (found) {
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
      if (self.targets.length) {
        for (let el of self.elements) {
          let ariaEls = self.getInside(el, options.ariaControls);
          let ariaEl = ariaEls.length ? ariaEls[0] : el;
          // id
          let id = ariaEl.getAttribute('id');
          if (!id) {
            ariaEl.setAttribute('id', Xt.getUniqueID());
          }
          // selected
          ariaEl.setAttribute('aria-selected', 'false');
        }
        for (let tr of self.targets) {
          let els = self.getElementsFromTarget(tr);
          // id
          let id = tr.getAttribute('id');
          if (!id) {
            tr.setAttribute('id', Xt.getUniqueID());
          }
          // tabindex
          tr.setAttribute('tabindex', '-1');
          // expanded
          let role = tr.getAttribute('role');
          if (role === 'tabpanel' || role === 'listbox' || role === 'dialog') {
            tr.setAttribute('aria-expanded', 'false');
          }
          // depending on el
          let str = ' ';
          str += tr.getAttribute('aria-labelledby') || '';
          for (let el of els) {
            let ariaEls = self.getInside(el, options.ariaControls);
            let ariaEl = ariaEls.length ? ariaEls[0] : el;
            str += ' ' + ariaEl.getAttribute('id');
          }
          tr.setAttribute('aria-labelledby', str.trim());
        }
        for (let el of self.elements) {
          let trs = self.getTargets(el);
          let ariaEls = self.getInside(el, options.ariaControls);
          let ariaEl = ariaEls.length ? ariaEls[0] : el;
          // depending on tr
          let str = ' ';
          str += ariaEl.getAttribute('aria-controls') || '';
          for (let tr of trs) {
            str += ' ' + tr.getAttribute('id');
          }
          ariaEl.setAttribute('aria-controls', str.trim());
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
    // toggle
    options.toggle = !options.off;
    // events
    for (let el of self.elements) {
      // event on
      let onHandler = Xt.dataStorage.put(el, 'onHandler' + self.namespace,
        self.eventOnHandler.bind(self).bind(self, el));
      if (options.on) {
        let events = [...options.on.split(' ')];
        for (let event of events) {
          el.removeEventListener(event, onHandler);
          el.addEventListener(event, onHandler);
        }
        // @FIX prevents click on touch until clicked two times
        if (events.includes('mouseenter') || events.includes('mousehover')) {
          let touchLinksStartHandler = Xt.dataStorage.put(el, 'touchLinksStartHandler' + self.namespace,
            self.eventTouchLinksStartHandler.bind(self).bind(self, el));
          el.removeEventListener('touchstart', touchLinksStartHandler);
          el.addEventListener('touchstart', touchLinksStartHandler);
        }
      }
      el.removeEventListener('on.xt', onHandler);
      el.addEventListener('on.xt', onHandler);
      // event off
      let offHandler = Xt.dataStorage.put(el, 'offHandler' + self.namespace,
        self.eventOffHandler.bind(self).bind(self, el));
      if (options.off) {
        let events = [...options.off.split(' ')];
        for (let event of events) {
          el.removeEventListener(event, offHandler);
          el.addEventListener(event, offHandler);
        }
      }
      el.removeEventListener('off.xt', offHandler);
      el.addEventListener('off.xt', offHandler);
    }
    // listener
    for (let tr of self.targets) {
      let el = self.getElementsFromTarget(tr)[0];
      if (el) {
        // event
        let onHandler = Xt.dataStorage.get(el, 'onHandler' + self.namespace);
        let offHandler = Xt.dataStorage.get(el, 'offHandler' + self.namespace);
        tr.removeEventListener('on.xt', onHandler);
        tr.addEventListener('on.xt', onHandler);
        tr.removeEventListener('off.xt', offHandler);
        tr.addEventListener('off.xt', offHandler);
      }
    }
    // auto
    if (options.auto) {
      self.autoStart();
      // focus auto
      window.removeEventListener('focus', self.autoStart.bind(self, false));
      window.addEventListener('focus', self.autoStart.bind(self, false));
      // blur auto
      window.removeEventListener('blur', self.autoStop.bind(self, false));
      window.addEventListener('blur', self.autoStop.bind(self, false));
    }
  }

  /**
   * element on handler
   * @param {Node|HTMLElement} element
   * @param {Event} e
   */
  eventOnHandler(element, e) {
    let self = this;
    let options = self.options;
    // handler
    if (!e.detail || !e.detail.skip) {
      // event block
      if (options.onBlock) {
        let now = new Date().getTime();
        let old = parseFloat(element.dataset['xtEventBlock' + e.type]) || 0;
        element.dataset['xtEventBlock' + e.type] = now.toString();
        if (now - old < options.onBlock) {
          return false;
        }
      }
      // on handler
      let eventLimit = self.container.querySelectorAll('.event-limit');
      if (eventLimit.length) {
        if (!Xt.checkNested(e.target, eventLimit)) {
          self.eventOn(element, e);
        }
      } else {
        self.eventOn(element, e);
      }
      // auto
      if (options.autoPause) {
        self.autoPause();
      } else if (options.auto) {
        self.autoStart();
      }
    }
  }

  /**
   * element off handler
   * @param {Node|HTMLElement} element
   * @param {Event} e
   */
  eventOffHandler(element, e) {
    let self = this;
    let options = self.options;
    // handler
    if (!e.detail || !e.detail.skip) {
      // event block
      if (options.offBlock) {
        let now = new Date().getTime();
        let old = parseFloat(element.dataset['xtEventBlock' + e.type]) || 0;
        element.dataset['xtEventBlock' + e.type] = now.toString();
        if (now - old < options.offBlock) {
          return false;
        }
      }
      // off handler
      let eventLimit = self.container.querySelectorAll('.event-limit');
      if (eventLimit.length) {
        if (!Xt.checkNested(e.target, eventLimit)) {
          self.eventOff(element, e);
        }
      } else {
        self.eventOff(element, e);
      }
    }
  }

  /**
   * init prevents click on touch until clicked two times
   * @param {Node|HTMLElement} el
   * @param {Event} e
   */
  eventTouchLinksStartHandler(el, e) {
    let self = this;
    // event touchLinks
    let touchLinksHandler = Xt.dataStorage.put(el, 'touchLinksHandler' + self.namespace,
      self.eventTouchLinksHandler.bind(self).bind(self, el));
    el.removeEventListener('click', touchLinksHandler);
    el.addEventListener('click', touchLinksHandler);
    // event touchReset
    let touchResetHandler = Xt.dataStorage.put(el, 'touchResetHandler' + self.namespace,
      self.eventTouchLinksResetHandler.bind(self).bind(self, el));
    el.removeEventListener('off.xt', touchResetHandler);
    el.addEventListener('off.xt', touchResetHandler);
  }

  /**
   * prevents click on touch until clicked two times
   * @param {Node|HTMLElement} el
   * @param {Event} e
   */
  eventTouchLinksHandler(el, e) {
    if (!el.dataset.touchLinksDone) {
      el.dataset.touchLinksDone = 'true';
      e.preventDefault();
    } else {
      delete el.dataset.touchLinksDone;
    }
  }

  /**
   * reset prevents click on touch until clicked two times
   * @param {Node|HTMLElement} el
   * @param {Event} e
   */
  eventTouchLinksResetHandler(el, e) {
    delete el.dataset.touchLinksDone;
  }

  /**
   * activate index element
   * @param {Number} index
   */
  goToIndex(index) {
    let self = this;
    // goToIndex
    let current = self.elements[index];
    self.eventOn(current);
    return current;
  }

  /**
   * activate next element
   */
  goToNext() {
    let self = this;
    // goToNext
    let curentIndex = self.curentIndex !== undefined ? self.curentIndex + 1 : 0;
    curentIndex = curentIndex > self.elements.length - 1 ? 0 : curentIndex;
    self.forceNormalDirection = self.curentIndex > curentIndex;
    let current = self.elements[curentIndex];
    self.eventOn(current);
    return current;
  }

  /**
   * activate prev element
   */
  goToPrev() {
    let self = this;
    // goToPrev
    let curentIndex = self.curentIndex !== undefined ? self.curentIndex - 1 : 0;
    curentIndex = curentIndex < 0 ? self.elements.length - 1 : curentIndex;
    self.forceInverseDirection = self.curentIndex < curentIndex;
    let current = self.elements[curentIndex];
    self.eventOn(current);
    return current;
  }

  /**
   * set auto change
   * @param {Boolean} instant
   */
  autoStart(instant = false) {
    let self = this;
    let options = self.options;
    // auto
    self.autoStop();
    let time = !instant ? options.auto : 0;
    self.object.dataset.xtAutoStartInterval = setInterval(function () {
      if (options.autoAlways || self.object.offsetParent) { // @FIX offsetParent for :visible
        self.goToNext();
      }
    }, time).toString();
  }

  /**
   * set autoPause change
   * @param {Boolean} instant
   */
  autoPause(instant = false) {
    let self = this;
    let options = self.options;
    // autoPause
    self.autoStop();
    let time = !instant ? options.autoPause : 0;
    if (time !== 'stop') {
      self.object.dataset.xtAutoPauseTimeout = setTimeout(function () {
        self.autoStart(true);
        self.autoStart();
      }, time).toString();
    }
  }

  /**
   * stop auto change
   */
  autoStop() {
    let self = this;
    // autoStop
    clearInterval(self.object.dataset.xtAutoStartInterval);
    clearTimeout(self.object.dataset.xtAutoPauseTimeout);
  }

  //////////////////////
  // events utils
  //////////////////////

  /**
   * choose which elements to activate/deactivate (based on xtend mode and containers)
   * @param {Node|HTMLElement} element Element that triggered interaction
   * @returns {Object} object.all and object.single
   */
  getElements(element) {
    let self = this;
    // getElements
    if (!self.elements || !self.elements.length) {
      return {all: [], single: null};
    }
    if (self.mode === 'unique') {
      // choose all elements
      let final = self.elements;
      return {all: Xt.arrSingle(final), single: final.length > 1 ? final[0] : final};
    } else if (self.mode === 'multiple') {
      // choose element by group
      let group = element.getAttribute('data-group');
      if (group) {
        // all group elements if group
        let groupElements = Array.from(self.elements).filter(x => x.getAttribute('data-group') === group);
        let final = Xt.arrSingle(groupElements);
        return {all: final, single: final[0]};
      } else {
        // element if not group
        let final = element;
        return {all: Xt.arrSingle(final), single: final};
      }
    }
  }

  /**
   * choose which targets to activate/deactivate (based on xtend mode and containers)
   * @param {Node|HTMLElement} element Element that triggered interaction
   * @returns {Array}
   */
  getTargets(element) {
    let self = this;
    // getTargets
    if (!self.targets || !self.targets.length) {
      return [];
    }
    if (self.mode === 'unique') {
      // choose all targets
      return self.targets;
    } else if (self.mode === 'multiple') {
      // choose only target by group
      let group = element.getAttribute('data-group');
      let groupElements = Array.from(self.elements).filter(x => x.getAttribute('data-group') === group);
      let groupTargets = Array.from(self.targets).filter(x => x.getAttribute('data-group') === group);
      let final;
      if (group) {
        // all group targets if group
        final = groupTargets;
      } else {
        // not group targets by index if not group
        let index = groupElements.findIndex(x => x === element);
        final = groupTargets[index];
      }
      return Xt.arrSingle(final);
    }
  }

  /**
   * choose which elements to activate/deactivate from target (based on xtend mode and containers)
   * @param {Node|HTMLElement} target Target to trigger interaction on
   * @returns {Array}
   */
  getElementsFromTarget(target) {
    let self = this;
    // getElementsFromTarget
    if (!self.elements || !self.elements.length) {
      return [];
    }
    if (self.mode === 'unique') {
      // choose all targets
      return self.elements;
    } else if (self.mode === 'multiple') {
      // choose only target by group
      let group = target.getAttribute('data-group');
      let groupElements = Array.from(self.elements).filter(x => x.getAttribute('data-group') === group);
      let groupTargets = Array.from(self.targets).filter(x => x.getAttribute('data-group') === group);
      let final;
      if (group) {
        // all group targets if group
        final = groupElements;
      } else {
        // not group targets by index if not group
        let index = groupTargets.findIndex(x => x === target);
        final = groupElements[index];
      }
      return Xt.arrSingle(final);
    }
  }

  /**
   * query for inside
   * @param {Node|HTMLElement|NodeList|Array} element Element to search from
   * @param {String} query Query for querySelectorAll
   * @returns {Array}
   */
  getInside(element, query) {
    if (!query) {
      return [];
    }
    if (!element.length) {
      // search element
      return Xt.arrSingle(element.querySelectorAll(query));
    } else {
      // search array
      let arr = [];
      for (let el of element) {
        arr.push(...el.querySelectorAll(query));
      }
      return arr;
    }
  }

  /**
   * get currents based on namespace (so shared between Xt objects)
   * @returns {Array}
   */
  getCurrents() {
    let self = this;
    // getCurrents
    return Xt.currents[self.namespace];
  }

  /**
   * set currents based on namespace (so shared between Xt objects)
   * @param {Array} arr
   */
  setCurrents(arr) {
    let self = this;
    // setCurrents
    Xt.currents[self.namespace] = arr;
  }

  /**
   * add current based on namespace (so shared between Xt objects)
   * @param {Node|HTMLElement} element To be added
   */
  addCurrent(element) {
    let self = this;
    // addCurrent
    let arr = Xt.currents[self.namespace];
    arr.push(element);
  }

  /**
   * remove currents based on namespace (so shared between Xt objects)
   * @param {Node|HTMLElement} element To be removed
   */
  removeCurrent(element) {
    let self = this;
    // removeCurrent
    Xt.currents[self.namespace] = Xt.currents[self.namespace].filter(x => x !== element);
  }

  /**
   * if element is in current (so shared between Xt objects)
   * @param {Node|HTMLElement} element To be checked
   */
  hasCurrent(element) {
    let self = this;
    // hasCurrent
    return Xt.currents[self.namespace].filter(x => x === element).length;
  }

  /**
   * check element on
   * @param {Node|HTMLElement} element To be checked
   */
  checkOn(element) {
    let self = this;
    // check
    let groupElements = self.getElements(element);
    return !self.hasCurrent(groupElements.single);
  }

  /**
   * check element off
   * @param {Node|HTMLElement} element To be checked
   */
  checkOff(element) {
    let self = this;
    let options = self.options;
    // skip if min >= currents
    if (options.min - self.getCurrents().length >= 0) {
      return false;
    }
    // check
    let groupElements = self.getElements(element);
    return self.hasCurrent(groupElements.single);
  }

  /**
   * check elements animation
   * @param {NodeList|Array} elements To be checked
   * @returns {Boolean} If elements are animating
   */
  checkAnim(elements) {
    // check
    elements = elements.filter(x => x.classList.contains('in') || x.classList.contains('out'));
    return elements.length > 0;
  }

  /**
   * set index and direction
   * @param {Node|HTMLElement} element Current element
   */
  setIndexAndDirection(element) {
    let self = this;
    // setIndexAndDirection
    let index = 0;
    for (let [i, el] of self.elements.entries()) {
      if (el === element) {
        index = i;
        break;
      }
    }
    self.inverseDirection = !self.forceNormalDirection && (self.forceInverseDirection || self.curentIndex > index);
    self.forceNormalDirection = false;
    self.forceInverseDirection = false;
    self.curentIndex = index;
  }

  /**
   * set index and direction
   * @param {Node|HTMLElement} el Elements to be deactivated
   */
  decorateDirection(el) {
    let self = this;
    // decorateDirection
    if (!self.inverseDirection) {
      el.classList.remove('direction-inverse');
    } else {
      el.classList.add('direction-inverse');
    }
  }

  /**
   * set eEetail
   * @param {Event} e
   */
  eDetailSet(e) {
    let self = this;
    // eDetailSet
    self.eDetail = e && e.detail && typeof e.detail === 'object' ? e.detail : {};
    self.eDetail.skip = true;
    self.eDetail.object = this;
  }

  //////////////////////
  // events
  //////////////////////

  /**
   * element on
   * @param {Node|HTMLElement} element To be activated
   * @param {Event} e
   */
  eventOn(element, e = null) {
    let self = this;
    let options = self.options;
    // toggle
    if (self.checkOn(element)) {
      // eDetail
      self.eDetailSet(e);
      // on
      let groupElements = self.getElements(element);
      self.addCurrent(groupElements.single);
      self.setIndexAndDirection(element);
      let targets = self.getTargets(element);
      let elementsInner = self.getInside(element, options.elementsInner);
      let targetsInner = self.getInside(targets, options.targetsInner);
      // if currents > max
      let currents = self.getCurrents();
      if (currents.length > options.max) {
        // deactivate old
        self.eventOff(currents[0]);
      }
      // queue obj
      let obj = {};
      if (groupElements.all.length) {
        obj['elements'] = {
          queueEls: groupElements.all,
          groupElements: groupElements
        };
      }
      if (targets.length) {
        obj['targets'] = {
          queueEls: targets,
          groupElements: groupElements
        };
      }
      if (elementsInner.length) {
        obj['elementsInner'] = {
          queueEls: elementsInner,
          groupElements: groupElements
        };
      }
      if (targetsInner.length) {
        obj['targetsInner'] = {
          queueEls: targetsInner,
          groupElements: groupElements
        };
      }
      if (options.instant === true) {
        self.detail.queueOn = [obj];
      } else {
        self.detail.queueOn.unshift(obj);
      }
      // queue run
      for (let type in self.detail.queueOn[0]) {
        self.queueOn(type, 0, true);
      }
    } else if (options.toggle && (!e || !e.detail || !e.detail.skipToggle)) { // not when skipToggle
      // off
      self.eventOff(element, e);
    }
  }

  /**
   * element off
   * @param {Node|HTMLElement} element To be deactivated
   * @param {Event} e
   */
  eventOff(element, e = null) {
    let self = this;
    let options = self.options;
    // toggle
    if (self.checkOff(element)) {
      // eDetail
      self.eDetailSet(e);
      // off
      let groupElements = self.getElements(element);
      self.removeCurrent(groupElements.single);
      let targets = self.getTargets(element);
      let elementsInner = self.getInside(element, options.elementsInner);
      let targetsInner = self.getInside(targets, options.targetsInner);
      // queue obj
      let obj = {};
      if (groupElements.all.length) {
        obj['elements'] = {
          queueEls: groupElements.all,
          groupElements: groupElements
        };
      }
      if (targets.length) {
        obj['targets'] = {
          queueEls: targets,
          groupElements: groupElements
        };
      }
      if (elementsInner.length) {
        obj['elementsInner'] = {
          queueEls: elementsInner,
          groupElements: groupElements
        };
      }
      if (targetsInner.length) {
        obj['targetsInner'] = {
          queueEls: targetsInner,
          groupElements: groupElements
        };
      }
      if (options.instant === true) {
        self.detail.queueOff = [obj];
      } else {
        self.detail.queueOff.unshift(obj);
      }
      // if queue too big
      if (self.detail.queueOff.length > options.max) {
        // remove queue on and done other queue
        let removedOn = self.detail.queueOn.shift();
        self.queueOnEnd(removedOn);
        // remove queue off and  done other queue
        let removedOff = self.detail.queueOff.shift();
        self.queueOffEnd(removedOff);
      }
      // queue run
      for (let type in self.detail.queueOff[0]) {
        self.queueOff(type, 0, true);
      }
    }
  }

  //////////////////////
  // queue utils
  //////////////////////

  /**
   * queue on end
   * @param {Object} obj Queue object to end
   */
  queueOnEnd(obj) {
    let self = this;
    // check if done
    for (let type in obj) {
      if (obj[type].done) {
        for (let el of obj[type].queueEls) {
          // clear timeout and frame
          window.cancelAnimationFrame(parseFloat(el.dataset.xtCollapseFrame));
          clearTimeout(el.dataset.xtDelayTimeout);
          clearTimeout(el.dataset.xtAnimTimeout);
          // done other queue
          self.queueOffDelayDone(obj, el, type, true);
          self.queueOffAnimDone(obj, el, type, true);
        }
      }
    }
  }

  /**
   * queue off end
   * @param {Object} obj Queue object to end
   */
  queueOffEnd(obj) {
    let self = this;
    // check if done
    for (let type in obj) {
      if (obj[type].done) {
        for (let el of obj[type].queueEls) {
          // clear timeout and frame
          window.cancelAnimationFrame(parseFloat(el.dataset.xtCollapseFrame));
          clearTimeout(el.dataset.xtDelayTimeout);
          clearTimeout(el.dataset.xtAnimTimeout);
          // done other queue
          self.queueOnDelayDone(obj, el, type, true);
          self.queueOnAnimDone(obj, el, type, true);
        }
      }
    }
  }

  /**
   * queue on done
   * @param {Object} obj Queue object
   * @param {String} type Type of element
   * @param {Boolean} skipQueue If skip queue
   */
  queueOnDone(obj, type, skipQueue = false) {
    let self = this;
    let options = self.options;
    // check
    if (obj[type] && !skipQueue) {
      // done
      obj[type].done = true;
      let done = 0;
      for (let type in obj) {
        if (obj[type].done) {
          done++;
        }
      }
      // one done
      if (done === 1) {
        // special
        self.specialBackdrop(obj);
        self.specialClassHtmlOn();
        self.specialScrollbarOn();
        // focus
        if (options.scrollbar) {
          let el = obj['targets'] ? obj['targets'].queueEls[0] : obj['elements'].queueEls[0];
          Xt.focus.block = true;
          Xt.focusLimit.on(el);
          el.focus();
        }
      }
      // queue
      self.queueOff(type, self.detail.queueOff.length - 1);
      // all done
      if (done === Object.entries(obj).length) {
        // remove queue
        self.detail.queueOn.pop();
      }
    }
  }

  /**
   * queue off done
   * @param {Object} obj Queue object
   * @param {String} type Type of element
   * @param {Boolean} skipQueue If skip queue
   */
  queueOffDone(obj, type, skipQueue = false) {
    let self = this;
    let options = self.options;
    // check
    if (obj[type] && !skipQueue) {
      // done
      obj[type].done = true;
      let done = 0;
      for (let type in obj) {
        if (obj[type].done) {
          done++;
        }
      }
      // one done
      if (done === 1) {
        // special
        self.specialClassHtmlOff();
        self.specialScrollbarOff();
        // focus
        if (options.scrollbar) {
          Xt.focus.block = false;
          Xt.focusLimit.off();
          Xt.focus.current.focus();
        }
      }
      // queue
      self.queueOn(type, self.detail.queueOn.length - 1);
      // all done
      if (done === Object.entries(obj).length) {
        // remove queue
        self.detail.queueOff.pop();
      }
    }
  }

  //////////////////////
  // queue
  //////////////////////

  /**
   * queue on
   * @param {String} type Type of element
   * @param {Number} index Queue index
   * @param {Boolean} queueInitial If it's the initial queue
   */
  queueOn(type, index, queueInitial = false) {
    let self = this;
    // queueOn
    let obj = self.detail.queueOn[index];
    if (obj && obj[type] && !obj[type].done) {
      let objOther = self.detail.queueOff[self.detail.queueOff.length - 1];
      if (!objOther || !objOther[type] || objOther[type].done) {
        self.queueOnDelay(obj, type, queueInitial);
      }
    }
  }

  /**
   * queue off
   * @param {String} type Type of element
   * @param {Number} index Queue index
   * @param {Boolean} queueInitial If it's the initial queue
   */
  queueOff(type, index, queueInitial = false) {
    let self = this;
    // queueOff
    let obj = self.detail.queueOff[index];
    if (obj && obj[type] && !obj[type].done) {
      let objOther = self.detail.queueOn[self.detail.queueOn.length - 1];
      if (!objOther || !objOther[type] || objOther[type].done) {
        self.queueOffDelay(obj, type, queueInitial);
      }
    }
  }

  /**
   * queue on delay
   * @param {Object} obj Queue object
   * @param {String} type Type of elements
   * @param {Boolean} queueInitial If it's the initial queue
   */
  queueOnDelay(obj, type, queueInitial) {
    let self = this;
    let options = self.options;
    // delay
    let els = obj[type].queueEls;
    for (let el of els) {
      // delay
      let delay;
      if (!options.instant || !options.instant[type]) { // @FIX queue instant
        if (options.delayOn) {
          if (isNaN(options.delayOn)) {
            let count = parseInt(el.dataset.xtOnCount) || obj[type].queueEls.findIndex(x => x === el);
            let tot = parseInt(el.dataset.xtOnTot) || els.length;
            let fnc = new Function('current', 'total', options.delayOn);
            delay = fnc(count, tot - 1).toString();
          } else {
            delay = queueInitial ? 0 : options.delayOn;
          }
        }
      }
      // delay fnc
      clearTimeout(el.dataset.xtDelayTimeout);
      clearTimeout(el.dataset.xtAnimTimeout);
      if (delay) {
        el.dataset.xtDelayTimeout = setTimeout(function () {
          self.queueOnDelayDone(obj, el, type);
        }, delay).toString();
      } else {
        self.queueOnDelayDone(obj, el, type);
      }
      // queue done
      if (options.instant === true) {
        if (el === els[0]) { // only if first element
          self.queueOnDone(obj, type);
        }
      }
    }
  }

  /**
   * queue off delay
   * @param {Object} obj Queue object
   * @param {String} type Type of elements
   * @param {Boolean} queueInitial If it's the initial queue
   */
  queueOffDelay(obj, type, queueInitial) {
    let self = this;
    let options = self.options;
    // delay
    let els = obj[type].queueEls;
    for (let el of els) {
      // delay
      let delay;
      if (!options.instant || !options.instant[type]) { // @FIX queue instant
        if (options.delayOff) {
          if (isNaN(options.delayOff)) {
            let count = parseInt(el.dataset.xtOffCount) || obj[type].queueEls.findIndex(x => x === el);
            let tot = parseInt(el.dataset.xtOffTot) || els.length;
            let fnc = new Function('current', 'total', options.delayOff);
            delay = fnc(count, tot - 1).toString();
          } else {
            delay = queueInitial ? 0 : options.delayOff;
          }
        }
      }
      // delay fnc
      clearTimeout(el.dataset.xtDelayTimeout);
      clearTimeout(el.dataset.xtAnimTimeout);
      if (delay) {
        el.dataset.xtDelayTimeout = setTimeout(function () {
          self.queueOffDelayDone(obj, el, type);
        }, delay).toString();
      } else {
        self.queueOffDelayDone(obj, el, type);
      }
      // queue done
      if (options.instant === true) {
        if (el === els[0]) { // only if first element
          self.queueOffDone(obj, type);
        }
      }
    }
  }

  /**
   * queue on start
   * @param {Object} obj Queue object
   * @param {Node|HTMLElement} el Elements to be deactivated
   * @param {String} type Type of elements
   * @param {Boolean} skipQueue If skip queue
   */
  queueOnDelayDone(obj, el, type, skipQueue = false) {
    let self = this;
    let options = self.options;
    // activate
    el.classList.add(...options.classes);
    el.classList.add('in');
    el.classList.remove('out');
    self.decorateDirection(el);
    // special
    self.specialCenter(el);
    self.specialMiddle(el);
    self.specialCollapseOn(el);
    if (type === 'targets') {
      // appendTo
      if (options.appendTo) {
        let appendToTarget = document.querySelectorAll(options.appendTo);
        self.detail.appendOrigin = el.parentElement;
        appendToTarget[0].appendChild(el);
      }
    }
    if (type === 'targets' || type === 'targetsInner') {
      self.specialCloseOn(el, obj[type].groupElements.single);
    }
    // aria
    if (type === 'elements') {
      if (options.aria) {
        let ariaEls = self.getInside(el, options.ariaControls);
        let ariaEl = ariaEls.length ? ariaEls[0] : el;
        ariaEl.setAttribute('aria-selected', 'true');
      }
    }
    if (type === 'targets' || type === 'targetsInner') {
      if (options.aria) {
        let role = el.getAttribute('role');
        if (role === 'tabpanel' || role === 'listbox' || role === 'dialog') {
          el.setAttribute('aria-expanded', 'true');
        }
      }
    }
    // queue
    if (!skipQueue) {
      self.queueOnAnim(obj, el, type);
    }
    // queue done
    if (typeof options.instant === 'object' && options.instant[type]) {
      let els = obj[type].queueEls;
      if (el === els[els.length - 1]) { // only if last element
        self.queueOnDone(obj, type, skipQueue);
      }
    }
    // listener dispatch
    el.dispatchEvent(new CustomEvent('on.xt', {detail: self.eDetail}));
  }

  /**
   * queue off start
   * @param {Object} obj Queue object
   * @param {Node|HTMLElement} el Elements to be deactivated
   * @param {String} type Type of elements
   * @param {Boolean} skipQueue If skip queue
   */
  queueOffDelayDone(obj, el, type, skipQueue = false) {
    let self = this;
    let options = self.options;
    // deactivate
    el.classList.remove(...options.classes);
    el.classList.remove('in');
    el.classList.add('out');
    self.decorateDirection(el);
    // special
    self.specialCollapseOff(el);
    if (type === 'targets' || type === 'targetsInner') {
      self.specialCloseOff(el);
    }
    // queue
    if (!skipQueue) {
      self.queueOffAnim(obj, el, type);
    }
    // queue done
    if (typeof options.instant === 'object' && options.instant[type]) {
      let els = obj[type].queueEls;
      if (el === els[els.length - 1]) { // only if last element
        self.queueOffDone(obj, type, skipQueue);
      }
    }
    // listener dispatch
    el.dispatchEvent(new CustomEvent('off.xt', {detail: self.eDetail}));
  }

  /**
   * queue on anim
   * @param {Object} obj Queue object
   * @param {Node|HTMLElement} el Element to be animated
   * @param {String} type Type of element
   */
  queueOnAnim(obj, el, type) {
    let self = this;
    let options = self.options;
    // anim
    let duration = Xt.animDuration(el, options.durationOn);
    clearTimeout(el.dataset.xtAnimTimeout);
    if (!duration) {
      self.queueOnAnimDone(obj, el, type);
    } else {
      el.dataset.xtAnimTimeout = setTimeout(function () {
        self.queueOnAnimDone(obj, el, type);
      }, duration).toString();
    }
  }

  /**
   * queue off anim
   * @param {Object} obj Queue object
   * @param {Node|HTMLElement} el Element to be animated
   * @param {String} type Type of element
   */
  queueOffAnim(obj, el, type) {
    let self = this;
    let options = self.options;
    // anim
    let duration = Xt.animDuration(el, options.durationOff);
    clearTimeout(el.dataset.xtAnimTimeout);
    if (!duration) {
      self.queueOffAnimDone(obj, el, type);
    } else {
      el.dataset.xtAnimTimeout = setTimeout(function () {
        self.queueOffAnimDone(obj, el, type);
      }, duration).toString();
    }
  }

  /**
   * queue on anim done
   * @param {Object} obj Queue object
   * @param {Node|HTMLElement} el Element to be animated
   * @param {String} type Type of element
   * @param {Boolean} skipQueue If skip queue
   */
  queueOnAnimDone(obj, el, type, skipQueue = false) {
    let self = this;
    let options = self.options;
    // reset
    el.classList.remove('in');
    // special
    self.specialCollapseReset(el);
    // queue done
    if (!options.instant || !options.instant[type]) {
      let els = obj[type].queueEls;
      if (el === els[els.length - 1]) { // only if last element
        self.queueOnDone(obj, type, skipQueue);
      }
    }
  }

  /**
   * queue off anim done
   * @param {Object} obj Queue object
   * @param {Node|HTMLElement} el Element to be animated
   * @param {String} type Type of element
   * @param {Boolean} skipQueue If skip queue
   */
  queueOffAnimDone(obj, el, type, skipQueue = false) {
    let self = this;
    let options = self.options;
    // reset
    el.classList.remove('out');
    // special
    if (type === 'targets') {
      // appendTo
      if (options.appendTo) {
        self.detail.appendOrigin.appendChild(el);
      }
    }
    // aria
    if (type === 'elements') {
      if (options.aria) {
        let ariaEls = self.getInside(el, options.ariaControls);
        let ariaEl = ariaEls.length ? ariaEls[0] : el;
        ariaEl.setAttribute('aria-selected', 'false');
      }
    }
    if (type === 'targets') {
      if (options.aria) {
        let role = el.getAttribute('role');
        if (role === 'tabpanel' || role === 'listbox' || role === 'dialog') {
          el.setAttribute('aria-expanded', 'false');
        }
      }
    }
    // queue done
    if (!options.instant || !options.instant[type]) {
      let els = obj[type].queueEls;
      if (el === els[els.length - 1]) { // only if last element
        self.queueOffDone(obj, type, skipQueue);
      }
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
    // class on
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
    // class off
    if (options.classHtml) {
      let container = document.documentElement;
      container.classList.remove(...options.classHtml.split(' '));
    }
  }

  /**
   * backdrop append to element
   * @param {Object} obj Queue object
   */
  specialBackdrop(obj) {
    let self = this;
    let options = self.options;
    // backdrop
    if (options.backdrop) {
      let elements = typeof options.backdrop === 'string' && obj[options.backdrop] ? Xt.arrSingle(obj[options.backdrop].queueEls) : Xt.arrSingle(self.object);
      for (let element of elements) {
        let backdrop = element.querySelectorAll('.xt-backdrop');
        if (!backdrop.length) {
          backdrop = Xt.createElement('<div class="xt-backdrop"></div>');
          element.append(backdrop);
        }
      }
    }
  }

  /**
   * center position on activation
   * @param {Node|HTMLElement} el Element
   */
  specialCenter(el) {
    let self = this;
    // specialCenter
    if (el.classList.contains('drop--center')) {
      let add = self.object.clientWidth;
      let remove = el.clientWidth;
      el.style.left = ((add - remove) / 2) + 'px';
    }
  }

  /**
   * middle position on activation
   * @param {Node|HTMLElement} el Element
   */
  specialMiddle(el) {
    let self = this;
    // specialMiddle
    if (el.classList.contains('drop--middle')) {
      let add = self.object.clientHeight;
      let remove = el.clientHeight;
      el.style.top = ((add - remove) / 2) + 'px';
    }
  }

  /**
   * open collapse on activation
   * @param {Node|HTMLElement} el Element
   */
  specialCollapseOn(el) {
    if (el.classList.contains('collapse--height')) {
      el.classList.add('xt-calculating');
      el.style.height = 'auto';
      el.style.paddingTop = '';
      el.style.paddingBottom = '';
      let h = el.clientHeight + 'px';
      let pt = el.style.paddingTop;
      let pb = el.style.paddingBottom;
      window.cancelAnimationFrame(parseFloat(el.dataset.xtCollapseFrame));
      el.dataset.xtCollapseFrame = window.requestAnimationFrame(function () {
        el.classList.remove('xt-calculating');
        el.style.height = '0';
        el.style.paddingTop = '0';
        el.style.paddingBottom = '0';
        el.dataset.xtCollapseFrame = window.requestAnimationFrame(function () {
          el.style.height = h;
          el.style.paddingTop = pt;
          el.style.paddingBottom = pb;
        }).toString();
      }).toString();
    }
    if (el.classList.contains('collapse--width')) {
      el.classList.add('xt-calculating');
      el.style.width = 'auto';
      el.style.paddingLeft = '';
      el.style.paddingRight = '';
      let w = el.clientHeight + 'px';
      let pl = el.style.paddingLeft;
      let pr = el.style.paddingRight;
      window.cancelAnimationFrame(parseFloat(el.dataset.xtCollapseFrame));
      el.dataset.xtCollapseFrame = window.requestAnimationFrame(function () {
        el.classList.remove('xt-calculating');
        el.style.width = '0';
        el.style.paddingLeft = '0';
        el.style.paddingRight = '0';
        el.dataset.xtCollapseFrame = window.requestAnimationFrame(function () {
          el.style.width = w;
          el.style.paddingLeft = pl;
          el.style.paddingRight = pr;
        }).toString();
      }).toString();
    }
  }

  /**
   * close collapse on deactivation
   * @param {Node|HTMLElement} el Element
   */
  specialCollapseOff(el) {
    if (el.classList.contains('collapse--height')) {
      let h = el.clientHeight + 'px';
      let pt = el.style.paddingTop;
      let pb = el.style.paddingBottom;
      window.cancelAnimationFrame(parseFloat(el.dataset.xtCollapseFrame));
      el.dataset.xtCollapseFrame = window.requestAnimationFrame(function () {
        el.style.height = h;
        el.style.paddingTop = pt;
        el.style.paddingBottom = pb;
        el.dataset.xtCollapseFrame = window.requestAnimationFrame(function () {
          el.style.height = '0';
          el.style.paddingTop = '0';
          el.style.paddingBottom = '0';
        }).toString();
      }).toString();
    }
    if (el.classList.contains('collapse--width')) {
      let w = el.clientWidth + 'px';
      let pl = el.style.paddingLeft;
      let pr = el.style.paddingRight;
      window.cancelAnimationFrame(parseFloat(el.dataset.xtCollapseFrame));
      el.dataset.xtCollapseFrame = window.requestAnimationFrame(function () {
        el.style.width = w;
        el.style.paddingLeft = pl;
        el.style.paddingRight = pr;
        el.dataset.xtCollapseFrame = window.requestAnimationFrame(function () {
          el.style.width = '0';
          el.style.paddingLeft = '0';
          el.style.paddingRight = '0';
        }).toString();
      }).toString();
    }
  }

  /**
   * reset collapse
   * @param {Node|HTMLElement} el Element
   */
  specialCollapseReset(el) {
    if (el.classList.contains('collapse--height')) {
      el.style.height = 'auto';
    }
    if (el.classList.contains('collapse--width')) {
      el.style.width = 'auto';
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
      window.requestAnimationFrame(function () {
        for (let closeElement of closeElements) {
          let specialCloseInsideHandler = Xt.dataStorage.put(closeElement, 'specialCloseInsideHandler' + self.namespace,
            self.eventSpecialCloseInsideHandler.bind(self).bind(self, closeElement, single));
          closeElement.removeEventListener('click', specialCloseInsideHandler);
          closeElement.addEventListener('click', specialCloseInsideHandler);
        }
      });
    }
    // closeOutside
    if (options.closeOutside) {
      let closeElements = document.querySelectorAll(options.closeOutside);
      window.requestAnimationFrame(function () {
        for (let closeElement of closeElements) {
          let specialCloseOutsideHandler = Xt.dataStorage.put(closeElement, 'specialCloseOutsideHandler' + self.namespace,
            self.eventSpecialCloseOutsideHandler.bind(self).bind(self, el, single));
          closeElement.removeEventListener('click', specialCloseOutsideHandler);
          closeElement.addEventListener('click', specialCloseOutsideHandler);
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
        let specialCloseInsideHandler = Xt.dataStorage.get(closeElement, 'specialCloseInsideHandler' + self.namespace);
        closeElement.removeEventListener('click', specialCloseInsideHandler);
      }
    }
    // closeOutside
    if (options.closeOutside) {
      let closeElements = document.querySelectorAll(options.closeOutside);
      for (let closeElement of closeElements) {
        let specialCloseOutsideHandler = Xt.dataStorage.get(closeElement, 'specialCloseOutsideHandler' + self.namespace);
        closeElement.removeEventListener('click', specialCloseOutsideHandler);
      }
    }
  }

  /**
   * element on handler
   * @param {Node|HTMLElement} checkEl
   * @param {Node|HTMLElement} single
   * @param {Event} e
   */
  eventSpecialCloseInsideHandler(checkEl, single, e) {
    let self = this;
    // prevent closing when nested and moved (ex: overlay)
    if (!Xt.checkNested(checkEl, self.targets)) {
      return false;
    }
    // handler
    if (Xt.checkNested(e.target, Xt.arrSingle(checkEl))) {
      self.eventOff(single);
    }
  }

  /**
   * element off handler
   * @param {Node|HTMLElement} checkEl
   * @param {Node|HTMLElement} single
   * @param {Event} e
   */
  eventSpecialCloseOutsideHandler(checkEl, single, e) {
    let self = this;
    // handler
    if (!Xt.checkNested(e.target, Xt.arrSingle(checkEl))) {
      self.eventOff(single);
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
      // checks
      Xt.scrollbar.add(self.namespace);
      // vars
      let width = Xt.scrollbarWidth();
      // scrollbar
      let container = document.documentElement;
      container.style.paddingRight = width + 'px';
      container.classList.add('xt-scrollbar');
      // check fixed
      let checks = document.querySelectorAll('.xt-check-fixed > *');
      for (let check of checks) {
        let style = getComputedStyle(check);
        if (style.position === 'fixed') {
          check.classList.add('xt-fixed');
        } else {
          check.classList.remove('xt-fixed');
        }
      }
      // fixed
      let elements = document.querySelectorAll('.xt-fixed');
      for (let element of elements) {
        element.style.paddingRight = '';
        if (self.normalizeWidth(element.clientWidth) === '') {
          let style = getComputedStyle(element);
          let padding = style.paddingRight;
          let str = 'calc(' + padding + ' + ' + width + 'px)';
          element.classList.add('transition--none');
          window.requestAnimationFrame(function () {
            element.style.paddingRight = str;
            window.requestAnimationFrame(function () {
              element.classList.remove('transition--none');
            });
          });
        }
      }
      // backdrop
      let backdrops = self.object.querySelectorAll(':scope > .xt-backdrop');
      for (let backdrop of backdrops) {
        backdrop.style.right = width + 'px';
      }
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
      // checks
      Xt.scrollbar.remove(self.namespace);
      if (!Xt.scrollbar.get().length) {
        // scrollbar
        let container = document.documentElement;
        container.style.paddingRight = '';
        container.classList.remove('xt-scrollbar');
        // fixed
        let elements = document.querySelectorAll('.xt-fixed');
        for (let element of elements) {
          element.classList.add('transition--none');
          window.requestAnimationFrame(function () {
            element.style.paddingRight = '';
            window.requestAnimationFrame(function () {
              element.classList.remove('transition--none');
            });
          });
        }
        // backdrop
        let backdrops = self.object.querySelectorAll(':scope > .xt-backdrop');
        for (let backdrop of backdrops) {
          backdrop.style.right = '';
        }
      }
    }
  }

  /**
   * if full width return '' else return value in px
   * @param {Number|String} width
   * @returns {String} Value in px
   */
  normalizeWidth(width) {
    width = parseFloat(width);
    if (width + Xt.scrollbarWidth() >= window.innerWidth) {
      width = '';
    } else {
      width += 'px';
    }
    return width;
  }

}

//////////////////////
// export
//////////////////////

export default Core;