import { Xt } from 'xtendui'
import 'xtendui/src/core/overlay'

Xt.mount.push({
  matches: '.CCC--overlay-events',
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
  const overlay = object.querySelector('#overlay--events')
  const overlayAlt = object.querySelector('#overlay--events-alt')

  // init

  let self = new Xt.Overlay(overlay, {
    targets: '#overlay--nested',
  })

  new Xt.Overlay(overlayAlt, {
    targets: '#overlay--nested',
  })

  // log

  const log = object.querySelector('#card--overlay-events-log')

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

  // first element

  const firstEl = object.querySelector('#button--overlay-events-first-element')

  const firstElFnc = () => {
    logAdd('<strong>1st element</strong>')
    const elements = self.elements
    elements[0].dispatchEvent(new CustomEvent('on.trigger.xt.overlay'))
  }

  firstEl.addEventListener('click', firstElFnc)

  // first target

  const firstTr = object.querySelector('#button--overlay-events-first-target')

  const firstTrFnc = () => {
    logAdd('<strong>1st target</strong>')
    const targets = self.targets
    targets[0].dispatchEvent(new CustomEvent('on.trigger.xt.overlay'))
  }

  firstTr.addEventListener('click', firstTrFnc)

  // reinit

  const reinitBtn = object.querySelector('#button--overlay-events-reinit')

  const reinitFnc = () => {
    clearTimeout(parseFloat(object.dataset.reinitTimeout))
    object.dataset.reinitTimeout = setTimeout(() => {
      logAdd('<strong>reinit</strong>')
      self.reinit()
    }, 200).toString()
  }

  reinitBtn.addEventListener('click', reinitFnc)

  // restart

  const restartBtn = object.querySelector('#button--overlay-events-restart')

  const restartFnc = () => {
    logAdd('<strong>restart</strong>')
    self.restart()
  }

  restartBtn.addEventListener('click', restartFnc)

  // destroy

  const destroyBtn = object.querySelector('#button--overlay-events-destroy')

  const destroyFnc = () => {
    logAdd('<strong>destroy</strong>')
    self.destroy()
  }

  destroyBtn.addEventListener('click', destroyFnc)

  // unmount

  const unmountBtn = object.querySelector('#button--overlay-events-unmount')

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
    } else if (e.target.querySelector('.xt-card > *:not(.xt-dismiss) > *')) {
      str += ` from <strong>${e.target.querySelector('.xt-card > *:not(.xt-dismiss) > *').textContent}</strong>`
    } else if (e.target.querySelector(':scope > *')) {
      str += ` from <strong>${e.target.querySelector(':scope > *').textContent}</strong>`
    } else if (!e.target.querySelector('*')) {
      str += ` from <strong>${e.target.innerHTML}</strong>`
    }
    logAdd(str)
  }

  object.addEventListener('init.xt.overlay', events)
  object.addEventListener('destroy.xt.overlay', events)
  document.addEventListener('on.xt.overlay', events, true)
  document.addEventListener('off.xt.overlay', events, true)

  // unmount

  const unmount = () => {
    firstEl.removeEventListener('click', firstElFnc)
    firstTr.removeEventListener('click', firstTrFnc)
    reinitBtn.removeEventListener('click', reinitFnc)
    restartBtn.removeEventListener('click', restartFnc)
    destroyBtn.removeEventListener('click', destroyFnc)
    unmountBtn.removeEventListener('click', unmountFnc)
    object.removeEventListener('init.xt.overlay', events)
    object.removeEventListener('destroy.xt.overlay', events)
    document.removeEventListener('on.xt.overlay', events, true)
    document.removeEventListener('off.xt.overlay', events, true)
    self.destroy()
    self = null
  }
  return unmount
}
