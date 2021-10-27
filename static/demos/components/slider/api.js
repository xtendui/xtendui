import { Xt } from 'xtendui'
import 'xtendui/src/slider'

/* mountEventmethods */

const mountEventmethods = ({ ref }) => {
  // vars

  const slider = ref.querySelector('#slider--eventmethods')

  // init

  /***/
  let self = new Xt.Slider(slider, {
    wrap: true,
  })
  /***/

  // log

  const log = document.querySelector('#card--slider-api-log')

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

  const firstEl = document.querySelector('#button--slider-api-first-element')

  const firstElFnc = () => {
    logAdd('<strong>1st element</strong>')
    const els = self.elements
    els[0].dispatchEvent(new CustomEvent('on.trigger.xt.slider'))
  }

  firstEl.addEventListener('click', firstElFnc)

  // on first target

  const firstTr = document.querySelector('#button--slider-api-first-target')

  const firstTrFnc = () => {
    logAdd('<strong>1st target</strong>')
    const trs = self.targets
    trs[0].dispatchEvent(new CustomEvent('on.trigger.xt.slider'))
  }

  firstTr.addEventListener('click', firstTrFnc)

  // add

  const addBtn = document.querySelector('#button--slider-api-add')

  const addFnc = () => {
    clearTimeout(parseFloat(slider.dataset.reinitTimeout))
    slider.dataset.reinitTimeout = setTimeout(() => {
      logAdd('<strong>add</strong>')
      // targets
      const trs = self.targets
      const indexTr = trs.length + 1
      const strTr = `
      <div class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
        <div class="xt-card text-gray-900 xt-links-default rounded-md p-8 text-base text-center bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
          <div class="xt-h4">${indexTr}</div>
        </div>
      </div>
      `
      document.querySelector('#slider--eventmethods-targets').append(Xt.node({ str: strTr }))
      // reinit
      logAdd('<strong>reinit</strong>')
      self.reinit()
    }, 200).toString()
  }

  addBtn.addEventListener('click', addFnc)

  // remove

  const removeBtn = document.querySelector('#button--slider-api-remove')

  const removeFnc = () => {
    clearTimeout(parseFloat(slider.dataset.reinitTimeout))
    slider.dataset.reinitTimeout = setTimeout(() => {
      logAdd('<strong>remove</strong>')
      // elements
      const els = self.elements
      els[els.length - 1].remove()
      // targets
      const trs = self.targets
      trs[trs.length - 1].remove()
      // reinit
      logAdd('<strong>reinit</strong>')
      self.reinit()
    }, 200).toString()
  }

  removeBtn.addEventListener('click', removeFnc)

  // reinit

  const reinitBtn = document.querySelector('#button--slider-api-reinit')

  const reinitFnc = () => {
    clearTimeout(parseFloat(slider.dataset.reinitTimeout))
    slider.dataset.reinitTimeout = setTimeout(() => {
      // reinit
      logAdd('<strong>reinit</strong>')
      self.reinit()
    }, 200).toString()
  }

  reinitBtn.addEventListener('click', reinitFnc)

  // restart

  const restartBtn = document.querySelector('#button--slider-api-restart')

  const restartFnc = () => {
    logAdd('<strong>restart</strong>')
    self.restart()
  }

  restartBtn.addEventListener('click', restartFnc)

  // disable

  const disableBtn = document.querySelector('#button--slider-api-disable')

  const disableFnc = () => {
    logAdd('<strong>disable</strong>')
    self.disable()
  }

  disableBtn.addEventListener('click', disableFnc)

  // enable

  const enableBtn = document.querySelector('#button--slider-api-enable')

  const enableFnc = () => {
    logAdd('<strong>enable</strong>')
    self.enable()
  }

  enableBtn.addEventListener('click', enableFnc)

  // destroy

  const destroyBtn = document.querySelector('#button--slider-api-destroy')

  const destroyFnc = () => {
    logAdd('<strong>destroy</strong>')
    self.destroy()
  }

  destroyBtn.addEventListener('click', destroyFnc)

  // unmount

  const unmountBtn = document.querySelector('#button--slider-api-unmount')

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

  slider.addEventListener('init.xt.slider', events)
  slider.addEventListener('destroy.xt.slider', events)
  document.addEventListener('on.xt.slider', events, true) // usecapture event propagation
  document.addEventListener('off.xt.slider', events, true) // usecapture event propagation

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
    slider.removeEventListener('init.xt.slider', events)
    slider.removeEventListener('destroy.xt.slider', events)
    document.removeEventListener('on.xt.slider', events, true) // usecapture event propagation
    document.removeEventListener('off.xt.slider', events, true) // usecapture event propagation
    self.destroy()
    self = null
  }
  return unmount
}

/* mount */

Xt.mount({
  matches: '.demo--slider-api',
  mount: ({ ref }) => {
    const unmountEventmethods = mountEventmethods({ ref })

    // unmount

    return () => {
      unmountEventmethods()
    }
  },
})
