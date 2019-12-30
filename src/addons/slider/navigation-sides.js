import { Xt } from 'xtend-library'
import 'xtend-library/src/core/animation/mouse-follow.js'

Xt.mount.push({
  matches: '.slider-navigation-sides-btn',
  mount: function(object) {
    // mousefollow

    const mouseFollowObject = object
    const mouseFollowContainer = mouseFollowObject.closest('.slider-navigation-sides')
    let mouseFollow = new Xt.MouseFollow(mouseFollowObject, mouseFollowContainer)

    // enter

    mouseFollowObject.addEventListener('mouseenter.xt', function () {
      mouseFollowContainer.classList.add('active')
      mouseFollowContainer.classList.remove('out')
    })

    // leave

    mouseFollowObject.addEventListener('mouseleave.xt', function () {
      mouseFollowContainer.classList.remove('active')
      mouseFollowContainer.classList.add('out')
      Xt.animTimeout(mouseFollowContainer, function() {
        mouseFollowContainer.classList.remove('out')
      })
    })

    // unmount

    const unmount = function() {
      mouseFollow.destroy()
      mouseFollow = null
    }
    return unmount
  },
})
