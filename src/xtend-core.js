/*! Xtend v0.9.0 (https://getxtend.com/)
@copyright (c) 2017 - 2019 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

export const Xt = require('xtend-library/src/xtend').Xt

if (typeof window !== 'undefined') {

require('xtend-library/src/core/ajax/ajax')
require('xtend-library/src/core/controller/controller')
require('xtend-library/src/core/drop/drop')
require('xtend-library/src/core/overlay/overlay')
require('xtend-library/src/core/scroll/scroll')
require('xtend-library/src/core/slider/slider')
require('xtend-library/src/core/smooth/smooth')
require('xtend-library/src/core/sticky/sticky')
require('xtend-library/src/core/toggle/toggle')

}