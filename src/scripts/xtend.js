/*! xtend v0.0.14 (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

'use strict';

import XtUtil from './xtend-utils';

//////////////////////
// defaults
//////////////////////

var defaults = {
  classes: ['active'],
  on: 'click',
  min: 0,
  max: 1,
};

//////////////////////
// Constructor
//////////////////////

/**
 * Plugin Object
 * @param {Element} object Base element
 * @param {Object} options User options
 * @constructor
 */
function Xt(object, jsOptions) {
  this.object = object;
  // js options
  this.options = XtUtil.extend(defaults, jsOptions || {});
  // markup options
  var markupOptions = this.object.getAttribute('data-xt-toggle');
  this.options = XtUtil.extend(this.options, markupOptions ? JSON.parse(markupOptions) : {});
  // classes
  if (this.options.class) {
    this.options.classes = [...this.options.classes, ...this.options.class.split(' ')];
  }
  // init
  this.initSetup();
  this.initScope();
  this.initEvents();
}

//////////////////////
// Methods
//////////////////////

Xt.prototype = {

  //////////////////////
  // Init Methods
  //////////////////////

  /**
   * setup namespace, group and options
   */
  initSetup: function () {
    var options = this.options;
    // setup (based on xtend mode)
    if (options.targets) {
      if (options.targets.indexOf('#') !== -1) {
        // xtend document mode
        this.group = document;
        options.max = Infinity;
        this.namespace = options.targets.toString() + '-' + options.classes.toString();
      } else {
        // xtend unique mode
        this.group = this.object;
        this.namespace = XtUtil.getUniqueID('xt', options.targets.toString() + '-' + options.classes.toString());
      }
    } else {
      this.group = this.object;
      this.namespace = XtUtil.getUniqueID('xt', options.classes.toString());
    }
    // final namespace
    this.namespace = this.namespace.replace(/\W+/g, '');
    // currents array based on namespace (so shared between Xt objects)
    if (!this.getCurrents()) {
      this.setCurrents([]);
    }
  },

  /**
   * init elements, targets and currents
   */
  initScope: function () {
    var self = this;
    var options = this.options;
    // elements
    if (options.elements) {
      this.elements = XtUtil.arrSingle(this.group.querySelectorAll(options.elements)); //.filter(':parents(.xt-ignore)');
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
      var arr = Array.from(this.group.querySelectorAll(options.targets));
      arr = arr.filter(function (el) {
        // filter out nested options.targets
        return !XtUtil.parents(el, options.targets).length;
      });
      this.targets = XtUtil.arrSingle(arr);
    }
    // @FIX set namespace for next frame
    XtUtil.forEach(this.elements, function (element, i) {
      element.setAttribute('data-xt-namespace', self.namespace);
    });
    // currents
    XtUtil.requestAnimationFrame.call(window, function () {
      if (self.elements.length) {
        // activate defaults.class
        XtUtil.forEach(self.elements, function (element, i) {
          if (element.classList.contains(...defaults.classes)) {
            element.classList.remove(...options.classes);
            self.setCurrents(element);
            self.eventOn(element);
          }
        });
        // if currents < min
        var todo = options.min - self.getCurrents().length;
        if (todo) {
          for (var i = 0; i < todo; i++) {
            self.eventOn(self.elements[i]);
          }
        }
      }
    });
  },

  /**
   * init events
   */
  initEvents: function () {
    var self = this;
    var options = this.options;
    // on and off
    XtUtil.forEach(this.elements, function (element, i) {
      if (options.on) {
        element.addEventListener(options.on, function (e) {
          self.eventOn(this);
        });
      }
      if (options.off) {
        element.addEventListener(options.off, function (e) {
          self.eventOff(this);
        });
      }
    });
  },

  //////////////////////
  // Utils Methods
  //////////////////////

  /**
   * choose which elements to activate/deactivate (based on xtend mode)
   * @param {Array} elements
   * @param {Element} element
   * @param {Element} group
   * @returns {Object}
   */
  getElements: function (element) {
    if (!this.elements.length) {
      return {all: null, single: null};
    }
    if (this.group === document) {
      // when group is document choose all elements
      return {all: this.elements, single: this.elements};
    }
    // when group is Xt object choose element by group
    var g = element.getAttribute('data-group');
    if (g) {
      // all data-group elements if data-group
      var gElements = Array.from(this.elements).filter(function (el) {
        return el.getAttribute('data-group') === g;
      });
      var final = XtUtil.arrSingle(gElements);
      return {all: final, single: final[0]};
    } else {
      // element if not data-group
      var final = element;
      return {all: XtUtil.arrSingle(final), single: final};
    }
  },

  /**
   * choose which targets to activate/deactivate (based on xtend mode)
   * @param {Array} targets
   * @param {Element} element
   * @param {Element} group
   * @returns {Array}
   */
  getTargets: function (element) {
    if (!this.targets.length) {
      return null;
    }
    if (this.group === document) {
      // when group is document choose all targets
      return this.targets;
    }
    // when group is Xt object choose only target by group
    var g = element.getAttribute('data-group');
    var gElements = Array.from(this.elements).filter(function (el) {
      return el.getAttribute('data-group') === g;
    });
    var gTargets = Array.from(this.targets).filter(function (el) {
      return el.getAttribute('data-group') === g;
    });
    var final;
    if (g) {
      // all targets if data-group
      final = gTargets;
    } else {
      // targets by index if not data-group
      var index = gElements.findIndex(x => x === element);
      final = gTargets[index];
    }
    return XtUtil.arrSingle(final);
  },

  /**
   * get currents based on namespace (so shared between Xt objects)
   * @returns {Element}
   */

  getCurrents: function () {
    return XtUtil.currents[this.namespace];
  },

  /**
   * set currents based on namespace (so shared between Xt objects)
   * @param {Array} arr
   */

  setCurrents: function (arr) {
    XtUtil.currents[this.namespace] = arr;
  },

  /**
   * add current based on namespace (so shared between Xt objects)
   * @param {Element} element To be added
   */

  addCurrent: function (element) {
    var arr = XtUtil.currents[this.namespace];
    arr.push(element);
  },

  /**
   * remove currents based on namespace (so shared between Xt objects)
   * @param {Element} element To be removed
   */

  removeCurrent: function (element) {
    XtUtil.currents[this.namespace] = XtUtil.currents[this.namespace].filter(function (el) {
      return el !== element;
    });
  },

  //////////////////////
  // Event Methods
  //////////////////////

  /**
   * element activation
   * @param {Element} element To be activated
   */
  eventOn: function (element) {
    var options = this.options;
    // activate or deactivate
    if (!element.classList.contains(...defaults.classes)) {
      var fElements = this.getElements(element);
      this.addCurrent(fElements.single);
      XtUtil.forEach(fElements.all, function (el, i) {
        el.classList.add(...options.classes);
      });
      var targets = this.getTargets(element);
      XtUtil.forEach(targets, function (el, i) {
        el.classList.add(...options.classes);
      });
    } else {
      this.eventOff(element);
    }
    // if currents > max
    var currents = this.getCurrents();
    if (currents.length > options.max) {
      this.eventOff(currents[0]);
    }
  },

  /**
   * element deactivation
   * @param {Element} element To be deactivated
   */
  eventOff: function (element) {
    var options = this.options;
    // if currents < min
    var todo = options.min - this.getCurrents().length;
    if (!todo) {
      return;
    }
    // deactivate
    if (element.classList.contains(...defaults.classes)) {
      var fElements = this.getElements(element);
      this.removeCurrent(fElements.single);
      XtUtil.forEach(fElements.all, function (el, i) {
        el.classList.remove(...options.classes);
      });
      var targets = this.getTargets(element);
      XtUtil.forEach(targets, function (el, i) {
        el.classList.remove(...options.classes);
      });
    }
  },

};

//////////////////////
// Public APIs
//////////////////////

export default Xt;
