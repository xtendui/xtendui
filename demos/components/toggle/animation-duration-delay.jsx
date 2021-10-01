import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/toggle'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--toggle-animation-duration-delay-react" ref={ref}>
      <div className="xt-list xt-list-3 items-center">
        <button
          type="button"
          className="xt-button py-2 px-3 text-xs rounded-full font-medium leading-snug text-gray-900 bg-gray-100 transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
          data-xt-toggle-element
          data-xt-group="0">
          Toggle 0
        </button>

        <button
          type="button"
          className="xt-button py-2 px-3 text-xs rounded-full font-medium leading-snug text-gray-900 bg-gray-100 transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
          data-xt-toggle-element
          data-xt-group="1">
          Toggle 1
        </button>

        <div
          className="off:hidden out:pointer-events-none rounded-full text-xs py-2 px-3 font-medium shadow w-full *** transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
          data-xt-toggle-target
          data-xt-group="0">
          Target 0a
        </div>

        <div
          className="off:hidden out:pointer-events-none rounded-full text-xs py-2 px-3 font-medium shadow w-full *** transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
          data-xt-toggle-target
          data-xt-group="0">
          Target 0b
        </div>

        <div
          className="off:hidden out:pointer-events-none rounded-full text-xs py-2 px-3 font-medium shadow w-full *** transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
          data-xt-toggle-target
          data-xt-group="0">
          Target 0c
        </div>

        <div
          className="off:hidden out:pointer-events-none rounded-full text-xs py-2 px-3 font-medium shadow w-full *** transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
          data-xt-toggle-target
          data-xt-group="0">
          Target 0d
        </div>

        <div
          className="off:hidden out:pointer-events-none rounded-full text-xs py-2 px-3 font-medium shadow w-full *** transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
          data-xt-toggle-target
          data-xt-group="1">
          Target 1a
        </div>

        <div
          className="off:hidden out:pointer-events-none rounded-full text-xs py-2 px-3 font-medium shadow w-full *** transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
          data-xt-toggle-target
          data-xt-group="1">
          Target 1b
        </div>

        <div
          className="off:hidden out:pointer-events-none rounded-full text-xs py-2 px-3 font-medium shadow w-full *** transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
          data-xt-toggle-target
          data-xt-group="1">
          Target 1c
        </div>

        <div
          className="off:hidden out:pointer-events-none rounded-full text-xs py-2 px-3 font-medium shadow w-full *** transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
          data-xt-toggle-target
          data-xt-group="1">
          Target 1d
        </div>
      </div>
    </div>
  )
}

/* mountToggle */

const mountToggle = ({ ref }) => {
  // vars

  const toggle = ref

  // init

  /***/
  new Xt.Toggle(toggle, {
    durationIn: ({ current, total, el, self }) => {
      if (self.elements.includes(el)) return
      const val = (total - current) * 300
      el.style.transitionDuration = `${val}ms`
      return val
    },
    delayIn: ({ current, el, self }) => {
      if (self.elements.includes(el)) return
      const val = current * 300
      return val
    },
    durationOut: ({ current, el, self }) => {
      if (self.elements.includes(el)) return
      const val = current * 150
      el.style.transitionDuration = `${val}ms`
      return val
    },
    delayOut: ({ current, total, el, self }) => {
      if (self.elements.includes(el)) return
      const val = (total - current) * 150
      return val
    },
  })
  /***/

  // unmount

  return () => {}
}

/* mount */

const mount = ({ ref }) => {
  const unmountToggle = mountToggle({ ref })

  // unmount

  return () => {
    unmountToggle()
  }
}
