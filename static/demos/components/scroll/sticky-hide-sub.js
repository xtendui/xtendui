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
  const content = sticky.querySelector('[data-js-sticky-hide-content]')
  const sub = sticky.querySelector('[data-js-sticky-hide-sub]')

  // hide depending on direction (always before pin ScrollTrigger)

  /***/
  ScrollTrigger.create({
    trigger: sticky,
    start: -1, // needs -1 because start trigger is sticky
    end: () => `top top-=${sticky.offsetHeight}`,
    onUpdate: self => {
      if (self.isActive && self.direction < 0 && content.classList.contains('scrolling-hide')) {
        content.classList.remove('scrolling-hide')
        gsap.killTweensOf(content)
        gsap.to(content, {
          y: 0,
          duration: 0.5,
          ease: 'quart.out',
        })
      } else if (!self.isActive && self.direction > 0 && !content.classList.contains('scrolling-hide')) {
        content.classList.add('scrolling-hide')
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
        content.classList.contains('scrolling-down') &&
        content.classList.contains('scrolling-hide') &&
        self.direction < 0
      ) {
        content.classList.remove('scrolling-down')
        gsap.killTweensOf(content)
        gsap.to(content, {
          y: 0,
          duration: 0.5,
          ease: 'quart.out',
        })
      } else if (
        !content.classList.contains('scrolling-down') &&
        content.classList.contains('scrolling-hide') &&
        self.direction > 0
      ) {
        content.classList.add('scrolling-down')
        gsap.killTweensOf(content)
        gsap.to(content, {
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
