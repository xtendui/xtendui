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

    mouseFollowObject.addEventListener('mouseenter.xt.mousefollow', () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          // @FIX in animation double raf
          mouseFollowContainer.classList.add('in')
        })
      })
      mouseFollowContainer.classList.remove('out')
    })

    // leave

    mouseFollowObject.addEventListener('mouseleave.xt.mousefollow', () => {
      mouseFollowContainer.classList.remove('active')
      mouseFollowContainer.classList.remove('in')
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
