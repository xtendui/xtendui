import { Xt } from 'xtend-library'
import 'xtend-library/src/extensions/utils/mouse-follow.js'

Xt.mount.push({
  matches: '.demo_loader-mouse-filler',
  mount: function(object) {
    // vars

    const mouseFollowObject = object
    const mouseFollowContainer = mouseFollowObject.closest('.card')

    let mouseFollow = new Xt.MouseFollow(mouseFollowObject, mouseFollowContainer, {
      mouseCheck: function() {
        return !this.object.classList.contains('loader-disable') || this.object.classList.contains('loader-js')
      },
    })

    // unmount

    return function unmount() {
      mouseFollow.destroy()
      mouseFollow = null
    }
  },
})
