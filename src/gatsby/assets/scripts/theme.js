import 'core-js'
import 'regenerator-runtime/runtime'
import 'xtend-library/src/polyfill.js'
import { Xt } from 'xtend-library'
import 'xtend-library/src/xtend-core.js'
import 'xtend-library/src/xtend-extensions.js'
import 'xtend-library/src/xtend-addons.js'
import 'xtend-library/src/xtend-demos.js'
import 'xtend-library/src/vars.js'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin.js'

/**
 * favicon
 */

const changeMq = () => {
  const colorSchemeMq = window.matchMedia('(prefers-color-scheme: dark)')
  const favicon = document.querySelector('link[rel="icon"]')
  favicon.remove()
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
 * #gatbsy_open-full-trigger
 */

Xt.mount.push({
  matches: '#gatbsy_open-full-trigger',
  mount: object => {
    // init

    let self = new Xt.Toggle(object, {
      targets: '#gatbsy_open-full',
      closeInside: ':scope > .btn-close',
      autoClose: false,
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
  matches: '.gatsby_site_wrapper',
  mount: object => {
    // vars

    object = object.closest('body')

    // init

    let self = new Xt.ScrollToAnchor(object, {
      scrollDistance: () => {
        return window.innerHeight / 6
      },
    })

    // change

    const eventChange = e => {
      // stop xt-smooth
      const smooth = Xt.get('xt-smooth', self.object)
      if (smooth) {
        smooth.eventWheelstop()
      }
      // scroll
      const scrollSpace = self.options.scrollSpace()
      const scrollDistance = self.options.scrollDistance()
      const posY = self.target.offsetTop - scrollSpace - scrollDistance
      gsap.to(window, { scrollTo: posY, duration: Xt.vars.timeLarge, ease: 'quart.inOut' })
    }

    self.object.addEventListener('change.xt.scrolltoanchor', eventChange)

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})

/**
 * xt-scroll
 */

Xt.mount.push({
  matches: 'body .gatsby_site_article_hero_content_inner',
  mount: object => {
    // init

    let self = new Xt.Scroll(object, {
      sticky: 'fixed',
      end: 75,
    })

    // change

    const eventChange = e => {
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
    el.innerHTML = '<a href="#' + id + '" aria-label="Anchor to ' + el.textContent + '" tabindex="-1">' + el.innerHTML + '</a>'
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
      table.classList.add('table', 'table-border', 'gatbsy_table')
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
