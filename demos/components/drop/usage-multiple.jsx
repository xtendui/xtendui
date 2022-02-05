import React from 'react'
import 'xtendui'
import 'xtendui/src/drop'

export default function Demo() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center" data-xt-drop="{ mouseParent: true }">
        <div>
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
            data-xt-drop-element>
            Drop
          </button>

          <div className="*** xt-drop *** p-4" data-xt-drop-target>
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
          </div>
        </div>

        <div>
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
            data-xt-drop-element>
            Drop
          </button>

          <div className="*** xt-drop *** p-4" data-xt-drop-target>
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
          </div>
        </div>
      </div>
    </div>
  )
}
