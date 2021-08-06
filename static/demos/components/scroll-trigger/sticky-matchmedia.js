import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount({
  matches: '.demo--sticky-matchmedia',
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
  // match media

  /***/
  ScrollTrigger.matchMedia({
    '(max-width: 767px)': () => {
      // sticky

      ScrollTrigger.create({
        trigger: ref.querySelector('.xt-sticky'),
        start: 'top top',
        endTrigger: 'html',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
      })
    },
    /***/
  })

  // unmount

  return () => {}
}
