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
function Xt(element, options) {
  var self = this;
  this.element = element;
  this.options = XtUtil.extend(defaults, options || {}); // js options
  this.options = XtUtil.extend(this.options, JSON.parse(this.element.getAttribute('data-xt-toggle')) || {}); // markup options
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
   * init
   */
  init: function () {
  },

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
      /*} else if ($group.attr('id')) {
        settings.uid = $group.attr('id');
      */
    } else {
      this.group = this.element;
      this.namespace = XtUtil.getUniqueID('xt', this.namespace);
    }
    this.namespace = this.namespace.split('#').join('');
    // elements
    if (options.elements) {
      this.elements = XtUtil.arrSingle(this.group.querySelectorAll(options.elements)); //.filter(':parents(.xt-ignore)');
    } else {
      this.elements = XtUtil.arrSingle(this.element);
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
    this.currents = [];
    XtUtil.requestAnimationFrame.call(window, function () {
      if (self.elements.length) {
        // pupulate currents and activate defaults.class
        XtUtil.forEach(self.elements, function (element, i) {
          if (element.classList.contains(defaults.class)) {
            element.classList.remove(...options.classes);
            self.currents.push(element);
            self.eventOn(element);
          }
        });
        // if currents < min
        var todo = options.min - self.currents.length;
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
    var on = options.on || 'click';
    var off = options.off || null;
    XtUtil.forEach(this.elements, function (element, i) {
      if (on) {
        element.addEventListener(on, function (e) {
          self.eventOn(this);
        });
      }
      if (off) {
        element.addEventListener(off, function (e) {
          self.eventOff(this);
        });
      }
    });
  },

  //////////////////////
  // Utils Methods
  //////////////////////

  /**
   * getElements
   */
  getElements: function (elements, element, group) {
    if (this.group === document) {
      // when using id for targets activate all elements
      return elements;
    } else {
      // normally activate only element
      return XtUtil.arrSingle(element);
    }
  },

  //////////////////////
  // Event Methods
  //////////////////////

  /**
   * on
   */
  eventOn: function (element) {
    var options = this.options;
    var index = XtUtil.getElementIndex(element);
    var elements = this.getElements(this.elements, element, this.group);
    if (!element.classList.contains(...defaults.classes)) {
      XtUtil.forEach(elements, function (element, i) {
        element.classList.add(...options.classes);
      });
      this.targets[index].classList.add(...options.classes);
    } else {
      XtUtil.forEach(elements, function (element, i) {
        element.classList.remove(...options.classes);
      });
      this.targets[index].classList.remove(...options.classes);
    }
    // off max or differents
    if (this.currents.length > options.max) {
      var first = this.currents[0];
      this.eventOff(first);
    }
  },

  /**
   * off
   */
  eventOff: function (element) {
    var options = this.options;
    var index = XtUtil.getElementIndex(element);
    var elements = this.getElements(this.elements, XtUtil.arrSingle(element), this.group);
    if (element.classList.contains(...defaults.classes)) {
      XtUtil.forEach(elements, function (element, i) {
        element.classList.remove(...options.classes);
      });
      this.targets[index].classList.remove(...options.classes);
    }
  },

};

//////////////////////
// Public APIs
//////////////////////

export default Xt;
