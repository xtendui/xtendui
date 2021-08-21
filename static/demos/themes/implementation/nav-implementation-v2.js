import { Xt } from 'xtendui'
import 'xtendui/src/toggle'
import 'xtendui/src/scrollto'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount({
  matches: '.demo--nav-implementation-v2',
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
  const toggle = ref.querySelector('[data-xt-toggle]')

  // sticky

  /***/
  const scrollTrigger = ScrollTrigger.create({
    trigger: sticky,
    start: 'top top',
    endTrigger: ref.querySelector('[data-node-sticky-endtrigger]'),
    end: () => `bottom top+=${sticky.offsetHeight}`,
    pin: true,
    pinSpacing: false,
  })
  /***/

  /***/
  // refresh ScrollTrigger
  toggle.addEventListener(
    'ondone.xt.toggle',
    () => {
      scrollTrigger.refresh()
    },
    true
  )
  /***/

  // unmount

  return () => {}
}
