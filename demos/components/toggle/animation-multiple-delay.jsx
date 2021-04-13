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
    <div className="demo--toggle-animation-multiple-delay-react" ref={ref}>
      <div className="xt-list xt-list-3 items-center">
        <button
          type="button"
          className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400"
          data-xt-group="0">
          Toggle 0
        </button>

        <button
          type="button"
          className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400"
          data-xt-group="1">
          Toggle 1
        </button>

        <div
          className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200 transform transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4"
          data-xt-duration="500"
          data-xt-group="0">
          Toggle 0a
        </div>

        <div
          className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200 transform transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4"
          data-xt-duration="500"
          data-xt-group="0">
          Toggle 0b
        </div>

        <div
          className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200 transform transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4"
          data-xt-duration="500"
          data-xt-group="0">
          Toggle 0c
        </div>

        <div
          className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200 transform transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4"
          data-xt-duration="500"
          data-xt-group="1">
          Target 1a
        </div>

        <div
          className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200 transform transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4"
          data-xt-duration="500"
          data-xt-group="1">
          Target 1b
        </div>

        <div
          className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200 transform transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4"
          data-xt-duration="500"
          data-xt-group="1">
          Target 1c
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

  new Xt.Toggle(ref.querySelector(':scope > .xt-list'), {
    delayIn: current => {
      return Math.min(current * 150, 300)
    },
    delayOut: (current, total) => {
      return Math.min((total - current) * 150, 300)
    },
  })

  // unmount

  return () => {}
}
