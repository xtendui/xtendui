import React, { useRef, useCallback } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/toggle'

export default function component() {
  const nodeRef = useRef(null)
  let unmount
  const ref = useCallback(ref => {
    if (nodeRef.current) {
      unmount(nodeRef.current)
    }
    nodeRef.current = ref
    if (ref !== null) {
      unmount = mount({ ref })
    }
  }, [])

  return (
    <div className="demo--toggle-eventmethods-react" ref={ref}>
      <div className="xt-list xt-list-3 items-center mb-4">
        <button
          type="button"
          className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
          id="button--toggle-eventmethods-first-element">
          on 1st element
        </button>
        <button
          type="button"
          className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
          id="button--toggle-eventmethods-first-target">
          on 1st target
        </button>
        <button
          type="button"
          className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
          id="button--toggle-eventmethods-autostart">
          Autostart
        </button>
        <button
          type="button"
          className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
          id="button--toggle-eventmethods-autostop">
          Autostop
        </button>
        <button
          type="button"
          className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
          id="button--toggle-eventmethods-add">
          Add
        </button>
        <button
          type="button"
          className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
          id="button--toggle-eventmethods-remove">
          Remove
        </button>
        <button
          type="button"
          className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
          id="button--toggle-eventmethods-reinit">
          Reinit
        </button>
        <button
          type="button"
          className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
          id="button--toggle-eventmethods-restart">
          Restart
        </button>
        <button
          type="button"
          className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
          id="button--toggle-eventmethods-destroy">
          Destroy
        </button>
        <button
          type="button"
          className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
          id="button--toggle-eventmethods-unmount">
          Unmount
        </button>
      </div>

      <div id="toggle--eventmethods">
        <div className="xt-list xt-list-3 items-center mb-4" id="toggle--eventmethods-elements">
          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
            data-xt-group="0">
            Toggle Group 0
          </button>
          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
            data-xt-group="0">
            Toggle Group 0
          </button>
          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
            Toggle 1
          </button>
          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
            Toggle 2
          </button>
        </div>

        <div className="xt-list xt-list-3 items-center" id="toggle--eventmethods-targets">
          <div
            className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200"
            data-xt-group="0">
            Target Group 0
          </div>
          <div
            className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200"
            data-xt-group="0">
            Target Group 0
          </div>
          <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">
            Target 1
          </div>
          <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">
            Target 2
          </div>
        </div>
      </div>

      <div className="xt-card rounded-md text-black xt-links-default bg-gray-200 mt-6">
        <div
          className="text-sm py-6 px-7 overflow-y-auto overflow-x-hidden xt-overflow-sub max-h-56"
          id="card--toggle-eventmethods-log"></div>
      </div>
    </div>
  )
}

/* mount */

const mount = ({ ref }) => {
  const unmountEventmethods = mountEventmethods({ ref })

  // unmount

  return () => {
    unmountEventmethods()
  }
}

/* mountEventmethods */

const mountEventmethods = ({ ref }) => {
  // init

  let self = new Xt.Toggle(ref.querySelector('#toggle--eventmethods'), {
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
    clearTimeout(parseFloat(ref.dataset.reinitTimeout))
    ref.dataset.reinitTimeout = setTimeout(() => {
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

  const reinitBtn = document.querySelector('#button--toggle-eventmethods-reinit')

  const reinitFnc = () => {
    clearTimeout(parseFloat(ref.dataset.reinitTimeout))
    ref.dataset.reinitTimeout = setTimeout(() => {
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
