/**
 * Xtend (https://xtendui.com/)
 * @copyright (c) 2017 - 2020 Riccardo Caroli
 * @license MIT (https://github.com/minimit/xtend-ui/blob/master/LICENSE)
 */

import { Xt } from 'xtend-ui'
import 'xtend-ui/build/xtend-core'
import 'xtend-ui/build/xtend-addons'

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
