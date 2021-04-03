import { Xt } from 'xtendui'
import 'xtendui/src/overlay'
import 'xtendui/src/scrollto'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount({
  matches: '.demo--scrollto-overlay',
  mount: ({ ref }) => {
    const unmountScrollto = mountScrollto()
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
  // Scrollto

  let self = new Xt.Scrollto(document.documentElement, {
    scrollSpace: ({ self }) => {
      let space = 0
      const spaceEls = self.scroll.querySelectorAll('.xt-sticky[style*="position: fixed"]')
      for (const spaceEl of spaceEls) {
        space += spaceEl.clientHeight
      }
      return space
    },
  })

  // scrollto

  const scrollto = () => {
    // scroll
    const overlay = self.target.closest('.xt-overlay')
    const duration = overlay && !overlay.classList.contains('active') ? 0 : 1
    gsap.killTweensOf(self.scroll)
    gsap.to(self.scroll, {
      scrollTo: self.position,
      duration: duration,
      ease: 'quart.inOut',
    })
  }

  self.object.addEventListener('scrollto.xt.scrollto', scrollto)

  // unmount

  return () => {
    self.object.removeEventListener('scrollto.xt.scrollto', scrollto)
    self.destroy()
    self = null
  }
}

/* mountSticky */

const mountSticky = ({ ref }) => {
  ScrollTrigger.create({
    trigger: ref.querySelector('.xt-sticky'),
    start: 'top top',
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
  })

  const overlay = ref.querySelector('.xt-overlay')
  const initStickyOverlay = () => {
    ScrollTrigger.create({
      trigger: overlay.querySelector('.xt-sticky'),
      start: 'top top',
      endTrigger: 'html',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
    })
  }
  overlay.addEventListener('on.xt.overlay', () => {
    initStickyOverlay()
  })

  // unmount

  return () => {}
}
