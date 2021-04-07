import React, { useRef, useCallback } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import gsap from 'gsap'

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
    <div className="demo--slider-events-react" ref={ref}>
      <div className="xt-list xt-list-3 items-center mb-4">
        <button
          type="button"
          className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
          id="button--slider-eventmethods-first-element">
          on 1st element
        </button>
        <button
          type="button"
          className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
          id="button--slider-eventmethods-first-target">
          on 1st target
        </button>
        <button
          type="button"
          className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
          id="button--toggle-events-autostart">
          Autostart
        </button>
        <button
          type="button"
          className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
          id="button--toggle-events-autostop">
          Autostop
        </button>
        <button
          type="button"
          className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
          id="button--slider-eventmethods-add">
          Add
        </button>
        <button
          type="button"
          className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
          id="button--slider-eventmethods-remove">
          Remove
        </button>
        <button
          type="button"
          className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
          id="button--slider-eventmethods-reinit">
          Reinit
        </button>
        <button
          type="button"
          className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
          id="button--slider-eventmethods-restart">
          Restart
        </button>
        <button
          type="button"
          className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
          id="button--slider-eventmethods-destroy">
          Destroy
        </button>
        <button
          type="button"
          className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
          id="button--slider-eventmethods-unmount">
          Unmount
        </button>
      </div>

      <div className="xt-slider" id="slider--eventmethods">
        <div className="xt-slides">
          <div className="xt-slides-inner xt-row xt-row-4" id="slider--eventmethods-targets">
            <div className="xt-slide w-6/12 sm:w-4/12">
              <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200">
                <div className="xt-h4">1</div>
              </div>
            </div>

            <div className="xt-slide w-6/12 sm:w-4/12">
              <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200">
                <div className="xt-h4">2</div>
              </div>
            </div>

            <div className="xt-slide w-6/12 sm:w-4/12">
              <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200">
                <div className="xt-h4">3</div>
              </div>
            </div>

            <div className="xt-slide w-7/12 sm:w-5/12">
              <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200">
                <div className="xt-h4">4</div>
              </div>
            </div>

            <div className="xt-slide w-7/12 sm:w-5/12">
              <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200">
                <div className="xt-h4">5</div>
              </div>
            </div>
          </div>
        </div>

        <nav className="xt-slider-pagination w-full xt-list xt-list-3 pt-4 items-center justify-center">
          <button
            type="button"
            className="xt-button text-2xs py-2 px-2 w-7 h-7 rounded-full text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
            data-xt-nav="-1"
            title="Previous slide">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="xt-icon text-xl -my-1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            type="button"
            className="xt-button text-2xs py-2 px-3.5 active:px-5 w-5 h-6 rounded-full text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition-all xt-ignore"
            data-xt-pag
            title="Slide xt-num"></button>
          <button
            type="button"
            className="xt-button text-2xs py-2 px-2 w-7 h-7 rounded-full text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
            data-xt-nav="1"
            title="Next slide">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="xt-icon text-xl -my-1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </nav>
      </div>

      <div className="xt-card rounded-md text-black xt-links-default bg-gray-200 mt-6">
        <div
          className="text-sm py-6 px-7 overflow-y-auto overflow-x-hidden xt-overflow-sub max-h-56"
          id="card--slider-eventmethods-log"></div>
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
  const slider = ref.querySelector('#slider--eventmethods')

  // vars

  const dragTime = 1
  const dragEase = 'quint.out'

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

  // dragposition (set internal dragPosition to resume animation mid dragging)

  const dragposition = () => {
    // dragPosition tween with main time and ease
    gsap.killTweensOf(self.detail)
    gsap.to(self.detail, {
      dragPosition: self.detail.dragFinal,
      duration: self.initial || self.detail.dragging ? 0 : dragTime,
      ease: dragEase,
    })
    // dragger tween with main time and ease
    gsap.killTweensOf(self.dragger)
    gsap.to(self.dragger, {
      x: self.detail.dragFinal,
      duration: self.initial || self.detail.dragging ? 0 : dragTime,
      ease: dragEase,
    })
  }

  self.dragger.addEventListener('dragposition.xt.slider', dragposition)

  // log

  const log = document.querySelector('#card--slider-eventmethods-log')

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

  const firstEl = document.querySelector('#button--slider-eventmethods-first-element')

  const firstElFnc = () => {
    logAdd('<strong>on 1st element</strong>')
    const elements = self.elements
    elements[0].dispatchEvent(new CustomEvent('on.trigger.xt.slider'))
  }

  firstEl.addEventListener('click', firstElFnc)

  // on first target

  const firstTr = document.querySelector('#button--slider-eventmethods-first-target')

  const firstTrFnc = () => {
    logAdd('<strong>on 1st target</strong>')
    const targets = self.targets
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

  const addBtn = document.querySelector('#button--slider-eventmethods-add')

  const addFnc = () => {
    clearTimeout(parseFloat(slider.dataset.reinitTimeout))
    slider.dataset.reinitTimeout = setTimeout(() => {
      logAdd('<strong>add</strong>')
      // targets
      const targets = self.targets
      const indexTr = targets.length + 1
      const strTr = `
      <div class="xt-slide w-6/12 sm:w-4/12">
        <div class="xt-card rounded-md text-base p-8 text-center text-black bg-gray-200">
          <div class="xt-h4">${indexTr}</div>
        </div>
      </div>
      `
      document.querySelector('#slider--eventmethods-targets').append(Xt.createElement(strTr))
      // reinit
      logAdd('<strong>reinit</strong>')
      self.reinit()
    }, 200).toString()
  }

  addBtn.addEventListener('click', addFnc)

  // remove

  const removeBtn = document.querySelector('#button--slider-eventmethods-remove')

  const removeFnc = () => {
    clearTimeout(parseFloat(slider.dataset.reinitTimeout))
    slider.dataset.reinitTimeout = setTimeout(() => {
      logAdd('<strong>remove</strong>')
      // elements
      const elements = self.elements
      elements[elements.length - 1].remove()
      // targets
      const targets = self.targets
      targets[targets.length - 1].remove()
      // reinit
      logAdd('<strong>reinit</strong>')
      self.reinit()
    }, 200).toString()
  }

  removeBtn.addEventListener('click', removeFnc)

  // reinit

  const reinitBtn = document.querySelector('#button--slider-eventmethods-reinit')

  const reinitFnc = () => {
    clearTimeout(parseFloat(slider.dataset.reinitTimeout))
    slider.dataset.reinitTimeout = setTimeout(() => {
      logAdd('<strong>reinit</strong>')
      self.reinit()
    }, 200).toString()
  }

  reinitBtn.addEventListener('click', reinitFnc)

  // restart

  const restartBtn = document.querySelector('#button--slider-eventmethods-restart')

  const restartFnc = () => {
    logAdd('<strong>restart</strong>')
    self.restart()
  }

  restartBtn.addEventListener('click', restartFnc)

  // destroy

  const destroyBtn = document.querySelector('#button--slider-eventmethods-destroy')

  const destroyFnc = () => {
    logAdd('<strong>destroy</strong>')
    self.destroy()
  }

  destroyBtn.addEventListener('click', destroyFnc)

  // unmount

  const unmountBtn = document.querySelector('#button--slider-eventmethods-unmount')

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
