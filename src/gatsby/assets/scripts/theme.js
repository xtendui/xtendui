import { Xt } from 'xtend-library/src/xt.js'
import gsap from 'gsap'

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

changeMq()

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
}

export { makeDocument }
