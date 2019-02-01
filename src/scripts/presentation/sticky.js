/* xtend (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

'use strict';

import Xt from '../xtend';
import Core from '../core';

//////////////////////
// Sticky
//////////////////////

class Sticky extends Core {

  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} jsOptions User options
   * @constructor
   */
  constructor(object, jsOptions = {}) {
    super(object, jsOptions);
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
    // container
    self.container = Xt.parents(self.object, '.xt-container');
    if (!self.container.length) {
      self.container = Xt.createElement('<div class="xt-container xt-fixed--inner"></div>');
      self.object.before(self.container);
      self.container.append(self.object);
      self.container = Xt.parents(self.object, '.xt-container');
    }
    // targets
    self.targets = self.container[0].querySelectorAll('.xt-clone');
    if (!self.targets.length) {
      self.targets = self.object.cloneNode(true);
      self.targets.classList.add('xt-clone', 'xt-ignore');
      for (let elId of self.targets.querySelectorAll('[id]')) {
        elId.setAttribute('id', elId.getAttribute('id') + '-clone');
      }
      for (let elName of self.targets.querySelectorAll('[name]')) {
        elName.setAttribute('name', elName.getAttribute('name') + '-clone');
      }
      self.container[0].append(self.targets);
    }
    self.targets = Xt.arrSingle(self.targets);
    // xt-fixed
    self.object.classList.add('xt-fixed');
    // hide
    if (options.hide === 'down') {
      self.object.classList.add('xt-sticky--hide-down');
    } else {
      self.object.classList.remove('xt-sticky--hide-down');
    }
    if (options.hide === 'up') {
      self.object.classList.add('xt-sticky--hide-up');
    } else {
      self.object.classList.remove('xt-sticky--hide-up');
    }
    // z-index
    self.zIndex = 100 - Xt.getUniqueNum();
    self.object.style.zIndex = self.zIndex;
  }

  /**
   * init events
   */
  initEvents() {
    let self = this;
    let options = self.options;
    // event on
    let stickyHandler = Xt.dataStorage.put(window, 'stickyHandler' + self.namespace,
      self.eventStickyHandler.bind(self));
    if (options.on) {
      let events = [...options.on.split(' ')];
      for (let event of events) {
        removeEventListener(event, stickyHandler);
        addEventListener(event, stickyHandler, Xt.passiveSupported ? {passive: true} : false);
      }
    }
    removeEventListener('scroll.xt.sticky', stickyHandler);
    addEventListener('scroll.xt.sticky', stickyHandler);
    // listener dispatch initial only 1 time next frame
    if (!document.documentElement.dataset.xtStickyDone) {
      document.documentElement.dataset.xtStickyDone = 'true';
      requestAnimationFrame(function () {
        dispatchEvent(new CustomEvent('scroll.xt.sticky'));
        delete document.documentElement.dataset.xtStickyDone;
      });
    }
    // autoClose
    let autoCloseHandler = Xt.dataStorage.put(self.object, 'autoCloseHandler' + self.namespace,
      Xt.autoClose.bind(this, self.object));
    self.object.removeEventListener('hide.xt.sticky', autoCloseHandler);
    self.object.addEventListener('hide.xt.sticky', autoCloseHandler);
  }

  //////////////////////
  // handler
  //////////////////////

  /**
   * element on handler
   * @param {Event} e
   */
  eventStickyHandler(e) {
    let self = this;
    // handler
    if (!e.detail || !e.detail.skip) { // needed because we trigger .xt event
      Xt.eventDelay(e, self.object, function() {
        self.eventSticky(self.object, e);
      });
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
    if (self.detail.disabled && !self.detail.initial) {
      return false;
    }
    // eDetail
    self.eDetailSet(e);
    // var
    let anim = true;
    let hide = false;
    let scrollInverse = false;
    let add = 0;
    let addHide = 0;
    let windowHeight = window.innerHeight;
    let heightEl = parseFloat(getComputedStyle(element).height);
    let heightTarget = parseFloat(getComputedStyle(self.targets[0]).height);
    let rectContainerTop = self.container[0].getBoundingClientRect().top;
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
    if (element.classList.contains('active')) {
      // hide
      if (hide) {
        add = -heightEl;
        if (!element.classList.contains('sticky--hide')) {
          element.classList.add('sticky--hide');
          // listener dispatch
          element.dispatchEvent(new CustomEvent('hide.xt.sticky', {detail: self.eDetail}));
        }
      } else {
        if (element.classList.contains('sticky--hide')) {
          element.classList.remove('sticky--hide');
          // listener dispatch
          element.dispatchEvent(new CustomEvent('show.xt.sticky', {detail: self.eDetail}));
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
    } else {
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
    let width = self.normalizeWidth(self.container[0].clientWidth);
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
    let foundHide = false;
    if (!isNaN(parseFloat(option))) {
      val = option;
    } else {
      let elements = Array.isArray(option) || NodeList.prototype.isPrototypeOf(option) ? option : document.querySelectorAll(option);
      if (elements.length) {
        for (let el of elements) {
          if (el.classList.contains('xt-sticky--hide-down') && el.classList.contains('active')) {
            if (scrollInverse) {
              val += el.clientHeight;
              foundHide = true;
            }
          } else if (el.classList.contains('xt-sticky--up') && el.classList.contains('active')) {
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
// defaults
//////////////////////

Sticky.componentName = 'sticky';
Sticky.defaults = {
  "class": "active",
  "on": "scroll resize",
  "min": 0,
  "max": "Infinity",
  "instant": true,
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