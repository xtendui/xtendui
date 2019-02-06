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
Xt.components = [
  {'name': 'xt-core', 'class': Xt.Core},
  {'name': 'xt-toggle', 'class': Xt.Toggle},
  {'name': 'xt-drop', 'class': Xt.Drop},
  {'name': 'xt-overlay', 'class': Xt.Overlay},
  {'name': 'xt-slider', 'class': Xt.Slider},
  {'name': 'xt-sticky', 'class': Xt.Sticky},
  {'name': 'xt-fade', 'class': Xt.Fade},
  {'name': 'xt-ajax', 'class': Xt.Ajax}
];

//////////////////////
// set and get
//////////////////////

/**
 * set component to element
 * @param {Node|HTMLElement|EventTarget|Window} object Component's object
 * @param {String} name Component's name
 * @param {Object} self Component' self
 */
Xt.set = function (object, name, self) {
  Xt.dataStorage.put(object, name, self);
};

/**
 * get component from element
 * @param {Node|HTMLElement|EventTarget|Window} object Component's object
 * @param {String} name Component name
 */
Xt.get = function (object, name) {
  return Xt.dataStorage.get(object, name);
};

/**
 * get component from element
 * @param {Node|HTMLElement|EventTarget|Window} object Component's object
 * @param {String} name Component name
 */
Xt.remove = function (object, name) {
  return Xt.dataStorage.remove(object, name);
};

//////////////////////
// init
//////////////////////

/**
 * init component
 */
Xt.init = function (added = document.documentElement) {
  added = Xt.arrSingle(added);
  for (let element of added) {
    // components
    for (let component of Xt.components) {
      if (element.matches('[data-' + component.name + ']')) {
        new component.class(element);
      }
      for (let el of element.querySelectorAll('[data-' + component.name + ']')) {
        new component.class(el);
      }
    }
    // btnMerge
    if (element.matches('a, button') && Array.from(element).filter(x => x.querySelectorAll('.btn').length !== 0)) {
      Xt.btnMerge.init(element);
    }
    for (let el of Array.from(element.querySelectorAll('a, button')).filter(x => x.querySelectorAll('.btn').length !== 0)) {
      Xt.btnMerge.init(el);
    }
  }
};

/**
 * destroy component
 */
Xt.destroy = function (removed = document.documentElement) {
  removed = Xt.arrSingle(removed);
  for (let element of removed) {
    // components
    for (let component of Xt.components) {
      if (element.matches('[data-' + component.name + '-done]')) {
        let self = Xt.get(element, component.name);
        if (self) {
          self.destroy();
        }
      }
      for (let el of element.querySelectorAll('[data-' + component.name + '-done]')) {
        let self = Xt.get(el, component.name);
        if (self) {
          self.destroy();
        }
      }
    }
    // btnMerge
    if (element.matches('a, button') && Array.from(element).filter(x => x.querySelectorAll('.btn').length !== 0)) {
      Xt.btnMerge.destroy(element);
    }
    for (let el of Array.from(element.querySelectorAll('a, button')).filter(x => x.querySelectorAll('.btn').length !== 0)) {
      Xt.btnMerge.destroy(el);
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
    if (mutation.type === 'childList') {
      // removed
      for (let removed of mutation.removedNodes) {
        if (removed.nodeType === 1 && !removed.classList.contains('xt-ignore')) {
          Xt.destroy(removed);
        }
      }
      // added
      for (let added of mutation.addedNodes) {
        if (added.nodeType === 1 && !added.classList.contains('xt-ignore')) {
          Xt.init(added);
          Xt.initObserve(added);
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
    Xt.init();
    Xt.initObserve();
    Xt.observer.observe(document.documentElement, {
      characterData: false,
      attributes: false,
      childList: true,
      subtree: true
    });
  });
} else {
  requestAnimationFrame(function () {
    Xt.init();
    Xt.initObserve();
    Xt.observer.observe(document.documentElement, {
      characterData: false,
      attributes: false,
      childList: true,
      subtree: true
    });
  });
}

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
    // return
    let getEl = this._storage.get(el);
    let getKey = getEl.get(key);
    if (getKey) {
      return getKey;
    }
    // put
    getEl.set(key, obj);
    return getEl.get(key);
  },

  /**
   * get obj from key on element's map
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {String} key
   * @returns {Object|Function}
   */
  get: function (el, key) {
    let getEl = this._storage.get(el);
    // if no map return null
    if (!getEl) {
      return null;
    }
    // get
    return getEl.get(key);
  },

  /**
   * get all obj/key on element's map
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @returns {Object|Function}
   */
  getAll: function (el) {
    let getEl = this._storage.get(el);
    // if no map return null
    if (!getEl) {
      return null;
    }
    // get all
    return getEl;
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
    let getEl = this._storage.get(el);
    // if no map return null
    if (!getEl) {
      return null;
    }
    // remove
    let ret = getEl.delete(key);
    if (!getEl.size === false) {
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
    let focusChangeKeyHandler = Xt.dataStorage.put(document, 'keyup.focus',
      Xt.focus.changeKey);
    document.addEventListener('keyup', focusChangeKeyHandler);
    // event mouse
    let focusChangeOtherHandler = Xt.dataStorage.get(document, 'mousedown touchstart pointerdown.focus');
    document.removeEventListener('mousedown', focusChangeOtherHandler);
    document.removeEventListener('touchstart', focusChangeOtherHandler);
    document.removeEventListener('pointerdown', focusChangeOtherHandler);
  },

  /**
   * disable focus change events
   */
  off: function () {
    // event
    let focusChangeKeyHandler = Xt.dataStorage.get(document, 'keyup.focus');
    document.removeEventListener('keyup', focusChangeKeyHandler);
    // event mouse
    let focusChangeOtherHandler = Xt.dataStorage.put(document, 'mousedown touchstart pointerdown.focus',
      Xt.focus.changeOther);
    document.addEventListener('mousedown', focusChangeOtherHandler);
    document.addEventListener('touchstart', focusChangeOtherHandler, Xt.passiveSupported ? {passive: true} : false);
    document.addEventListener('pointerdown', focusChangeOtherHandler, Xt.passiveSupported ? {passive: true} : false);
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
      let focusLimitHandler = Xt.dataStorage.put(document, 'keyup.focusLimit',
        Xt.focusLimit.limit.bind(this).bind(this, focusables, first, last));
      document.addEventListener('keyup', focusLimitHandler);
    }
  },

  /**
   * deactivate focusLimit to an element
   */
  off: function () {
    // event
    let focusLimitHandler = Xt.dataStorage.get(document, 'keyup.focusLimit');
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
      el.addEventListener('mouseenter', Xt.btnMerge.hoverOn);
      el.addEventListener('mouseleave', Xt.btnMerge.hoverOff);
      el.addEventListener('mousedown', Xt.btnMerge.activeOn);
      addEventListener('mouseup', Xt.btnMerge.activeOff.bind(el));
    }
  },

  /**
   * destroy
   * @param {Node|HTMLElement|EventTarget|Window} el Element
   */
  destroy: function (el) {
    if (el.dataset.xtBtnMergeDone) {
      delete el.dataset.xtBtnMergeDone;
      el.removeEventListener('mouseenter', Xt.btnMerge.hoverOn);
      el.removeEventListener('mouseleave', Xt.btnMerge.hoverOff);
      el.removeEventListener('mousedown', Xt.btnMerge.activeOn);
      removeEventListener('mouseup', Xt.btnMerge.activeOff.bind(el));
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
    let scrollbarWidthHandler = Xt.dataStorage.put(window, 'resize.scrollbar',
      Xt.scrollbarWidth.bind(this, true));
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
 * @param {String} prefix Timeout prefix
 */
Xt.eventDelay = function (e, element, func, prefix = '') {
  if (e.type === 'resize' || e.type === 'scroll') {
    let delay = Xt[e.type + 'Delay'];
    if (delay === false) {
      // func
      func(e);
      return false;
    }
    if (e.type === 'resize') {
      // multiple calls
      let windowWidth = window.innerWidth;
      let windowHeight = window.innerHeight;
      if (windowWidth === parseFloat(element.dataset['windowWidth' + prefix])
        && windowHeight === parseFloat(element.dataset['windowHeight' + prefix])) {
        return false;
      }
      element.dataset['windowWidth' + prefix] = windowWidth.toString();
      element.dataset['windowHeight' + prefix] = windowHeight.toString();
    }
    // delay
    clearTimeout(parseFloat(element.dataset['xt' + e.type + prefix + 'Timeout']));
    element.dataset['xt' + e.type + prefix + 'Timeout'] = setTimeout(function () {
      // func
      func(e);
    }, delay).toString();
  } else {
    // func
    func(e);
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
// root utils
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

// Math.nthroot
// https://stackoverflow.com/questions/7308627/javascript-calculate-the-nth-root-of-a-number

Math.nthroot = function (x, n) {
  return this.exp((1 / n) * this.log(x));
};

// prevent scroll on popstate

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

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
