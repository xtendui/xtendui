/*! xtend (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

'use strict';

import './polyfills';

import Core from './core';
import Toggle from './interaction/toggle';
import Drop from './interaction/drop';
import Overlay from './interaction/overlay';
import Slider from './presentation/slider';
import Sticky from './presentation/sticky';
import Fade from './presentation/fade';
import Ajax from './others/ajax';
import Smooth from './others/smooth';

//////////////////////
// constructor
//////////////////////

const Xt = {};

//////////////////////
// components
//////////////////////

Xt.Core = Core;
Xt.Toggle = Toggle;
Xt.Drop = Drop;
Xt.Overlay = Overlay;
Xt.Slider = Slider;
Xt.Sticky = Sticky;
Xt.Fade = Fade;
Xt.Ajax = Ajax;
Xt.Smooth = Smooth;

//////////////////////
// var
//////////////////////

Xt.observe = [];
Xt.currents = {}; // Xt currents based on namespace (so shared between Xt objects)
Xt.resizeDelay = 100;
Xt.scrollDelay = false;
Xt.focusables = 'a, button, details, input, iframe, select, textarea';

//////////////////////
// init
//////////////////////

/**
 * initXt
 */
Xt.initXt = function (added = document.documentElement) {
  added = Xt.arrSingle(added);
  for (let element of added) {
    // toggle
    if (element.matches('[data-xt-toggle]')) {
      new Xt.Toggle(element);
    }
    for (let el of element.querySelectorAll('[data-xt-toggle]')) {
      new Xt.Toggle(el);
    }
    // drop
    if (element.matches('[data-xt-drop]')) {
      new Xt.Drop(element);
    }
    for (let el of element.querySelectorAll('[data-xt-drop]')) {
      new Xt.Drop(el);
    }
    // overlay
    if (element.matches('[data-xt-overlay]')) {
      new Xt.Overlay(element);
    }
    for (let el of element.querySelectorAll('[data-xt-overlay]')) {
      new Xt.Overlay(el);
    }
    // slider
    if (element.matches('[data-xt-slider]')) {
      new Xt.Slider(element);
    }
    for (let el of element.querySelectorAll('[data-xt-slider]')) {
      new Xt.Slider(el);
    }
    // sticky
    if (element.matches('[data-xt-sticky]')) {
      new Xt.Sticky(element);
    }
    for (let el of element.querySelectorAll('[data-xt-sticky]')) {
      new Xt.Sticky(el);
    }
    // fade
    if (element.matches('[data-xt-fade]')) {
      new Xt.Fade(element);
    }
    for (let el of element.querySelectorAll('[data-xt-fade]')) {
      new Xt.Fade(el);
    }
    // ajax
    if (element.matches('[data-xt-ajax]')) {
      new Xt.Ajax(element);
    }
    for (let el of element.querySelectorAll('[data-xt-ajax]')) {
      new Xt.Ajax(el);
    }
    // btnMerge
    if (element.matches('a, button')) {
      Xt.btnMerge.init(element);
    }
    for (let el of Array.from(element.querySelectorAll('a, button')).filter(x => x.querySelectorAll('.btn').length !== 0)) {
      Xt.btnMerge.init(el);
    }
  }
};

/**
 * initObserve
 */

Xt.initObserve = function (added = document.documentElement) {
  for (let obj of Xt.observe) {
    let els = [];
    if (added.matches(obj.matches)) {
      els.push(added);
    }
    for (let el of added.querySelectorAll(obj.matches)) {
      els.push(el);
    }
    if (els.length) {
      for (let [i, el] of els.entries()) {
        obj.fnc(el, i, obj.matches);
      }
    }
  }
};

/**
 * observer
 */

Xt.observer = new MutationObserver(function (mutationsList) {
  for (let mutation of mutationsList) {
    if (mutation.type == 'childList') {
      for (let added of mutation.addedNodes) {
        if (added.nodeType === 1 && !added.classList.contains('xt-ignore')) {
          Xt.initObserve(added);
          Xt.initXt(added);
        }
      }
    }
  }
});


/**
 * document ready
 */

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    Xt.initObserve();
    Xt.initXt();
    Xt.observer.observe(document.documentElement, {
      characterData: false,
      attributes: false,
      childList: true,
      subtree: true
    });
  });
} else {
  requestAnimationFrame(function () {
    Xt.initObserve();
    Xt.initXt();
    Xt.observer.observe(document.documentElement, {
      characterData: false,
      attributes: false,
      childList: true,
      subtree: true
    });
  });
}

//////////////////////
// btnMerge
// pass .hover and .active classes to .btn inside
//////////////////////

Xt.btnMerge = {

  /**
   * init to pass .hover and .active to .btn inside Element
   * @param {Node|HTMLElement|EventTarget|Window} el Element
   */
  init: function (el) {
    if (!el.dataset.xtBtnMergeDone) {
      el.dataset.xtBtnMergeDone = 'true';
      el.removeEventListener('mouseenter', Xt.btnMerge.hoverOn);
      el.addEventListener('mouseenter', Xt.btnMerge.hoverOn);
      el.removeEventListener('mouseleave', Xt.btnMerge.hoverOff);
      el.addEventListener('mouseleave', Xt.btnMerge.hoverOff);
      el.removeEventListener('mousedown', Xt.btnMerge.activeOn);
      el.addEventListener('mousedown', Xt.btnMerge.activeOn);
      removeEventListener('mouseup', Xt.btnMerge.activeOff.bind(el));
      addEventListener('mouseup', Xt.btnMerge.activeOff.bind(el));
    }
  },

  /**
   * event hover on
   */
  hoverOn: function () {
    let els = this.querySelectorAll('.btn');
    for (let el of els) {
      el.classList.add('hover');
    }
  },

  /**
   * event hover off
   */
  hoverOff: function () {
    let els = this.querySelectorAll('.btn');
    for (let el of els) {
      el.classList.remove('hover');
    }
  },

  /**
   * event active on
   */
  activeOn: function () {
    let els = this.querySelectorAll('.btn');
    for (let el of els) {
      el.classList.add('active');
    }
  },

  /**
   * event active off
   */
  activeOff: function () {
    let els = this.querySelectorAll('.btn');
    for (let el of els) {
      el.classList.remove('active');
    }
  }

};

//////////////////////
// dataStorage
// map storage for HTML elements
//////////////////////

Xt.dataStorage = {

  /**
   * properties
   */
  _storage: new Map(),

  /**
   * put key/obj pair on element's map
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {String} key
   * @param {Object|Function} obj
   * @returns {Object|Function}
   */
  put: function (el, key, obj) {
    // new map if not already there
    if (!this._storage.has(el)) {
      this._storage.set(el, new Map());
    }
    // if already there return
    if (this._storage.get(el).get(key)) {
      return this._storage.get(el).get(key);
    }
    // else put
    this._storage.get(el).set(key, obj);
    return this._storage.get(el).get(key);
  },

  /**
   * get obj from key on element's map
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {String} key
   * @returns {Object|Function}
   */
  get: function (el, key) {
    // if no map return null
    if (!this._storage.get(el)) {
      return null;
    }
    // else get
    return this._storage.get(el).get(key);
  },

  /**
   * get all obj/key on element's map
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @returns {Object|Function}
   */
  getAll: function (el) {
    // if no map return null
    if (!this._storage.get(el)) {
      return null;
    }
    // else get
    return this._storage.get(el);
  },

  /**
   * has key on element's map
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {String} key
   * @returns {Boolean}
   */
  has: function (el, key) {
    // has
    return this._storage.get(el).has(key);
  },

  /**
   * remove element's map key
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {String} key
   * @returns {Boolean}
   */
  remove: function (el, key) {
    // remove
    let ret = this._storage.get(el).delete(key);
    if (!this._storage.get(el).size === false) {
      this._storage.delete(el);
    }
    return ret;
  }

};

//////////////////////
// scrollbar
// util to remember scrollbar state
//////////////////////

Xt.scrollbar = {

  /**
   * properties
   */
  currents: [],

  /**
   * get scrollbar currents
   * @returns {Array} Currents
   */
  get: function () {
    return Xt.scrollbar.currents;
  },

  /**
   * add scrollbar currents
   * @param {Node|HTMLElement|EventTarget|Window} el Elements to be deactivated
   */
  add: function (el) {
    Xt.scrollbar.currents.push(el);
  },

  /**
   * remove scrollbar currents
   * @param {Node|HTMLElement|EventTarget|Window} el Elements to be deactivated
   */
  remove: function (el) {
    Xt.scrollbar.currents = Xt.scrollbar.currents.filter(x => x !== el);
  }


};

//////////////////////
// focus
// util to remember focus on key or interactions events
//////////////////////

Xt.focus = {

  /**
   * properties
   */
  block: false,
  current: null,

  /**
   * enable focus change events
   */
  on: function () {
    // event key
    let focusChangeKeyHandler = Xt.dataStorage.put(document, 'focusChangeKeyHandler',
      Xt.focus.changeKey);
    document.removeEventListener('keyup', focusChangeKeyHandler);
    document.addEventListener('keyup', focusChangeKeyHandler);
    // event mouse
    let focusChangeOtherHandler = Xt.dataStorage.get(document, 'focusChangeOtherHandler');
    document.removeEventListener('mousedown', focusChangeOtherHandler);
    document.removeEventListener('touchstart', focusChangeOtherHandler);
    document.removeEventListener('pointerdown', focusChangeOtherHandler);
  },

  /**
   * disable focus change events
   */
  off: function () {
    // event
    let focusChangeKeyHandler = Xt.dataStorage.get(document, 'focusChangeKeyHandler');
    document.removeEventListener('keyup', focusChangeKeyHandler);
    // event mouse
    let focusChangeOtherHandler = Xt.dataStorage.put(document, 'focusChangeOtherHandler',
      Xt.focus.changeOther);
    document.addEventListener('mousedown', focusChangeOtherHandler);
    document.addEventListener('touchstart', focusChangeOtherHandler);
    document.addEventListener('pointerdown', focusChangeOtherHandler);
  },

  /**
   * focus change on key events
   * @param {Event} e Event
   */
  changeKey: function (e) {
    let code = e.keyCode ? e.keyCode : e.which;
    if (code === 9) {
      if (!Xt.focus.block) {
        // remember Xt.focus
        Xt.focus.current = document.activeElement;
      }
      if (!document.documentElement.classList.contains('xt-focus')) {
        // html.xt-focus
        document.documentElement.classList.add('xt-focus');
        // switch mode
        Xt.focus.off();
      }
    }
  },

  /**
   * focus change on other events
   * @param {Event} e Event
   */
  changeOther: function (e) {
    if (!Xt.focus.block) {
      // remember Xt.focus
      Xt.focus.current = e.target;
    }
    if (document.documentElement.classList.contains('xt-focus')) {
      // html.xt-focus
      document.documentElement.classList.remove('xt-focus');
      // switch mode
      Xt.focus.on();
    }
  }

};

Xt.focus.on();

//////////////////////
// focusLimit
// util to limit focus inside HTML elements
//////////////////////

Xt.focusLimit = {

  /**
   * activate focusLimit to an element
   * @param {Node|HTMLElement|EventTarget|Window} el Element
   */
  on: function (el) {
    // @FIX Xt.focus when clicking and not used tab before
    Xt.focus.current = Xt.focus.current ? Xt.focus.current : document.activeElement;
    // var
    let focusables = el.querySelectorAll(Xt.focusables);
    focusables = Array.from(focusables).filter(x => x.matches(':not([disabled]), :not([tabindex="-1"])')); // filter out parent
    if (focusables.length) {
      let first = focusables[0];
      let last = focusables[focusables.length - 1];
      // event
      let focusLimitHandler = Xt.dataStorage.put(document, 'focusLimitHandler',
        Xt.focusLimit.limit.bind(this).bind(this, focusables, first, last));
      document.removeEventListener('keyup', focusLimitHandler);
      document.addEventListener('keyup', focusLimitHandler);
    }
  },

  /**
   * deactivate focusLimit to an element
   */
  off: function () {
    // event
    let focusLimitHandler = Xt.dataStorage.get(document, 'focusLimitHandler');
    document.removeEventListener('keyup', focusLimitHandler);
  },

  /**
   * limit even on focus when activated
   * @param {NodeList|Array} focusables Focusables elements
   * @param {Node|HTMLElement|EventTarget|Window} first First focusable element
   * @param {Node|HTMLElement|EventTarget|Window} last Last focusable element
   * @param {Event} e Event
   */
  limit: function (focusables, first, last, e) {
    let code = e.keyCode ? e.keyCode : e.which;
    if (code === 9) {
      if (!focusables.includes(document.activeElement)) {
        if (e.shiftKey) {
          last.focus();
          e.preventDefault();
        } else {
          first.focus();
          e.preventDefault();
        }
      }
    }
  }

};

//////////////////////
// utils
//////////////////////

/**
 * Return translate values https://gist.github.com/aderaaij/a6b666bf756b2db1596b366da921755d
 * @param {Node|HTMLElement|EventTarget|Window} element Element to check target
 * @return {Array} Values [x, y]
 */
/*
USAGE: Xt.getTranslate(dragger)[0]; // for translateX
Xt.getTranslate = function (element) {
  let transArr = [];
  let style = getComputedStyle(element);
  let transform = style.transform;
  let mat = transform.match(/^matrix3d\((.+)\)$/);
  if (mat) {
    transArr.push(parseFloat(mat[1].split(', ')[13]));
  } else {
    mat = transform.match(/^matrix\((.+)\)$/);
    mat ? transArr.push(parseFloat(mat[1].split(', ')[4])) : transArr.push(0);
    mat ? transArr.push(parseFloat(mat[1].split(', ')[5])) : transArr.push(0);
  }
  return transArr;
};
*/
/**
 * Check if event target is inside elements
 * @param {Node|HTMLElement|EventTarget|Window} element Element to check target
 * @param {NodeList|Array} targets Elements to check inside
 * @return {Boolean}
 */
Xt.checkNested = function (element, targets) {
  let result = false;
  for (let t of targets) {
    if (element === t || t.contains(element)) {
      result = true;
    }
  }
  return result;
};

/**
 * Get scrollbar width of document
 * @param {Boolean} force Force recalc
 * @returns {Number} Scrollbar width
 */
Xt.scrollbarWidth = function (force = false) {
  if (Xt.scrollbarWidthVal === undefined) {
    let scrollbarWidthHandler = Xt.dataStorage.put(window, 'scrollbarWidthHandler',
      Xt.scrollbarWidth.bind(this, true));
    removeEventListener('resize', scrollbarWidthHandler);
    addEventListener('resize', scrollbarWidthHandler);
  }
  if (force || Xt.scrollbarWidthVal === undefined) {
    // add outer
    let outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.width = '100px';
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    document.body.appendChild(outer);
    let widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = 'scroll';
    // add inner
    let inner = document.createElement('div');
    inner.style.width = '100%';
    outer.appendChild(inner);
    let widthWithScroll = inner.offsetWidth;
    // remove
    outer.parentNode.removeChild(outer);
    // return
    Xt.scrollbarWidthVal = widthNoScroll - widthWithScroll;
  }
  return Xt.scrollbarWidthVal;
};

/**
 * Get unique id
 * @returns {String} Unique id
 */
Xt.getuniqueId = function () {
  Xt.uid = Xt.uid !== undefined ? Xt.uid : 0;
  return 'xt-' + (Xt.uid++);
};

/**
 * Get unique number
 * @returns {Number} Unique number
 */
Xt.getUniqueNum = function () {
  Xt.unumber = Xt.unumber !== undefined ? Xt.unumber : 0;
  return Xt.unumber++;
};

/**
 * Merge objects
 * @param {Array} arr Array of objects to merge
 * @returns {Object} Merged object
 */
Xt.merge = function (arr) {
  let final = {};
  for (let obj of arr) {
    if (obj) {
      for (let [key, value] of Object.entries(obj)) {
        if (typeof value === 'object'
          && !value.nodeName // not HTML element
          && value !== window) { // not window
          final[key] = Xt.merge([final[key], value]);
        } else {
          final[key] = value;
        }
      }
    }
  }
  return final;
};

/**
 * Make an array when element is only one
 * @param {Object|Array} el
 * @returns {Array}
 */
Xt.arrSingle = function (el) {
  if (!el) {
    return [];
  }
  if (el.length === undefined || el.tagName === 'FORM') {
    let arr = new Array(1);
    arr[0] = el;
    return arr;
  } else {
    return el;
  }
};

/**
 * Create HTML elements from html string
 * @param {String} str Html string (only 1 root html tag)
 * @return {Node|HTMLElement|EventTarget|Window} HTML elements
 */
Xt.createElement = function (str) {
  let div = document.createElement('div');
  div.innerHTML = str.trim();
  return div.firstChild;
};

/**
 * Query element's parents
 * @param {Node|HTMLElement|EventTarget|Window} el Child element
 * @param {String} query Query parents
 * @return {Array} Parents elements by query
 */
Xt.parents = function (el, query) {
  let parents = [];
  while (el = el.parentElement.closest(query)) {
    parents.push(el);
  }
  return parents;
};

/**
 * autoClose inside Element
 * @param {Node|HTMLElement|EventTarget|Window} el Element container
 */
Xt.autoClose = function (el) {
  let query = '[data-xt-namespace^="drop-xt-"]';
  for (let drop of el.querySelectorAll(query)) {
    drop.dispatchEvent(new CustomEvent('off.xt'));
  }
};

/**
 * get transition or animation time
 * @param {Node|HTMLElement|EventTarget|Window} el Element animating
 * @param {Number} timing Force duration in milliseconds
 * @returns {Number} Time in milliseconds
 */
Xt.animTime = function (el, timing = null) {
  if (timing || timing === 0) {
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
};

/**
 * execute function after transition or animation
 * @param {Node|HTMLElement|EventTarget|Window} el Element animating
 * @param {Function} func Function to execute after transition or animation
 * @param {Number} timing Force duration in milliseconds
 */
Xt.animTimeout = function (el, func, timing = null) {
  clearTimeout(parseFloat(el.dataset.xtAnimTimeout));
  el.dataset.xtAnimTimeout = setTimeout(func, timing || timing === 0 ? timing : Xt.animTime(el)).toString();
};

/**
 * clear animTimeout
 * @param {Node|HTMLElement|EventTarget|Window} el Element animating
 */
Xt.animTimeoutClear = function (el) {
  clearTimeout(parseFloat(el.dataset.xtAnimTimeout));
};

/**
 * Fix resize event multiple calls and adds delay on resize and scroll events
 * @param {Event} e Event
 * @param {Node|HTMLElement|EventTarget|Window} element Element to save timeout
 * @param {Function} func Function to execute
 */
Xt.eventDelay = function (e, element, func, prefix = null) {
  if (e.type === 'resize' || e.type === 'scroll') {
    let delay = Xt[e.type + 'Delay'];
    if (delay === false) {
      // func
      func();
      return false;
    }
    if (e.type === 'resize') {
      // multiple calls
      let windowWidth = window.innerWidth;
      let windowHeight = window.innerHeight;
      if (windowWidth === parseFloat(element.dataset.windowWidth) && windowHeight === parseFloat(element.dataset.windowHeight)) {
        return false;
      }
      element.dataset.windowWidth = windowWidth.toString();
      element.dataset.windowHeight = windowHeight.toString();
    }
    // delay
    clearTimeout(parseFloat(element.dataset['xt' + e.type + 'Timeout']));
    element.dataset['xt' + e.type + 'Timeout'] = setTimeout(function () {
      // func
      func();
    }, delay).toString();
  } else {
    // func
    func();
  }
};

/**
 * passive events
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
 */

Xt.passiveSupported = false;
try {
  let options = {
    get passive() {
      Xt.passiveSupported = true;
    }
  };
  addEventListener('test', options, options);
  removeEventListener('test', options, options);
} catch (err) {
  Xt.passiveSupported = false;
}

//////////////////////
// root
//////////////////////

// https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

/* USAGE:
height: 100vh;
height: calc(var(--vh, 1vh) * 100);
*/

function setVh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}
addEventListener('resize', setVh);
setVh();

// Math.nthroot
// https://stackoverflow.com/questions/7308627/javascript-calculate-the-nth-root-of-a-number

Math.nthroot = function (x, n) {
  return this.exp((1 / n) * this.log(x));
};

// save window width and height

addEventListener('focus', function () {
  for (let iframe of document.querySelectorAll('iframe')) {
    iframe.contentWindow.dispatchEvent(new CustomEvent('focus'));
  }
});

// pass focus and blur window events to iframes

addEventListener('focus', function () {
  for (let iframe of document.querySelectorAll('iframe')) {
    iframe.contentWindow.dispatchEvent(new CustomEvent('focus'));
  }
});

addEventListener('blur', function () {
  for (let iframe of document.querySelectorAll('iframe')) {
    iframe.contentWindow.dispatchEvent(new CustomEvent('blur'));
  }
});

//////////////////////
// export
//////////////////////

if (typeof define === 'function' && define.amd) {
  define(['xt'], Xt);
} else if (typeof exports === 'object') {
  module.exports = Xt;
}

global.Xt = Xt;
export default Xt;
