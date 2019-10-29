import { Xt } from 'xtend-library'
import 'xtend-library/src/extensions/animation/MouseFollow.js'

/**
 * .demo--loader--mouse-spinner
 */

Xt.mount.push({
  matches: '.demo--loader--mouse-spinner',
  mount: function(object) {
    // init

    const mouseFollowObject = object
    const mouseFollowContainer = mouseFollowObject.closest('.card')

    let mouseFollow = new Xt.MouseFollow(mouseFollowObject, mouseFollowContainer, {
      mouseCheck: function() {
        return !this.object.classList.contains('loader--disable') || this.object.classList.contains('loader--js')
      },
    })

    // unmount

    return function unmount() {
      mouseFollow.destroy()
      mouseFollow = null
    }
  },
})
