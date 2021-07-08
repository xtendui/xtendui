import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/toggle'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--toggle-reset-to-current-react" ref={ref}>
      <div className="xt-list xt-list-3 items-center" data-xt-toggle>
        <button
          type="button"
          className="xt-button rounded-full py-2.5 px-3.5 text-xs text-black font-semibold bg-gray-200 transition hover:bg-gray-300 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500 transition"
          data-xt-toggle-element>
          Toggle 0
        </button>

        <button
          type="button"
          className="xt-button rounded-full py-2.5 px-3.5 text-xs text-black font-semibold bg-gray-200 transition hover:bg-gray-300 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500 transition"
          data-xt-toggle-element>
          Toggle 1
        </button>

        <button
          type="button"
          className="xt-button rounded-full py-2.5 px-3.5 text-xs text-black font-semibold bg-gray-200 transition hover:bg-gray-300 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500 transition"
          data-xt-toggle-element>
          Toggle 2
        </button>

        <div
          className="off:hidden out:pointer-events-none rounded-full text-xs py-2.5 px-3.5 font-semibold shadow"
          data-xt-toggle-target>
          Target 0
        </div>

        <div
          className="off:hidden out:pointer-events-none rounded-full text-xs py-2.5 px-3.5 font-semibold shadow on current"
          data-xt-toggle-target>
          Target 1
        </div>

        <div
          className="off:hidden out:pointer-events-none rounded-full text-xs py-2.5 px-3.5 font-semibold shadow"
          data-xt-toggle-target>
          Target 2
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
  // vars

  const toggle = ref.querySelector('[data-xt-toggle]')

  // init

  let self = Xt.get('xt-toggle', toggle)

  // off

  const off = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr)) {
      // reset to current when no activation
      if (self.currentIndex === null) {
        const current = self.targets.filter(x => x.classList.contains('current'))[0]
        current.dispatchEvent(new CustomEvent('on.trigger.xt.toggle'))
      }
    }
  }

  for (const tr of self.targets) {
    tr.addEventListener('off.xt.toggle', off)
  }

  // unmount

  return () => {}
}
