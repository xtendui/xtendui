import { Xt } from 'xtendui'
import 'xtendui/src/ripple'
import gsap from 'gsap'

Xt.mount({
  matches: '.demo--ripple-animation-v1 .xt-button, .demo--ripple-animation-v1 .xt-card',
  mount: ({ ref }) => {
    // vars

    const item = ref

    // init

    let selfDestroy = () => {}
    new Xt.Ripple(item, {}).then(self => {
      // on

      const on = () => {
        /***/
        const ripple = self.inner.querySelector('.xt-ripple:last-child')
        /***/
        // animate
        if (ripple) {
          gsap.set(ripple, {
            height: self.size,
            width: self.size,
            top: self.top,
            left: self.left,
            scale: 1,
            opacity: 0,
          })
          gsap.to(ripple, {
            opacity: 1,
            duration: 0.25,
            ease: 'quad.inOut',
          })
          gsap.to(ripple, {
            scale: self.scaleFinal,
            duration: 0.5,
            ease: 'quad.inOut',
          })
        }
      }

      item.addEventListener('on.xt.ripple', on)

      // off

      const off = () => {
        /***/
        const ripple = self.inner.querySelector('.xt-ripple:last-child')
        /***/
        // animate
        if (ripple) {
          gsap
            .to(ripple, {
              opacity: 0,
              duration: 0.5,
              ease: 'quad.inOut',
              delay: 0.1,
            })
            .eventCallback('onComplete', () => {
              ripple.remove()
            })
        }
      }

      item.addEventListener('off.xt.ripple', off)

      // destroy

      selfDestroy = () => {
        self.destroy()
        self = null
      }
    })

    // unmount

    return () => {
      selfDestroy()
    }
  },
})
