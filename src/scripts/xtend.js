/*! xtend v0.0.14 (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

import XtUtil from './xtend-utils.js';

(function (root, factory) {
  var pluginName = 'XtUtil';
  if (typeof define === 'function' && define.amd) {
    define([], factory(root));
  } else if (typeof exports === 'object') {
    module.exports = factory(root);
  } else {
    root[pluginName] = factory(root);
  }
})(typeof global !== "undefined" ? global : this.window || this.global, function (root) {

  'use strict';

  var window = root;

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
    var self = this;
    this.element = element;
    this.options = XtUtil.extend(defaults, options || {}); // js options
    this.options = XtUtil.extend(this.options, JSON.parse(this.element.getAttribute('data-xt-toggle')) || {}); // markup options
    // classes
    if (this.options.class) {
      this.options.classes.push(this.options.class);
    }
    // init
    this.setup();
    this.events();
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
    setup: function () {
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
        this.targets = XtUtil.arrSingle(document.querySelectorAll(options.targets));
      }
      // set namespace for next frame
      XtUtil.forEach(this.elements, function (element, i) {
        element.setAttribute('data-xt-namespace', self.namespace);
      });
    },

    /**
     * init
     */
    init: function () {
    },

    /**
     * events
     */
    events: function () {
      var self = this;
      var options = this.options;
      var on = options.on || 'click';
      var off = options.off || null;
      XtUtil.forEach(this.elements, function (element, i) {
        if (on) {
          element.addEventListener(on, function (e) {
            self.on(this);
          });
        }
        if (off) {
          element.addEventListener(off, function (e) {
            self.off(this);
          });
        }
      });
    },

    //////////////////////
    // Event Methods
    //////////////////////

    /**
     * getElements
     */
    getElements: function (elements, element, group) {
      return elements;
      /* @TODO groups
      var object = this;
      var settings = this.settings;
      var group = this.group;
      var $group = $(this.group);
      // $elements and $el
      if ($elements.is($group)) {
        return $g;
      } else if ($el.is('[data-group]')) {
        // with [data-group]
        var g = $el.attr('data-group');
        return $g.filter('[data-group="' + g + '"]');
      } else {
        if (settings.$targets.has($g)) {
          var index = object.getIndex($elements.not('[data-group]'), $el);
          return $g.not('[data-group]').eq(index);
        } else {
          return $el;
        }
      }
      */
    },

    /**
     * on
     */
    on: function (element) {
      var options = this.options;
      var index = XtUtil.getElementIndex(element);
      var elements = this.getElements(this.elements, element, this.group);
      if (!element.classList.contains('active')) {
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
    },

    /**
     * off
     */
    off: function (element) {
      var options = this.options;
      var index = XtUtil.getElementIndex(element);
      var elements = this.getElements(this.elements, element, this.group);
      if (element.classList.contains('active')) {
        XtUtil.forEach(elements, function (element, i) {
          element.classList.remove(...options.classes);
        });
        this.targets[index].classList.remove(...options.classes);
      }
    },

  };

  return Xt;

});
