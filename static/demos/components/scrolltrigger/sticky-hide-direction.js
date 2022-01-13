import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

/* mountSticky */

const mountSticky = ({ ref }) => {
  // vars

  const sticky = ref.querySelector('.xt-sticky')

  // .scrolling-hide (always before pin ScrollTrigger)

  const updateHide = ({ self, refresh } = {}) => {
    // show/hide depending on position
    if (self.isActive && self.direction < 0 && (refresh || sticky.classList.contains('scrolling-hide'))) {
      sticky.classList.remove('scrolling-hide')
      gsap.killTweensOf(sticky)
      gsap.to(sticky, {
        y: 0,
        duration: refresh ? 0 : 0.5,
        ease: 'quart.out',
      })
    } else if (!self.isActive && self.direction > 0 && (refresh || !sticky.classList.contains('scrolling-hide'))) {
      sticky.classList.add('scrolling-hide')
    }
  }

  /***/
  ScrollTrigger.create({
    trigger: sticky,
    start: -1, // needs -1 because start trigger is sticky
    end: () => `top top-=${sticky.offsetHeight}`,
    onUpdate: self => {
      updateHide({ self })
    },
    onRefresh: self => {
      sticky.classList.add('!transform-none')
      // need to update on refresh done
      requestAnimationFrame(() => {
        sticky.classList.remove('!transform-none', 'scrolling-down')
        updateHide({ self, refresh: true })
      })
    },
  })
  /***/

  // sticky

  const updateSticky = ({ self } = {}) => {
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
        y: -(sticky.offsetTop + sticky.offsetHeight),
        duration: 0.5,
        ease: 'quart.out',
      })
    }
  }

  /***/
  ScrollTrigger.create({
    trigger: sticky,
    start: 'top top',
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
    onUpdate: self => {
      updateSticky({ self })
    },
  })
  /***/

  // unmount

  return () => {}
}

/* mount */

Xt.mount({
  matches: '.demo--sticky-hide-direction',
  mount: ({ ref }) => {
    const unmountSticky = mountSticky({ ref })

    // unmount

    return () => {
      unmountSticky()
    }
  },
})
