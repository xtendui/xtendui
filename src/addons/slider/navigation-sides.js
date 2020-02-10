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

    mouseFollowObject.addEventListener('mouseenter.xt', () => {
      mouseFollowContainer.classList.add('active')
      mouseFollowContainer.classList.remove('out')
    })

    // leave

    mouseFollowObject.addEventListener('mouseleave.xt', () => {
      mouseFollowContainer.classList.remove('active')
      mouseFollowContainer.classList.add('out')
      Xt.animTimeout(mouseFollowContainer, () => {
        mouseFollowContainer.classList.remove('out')
      })
    })

    // unmount

    const unmount = () => {
      mouseFollow.destroy()
      mouseFollow = null
    }
    return unmount
  },
})
