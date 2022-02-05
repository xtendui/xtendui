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

  // match media

  /***/
  ScrollTrigger.matchMedia({
    '(max-width: 767px)': () => {
      // sticky
      ScrollTrigger.create({
        trigger: sticky,
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

/* mount */

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
