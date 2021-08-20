import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

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

/* mountSticky */

const mountSticky = ({ ref }) => {
  // sticky

  /***/
  ScrollTrigger.create({
    trigger: ref.querySelector('[data-node-sticky-top]'),
    start: 'top top',
    endTrigger: ref.querySelector('[data-node-sticky-top-endtrigger]'),
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
  })
  /***/

  /***/
  const scrollTriggerBottom = ScrollTrigger.create({
    trigger: ref.querySelector('[data-node-sticky-bottom]'),
    start: 'bottom bottom',
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
  })
  /***/

  /***/
  // refresh ScrollTrigger
  addEventListener('resize', () => {
    scrollTriggerBottom.refresh()
  })
  /***/

  // unmount

  return () => {}
}
