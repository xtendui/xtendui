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
    const unmountSticky = mountSticky({ ref })
    const unmountScrollto = mountScrollto()
    const unmountSwitcher = mountSwitcher({ ref })

    // unmount

    return () => {
      unmountSticky()
      unmountScrollto()
      unmountSwitcher()
    }
  },
})

/* mountSticky */

const mountSticky = ({ ref }) => {
  /* sticky for demo purpose remove this */
  // vars

  const overlay = ref.querySelector('.xt-overlay')

  // sticky

  const scrollTrigger = ScrollTrigger.create({
    trigger: overlay.querySelector('.xt-sticky'),
    start: 'top top',
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
  })

  overlay.addEventListener('on.xt.overlay', () => {
    // refresh ScrollTrigger DOM
    Xt.ready(() => {
      scrollTrigger.refresh()
    })
  })

  // unmount

  return () => {}
}

/* mountScrollto */

const mountScrollto = () => {
  // init

  /***/
  let self = new Xt.Scrollto(document.documentElement, {
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
    // deactivated by switcher
    class: false,
    scrollActivation: false,
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

  // custom

  const buttons = self.container.querySelectorAll('.button--custom')
  const custom = self.container.querySelector('#custom')

  const click = () => {
    custom.dispatchEvent(new CustomEvent('scrollto.trigger.xt.scrollto'))
  }

  for (const button of buttons) {
    button.addEventListener('click', click)
  }

  // unmount

  return () => {
    self.container.removeEventListener('scrollto.xt.scrollto', scrollto)
    self.destroy()
    self = null
  }
}

/* mountSwitcher */

const mountSwitcher = ({ ref }) => {
  /* switcher for demo purpose remove this */

  // vars

  const scrollto = document.documentElement
  const switcher = ref.querySelector('input[type="checkbox"]')

  // change

  const change = () => {
    const self = Xt.get({ name: 'xt-scrollto', el: scrollto })
    if (self) {
      if (switcher.checked) {
        self.options.class = false
        self.options.scrollActivation = false
      } else {
        self.options.class = 'on'
        self.options.scrollActivation = true
      }
      self.destroy()
      self.reinit()
    }
  }

  switcher.addEventListener('change', change)

  requestAnimationFrame(() => {
    change()
  })

  // unmount

  return () => {}
}
