import { Xt } from 'xtendui'
import 'xtendui/dist/xtend-components'
import 'xtendui/src/scrollto'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import 'src/gatsby/assets/scripts/shared'
const classes = require('src/gatsby/templates/snippets/classes').classes

/**
 * prevent href="#" links
 */

document.addEventListener('click', e => {
  const href = e.target.getAttribute('href')
  if (href === '#') {
    e.preventDefault()
  }
})

/**
 * tooltip animation-fast
 */

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

/**
 * switcher
 */

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

/**
 * .gatsby_button--overlay
 */

Xt.mount({
  matches: '.gatsby_button--overlay',
  mount: ({ ref }) => {
    // overlay

    new Xt.Overlay(ref, {
      targets: '#gatsby_menu--overlay',
      appendTo: false,
      disabled: true,
      matches: {
        '(max-width: 1023px)': {
          disabled: false,
        },
      },
    })
  },
})

/**
 * .gatsby_site-header
 */

Xt.mount({
  matches: '.gatsby_site-header',
  mount: ({ ref }) => {
    // match media

    ScrollTrigger.matchMedia({
      '(max-width: 1023px)': () => {
        // sticky

        ScrollTrigger.create({
          trigger: ref,
          start: 'top top',
          endTrigger: 'html',
          end: 'bottom top',
          pin: true,
          pinSpacing: false,
        })
      },
    })
  },
})

/**
 * .gatsby_home-header
 */

Xt.mount({
  matches: '.gatsby_home-header',
  mount: ({ ref }) => {
    // vars

    const sticky = ref
    const background = ref.querySelector('.gatsby_home-header_background rect')
    const content = ref.querySelector('.gatsby_home-header_inner')
    const inner = ref.querySelector('.gatsby_logo-icon')

    // methods

    const straight = () => {
      gsap.killTweensOf(background)
      gsap.to(background, {
        rx: '0%',
        duration: 0.5,
        ease: 'quart.out',
      })
    }

    const curve = () => {
      if (!content.classList.contains('scrolling-down')) {
        gsap.killTweensOf(background)
        gsap.to(background, {
          rx: '50%',
          duration: 0.5,
          ease: 'quart.out',
        })
      }
    }

    // mouse events

    sticky.addEventListener('mouseenter', straight)

    sticky.addEventListener('mouseleave', curve)

    // hide depending on inner (always before pin or bugs)

    ScrollTrigger.create({
      trigger: sticky,
      start: -1, // needs -1 because start trigger is sticky
      end: () => `top top-=${sticky.offsetHeight}`,
      onUpdate: self => {
        if (self.isActive && self.direction < 0 && content.classList.contains('scrolling-hide')) {
          content.classList.remove('scrolling-hide')
          gsap.killTweensOf(content)
          gsap.to(content, {
            y: 0,
            duration: 0.5,
            ease: 'quart.out',
          })
          curve()
        } else if (!self.isActive && self.direction > 0 && !content.classList.contains('scrolling-hide')) {
          content.classList.add('scrolling-hide')
          straight()
        }
      },
    })

    // sticky

    ScrollTrigger.create({
      trigger: sticky,
      start: 'top top',
      endTrigger: 'html',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
      onUpdate: self => {
        // scrolling-down depending on scroll direction
        if (!self.getVelocity()) return // skip on initial
        if (
          content.classList.contains('scrolling-down') &&
          content.classList.contains('scrolling-hide') &&
          self.direction < 0
        ) {
          content.classList.remove('scrolling-down')
          gsap.killTweensOf(content)
          gsap.to(content, {
            y: 0,
            duration: 0.5,
            ease: 'quart.out',
          })
          curve()
        } else if (
          !content.classList.contains('scrolling-down') &&
          content.classList.contains('scrolling-hide') &&
          self.direction > 0
        ) {
          content.classList.add('scrolling-down')
          gsap.killTweensOf(content)
          gsap.to(content, {
            y: -(inner.offsetTop + inner.offsetHeight),
            duration: 0.5,
            ease: 'quart.out',
          })
          straight()
        }
      },
    })
  },
})

/**
 * .gatsby_home-main
 */

Xt.mount({
  matches: '.gatsby_home-main',
  mount: ({ ref }) => {
    // vars

    const scrollY = 15
    const scrollScale = 1.04

    // check if already done for content added dinamically

    const items = ref.querySelectorAll('.gatsby_home-main_scroll:not(.faded)')
    for (const item of items) {
      item.classList.add('faded')
    }

    // fade

    ScrollTrigger.batch(items, {
      once: true,
      start: 'top bottom-=10%',
      end: 'bottom top+=10%',
      onEnter: (batch, scrollTriggers) => {
        const direction = scrollTriggers[0].direction
        const y = direction > 0 ? -scrollY : scrollY
        gsap.killTweensOf(batch)
        gsap.set(batch, {
          y: y,
          scale: scrollScale,
        })
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: 'quart.out',
          stagger: index => {
            return Math.min(index * 0.15, 0.6)
          },
        })
      },
    })
  },
})

/**
 * .gatsby_home-main_head
 */

Xt.mount({
  matches: '.gatsby_home-main_head',
  mount: ({ ref }) => {
    // sticky

    const heroParallax = {
      trigger: ref,
      start: 0,
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
      scrub: 0.5,
    }

    gsap.set(ref, {
      transformOrigin: 'top center',
    })

    gsap.to(ref, {
      scrollTrigger: heroParallax,
      scale: '0.9',
      opacity: 0,
      ease: 'quart.out',
    })
  },
})

/**
 * .gatsby_site-article_hero-inner
 */

Xt.mount({
  matches: '.gatsby_site-article_hero-inner',
  mount: ({ ref }) => {
    // sticky

    const heroParallax = {
      trigger: ref,
      start: 0,
      end: 'bottom top',
      scrub: true,
    }

    gsap.to(ref, {
      scrollTrigger: heroParallax,
      y: '50%',
    })
  },
})

/**
 * #gatsby_open-full-trigger
 */

Xt.mount({
  matches: '#gatsby_open-full-trigger',
  mount: ({ ref }) => {
    // init

    let self = new Xt.Toggle(ref, {
      targets: '#gatsby_open-full',
      closeDeep: ':scope > .xt-dismiss',
      closeauto: true,
      classHtml: 'xt-scrollbar-overlay demo-full-open',
    })

    // tooltip

    const close = document.querySelector('#gatsby_open-full > .xt-dismiss')
    const closeUid = Xt.getuniqueId()
    document.querySelector('#gatsby_open-full').append(
      Xt.createElement(`
<div id="tooltip--close-${closeUid}" class="xt-tooltip xt-tooltip--gatsby p-2 group">
  <div class="relative ${classes.tooltipSm()} rounded-md shadow-tooltip ${classes.cardBlack()} transform transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0">
    Close Fullscreen
  </div>
</div>`)
    )
    new Xt.Tooltip(close, {
      targets: `#tooltip--close-${closeUid}`,
      position: 'bottom-end',
      duration: 300,
    })

    // unmount

    return () => {
      self.destroy()
      self = null
    }
  },
})

/**
 * xt-scrollto
 */

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

//
// makeDocument
//

export const makeDocument = () => {
  // .gatsby_make-line
  for (const el of document.querySelectorAll(
    '.gatsby_site-article_content_inner > * > h2, .gatsby_site-article_content_inner > * > h4'
  )) {
    el.classList.add('gatsby_make-line')
  }
  for (const el of document.querySelectorAll('.gatsby_make-line')) {
    el.innerHTML = `<span class="gatsby_make-line_line">${el.innerHTML}</span>`
    el.innerHTML = `<span class="gatsby_make-line_container">${el.innerHTML}</span>`
  }
  // .gatsby_make-anchor
  for (const el of document.querySelectorAll(
    '.gatsby_site-article_content_inner > * > h2, .gatsby_site-article_content_inner > * > h4'
  )) {
    el.classList.add('gatsby_make-line')
    // previous h2 if h4
    let prevElement
    if (el.tagName === 'H4') {
      prevElement = el
      while (prevElement.previousElementSibling) {
        if (prevElement.tagName === 'H2') {
          break
        }
        prevElement = prevElement.previousElementSibling
      }
    }
    // id
    let id = ''
    if (prevElement) {
      id += `${prevElement.textContent.trim().replace(/\W/g, '-').toLowerCase()}-`
    }
    id += el.textContent.trim().replace(/\W/g, '-').toLowerCase()
    // sidebar links
    if (el.tagName === 'H2') {
      let activeText =
        document.querySelector(
          '.gatsby_button-site_article_sidebar--adiacent.on .gatsby_button-site_article_sidebar_inner'
        ) ??
        document.querySelector('.gatsby_button-site_article_sidebar--sub.on .gatsby_button-site_article_sidebar_inner')
      if (activeText) {
        activeText = activeText.closest('.gatsby_tooltip_outside_link')
        let activeTooltip = activeText.querySelector('.xt-tooltip')
        if (!activeTooltip) {
          activeText.append(
            Xt.createElement(`
<div class="xt-tooltip px-5 group">
  <div class="relative py-2 rounded-md shadow-tooltip bg-primary-600 transform transition duration-300 opacity-0 translate-x-2 group-in:opacity-100 group-in:translate-x-0">
    <nav class="xt-list flex-col">
    </nav>
  </div>
</div>`)
          )
          activeText.setAttribute(
            'data-xt-tooltip',
            `{ elements: false, position: 'right', positionInner: '.gatsby_button-site_article_sidebar_text', duration: 300 }`
          )
          activeTooltip = activeText.querySelector('.xt-tooltip')
        }
        const activeList = activeTooltip.querySelector('.xt-list')
        activeList.append(
          Xt.createElement(`
<a href="#${encodeURIComponent(
            id
          )}" class="xt-button text-3xs py-0.5 px-3 w-full justify-start text-left text-white font-semibold leading-snug tracking-wider uppercase bg-primary-600 text-opacity-75 transition hover:bg-primary-700 active:bg-primary-700 on:bg-primary-700 hover:text-opacity-100 active:text-opacity-100 on:text-opacity-100">
  <span class="py-px">${el.textContent.trim()}</span>
</a>`)
        )
      }
    }
    // gatsby_make-anchor
    el.setAttribute('id', id)
    el.classList.add('gatsby_make-anchor')
    // wrapInner
    const link = Xt.createElement(`<a href="#"></a>`)
    link.setAttribute('href', `#${encodeURIComponent(id)}`)
    el.classList.add('xt-ignore')
    el.before(link)
    const inner = el.querySelector(':scope > *')
    el.append(link)
    link.append(inner)
    el.append(
      Xt.createElement(`
<span class="gatsby_site-article_anchor">
  <span class="xt-button">
  ${classes.iconLink()}
  </span>
</span>`)
    )
  }
}
