import { Xt } from 'xtendui'
import 'xtendui/src/scrollto'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollToPlugin)
}

/* xt-scrollto */

Xt.mount({
  matches: '.gatsby_site-wrapper',
  mount: ({ ref }) => {
    // init

    let self = new Xt.Scrollto(ref, {
      hash: true,
    })

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
      removeEventListener('touchstart', stopScrolling)
      removeEventListener('wheel', stopScrolling)
      self.container.removeEventListener('scrollto.xt.scrollto', scrollto)
      self.destroy()
      self = null
    }
  },
})

Xt.mount({
  matches: '.gatsby_tooltip_outside_link.hidden, .gatsby_site-header_item_container.hidden',
  mount: ({ ref }) => {
    if (typeof window !== 'undefined' && window.access === 'admin') {
      ref.classList.remove('hidden')
    }
  },
})
