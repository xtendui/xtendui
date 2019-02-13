/* xtend (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

import Xt from './xtend';

//////////////////////
// Core
//////////////////////

class Core {

  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsJs User options
   * @constructor
   */
  constructor(object, optionsJs = {}) {
    let self = this;
    // var
    self.componentName = self.constructor.componentName;
    self.object = object;
    self.optionsJs = optionsJs;
    // init
    self.init();
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
    self.classes = [];
    self.classesIn = [];
    self.classesOut = [];
    self.elements = [];
    self.targets = [];
    self.currentIndex = null;
    self.initialCurrents = [];
    self.detail = {};
    self.disabled = false;
    self.detail.queueOn = [];
    self.detail.queueOff = [];
    self.detail.inverseDirection = false;
    self.detail.autoPaused = false;
    self.destroyElements = [document, window, self.object];
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
    self.initScope();
    self.initCurrents();
    self.initCheck();
    self.eventCheck();
    self.initEvents();
    self.initAria();
  }

  /**
   * init vars
   */
  initVars() {
    let self = this;
    // option
    self.optionsDefault = {
      "classIn": "in",
      "classOut": "out",
      "instant": false,
      "autoClose": false,
      "onBlock": false,
      "offBlock": false,
      "loop": true,
      "jump": false,
      "delayOn": false,
      "delayOff": false,
      "durationOn": false,
      "durationOff": false,
      "wheel": {
        "selector": false,
        "block": 500
      },
      "keyboard": {
        "selector": false
      },
      "auto": {
        "time": false,
        "step": 1,
        "initial": true,
        "loop": true,
        "inverse": false,
        "pause": false
      },
      "aria": {
        "tabindex": true,
        "controls": true,
        "labelledby": true
      }
    };
    self.optionsDefault = Xt.merge([self.optionsDefault, self.constructor.optionsDefault]);
    // js options
    self.options = Xt.merge([self.optionsDefault, self.optionsJs]);
    // markup options
    let markupOptions = self.object.getAttribute('data-' + self.componentName);
    self.options = Xt.merge([self.options, markupOptions ? JSON.parse(markupOptions) : {}]);
    // classes
    if (self.classes) {
      self.classes = [...self.options.class.split(' ')];
    }
    if (self.classesIn) {
      self.classesIn = [...self.options.classIn.split(' ')];
    }
    if (self.classesOut) {
      self.classesOut = [...self.options.classOut.split(' ')];
    }
  }

  /**
   * init setup
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
      self.namespace = self.componentName + '-' + options.targets.toString() + '-' + self.classes.toString();
    } else {
      // xtend unique mode
      self.mode = 'multiple';
      self.container = self.object;
      self.container.dataset.uniqueId = self.container.dataset.uniqueId ? self.container.dataset.uniqueId : Xt.getuniqueId();
      self.namespace = self.componentName + '-' + self.container.dataset.uniqueId;
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
      self.destroyElements.push(...self.elements);
    }
    if (!self.elements.length) {
      self.elements = Xt.arrSingle(self.object);
      // @FIX set namespace for next frame
      requestAnimationFrame(function () {
        let arr = Array.from(Xt.arrSingle(document.querySelectorAll('[data-xt-namespace=' + self.namespace + ']')));
        arr = arr.filter(x => !x.classList.contains('xt-clone')); // filter out clone
        arr = arr.filter(x => !x.getAttribute('data-xt-nav')); // filter out nav
        self.elements = arr;
        self.destroyElements.push(...self.elements);
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
      self.destroyElements.push(...self.targets);
    }
  }

  /**
   * init currents
   */
  initCurrents() {
    let self = this;
    let options = self.options;
    // initial
    self.initial = true;
    // @FIX set namespace for next frame
    for (let el of self.elements) {
      el.dataset.xtNamespace = self.namespace;
    }
    // automatic initial currents
    cancelAnimationFrame(parseFloat(self.object.dataset.xtCurrentsFrame));
    self.object.dataset.xtCurrentsFrame = requestAnimationFrame(function () {
      let elements = self.getElementsSingle();
      if (elements.length) {
        for (let element of elements) {
          // remove activations
          let found = self.initReset(element);
          // found
          if (found) {
            // initial
            self.initial = true;
            // activate
            self.eventOn(element, true);
          } else {
            // initial
            self.initial = false;
          }
        }
        // if currents < min
        let todo = options.min - self.getCurrents().length;
        if (todo > 0) {
          // initial
          self.initial = true;
          // activate
          for (let i = 0; i < todo; i++) {
            self.eventOn(self.elements[i], true);
          }
        } else {
          // initial
          self.initial = false;
          // auto
          if (options.auto && options.auto.initial) {
            self.eventAutoStart();
          }
        }
        self.initialCurrents = self.getCurrents();
      }
    }).toString();
  }

  /**
   * init reset activation
   * @param {Node|HTMLElement|EventTarget|Window} element Element to check and reset
   * @returns {Boolean} if element was activated
   */
  initReset(element) {
    let self = this;
    let options = self.options;
    let found = false;
    // elements
    let group = element.getAttribute('data-xt-group');
    if (group) {
      let groupElements = Array.from(self.elements).filter(x => x.getAttribute('data-xt-group') === group);
      for (let el of groupElements) {
        if (el.classList.contains(self.classes[0])) {
          el.classList.remove(...self.classes);
          found = true;
        }
      }
    } else {
      if (element.classList.contains(self.classes[0])) {
        element.classList.remove(...self.classes);
        found = true;
      }
    }
    // targets
    let targets = self.getTargets(element);
    for (let tr of targets) {
      if (tr.classList.contains(self.classes[0])) {
        tr.classList.remove(...self.classes);
        found = true;
      }
    }
    return found;
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
              ariaEl.setAttribute('id', Xt.getuniqueId());
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
              tr.setAttribute('id', Xt.getuniqueId());
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
      }
    }
  }

  /**
   * init check
   */
  initCheck() {
    let self = this;
    // resize
    let checkHandler = Xt.dataStorage.put(window, 'resize.check' + '.' + self.namespace,
      self.eventCheckHandler.bind(self).bind(self));
    addEventListener('resize', checkHandler);
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
      let onHandler = Xt.dataStorage.put(el, options.on + '.' + self.namespace,
        self.eventOnHandler.bind(self).bind(self, el));
      if (options.on) {
        let events = [...options.on.split(' ')];
        for (let event of events) {
          el.addEventListener(event, onHandler);
        }
        // @FIX prevents click on touch until clicked two times
        if (events.includes('mouseenter') || events.includes('mousehover')) {
          let touchLinksStartHandler = Xt.dataStorage.put(el, 'touchend.touchfix' + '.' + self.namespace,
            self.eventTouchLinksStartHandler.bind(self).bind(self, el));
          el.addEventListener('touchend', touchLinksStartHandler);
        }
      }
      el.addEventListener('on.xt', onHandler);
      // event off
      let offHandler = Xt.dataStorage.put(el, options.off + '.' + self.namespace,
        self.eventOffHandler.bind(self).bind(self, el));
      if (options.off) {
        let events = [...options.off.split(' ')];
        for (let event of events) {
          el.addEventListener(event, offHandler);
        }
      }
      el.addEventListener('off.xt', offHandler);
    }
    // listener
    for (let tr of self.targets) {
      let el = self.getElementsFromTarget(tr)[0];
      if (el) {
        // event
        let onHandler = Xt.dataStorage.get(el, options.on + '.' + self.namespace);
        tr.addEventListener('on.xt', onHandler);
        let offHandler = Xt.dataStorage.get(el, options.off + '.' + self.namespace);
        tr.addEventListener('off.xt', offHandler);
      }
    }
    // auto
    if (options.auto && options.auto.time) {
      // focus auto
      addEventListener('focus', self.eventAutoResumeHandler.bind(self));
      // blur auto
      addEventListener('blur', self.eventAutoPauseHandler.bind(self));
      // autoPause
      for (let el of self.object.querySelectorAll(options.auto.pause)) {
        // pause
        let autoPauseOnHandler = Xt.dataStorage.put(el, 'mouseenter focus' + '.' + self.namespace,
          self.eventAutoPauseHandler.bind(self));
        let eventsPause = ['mouseenter', 'focus'];
        for (let event of eventsPause) {
          el.addEventListener(event, autoPauseOnHandler);
        }
        // resume
        let autoResumeOnHandler = Xt.dataStorage.put(el, 'mouseleave blur' + '.' + self.namespace,
          self.eventAutoResumeHandler.bind(self));
        let eventsResume = ['mouseleave', 'blur'];
        for (let event of eventsResume) {
          el.addEventListener(event, autoResumeOnHandler);
        }
      }
    }
    // jump
    if (options.jump) {
      for (let jump of self.targets) {
        let jumpHandler = Xt.dataStorage.put(jump, 'click.jump' + '.' + self.namespace,
          self.eventJumpHandler.bind(self).bind(self, jump));
        jump.addEventListener('click', jumpHandler, true); // useCapture or it gets the click from elements inside the target
        // jump
        if (!self.disabled) {
          jump.classList.add('jump');
        } else {
          jump.classList.remove('jump');
        }
      }
    }
    // navigation
    if (options.navigation) {
      let navs = self.object.querySelectorAll(options.navigation);
      if (navs.length) {
        self.destroyElements.push(...navs);
        for (let nav of navs) {
          let navHandler = Xt.dataStorage.put(nav, 'click.nav' + '.' + self.namespace,
            self.eventNavHandler.bind(self).bind(self, nav));
          nav.addEventListener('click', navHandler);
        }
      }
    }
    // keyboard
    if (options.wheel && options.wheel.selector) {
      let wheels = options.wheel.selector === 'object' ? Xt.arrSingle(self.object) : self.object.querySelectorAll(options.wheel.selector);
      self.destroyElements.push(...wheels);
      for (let wheel of wheels) {
        // wheel
        let eventWheel = 'onwheel' in wheel ? 'wheel' : wheel.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';
        let wheelHandler = Xt.dataStorage.put(wheel, eventWheel + '.' + self.namespace,
          self.eventWheelHandler.bind(self).bind(self, wheel));
        wheel.addEventListener(eventWheel, wheelHandler);
      }
    }
    // keyboard
    if (options.keyboard && options.keyboard.selector) {
      let keyboards = options.keyboard.selector === 'object' ? Xt.arrSingle(self.object) : self.object.querySelectorAll(options.keyboard.selector);
      self.destroyElements.push(...keyboards);
      for (let keyboard of keyboards) {
        keyboard.setAttribute('tabindex', '0');
        // focus
        let keyboardFocusHandler = Xt.dataStorage.put(keyboard, 'focus.keyboard' + '.' + self.namespace,
          self.eventKeyboardFocusHandler.bind(self).bind(self, keyboard));
        keyboard.addEventListener('focus', keyboardFocusHandler);
        // blur
        let keyboardBlurHandler = Xt.dataStorage.put(keyboard, 'blur.keyboard' + '.' + self.namespace,
          self.eventKeyboardBlurHandler.bind(self).bind(self, keyboard));
        keyboard.addEventListener('blur', keyboardBlurHandler);
      }
    }
    // autoClose
    if (options.autoClose) {
      let autoCloseHandler = Xt.dataStorage.put(window, 'autoClose' + '.' + self.namespace,
        self.eventAutoCloseHandler.bind(self));
      addEventListener('autoClose.xt', autoCloseHandler);
      let autoCloseFixHandler = Xt.dataStorage.put(window, 'autoCloseFix' + '.' + self.namespace,
        self.eventAutoCloseFixHandler.bind(self));
      addEventListener('autoCloseFix.xt', autoCloseFixHandler);
    }
    // images
    for (let el of self.elements) {
      let imgs = el.querySelectorAll('img');
      let imgsLoaded = 0;
      for (let img of imgs) {
        if (!img.complete) {
          let imgLoadHandler = Xt.dataStorage.put(img, 'load' + '.' + self.namespace,
            self.eventImgLoaded.bind(self).bind(self, el, img));
          img.addEventListener('load', imgLoadHandler);
          // @FIX srcset: call only one time
          img.addEventListener('load', function(e) {
            img.removeEventListener('load', imgLoadHandler);
          });
        } else {
          imgsLoaded++;
        }
      }
      if (imgs.length > 0 && imgsLoaded === imgs.length) {
        requestAnimationFrame(self.eventImgLoaded.bind(self).bind(self, el));
      }
    }
    for (let tr of self.targets) {
      let imgs = tr.querySelectorAll('img');
      let imgsLoaded = 0;
      for (let img of imgs) {
        if (!img.complete) {
          let imgLoadHandler = Xt.dataStorage.put(img, 'load' + '.' + self.namespace,
            self.eventImgLoaded.bind(self).bind(self, tr, img));
          img.addEventListener('load', imgLoadHandler);
          // @FIX srcset: call only one time
          img.addEventListener('load', function(e) {
            img.removeEventListener('load', imgLoadHandler);
          });
        } else {
          imgsLoaded++;
        }
      }
      if (imgs.length > 0 && imgsLoaded === imgs.length) {
        requestAnimationFrame(self.eventImgLoaded.bind(self).bind(self, tr));
      }
    }
  }

  //////////////////////
  // handler
  //////////////////////

  /**
   * check handler
   * @param {Event} e
   */
  eventCheckHandler(e = null) {
    let self = this;
    // handler
    Xt.eventDelay(e, self.object, function () {
      self.eventCheck();
    }, 'resize.xt.core');
  }

  /**
   * element on handler
   * @param {Node|HTMLElement|EventTarget|Window} element
   * @param {Event} e
   */
  eventOnHandler(element, e) {
    let self = this;
    let options = self.options;
    // handler
    if (!e.detail || !e.detail.skip) { // needed because we trigger .xt event
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
    if (!e.detail || !e.detail.skip) { // needed because we trigger .xt event
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
    let touchLinksHandler = Xt.dataStorage.put(el, 'click.touchfix' + '.' + self.namespace,
      self.eventTouchLinksHandler.bind(self).bind(self, el));
    el.addEventListener('click', touchLinksHandler);
    // event touchReset
    let touchResetHandler = Xt.dataStorage.put(el, 'off.touchfix' + '.' + self.namespace,
      self.eventTouchLinksResetHandler.bind(self).bind(self, el));
    el.addEventListener('off.xt', touchResetHandler);
  }

  /**
   * remove prevents click on touch until clicked two times
   * @param {Node|HTMLElement|EventTarget|Window} el
   */
  eventTouchLinksEndHandler(el) {
    let self = this;
    // event touchLinks
    let touchLinksHandler = Xt.dataStorage.get(el, 'click.touchfix' + '.' + self.namespace);
    el.removeEventListener('click', touchLinksHandler);
    // event touchReset
    let touchResetHandler = Xt.dataStorage.get(el, 'off.touchfix' + '.' + self.namespace);
    el.removeEventListener('off.xt', touchResetHandler);
  }

  /**
   * prevents click on touch until clicked two times
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {Event} e
   */
  eventTouchLinksHandler(el, e) {
    let self = this;
    if (!el.dataset.xtTouchLinksDone) {
      e.preventDefault();
      el.dataset.xtTouchLinksDone = 'true';
    } else {
      self.eventTouchLinksEndHandler(el);
      delete el.dataset.xtTouchLinksDone;
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
    delete el.dataset.xtTouchLinksDone;
  }

  /**
   * auto pause handler
   * @param {Event} e
   */
  eventAutoPauseHandler(e) {
    let self = this;
    if (!e.detail || !e.detail.skip) { // needed because we trigger .xt event
      if (!self.detail.autoPaused) {
        self.eventAutoPause();
        // paused
        self.detail.autoPaused = true;
      }
    }
  }

  /**
   * auto resume handler
   * @param {Event} e
   */
  eventAutoResumeHandler(e) {
    let self = this;
    if (!e.detail || !e.detail.skip) { // needed because we trigger .xt event
      if (self.detail.autoPaused) {
        self.eventAutoStart();
        // paused
        self.detail.autoPaused = false;
      }
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

  /**
   * wheel handler
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {Event} e
   */
  eventWheelHandler(el, e) {
    let self = this;
    let options = self.options;
    // disabled
    if (self.disabled && !self.initial) {
      return false;
    }
    // handler
    e.preventDefault(); // prevent default scrolling
    // block
    if (!el.dataset.xtWheelBlock) {
      if (options.wheel.block) {
        el.dataset.xtWheelBlock = 'true';
        clearTimeout(parseFloat(el.dataset.xtWheelTimeout));
        el.dataset.xtWheelTimeout = setTimeout(function () {
          delete el.dataset.xtWheelBlock;
        }, options.wheel.block).toString();
      }
      // wheel
      let delta = -e.deltaY || -e.detail || e.wheelDelta || e.wheelDeltaY;
      if (delta < 0) {
        self.goToNext(1);
      } else if (delta > 0) {
        self.goToPrev(1);
      }
    }
  }

  /**
   * keyboard focus handler
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {Event} e
   */
  eventKeyboardFocusHandler(el, e) {
    let self = this;
    // handler
    let keyboardHandler = Xt.dataStorage.put(document, 'keyup.keyboard' + '.' + self.namespace,
      self.eventKeyboardHandler.bind(self));
    document.addEventListener('keyup', keyboardHandler);
  }

  /**
   * keyboard blur handler
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {Event} e
   */
  eventKeyboardBlurHandler(el, e) {
    // handler
    let keyboardHandler = Xt.dataStorage.get(document, 'keyup.keyboard' + '.' + self.namespace);
    document.removeEventListener('keyup', keyboardHandler);
  }

  /**
   * keyboard handler
   * @param {Event} e
   */
  eventKeyboardHandler(e) {
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
   * autoClose handler
   * @param {Event} e
   */
  eventAutoCloseHandler(e) {
    let self = this;
    // restart
    let currents = self.getCurrents();
    for (let current of currents) {
      self.eventOff(current);
    }
  }

  /**
   * autoCloseFix handler
   * @param {Event} e
   */
  eventAutoCloseFixHandler(e) {
    let self = this;
    // special @TODO refactor
    self.specialScrollbarOff();
  }

  /**
   * imageLoaded
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {Node|HTMLElement|EventTarget|Window} img
   * @param {Event} e
   */
  eventImgLoaded(el, img = null, e = null) {
    let self = this;
    // listener dispatch
    let detail = self.eDetailSet(e);
    el.dispatchEvent(new CustomEvent('imageLoaded.xt', {detail: detail}));
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
    let self = this;
    let options = self.options;
    // check
    elements = elements.filter(x => x.classList.contains(...self.classesIn) || x.classList.contains(...self.classesOut));
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
    self.detail.inverseDirection = self.detail.inverseDirectionForce !== null ? self.detail.inverseDirectionForce : self.currentIndex > index;
    self.detail.inverseDirectionForce = null;
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
      el.classList.remove('inverse');
    } else {
      el.classList.add('inverse');
    }
  }

  /**
   * set e detail
   * @param {Event} e
   */
  eDetailSet(e = null) {
    let detail = e && e.detail && typeof e.detail === 'object' ? e.detail : {};
    detail.skip = true;
    detail.self = this;
    return detail;
  }

  //////////////////////
  // event
  //////////////////////

  /**
   * resize
   */
  eventCheck() {
    let self = this;
    // check disabled
    if (self.object instanceof HTMLElement // not on window
      && getComputedStyle(self.object, '::after').getPropertyValue('content').replace(/['"]+/g, '') === 'xt-disable') {
      self.disable();
    } else if (self.disabled) {
      self.enable();
    }
  }

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
    // disabled
    if (self.disabled && !self.initial) {
      return false;
    }
    // toggle
    if (force || self.checkOn(element)) {
      // auto
      if (options.auto && options.auto.time) {
        self.eventAutoStop();
      }
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
      // detail
      let detail = self.eDetailSet(e);
      // queue obj
      let obj = {};
      if (groupElements.all.length) {
        obj['elements'] = {
          detail: detail,
          queueEls: groupElements.all,
          groupElements: groupElements
        };
      }
      if (targets.length) {
        obj['targets'] = {
          detail: detail,
          queueEls: targets,
          groupElements: groupElements
        };
      }
      if (elementsInner.length) {
        obj['elementsInner'] = {
          detail: detail,
          queueEls: elementsInner,
          groupElements: groupElements
        };
      }
      if (targetsInner.length) {
        obj['targetsInner'] = {
          detail: detail,
          queueEls: targetsInner,
          groupElements: groupElements
        };
      }
      if (typeof options.instant !== 'object' && options.instant === true) {
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
    // disabled
    if (self.disabled && !self.initial) {
      return false;
    }
    // toggle
    if (force || self.checkOff(element)) {
      // if currents === min
      if (self.getCurrents().length === options.min) {
        return false;
      }
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
      // detail
      let detail = self.eDetailSet(e);
      // queue obj
      let obj = {};
      if (groupElements.all.length) {
        obj['elements'] = {
          detail: detail,
          queueEls: groupElements.all,
          groupElements: groupElements
        };
      }
      if (targets.length) {
        obj['targets'] = {
          detail: detail,
          queueEls: targets,
          groupElements: groupElements
        };
      }
      if (elementsInner.length) {
        obj['elementsInner'] = {
          detail: detail,
          queueEls: elementsInner,
          groupElements: groupElements
        };
      }
      if (targetsInner.length) {
        obj['targetsInner'] = {
          detail: detail,
          queueEls: targetsInner,
          groupElements: groupElements
        };
      }
      if (typeof options.instant !== 'object' && options.instant === true) {
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
   */
  eventAutoStart() {
    let self = this;
    let options = self.options;
    if (options.auto && options.auto.time) {
      // paused
      self.detail.autoPaused = false;
      // clear
      clearInterval(self.object.dataset.xtAutoStartInterval);
      // auto
      let time = options.auto.time;
      if (self.currentIndex !== null &&  // not when nothing activated
        !self.initial || options.auto.initial) { // not when initial
        self.object.dataset.xtAutoStartInterval = setInterval(function () { // interval because can become :visible
          if (self.object.offsetWidth || self.object.offsetHeight || self.object.getClientRects().length) { // :visible
            // auto
            if (getComputedStyle(self.object).pointerEvents !== 'none') { // not when disabled
              if (options.auto.inverse) {
                self.goToPrev(options.auto.step, true, options.auto.loop);
              } else {
                self.goToNext(options.auto.step, true, options.auto.loop);
              }
            }
          }
        }, time).toString();
        // listener dispatch
        let detail = self.eDetailSet();
        self.object.dispatchEvent(new CustomEvent('start.xt.auto', {detail: detail}));
      }
    }
  }

  /**
   * auto stop
   */
  eventAutoStop() {
    let self = this;
    let options = self.options;
    if (options.auto && options.auto.time) {
      // clear
      clearInterval(self.object.dataset.xtAutoStartInterval);
      // listener dispatch
      let detail = self.eDetailSet();
      self.object.dispatchEvent(new CustomEvent('stop.xt.auto', {detail: detail}));
    }
  }

  /**
   * auto stop
   */
  eventAutoPause() {
    let self = this;
    let options = self.options;
    if (options.auto && options.auto.time) {
      // clear
      clearInterval(self.object.dataset.xtAutoStartInterval);
      // listener dispatch
      let detail = self.eDetailSet();
      self.object.dispatchEvent(new CustomEvent('pause.xt.auto', {detail: detail}));
    }
  }

  /**
   * jump
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {Event} e
   */
  eventJump(el, e) {
    let self = this;
    // check disabled
    if (el.classList.contains('jumps--none') || Xt.parents(el, '.jumps--none').length) {
      return false;
    }
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
    if (self.currentIndex !== null) {
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
          cancelAnimationFrame(parseFloat(el.dataset.xtCollapseFrame));
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
          cancelAnimationFrame(parseFloat(el.dataset.xtCollapseFrame));
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
        // auto
        if (options.auto && options.auto.time) {
          self.eventAutoStart();
        }
        // request @TODO refactor
        if (self.ajaxRequest) {
          if (!self.initial) {
            self.ajaxRequest(obj[type].groupElements.single);
          }
        }
        // remove queue
        self.detail.queueOn.pop();
        // initial
        self.initial = false;
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
      if (options.delayOn) {
        if (isNaN(options.delayOn)) {
          let count = parseInt(el.dataset.xtOnCount) || els.findIndex(x => x === el);
          let tot = parseInt(el.dataset.xtOnTot) || els.length;
          let fnc = options.delayOn;
          if (typeof fnc === 'string') {
            fnc = new Function('current', 'total', fnc);
          }
          delay = fnc(count, tot - 1).toString();
        } else {
          delay = queueInitial ? 0 : options.delayOn;
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
      if (typeof options.instant !== 'object' && options.instant === true) {
        if (el === els[els.length - 1]) { // only if last element
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
      if (options.delayOff) {
        if (isNaN(options.delayOff)) {
          let count = parseInt(el.dataset.xtOffCount) || els.findIndex(x => x === el);
          let tot = parseInt(el.dataset.xtOffTot) || els.length;
          let fnc = options.delayOff;
          if (typeof fnc === 'string') {
            fnc = new Function('current', 'total', fnc);
          }
          delay = fnc(count, tot - 1).toString();
        } else {
          delay = queueInitial ? 0 : options.delayOff;
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
      if (typeof options.instant !== 'object' && options.instant === true) {
        if (el === els[els.length - 1]) { // only if last element
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
    el.classList.add(...self.classes);
    el.classList.add(...self.classesIn);
    el.classList.remove(...self.classesOut);
    self.decorateDirection(el);
    // special
    let before = getComputedStyle(el, '::before').getPropertyValue('content').replace(/['"]+/g, '');
    let after = getComputedStyle(el, '::after').getPropertyValue('content').replace(/['"]+/g, '');
    self.specialCenter(el, before, after);
    self.specialMiddle(el, before, after);
    self.specialCollapseOn(el, before, after);
    if (type === 'targets') {
      // appendTo
      if (options.appendTo) {
        let appendToTarget = document.querySelectorAll(options.appendTo);
        let appendOrigin = document.querySelectorAll('[data-xt-origin=' + self.namespace + ']');
        if (!appendOrigin.length) {
          el.before(Xt.createElement('<div class="xt-ignore" data-xt-origin=' + self.namespace + '></div>'));
        }
        el.classList.add('xt-ignore'); // don't trigger Xt.observer
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
    el.dispatchEvent(new CustomEvent('on.xt', {detail: obj[type].detail}));
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
    el.classList.remove(...self.classes);
    el.classList.remove(...self.classesIn);
    el.classList.add(...self.classesOut);
    self.decorateDirection(el);
    // special
    let before = getComputedStyle(el, '::before').getPropertyValue('content').replace(/['"]+/g, '');
    let after = getComputedStyle(el, '::after').getPropertyValue('content').replace(/['"]+/g, '');
    self.specialCollapseOff(el, before, after);
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
    el.dispatchEvent(new CustomEvent('off.xt', {detail: obj[type].detail}));
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
    let duration = Xt.animTime(el, options.durationOn);
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
    let duration = Xt.animTime(el, options.durationOff);
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
    el.classList.remove(...self.classesIn);
    // special
    let before = getComputedStyle(el, '::before').getPropertyValue('content').replace(/['"]+/g, '');
    let after = getComputedStyle(el, '::after').getPropertyValue('content').replace(/['"]+/g, '');
    self.specialCollapseReset(el, before, after);
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
    if (options.instant === false || (typeof options.instant === 'object' && !options.instant[type])) {
      let els = obj[type].queueEls;
      if (el === els[els.length - 1]) { // only if last element
        self.queueOnDone(obj, type, skipQueue);
      }
    }
    // listener dispatch
    el.dispatchEvent(new CustomEvent('ondone.xt', {detail: obj[type].detail}));
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
    el.classList.remove(...self.classesOut);
    // special
    if (type === 'targets') {
      // appendTo
      if (options.appendTo) {
        let appendOrigin = document.querySelectorAll('[data-xt-origin=' + self.namespace + ']');
        if (appendOrigin.length) {
          appendOrigin[0].before(el);
        }
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
    if (options.instant === false || (typeof options.instant === 'object' && !options.instant[type])) {
      let els = obj[type].queueEls;
      if (el === els[els.length - 1]) { // only if last element
        self.queueOffDone(obj, type, skipQueue);
      }
    }
    // listener dispatch
    el.dispatchEvent(new CustomEvent('offdone.xt', {detail: obj[type].detail}));
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
        let backdrop = element.querySelectorAll('.backdrop');
        if (!backdrop.length) {
          backdrop = Xt.createElement('<div class="backdrop"></div>');
          element.append(backdrop);
        }
      }
    }
  }

  /**
   * center position on activation
   * @param {Node|HTMLElement|EventTarget|Window} el Element
   * @param {String} before Before content
   * @param {String} after After content
   */
  specialCenter(el, before, after) {
    let self = this;
    // specialCenter
    if (before === 'xt-drop--center') {
      let add = self.object.clientWidth;
      let remove = el.clientWidth;
      el.style.left = ((add - remove) / 2) + 'px';
    }
  }

  /**
   * middle position on activation
   * @param {Node|HTMLElement|EventTarget|Window} el Element
   * @param {String} before Before content
   * @param {String} after After content
   */
  specialMiddle(el, before, after) {
    let self = this;
    // specialMiddle
    if (after === 'xt-drop--middle') {
      let add = self.object.clientHeight;
      let remove = el.clientHeight;
      el.style.top = ((add - remove) / 2) + 'px';
    }
  }

  /**
   * open collapse on activation
   * @param {Node|HTMLElement|EventTarget|Window} el Element
   * @param {String} before Before content
   * @param {String} after After content
   */
  specialCollapseOn(el, before, after) {
    if (el instanceof HTMLElement) {
      if (before === 'xt-collapse--height') {
        el.classList.add('xt-hide');
        el.style.height = 'auto';
        el.style.paddingTop = '';
        el.style.paddingBottom = '';
        let h = el.clientHeight + 'px';
        let pt = el.style.paddingTop;
        let pb = el.style.paddingBottom;
        cancelAnimationFrame(parseFloat(el.dataset.xtCollapseFrame));
        el.dataset.xtCollapseFrame = requestAnimationFrame(function () {
          el.classList.remove('xt-hide');
          el.style.height = '0';
          el.style.paddingTop = '0';
          el.style.paddingBottom = '0';
          el.dataset.xtCollapseFrame = requestAnimationFrame(function () {
            el.style.height = h;
            el.style.paddingTop = pt;
            el.style.paddingBottom = pb;
          }).toString();
        }).toString();
      }
      if (after === 'xt-collapse--width') {
        el.classList.add('xt-hide');
        el.style.width = 'auto';
        el.style.paddingLeft = '';
        el.style.paddingRight = '';
        let w = el.clientHeight + 'px';
        let pl = el.style.paddingLeft;
        let pr = el.style.paddingRight;
        cancelAnimationFrame(parseFloat(el.dataset.xtCollapseFrame));
        el.dataset.xtCollapseFrame = requestAnimationFrame(function () {
          el.classList.remove('xt-hide');
          el.style.width = '0';
          el.style.paddingLeft = '0';
          el.style.paddingRight = '0';
          el.dataset.xtCollapseFrame = requestAnimationFrame(function () {
            el.style.width = w;
            el.style.paddingLeft = pl;
            el.style.paddingRight = pr;
          }).toString();
        }).toString();
      }
    }
  }

  /**
   * close collapse on deactivation
   * @param {Node|HTMLElement|EventTarget|Window} el Element
   * @param {String} before Before content
   * @param {String} after After content
   */
  specialCollapseOff(el, before, after) {
    if (el instanceof HTMLElement) {
      if (before === 'xt-collapse--height') {
        let h = el.clientHeight + 'px';
        let pt = el.style.paddingTop;
        let pb = el.style.paddingBottom;
        cancelAnimationFrame(parseFloat(el.dataset.xtCollapseFrame));
        el.dataset.xtCollapseFrame = requestAnimationFrame(function () {
          el.style.height = h;
          el.style.paddingTop = pt;
          el.style.paddingBottom = pb;
          el.dataset.xtCollapseFrame = requestAnimationFrame(function () {
            el.style.height = '0';
            el.style.paddingTop = '0';
            el.style.paddingBottom = '0';
          }).toString();
        }).toString();
      }
      if (after === 'xt-collapse--width') {
        let w = el.clientWidth + 'px';
        let pl = el.style.paddingLeft;
        let pr = el.style.paddingRight;
        cancelAnimationFrame(parseFloat(el.dataset.xtCollapseFrame));
        el.dataset.xtCollapseFrame = requestAnimationFrame(function () {
          el.style.width = w;
          el.style.paddingLeft = pl;
          el.style.paddingRight = pr;
          el.dataset.xtCollapseFrame = requestAnimationFrame(function () {
            el.style.width = '0';
            el.style.paddingLeft = '0';
            el.style.paddingRight = '0';
          }).toString();
        }).toString();
      }
    }
  }

  /**
   * reset collapse
   * @param {Node|HTMLElement|EventTarget|Window} el Element
   * @param {String} before Before content
   * @param {String} after After content
   */
  specialCollapseReset(el, before, after) {
    if (el instanceof HTMLElement) {
      if (before === 'xt-collapse--height') {
        el.style.height = 'inherit';
        el.style.paddingTop = '';
        el.style.paddingBottom = '';
      }
      if (after === 'xt-collapse--width') {
        el.style.width = 'inherit';
        el.style.paddingLeft = '';
        el.style.paddingRight = '';
      }
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
      requestAnimationFrame(function () {
        for (let closeElement of closeElements) {
          let specialCloseInsideHandler = Xt.dataStorage.put(closeElement, 'click.close' + '.' + self.namespace,
            self.eventSpecialCloseInsideHandler.bind(self).bind(self, closeElement, single));
          closeElement.addEventListener('click', specialCloseInsideHandler);
        }
      });
    }
    // closeOutside
    if (options.closeOutside) {
      let closeElements = document.querySelectorAll(options.closeOutside);
      requestAnimationFrame(function () {
        for (let closeElement of closeElements) {
          let specialCloseOutsideHandler = Xt.dataStorage.put(closeElement, 'click.close' + '.' + self.namespace,
            self.eventSpecialCloseOutsideHandler.bind(self).bind(self, el, single));
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
        let specialCloseInsideHandler = Xt.dataStorage.get(closeElement, 'click.close' + '.' + self.namespace);
        closeElement.removeEventListener('click', specialCloseInsideHandler);
      }
    }
    // closeOutside
    if (options.closeOutside) {
      let closeElements = document.querySelectorAll(options.closeOutside);
      for (let closeElement of closeElements) {
        let specialCloseOutsideHandler = Xt.dataStorage.get(closeElement, 'click.close' + '.' + self.namespace);
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
          requestAnimationFrame(function () {
            element.style.paddingRight = str;
            requestAnimationFrame(function () {
              element.classList.remove('transition-none');
            });
          });
        }
      }
      // backdrop
      let backdrops = document.querySelectorAll('.backdrop');
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
          requestAnimationFrame(function () {
            element.style.paddingRight = '';
            requestAnimationFrame(function () {
              element.classList.remove('transition-none');
            });
          });
        }
        // backdrop
        let backdrops = self.object.querySelectorAll(':scope > .backdrop');
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
  goToNext(amount = 1, force = false, loop = null) {
    let self = this;
    // goToIndex
    let index = 0;
    if (self.currentIndex !== null) {
      index = self.currentIndex + amount;
    }
    self.detail.inverseDirectionForce = false;
    self.goToIndex(index, force, loop);
  }

  /**
   * activate prev element
   * @param {Number} amount
   * @param {Boolean} force
   * @param {Boolean} loop
   */
  goToPrev(amount = 1, force = false, loop = null) {
    let self = this;
    // goToIndex
    let index = self.getElementsSingle().length - 1;
    if (self.currentIndex !== null) {
      index = self.currentIndex - amount;
    }
    self.detail.inverseDirectionForce = true;
    self.goToIndex(index, force, loop);
  }

  /**
   * activate index element
   * @param {Number} index
   * @param {Boolean} force
   * @param {Boolean} loop
   */
  goToIndex(index, force = false, loop = null) {
    let self = this;
    let options = self.options;
    // check
    let max = self.getElementsSingle().length - 1;
    if (index > max) {
      if (loop || (loop === null && options.loop)) {
        index = index - max - 1;
        index = index > max ? max : index; // prevent overflow
      } else {
        index = max;
      }
    } else if (index < 0) {
      if (loop || (loop == null && options.loop)) {
        index = index + max + 1;
        index = index < 0 ? 0 : index; // prevent overflow
      } else {
        index = 0;
      }
    }
    // go
    let current = self.elements[index];
    self.eventOn(current, force);
  }

  //////////////////////
  // status
  //////////////////////

  /**
   * disable
   */
  disable() {
    let self = this;
    // disable
    self.disabled = true;
    self.object.classList.add('xt-disabled');
  }

  /**
   * disable
   */
  enable() {
    let self = this;
    // enable
    self.disabled = false;
    self.object.classList.remove('xt-disabled');
  }

  //////////////////////
  // destroy
  //////////////////////

  /**
   * destroy
   */
  destroy() {
    let self = this;
    // remove events
    let elements = self.destroyElements;
    for (let element of elements) {
      let storages = Xt.dataStorage.getAll(element);
      if (storages) {
        for (let [key, storage] of storages) {
          if (key.endsWith(self.namespace)) {
            let handler = Xt.dataStorage.get(element, key);
            let events = key.split('.')[0].split(' ');
            for (let event of events) {
              element.removeEventListener(event, handler);
            }
          }
        }
      }
    }
    // remove setup
    self.object.removeAttribute('data-' + self.componentName + '-done');
    Xt.remove(self.object, self.componentName);
    // destroy
    delete this;
  }

}

//////////////////////
// option
//////////////////////

Core.componentName = 'xt-core';

//////////////////////
// export
//////////////////////

export default Core;