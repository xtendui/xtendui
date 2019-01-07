/* xtend (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

'use strict';

import Xt from './xtend';

//////////////////////
// Core
//////////////////////

class Core {

  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} jsOptions User options
   * @constructor
   */
  constructor(object, jsOptions = {}) {
    let self = this;
    // constructor
    if (object && !object.dataset.xtCoreDone) {
      object.dataset.xtCoreDone = 'true';
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
   * setup
   */
  init() {
    let self = this;
    let jsOptions = self.jsOptions;
    // defaults
    self.defaults = {
      "onBlock": false,
      "offBlock": false,
      "loop": true,
      "jump": false,
      "delayOn": false,
      "delayOff": false,
      "durationOn": false,
      "durationOff": false,
      "auto": {
        "time": false,
        "step": 1,
        "initial": true,
        "hidden": false,
        "loop": true,
        "inverse": false,
        "pause": false
      },
      "aria": {
        "tabindex": true,
        "controls": true,
        "labelledby": true
      },
      "keyboard": false
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
    // var
    self.elements = [];
    self.elementsSingle = [];
    self.targets = [];
    self.detail = {};
    self.detail.queueOn = [];
    self.detail.queueOff = [];
    self.detail.inverseDirection = false;
    self.detail.forceNormalDirection = false;
    self.detail.forceInverseDirection = false;
    // init
    self.initSetup();
    self.initScope();
    self.initCurrents();
    self.initEvents();
    self.initAria();
  }

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
      self.container.dataset.uniqueID = self.container.dataset.uniqueID ? self.container.dataset.uniqueID : Xt.getUniqueID();
      self.namespace = self.constructor.componentName + '-' + self.container.dataset.uniqueID;
    }
    // final namespace
    self.namespace = self.namespace.replace(/^[^a-z]+|[^\w:.-]+/gi, '');
    // currents array based on namespace (so shared between Xt objects)
    self.setCurrents([]);
  }

  /**
   * init elements, targets and currents
   */
  initScope() {
    let self = this;
    // elements
    self.initScopeElements();
    // targets
    self.initScopeTargets();
  }

  /**
   * init elements
   */
  initScopeElements() {
    let self = this;
    let options = self.options;
    // elements
    if (options.elements) {
      let arr = Array.from(Xt.arrSingle(self.container.querySelectorAll(options.elements)));
      arr = arr.filter(x => !x.classList.contains('xt-clone')); // filter out clone
      arr = arr.filter(x => !x.getAttribute('data-xt-nav')); // filter out nav
      self.elements = arr;
    }
    if (self.elements.length) {
      // elementsSingle
      self.elementsSingle = self.getElementsSingle();
    } else {
      self.elements = Xt.arrSingle(self.object);
      // @FIX set namespace for next frame
      window.requestAnimationFrame(function () {
        let arr = Array.from(Xt.arrSingle(document.querySelectorAll('[data-xt-namespace=' + self.namespace + ']')));
        arr = arr.filter(x => !x.classList.contains('xt-clone')); // filter out clone
        arr = arr.filter(x => !x.getAttribute('data-xt-nav')); // filter out nav
        self.elements = arr;
        // elementsSingle
        self.elementsSingle = self.getElementsSingle();
      });
    }
  }

  /**
   * init targets
   */
  initScopeTargets() {
    let self = this;
    let options = self.options;
    // targets
    if (options.targets) {
      let arr = Array.from(self.container.querySelectorAll(options.targets));
      arr = arr.filter(x => !Xt.parents(x, options.targets).length); // filter out parent
      arr = arr.filter(x => !x.classList.contains('xt-clone')); // filter out clone
      self.targets = arr;
    }
  }

  /**
   * init currents
   */
  initCurrents() {
    let self = this;
    let options = self.options;
    // initial
    self.detail.initial = true;
    // @FIX set namespace for next frame
    for (let el of self.elements) {
      el.dataset.xtNamespace = self.namespace;
    }
    // automatic initial currents
    window.requestAnimationFrame(function () {
      let elements = self.getElementsSingle();
      if (elements.length) {
        for (let element of elements) {
          let found = false;
          // elements
          let group = element.getAttribute('data-xt-group');
          if (group) {
            let groupElements = Array.from(self.elements).filter(x => x.getAttribute('data-xt-group') === group);
            for (let el of groupElements) {
              if (el.classList.contains(options.classes[0])) {
                el.classList.remove(...options.classes);
                found = true;
              }
            }
          } else {
            if (element.classList.contains(options.classes[0])) {
              element.classList.remove(...options.classes);
              found = true;
            }
          }
          // targets
          let targets = self.getTargets(element);
          for (let tr of targets) {
            if (tr.classList.contains(options.classes[0])) {
              tr.classList.remove(...options.classes);
              found = true;
            }
          }
          // found
          if (found) {
            self.eventOn(element);
          }
        }
        // if currents < min
        let todo = options.min - self.getCurrents().length;
        if (todo) {
          // activate
          for (let i = 0; i < todo; i++) {
            self.eventOn(self.elements[i]);
          }
        } else {
          // auto
          if (options.auto && options.auto.time && options.auto.initial) {
            self.eventAutoStart();
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
          if (options.aria === true || options.aria.labelledby || options.aria.controls) {
            let id = ariaEl.getAttribute('id');
            if (!id) {
              ariaEl.setAttribute('id', Xt.getUniqueID());
            }
          }
          // selected
          ariaEl.setAttribute('aria-selected', 'false');
        }
        for (let tr of self.targets) {
          let els = self.getElementsFromTarget(tr);
          // expanded
          let role = tr.getAttribute('role');
          if (role === 'tabpanel' || role === 'listbox' || role === 'dialog') {
            tr.setAttribute('aria-expanded', 'false');
          }
          // tabindex
          if (options.aria === true || options.aria.tabindex) {
            let focusables = tr.querySelectorAll(Xt.focusables);
            for (let focusable of focusables) {
              focusable.setAttribute('tabindex', '-1');
            }
          }
          // id
          if (options.aria === true || options.aria.labelledby || options.aria.controls) {
            let id = tr.getAttribute('id');
            if (!id) {
              tr.setAttribute('id', Xt.getUniqueID());
            }
          }
          // labelledby
          if (options.aria === true || options.aria.labelledby) {
            let str = ' ';
            str += tr.getAttribute('aria-labelledby') || '';
            for (let el of els) {
              let ariaEls = self.getInside(el, options.ariaControls);
              let ariaEl = ariaEls.length ? ariaEls[0] : el;
              str += ' ' + ariaEl.getAttribute('id');
            }
            tr.setAttribute('aria-labelledby', str.trim());
          }
        }
        if (options.aria === true || options.aria.controls) {
          for (let el of self.elements) {
            let trs = self.getTargets(el);
            let ariaEls = self.getInside(el, options.ariaControls);
            let ariaEl = ariaEls.length ? ariaEls[0] : el;
            // controls
            let str = ' ';
            str += ariaEl.getAttribute('aria-controls') || '';
            for (let tr of trs) {
              str += ' ' + tr.getAttribute('id');
            }
            ariaEl.setAttribute('aria-controls', str.trim());
          }
        }
        // keyboard
        if (options.keyboard) {
          let keyboards = options.keyboard.selector ? self.object.querySelectorAll(options.keyboard.selector) : Xt.arrSingle(self.object);
          for (let keyboard of keyboards) {
            keyboard.setAttribute('tabindex', '0');
            // event focus
            let ariaFocusHandler = Xt.dataStorage.put(keyboard, 'ariaFocusHandler',
              self.eventAriaFocusHandler.bind(self).bind(self, keyboard));
            keyboard.removeEventListener('focus', ariaFocusHandler);
            keyboard.addEventListener('focus', ariaFocusHandler);
            // event blur
            let ariaBlurHandler = Xt.dataStorage.put(keyboard, 'ariaBlurHandler',
              self.eventAriaBlurHandler.bind(self).bind(self, keyboard));
            keyboard.removeEventListener('blur', ariaBlurHandler);
            keyboard.addEventListener('blur', ariaBlurHandler);
          }
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
    options.toggle = options.toggle !== undefined ? options.toggle : !options.off;
    // event
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
    if (options.auto && options.auto.time) {
      // focus auto
      window.removeEventListener('focus', self.eventAutoStart.bind(self, false));
      window.addEventListener('focus', self.eventAutoStart.bind(self, false));
      // blur auto
      window.removeEventListener('blur', self.eventAutoStop.bind(self, false));
      window.addEventListener('blur', self.eventAutoStop.bind(self, false));
      // autoPause
      for (let el of self.object.querySelectorAll(options.auto.pause)) {
        // pause
        let autoPauseOnHandler = Xt.dataStorage.put(el, 'autoPauseOnHandler' + self.namespace,
          self.eventAutoPauseOnHandler.bind(self).bind(self, el));
        el.removeEventListener('mouseenter', autoPauseOnHandler);
        el.addEventListener('mouseenter', autoPauseOnHandler);
        // resume
        let autoPauseOffHandler = Xt.dataStorage.put(el, 'autoPauseOffHandler' + self.namespace,
          self.eventAutoPauseOffHandler.bind(self).bind(self, el));
        el.removeEventListener('mouseleave', autoPauseOffHandler);
        el.addEventListener('mouseleave', autoPauseOffHandler);
      }
    }
    // jump
    if (options.jump) {
      for (let jump of self.targets) {
        let jumpHandler = Xt.dataStorage.put(jump, 'jumpHandler' + self.namespace,
          self.eventJumpHandler.bind(self).bind(self, jump));
        jump.removeEventListener('click', jumpHandler);
        jump.addEventListener('click', jumpHandler, true); // @FIX useCapture: true or it gets the click from elements inside the target
        // jump
        jump.classList.add('xt-jump');
      }
    }
    // navigation
    if (options.navigation) {
      let navs = self.object.querySelectorAll(options.navigation);
      if (navs.length) {
        for (let nav of navs) {
          let navHandler = Xt.dataStorage.put(nav, 'navHandler' + self.namespace,
            self.eventNavHandler.bind(self).bind(self, nav));
          nav.removeEventListener('click', navHandler);
          nav.addEventListener('click', navHandler);
        }
      }
    }
  }

  //////////////////////
  // handler
  //////////////////////

  /**
   * aria focus handler
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {Event} e
   */
  eventAriaFocusHandler(el, e) {
    let self = this;
    // event key
    let ariaKeyHandler = Xt.dataStorage.put(document, 'ariaKeyHandler',
      self.eventAriaKeyHandler.bind(self));
    document.removeEventListener('keyup', ariaKeyHandler);
    document.addEventListener('keyup', ariaKeyHandler);
  }

  /**
   * aria blur handler
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {Event} e
   */
  eventAriaBlurHandler(el, e) {
    // event key
    let ariaKeyHandler = Xt.dataStorage.get(document, 'ariaKeyHandler');
    document.removeEventListener('keyup', ariaKeyHandler);
  }

  /**
   * aria focus handler
   * @param {Event} e
   */
  eventAriaKeyHandler(e) {
    let self = this;
    let options = self.options;
    // key
    let code = e.keyCode ? e.keyCode : e.which;
    let prev;
    let next;
    if (options.keyboard.vertical) {
      if (options.keyboard.inverse) {
        prev = 40;
        next = 38;
      } else {
        prev = 38;
        next = 40;
      }
    } else {
      if (options.keyboard.inverse) {
        prev = 39;
        next = 37;
      } else {
        prev = 37;
        next = 39;
      }
    }
    if (code === prev) {
      self.goToPrev(1);
    } else if (code === next) {
      self.goToNext(1);
    }
  }

  /**
   * element on handler
   * @param {Node|HTMLElement|EventTarget|Window} element
   * @param {Event} e
   */
  eventOnHandler(element, e) {
    let self = this;
    let options = self.options;
    // prevent links (needed for xt-ajax)
    if (element.tagName === 'A') {
      e.preventDefault();
    }
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
          self.eventOn(element, false, e);
        }
      } else {
        self.eventOn(element, false, e);
      }
    }
  }

  /**
   * element off handler
   * @param {Node|HTMLElement|EventTarget|Window} element
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
          self.eventOff(element, false, e);
        }
      } else {
        self.eventOff(element, false, e);
      }
    }
  }

  /**
   * init prevents click on touch until clicked two times
   * @param {Node|HTMLElement|EventTarget|Window} el
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
   * remove prevents click on touch until clicked two times
   * @param {Node|HTMLElement|EventTarget|Window} el
   */
  eventTouchLinksEndHandler(el) {
    let self = this;
    // event touchLinks
    let touchLinksHandler = Xt.dataStorage.get(el, 'touchLinksHandler' + self.namespace);
    el.removeEventListener('click', touchLinksHandler);
    // event touchReset
    let touchResetHandler = Xt.dataStorage.get(el, 'touchResetHandler' + self.namespace);
    el.removeEventListener('off.xt', touchResetHandler);
  }

  /**
   * prevents click on touch until clicked two times
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {Event} e
   */
  eventTouchLinksHandler(el, e) {
    let self = this;
    if (!el.dataset.touchLinksDone) {
      e.preventDefault();
      el.dataset.touchLinksDone = 'true';
    } else {
      self.eventTouchLinksEndHandler(el);
      delete el.dataset.touchLinksDone;
    }
  }

  /**
   * reset prevents click on touch until clicked two times
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {Event} e
   */
  eventTouchLinksResetHandler(el, e) {
    let self = this;
    self.eventTouchLinksEndHandler(el);
    delete el.dataset.touchLinksDone;
  }

  /**
   * auto pause on handler
   * @param {Node|HTMLElement|EventTarget|Window} element
   * @param {Event} e
   */
  eventAutoPauseOnHandler(element, e) {
    let self = this;
    if (!e.detail || !e.detail.skip) {
      self.eventAutoStop();
    }
  }

  /**
   * auto pause off handler
   * @param {Node|HTMLElement|EventTarget|Window} element
   * @param {Event} e
   */
  eventAutoPauseOffHandler(element, e) {
    let self = this;
    if (!e.detail || !e.detail.skip) {
      self.eventAutoStart();
    }
  }

  /**
   * jump handler
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {Event} e
   */
  eventJumpHandler(el, e) {
    let self = this;
    // handler
    self.eventJump(el, e);
  }

  /**
   * nav handler
   * @param {Node|HTMLElement|EventTarget|Window} nav
   * @param {Event} e
   */
  eventNavHandler(nav, e) {
    let self = this;
    // handler
    self.eventNav(nav, e);
  }

  //////////////////////
  // event util
  //////////////////////

  /**
   * get elements array single (one element per group)
   * @returns {Array} array of elements
   */
  getElementsSingle() {
    let self = this;
    // groups
    let groups = [];
    for (let element of self.elements) {
      // choose element by group
      let group = element.getAttribute('data-xt-group');
      if (group) {
        let found = groups.filter(x => x.getAttribute('data-xt-group') === group);
        if (!found.length) {
          groups.push(element);
        }
      } else {
        groups.push(element);
      }
    }
    return groups;
  }

  /**
   * choose which elements to activate/deactivate (based on xtend mode and containers)
   * @param {Node|HTMLElement|EventTarget|Window} element Element that triggered interaction
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
      let group = element.getAttribute('data-xt-group');
      if (group) {
        // all group elements if group
        let groupElements = Array.from(self.elements).filter(x => x.getAttribute('data-xt-group') === group);
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
   * @param {Node|HTMLElement|EventTarget|Window} element Element that triggered interaction
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
      let group = element.getAttribute('data-xt-group');
      let groupElements = Array.from(self.elements).filter(x => x.getAttribute('data-xt-group') === group);
      let groupTargets = Array.from(self.targets).filter(x => x.getAttribute('data-xt-group') === group);
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
   * @param {Node|HTMLElement|EventTarget|Window} target Target to trigger interaction on
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
      let group = target.getAttribute('data-xt-group');
      let groupElements = Array.from(self.elements).filter(x => x.getAttribute('data-xt-group') === group);
      let groupTargets = Array.from(self.targets).filter(x => x.getAttribute('data-xt-group') === group);
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
   * @param {Node|HTMLElement|EventTarget|Window} element To be added
   */
  addCurrent(element) {
    let self = this;
    // addCurrent
    if (!self.hasCurrent(element)) {
      let arr = Xt.currents[self.namespace];
      arr.push(element);
    }
  }

  /**
   * remove currents based on namespace (so shared between Xt objects)
   * @param {Node|HTMLElement|EventTarget|Window} element To be removed
   */
  removeCurrent(element) {
    let self = this;
    // removeCurrent
    Xt.currents[self.namespace] = Xt.currents[self.namespace].filter(x => x !== element);
  }

  /**
   * if element is in current (so shared between Xt objects)
   * @param {Node|HTMLElement|EventTarget|Window} element To be checked
   */
  hasCurrent(element) {
    let self = this;
    // hasCurrent
    return Xt.currents[self.namespace].filter(x => x === element).length;
  }

  /**
   * check element on
   * @param {Node|HTMLElement|EventTarget|Window} element To be checked
   */
  checkOn(element) {
    let self = this;
    // check
    let groupElements = self.getElements(element);
    return !self.hasCurrent(groupElements.single);
  }

  /**
   * check element off
   * @param {Node|HTMLElement|EventTarget|Window} element To be checked
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
   * @param {Node|HTMLElement|EventTarget|Window} element Current element
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
    self.detail.inverseDirection = !self.detail.forceNormalDirection && (self.detail.forceInverseDirection || self.currentIndex > index);
    self.detail.forceNormalDirection = false;
    self.detail.forceInverseDirection = false;
    self.currentIndex = index;
  }

  /**
   * set index and direction
   * @param {Node|HTMLElement|EventTarget|Window} el Elements to be deactivated
   */
  decorateDirection(el) {
    let self = this;
    // decorateDirection
    if (!self.detail.inverseDirection) {
      el.classList.remove('xt-inverse');
    } else {
      el.classList.add('xt-inverse');
    }
  }

  /**
   * set eEetail
   * @param {Event} e
   */
  eDetailSet(e = null) {
    let self = this;
    // eDetailSet
    self.eDetail = e && e.detail && typeof e.detail === 'object' ? e.detail : {};
    self.eDetail.skip = true;
    self.eDetail.object = this;
  }

  //////////////////////
  // event
  //////////////////////

  /**
   * element on
   * @param {Node|HTMLElement|EventTarget|Window} element To be activated
   * @param {Boolean} force
   * @param {Event} e
   * @returns {Boolean} If activated
   */
  eventOn(element, force = false, e = null) {
    let self = this;
    let options = self.options;
    // toggle
    if (force || self.checkOn(element)) {
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
      // activated
      return true;
    } else if (options.toggle && (!e || !e.detail || !e.detail.skipToggle)) { // not when skipToggle
      // off
      self.eventOff(element, e);
    }
    // activated
    return false;
  }

  /**
   * element off
   * @param {Node|HTMLElement|EventTarget|Window} element To be deactivated
   * @param {Boolean} force
   * @param {Event} e
   * @returns {Boolean} If deactivated
   */
  eventOff(element, force = false, e = null) {
    let self = this;
    let options = self.options;
    // toggle
    if (force || self.checkOff(element)) {
      // if currents === min
      if (self.getCurrents().length === options.min) {
        return false;
      }
      // eDetail
      self.eDetailSet(e);
      // off
      let groupElements = self.getElements(element);
      self.removeCurrent(groupElements.single);
      if (self.getCurrents().length === 0) {
        self.currentIndex = null;
      }
      let targets = self.getTargets(element);
      let elementsInner = self.getInside(element, options.elementsInner);
      let targetsInner = self.getInside(targets, options.targetsInner);
      // auto
      if (!self.getCurrents().length) {
        self.eventAutoStop();
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
      // deactivated
      return true;
    }
    // deactivated
    return false;
  }

  /**
   * auto start
   * @param {Boolean} instant
   */
  eventAutoStart(instant = false) {
    let self = this;
    let options = self.options;
    // auto
    self.eventAutoStop();
    if (self.currentIndex !== null &&  // not when nothing activated
      !self.detail.initial || options.auto.initial) { // not when initial
      let time = !instant ? options.auto.time : 0;
      self.object.dataset.xtAutoStartInterval = setInterval(function () {
        if (options.auto.hidden || self.object.offsetParent) { // offsetParent for checking if :visible
          if (getComputedStyle(self.object).pointerEvents !== 'none') { // not when disabled
            if (options.auto.inverse) {
              self.goToPrev(options.auto.step, true, options.auto.loop);
            } else {
              self.goToNext(options.auto.step, true, options.auto.loop);
            }
          }
          // listener dispatch
          self.eDetailSet();
          self.object.dispatchEvent(new CustomEvent('auto.xt', {detail: self.eDetail}));
        }
      }, time).toString();
      // listener dispatch
      self.eDetailSet();
      self.object.dispatchEvent(new CustomEvent('auto.xt', {detail: self.eDetail}));
    }
  }

  /**
   * auto stop
   */
  eventAutoStop() {
    let self = this;
    // eventAutoStop
    clearInterval(self.object.dataset.xtAutoStartInterval);
  }

  /**
   * jump
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {Event} e
   */
  eventJump(el, e) {
    let self = this;
    // jump
    let element = self.getElementsFromTarget(el)[0];
    if (self.checkOn(element)) {
      self.eventOn(element);
    }
  }

  /**
   * nav
   * @param {Node|HTMLElement|EventTarget|Window} nav
   * @param {Event} e
   */
  eventNav(nav, e) {
    let self = this;
    // nav
    let index = 0;
    if (self.currentIndex !== undefined) {
      index = self.currentIndex + parseFloat(nav.getAttribute('data-xt-nav'));
    }
    self.goToIndex(index, true);
  }

  //////////////////////
  // queue util
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
        // initial
        self.detail.initial = false;
        // auto
        if (options.auto && options.auto.time) {
          self.eventAutoStart();
        }
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
        // special
        self.specialScrollbarOff();
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
            let count = parseInt(el.dataset.xtOnCount) || els.findIndex(x => x === el);
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
            let count = parseInt(el.dataset.xtOffCount) || els.findIndex(x => x === el);
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
   * @param {Node|HTMLElement|EventTarget|Window} el Elements to be deactivated
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
        let appendOrigin = document.querySelectorAll('[data-xt-origin=' + self.namespace + ']');
        if (!appendOrigin.length) {
          el.before(Xt.createElement('<div class="xt-ignore" data-xt-origin=' + self.namespace + '></div>'));
        }
        appendToTarget[0].appendChild(el);
      }
    }
    if (type === 'targets' || type === 'targetsInner') {
      self.specialCloseOn(el, obj[type].groupElements.single);
    }
    // aria
    if (options.aria) {
      if (type === 'elements') {
        // selected
        let ariaEls = self.getInside(el, options.ariaControls);
        let ariaEl = ariaEls.length ? ariaEls[0] : el;
        ariaEl.setAttribute('aria-selected', 'true');
      }
      if (type === 'targets') {
        // expanded
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
   * @param {Node|HTMLElement|EventTarget|Window} el Elements to be deactivated
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
   * @param {Node|HTMLElement|EventTarget|Window} el Element to be animated
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
   * @param {Node|HTMLElement|EventTarget|Window} el Element to be animated
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
   * @param {Node|HTMLElement|EventTarget|Window} el Element to be animated
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
    // aria
    if (options.aria) {
      // tabindex
      if (options.aria === true || options.aria.tabindex) {
        if (type === 'targets') {
          let focusables = el.querySelectorAll(Xt.focusables);
          for (let focusable of focusables) {
            focusable.removeAttribute('tabindex');
          }
        }
      }
    }
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
   * @param {Node|HTMLElement|EventTarget|Window} el Element to be animated
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
        let appendOrigin = document.querySelectorAll('[data-xt-origin=' + self.namespace + ']');
        appendOrigin[0].before(el);
      }
    }
    // aria
    if (options.aria) {
      // selected
      if (type === 'elements') {
        let ariaEls = self.getInside(el, options.ariaControls);
        let ariaEl = ariaEls.length ? ariaEls[0] : el;
        ariaEl.setAttribute('aria-selected', 'false');
      }
      if (type === 'targets') {
        // expanded
        let role = el.getAttribute('role');
        if (role === 'tabpanel' || role === 'listbox' || role === 'dialog') {
          el.setAttribute('aria-expanded', 'false');
        }
        // tabindex
        if (options.aria === true || options.aria.tabindex) {
          let focusables = el.querySelectorAll(Xt.focusables);
          for (let focusable of focusables) {
            focusable.setAttribute('tabindex', '-1');
            focusable.blur();
          }
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
  // special
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
   * @param {Node|HTMLElement|EventTarget|Window} el Element
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
   * @param {Node|HTMLElement|EventTarget|Window} el Element
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
   * @param {Node|HTMLElement|EventTarget|Window} el Element
   */
  specialCollapseOn(el) {
    if (el.classList.contains('collapse--height')) {
      window.cancelAnimationFrame(parseFloat(el.dataset.xtCollapseFrame));
      el.dataset.xtCollapseFrame = window.requestAnimationFrame(function () {
        el.classList.add('xt-calculating');
        el.style.height = 'auto';
        el.style.paddingTop = '';
        el.style.paddingBottom = '';
        let h = el.clientHeight + 'px';
        let pt = el.style.paddingTop;
        let pb = el.style.paddingBottom;
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
      }).toString();
    }
    if (el.classList.contains('collapse--width')) {
      window.cancelAnimationFrame(parseFloat(el.dataset.xtCollapseFrame));
      el.dataset.xtCollapseFrame = window.requestAnimationFrame(function () {
        el.classList.add('xt-calculating');
        el.style.width = 'auto';
        el.style.paddingLeft = '';
        el.style.paddingRight = '';
        let w = el.clientHeight + 'px';
        let pl = el.style.paddingLeft;
        let pr = el.style.paddingRight;
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
      }).toString();
    }
  }

  /**
   * close collapse on deactivation
   * @param {Node|HTMLElement|EventTarget|Window} el Element
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
   * @param {Node|HTMLElement|EventTarget|Window} el Element
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
   * @param {Node|HTMLElement|EventTarget|Window} el Element
   * @param {Node|HTMLElement|EventTarget|Window} single Element to toggle
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
   * @param {Node|HTMLElement|EventTarget|Window} el Element
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
   * @param {Node|HTMLElement|EventTarget|Window} checkEl
   * @param {Node|HTMLElement|EventTarget|Window} single
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
   * @param {Node|HTMLElement|EventTarget|Window} checkEl
   * @param {Node|HTMLElement|EventTarget|Window} single
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
      // var
      let width = Xt.scrollbarWidth();
      // scrollbar
      let container = document.documentElement;
      container.style.paddingRight = width + 'px';
      container.classList.add('xt-scrollbar');
      // check fixed
      let checks = document.querySelectorAll('.xt-fixed--inner > *');
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
        let style = getComputedStyle(element);
        if (self.normalizeWidth(element.clientWidth) === '') { // only if full width
          let padding = style.paddingRight;
          let str = 'calc(' + padding + ' + ' + width + 'px)';
          element.classList.add('transition-none');
          window.requestAnimationFrame(function () {
            element.style.paddingRight = str;
            window.requestAnimationFrame(function () {
              element.classList.remove('transition-none');
            });
          });
        }
      }
      // backdrop
      let backdrops = document.querySelectorAll('.xt-backdrop');
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
          element.classList.add('transition-none');
          window.requestAnimationFrame(function () {
            element.style.paddingRight = '';
            window.requestAnimationFrame(function () {
              element.classList.remove('transition-none');
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

  //////////////////////
  // goto
  //////////////////////

  /**
   * activate next element
   * @param {Number} amount
   * @param {Boolean} force
   * @param {Boolean} loop
   */
  goToNext(amount = 1, force = false, loop) {
    let self = this;
    // goToIndex
    let index = 0;
    if (self.currentIndex !== undefined) {
      index = self.currentIndex + amount;
    }
    self.goToIndex(index, force, loop);
  }

  /**
   * activate prev element
   * @param {Number} amount
   * @param {Boolean} force
   * @param {Boolean} loop
   */
  goToPrev(amount = 1, force = false, loop) {
    let self = this;
    // goToIndex
    let index = self.elementsSingle.length - 1;
    if (self.currentIndex !== undefined) {
      index = self.currentIndex - amount;
    }
    self.goToIndex(index, force, loop);
  }

  /**
   * activate index element
   * @param {Number} index
   * @param {Boolean} force
   * @param {Boolean} loop
   */
  goToIndex(index, force = false, loop) {
    let self = this;
    let options = self.options;
    // check
    let max = self.elementsSingle.length - 1;
    if (index > max) {
      if (loop || (loop == undefined && options.loop)) {
        index = index - max - 1;
        index = index > max ? max : index; // prevent overflow
      } else {
        index = max;
      }
    } else if (index < 0) {
      if (loop || (loop == undefined && options.loop)) {
        index = index + max + 1;
        index = index < 0 ? 0 : index; // prevent overflow
      } else {
        index = 0;
      }
    }
    // set
    self.currentIndex = index;
    // go
    let current = self.elements[index];
    self.eventOn(current, force);
  }

}

//////////////////////
// export
//////////////////////

export default Core;