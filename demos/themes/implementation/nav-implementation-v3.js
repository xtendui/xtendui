import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollToPlugin)
}
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}
import 'xtendui/src/scrollto'

Xt.mount({
  matches: '.demo--nav-implementation-v3',
  mount: () => {
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
  },
})

Xt.mount({
  matches: '.demo--nav-implementation-v3',
  mount: ({ ref }) => {
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
  },
})
