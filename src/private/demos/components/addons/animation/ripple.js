import { Xt } from 'xtendui'
import 'xtendui/src/addons/ripple'
import gsap from 'gsap'
gsap.defaults({ overwrite: 'auto' })
gsap.config({ force3D: false })

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
        gsap.to(ripple, { opacity: 1, duration: 0.25, ease: 'quad.inOut' })
        gsap.to(ripple, { scale: self.scaleFinal, duration: 0.5, ease: 'quad.inOut' })
      }
    }

    object.addEventListener('on.xt.ripple', eventOn)

    // off

    const eventOff = () => {
      const ripple = self.container.querySelector('.ripple:last-child')
      // animate
      if (ripple) {
        gsap.to(ripple, { opacity: 0, duration: 0.5, ease: 'quad.out', delay: 0.1 }).eventCallback('onComplete', () => {
          ripple.remove()
        })
      }
    }

    object.addEventListener('off.xt.ripple', eventOff)

    // unmount

    return () => {
      self.destroy()
      self = null
    }
  },
})
