import { Xt } from 'xtendui'
import 'xtendui/src/toggle'

/* mountEventmethods */

const mountEventmethods = ({ ref }) => {
  // vars

  const toggle = ref.querySelector('#toggle--eventmethods')

  // init

  /***/
  let self = new Xt.Toggle(toggle, {
    min: 1,
  })
  /***/

  // log

  const log = document.querySelector('#card--toggle-api-log')

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

  const firstEl = document.querySelector('#button--toggle-api-first-element')

  const firstElFnc = () => {
    logAdd('<strong>1st element</strong>')
    const els = self.elements
    els[0].dispatchEvent(new CustomEvent('on.trigger.xt.toggle'))
  }

  firstEl.addEventListener('click', firstElFnc)

  // on first target

  const firstTr = document.querySelector('#button--toggle-api-first-target')

  const firstTrFnc = () => {
    logAdd('<strong>1st target</strong>')
    const trs = self.targets
    trs[0].dispatchEvent(new CustomEvent('on.trigger.xt.toggle'))
  }

  firstTr.addEventListener('click', firstTrFnc)

  // add

  const addBtn = document.querySelector('#button--toggle-api-add')

  const addFnc = () => {
    clearTimeout(parseFloat(ref.dataset.reinitTimeout))
    ref.dataset.reinitTimeout = setTimeout(() => {
      logAdd('<strong>add</strong>')
      // elements
      const index = self.getElementsGroups().length
      const strEl = `<button type="button" class="xt-button py-2 px-3 text-xs rounded-full font-medium leading-snug text-gray-900 bg-gray-100 transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500 on dir-before in done" data-xt-toggle-element>Toggle ${index}</button>`
      document.querySelector('#toggle--eventmethods-elements').append(Xt.node({ str: strEl }))
      // targets
      const strTr = `<div class="off:hidden out:pointer-events-none rounded-full text-xs py-2 px-3 font-medium shadow on in done" data-xt-toggle-target>Target ${index}</div>`
      document.querySelector('#toggle--eventmethods-targets').append(Xt.node({ str: strTr }))
      // reinit
      logAdd('<strong>reinit</strong>')
      self.reinit()
    }, 200).toString()
  }

  addBtn.addEventListener('click', addFnc)

  // remove

  const removeBtn = document.querySelector('#button--toggle-api-remove')

  const removeFnc = () => {
    clearTimeout(parseFloat(ref.dataset.reinitTimeout))
    ref.dataset.reinitTimeout = setTimeout(() => {
      logAdd('<strong>remove</strong>')
      // element
      const els = self.elements
      els[els.length - 1].remove()
      // element
      const trs = self.targets
      trs[trs.length - 1].remove()
      // reinit
      logAdd('<strong>reinit</strong>')
      self.reinit()
    }, 200).toString()
  }

  removeBtn.addEventListener('click', removeFnc)

  // reinit

  const reinitBtn = document.querySelector('#button--toggle-api-reinit')

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

  const restartBtn = document.querySelector('#button--toggle-api-restart')

  const restartFnc = () => {
    logAdd('<strong>restart</strong>')
    self.restart()
  }

  restartBtn.addEventListener('click', restartFnc)

  // disable

  const disableBtn = document.querySelector('#button--toggle-api-disable')

  const disableFnc = () => {
    logAdd('<strong>disable</strong>')
    self.disable()
  }

  disableBtn.addEventListener('click', disableFnc)

  // enable

  const enableBtn = document.querySelector('#button--toggle-api-enable')

  const enableFnc = () => {
    logAdd('<strong>enable</strong>')
    self.enable()
  }

  enableBtn.addEventListener('click', enableFnc)

  // destroy

  const destroyBtn = document.querySelector('#button--toggle-api-destroy')

  const destroyFnc = () => {
    logAdd('<strong>destroy</strong>')
    self.destroy()
  }

  destroyBtn.addEventListener('click', destroyFnc)

  // unmount

  const unmountBtn = document.querySelector('#button--toggle-api-unmount')

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

  toggle.addEventListener('init.xt.toggle', events)
  toggle.addEventListener('destroy.xt.toggle', events)
  document.addEventListener('on.xt.toggle', events, true) // usecapture event propagation
  document.addEventListener('off.xt.toggle', events, true) // usecapture event propagation

  // unmount

  const unmount = () => {
    firstEl.removeEventListener('click', firstElFnc)
    firstTr.removeEventListener('click', firstTrFnc)
    addBtn.removeEventListener('click', addFnc)
    removeBtn.removeEventListener('click', removeFnc)
    reinitBtn.removeEventListener('click', reinitFnc)
    restartBtn.removeEventListener('click', restartFnc)
    destroyBtn.removeEventListener('click', destroyFnc)
    unmountBtn.removeEventListener('click', unmountFnc)
    toggle.removeEventListener('init.xt.toggle', events)
    toggle.removeEventListener('destroy.xt.toggle', events)
    document.removeEventListener('on.xt.toggle', events, true) // usecapture event propagation
    document.removeEventListener('off.xt.toggle', events, true) // usecapture event propagation
    self.destroy()
    self = null
  }
  return unmount
}

/* mount */

Xt.mount({
  matches: '.demo--toggle-api',
  mount: ({ ref }) => {
    const unmountEventmethods = mountEventmethods({ ref })

    // unmount

    return () => {
      unmountEventmethods()
    }
  },
})
