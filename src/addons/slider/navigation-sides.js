import { Xt } from '/src/xt.js'
import '/src/addons/animation/mouse-follow.js'

/**
 * slider-navigation-sides
 */

Xt.mount.push({
  matches: '.slider-navigation-sides-btn',
  mount: object => {
    // mousefollow

    const mouseFollowObject = object
    const mouseFollowContainer = mouseFollowObject.closest('.slider-navigation-sides')
    let mouseFollow = new Xt.MouseFollow(mouseFollowObject, mouseFollowContainer, {
      friction: false,
    })

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
