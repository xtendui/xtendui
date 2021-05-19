import { Xt } from 'xtendui'
import 'xtendui/src/scrollto'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount({
  matches: '.demo--scrollto',
  mount: ({ ref }) => {
    const unmountSticky = mountSticky({ ref })
    const unmountScrollto = mountScrollto()

    // unmount

    return () => {
      unmountSticky()
      unmountScrollto()
    }
  },
})

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

  // unmount

  return () => {}
}

/* mountScrollto */

const mountScrollto = () => {
  // Scrollto

  let self = new Xt.Scrollto(document.documentElement, {
    hash: true,
    space: ({ self }) => {
      let space = 0
      for (const el of self.scroller.querySelectorAll('.xt-sticky[style*="position: fixed"]')) {
        space += el.clientHeight
      }
      return space
    },
    duration: ({ self }) => {
      const overlay = self.target.closest('.xt-overlay')
      if (self.initial || self.hashchange || (overlay && !overlay.classList.contains('in'))) return 0
      const distance = Math.abs(self.scroller.scrollTop - self.position)
      return Math.min(Math.log(1 + distance / 200), 1)
    },
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

  self.object.addEventListener('scrollto.xt.scrollto', scrollto)

  // custom

  const buttons = self.object.querySelectorAll('.button--custom')
  const custom = self.object.querySelector('#custom')

  const click = () => {
    custom.dispatchEvent(new CustomEvent('scrollto.trigger.xt.scrollto'))
  }

  for (const button of buttons) {
    button.addEventListener('click', click)
  }

  // unmount

  return () => {
    self.object.removeEventListener('scrollto.xt.scrollto', scrollto)
    self.destroy()
    self = null
  }
}
