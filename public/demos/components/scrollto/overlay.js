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
import 'xtendui/src/overlay'
import 'xtendui/src/scrollto'

Xt.mount({
  matches: '.demo--scrollto-overlay',
  mount: () => {
    // init

    let selfDestroy = () => {}
    new Xt.Scrollto(document.documentElement, {
      // deactivated by switcher
      class: false,
      scrollActivation: false,
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

      // fix stop scroll animation on user interaction

      const stopScrolling = () => {
        gsap.killTweensOf(self.scroller)
      }

      addEventListener('touchstart', stopScrolling)
      addEventListener('wheel', stopScrolling)

      // custom

      const buttons = self.container.querySelectorAll('.button--custom')
      const custom = self.container.querySelector('#anchor-custom')

      const click = () => {
        custom.dispatchEvent(new CustomEvent('scrollto.trigger.xt.scrollto'))
      }

      for (const button of buttons) {
        button.addEventListener('click', click)
      }

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
  matches: '.demo--scrollto-overlay .xt-overlay',
  mount: ({ ref }) => {
    /* sticky for demo purpose remove this */
    // vars

    const overlay = ref
    const sticky = overlay.querySelector('.xt-sticky')

    // sticky

    const scrollTrigger = ScrollTrigger.create({
      trigger: sticky,
      start: 'top top',
      endTrigger: 'html',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
    })

    overlay.addEventListener('on.xt.overlay', () => {
      // refresh ScrollTrigger DOM
      scrollTrigger.refresh()
    })
  },
})

Xt.mount({
  matches: '.demo--scrollto-overlay',
  mount: ({ ref }) => {
    /* switcher for demo purpose remove this */

    // vars

    const scrollto = document.documentElement
    const switcher = ref.querySelector('input[type="checkbox"]')

    // change

    const change = () => {
      Xt.get({ name: 'xt-scrollto', el: scrollto }).then(self => {
        if (switcher.checked) {
          self.options.class = false
          self.options.scrollActivation = false
        } else {
          self.options.class = 'on'
          self.options.scrollActivation = true
        }
        self.reinit()
      })
    }

    switcher.addEventListener('change', change)

    requestAnimationFrame(() => {
      change()
    })
  },
})
