import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount({
  matches: '.demo--sticky-hide-sub',
  mount: ({ ref }) => {
    const unmountSticky = mountSticky({ ref })

    // unmount

    return () => {
      unmountSticky()
    }
  },
})

/* mountSticky */

const mountSticky = ({ ref }) => {
  // vars

  const sticky = ref.querySelector('.xt-sticky')
  const sub = sticky.querySelector('[data-node-sticky-hide-sub]')

  // hide depending on direction (always before pin ScrollTrigger)

  /***/
  ScrollTrigger.create({
    trigger: sticky,
    start: -1, // needs -1 because start trigger is sticky
    end: () => `top top-=${sticky.offsetHeight}`,
    onUpdate: self => {
      if (self.isActive && self.direction < 0 && sticky.classList.contains('scrolling-hide')) {
        sticky.classList.remove('scrolling-hide')
        gsap.killTweensOf(sticky)
        gsap.to(sticky, {
          y: 0,
          duration: 0.5,
          ease: 'quart.out',
        })
      } else if (!self.isActive && self.direction > 0 && !sticky.classList.contains('scrolling-hide')) {
        sticky.classList.add('scrolling-hide')
      }
    },
  })
  /***/

  // sticky

  /***/
  ScrollTrigger.create({
    trigger: sticky,
    start: 'top top',
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
    onUpdate: self => {
      // scrolling-down depending on scroll direction
      if (!self.getVelocity()) return // skip on initial
      if (
        sticky.classList.contains('scrolling-down') &&
        sticky.classList.contains('scrolling-hide') &&
        self.direction < 0
      ) {
        sticky.classList.remove('scrolling-down')
        gsap.killTweensOf(sticky)
        gsap.to(sticky, {
          y: 0,
          duration: 0.5,
          ease: 'quart.out',
        })
      } else if (
        !sticky.classList.contains('scrolling-down') &&
        sticky.classList.contains('scrolling-hide') &&
        self.direction > 0
      ) {
        sticky.classList.add('scrolling-down')
        gsap.killTweensOf(sticky)
        gsap.to(sticky, {
          y: -(sub.offsetTop + sub.offsetHeight),
          duration: 0.5,
          ease: 'quart.out',
        })
      }
    },
  })
  /***/

  // unmount

  return () => {}
}
