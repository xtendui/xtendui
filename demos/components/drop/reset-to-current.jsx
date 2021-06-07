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
      <div className="relative py-4 px-6 bg-primary-500">
        <div
          className="xt-list items-center"
          data-xt-drop="{ elements: ':scope > .xt-drop-item', targets: ':scope > .xt-drop-item > .xt-drop', on: 'mouseenter', off: 'mouseleave' }">
          <div className="xt-drop-item">
            <button
              type="button"
              className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
              Drop
            </button>

            <div className="xt-drop xt-drop-static">
              <div className="xt-card w-full shadow-drop text-black xt-links-default bg-white">
                <button
                  type="button"
                  className="xt-button xt-dismiss absolute top-0 right-0 p-5 text-xl"
                  aria-label="Close">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="xt-icon"
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
                <div className="text-base py-8 px-9">
                  <div className="xt-h4">Drop static 0</div>
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="xt-drop-item">
            <button
              type="button"
              className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
              Drop
            </button>

            <div className="xt-drop xt-drop-static on current">
              <div className="xt-card w-full shadow-drop text-black xt-links-default bg-white">
                <button
                  type="button"
                  className="xt-button xt-dismiss absolute top-0 right-0 p-5 text-xl"
                  aria-label="Close">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="xt-icon"
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
                <div className="text-base py-8 px-9">
                  <div className="xt-h4">Drop static 1</div>
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="xt-drop-item">
            <button
              type="button"
              className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
              Drop
            </button>

            <div className="xt-drop xt-drop-static">
              <div className="xt-card w-full shadow-drop text-black xt-links-default bg-white">
                <button
                  type="button"
                  className="xt-button xt-dismiss absolute top-0 right-0 p-5 text-xl"
                  aria-label="Close">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="xt-icon"
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
                <div className="text-base py-8 px-9">
                  <div className="xt-h4">Drop static 2</div>
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
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

/* mount */

const mount = ({ ref }) => {
  const unmountDrops = mountDrops({ ref })

  // unmount

  return () => {
    unmountDrops()
  }
}

/* mountDrops */

const mountDrops = ({ ref }) => {
  // vars

  const drop = ref.querySelector('[data-xt-drop]')

  // init

  let self = Xt.get('xt-drop', drop)

  // off

  const off = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr)) {
      // reset to current when no activation
      if (self.currentIndex === null) {
        const current = self.targets.filter(x => x.classList.contains('current'))[0]
        current.dispatchEvent(new CustomEvent('on.trigger.xt.drop'))
      }
    }
  }

  for (const target of self.targets) {
    target.addEventListener('off.xt.drop', off)
  }

  // unmount

  return () => {}
}
