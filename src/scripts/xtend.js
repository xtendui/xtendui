/*! xtend v0.1.6 (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

'use strict';

import XtUtil from './xtend-utils';

//////////////////////
// Xt
//////////////////////

export class Xt {

  /**
   * constructor
   * @param {Element} object Base element
   * @param {Object} options User options
   * @param {String} attr Attribute name with json options
   * @constructor
   */
  constructor(object, jsOptions, attr) {
    this.object = object;
    this.defaults = this.constructor.defaults;
    // js options
    this.options = XtUtil.merge([this.defaults, jsOptions || {}]);
    // markup options
    let markupOptions = this.object.getAttribute(attr);
    this.options = XtUtil.merge([this.options, markupOptions ? JSON.parse(markupOptions) : {}]);
    // classes
    if (this.options.class) {
      this.options.classes = [...this.options.classes, ...this.options.class.split(' ')];
    }
    // init
    this.initSetup();
    this.initScope();
  }

  //////////////////////
  // init
  //////////////////////

  /**
   * setup namespace, container and options
   */
  initSetup() {
    let options = this.options;
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
    let options = this.options;
    // elements
    this.elements = [];
    if (options.elements) {
      this.elements = XtUtil.arrSingle(this.container.querySelectorAll(options.elements));
    }
    if (!this.elements.length) {
      this.elements = XtUtil.arrSingle(this.object);
      // @FIX on next frame set all elements querying the namespace
      XtUtil.requestAnimationFrame.call(window, function () {
        self.elements = XtUtil.arrSingle(document.querySelectorAll('[data-xt-namespace=' + self.namespace + ']'));
      });
    }
    // targets
    if (options.targets) {
      let arr = Array.from(this.container.querySelectorAll(options.targets));
      arr = arr.filter(x => !XtUtil.parents(x, options.targets).length); // filter out parent
      this.targets = XtUtil.arrSingle(arr);
    }
    // @FIX set namespace for next frame
    for (let el of this.elements) {
      el.setAttribute('data-xt-namespace', self.namespace);
    }
    // currents
    XtUtil.requestAnimationFrame.call(window, function () {
      if (self.elements.length) {
        // activate defaults.class
        for (let el of self.elements) {
          if (el.classList.contains(...self.defaults.classes)) {
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

  //////////////////////
  // utils
  //////////////////////

  /**
   * choose which elements to activate/deactivate (based on xtend mode and containers)
   * @param {Element} element Element that triggered interaction
   * @returns {Object} object.all and object.single
   */
  getElements(element) {
    if (!this.elements || !this.elements.length) {
      return {all: [], single: null};
    }
    if (this.mode === 'all') {
      // choose all elements
      return {all: this.elements, single: this.elements};
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
   * @param {Element} element Element that triggered interaction
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
      if (group) {
        // all group targets if group
        let final = groupTargets;
        return XtUtil.arrSingle(final);
      } else {
        // not group targets by index if not group
        let index = groupElements.findIndex(x => x === element);
        let final = groupTargets[index];
        return XtUtil.arrSingle(final);
      }
    }
  }

  /**
   * get currents based on namespace (so shared between Xt objects)
   * @returns {Element}
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
   * @param {Element} element To be added
   */
  addCurrent(element) {
    let arr = XtUtil.currents[this.namespace];
    arr.push(element);
  }

  /**
   * remove currents based on namespace (so shared between Xt objects)
   * @param {Element} element To be removed
   */
  removeCurrent(element) {
    XtUtil.currents[this.namespace] = XtUtil.currents[this.namespace].filter(x => x !== element);
  }

  //////////////////////
  // events
  //////////////////////

  /**
   * element on
   * @param {Element} element To be activated
   */
  eventOn(element) {
    let options = this.options;
    // activate or deactivate
    if (!element.classList.contains(...this.defaults.classes)) {
      let fElements = this.getElements(element);
      this.addCurrent(fElements.single);
      this.activationOn(fElements.all);
      let targets = this.getTargets(element);
      this.activationOn(targets);
    } else {
      this.eventOff(element);
    }
    // if currents > max
    let currents = this.getCurrents();
    if (currents.length > options.max) {
      this.eventOff(currents[0]);
    }
  }

  /**
   * element off
   * @param {Element} element To be deactivated
   */
  eventOff(element) {
    let options = this.options;
    // if currents < min
    let todo = options.min - this.getCurrents().length;
    if (!todo) {
      return;
    }
    // deactivate
    if (element.classList.contains(...this.defaults.classes)) {
      let fElements = this.getElements(element);
      this.removeCurrent(fElements.single);
      this.activationOff(fElements.all);
      let targets = this.getTargets(element);
      this.activationOff(targets);
    }
  }

  //////////////////////
  // activation
  //////////////////////

  /**
   * clear activations timeouts
   * @param {Element} element
   */
  animationClear(el) {
    clearTimeout(parseFloat(el.getAttribute('xt-activation-animation-timeout')));
  }

  /**
   * element on activation
   * @param {Element} element To be activated
   */
  activationOn(els) {
    let self = this;
    let options = this.options;
    // activate
    for (let el of els) {
      el.classList.add(...options.classes);
      el.classList.remove('out');
      self.activationOnAnimate(el);
      // specials
      self.collapseOn(el);
    }
  }

  /**
   * element on animation
   * @param {Element} element To be animated
   */
  activationOnAnimate(el) {
    let timing = this.activationTiming(el);
    // delay
    this.animationClear(el);
    if (!timing) {
      // collapse-width and collapse-height
      if (el.classList.contains('collapse-height')) {
        el.style.height = 'auto';
      }
      if (el.classList.contains('collapse-width')) {
        el.style.width = 'auto';
      }
    } else {
      let timeout = setTimeout(function (el) {
        // collapse-width and collapse-height
        if (el.classList.contains('collapse-height')) {
          el.style.height = 'auto';
        }
        if (el.classList.contains('collapse-width')) {
          el.style.width = 'auto';
        }
      }, timing, el);
      el.setAttribute('xt-activation-animation-timeout', timeout);
    }
  }

  /**
   * element off activation
   * @param {Element} element To be deactivated
   */
  activationOff(els) {
    let self = this;
    let options = this.options;
    // deactivate
    for (let el of els) {
      el.classList.remove(...options.classes);
      el.classList.add('out');
      self.activationOffAnimate(el);
      // specials
      self.collapseOff(el);
    }
  }

  /**
   * element off animation
   * @param {Element} element To be animated
   */
  activationOffAnimate(el) {
    let timing = this.activationTiming(el);
    // delay
    this.animationClear(el);
    if (!timing) {
      el.classList.remove('out');
    } else {
      let timeout = setTimeout(function (el) {
        el.classList.remove('out');
      }, timing, el);
      el.setAttribute('xt-activation-animation-timeout', timeout);
    }
  }

  /**
   * get transition or animation timing
   * @param {Element} element To be animated
   * @returns {Number} Milliseconds
   */
  activationTiming(el) {
    let options = this.options;
    // timing
    let timing = options.timing;
    let transition = parseFloat(getComputedStyle(el)['transitionDuration']) + parseFloat(getComputedStyle(el)['transitionDelay']);
    let animation = parseFloat(getComputedStyle(el)['animationDuration']) + parseFloat(getComputedStyle(el)['animationDelay']);
    if (transition || animation) {
      timing = Math.max(transition, animation);
    }
    return timing * 1000;
  }

  //////////////////////
  // activation specials
  //////////////////////

  /**
   * collapseOn on activation
   * @param {Element} element
   */
  collapseOn(el) {
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
   * collapseOff on deactivation
   * @param {Element} element
   */
  collapseOff(el) {
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

}

// defaults

Xt.defaults = {
  classes: ['active']
};


//////////////////////
// XtToggle
//////////////////////

export class XtToggle extends Xt {

  /**
   * constructor
   * @param {Element} object Base element
   * @param {Object} options User options
   * @constructor
   */
  constructor(object, jsOptions) {
    super(object, jsOptions, 'data-xt-toggle');
    this.initEvents();
  }

  //////////////////////
  // init
  //////////////////////

  /**
   * init events
   */
  initEvents() {
    let self = this;
    let options = this.options;
    // on and off
    for (let el of this.elements) {
      if (options.on) {
        el.addEventListener(options.on, function (e) {
          self.eventOn(this);
        });
      }
      if (options.off) {
        el.addEventListener(options.off, function (e) {
          self.eventOff(this);
        });
      }
    }
  }

}

// defaults

XtToggle.defaults = {
  elements: ':scope > .btn',
  targets: '[class^="toggle-"], [class*=" toggle-"]',
  classes: ['active'],
  on: 'click',
  min: 0,
  max: 1
};

//////////////////////
// XtScroll
//////////////////////

export class XtScroll extends Xt {

  /**
   * constructor
   * @param {Element} object Base element
   * @param {Object} options User options
   * @constructor
   */
  constructor(object, jsOptions) {
    super(object, jsOptions, 'data-xt-scroll');
    this.initEvents();
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
    this.container = XtUtil.parents(this.object, '.xt-container.xt-position');
    if (!this.container.length) {
      this.container = XtUtil.createElement('<div class="xt-container xt-position"></div>');
      this.object.before(this.container);
      this.container.append(this.object);
      this.container = XtUtil.parents(this.object, '.xt-container.xt-position');
    }
    // targets
    this.targets = this.container[0].querySelectorAll('.xt-clone.xt-ignore');
    if (this.targets) {
      this.targets = this.object.cloneNode(true);
      this.targets.classList.add('xt-clone', 'xt-ignore');
      this.container[0].append(this.targets);
    }
    this.targets = XtUtil.arrSingle(this.targets);
  }

  /**
   * init events
   */
  initEvents() {
    let self = this;
    let options = this.options;
    // scroll
    window.addEventListener(options.on, function (e) {
      self.eventScroll(self.object);
    });
  }

  //////////////////////
  // events
  //////////////////////

  /**
   * window scroll
   * @param {Element} element To be activated or deactivated
   */
  eventScroll(element) {
    let self = this;
    let options = this.options;
    // scroll
    let scrollTop = document.documentElement.scrollTop;
    XtUtil.cancelAnimationFrame.call(window, this.scrollFrame);
    this.scrollFrame = XtUtil.requestAnimationFrame.call(window, function () {
      let rectContainer = self.container[0].getBoundingClientRect();
      let top = rectContainer.top;
      let bottom = Infinity;
      // top
      if (!isNaN(parseFloat(options.top))) {
        top = options.top;
      } else {
        let elTop = document.querySelectorAll(options.top);
        if (elTop.length) {
          let rectTop = elTop[0].getBoundingClientRect();
          top = rectTop.top + scrollTop;
        } else if (self.targets.length) {
          let rectTop = self.targets[0].getBoundingClientRect();
          top = rectTop.top + scrollTop;
        }
      }
      // bottom
      if (options.bottom !== undefined) {
        if (!isNaN(parseFloat(options.bottom))) {
          bottom = options.bottom;
        } else {
          let elBottom = document.querySelectorAll(options.bottom);
          if (elBottom.length) {
            let rectBottom = elBottom[0].getBoundingClientRect();
            bottom = rectBottom.top + scrollTop;
          } else if (self.targets.length) {
            let rectBottom = self.targets[0].getBoundingClientRect();
            bottom = rectBottom.top + scrollTop;
          }
        }
      }
      // check
      if (scrollTop >= top && scrollTop < bottom) {
        // inside
        if (!element.classList.contains(...self.defaults.classes)) {
          self.eventOn(element);
          // direction
          let fElements = self.getElements(element);
          for (let el of fElements.all) {
            el.classList.remove('scroll-off-top', 'scroll-off-bottom');
            if (self.scrollTop > scrollTop) {
              el.classList.remove('scroll-on-top');
              el.classList.add('scroll-on-bottom');
            } else {
              el.classList.add('scroll-on-top');
              el.classList.remove('scroll-on-bottom');
            }
          }
        }
      } else {
        // outside
        if (element.classList.contains(...self.defaults.classes)) {
          self.eventOff(element);
          // direction
          let fElements = self.getElements(element);
          for (let el of fElements.all) {
            el.classList.remove('scroll-on-top', 'scroll-on-bottom');
            if (self.scrollTop > scrollTop) {
              el.classList.remove('scroll-off-top');
              el.classList.add('scroll-off-bottom');
            } else {
              el.classList.add('scroll-off-top');
              el.classList.remove('scroll-off-bottom');
            }
          }
        }
      }
      // save for direction
      self.scrollTop = scrollTop;
    });
  }

}

// defaults

XtScroll.defaults = {
  classes: ['active'],
  on: 'scroll',
  min: 0,
  max: Infinity
};

/*
// overlay html
if (settings.name === 'xt-overlay') {
  var $additional = $('html');
  if (!$additional.hasClass(object.defaultClass)) {
    $additional.addClass(settings.class);
    // add paddings
    object.onFixed($('html, .xt-backdrop')); // use this for all position fixed $('*:fixed').not($target);
  }
}
// overlay html
if (settings.name === 'xt-overlay') {
  var $additional = $('html');
  if ($additional.hasClass(object.defaultClass)) {
    $additional.removeClass(settings.class);
    // remove paddings
    object.offFixed($('.xt-fixed')); // use this for all position fixed $('*:fixed').not($target);
  }
}

Xt.prototype.onFixed = function($el) {
  var object = this;
  var settings = this.settings;
  var group = this.group;
  var $group = $(this.group);
  // add scrollbar padding
  var w = object.scrollbarWidth($el);
  w = $el.css('overflow-y') === 'hidden' ? 0 : w;
  $el.addClass('xt-fixed').css('right', w).css('padding-right', w);
};

Xt.prototype.offFixed = function($el) {
  var object = this;
  var settings = this.settings;
  var group = this.group;
  var $group = $(this.group);
  // remove scrollbar padding
  $el.removeClass('xt-fixed').css('right', 0).css('padding-right', 0);
};
*/