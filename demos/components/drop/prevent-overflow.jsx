import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/drop'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--drop-prevent-overflow-react" ref={ref}>
      <div
        className="xt-card p-7 sm:p-9 text-base rounded-2xl text-white xt-links-inverse bg-primary-500"
        data-node-boundary>
        <div className="xt-list xt-list-3 items-center" data-node-drop="{ mouseParent: true }">
          <div>
            <button
              type="button"
              className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
              data-xt-drop-element>
              Drop
            </button>

            <div className="xt-drop p-3" data-xt-drop-target>
              <div className="xt-card w-64 rounded-md shadow-lg text-gray-900 xt-links-default bg-white">
                <nav aria-label="Drop" className="xt-list flex-col p-3">
                  <a
                    href="/"
                    className="xt-button py-1.5 px-3 text-sm rounded-md flex-auto font-medium leading-snug justify-start text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </a>
                  <button
                    type="button"
                    className="xt-button py-1.5 px-3 text-sm rounded-md flex-auto font-medium leading-snug justify-start text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                    Dolor sit
                  </button>
                  <button
                    type="button"
                    className="xt-button py-1.5 px-3 text-sm rounded-md flex-auto font-medium leading-snug justify-start text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                    Amet
                  </button>
                </nav>
              </div>
              <div className="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-gray-200"></div>
            </div>
          </div>

          <div>
            <button
              type="button"
              className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
              data-xt-drop-element>
              Drop
            </button>

            <div className="xt-drop p-3" data-xt-drop-target>
              <div className="xt-card w-64 rounded-md shadow-lg text-gray-900 xt-links-default bg-white">
                <nav aria-label="Drop" className="xt-list flex-col p-3">
                  <a
                    href="/"
                    className="xt-button py-1.5 px-3 text-sm rounded-md flex-auto font-medium leading-snug justify-start text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </a>
                  <button
                    type="button"
                    className="xt-button py-1.5 px-3 text-sm rounded-md flex-auto font-medium leading-snug justify-start text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                    Dolor sit
                  </button>
                  <button
                    type="button"
                    className="xt-button py-1.5 px-3 text-sm rounded-md flex-auto font-medium leading-snug justify-start text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                    Amet
                  </button>
                </nav>
              </div>
              <div className="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-gray-200"></div>
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

  const drop = ref.querySelector('[data-node-drop]')
  const boundary = ref.querySelector('[data-node-boundary]')

  // init

  /***/
  let self = new Xt.Drop(drop, {
    position: 'bottom-end',
    popperjs: {
      strategy: 'fixed',
      modifiers: [
        {
          name: 'preventOverflow',
          options: {
            boundary: boundary,
          },
        },
      ],
    },
  })
  /***/

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}

/* mount */

const mount = ({ ref }) => {
  const unmountDrops = mountDrops({ ref })

  // unmount

  return () => {
    unmountDrops()
  }
}
