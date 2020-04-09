import { Xt } from 'xtend-library'
import 'xtend-library/src/addons/animation/mouse-follow.js'

Xt.mount.push({
  matches: '.slider-navigation-sides-btn',
  mount: object => {
    // mousefollow

    const mouseFollowObject = object
    const mouseFollowContainer = mouseFollowObject.closest('.slider-navigation-sides')
    let mouseFollow = new Xt.MouseFollow(mouseFollowObject, mouseFollowContainer)

    // enter

    mouseFollowContainer.addEventListener('mouseenter.xt.mousefollow', () => {
      Xt.animOn(mouseFollowContainer)
    })

    // leave

    mouseFollowContainer.addEventListener('mouseleave.xt.mousefollow', () => {
      Xt.animOff(mouseFollowContainer)
    })

    // unmount

    const unmount = () => {
      mouseFollow.destroy()
      mouseFollow = null
    }
    return unmount
  },
})
