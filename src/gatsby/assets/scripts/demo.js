import Prism from 'prismjs'
import ClipboardJS from 'clipboard'
import { Xt } from 'xtendui'
import 'xtendui/src/core/toggle.js'
import kebabCase from 'lodash.kebabcase'

require('prismjs/plugins/unescaped-markup/prism-unescaped-markup')
require('prismjs/components/prism-jsx.min')
require('prismjs/components/prism-less.min')
Prism.manual = true

const classes = require('src/gatsby/components/snippets/classes').classes

/**
 * demoHash
 */

let scrollCache = 0
let hashReset = true
let firstMount = true

const scrollToItem = () => {
  const origin = document.querySelector('[data-xt-origin="gatsby_open-full-content"]')
  if (origin) {
    scrollCache = origin.offsetTop
    document.scrollingElement.scrollTo(0, scrollCache)
  }
}

const demoHash = () => {
  const demoFull = document.querySelector('#gatsby_open-full-trigger')
  // call offdone.xt
  if (demoFull) {
    hashReset = false
    // close demo full
    demoFull.dispatchEvent(new CustomEvent('off.trigger.xt.toggle'))
    // check hash
    if (location.hash) {
      const item = document.querySelector(`[id="${kebabCase(location.hash)}"]`)
      if (item) {
        const demo = item.closest('.gatsby_demo')
        if (demo) {
          makeFullscreen(demo)
          // scrollToItem
          scrollToItem()
          // trigger fullscreen or change tabs
          item.dispatchEvent(new CustomEvent('on.trigger.xt.toggle'))
        }
      }
    }
  }
}

addEventListener('hashchange', demoHash)

/**
 * formatCode
 */

const formatCode = (source, sourceCode) => {
  let text = source.innerHTML
  // ##START and ##END
  const metas = text.match(/[ ]*\/\*##START\*\/\n*([\S\s]*?)[ ]*\/\*##END\*\/\n*/g)
  if (metas) {
    text = ''
    for (const meta of metas.entries()) {
      text += meta[1]
    }
  }
  // remove ##
  text = text.replace(/\n*[ ]*\/\*##(.*)*/g, '')
  // replace id
  const item = source.closest('.gatsby_demo_item')
  if (item) {
    let id = item.getAttribute('data-iframe')
    if (id) {
      const names = id.split('/')
      id = `#iframe--${names[names.length - 1]}`
      text = text.replace(new RegExp(`[ ]{0,}${id}[ ]{0,}`, 'gi'), '')
    }
  }
  // clipboard
  Xt.dataStorage.set(
    sourceCode,
    'sourceCode',
    text
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&#x2F;/g, '/')
      .replace(/&amp;/g, '&')
  )
  // search html tags
  const re = /<[^>]*>/g
  text = text.replace(re, match => {
    // replace quote entities
    match = match.replace(/&quot;/g, '"')
    // replace entities
    match = match
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/\//g, '&#x2F;')
    // replace empty quotes
    match = match.replace(/=&quot;&quot;/g, '')
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
  firstMount = false
  // prism
  for (const el of document.querySelectorAll('script[type="text/plain"][class*="language-"]')) {
    const language = el.getAttribute('class')
    el.after(Xt.createElement(`<pre class="${language}"><code class="${language}">${el.innerHTML}</code></pre>`))
    el.remove()
  }
  for (const el of document.querySelectorAll('pre:not(.noedit) code')) {
    // set text
    el.innerHTML = formatCode(el, el)
    Prism.highlightElement(el)
  }
  // overlay fullscreen
  const full = document.querySelector('#gatsby_open-full')
  if (full) {
    for (const el of document.querySelectorAll('[data-gatsby-listing-toggle]')) {
      el.addEventListener('click', e => {
        e.preventDefault()
        // hash
        hashReset = false
        location.hash = el.nextSibling.querySelector('.gatsby_demo_item ').getAttribute('id')
      })
    }
    // trigger fullscreen or change tabs
    full.addEventListener('on.xt.toggle', () => {
      hashReset = true
      // @FIX demo fullscreen
      const content = document.querySelector('#gatsby_open-full-content')
      const current = content.querySelector('.gatsby_demo_item.in')
      // hidden tooltip
      const tooltip = document.querySelector('.button--open-full + .xt-tooltip')
      tooltip.classList.add('hidden')
      // triggering e.detail.container
      dispatchEvent(
        new CustomEvent('resize', {
          detail: {
            force: true,
            container: current,
            delay: 0,
          },
        })
      )
    })
    full.addEventListener('off.xt.toggle', e => {
      if (e.target === full) {
        const content = document.querySelector('#gatsby_open-full-content')
        const container = content.querySelector('.gatsby_demo')
        // scrollToItem
        scrollToItem()
        // populate iframe
        if (container) {
          for (const item of container.querySelectorAll('.gatsby_demo_item.in')) {
            // spinner
            item.classList.remove('loaded')
          }
        }
        // iframe
        if (container && container.dataset.isFullscreenOnly) {
          // populate iframe
          for (const item of container.querySelectorAll('.gatsby_demo_item.in')) {
            if (item.getAttribute('data-iframe-fullscreen')) {
              item.dispatchEvent(new CustomEvent('offdone.xt.toggle'))
            }
          }
          // populate source
          const sourceTo = content.querySelector('.gatsby_demo_source_populate')
          if (sourceTo) {
            sourceTo.innerHTML = ''
          }
        }
        // btnOpenFull
        for (const btn of document.querySelectorAll('.button--open-full.in')) {
          btn.classList.remove('in', 'in-tooltip')
        }
        // toggles
        const listingToggles = document.querySelectorAll('[data-gatsby-listing-toggle]')
        for (const el of listingToggles) {
          el.classList.remove('in', 'in-toggle')
        }
        // move code block
        const appendOrigin = document.querySelector('[data-xt-origin="gatsby_open-full-content"]')
        if (appendOrigin) {
          const moving = content.childNodes[0]
          moving.classList.add('xt-ignore', 'xt-ignore-once') // @FIX ignore once for mount when moving
          appendOrigin.before(moving)
          // @FIX demo fullscreen
          const previous = appendOrigin.previousSibling
          if (previous) {
            const current = appendOrigin.previousSibling.querySelector('.gatsby_demo_item.in')
            // triggering e.detail.container
            dispatchEvent(
              new CustomEvent('resize', {
                detail: {
                  force: true,
                  container: current,
                },
              })
            )
          }
          appendOrigin.remove()
        }
        // hidden tooltip
        const tooltip = document.querySelector('.button--open-full + .xt-tooltip')
        if (tooltip) {
          tooltip.classList.remove('hidden')
        }
        // no location.hash
        if (hashReset) {
          history.pushState({}, '', '#')
        }
        hashReset = true
      }
    })
  }
}

/**
 * populateDemo
 */

const populateDemo = container => {
  const items = container.querySelectorAll('.gatsby_demo_item')
  // fix demo index when changing page
  let i = parseFloat(document.documentElement.getAttribute('data-demo-index') || 0)
  i++
  document.documentElement.setAttribute('data-demo-index', i.toString())
  // multiple elements
  let initial = false
  if (!container.querySelector('.gatsby_demo_tabs')) {
    initial = true
    container.prepend(
      Xt.createElement(
        '<div class="gatsby_demo_tabs"><div class="gatsby_demo_tabs_left xt-list xt-list-1.5"></div><div class="gatsby_demo_tabs_right xt-list xt-list-1.5"></div></div>'
      )
    )
    const showCodeUid = Xt.getuniqueId()
    container.querySelector('.gatsby_demo_tabs_right').append(
      Xt.createElement(`
  <div data-xt-tooltip="{ targets: '#tooltip--show-code--on-${showCodeUid}, #tooltip--show-code--off-${showCodeUid}', position: 'bottom-end' }">
    <button type="button" class="xt-button button--show-code" aria-label="Toggle Code">
      ${classes.iconCode()}
    </button>
    <div id="tooltip--show-code--on-${showCodeUid}" class="xt-tooltip p-2 group" data-xt-duration="300">
      <div class="relative ${classes.tooltipSm()} rounded-md shadow-tooltip ${classes.cardBlack()} transform transition duration-300 opacity-0 translate-y-2 group-active:opacity-100 group-active:translate-y-0">
        Show Code
      </div>
    </div>
    <div id="tooltip--show-code--off-${showCodeUid}" style="display: none" class="xt-tooltip p-2 group" data-xt-duration="300">
      <div class="relative ${classes.tooltipSm()} rounded-md shadow-tooltip ${classes.cardBlack()} transform transition duration-300 opacity-0 translate-y-2 group-active:opacity-100 group-active:translate-y-0">
        Hide Code
      </div>
    </div>
  </div>`)
    )
    container.querySelector('.gatsby_demo_tabs_right').append(
      Xt.createElement(`
  <div class="button--open-full-container" data-xt-tooltip="{ position: 'bottom-end' }">
    <button type="button" class="xt-button button--open-full" aria-label="Toggle Fullscreen">
      ${classes.iconMaximize()}
    </button>
    <div class="xt-tooltip p-2 group" data-xt-duration="300">
      <div class="relative ${classes.tooltipSm()} rounded-md shadow-tooltip ${classes.cardBlack()} transform transition duration-300 opacity-0 translate-y-2 group-active:opacity-100 group-active:translate-y-0">
        Open Fullscreen
      </div>
    </div>
  </div>`)
    )
    container.querySelector('.gatsby_demo_tabs_right').append(
      Xt.createElement(`
  <div class="button--open-iframe-container" data-xt-tooltip="{ position: 'bottom-end' }">
    <a href="#" target="_blank" class="xt-button button--open-iframe" aria-label="Open Iframe">
      ${classes.iconExternal()}
    </a>
    <div class="xt-tooltip p-2 group" data-xt-duration="300">
      <div class="relative ${classes.tooltipSm()} rounded-md shadow-tooltip ${classes.cardBlack()} transform transition duration-300 opacity-0 translate-y-2 group-active:opacity-100 group-active:translate-y-0">
        Open Iframe
      </div>
    </div>
  </div>`)
    )
  }
  // loop items
  for (const [k, item] of items.entries()) {
    // populate tabs
    let name = k
    let id =
      item.getAttribute('data-id') || item.getAttribute('data-iframe') || item.getAttribute('data-iframe-fullscreen')
    name = id.split('/').pop().split('-').join(' ')
    id = id.split('/').join('-')
    item.setAttribute('id', kebabCase(id))
    if (initial) {
      container
        .querySelector('.gatsby_demo_tabs_left')
        .append(Xt.createElement(`<button type="button" class="xt-button">${name}</button>`))
    }
    // tabs
    const clipboardUid = Xt.getuniqueId()
    if (item.querySelector('.gatsby_demo_code')) {
      item.querySelector('.gatsby_demo_code').remove()
    }
    item.prepend(
      Xt.createElement(
        `
<div class="gatsby_demo_code">
  <div class="gatsby_demo_code_inner">
    <div class="gatsby_demo_code_tabs">
      <div class="gatsby_demo_code_tabs_left xt-list xt-list-1.5"></div>
      <div class="gatsby_demo_code_tabs_right xt-list xt-list-1.5">
        <div data-xt-tooltip="{ targets: '#tooltip--clipboard--on-${clipboardUid}, #tooltip--clipboard--off-${clipboardUid}', position: 'bottom-end' }">
          <button type="button" class="xt-button xt-button-clipboard" aria-label="Copy to Clipboard">
            ${classes.iconCopy()}
          </button>
          <div id="tooltip--clipboard--on-${clipboardUid}" class="xt-tooltip p-2 group" data-xt-duration="300">
            <div class="relative ${classes.tooltipSm()} rounded-md shadow-tooltip ${classes.cardBlack()} transform transition duration-300 opacity-0 translate-y-2 group-active:opacity-100 group-active:translate-y-0">
              Copy to Clipboard
            </div>
          </div>
          <div id="tooltip--clipboard--off-${clipboardUid}" style="display: none" class="xt-tooltip p-2 group" data-xt-duration="300">
            <div class="relative ${classes.tooltipSm()} rounded-md shadow-tooltip ${classes.cardBlack()} transform transition duration-300 opacity-0 translate-y-2 group-active:opacity-100 group-active:translate-y-0">
              Copied!
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="gatsby_demo_code_body"></div>
  </div>
</div>`
      )
    )
    // inject
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
      if (sourceTo.closest('.gatsby_listing-column')) {
        // populate source disable
        container.dataset.isFullscreenOnly = 'true'
      } else {
        const text = item.querySelector('script[type="text/plain"]')
        if (text) {
          sourceTo.innerHTML = text.innerHTML
        }
      }
    }
  }
  // set hash
  for (const btnOpenFull of container.querySelectorAll('.button--open-full')) {
    btnOpenFull.addEventListener('click', e => {
      e.preventDefault()
      scrollCache = document.scrollingElement.scrollTop
      // hash
      hashReset = false
      location.hash = container.querySelector('.gatsby_demo_item.in').getAttribute('id')
    })
  }
  // get hash
  if (location.hash) {
    const item = document.querySelector(`[id="${kebabCase(location.hash)}"]`)
    if (item) {
      const demo = item.closest('.gatsby_demo')
      demo.querySelector('.button--open-full').classList.add('in', 'in-toggle')
      item.classList.add('in', 'in-toggle')
    }
  }
  // gatsby_demo_tabs_left
  const self = new Xt.Toggle(container, {
    elements: '.gatsby_demo_tabs_left .xt-button',
    targets: '.gatsby_demo_item',
    min: 1,
  })
  for (const item of items) {
    // https://github.com/zenorocha/clipboard.js/
    const btnClipboard = item.querySelector('.xt-button-clipboard')
    if (!btnClipboard.dataset.clipboardDone) {
      btnClipboard.dataset.clipboardDone = 'true'
      const clipboard = new ClipboardJS(btnClipboard, {
        text: trigger => {
          const elSourceCode = trigger
            .closest('.gatsby_demo')
            .querySelector('.gatsby_demo_item.in .gatsby_demo_code .gatsby_demo_code_body_item.in pre code')
          return Xt.dataStorage.get(elSourceCode, 'sourceCode')
        },
      })
      clipboard.on('success', e => {
        if (!Xt.dataStorage.get(clipboard, 'ClipboardFrame') !== e.text) {
          Xt.dataStorage.set(clipboard, 'ClipboardFrame', e.text)
          e.clearSelection()
          // tooltip
          const btn = btnClipboard
          const tooltip = btn.closest('[data-xt-tooltip]')
          // close tooltip
          tooltip.dispatchEvent(
            new CustomEvent('off.trigger.xt.tooltip', {
              detail: { skip: true },
            })
          )
          // swap tooltip
          let self = Xt.get('xt-tooltip', tooltip)
          if (self) {
            self.targets[0].style.display = 'none'
            self.targets[1].style.display = 'block'
            // open tooltip
            tooltip.dispatchEvent(new CustomEvent('on.trigger.xt.tooltip'))
          }
        }
      })
      const tooltip = btnClipboard.closest('[data-xt-tooltip]')
      tooltip.addEventListener('off.xt.tooltip', e => {
        if (!e || !e.detail || !e.detail.skip) {
          // swap tooltip
          let self = Xt.get('xt-tooltip', tooltip)
          if (self) {
            self.targets[0].style.display = ''
            self.targets[1].style.display = 'none'
          }
        }
      })
    }
    // @FIX demo fullscreen
    item.addEventListener('on.xt.toggle', () => {
      if (!self.initial) {
        btnOpenIframe(item)
        // triggering e.detail.container
        dispatchEvent(
          new CustomEvent('resize', {
            detail: {
              force: true,
              container: item.querySelector('.gatsby_demo_source'),
              delay: 0,
            },
          })
        )
      }
      // only if demo opened
      if (document.querySelector('#gatsby_open-full-trigger').classList.contains('in-toggle')) {
        // hash
        hashReset = false
        location.hash = item.getAttribute('id')
      }
    })
  }
  // .button--show-code
  const demoId = `gatsby_demo_${i}`
  container.setAttribute('id', demoId)
  const btnCode = container.querySelector('.button--show-code')
  new Xt.Toggle(btnCode, {
    targets: `#${demoId} .gatsby_demo_code`,
    queue: false,
  })
  btnCode.addEventListener('click', function () {
    const btn = this
    const tooltip = btn.closest('[data-xt-tooltip]')
    // close tooltip
    tooltip.dispatchEvent(new CustomEvent('off.trigger.xt.tooltip'))
    // swap tooltip
    let self = Xt.get('xt-tooltip', tooltip)
    if (self) {
      if (btn.classList.contains('in')) {
        self.targets[0].style.display = 'none'
        self.targets[1].style.display = ''
      } else {
        self.targets[0].style.display = ''
        self.targets[1].style.display = 'none'
      }
      // open tooltip
      tooltip.dispatchEvent(new CustomEvent('on.trigger.xt.tooltip'))
    }
  })
}

/**
 * btnOpenIframe
 */
const btnOpenIframe = item => {
  const iframe = item.querySelector('iframe')
  const btn = item.closest('.gatsby_demo').querySelector('.button--open-iframe')
  if (iframe) {
    btn.closest('.button--open-iframe-container').classList.add('gatsby_with-iframe')
    btn.setAttribute('href', iframe.getAttribute('data-src'))
  } else {
    btn.closest('.button--open-iframe-container').classList.remove('gatsby_with-iframe')
  }
}

/**
 * makeFullscreen
 */

const makeFullscreen = container => {
  const toggle = document.querySelector('#gatsby_open-full-trigger')
  const content = document.querySelector('#gatsby_open-full-content')
  // toggles
  const listingToggle = container.previousSibling
  if (listingToggle instanceof Element && listingToggle.getAttribute('data-gatsby-listing-toggle')) {
    listingToggle.classList.add('in', 'in-toggle')
  }
  // populate
  const items = container.querySelectorAll('.gatsby_demo_item.in')
  for (const item of items) {
    // spinner
    item.classList.remove('loaded')
    // populate source
    const sourceTo = item.querySelector('.gatsby_demo_source_populate')
    if (sourceTo && container.dataset.isFullscreenOnly) {
      sourceTo.innerHTML = item.querySelector('script[type="text/plain"]').innerHTML
    }
  }
  // needs both or sometimes it doesn't open
  toggle.classList.add('in', 'in-toggle')
  requestAnimationFrame(() => {
    toggle.dispatchEvent(new CustomEvent('on.trigger.xt.toggle'))
  })
  // move code block
  container.before(
    Xt.createElement(
      `<div class="gatsby_demo xt-ignore" data-xt-origin="gatsby_open-full-content" style="height: ${container.offsetHeight}px"></div>`
    )
  )
  if (!firstMount) {
    // ignore once for mount when moving
    container.classList.add('xt-ignore', 'xt-ignore-once')
  }
  content.append(container)
  // raf after initialization
  requestAnimationFrame(() => {
    // populate iframe after initialization
    for (const item of container.querySelectorAll('.gatsby_demo_item.in')) {
      if (item.getAttribute('data-iframe-fullscreen')) {
        item.setAttribute('data-iframe', item.getAttribute('data-iframe-fullscreen'))
        initializeIframe(container, item)
        item.dispatchEvent(new CustomEvent('ondone.xt.toggle'))
      }
    }
  })
}

/**
 * Iframe
 */

const initializeIframe = (container, item) => {
  if (!item.classList.contains('populated-iframe')) {
    item.classList.add('populated-iframe')
    const src = `/${item.getAttribute('data-iframe')}`
    const id = item.getAttribute('id')
    item.append(
      Xt.createElement(`<div class="gatsby_demo_item_wrapper"><iframe data-src="${src}" name="${id}"></iframe></div>`)
    )
    item.querySelector('.gatsby_demo_item_wrapper').append(
      Xt.createElement(`
          <div class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
            <div class="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500">
              ${classes.spinner({ classes: 'animate-xt-spinner' })}
            </div>
          </div>`)
    )
    // load
    if (!item.dataset.iframeLoadEvents) {
      item.dataset.iframeLoadEvents = 'true'
      item.addEventListener('ondone.xt.toggle', () => {
        const iframe = item.querySelector('iframe')
        loadIframe(iframe)
        btnOpenIframe(item)
      })
      item.addEventListener('offdone.xt.toggle', () => {
        const iframe = item.querySelector('iframe')
        unloadIframe(iframe)
        // spinner
        item.classList.remove('loaded')
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

window.initIframe = (name, htmlSource, jsxSource, cssSource, jsSource) => {
  const src = `iframe[name="${name}"]`
  const iframes = document.querySelectorAll(src)
  for (const iframe of iframes) {
    const item = iframe.closest('.gatsby_demo_item')
    populateIframe(item, iframe, htmlSource, jsxSource, cssSource, jsSource)
    // spinner
    item.classList.add('loaded')
  }
}

/**
 * populate
 */

const source = async (item, el) => {
  const url = el.getAttribute('data-fetch')
  if (url) {
    const request = await fetch(url, {
      method: 'GET',
      headers: new Headers({ 'Content-Type': 'text/plain' }),
      mode: 'no-cors',
    })
    const response = await request
    const body = await response.text()
    if (response.ok && body.substring(0, 9) !== '<!DOCTYPE') {
      el.innerHTML = body
      populateSources(item, el)
    }
  } else {
    populateSources(item, el)
  }
}

const populateIframe = async (item, iframe, htmlSource, jsxSource, cssSource, jsSource) => {
  if (!item.classList.contains('populated')) {
    item.classList.add('populated')
    // inject code
    if (htmlSource) {
      item.append(Xt.createElement(`<div class="gatsby_demo_source xt-ignore" data-lang="html">${htmlSource}</div>`))
    }
    if (jsxSource) {
      item.append(
        Xt.createElement(`<div class="gatsby_demo_source xt-ignore" data-lang="jsx" data-fetch=${jsxSource}></div>`)
      )
    }
    if (cssSource) {
      item.append(
        Xt.createElement(`<div class="gatsby_demo_source xt-ignore" data-lang="css" data-fetch=${cssSource}></div>`)
      )
    }
    if (jsSource) {
      item.append(
        Xt.createElement(`<div class="gatsby_demo_source xt-ignore" data-lang="js" data-fetch=${jsSource}></div>`)
      )
    }
    // populate
    const els = item.querySelectorAll('[data-lang]')
    for (const el of els) {
      try {
        await source(item, el)
      } catch (ex) {
        console.error(ex)
      }
    }
    new Xt.Toggle(item.querySelector('.gatsby_demo_code_inner'), {
      elements: '.gatsby_demo_code_tabs_left .xt-button',
      targets: '.gatsby_demo_code_body_item',
      min: 1,
      queue: false,
    })
  }
}

const populateInline = async item => {
  if (!item.classList.contains('populated')) {
    item.classList.add('populated')
    const els = item.querySelectorAll('[data-lang]')
    for (const el of els) {
      try {
        await source(item, el)
      } catch (ex) {
        console.error(ex)
      }
    }
    new Xt.Toggle(item.querySelector('.gatsby_demo_code_inner'), {
      elements: '.gatsby_demo_code_tabs_left .xt-button',
      targets: '.gatsby_demo_code_body_item',
      min: 1,
      queue: false,
    })
  }
}

/**
 * sources
 */

const populateSources = (item, element) => {
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
    .append(Xt.createElement('<div class="gatsby_demo_code_body_item"><pre class="noedit"><code></code></pre></div>'))
  item
    .querySelector('.gatsby_demo_code_tabs_left')
    .append(Xt.createElement(`<button type="button" class="xt-button">${lang}</button>`))
  // format code
  const itemInside = item.querySelectorAll('.gatsby_demo_code_body .gatsby_demo_code_body_item')
  const codeInside = itemInside[itemInside.length - 1].querySelector('pre code')
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
  codeInside.innerHTML = formatCode(element, codeInside)
  codeInside.classList.add(lang)
  Prism.highlightElement(codeInside)
}

export { demoHash, populateBlock, populateDemo }
