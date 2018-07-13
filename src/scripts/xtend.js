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
      this.mode = 'all';
      this.container = document;
      options.max = Infinity;
      this.namespace = options.targets.toString() + '-' + options.classes.toString();
    } else {
      // xtend unique mode
      this.mode = 'unique';
      this.container = this.object;
      this.namespace = XtUtil.getUniqueID();
    }
    // final namespace
    this.namespace = this.namespace.replace(/\W+/g, '');
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
    if (options.targets) {
      let arr = Array.from(this.container.querySelectorAll(options.targets));
      arr = arr.filter(x => !XtUtil.parents(x, options.targets).length); // filter out parent
      this.targets = XtUtil.arrSingle(arr);
    }
    // appendTo
    if (options.appendTo) {
      let appendToTarget = document.querySelectorAll(options.appendTo);
      if (appendToTarget.length) {
        this.targets.forEach(function (el) {
          appendToTarget[0].appendChild(el);
        });
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
        let classes = self.options.classes;
        for (let el of self.elements) {
          if (el.classList.contains(...classes)) {
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
   * init events
   */
  initEvents() {
    let self = this;
    let options = self.options;
    // on and off
    for (let el of this.elements) {
      if (options.on) {
        let events = [...options.on.split(' ')];
        for (let event of events) {
          el.xtUtilOff(event + '.xtend');
          el.xtUtilOn(event + '.xtend', function (e) {
            let eventLimit = self.container.querySelectorAll('.event-limit');
            if (eventLimit.length) {
              if (XtUtil.checkOutside(e, eventLimit)) {
                self.eventOn(this);
              }
            } else {
              self.eventOn(this);
            }
          });
        }
      }
      if (options.off) {
        let events = [...options.off.split(' ')];
        for (let event of events) {
          el.xtUtilOff(event + '.xtend');
          el.xtUtilOn(event + '.xtend', function (e) {
            let eventLimit = self.container.querySelectorAll('.event-limit');
            if (eventLimit.length) {
              if (XtUtil.checkOutside(e, eventLimit)) {
                self.eventOff(this);
              }
            } else {
              self.eventOff(this);
            }
          });
        }
      }
    }
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
    if (this.mode === 'all') {
      // choose all elements
      return {all: this.elements, single: this.elements[0]};
    } else if (this.mode === 'unique') {
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
    if (this.mode === 'all') {
      // choose all targets
      return this.targets;
    } else if (this.mode === 'unique') {
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
   * additional elements to activate/deactivate
   * @returns {NodeList|Array}
   */
  getAdditional() {
    return this.object.querySelectorAll(this.options.additional);
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
   * element on
   * @param {Node|HTMLElement} element To be activated
   * @returns {Boolean} If activation changed
   */
  eventOn(element) {
    let self = this;
    let options = self.options;
    // activate or deactivate
    if (!element.classList.contains(...this.options.classes)) {
      let fElements = this.getElements(element);
      this.addCurrent(fElements.single);
      let targets = this.getTargets(element);
      let additional = this.getAdditional();
      let activationDelay = {
        elements: function () {
          self.activationOn(fElements.all, fElements, 'elements');
        },
        targets: function () {
          self.activationOn(targets, fElements, 'targets');
        },
        additional: function () {
          self.activationOn(additional, fElements, 'additional');
        },
      };
      // if currents > max
      let currents = this.getCurrents();
      if (currents.length > options.max) {
        this.eventOff(currents[0], activationDelay);
      } else {
        activationDelay.elements();
        activationDelay.targets();
        activationDelay.additional();
        return true;
      }
    } else if (options.toggle) {
      this.eventOff(element);
      return true;
    }
    return false;
  }

  /**
   * element off
   * @param {Node|HTMLElement} element To be deactivated
   * @param {Number} activationDelay Delay in milliseconds
   * @returns {Boolean} If activation changed
   */
  eventOff(element, activationDelay = null) {
    let self = this;
    let options = self.options;
    // if currents < min
    let todo = options.min - this.getCurrents().length;
    if (!todo) {
      return false;
    }
    // deactivate
    if (element.classList.contains(...this.options.classes)) {
      let fElements = this.getElements(element);
      this.removeCurrent(fElements.single);
      this.activationOff(fElements.all, fElements, 'elements', activationDelay);
      let targets = this.getTargets(element);
      this.activationOff(targets, fElements, 'targets', activationDelay);
      let additional = this.getAdditional();
      this.activationOff(additional, fElements, 'additional', activationDelay);
      return true;
    }
    return false;
  }

  //////////////////////
  // activation
  //////////////////////

  /**
   * element on activation
   * @param {NodeList|Array} els Elements to be activated
   * @param {Object} fElements Additional elements
   * @param {String} type Type of elements
   */
  activationOn(els, fElements, type) {
    let self = this;
    let options = self.options;
    // activate
    for (let el of els) {
      el.classList.add(...options.classes);
      el.classList.remove('out');
      self.activationOnAnimate(el, type);
      // specials
      if (type === 'targets') {
        self.specialClassHtmlOn();
        self.specialBackdrop(el);
        self.specialCenterOn(el);
        self.specialMiddleOn(el);
        self.specialCollapseOn(el);
        self.specialCloseOn(el, fElements.single);
        self.specialScrollbarOn();
      }
      // dispatch
      el.dispatchEvent(new Event('on')); // @TODO events revision
    }
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
    clearTimeout(parseFloat(el.getAttribute('xt-activation-animation-timeout')));
    if (!timing) {
      onDone(el, type);
    } else {
      let timeout = setTimeout(function (el, type) {
        onDone(el, type);
      }, timing, el, type);
      el.setAttribute('xt-activation-animation-timeout', timeout.toString());
    }
  }

  /**
   * element off activation
   * @param {NodeList|Array} els Elements to be deactivated
   * @param {Object} fElements Additional elements
   * @param {String} type Type of elements
   * @param {Number} activationDelay Delay in milliseconds
   */
  activationOff(els, fElements, type, activationDelay) {
    let self = this;
    let options = self.options;
    // deactivate
    for (let el of els) {
      el.classList.remove(...options.classes);
      el.classList.add('out');
      self.activationOffAnimate(el, type, activationDelay);
      // activationDelay
      if (activationDelay && activationDelay[type]) {
        if (options.instant && options.instant[type]) {
          activationDelay[type]();
        }
      }
      // specials
      if (type === 'targets') {
        self.specialClassHtmlOff();
        self.specialCollapseOff(el);
        self.specialCloseOff(el);
      }
      // dispatch
      el.dispatchEvent(new Event('off')); // @TODO events revision
    }
  }

  /**
   * element off animation
   * @param {Node|HTMLElement} el Element to be animated
   * @param {String} type Type of element
   * @param {Number} activationDelay Delay in milliseconds
   */
  activationOffAnimate(el, type, activationDelay) {
    let self = this;
    let options = self.options;
    // onDone
    let onDone = function (el, type) {
      el.classList.remove('out');
      // specials
      if (type === 'targets') {
        self.specialScrollbarOff();
      }
      // activationDelay
      if (activationDelay && activationDelay[type]) {
        if (!options.instant || !options.instant[type]) {
          activationDelay[type]();
        }
      }
    };
    // delay onDone
    let timing = this.activationTiming(el);
    clearTimeout(parseFloat(el.getAttribute('xt-activation-animation-timeout')));
    if (!timing) {
      onDone(el, type);
    } else {
      let timeout = setTimeout(function (el, type) {
        onDone(el, type);
      }, timing, el, type);
      el.setAttribute('xt-activation-animation-timeout', timeout.toString());
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
    let style = getComputedStyle(el);
    let transition = parseFloat(style.transitionDuration) + parseFloat(style.transitionDelay);
    let animation = parseFloat(style.animationDuration) + parseFloat(style.animationDelay);
    if (transition || animation) {
      timing = Math.max(transition, animation);
    }
    return timing * 1000;
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
    if (el.classList.contains('drop-center')) {
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
    if (el.classList.contains('drop-middle')) {
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
          closeElement.xtUtilOff('click.xtend.' + self.namespace);
          closeElement.xtUtilOn('click.xtend.' + self.namespace, function (e) {
            if (XtUtil.checkInside(e, XtUtil.arrSingle(this))) {
              self.eventOff(single);
            }
          });
        }
      });
    }
    // closeOutside
    if (options.closeOutside) {
      let closeElements = document.documentElement.querySelectorAll(options.closeOutside);
      XtUtil.requestAnimationFrame.call(window, function () {
        for (let closeElement of closeElements) {
          closeElement.xtUtilOff('click.xtend.' + self.namespace);
          closeElement.xtUtilOn('click.xtend.' + self.namespace, function (e) {
            if (XtUtil.checkOutside(e, XtUtil.arrSingle(el))) {
              self.eventOff(single);
            }
          });
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
        closeElement.xtUtilOff('click.xtend.' + this.namespace);
      }
    }
    // closeOutside
    if (options.closeOutside) {
      let closeElements = document.documentElement.querySelectorAll(options.closeOutside);
      for (let closeElement of closeElements) {
        closeElement.xtUtilOff('click.xtend.' + this.namespace);
      }
    }
  }

  /**
   * scrollbar activation
   */
  specialScrollbarOn() {
    let self = this;
    let options = self.options;
    //
    if (options.scrollbar) {
      let elements;
      let width = XtUtil.scrollbarWidth();
      // check fixed
      elements = document.documentElement.querySelectorAll('.xt-check-fixed > *');
      for (let element of elements) {
        let style = getComputedStyle(element);
        if (style.position === 'fixed') {
          element.classList.add('xt-fixed');
        } else {
          element.classList.remove('xt-fixed');
        }
      }
      // fixed
      elements = document.documentElement.querySelectorAll('.xt-fixed');
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
      elements = document.documentElement.querySelectorAll('.xt-backdrop');
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
    //
    if (options.scrollbar) {
      let elements;
      // scroll
      let container = document.documentElement;
      container.style.paddingRight = '';
      container.classList.remove('xt-scrollbar');
      // fixed
      elements = document.documentElement.querySelectorAll('.xt-fixed');
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
      elements = document.documentElement.querySelectorAll('.xt-backdrop');
      for (let element of elements) {
        element.style.right = '';
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

}

// default

XtToggle.defaults = {
  "elements": ":scope > a, :scope > button",
  "targets": ":scope > [class^=\"toggle-\"], :scope > [class*=\" toggle-\"]",
  "class": "active",
  "instant": { "elements": true },
  "on": "click",
  "toggle": true,
  "min": 0,
  "max": 1
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

}

// default

XtDrop.defaults = {
  "elements": ":scope",
  "targets": ":scope > .drop",
  "additional": ":scope > a, :scope > button",
  "class": "active",
  "instant": { "elements": true },
  "on": "click",
  "toggle": true,
  "min": 0,
  "max": 1,
  "closeOutside": "body"
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

}

// default

XtOverlay.defaults = {
  "elements": ":scope > a, :scope > button",
  "targets": ":scope > .overlay-outer",
  "class": "active",
  "instant": { "elements": true },
  "on": "click",
  "toggle": true,
  "min": 0,
  "max": 1,
  "appendTo": "body",
  "backdrop": "targets",
  "closeInside": ".overlay-dismiss, :scope > .xt-backdrop, :scope .overlay-inner > .btn-close",
  "scrollbar": true
};

// export

window.XtOverlay = XtOverlay;
export {XtOverlay};

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
      let events = [...options.on.split(' ')];
      for (let event of events) {
        window.xtUtilOff(event + '.xtend' + this.namespace);
        window.xtUtilOn(event + '.xtend' + this.namespace, function (e) {
          self.eventScroll(self.object);
        });
      }
    }
    // trigger initial
    self.eventScroll(self.object); // @TODO events revision
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
    let indexElements = [];
    let scrollInverse = false;
    let windowHeight = window.innerHeight;
    let scrollTop = document.documentElement.scrollTop;
    let scrollTopOld = self.scrollTopOld;
    // direction
    if (scrollTop < scrollTopOld) {
      scrollInverse = true;
    }
    // core
    for (let el of self.elements) {
      if (el.offsetParent) {
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
          changed = self.eventOn(el);
        } else  {
          // outside
          changed = self.eventOff(el);
          el.classList.add('fade-visible');
          if (changed) {
            el.classList.add('fade-scroll');
          }
        }
        // direction
        if (changed) {
          indexElements.push(el);
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
    // index
    for (let [i, el] of indexElements.entries()) {
      el.setAttribute('data-fade-index', i);
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
  "distance": 0.2
};

// export

window.XtFade = XtFade;
export {XtFade};

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
    this.mode = 'all';
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
      let events = [...options.on.split(' ')];
      for (let event of events) {
        window.xtUtilOff(event + '.xtend' + this.namespace);
        window.xtUtilOn(event + '.xtend' + this.namespace, function (e) {
          self.eventScroll(self.object);
        });
      }
    }
    // trigger initial
    self.eventScroll(self.object); // @TODO events revision
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
    let scrollHeight = document.documentElement.scrollHeight;
    let el = self.object;
    let rectElTop = el.getBoundingClientRect().top;
    let heightEl = parseFloat(getComputedStyle(el).height);
    let rectContainerTop =  self.container[0].getBoundingClientRect().top;
    let scrollTop = document.documentElement.scrollTop;
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
        addHide = heightEl;
      }
    }
    if (options.hide === 'up') {
      if (scrollInverse) {
        addHide = heightEl;
      }
    }
    // scroll
    let top = self.eventScrollPos(options.limit['top'] || self.targets, scrollTop, rectContainerTop);
    let bottom = self.eventScrollPos(options.limit['bottom'], scrollTop, Infinity);
    if (options.position === 'top') {
      bottom -= heightEl;
    }
    if (options.position === 'bottom') {
      top -= windowHeight - heightEl;
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
    el.setAttribute('data-add-sticky', add + 'px');
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
    // anim before hide
    if (!el.classList.contains('active')) {
      anim = false;
      // @TODO fix absolute animation when not .active
      // if (rectContainerTop > scrollTop) {
      // add = scrollTop - rectElTop;
      // }
    }
    // addTop after save
    if (addTop && !el.classList.contains('active')) {
      add -= rectContainerTop;
    }
    // hide after save
    if (hide) {
      //anim = true;
      add = -addHide;
      if (!el.classList.contains('sticky-hide')) {
        el.classList.add('sticky-hide');
      }
    } else {
      if (el.classList.contains('sticky-hide')) {
        el.classList.remove('sticky-hide');
      }
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
      XtUtil.cancelAnimationFrame.call(window, self.scrollFrame);
      self.scrollFrame = XtUtil.requestAnimationFrame.call(window, function () {
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
          let addSticky = el.getAttribute('data-add-sticky');
          let style = getComputedStyle(el);
          if (style.display !== 'none') {
            found = true;
            if (addSticky && addSticky !== '0px') { // if sticky-hide get real add
              val += parseFloat(addSticky);
            } else {
              let rect = el.getBoundingClientRect();
              val += rect.top;
            }
          }
          if (found) {
            val += scrollTop;
          } else {
            val = null;
          }
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
  "hide": false
};

// export

window.XtSticky = XtSticky;
export {XtSticky};