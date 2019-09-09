import { Xt } from 'xtend-library'
import 'xtend-library/src/extensions/form/TextareaAutosize.js'

/**
 * xtend extension: textarea-autosize
 */

Xt.mount.push({
  matches: 'textarea',
  mount: function (object) {
    // init

    const self = new Xt.TextareaAutosize(object)

    // unmount

    return function unmount () {
      self.destroy()
    }
  }
})
