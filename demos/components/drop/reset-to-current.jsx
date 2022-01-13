import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/drop'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--drop-reset-to-current-react" ref={ref}>
      <div className="xt-card p-7 sm:p-9 text-base rounded-2xl text-white xt-links-inverse bg-primary-500">
        <div
          className="xt-list items-center"
          data-xt-drop="{ mouseParent: true, on: 'mouseenter focus', off: 'mouseleave' }">
          <div>
            <button
              type="button"
              className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
              data-xt-drop-element>
              Drop
            </button>

            <div className="xt-drop xt-drop-static" data-xt-drop-target>
              <div className="xt-card w-full shadow-lg text-gray-900 xt-links-default bg-white">
                <button
                  type="button"
                  className="xt-button xt-dismiss absolute top-0 right-0 p-5 text-xl"
                  aria-label="Close">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="xt-icon "
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                <div className="p-7 sm:p-9 text-base">
                  <div className="xt-h4">Drop static 0</div>
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <button
              type="button"
              className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
              data-xt-drop-element>
              Drop
            </button>

            <div className="xt-drop xt-drop-static on current" data-xt-drop-target>
              <div className="xt-card w-full shadow-lg text-gray-900 xt-links-default bg-white">
                <button
                  type="button"
                  className="xt-button xt-dismiss absolute top-0 right-0 p-5 text-xl"
                  aria-label="Close">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="xt-icon "
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                <div className="p-7 sm:p-9 text-base">
                  <div className="xt-h4">Drop static 1</div>
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <button
              type="button"
              className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
              data-xt-drop-element>
              Drop
            </button>

            <div className="xt-drop xt-drop-static" data-xt-drop-target>
              <div className="xt-card w-full shadow-lg text-gray-900 xt-links-default bg-white">
                <button
                  type="button"
                  className="xt-button xt-dismiss absolute top-0 right-0 p-5 text-xl"
                  aria-label="Close">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="xt-icon "
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                <div className="p-7 sm:p-9 text-base">
                  <div className="xt-h4">Drop static 2</div>
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* mountDrops */

const mountDrops = ({ ref }) => {
  // vars

  const drop = ref.querySelector('[data-xt-drop]')
  const self = Xt.get({ name: 'xt-drop', el: drop })

  // off

  const off = () => {
    /***/
    // reset to current when no activation
    if (self.index === null) {
      const current = self.targets.filter(x => x.classList.contains('current'))[0]
      current.dispatchEvent(new CustomEvent('on.trigger.xt.drop'))
    }
    /***/
  }

  for (const tr of self.targets) {
    tr.addEventListener('off.xt.drop', off)
  }

  // unmount

  return () => {}
}

/* mount */

const mount = ({ ref }) => {
  const unmountDrops = mountDrops({ ref })

  // unmount

  return () => {
    unmountDrops()
  }
}
