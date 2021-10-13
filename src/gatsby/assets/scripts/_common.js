import { Xt } from 'xtendui'
import 'xtendui/src/scrollto'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)

/* prevent href="#" links */

document.addEventListener('click', e => {
  const href = e.target.getAttribute('href')
  if (href === '#') {
    e.preventDefault()
  }
})

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

/* switcher */

Xt.mount({
  matches: '.button--switch-html',
  mount: ({ ref }) => {
    // vars

    const button = ref
    const mode = 'html'
    const currentMode = localStorage.getItem('mode')

    // click

    const click = ({ switchDemos = true } = {}) => {
      // mode
      localStorage.setItem('mode', mode)
      // switchDemos
      if (switchDemos) {
        for (const switchDemo of window.switchDemos) {
          switchDemo(mode)
        }
      }
      // class
      for (const el of document.querySelectorAll('.button--switch-html')) {
        Xt.on({ el })
      }
      for (const el of document.querySelectorAll('.button--switch-react')) {
        Xt.off({ el })
      }
    }

    button.addEventListener('click', click)

    // init

    if (!currentMode) {
      localStorage.setItem('mode', mode)
    }

    if (!currentMode || currentMode === mode) {
      click({ switchDemos: false })
    }
  },
})

Xt.mount({
  matches: '.button--switch-react',
  mount: ({ ref }) => {
    // vars

    const button = ref
    const mode = 'react'
    const currentMode = localStorage.getItem('mode')

    // click

    const click = ({ switchDemos = true } = {}) => {
      // mode
      localStorage.setItem('mode', mode)
      // switchDemos
      if (switchDemos) {
        for (const switchDemo of window.switchDemos) {
          switchDemo(mode)
        }
      }
      // class
      for (const el of document.querySelectorAll('.button--switch-html')) {
        Xt.off({ el })
      }
      for (const el of document.querySelectorAll('.button--switch-react')) {
        Xt.on({ el })
      }
    }

    button.addEventListener('click', click)

    // init

    if (currentMode === mode) {
      click({ switchDemos: false })
    }
  },
})
