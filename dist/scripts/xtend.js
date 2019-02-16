(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Xt = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _xtend = _interopRequireDefault(require("./xtend"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//////////////////////
// Core
//////////////////////
var Core =
/*#__PURE__*/
function () {
  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsJs User options
   * @constructor
   */
  function Core(object) {
    var optionsJs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Core);

    var self = this;
    self.object = object;
    self.optionsJs = optionsJs;
    self.componentName = self.constructor.componentName; // init

    self.init(object, optionsJs);
  } //////////////////////
  // init
  //////////////////////

  /**
   * init
   */


  _createClass(Core, [{
    key: "init",
    value: function init() {
      var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var optionsJs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var self = this;
      self.object = object || self.object;
      self.optionsJs = optionsJs || self.optionsJs; // var

      self.classes = [];
      self.classesIn = [];
      self.classesOut = [];
      self.elements = [];
      self.targets = [];
      self.currentIndex = null;
      self.initialCurrents = [];
      self.detail = {};
      self.disabled = false;
      self.detail.queueOn = [];
      self.detail.queueOff = [];
      self.detail.inverseDirection = false;
      self.detail.autoPaused = false;
      self.destroyElements = [document, window, self.object]; // destroy if already done

      if (self.object.getAttribute('data-' + self.componentName + '-done')) {
        self.destroy();
      } // setup


      self.object.setAttribute('data-' + self.componentName + '-done', 'true'); // set component to element

      _xtend.default.set(self.object, self.componentName, self); // init


      self.initVars();
      self.initSetup();
      self.initScope();
      self.initCurrents();
      self.initCheck();
      self.eventCheck();
      self.initEvents();
      self.initAria();
    }
    /**
     * init vars
     */

  }, {
    key: "initVars",
    value: function initVars() {
      var self = this; // option

      self.optionsDefault = {
        "classIn": "in",
        "classOut": "out",
        "instant": false,
        "autoClose": false,
        "onBlock": false,
        "offBlock": false,
        "loop": true,
        "jump": false,
        "delayOn": false,
        "delayOff": false,
        "durationOn": false,
        "durationOff": false,
        "wheel": {
          "selector": false,
          "block": 500
        },
        "keyboard": {
          "selector": false
        },
        "auto": {
          "time": false,
          "step": 1,
          "initial": true,
          "loop": true,
          "inverse": false,
          "pause": false
        },
        "aria": {
          "tabindex": true,
          "controls": true,
          "labelledby": true
        }
      };
      self.optionsDefault = _xtend.default.merge([self.optionsDefault, self.constructor.optionsDefault]); // js options

      self.options = _xtend.default.merge([self.optionsDefault, self.optionsJs]); // markup options

      var markupOptions = self.object.getAttribute('data-' + self.componentName);
      self.options = _xtend.default.merge([self.options, markupOptions ? JSON.parse(markupOptions) : {}]); // classes

      if (self.classes) {
        self.classes = _toConsumableArray(self.options.class.split(' '));
      }

      if (self.classesIn) {
        self.classesIn = _toConsumableArray(self.options.classIn.split(' '));
      }

      if (self.classesOut) {
        self.classesOut = _toConsumableArray(self.options.classOut.split(' '));
      }
    }
    /**
     * init setup
     */

  }, {
    key: "initSetup",
    value: function initSetup() {
      var self = this;
      var options = self.options; // setup (based on xtend mode)

      if (options.targets && options.targets.indexOf('#') !== -1) {
        // xtend all mode
        self.mode = 'unique';
        self.container = document.documentElement;
        options.max = Infinity;
        self.namespace = self.componentName + '-' + options.targets.toString() + '-' + self.classes.toString();
      } else {
        // xtend unique mode
        self.mode = 'multiple';
        self.container = self.object;
        self.container.dataset.uniqueId = self.container.dataset.uniqueId ? self.container.dataset.uniqueId : _xtend.default.getuniqueId();
        self.namespace = self.componentName + '-' + self.container.dataset.uniqueId;
      } // final namespace


      self.namespace = self.namespace.replace(/^[^a-z]+|[^\w:.-]+/gi, ''); // currents array based on namespace (so shared between Xt objects)

      self.setCurrents([]);
    }
    /**
     * init elements, targets and currents
     */

  }, {
    key: "initScope",
    value: function initScope() {
      var self = this; // elements

      self.initScopeElements(); // targets

      self.initScopeTargets();
    }
    /**
     * init elements
     */

  }, {
    key: "initScopeElements",
    value: function initScopeElements() {
      var self = this;
      var options = self.options; // elements

      if (options.elements) {
        var _self$destroyElements;

        var arr = Array.from(_xtend.default.arrSingle(self.container.querySelectorAll(options.elements)));
        arr = arr.filter(function (x) {
          return !x.classList.contains('xt-clone');
        }); // filter out clone

        arr = arr.filter(function (x) {
          return !x.getAttribute('data-xt-nav');
        }); // filter out nav

        self.elements = arr;

        (_self$destroyElements = self.destroyElements).push.apply(_self$destroyElements, _toConsumableArray(self.elements));
      }

      if (!self.elements.length) {
        self.elements = _xtend.default.arrSingle(self.object); // @FIX set namespace for next frame

        requestAnimationFrame(function () {
          var _self$destroyElements2;

          var arr = Array.from(_xtend.default.arrSingle(document.querySelectorAll('[data-xt-namespace=' + self.namespace + ']')));
          arr = arr.filter(function (x) {
            return !x.classList.contains('xt-clone');
          }); // filter out clone

          arr = arr.filter(function (x) {
            return !x.getAttribute('data-xt-nav');
          }); // filter out nav

          self.elements = arr;

          (_self$destroyElements2 = self.destroyElements).push.apply(_self$destroyElements2, _toConsumableArray(self.elements));
        });
      }
    }
    /**
     * init targets
     */

  }, {
    key: "initScopeTargets",
    value: function initScopeTargets() {
      var self = this;
      var options = self.options; // targets

      if (options.targets) {
        var _self$destroyElements3;

        var arr = Array.from(self.container.querySelectorAll(options.targets));
        arr = arr.filter(function (x) {
          return !_xtend.default.parents(x, options.targets).length;
        }); // filter out parent

        arr = arr.filter(function (x) {
          return !x.classList.contains('xt-clone');
        }); // filter out clone

        self.targets = arr;

        (_self$destroyElements3 = self.destroyElements).push.apply(_self$destroyElements3, _toConsumableArray(self.targets));
      }
    }
    /**
     * init currents
     */

  }, {
    key: "initCurrents",
    value: function initCurrents() {
      var self = this;
      var options = self.options; // initial

      self.initial = true; // @FIX set namespace for next frame

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = self.elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var el = _step.value;
          el.dataset.xtNamespace = self.namespace;
        } // automatic initial currents

      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      cancelAnimationFrame(parseFloat(self.object.dataset.xtCurrentsFrame));
      self.object.dataset.xtCurrentsFrame = requestAnimationFrame(function () {
        var elements = self.getElementsSingle();

        if (elements.length) {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = elements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var element = _step2.value;
              // remove activations
              var found = self.initReset(element); // found

              if (found) {
                // initial
                self.initial = true; // activate

                self.eventOn(element, true);
              } else {
                // initial
                self.initial = false;
              }
            } // if currents < min

          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          var todo = options.min - self.getCurrents().length;

          if (todo > 0) {
            // initial
            self.initial = true; // activate

            for (var i = 0; i < todo; i++) {
              self.eventOn(self.elements[i], true);
            }
          } else {
            // initial
            self.initial = false; // auto

            if (options.auto && options.auto.initial) {
              self.eventAutoStart();
            }
          }

          self.initialCurrents = self.getCurrents();
        }
      }).toString();
    }
    /**
     * init reset activation
     * @param {Node|HTMLElement|EventTarget|Window} element Element to check and reset
     * @returns {Boolean} if element was activated
     */

  }, {
    key: "initReset",
    value: function initReset(element) {
      var self = this;
      var options = self.options;
      var found = false; // elements

      var group = element.getAttribute('data-xt-group');

      if (group) {
        var groupElements = Array.from(self.elements).filter(function (x) {
          return x.getAttribute('data-xt-group') === group;
        });
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = groupElements[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var el = _step3.value;

            if (el.classList.contains(self.classes[0])) {
              var _el$classList;

              (_el$classList = el.classList).remove.apply(_el$classList, _toConsumableArray(self.classes));

              found = true;
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      } else {
        if (element.classList.contains(self.classes[0])) {
          var _element$classList;

          (_element$classList = element.classList).remove.apply(_element$classList, _toConsumableArray(self.classes));

          found = true;
        }
      } // targets


      var targets = self.getTargets(element);
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = targets[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var tr = _step4.value;

          if (tr.classList.contains(self.classes[0])) {
            var _tr$classList;

            (_tr$classList = tr.classList).remove.apply(_tr$classList, _toConsumableArray(self.classes));

            found = true;
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      return found;
    }
    /**
     * init aria
     */

  }, {
    key: "initAria",
    value: function initAria() {
      var self = this;
      var options = self.options; // aria

      if (options.aria) {
        if (self.targets.length) {
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = self.elements[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var _el = _step5.value;

              var _ariaEls = self.getInside(_el, options.ariaControls);

              var _ariaEl = _ariaEls.length ? _ariaEls[0] : _el; // id


              if (options.aria === true || options.aria.labelledby || options.aria.controls) {
                var id = _ariaEl.getAttribute('id');

                if (!id) {
                  _ariaEl.setAttribute('id', _xtend.default.getuniqueId());
                }
              } // selected


              _ariaEl.setAttribute('aria-selected', 'false');
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }

          var _iteratorNormalCompletion6 = true;
          var _didIteratorError6 = false;
          var _iteratorError6 = undefined;

          try {
            for (var _iterator6 = self.targets[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
              var _tr = _step6.value;
              var els = self.getElementsFromTarget(_tr); // expanded

              var role = _tr.getAttribute('role');

              if (role === 'tabpanel' || role === 'listbox' || role === 'dialog') {
                _tr.setAttribute('aria-expanded', 'false');
              } // tabindex


              if (options.aria === true || options.aria.tabindex) {
                var focusables = _tr.querySelectorAll(_xtend.default.focusables);

                var _iteratorNormalCompletion9 = true;
                var _didIteratorError9 = false;
                var _iteratorError9 = undefined;

                try {
                  for (var _iterator9 = focusables[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                    var focusable = _step9.value;
                    focusable.setAttribute('tabindex', '-1');
                  }
                } catch (err) {
                  _didIteratorError9 = true;
                  _iteratorError9 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
                      _iterator9.return();
                    }
                  } finally {
                    if (_didIteratorError9) {
                      throw _iteratorError9;
                    }
                  }
                }
              } // id


              if (options.aria === true || options.aria.labelledby || options.aria.controls) {
                var _id = _tr.getAttribute('id');

                if (!_id) {
                  _tr.setAttribute('id', _xtend.default.getuniqueId());
                }
              } // labelledby


              if (options.aria === true || options.aria.labelledby) {
                var _str = ' ';
                _str += _tr.getAttribute('aria-labelledby') || '';
                var _iteratorNormalCompletion10 = true;
                var _didIteratorError10 = false;
                var _iteratorError10 = undefined;

                try {
                  for (var _iterator10 = els[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                    var _el2 = _step10.value;

                    var _ariaEls2 = self.getInside(_el2, options.ariaControls);

                    var _ariaEl2 = _ariaEls2.length ? _ariaEls2[0] : _el2;

                    _str += ' ' + _ariaEl2.getAttribute('id');
                  }
                } catch (err) {
                  _didIteratorError10 = true;
                  _iteratorError10 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
                      _iterator10.return();
                    }
                  } finally {
                    if (_didIteratorError10) {
                      throw _iteratorError10;
                    }
                  }
                }

                _tr.setAttribute('aria-labelledby', _str.trim());
              }
            }
          } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                _iterator6.return();
              }
            } finally {
              if (_didIteratorError6) {
                throw _iteratorError6;
              }
            }
          }

          if (options.aria === true || options.aria.controls) {
            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
              for (var _iterator7 = self.elements[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                var el = _step7.value;
                var trs = self.getTargets(el);
                var ariaEls = self.getInside(el, options.ariaControls);
                var ariaEl = ariaEls.length ? ariaEls[0] : el; // controls

                var str = ' ';
                str += ariaEl.getAttribute('aria-controls') || '';
                var _iteratorNormalCompletion8 = true;
                var _didIteratorError8 = false;
                var _iteratorError8 = undefined;

                try {
                  for (var _iterator8 = trs[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                    var tr = _step8.value;
                    str += ' ' + tr.getAttribute('id');
                  }
                } catch (err) {
                  _didIteratorError8 = true;
                  _iteratorError8 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
                      _iterator8.return();
                    }
                  } finally {
                    if (_didIteratorError8) {
                      throw _iteratorError8;
                    }
                  }
                }

                ariaEl.setAttribute('aria-controls', str.trim());
              }
            } catch (err) {
              _didIteratorError7 = true;
              _iteratorError7 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
                  _iterator7.return();
                }
              } finally {
                if (_didIteratorError7) {
                  throw _iteratorError7;
                }
              }
            }
          }
        }
      }
    }
    /**
     * init check
     */

  }, {
    key: "initCheck",
    value: function initCheck() {
      var self = this; // resize

      var checkHandler = _xtend.default.dataStorage.put(window, 'resize.check' + '.' + self.namespace, self.eventCheckHandler.bind(self).bind(self));

      addEventListener('resize', checkHandler);
    }
    /**
     * init events
     */

  }, {
    key: "initEvents",
    value: function initEvents() {
      var self = this;
      var options = self.options; // toggle

      options.toggle = options.toggle !== undefined ? options.toggle : !options.off; // event

      var _iteratorNormalCompletion11 = true;
      var _didIteratorError11 = false;
      var _iteratorError11 = undefined;

      try {
        for (var _iterator11 = self.elements[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
          var _el3 = _step11.value;

          // event on
          var onHandler = _xtend.default.dataStorage.put(_el3, options.on + '.' + self.namespace, self.eventOnHandler.bind(self).bind(self, _el3));

          if (options.on) {
            var events = _toConsumableArray(options.on.split(' '));

            var _iteratorNormalCompletion20 = true;
            var _didIteratorError20 = false;
            var _iteratorError20 = undefined;

            try {
              for (var _iterator20 = events[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
                var _event2 = _step20.value;

                _el3.addEventListener(_event2, onHandler);
              } // @FIX prevents click on touch until clicked two times

            } catch (err) {
              _didIteratorError20 = true;
              _iteratorError20 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion20 && _iterator20.return != null) {
                  _iterator20.return();
                }
              } finally {
                if (_didIteratorError20) {
                  throw _iteratorError20;
                }
              }
            }

            if (events.includes('mouseenter') || events.includes('mousehover')) {
              var touchLinksStartHandler = _xtend.default.dataStorage.put(_el3, 'touchend.touchfix' + '.' + self.namespace, self.eventTouchLinksStartHandler.bind(self).bind(self, _el3));

              _el3.addEventListener('touchend', touchLinksStartHandler);
            }
          }

          _el3.addEventListener('on.xt', onHandler); // event off


          var offHandler = _xtend.default.dataStorage.put(_el3, options.off + '.' + self.namespace, self.eventOffHandler.bind(self).bind(self, _el3));

          if (options.off) {
            var _events = _toConsumableArray(options.off.split(' '));

            var _iteratorNormalCompletion21 = true;
            var _didIteratorError21 = false;
            var _iteratorError21 = undefined;

            try {
              for (var _iterator21 = _events[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
                var _event3 = _step21.value;

                _el3.addEventListener(_event3, offHandler);
              }
            } catch (err) {
              _didIteratorError21 = true;
              _iteratorError21 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion21 && _iterator21.return != null) {
                  _iterator21.return();
                }
              } finally {
                if (_didIteratorError21) {
                  throw _iteratorError21;
                }
              }
            }
          }

          _el3.addEventListener('off.xt', offHandler);
        } // listener

      } catch (err) {
        _didIteratorError11 = true;
        _iteratorError11 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion11 && _iterator11.return != null) {
            _iterator11.return();
          }
        } finally {
          if (_didIteratorError11) {
            throw _iteratorError11;
          }
        }
      }

      var _iteratorNormalCompletion12 = true;
      var _didIteratorError12 = false;
      var _iteratorError12 = undefined;

      try {
        for (var _iterator12 = self.targets[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
          var tr = _step12.value;
          var _el4 = self.getElementsFromTarget(tr)[0];

          if (_el4) {
            // event
            var _onHandler = _xtend.default.dataStorage.get(_el4, options.on + '.' + self.namespace);

            tr.addEventListener('on.xt', _onHandler);

            var _offHandler = _xtend.default.dataStorage.get(_el4, options.off + '.' + self.namespace);

            tr.addEventListener('off.xt', _offHandler);
          }
        } // auto

      } catch (err) {
        _didIteratorError12 = true;
        _iteratorError12 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion12 && _iterator12.return != null) {
            _iterator12.return();
          }
        } finally {
          if (_didIteratorError12) {
            throw _iteratorError12;
          }
        }
      }

      if (options.auto && options.auto.time) {
        // focus auto
        addEventListener('focus', self.eventAutoResumeHandler.bind(self)); // blur auto

        addEventListener('blur', self.eventAutoPauseHandler.bind(self)); // autoPause

        var _iteratorNormalCompletion13 = true;
        var _didIteratorError13 = false;
        var _iteratorError13 = undefined;

        try {
          for (var _iterator13 = self.object.querySelectorAll(options.auto.pause)[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
            var el = _step13.value;

            // pause
            var autoPauseOnHandler = _xtend.default.dataStorage.put(el, 'mouseenter focus' + '.' + self.namespace, self.eventAutoPauseHandler.bind(self));

            var eventsPause = ['mouseenter', 'focus'];

            for (var _i = 0; _i < eventsPause.length; _i++) {
              var event = eventsPause[_i];
              el.addEventListener(event, autoPauseOnHandler);
            } // resume


            var autoResumeOnHandler = _xtend.default.dataStorage.put(el, 'mouseleave blur' + '.' + self.namespace, self.eventAutoResumeHandler.bind(self));

            var eventsResume = ['mouseleave', 'blur'];

            for (var _i2 = 0; _i2 < eventsResume.length; _i2++) {
              var _event = eventsResume[_i2];
              el.addEventListener(_event, autoResumeOnHandler);
            }
          }
        } catch (err) {
          _didIteratorError13 = true;
          _iteratorError13 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion13 && _iterator13.return != null) {
              _iterator13.return();
            }
          } finally {
            if (_didIteratorError13) {
              throw _iteratorError13;
            }
          }
        }
      } // jump


      if (options.jump) {
        var _iteratorNormalCompletion14 = true;
        var _didIteratorError14 = false;
        var _iteratorError14 = undefined;

        try {
          for (var _iterator14 = self.targets[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
            var jump = _step14.value;

            var jumpHandler = _xtend.default.dataStorage.put(jump, 'click.jump' + '.' + self.namespace, self.eventJumpHandler.bind(self).bind(self, jump));

            jump.addEventListener('click', jumpHandler, true); // useCapture or it gets the click from elements inside the target
            // jump

            if (!self.disabled) {
              jump.classList.add('jump');
            } else {
              jump.classList.remove('jump');
            }
          }
        } catch (err) {
          _didIteratorError14 = true;
          _iteratorError14 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion14 && _iterator14.return != null) {
              _iterator14.return();
            }
          } finally {
            if (_didIteratorError14) {
              throw _iteratorError14;
            }
          }
        }
      } // navigation


      if (options.navigation) {
        var navs = self.object.querySelectorAll(options.navigation);

        if (navs.length) {
          var _self$destroyElements4;

          (_self$destroyElements4 = self.destroyElements).push.apply(_self$destroyElements4, _toConsumableArray(navs));

          var _iteratorNormalCompletion15 = true;
          var _didIteratorError15 = false;
          var _iteratorError15 = undefined;

          try {
            for (var _iterator15 = navs[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
              var nav = _step15.value;

              var navHandler = _xtend.default.dataStorage.put(nav, 'click.nav' + '.' + self.namespace, self.eventNavHandler.bind(self).bind(self, nav));

              nav.addEventListener('click', navHandler);
            }
          } catch (err) {
            _didIteratorError15 = true;
            _iteratorError15 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion15 && _iterator15.return != null) {
                _iterator15.return();
              }
            } finally {
              if (_didIteratorError15) {
                throw _iteratorError15;
              }
            }
          }
        }
      } // keyboard


      if (options.wheel && options.wheel.selector) {
        var _self$destroyElements5;

        var wheels = options.wheel.selector === 'object' ? _xtend.default.arrSingle(self.object) : self.object.querySelectorAll(options.wheel.selector);

        (_self$destroyElements5 = self.destroyElements).push.apply(_self$destroyElements5, _toConsumableArray(wheels));

        var _iteratorNormalCompletion16 = true;
        var _didIteratorError16 = false;
        var _iteratorError16 = undefined;

        try {
          for (var _iterator16 = wheels[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
            var wheel = _step16.value;
            // wheel
            var eventWheel = 'onwheel' in wheel ? 'wheel' : wheel.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';

            var wheelHandler = _xtend.default.dataStorage.put(wheel, eventWheel + '.' + self.namespace, self.eventWheelHandler.bind(self).bind(self, wheel));

            wheel.addEventListener(eventWheel, wheelHandler);
          }
        } catch (err) {
          _didIteratorError16 = true;
          _iteratorError16 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion16 && _iterator16.return != null) {
              _iterator16.return();
            }
          } finally {
            if (_didIteratorError16) {
              throw _iteratorError16;
            }
          }
        }
      } // keyboard


      if (options.keyboard && options.keyboard.selector) {
        var _self$destroyElements6;

        var keyboards = options.keyboard.selector === 'object' ? _xtend.default.arrSingle(self.object) : self.object.querySelectorAll(options.keyboard.selector);

        (_self$destroyElements6 = self.destroyElements).push.apply(_self$destroyElements6, _toConsumableArray(keyboards));

        var _iteratorNormalCompletion17 = true;
        var _didIteratorError17 = false;
        var _iteratorError17 = undefined;

        try {
          for (var _iterator17 = keyboards[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
            var keyboard = _step17.value;
            keyboard.setAttribute('tabindex', '0'); // focus

            var keyboardFocusHandler = _xtend.default.dataStorage.put(keyboard, 'focus.keyboard' + '.' + self.namespace, self.eventKeyboardFocusHandler.bind(self).bind(self, keyboard));

            keyboard.addEventListener('focus', keyboardFocusHandler); // blur

            var keyboardBlurHandler = _xtend.default.dataStorage.put(keyboard, 'blur.keyboard' + '.' + self.namespace, self.eventKeyboardBlurHandler.bind(self).bind(self, keyboard));

            keyboard.addEventListener('blur', keyboardBlurHandler);
          }
        } catch (err) {
          _didIteratorError17 = true;
          _iteratorError17 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion17 && _iterator17.return != null) {
              _iterator17.return();
            }
          } finally {
            if (_didIteratorError17) {
              throw _iteratorError17;
            }
          }
        }
      } // autoClose


      if (options.autoClose) {
        var autoCloseHandler = _xtend.default.dataStorage.put(window, 'autoClose' + '.' + self.namespace, self.eventAutoCloseHandler.bind(self));

        addEventListener('autoClose.xt', autoCloseHandler);

        var autoCloseFixHandler = _xtend.default.dataStorage.put(window, 'autoCloseFix' + '.' + self.namespace, self.eventAutoCloseFixHandler.bind(self));

        addEventListener('autoCloseFix.xt', autoCloseFixHandler);
      } // images


      var _iteratorNormalCompletion18 = true;
      var _didIteratorError18 = false;
      var _iteratorError18 = undefined;

      try {
        for (var _iterator18 = self.elements[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
          var _el5 = _step18.value;

          var imgs = _el5.querySelectorAll('img');

          var imgsLoaded = 0;
          var _iteratorNormalCompletion22 = true;
          var _didIteratorError22 = false;
          var _iteratorError22 = undefined;

          try {
            var _loop = function _loop() {
              var img = _step22.value;

              if (!img.complete) {
                var imgLoadHandler = _xtend.default.dataStorage.put(img, 'load' + '.' + self.namespace, self.eventImgLoaded.bind(self).bind(self, _el5, img));

                img.addEventListener('load', imgLoadHandler); // @FIX srcset: call only one time

                img.addEventListener('load', function (e) {
                  img.removeEventListener('load', imgLoadHandler);
                });
              } else {
                imgsLoaded++;
              }
            };

            for (var _iterator22 = imgs[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
              _loop();
            }
          } catch (err) {
            _didIteratorError22 = true;
            _iteratorError22 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion22 && _iterator22.return != null) {
                _iterator22.return();
              }
            } finally {
              if (_didIteratorError22) {
                throw _iteratorError22;
              }
            }
          }

          if (imgs.length > 0 && imgsLoaded === imgs.length) {
            requestAnimationFrame(self.eventImgLoaded.bind(self).bind(self, _el5));
          }
        }
      } catch (err) {
        _didIteratorError18 = true;
        _iteratorError18 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion18 && _iterator18.return != null) {
            _iterator18.return();
          }
        } finally {
          if (_didIteratorError18) {
            throw _iteratorError18;
          }
        }
      }

      var _iteratorNormalCompletion19 = true;
      var _didIteratorError19 = false;
      var _iteratorError19 = undefined;

      try {
        for (var _iterator19 = self.targets[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
          var _tr2 = _step19.value;

          var _imgs = _tr2.querySelectorAll('img');

          var _imgsLoaded = 0;
          var _iteratorNormalCompletion23 = true;
          var _didIteratorError23 = false;
          var _iteratorError23 = undefined;

          try {
            var _loop2 = function _loop2() {
              var img = _step23.value;

              if (!img.complete) {
                var imgLoadHandler = _xtend.default.dataStorage.put(img, 'load' + '.' + self.namespace, self.eventImgLoaded.bind(self).bind(self, _tr2, img));

                img.addEventListener('load', imgLoadHandler); // @FIX srcset: call only one time

                img.addEventListener('load', function (e) {
                  img.removeEventListener('load', imgLoadHandler);
                });
              } else {
                _imgsLoaded++;
              }
            };

            for (var _iterator23 = _imgs[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
              _loop2();
            }
          } catch (err) {
            _didIteratorError23 = true;
            _iteratorError23 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion23 && _iterator23.return != null) {
                _iterator23.return();
              }
            } finally {
              if (_didIteratorError23) {
                throw _iteratorError23;
              }
            }
          }

          if (_imgs.length > 0 && _imgsLoaded === _imgs.length) {
            requestAnimationFrame(self.eventImgLoaded.bind(self).bind(self, _tr2));
          }
        }
      } catch (err) {
        _didIteratorError19 = true;
        _iteratorError19 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion19 && _iterator19.return != null) {
            _iterator19.return();
          }
        } finally {
          if (_didIteratorError19) {
            throw _iteratorError19;
          }
        }
      }
    } //////////////////////
    // handler
    //////////////////////

    /**
     * check handler
     * @param {Event} e
     */

  }, {
    key: "eventCheckHandler",
    value: function eventCheckHandler() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var self = this; // handler

      _xtend.default.eventDelay(e, self.object, function () {
        self.eventCheck();
      }, 'resize.xt.core');
    }
    /**
     * element on handler
     * @param {Node|HTMLElement|EventTarget|Window} element
     * @param {Event} e
     */

  }, {
    key: "eventOnHandler",
    value: function eventOnHandler(element, e) {
      var self = this;
      var options = self.options; // handler

      if (!e.detail || !e.detail.skip) {
        // needed because we trigger .xt event
        // event block
        if (options.onBlock) {
          var now = new Date().getTime();
          var old = parseFloat(element.dataset['xtEventBlock' + e.type]) || 0;
          element.dataset['xtEventBlock' + e.type] = now.toString();

          if (now - old < options.onBlock) {
            return false;
          }
        } // on handler


        var eventLimit = self.container.querySelectorAll('.event-limit');

        if (eventLimit.length) {
          if (!_xtend.default.checkNested(e.target, eventLimit)) {
            self.eventOn(element, false, e);
          }
        } else {
          self.eventOn(element, false, e);
        }
      }
    }
    /**
     * element off handler
     * @param {Node|HTMLElement|EventTarget|Window} element
     * @param {Event} e
     */

  }, {
    key: "eventOffHandler",
    value: function eventOffHandler(element, e) {
      var self = this;
      var options = self.options; // handler

      if (!e.detail || !e.detail.skip) {
        // needed because we trigger .xt event
        // event block
        if (options.offBlock) {
          var now = new Date().getTime();
          var old = parseFloat(element.dataset['xtEventBlock' + e.type]) || 0;
          element.dataset['xtEventBlock' + e.type] = now.toString();

          if (now - old < options.offBlock) {
            return false;
          }
        } // off handler


        var eventLimit = self.container.querySelectorAll('.event-limit');

        if (eventLimit.length) {
          if (!_xtend.default.checkNested(e.target, eventLimit)) {
            self.eventOff(element, false, e);
          }
        } else {
          self.eventOff(element, false, e);
        }
      }
    }
    /**
     * init prevents click on touch until clicked two times
     * @param {Node|HTMLElement|EventTarget|Window} el
     * @param {Event} e
     */

  }, {
    key: "eventTouchLinksStartHandler",
    value: function eventTouchLinksStartHandler(el, e) {
      var self = this; // event touchLinks

      var touchLinksHandler = _xtend.default.dataStorage.put(el, 'click.touchfix' + '.' + self.namespace, self.eventTouchLinksHandler.bind(self).bind(self, el));

      el.addEventListener('click', touchLinksHandler); // event touchReset

      var touchResetHandler = _xtend.default.dataStorage.put(el, 'off.touchfix' + '.' + self.namespace, self.eventTouchLinksResetHandler.bind(self).bind(self, el));

      el.addEventListener('off.xt', touchResetHandler);
    }
    /**
     * remove prevents click on touch until clicked two times
     * @param {Node|HTMLElement|EventTarget|Window} el
     */

  }, {
    key: "eventTouchLinksEndHandler",
    value: function eventTouchLinksEndHandler(el) {
      var self = this; // event touchLinks

      var touchLinksHandler = _xtend.default.dataStorage.get(el, 'click.touchfix' + '.' + self.namespace);

      el.removeEventListener('click', touchLinksHandler); // event touchReset

      var touchResetHandler = _xtend.default.dataStorage.get(el, 'off.touchfix' + '.' + self.namespace);

      el.removeEventListener('off.xt', touchResetHandler);
    }
    /**
     * prevents click on touch until clicked two times
     * @param {Node|HTMLElement|EventTarget|Window} el
     * @param {Event} e
     */

  }, {
    key: "eventTouchLinksHandler",
    value: function eventTouchLinksHandler(el, e) {
      var self = this;

      if (!el.dataset.xtTouchLinksDone) {
        e.preventDefault();
        el.dataset.xtTouchLinksDone = 'true';
      } else {
        self.eventTouchLinksEndHandler(el);
        delete el.dataset.xtTouchLinksDone;
      }
    }
    /**
     * reset prevents click on touch until clicked two times
     * @param {Node|HTMLElement|EventTarget|Window} el
     * @param {Event} e
     */

  }, {
    key: "eventTouchLinksResetHandler",
    value: function eventTouchLinksResetHandler(el, e) {
      var self = this;
      self.eventTouchLinksEndHandler(el);
      delete el.dataset.xtTouchLinksDone;
    }
    /**
     * auto pause handler
     * @param {Event} e
     */

  }, {
    key: "eventAutoPauseHandler",
    value: function eventAutoPauseHandler(e) {
      var self = this;

      if (!e.detail || !e.detail.skip) {
        // needed because we trigger .xt event
        if (!self.detail.autoPaused) {
          self.eventAutoPause(); // paused

          self.detail.autoPaused = true;
        }
      }
    }
    /**
     * auto resume handler
     * @param {Event} e
     */

  }, {
    key: "eventAutoResumeHandler",
    value: function eventAutoResumeHandler(e) {
      var self = this;

      if (!e.detail || !e.detail.skip) {
        // needed because we trigger .xt event
        if (self.detail.autoPaused) {
          self.eventAutoStart(); // paused

          self.detail.autoPaused = false;
        }
      }
    }
    /**
     * jump handler
     * @param {Node|HTMLElement|EventTarget|Window} el
     * @param {Event} e
     */

  }, {
    key: "eventJumpHandler",
    value: function eventJumpHandler(el, e) {
      var self = this; // handler

      self.eventJump(el, e);
    }
    /**
     * nav handler
     * @param {Node|HTMLElement|EventTarget|Window} nav
     * @param {Event} e
     */

  }, {
    key: "eventNavHandler",
    value: function eventNavHandler(nav, e) {
      var self = this; // handler

      self.eventNav(nav, e);
    }
    /**
     * wheel handler
     * @param {Node|HTMLElement|EventTarget|Window} el
     * @param {Event} e
     */

  }, {
    key: "eventWheelHandler",
    value: function eventWheelHandler(el, e) {
      var self = this;
      var options = self.options; // disabled

      if (self.disabled && !self.initial) {
        return false;
      } // handler


      e.preventDefault(); // prevent default scrolling
      // block

      if (!el.dataset.xtWheelBlock) {
        if (options.wheel.block) {
          el.dataset.xtWheelBlock = 'true';
          clearTimeout(parseFloat(el.dataset.xtWheelTimeout));
          el.dataset.xtWheelTimeout = setTimeout(function () {
            delete el.dataset.xtWheelBlock;
          }, options.wheel.block).toString();
        } // wheel


        var delta = -e.deltaY || -e.detail || e.wheelDelta || e.wheelDeltaY;

        if (delta < 0) {
          self.goToNext(1);
        } else if (delta > 0) {
          self.goToPrev(1);
        }
      }
    }
    /**
     * keyboard focus handler
     * @param {Node|HTMLElement|EventTarget|Window} el
     * @param {Event} e
     */

  }, {
    key: "eventKeyboardFocusHandler",
    value: function eventKeyboardFocusHandler(el, e) {
      var self = this; // handler

      var keyboardHandler = _xtend.default.dataStorage.put(document, 'keyup.keyboard' + '.' + self.namespace, self.eventKeyboardHandler.bind(self));

      document.addEventListener('keyup', keyboardHandler);
    }
    /**
     * keyboard blur handler
     * @param {Node|HTMLElement|EventTarget|Window} el
     * @param {Event} e
     */

  }, {
    key: "eventKeyboardBlurHandler",
    value: function eventKeyboardBlurHandler(el, e) {
      // handler
      var keyboardHandler = _xtend.default.dataStorage.get(document, 'keyup.keyboard' + '.' + self.namespace);

      document.removeEventListener('keyup', keyboardHandler);
    }
    /**
     * keyboard handler
     * @param {Event} e
     */

  }, {
    key: "eventKeyboardHandler",
    value: function eventKeyboardHandler(e) {
      var self = this;
      var options = self.options; // key

      var code = e.keyCode ? e.keyCode : e.which;
      var prev;
      var next;

      if (options.keyboard.vertical) {
        if (options.keyboard.inverse) {
          prev = 40;
          next = 38;
        } else {
          prev = 38;
          next = 40;
        }
      } else {
        if (options.keyboard.inverse) {
          prev = 39;
          next = 37;
        } else {
          prev = 37;
          next = 39;
        }
      }

      if (code === prev) {
        self.goToPrev(1);
      } else if (code === next) {
        self.goToNext(1);
      }
    }
    /**
     * autoClose handler
     * @param {Event} e
     */

  }, {
    key: "eventAutoCloseHandler",
    value: function eventAutoCloseHandler(e) {
      var self = this; // restart

      var currents = self.getCurrents();
      var _iteratorNormalCompletion24 = true;
      var _didIteratorError24 = false;
      var _iteratorError24 = undefined;

      try {
        for (var _iterator24 = currents[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
          var current = _step24.value;
          self.eventOff(current);
        }
      } catch (err) {
        _didIteratorError24 = true;
        _iteratorError24 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion24 && _iterator24.return != null) {
            _iterator24.return();
          }
        } finally {
          if (_didIteratorError24) {
            throw _iteratorError24;
          }
        }
      }
    }
    /**
     * autoCloseFix handler
     * @param {Event} e
     */

  }, {
    key: "eventAutoCloseFixHandler",
    value: function eventAutoCloseFixHandler(e) {
      var self = this; // special @TODO refactor

      self.specialScrollbarOff();
    }
    /**
     * imageLoaded
     * @param {Node|HTMLElement|EventTarget|Window} el
     * @param {Node|HTMLElement|EventTarget|Window} img
     * @param {Event} e
     */

  }, {
    key: "eventImgLoaded",
    value: function eventImgLoaded(el) {
      var img = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var self = this; // listener dispatch

      var detail = self.eDetailSet(e);
      el.dispatchEvent(new CustomEvent('imageLoaded.xt', {
        detail: detail
      }));
    } //////////////////////
    // event util
    //////////////////////

    /**
     * get elements array single (one element per group)
     * @returns {Array} array of elements
     */

  }, {
    key: "getElementsSingle",
    value: function getElementsSingle() {
      var self = this; // groups

      var groups = [];
      var _iteratorNormalCompletion25 = true;
      var _didIteratorError25 = false;
      var _iteratorError25 = undefined;

      try {
        var _loop3 = function _loop3() {
          var element = _step25.value;
          // choose element by group
          var group = element.getAttribute('data-xt-group');

          if (group) {
            var found = groups.filter(function (x) {
              return x.getAttribute('data-xt-group') === group;
            });

            if (!found.length) {
              groups.push(element);
            }
          } else {
            groups.push(element);
          }
        };

        for (var _iterator25 = self.elements[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
          _loop3();
        }
      } catch (err) {
        _didIteratorError25 = true;
        _iteratorError25 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion25 && _iterator25.return != null) {
            _iterator25.return();
          }
        } finally {
          if (_didIteratorError25) {
            throw _iteratorError25;
          }
        }
      }

      return groups;
    }
    /**
     * choose which elements to activate/deactivate (based on xtend mode and containers)
     * @param {Node|HTMLElement|EventTarget|Window} element Element that triggered interaction
     * @returns {Object} object.all and object.single
     */

  }, {
    key: "getElements",
    value: function getElements(element) {
      var self = this; // getElements

      if (!self.elements || !self.elements.length) {
        return {
          all: [],
          single: null
        };
      }

      if (self.mode === 'unique') {
        // choose all elements
        var final = self.elements;
        return {
          all: _xtend.default.arrSingle(final),
          single: final.length > 1 ? final[0] : final
        };
      } else if (self.mode === 'multiple') {
        // choose element by group
        var group = element.getAttribute('data-xt-group');

        if (group) {
          // all group elements if group
          var groupElements = Array.from(self.elements).filter(function (x) {
            return x.getAttribute('data-xt-group') === group;
          });

          var _final = _xtend.default.arrSingle(groupElements);

          return {
            all: _final,
            single: _final[0]
          };
        } else {
          // element if not group
          var _final2 = element;
          return {
            all: _xtend.default.arrSingle(_final2),
            single: _final2
          };
        }
      }
    }
    /**
     * choose which targets to activate/deactivate (based on xtend mode and containers)
     * @param {Node|HTMLElement|EventTarget|Window} element Element that triggered interaction
     * @returns {Array}
     */

  }, {
    key: "getTargets",
    value: function getTargets(element) {
      var self = this; // getTargets

      if (!self.targets || !self.targets.length) {
        return [];
      }

      if (self.mode === 'unique') {
        // choose all targets
        return self.targets;
      } else if (self.mode === 'multiple') {
        // choose only target by group
        var group = element.getAttribute('data-xt-group');
        var groupElements = Array.from(self.elements).filter(function (x) {
          return x.getAttribute('data-xt-group') === group;
        });
        var groupTargets = Array.from(self.targets).filter(function (x) {
          return x.getAttribute('data-xt-group') === group;
        });
        var final;

        if (group) {
          // all group targets if group
          final = groupTargets;
        } else {
          // not group targets by index if not group
          var index = groupElements.findIndex(function (x) {
            return x === element;
          });
          final = groupTargets[index];
        }

        return _xtend.default.arrSingle(final);
      }
    }
    /**
     * choose which elements to activate/deactivate from target (based on xtend mode and containers)
     * @param {Node|HTMLElement|EventTarget|Window} target Target to trigger interaction on
     * @returns {Array}
     */

  }, {
    key: "getElementsFromTarget",
    value: function getElementsFromTarget(target) {
      var self = this; // getElementsFromTarget

      if (!self.elements || !self.elements.length) {
        return [];
      }

      if (self.mode === 'unique') {
        // choose all targets
        return self.elements;
      } else if (self.mode === 'multiple') {
        // choose only target by group
        var group = target.getAttribute('data-xt-group');
        var groupElements = Array.from(self.elements).filter(function (x) {
          return x.getAttribute('data-xt-group') === group;
        });
        var groupTargets = Array.from(self.targets).filter(function (x) {
          return x.getAttribute('data-xt-group') === group;
        });
        var final;

        if (group) {
          // all group targets if group
          final = groupElements;
        } else {
          // not group targets by index if not group
          var index = groupTargets.findIndex(function (x) {
            return x === target;
          });
          final = groupElements[index];
        }

        return _xtend.default.arrSingle(final);
      }
    }
    /**
     * query for inside
     * @param {Node|HTMLElement|NodeList|Array} element Element to search from
     * @param {String} query Query for querySelectorAll
     * @returns {Array}
     */

  }, {
    key: "getInside",
    value: function getInside(element, query) {
      if (!query) {
        return [];
      }

      if (!element.length) {
        // search element
        return _xtend.default.arrSingle(element.querySelectorAll(query));
      } else {
        // search array
        var arr = [];
        var _iteratorNormalCompletion26 = true;
        var _didIteratorError26 = false;
        var _iteratorError26 = undefined;

        try {
          for (var _iterator26 = element[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
            var el = _step26.value;
            arr.push.apply(arr, _toConsumableArray(el.querySelectorAll(query)));
          }
        } catch (err) {
          _didIteratorError26 = true;
          _iteratorError26 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion26 && _iterator26.return != null) {
              _iterator26.return();
            }
          } finally {
            if (_didIteratorError26) {
              throw _iteratorError26;
            }
          }
        }

        return arr;
      }
    }
    /**
     * get currents based on namespace (so shared between Xt objects)
     * @returns {Array}
     */

  }, {
    key: "getCurrents",
    value: function getCurrents() {
      var self = this; // getCurrents

      return _xtend.default.currents[self.namespace];
    }
    /**
     * set currents based on namespace (so shared between Xt objects)
     * @param {Array} arr
     */

  }, {
    key: "setCurrents",
    value: function setCurrents(arr) {
      var self = this; // setCurrents

      _xtend.default.currents[self.namespace] = arr;
    }
    /**
     * add current based on namespace (so shared between Xt objects)
     * @param {Node|HTMLElement|EventTarget|Window} element To be added
     */

  }, {
    key: "addCurrent",
    value: function addCurrent(element) {
      var self = this; // addCurrent

      if (!self.hasCurrent(element)) {
        var arr = _xtend.default.currents[self.namespace];
        arr.push(element);
      }
    }
    /**
     * remove currents based on namespace (so shared between Xt objects)
     * @param {Node|HTMLElement|EventTarget|Window} element To be removed
     */

  }, {
    key: "removeCurrent",
    value: function removeCurrent(element) {
      var self = this; // removeCurrent

      _xtend.default.currents[self.namespace] = _xtend.default.currents[self.namespace].filter(function (x) {
        return x !== element;
      });
    }
    /**
     * if element is in current (so shared between Xt objects)
     * @param {Node|HTMLElement|EventTarget|Window} element To be checked
     */

  }, {
    key: "hasCurrent",
    value: function hasCurrent(element) {
      var self = this; // hasCurrent

      return _xtend.default.currents[self.namespace].filter(function (x) {
        return x === element;
      }).length;
    }
    /**
     * check element on
     * @param {Node|HTMLElement|EventTarget|Window} element To be checked
     */

  }, {
    key: "checkOn",
    value: function checkOn(element) {
      var self = this; // check

      var groupElements = self.getElements(element);
      return !self.hasCurrent(groupElements.single);
    }
    /**
     * check element off
     * @param {Node|HTMLElement|EventTarget|Window} element To be checked
     */

  }, {
    key: "checkOff",
    value: function checkOff(element) {
      var self = this;
      var options = self.options; // skip if min >= currents

      if (options.min - self.getCurrents().length >= 0) {
        return false;
      } // check


      var groupElements = self.getElements(element);
      return self.hasCurrent(groupElements.single);
    }
    /**
     * check elements animation
     * @param {NodeList|Array} elements To be checked
     * @returns {Boolean} If elements are animating
     */

  }, {
    key: "checkAnim",
    value: function checkAnim(elements) {
      var self = this;
      var options = self.options; // check

      elements = elements.filter(function (x) {
        var _x$classList, _x$classList2;

        return (_x$classList = x.classList).contains.apply(_x$classList, _toConsumableArray(self.classesIn)) || (_x$classList2 = x.classList).contains.apply(_x$classList2, _toConsumableArray(self.classesOut));
      });
      return elements.length > 0;
    }
    /**
     * set index and direction
     * @param {Node|HTMLElement|EventTarget|Window} element Current element
     */

  }, {
    key: "setIndexAndDirection",
    value: function setIndexAndDirection(element) {
      var self = this; // setIndexAndDirection

      var index = 0;
      var _iteratorNormalCompletion27 = true;
      var _didIteratorError27 = false;
      var _iteratorError27 = undefined;

      try {
        for (var _iterator27 = self.elements.entries()[Symbol.iterator](), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
          var _step27$value = _slicedToArray(_step27.value, 2),
              i = _step27$value[0],
              el = _step27$value[1];

          if (el === element) {
            index = i;
            break;
          }
        }
      } catch (err) {
        _didIteratorError27 = true;
        _iteratorError27 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion27 && _iterator27.return != null) {
            _iterator27.return();
          }
        } finally {
          if (_didIteratorError27) {
            throw _iteratorError27;
          }
        }
      }

      self.detail.inverseDirection = self.detail.inverseDirectionForce !== null ? self.detail.inverseDirectionForce : self.currentIndex > index;
      self.detail.inverseDirectionForce = null;
      self.currentIndex = index;
    }
    /**
     * set index and direction
     * @param {Node|HTMLElement|EventTarget|Window} el Elements to be deactivated
     */

  }, {
    key: "decorateDirection",
    value: function decorateDirection(el) {
      var self = this; // decorateDirection

      if (!self.detail.inverseDirection) {
        el.classList.remove('inverse');
      } else {
        el.classList.add('inverse');
      }
    }
    /**
     * set e detail
     * @param {Event} e
     */

  }, {
    key: "eDetailSet",
    value: function eDetailSet() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var detail = e && e.detail && _typeof(e.detail) === 'object' ? e.detail : {};
      detail.skip = true;
      detail.self = this;
      return detail;
    } //////////////////////
    // event
    //////////////////////

    /**
     * resize
     */

  }, {
    key: "eventCheck",
    value: function eventCheck() {
      var self = this; // check disabled

      if (self.object instanceof HTMLElement // not on window
      && getComputedStyle(self.object, '::after').getPropertyValue('content').replace(/['"]+/g, '') === 'xt-disable') {
        self.disable();
      } else if (self.disabled) {
        self.enable();
      }
    }
    /**
     * element on
     * @param {Node|HTMLElement|EventTarget|Window} element To be activated
     * @param {Boolean} force
     * @param {Event} e
     * @returns {Boolean} If activated
     */

  }, {
    key: "eventOn",
    value: function eventOn(element) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var self = this;
      var options = self.options; // disabled

      if (self.disabled && !self.initial) {
        return false;
      } // toggle


      if (force || self.checkOn(element)) {
        // auto
        if (options.auto && options.auto.time) {
          self.eventAutoStop();
        } // on


        var groupElements = self.getElements(element);
        self.addCurrent(groupElements.single);
        self.setIndexAndDirection(element);
        var targets = self.getTargets(element);
        var elementsInner = self.getInside(element, options.elementsInner);
        var targetsInner = self.getInside(targets, options.targetsInner); // if currents > max

        var currents = self.getCurrents();

        if (currents.length > options.max) {
          // deactivate old
          self.eventOff(currents[0]);
        } // detail


        var detail = self.eDetailSet(e); // queue obj

        var obj = {};

        if (groupElements.all.length) {
          obj['elements'] = {
            detail: detail,
            queueEls: groupElements.all,
            groupElements: groupElements
          };
        }

        if (targets.length) {
          obj['targets'] = {
            detail: detail,
            queueEls: targets,
            groupElements: groupElements
          };
        }

        if (elementsInner.length) {
          obj['elementsInner'] = {
            detail: detail,
            queueEls: elementsInner,
            groupElements: groupElements
          };
        }

        if (targetsInner.length) {
          obj['targetsInner'] = {
            detail: detail,
            queueEls: targetsInner,
            groupElements: groupElements
          };
        }

        if (_typeof(options.instant) !== 'object' && options.instant === true) {
          self.detail.queueOn = [obj];
        } else {
          self.detail.queueOn.unshift(obj);
        } // queue run


        for (var type in self.detail.queueOn[0]) {
          self.queueOn(type, 0, true);
        } // activated


        return true;
      } else if (options.toggle && (!e || !e.detail || !e.detail.skipToggle)) {
        // not when skipToggle
        // off
        self.eventOff(element, e);
      } // activated


      return false;
    }
    /**
     * element off
     * @param {Node|HTMLElement|EventTarget|Window} element To be deactivated
     * @param {Boolean} force
     * @param {Event} e
     * @returns {Boolean} If deactivated
     */

  }, {
    key: "eventOff",
    value: function eventOff(element) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var self = this;
      var options = self.options; // disabled

      if (self.disabled && !self.initial) {
        return false;
      } // toggle


      if (force || self.checkOff(element)) {
        // if currents === min
        if (self.getCurrents().length === options.min) {
          return false;
        } // off


        var groupElements = self.getElements(element);
        self.removeCurrent(groupElements.single);

        if (self.getCurrents().length === 0) {
          self.currentIndex = null;
        }

        var targets = self.getTargets(element);
        var elementsInner = self.getInside(element, options.elementsInner);
        var targetsInner = self.getInside(targets, options.targetsInner); // auto

        if (!self.getCurrents().length) {
          self.eventAutoStop();
        } // detail


        var detail = self.eDetailSet(e); // queue obj

        var obj = {};

        if (groupElements.all.length) {
          obj['elements'] = {
            detail: detail,
            queueEls: groupElements.all,
            groupElements: groupElements
          };
        }

        if (targets.length) {
          obj['targets'] = {
            detail: detail,
            queueEls: targets,
            groupElements: groupElements
          };
        }

        if (elementsInner.length) {
          obj['elementsInner'] = {
            detail: detail,
            queueEls: elementsInner,
            groupElements: groupElements
          };
        }

        if (targetsInner.length) {
          obj['targetsInner'] = {
            detail: detail,
            queueEls: targetsInner,
            groupElements: groupElements
          };
        }

        if (_typeof(options.instant) !== 'object' && options.instant === true) {
          self.detail.queueOff = [obj];
        } else {
          self.detail.queueOff.unshift(obj);
        } // if queue too big


        if (self.detail.queueOff.length > options.max) {
          // remove queue on and done other queue
          var removedOn = self.detail.queueOn.shift();
          self.queueOnEnd(removedOn); // remove queue off and  done other queue

          var removedOff = self.detail.queueOff.shift();
          self.queueOffEnd(removedOff);
        } // queue run


        for (var type in self.detail.queueOff[0]) {
          self.queueOff(type, 0, true);
        } // deactivated


        return true;
      } // deactivated


      return false;
    }
    /**
     * auto start
     */

  }, {
    key: "eventAutoStart",
    value: function eventAutoStart() {
      var self = this;
      var options = self.options;

      if (options.auto && options.auto.time) {
        // paused
        self.detail.autoPaused = false; // clear

        clearInterval(self.object.dataset.xtAutoStartInterval); // auto

        var time = options.auto.time;

        if (self.currentIndex !== null && // not when nothing activated
        !self.initial || options.auto.initial) {
          // not when initial
          self.object.dataset.xtAutoStartInterval = setInterval(function () {
            // interval because can become :visible
            if (self.object.offsetWidth || self.object.offsetHeight || self.object.getClientRects().length) {
              // :visible
              // auto
              if (getComputedStyle(self.object).pointerEvents !== 'none') {
                // not when disabled
                if (options.auto.inverse) {
                  self.goToPrev(options.auto.step, true, options.auto.loop);
                } else {
                  self.goToNext(options.auto.step, true, options.auto.loop);
                }
              }
            }
          }, time).toString(); // listener dispatch

          var detail = self.eDetailSet();
          self.object.dispatchEvent(new CustomEvent('start.xt.auto', {
            detail: detail
          }));
        }
      }
    }
    /**
     * auto stop
     */

  }, {
    key: "eventAutoStop",
    value: function eventAutoStop() {
      var self = this;
      var options = self.options;

      if (options.auto && options.auto.time) {
        // clear
        clearInterval(self.object.dataset.xtAutoStartInterval); // listener dispatch

        var detail = self.eDetailSet();
        self.object.dispatchEvent(new CustomEvent('stop.xt.auto', {
          detail: detail
        }));
      }
    }
    /**
     * auto stop
     */

  }, {
    key: "eventAutoPause",
    value: function eventAutoPause() {
      var self = this;
      var options = self.options;

      if (options.auto && options.auto.time) {
        // clear
        clearInterval(self.object.dataset.xtAutoStartInterval); // listener dispatch

        var detail = self.eDetailSet();
        self.object.dispatchEvent(new CustomEvent('pause.xt.auto', {
          detail: detail
        }));
      }
    }
    /**
     * jump
     * @param {Node|HTMLElement|EventTarget|Window} el
     * @param {Event} e
     */

  }, {
    key: "eventJump",
    value: function eventJump(el, e) {
      var self = this; // check disabled

      if (el.classList.contains('jumps--none') || _xtend.default.parents(el, '.jumps--none').length) {
        return false;
      } // jump


      var element = self.getElementsFromTarget(el)[0];

      if (self.checkOn(element)) {
        self.eventOn(element);
      }
    }
    /**
     * nav
     * @param {Node|HTMLElement|EventTarget|Window} nav
     * @param {Event} e
     */

  }, {
    key: "eventNav",
    value: function eventNav(nav, e) {
      var self = this; // nav

      var index = 0;

      if (self.currentIndex !== null) {
        index = self.currentIndex + parseFloat(nav.getAttribute('data-xt-nav'));
      }

      self.goToIndex(index, true);
    } //////////////////////
    // queue util
    //////////////////////

    /**
     * queue on end
     * @param {Object} obj Queue object to end
     */

  }, {
    key: "queueOnEnd",
    value: function queueOnEnd(obj) {
      var self = this; // check if done

      for (var type in obj) {
        if (obj[type].done) {
          var _iteratorNormalCompletion28 = true;
          var _didIteratorError28 = false;
          var _iteratorError28 = undefined;

          try {
            for (var _iterator28 = obj[type].queueEls[Symbol.iterator](), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
              var el = _step28.value;
              // clear timeout and frame
              cancelAnimationFrame(parseFloat(el.dataset.xtCollapseFrame));
              clearTimeout(el.dataset.xtDelayTimeout);
              clearTimeout(el.dataset.xtAnimTimeout); // done other queue

              self.queueOffDelayDone(obj, el, type, true);
              self.queueOffAnimDone(obj, el, type, true);
            }
          } catch (err) {
            _didIteratorError28 = true;
            _iteratorError28 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion28 && _iterator28.return != null) {
                _iterator28.return();
              }
            } finally {
              if (_didIteratorError28) {
                throw _iteratorError28;
              }
            }
          }
        }
      }
    }
    /**
     * queue off end
     * @param {Object} obj Queue object to end
     */

  }, {
    key: "queueOffEnd",
    value: function queueOffEnd(obj) {
      var self = this; // check if done

      for (var type in obj) {
        if (obj[type].done) {
          var _iteratorNormalCompletion29 = true;
          var _didIteratorError29 = false;
          var _iteratorError29 = undefined;

          try {
            for (var _iterator29 = obj[type].queueEls[Symbol.iterator](), _step29; !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = true) {
              var el = _step29.value;
              // clear timeout and frame
              cancelAnimationFrame(parseFloat(el.dataset.xtCollapseFrame));
              clearTimeout(el.dataset.xtDelayTimeout);
              clearTimeout(el.dataset.xtAnimTimeout); // done other queue

              self.queueOnDelayDone(obj, el, type, true);
              self.queueOnAnimDone(obj, el, type, true);
            }
          } catch (err) {
            _didIteratorError29 = true;
            _iteratorError29 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion29 && _iterator29.return != null) {
                _iterator29.return();
              }
            } finally {
              if (_didIteratorError29) {
                throw _iteratorError29;
              }
            }
          }
        }
      }
    }
    /**
     * queue on done
     * @param {Object} obj Queue object
     * @param {String} type Type of element
     * @param {Boolean} skipQueue If skip queue
     */

  }, {
    key: "queueOnDone",
    value: function queueOnDone(obj, type) {
      var skipQueue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var self = this;
      var options = self.options; // check

      if (obj[type] && !skipQueue) {
        // done
        obj[type].done = true;
        var done = 0;

        for (var _type in obj) {
          if (obj[_type].done) {
            done++;
          }
        } // one done


        if (done === 1) {
          // special
          self.specialBackdrop(obj);
          self.specialClassHtmlOn();
          self.specialScrollbarOn(); // focus

          if (options.scrollbar) {
            var el = obj['targets'] ? obj['targets'].queueEls[0] : obj['elements'].queueEls[0];
            _xtend.default.focus.block = true;

            _xtend.default.focusLimit.on(el);

            el.focus();
          }
        } // queue


        self.queueOff(type, self.detail.queueOff.length - 1); // all done

        if (done === Object.entries(obj).length) {
          // auto
          if (options.auto && options.auto.time) {
            self.eventAutoStart();
          } // request @TODO refactor


          if (self.ajaxRequest) {
            if (!self.initial) {
              self.ajaxRequest(obj[type].groupElements.single);
            }
          } // remove queue


          self.detail.queueOn.pop(); // initial

          self.initial = false;
        }
      }
    }
    /**
     * queue off done
     * @param {Object} obj Queue object
     * @param {String} type Type of element
     * @param {Boolean} skipQueue If skip queue
     */

  }, {
    key: "queueOffDone",
    value: function queueOffDone(obj, type) {
      var skipQueue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var self = this;
      var options = self.options; // check

      if (obj[type] && !skipQueue) {
        // done
        obj[type].done = true;
        var done = 0;

        for (var _type2 in obj) {
          if (obj[_type2].done) {
            done++;
          }
        } // one done


        if (done === 1) {
          // special
          self.specialClassHtmlOff(); // focus

          if (options.scrollbar) {
            _xtend.default.focus.block = false;

            _xtend.default.focusLimit.off();

            _xtend.default.focus.current.focus();
          }
        } // queue


        self.queueOn(type, self.detail.queueOn.length - 1); // all done

        if (done === Object.entries(obj).length) {
          // special
          self.specialScrollbarOff(); // remove queue

          self.detail.queueOff.pop();
        }
      }
    } //////////////////////
    // queue
    //////////////////////

    /**
     * queue on
     * @param {String} type Type of element
     * @param {Number} index Queue index
     * @param {Boolean} queueInitial If it's the initial queue
     */

  }, {
    key: "queueOn",
    value: function queueOn(type, index) {
      var queueInitial = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var self = this; // queueOn

      var obj = self.detail.queueOn[index];

      if (obj && obj[type] && !obj[type].done) {
        var objOther = self.detail.queueOff[self.detail.queueOff.length - 1];

        if (!objOther || !objOther[type] || objOther[type].done) {
          self.queueOnDelay(obj, type, queueInitial);
        }
      }
    }
    /**
     * queue off
     * @param {String} type Type of element
     * @param {Number} index Queue index
     * @param {Boolean} queueInitial If it's the initial queue
     */

  }, {
    key: "queueOff",
    value: function queueOff(type, index) {
      var queueInitial = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var self = this; // queueOff

      var obj = self.detail.queueOff[index];

      if (obj && obj[type] && !obj[type].done) {
        var objOther = self.detail.queueOn[self.detail.queueOn.length - 1];

        if (!objOther || !objOther[type] || objOther[type].done) {
          self.queueOffDelay(obj, type, queueInitial);
        }
      }
    }
    /**
     * queue on delay
     * @param {Object} obj Queue object
     * @param {String} type Type of elements
     * @param {Boolean} queueInitial If it's the initial queue
     */

  }, {
    key: "queueOnDelay",
    value: function queueOnDelay(obj, type, queueInitial) {
      var self = this;
      var options = self.options; // delay

      var els = obj[type].queueEls;
      var _iteratorNormalCompletion30 = true;
      var _didIteratorError30 = false;
      var _iteratorError30 = undefined;

      try {
        var _loop4 = function _loop4() {
          var el = _step30.value;
          // delay
          var delay = void 0;

          if (options.delayOn) {
            if (isNaN(options.delayOn)) {
              var count = parseInt(el.dataset.xtOnCount) || els.findIndex(function (x) {
                return x === el;
              });
              var tot = parseInt(el.dataset.xtOnTot) || els.length;
              var fnc = options.delayOn;

              if (typeof fnc === 'string') {
                fnc = new Function('current', 'total', fnc);
              }

              delay = fnc(count, tot - 1).toString();
            } else {
              delay = queueInitial ? 0 : options.delayOn;
            }
          } // delay fnc


          clearTimeout(el.dataset.xtDelayTimeout);
          clearTimeout(el.dataset.xtAnimTimeout);

          if (delay) {
            el.dataset.xtDelayTimeout = setTimeout(function () {
              self.queueOnDelayDone(obj, el, type);
            }, delay).toString();
          } else {
            self.queueOnDelayDone(obj, el, type);
          } // queue done


          if (_typeof(options.instant) !== 'object' && options.instant === true) {
            if (el === els[els.length - 1]) {
              // only if last element
              self.queueOnDone(obj, type);
            }
          }
        };

        for (var _iterator30 = els[Symbol.iterator](), _step30; !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = true) {
          _loop4();
        }
      } catch (err) {
        _didIteratorError30 = true;
        _iteratorError30 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion30 && _iterator30.return != null) {
            _iterator30.return();
          }
        } finally {
          if (_didIteratorError30) {
            throw _iteratorError30;
          }
        }
      }
    }
    /**
     * queue off delay
     * @param {Object} obj Queue object
     * @param {String} type Type of elements
     * @param {Boolean} queueInitial If it's the initial queue
     */

  }, {
    key: "queueOffDelay",
    value: function queueOffDelay(obj, type, queueInitial) {
      var self = this;
      var options = self.options; // delay

      var els = obj[type].queueEls;
      var _iteratorNormalCompletion31 = true;
      var _didIteratorError31 = false;
      var _iteratorError31 = undefined;

      try {
        var _loop5 = function _loop5() {
          var el = _step31.value;
          // delay
          var delay = void 0;

          if (options.delayOff) {
            if (isNaN(options.delayOff)) {
              var count = parseInt(el.dataset.xtOffCount) || els.findIndex(function (x) {
                return x === el;
              });
              var tot = parseInt(el.dataset.xtOffTot) || els.length;
              var fnc = options.delayOff;

              if (typeof fnc === 'string') {
                fnc = new Function('current', 'total', fnc);
              }

              delay = fnc(count, tot - 1).toString();
            } else {
              delay = queueInitial ? 0 : options.delayOff;
            }
          } // delay fnc


          clearTimeout(el.dataset.xtDelayTimeout);
          clearTimeout(el.dataset.xtAnimTimeout);

          if (delay) {
            el.dataset.xtDelayTimeout = setTimeout(function () {
              self.queueOffDelayDone(obj, el, type);
            }, delay).toString();
          } else {
            self.queueOffDelayDone(obj, el, type);
          } // queue done


          if (_typeof(options.instant) !== 'object' && options.instant === true) {
            if (el === els[els.length - 1]) {
              // only if last element
              self.queueOffDone(obj, type);
            }
          }
        };

        for (var _iterator31 = els[Symbol.iterator](), _step31; !(_iteratorNormalCompletion31 = (_step31 = _iterator31.next()).done); _iteratorNormalCompletion31 = true) {
          _loop5();
        }
      } catch (err) {
        _didIteratorError31 = true;
        _iteratorError31 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion31 && _iterator31.return != null) {
            _iterator31.return();
          }
        } finally {
          if (_didIteratorError31) {
            throw _iteratorError31;
          }
        }
      }
    }
    /**
     * queue on start
     * @param {Object} obj Queue object
     * @param {Node|HTMLElement|EventTarget|Window} el Elements to be deactivated
     * @param {String} type Type of elements
     * @param {Boolean} skipQueue If skip queue
     */

  }, {
    key: "queueOnDelayDone",
    value: function queueOnDelayDone(obj, el, type) {
      var _el$classList2, _el$classList3, _el$classList4;

      var skipQueue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var self = this;
      var options = self.options; // activate

      (_el$classList2 = el.classList).add.apply(_el$classList2, _toConsumableArray(self.classes));

      (_el$classList3 = el.classList).add.apply(_el$classList3, _toConsumableArray(self.classesIn));

      (_el$classList4 = el.classList).remove.apply(_el$classList4, _toConsumableArray(self.classesOut));

      self.decorateDirection(el); // special

      var before = getComputedStyle(el, '::before').getPropertyValue('content').replace(/['"]+/g, '');
      var after = getComputedStyle(el, '::after').getPropertyValue('content').replace(/['"]+/g, '');
      self.specialCenter(el, before, after);
      self.specialMiddle(el, before, after);
      self.specialCollapseOn(el, before, after);

      if (type === 'targets') {
        // appendTo
        if (options.appendTo) {
          var appendToTarget = document.querySelectorAll(options.appendTo);
          var appendOrigin = document.querySelectorAll('[data-xt-origin=' + self.namespace + ']');

          if (!appendOrigin.length) {
            el.before(_xtend.default.createElement('<div class="xt-ignore" data-xt-origin=' + self.namespace + '></div>'));
          }

          el.classList.add('xt-ignore'); // don't trigger Xt.observer

          appendToTarget[0].appendChild(el);
        }
      }

      if (type === 'targets' || type === 'targetsInner') {
        self.specialCloseOn(el, obj[type].groupElements.single);
      } // aria


      if (options.aria) {
        if (type === 'elements') {
          // selected
          var ariaEls = self.getInside(el, options.ariaControls);
          var ariaEl = ariaEls.length ? ariaEls[0] : el;
          ariaEl.setAttribute('aria-selected', 'true');
        }

        if (type === 'targets') {
          // expanded
          var role = el.getAttribute('role');

          if (role === 'tabpanel' || role === 'listbox' || role === 'dialog') {
            el.setAttribute('aria-expanded', 'true');
          }
        }
      } // queue


      if (!skipQueue) {
        self.queueOnAnim(obj, el, type);
      } // queue done


      if (_typeof(options.instant) === 'object' && options.instant[type]) {
        var els = obj[type].queueEls;

        if (el === els[els.length - 1]) {
          // only if last element
          self.queueOnDone(obj, type, skipQueue);
        }
      } // listener dispatch


      el.dispatchEvent(new CustomEvent('on.xt', {
        detail: obj[type].detail
      }));
    }
    /**
     * queue off start
     * @param {Object} obj Queue object
     * @param {Node|HTMLElement|EventTarget|Window} el Elements to be deactivated
     * @param {String} type Type of elements
     * @param {Boolean} skipQueue If skip queue
     */

  }, {
    key: "queueOffDelayDone",
    value: function queueOffDelayDone(obj, el, type) {
      var _el$classList5, _el$classList6, _el$classList7;

      var skipQueue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var self = this;
      var options = self.options; // deactivate

      (_el$classList5 = el.classList).remove.apply(_el$classList5, _toConsumableArray(self.classes));

      (_el$classList6 = el.classList).remove.apply(_el$classList6, _toConsumableArray(self.classesIn));

      (_el$classList7 = el.classList).add.apply(_el$classList7, _toConsumableArray(self.classesOut));

      self.decorateDirection(el); // special

      var before = getComputedStyle(el, '::before').getPropertyValue('content').replace(/['"]+/g, '');
      var after = getComputedStyle(el, '::after').getPropertyValue('content').replace(/['"]+/g, '');
      self.specialCollapseOff(el, before, after);

      if (type === 'targets' || type === 'targetsInner') {
        self.specialCloseOff(el);
      } // queue


      if (!skipQueue) {
        self.queueOffAnim(obj, el, type);
      } // queue done


      if (_typeof(options.instant) === 'object' && options.instant[type]) {
        var els = obj[type].queueEls;

        if (el === els[els.length - 1]) {
          // only if last element
          self.queueOffDone(obj, type, skipQueue);
        }
      } // listener dispatch


      el.dispatchEvent(new CustomEvent('off.xt', {
        detail: obj[type].detail
      }));
    }
    /**
     * queue on anim
     * @param {Object} obj Queue object
     * @param {Node|HTMLElement|EventTarget|Window} el Element to be animated
     * @param {String} type Type of element
     */

  }, {
    key: "queueOnAnim",
    value: function queueOnAnim(obj, el, type) {
      var self = this;
      var options = self.options; // anim

      var duration = _xtend.default.animTime(el, options.durationOn);

      clearTimeout(el.dataset.xtAnimTimeout);

      if (!duration) {
        self.queueOnAnimDone(obj, el, type);
      } else {
        el.dataset.xtAnimTimeout = setTimeout(function () {
          self.queueOnAnimDone(obj, el, type);
        }, duration).toString();
      }
    }
    /**
     * queue off anim
     * @param {Object} obj Queue object
     * @param {Node|HTMLElement|EventTarget|Window} el Element to be animated
     * @param {String} type Type of element
     */

  }, {
    key: "queueOffAnim",
    value: function queueOffAnim(obj, el, type) {
      var self = this;
      var options = self.options; // anim

      var duration = _xtend.default.animTime(el, options.durationOff);

      clearTimeout(el.dataset.xtAnimTimeout);

      if (!duration) {
        self.queueOffAnimDone(obj, el, type);
      } else {
        el.dataset.xtAnimTimeout = setTimeout(function () {
          self.queueOffAnimDone(obj, el, type);
        }, duration).toString();
      }
    }
    /**
     * queue on anim done
     * @param {Object} obj Queue object
     * @param {Node|HTMLElement|EventTarget|Window} el Element to be animated
     * @param {String} type Type of element
     * @param {Boolean} skipQueue If skip queue
     */

  }, {
    key: "queueOnAnimDone",
    value: function queueOnAnimDone(obj, el, type) {
      var _el$classList8;

      var skipQueue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var self = this;
      var options = self.options; // reset

      (_el$classList8 = el.classList).remove.apply(_el$classList8, _toConsumableArray(self.classesIn)); // special


      var before = getComputedStyle(el, '::before').getPropertyValue('content').replace(/['"]+/g, '');
      var after = getComputedStyle(el, '::after').getPropertyValue('content').replace(/['"]+/g, '');
      self.specialCollapseReset(el, before, after); // aria

      if (options.aria) {
        // tabindex
        if (options.aria === true || options.aria.tabindex) {
          if (type === 'targets') {
            var focusables = el.querySelectorAll(_xtend.default.focusables);
            var _iteratorNormalCompletion32 = true;
            var _didIteratorError32 = false;
            var _iteratorError32 = undefined;

            try {
              for (var _iterator32 = focusables[Symbol.iterator](), _step32; !(_iteratorNormalCompletion32 = (_step32 = _iterator32.next()).done); _iteratorNormalCompletion32 = true) {
                var focusable = _step32.value;
                focusable.removeAttribute('tabindex');
              }
            } catch (err) {
              _didIteratorError32 = true;
              _iteratorError32 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion32 && _iterator32.return != null) {
                  _iterator32.return();
                }
              } finally {
                if (_didIteratorError32) {
                  throw _iteratorError32;
                }
              }
            }
          }
        }
      } // queue done


      if (options.instant === false || _typeof(options.instant) === 'object' && !options.instant[type]) {
        var els = obj[type].queueEls;

        if (el === els[els.length - 1]) {
          // only if last element
          self.queueOnDone(obj, type, skipQueue);
        }
      } // listener dispatch


      el.dispatchEvent(new CustomEvent('ondone.xt', {
        detail: obj[type].detail
      }));
    }
    /**
     * queue off anim done
     * @param {Object} obj Queue object
     * @param {Node|HTMLElement|EventTarget|Window} el Element to be animated
     * @param {String} type Type of element
     * @param {Boolean} skipQueue If skip queue
     */

  }, {
    key: "queueOffAnimDone",
    value: function queueOffAnimDone(obj, el, type) {
      var _el$classList9;

      var skipQueue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var self = this;
      var options = self.options; // reset

      (_el$classList9 = el.classList).remove.apply(_el$classList9, _toConsumableArray(self.classesOut)); // special


      if (type === 'targets') {
        // appendTo
        if (options.appendTo) {
          var appendOrigin = document.querySelectorAll('[data-xt-origin=' + self.namespace + ']');

          if (appendOrigin.length) {
            appendOrigin[0].before(el);
          }
        }
      } // aria


      if (options.aria) {
        // selected
        if (type === 'elements') {
          var ariaEls = self.getInside(el, options.ariaControls);
          var ariaEl = ariaEls.length ? ariaEls[0] : el;
          ariaEl.setAttribute('aria-selected', 'false');
        }

        if (type === 'targets') {
          // expanded
          var role = el.getAttribute('role');

          if (role === 'tabpanel' || role === 'listbox' || role === 'dialog') {
            el.setAttribute('aria-expanded', 'false');
          } // tabindex


          if (options.aria === true || options.aria.tabindex) {
            var focusables = el.querySelectorAll(_xtend.default.focusables);
            var _iteratorNormalCompletion33 = true;
            var _didIteratorError33 = false;
            var _iteratorError33 = undefined;

            try {
              for (var _iterator33 = focusables[Symbol.iterator](), _step33; !(_iteratorNormalCompletion33 = (_step33 = _iterator33.next()).done); _iteratorNormalCompletion33 = true) {
                var focusable = _step33.value;
                focusable.setAttribute('tabindex', '-1');
                focusable.blur();
              }
            } catch (err) {
              _didIteratorError33 = true;
              _iteratorError33 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion33 && _iterator33.return != null) {
                  _iterator33.return();
                }
              } finally {
                if (_didIteratorError33) {
                  throw _iteratorError33;
                }
              }
            }
          }
        }
      } // queue done


      if (options.instant === false || _typeof(options.instant) === 'object' && !options.instant[type]) {
        var els = obj[type].queueEls;

        if (el === els[els.length - 1]) {
          // only if last element
          self.queueOffDone(obj, type, skipQueue);
        }
      } // listener dispatch


      el.dispatchEvent(new CustomEvent('offdone.xt', {
        detail: obj[type].detail
      }));
    } //////////////////////
    // special
    //////////////////////

    /**
     * add html class
     */

  }, {
    key: "specialClassHtmlOn",
    value: function specialClassHtmlOn() {
      var self = this;
      var options = self.options; // class on

      if (options.classHtml) {
        var _container$classList;

        var container = document.documentElement;

        (_container$classList = container.classList).add.apply(_container$classList, _toConsumableArray(options.classHtml.split(' ')));
      }
    }
    /**
     * remove html class
     */

  }, {
    key: "specialClassHtmlOff",
    value: function specialClassHtmlOff() {
      var self = this;
      var options = self.options; // class off

      if (options.classHtml) {
        var _container$classList2;

        var container = document.documentElement;

        (_container$classList2 = container.classList).remove.apply(_container$classList2, _toConsumableArray(options.classHtml.split(' ')));
      }
    }
    /**
     * backdrop append to element
     * @param {Object} obj Queue object
     */

  }, {
    key: "specialBackdrop",
    value: function specialBackdrop(obj) {
      var self = this;
      var options = self.options; // backdrop

      if (options.backdrop) {
        var elements = typeof options.backdrop === 'string' && obj[options.backdrop] ? _xtend.default.arrSingle(obj[options.backdrop].queueEls) : _xtend.default.arrSingle(self.object);
        var _iteratorNormalCompletion34 = true;
        var _didIteratorError34 = false;
        var _iteratorError34 = undefined;

        try {
          for (var _iterator34 = elements[Symbol.iterator](), _step34; !(_iteratorNormalCompletion34 = (_step34 = _iterator34.next()).done); _iteratorNormalCompletion34 = true) {
            var element = _step34.value;
            var backdrop = element.querySelectorAll('.backdrop');

            if (!backdrop.length) {
              backdrop = _xtend.default.createElement('<div class="backdrop"></div>');
              element.append(backdrop);
            }
          }
        } catch (err) {
          _didIteratorError34 = true;
          _iteratorError34 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion34 && _iterator34.return != null) {
              _iterator34.return();
            }
          } finally {
            if (_didIteratorError34) {
              throw _iteratorError34;
            }
          }
        }
      }
    }
    /**
     * center position on activation
     * @param {Node|HTMLElement|EventTarget|Window} el Element
     * @param {String} before Before content
     * @param {String} after After content
     */

  }, {
    key: "specialCenter",
    value: function specialCenter(el, before, after) {
      var self = this; // specialCenter

      if (before === 'xt-drop--center') {
        var add = self.object.clientWidth;
        var remove = el.clientWidth;
        el.style.left = (add - remove) / 2 + 'px';
      }
    }
    /**
     * middle position on activation
     * @param {Node|HTMLElement|EventTarget|Window} el Element
     * @param {String} before Before content
     * @param {String} after After content
     */

  }, {
    key: "specialMiddle",
    value: function specialMiddle(el, before, after) {
      var self = this; // specialMiddle

      if (after === 'xt-drop--middle') {
        var add = self.object.clientHeight;
        var remove = el.clientHeight;
        el.style.top = (add - remove) / 2 + 'px';
      }
    }
    /**
     * open collapse on activation
     * @param {Node|HTMLElement|EventTarget|Window} el Element
     * @param {String} before Before content
     * @param {String} after After content
     */

  }, {
    key: "specialCollapseOn",
    value: function specialCollapseOn(el, before, after) {
      if (el instanceof HTMLElement) {
        if (before === 'xt-collapse--height') {
          el.classList.add('xt-hide');
          el.style.height = 'auto';
          el.style.paddingTop = '';
          el.style.paddingBottom = '';
          var h = el.clientHeight + 'px';
          var pt = el.style.paddingTop;
          var pb = el.style.paddingBottom;
          cancelAnimationFrame(parseFloat(el.dataset.xtCollapseFrame));
          el.dataset.xtCollapseFrame = requestAnimationFrame(function () {
            el.classList.remove('xt-hide');
            el.style.height = '0';
            el.style.paddingTop = '0';
            el.style.paddingBottom = '0';
            el.dataset.xtCollapseFrame = requestAnimationFrame(function () {
              el.style.height = h;
              el.style.paddingTop = pt;
              el.style.paddingBottom = pb;
            }).toString();
          }).toString();
        }

        if (after === 'xt-collapse--width') {
          el.classList.add('xt-hide');
          el.style.width = 'auto';
          el.style.paddingLeft = '';
          el.style.paddingRight = '';
          var w = el.clientHeight + 'px';
          var pl = el.style.paddingLeft;
          var pr = el.style.paddingRight;
          cancelAnimationFrame(parseFloat(el.dataset.xtCollapseFrame));
          el.dataset.xtCollapseFrame = requestAnimationFrame(function () {
            el.classList.remove('xt-hide');
            el.style.width = '0';
            el.style.paddingLeft = '0';
            el.style.paddingRight = '0';
            el.dataset.xtCollapseFrame = requestAnimationFrame(function () {
              el.style.width = w;
              el.style.paddingLeft = pl;
              el.style.paddingRight = pr;
            }).toString();
          }).toString();
        }
      }
    }
    /**
     * close collapse on deactivation
     * @param {Node|HTMLElement|EventTarget|Window} el Element
     * @param {String} before Before content
     * @param {String} after After content
     */

  }, {
    key: "specialCollapseOff",
    value: function specialCollapseOff(el, before, after) {
      if (el instanceof HTMLElement) {
        if (before === 'xt-collapse--height') {
          var h = el.clientHeight + 'px';
          var pt = el.style.paddingTop;
          var pb = el.style.paddingBottom;
          cancelAnimationFrame(parseFloat(el.dataset.xtCollapseFrame));
          el.dataset.xtCollapseFrame = requestAnimationFrame(function () {
            el.style.height = h;
            el.style.paddingTop = pt;
            el.style.paddingBottom = pb;
            el.dataset.xtCollapseFrame = requestAnimationFrame(function () {
              el.style.height = '0';
              el.style.paddingTop = '0';
              el.style.paddingBottom = '0';
            }).toString();
          }).toString();
        }

        if (after === 'xt-collapse--width') {
          var w = el.clientWidth + 'px';
          var pl = el.style.paddingLeft;
          var pr = el.style.paddingRight;
          cancelAnimationFrame(parseFloat(el.dataset.xtCollapseFrame));
          el.dataset.xtCollapseFrame = requestAnimationFrame(function () {
            el.style.width = w;
            el.style.paddingLeft = pl;
            el.style.paddingRight = pr;
            el.dataset.xtCollapseFrame = requestAnimationFrame(function () {
              el.style.width = '0';
              el.style.paddingLeft = '0';
              el.style.paddingRight = '0';
            }).toString();
          }).toString();
        }
      }
    }
    /**
     * reset collapse
     * @param {Node|HTMLElement|EventTarget|Window} el Element
     * @param {String} before Before content
     * @param {String} after After content
     */

  }, {
    key: "specialCollapseReset",
    value: function specialCollapseReset(el, before, after) {
      if (el instanceof HTMLElement) {
        if (before === 'xt-collapse--height') {
          el.style.height = 'inherit';
          el.style.paddingTop = '';
          el.style.paddingBottom = '';
        }

        if (after === 'xt-collapse--width') {
          el.style.width = 'inherit';
          el.style.paddingLeft = '';
          el.style.paddingRight = '';
        }
      }
    }
    /**
     * add close events on element
     * @param {Node|HTMLElement|EventTarget|Window} el Element
     * @param {Node|HTMLElement|EventTarget|Window} single Element to toggle
     */

  }, {
    key: "specialCloseOn",
    value: function specialCloseOn(el, single) {
      var self = this;
      var options = self.options; // closeInside

      if (options.closeInside) {
        var closeElements = el.querySelectorAll(options.closeInside);
        requestAnimationFrame(function () {
          var _iteratorNormalCompletion35 = true;
          var _didIteratorError35 = false;
          var _iteratorError35 = undefined;

          try {
            for (var _iterator35 = closeElements[Symbol.iterator](), _step35; !(_iteratorNormalCompletion35 = (_step35 = _iterator35.next()).done); _iteratorNormalCompletion35 = true) {
              var closeElement = _step35.value;

              var specialCloseInsideHandler = _xtend.default.dataStorage.put(closeElement, 'click.close' + '.' + self.namespace, self.eventSpecialCloseInsideHandler.bind(self).bind(self, closeElement, single));

              closeElement.addEventListener('click', specialCloseInsideHandler);
            }
          } catch (err) {
            _didIteratorError35 = true;
            _iteratorError35 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion35 && _iterator35.return != null) {
                _iterator35.return();
              }
            } finally {
              if (_didIteratorError35) {
                throw _iteratorError35;
              }
            }
          }
        });
      } // closeOutside


      if (options.closeOutside) {
        var _closeElements = document.querySelectorAll(options.closeOutside);

        requestAnimationFrame(function () {
          var _iteratorNormalCompletion36 = true;
          var _didIteratorError36 = false;
          var _iteratorError36 = undefined;

          try {
            for (var _iterator36 = _closeElements[Symbol.iterator](), _step36; !(_iteratorNormalCompletion36 = (_step36 = _iterator36.next()).done); _iteratorNormalCompletion36 = true) {
              var closeElement = _step36.value;

              var specialCloseOutsideHandler = _xtend.default.dataStorage.put(closeElement, 'click.close' + '.' + self.namespace, self.eventSpecialCloseOutsideHandler.bind(self).bind(self, el, single));

              closeElement.addEventListener('click', specialCloseOutsideHandler);
            }
          } catch (err) {
            _didIteratorError36 = true;
            _iteratorError36 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion36 && _iterator36.return != null) {
                _iterator36.return();
              }
            } finally {
              if (_didIteratorError36) {
                throw _iteratorError36;
              }
            }
          }
        });
      }
    }
    /**
     * remove close events on element
     * @param {Node|HTMLElement|EventTarget|Window} el Element
     */

  }, {
    key: "specialCloseOff",
    value: function specialCloseOff(el) {
      var self = this;
      var options = self.options; // closeInside

      if (options.closeInside) {
        var closeElements = el.querySelectorAll(options.closeInside);
        var _iteratorNormalCompletion37 = true;
        var _didIteratorError37 = false;
        var _iteratorError37 = undefined;

        try {
          for (var _iterator37 = closeElements[Symbol.iterator](), _step37; !(_iteratorNormalCompletion37 = (_step37 = _iterator37.next()).done); _iteratorNormalCompletion37 = true) {
            var closeElement = _step37.value;

            var specialCloseInsideHandler = _xtend.default.dataStorage.get(closeElement, 'click.close' + '.' + self.namespace);

            closeElement.removeEventListener('click', specialCloseInsideHandler);
          }
        } catch (err) {
          _didIteratorError37 = true;
          _iteratorError37 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion37 && _iterator37.return != null) {
              _iterator37.return();
            }
          } finally {
            if (_didIteratorError37) {
              throw _iteratorError37;
            }
          }
        }
      } // closeOutside


      if (options.closeOutside) {
        var _closeElements2 = document.querySelectorAll(options.closeOutside);

        var _iteratorNormalCompletion38 = true;
        var _didIteratorError38 = false;
        var _iteratorError38 = undefined;

        try {
          for (var _iterator38 = _closeElements2[Symbol.iterator](), _step38; !(_iteratorNormalCompletion38 = (_step38 = _iterator38.next()).done); _iteratorNormalCompletion38 = true) {
            var _closeElement = _step38.value;

            var specialCloseOutsideHandler = _xtend.default.dataStorage.get(_closeElement, 'click.close' + '.' + self.namespace);

            _closeElement.removeEventListener('click', specialCloseOutsideHandler);
          }
        } catch (err) {
          _didIteratorError38 = true;
          _iteratorError38 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion38 && _iterator38.return != null) {
              _iterator38.return();
            }
          } finally {
            if (_didIteratorError38) {
              throw _iteratorError38;
            }
          }
        }
      }
    }
    /**
     * element on handler
     * @param {Node|HTMLElement|EventTarget|Window} checkEl
     * @param {Node|HTMLElement|EventTarget|Window} single
     * @param {Event} e
     */

  }, {
    key: "eventSpecialCloseInsideHandler",
    value: function eventSpecialCloseInsideHandler(checkEl, single, e) {
      var self = this; // prevent closing when nested and moved (ex: overlay)

      if (!_xtend.default.checkNested(checkEl, self.targets)) {
        return false;
      } // handler


      if (_xtend.default.checkNested(e.target, _xtend.default.arrSingle(checkEl))) {
        self.eventOff(single);
      }
    }
    /**
     * element off handler
     * @param {Node|HTMLElement|EventTarget|Window} checkEl
     * @param {Node|HTMLElement|EventTarget|Window} single
     * @param {Event} e
     */

  }, {
    key: "eventSpecialCloseOutsideHandler",
    value: function eventSpecialCloseOutsideHandler(checkEl, single, e) {
      var self = this; // handler

      if (!_xtend.default.checkNested(e.target, _xtend.default.arrSingle(checkEl))) {
        self.eventOff(single);
      }
    }
    /**
     * scrollbar activation
     */

  }, {
    key: "specialScrollbarOn",
    value: function specialScrollbarOn() {
      var self = this;
      var options = self.options; // scrollbar on

      if (options.scrollbar) {
        // checks
        _xtend.default.scrollbar.add(self.namespace); // var


        var width = _xtend.default.scrollbarWidth(); // scrollbar


        var container = document.documentElement;
        container.style.paddingRight = width + 'px';
        container.classList.add('xt-scrollbar'); // check fixed

        var checks = document.querySelectorAll('.xt-fixed--inner > *');
        var _iteratorNormalCompletion39 = true;
        var _didIteratorError39 = false;
        var _iteratorError39 = undefined;

        try {
          for (var _iterator39 = checks[Symbol.iterator](), _step39; !(_iteratorNormalCompletion39 = (_step39 = _iterator39.next()).done); _iteratorNormalCompletion39 = true) {
            var check = _step39.value;
            var style = getComputedStyle(check);

            if (style.position === 'fixed') {
              check.classList.add('xt-fixed');
            } else {
              check.classList.remove('xt-fixed');
            }
          } // fixed

        } catch (err) {
          _didIteratorError39 = true;
          _iteratorError39 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion39 && _iterator39.return != null) {
              _iterator39.return();
            }
          } finally {
            if (_didIteratorError39) {
              throw _iteratorError39;
            }
          }
        }

        var elements = document.querySelectorAll('.xt-fixed');
        var _iteratorNormalCompletion40 = true;
        var _didIteratorError40 = false;
        var _iteratorError40 = undefined;

        try {
          var _loop6 = function _loop6() {
            var element = _step40.value;
            element.style.paddingRight = '';
            var style = getComputedStyle(element);

            if (self.normalizeWidth(element.clientWidth) === '') {
              // only if full width
              var padding = style.paddingRight;
              var str = 'calc(' + padding + ' + ' + width + 'px)';
              element.classList.add('transition-none');
              requestAnimationFrame(function () {
                element.style.paddingRight = str;
                requestAnimationFrame(function () {
                  element.classList.remove('transition-none');
                });
              });
            }
          };

          for (var _iterator40 = elements[Symbol.iterator](), _step40; !(_iteratorNormalCompletion40 = (_step40 = _iterator40.next()).done); _iteratorNormalCompletion40 = true) {
            _loop6();
          } // backdrop

        } catch (err) {
          _didIteratorError40 = true;
          _iteratorError40 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion40 && _iterator40.return != null) {
              _iterator40.return();
            }
          } finally {
            if (_didIteratorError40) {
              throw _iteratorError40;
            }
          }
        }

        var backdrops = document.querySelectorAll('.backdrop');
        var _iteratorNormalCompletion41 = true;
        var _didIteratorError41 = false;
        var _iteratorError41 = undefined;

        try {
          for (var _iterator41 = backdrops[Symbol.iterator](), _step41; !(_iteratorNormalCompletion41 = (_step41 = _iterator41.next()).done); _iteratorNormalCompletion41 = true) {
            var backdrop = _step41.value;
            backdrop.style.right = width + 'px';
          }
        } catch (err) {
          _didIteratorError41 = true;
          _iteratorError41 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion41 && _iterator41.return != null) {
              _iterator41.return();
            }
          } finally {
            if (_didIteratorError41) {
              throw _iteratorError41;
            }
          }
        }
      }
    }
    /**
     * scrollbar deactivation
     */

  }, {
    key: "specialScrollbarOff",
    value: function specialScrollbarOff() {
      var self = this;
      var options = self.options; // scrollbar off

      if (options.scrollbar) {
        // checks
        _xtend.default.scrollbar.remove(self.namespace);

        if (!_xtend.default.scrollbar.get().length) {
          // scrollbar
          var container = document.documentElement;
          container.style.paddingRight = '';
          container.classList.remove('xt-scrollbar'); // fixed

          var elements = document.querySelectorAll('.xt-fixed');
          var _iteratorNormalCompletion42 = true;
          var _didIteratorError42 = false;
          var _iteratorError42 = undefined;

          try {
            var _loop7 = function _loop7() {
              var element = _step42.value;
              element.classList.add('transition-none');
              requestAnimationFrame(function () {
                element.style.paddingRight = '';
                requestAnimationFrame(function () {
                  element.classList.remove('transition-none');
                });
              });
            };

            for (var _iterator42 = elements[Symbol.iterator](), _step42; !(_iteratorNormalCompletion42 = (_step42 = _iterator42.next()).done); _iteratorNormalCompletion42 = true) {
              _loop7();
            } // backdrop

          } catch (err) {
            _didIteratorError42 = true;
            _iteratorError42 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion42 && _iterator42.return != null) {
                _iterator42.return();
              }
            } finally {
              if (_didIteratorError42) {
                throw _iteratorError42;
              }
            }
          }

          var backdrops = self.object.querySelectorAll(':scope > .backdrop');
          var _iteratorNormalCompletion43 = true;
          var _didIteratorError43 = false;
          var _iteratorError43 = undefined;

          try {
            for (var _iterator43 = backdrops[Symbol.iterator](), _step43; !(_iteratorNormalCompletion43 = (_step43 = _iterator43.next()).done); _iteratorNormalCompletion43 = true) {
              var backdrop = _step43.value;
              backdrop.style.right = '';
            }
          } catch (err) {
            _didIteratorError43 = true;
            _iteratorError43 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion43 && _iterator43.return != null) {
                _iterator43.return();
              }
            } finally {
              if (_didIteratorError43) {
                throw _iteratorError43;
              }
            }
          }
        }
      }
    }
    /**
     * if full width return '' else return value in px
     * @param {Number|String} width
     * @returns {String} Value in px
     */

  }, {
    key: "normalizeWidth",
    value: function normalizeWidth(width) {
      width = parseFloat(width);

      if (width + _xtend.default.scrollbarWidth() >= window.innerWidth) {
        width = '';
      } else {
        width += 'px';
      }

      return width;
    } //////////////////////
    // goto
    //////////////////////

    /**
     * activate next element
     * @param {Number} amount
     * @param {Boolean} force
     * @param {Boolean} loop
     */

  }, {
    key: "goToNext",
    value: function goToNext() {
      var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var loop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var self = this; // goToIndex

      var index = 0;

      if (self.currentIndex !== null) {
        index = self.currentIndex + amount;
      }

      self.detail.inverseDirectionForce = false;
      self.goToIndex(index, force, loop);
    }
    /**
     * activate prev element
     * @param {Number} amount
     * @param {Boolean} force
     * @param {Boolean} loop
     */

  }, {
    key: "goToPrev",
    value: function goToPrev() {
      var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var loop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var self = this; // goToIndex

      var index = self.getElementsSingle().length - 1;

      if (self.currentIndex !== null) {
        index = self.currentIndex - amount;
      }

      self.detail.inverseDirectionForce = true;
      self.goToIndex(index, force, loop);
    }
    /**
     * activate index element
     * @param {Number} index
     * @param {Boolean} force
     * @param {Boolean} loop
     */

  }, {
    key: "goToIndex",
    value: function goToIndex(index) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var loop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var self = this;
      var options = self.options; // check

      var max = self.getElementsSingle().length - 1;

      if (index > max) {
        if (loop || loop === null && options.loop) {
          index = index - max - 1;
          index = index > max ? max : index; // prevent overflow
        } else {
          index = max;
        }
      } else if (index < 0) {
        if (loop || loop == null && options.loop) {
          index = index + max + 1;
          index = index < 0 ? 0 : index; // prevent overflow
        } else {
          index = 0;
        }
      } // go


      var current = self.elements[index];
      self.eventOn(current, force);
    } //////////////////////
    // status
    //////////////////////

    /**
     * disable
     */

  }, {
    key: "disable",
    value: function disable() {
      var self = this; // disable

      self.disabled = true;
      self.object.classList.add('xt-disabled');
    }
    /**
     * disable
     */

  }, {
    key: "enable",
    value: function enable() {
      var self = this; // enable

      self.disabled = false;
      self.object.classList.remove('xt-disabled');
    } //////////////////////
    // destroy
    //////////////////////

    /**
     * destroy
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var self = this; // remove events

      var elements = self.destroyElements;
      var _iteratorNormalCompletion44 = true;
      var _didIteratorError44 = false;
      var _iteratorError44 = undefined;

      try {
        for (var _iterator44 = elements[Symbol.iterator](), _step44; !(_iteratorNormalCompletion44 = (_step44 = _iterator44.next()).done); _iteratorNormalCompletion44 = true) {
          var element = _step44.value;

          var storages = _xtend.default.dataStorage.getAll(element);

          if (storages) {
            var _iteratorNormalCompletion45 = true;
            var _didIteratorError45 = false;
            var _iteratorError45 = undefined;

            try {
              for (var _iterator45 = storages[Symbol.iterator](), _step45; !(_iteratorNormalCompletion45 = (_step45 = _iterator45.next()).done); _iteratorNormalCompletion45 = true) {
                var _step45$value = _slicedToArray(_step45.value, 2),
                    key = _step45$value[0],
                    storage = _step45$value[1];

                if (key.endsWith(self.namespace)) {
                  var handler = _xtend.default.dataStorage.get(element, key);

                  var events = key.split('.')[0].split(' ');
                  var _iteratorNormalCompletion46 = true;
                  var _didIteratorError46 = false;
                  var _iteratorError46 = undefined;

                  try {
                    for (var _iterator46 = events[Symbol.iterator](), _step46; !(_iteratorNormalCompletion46 = (_step46 = _iterator46.next()).done); _iteratorNormalCompletion46 = true) {
                      var event = _step46.value;
                      element.removeEventListener(event, handler);
                    }
                  } catch (err) {
                    _didIteratorError46 = true;
                    _iteratorError46 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion46 && _iterator46.return != null) {
                        _iterator46.return();
                      }
                    } finally {
                      if (_didIteratorError46) {
                        throw _iteratorError46;
                      }
                    }
                  }
                }
              }
            } catch (err) {
              _didIteratorError45 = true;
              _iteratorError45 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion45 && _iterator45.return != null) {
                  _iterator45.return();
                }
              } finally {
                if (_didIteratorError45) {
                  throw _iteratorError45;
                }
              }
            }
          }
        } // remove setup

      } catch (err) {
        _didIteratorError44 = true;
        _iteratorError44 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion44 && _iterator44.return != null) {
            _iterator44.return();
          }
        } finally {
          if (_didIteratorError44) {
            throw _iteratorError44;
          }
        }
      }

      self.object.removeAttribute('data-' + self.componentName + '-done');

      _xtend.default.remove(self.object, self.componentName); // destroy


      delete this;
    }
  }]);

  return Core;
}(); //////////////////////
// option
//////////////////////


Core.componentName = 'xt-core'; //////////////////////
// export
//////////////////////

var _default = Core;
exports.default = _default;

},{"./xtend":11}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _xtend = _interopRequireDefault(require("../xtend"));

var _core = _interopRequireDefault(require("../core"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

//////////////////////
// Drop
//////////////////////
var Drop =
/*#__PURE__*/
function (_Core) {
  _inherits(Drop, _Core);

  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsJs User options
   * @constructor
   */
  function Drop(object) {
    var optionsJs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Drop);

    return _possibleConstructorReturn(this, _getPrototypeOf(Drop).call(this, object, optionsJs));
  } //////////////////////
  // init
  //////////////////////

  /**
   * init aria
   */


  _createClass(Drop, [{
    key: "initAria",
    value: function initAria() {
      _get(_getPrototypeOf(Drop.prototype), "initAria", this).call(this);

      var self = this;
      var options = self.options; // aria

      if (options.aria) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = self.elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var el = _step.value;
            var ariaEls = self.getInside(el, options.ariaControls);
            var ariaEl = ariaEls.length ? ariaEls[0] : el;
            ariaEl.setAttribute('aria-haspopup', 'listbox');
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = self.targets[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var tr = _step2.value;
            tr.setAttribute('role', 'listbox');
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    }
  }]);

  return Drop;
}(_core.default); //////////////////////
// option
//////////////////////


Drop.componentName = 'xt-drop';
Drop.optionsDefault = {
  "targets": ":scope > .drop",
  "elementsInner": ":scope > a, :scope > button",
  "class": "active",
  "on": "click",
  "min": 0,
  "max": 1,
  "instant": {
    "elementsInner": true
  },
  "autoClose": true,
  "closeOutside": "body",
  "ariaControls": ":scope > a, :scope > button"
}; //////////////////////
// export
//////////////////////

var _default = Drop;
exports.default = _default;

},{"../core":1,"../xtend":11}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _xtend = _interopRequireDefault(require("../xtend"));

var _core = _interopRequireDefault(require("../core"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

//////////////////////
// Overlay
//////////////////////
var Overlay =
/*#__PURE__*/
function (_Core) {
  _inherits(Overlay, _Core);

  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsJs User options
   * @constructor
   */
  function Overlay(object) {
    var optionsJs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Overlay);

    return _possibleConstructorReturn(this, _getPrototypeOf(Overlay).call(this, object, optionsJs));
  } //////////////////////
  // init
  //////////////////////

  /**
   * init aria
   */


  _createClass(Overlay, [{
    key: "initAria",
    value: function initAria() {
      _get(_getPrototypeOf(Overlay.prototype), "initAria", this).call(this);

      var self = this;
      var options = self.options; // aria

      if (options.aria) {
        if (self.targets.length) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = self.elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var el = _step.value;
              var ariaEls = self.getInside(el, options.ariaControls);
              var ariaEl = ariaEls.length ? ariaEls[0] : el;
              ariaEl.setAttribute('aria-haspopup', 'dialog');
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = self.targets[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var tr = _step2.value;
              tr.setAttribute('role', 'dialog');
              tr.setAttribute('aria-modal', 'true');
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        } else {
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = self.elements[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var _el = _step3.value;

              _el.setAttribute('role', 'dialog');

              _el.setAttribute('aria-modal', 'true');
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        }
      }
    }
  }]);

  return Overlay;
}(_core.default); //////////////////////
// option
//////////////////////


Overlay.componentName = 'xt-overlay';
Overlay.optionsDefault = {
  "elements": ":scope > a, :scope > button",
  "targets": ":scope > .overlay_outer",
  "class": "active",
  "on": "click",
  "min": 0,
  "max": 1,
  "instant": {
    "elements": true
  },
  "autoClose": true,
  "appendTo": "body",
  "backdrop": "targets",
  "classHtml": "xt-overlay",
  "closeInside": ".overlay_dismiss, :scope > .backdrop",
  "scrollbar": true
}; //////////////////////
// export
//////////////////////

var _default = Overlay;
exports.default = _default;

},{"../core":1,"../xtend":11}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _xtend = _interopRequireDefault(require("../xtend"));

var _core = _interopRequireDefault(require("../core"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

//////////////////////
// Toggle
//////////////////////
var Toggle =
/*#__PURE__*/
function (_Core) {
  _inherits(Toggle, _Core);

  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsJs User options
   * @constructor
   */
  function Toggle(object) {
    var optionsJs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Toggle);

    return _possibleConstructorReturn(this, _getPrototypeOf(Toggle).call(this, object, optionsJs));
  } //////////////////////
  // init
  //////////////////////

  /**
   * init aria
   */


  _createClass(Toggle, [{
    key: "initAria",
    value: function initAria() {
      _get(_getPrototypeOf(Toggle.prototype), "initAria", this).call(this);

      var self = this;
      var options = self.options; // aria

      if (options.aria) {
        if (self.targets.length) {
          if (self.mode === 'multiple') {
            self.object.setAttribute('role', 'tablist');

            if (options.max > 1) {
              self.object.setAttribute('aria-multiselectable', 'true');
            }

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = self.elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var el = _step.value;
                var ariaEls = self.getInside(el, options.ariaControls);
                var ariaEl = ariaEls.length ? ariaEls[0] : el;
                ariaEl.setAttribute('role', 'tab');
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = self.targets[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var tr = _step2.value;
                tr.setAttribute('role', 'tabpanel');
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }
        }
      }
    }
  }]);

  return Toggle;
}(_core.default); //////////////////////
// option
//////////////////////


Toggle.componentName = 'xt-toggle';
Toggle.optionsDefault = {
  "elements": ":scope > a, :scope > button",
  "targets": ":scope > [class^=\"toggle--\"], :scope > [class*=\" toggle--\"]",
  "class": "active",
  "on": "click",
  "min": 0,
  "max": 1,
  "instant": {
    "elements": true
  }
}; //////////////////////
// export
//////////////////////

var _default = Toggle;
exports.default = _default;

},{"../core":1,"../xtend":11}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _xtend = _interopRequireDefault(require("../xtend"));

var _core = _interopRequireDefault(require("../core"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

//////////////////////
// Drop
//////////////////////
var Ajax =
/*#__PURE__*/
function (_Core) {
  _inherits(Ajax, _Core);

  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsJs User options
   * @constructor
   */
  function Ajax(object) {
    var _this;

    var optionsJs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Ajax);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Ajax).call(this, object, optionsJs)); // prevent scroll on popstate

    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    return _this;
  } //////////////////////
  // init
  //////////////////////

  /**
   * init
   */


  _createClass(Ajax, [{
    key: "init",
    value: function init() {
      var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var optionsJs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var self = this; // var

      self.locationFrom = self.locationTo || null; // fix popstate

      self.locationTo = null; // super

      _get(_getPrototypeOf(Ajax.prototype), "init", this).call(this);
    }
    /**
     * init setup
     */

  }, {
    key: "initSetup",
    value: function initSetup() {
      _get(_getPrototypeOf(Ajax.prototype), "initSetup", this).call(this);

      var self = this;
      var options = self.options; // queryElement

      self.queryElement = self.object.querySelectorAll(options.query)[0] || self.object;
    }
    /**
     * init elements
     */

  }, {
    key: "initScopeElements",
    value: function initScopeElements() {
      _get(_getPrototypeOf(Ajax.prototype), "initScopeElements", this).call(this);

      var self = this; // remove external links

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var element = _step.value;

          if (location.hostname !== element.hostname || element.getAttribute('href').split('#')[0] === '') {
            self.elements = Array.from(self.elements).filter(function (x) {
              return x !== element;
            });
          }
        };

        for (var _iterator = self.elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
        } // generate groups

      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      self.groupUrl = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = self.elements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var element = _step2.value;
          // populate
          var url = element.getAttribute('href').split('#')[0];

          if (!self.groupUrl[url]) {
            self.groupUrl[url] = [];
          }

          self.groupUrl[url].push(element); // assign group

          element.setAttribute('data-xt-group', self.namespace + '-' + url);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
    /**
     * init currents
     */

  }, {
    key: "initCurrents",
    value: function initCurrents() {
      var self = this; // initial

      self.initial = true; // automatic initial currents

      var elements = self.elements;

      if (elements.length) {
        var found = false;
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = self.elements[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var element = _step3.value;
            var loc = location.pathname + location.search;

            var _url = element.pathname + element.search;

            if (_url !== '') {
              if (loc === _url) {
                found = true;
                self.eventOn(element, false);
              } else {
                self.eventOff(element, false);
              }
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        if (!found) {
          // initial
          self.initial = false;
        }
      } else {
        // initial
        self.initial = false;
      } // detect url


      var url;

      if (history.state && history.state.url) {
        // detect from history
        url = history.state.url;
      } else {
        // detect from url location (absolute url without domain name)
        url = location.pathname + location.search;
      } // set pushstate


      if (!self.locationFrom) {
        self.locationFrom = new URL(url, location);
      }

      self.pushState(url, document.title);
    }
    /**
     * init events
     */

  }, {
    key: "initEvents",
    value: function initEvents() {
      _get(_getPrototypeOf(Ajax.prototype), "initEvents", this).call(this);

      var self = this; // event popstate

      window.onpopstate = self.eventPopstateHandler.bind(self);
    } //////////////////////
    // handler
    //////////////////////

    /**
     * element on handler
     * @param {Node|HTMLElement|EventTarget|Window} element
     * @param {Event} e
     */

  }, {
    key: "eventOnHandler",
    value: function eventOnHandler(element, e) {
      if (!e.detail || !e.detail.skip) {
        // needed because we trigger .xt event
        // not when opening in new tab
        if (e.metaKey || e.ctrlKey) {
          return false;
        } // prevent links (needed for xt-ajax to go to links and propagate event if inside targets)


        e.preventDefault();
      } // super


      _get(_getPrototypeOf(Ajax.prototype), "eventOnHandler", this).call(this, element, e);
    }
    /**
     * element popstate handler
     * @param {Event} e
     */

  }, {
    key: "eventPopstateHandler",
    value: function eventPopstateHandler(e) {
      var self = this; // handler

      if (history.state && history.state.url) {
        // reinit currents
        self.initCurrents(); // request set

        requestAnimationFrame(function () {
          self.ajaxRequest(null, history.state.url);
        });
      }
    } //////////////////////
    // special
    //////////////////////

    /**
     * ajax request
     * @param {Node|HTMLElement|EventTarget|Window} element Base node
     * @param {String} url Url to get
     */

  }, {
    key: "ajaxRequest",
    value: function ajaxRequest(element, url) {
      var self = this;
      var options = self.options; // url

      if (element) {
        url = element.getAttribute('href').split('#')[0];
      } // location


      self.locationTo = new URL(url, location); // autoClose

      dispatchEvent(new CustomEvent('autoClose.xt')); // dispatch

      var detail = self.eDetailSet();
      self.object.dispatchEvent(new CustomEvent('request.xt.ajax', {
        detail: detail
      })); // duration

      self.detail.requestDate = new Date();
      clearTimeout(parseFloat(self.object.dataset.xtAjaxDurationTimeout));
      requestAnimationFrame(function () {
        self.detail.requestDuration = options.duration || _xtend.default.animTime(self.queryElement); // call

        var request = new XMLHttpRequest();
        request.open('GET', url, true);

        request.onload = function () {
          self.ajaxResponse(element, url, request);
        };

        request.onerror = function () {
          self.ajaxResponse(element, url, request);
        };

        request.send();
      });
    }
    /**
     * ajax response
     * @param {Node|HTMLElement|EventTarget|Window} element Base node
     * @param {String} url Url to get
     * @param {XMLHttpRequest} request Html response
     */

  }, {
    key: "ajaxResponse",
    value: function ajaxResponse(element, url, request) {
      var self = this; // dispatch

      var detail = self.eDetailSet();
      self.detail.request = request;
      self.object.dispatchEvent(new CustomEvent('response.xt.ajax', {
        detail: detail
      })); // duration

      self.detail.requestDuration -= new Date() - self.detail.requestDate;

      if (self.detail.requestDuration > 0) {
        self.object.dataset.xtAjaxDurationTimeout = setTimeout(function () {
          // request
          if (request.status >= 200 && request.status < 400) {
            self.ajaxSuccess(element, url, request);
          } else {
            self.ajaxError(element, url, request);
          }
        }, self.detail.requestDuration).toString();
      } else {
        // request
        if (request.status >= 200 && request.status < 400) {
          self.ajaxSuccess(element, url, request);
        } else {
          self.ajaxError(element, url, request);
        }
      }
    }
    /**
     * ajax success
     * @param {Node|HTMLElement|EventTarget|Window} element Base node
     * @param {String} url Url to get
     * @param {XMLHttpRequest} request Html response
     */

  }, {
    key: "ajaxSuccess",
    value: function ajaxSuccess(element, url, request) {
      var self = this;
      var options = self.options; // autoClose

      dispatchEvent(new CustomEvent('autoCloseFix.xt')); // set substitute

      var html = document.createElement('html');
      html.innerHTML = request.responseText.trim();
      var title = html.querySelectorAll('head title')[0].innerHTML;
      var replace = html.querySelectorAll(options.query)[0]; // data-xt-ajax-keep

      /*
      // NEEDS constructor && !object.dataset.xtAjaxKept // not when ajax-kept
      //DOES NOT WORK it doesn't copy the events..
      for (let tr of self.queryElement.querySelectorAll('[data-xt-ajax-keep]')) {
        // replace
        let trId = tr.getAttribute('data-xt-ajax-keep');
        let rep = replace.querySelectorAll('[data-xt-ajax-keep="' + trId + '"]');
        if (rep.length) {
          rep = rep[0];
          if (tr.dataset.xtAjaxKept !== url) {
            tr.dataset.xtAjaxKept = url;
            // copy
            let changed = rep.parentNode.replaceChild(tr, rep);
            // copy events
            let elsTr = Array.from(rep.querySelectorAll('*'));
            elsTr.push(rep);
            let elsCh = Array.from(changed.querySelectorAll('*'));
            elsCh.push(changed);
            for (let i = 0; i < elsTr.length; i++) {
              let elTr = elsTr[i];
              let elCh = elsCh[i];
              if (elCh) {
                // check storage for events
                let storages = Xt.dataStorage.getAll(elTr);
                if (storages) {
                  for (let [key, value] of storages) {
                    // copy events
                    let handler = Xt.dataStorage.put(elCh, key, value);
                    elCh.addEventListener('click', handler);
                  }
                }
              }
            }
           }
        }
      }
      */
      // populate dom

      self.queryElement.outerHTML = replace.outerHTML; // queryElement

      self.queryElement = self.object.querySelectorAll(options.query)[0] || self.object; // pushstate

      self.pushState(url, title); // garbage collector

      html = null;
      replace = null; // dispatch

      var detail = self.eDetailSet();
      self.detail.request = request;
      self.object.dispatchEvent(new CustomEvent('replace.xt.ajax', {
        detail: detail
      })); // reinit

      if (!self.initial) {
        self.initial = true;
        self.init();
      }
    }
    /**
     * ajax error
     * @param {Node|HTMLElement|EventTarget|Window} element Base node
     * @param {String} url Url to get
     * @param {XMLHttpRequest} request Html response
     */

  }, {
    key: "ajaxError",
    value: function ajaxError(element, url, request) {
      var self = this; // reinit currents

      self.initCurrents(); // dispatch

      var detail = self.eDetailSet();
      self.detail.request = request;
      self.object.dispatchEvent(new CustomEvent('replace.xt.ajax', {
        detail: detail
      }));
    }
    /**
     * history pushstate
     */

  }, {
    key: "pushState",
    value: function pushState(url, title) {
      // push object state
      if (!history.state || !history.state.url || history.state.url !== url) {
        document.title = title;
        history.pushState({
          'url': url,
          'title': title
        }, title, url);
      } else {
        document.title = history.state.title;
      }
    }
  }]);

  return Ajax;
}(_core.default); //////////////////////
// option
//////////////////////


Ajax.componentName = 'xt-ajax';
Ajax.optionsDefault = {
  "query": "body",
  // needs to be unique
  "baseUrl": "/",
  "duration": false,
  "elements": "a[href]:not([href^='#'])",
  "class": "active",
  "on": "click",
  "toggle": false,
  "min": 0,
  "max": 1,
  "instant": true,
  "aria": false
}; //////////////////////
// export
//////////////////////

var _default = Ajax;
exports.default = _default;

},{"../core":1,"../xtend":11}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _xtend = _interopRequireDefault(require("../xtend"));

var _core = _interopRequireDefault(require("../core"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

//////////////////////
// smooth
//////////////////////
var Smooth =
/*#__PURE__*/
function (_Core) {
  _inherits(Smooth, _Core);

  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsJs User options
   * @constructor
   */
  function Smooth(object) {
    var optionsJs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Smooth);

    return _possibleConstructorReturn(this, _getPrototypeOf(Smooth).call(this, object, optionsJs));
  } //////////////////////
  // init
  //////////////////////

  /**
   * init
   */


  _createClass(Smooth, [{
    key: "init",
    value: function init() {
      var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var optionsJs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var self = this; // var

      self.subject = null;
      self.detail = {};
      self.destroyElements = [self.object]; // destroy if already done

      if (self.object.getAttribute('data-' + self.componentName + '-done')) {
        self.destroy();
      } // setup


      self.object.setAttribute('data-' + self.componentName + '-done', 'true'); // set component to element

      _xtend.default.set(self.object, self.componentName, self); // init


      self.initVars();
      self.initSetup();
      self.initEvents();
    }
    /**
     * init vars
     */

  }, {
    key: "initSetup",
    value: function initSetup() {
      _get(_getPrototypeOf(Smooth.prototype), "initSetup", this).call(this);

      var self = this; // scrollElement

      self.scrollElement = self.options.scrollElement;
      self.destroyElements.push(self.scrollElement);
    }
    /**
     * init events
     */

  }, {
    key: "initEvents",
    value: function initEvents() {
      var self = this; // save scroll position for eventWheel

      self.detail.moving = false;
      self.detail.scrollTop = self.detail.scrollTopInitial = self.object.scrollTop; // vars

      var eWheel = 'onwheel' in self.object ? 'wheel' : self.object.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';
      self.object = self.object ? self.object : document.documentElement; // document.scrollingElement
      // wheel

      var wheelHandler = _xtend.default.dataStorage.put(self.object, eWheel + '.' + self.namespace, self.eventWheel.bind(self));

      self.object.addEventListener(eWheel, wheelHandler); // scroll

      var scrollHandler = _xtend.default.dataStorage.put(self.scrollElement, 'scroll' + '.' + self.namespace, self.eventScroll.bind(self));

      self.scrollElement.addEventListener('scroll', scrollHandler, _xtend.default.passiveSupported ? {
        passive: true
      } : false);
    } //////////////////////
    // event
    //////////////////////

    /**
     * event scroll
     */

  }, {
    key: "eventScroll",
    value: function eventScroll(e) {
      var self = this;

      if (self.detail.scrollTopInitial !== self.object.scrollTop) {
        // after finished scrolling
        clearTimeout(parseFloat(self.object.dataset.xtSmoothScrollTimeout));
        self.object.dataset.xtSmoothScrollTimeout = setTimeout(function () {
          // scroll
          if (!self.detail.moving) {
            // save scroll position for eventWheel
            self.detail.scrollTop = self.detail.scrollTopInitial = self.object.scrollTop;
          } // dispatch


          self.object.dispatchEvent(new CustomEvent('scroll.xt.smooth', {
            detail: self.eDetail
          }));
        }, 50).toString();
      }
    }
    /**
     * event on wheel
     * @param {Event} e
     */

  }, {
    key: "eventWheel",
    value: function eventWheel(e) {
      var self = this; // subject

      self.subject = null;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = e.composedPath()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var el = _step.value;

          if (getComputedStyle(el).overflowY === 'scroll') {
            self.subject = el;
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (!self.subject) {
        return false;
      } else if (self.subject === document.body) {
        self.subject = self.object; // document.scrollingElement
      } // prevent default scrolling


      e.preventDefault(); // vars

      var scrollMax = self.subject.scrollHeight - self.subject.clientHeight - 1;
      var delta = -e.deltaY || -e.detail || e.wheelDelta || e.wheelDeltaY;

      if (delta === 0) {
        return;
      }

      if (e.deltaMode === 1) {
        // deltaMode 1: by lines
        delta *= 30;
      } else if (e.deltaMode === 2) {
        // deltaMode 2: by pages
        delta *= self.subject.clientHeight;
      } // set


      self.detail.scrollTop -= delta;
      self.detail.scrollTop = Math.max(0, Math.min(self.detail.scrollTop, scrollMax)); // scroll limit
      // friction

      if (!self.detail.moving) {
        self.friction();
      } // dispatch


      self.object.dispatchEvent(new CustomEvent('wheel.xt.smooth', {
        detail: self.eDetail
      }));
    } //////////////////////
    // event util
    //////////////////////

    /**
     * friction
     */

  }, {
    key: "friction",
    value: function friction() {
      var self = this;
      var options = self.options; // vars

      self.detail.moving = true;
      var scrollCurrent = self.subject.scrollTop;
      var delta = self.detail.scrollTop - scrollCurrent;
      var sign = Math.sign(delta); // momentum

      var fncFriction = options.wheel.friction;

      if (typeof fncFriction === 'string') {
        fncFriction = new Function('delta', fncFriction);
      }

      delta = fncFriction(Math.abs(delta)) * sign;
      var scrollFinal = scrollCurrent + delta; // fix math on direction to stop loop

      if (delta < 0) {
        scrollFinal = Math.floor(scrollFinal);
      } else if (delta > 0) {
        scrollFinal = Math.ceil(scrollFinal);
      } // set


      self.subject.scrollTop = scrollFinal; // loop

      if (Math.abs(delta) >= options.wheel.limit) {
        cancelAnimationFrame(window.smoothFrame);
        window.smoothFrame = requestAnimationFrame(function () {
          self.friction();
        });
      } else {
        self.detail.moving = false;
      }
    }
  }]);

  return Smooth;
}(_core.default); //////////////////////
// option
//////////////////////


Smooth.componentName = 'xt-smooth';
Smooth.optionsDefault = {
  "scrollElement": window,
  "wheel": {
    "limit": .5,
    "friction": "return delta / 9"
  }
}; //////////////////////
// export
//////////////////////

var _default = Smooth;
exports.default = _default;

},{"../core":1,"../xtend":11}],7:[function(require,module,exports){
"use strict";

//////////////////////
// closest polyfill
// https://github.com/jonathantneal/closest
// USAGE: element.closest(query);
//////////////////////
(function (ElementProto) {
  if (typeof ElementProto.matches !== 'function') {
    ElementProto.matches = ElementProto.msMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.webkitMatchesSelector || function matches(selector) {
      var element = this;
      var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
      var index = 0;

      while (elements[index] && elements[index] !== element) {
        ++index;
      }

      return Boolean(elements[index]);
    };
  }

  if (typeof ElementProto.closest !== 'function') {
    ElementProto.closest = function closest(selector) {
      var element = this;

      while (element && element.nodeType === 1) {
        if (element.matches(selector)) {
          return element;
        }

        element = element.parentNode;
      }

      return null;
    };
  }
})(window.Element.prototype); //////////////////////
// :scope polyfill
// https://github.com/jonathantneal/element-qsa-scope
// USAGE: querySelectorAll(':scope > .selector');
//////////////////////


(function (ElementPrototype) {
  try {
    // test for scope support
    document.querySelector(':scope *');
  } catch (error) {
    var polyfill = function polyfill(qsa) {
      return function (selectors) {
        // whether the selectors contain :scope
        var hasScope = selectors && scope.test(selectors);

        if (hasScope) {
          // fallback attribute
          var attr = 'q' + Math.floor(Math.random() * 9000000) + 1000000; // replace :scope with the fallback attribute

          arguments[0] = selectors.replace(scope, '[' + attr + ']'); // add the fallback attribute

          this.setAttribute(attr, ''); // results of the qsa

          var elementOrNodeList = qsa.apply(this, arguments); // remove the fallback attribute

          this.removeAttribute(attr); // return the results of the qsa

          return elementOrNodeList;
        } else {
          // return the results of the qsa
          return qsa.apply(this, arguments);
        }
      };
    }; // scope regex


    var scope = /:scope(?![\w-])/gi; // polyfill Element#querySelector

    var querySelectorWithScope = polyfill(ElementPrototype.querySelector);

    ElementPrototype.querySelector = function querySelector(selectors) {
      return querySelectorWithScope.apply(this, arguments);
    }; // polyfill Element#querySelectorAll


    var querySelectorAllWithScope = polyfill(ElementPrototype.querySelectorAll);

    ElementPrototype.querySelectorAll = function querySelectorAll(selectors) {
      return querySelectorAllWithScope.apply(this, arguments);
    }; // polyfill Element#matches


    if (ElementPrototype.matches) {
      var matchesWithScope = polyfill(ElementPrototype.matches);

      ElementPrototype.matches = function matches(selectors) {
        return matchesWithScope.apply(this, arguments);
      };
    } // polyfill Element#closest


    if (ElementPrototype.closest) {
      var closestWithScope = polyfill(ElementPrototype.closest);

      ElementPrototype.closest = function closest(selectors) {
        return closestWithScope.apply(this, arguments);
      };
    }
  }
})(Element.prototype); //////////////////////
// prepend polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend
//////////////////////


(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('prepend')) {
      return;
    }

    Object.defineProperty(item, 'prepend', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function prepend() {
        var argArr = Array.prototype.slice.call(arguments),
            docFrag = document.createDocumentFragment();
        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });
        this.insertBefore(docFrag, this.firstChild);
      }
    });
  });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]); //////////////////////
// append polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append
//////////////////////


(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('append')) {
      return;
    }

    Object.defineProperty(item, 'append', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function append() {
        var argArr = Array.prototype.slice.call(arguments),
            docFrag = document.createDocumentFragment();
        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });
        this.appendChild(docFrag);
      }
    });
  });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]); //////////////////////
// before polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before
//////////////////////


(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('before')) {
      return;
    }

    Object.defineProperty(item, 'before', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function before() {
        var argArr = Array.prototype.slice.call(arguments),
            docFrag = document.createDocumentFragment();
        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });
        this.parentNode.insertBefore(docFrag, this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]); //////////////////////
// findIndex polyfill
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
//////////////////////


if (!Array.prototype.findIndex) {
  Object.defineProperty(Array.prototype, 'findIndex', {
    value: function value(predicate) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);
      var len = o.length >>> 0;

      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      var thisArg = arguments[1];
      var k = 0;

      while (k < len) {
        var kValue = o[k];

        if (predicate.call(thisArg, kValue, k, o)) {
          return k;
        }

        k++;
      }

      return -1;
    },
    configurable: true,
    writable: true
  });
} //////////////////////
// CustomEvent polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
//////////////////////


(function () {
  if (typeof window.CustomEvent === "function") {
    return false;
  }

  function CustomEvent(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
})(); //////////////////////
// scrollingElement polyfill
// https://github.com/yangg/scrolling-element
//////////////////////


(function () {
  if (document.scrollingElement) {
    return;
  }

  var element = null;

  function scrollingElement() {
    if (element) {
      return element;
    } else if (document.body.scrollTop) {
      // speed up if scrollTop > 0
      return element = document.body;
    }

    var iframe = document.createElement('iframe');
    iframe.style.height = '1px';
    document.documentElement.appendChild(iframe);
    var doc = iframe.contentWindow.document;
    doc.write('<!DOCTYPE html><div style="height:9999em">x</div>');
    doc.close();
    var isCompliant = doc.documentElement.scrollHeight > doc.body.scrollHeight;
    iframe.parentNode.removeChild(iframe);
    return element = isCompliant ? document.documentElement : document.body;
  }

  Object.defineProperty(document, 'scrollingElement', {
    get: scrollingElement
  });
})(); //////////////////////
// composedPath polyfill
// https://github.com/DieterHolvoet/event-propagation-path
//////////////////////


if (!Event.prototype.composedPath) {
  Event.prototype.composedPath = function () {
    var polyfill = function () {
      var element = this.target || null;
      var pathArr = [element];

      if (!element || !element.parentElement) {
        return [];
      }

      while (element.parentElement) {
        element = element.parentElement;
        pathArr.unshift(element);
      }

      return pathArr;
    }.bind(this);

    return this.path || this.composedPath && this.composedPath() || polyfill();
  };
}

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _xtend = _interopRequireDefault(require("../xtend"));

var _core = _interopRequireDefault(require("../core"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

//////////////////////
// Fade
//////////////////////
var Fade =
/*#__PURE__*/
function (_Core) {
  _inherits(Fade, _Core);

  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsJs User options
   * @constructor
   */
  function Fade(object) {
    var optionsJs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Fade);

    return _possibleConstructorReturn(this, _getPrototypeOf(Fade).call(this, object, optionsJs));
  } //////////////////////
  // init
  //////////////////////

  /**
   * init events
   */


  _createClass(Fade, [{
    key: "initEvents",
    value: function initEvents() {
      var self = this;
      var options = self.options; // event on

      var fadeHandler = _xtend.default.dataStorage.put(window, options.on + '.' + self.namespace, self.eventFadeHandler.bind(self));

      if (options.on) {
        var events = _toConsumableArray(options.on.split(' '));

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var event = _step.value;
            addEventListener(event, fadeHandler, _xtend.default.passiveSupported ? {
              passive: true
            } : false);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      addEventListener('scroll.xt.fade', fadeHandler); // listener dispatch initial only 1 time next frame

      if (!document.documentElement.dataset.xtFadeInitialDone) {
        document.documentElement.dataset.xtFadeInitialDone = 'true';
        requestAnimationFrame(function () {
          dispatchEvent(new CustomEvent('scroll.xt.fade'));
          delete document.documentElement.dataset.xtFadeDone;
        });
      }
    } //////////////////////
    // handler
    //////////////////////

    /**
     * element on handler
     * @param {Event} e
     */

  }, {
    key: "eventFadeHandler",
    value: function eventFadeHandler(e) {
      var self = this; // handler

      if (!e.detail || !e.detail.skip) {
        // needed because we trigger .xt event
        _xtend.default.eventDelay(e, self.object, function () {
          self.eventFade();
        }, 'resize.xt.fade');
      }
    } //////////////////////
    // event
    //////////////////////

    /**
     * window scroll
     */

  }, {
    key: "eventFade",
    value: function eventFade() {
      var self = this;
      var options = self.options; // disabled

      if (self.disabled && !self.initial) {
        return false;
      } // var


      var current = 0;
      var currents = [];
      var scrollInverse = false;
      var windowHeight = window.innerHeight;
      var scrollingElement = document.scrollingElement;
      var scrollTop = scrollingElement.scrollTop;
      var scrollTopOld = self.detail.scrollTopOld; // direction

      if (scrollTop < scrollTopOld) {
        scrollInverse = true;
      } // core


      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        var _loop = function _loop() {
          var el = _step2.value;

          if (!el.classList.contains('fade--block') && (el.offsetWidth || el.offsetHeight || el.getClientRects().length)) {
            // :visible
            // var
            var rectElTop = el.offsetParent.getBoundingClientRect().top + el.offsetTop; // we use parents to not include transforms animations

            var heightEl = parseFloat(getComputedStyle(el).height); // scroll

            var changed = false;
            var top = rectElTop + scrollTop;
            var bottom = top + heightEl;
            var dist = windowHeight * options.distance; // activation

            var checkTop = scrollTop + windowHeight >= top + dist;
            var checkBottom = scrollTop < bottom - dist;

            if (checkTop && checkBottom) {
              // inside
              changed = self.checkOn(el);

              if (changed) {
                currents.push(el);
                cancelAnimationFrame(parseFloat(el.dataset.xtEventFrame));
                el.dataset.xtEventFrame = requestAnimationFrame(function () {
                  current++;
                  el.dataset.xtOnCount = current.toString();
                  el.dataset.xtOnTot = currents.length.toString();
                  self.eventOn(el);
                }).toString();
              }
            } else {
              // outside
              changed = self.checkOff(el);
              el.classList.add('fade--visible');

              if (changed) {
                el.classList.add('fade--scroll');
                currents.push(el);
                cancelAnimationFrame(parseFloat(el.dataset.xtEventFrame));
                el.dataset.xtEventFrame = requestAnimationFrame(function () {
                  current++;
                  el.dataset.xtOffCount = current.toString();
                  el.dataset.xtOffTot = currents.length.toString();
                  self.eventOff(el);
                }).toString();
              }
            } // direction


            if (changed) {
              if (scrollInverse) {
                el.classList.remove('fade--down');
                el.classList.add('fade--up');
              } else {
                el.classList.add('fade--down');
                el.classList.remove('fade--up');
              }
            }
          }
        };

        for (var _iterator2 = self.elements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          _loop();
        } // save for direction

      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      self.detail.scrollTopOld = scrollTop;
    }
  }]);

  return Fade;
}(_core.default); //////////////////////
// option
//////////////////////


Fade.componentName = 'xt-fade';
Fade.optionsDefault = {
  "elements": ".fade",
  "class": "active",
  "on": "scroll resize",
  "min": 0,
  "max": "Infinity",
  "instant": true,
  "distance": 0.2,
  "aria": false
}; //////////////////////
// export
//////////////////////

var _default = Fade;
exports.default = _default;

},{"../core":1,"../xtend":11}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _xtend = _interopRequireDefault(require("../xtend"));

var _core = _interopRequireDefault(require("../core"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

//////////////////////
// Slider
//////////////////////
var Slider =
/*#__PURE__*/
function (_Core) {
  _inherits(Slider, _Core);

  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsJs User options
   * @constructor
   */
  function Slider(object) {
    var optionsJs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Slider);

    return _possibleConstructorReturn(this, _getPrototypeOf(Slider).call(this, object, optionsJs));
  } //////////////////////
  // init
  //////////////////////

  /**
   * init elements, targets and currents
   */


  _createClass(Slider, [{
    key: "initScope",
    value: function initScope() {
      var self = this;
      var options = self.options; // targets

      self.initScopeTargets(); // dragger

      if (options.drag && options.drag.dragger) {
        self.dragger = self.object.querySelectorAll(options.drag.dragger)[0];
      } // autoHeight


      if (options.autoHeight) {
        self.autoHeight = self.object.querySelectorAll(options.autoHeight)[0];
      } // automatic group


      var draggerWidthTemp;

      if (options.groupMq) {
        // width
        var draggerWidth = self.dragger ? self.dragger.offsetWidth : self.object.offsetWidth; // groupMq media

        var mqs = Object.entries(options.groupMq);

        if (mqs.length) {
          for (var _i = 0; _i < mqs.length; _i++) {
            var _mqs$_i = _slicedToArray(mqs[_i], 2),
                key = _mqs$_i[0],
                value = _mqs$_i[1];

            if (window.matchMedia(key).matches) {
              draggerWidthTemp = draggerWidth * value;
            }
          }
        }

        draggerWidth = draggerWidthTemp; // generate groups

        self.groupMq = [];
        self.groupMq.push([]);
        var currentCount = draggerWidth;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = self.targets.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _step$value = _slicedToArray(_step.value, 2),
                i = _step$value[0],
                target = _step$value[1];

            // calculate
            var targetWidth = target.offsetWidth;

            if (targetWidth === 0) {
              // when display none
              var container = target.parentNode;
              var clone = target.cloneNode(true);
              clone.classList.add('xt-calculating');
              container.append(clone);
              targetWidth = clone.offsetWidth;
              container.removeChild(clone);
            }

            currentCount -= targetWidth; // overflow

            var currentGroup = self.groupMq.length - 1;

            if (currentCount < 0 && self.groupMq[currentGroup].length) {
              self.groupMq.push([]);
              currentGroup = self.groupMq.length - 1;
              currentCount = draggerWidth;
              currentCount -= targetWidth;
            } // assign group


            self.groupMq[currentGroup].push(target);
            target.setAttribute('data-xt-group', self.namespace + '-' + currentGroup);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      } // generate elements


      if (options.pagination) {
        var pags = self.object.querySelectorAll(options.pagination);

        if (!pags.length) {
          console.error('Error: Xt.Slider pagination not found for', self.object); // Xt check
        } // remove old


        self.pags = self.pags ? self.pags : [];
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = self.pags[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _pags = _step2.value;
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = _pags[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var pag = _step4.value;
                var _container = pag.parentNode;

                _container.removeChild(pag);
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                  _iterator4.return();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }
          } // add new

        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        self.pags = [];
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = pags[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _pag = _step3.value;
            self.pags.push([]); // vars

            var currentPags = self.pags[self.pags.length - 1];

            var _clone = _pag.querySelectorAll('.xt-clone')[0];

            var _container2 = _clone.parentNode;
            var arr = void 0;

            if (options.groupMq) {
              arr = self.groupMq;
            } else {
              arr = self.targets;
            } // populate


            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
              for (var _iterator5 = arr.entries()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var _step5$value = _slicedToArray(_step5.value, 2),
                    i = _step5$value[0],
                    group = _step5$value[1];

                currentPags[i] = _clone.cloneNode(true);
                var item = currentPags[i];
                var html = item.innerHTML;
                html = html.replace(new RegExp('{{num}}', 'ig'), (i + 1).toString());
                html = html.replace(new RegExp('{{tot}}', 'ig'), arr.length.toString());
                item.innerHTML = html;
                item.classList.remove('xt-clone');

                if (options.groupMq) {
                  item.setAttribute('data-xt-group', self.namespace + '-' + i);
                }

                _container2.insertBefore(item, _clone);
              }
            } catch (err) {
              _didIteratorError5 = true;
              _iteratorError5 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                  _iterator5.return();
                }
              } finally {
                if (_didIteratorError5) {
                  throw _iteratorError5;
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      } // only one call per group


      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = self.targets[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var slide = _step6.value;
          delete slide.dataset.xtDraggerInitialDone;
          delete slide.dataset.xtSlideOnDone;
        } // initDragger

      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
            _iterator6.return();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }

      if (self.dragger) {
        self.destroyElements.push(self.dragger);
        self.initDragger();
      } // elements


      self.initScopeElements();
    }
    /**
     * init events
     */

  }, {
    key: "initEvents",
    value: function initEvents() {
      _get(_getPrototypeOf(Slider.prototype), "initEvents", this).call(this);

      var self = this;
      var options = self.options;
      var dragger = self.dragger; // targets

      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        for (var _iterator7 = self.targets[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          var slide = _step7.value;
          // disable links
          slide.classList.add('links--none'); // slide on

          var slideOnHandler = _xtend.default.dataStorage.put(slide, 'on' + '.' + self.namespace, self.eventSlideOnHandler.bind(self).bind(self, dragger, slide));

          slide.addEventListener('on.xt', slideOnHandler, true); // @FIX event.xt: useCapture for custom events order on re-init
          // slide off

          var slideOffHandler = _xtend.default.dataStorage.put(slide, 'off' + '.' + self.namespace, self.eventSlideOffHandler.bind(self).bind(self, dragger, slide));

          slide.addEventListener('off.xt', slideOffHandler, true); // @FIX event.xt: useCapture for custom events order on re-init
        } // dragger

      } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
            _iterator7.return();
          }
        } finally {
          if (_didIteratorError7) {
            throw _iteratorError7;
          }
        }
      }

      if (options.drag) {
        // drag
        var dragstartHandler = _xtend.default.dataStorage.put(dragger, 'mousedown touchstart' + '.' + self.namespace, self.eventDragstartHandler.bind(self).bind(self, dragger));

        var events = ['mousedown', 'touchstart'];

        for (var _i2 = 0; _i2 < events.length; _i2++) {
          var event = events[_i2];
          dragger.addEventListener(event, dragstartHandler, _xtend.default.passiveSupported ? {
            passive: true
          } : false);
        } // grab


        if (!self.disabled) {
          dragger.classList.add('grab');
        } else {
          dragger.classList.remove('grab');
        }
      } // resize


      var resizeHandler = _xtend.default.dataStorage.put(window, 'resize' + '.' + self.namespace, self.eventResizeHandler.bind(self).bind(self));

      addEventListener('resize', resizeHandler);
    }
    /**
     * init dragger
     */

  }, {
    key: "initDragger",
    value: function initDragger() {
      var self = this; // init slides

      var _iteratorNormalCompletion8 = true;
      var _didIteratorError8 = false;
      var _iteratorError8 = undefined;

      try {
        for (var _iterator8 = self.targets[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
          var targets = _step8.value;
          self.initDraggerSlide(targets);
        }
      } catch (err) {
        _didIteratorError8 = true;
        _iteratorError8 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
            _iterator8.return();
          }
        } finally {
          if (_didIteratorError8) {
            throw _iteratorError8;
          }
        }
      }
    }
    /**
     * init dragger slide
     */

  }, {
    key: "initDraggerSlide",
    value: function initDraggerSlide(slide) {
      var self = this;
      var options = self.options; // save vars

      if (!slide.dataset.xtDraggerInitialDone && (slide.offsetWidth || slide.offsetHeight || slide.getClientRects().length)) {
        // :visible
        // vars
        var targets = self.getTargets(slide);
        var slideLeft = slide.offsetLeft;
        var slideWidth = slide.offsetWidth;
        var slideHeight = slide.offsetHeight; // group

        var group = slide.getAttribute('data-xt-group');

        if (group) {
          if (!slide.dataset.xtDraggerInitialDone) {
            // vars
            slideLeft = Infinity;
            slideWidth = 0;
            slideHeight = 0;
            var _iteratorNormalCompletion9 = true;
            var _didIteratorError9 = false;
            var _iteratorError9 = undefined;

            try {
              for (var _iterator9 = targets[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                var target = _step9.value;
                slideLeft = target.offsetLeft < slideLeft ? slide.offsetLeft : slideLeft;
                slideWidth += target.offsetWidth;
                var h = target.offsetHeight;
                slideHeight = h > slideHeight ? h : slideHeight;
              }
            } catch (err) {
              _didIteratorError9 = true;
              _iteratorError9 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
                  _iterator9.return();
                }
              } finally {
                if (_didIteratorError9) {
                  throw _iteratorError9;
                }
              }
            }

            var _iteratorNormalCompletion10 = true;
            var _didIteratorError10 = false;
            var _iteratorError10 = undefined;

            try {
              for (var _iterator10 = targets[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                var _target = _step10.value;
                _target.dataset.xtDraggerInitialDone = 'true';
                _target.dataset.groupHeight = slideHeight.toString();
              }
            } catch (err) {
              _didIteratorError10 = true;
              _iteratorError10 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
                  _iterator10.return();
                }
              } finally {
                if (_didIteratorError10) {
                  throw _iteratorError10;
                }
              }
            }
          }
        } else {
          slide.dataset.xtDraggerInitialDone = 'true';
        } // pos with alignment


        var pos;

        if (options.align === 'center') {
          pos = self.dragger.offsetWidth / 2 - slideLeft - slideWidth / 2;
        } else if (options.align === 'left') {
          pos = -slideLeft;
          pos = pos > 0 ? 0 : pos; // @FIX initial value sometimes is wrong
        } else if (options.align === 'right') {
          pos = -slideLeft + self.dragger.offsetWidth - slideWidth;
        } // pos with contain


        if (options.contain) {
          var min = 0;
          var slideLast = self.targets[self.targets.length - 1];
          var slideLastLeft = slideLast.offsetLeft;
          var slideLastWidth = slideLast.offsetWidth;
          var max = -slideLastLeft + self.dragger.offsetWidth - slideLastWidth;
          pos = pos > min ? min : pos;
          pos = pos < max ? max : pos;
        } // save pos


        if (group) {
          var _iteratorNormalCompletion11 = true;
          var _didIteratorError11 = false;
          var _iteratorError11 = undefined;

          try {
            for (var _iterator11 = targets[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
              var _target2 = _step11.value;
              _target2.dataset.groupPos = pos.toString();
            }
          } catch (err) {
            _didIteratorError11 = true;
            _iteratorError11 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion11 && _iterator11.return != null) {
                _iterator11.return();
              }
            } finally {
              if (_didIteratorError11) {
                throw _iteratorError11;
              }
            }
          }
        } else {
          slide.dataset.groupPos = pos.toString();
        }
      }
    } //////////////////////
    // handler
    //////////////////////

    /**
     * slide on handler
     * @param {Node|HTMLElement|EventTarget|Window} dragger
     * @param {Node|HTMLElement|EventTarget|Window} slide
     * @param {Event} e
     */

  }, {
    key: "eventSlideOnHandler",
    value: function eventSlideOnHandler(dragger, slide, e) {
      var self = this; // handler

      if (e.target === slide) {
        // @FIX event.xt: handler triggered by child xt events
        self.eventSlideOn(dragger, e);
      }
    }
    /**
     * slide off handler
     * @param {Node|HTMLElement|EventTarget|Window} dragger
     * @param {Node|HTMLElement|EventTarget|Window} slide
     * @param {Event} e
     */

  }, {
    key: "eventSlideOffHandler",
    value: function eventSlideOffHandler(dragger, slide, e) {
      var self = this; // handler

      if (e.target === slide) {
        // @FIX event.xt: handler triggered by child xt events
        self.eventSlideOff(dragger, e);
      }
    }
    /**
     * element drag on handler
     * @param {Node|HTMLElement|EventTarget|Window} dragger
     * @param {Event} e
     */

  }, {
    key: "eventDragstartHandler",
    value: function eventDragstartHandler(dragger, e) {
      var self = this; // handler

      if (!e.button || e.button !== 2) {
        // not right click or it gets stuck
        if (self.initial || !self.checkAnim(_xtend.default.arrSingle(dragger))) {
          // save event
          self.detail.eDragstart = e; // logic

          var eventLimit = self.object.querySelectorAll('.event-limit');

          if (eventLimit.length) {
            if (!_xtend.default.checkNested(e.target, eventLimit)) {
              self.eventDragstart(dragger, e);
            }
          } else {
            self.eventDragstart(dragger, e);
          } // auto


          self.eventAutoPause(); // event off

          var dragendHandler = _xtend.default.dataStorage.put(dragger, 'mouseup touchend' + '.' + self.namespace, self.eventDragendHandler.bind(self).bind(self, dragger));

          var events = ['mouseup', 'touchend'];

          for (var _i3 = 0; _i3 < events.length; _i3++) {
            var event = events[_i3];
            addEventListener(event, dragendHandler);
          }
        }
      }
    }
    /**
     * element drag off handler
     * @param {Node|HTMLElement|EventTarget|Window} dragger
     * @param {Event} e
     */

  }, {
    key: "eventDragendHandler",
    value: function eventDragendHandler(dragger, e) {
      var self = this; // logic

      var eventLimit = self.object.querySelectorAll('.event-limit');

      if (eventLimit.length) {
        if (!_xtend.default.checkNested(e.target, eventLimit)) {
          self.eventDragend(dragger, e);
        }
      } else {
        self.eventDragend(dragger, e);
      } // auto


      self.eventAutoStart(); // event off

      var dragendHandler = _xtend.default.dataStorage.get(dragger, 'mouseup touchend' + '.' + self.namespace);

      var events = ['mouseup', 'touchend'];

      for (var _i4 = 0; _i4 < events.length; _i4++) {
        var event = events[_i4];
        removeEventListener(event, dragendHandler);
      }
    }
    /**
     * element drag on
     * @param {Node|HTMLElement|EventTarget|Window} dragger
     * @param {Event} e
     */

  }, {
    key: "eventDragstart",
    value: function eventDragstart(dragger, e) {
      var self = this; // save event

      self.detail.eCurrent = e; // event move

      var dragHandler = _xtend.default.dataStorage.put(dragger, 'mousemove touchmove' + '.' + self.namespace, self.eventDragHandler.bind(self).bind(self, dragger));

      var events = ['mousemove', 'touchmove'];

      for (var _i5 = 0; _i5 < events.length; _i5++) {
        var event = events[_i5];
        dragger.addEventListener(event, dragHandler);
      } // logic


      self.logicDragstart(dragger, e);
    }
    /**
     * element drag off
     * @param {Node|HTMLElement|EventTarget|Window} dragger
     * @param {Event} e
     */

  }, {
    key: "eventDragend",
    value: function eventDragend(dragger, e) {
      var self = this; // save event

      self.detail.eCurrent = e; // event move

      var dragHandler = _xtend.default.dataStorage.get(dragger, 'mousemove touchmove' + '.' + self.namespace);

      var events = ['mousemove', 'touchmove'];

      for (var _i6 = 0; _i6 < events.length; _i6++) {
        var event = events[_i6];
        dragger.removeEventListener(event, dragHandler);
      } // logic


      self.logicDragend(dragger, e);
    }
    /**
     * element drag handler
     * @param {Node|HTMLElement|EventTarget|Window} dragger
     * @param {Event} e
     */

  }, {
    key: "eventDragHandler",
    value: function eventDragHandler(dragger, e) {
      var self = this; // disable links

      dragger.classList.add('links--none');
      dragger.classList.add('jumps--none'); // save event

      self.detail.eCurrent = e; // logic

      self.logicDrag(dragger, e);
    } //////////////////////
    // event
    //////////////////////

    /**
     * resize
     * @param {Event} e
     */

  }, {
    key: "eventResizeHandler",
    value: function eventResizeHandler(e) {
      var self = this; // reinit

      if (!self.initial) {
        _xtend.default.eventDelay(e, self.object, function () {
          self.initial = true;
          self.init();
        }, 'resize.xt.slider');
      }
    }
    /**
     * slide on
     * @param {Node|HTMLElement|EventTarget|Window} dragger
     * @param {Event} e
     */

  }, {
    key: "eventSlideOn",
    value: function eventSlideOn(dragger, e) {
      var self = this;
      var slide = e.target; // only one call per group

      if (slide.dataset.xtSlideOnDone) {
        return false;
      }

      var targets = self.getTargets(slide);
      var _iteratorNormalCompletion12 = true;
      var _didIteratorError12 = false;
      var _iteratorError12 = undefined;

      try {
        for (var _iterator12 = targets[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
          var target = _step12.value;
          target.dataset.xtSlideOnDone = 'true';
        } // reinit if needed

      } catch (err) {
        _didIteratorError12 = true;
        _iteratorError12 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion12 && _iterator12.return != null) {
            _iterator12.return();
          }
        } finally {
          if (_didIteratorError12) {
            throw _iteratorError12;
          }
        }
      }

      if (self.dragger) {
        self.initDraggerSlide(slide);
      } // autoHeight


      if (self.autoHeight) {
        self.eventAutoHeight(slide);
      } // val


      self.detail.xPosOld = self.detail.xPos;
      self.detail.xPos = self.detail.xPosCurrent = self.detail.xPosReal = parseFloat(slide.dataset.groupPos); // dragger

      if (self.dragger) {
        // prevent alignment animation
        self.dragger.classList.remove('duration-none'); // initial or resizing

        if (self.initial) {
          // prevent alignment animation
          self.dragger.classList.add('duration-none');
          requestAnimationFrame(function () {
            self.dragger.classList.remove('duration-none');
          });
        } // drag position


        dragger.style.transform = 'translateX(' + self.detail.xPos + 'px)'; // disable drag

        dragger.classList.add('pointer-events--none');

        _xtend.default.animTimeout(dragger, function () {
          dragger.classList.remove('pointer-events--none');
        }); // disable links


        dragger.classList.remove('jumps--none');
      } // disable links


      slide.classList.remove('links--none');
    }
    /**
     * slide off
     * @param {Node|HTMLElement|EventTarget|Window} dragger
     * @param {Event} e
     */

  }, {
    key: "eventSlideOff",
    value: function eventSlideOff(dragger, e) {
      var self = this;
      var slide = e.target; // disable links

      slide.classList.add('links--none'); // only one call per group

      var group = slide.getAttribute('data-xt-group');

      if (group) {
        delete slide.dataset.xtSlideOnDone;
      }
    }
    /**
     * imageLoaded
     * @param {Node|HTMLElement|EventTarget|Window} el
     * @param {Event} e
     */

  }, {
    key: "eventImageLoaded",
    value: function eventImageLoaded(el) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      _get(_getPrototypeOf(Slider.prototype), "eventImageLoaded", this).call(this, el, e);

      var self = this; // autoHeight

      if (self.autoHeight) {
        self.eventAutoHeight(el);
      }
    }
    /**
     * slide resize
     * @param {Node|HTMLElement|EventTarget|Window} slide
     * @param {Event} e
     */

  }, {
    key: "eventAutoHeight",
    value: function eventAutoHeight(slide) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var self = this; // resize

      var slideHeight = slide.offsetHeight;

      if (slide.getAttribute('data-xt-group')) {
        var groupHeight = parseFloat(slide.dataset.groupHeight);
        slideHeight = groupHeight > slideHeight ? groupHeight : slideHeight;
      }

      self.autoHeight.style.height = slideHeight + 'px'; // listener dispatch

      var detail = self.eDetailSet(e);
      slide.dispatchEvent(new CustomEvent('autoHeight.xt', {
        detail: detail
      }));
    } //////////////////////
    // logic
    //////////////////////

    /**
     * element drag on logic
     * @param {Node|HTMLElement|EventTarget|Window} dragger
     * @param {Event} e
     */

  }, {
    key: "logicDragstart",
    value: function logicDragstart(dragger, e) {
      var self = this; // disabled

      if (self.disabled && !self.initial) {
        return false;
      } // prevent dragging animation


      self.dragger.classList.add('duration-none'); // logic

      self.detail.xVelocity = null;
      self.detail.xVelocityNext = null; // listener dispatch

      var detail = self.eDetailSet(e);
      dragger.dispatchEvent(new CustomEvent('dragstart.xt.slider', {
        detail: detail
      }));
    }
    /**
     * element drag off logic
     * @param {Node|HTMLElement|EventTarget|Window} dragger
     * @param {Event} e
     */

  }, {
    key: "logicDragend",
    value: function logicDragend(dragger, e) {
      var self = this; // disabled

      if (self.disabled && !self.initial) {
        return false;
      } // disable drag


      requestAnimationFrame(function () {
        // needed for touch links triggering before logicDragend
        dragger.classList.add('pointer-events--none');
      }); // disable links

      requestAnimationFrame(function () {
        dragger.classList.remove('links--none');
        dragger.classList.remove('jumps--none');
      }); // logic

      self.logicDragfriction(dragger, e); // listener dispatch

      var detail = self.eDetailSet(e);
      dragger.dispatchEvent(new CustomEvent('dragend.xt.slider', {
        detail: detail
      }));
    }
    /**
     * element drag friction logic
     * @param {Node|HTMLElement|EventTarget|Window} dragger
     * @param {Event} e
     */

  }, {
    key: "logicDragfriction",
    value: function logicDragfriction(dragger, e) {
      var self = this;
      var options = self.options; // friction

      if (Math.abs(self.detail.xVelocity) > options.drag.limit) {
        // drag
        self.logicDrag(dragger, e, true); // loop

        requestAnimationFrame(function () {
          self.logicDragfriction(dragger, e);
        });
      } else {
        // dragend
        requestAnimationFrame(self.logicDragfrictionend.bind(self).bind(e, dragger));
      }
    }
    /**
     * element drag logic
     * @param {Node|HTMLElement|EventTarget|Window} dragger
     * @param {Event} e
     * @param {Boolean} friction
     */

  }, {
    key: "logicDrag",
    value: function logicDrag(dragger, e) {
      var friction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var self = this;
      var options = self.options; // disabled

      if (self.disabled && !self.initial) {
        return false;
      } // calculate


      var pos = self.detail.xPosReal;
      var xPosCurrent = self.detail.xPosCurrent || 0;
      var sign = Math.sign(self.detail.xVelocity);

      if (friction) {
        // momentum
        var fncFriction = options.drag.friction;

        if (typeof fncFriction === 'string') {
          fncFriction = new Function('velocity', fncFriction);
        }

        self.detail.xVelocity = fncFriction(Math.abs(self.detail.xVelocity)) * sign; // no momentum when stopping

        if (self.detail.dragDate) {
          var dateDiff = new Date() - self.detail.dragDate;
          self.detail.dragDate = null;

          if (dateDiff > options.drag.timeLimit) {
            self.detail.xVelocity = 0;
          }
        } // on friction


        pos = pos + self.detail.xVelocity;
        self.detail.xStart = self.detail.eDragstart.clientX || self.detail.eDragstart.touches[0].clientX;
        self.detail.xCurrent = pos + self.detail.xStart - xPosCurrent;
      } else {
        // momentum
        self.detail.dragDate = new Date(); // on normal drag

        var xPosOld = pos || 0;
        self.detail.xStart = self.detail.eDragstart.clientX || self.detail.eDragstart.touches[0].clientX;
        self.detail.xCurrent = self.detail.eCurrent.clientX || self.detail.eCurrent.touches[0].clientX;
        pos = xPosCurrent + (self.detail.xCurrent - self.detail.xStart) * options.drag.factor; // keep some velocity (median value of previous frame and not current frame)

        self.detail.xVelocity = (self.detail.xVelocity + self.detail.xVelocityNext) / 2;
        self.detail.xVelocityNext = pos - xPosOld;
      } // val


      self.detail.xPosReal = pos; // overflow

      var first = self.targets[0];
      var last = self.targets[self.targets.length - 1];
      var min = parseFloat(first.dataset.groupPos);
      var max = parseFloat(last.dataset.groupPos);
      var fncOverflow = options.drag.overflow;

      if (typeof fncOverflow === 'string') {
        fncOverflow = new Function('overflow', fncOverflow);
      }

      if (friction) {
        if (pos > min || pos < max) {
          self.detail.xVelocity = fncOverflow(Math.abs(self.detail.xVelocity)) * sign;
        }
      } else {
        if (pos > min) {
          self.detail.xVelocity = 0;
          var overflow = pos - min; //pos = min + Math.pow(overflow, options.drag.overflow);

          pos = min + fncOverflow(overflow);
        } else if (pos < max) {
          self.detail.xVelocity = 0;

          var _overflow = pos - max; //pos = max - Math.pow(-overflow, options.drag.overflow);


          pos = max - fncOverflow(-_overflow);
        }
      } // val


      self.detail.xPosOld = self.detail.xPos;
      self.detail.xPos = pos; // drag position

      dragger.style.transform = 'translateX(' + self.detail.xPos + 'px)'; // listener dispatch

      var detail = self.eDetailSet(e);
      dragger.dispatchEvent(new CustomEvent('drag.xt.slider', {
        detail: detail
      }));
    }
    /**
     * element drag friction off logic
     * @param {Node|HTMLElement|EventTarget|Window} dragger
     * @param {Event} e
     */

  }, {
    key: "logicDragfrictionend",
    value: function logicDragfrictionend(dragger, e) {
      var self = this;
      var options = self.options;
      var xPosCurrent = self.detail.xPosCurrent || 0; // prevent dragging animation

      self.dragger.classList.remove('duration-none'); // only one call per group

      var currents = self.getCurrents();
      var _iteratorNormalCompletion13 = true;
      var _didIteratorError13 = false;
      var _iteratorError13 = undefined;

      try {
        for (var _iterator13 = currents[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
          var current = _step13.value;
          var group = current.getAttribute('data-xt-group');

          if (group) {
            var _iteratorNormalCompletion17 = true;
            var _didIteratorError17 = false;
            var _iteratorError17 = undefined;

            try {
              for (var _iterator17 = self.getTargets(current)[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
                var target = _step17.value;
                delete target.dataset.xtSlideOnDone;
              }
            } catch (err) {
              _didIteratorError17 = true;
              _iteratorError17 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion17 && _iterator17.return != null) {
                  _iterator17.return();
                }
              } finally {
                if (_didIteratorError17) {
                  throw _iteratorError17;
                }
              }
            }
          }
        } // activate or reset

      } catch (err) {
        _didIteratorError13 = true;
        _iteratorError13 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion13 && _iterator13.return != null) {
            _iterator13.return();
          }
        } finally {
          if (_didIteratorError13) {
            throw _iteratorError13;
          }
        }
      }

      var xPos = self.detail.xPosReal;
      var xDist = xPos - xPosCurrent;

      if (Math.abs(xDist) > options.drag.threshold) {
        // get nearest
        var found = self.currentIndex;

        if (options.groupMq) {
          var _iteratorNormalCompletion14 = true;
          var _didIteratorError14 = false;
          var _iteratorError14 = undefined;

          try {
            for (var _iterator14 = self.groupMq.entries()[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
              var _step14$value = _slicedToArray(_step14.value, 2),
                  i = _step14$value[0],
                  group = _step14$value[1];

              var _iteratorNormalCompletion15 = true;
              var _didIteratorError15 = false;
              var _iteratorError15 = undefined;

              try {
                for (var _iterator15 = group[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                  var slideCheck = _step15.value;
                  var check = xPos - dragger.offsetWidth / 2 + slideCheck.offsetLeft;

                  if (check < 0 && (slideCheck.offsetWidth || slideCheck.offsetHeight || slideCheck.getClientRects().length)) {
                    // :visible
                    found = i;
                  }
                }
              } catch (err) {
                _didIteratorError15 = true;
                _iteratorError15 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion15 && _iterator15.return != null) {
                    _iterator15.return();
                  }
                } finally {
                  if (_didIteratorError15) {
                    throw _iteratorError15;
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError14 = true;
            _iteratorError14 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion14 && _iterator14.return != null) {
                _iterator14.return();
              }
            } finally {
              if (_didIteratorError14) {
                throw _iteratorError14;
              }
            }
          }
        } else {
          var _iteratorNormalCompletion16 = true;
          var _didIteratorError16 = false;
          var _iteratorError16 = undefined;

          try {
            for (var _iterator16 = self.targets.entries()[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
              var _step16$value = _slicedToArray(_step16.value, 2),
                  i = _step16$value[0],
                  _slideCheck = _step16$value[1];

              var _check = xPos - dragger.offsetWidth / 2 + _slideCheck.offsetLeft;

              if (_check < 0 && (_slideCheck.offsetWidth || _slideCheck.offsetHeight || _slideCheck.getClientRects().length)) {
                // :visible
                found = i;
              }
            }
          } catch (err) {
            _didIteratorError16 = true;
            _iteratorError16 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion16 && _iterator16.return != null) {
                _iterator16.return();
              }
            } finally {
              if (_didIteratorError16) {
                throw _iteratorError16;
              }
            }
          }
        } // goTo with force


        requestAnimationFrame(function () {
          // @FIX jump event order (slider drag single)
          if (found === self.currentIndex) {
            // change at least one
            if (Math.sign(xDist) < 0) {
              self.goToNext(1, true);
            } else {
              self.goToPrev(1, true);
            }
          } else {
            // goToIndex
            self.goToIndex(found, true);
          }
        });
      } else {
        // val
        self.detail.xPosOld = self.detail.xPos;
        self.detail.xPos = self.detail.xPosCurrent; // drag position

        dragger.style.transform = 'translateX(' + self.detail.xPosCurrent + 'px)'; // disable drag

        _xtend.default.animTimeout(dragger, function () {
          dragger.classList.remove('pointer-events--none');
        }); // listener dispatch


        var detail = self.eDetailSet(e);
        dragger.dispatchEvent(new CustomEvent('dragreset.xt.slider', {
          detail: detail
        }));
      }
    }
  }]);

  return Slider;
}(_core.default); //////////////////////
// option
//////////////////////


Slider.componentName = 'xt-slider';
Slider.optionsDefault = {
  "elements": "[data-xt-pag]",
  "targets": ".slide",
  "class": "active",
  "on": "click",
  "toggle": false,
  "min": 1,
  "max": 1,
  "instant": true,
  "jump": true,
  "navigation": "[data-xt-nav]",
  "keyboard": {
    "selector": ".slides"
  },
  "aria": {
    "labelledby": false
  },
  // slider only
  "autoHeight": ".slides",
  "groupMq": {
    "all": 0.8
  },
  "align": "center",
  "contain": false,
  "pagination": ".slider_pagination",
  "drag": {
    "dragger": ".slides_inner",
    "threshold": 100,
    "factor": 1,
    "limit": 2.5,
    "friction": "return Math.pow(velocity, 0.95)",
    "overflow": "return Math.pow(overflow, 0.73)",
    "timeLimit": 25
  }
}; //////////////////////
// export
//////////////////////

var _default = Slider;
exports.default = _default;

},{"../core":1,"../xtend":11}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _xtend = _interopRequireDefault(require("../xtend"));

var _core = _interopRequireDefault(require("../core"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

//////////////////////
// Sticky
//////////////////////
var Sticky =
/*#__PURE__*/
function (_Core) {
  _inherits(Sticky, _Core);

  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsJs User options
   * @constructor
   */
  function Sticky(object) {
    var optionsJs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Sticky);

    return _possibleConstructorReturn(this, _getPrototypeOf(Sticky).call(this, object, optionsJs));
  } //////////////////////
  // init
  //////////////////////

  /**
   * init elements, targets and currents
   */


  _createClass(Sticky, [{
    key: "initScope",
    value: function initScope() {
      _get(_getPrototypeOf(Sticky.prototype), "initScope", this).call(this);

      var self = this;
      var options = self.options; // mode

      self.mode = 'unique'; // container

      self.container = _xtend.default.parents(self.object, '.xt-container');

      if (!self.container.length) {
        self.container = _xtend.default.createElement('<div class="xt-container xt-fixed--inner"></div>');
        self.object.before(self.container);
        self.container.append(self.object);
        self.container = _xtend.default.parents(self.object, '.xt-container');
      } // targets


      self.targets = self.container[0].querySelectorAll('.xt-clone');

      if (!self.targets.length) {
        self.targets = self.object.cloneNode(true);
        self.targets.classList.add('xt-clone', 'xt-ignore');
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = self.targets.querySelectorAll('[id]')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var elId = _step.value;
            elId.setAttribute('id', elId.getAttribute('id') + '-clone');
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = self.targets.querySelectorAll('[name]')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var elName = _step2.value;
            elName.setAttribute('name', elName.getAttribute('name') + '-clone');
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        self.container[0].append(self.targets);
      }

      self.targets = _xtend.default.arrSingle(self.targets); // xt-fixed

      self.object.classList.add('xt-fixed'); // hide

      if (options.hide === 'down') {
        self.object.classList.add('sticky-hide--down');
      } else {
        self.object.classList.remove('sticky-hide--down');
      }

      if (options.hide === 'up') {
        self.object.classList.add('sticky-hide--up');
      } else {
        self.object.classList.remove('sticky-hide--up');
      } // z-index


      self.zIndex = 100 - _xtend.default.getUniqueNum();
      self.object.style.zIndex = self.zIndex;
    }
    /**
     * init events
     */

  }, {
    key: "initEvents",
    value: function initEvents() {
      var self = this;
      var options = self.options; // event on

      var stickyHandler = _xtend.default.dataStorage.put(window, options.on + '.' + self.namespace, self.eventStickyHandler.bind(self));

      if (options.on) {
        var events = _toConsumableArray(options.on.split(' '));

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = events[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var event = _step3.value;
            addEventListener(event, stickyHandler, _xtend.default.passiveSupported ? {
              passive: true
            } : false);
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }

      addEventListener('scroll.xt.sticky', stickyHandler); // listener dispatch initial only 1 time next frame

      if (!document.documentElement.dataset.xtStickyInitialDone) {
        document.documentElement.dataset.xtStickyInitialDone = 'true';
        requestAnimationFrame(function () {
          dispatchEvent(new CustomEvent('scroll.xt.sticky'));
          delete document.documentElement.dataset.xtStickyDone;
        });
      } // autoClose


      var autoCloseHandler = _xtend.default.dataStorage.put(self.object, 'hide' + '.' + self.namespace, _xtend.default.autoClose.bind(this, self.object));

      self.object.addEventListener('hide.xt.sticky', autoCloseHandler);
    } //////////////////////
    // handler
    //////////////////////

    /**
     * element on handler
     * @param {Event} e
     */

  }, {
    key: "eventStickyHandler",
    value: function eventStickyHandler(e) {
      var self = this; // handler

      if (!e.detail || !e.detail.skip) {
        // needed because we trigger .xt event
        _xtend.default.eventDelay(e, self.object, function () {
          self.eventSticky(self.object, e);
        }, 'resize.xt.sticky');
      }
    } //////////////////////
    // event
    //////////////////////

    /**
     * window scroll
     * @param {Node|HTMLElement|EventTarget|Window} element To be activated or deactivated
     * @param {Event} e
     */

  }, {
    key: "eventSticky",
    value: function eventSticky(element, e) {
      var _element$classList, _element$classList2;

      var self = this;
      var options = self.options; // disabled

      if (self.disabled && !self.initial) {
        return false;
      } // var


      var anim = true;
      var hide = false;
      var scrollInverse = false;
      var add = 0;
      var addHide = 0;
      var windowHeight = window.innerHeight;
      var heightEl = parseFloat(getComputedStyle(element).height);
      var heightTarget = parseFloat(getComputedStyle(self.targets[0]).height);
      var rectContainerTop = self.container[0].getBoundingClientRect().top;
      var scrollingElement = document.scrollingElement;
      var scrollHeight = scrollingElement.scrollHeight;
      var scrollTop = scrollingElement.scrollTop;
      var scrollTopOld = self.detail.scrollTopOld; // direction

      if (scrollTop < scrollTopOld) {
        element.classList.remove('sticky--down');
        element.classList.add('sticky--up');
        scrollInverse = true;
      } else {
        element.classList.add('sticky--down');
        element.classList.remove('sticky--up');
      } // hide


      if (options.hide === 'down') {
        if (!scrollInverse) {
          addHide = heightTarget;
        }
      }

      if (options.hide === 'up') {
        if (scrollInverse) {
          addHide = heightTarget;
        }
      } // scroll


      var top = self.eventStickyPos(options.limit['top'] || self.targets, scrollTop, rectContainerTop);
      var bottom = self.eventStickyPos(options.limit['bottom'], scrollTop, Infinity);

      if (options.position === 'top') {
        bottom -= heightTarget;
      }

      if (options.position === 'bottom') {
        top -= windowHeight - heightTarget;
        bottom = Math.abs(scrollHeight - windowHeight - bottom);
      } // contain and add


      var addTop = 0;
      var addBottom = 0;

      if (options.contain) {
        if (options.contain['top']) {
          var addTopObj = self.eventStickyHeight(options.contain['top'], scrollInverse);
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
      } // save real add for calculation


      element.dataset.xtAddSticky = add.toString(); // activation

      var checkTop = scrollTop >= top - add + addHide;
      var checkBottom = scrollTop < bottom + add - addHide;

      if (checkTop && checkBottom) {
        // inside
        self.eventOn(element); // hide

        if (addHide) {
          hide = true;
        }
      } else {
        // outside
        self.eventOff(element);
      } // after active


      if ((_element$classList = element.classList).contains.apply(_element$classList, _toConsumableArray(self.classes))) {
        // hide
        if (hide) {
          add = -heightEl;

          if (!element.classList.contains('sticky--hide')) {
            element.classList.add('sticky--hide'); // autoClose

            dispatchEvent(new CustomEvent('autoClose.xt')); // listener dispatch

            var detail = self.eDetailSet(e);
            element.dispatchEvent(new CustomEvent('hide.xt.sticky', {
              detail: detail
            }));
          }
        } else {
          if (element.classList.contains('sticky--hide')) {
            element.classList.remove('sticky--hide'); // listener dispatch

            var _detail = self.eDetailSet(e);

            element.dispatchEvent(new CustomEvent('show.xt.sticky', {
              detail: _detail
            }));
          }
        }
      } else {
        // reset
        add = 0;
        anim = false;
      } // anim


      if (anim && scrollTopOld !== undefined) {
        if (!element.classList.contains('sticky--moving')) {
          element.classList.add('sticky--moving');
        }
      } else if ((_element$classList2 = element.classList).contains.apply(_element$classList2, _toConsumableArray(self.classes))) {
        if (element.classList.contains('sticky--moving')) {
          element.classList.remove('sticky--moving');
        }
      } // top and bottom


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
      } // set add


      if (add !== self.detail.addOld) {
        element.style[options.position] = add + 'px';
      } // fix position fixed width 100% of parent


      var width = self.normalizeWidth(self.container[0].clientWidth);

      if (element.style.width !== width) {
        element.style.width = width;
      } // save for direction


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

  }, {
    key: "eventStickyPos",
    value: function eventStickyPos(option) {
      var scrollTop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var val = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      if (!isNaN(parseFloat(option))) {
        val = option;
      } else {
        var elements = Array.isArray(option) || NodeList.prototype.isPrototypeOf(option) ? option : document.querySelectorAll(option);

        if (elements.length) {
          var found = false;
          val = 0;
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = elements[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var el = _step4.value;
              var addSticky = parseFloat(el.dataset.xtAddSticky);

              if (addSticky) {
                // if sticky--hide get real add
                var style = getComputedStyle(el);

                if (style.display !== 'none') {
                  val += addSticky;
                  found = true;
                }
              } else {
                var rect = el.getBoundingClientRect();
                val += rect.top;
                found = true;
              }
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
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
    } //////////////////////
    // event util
    //////////////////////

    /**
     * get height of option
     * @param {String|Number|Element} option
     * @param {Boolean} scrollInverse
     * @param {Number} val Default value
     * @returns {Object} obj Option's height (px) and if found hide element
     */

  }, {
    key: "eventStickyHeight",
    value: function eventStickyHeight(option, scrollInverse) {
      var val = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var self = this;
      var options = self.options; // logic

      var foundHide = false;

      if (!isNaN(parseFloat(option))) {
        val = option;
      } else {
        var elements = Array.isArray(option) || NodeList.prototype.isPrototypeOf(option) ? option : document.querySelectorAll(option);

        if (elements.length) {
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = elements[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var _el$classList, _el$classList2;

              var el = _step5.value;

              if (el.classList.contains('sticky-hide--down') && (_el$classList = el.classList).contains.apply(_el$classList, _toConsumableArray(self.classes))) {
                if (scrollInverse) {
                  val += el.clientHeight;
                  foundHide = true;
                }
              } else if (el.classList.contains('sticky-hide--up') && (_el$classList2 = el.classList).contains.apply(_el$classList2, _toConsumableArray(self.classes))) {
                if (!scrollInverse) {
                  val += el.clientHeight;
                  foundHide = true;
                }
              } else {
                val += el.clientHeight;
              }
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }
        }
      }

      return {
        val: val,
        foundHide: foundHide
      };
    }
  }]);

  return Sticky;
}(_core.default); //////////////////////
// option
//////////////////////


Sticky.componentName = 'xt-sticky';
Sticky.optionsDefault = {
  "class": "active",
  "on": "scroll resize",
  "min": 0,
  "max": "Infinity",
  "instant": true,
  "position": "top",
  "limit": {
    "bottom": "Infinity"
  },
  "contain": false,
  "hide": false,
  "aria": false
}; //////////////////////
// export
//////////////////////

var _default = Sticky;
exports.default = _default;

},{"../core":1,"../xtend":11}],11:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./polyfill");

var _core = _interopRequireDefault(require("./core"));

var _toggle = _interopRequireDefault(require("./interaction/toggle"));

var _drop = _interopRequireDefault(require("./interaction/drop"));

var _overlay = _interopRequireDefault(require("./interaction/overlay"));

var _slider = _interopRequireDefault(require("./presentation/slider"));

var _sticky = _interopRequireDefault(require("./presentation/sticky"));

var _fade = _interopRequireDefault(require("./presentation/fade"));

var _ajax = _interopRequireDefault(require("./others/ajax"));

var _smooth = _interopRequireDefault(require("./others/smooth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//////////////////////
// constructor
//////////////////////
var Xt = {}; //////////////////////
// components
//////////////////////

Xt.Core = _core.default;
Xt.Toggle = _toggle.default;
Xt.Drop = _drop.default;
Xt.Overlay = _overlay.default;
Xt.Slider = _slider.default;
Xt.Sticky = _sticky.default;
Xt.Fade = _fade.default;
Xt.Ajax = _ajax.default;
Xt.Smooth = _smooth.default; //////////////////////
// var
//////////////////////

Xt.observe = [];
Xt.currents = {}; // Xt currents based on namespace (so shared between Xt objects)

Xt.resizeDelay = 100;
Xt.scrollDelay = false;
Xt.focusables = 'a, button, details, input, iframe, select, textarea';
Xt.components = [{
  'name': 'xt-core',
  'class': Xt.Core
}, {
  'name': 'xt-toggle',
  'class': Xt.Toggle
}, {
  'name': 'xt-drop',
  'class': Xt.Drop
}, {
  'name': 'xt-overlay',
  'class': Xt.Overlay
}, {
  'name': 'xt-slider',
  'class': Xt.Slider
}, {
  'name': 'xt-sticky',
  'class': Xt.Sticky
}, {
  'name': 'xt-fade',
  'class': Xt.Fade
}, {
  'name': 'xt-ajax',
  'class': Xt.Ajax
}]; //////////////////////
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
}; //////////////////////
// init
//////////////////////

/**
 * init component
 */


Xt.init = function () {
  var added = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.documentElement;
  added = Xt.arrSingle(added);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = added[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var element = _step.value;
      // components
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = Xt.components[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var component = _step2.value;

          if (element.matches('[data-' + component.name + ']')) {
            new component.class(element);
          }

          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = element.querySelectorAll('[data-' + component.name + ']')[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var el = _step4.value;
              new component.class(el);
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }
        } // btnMerge

      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      if (element.matches('a, button') && Array.from(element).filter(function (x) {
        return x.querySelectorAll('.btn').length !== 0;
      })) {
        Xt.btnMerge.init(element);
      }

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = Array.from(element.querySelectorAll('a, button')).filter(function (x) {
          return x.querySelectorAll('.btn').length !== 0;
        })[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _el = _step3.value;
          Xt.btnMerge.init(_el);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};
/**
 * destroy component
 */


Xt.destroy = function () {
  var removed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.documentElement;
  removed = Xt.arrSingle(removed);
  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = removed[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var element = _step5.value;
      // components
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = Xt.components[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var component = _step6.value;

          if (element.matches('[data-' + component.name + '-done]')) {
            var self = Xt.get(element, component.name);

            if (self) {
              self.destroy();
            }
          }

          var _iteratorNormalCompletion8 = true;
          var _didIteratorError8 = false;
          var _iteratorError8 = undefined;

          try {
            for (var _iterator8 = element.querySelectorAll('[data-' + component.name + '-done]')[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
              var el = _step8.value;

              var _self = Xt.get(el, component.name);

              if (_self) {
                _self.destroy();
              }
            }
          } catch (err) {
            _didIteratorError8 = true;
            _iteratorError8 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
                _iterator8.return();
              }
            } finally {
              if (_didIteratorError8) {
                throw _iteratorError8;
              }
            }
          }
        } // btnMerge

      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
            _iterator6.return();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }

      if (element.matches('a, button') && Array.from(element).filter(function (x) {
        return x.querySelectorAll('.btn').length !== 0;
      })) {
        Xt.btnMerge.destroy(element);
      }

      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        for (var _iterator7 = Array.from(element.querySelectorAll('a, button')).filter(function (x) {
          return x.querySelectorAll('.btn').length !== 0;
        })[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          var _el2 = _step7.value;
          Xt.btnMerge.destroy(_el2);
        }
      } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
            _iterator7.return();
          }
        } finally {
          if (_didIteratorError7) {
            throw _iteratorError7;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
        _iterator5.return();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
  }
};
/**
 * initObserve
 */


Xt.initObserve = function () {
  var added = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.documentElement;
  var _iteratorNormalCompletion9 = true;
  var _didIteratorError9 = false;
  var _iteratorError9 = undefined;

  try {
    for (var _iterator9 = Xt.observe[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
      var obj = _step9.value;
      var els = [];

      if (added.matches(obj.matches)) {
        els.push(added);
      }

      var _iteratorNormalCompletion10 = true;
      var _didIteratorError10 = false;
      var _iteratorError10 = undefined;

      try {
        for (var _iterator10 = added.querySelectorAll(obj.matches)[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
          var el = _step10.value;
          els.push(el);
        }
      } catch (err) {
        _didIteratorError10 = true;
        _iteratorError10 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
            _iterator10.return();
          }
        } finally {
          if (_didIteratorError10) {
            throw _iteratorError10;
          }
        }
      }

      if (els.length) {
        var _iteratorNormalCompletion11 = true;
        var _didIteratorError11 = false;
        var _iteratorError11 = undefined;

        try {
          for (var _iterator11 = els.entries()[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
            var _step11$value = _slicedToArray(_step11.value, 2),
                i = _step11$value[0],
                el = _step11$value[1];

            obj.fnc(el, i, obj.matches);
          }
        } catch (err) {
          _didIteratorError11 = true;
          _iteratorError11 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion11 && _iterator11.return != null) {
              _iterator11.return();
            }
          } finally {
            if (_didIteratorError11) {
              throw _iteratorError11;
            }
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError9 = true;
    _iteratorError9 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
        _iterator9.return();
      }
    } finally {
      if (_didIteratorError9) {
        throw _iteratorError9;
      }
    }
  }
};
/**
 * observer
 */


Xt.observer = new MutationObserver(function (mutationsList) {
  var _iteratorNormalCompletion12 = true;
  var _didIteratorError12 = false;
  var _iteratorError12 = undefined;

  try {
    for (var _iterator12 = mutationsList[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
      var mutation = _step12.value;

      if (mutation.type === 'childList') {
        // removed
        var _iteratorNormalCompletion13 = true;
        var _didIteratorError13 = false;
        var _iteratorError13 = undefined;

        try {
          for (var _iterator13 = mutation.removedNodes[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
            var removed = _step13.value;

            if (removed.nodeType === 1 && !removed.classList.contains('xt-ignore')) {
              Xt.destroy(removed);
            }
          } // added

        } catch (err) {
          _didIteratorError13 = true;
          _iteratorError13 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion13 && _iterator13.return != null) {
              _iterator13.return();
            }
          } finally {
            if (_didIteratorError13) {
              throw _iteratorError13;
            }
          }
        }

        var _iteratorNormalCompletion14 = true;
        var _didIteratorError14 = false;
        var _iteratorError14 = undefined;

        try {
          for (var _iterator14 = mutation.addedNodes[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
            var added = _step14.value;

            if (added.nodeType === 1 && !added.classList.contains('xt-ignore')) {
              Xt.init(added);
              Xt.initObserve(added);
            }
          }
        } catch (err) {
          _didIteratorError14 = true;
          _iteratorError14 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion14 && _iterator14.return != null) {
              _iterator14.return();
            }
          } finally {
            if (_didIteratorError14) {
              throw _iteratorError14;
            }
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError12 = true;
    _iteratorError12 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion12 && _iterator12.return != null) {
        _iterator12.return();
      }
    } finally {
      if (_didIteratorError12) {
        throw _iteratorError12;
      }
    }
  }
});
/**
 * document ready
 */

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    setVh();
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
    setVh();
    Xt.init();
    Xt.initObserve();
    Xt.observer.observe(document.documentElement, {
      characterData: false,
      attributes: false,
      childList: true,
      subtree: true
    });
  });
} //////////////////////
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
  put: function put(el, key, obj) {
    // new map if not already there
    if (!this._storage.has(el)) {
      this._storage.set(el, new Map());
    } // return


    var getEl = this._storage.get(el);

    var getKey = getEl.get(key);

    if (getKey) {
      return getKey;
    } // put


    getEl.set(key, obj);
    return getEl.get(key);
  },

  /**
   * get obj from key on element's map
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {String} key
   * @returns {Object|Function}
   */
  get: function get(el, key) {
    var getEl = this._storage.get(el); // if no map return null


    if (!getEl) {
      return null;
    } // get


    return getEl.get(key);
  },

  /**
   * get all obj/key on element's map
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @returns {Object|Function}
   */
  getAll: function getAll(el) {
    var getEl = this._storage.get(el); // if no map return null


    if (!getEl) {
      return null;
    } // get all


    return getEl;
  },

  /**
   * has key on element's map
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {String} key
   * @returns {Boolean}
   */
  has: function has(el, key) {
    // has
    return this._storage.get(el).has(key);
  },

  /**
   * remove element's map key
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {String} key
   * @returns {Boolean}
   */
  remove: function remove(el, key) {
    var getEl = this._storage.get(el); // if no map return null


    if (!getEl) {
      return null;
    } // remove


    var ret = getEl.delete(key);

    if (!getEl.size === false) {
      this._storage.delete(el);
    }

    return ret;
  }
}; //////////////////////
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
  get: function get() {
    return Xt.scrollbar.currents;
  },

  /**
   * add scrollbar currents
   * @param {Node|HTMLElement|EventTarget|Window} el Elements to be deactivated
   */
  add: function add(el) {
    Xt.scrollbar.currents.push(el);
  },

  /**
   * remove scrollbar currents
   * @param {Node|HTMLElement|EventTarget|Window} el Elements to be deactivated
   */
  remove: function remove(el) {
    Xt.scrollbar.currents = Xt.scrollbar.currents.filter(function (x) {
      return x !== el;
    });
  }
}; //////////////////////
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
  on: function on() {
    // event key
    var focusChangeKeyHandler = Xt.dataStorage.put(document, 'keyup.focus', Xt.focus.changeKey);
    document.addEventListener('keyup', focusChangeKeyHandler); // event mouse

    var focusChangeOtherHandler = Xt.dataStorage.get(document, 'mousedown touchstart pointerdown.focus');
    document.removeEventListener('mousedown', focusChangeOtherHandler);
    document.removeEventListener('touchstart', focusChangeOtherHandler);
    document.removeEventListener('pointerdown', focusChangeOtherHandler);
  },

  /**
   * disable focus change events
   */
  off: function off() {
    // event
    var focusChangeKeyHandler = Xt.dataStorage.get(document, 'keyup.focus');
    document.removeEventListener('keyup', focusChangeKeyHandler); // event mouse

    var focusChangeOtherHandler = Xt.dataStorage.put(document, 'mousedown touchstart pointerdown.focus', Xt.focus.changeOther);
    document.addEventListener('mousedown', focusChangeOtherHandler);
    document.addEventListener('touchstart', focusChangeOtherHandler, Xt.passiveSupported ? {
      passive: true
    } : false);
    document.addEventListener('pointerdown', focusChangeOtherHandler, Xt.passiveSupported ? {
      passive: true
    } : false);
  },

  /**
   * focus change on key events
   * @param {Event} e Event
   */
  changeKey: function changeKey(e) {
    var code = e.keyCode ? e.keyCode : e.which;

    if (code === 9) {
      if (!Xt.focus.block) {
        // remember Xt.focus
        Xt.focus.current = document.activeElement;
      }

      if (!document.documentElement.classList.contains('xt-focus')) {
        // html.xt-focus
        document.documentElement.classList.add('xt-focus'); // switch mode

        Xt.focus.off();
      }
    }
  },

  /**
   * focus change on other events
   * @param {Event} e Event
   */
  changeOther: function changeOther(e) {
    if (!Xt.focus.block) {
      // remember Xt.focus
      Xt.focus.current = e.target;
    }

    if (document.documentElement.classList.contains('xt-focus')) {
      // html.xt-focus
      document.documentElement.classList.remove('xt-focus'); // switch mode

      Xt.focus.on();
    }
  }
};
Xt.focus.on(); //////////////////////
// focusLimit
// util to limit focus inside HTML elements
//////////////////////

Xt.focusLimit = {
  /**
   * activate focusLimit to an element
   * @param {Node|HTMLElement|EventTarget|Window} el Element
   */
  on: function on(el) {
    // @FIX Xt.focus when clicking and not used tab before
    Xt.focus.current = Xt.focus.current ? Xt.focus.current : document.activeElement; // var

    var focusables = el.querySelectorAll(Xt.focusables);
    focusables = Array.from(focusables).filter(function (x) {
      return x.matches(':not([disabled]), :not([tabindex="-1"])');
    }); // filter out parent

    if (focusables.length) {
      var first = focusables[0];
      var last = focusables[focusables.length - 1]; // event

      var focusLimitHandler = Xt.dataStorage.put(document, 'keyup.focusLimit', Xt.focusLimit.limit.bind(this).bind(this, focusables, first, last));
      document.addEventListener('keyup', focusLimitHandler);
    }
  },

  /**
   * deactivate focusLimit to an element
   */
  off: function off() {
    // event
    var focusLimitHandler = Xt.dataStorage.get(document, 'keyup.focusLimit');
    document.removeEventListener('keyup', focusLimitHandler);
  },

  /**
   * limit even on focus when activated
   * @param {NodeList|Array} focusables Focusables elements
   * @param {Node|HTMLElement|EventTarget|Window} first First focusable element
   * @param {Node|HTMLElement|EventTarget|Window} last Last focusable element
   * @param {Event} e Event
   */
  limit: function limit(focusables, first, last, e) {
    var code = e.keyCode ? e.keyCode : e.which;

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
}; //////////////////////
// btnMerge
// pass .hover and .active classes to .btn inside
//////////////////////

Xt.btnMerge = {
  /**
   * init to pass .hover and .active to .btn inside Element
   * @param {Node|HTMLElement|EventTarget|Window} el Element
   */
  init: function init(el) {
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
  destroy: function destroy(el) {
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
  hoverOn: function hoverOn() {
    var els = this.querySelectorAll('.btn');
    var _iteratorNormalCompletion15 = true;
    var _didIteratorError15 = false;
    var _iteratorError15 = undefined;

    try {
      for (var _iterator15 = els[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
        var el = _step15.value;
        el.classList.add('hover');
      }
    } catch (err) {
      _didIteratorError15 = true;
      _iteratorError15 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion15 && _iterator15.return != null) {
          _iterator15.return();
        }
      } finally {
        if (_didIteratorError15) {
          throw _iteratorError15;
        }
      }
    }
  },

  /**
   * event hover off
   */
  hoverOff: function hoverOff() {
    var els = this.querySelectorAll('.btn');
    var _iteratorNormalCompletion16 = true;
    var _didIteratorError16 = false;
    var _iteratorError16 = undefined;

    try {
      for (var _iterator16 = els[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
        var el = _step16.value;
        el.classList.remove('hover');
      }
    } catch (err) {
      _didIteratorError16 = true;
      _iteratorError16 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion16 && _iterator16.return != null) {
          _iterator16.return();
        }
      } finally {
        if (_didIteratorError16) {
          throw _iteratorError16;
        }
      }
    }
  },

  /**
   * event active on
   */
  activeOn: function activeOn() {
    var els = this.querySelectorAll('.btn');
    var _iteratorNormalCompletion17 = true;
    var _didIteratorError17 = false;
    var _iteratorError17 = undefined;

    try {
      for (var _iterator17 = els[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
        var el = _step17.value;
        el.classList.add('active');
      }
    } catch (err) {
      _didIteratorError17 = true;
      _iteratorError17 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion17 && _iterator17.return != null) {
          _iterator17.return();
        }
      } finally {
        if (_didIteratorError17) {
          throw _iteratorError17;
        }
      }
    }
  },

  /**
   * event active off
   */
  activeOff: function activeOff() {
    var els = this.querySelectorAll('.btn');
    var _iteratorNormalCompletion18 = true;
    var _didIteratorError18 = false;
    var _iteratorError18 = undefined;

    try {
      for (var _iterator18 = els[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
        var el = _step18.value;
        el.classList.remove('active');
      }
    } catch (err) {
      _didIteratorError18 = true;
      _iteratorError18 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion18 && _iterator18.return != null) {
          _iterator18.return();
        }
      } finally {
        if (_didIteratorError18) {
          throw _iteratorError18;
        }
      }
    }
  }
}; //////////////////////
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
  var result = false;
  var _iteratorNormalCompletion19 = true;
  var _didIteratorError19 = false;
  var _iteratorError19 = undefined;

  try {
    for (var _iterator19 = targets[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
      var t = _step19.value;

      if (element === t || t.contains(element)) {
        result = true;
      }
    }
  } catch (err) {
    _didIteratorError19 = true;
    _iteratorError19 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion19 && _iterator19.return != null) {
        _iterator19.return();
      }
    } finally {
      if (_didIteratorError19) {
        throw _iteratorError19;
      }
    }
  }

  return result;
};
/**
 * Get scrollbar width of document
 * @param {Boolean} force Force recalc
 * @returns {Number} Scrollbar width
 */


Xt.scrollbarWidth = function () {
  var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  if (Xt.scrollbarWidthVal === undefined) {
    var scrollbarWidthHandler = Xt.dataStorage.put(window, 'resize.scrollbar', Xt.scrollbarWidth.bind(this, true));
    addEventListener('resize', scrollbarWidthHandler);
  }

  if (force || Xt.scrollbarWidthVal === undefined) {
    // add outer
    var outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.width = '100px';
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps

    document.body.appendChild(outer);
    var widthNoScroll = outer.offsetWidth; // force scrollbars

    outer.style.overflow = 'scroll'; // add inner

    var inner = document.createElement('div');
    inner.style.width = '100%';
    outer.appendChild(inner);
    var widthWithScroll = inner.offsetWidth; // remove

    outer.parentNode.removeChild(outer); // return

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
  return 'xt-' + Xt.uid++;
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
  var final = {};
  var _iteratorNormalCompletion20 = true;
  var _didIteratorError20 = false;
  var _iteratorError20 = undefined;

  try {
    for (var _iterator20 = arr[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
      var obj = _step20.value;

      if (obj) {
        var _arr2 = Object.entries(obj);

        for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
          var _arr2$_i = _slicedToArray(_arr2[_i2], 2),
              key = _arr2$_i[0],
              value = _arr2$_i[1];

          if (_typeof(value) === 'object' && !value.nodeName // not HTML element
          && value !== window) {
            // not window
            final[key] = Xt.merge([final[key], value]);
          } else {
            final[key] = value;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError20 = true;
    _iteratorError20 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion20 && _iterator20.return != null) {
        _iterator20.return();
      }
    } finally {
      if (_didIteratorError20) {
        throw _iteratorError20;
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
    var arr = new Array(1);
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
  var div = document.createElement('div');
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
  var parents = [];

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
  var query = '[data-xt-namespace^="drop-xt-"]';
  var _iteratorNormalCompletion21 = true;
  var _didIteratorError21 = false;
  var _iteratorError21 = undefined;

  try {
    for (var _iterator21 = el.querySelectorAll(query)[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
      var drop = _step21.value;
      drop.dispatchEvent(new CustomEvent('off.xt'));
    }
  } catch (err) {
    _didIteratorError21 = true;
    _iteratorError21 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion21 && _iterator21.return != null) {
        _iterator21.return();
      }
    } finally {
      if (_didIteratorError21) {
        throw _iteratorError21;
      }
    }
  }
};
/**
 * get transition or animation time
 * @param {Node|HTMLElement|EventTarget|Window} el Element animating
 * @param {Number} timing Force duration in milliseconds
 * @returns {Number} Time in milliseconds
 */


Xt.animTime = function (el) {
  var timing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (timing || timing === 0) {
    return timing;
  } else {
    var style = getComputedStyle(el);
    var transition = parseFloat(style.transitionDuration) + parseFloat(style.transitionDelay);
    var animation = parseFloat(style.animationDuration) + parseFloat(style.animationDelay);

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


Xt.animTimeout = function (el, func) {
  var timing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
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


Xt.eventDelay = function (e, element, func) {
  var prefix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var container = document.documentElement;

  if (e && e.type && (e.type === 'resize' || e.type === 'scroll')) {
    var delay = Xt[e.type + 'Delay'];

    if (delay === false) {
      // func
      func(e);
      return false;
    }

    if (e.type === 'resize') {
      // multiple calls check
      if (window.innerWidth === parseFloat(container.dataset['xtEventDelay'])) {
        // only width no height because it changes on scroll on mobile
        return false;
      } // save after a frame to execute all eventDelay


      cancelAnimationFrame(parseFloat(container.dataset.xtEventDelayFrame));
      container.dataset.xtEventDelayFrame = requestAnimationFrame(function () {
        container.dataset['xtEventDelay'] = window.innerWidth.toString();
      }).toString();
    } // delay


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

document.documentElement.dataset['xtEventDelay'] = window.innerWidth.toString();
/**
 * passive events
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
 */

Xt.passiveSupported = false;

try {
  var options = {
    get passive() {
      Xt.passiveSupported = true;
    }

  };
  addEventListener('test', options, options);
  removeEventListener('test', options, options);
} catch (err) {
  Xt.passiveSupported = false;
} //////////////////////
// root utils
//////////////////////
// https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

/* USAGE:
height: 100vh;
height: calc(var(--vh, 1vh) * 100);
*/


function setVh() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  e = e ? e : {
    type: 'resize'
  };
  Xt.eventDelay(e, document.documentElement, function () {
    Xt.vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', Xt.vh + 'px');
  }, 'vh.xt');
}

addEventListener('resize', setVh); // pass focus and blur window events to iframes

addEventListener('focus', function () {
  var _iteratorNormalCompletion22 = true;
  var _didIteratorError22 = false;
  var _iteratorError22 = undefined;

  try {
    for (var _iterator22 = document.querySelectorAll('iframe')[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
      var iframe = _step22.value;
      iframe.contentWindow.dispatchEvent(new CustomEvent('focus'));
    }
  } catch (err) {
    _didIteratorError22 = true;
    _iteratorError22 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion22 && _iterator22.return != null) {
        _iterator22.return();
      }
    } finally {
      if (_didIteratorError22) {
        throw _iteratorError22;
      }
    }
  }
});
addEventListener('blur', function () {
  var _iteratorNormalCompletion23 = true;
  var _didIteratorError23 = false;
  var _iteratorError23 = undefined;

  try {
    for (var _iterator23 = document.querySelectorAll('iframe')[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
      var iframe = _step23.value;
      iframe.contentWindow.dispatchEvent(new CustomEvent('blur'));
    }
  } catch (err) {
    _didIteratorError23 = true;
    _iteratorError23 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion23 && _iterator23.return != null) {
        _iterator23.return();
      }
    } finally {
      if (_didIteratorError23) {
        throw _iteratorError23;
      }
    }
  }
}); //////////////////////
// export
//////////////////////

if (typeof define === 'function' && define.amd) {
  define(['xt'], Xt);
} else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
  module.exports = Xt;
}

global.Xt = Xt;
var _default = Xt;
exports.default = _default;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./core":1,"./interaction/drop":2,"./interaction/overlay":3,"./interaction/toggle":4,"./others/ajax":5,"./others/smooth":6,"./polyfill":7,"./presentation/fade":8,"./presentation/slider":9,"./presentation/sticky":10}]},{},[11])(11)
});

//# sourceMappingURL=xtend.js.map
