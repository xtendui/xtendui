import { Xt } from 'xtendui'
import Prism from 'prismjs'
import ClipboardJS from 'clipboard'
import _ from 'lodash'
import 'xtendui/src/toggle.js'
import 'xtendui/src/tooltip.js'

require('prismjs/plugins/unescaped-markup/prism-unescaped-markup')
require('prismjs/components/prism-jsx.min')
require('prismjs/components/prism-less.min')
Prism.manual = true

const classes = require('src/gatsby/templates/snippets/classes').classes

/**
 * demoHash
 */

const demoHash = () => {
  const full = document.querySelector('#gatsby_open-full')
  if (full) {
    if (location.hash) {
      // if hash activate demo from hash
      const item = document.querySelector(`[id="${_.kebabCase(location.hash)}"]`)
      if (item) {
        // demo
        const demo = item.closest('.gatsby_demo')
        if (demo) {
          // trigger fullscreen or change tabs
          item.dispatchEvent(new CustomEvent('on.trigger.xt.toggle'))
          // only if not full opened
          if (!item.closest('#gatsby_open-full-content')) {
            // makeFullscreen
            makeFullscreen(demo, item)
          }
        }
      }
    } else {
      // close demo full if no hash
      full.dispatchEvent(new CustomEvent('off.trigger.xt.overlay'))
    }
  }
}

Xt.ready({
  func: () => {
    // use demoHashChange instead of hashchange we control when page changes with no hash
    addEventListener('demoHashChange', demoHash)
  },
})

/**
 * highlightCode
 */

const highlightCode = (pre, element, language, isReactRename = false) => {
  const code = pre.querySelector('code')
  let text = element.innerHTML
  language = language ?? element.getAttribute('class') ?? 'language-sh'
  if (language === 'language-html') {
    language = 'html'
  } else if (language === 'language-css') {
    language = 'css'
  } else if (language === 'language-js') {
    language = 'js'
  } else if (language === 'language-jsx') {
    language = 'jsx'
  }
  // css refs
  if (isReactRename) {
    text = text.replace(/\.demo--(.*?), /, '')
  } else {
    text = text.replace(/, \.demo--(.*?)-react/, '')
  }
  // replace entities
  text = text
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x2F;/g, '/')
    .replace(/&amp;/g, '&')
  // remove tabs
  const arr = text.split('\n')
  let search
  for (const notEmpty of arr) {
    if (notEmpty !== '') {
      search = notEmpty
      break
    }
  }
  search = search && search.length ? search : arr[1]
  if (search) {
    const toRemove = search.search(/\S/g)
    for (const i of arr.keys()) {
      arr[i] = arr[i].substring(toRemove)
    }
    text = arr.join('\n')
  }
  // remove newline at start and end
  text = text.replace(/^\s+|\s+$/g, '')
  // highlight
  let highlighted = Prism.highlight(text, Prism.languages[language] ?? false, language)
  highlighted = highlighted.replace(
    /<span class="token comment">\/\*\*\*\/<\/span>\n*\s*([\s\S\r]*?)\n*\s*<span class="token comment">\/\*\*\*\/.*?>/g,
    (_, str) => `<span class="code-highlight bg-code-highlight">${str}</span>`
  ) // js
  highlighted = highlighted.replace(
    /\/?\*\*\*\/?\s?(.*?)\s?\/?\*\*\*\/?/g,
    (_, str) => `<span class="code-highlight bg-code-highlight">${str}</span>`
  ) // html and json
  highlighted = highlighted.replace(
    /('?\.?#?demo--.*?)</g,
    (_, str) => `<span class="code-highlight bg-code-highlight">${str}</span><`
  ) // demo--
  highlighted = highlighted.replace(
    /(<span class="token attr-name">data-xt-.*?<\/span>)/g,
    (_, str) => `<span class="code-highlight bg-code-highlight">${str}</span>`
  ) // data-xt-
  highlighted = highlighted.replace(
    /(<span class="token attr-name">data-node-.*?<\/span>)/g,
    (_, str) => `<span class="code-highlight bg-code-highlight">${str}</span>`
  ) // data-node-
  code.innerHTML = highlighted
  // clipboard
  text = text.replace(/\/?\*\*\*\/?\n*\s*([\s\S\r]*?)\n*\s*\/?\*\*\*\/?/g, (_, str) => str) // remove highlight syntax
  Xt.dataStorage.set(pre, 'sourceCode', text)
  // set language
  if (language === 'html') {
    language = 'language-html'
  } else if (language === 'css') {
    language = 'language-css'
  } else if (language === 'js') {
    language = 'language-js'
  } else if (language === 'jsx') {
    language = 'language-jsx'
  }
  pre.classList.add(language)
  code.classList.add(language)
}

/**
 * populateBlock
 */

export const populateBlock = () => {
  // prism
  for (const el of document.querySelectorAll('script[type="text/plain"][class*="language-"]')) {
    const language = el.getAttribute('class')
    el.after(
      Xt.node({
        str: `<pre class="${language}"><code class="${language}">${el.innerHTML}</code></pre>`,
      })
    )
    el.remove()
  }
  for (const pre of document.querySelectorAll('pre:not(.noedit)')) {
    // highlightCode
    const code = pre.querySelector('code')
    highlightCode(pre, code)
  }
  // overlay fullscreen
  const full = document.querySelector('#gatsby_open-full')
  if (full) {
    for (const el of document.querySelectorAll('[data-gatsby-listing-toggle]')) {
      el.addEventListener('click', e => {
        e.preventDefault()
        // hash
        location.hash = el.nextSibling.querySelector('.gatsby_demo_item').getAttribute('id')
      })
    }
    full.addEventListener('off.xt.overlay', e => {
      // useCapture event propagation check
      if (e.target === full) {
        const content = document.querySelector('#gatsby_open-full-content')
        if (content) {
          const container = content.querySelector('.gatsby_demo')
          // hidden tooltip
          const tooltip = document.querySelector('.button--open-full + .xt-tooltip')
          if (tooltip) {
            tooltip.classList.remove('hidden')
          }
          // populate iframe
          if (container) {
            for (const item of container.querySelectorAll('.gatsby_demo_item.on')) {
              // spinner
              item.classList.remove('loaded')
            }
          }
          // iframe
          if (container && container.dataset.isFullscreenOnly) {
            // populate iframe
            for (const item of container.querySelectorAll('.gatsby_demo_item.on')) {
              if (item.getAttribute('data-iframe-fullscreen')) {
                item.dispatchEvent(new CustomEvent('off.xt.toggle'))
              }
            }
          }
          // btnOpenFull
          for (const btn of document.querySelectorAll('.button--open-full.on')) {
            btn.classList.remove('on')
          }
          // toggles
          const listingToggles = document.querySelectorAll('[data-gatsby-listing-toggle]')
          for (const el of listingToggles) {
            el.classList.remove('on')
          }
          // empty demo
          demoEmpty({ reset: true })
        }
      }
    })
  }
}

/**
 * populateDemo
 */

export const populateDemo = container => {
  if (container.dataset.gatsbyDemoBuilt) return
  const inner = container.querySelector('.gatsby_demo_inner')
  const items = container.querySelectorAll('.gatsby_demo_item')
  // fix demo index when changing page
  let i = parseFloat(document.documentElement.getAttribute('data-demo-index') ?? 0)
  i++
  document.documentElement.setAttribute('data-demo-index', i.toString())
  // multiple elements
  inner.prepend(
    Xt.node({
      str: '<div class="gatsby_demo_tabs bg-gray-100"><div class="gatsby_demo_tabs_left xt-list xt-list-1.5"></div><div class="gatsby_demo_tabs_right xt-list xt-list-1.5"></div></div>',
    })
  )
  container.querySelector('.gatsby_demo_tabs_right').append(
    Xt.node({
      str: `
<div>
  <button type="button" class="xt-button button--show-code ${classes.buttonCode()}" aria-label="Toggle Code" data-xt-tooltip-element data-xt-group="all">
    ${classes.iconCode()}
  </button>
  <div class="xt-tooltip xt-tooltip--gatsby p-2 group" data-xt-tooltip-target data-xt-group="all">
    <div class="xt-card ${classes.tooltipSm()} rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()} transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0">
      Show Code
    </div>
  </div>
  <div class="xt-tooltip xt-tooltip--gatsby p-2 group hidden" data-xt-tooltip-target data-xt-group="all">
    <div class="xt-card ${classes.tooltipSm()} rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()} transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0">
      Hide Code
    </div>
  </div>
</div>`,
    })
  )
  container.querySelector('.gatsby_demo_tabs_right').append(
    Xt.node({
      str: `
<div class="button--open-full-container" data-xt-tooltip="{ position: 'bottom-end', duration: 300 }">
  <button type="button" class="xt-button button--open-full ${classes.buttonCode()}" aria-label="Toggle Fullscreen" data-xt-tooltip-element>
    ${classes.iconMaximize()}
  </button>
  <div class="xt-tooltip xt-tooltip--gatsby p-2 group"
  data-xt-tooltip-target>
    <div class="xt-card ${classes.tooltipSm()} rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()} transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0">
      Open Fullscreen
    </div>
  </div>
</div>`,
    })
  )
  container.querySelector('.gatsby_demo_tabs_right').append(
    Xt.node({
      sanitize: false,
      str: `
<div class="button--open-iframe-container" data-xt-tooltip="{ position: 'bottom-end', duration: 300 }">
  <a href="/" target="_blank" class="xt-button button--open-iframe ${classes.buttonCode()}" aria-label="Open Iframe" data-xt-tooltip-element>
    ${classes.iconExternal()}
  </a>
  <div class="xt-tooltip xt-tooltip--gatsby p-2 group"
  data-xt-tooltip-target>
    <div class="xt-card ${classes.tooltipSm()} rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()} transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0">
      Open Iframe
    </div>
  </div>
</div>`,
    })
  )
  // loop items
  for (const [k, item] of items.entries()) {
    // populate tabs
    let name = k
    let id =
      item.getAttribute('data-id') || item.getAttribute('data-iframe') || item.getAttribute('data-iframe-fullscreen')
    name = id.split('/').pop().split('-').join(' ')
    id = id.split('/').join('-')
    item.setAttribute('id', _.kebabCase(id))
    container.querySelector('.gatsby_demo_tabs_left').append(
      Xt.node({
        str: `<button type="button" class="xt-button ${classes.textDefault()} ${classes.buttonCode()}">${name}</button>`,
      })
    )
    // if not iframe
    if (item.getAttribute('data-iframe')) {
      // if not themes
      if (!item.getAttribute('data-iframe-fullscreen')) {
        // populate
        initializeIframe(item)
      }
    }
  }
  // set hash
  for (const btnOpenFull of container.querySelectorAll('.button--open-full')) {
    btnOpenFull.addEventListener('click', e => {
      e.preventDefault()
      // hash
      location.hash = container.querySelector('.gatsby_demo_item.on').getAttribute('id')
    })
  }
  // get hash
  if (location.hash) {
    const item = container.querySelector(`[id="${_.kebabCase(location.hash)}"]`)
    if (item) {
      item.classList.add('on')
      demoHash()
    }
  }
  // gatsby_demo_tabs_left
  const self = new Xt.Toggle(container, {
    elements: '.gatsby_demo_tabs_left .xt-button',
    targets: '.gatsby_demo_item',
    min: 1,
  })
  for (const item of items) {
    item.addEventListener('on.xt.toggle', () => {
      // only if full opened
      if (item.closest('#gatsby_open-full-content')) {
        // triggering e.detail.container (e.g. slider wrap)
        dispatchEvent(
          new CustomEvent('resize', {
            detail: {
              force: true,
              container: item,
            },
          })
        )
      }
      if (!self.initial) {
        btnOpenIframe(item)
        // only if full opened
        if (item.closest('#gatsby_open-full-content')) {
          // hash and retain focus because on hashchange focus is automatically lost
          const activeElement = document.activeElement
          location.hash = item.getAttribute('id')
          activeElement.focus()
        }
      }
    })
  }
  // only one time
  container.dataset.gatsbyDemoBuilt = 'true'
}

/**
 * populateItem
 */

export const populateItem = item => {
  const container = item.closest('.gatsby_demo')
  // tabs
  if (item.querySelector('.gatsby_demo_code')) {
    item.querySelector('.gatsby_demo_code').remove()
  }
  item.prepend(
    Xt.node({
      str: `
<div class="gatsby_demo_code off:hidden out:pointer-events-none on:block in:block out:block" data-xt-group="all">
  <div class="gatsby_demo_code_inner">
    <div class="gatsby_demo_code_tabs bg-code">
      <div class="gatsby_demo_code_tabs_left !flex xt-list xt-list-1.5"></div>
      <div class="gatsby_demo_code_tabs_right xt-list xt-list-1.5">
        <div>
          <button type="button" class="xt-button button--clipboard ${classes.textInverse()} ${classes.buttonCodeWhite()}" aria-label="Copy to Clipboard" data-xt-tooltip-element data-xt-group="all">
            ${classes.iconCopy()}
          </button>
          <div class="xt-tooltip xt-tooltip--gatsby p-2 group" data-xt-tooltip-target data-xt-group="all">
            <div class="xt-card ${classes.tooltipSm()} rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()} transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0">
              Copy to Clipboard
            </div>
          </div>
          <div class="xt-tooltip xt-tooltip--gatsby p-2 group hidden" data-xt-tooltip-target data-xt-group="all">
            <div class="xt-card ${classes.tooltipSm()} rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()} transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0">
              Copied!
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="gatsby_demo_code_body bg-code"></div>
  </div>
</div>`,
    })
  )
  // https://github.com/zenorocha/clipboard.js/
  const btnClipboard = item.querySelector('.button--clipboard')
  if (!btnClipboard.dataset.clipboardDone) {
    btnClipboard.dataset.clipboardDone = 'true'
    const clipboard = new ClipboardJS(btnClipboard, {
      text: trigger => {
        const elSourceCode = trigger
          .closest('.gatsby_demo')
          .querySelector('.gatsby_demo_item.on .gatsby_demo_code .gatsby_demo_code_body_item.on pre')
        return Xt.dataStorage.get(elSourceCode, 'sourceCode')
      },
    })
    clipboard.on('success', e => {
      if (Xt.dataStorage.get(clipboard, 'ClipboardFrame') !== e.text) {
        Xt.dataStorage.set(clipboard, 'ClipboardFrame', e.text)
        e.clearSelection()
      }
    })
  }
  new Xt.Tooltip(btnClipboard.parentNode, {
    position: 'bottom-end',
    duration: 300,
  })
  swapClick({ ref: btnClipboard.parentNode })
  // populateTabs
  // need to reset or on iframe reload it doesn't reload code
  container.removeAttribute('data-code-fetched')
  // .button--show-code
  const btnCode = container.querySelector('.button--show-code')
  const inner = container.querySelector('.gatsby_demo_inner')
  let selfCode = Xt.get({ name: 'xt-toggle', el: inner })
  if (selfCode) {
    // needs save: false or useLayout inside demos is executed before mutation observer Xt._mountCheck({ added })
    selfCode.reinit({ save: false })
  } else {
    selfCode = new Xt.Toggle(inner, {
      elements: '.button--show-code',
      targets: `.gatsby_demo_code`,
      queue: false,
      a11y: false,
    })
    // populateTabs
    btnCode.addEventListener('on.xt.toggle', populateTabs.bind(container, { container }))
  }
  btnCode.addEventListener('on.xt.toggle', () => {
    const targetCode = selfCode.targets[0]
    if (targetCode) {
      targetCode.dispatchEvent(new CustomEvent('scrollto.trigger.xt.scrollto'))
    }
  })
  new Xt.Tooltip(btnCode.parentNode, {
    position: 'bottom-end',
    duration: 300,
  })
  swapToggle({ ref: btnCode.parentNode })
}

/**
 * swapClick
 */

const swapClick = ({ ref }) => {
  // vars

  const tooltip = ref
  const self = Xt.get({ name: 'xt-tooltip', el: tooltip })
  const element = self.elements[0]

  // swap

  const swapBack = () => {
    // swap tooltip
    self.targets[0].classList.remove('hidden')
    self.targets[1].classList.add('hidden')
  }

  const swap = () => {
    // swap
    self.targets[0].classList.add('hidden')
    self.targets[1].classList.remove('hidden')
    // open
    element.dispatchEvent(new CustomEvent('on.trigger.xt.tooltip'))
    // swap back
    element.addEventListener('offdone.xt.tooltip', swapBack, { once: true })
  }

  // resetTooltip: fix when swapping and moving away

  const resetTooltip = () => {
    // trigger our swap
    element.dispatchEvent(new CustomEvent('offdone.xt.tooltip'))
    // trigger tooltip deactivation
    element.dispatchEvent(new CustomEvent('off.trigger.xt.tooltip'))
  }

  element.addEventListener('mouseleave', resetTooltip)

  // click

  const click = () => {
    // swap
    element.addEventListener('offdone.xt.tooltip', swap, { once: true })
    element.dispatchEvent(new CustomEvent('off.trigger.xt.tooltip'))
  }

  element.addEventListener('click', click)
}

/**
 * swapToggle
 */

const swapToggle = ({ ref }) => {
  // vars

  const tooltip = ref
  const self = Xt.get({ name: 'xt-tooltip', el: tooltip })
  const element = self.elements[0]

  // swap

  const swapBack = () => {
    // swap tooltip
    self.targets[0].classList.remove('hidden')
    self.targets[1].classList.add('hidden')
    // open
    element.dispatchEvent(new CustomEvent('on.trigger.xt.tooltip'))
  }

  const swap = () => {
    // swap
    self.targets[0].classList.add('hidden')
    self.targets[1].classList.remove('hidden')
    // open
    element.dispatchEvent(new CustomEvent('on.trigger.xt.tooltip'))
  }

  // resetTooltip: fix when swapping and moving away

  const resetTooltip = () => {
    // trigger our swap
    element.dispatchEvent(new CustomEvent('offdone.xt.tooltip'))
    // trigger tooltip deactivation
    element.dispatchEvent(new CustomEvent('off.trigger.xt.tooltip'))
    // remove our listeners
    element.removeEventListener('offdone.xt.tooltip', swap)
    element.removeEventListener('offdone.xt.tooltip', swapBack)
  }

  element.addEventListener('mouseleave', resetTooltip)

  // on

  const on = () => {
    // swap
    element.addEventListener('offdone.xt.tooltip', swap, { once: true })
    element.dispatchEvent(new CustomEvent('off.trigger.xt.tooltip'))
  }

  element.addEventListener('on.xt.toggle', on)

  // off

  const off = () => {
    // swap back
    element.addEventListener('offdone.xt.tooltip', swapBack, { once: true })
    element.dispatchEvent(new CustomEvent('off.trigger.xt.tooltip'))
  }

  element.addEventListener('off.xt.toggle', off)
}

/**
 * btnOpenIframe
 */
const btnOpenIframe = item => {
  const iframe = item.querySelector('iframe')
  const btn = item.closest('.gatsby_demo').querySelector('.button--open-iframe')
  if (iframe) {
    btn.closest('.button--open-iframe-container').classList.add('gatsby_with-iframe')
    btn.setAttribute('href', Xt.sanitize(iframe.getAttribute('data-src')))
  } else {
    btn.closest('.button--open-iframe-container').classList.remove('gatsby_with-iframe')
  }
}

/**
 * makeFullscreen
 */

const makeFullscreen = (demo, item) => {
  // empty demo
  demoEmpty()
  // toggles
  const full = document.querySelector('#gatsby_open-full')
  requestAnimationFrame(() => {
    // raf or it doesn't open
    full.dispatchEvent(new CustomEvent('on.trigger.xt.overlay'))
  })
  const listingToggle = demo.previousSibling
  if (listingToggle instanceof Element && listingToggle.getAttribute('data-gatsby-listing-toggle')) {
    listingToggle.classList.add('on')
  }
  // move code block
  const content = document.querySelector('#gatsby_open-full-content')
  demo.before(
    Xt.node({
      str: `<div class="gatsby_demo xt-ignore" data-xt-origin="gatsby_open-full-content" style="height: ${demo.offsetHeight}px"></div>`,
    })
  )
  content.append(demo)
  // if themes
  if (item.getAttribute('data-iframe-fullscreen')) {
    // populate
    item.setAttribute('data-iframe', item.getAttribute('data-iframe-fullscreen'))
    initializeIframe(item)
    item.dispatchEvent(new CustomEvent('on.trigger.xt.toggle', { detail: { force: true } }))
  }
  // spinner
  item.classList.remove('loaded')
}

const demoEmpty = ({ reset = false } = {}) => {
  const content = document.querySelector('#gatsby_open-full-content')
  // move code block
  const appendOrigin = document.querySelector('[data-xt-origin="gatsby_open-full-content"]')
  if (appendOrigin) {
    // no location.hash
    if (reset && location.hash) {
      location.hash = ''
      // scrollto
      Xt.scrolltoHashforce = true
      appendOrigin.dispatchEvent(new CustomEvent('scrollto.trigger.xt.scrollto'))
    }
    // move back
    const moving = content.childNodes[0]
    appendOrigin.before(moving)
    // triggering e.detail.container
    dispatchEvent(
      new CustomEvent('resize', {
        detail: {
          force: true,
          container: moving,
        },
      })
    )
    // move back
    appendOrigin.remove()
  }
}

/**
 * Iframe
 */

const initializeIframe = item => {
  if (!item.classList.contains('populated-iframe')) {
    item.classList.add('populated-iframe')
    const src = `/${item.getAttribute('data-iframe')}`
    item.append(
      Xt.node({
        sanitize: false,
        str: `
        <div class="gatsby_demo_item_body">
          <div class="xt-loader absolute inset-0 rounded-inherit overflow-hidden">
            <div class="${classes.spinner()} w-6 h-6 text-primary-500">
              ${classes.svgSpinner({ classes: 'animate-xt-spinner' })}
            </div>
          </div>
          <iframe class="relative" title="Demo" data-src="${Xt.sanitize(src)}"></iframe>
        </div>`,
      })
    )
    // load
    item.addEventListener('on.xt.toggle', () => {
      const iframe = item.querySelector('iframe')
      loadIframe(iframe)
      btnOpenIframe(item)
    })
    item.addEventListener('off.xt.toggle', () => {
      const iframe = item.querySelector('iframe')
      unloadIframe(iframe)
      // spinner
      item.classList.remove('loaded')
    })
  }
}

const loadIframe = iframe => {
  iframe.setAttribute('src', Xt.sanitize(iframe.getAttribute('data-src')))
}

const unloadIframe = iframe => {
  iframe.removeAttribute('src')
}

window.initIframe = (src, htmlSource, jsxSource, cssSource, jsSource) => {
  const iframe = document.querySelector(`iframe[data-src="/${src}"]`)
  const item = iframe.closest('.gatsby_demo_item')
  // populate
  populateItem(item)
  populateIframe({ item, htmlSource, jsxSource, cssSource, jsSource })
  // spinner
  requestAnimationFrame(() => {
    item.classList.add('loaded')
  })
}

/**
 * switchClean
 */

window.switchClean = (item, src) => {
  item = item ?? document.querySelector(`iframe[data-src="/${src}"]`).closest('.gatsby_demo_item')
  // clean
  const code = item.querySelector('.gatsby_demo_code_body_item')
  if (code) {
    code.innerHTML = ''
  }
}

/**
 * populate
 */

const sourceAsync = async (item, el) => {
  const url = el.getAttribute('data-fetch')
  const version = document.querySelector('body').getAttribute('data-version')
  if (url) {
    const request = await fetch(`${url}?v=${version}`, {
      method: 'GET',
      headers: new Headers({ 'Content-Type': 'text/plain' }),
      mode: 'no-cors',
    })
    const response = await request
    const body = await response.text()
    if (response.ok && body.substring(0, 9) !== '<!DOCTYPE') {
      // do not if switched
      if (el.closest('html')) {
        el.innerHTML = body
        populateSources(item, el)
      }
    }
  } else {
    populateSources(item, el)
  }
}

const populateTabs = async ({ container } = {}) => {
  const mode = localStorage.getItem('mode')
  if (container.getAttribute('data-code-fetched') !== mode) {
    container.setAttribute('data-code-fetched', mode)
    for (const item of container.querySelectorAll('.gatsby_demo_item')) {
      // empty tabs
      const tabs = item.querySelector('.gatsby_demo_code_tabs_left')
      if (tabs) {
        tabs.innerHTML = ''
      }
      // populate tabs
      for (const el of item.querySelectorAll('[data-lang]')) {
        try {
          await sourceAsync(item, el)
        } catch (ex) {
          console.error(ex)
        }
      }
      // code toggle
      // with demo multiple iframe do this only when populated
      const codeInner = item.querySelector('.gatsby_demo_code_inner')
      if (codeInner) {
        new Xt.Toggle(codeInner, {
          elements: '.gatsby_demo_code_tabs_left .xt-button',
          targets: '.gatsby_demo_code_body_item',
          min: 1,
          queue: false,
        })
      }
    }
  }
}

const populateIframe = ({ item, htmlSource, jsxSource, cssSource, jsSource }) => {
  const inner = item.querySelector('.gatsby_demo_item_body')
  // clear
  const olds = inner.querySelectorAll('[data-lang]')
  for (const old of olds) {
    old.remove()
  }
  // inject code
  if (htmlSource) {
    inner.append(
      Xt.node({
        sanitize: false,
        str: `<script type="text/plain" class="gatsby_demo_source xt-ignore hidden" data-lang="html">${htmlSource}</script>`,
      })
    )
  }
  if (jsxSource) {
    inner.append(
      Xt.node({
        sanitize: false,
        str: `<script type="text/plain" class="gatsby_demo_source xt-ignore hidden" data-lang="jsx" data-fetch=${jsxSource}></script>`,
      })
    )
  }
  if (cssSource) {
    inner.append(
      Xt.node({
        sanitize: false,
        str: `<script type="text/plain" class="gatsby_demo_source xt-ignore hidden" data-lang="css" data-fetch=${cssSource}></script>`,
      })
    )
  }
  if (jsSource) {
    inner.append(
      Xt.node({
        sanitize: false,
        str: `<script type="text/plain" class="gatsby_demo_source xt-ignore hidden" data-lang="js" data-fetch=${jsSource}></script>`,
      })
    )
  }
}

/**
 * sources
 */

const populateSources = (item, element) => {
  let lang = element.getAttribute('data-lang')
  // set text
  if (lang === 'language-html') {
    lang = 'html'
  } else if (lang === 'language-css') {
    lang = 'css'
  } else if (lang === 'language-js') {
    lang = 'js'
  } else if (lang === 'language-jsx') {
    lang = 'jsx'
  }
  // populate tabs
  const tabs = item.querySelector('.gatsby_demo_code_tabs_left')
  item
    .querySelector('.gatsby_demo_code_body')
    .append(Xt.node({ str: '<div class="gatsby_demo_code_body_item"><pre class="noedit"><code></code></pre></div>' }))
  tabs.append(
    Xt.node({
      str: `<button type="button" class="xt-button ${classes.textInverse()} ${classes.buttonCodeWhite()}">${lang}</button>`,
    })
  )
  // format code
  const itemInside = item.querySelectorAll('.gatsby_demo_code_body .gatsby_demo_code_body_item')
  const pre = itemInside[itemInside.length - 1].querySelector('pre')
  const isReactRename = !!item.querySelector('[data-lang="jsx"]')
  highlightCode(pre, element, lang, isReactRename)
}

/* makeDocument */

export const makeDocument = () => {
  // .gatsby_make-line
  for (const el of document.querySelectorAll(
    '.gatsby_site-article_content_inner > * > h2, .gatsby_site-article_content_inner > * > h4'
  )) {
    el.classList.add('gatsby_make-line', 'xt-ignore')
  }
  for (const el of document.querySelectorAll('.gatsby_make-line')) {
    el.innerHTML = `<span class="gatsby_make-line_line">${el.innerHTML}</span>`
    el.innerHTML = `<span class="gatsby_make-line_container">${el.innerHTML}</span>`
  }
  // .gatsby_make-anchor
  for (const el of document.querySelectorAll(
    '.gatsby_site-article_content_inner > * > h2, .gatsby_site-article_content_inner > * > h4'
  )) {
    el.classList.add('gatsby_make-line', 'xt-ignore')
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
      id += `${prevElement.textContent.trim().replace(/\W/g, '-').toLowerCase()}-`
    }
    id += el.textContent.trim().replace(/\W/g, '-').toLowerCase()
    // sidebar links
    if (el.tagName === 'H2') {
      let activeText =
        document.querySelector(
          '.gatsby_button-site_article_sidebar--adiacent.on .gatsby_button-site_article_sidebar_inner'
        ) ??
        document.querySelector('.gatsby_button-site_article_sidebar--sub.on .gatsby_button-site_article_sidebar_inner')
      if (activeText) {
        activeText = activeText.closest('.gatsby_tooltip_outside_link')
        let activeTooltip = activeText.querySelector('.xt-tooltip')
        if (!activeTooltip) {
          activeText.append(
            Xt.node({
              str: `
<div class="xt-tooltip px-5 group" data-xt-tooltip-target>
  <div class="relative py-2 rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} bg-gray-100 transition duration-300 opacity-0 scale-95 group-in:opacity-100 group-in:scale-100">
    <nav aria-label="Page navigation scroll" class="xt-list flex-col">
    </nav>
  </div>
</div>`,
            })
          )
          new Xt.Tooltip(activeText, {
            elements: ':scope > a',
            mouseParent: true,
            position: 'right',
            positionInner: '.gatsby_button-site_article_sidebar_text',
            duration: 300,
          })
          activeTooltip = activeText.querySelector('.xt-tooltip')
        }
        const activeList = activeTooltip.querySelector('.xt-list')
        activeList.append(
          Xt.node({
            str: `
<a href="#${encodeURIComponent(
              id
            )}" class="xt-button text-3xs py-0.5 px-3 ${classes.groupButton()} justify-start text-left ${classes.groupButtonGray()} ${classes.buttonGrayAnim()}">
  <span class="py-px">- ${el.textContent.trim()} -</span>
</a>`,
          })
        )
      }
    }
    // gatsby_make-anchor
    el.setAttribute('id', id)
    el.classList.add('gatsby_make-anchor')
    // wrapInner
    const link = Xt.node({ str: `<a href="/"></a>` })
    link.setAttribute('href', `#${encodeURIComponent(id)}`)
    el.classList.add('xt-ignore')
    el.before(link)
    const inner = el.querySelector(':scope > *')
    el.append(link)
    link.append(inner)
    el.append(
      Xt.node({
        str: `
<span class="gatsby_site-article_anchor">
  <span class="xt-button">
  ${classes.iconLink()}
  </span>
</span>`,
      })
    )
  }
}
