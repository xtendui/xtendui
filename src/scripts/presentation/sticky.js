//////////////////////
// import
//////////////////////

import Xt from '../xtend';
import Core from '../core';

//////////////////////
// Sticky
//////////////////////

class Sticky extends Core {

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
    // mode
    self.mode = 'unique';
    // sticky container
    for (let el of self.elements) {
      self.container = Xt.parents(el, '.xt-container')[0];
      if (!self.container) {
        self.container = Xt.createElement('<div class="xt-container xt-fixed--inner"></div>');
        el.before(self.container);
        self.container.append(el);
      }
      // sticky clone
      let target = self.container.querySelectorAll('.xt-clone')[0];
      if (!target) {
        target = el.cloneNode(true);
        target.classList.add('xt-clone', 'xt-ignore');
        for (let elId of target.querySelectorAll('[id]')) {
          elId.setAttribute('id', elId.getAttribute('id') + '-clone');
        }
        for (let elName of target.querySelectorAll('[name]')) {
          elName.setAttribute('name', elName.getAttribute('name') + '-clone');
        }
        self.container.append(target);
      }
      self.targets.push(target);
      // sticky
      el.classList.add('xt-fixed', 'xt-sticky');
      if (options.sticky === 'absolute') {
        el.classList.add('xt-sticky--absolute');
      } else if (options.sticky === 'fixed') {
        el.classList.add('xt-sticky--fixed');
      } else if (options.sticky === 'fixed-always') {
        el.classList.add('xt-sticky--fixed-always');
      }
      if (target) {
        target.classList.add('xt-fixed', 'xt-sticky');
        if (options.sticky === 'absolute') {
          target.classList.add('xt-sticky--absolute');
        } else if (options.sticky === 'fixed') {
          target.classList.add('xt-sticky--fixed');
        } else if (options.sticky === 'fixed-always') {
          target.classList.add('xt-sticky--fixed-always');
        }
      }
      // hide
      if (options.hide === 'down') {
        el.classList.add('sticky-hide--down');
      } else {
        el.classList.remove('sticky-hide--down');
      }
      if (options.hide === 'up') {
        el.classList.add('sticky-hide--up');
      } else {
        el.classList.remove('sticky-hide--up');
      }
      // @index--sticky by javascript 100 and decreses with sequential sticky
      el.style.zIndex = 100 - Xt.getUniqueNum();
    }
  }

  /**
   * init events
   */
  initEvents() {
    let self = this;
    let options = self.options;
    // event on
    let stickyHandler = Xt.dataStorage.put(window, options.on + '.' + self.namespace,
      self.eventStickyHandler.bind(self));
    if (options.on) {
      let events = [...options.on.split(' ')];
      for (let event of events) {
        addEventListener(event, stickyHandler, Xt.passiveSupported ? {passive: true} : false);
      }
    }
    addEventListener('scroll.xt.sticky', stickyHandler);
    requestAnimationFrame(self.eventStickyHandler.bind(self));
    // autoClose
    let autoCloseHandler = Xt.dataStorage.put(self.object, 'hide' + '.' + self.namespace,
      Xt.autoClose.bind(this, self.object));
    self.object.addEventListener('hide.xt.sticky', autoCloseHandler);
  }

  //////////////////////
  // handler
  //////////////////////

  /**
   * element on handler
   * @param {Event} e
   */
  eventStickyHandler(e = null) {
    let self = this;
    // handler
    if (!e || !e.detail || !e.detail.skip) { // needed because we trigger .xt event
      Xt.eventDelay(e, self.object, function() {
        self.eventSticky(self.object, e);
      }, 'resize.xt.sticky');
    }
  }

  //////////////////////
  // event
  //////////////////////

  /**
   * window scroll
   * @param {Node|HTMLElement|EventTarget|Window} element To be activated or deactivated
   * @param {Event} e
   */
  eventSticky(element, e) {
    let self = this;
    let options = self.options;
    // disabled
    if (self.disabled && !self.initial) {
      return false;
    }
    // var
    let anim = true;
    let hide = false;
    let scrollInverse = false;
    let add = 0;
    let addHide = 0;
    let windowHeight = Xt.windowHeight;
    let heightEl = parseFloat(getComputedStyle(element).height);
    let heightTarget = parseFloat(getComputedStyle(self.targets[0]).height);
    let rectContainerTop = self.container.getBoundingClientRect().top;
    let scrollingElement = document.scrollingElement;
    let scrollHeight = scrollingElement.scrollHeight;
    let scrollTop = scrollingElement.scrollTop;
    let scrollTopOld = self.detail.scrollTopOld;
    // direction
    if (scrollTop < scrollTopOld) {
      element.classList.remove('sticky--down');
      element.classList.add('sticky--up');
      scrollInverse = true;
    } else {
      element.classList.add('sticky--down');
      element.classList.remove('sticky--up');
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
    let top = self.eventStickyPos(options.limit['top'] || self.targets, scrollTop, rectContainerTop);
    let bottom = self.eventStickyPos(options.limit['bottom'], scrollTop, Infinity);
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
        let addTopObj = self.eventStickyHeight(options.contain['top'], scrollInverse);
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
        addBottom = self.eventStickyPos(options.contain['bottom']);
        if (addBottom !== null && addBottom < heightEl + addTop) {
          add = addBottom - heightEl;
          anim = false;
        } else {
          addBottom = null;
        }
      }
    }
    // save real add for calculation
    element.dataset.xtAddSticky = add.toString();
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
    if (element.classList.contains(...self.classes)) {
      // hide
      if (hide) {
        add = -heightEl;
        if (!element.classList.contains('sticky--hide')) {
          element.classList.add('sticky--hide');
          // autoClose
          dispatchEvent(new CustomEvent('autoClose.xt'));
          // listener dispatch
          let detail = self.eDetailSet(e);
          element.dispatchEvent(new CustomEvent('hide.xt.sticky', {detail: detail}));
        }
      } else {
        if (element.classList.contains('sticky--hide')) {
          element.classList.remove('sticky--hide');
          // listener dispatch
          let detail = self.eDetailSet(e);
          element.dispatchEvent(new CustomEvent('show.xt.sticky', {detail: detail}));
        }
      }
    } else {
      // reset
      add = 0;
      anim = false;
    }
    // anim
    if (anim && scrollTopOld !== undefined) {
      if (!element.classList.contains('sticky--moving')) {
        element.classList.add('sticky--moving');
      }
    } else if (element.classList.contains(...self.classes)) {
      if (element.classList.contains('sticky--moving')) {
        element.classList.remove('sticky--moving');
      }
    }
    // top and bottom
    if (!checkTop) {
      if (!element.classList.contains('sticky--top')) {
        element.classList.add('sticky--top');
      }
    } else {
      if (element.classList.contains('sticky--top')) {
        element.classList.remove('sticky--top');
      }
    }
    if (!checkBottom) {
      if (!element.classList.contains('sticky--bottom')) {
        element.classList.add('sticky--bottom');
      }
    } else {
      if (element.classList.contains('sticky--bottom')) {
        element.classList.remove('sticky--bottom');
      }
    }
    // set add
    if (add !== self.detail.addOld) {
      element.style[options.position] = add + 'px';
    }
    // fix position fixed width 100% of parent
    let width = self.normalizeWidth(self.container.clientWidth);
    if (element.style.width !== width) {
      element.style.width = width;
    }
    // save for direction
    self.detail.addOld = add;
    self.detail.scrollTopOld = scrollTop;
  }

  /**
   * get position of option
   * @param {String|Number|Element} option
   * @param {Number} val Default value
   * @param {Number} scrollTop Window's scrollTop
   * @returns {Number} value Option's position (px)
   */
  eventStickyPos(option, scrollTop = 0, val = null) {
    if (!isNaN(parseFloat(option))) {
      val = option;
    } else {
      let elements = Array.isArray(option) || NodeList.prototype.isPrototypeOf(option) ? option : document.querySelectorAll(option);
      if (elements.length) {
        let found = false;
        val = 0;
        for (let el of elements) {
          let addSticky = parseFloat(el.dataset.xtAddSticky);
          if (addSticky) { // if sticky--hide get real add
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

  //////////////////////
  // event util
  //////////////////////

  /**
   * get height of option
   * @param {String|Number|Element} option
   * @param {Boolean} scrollInverse
   * @param {Number} val Default value
   * @returns {Object} obj Option's height (px) and if found hide element
   */
  eventStickyHeight(option, scrollInverse, val = null) {
    let self = this;
    let options = self.options;
    // logic
    let foundHide = false;
    if (!isNaN(parseFloat(option))) {
      val = option;
    } else {
      let elements = Array.isArray(option) || NodeList.prototype.isPrototypeOf(option) ? option : document.querySelectorAll(option);
      if (elements.length) {
        for (let el of elements) {
          if (el.classList.contains('sticky-hide--down') && el.classList.contains(...self.classes)) {
            if (scrollInverse) {
              val += el.clientHeight;
              foundHide = true;
            }
          } else if (el.classList.contains('sticky-hide--up') && el.classList.contains(...self.classes)) {
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

//////////////////////
// option
//////////////////////

Sticky.componentName = 'xt-sticky';
Sticky.optionsDefault = {
  "class": "active",
  "on": "scroll resize",
  "min": 0,
  "max": "Infinity",
  "instant": true,
  "sticky": true,
  "position": "top",
  "limit": {"bottom": "Infinity"},
  "contain": false,
  "hide": false,
  "aria": false
};

//////////////////////
// export
//////////////////////

export default Sticky;