/*! Xtend (https://getxtend.com/)
@copyright (c) 2018 - 2019 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

import 'core-js'
import 'regenerator-runtime/runtime'
import '/src/polyfill.js'
import '/src/polyfill-old.js'
import { Xt } from '/src/xt.js'
import '/src/xtend-core.js'
import '/src/xtend-extensions.js'
import '/src/xtend-addons.js'

// export UMD

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
      (global = global || self, global.Xt = factory());
}(this, function () { 'use strict';
  return Xt;
}));
