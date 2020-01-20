import { Xt } from 'xtend-library'
import 'xtend-library/src/core/animation/mouse-follow.js'

Xt.mount.push({
  matches: '.demo--loader-mouse-filler',
  mount: object => {
    // mousefollow

    const mouseFollowObject = object
    const mouseFollowContainer = mouseFollowObject.closest('.card')
    let mouseFollow = new Xt.MouseFollow(mouseFollowObject, mouseFollowContainer, {
      mouseCheck: () => {
        return !mouseFollow.object.classList.contains('loader-disable') || mouseFollow.object.classList.contains('loader-js')
      },
    })

    // unmount

    const unmount = () => {
      mouseFollow.destroy()
      mouseFollow = null
    }
    return unmount
  },
})
