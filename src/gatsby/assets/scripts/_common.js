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
        const dist = Math.abs(self.scroller.scrollTop - self.position)
        return Math.max(Math.min(dist / 500, 1), 0.5)
      },
    })

    // scrollto

    const scrollto = () => {
      // scroll
      gsap.killTweensOf(self.scroller)
      gsap.to(self.scroller, {
        scrollTo: self.position,
        duration: self.duration,
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
  },
})

/* switcher */

Xt.mount({
  matches: '.button--switch-html',
  mount: ({ ref }) => {
    // vars

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
        Xt.on(el)
      }
      for (const el of document.querySelectorAll('.button--switch-react')) {
        Xt.off(el)
      }
    }

    ref.addEventListener('click', click)

    // init

    if (localStorage.getItem('mode') === mode) {
      Xt.on(ref)
    }
  },
})

Xt.mount({
  matches: '.button--switch-react',
  mount: ({ ref }) => {
    // vars

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
        Xt.off(el)
      }
      for (const el of document.querySelectorAll('.button--switch-react')) {
        Xt.on(el)
      }
    }

    ref.addEventListener('click', click)

    // init

    if (localStorage.getItem('mode') === mode) {
      Xt.on(ref)
    }
  },
})

/* tooltip animation-fast */

Xt.mount({
  matches: '.xt-tooltip--gatsby',
  mount: ({ ref, obj }) => {
    const tooltip = ref

    // vars

    const object = tooltip.closest('[data-xt-tooltip]')
    const self = Xt.get('xt-tooltip', object)
    const delayReset = 1000
    const durationFast = 100

    // fix only once when tooltip has multiple targets

    if (!object || object.dataset.onlyOnceDone) return () => {}
    object.dataset.onlyOnceDone = 'true'

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
