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
          className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 active:bg-gray-500 on:bg-gray-500"
          data-xt-group="0">
          Toggle 0
        </button>

        <button
          type="button"
          className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 active:bg-gray-500 on:bg-gray-500"
          data-xt-group="1">
          Toggle 1
        </button>

        <div
          className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200 transform transition opacity-0 -translate-x-4 in:opacity-100 in:duration-1000 in:translate-x-0 out:duration-500 out:translate-x-4"
          data-xt-group="0">
          Target 0a
        </div>

        <div
          className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200 transform transition opacity-0 -translate-x-4 in:opacity-100 in:duration-500 in:translate-x-0 out:duration-500 out:translate-x-4"
          data-xt-group="0">
          Target 0b
        </div>

        <div
          className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200 transform transition opacity-0 -translate-x-4 in:opacity-100 in:duration-0 in:translate-x-0 out:duration-500 out:translate-x-4"
          data-xt-group="0">
          Target 0c
        </div>

        <div
          className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200 transform transition opacity-0 -translate-x-4 in:opacity-100 in:duration-0 in:translate-x-0 out:duration-500 out:translate-x-4"
          data-xt-group="0">
          Target 0d
        </div>

        <div
          className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200 transform transition opacity-0 -translate-x-4 in:opacity-100 in:duration-1000 in:translate-x-0 out:duration-500 out:translate-x-4"
          data-xt-group="1"
          data-xt-duration-in="1000"
          data-xt-duration-out="0"
          data-xt-delay-in="0"
          data-xt-delay-out="500">
          Target 1a
        </div>

        <div
          className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200 transform transition opacity-0 -translate-x-4 in:opacity-100 in:duration-500 in:translate-x-0 out:duration-500 out:translate-x-4"
          data-xt-group="1"
          data-xt-duration-in="500"
          data-xt-duration-out="500"
          data-xt-delay-in="250"
          data-xt-delay-out="500">
          Target 1b
        </div>

        <div
          className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200 transform transition opacity-0 -translate-x-4 in:opacity-100 in:duration-0 in:translate-x-0 out:duration-500 out:translate-x-4"
          data-xt-group="1"
          data-xt-duration-in="0"
          data-xt-duration-out="1000"
          data-xt-delay-in="500"
          data-xt-delay-out="250">
          Target 1c
        </div>

        <div
          className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200 transform transition opacity-0 -translate-x-4 in:opacity-100 in:duration-0 in:translate-x-0 out:duration-500 out:translate-x-4"
          data-xt-group="1"
          data-xt-duration-in="0"
          data-xt-duration-out="1000"
          data-xt-delay-in="500"
          data-xt-delay-out="0">
          Target 1d
        </div>
      </div>
    </div>
  )
}

/* mount */

const mount = ({ ref }) => {
  const unmountToggle = mountToggle({ ref })

  // unmount

  return () => {
    unmountToggle()
  }
}

/* mountToggle */

const mountToggle = ({ ref }) => {
  // init

  /***/
  new Xt.Toggle(ref.querySelector(':scope > .xt-list'), {
    elements: ':scope > .xt-button',
    targets: ':scope > .xt-toggle',
    durationIn: ({ current, total }) => {
      return Math.min((total - current) * 500, 1000)
    },
    durationOut: ({ current }) => {
      return Math.min(current * 500, 1000)
    },
    delayIn: ({ current }) => {
      return Math.min(current * 250, 500)
    },
    delayOut: ({ current, total }) => {
      return Math.min((total - current) * 250, 500)
    },
  })
  /***/

  // unmount

  return () => {}
}
