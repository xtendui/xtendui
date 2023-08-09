import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/* mountSticky */

const mountSticky = ({ ref }) => {
  // vars

  const stickyTop = ref.querySelector('[data-node-sticky-stack-top]')
  const stickyTopSecond = ref.querySelector('[data-node-sticky-stack-topsecond]')
  const stickyTopThird = ref.querySelector('[data-node-sticky-stack-topthird]')
  const stickyBottom = ref.querySelector('[data-node-sticky-stack-bottom]')
  const stickyBottomSecond = ref.querySelector('[data-node-sticky-stack-bottomsecond]')

  // sticky

  /***/
  ScrollTrigger.create({
    trigger: stickyTop,
    start: 'top top',
    endTrigger: '[data-node-sticky-stack-topsecond]',
    end: () => `top ${document.querySelector('[data-node-sticky-stack-topsecond]').offsetHeight}px`,
    pin: true,
    pinSpacing: false,
  })
  /***/

  /***/
  ScrollTrigger.create({
    trigger: stickyTopSecond,
    start: 'top top',
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
    toggleClass: 'on',
  })
  /***/

  /***/
  ScrollTrigger.create({
    trigger: stickyTopThird,
    start: () => `top top+=${document.querySelector('[data-node-sticky-stack-topsecond]').offsetHeight}px`,
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
    onToggle: scrollTrigger => {
      // refresh because height start changes
      scrollTrigger.refresh()
    },
  })
  /***/

  /***/
  const scrollTriggerBottom = ScrollTrigger.create({
    trigger: stickyBottom,
    start: 'bottom bottom',
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
  })

  // refresh ScrollTrigger bottom

  addEventListener('resize', scrollTriggerBottom.refresh)
  /***/

  /***/
  const scrollTriggerBottomSecond = ScrollTrigger.create({
    trigger: stickyBottomSecond,
    start: () => `bottom bottom-=${document.querySelector('[data-node-sticky-stack-bottom]').offsetHeight}px`,
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
  })

  // refresh ScrollTrigger bottom

  addEventListener('resize', scrollTriggerBottomSecond.refresh)
  /***/

  // unmount

  return () => {
    removeEventListener('resize', scrollTriggerBottom.refresh)
    removeEventListener('resize', scrollTriggerBottomSecond.refresh)
  }
}

/* mount */

Xt.mount({
  matches: '.demo--sticky-stack',
  mount: ({ ref }) => {
    const unmountSticky = mountSticky({ ref })

    // unmount

    return () => {
      unmountSticky()
    }
  },
})
