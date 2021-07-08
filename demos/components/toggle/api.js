import { Xt } from 'xtendui'
import 'xtendui/src/toggle'

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

/* mountEventmethods */

const mountEventmethods = ({ ref }) => {
  // init

  /***/
  let self = new Xt.Toggle(ref.querySelector('#toggle--eventmethods'), {
    min: 1,
  })
  /***/

  // log

  const log = document.querySelector('#card--toggle-api-log')

  const logAdd = text => {
    log.innerHTML += `${text}<br/>`
    // scroll
    log.scrollTo(0, log.scrollHeight)
    // hr
    clearTimeout(window.logTimeout)
    window.logTimeout = setTimeout(() => {
      log.innerHTML += '<hr class="my-4 border-gray-400"/>'
    }, 1000)
  }

  // on first element

  const firstEl = document.querySelector('#button--toggle-api-first-element')

  const firstElFnc = () => {
    logAdd('<strong>1st element</strong>')
    const elements = self.elements
    elements[0].dispatchEvent(new CustomEvent('on.trigger.xt.toggle'))
  }

  firstEl.addEventListener('click', firstElFnc)

  // on first target

  const firstTr = document.querySelector('#button--toggle-api-first-target')

  const firstTrFnc = () => {
    logAdd('<strong>1st target</strong>')
    const targets = self.targets
    targets[0].dispatchEvent(new CustomEvent('on.trigger.xt.toggle'))
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
      const strEl = `<button type="button" class="xt-button rounded-full py-2.5 px-3.5 text-xs text-black font-semibold bg-gray-200 transition hover:bg-gray-300 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500" data-xt-toggle-element>Toggle ${index}</button>`
      document.querySelector('#toggle--eventmethods-elements').append(Xt.createElement(strEl))
      // targets
      const strTr = `<div class="off:hidden out:pointer-events-none rounded-full text-xs py-2.5 px-3.5 font-semibold shadow" data-xt-toggle-target>Target ${index}</div>`
      document.querySelector('#toggle--eventmethods-targets').append(Xt.createElement(strTr))
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
      const elements = self.elements
      elements[elements.length - 1].remove()
      // element
      const targets = self.targets
      targets[targets.length - 1].remove()
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
      // restart
      logAdd('<strong>restart</strong>')
      self.restart()
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

  ref.addEventListener('init.xt.toggle', events)
  ref.addEventListener('destroy.xt.toggle', events)
  document.addEventListener('on.xt.toggle', events, true)
  document.addEventListener('off.xt.toggle', events, true)

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
    ref.removeEventListener('init.xt.toggle', events)
    ref.removeEventListener('destroy.xt.toggle', events)
    document.removeEventListener('on.xt.toggle', events, true)
    document.removeEventListener('off.xt.toggle', events, true)
    self.destroy()
    self = null
  }
  return unmount
}
