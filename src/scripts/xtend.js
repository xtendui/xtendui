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
 * @param {Object} options User options
 * @constructor
 */
function Xt(object, options) {
  this.object = object;
  this.options = XtUtil.extend(defaults, options || {}); // js options
  this.options = XtUtil.extend(this.options, JSON.parse(this.object.getAttribute('data-xt-toggle')) || {}); // markup options
  // classes
  if (this.options.class) {
    this.options.classes.push(this.options.class);
  }
  // init
  this.initSetup();
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
   * setup
   */
  initSetup: function () {
    var self = this;
    var options = this.options;
    // group and namespace
    this.namespace = options.targets.toString() + '-' + options.classes.toString();
    if (options.targets && options.targets.indexOf('#') !== -1) {
      this.group = document;
      options.max = Infinity;
    } else {
      this.group = this.object;
      this.namespace = XtUtil.getUniqueID('xt', this.namespace);
    }
    this.namespace = this.namespace.split('-').join('_');
    this.namespace = this.namespace.split('#').join('');
    this.namespace = this.namespace.split('.').join('');
    // current based on namespace, so shared between Xt objects
    if (!window[this.namespace]) {
      window[this.namespace] = [];
    }
    // elements
    if (options.elements) {
      this.elements = XtUtil.arrSingle(this.group.querySelectorAll(options.elements)); //.filter(':parents(.xt-ignore)');
    } else {
      this.elements = XtUtil.arrSingle(this.object);
      // on next frame set all elements querying the namespace
      XtUtil.requestAnimationFrame.call(window, function () {
        self.elements = XtUtil.arrSingle(document.querySelectorAll('[data-xt-namespace=' + self.namespace + ']'));
      });
    }
    // targets
    if (options.targets) {
      this.targets = XtUtil.arrSingle(this.group.querySelectorAll(options.targets));
    }
    // set namespace for next frame
    if (this.elements.length) {
      XtUtil.forEach(this.elements, function (element, i) {
        element.setAttribute('data-xt-namespace', self.namespace);
      });
    }
    // currents
    XtUtil.requestAnimationFrame.call(window, function () {
      if (self.elements.length) {
        // activate defaults.class
        XtUtil.forEach(self.elements, function (element, i) {
          if (element.classList.contains(defaults.class)) {
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
   * events
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
   * choose which elements to activate/deactivate
   */
  getElements: function (elements, element, group) {
    if (this.group === document) {
      // when group is document choose all elements
      return elements;
    } else if(this.group === this.object) {
      // when group is Xt object choose only element
      return XtUtil.arrSingle(element);
    }
  },

  /**
   * get currents based on namespace, so shared between Xt objects
   */

  getCurrents: function() {
    return window[this.namespace];
  },

  /**
   * add current based on namespace, so shared between Xt objects
   */

  addCurrent: function(element) {
    window[this.namespace].push(element);
  },

  /**
   * remove currents based on namespace, so shared between Xt objects
   */

  removeCurrent: function(element) {
    window[this.namespace] = window[this.namespace].filter(function (current) {
      return current !== element;
    });
  },

  //////////////////////
  // Event Methods
  //////////////////////

  /**
   * on
   */
  eventOn: function (element) {
    var self = this;
    var options = this.options;
    // vars
    var index = XtUtil.getElementIndex(element);
    var elements = this.getElements(this.elements, element, this.group);
    // activate or deactivate
    if (!element.classList.contains(...defaults.classes)) {
      XtUtil.forEach(elements, function (element, i) {
        element.classList.add(...options.classes);
        self.addCurrent(element);
      });
      this.targets[index].classList.add(...options.classes);
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
   * off
   */
  eventOff: function (element) {
    var self = this;
    var options = this.options;
    // vars
    var index = XtUtil.getElementIndex(element);
    var elements = this.getElements(this.elements, XtUtil.arrSingle(element), this.group);
    // if currents < min
    var todo = options.min - this.getCurrents().length;
    if (!todo) {
      return;
    }
    // deactivate
    if (element.classList.contains(...defaults.classes)) {
      XtUtil.forEach(elements, function (element, i) {
        element.classList.remove(...options.classes);
        self.removeCurrent(element);
      });
      this.targets[index].classList.remove(...options.classes);
    }
  },

};

//////////////////////
// Public APIs
//////////////////////

export default Xt;
