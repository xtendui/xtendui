import { Xt } from 'xtendui'
import 'xtendui/src/core/slider'

Xt.mount.push({
  matches: '.CCC--slider-events',
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
  const slider = object.querySelector('#slider--events')

  // init

  let self = new Xt.Slider(slider, {
    auto: {
      time: 2000,
      initial: false,
    },
    drag: {
      wrap: true,
    },
    group: 1,
    matches: {
      '(min-width: 768px)': {
        group: 0.8,
      },
    },
  })

  // log

  const log = document.querySelector('#card--slider-events-log')

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

  const firstEl = document.querySelector('#button--slider-events-first-element')

  const firstElFnc = () => {
    logAdd('<strong>1st element</strong>')
    const elements = self.elements.filter(x => !x.classList.contains('xt-wrap'))
    elements[0].dispatchEvent(new CustomEvent('on.trigger.xt.slider'))
  }

  firstEl.addEventListener('click', firstElFnc)

  // first target

  const firstTr = document.querySelector('#button--slider-events-first-target')

  const firstTrFnc = () => {
    logAdd('<strong>1st target</strong>')
    const targets = self.targets.filter(x => !x.classList.contains('xt-wrap'))
    targets[0].dispatchEvent(new CustomEvent('on.trigger.xt.slider'))
  }

  firstTr.addEventListener('click', firstTrFnc)

  // autostart

  const autostartEl = document.querySelector('#button--toggle-events-autostart')

  const autstartFnc = () => {
    logAdd('<strong>autostart</strong>')
    self.object.dispatchEvent(new CustomEvent('autostart.trigger.xt.slider'))
  }

  autostartEl.addEventListener('click', autstartFnc)

  // autostop

  const autostopEl = document.querySelector('#button--toggle-events-autostop')

  const autostopFnc = () => {
    logAdd('<strong>autostop</strong>')
    self.object.dispatchEvent(new CustomEvent('autostop.trigger.xt.slider'))
  }

  autostopEl.addEventListener('click', autostopFnc)

  // add

  const addBtn = document.querySelector('#button--slider-events-add')

  const addFnc = () => {
    clearTimeout(parseFloat(slider.dataset.reinitTimeout))
    slider.dataset.reinitTimeout = setTimeout(() => {
      logAdd('<strong>add</strong>')
      // targets
      const targets = self.targets.filter(x => !x.classList.contains('xt-wrap'))
      const indexTr = targets.length + 1
      const strTr = `
      <div class="xt-slide w-6/12 sm:w-4/12 opacity-50 active:opacity-100">
        <div class="xt-card rounded-md text-base p-8 text-center text-black bg-gray-200">
          <div class="xt-h4">${indexTr}</div>
        </div>
      </div>
      `
      document.querySelector('#slider--events-targets').append(Xt.createElement(strTr))
      // reinit
      logAdd('<strong>reinit</strong>')
      self.reinit()
    }, 200).toString()
  }

  addBtn.addEventListener('click', addFnc)

  // remove

  const removeBtn = document.querySelector('#button--slider-events-remove')

  const removeFnc = () => {
    clearTimeout(parseFloat(slider.dataset.reinitTimeout))
    slider.dataset.reinitTimeout = setTimeout(() => {
      logAdd('<strong>remove</strong>')
      // elements
      const elements = self.elements.filter(x => !x.classList.contains('xt-wrap'))
      elements[elements.length - 1].remove()
      // targets
      const targets = self.targets.filter(x => !x.classList.contains('xt-wrap'))
      targets[targets.length - 1].remove()
      // reinit
      logAdd('<strong>reinit</strong>')
      self.reinit()
    }, 200).toString()
  }

  removeBtn.addEventListener('click', removeFnc)

  // reinit

  const reinitBtn = document.querySelector('#button--slider-events-reinit')

  const reinitFnc = () => {
    clearTimeout(parseFloat(slider.dataset.reinitTimeout))
    slider.dataset.reinitTimeout = setTimeout(() => {
      logAdd('<strong>reinit</strong>')
      self.reinit()
    }, 200).toString()
  }

  reinitBtn.addEventListener('click', reinitFnc)

  // restart

  const restartBtn = document.querySelector('#button--slider-events-restart')

  const restartFnc = () => {
    logAdd('<strong>restart</strong>')
    self.restart()
  }

  restartBtn.addEventListener('click', restartFnc)

  // destroy

  const destroyBtn = document.querySelector('#button--slider-events-destroy')

  const destroyFnc = () => {
    logAdd('<strong>destroy</strong>')
    self.destroy()
  }

  destroyBtn.addEventListener('click', destroyFnc)

  // unmount

  const unmountBtn = document.querySelector('#button--slider-events-unmount')

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

  slider.addEventListener('init.xt.slider', events)
  slider.addEventListener('destroy.xt.slider', events)
  document.addEventListener('on.xt.slider', events, true)
  document.addEventListener('off.xt.slider', events, true)

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
    document.removeEventListener('on.xt.slider', events, true)
    document.removeEventListener('off.xt.slider', events, true)
    self.destroy()
    self = null
  }
  return unmount
}
