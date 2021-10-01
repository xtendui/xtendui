import { Xt } from 'xtendui'
import 'xtendui/src/toggle'
import 'xtendui/src/scrollto'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)

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

/* mount */

Xt.mount({
  matches: '.demo--toggle-implementation-v1',
  mount: ({ ref }) => {
    const unmountScrollto = mountScrollto({ ref })

    // unmount

    return () => {
      unmountScrollto()
    }
  },
})
