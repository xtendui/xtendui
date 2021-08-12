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
      space: ({ self }) => {
        let space = window.innerHeight / 20
        for (const el of self.scroller.querySelectorAll('.xt-sticky[style*="position: fixed"]')) {
          space += el.clientHeight
        }
        return space
      },
      duration: ({ self }) => {
        const overlay = self.target.closest('.xt-overlay')
        if (self.initial || self.hashchange || (overlay && !overlay.classList.contains('in'))) return 0
        const distance = Math.abs(self.scroller.scrollTop - self.position)
        return Math.min(1, Math.log(1 + distance / 200))
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

    self.container.addEventListener('scrollto.xt.scrollto', scrollto)

    // unmount

    return () => {
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

    // default

    if (!localStorage.getItem('mode')) {
      localStorage.setItem('mode', mode)
    }

    // click

    const click = () => {
      // mode
      localStorage.setItem('mode', mode)
      // currentDemos
      for (const demo of window.currentDemos) {
        demo.switchClean()
        demo.refresh()
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

    if (localStorage.getItem('mode') === mode) {
      button.classList.add('transition-none')
      Xt.on({ el: button, raf: false })
      requestAnimationFrame(() => {
        button.classList.remove('transition-none')
      })
    }
  },
})

Xt.mount({
  matches: '.button--switch-react',
  mount: ({ ref }) => {
    // vars

    const button = ref
    const mode = 'react'

    // click

    const click = () => {
      // mode
      localStorage.setItem('mode', mode)
      // currentDemos
      for (const demo of window.currentDemos) {
        demo.switchClean()
        demo.refresh()
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

    if (localStorage.getItem('mode') === mode) {
      button.classList.add('transition-none')
      Xt.on({ el: button, raf: false })
      requestAnimationFrame(() => {
        button.classList.remove('transition-none')
      })
    }
  },
})

/* tooltip animation-fast */

Xt.mount({
  matches: '.xt-tooltip--gatsby',
  mount: ({ ref, obj }) => {
    const tooltip = ref

    // vars

    const container = tooltip.closest('[data-xt-tooltip]')
    const self = Xt.get({ name: 'xt-tooltip', el: container })
    const delayReset = 500
    const durationFast = 100

    // fix only once when tooltip has multiple targets

    if (!container || container.dataset.onlyOnceDone) return () => {}
    container.dataset.onlyOnceDone = 'true'

    // on

    const on = e => {
      const tooltips = document.querySelectorAll(obj.matches)
      // make other tooltips fast
      const tooltipsOther = Array.from(tooltips).filter(x => x !== e.target)
      for (const tooltip of tooltipsOther) {
        tooltip.dataset.defaultXtDuration = self.options.duration
        self.options.duration = durationFast
        const inner = tooltip.querySelector(':scope > *')
        inner.style.transitionDuration = `${durationFast}ms`
      }
      // make all tooltips normal
      clearTimeout(window.gatsbyTooltipFastTimeout)
      window.gatsbyTooltipFastTimeout = setTimeout(() => {
        for (const tooltip of tooltips) {
          self.options.duration = tooltip.dataset.defaultXtDuration
          const inner = tooltip.querySelector(':scope > *')
          inner.style.transitionDuration = ''
        }
      }, delayReset)
    }

    tooltip.addEventListener('on.xt.tooltip', on)
  },
})
