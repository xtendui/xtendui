import { Xt } from 'xtend-library'
import 'xtend-library/src/extensions/general/PropagateInteraction.js'

/**
 * xtend extension: propagate-interaction-btn
 */

Xt.mount.push({
  matches: 'a, button',
  fnc: function mount (object) {
    // init

    const self = new Xt.PropagateInteraction(object, { targets: '.btn' })

    // unmount

    return function unmount () {
      self.destroy()
    }
  }
})
