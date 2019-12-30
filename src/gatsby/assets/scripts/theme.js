import { Xt } from 'xtend-library'
import gsap from 'gsap'

/**
 * xt-smooth
 */

/*
new Xt.Smooth(document.scrollingElement)
*/

/**
 * xt-scroll
 */

Xt.mount.push({
  matches: '.gatsby_site_article_hero_content',
  mount: function(object) {
    // init

    let self = new Xt.Scroll(object, {
      sticky: 'fixed',
      end: 350,
    })

    // change

    const eventChange = function() {
      const el = this
      gsap.set(el, { transformOrigin: 'left top' })
      gsap.set(el, { opacity: self.detail.ratioInverse, scale: 0.9 + 0.1 * self.detail.ratioInverse })
    }

    for (const el of self.elements) {
      el.addEventListener('change.xt.scroll', eventChange)
    }

    // unmount

    const unmount = function() {
      self.destroy()
      self = null
    }
    return unmount
  },
})

//
// makeDocument
//

const makeDocument = function() {
  // .gatsby_make-line
  for (const el of document.querySelectorAll('.gatsby_site_article_content_inner > * > h2, .gatsby_site_article_content_inner > * > h3')) {
    el.classList.add('gatsby_make-line')
  }
  for (const el of document.querySelectorAll('.gatsby_make-line')) {
    el.innerHTML = '<span class="gatsby_make-line_line">' + el.innerHTML + '</span>'
    el.innerHTML = '<span class="gatsby_make-line_container">' + el.innerHTML + '</span>'
  }
  // .gatsby_make-anchor
  for (const el of document.querySelectorAll('.gatsby_site_article_content_inner > * > h2, .gatsby_site_article_content_inner > * > h3')) {
    el.classList.add('gatsby_make-line')
    // previous h2 if h3
    let prevElement
    if (el.tagName === 'H3') {
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
    el.innerHTML = '<a href="#' + id + '" aria-label="Anchor to ' + el.textContent + '" tabindex="-1">' + el.innerHTML + '</a>'
    el.classList.add('gatsby_make-anchor')
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
      table.classList.add('table', 'table-border', 'table-stripe', 'gatbsy_table')
      for (const el of table.querySelectorAll('tr td:first-child')) {
        el.outerHTML = el.outerHTML.replace(/(<\s*\/?\s*)td(\s*([^>]*)?\s*>)/gi, '$1th$2') // regex replace tagname
        el.setAttribute('scope', 'row')
      }
    }
  }
}

export { makeDocument }
