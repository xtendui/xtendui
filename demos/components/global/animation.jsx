import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'

export default function Demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--javascript-animation-react" ref={ref}>
      <button
        type="button"
        className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600 overflow-hidden">
        Lorem ipsum
        <span
          className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 *** off:hidden out:pointer-events-none transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
          data-xt-duration="1000"
          data-node-target>
          Active
        </span>
      </button>
    </div>
  )
}

/* mountActivation */

const mountActivation = ({ ref }) => {
  // vars

  const tr = ref.querySelector('[data-node-target]')

  // init

  const timeout = () => {
    if (!tr.classList.contains('on')) {
      Xt.on({ el: tr })
    } else {
      Xt.off({ el: tr })
    }
  }

  tr.dataset.interval = setInterval(timeout, 2000)

  // unmount

  return () => {
    clearTimeout(tr.dataset.interval)
  }
}

/* mount */

const mount = ({ ref }) => {
  const unmountActivation = mountActivation({ ref })

  // unmount

  return () => {
    unmountActivation()
  }
}
