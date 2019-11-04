import { Xt } from 'xtend-library'

//
// makeDocument
//

const makeDocument = function() {
  // .gatsby_make-line
  for (const el of document.querySelectorAll('.gatsby_site_article_content > * > * > h2, .gatsby_site_article_content > * > * > h3')) {
    el.classList.add('gatsby_make-line')
  }
  for (const el of document.querySelectorAll('.gatsby_make-line')) {
    el.innerHTML = '<span class="gatsby_make-line_line">' + el.innerHTML + '</span>'
    el.innerHTML = '<span class="gatsby_make-line_container">' + el.innerHTML + '</span>'
  }
  // .gatsby_make-anchor
  for (const el of document.querySelectorAll('.gatsby_site_article_content > * > * > h2, .gatsby_site_article_content > * > * > h3')) {
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
        '<span class="gatsby_site_article_anchor"><span class="btn btn--default"><span class="icon-link" aria-hidden="true"></span></span></span>'
      )
    )
  }
  // docs tables
  const docs = document.querySelector('.gatsby_site_article_content')
  if (docs) {
    const tables = docs.querySelectorAll('table')
    for (const table of tables) {
      table.classList.add('table', 'table--small', 'table--border', 'table--stripe', 'gatbsy_table')
      for (const el of table.querySelectorAll('tr td:first-child')) {
        el.outerHTML = el.outerHTML.replace(/(<\s*\/?\s*)td(\s*([^>]*)?\s*>)/gi, '$1th$2') // regex replace tagname
        el.setAttribute('scope', 'row')
      }
    }
  }
}

export { makeDocument }
