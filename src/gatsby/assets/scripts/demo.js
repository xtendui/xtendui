import Prism from 'prismjs'
import ClipboardJS from 'clipboard'
import { Xt } from 'xtend-ui'
import kebabCase from 'lodash.kebabcase'

require('prismjs/plugins/unescaped-markup/prism-unescaped-markup')
require('prismjs/components/prism-jsx.min')
require('prismjs/components/prism-less.min')
Prism.manual = true

const spinner = require('components/snippets/spinner').default
const iconCode = require('components/snippets/icons').iconCode
const iconMaximize = require('components/snippets/icons').iconMaximize
const iconExternal = require('components/snippets/icons').iconExternal
const iconCopy = require('components/snippets/icons').iconCopy

/**
 * demoHash
 */

let scrollCache = 0

const scrollToItem = (initial = false) => {
  const origin = document.querySelector('[data-xt-origin="gatsby_open-full-content"]')
  if (initial && origin) {
    scrollCache = document.scrollingElement.scrollTop + origin.offsetTop
    document.scrollingElement.scrollTo(0, scrollCache)
  } else {
    document.scrollingElement.scrollTo(0, scrollCache)
  }
}

const demoHash = (e, initial = false) => {
  // call offdone.xt
  if (document.querySelector('#gatsby_open-full-trigger')) {
    document.querySelector('#gatsby_open-full-trigger').dispatchEvent(new CustomEvent('off.trigger.xt'))
    // set hash cancel
    cancelAnimationFrame(Xt.dataStorage.get(document, 'gatsby_open-full-raf'))
    // check hash
    if (location.hash) {
      const item = document.querySelector('[id="' + kebabCase(location.hash) + '"]')
      if (item) {
        const demo = item.closest('.gatsby_demo')
        if (demo) {
          // raf fix reopen options.scrollbar
          requestAnimationFrame(() => {
            makeFullscreen(demo, initial)
            // scrollToItem
            scrollToItem(initial)
            // makeGatsbyWithIframe
            makeGatsbyWithIframe(item)
            // trigger fullscreen or change tabs
            item.dispatchEvent(new CustomEvent('on.trigger.xt'))
          })
        }
      }
    }
  }
}

if (typeof window !== 'undefined') {
  addEventListener('hashchange', demoHash)
}

/**
 * formatCode
 */

const formatCode = source => {
  let text = source.innerHTML
  // ##START and ##END
  const metas = text.match(/\/\*##START\*\/\n([\S\s]*?)\/\*##END\*\/\n/g)
  if (metas) {
    text = ''
    for (const meta of metas.entries()) {
      text += meta[1].replace(/\/\*##START\*\/\n/g, '').replace(/\/\*##END\*\/\n/g, '')
    }
  }
  // replace id
  const item = source.closest('.gatsby_demo_item')
  if (item) {
    let id = item.getAttribute('data-iframe')
    if (id) {
      const names = id.split('/')
      id = '#iframe--' + names[names.length - 1]
      text = text.replace(new RegExp(`[ ]{0,}${id}[ ]{0,}`, 'gi'), '')
    }
    // replace #gatsby_body-inner
    id = '#gatsby_body-inner'
    text = text.replace(new RegExp(`[ ]{0,}${id}[ ]{0,}`, 'gi'), '')
  }
  // search html tags
  const re = /<[^>]*>/g
  text = text.replace(re, match => {
    // replace quote entities
    match = match.replace(/&quot;/g, '"')
    // replace entities
    match = match.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    // replace empty quotes
    match = match.replace(/=""/g, '')
    return match
  })
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
 * populateBlock
 */

const populateBlock = () => {
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
  const full = document.querySelector('#gatsby_open-full')
  if (full) {
    for (const el of document.querySelectorAll('[data-gatsby-listing-toggle]')) {
      el.addEventListener('click', e => {
        e.preventDefault()
        location.hash = el.nextSibling.querySelector('.gatsby_demo_item ').getAttribute('id')
        cancelAnimationFrame(Xt.dataStorage.get(document, 'gatsby_open-full-raf'))
      })
    }
    full.addEventListener('off.xt', e => {
      if (e.target === full) {
        const content = document.querySelector('#gatsby_open-full-content')
        // scrollToItem
        scrollToItem()
        // iframe
        const container = content.querySelector('.gatsby_demo')
        if (container && container.dataset.isFullscreenOnly) {
          // populate iframe
          for (const item of container.querySelectorAll('.gatsby_demo_item.active')) {
            if (item.getAttribute('data-iframe-fullscreen')) {
              item.classList.remove('loaded')
              item.dispatchEvent(new CustomEvent('offdone.xt'))
            }
          }
          // populate source
          const sourceTo = content.querySelector('.gatsby_demo_source_populate')
          if (sourceTo) {
            sourceTo.innerHTML = ''
          }
        }
        // btnOpenFull
        for (const btn of document.querySelectorAll('.btn-open-full.active')) {
          btn.classList.remove('active')
        }
        // toggles
        const listingToggles = document.querySelectorAll('[data-gatsby-listing-toggle]')
        for (const el of listingToggles) {
          el.classList.remove('active')
        }
        // move code block
        const appendOrigin = document.querySelector('[data-xt-origin="gatsby_open-full-content"]')
        if (appendOrigin) {
          const moving = content.childNodes[0]
          moving.classList.add('xt-ignore', 'xt-ignore-once') // @FIX ignore once for mount when moving
          appendOrigin.before(moving)
          // @FIX demo fullscreen
          const current = appendOrigin.previousSibling.querySelector('.gatsby_demo_item.active')
          // triggering e.detail.container
          dispatchEvent(new CustomEvent('resize', { detail: { force: true, container: current } }))
          appendOrigin.remove()
        }
        // set hash
        cancelAnimationFrame(Xt.dataStorage.get(document, 'gatsby_open-full-raf'))
        Xt.dataStorage.set(
          document,
          'gatsby_open-full-raf',
          requestAnimationFrame(() => {
            // no location.hash or page scroll to top
            history.pushState({}, '', '#')
          })
        )
      }
    })
    // trigger fullscreen or change tabs
    full.addEventListener('on.xt', () => {
      // @FIX demo fullscreen
      const content = document.querySelector('#gatsby_open-full-content')
      const current = content.querySelector('.gatsby_demo_item.active')
      // triggering e.detail.container
      dispatchEvent(new CustomEvent('resize', { detail: { force: true, container: current } }))
    })
  }
}

/**
 * populateDemo
 */

const populateDemo = (container, i) => {
  const items = container.querySelectorAll('.gatsby_demo_item')
  // multiple elements
  container.prepend(
    Xt.createElement(
      '<div class="gatsby_demo_tabs"><div class="gatsby_demo_tabs_left list list-px"></div><div class="gatsby_demo_tabs_right list list-px"></div></div>'
    )
  )
  container.querySelector('.gatsby_demo_tabs_right').append(
    Xt.createElement(`
<button type="button" class="btn btn-show-code" aria-label="Toggle Code">
  ${iconCode()}
</button>`)
  )
  container.querySelector('.gatsby_demo_tabs_right').append(
    Xt.createElement(`
<button type="button" class="btn btn-open-full" aria-label="Toggle Fullscreen">
  ${iconMaximize()}
</button>`)
  )
  container.querySelector('.gatsby_demo_tabs_right').append(
    Xt.createElement(`
<a href="#" target="_blank" class="btn btn-open-iframe" aria-label="Open Iframe">
  ${iconExternal()}
</a>`)
  )
  // loop itemsi
  for (const [k, item] of items.entries()) {
    // populate tabs
    let name = k
    let file = item.getAttribute('data-file')
    const src = item.getAttribute('data-iframe') || item.getAttribute('data-iframe-fullscreen')
    if (src) {
      name = src.split('/').pop().split('-').join(' ')
      file = src.split('/').splice(2, 10).join('-')
    } else if (file) {
      name = file.split('/').pop().split('-').join(' ')
      file = file.split('/').splice(3, 10).join('-')
    }
    item.setAttribute('id', kebabCase(file))
    container.querySelector('.gatsby_demo_tabs_left').append(Xt.createElement('<button type="button" class="btn">' + name + '</button>'))
    // tabs
    item.prepend(
      Xt.createElement(
        `
<div class="gatsby_demo_code">
  <div class="gatsby_demo_code_inner">
    <div class="gatsby_demo_code_tabs">
      <div class="gatsby_demo_code_tabs_left list list-px"></div>
      <div class="gatsby_demo_code_tabs_right list list-px">
        <button type="button" class="btn btn-tiny btn-clipboard" data-toggle="tooltip" data-placement="top" title="Copy to clipboard">
          ${iconCopy()}
        </button>
      </div>
    </div>
    <div class="gatsby_demo_code_body"></div>
  </div>
</div>`
      )
    )
    // https://github.com/zenorocha/clipboard.js/
    const clipboard = new ClipboardJS('.btn-clipboard', {
      target: trigger => {
        if (Xt.debug === true) {
          console.debug(
            'code copy',
            trigger.closest('.gatsby_demo').querySelector('.gatsby_demo_item.active .gatsby_demo_code .gatsby_demo_code_body_item.active pre code')
          )
        }
        return trigger.closest('.gatsby_demo').querySelector('.gatsby_demo_item.active .gatsby_demo_code .gatsby_demo_code_body_item.active pre code')
      },
    })
    clipboard.on('success', e => {
      e.clearSelection()
      // $(e.trigger).attr('data-original-title', 'Done').tooltip('show')
    })
    clipboard.on('error', () => {
      // $(e.trigger).attr('data-original-title', 'Error: copy manually').tooltip('show')
    })
    // inject iframe
    if (!item.getAttribute('data-iframe-fullscreen')) {
      if (item.getAttribute('data-iframe')) {
        initializeIframe(container, item)
      } else {
        populateInline(item)
      }
    }
    // populate source
    const sourceTo = item.querySelector('.gatsby_demo_source_populate')
    if (sourceTo) {
      if (getComputedStyle(sourceTo).display === 'inline-flex') {
        // populate source disable
        container.dataset.isFullscreenOnly = 'true'
      } else {
        requestAnimationFrame(() => {
          // @FIX multiple initializations
          sourceTo.innerHTML = item.querySelector('script[type="text/plain"]').innerHTML
        })
      }
    }
  }
  // set hash
  for (const btnOpenFull of container.querySelectorAll('.btn-open-full')) {
    btnOpenFull.addEventListener('click', e => {
      e.preventDefault()
      scrollCache = document.scrollingElement.scrollTop
      location.hash = container.querySelector('.gatsby_demo_item.active').getAttribute('id')
      cancelAnimationFrame(Xt.dataStorage.get(document, 'gatsby_open-full-raf'))
    })
  }
  // get hash
  if (location.hash) {
    const item = document.querySelector('[id="' + kebabCase(location.hash) + '"]')
    if (item) {
      const demo = item.closest('.gatsby_demo')
      demo.querySelector('.btn-open-full').classList.add('active')
      item.classList.add('active')
    }
  }
  // gatsby_demo_tabs_left
  const self = new Xt.Toggle(container, {
    elements: '.gatsby_demo_tabs_left .btn',
    targets: '.gatsby_demo_item',
    min: 1,
    instant: true,
  })
  for (const item of items) {
    // @FIX demo fullscreen
    item.addEventListener('on.xt', () => {
      if (!self.initial) {
        // triggering e.detail.container
        requestAnimationFrame(() => {
          dispatchEvent(new CustomEvent('resize', { detail: { force: true, container: item.querySelector('.gatsby_demo_source'), delay: 0 } }))
        })
      }
      // only if demo opened
      if (document.querySelector('#gatsby_open-full-trigger').classList.contains('active')) {
        // set hash
        location.hash = item.getAttribute('id')
        cancelAnimationFrame(Xt.dataStorage.get(document, 'gatsby_open-full-raf'))
      }
      // makeGatsbyWithIframe
      makeGatsbyWithIframe(item)
    })
  }
  // .btn-show-code
  const demoId = 'gatsby_demo_' + i
  container.setAttribute('id', demoId)
  new Xt.Toggle(container.querySelector('.btn-show-code'), {
    targets: '#' + demoId + ' .gatsby_demo_code',
    instant: true,
  })
  document.querySelector('#' + demoId + ' .gatsby_demo_code').addEventListener('on.xt', e => {
    e.target.closest('.gatsby_demo_item').classList.add('active-code')
  })
  document.querySelector('#' + demoId + ' .gatsby_demo_code').addEventListener('off.xt', e => {
    e.target.closest('.gatsby_demo_item').classList.remove('active-code')
  })
}

/**
 * makeGatsbyWithIframe
 */
const makeGatsbyWithIframe = item => {
  // btn-open-iframe
  const iframe = item.querySelector('iframe')
  const btn = item.closest('.gatsby_demo').querySelector('.btn-open-iframe')
  if (iframe) {
    btn.classList.add('gatsby_with-iframe')
    btn.setAttribute('href', iframe.getAttribute('data-src'))
  } else {
    btn.classList.remove('gatsby_with-iframe')
  }
}

/**
 * makeFullscreen
 */

const makeFullscreen = (container, initial = false) => {
  const toggle = document.querySelector('#gatsby_open-full-trigger')
  const content = document.querySelector('#gatsby_open-full-content')
  // toggles
  const listingToggle = container.previousSibling
  if (listingToggle instanceof Element && listingToggle.getAttribute('data-gatsby-listing-toggle')) {
    listingToggle.classList.add('active')
  }
  // populate
  const items = container.querySelectorAll('.gatsby_demo_item.active')
  for (const item of items) {
    const sourceTo = item.querySelector('.gatsby_demo_source_populate')
    // populate source
    requestAnimationFrame(() => {
      // requestAnimationFrame fixes errors
      if (sourceTo && container.dataset.isFullscreenOnly) {
        sourceTo.innerHTML = item.querySelector('script[type="text/plain"]').innerHTML
      }
    })
  }
  toggle.dispatchEvent(new CustomEvent('on.trigger.xt'))
  toggle.addEventListener('init.xt', () => {
    toggle.dispatchEvent(new CustomEvent('on.trigger.xt'))
  })
  // move code block
  container.before(
    Xt.createElement('<div class="gatsby_demo xt-ignore" data-xt-origin="gatsby_open-full-content" style="height: ' + container.offsetHeight + 'px"></div>')
  )
  if (!container.dataset.isFullscreenOnly && !initial) {
    container.classList.add('xt-ignore', 'xt-ignore-once') // @FIX ignore once for mount when moving
  }
  content.append(container)
  // populate iframe
  for (const item of container.querySelectorAll('.gatsby_demo_item.active')) {
    if (item.getAttribute('data-iframe-fullscreen')) {
      item.setAttribute('data-iframe', item.getAttribute('data-iframe-fullscreen'))
      initializeIframe(container, item)
      item.dispatchEvent(new CustomEvent('ondone.xt'))
    }
  }
}

/**
 * Iframe
 */

const initializeIframe = (container, item) => {
  if (!item.classList.contains('populated-iframe')) {
    item.classList.add('populated-iframe')
    const src = '/' + item.getAttribute('data-iframe')
    const id = item.getAttribute('id')
    item.append(Xt.createElement('<div class="gatsby_demo_item_wrapper"><iframe data-src="' + src + '" name="' + id + '"></iframe></div>'))
    item.querySelector('.gatsby_demo_item_wrapper').append(
      Xt.createElement(`
          <div class="loader">
            <div class="spinner spinner-animated text-accent-500">
              ${spinner({})}
            </div>
          </div>`)
    )
    // load
    if (!item.dataset.iframeLoadEvents) {
      item.dataset.iframeLoadEvents = 'true'
      item.addEventListener('ondone.xt', () => {
        const iframe = item.querySelector('iframe')
        loadIframe(iframe)
      })
      item.addEventListener('offdone.xt', () => {
        const iframe = item.querySelector('iframe')
        item.classList.remove('loaded')
        unloadIframe(iframe)
      })
    }
  }
}

const loadIframe = iframe => {
  iframe.setAttribute('src', iframe.getAttribute('data-src'))
}

const unloadIframe = iframe => {
  iframe.removeAttribute('src')
}

if (typeof window !== 'undefined') {
  window.initIframe = (name, htmlSource, jsxSource, cssSource, jsSource) => {
    const src = 'iframe[name="' + name + '"]'
    const iframes = document.querySelectorAll(src)
    for (const iframe of iframes) {
      const item = iframe.closest('.gatsby_demo_item')
      populateIframe(item, iframe, htmlSource, jsxSource, cssSource, jsSource)
      item.classList.add('loaded')
    }
  }
  window.resizeIframe = name => {
    const src = 'iframe[name="' + name + '"]'
    const iframes = document.querySelectorAll(src)
    for (const iframe of iframes) {
      const container = iframe.closest('.gatsby_demo')
      const wrappers = container.querySelectorAll('.gatsby_demo_item.active .gatsby_demo_item_wrapper')
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

const populateIframe = (item, iframe, htmlSource, jsxSource, cssSource, jsSource) => {
  if (!item.classList.contains('populated')) {
    item.classList.add('populated')
    // inject code
    if (htmlSource) {
      item.append(Xt.createElement('<div class="gatsby_demo_source xt-ignore" data-lang="html">' + htmlSource + '</div>'))
    }
    if (jsxSource) {
      item.append(Xt.createElement('<div class="gatsby_demo_source xt-ignore" data-lang="jsx">' + jsxSource + '</div>'))
    }
    if (cssSource) {
      item.append(Xt.createElement('<div class="gatsby_demo_source xt-ignore" data-lang="css">' + cssSource + '</div>'))
    }
    if (jsSource) {
      item.append(Xt.createElement('<div class="gatsby_demo_source xt-ignore" data-lang="js">' + jsSource + '</div>'))
    }
    // populate
    const els = item.querySelectorAll('[data-lang]')
    for (const [z, el] of els.entries()) {
      populateSources(item, el, z)
      el.remove()
    }
    new Xt.Toggle(item.querySelector('.gatsby_demo_code_inner'), {
      elements: '.gatsby_demo_code_tabs_left .btn',
      targets: '.gatsby_demo_code_body_item',
      min: 1,
      instant: true,
    })
  }
}

/**
 * inline
 */

const populateInline = item => {
  if (!item.classList.contains('populated')) {
    item.classList.add('populated')
    const els = item.querySelectorAll('[data-lang]')
    for (const [z, el] of els.entries()) {
      populateSources(item, el, z)
      if (!item.classList.contains('gatsby_demo_preview')) {
        el.style.display = 'none'
      }
    }
    new Xt.Toggle(item.querySelector('.gatsby_demo_code_inner'), {
      elements: '.gatsby_demo_code_tabs_left .btn',
      targets: '.gatsby_demo_code_body_item',
      min: 1,
      instant: true,
    })
  }
}

/**
 * sources
 */

const populateSources = (item, element, z) => {
  let lang = element.getAttribute('data-lang')
  // set text
  if (lang === 'language-markup') {
    lang = 'html'
  } else if (lang === 'language-css') {
    lang = 'css'
  } else if (lang === 'language-js') {
    lang = 'js'
  } else if (lang === 'language-jsx') {
    lang = 'jsx'
  }
  // populate tabs
  item
    .querySelector('.gatsby_demo_code_body')
    .append(Xt.createElement('<div class="gatsby_demo_code_body_item toggle"><pre class="noedit"><code></code></pre></div>'))
  item.querySelector('.gatsby_demo_code_tabs_left').append(Xt.createElement('<button type="button" class="btn btn-tiny">' + lang + '</button>'))
  // format code
  const itemInside = item.querySelectorAll('.gatsby_demo_code_body .gatsby_demo_code_body_item')[z]
  const codeInside = itemInside.querySelector('pre code')
  // set text
  if (lang === 'html') {
    lang = 'language-markup'
  } else if (lang === 'css') {
    lang = 'language-css'
  } else if (lang === 'js') {
    lang = 'language-js'
  } else if (lang === 'jsx') {
    lang = 'language-jsx'
  }
  codeInside.innerHTML = formatCode(element)
  codeInside.classList.add(lang)
  Prism.highlightElement(codeInside)
}

export { populateBlock, populateDemo, makeFullscreen, demoHash }
