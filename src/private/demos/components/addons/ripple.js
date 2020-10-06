import { Xt } from 'xtend-ui'
import 'xtend-ui/src/addons/ripple'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--ripple-default .btn, .demo--ripple-default .card',
  mount: object => {
    // init

    let self = new Xt.Ripple(object, {})

    // on

    const eventOn = () => {
      const ripple = self.container.querySelector('.ripple:last-child')
      // animate
      if (ripple) {
        gsap.set(ripple, { height: self.size, width: self.size, top: self.top, left: self.left, scale: 1, opacity: 0 })
        gsap.to(ripple, { opacity: 1, duration: Xt.vars.timeTiny, ease: 'quad.inOut' })
        gsap.to(ripple, { scale: self.scaleFinal, duration: Xt.vars.timeSmall, ease: 'quad.inOut' })
      }
    }

    object.addEventListener('on.xt.ripple', eventOn)

    // off

    const eventOff = () => {
      const ripple = self.container.querySelector('.ripple:last-child')
      // animate
      if (ripple) {
        gsap.to(ripple, { opacity: 0, duration: Xt.vars.timeSmall, ease: 'quad.out', delay: Xt.vars.timeMini }).eventCallback('onComplete', () => {
          ripple.remove()
        })
      }
    }

    object.addEventListener('off.xt.ripple', eventOff)

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
