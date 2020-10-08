import 'core-js'
import { Xt } from 'xtend-ui'
import 'xtend-ui/build/xtend-core'
import 'xtend-ui/build/xtend-addons'
import 'xtend-ui/build/xtend-demos'

/**
 * gsap setup
 */

import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.defaults({
  overwrite: 'auto',
})

gsap.config({
  force3D: false,
})

gsap.globalTimeline.timeScale(1000) // milliseconds instead of seconds

gsap.registerPlugin(ScrollToPlugin)

/**
 * Xt.vars
 */

Xt.vars = {
  timeMicro: 50,
  timeMini: 100,
  timeTiny: 250,
  timeSmall: 500,
  timeMedium: 750,
  timeLarge: 1000,
  timeBig: 1500,
  timeGiant: 2000,
  timeHuge: 3000,
}

// instant animations accessibility

if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce), (update: slow)').matches) {
  Xt.vars.timeMicro = 0
  Xt.vars.timeMini = 0
  Xt.vars.timeTiny = 0
  Xt.vars.timeSmall = 0
  Xt.vars.timeMedium = 0
  Xt.vars.timeLarge = 0
  Xt.vars.timeBig = 0
  Xt.vars.timeGiant = 0
  Xt.vars.timeHuge = 0
}

/**
 * favicon
 */

const changeMq = () => {
  const colorSchemeMq = window.matchMedia('(prefers-color-scheme: dark)')
  const favicon = document.querySelector('link[rel="icon"]')
  if (favicon) {
    favicon.remove()
  }
  if (colorSchemeMq.matches) {
    const icon = Xt.createElement('<link rel="icon" href="/favicon-dark.png">')
    document.head.append(icon)
  } else {
    const icon = Xt.createElement('<link rel="icon" href="/favicon.png">')
    document.head.append(icon)
  }
}

if (typeof window !== 'undefined') {
  changeMq()
}

/**
 * #gatsby_open-full-trigger
 */

Xt.mount.push({
  matches: '#gatsby_open-full-trigger',
  mount: object => {
    // init

    let self = new Xt.Toggle(object, {
      targets: '#gatsby_open-full',
      closeInside: ':scope > .btn-close',
      closeAuto: true, // needed for onPreRouteUpdate gatsby-browser.js
      scrollbar: true,
    })

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})

/**
 * xt-scroll-to-anchor
 */

Xt.mount.push({
  matches: '.gatsby_site_article',
  mount: object => {
    // vars

    object = object.closest('body')

    // init

    let self = new Xt.ScrollToAnchor(object, {
      scrollDistance: () => {
        return window.innerHeight / 10
      },
      scrollSpace: () => {
        return 0
      },
    })

    // change

    const eventChange = () => {
      // val
      const scrollingElement = self.scrollElementCurrent
      let pos = self.position - self.scrollSpace - self.scrollDistance
      const min = 0
      const max = scrollingElement.scrollHeight - scrollingElement.offsetHeight
      pos = pos < min ? min : pos
      pos = pos > max ? max : pos
      // scroll
      gsap.to(scrollingElement, { scrollTo: pos, duration: Xt.vars.timeLarge, ease: 'quart.inOut' })
    }

    self.object.addEventListener('change.xt.scrolltoanchor', eventChange)

    // unmount

    const unmount = () => {
      self.object.removeEventListener('change.xt.scrolltoanchor', eventChange)
      self.destroy()
      self = null
    }
    return unmount
  },
})

/**
 * xt-scroll

Xt.mount.push({
  matches: '.gatsby_site_article_hero_content_inner',
  mount: (object) => {
    // init

    let self = new Xt.Scroll(object, {
      sticky: 'fixed',
      end: 75,
    })

    // change

    const eventChange = (e) => {
      const element = e.target
      gsap.set(element, { transformOrigin: 'left top' })
      gsap.set(element, { opacity: self.detail.ratioInverse, scale: 0.9 + 0.1 * self.detail.ratioInverse })
    }

    for (const el of self.elements) {
      el.addEventListener('change.xt', eventChange)
    }

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
*/

//
// makeDocument
//

const makeDocument = () => {
  // .gatsby_make-line
  for (const el of document.querySelectorAll('.gatsby_site_article_content_inner > * > h2, .gatsby_site_article_content_inner > * > h4')) {
    el.classList.add('gatsby_make-line')
  }
  for (const el of document.querySelectorAll('.gatsby_make-line')) {
    el.innerHTML = '<span class="gatsby_make-line_line">' + el.innerHTML + '</span>'
    el.innerHTML = '<span class="gatsby_make-line_container">' + el.innerHTML + '</span>'
  }
  // .gatsby_make-anchor
  for (const el of document.querySelectorAll('.gatsby_site_article_content_inner > * > h2, .gatsby_site_article_content_inner > * > h4')) {
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
      id += prevElement.textContent.replace(/\s+/g, '-').toLowerCase() + '-'
    }
    id += el.textContent.replace(/\s+/g, '-').toLowerCase()
    // sidebar links
    if (el.tagName === 'H2') {
      let container = document.querySelector('.gatsby_btn-site_article_sidebar--adiacent.active ~ .gatsby_site_header_adiacent_inner')
      container = container ? container : document.querySelector('.gatsby_btn-site_article_sidebar--sub.active ~ .gatsby_site_header_adiacent_inner')
      container.classList.add('active')
      container
        .querySelector('.gatsby_site_header_item')
        .append(
          Xt.createElement(
            '<div><a href="#' +
              id +
              '" class="btn gatsby_btn-site_article_sidebar gatsby_btn-site_article_sidebar--adiacent_inner"><span>' +
              el.textContent +
              '</span></button></div>'
          )
        )
    }
    // gatsby_make-anchor
    el.setAttribute('id', id)
    el.classList.add('gatsby_make-anchor')
    // wrapInner
    const link = Xt.createElement('<a href="#' + id + '"></a>')
    el.classList.add('xt-ignore')
    el.before(link)
    const inner = el.querySelector(':scope > *')
    el.append(link)
    link.append(inner)
    el.append(
      Xt.createElement(
        '<span class="gatsby_site_article_anchor"><span class="btn btn-default"><span class="icon-link" aria-hidden="true"></span></span></span>'
      )
    )
  }
  // docs tables
  const docs = document.querySelector('.gatsby_site_article_content_inner')
  if (docs) {
    const tables = docs.querySelectorAll('table')
    for (const table of tables) {
      table.classList.add('table', 'gatsby_table')
      for (const el of table.querySelectorAll('tr td:first-child')) {
        el.outerHTML = el.outerHTML.replace(/(<\s*\/?\s*)td(\s*([^>]*)?\s*>)/gi, '$1th$2') // regex replace tagname
        el.setAttribute('scope', 'row')
      }
    }
  }
  // scrollSidebarToContent
  require('assets/scripts/gatsby.js').gatsbySidebar()
  // restart xt-scroll-to-anchor
  const gatsby = document.querySelector('.gatsby_site_wrapper')
  if (gatsby) {
    const scrollToAnchor = Xt.get('xt-scroll-to-anchor', gatsby.closest('body'))
    if (scrollToAnchor) {
      scrollToAnchor.eventStart()
    }
  }
}

export { makeDocument }
