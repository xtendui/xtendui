import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

Xt.mount({
  matches: '.demo--sticky-matchmedia .xt-sticky',
  mount: ({ ref }) => {
    // vars

    const sticky = ref

    // match media

    /***/
    gsap.matchMedia().add('(max-width: 767px)', () => {
      // sticky
      ScrollTrigger.create({
        trigger: sticky,
        start: 'top top',
        endTrigger: 'html',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
      })
    })
    /***/
  },
})
