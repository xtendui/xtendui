import Prism from 'prismjs'
import ClipboardJS from 'clipboard'
import { Xt } from 'xtend-library'

require('prismjs/plugins/unescaped-markup/prism-unescaped-markup')
require('prismjs/plugins/unescaped-markup/prism-unescaped-markup.css')
require('prismjs/components/prism-jsx.min')
require('prismjs/components/prism-less.min')
require('prism-themes/themes/prism-base16-ateliersulphurpool.light.css')
Prism.manual = true

/**
 * xt-smooth
 */

/*
require('xtend-library/src/core/smooth/smooth.js')
new Xt.Smooth(document.scrollingElement)
*/

/**
 * formatCode
 */

const formatCode = function (source) {
  let inner = source.querySelectorAll('.gatsby_demo_source--from')
  inner = Array.from(inner).filter(x => !x.querySelectorAll('.gatsby_demo_source--from').length) // filter out nested
  if (inner.length) {
    source = inner[0]
  }
  let text = source.innerHTML
  // replace
  const lang = source.getAttribute('data-lang')
  if (lang !== 'less' && !source.classList.contains('language-less')) {
    // replace quote entities
    text = text.replace(/&quot;/g, '"')
    // replace entities
    text = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    // replace json quotes
    // text = text.replace(/("{)/g, '\'{').replace(/(}")/g, '}\'')
    // replace empty quotes
    text = text.replace(/=""/g, '')
  }
  // filter meta
  /*
  let meta = text.match(/\/\/##START([\S\s]*?)\/\/##END/);
  if (meta) {
    text = meta[1];
  }
  */
  // remove tabs
  const arr = text.split('\n')
  let search = arr[0]
  search = search.length ? search : arr[1]
  if (search) {
    const toRemove = search.search(/\S/g)
    for (const i of arr.keys()) {
      arr[i] = arr[i].substring(toRemove)
    }
    text = arr.join('\n')
  }
  // remove newline at start and end
  text = text.replace(/^\s+|\s+$/g, '')
  // return
  return text
}

/**
 * populateDemo
 */

const populateDemo = function (container, i) {
  const items = container.querySelectorAll('.gatsby_demo_item')
  // multiple elements
  container.prepend(Xt.createElement('<div class="gatsby_demo_tabs"><div class="gatsby_demo_tabs_left"></div><div class="gatsby_demo_tabs_right"></div></div>'))
  container.querySelector('.gatsby_demo_tabs_right').append(Xt.createElement('<button type="button" class="btn btn--text btn--tiny btn--icon btn--show-code" data-toggle="tooltip" data-placement="top" aria-label="Code"><span class="icon-code icon--big"></span></button>'))
  container.querySelector('.gatsby_demo_tabs_right').append(Xt.createElement('<button type="button" class="btn btn--text btn--tiny btn--icon btn--open-full" data-toggle="tooltip" data-placement="top" aria-label="Fullscreen"><span class="icon-maximize icon--big"></span></button>'))
  // loop items
  for (const [k, item] of items.entries()) {
    // populate tabs
    let name = item.getAttribute('data-iframe') ? item.getAttribute('data-iframe').split('/').pop().split('-').pop() : null
    name = item.getAttribute('data-name') ? item.getAttribute('data-name') : name
    if (!name) {
      if (items.length === 1) {
        name = 'demo'
      } else {
        name = 'demo #' + k
      }
    }
    container.querySelector('.gatsby_demo_tabs_left').append(Xt.createElement('<button type="button" class="btn btn--text btn--tiny">' + name + '</button>'))
    // tabs
    item.prepend(Xt.createElement('<div class="gatsby_demo_code"><div class="gatsby_demo_code_inner"><div class="gatsby_demo_code_tabs"><div class="gatsby_demo_code_tabs_left"></div><div class="gatsby_demo_code_tabs_right"><button type="button" class="btn btn--text btn--tiny btn--clipboard" data-toggle="tooltip" data-placement="top" title="Copy to clipboard">copy</button></div></div><div class="gatsby_demo_code_body"></div></div></div>'))
    // https://github.com/zenorocha/clipboard.js/
    const clipboard = new ClipboardJS('.btn--clipboard', {
      target: function (trigger) {
        return trigger.closest('.gatsby_demo').querySelector('.gatsby_demo_item.active .gatsby_demo_code_body_item.active .hljs')
      }
    })
    clipboard.on('success', function (e) {
      e.clearSelection()
      // $(e.trigger).attr('data-original-title', 'Done').tooltip('show');
    })
    clipboard.on('error', function (e) {
      // $(e.trigger).attr('data-original-title', 'Error: copy manually').tooltip('show');
    })
    // inject iframe
    if (item.getAttribute('data-iframe')) {
      // iframe append
      const id = 'iframe' + i + k
      item.setAttribute('data-iframe-id', id)
      if (!item.getAttribute('data-iframe-fullscreen')) {
        populateFullscreen(item)
      }
    } else {
      populateInline(item)
    }
  }
  // toggle code
  const demoId = 'gatsby_demo_' + i
  container.setAttribute('id', demoId)
  // makeFullscreen
  for (const btnOpenFull of container.querySelectorAll('.btn--open-full')) {
    btnOpenFull.addEventListener('click', function () {
      makeFullscreen(container)
    })
  }
  // gatsby_demo_tabs_left
  new Xt.Toggle(container, { // eslint-disable-line no-new
    elements: '.gatsby_demo_tabs_left .btn',
    targets: '.gatsby_demo_item',
    min: 1
  })
  // btn--show-code
  new Xt.Toggle(container.querySelector('.btn--show-code'), { // eslint-disable-line no-new
    targets: '#' + demoId,
    targetsInner: '.gatsby_demo_code',
    aria: false
  })
}

/**
 * makeFullscreen
 */

const makeFullscreen = function (item) {
  const overlay = document.querySelector('#overlay--open-full')
  const content = document.querySelector('#overlay--open-full-content')
  overlay.dispatchEvent(new CustomEvent('on.xt'))
  // move code block
  item.before(Xt.createElement('<div class="xt-ignore" data-xt-origin="overlay--open-full-content" style="height: ' + item.clientHeight + 'px"></div>'))
  item.classList.add('xt-ignore', 'xt-ignore--once') // @FIX ignore once for mount when moving
  content.append(item)
  // populateFullscreen
  const container = content.querySelector('.gatsby_demo')
  for (const item of container.querySelectorAll('.gatsby_demo_item')) {
    populateFullscreen(item)
  }
  // trigger resize
  requestAnimationFrame(function () {
    dispatchEvent(new CustomEvent('resize', { detail: { force: true } }))
  })
}

/**
 * populateFullscreen
 */

const populateFullscreen = function (item) {
  if (item.getAttribute('data-iframe')) {
    const src = '/' + item.getAttribute('data-iframe')
    const id = item.getAttribute('data-iframe-id')
    item.append(Xt.createElement('<div class="gatsby_demo_item_wrapper"><iframe data-src="' + src + '" name="' + id + '"></iframe></div>'))
    item.querySelector('.gatsby_demo_item_wrapper').append(Xt.createElement('\n' +
      '    <div class="loader loader--spinner">\n' +
      '      <div class="spinner">\n' +
      '        <svg viewBox="0 0 250 250"><circle cx="120" cy="120" r="100" stroke-dasharray="628" stroke-dashoffset="628" pathLength="628"></circle></svg><svg viewBox="0 0 250 250" preserveAspectRatio="xMinYMin meet"><circle cx="120" cy="120" r="100" stroke-dasharray="628" stroke-dashoffset="628" pathLength="628"></circle></svg>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '  </div>'))
    // load
    const iframe = item.querySelector('iframe')
    item.addEventListener('on.xt', function (e) {
      if (this === e.target) { // @FIX on.xt and off.xt event bubbles
        if (!item.classList.contains('loaded')) {
          item.classList.add('loaded')
          loadIframe(iframe)
        }
      }
    })
    item.addEventListener('off.xt', function (e) {
      if (this === e.target) { // @FIX on.xt and off.xt event bubbles
        if (item.classList.contains('loaded')) {
          item.classList.remove('loaded')
          unloadIframe(iframe)
        }
      }
    })
  }
}

// populateIframe

const loadIframe = function (iframe) {
  iframe.setAttribute('src', iframe.getAttribute('data-src'))
}

const unloadIframe = function (iframe) {
  iframe.setAttribute('src', '')
}

if (typeof window !== 'undefined') {
  window.initIframe = function (name, htmlSource, jsSource, cssSource) {
    const src = 'iframe[name="' + name + '"]'
    const iframes = document.querySelectorAll(src)
    for (const iframe of iframes) {
      iframe.contentWindow.document.querySelector('html').classList.add('gatsby_iframe-inside')
      const item = iframe.closest('.gatsby_demo_item')
      populateIframe(item, iframe, htmlSource, jsSource, cssSource)
    }
  }
  window.resizeIframe = function (name) {
    const src = 'iframe[name="' + name + '"]'
    const iframes = document.querySelectorAll(src)
    for (const iframe of iframes) {
      const container = iframe.closest('.gatsby_demo')
      const wrappers = container.querySelectorAll('.gatsby_demo_item_wrapper')
      if (iframe) {
        const iframeFull = iframe.contentWindow.document.documentElement.classList.contains('gatsby_iframe-full')
        if (iframeFull) {
          iframe.classList.add('gatsby_iframe-full')
          const target = iframe.contentWindow.document.querySelector('#body-outer')
          const h = target.offsetHeight
          if (h !== parseFloat(iframe.dataset.iframeHeight)) {
            iframe.style.height = h + 'px'
            iframe.dataset.iframeHeight = h.toString()
          }
          for (const wrapper of wrappers) {
            wrapper.style.height = h + 'px'
          }
        } else {
          for (const wrapper of wrappers) {
            wrapper.style.height = ''
          }
        }
      }
    }
  }
}

const populateIframe = function (item, iframe, htmlSource, jsSource, cssSource) {
  if (!item.classList.contains('populated')) {
    item.classList.add('populated')
    // inject code
    if (htmlSource) {
      item.append(Xt.createElement('<div class="gatsby_demo_source xt-ignore" data-lang="html">' + htmlSource + '</div>'))
    }
    if (jsSource) {
      item.append(Xt.createElement('<div class="gatsby_demo_source xt-ignore" data-lang="js">' + jsSource + '</div>'))
    }
    if (cssSource) {
      item.append(Xt.createElement('<div class="gatsby_demo_source xt-ignore" data-lang="less">' + cssSource + '</div>'))
    }
    // populate
    const els = item.querySelectorAll('.gatsby_demo_source[data-lang]')
    for (const [z, el] of els.entries()) {
      populateSources(item, el, z)
      el.remove()
    }
    new Xt.Toggle(item, { // eslint-disable-line no-new
      elements: '.gatsby_demo_code_tabs_left .btn',
      targets: '.gatsby_demo_code_body_item',
      min: 1
    })
  }
}

/**
 * populateInline
 */

const populateInline = function (item) {
  if (!item.classList.contains('populated')) {
    item.classList.add('populated')
    const els = item.querySelectorAll('.gatsby_demo_source[data-lang]')
    for (const [z, el] of els.entries()) {
      populateSources(item, el, z)
      if (!item.classList.contains('gatsby_demo_preview')) {
        el.style.display = 'none'
      }
    }
    new Xt.Toggle(item, { // eslint-disable-line no-new
      elements: '.gatsby_demo_code_tabs_left .btn',
      targets: '.gatsby_demo_code_body_item',
      min: 1
    })
  }
}

/**
 * populateSources
 */

const populateSources = function (item, element, z) {
  let lang = element.getAttribute('data-lang')
  // set text
  if (lang === 'language-markup') {
    lang = 'html'
  } else if (lang === 'language-jsx') {
    lang = 'js'
  } else if (lang === 'language-less') {
    lang = 'less'
  }
  // populate tabs
  item.querySelector('.gatsby_demo_code_body').append(Xt.createElement('<div class="gatsby_demo_code_body_item"><pre class="noedit"><code></code></pre></div>'))
  item.querySelector('.gatsby_demo_code_tabs_left').append(Xt.createElement('<button type="button" class="btn btn--text btn--tiny">' + lang + '</button>'))
  // format code
  const itemInside = item.querySelectorAll('.gatsby_demo_code_body .gatsby_demo_code_body_item')[z]
  const codeInside = itemInside.querySelector('pre code')
  // set text
  if (lang === 'html') {
    lang = 'language-markup'
  } else if (lang === 'js') {
    lang = 'language-jsx'
  } else if (lang === 'less') {
    lang = 'language-less'
  }
  codeInside.innerHTML = formatCode(element)
  codeInside.classList.add(lang)
  Prism.highlightElement(codeInside)
}

/**
 * populateBlock
 */

const populateBlock = function () {
  for (const el of document.querySelectorAll('script[type="text/plain"][class*="language-"]')) {
    const language = el.getAttribute('class')
    el.after(Xt.createElement('<pre class="' + language + '"><code class="' + language + '">' + el.innerHTML + '</code></pre>'))
    el.remove()
  }
  for (const el of document.querySelectorAll('pre:not(.noedit) code')) {
    // set text
    el.innerHTML = formatCode(el)
    Prism.highlightElement(el)
  }
  // overlay fullscreen
  for (const el of document.querySelectorAll('[data-iframe-toggle')) {
    el.addEventListener('click', function () {
      makeFullscreen(el.nextSibling)
    })
  }
  document.querySelector('#overlay--open-full').addEventListener('off.xt', function (e) {
    if (this === e.target) { // @FIX on.xt and off.xt event bubbles
      // move code block
      const content = document.querySelector('#overlay--open-full-content')
      const appendOrigin = document.querySelector('[data-xt-origin="overlay--open-full-content"]')
      content.childNodes[0].classList.add('xt-ignore', 'xt-ignore--once') // @FIX ignore once for mount when moving
      appendOrigin.before(content.childNodes[0])
      appendOrigin.remove()
      // trigger resize
      requestAnimationFrame(function () {
        dispatchEvent(new CustomEvent('resize', { detail: { force: true } }))
      })
    }
  })
}

export { populateBlock, populateDemo }
