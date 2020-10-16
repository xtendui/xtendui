/**
 * Xtend (https://xtendui.com/)
 * @copyright (c) 2017 - 2020 Riccardo Caroli
 * @license MIT (https://github.com/minimit/xtendui/blob/master/LICENSE)
 */

import { Xt } from 'xtendui'
import 'xtendui/build/xtend-core'
import 'xtendui/build/xtend-addons'

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
