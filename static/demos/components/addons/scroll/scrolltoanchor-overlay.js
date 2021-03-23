import { Xt } from 'xtendui'
import 'xtendui/src/core/overlay'
import 'xtendui/src/addons/scrolltoanchor'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount.push({
  matches: '.demo--scrolltoanchor-overlay',
  mount: ({ object }) => {
    const unmountScrolltoanchor = mountScrolltoanchor()
    const unmountSticky = mountSticky({ object })

    // unmount

    return () => {
      unmountScrolltoanchor()
      unmountSticky()
    }
  },
})

/* mountScrolltoanchor */

const mountScrolltoanchor = () => {
  // Scrolltoanchor

  let self = new Xt.Scrolltoanchor(document.documentElement, {
    scrollSpace: ({ self }) => {
      let space = 0
      const spaceEls = self.scrollElement.querySelectorAll('.xt-sticky[style*="position: fixed"]')
      for (const spaceEl of spaceEls) {
        space += spaceEl.clientHeight
      }
      return space
    },
  })

  // change

  const change = () => {
    // scroll
    const overlay = self.target.closest('.xt-overlay')
    const duration = overlay && !overlay.classList.contains('active') ? 0 : 1
    gsap.killTweensOf(self.scrollElement)
    gsap.to(self.scrollElement, {
      scrollTo: self.position,
      duration: duration,
      ease: 'quart.inOut',
    })
  }

  self.object.addEventListener('change.xt.scrolltoanchor', change)

  // unmount

  return () => {
    self.object.removeEventListener('change.xt.scrolltoanchor', change)
    self.destroy()
    self = null
  }
}

/* mountSticky */

const mountSticky = ({ object }) => {
  ScrollTrigger.create({
    trigger: object.querySelector('.xt-sticky'),
    start: 'top top',
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
  })

  const overlay = object.querySelector('.xt-overlay')
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
