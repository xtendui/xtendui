import { Xt } from 'xtend-library'
import 'xtend-library/src/extensions/animation/PropagateInteraction.js'

/**
 * xtend extension: propagate-interaction-btn
 */

Xt.mount.push({
  matches: 'a, button',
  mount: function (object) {
    // init

    let self = new Xt.PropagateInteraction(object, { targets: '.btn' })

    // unmount

    return function unmount () {
      self.destroy()
      self = null
    }
  }
})
