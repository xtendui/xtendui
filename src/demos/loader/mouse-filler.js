import { Xt } from 'xtend-library'
import 'xtend-library/src/extensions/animation/MouseFollow.js'

/**
 * .demo--loader--mouse-filler
 */

Xt.mount.push({
  matches: '.demo--loader--mouse-filler',
  fnc: function mount (object) {
    // vars

    const mouseFollowObject = object
    const mouseFollowContainer = mouseFollowObject.closest('.card')

    const mouseFollow = new Xt.MouseFollow(mouseFollowObject, mouseFollowContainer, {
      mouseCheck: function () {
        return !this.object.classList.contains('loader--disable') || this.object.classList.contains('loader--js')
      }
    })

    // unmount

    return function unmount () {
      mouseFollow.destroy()
    }
  }
})
