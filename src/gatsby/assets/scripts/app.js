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
    const delay = 1000
    const duration = 50

    // fix only once when tooltip has multiple targets

    if (!object || object.dataset.onlyOnceDone) return () => {}
    object.dataset.onlyOnceDone = 'true'

    // on

    const on = e => {
      const tooltips = document.querySelectorAll(obj.matches)
      // make other tooltips fast
      const tooltipsOther = Array.from(tooltips).filter(x => x !== e.target)
      for (const tooltip of tooltipsOther) {
        tooltip.dataset.defaultXtDuration = tooltip.getAttribute('data-xt-duration')
        tooltip.setAttribute('data-xt-duration', duration)
        const inner = tooltip.querySelector(':scope > *')
        inner.style.transitionDuration = `${duration}ms`
      }
      // make all tooltips normal
      clearTimeout(window.gatsbyTooltipFastTimeout)
      window.gatsbyTooltipFastTimeout = setTimeout(() => {
        for (const tooltip of tooltips) {
          tooltip.setAttribute('data-xt-duration', tooltip.dataset.defaultXtDuration)
          const inner = tooltip.querySelector(':scope > *')
          inner.style.transitionDuration = ''
        }
      }, delay)
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
    // click

    const click = () => {
      localStorage.setItem('mode', false)
      window.location.reload()
    }

    ref.addEventListener('click', click)

    // init

    if (localStorage.getItem('mode') !== 'react') {
      ref.classList.add('xt-active', 'xt-in')
    }
  },
})

Xt.mount({
  matches: '.button--switch-react',
  mount: ({ ref }) => {
    // click

    const click = () => {
      localStorage.setItem('mode', 'react')
      window.location.reload()
    }

    ref.addEventListener('click', click)

    // init

    if (localStorage.getItem('mode') === 'react') {
      ref.classList.add('xt-active', 'xt-in')
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
      matches: { '(max-width: 1023px)': { disabled: false } },
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

        const sticky = ScrollTrigger.create({
          trigger: ref,
          start: 'top top',
          endTrigger: 'html',
          end: 'bottom top',
          pin: true,
          pinSpacing: false,
        })

        ScrollTrigger.addEventListener('refresh', () => {
          // fix ScrollTrigger pin mount ignore
          sticky.pin.classList.add('xt-ignore')
          requestAnimationFrame(() => {
            sticky.pin.classList.remove('xt-ignore')
          })
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

    const background = ref.querySelector('.gatsby_home-header_background rect')
    const content = ref.querySelector('.gatsby_home-header_inner')
    const logo = ref.querySelector('.gatsby_logo-icon')

    // methods

    const straight = () => {
      gsap.killTweensOf(background)
      gsap.to(background, { rx: '0%', duration: 0.5, ease: 'quart.out' })
    }

    const curve = () => {
      if (!content.classList.contains('scrolling-down')) {
        gsap.killTweensOf(background)
        gsap.to(background, { rx: '50%', duration: 0.5, ease: 'quart.out' })
      }
    }

    // mouse events

    ref.addEventListener('mouseenter', straight)

    ref.addEventListener('mouseleave', curve)

    // sticky

    const sticky = ScrollTrigger.create({
      trigger: ref,
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
            y: -(logo.offsetTop + logo.offsetHeight),
            duration: 0.5,
            ease: 'quart.out',
          })
          straight()
        }
      },
    })

    ScrollTrigger.addEventListener('refresh', () => {
      // fix ScrollTrigger pin mount ignore
      sticky.pin.classList.add('xt-ignore')
      requestAnimationFrame(() => {
        sticky.pin.classList.remove('xt-ignore')
      })
    })

    // hide depending on .gatsby_site-main_inner

    ScrollTrigger.create({
      trigger: ref,
      start: -1, // needs -1 because start trigger is sticky
      end: () => `top top-=${ref.offsetHeight}`,
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
  },
})

/**
 * .gatsby_home-main
 */

Xt.mount({
  matches: '.gatsby_home-main',
  mount: ({ ref }) => {
    const items = ref.querySelectorAll('.gatsby_home-main_scroll')
    // parallax

    for (const item of items) {
      // bottom

      const scrollTriggerBottom = {
        trigger: item,
        start: 'top bottom',
        end: 'top bottom-=150', // end 150px after
        scrub: 1.5,
      }

      gsap
        .timeline({
          scrollTrigger: scrollTriggerBottom,
        })
        .set(item, {
          y: 30,
          opacity: 0,
        })
        .to(item, {
          opacity: 1,
          y: 0,
          ease: 'quint.inOut',
        })

      // top

      const scrollTriggerTop = {
        trigger: item,
        start: `bottom top+=200`, // 50px is header height, start 150px before
        end: `bottom top+=50`, // 50px is header height
        scrub: 1.5,
      }

      gsap
        .timeline({
          scrollTrigger: scrollTriggerTop,
        })
        .set(item, {
          y: 0,
          opacity: 1,
        })
        .to(item, {
          opacity: 0,
          y: -30,
          ease: 'quint.inOut',
          immediateRender: false, // when multiple scrolltrigger animate the same properties use immediateRender: false
        })
    }
  },
})

/**
 * .gatsby_site-article_hero
 */

Xt.mount({
  matches: '.gatsby_site-article_hero',
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
      closeAuto: true,
      classHtml: 'xt-scrollbar-overlay demo-full-open',
    })

    // tooltip

    const close = document.querySelector('#gatsby_open-full > .xt-dismiss')
    const closeUid = Xt.getuniqueId()
    document.querySelector('#gatsby_open-full').append(
      Xt.createElement(`
<div id="tooltip--close-${closeUid}" class="xt-tooltip xt-tooltip--gatsby p-2 group" data-xt-duration="300">
  <div class="relative ${classes.tooltipSm()} rounded-md shadow-tooltip ${classes.cardBlack()} transform transition duration-300 opacity-0 translate-y-2 group-xt-in:opacity-100 group-xt-in:translate-y-0">
    Close Fullscreen
  </div>
</div>`)
    )
    new Xt.Tooltip(close, {
      targets: `#tooltip--close-${closeUid}`,
      position: 'bottom-end',
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
  matches: 'body',
  mount: ({ ref }) => {
    // init

    let self = new Xt.Scrollto(ref, {
      hash: true,
      scrollDistance: () => {
        return window.innerHeight / 10
      },
    })

    // scrollto

    const scrollto = () => {
      // scroll
      gsap.killTweensOf(self.scroll)
      gsap.to(self.scroll, {
        scrollTo: self.position,
        duration: 1,
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

const makeDocument = () => {
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
    /*
    if (el.tagName === 'H2') {
      let container = document.querySelector(
        '.gatsby_button-site_article_sidebar--adiacent.xt-active ~ .gatsby_site-header_adiacent_inner'
      )
      container = container
        ? container
        : document.querySelector('.gatsby_button-site_article_sidebar--sub.xt-active ~ .gatsby_site-header_adiacent_inner')
      if (container) {
        const item = Xt.createElement(
          `<div><a href="#" class="xt-button gatsby_button-site_article_sidebar gatsby_button-site_article_sidebar--adiacent_inner"><span></span></button></div>`
        )
        container.classList.add('xt-active', xt-in')
        container.querySelector('.gatsby_site-header_item').append(item)
        item.querySelector('a').setAttribute('href', `#${encodeURIComponent(id)}`)
        item.querySelector('span').textContent = el.textContent.trim()
      }
    }
    */
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
  // restart xt-scrollto
  const gatsby = document.querySelector('.gatsby_site-wrapper')
  if (gatsby) {
    const scrollToAnchor = Xt.get('xt-scrollto', gatsby.closest('body'))
    if (scrollToAnchor) {
      scrollToAnchor.eventStart()
    }
  }
}

export { makeDocument }
