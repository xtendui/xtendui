import Prism from 'prismjs'
import ClipboardJS from 'clipboard'
import { Xt } from 'xtend-library'
import kebabCase from 'lodash.kebabcase'

require('prismjs/plugins/unescaped-markup/prism-unescaped-markup')
require('prismjs/plugins/unescaped-markup/prism-unescaped-markup.css')
require('prismjs/components/prism-jsx.min')
require('prismjs/components/prism-less.min')
require('prism-themes/themes/prism-base16-ateliersulphurpool.light.css')
Prism.manual = true

/**
 * demoHash
 */

const demoHash = (e, skipIgnore = false) => {
  // call offdone.xt
  if (document.querySelector('#gatbsy_open-full-trigger')) {
    document.querySelector('#gatbsy_open-full-trigger').dispatchEvent(new CustomEvent('off.trigger.xt'))
    // set hash cancel
    cancelAnimationFrame(Xt.dataStorage.get(document, 'gatbsy_open-full-raf'))
    // check hash
    if (location.hash) {
      const item = document.querySelector('[id="' + kebabCase(location.hash) + '"]')
      if (item) {
        const demo = item.closest('.gatsby_demo')
        if (demo) {
          makeFullscreen(demo, skipIgnore)
        }
        // trigger fullscreen or change tabs
        item.dispatchEvent(new CustomEvent('on.trigger.xt'))
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
  // search html tags
  var re = /<[^>]*>/g
  text = text.replace(re, (match, g1, g2) => {
    // replace quote entities
    match = match.replace(/&quot;/g, '"')
    // replace entities
    match = match
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
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
  for (const el of document.querySelectorAll('[data-gatsby-listing-toggle]')) {
    el.addEventListener('click', e => {
      e.preventDefault()
      location.hash = el.nextSibling.querySelector('.gatsby_demo_item ').getAttribute('id')
      cancelAnimationFrame(Xt.dataStorage.get(document, 'gatbsy_open-full-raf'))
    })
  }
  document.querySelector('#gatbsy_open-full').addEventListener('off.xt', e => {
    const content = document.querySelector('#gatbsy_open-full-content')
    // iframe
    const container = content.querySelector('.gatsby_demo')
    if (container.dataset.isFullscreenOnly) {
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
    const appendOrigin = document.querySelector('[data-xt-origin="gatbsy_open-full-content"]')
    const moving = content.childNodes[0]
    moving.classList.add('xt-ignore', 'xt-ignore-once') // @FIX ignore once for mount when moving
    appendOrigin.before(moving)
    // @FIX demo fullscreen
    const current = appendOrigin.previousSibling.querySelector('.gatsby_demo_item.active')
    // triggering e.detail.container
    dispatchEvent(new CustomEvent('resize', { detail: { force: true, container: current } }))
    appendOrigin.remove()
    // set hash
    cancelAnimationFrame(Xt.dataStorage.get(document, 'gatbsy_open-full-raf'))
    Xt.dataStorage.set(
      document,
      'gatbsy_open-full-raf',
      requestAnimationFrame(() => {
        // no location.hash or page scroll to top
        history.pushState({}, '', '#')
      })
    )
  })
  // trigger fullscreen or change tabs
  document.querySelector('#gatbsy_open-full').addEventListener('on.xt', e => {
    // @FIX demo fullscreen
    const content = document.querySelector('#gatbsy_open-full-content')
    const current = content.querySelector('.gatsby_demo_item.active')
    // triggering e.detail.container
    dispatchEvent(new CustomEvent('resize', { detail: { force: true, container: current } }))
  })
}

/**
 * populateDemo
 */

const populateDemo = (container, i) => {
  const items = container.querySelectorAll('.gatsby_demo_item')
  // multiple elements
  container.prepend(Xt.createElement('<div class="gatsby_demo_tabs"><div class="gatsby_demo_tabs_left"></div><div class="gatsby_demo_tabs_right"></div></div>'))
  container
    .querySelector('.gatsby_demo_tabs_right')
    .append(
      Xt.createElement(
        '<button type="button" class="btn btn-text btn-tiny btn-prev-demo" aria-label="Previous"><span class="icon-arrow-left icon-large"></span></button>'
      )
    )
  container
    .querySelector('.gatsby_demo_tabs_right')
    .append(
      Xt.createElement(
        '<button type="button" class="btn btn-text btn-tiny btn-next-demo" aria-label="Next"><span class="icon-arrow-right icon-large"></span></button>'
      )
    )
  container
    .querySelector('.gatsby_demo_tabs_right')
    .append(
      Xt.createElement(
        '<button type="button" class="btn btn-text btn-tiny btn-show-code" aria-label="Toggle Code"><span class="icon-code icon-large"></span></button>'
      )
    )
  container
    .querySelector('.gatsby_demo_tabs_right')
    .append(
      Xt.createElement(
        '<button type="button" class="btn btn-text btn-tiny btn-open-full" aria-label="Toggle Fullscreen"><span class="icon-maximize icon-large"></span></button>'
      )
    )
  // loop items
  for (const [k, item] of items.entries()) {
    // populate tabs
    let name = item.getAttribute('data-iframe') || item.getAttribute('data-iframe-fullscreen')
    if (name) {
      name = name
        .split('/')
        .pop()
        .split('-')
        .join(' ')
    }
    name = item.getAttribute('data-name') ? item.getAttribute('data-name') : name
    if (!name) {
      name = k
    }
    item.setAttribute('id', 'demo-' + kebabCase(name))
    container.querySelector('.gatsby_demo_tabs_left').append(Xt.createElement('<button type="button" class="btn btn-text btn-tiny">' + name + '</button>'))
    // tabs
    item.prepend(
      Xt.createElement(
        '<div class="gatsby_demo_code"><div class="gatsby_demo_code_inner"><div class="gatsby_demo_code_tabs"><div class="gatsby_demo_code_tabs_left"></div><div class="gatsby_demo_code_tabs_right"><button type="button" class="btn btn-text btn-tiny btn-clipboard" data-toggle="tooltip" data-placement="top" title="Copy to clipboard">copy</button></div></div><div class="gatsby_demo_code_body"></div></div></div>'
      )
    )
    // https://github.com/zenorocha/clipboard.js/
    const clipboard = new ClipboardJS('.btn-clipboard', {
      target: trigger => {
        return trigger.closest('.gatsby_demo').querySelector('.gatsby_demo_item.active .gatsby_demo_code.active .gatsby_demo_code_body_item.active pre code')
      },
    })
    clipboard.on('success', e => {
      e.clearSelection()
      // $(e.trigger).attr('data-original-title', 'Done').tooltip('show')
    })
    clipboard.on('error', e => {
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
        container.dataset.isFullscreenOnly = 'true'
      } else {
        requestAnimationFrame(() => {
          // @FIX multiple initializations
          sourceTo.innerHTML = item.querySelector('script[type="text/plain"]').innerHTML
          // .gatsby_demo-cols
          if (sourceTo.classList.contains('gatsby_demo-cols')) {
            for (const [i, el] of sourceTo.querySelectorAll("[class^='col-'], [class*=' col-'], [class^='demo--col-'], [class*=' demo--col-']").entries()) {
              el.setAttribute('data-index', i.toString())
            }
          }
          if (sourceTo.classList.contains('gatsby_demo-cols-nested')) {
            for (const [i, el] of sourceTo.querySelectorAll("[class^='col-'], [class*=' col-'], [class^='demo--col-'], [class*=' demo--col-']").entries()) {
              el.setAttribute('data-index', i.toString())
            }
          }
        })
      }
    }
  }
  // set hash
  for (const btnOpenFull of container.querySelectorAll('.btn-open-full')) {
    btnOpenFull.addEventListener('click', () => {
      location.hash = container.querySelector('.gatsby_demo_item.active').getAttribute('id')
      cancelAnimationFrame(Xt.dataStorage.get(document, 'gatbsy_open-full-raf'))
    })
  }
  // get hash
  if (location.hash) {
    const item = document.querySelector('[id="' + kebabCase(location.hash) + '"]')
    if (item) {
      const demo = item.closest('.gatsby_demo')
      demo.querySelector('.btn-open-full').classList.add('active')
      item.classList.add('active')
      const top = demo.offsetTop
      if (top !== 0) {
        document.scrollingElement.scrollTo(0, demo.offsetTop)
      }
    }
  }
  // gatsby_demo_tabs_left
  const self = new Xt.Toggle(container, {
    elements: '.gatsby_demo_tabs_left .btn',
    targets: '.gatsby_demo_item',
    min: 1,
  })
  for (const item of items) {
    // @FIX demo fullscreen
    item.addEventListener('on.xt', e => {
      if (!self.initial) {
        // triggering e.detail.container
        requestAnimationFrame(() => {
          dispatchEvent(new CustomEvent('resize', { detail: { force: true, container: item.querySelector('.gatsby_demo_source') } }))
        })
      }
      // only if demo opened
      if (document.querySelector('#gatbsy_open-full-trigger').classList.contains('active')) {
        // set hash
        location.hash = item.getAttribute('id')
        cancelAnimationFrame(Xt.dataStorage.get(document, 'gatbsy_open-full-raf'))
      }
    })
  }
  // .btn-show-code
  const demoId = 'gatsby_demo_' + i
  container.setAttribute('id', demoId)
  new Xt.Toggle(container.querySelector('.btn-show-code'), {
    targets: '#' + demoId + ' .gatsby_demo_code',
  })
  document.querySelector('#' + demoId + ' .gatsby_demo_code').addEventListener('on.xt', e => {
    e.target.closest('.gatsby_demo_item').classList.add('active-code')
  })
  document.querySelector('#' + demoId + ' .gatsby_demo_code').addEventListener('off.xt', e => {
    e.target.closest('.gatsby_demo_item').classList.remove('active-code')
  })
  // hide navigation if not needed
  let count
  const demos = document.querySelectorAll('.gatsby_demo')
  const listingToggles = document.querySelectorAll('[data-gatsby-listing-toggle]')
  if (!listingToggles.length) {
    count = document.querySelectorAll('.gatsby_demo').length
  } else {
    count = listingToggles.length
  }
  if (count < 2) {
    container.querySelector('.btn-prev-demo').classList.add('display-none')
    container.querySelector('.btn-next-demo').classList.add('display-none')
  }
  // .btn-prev-demo
  container.querySelector('.btn-prev-demo').addEventListener('click', e => {
    const element = e.currentTarget
    const self = Xt.get('xt-toggle', container)
    if (self.currentIndex > 0) {
      self.goToPrev()
    } else {
      if (!listingToggles.length) {
        for (let i = 0; i < demos.length; i++) {
          if (demos[i].contains(element)) {
            let prev = i - 1
            prev = prev >= 0 ? prev : demos.length - 1
            let currentOffset
            let prevOffset = demos[prev].offsetTop
            if (document.querySelector('#gatbsy_open-full-trigger').classList.contains('active')) {
              currentOffset = document.querySelector('[data-xt-origin="gatbsy_open-full-content"]').offsetTop
              location.hash = demos[prev].querySelector('.gatsby_demo_item.active').getAttribute('id')
              cancelAnimationFrame(Xt.dataStorage.get(document, 'gatbsy_open-full-raf'))
            } else {
              currentOffset = element.closest('.gatsby_demo').offsetTop
            }
            document.scrollingElement.scrollTo(0, document.scrollingElement.scrollTop - currentOffset + prevOffset)
            // activate demo last
            const s = Xt.get('xt-toggle', demos[prev])
            s.goToNum(-1)
          }
        }
      } else {
        for (let i = 0; i < listingToggles.length; i++) {
          if (listingToggles[i].classList.contains('active')) {
            let prev = i - 1
            prev = prev >= 0 ? prev : listingToggles.length - 1
            location.hash = listingToggles[prev].parentNode.querySelector('.gatsby_demo .gatsby_demo_item.active').getAttribute('id')
            cancelAnimationFrame(Xt.dataStorage.get(document, 'gatbsy_open-full-raf'))
            break
          }
        }
      }
    }
  })
  // .btn-next-demo
  container.querySelector('.btn-next-demo').addEventListener('click', e => {
    const element = e.currentTarget
    const self = Xt.get('xt-toggle', container)
    if (self.currentIndex < self.getGroups().length - 1) {
      self.goToNext()
    } else {
      if (!listingToggles.length) {
        for (let i = 0; i < demos.length; i++) {
          if (demos[i].contains(element)) {
            let next = i + 1
            next = next < demos.length ? next : 0
            let currentOffset
            let nextOffset = demos[next].offsetTop
            if (document.querySelector('#gatbsy_open-full-trigger').classList.contains('active')) {
              currentOffset = document.querySelector('[data-xt-origin="gatbsy_open-full-content"]').offsetTop
              location.hash = demos[next].querySelector('.gatsby_demo_item.active').getAttribute('id')
              cancelAnimationFrame(Xt.dataStorage.get(document, 'gatbsy_open-full-raf'))
            } else {
              currentOffset = element.closest('.gatsby_demo').offsetTop
            }
            document.scrollingElement.scrollTo(0, document.scrollingElement.scrollTop - currentOffset + nextOffset)
            // activate demo first
            const s = Xt.get('xt-toggle', demos[next])
            s.goToNum(0)
          }
        }
      } else {
        for (let i = 0; i < listingToggles.length; i++) {
          if (listingToggles[i].classList.contains('active')) {
            let next = i + 1
            next = next < listingToggles.length ? next : 0
            location.hash = listingToggles[next].parentNode.querySelector('.gatsby_demo .gatsby_demo_item.active').getAttribute('id')
            cancelAnimationFrame(Xt.dataStorage.get(document, 'gatbsy_open-full-raf'))
            break
          }
        }
      }
    }
  })
}

/**
 * makeFullscreen
 */

const makeFullscreen = (container, skipIgnore = false) => {
  const toggle = document.querySelector('#gatbsy_open-full-trigger')
  const content = document.querySelector('#gatbsy_open-full-content')
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
  toggle.addEventListener('init.xt', e => {
    toggle.dispatchEvent(new CustomEvent('on.trigger.xt'))
  })
  // move code block
  container.before(
    Xt.createElement('<div class="gatsby_demo xt-ignore" data-xt-origin="gatbsy_open-full-content" style="height: ' + container.offsetHeight + 'px"></div>')
  )
  if (!container.dataset.isFullscreenOnly && !skipIgnore) {
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
    container.dataset.isFullscreenOnly = 'true'
    item.classList.add('populated-iframe')
    const src = '/' + item.getAttribute('data-iframe')
    const id = item.getAttribute('id')
    item.append(Xt.createElement('<div class="gatsby_demo_item_wrapper"><iframe data-src="' + src + '" name="' + id + '"></iframe></div>'))
    item
      .querySelector('.gatsby_demo_item_wrapper')
      .append(
        Xt.createElement(
          '\n' +
            '    <div class="loader loader-spinner">\n' +
            '      <div class="spinner">\n' +
            '        <svg viewBox="0 0 250 250"><circle cx="120" cy="120" r="100" stroke-dasharray="628" stroke-dashoffset="628" pathLength="628"></circle></svg><svg viewBox="0 0 250 250" preserveAspectRatio="xMinYMin meet"><circle cx="120" cy="120" r="100" stroke-dasharray="628" stroke-dashoffset="628" pathLength="628"></circle></svg>\n' +
            '      </div>\n' +
            '    </div>\n' +
            '  </div>'
        )
      )
    // load
    if (!item.dataset.iframeLoadEvents) {
      item.dataset.iframeLoadEvents = 'true'
      item.addEventListener('ondone.xt', e => {
        if (!item.dataset.iframeLoadCall) {
          item.dataset.iframeLoadCall = 'true'
          const iframe = item.querySelector('iframe')
          loadIframe(iframe)
        }
      })
      item.addEventListener('offdone.xt', e => {
        if (item.dataset.iframeLoadCall) {
          delete item.dataset.iframeLoadCall
          const iframe = item.querySelector('iframe')
          item.classList.remove('loaded')
          unloadIframe(iframe)
        }
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
      item.append(Xt.createElement('<div class="gatsby_demo_source xt-ignore" data-lang="less">' + cssSource + '</div>'))
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
  } else if (lang === 'language-less') {
    lang = 'less'
  } else if (lang === 'language-js') {
    lang = 'js'
  } else if (lang === 'language-jsx') {
    lang = 'jsx'
  }
  // populate tabs
  item.querySelector('.gatsby_demo_code_body').append(Xt.createElement('<div class="gatsby_demo_code_body_item"><pre class="noedit"><code></code></pre></div>'))
  item.querySelector('.gatsby_demo_code_tabs_left').append(Xt.createElement('<button type="button" class="btn btn-text btn-tiny">' + lang + '</button>'))
  // format code
  const itemInside = item.querySelectorAll('.gatsby_demo_code_body .gatsby_demo_code_body_item')[z]
  const codeInside = itemInside.querySelector('pre code')
  // set text
  if (lang === 'html') {
    lang = 'language-markup'
  } else if (lang === 'less') {
    lang = 'language-less'
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
