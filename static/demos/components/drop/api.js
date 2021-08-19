import { Xt } from 'xtendui'
import 'xtendui/src/drop'

Xt.mount({
  matches: '.demo--drop-api',
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

  const drop = ref.querySelector('#drop--eventmethods')

  // init

  /***/
  let self = new Xt.Drop(drop, {
    closeOutside: false,
  })
  /***/

  // log

  const log = ref.querySelector('#card--drop-api-log')

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

  const firstEl = ref.querySelector('#button--drop-api-first-element')

  const firstElFnc = () => {
    logAdd('<strong>1st element</strong>')
    const els = self.elements
    els[0].dispatchEvent(new CustomEvent('on.trigger.xt.drop'))
  }

  firstEl.addEventListener('click', firstElFnc)

  // on first target

  const firstTr = ref.querySelector('#button--drop-api-first-target')

  const firstTrFnc = () => {
    logAdd('<strong>1st target</strong>')
    const trs = self.targets
    trs[0].dispatchEvent(new CustomEvent('on.trigger.xt.drop'))
  }

  firstTr.addEventListener('click', firstTrFnc)

  // off first element

  const firstElOff = ref.querySelector('#button--drop-api-first-element-off')

  const firstElOffFnc = () => {
    logAdd('<strong>off 1st element</strong>')
    const els = self.elements
    els[0].dispatchEvent(new CustomEvent('off.trigger.xt.drop'))
  }

  firstElOff.addEventListener('click', firstElOffFnc)

  // on first target

  const firstTrOff = ref.querySelector('#button--drop-api-first-target-off')

  const firstTrOffFnc = () => {
    logAdd('<strong>off 1st target</strong>')
    const trs = self.targets
    trs[0].dispatchEvent(new CustomEvent('off.trigger.xt.drop'))
  }

  firstTrOff.addEventListener('click', firstTrOffFnc)

  // add

  const addBtn = ref.querySelector('#button--drop-api-add')

  const addFnc = () => {
    clearTimeout(parseFloat(drop.dataset.reinitTimeout))
    drop.dataset.reinitTimeout = setTimeout(() => {
      logAdd('<strong>add</strong>')
      // elements
      const els = self.elements
      const indexEl = els.length + 1
      const strEl = `
        <button type="button" class="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-medium leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600"
          data-xt-drop-element>
          Drop ${indexEl}
        </button>
      `
      drop.append(Xt.node({ str: strEl }))
      const trs = self.targets
      const indexTr = trs.length + 1
      const strTr = `
        <div class="xt-drop p-3" title="Target ${indexTr}"
          data-xt-drop-target>
          <div class="xt-card w-64 rounded-md shadow-drop bg-gray-100">
            <nav class="list flex-col p-3">
              <a href="#" class="xt-button py-2 px-3 text-xs rounded-md  w-full justify-start text-left text-black font-medium transition hover:text-white hover:bg-primary-500 active:text-white active:bg-primary-600 on:text-white on:bg-primary-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button type="button" class="xt-button py-2 px-3 text-xs rounded-md  w-full justify-start text-left text-black font-medium transition hover:text-white hover:bg-primary-500 active:text-white active:bg-primary-600 on:text-white on:bg-primary-500">
                Dolor sit
              </button>
              <button type="button" class="xt-button py-2 px-3 text-xs rounded-md  w-full justify-start text-left text-black font-medium transition hover:text-white hover:bg-primary-500 active:text-white active:bg-primary-600 on:text-white on:bg-primary-500">
                Amet
              </button>
            </nav>
          </div>
        </div>
      `
      drop.append(Xt.node({ str: strTr }))
      // reinit
      logAdd('<strong>reinit</strong>')
      self.reinit()
    }, 200).toString()
  }

  addBtn.addEventListener('click', addFnc)

  // remove

  const removeBtn = ref.querySelector('#button--drop-api-remove')

  const removeFnc = () => {
    clearTimeout(parseFloat(drop.dataset.reinitTimeout))
    drop.dataset.reinitTimeout = setTimeout(() => {
      logAdd('<strong>remove</strong>')
      // element
      const els = self.elements
      els[els.length - 1].remove()
      // reinit
      logAdd('<strong>reinit</strong>')
      self.reinit()
    }, 200).toString()
  }

  removeBtn.addEventListener('click', removeFnc)

  // reinit

  const reinitBtn = ref.querySelector('#button--drop-api-reinit')

  const reinitFnc = () => {
    clearTimeout(parseFloat(drop.dataset.reinitTimeout))
    drop.dataset.reinitTimeout = setTimeout(() => {
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

  const restartBtn = ref.querySelector('#button--drop-api-restart')

  const restartFnc = () => {
    logAdd('<strong>restart</strong>')
    self.restart()
  }

  restartBtn.addEventListener('click', restartFnc)

  // destroy

  const destroyBtn = ref.querySelector('#button--drop-api-destroy')

  const destroyFnc = () => {
    logAdd('<strong>destroy</strong>')
    self.destroy()
  }

  destroyBtn.addEventListener('click', destroyFnc)

  // unmount

  const unmountBtn = ref.querySelector('#button--drop-api-unmount')

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

  drop.addEventListener('init.xt.drop', events)
  drop.addEventListener('destroy.xt.drop', events)
  document.addEventListener('on.xt.drop', events, true)
  document.addEventListener('off.xt.drop', events, true)

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
    drop.removeEventListener('init.xt.drop', events)
    drop.removeEventListener('destroy.xt.drop', events)
    document.removeEventListener('on.xt.drop', events, true)
    document.removeEventListener('off.xt.drop', events, true)
    self.destroy()
    self = null
  }
  return unmount
}
