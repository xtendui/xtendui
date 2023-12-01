import { Xt } from 'xtendui'
import 'xtendui/src/scrollto'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollToPlugin)
}

/* xt-scrollto */

Xt.mount({
  matches: '.docs_site-wrapper',
  mount: ({ ref }) => {
    // init

    let selfDestroy = () => {}
    new Xt.Scrollto(ref, {
      hash: true,
    }).then(self => {
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

      // destroy

      selfDestroy = () => {
        self.container.removeEventListener('scrollto.xt.scrollto', scrollto)
        self.destroy()
        self = null
      }
    })

    // fix stop scroll animation on user interaction

    const stopScrolling = () => {
      gsap.killTweensOf(self.scroller)
    }

    addEventListener('touchstart', stopScrolling)
    addEventListener('wheel', stopScrolling)

    // unmount

    return () => {
      selfDestroy()
      removeEventListener('touchstart', stopScrolling)
      removeEventListener('wheel', stopScrolling)
    }
  },
})

Xt.mount({
  matches: '.docs_tooltip_outside_link.hidden, .docs_site-header_item_container.hidden, .docs_listing-column.hidden',
  mount: ({ ref }) => {
    if (localStorage.getItem('access')) {
      ref.classList.remove('hidden')
    }
  },
})
