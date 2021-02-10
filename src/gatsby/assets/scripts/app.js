import { Xt } from 'xtendui'
import 'xtendui/src/core/toggle'
import 'xtendui/src/core/tooltip'
import 'xtendui/src/addons/scrolltoanchor'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const cardBlack = require('components/snippets/classes/card-black').default
const iconLink = require('components/snippets/icons').iconLink

import 'assets/scripts/shared'

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
 * .gatsby_btn--overlay
 */

Xt.mount.push({
  matches: '.gatsby_btn--overlay',
  mount: ({ object }) => {
    // overlay

    new Xt.Overlay(object, {
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

Xt.mount.push({
  matches: '.gatsby_site-header',
  mount: ({ object }) => {
    // match media

    ScrollTrigger.matchMedia({
      '(max-width: 1023px)': () => {
        // sticky

        ScrollTrigger.create({
          trigger: object,
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

Xt.mount.push({
  matches: '.gatsby_home-header',
  mount: ({ object }) => {
    // vars

    const background = object.querySelector('.gatsby_home-header_background rect')
    const content = object.querySelector('.gatsby_home-header_inner')
    const logo = object.querySelector('.gatsby_logo-icon')

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

    object.addEventListener('mouseenter', straight)

    object.addEventListener('mouseleave', curve)

    // sticky

    ScrollTrigger.create({
      trigger: object,
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

    // hide depending on .gatsby_site-main_inner

    ScrollTrigger.create({
      trigger: object,
      start: -1, // needs -1 because start trigger is sticky
      end: () => `top top-=${object.offsetHeight}`,
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

Xt.mount.push({
  matches: '.gatsby_home-main_scroll',
  mount: ({ object, mount }) => {
    // multiple mount object with raf

    mount.triggers = mount.triggers ? mount.triggers : []
    mount.triggers.push(object)
    cancelAnimationFrame(mount.raf)
    mount.raf = requestAnimationFrame(() => {
      // reset mount object

      const triggers = mount.triggers
      mount.triggers = []

      // parallax

      for (const trigger of triggers) {
        // bottom

        const scrollTriggerBottom = {
          trigger: trigger,
          start: 'top bottom',
          end: 'top bottom-=150', // end 150px after
          scrub: 1.5,
        }

        gsap
          .timeline({
            scrollTrigger: scrollTriggerBottom,
          })
          .set(trigger, {
            y: 30,
            opacity: 0,
          })
          .to(trigger, {
            opacity: 1,
            y: 0,
            ease: 'quint.inOut',
          })

        // top

        const scrollTriggerTop = {
          trigger: trigger,
          start: `bottom top+=200`, // 50px is header height, start 150px before
          end: `bottom top+=50`, // 50px is header height
          scrub: 1.5,
        }

        gsap
          .timeline({
            scrollTrigger: scrollTriggerTop,
          })
          .set(trigger, {
            y: 0,
            opacity: 1,
          })
          .to(trigger, {
            opacity: 0,
            y: -30,
            ease: 'quint.inOut',
            immediateRender: false, // when multiple scrolltrigger animate the same properties use immediateRender: false
          })
      }
    })
  },
})

/**
 * .gatsby_site-article_hero
 */

Xt.mount.push({
  matches: '.gatsby_site-article_hero',
  mount: ({ object }) => {
    // sticky

    const heroParallax = {
      trigger: object,
      start: 0,
      end: 'bottom top',
      scrub: true,
    }

    gsap.to(object, {
      scrollTrigger: heroParallax,
      y: '50%',
    })
  },
})

/**
 * #gatsby_open-full-trigger
 */

Xt.mount.push({
  matches: '#gatsby_open-full-trigger',
  mount: ({ object }) => {
    // init

    let self = new Xt.Toggle(object, {
      targets: '#gatsby_open-full',
      closeInside: ':scope > .btn-close',
      closeAuto: true,
      scrollbar: true,
      classHtml: 'demo-full-open',
    })

    // tooltip

    const close = document.querySelector('#gatsby_open-full > .btn-close')
    const closeUid = Xt.getuniqueId()
    document.querySelector('#gatsby_open-full').append(
      Xt.createElement(`
<div id="tooltip--demo--close-${closeUid}" class="tooltip group" data-xt-duration="300">
  <div class="text-2xs py-1.5 px-2.5 rounded shadow-tooltip ${cardBlack()} transform transition duration-300 opacity-0 translate-y-2 group-active:opacity-100 group-active:translate-y-0">
    Close Fullscreen
  </div>
</div>`)
    )
    new Xt.Tooltip(close, {
      targets: `#tooltip--demo--close-${closeUid}`,
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
 * xt-scrolltoanchor
 */

Xt.mount.push({
  matches: 'body',
  mount: ({ object }) => {
    // init

    let self = new Xt.Scrolltoanchor(object, {
      elements: '[href^="#"]:not([aria-controls])',
      scrollDistance: () => {
        return window.innerHeight / 10
      },
    })

    // change

    const eventChange = () => {
      // val
      let pos = self.position - self.scrollSpace - self.scrollDistance
      const min = 0
      const max = self.scrollElement.scrollHeight - self.scrollElement.clientHeight
      pos = pos < min ? min : pos
      pos = pos > max ? max : pos
      // scroll
      gsap.killTweensOf(self.scrollElement)
      gsap.to(self.scrollElement, {
        scrollTo: pos,
        duration: 1,
        ease: 'quart.inOut',
      })
    }

    self.object.addEventListener('change.xt.scrolltoanchor', eventChange)

    // unmount

    return () => {
      self.object.removeEventListener('change.xt.scrolltoanchor', eventChange)
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
    if (el.tagName === 'H2') {
      let container = document.querySelector(
        '.gatsby_btn-site_article_sidebar--adiacent.active ~ .gatsby_site-header_adiacent_inner'
      )
      container = container
        ? container
        : document.querySelector('.gatsby_btn-site_article_sidebar--sub.active ~ .gatsby_site-header_adiacent_inner')
      if (container) {
        const item = Xt.createElement(
          `<div><a href="#" class="btn gatsby_btn-site_article_sidebar gatsby_btn-site_article_sidebar--adiacent_inner"><span></span></button></div>`
        )
        container.classList.add('active')
        container.querySelector('.gatsby_site-header_item').append(item)
        item.querySelector('a').setAttribute('href', `#${encodeURIComponent(id)}`)
        item.querySelector('span').textContent = el.textContent.trim()
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
  <span class="btn btn-default">
  ${iconLink()}
  </span>
</span>`)
    )
  }
  // restart xt-scrolltoanchor
  const gatsby = document.querySelector('.gatsby_site-wrapper')
  if (gatsby) {
    const scrollToAnchor = Xt.get('xt-scrolltoanchor', gatsby.closest('body'))
    if (scrollToAnchor) {
      scrollToAnchor.eventStart()
    }
  }
}

export { makeDocument }
