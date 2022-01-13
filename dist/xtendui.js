import 'xtendui/dist/xtend-components'

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
