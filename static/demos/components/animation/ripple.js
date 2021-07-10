import { Xt } from 'xtendui'
import 'xtendui/src/ripple'
import gsap from 'gsap'

Xt.mount({
  matches: '.demo--ripple',
  mount: ({ ref }) => {
    const unmountRipple = mountRipple({ ref })
    const unmountSwitcher = mountSwitcher({ ref })

    // unmount

    return () => {
      unmountRipple()
      unmountSwitcher()
    }
  },
})

/* mountRipple */

const mountRipple = ({ ref }) => {
  // vars

  /***/
  const items = ref.querySelectorAll('.xt-button, .xt-card')
  /***/
  const unmounts = []

  for (const item of items) {
    // init

    /***/
    let self = new Xt.Ripple(item, {
      // activated by switcher
      //sizeInitial = 0,
      //onlyInside = false,
    })
    /***/

    // on

    const on = () => {
      /***/
      const ripple = self.container.querySelector('.xt-ripple:last-child')
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
      const ripple = self.container.querySelector('.xt-ripple:last-child')
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

    // unmount

    unmounts.push(() => {
      self.destroy()
      self = null
    })
  }

  // unmount

  return () => {
    for (const unmount of unmounts) {
      unmount()
    }
  }
}

/* mountSwitcher */

const mountSwitcher = ({ ref }) => {
  /* switcher for demo purpose remove this */

  // vars

  const items = ref.querySelectorAll('.xt-button, .xt-card')
  const switcher = ref.querySelector('input[type="checkbox"]')

  // change

  const change = () => {
    for (const item of items) {
      const self = Xt.get({ name: 'xt-ripple', el: item })
      if (self) {
        if (switcher.checked) {
          self.options.sizeInitial = 0
          self.options.onlyInside = false
        } else {
          self.options.sizeInitial = 0.3
          self.options.onlyInside = 'a, button, .xt-button'
        }
        self.destroy()
        self.reinit()
      }
    }
  }

  switcher.addEventListener('change', change)

  requestAnimationFrame(() => {
    change()
  })

  // unmount

  return () => {}
}
