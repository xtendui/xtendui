import { Xt } from 'xtendui'
import 'xtendui/src/core/toggle'

Xt.mount.push({
  matches: '.demo--toggle-eventmethods',
  mount: ({ object }) => {
    const unmountEventmethods = mountEventmethods({ object })

    // unmount

    return () => {
      unmountEventmethods()
    }
  },
})

/* mountEventmethods */

const mountEventmethods = ({ object }) => {
  // init

  let self = new Xt.Toggle(object.querySelector('#toggle--eventmethods'), {
    elements: 'a, button',
    targets: '.xt-toggle',
    min: 1,
    auto: {
      time: 2000,
      initial: false,
    },
  })

  // log

  const log = document.querySelector('#card--toggle-eventmethods-log')

  const logAdd = text => {
    log.innerHTML += `${text}<br/>`
    // scroll
    log.scrollTo(0, log.scrollHeight)
    // hr
    clearTimeout(window.logTimeout)
    window.logTimeout = setTimeout(() => {
      log.innerHTML += '<hr class="my-4 border-gray-500"/>'
    }, 1000)
  }

  // on first element

  const firstEl = document.querySelector('#button--toggle-eventmethods-first-element')

  const firstElFnc = () => {
    logAdd('<strong>on 1st element</strong>')
    const elements = self.elements
    elements[0].dispatchEvent(new CustomEvent('on.trigger.xt.toggle'))
  }

  firstEl.addEventListener('click', firstElFnc)

  // on first target

  const firstTr = document.querySelector('#button--toggle-eventmethods-first-target')

  const firstTrFnc = () => {
    logAdd('<strong>on 1st target</strong>')
    const targets = self.targets
    targets[0].dispatchEvent(new CustomEvent('on.trigger.xt.toggle'))
  }

  firstTr.addEventListener('click', firstTrFnc)

  // autostart

  const autostartEl = document.querySelector('#button--toggle-eventmethods-autostart')

  const autstartFnc = () => {
    logAdd('<strong>autostart</strong>')
    self.object.dispatchEvent(new CustomEvent('autostart.trigger.xt.toggle'))
  }

  autostartEl.addEventListener('click', autstartFnc)

  // autostop

  const autostopEl = document.querySelector('#button--toggle-eventmethods-autostop')

  const autostopFnc = () => {
    logAdd('<strong>autostop</strong>')
    self.object.dispatchEvent(new CustomEvent('autostop.trigger.xt.toggle'))
  }

  autostopEl.addEventListener('click', autostopFnc)

  // add

  const addBtn = document.querySelector('#button--toggle-eventmethods-add')

  const addFnc = () => {
    clearTimeout(parseFloat(object.dataset.reinitTimeout))
    object.dataset.reinitTimeout = setTimeout(() => {
      logAdd('<strong>add</strong>')
      // elements
      const elIndex = self.getElementsGroups().length
      const strEl = `<button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">Toggle ${elIndex}</button>`
      document.querySelector('#toggle--eventmethods-elements').append(Xt.createElement(strEl))
      // targets
      const indexTr = self.getTargetsGroups().length
      const strTr = `<div class="xt-card xt-toggle rounded-md text-sm p-6 text-black bg-gray-200">Target ${indexTr}</div>`
      document.querySelector('#toggle--eventmethods-targets').append(Xt.createElement(strTr))
      // reinit
      logAdd('<strong>reinit</strong>')
      self.reinit()
    }, 200).toString()
  }

  addBtn.addEventListener('click', addFnc)

  // remove

  const removeBtn = document.querySelector('#button--toggle-eventmethods-remove')

  const removeFnc = () => {
    clearTimeout(parseFloat(object.dataset.reinitTimeout))
    object.dataset.reinitTimeout = setTimeout(() => {
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

  const reinitBtn = document.querySelector('#button--toggle-eventmethods-reinit')

  const reinitFnc = () => {
    clearTimeout(parseFloat(object.dataset.reinitTimeout))
    object.dataset.reinitTimeout = setTimeout(() => {
      logAdd('<strong>reinit</strong>')
      self.reinit()
    }, 200).toString()
  }

  reinitBtn.addEventListener('click', reinitFnc)

  // restart

  const restartBtn = document.querySelector('#button--toggle-eventmethods-restart')

  const restartFnc = () => {
    logAdd('<strong>restart</strong>')
    self.restart()
  }

  restartBtn.addEventListener('click', restartFnc)

  // destroy

  const destroyBtn = document.querySelector('#button--toggle-eventmethods-destroy')

  const destroyFnc = () => {
    logAdd('<strong>destroy</strong>')
    self.destroy()
  }

  destroyBtn.addEventListener('click', destroyFnc)

  // unmount

  const unmountBtn = document.querySelector('#button--toggle-eventmethods-unmount')

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
    if (e.target.getAttribute('title')) {
      str += ` from <strong>${e.target.getAttribute('title')}</strong>`
    } else if (e.target.querySelector(':scope > .xt-button')) {
      str += ` from <strong>${e.target.querySelector(':scope > .xt-button').textContent}</strong>`
    } else if (e.target.querySelector('.xt-card > *')) {
      str += ` from <strong>${e.target.querySelector('.xt-card > *').textContent}</strong>`
    } else if (e.target.querySelector(':scope > *')) {
      str += ` from <strong>${e.target.querySelector(':scope > *').textContent}</strong>`
    } else if (!e.target.querySelector('*')) {
      str += ` from <strong>${e.target.innerHTML}</strong>`
    }
    logAdd(str)
  }

  object.addEventListener('init.xt.toggle', events)
  object.addEventListener('destroy.xt.toggle', events)
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
    object.removeEventListener('init.xt.toggle', events)
    object.removeEventListener('destroy.xt.toggle', events)
    document.removeEventListener('on.xt.toggle', events, true)
    document.removeEventListener('off.xt.toggle', events, true)
    self.destroy()
    self = null
  }
  return unmount
}
