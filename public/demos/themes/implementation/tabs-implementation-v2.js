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
import 'xtendui/src/toggle'
import 'xtendui/src/scrollto'

Xt.mount({
  matches: '.demo--tabs-implementation-v2',
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
  matches: '.demo--tabs-implementation-v2',
  mount: ({ ref }) => {
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
    // refresh

    const refresh = e => {
      const tr = e.target
      Xt.get({ name: 'xt-toggle', el: toggle }).then(self => {
        // useCapture event propagation check
        if (self.targets.includes(tr)) {
          // timeout because fix bug scroll when using scrollTrigger.refresh and on browser location prev and next
          clearTimeout(parseFloat(toggle.dataset.refreshTimeout))
          toggle.dataset.refreshTimeout = setTimeout(() => {
            // we refresh sticky values
            scrollTrigger.refresh()
          }, 100)
        }
      })
    }

    toggle.addEventListener('ondone.xt.toggle', refresh, true) // useCapture event propagation
    /***/
  },
})
