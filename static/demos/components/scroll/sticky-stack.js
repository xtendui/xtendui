import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

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

/* mountSticky */

const mountSticky = ({ ref }) => {
  // sticky

  /***/
  ScrollTrigger.create({
    trigger: ref.querySelector('[data-xt-sticky-stack-top]'),
    start: 'top top',
    endTrigger: '[data-xt-sticky-stack-topsecond]',
    end: () => `top ${document.querySelector('[data-xt-sticky-stack-topsecond]').offsetHeight}px`,
    pin: true,
    pinSpacing: false,
  })
  /***/

  /***/
  ScrollTrigger.create({
    trigger: ref.querySelector('[data-xt-sticky-stack-topsecond]'),
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
    trigger: ref.querySelector('[data-xt-sticky-stack-topthird]'),
    start: () => `top top+=${document.querySelector('[data-xt-sticky-stack-topsecond]').offsetHeight}px`,
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
    trigger: ref.querySelector('[data-xt-sticky-stack-bottom]'),
    start: 'bottom bottom',
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
  })
  /***/

  addEventListener('resize', () => {
    scrollTriggerBottom.refresh()
  })

  /***/
  const scrollTriggerBottomSecond = ScrollTrigger.create({
    trigger: ref.querySelector('[data-xt-sticky-stack-bottomsecond]'),
    start: () => `bottom bottom-=${document.querySelector('[data-xt-sticky-stack-bottom]').offsetHeight}px`,
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
  })
  /***/

  addEventListener('resize', () => {
    scrollTriggerBottomSecond.refresh()
  })

  // unmount

  return () => {}
}
