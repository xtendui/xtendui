import Prism from 'prismjs'
import ClipboardJS from 'clipboard'
import { Xt } from 'xtendui'
import 'xtendui/src/toggle.js'
import 'xtendui/src/tooltip.js'
import kebabCase from 'lodash.kebabcase'

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
      //full.dispatchEvent(new CustomEvent('off.xt.toggle'))
      // if hash activate demo from hash
      const item = document.querySelector(`[id="${kebabCase(location.hash)}"]`)
      if (item) {
        // demo
        const demo = item.closest('.gatsby_demo')
        if (demo) {
          // trigger fullscreen or change tabs
          item.dispatchEvent(new CustomEvent('on.trigger.xt.toggle'))
          // do not close full if change tab so already opened
          if (item.closest('#gatsby_open-full-content')) {
            return
          }
          // raf because after Xt.init
          requestAnimationFrame(() => {
            makeFullscreen(demo)
          })
        }
      }
    } else {
      // close demo full if no hash
      full.dispatchEvent(new CustomEvent('off.trigger.xt.toggle'))
    }
  }
}

addEventListener('hashchange', demoHash)

/**
 * highlightCode
 */

const highlightCode = (pre, element, language, isReact = false) => {
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
  if (isReact) {
    text = text.replace(/\.demo--(.*?), /, '')
  } else {
    text = text.replace(/, \.demo--(.*?)-react/, '')
  }
  // replace entities
  text = text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x2F;/g, '/')
  // remove tabs
  const arr = text.split('\n')
  let search
  for (const notEmpty of arr) {
    if (notEmpty !== '') {
      search = notEmpty
      break
    }
  }
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
    el.after(Xt.createElement(`<pre class="${language}"><code class="${language}">${el.innerHTML}</code></pre>`))
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
    full.addEventListener('off.xt.toggle', e => {
      // check because of event propagation
      if (e.target === full) {
        const content = document.querySelector('#gatsby_open-full-content')
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
          // populate source
          const sourceTo = content.querySelector('.gatsby_demo_source_populate')
          if (sourceTo) {
            sourceTo.innerHTML = ''
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
    })
  }
}

/**
 * populateDemo
 */

export const populateDemo = container => {
  if (container.dataset.gatsbyDemoBuilt) return
  const items = container.querySelectorAll('.gatsby_demo_item')
  // fix demo index when changing page
  let i = parseFloat(document.documentElement.getAttribute('data-demo-index') || 0)
  i++
  document.documentElement.setAttribute('data-demo-index', i.toString())
  // multiple elements
  container.prepend(
    Xt.createElement(
      '<div class="gatsby_demo_tabs bg-gray-100"><div class="gatsby_demo_tabs_left xt-list xt-list-1.5"></div><div class="gatsby_demo_tabs_right xt-list xt-list-1.5"></div></div>'
    )
  )
  const showCodeUid = Xt.getuniqueId()
  container.querySelector('.gatsby_demo_tabs_right').append(
    Xt.createElement(`
<div>
  <button type="button" class="xt-button button--show-code" aria-label="Toggle Code">
    ${classes.iconCode()}
  </button>
  <div id="tooltip--show-code--on-${showCodeUid}" class="xt-tooltip off:hidden out:pointer-events-none xt-tooltip--gatsby p-2 group">
    <div class="relative ${classes.tooltipSm()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()} transform transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0">
      Show Code
    </div>
  </div>
  <div id="tooltip--show-code--off-${showCodeUid}" class="xt-tooltip off:hidden out:pointer-events-none xt-tooltip--gatsby p-2 group hidden">
    <div class="relative ${classes.tooltipSm()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()} transform transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0">
      Hide Code
    </div>
  </div>
</div>`)
  )
  container.querySelector('.gatsby_demo_tabs_right').append(
    Xt.createElement(`
<div class="button--open-full-container" data-xt-tooltip="{ position: 'bottom-end', duration: 300 }">
  <button type="button" class="xt-button button--open-full" aria-label="Toggle Fullscreen" data-xt-tooltip-element>
    ${classes.iconMaximize()}
  </button>
  <div class="xt-tooltip off:hidden out:pointer-events-none xt-tooltip--gatsby p-2 group"
  data-xt-tooltip-target>
    <div class="relative ${classes.tooltipSm()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()} transform transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0">
      Open Fullscreen
    </div>
  </div>
</div>`)
  )
  container.querySelector('.gatsby_demo_tabs_right').append(
    Xt.createElement(`
<div class="button--open-iframe-container" data-xt-tooltip="{ position: 'bottom-end', duration: 300 }">
  <a href="#" target="_blank" class="xt-button button--open-iframe" aria-label="Open Iframe" data-xt-tooltip-element>
    ${classes.iconExternal()}
  </a>
  <div class="xt-tooltip off:hidden out:pointer-events-none xt-tooltip--gatsby p-2 group"
  data-xt-tooltip-target>
    <div class="relative ${classes.tooltipSm()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()} transform transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0">
      Open Iframe
    </div>
  </div>
</div>`)
  )
  // loop items
  for (const [k, item] of items.entries()) {
    // populate tabs
    let name = k
    let id =
      item.getAttribute('data-id') || item.getAttribute('data-iframe') || item.getAttribute('data-iframe-fullscreen')
    name = id.split('/').pop().split('-').join(' ')
    id = id.split('/').join('-')
    item.setAttribute('id', kebabCase(id))
    container
      .querySelector('.gatsby_demo_tabs_left')
      .append(Xt.createElement(`<button type="button" class="xt-button">${name}</button>`))
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
    const item = container.querySelector(`[id="${kebabCase(location.hash)}"]`)
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
      if (!self.initial) {
        btnOpenIframe(item)
        // triggering e.detail.container
        dispatchEvent(
          new CustomEvent('resize', {
            detail: {
              force: true,
              container: item,
            },
          })
        )
        // only if demo opened
        if (document.querySelector('#gatsby_open-full-trigger').classList.contains('on')) {
          // hash
          location.hash = item.getAttribute('id')
        }
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
  new Xt.Tooltip(btnCode, {
    targets: `#tooltip--show-code--on-${showCodeUid}, #tooltip--show-code--off-${showCodeUid}`,
    position: 'bottom-end',
    duration: 300,
  })
  swapToggle({
    buttonSwap: btnCode,
  })
  // only one time
  container.dataset.gatsbyDemoBuilt = 'true'
}

/**
 * populateItem
 */

export const populateItem = item => {
  const container = item.closest('.gatsby_demo')
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
  <div class="gatsby_demo_code_tabs bg-code">
    <div class="gatsby_demo_code_tabs_left xt-list xt-list-1.5"></div>
    <div class="gatsby_demo_code_tabs_right xt-list xt-list-1.5">
      <button type="button" class="xt-button button--clipboard" aria-label="Copy to Clipboard">
        ${classes.iconCopy()}
      </button>
      <div id="tooltip--clipboard--on-${clipboardUid}" class="xt-tooltip off:hidden out:pointer-events-none xt-tooltip--gatsby p-2 group">
        <div class="relative ${classes.tooltipSm()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()} transform transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0">
          Copy to Clipboard
        </div>
      </div>
      <div id="tooltip--clipboard--off-${clipboardUid}" class="xt-tooltip off:hidden out:pointer-events-none xt-tooltip--gatsby p-2 group hidden">
        <div class="relative ${classes.tooltipSm()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()} transform transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0">
          Copied!
        </div>
      </div>
    </div>
  </div>
  <div class="gatsby_demo_code_body bg-code"></div>
</div>
</div>`
    )
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
      if (!Xt.dataStorage.get(clipboard, 'ClipboardFrame') !== e.text) {
        Xt.dataStorage.set(clipboard, 'ClipboardFrame', e.text)
        e.clearSelection()
      }
    })
  }
  new Xt.Tooltip(btnClipboard, {
    targets: `#tooltip--clipboard--on-${clipboardUid}, #tooltip--clipboard--off-${clipboardUid}`,
    position: 'bottom-end',
    duration: 300,
  })
  swapClick({ buttonSwap: btnClipboard })
  // inject
  if (!item.getAttribute('data-iframe-fullscreen')) {
    if (!item.getAttribute('data-iframe')) {
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
        // fix demos not visible on population (e.g. sliders)
        requestAnimationFrame(() => {
          sourceTo.innerHTML = text.innerHTML
        })
      }
    }
  }
  // .button--show-code reinit
  const btnCode = container.querySelector('.button--show-code')
  const self = Xt.get('xt-toggle', btnCode)
  if (self) {
    self.reinit()
  }
}

/**
 * swapClick
 */

const swapClick = ({ buttonSwap }) => {
  // vars

  let self = Xt.get('xt-tooltip', buttonSwap)
  const tooltip = buttonSwap.parentNode.querySelector('.xt-tooltip')

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
    tooltip.dispatchEvent(new CustomEvent('on.trigger.xt.tooltip'))
    // swap back
    tooltip.addEventListener('offdone.xt.tooltip', swapBack, { once: true })
  }

  // resetTooltip: fix when swapping and moving away

  const resetTooltip = () => {
    // trigger our swap
    tooltip.dispatchEvent(new CustomEvent('offdone.xt.tooltip'))
    // trigger tooltip deactivation
    tooltip.dispatchEvent(new CustomEvent('off.trigger.xt.tooltip'))
  }

  buttonSwap.addEventListener('mouseleave', resetTooltip)

  // click

  const click = () => {
    // swap
    tooltip.addEventListener('offdone.xt.tooltip', swap, { once: true })
    tooltip.dispatchEvent(new CustomEvent('off.trigger.xt.tooltip'))
  }

  buttonSwap.addEventListener('click', click)
}

/**
 * swapToggle
 */

const swapToggle = ({ buttonSwap }) => {
  // vars

  let self = Xt.get('xt-tooltip', buttonSwap)
  const tooltip = buttonSwap.parentNode.querySelector('.xt-tooltip')

  // swap

  const swapBack = () => {
    // swap tooltip
    self.targets[0].classList.remove('hidden')
    self.targets[1].classList.add('hidden')
    // open
    tooltip.dispatchEvent(new CustomEvent('on.trigger.xt.tooltip'))
  }

  const swap = () => {
    // swap
    self.targets[0].classList.add('hidden')
    self.targets[1].classList.remove('hidden')
    // open
    tooltip.dispatchEvent(new CustomEvent('on.trigger.xt.tooltip'))
  }

  // resetTooltip: fix when swapping and moving away

  const resetTooltip = () => {
    // trigger our swap
    tooltip.dispatchEvent(new CustomEvent('offdone.xt.tooltip'))
    // trigger tooltip deactivation
    tooltip.dispatchEvent(new CustomEvent('off.trigger.xt.tooltip'))
    // remove our listeners
    tooltip.removeEventListener('offdone.xt.tooltip', swap)
    tooltip.removeEventListener('offdone.xt.tooltip', swapBack)
  }

  buttonSwap.addEventListener('mouseleave', resetTooltip)

  // on

  const on = () => {
    // swap
    tooltip.addEventListener('offdone.xt.tooltip', swap, { once: true })
    tooltip.dispatchEvent(new CustomEvent('off.trigger.xt.tooltip'))
  }

  buttonSwap.addEventListener('on.xt.toggle', on)

  // off

  const off = () => {
    // swap back
    tooltip.addEventListener('offdone.xt.tooltip', swapBack, { once: true })
    tooltip.dispatchEvent(new CustomEvent('off.trigger.xt.tooltip'))
  }

  buttonSwap.addEventListener('off.xt.toggle', off)
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
  // empty demo
  demoEmpty()
  // toggles
  const listingToggle = container.previousSibling
  if (listingToggle instanceof Element && listingToggle.getAttribute('data-gatsby-listing-toggle')) {
    listingToggle.classList.add('on')
  }
  // needs both or sometimes it doesn't open
  toggle.classList.add('on')
  toggle.dispatchEvent(new CustomEvent('on.trigger.xt.toggle'))
  // move code block
  container.before(
    Xt.createElement(
      `<div class="gatsby_demo xt-ignore" data-xt-origin="gatsby_open-full-content" style="height: ${container.offsetHeight}px"></div>`
    )
  )
  content.append(container)
  // iframe
  for (const item of container.querySelectorAll('.gatsby_demo_item.on')) {
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
      Xt.createElement(
        `<div class="gatsby_demo_item_switch gatsby_demo_item--current"><iframe data-src="${src}"></iframe></div>`
      )
    )
    item.querySelector('.gatsby_demo_item_switch').append(
      Xt.createElement(`
          <div class="${classes.loader()}">
            <div class="${classes.spinner()} w-6 h-6 text-primary-500">
              ${classes.svgSpinner({ classes: 'animate-xt-spinner' })}
            </div>
          </div>`)
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
  iframe.setAttribute('src', iframe.getAttribute('data-src'))
}

const unloadIframe = iframe => {
  iframe.removeAttribute('src')
}

window.initIframe = (src, htmlSource, jsxSource, cssSource, jsSource) => {
  const iframe = document.querySelector(`iframe[data-src="/${src}"]`)
  const item = iframe.closest('.gatsby_demo_item')
  // populate
  require('src/gatsby/assets/scripts/demo').populateItem(item)
  populateIframe(item, iframe, htmlSource, jsxSource, cssSource, jsSource)
  // spinner
  item.classList.add('loaded')
}

/**
 * switchClean
 */

window.switchClean = (item, src) => {
  item = item ?? document.querySelector(`iframe[data-src="/${src}"]`).closest('.gatsby_demo_item')
  // clean
  const populate = item.querySelector('.gatsby_demo_source_populate')
  if (populate) {
    populate.innerHTML = ''
  }
  const code = item.querySelector('.gatsby_demo_code_body_item')
  if (code) {
    code.innerHTML = ''
  }
}

/**
 * populate
 */

const sourceAsync = async (item, el, isReact = false) => {
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
      // fix only current demo
      if (el.closest('.gatsby_demo_item--current')) {
        el.innerHTML = body
        populateSources(item, el, isReact)
      }
    }
  } else {
    populateSources(item, el, isReact)
  }
}

const populateInline = async item => {
  const els = item.querySelectorAll('[data-lang]')
  const isReact = !!item.querySelector('[data-lang="jsx"]')
  // fix only current demo
  for (const el of Array.from(els).filter(x => x.closest('.gatsby_demo_item--current'))) {
    try {
      await sourceAsync(item, el, isReact)
    } catch (ex) {
      console.error(ex)
    }
  }
  // code toggle
  new Xt.Toggle(item.querySelector('.gatsby_demo_code_inner'), {
    elements: '.gatsby_demo_code_tabs_left .xt-button',
    targets: '.gatsby_demo_code_body_item',
    min: 1,
    queue: false,
  })
}

const populateIframe = async (item, iframe, htmlSource, jsxSource, cssSource, jsSource) => {
  const inner = item.querySelector('.gatsby_demo_item_switch')
  // clean
  for (const code of inner.querySelectorAll('.gatsby_demo_source')) {
    code.remove()
  }
  // inject code
  if (htmlSource) {
    inner.append(
      Xt.createElement(
        `<script type="text/plain" class="gatsby_demo_source xt-ignore hidden" data-lang="html">${htmlSource}</script>`
      )
    )
  }
  if (jsxSource) {
    inner.append(
      Xt.createElement(
        `<script type="text/plain" class="gatsby_demo_source xt-ignore hidden" data-lang="jsx" data-fetch=${jsxSource}></script>`
      )
    )
  }
  if (cssSource) {
    inner.append(
      Xt.createElement(
        `<script type="text/plain" class="gatsby_demo_source xt-ignore hidden" data-lang="css" data-fetch=${cssSource}></script>`
      )
    )
  }
  if (jsSource) {
    inner.append(
      Xt.createElement(
        `<script type="text/plain" class="gatsby_demo_source xt-ignore hidden" data-lang="js" data-fetch=${jsSource}></script>`
      )
    )
  }
  // populate
  const isReact = !!jsxSource
  const els = item.querySelectorAll('[data-lang]')
  for (const el of Array.from(els).filter(x => x.closest('.gatsby_demo_item--current'))) {
    try {
      await sourceAsync(item, el, isReact)
    } catch (ex) {
      console.error(ex)
    }
  }
  // code toggle
  new Xt.Toggle(item.querySelector('.gatsby_demo_code_inner'), {
    elements: '.gatsby_demo_code_tabs_left .xt-button',
    targets: '.gatsby_demo_code_body_item',
    min: 1,
    queue: false,
  })
}

/**
 * sources
 */

const populateSources = (item, element, isReact = false) => {
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
  item
    .querySelector('.gatsby_demo_code_body')
    .append(Xt.createElement('<div class="gatsby_demo_code_body_item"><pre class="noedit"><code></code></pre></div>'))
  item
    .querySelector('.gatsby_demo_code_tabs_left')
    .append(Xt.createElement(`<button type="button" class="xt-button">${lang}</button>`))
  // format code
  const itemInside = item.querySelectorAll('.gatsby_demo_code_body .gatsby_demo_code_body_item')
  const pre = itemInside[itemInside.length - 1].querySelector('pre')
  highlightCode(pre, element, lang, isReact)
}

/* makeDocument */

export const makeDocument = () => {
  // .gatsby_make-line
  for (const el of document.querySelectorAll(
    '.gatsby_site-article_content_inner > * > h2, .gatsby_site-article_content_inner > * > h4'
  )) {
    el.classList.add('gatsby_make-line')
  }
  for (const el of document.querySelectorAll('.gatsby_make-line')) {
    el.innerHTML = `<span class="gatsby_make-line_line">${el.innerHTML}</span>`
    el.innerHTML = `<span class="gatsby_make-line_container">${el.innerHTML}</span>`
  }
  // .gatsby_make-anchor
  for (const el of document.querySelectorAll(
    '.gatsby_site-article_content_inner > * > h2, .gatsby_site-article_content_inner > * > h4'
  )) {
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
            Xt.createElement(`
<div class="xt-tooltip off:hidden out:pointer-events-none px-5 group" data-xt-tooltip-target>
  <div class="relative py-2 ${classes.tooltipRadius()} shadow-tooltip bg-primary-600 transform transition duration-300 opacity-0 translate-x-2 group-in:opacity-100 group-in:translate-x-0">
    <nav class="xt-list flex-col">
    </nav>
  </div>
</div>`)
          )
          activeText.setAttribute(
            'data-xt-tooltip',
            `{ elements: false, position: 'right', positionInner: '.gatsby_button-site_article_sidebar_text', duration: 300 }`
          )
          activeTooltip = activeText.querySelector('.xt-tooltip')
        }
        const activeList = activeTooltip.querySelector('.xt-list')
        activeList.append(
          Xt.createElement(`
<a href="#${encodeURIComponent(
            id
          )}" class="xt-button text-3xs py-0.5 px-3 w-full justify-start text-left text-white font-semibold leading-snug tracking-wider uppercase bg-primary-600 text-opacity-75 transition hover:bg-primary-700 active:bg-primary-700 on:bg-primary-700 hover:text-opacity-100 active:text-opacity-100 on:text-opacity-100">
  <span class="py-px">${el.textContent.trim()}</span>
</a>`)
        )
      }
    }
    // gatsby_make-anchor
    el.setAttribute('id', id)
    el.classList.add('gatsby_make-anchor')
    // wrapInner
    const link = Xt.createElement(`<a href="#"></a>`)
    link.setAttribute('href', `#${encodeURIComponent(id)}`)
    el.classList.add('xt-ignore')
    el.before(link)
    const inner = el.querySelector(':scope > *')
    el.append(link)
    link.append(inner)
    el.append(
      Xt.createElement(`
<span class="gatsby_site-article_anchor">
  <span class="xt-button">
  ${classes.iconLink()}
  </span>
</span>`)
    )
  }
}
