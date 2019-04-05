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
    if (options.on) {
      let stickyHandler = Xt.dataStorage.set(window, options.on + '.' + self.namespace,
        self.eventStickyHandler.bind(self));
      let events = [...options.on.split(' ')];
      for (let event of events) {
        addEventListener(event, stickyHandler, Xt.passiveSupported ? {passive: true} : false);
      }
      requestAnimationFrame(function () {
        self.eventStickyHandler(null, true);
      });
    }
    // autoClose
    let autoCloseHandler = Xt.dataStorage.set(self.object, 'hide' + '.' + self.namespace,
      Xt.autoClose.bind(this, self.object));
    self.object.addEventListener('hide.xt.sticky', autoCloseHandler);
    // focusin
    let focusInHandler = Xt.dataStorage.set(document, 'focusin' + '.' + self.namespace,
      self.eventFocusInHandler.bind(self));
    document.addEventListener('focusin', focusInHandler, Xt.passiveSupported ? {passive: true} : false);
  }

  //////////////////////
  // handler
  //////////////////////

  /**
   * element on handler
   * @param {Event} e
   * @param {Boolean} initial
   */
  eventStickyHandler(e = null, initial = false) {
    let self = this;
    // handler
    if (!e || !e.detail || !e.detail.skip) { // needed because we trigger .xt event
      Xt.eventDelay(e, self.object, function () {
        self.eventSticky(e, initial);
      }, self.componentNamespace + 'Resize');
    }
  }

  /**
   * element focusin handler
   * @param {Event} e
   */
  eventFocusInHandler(e) {
    let self = this;
    let options = self.options;
    // handler
    for (let tr of self.targets) {
      let el = self.getElementsFromTarget(tr)[0];
      // show element if is hiding on focus
      if (el.classList.contains('sticky--hide')) {
        let active = el.contains(e.target);
        if (active) {
          el.style[options.position] = '0px';
        } else {
          el.style[options.position] = Xt.dataStorage.get(el, self.componentNamespace + 'AddOld') + 'px';
        }
      }
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
  eventSticky(e, initial) {
    let self = this;
    let options = self.options;
    // disabled
    if (self.disabled && !self.initial) {
      return false;
    }
    // var
    let anim = true;
    let hide = false;
    let add = 0;
    let addHide = 0;
    let windowHeight = Xt.windowHeight;
    let scrollingElement = document.scrollingElement;
    let scrollHeight = scrollingElement.scrollHeight;
    let scrollTop = scrollingElement.scrollTop;
    // direction
    self.detail.inverseForce = scrollTop < self.detail.scrollTopOld;
    // loop
    for (let tr of self.targets) {
      let el = self.getElementsFromTarget(tr)[0];
      el = el ? el : tr; // for not sticky: el is the same as tr
      // vars
      let heightEl = parseFloat(getComputedStyle(el).height);
      let heightTr = parseFloat(getComputedStyle(tr).height);
      let topTr = tr.getBoundingClientRect().top;
      // hide
      if (options.hide === 'down') {
        if (!self.detail.inverseForce) {
          addHide = heightTr;
        }
      }
      if (options.hide === 'up') {
        if (self.detail.inverseForce) {
          addHide = heightTr;
        }
      }
      // scroll
      let top = self.eventStickyPos(options.limit['top'] || self.targets, scrollTop, topTr);
      let bottom = self.eventStickyPos(options.limit['bottom'], scrollTop, Infinity);
      if (options.position === 'top') {
        bottom -= heightTr;
      }
      if (options.position === 'bottom') {
        top -= windowHeight - heightTr;
        bottom = Math.abs(scrollHeight - windowHeight - bottom);
      }
      // contain and add
      let addTop = 0;
      let addBottom = 0;
      if (options.contain) {
        if (options.contain['top']) {
          let addTopObj = self.eventStickyHeight(options.contain['top']);
          addTop = addTopObj.val;
          if (addTop !== null && addTop > topTr) {
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
      Xt.dataStorage.put(el, self.componentNamespace + 'Add', add);
      // activation
      let checkTop = scrollTop >= top - add + addHide;
      let checkBottom = scrollTop < bottom + add - addHide;
      if (checkTop && checkBottom) {
        // initial
        if (initial) {
          Xt.dataStorage.put(el, self.componentNamespace + 'Initial', true);
        } else {
          Xt.dataStorage.remove(el, self.componentNamespace + 'Initial');
        }
        // inside
        self.eventOn(el);
        // hide
        if (addHide) {
          hide = true;
        }
      } else {
        // initial
        if (initial) {
          Xt.dataStorage.put(el, self.componentNamespace + 'Initial', true);
        } else {
          Xt.dataStorage.remove(el, self.componentNamespace + 'Initial');
        }
        // outside
        self.eventOff(el);
      }
      // after active
      if (el.classList.contains(...self.classes)) {
        // hide
        if (hide) {
          add = -heightEl;
          if (!el.classList.contains('sticky--hide')) {
            el.classList.add('sticky--hide');
            // autoClose
            dispatchEvent(new CustomEvent('autoClose.xt'));
            // listener dispatch
            let detail = self.eDetailSet(e);
            el.dispatchEvent(new CustomEvent('hide.xt.sticky', {detail: detail}));
          }
        } else {
          if (el.classList.contains('sticky--hide')) {
            el.classList.remove('sticky--hide');
            // listener dispatch
            let detail = self.eDetailSet(e);
            el.dispatchEvent(new CustomEvent('show.xt.sticky', {detail: detail}));
          }
        }
      } else {
        // reset
        add = 0;
        anim = false;
      }
      // anim
      if (anim && (addTop || !addBottom) && self.detail.scrollTopOld !== undefined) {
        if (!el.classList.contains('sticky--moving')) {
          el.classList.add('sticky--moving');
        }
      } else {
        if (el.classList.contains('sticky--moving')) {
          el.classList.remove('sticky--moving');
        }
      }
      // top and bottom
      /*
      if (!checkTop) {
        if (!el.classList.contains('sticky--top')) {
          el.classList.add('sticky--top');
        }
      } else {
        if (el.classList.contains('sticky--top')) {
          el.classList.remove('sticky--top');
        }
      }
      if (!checkBottom) {
        if (!el.classList.contains('sticky--bottom')) {
          el.classList.add('sticky--bottom');
        }
      } else {
        if (el.classList.contains('sticky--bottom')) {
          el.classList.remove('sticky--bottom');
        }
      }
      */
      // set add
      if (add !== Xt.dataStorage.get(el, self.componentNamespace + 'AddOld')) {
        el.style[options.position] = add + 'px';
      }
      // fix position fixed width 100% of parent
      let width = self.normalizeWidth(tr.clientWidth);
      if (el.style.width !== width) {
        el.style.width = width;
      }
      // dispatch
      let detail = self.eDetailSet();
      el.dispatchEvent(new CustomEvent('change.xt.sticky', {detail: detail}));
      // save for direction
      Xt.dataStorage.put(el, self.componentNamespace + 'AddOld', add);
    }
    // save for direction
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
          let add = Xt.dataStorage.get(el, self.componentNamespace + 'Add');
          if (add) { // if sticky--hide get real add
            let style = getComputedStyle(el);
            if (style.display !== 'none') {
              val += add;
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
   * @param {Number} val Default value
   * @returns {Object} obj Option's height (px) and if found hide element
   */
  eventStickyHeight(option, val = null) {
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
            if (self.detail.inverseForce) {
              val += el.clientHeight;
              foundHide = true;
            }
          } else if (el.classList.contains('sticky-hide--up') && el.classList.contains(...self.classes)) {
            if (!self.detail.inverseForce) {
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