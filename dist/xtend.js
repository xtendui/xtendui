/*! Xtend (https://getxtend.com/)
@copyright (c) 2017 - 2019 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

// support explorer 15, firefox 48, opera 34, safari 10, chrome 47

// support old browsers ie11+
// ADD
// .browserslistrc ie >= 11
// import 'xtend-library/src/polyfill-ie11.js'

// POLYFILLS
// ADD
// https://cdnjs.cloudflare.com/ajax/libs/core-js/2.6.9/shim.min.js
// OR
// import 'core-js'
// import 'regenerator-runtime/runtime'

import {Xt} from 'xtend-library'
import 'xtend-library/src/xtend-core.js'

// export UMD

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
      (global = global || self, global.Xt = factory());
}(this, function () { 'use strict';
  return Xt;
}));
