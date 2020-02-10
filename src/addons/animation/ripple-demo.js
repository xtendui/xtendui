import { Xt } from 'xtend-library'
import 'xtend-library/src/addons/animation/ripple.js'

Xt.mount.push({
  matches: '.demo--ripple-default .btn, .demo--ripple-default .card',
  mount: object => {
    // init

    let self = new Xt.Ripple(object, {})

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
