import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/* mountSticky */

const mountSticky = ({ ref }) => {
  // vars

  const stickyTop = ref.querySelector('[data-node-sticky-top]')
  const stickyBottom = ref.querySelector('[data-node-sticky-bottom]')

  // sticky top

  /***/
  ScrollTrigger.create({
    trigger: stickyTop,
    start: 'top top',
    endTrigger: ref.querySelector('[data-node-sticky-top-endtrigger]'),
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
  })
  /***/

  // sticky bottom

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

  // unmount

  return () => {
    removeEventListener('resize', scrollTriggerBottom.refresh)
  }
}

/* mount */

Xt.mount({
  matches: '.demo--sticky',
  mount: ({ ref }) => {
    const unmountSticky = mountSticky({ ref })

    // unmount

    return () => {
      unmountSticky()
    }
  },
})
