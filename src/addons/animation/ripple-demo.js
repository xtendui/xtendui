import { Xt } from 'xtend-library'
import 'xtend-library/src/addons/animation/ripple.js'
import 'xtend-library/src/vars.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--ripple-default .btn, .demo--ripple-default .card',
  mount: object => {
    // init

    let self = new Xt.Ripple(object, {})

    // on

    const eventOn = e => {
      const ripple = self.rippleContainer.querySelector('.ripple:last-child')
      // animate
      if (ripple) {
        gsap.set(ripple, { height: self.size, width: self.size, top: self.top, left: self.left, scale: 1, opacity: 0 })
        gsap.to(ripple, { opacity: 1, duration: Xt.vars.timeTiny, ease: 'penguin' })
        gsap.to(ripple, { scale: self.scaleFinal, duration: Xt.vars.timeSmall, ease: 'penguin' })
      }
    }

    object.addEventListener('ripple.on.xt', eventOn)

    // off

    const eventOff = e => {
      const ripple = self.rippleContainer.querySelector('.ripple:last-child')
      // animate
      if (ripple) {
        gsap.to(ripple, { opacity: 0, duration: Xt.vars.timeSmall, ease: 'penguin', delay: Xt.vars.timeMini }).eventCallback('onComplete', () => {
          ripple.remove()
        })
      }
    }

    object.addEventListener('ripple.off.xt', eventOff)

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
