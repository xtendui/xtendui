import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/* mountSticky */

const mountSticky = ({ ref }) => {
  // vars

  const sticky = ref.querySelector('.xt-sticky')
  const sub = sticky.querySelector('[data-node-sticky-hide-sub]')

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
      gsap.killTweensOf(sticky)
      gsap.to(sticky, {
        y: -(sub.offsetTop + sub.offsetHeight),
        duration: refresh ? 0 : 0.5,
        ease: 'quart.out',
      })
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
      // need to update on refresh done
      requestAnimationFrame(() => {
        updateHide({ self, refresh: true })
      })
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
  })
  /***/

  // unmount

  return () => {}
}

/* mount */

Xt.mount({
  matches: '.demo--sticky-hide',
  mount: ({ ref }) => {
    const unmountSticky = mountSticky({ ref })

    // unmount

    return () => {
      unmountSticky()
    }
  },
})
