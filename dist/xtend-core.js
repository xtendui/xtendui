/* ! Xtend (https://getxtend.com/)
@copyright (c) 2018 - 2020 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

import 'core-js'
import 'regenerator-runtime/runtime'
import 'xtend-library/src/polyfill.js'
import { Xt } from 'xtend-library/src/xt.js'
import 'xtend-library/src/xtend-core.js'

// export UMD
/* eslint-disable */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
      (global = global || self, global.Xt = factory());
}(this, function () { 'use strict';
  return Xt;
}));
/* eslint-enable */
