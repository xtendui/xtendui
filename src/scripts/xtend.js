/*! xtend v0.0.14 (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

import XtUtil from './xtend-utils.js';

(function (root, factory) {
  var pluginName = 'Xt';
  if (typeof define === 'function' && define.amd) {
    define([], factory(pluginName));
  } else if (typeof exports === 'object') {
    module.exports = factory(pluginName);
  } else {
    root[pluginName] = factory(pluginName);
  }
})(typeof global !== "undefined" ? global : this.window || this.global, function (root) {
  'use strict';

  //////////////////////
  // defaults
  //////////////////////

  var defaults = {
    classes: ['active'],
    someCustomOption: 'foo'
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
    this.element = element;
    this.options = XtUtil.extend(defaults, options || {}); // js options
    this.options = XtUtil.extend(this.options, JSON.parse(this.element.getAttribute('data-xt-toggle')) || {}); // markup options
    // options
    this.group = this.element;
    if (this.options.class) {
      this.options.classes.push(this.options.class);
    }
    // init
    this.scope();
    this.events();
  }

  //////////////////////
  // Methods
  //////////////////////

  Xt.prototype = {

    /**
     * scope
     */
    scope: function () {
      var options = this.options;
      // els
      if (options.elements) {
        if (options.elements.indexOf('#') !== -1) {
          this.elements = document.querySelectorAll(options.elements); //.filter(':parents(.xt-ignore)');
        } else {
          this.elements = this.group.querySelectorAll(options.elements); //.filter(':parents(.xt-ignore)');
        }
      }
      if (!this.elements) {
        this.elements = this.group;
      }
      // trgs
      if (options.targets) {
        this.targets = document.querySelectorAll(options.targets);
      }
      // 1 object array
      if(!this.elements.length) {
        this.elements = [this.elements];
      }
      if(!this.targets.length) {
        this.targets = [this.elements];
      }
    },

    /**
     * Init
     */
    init: function () {
    },

    /**
     * Events
     */
    events: function () {
      var self = this;
      var options = this.options;
      var on = options.on || 'click';
      var off = options.off || null;
      XtUtil.forEach(this.elements, function (element, i) {
        if (on) {
          element.addEventListener(on, function (e) {
            var index = XtUtil.getElementIndex(this);
            if (!this.classList.contains('active')) {
              this.classList.add(...options.classes);
              self.targets[index].classList.add(...options.classes);
            } else {
              this.classList.remove(...options.classes);
              self.targets[index].classList.remove(...options.classes);
            }
          });
        }
        if (off) {
          element.addEventListener(off, function (e) {
            var index = XtUtil.getElementIndex(this);
            if (this.classList.contains('active')) {
              this.classList.remove(...options.classes);
              self.targets[index].classList.remove(...options.classes);
            }
          });
        }
      });
    },

    /**
     * doSomething
     */
    doSomething: function () {
      console.log(this.options.someCustomOption);
    },

  };

  return Xt;

});
