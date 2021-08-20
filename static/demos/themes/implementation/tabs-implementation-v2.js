import { Xt } from 'xtendui'
import 'xtendui/src/toggle'
import 'xtendui/src/scrollto'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount({
  matches: '.demo--tabs-implementation-v1',
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
  let self = new Xt.Scrollto(document.documentElement, {
    hash: true,
    space: ({ self }) => {
      let space = window.innerHeight / 20
      for (const el of self.scroller.querySelectorAll('.xt-sticky')) {
        space += el.clientHeight
      }
      return space
    },
    duration: ({ self }) => {
      const overlay = self.target.closest('.xt-overlay')
      if (self.initial || self.hashchange || (overlay && !overlay.classList.contains('in'))) return 0
      const distance = Math.abs(self.scroller.scrollTop - self.position)
      return Math.min(1, Math.log(1 + distance / 200))
    },
  })
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

  const toggle = ref.querySelector('[data-xt-toggle]')

  // sticky

  /***/
  const scrollTrigger = ScrollTrigger.create({
    trigger: ref.querySelector('[data-node-sticky]'),
    start: 'top top',
    endTrigger: ref.querySelector('[data-node-sticky-endtrigger]'),
    end: 'bottom top',
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
