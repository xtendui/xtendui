import { Xt } from 'xtend-library'
import 'xtend-library/src/addons/animation/mouse-follow'

Xt.mount.push({
  matches: '.demo--loader-mouse-filler',
  mount: object => {
    // mousefollow

    const mouseFollowObject = object
    const mouseFollowContainer = mouseFollowObject.closest('.card')
    let mouseFollow = new Xt.MouseFollow(mouseFollowObject, mouseFollowContainer, {
      mouseCheck: function () {
        // eslint-disable-next-line no-invalid-this
        return !this.object.classList.contains('loader-disable') || this.object.classList.contains('loader-js')
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
