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
  ScrollTrigger.create({
    trigger: stickyBottom,
    start: 'bottom bottom',
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
  })
  /***/

  /***/
  ScrollTrigger.create({
    trigger: stickyBottomSecond,
    start: () => `bottom bottom-=${document.querySelector('[data-node-sticky-stack-bottom]').offsetHeight}px`,
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
  })
  /***/

  // unmount

  return () => {}
}
