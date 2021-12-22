import { Xt } from 'xtendui'
import 'xtendui/src/overlay'

/* mountEventmethods */

const mountEventmethods = ({ ref }) => {
  // vars

  const overlay = ref.querySelector('#overlay--eventmethods')
  const overlayAlt = ref.querySelector('#overlay--eventmethods-alt')

  // init

  /***/
  let self = new Xt.Overlay(overlay, {
    targets: '#overlay--nested',
  })
  /***/

  /***/
  new Xt.Overlay(overlayAlt, {
    targets: '#overlay--nested',
  })
  /***/

  // log

  const log = ref.querySelector('#card--overlay-api-log')

  const logAdd = str => {
    log.append(Xt.node({ str: `<div>${str}</div>` }))
    // hr
    clearTimeout(window.logTimeout)
    window.logTimeout = setTimeout(() => {
      log.append(Xt.node({ str: '<hr class="my-4 border-gray-300"/>' }))
      log.scrollTo(0, log.scrollHeight)
    }, 1000)
  }

  // on first element

  const firstEl = ref.querySelector('#button--overlay-api-first-element')

  const firstElFnc = () => {
    logAdd('<strong>1st element</strong>')
    const els = self.elements
    els[0].dispatchEvent(new CustomEvent('on.trigger.xt.overlay'))
  }

  firstEl.addEventListener('click', firstElFnc)

  // on first target

  const firstTr = ref.querySelector('#button--overlay-api-first-target')

  const firstTrFnc = () => {
    logAdd('<strong>1st target</strong>')
    const trs = self.targets
    trs[0].dispatchEvent(new CustomEvent('on.trigger.xt.overlay'))
  }

  firstTr.addEventListener('click', firstTrFnc)

  // reinit

  const reinitBtn = ref.querySelector('#button--overlay-api-reinit')

  const reinitFnc = () => {
    clearTimeout(parseFloat(ref.dataset.reinitTimeout))
    ref.dataset.reinitTimeout = setTimeout(() => {
      // reinit
      logAdd('<strong>reinit</strong>')
      self.reinit()
    }, 200).toString()
  }

  reinitBtn.addEventListener('click', reinitFnc)

  // restart

  const restartBtn = ref.querySelector('#button--overlay-api-restart')

  const restartFnc = () => {
    logAdd('<strong>restart</strong>')
    self.restart()
  }

  restartBtn.addEventListener('click', restartFnc)

  // disable

  const disableBtn = ref.querySelector('#button--overlay-api-disable')

  const disableFnc = () => {
    logAdd('<strong>disable</strong>')
    self.disable()
  }

  disableBtn.addEventListener('click', disableFnc)

  // enable

  const enableBtn = ref.querySelector('#button--overlay-api-enable')

  const enableFnc = () => {
    logAdd('<strong>enable</strong>')
    self.enable()
  }

  enableBtn.addEventListener('click', enableFnc)

  // destroy

  const destroyBtn = ref.querySelector('#button--overlay-api-destroy')

  const destroyFnc = () => {
    logAdd('<strong>destroy</strong>')
    self.destroy()
  }

  destroyBtn.addEventListener('click', destroyFnc)

  // unmount

  const unmountBtn = ref.querySelector('#button--overlay-api-unmount')

  const unmountFnc = () => {
    logAdd('<strong>unmount</strong>')
    unmount()
  }

  unmountBtn.addEventListener('click', unmountFnc)

  // events

  const events = e => {
    let str = `event <strong>${e.type}</strong>` + ` direction <strong>${self.direction}</strong>`
    if (self.elements.includes(e.target)) {
      str += ` type <strong>element</strong>`
    } else if (self.targets.includes(e.target)) {
      str += ` type <strong>target</strong>`
    }
    let selector
    if (e.target.getAttribute('title')) {
      selector = e.target.getAttribute('title')
    } else if (e.target.querySelector(':scope > .xt-button')) {
      selector = e.target.querySelector(':scope > .xt-button').textContent
    } else if (e.target.querySelector('.xt-card > *')) {
      selector = e.target.querySelector('.xt-card > *').textContent
    } else if (e.target.querySelector(':scope > *')) {
      selector = e.target.querySelector(':scope > *').textContent
    } else if (!e.target.querySelector('*')) {
      selector = e.target.innerHTML
    }
    if (selector) {
      selector = selector
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/\//g, '&#x2F;')
      str += ` from <strong>${selector}</strong>`
    }
    logAdd(str)
  }

  overlay.addEventListener('init.xt.overlay', events)
  overlay.addEventListener('destroy.xt.overlay', events)
  document.addEventListener('on.xt.overlay', events, true) // useCapture event propagation
  document.addEventListener('off.xt.overlay', events, true) // useCapture event propagation

  // unmount

  const unmount = () => {
    firstEl.removeEventListener('click', firstElFnc)
    firstTr.removeEventListener('click', firstTrFnc)
    reinitBtn.removeEventListener('click', reinitFnc)
    restartBtn.removeEventListener('click', restartFnc)
    destroyBtn.removeEventListener('click', destroyFnc)
    unmountBtn.removeEventListener('click', unmountFnc)
    overlay.removeEventListener('init.xt.overlay', events)
    overlay.removeEventListener('destroy.xt.overlay', events)
    document.removeEventListener('on.xt.overlay', events, true) // useCapture event propagation
    document.removeEventListener('off.xt.overlay', events, true) // useCapture event propagation
    self.destroy()
    self = null
  }
  return unmount
}

/* mount */

Xt.mount({
  matches: '.demo--overlay-api',
  mount: ({ ref }) => {
    const unmountEventmethods = mountEventmethods({ ref })

    // unmount

    return () => {
      unmountEventmethods()
    }
  },
})
