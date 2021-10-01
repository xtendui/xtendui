import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import 'xtendui/src/scrollto'

/* mountScrollto */

const mountScrollto = () => {
  // init

  /***/
  let self = new Xt.Scrollto(document.documentElement, {})
  /***/

  // scrollto

  const scrollto = () => {
    // scroll
    gsap.killTweensOf(self.scroller)
    gsap.to(self.scroller, {
      scrollTo: self.position,
      duration: self.duration,
      ease: 'quint.out',
    })
  }

  self.container.addEventListener('scrollto.xt.scrollto', scrollto)

  // fix stop scroll animation on user interaction

  const stopScrolling = () => {
    gsap.killTweensOf(self.scroller)
  }

  addEventListener('touchstart', stopScrolling)
  addEventListener('wheel', stopScrolling)

  // unmount

  return () => {
    self.container.removeEventListener('scrollto.xt.scrollto', scrollto)
    self.destroy()
    self = null
  }
}

/* mountSticky */

const mountSticky = ({ ref }) => {
  // vars

  const sticky = ref.querySelector('[data-node-sticky]')

  // sticky

  /***/
  ScrollTrigger.create({
    trigger: sticky,
    start: 'top top',
    endTrigger: ref.querySelector('[data-node-sticky-endtrigger]'),
    end: () => `bottom top+=${sticky.offsetHeight}`,
    pin: true,
    pinSpacing: false,
  })
  /***/

  // unmount

  return () => {}
}

/* mount */

Xt.mount({
  matches: '.demo--tabs-implementation-v3',
  mount: ({ ref }) => {
    const unmountScrollto = mountScrollto({ ref })
    const unmountSticky = mountSticky({ ref })

    // unmount

    return () => {
      unmountScrollto()
      unmountSticky()
    }
  },
})
