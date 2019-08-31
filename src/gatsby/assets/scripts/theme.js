import { Xt } from 'xtend-library'

//
// makeDocument
//

const makeDocument = function () {
  // .make-line
  for (const el of document.querySelectorAll('.site_article_content > * > * > h2, .site_article_content > * > * > h3')) {
    el.classList.add('make-line')
  }
  for (const el of document.querySelectorAll('.make-line')) {
    el.innerHTML = '<span class="make-line_line">' + el.innerHTML + '</span>'
    el.innerHTML = '<span class="make-line_container">' + el.innerHTML + '</span>'
  }
  // .make-anchor
  for (const el of document.querySelectorAll('.site_article_content > * > * > h2, .site_article_content > * > * > h3')) {
    el.classList.add('make-line')
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
    // make-anchor
    el.setAttribute('id', id)
    el.innerHTML = '<a href="#' + id + '" aria-label="Anchor to ' + el.textContent + '" tabindex="-1">' + el.innerHTML + '</a>'
    el.classList.add('make-anchor')
    el.append(Xt.createElement('<span class="site_article_anchor"><span class="btn"><span class="icon-link" aria-hidden="true"></span></span></span>'))
  }
  // .demo-cols
  for (const element of document.querySelectorAll('.demo-cols')) {
    for (const [i, el] of element.querySelectorAll('[class^=\'col--\'], [class*=\' col--\']').entries()) {
      el.setAttribute('data-index', i)
    }
  }
  // .demo-cols-nested
  for (const element of document.querySelectorAll('.demo-cols-nested [class^=\'col--\'], .demo-cols-nested [class*=\' col--\']')) {
    for (const [i, el] of element.querySelectorAll('[class^=\'col--\'], [class*=\' col--\']').entries()) {
      el.setAttribute('data-index', i)
    }
  }
  // docs tables
  const docs = document.querySelector('.site_article_content')
  if (docs) {
    const tables = docs.querySelectorAll('table')
    for (const table of tables) {
      table.classList.add('table', 'table--small')
      for (const el of table.querySelectorAll('tr td:first-child')) {
        el.outerHTML = el.outerHTML.replace(/(<\s*\/?\s*)td(\s*([^>]*)?\s*>)/gi, '$1th$2') // regex replace tagname
        el.setAttribute('scope', 'row')
      }
    }
  }
}

export { makeDocument }
