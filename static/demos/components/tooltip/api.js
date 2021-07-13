import { Xt } from 'xtendui'
import 'xtendui/src/tooltip'

Xt.mount({
  matches: '.demo--tooltip-api',
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
  // vars

  const tooltip = ref.querySelector('#tooltip--eventmethods')

  // init

  /***/
  let self = new Xt.Tooltip(tooltip, {
    closeOutside: false,
  })
  /***/

  // log

  const log = document.querySelector('#card--tooltip-api-log')

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

  const firstEl = document.querySelector('#button--tooltip-api-first-element')

  const firstElFnc = () => {
    logAdd('<strong>1st element</strong>')
    const els = self.elements
    els[0].dispatchEvent(new CustomEvent('on.trigger.xt.tooltip'))
  }

  firstEl.addEventListener('click', firstElFnc)

  // on first target

  const firstTr = document.querySelector('#button--tooltip-api-first-target')

  const firstTrFnc = () => {
    logAdd('<strong>1st target</strong>')
    const trs = self.targets
    trs[0].dispatchEvent(new CustomEvent('on.trigger.xt.tooltip'))
  }

  firstTr.addEventListener('click', firstTrFnc)

  // off first element

  const firstElOff = ref.querySelector('#button--tooltip-api-first-element-off')

  const firstElOffFnc = () => {
    logAdd('<strong>off 1st element</strong>')
    const els = self.elements
    els[0].dispatchEvent(new CustomEvent('off.trigger.xt.tooltip'))
  }

  firstElOff.addEventListener('click', firstElOffFnc)

  // on first target

  const firstTrOff = ref.querySelector('#button--tooltip-api-first-target-off')

  const firstTrOffFnc = () => {
    logAdd('<strong>off 1st target</strong>')
    const trs = self.targets
    trs[0].dispatchEvent(new CustomEvent('off.trigger.xt.tooltip'))
  }

  firstTrOff.addEventListener('click', firstTrOffFnc)

  // add

  const addBtn = document.querySelector('#button--tooltip-api-add')

  const addFnc = () => {
    clearTimeout(parseFloat(tooltip.dataset.reinitTimeout))
    tooltip.dataset.reinitTimeout = setTimeout(() => {
      logAdd('<strong>add</strong>')
      // elements
      const els = self.elements
      const indexEl = els.length + 1
      const strEl = `
        <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 on:bg-primary-700"
          data-xt-tooltip-element>
          Tooltip ${indexEl}
        </button>
      `
      tooltip.append(Xt.node(strEl))
      const trs = self.targets
      const indexTr = trs.length + 1
      const strTr = `
        <div class="xt-tooltip p-2" title="Target ${indexTr}"
          data-xt-tooltip-target>
          <div class="text-xs py-2 px-3.5 rounded-sm shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
            Lorem ipsum dolor sit amet
          </div>
        </div>
      `
      tooltip.append(Xt.node(strTr))
      // reinit
      logAdd('<strong>reinit</strong>')
      self.restart()
      self.reinit()
    }, 200).toString()
  }

  addBtn.addEventListener('click', addFnc)

  // remove

  const removeBtn = document.querySelector('#button--tooltip-api-remove')

  const removeFnc = () => {
    clearTimeout(parseFloat(tooltip.dataset.reinitTimeout))
    tooltip.dataset.reinitTimeout = setTimeout(() => {
      logAdd('<strong>remove</strong>')
      // element
      const els = self.elements
      els[els.length - 1].remove()
      // reinit
      logAdd('<strong>reinit</strong>')
      self.restart()
      self.reinit()
    }, 200).toString()
  }

  removeBtn.addEventListener('click', removeFnc)

  // reinit

  const reinitBtn = document.querySelector('#button--tooltip-api-reinit')

  const reinitFnc = () => {
    clearTimeout(parseFloat(tooltip.dataset.reinitTimeout))
    tooltip.dataset.reinitTimeout = setTimeout(() => {
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

  const restartBtn = document.querySelector('#button--tooltip-api-restart')

  const restartFnc = () => {
    logAdd('<strong>restart</strong>')
    self.restart()
  }

  restartBtn.addEventListener('click', restartFnc)

  // destroy

  const destroyBtn = document.querySelector('#button--tooltip-api-destroy')

  const destroyFnc = () => {
    logAdd('<strong>destroy</strong>')
    self.destroy()
  }

  destroyBtn.addEventListener('click', destroyFnc)

  // unmount

  const unmountBtn = document.querySelector('#button--tooltip-api-unmount')

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

  tooltip.addEventListener('init.xt.tooltip', events)
  tooltip.addEventListener('destroy.xt.tooltip', events)
  document.addEventListener('on.xt.tooltip', events, true)
  document.addEventListener('off.xt.tooltip', events, true)

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
    tooltip.removeEventListener('init.xt.tooltip', events)
    tooltip.removeEventListener('destroy.xt.tooltip', events)
    document.removeEventListener('on.xt.tooltip', events, true)
    document.removeEventListener('off.xt.tooltip', events, true)
    self.destroy()
    self = null
  }
  return unmount
}
