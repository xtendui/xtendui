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
          className="xt-button py-2 px-3 text-xs rounded-full font-medium leading-snug text-gray-900 bg-gray-100 transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
          data-xt-toggle-element>
          Toggle 0
        </button>

        <button
          type="button"
          className="xt-button py-2 px-3 text-xs rounded-full font-medium leading-snug text-gray-900 bg-gray-100 transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
          data-xt-toggle-element>
          Toggle 1
        </button>

        <button
          type="button"
          className="xt-button py-2 px-3 text-xs rounded-full font-medium leading-snug text-gray-900 bg-gray-100 transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
          data-xt-toggle-element>
          Toggle 2
        </button>

        <div
          className="off:hidden out:pointer-events-none rounded-full text-xs py-2 px-3 font-medium shadow"
          data-xt-toggle-target>
          Target 0
        </div>

        <div
          className="off:hidden out:pointer-events-none rounded-full text-xs py-2 px-3 font-medium shadow on current"
          data-xt-toggle-target>
          Target 1
        </div>

        <div
          className="off:hidden out:pointer-events-none rounded-full text-xs py-2 px-3 font-medium shadow"
          data-xt-toggle-target>
          Target 2
        </div>
      </div>
    </div>
  )
}

/* mountToggle */

const mountToggle = ({ ref }) => {
  // vars

  const toggle = ref.querySelector('[data-xt-toggle]')
  const self = Xt.get({ name: 'xt-toggle', el: toggle })

  // off

  const off = e => {
    const tr = e.target
    /***/
    // check because of event propagation
    if (self.targets.includes(tr)) {
      // reset to current when no activation
      if (self.index === null) {
        const current = self.targets.filter(x => x.classList.contains('current'))[0]
        current.dispatchEvent(new CustomEvent('on.trigger.xt.toggle'))
      }
    }
    /***/
  }

  for (const tr of self.targets) {
    tr.addEventListener('off.xt.toggle', off)
  }

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
