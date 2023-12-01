import { Xt } from 'xtendui'
import 'xtendui/src/toggle'
import 'xtendui/src/scrollto'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollToPlugin)
}

/* mountScrollto */

const mountScrollto = () => {
  // init

  let selfDestroy = () => {}
  new Xt.Scrollto(document.documentElement, {}).then(self => {
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

    // destroy

    selfDestroy = () => {
      removeEventListener('touchstart', stopScrolling)
      removeEventListener('wheel', stopScrolling)
      self.container.removeEventListener('scrollto.xt.scrollto', scrollto)
      self.destroy()
      self = null
    }
  })

  // unmount

  return () => {
    selfDestroy()
  }
}

/* mount */

Xt.mount({
  matches: '.demo--scrollto-toggle',
  mount: ({ ref }) => {
    const unmountScrollto = mountScrollto({ ref })

    // unmount

    return () => {
      unmountScrollto()
    }
  },
})
