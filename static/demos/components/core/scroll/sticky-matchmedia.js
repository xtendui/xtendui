import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount.push({
  matches: '.CCC--sticky-matchmedia',
  mount: ({ object }) => {
    const unmountSticky = mountSticky({ object })

    // unmount

    return () => {
      unmountSticky()
    }
  },
})

/* mountSticky */

const mountSticky = ({ object }) => {
  ScrollTrigger.matchMedia({
    '(max-width: 767px)': () => {
      // sticky

      ScrollTrigger.create({
        trigger: object.querySelector('.xt-sticky'),
        start: 'top top',
        endTrigger: 'html',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
      })
    },
  })

  // unmount

  return () => {}
}
