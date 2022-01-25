import React from 'react'
import 'xtendui'
import 'xtendui/src/tooltip'

export default function demo() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center">
        <div data-xt-tooltip="{ mouseParent: true, position: 'left' }">
          <div>
            <button
              type="button"
              className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
              data-xt-tooltip-element>
              left
              <br />
              ...
            </button>

            <div className="xt-tooltip p-3" data-xt-tooltip-target>
              <div className="xt-card rounded-md shadow-md text-white xt-links-inverse font-medium bg-black">
                <div className="py-2 px-2.5 text-xs">Lorem ipsum dolor sit amet</div>
              </div>
              <div className="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-black"></div>
            </div>
          </div>
        </div>

        <div data-xt-tooltip="{ mouseParent: true, position: 'left-start' }">
          <div>
            <button
              type="button"
              className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
              data-xt-tooltip-element>
              left start
              <br />
              ...
            </button>

            <div className="xt-tooltip p-3" data-xt-tooltip-target>
              <div className="xt-card rounded-md shadow-md text-white xt-links-inverse font-medium bg-black">
                <div className="py-2 px-2.5 text-xs">Lorem ipsum dolor sit amet</div>
              </div>
              <div className="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-black"></div>
            </div>
          </div>
        </div>

        <div data-xt-tooltip="{ mouseParent: true, position: 'left-end' }">
          <div>
            <button
              type="button"
              className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
              data-xt-tooltip-element>
              left end
              <br />
              ...
            </button>

            <div className="xt-tooltip p-3" data-xt-tooltip-target>
              <div className="xt-card rounded-md shadow-md text-white xt-links-inverse font-medium bg-black">
                <div className="py-2 px-2.5 text-xs">Lorem ipsum dolor sit amet</div>
              </div>
              <div className="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-black"></div>
            </div>
          </div>
        </div>

        <div data-xt-tooltip="{ mouseParent: true, position: 'left', inset: true }">
          <div>
            <button
              type="button"
              className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
              data-xt-tooltip-element>
              left inset
              <br />
              ...
            </button>

            <div className="xt-tooltip p-3" data-xt-tooltip-target>
              <div className="xt-card rounded-md shadow-md text-white xt-links-inverse font-medium bg-black">
                <div className="py-2 px-2.5 text-xs">Lorem ipsum dolor sit amet</div>
              </div>
              <div className="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-black"></div>
            </div>
          </div>
        </div>

        <div data-xt-tooltip="{ mouseParent: true, position: 'left-start', inset: true }">
          <div>
            <button
              type="button"
              className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
              data-xt-tooltip-element>
              left start inset
              <br />
              ...
            </button>

            <div className="xt-tooltip p-3" data-xt-tooltip-target>
              <div className="xt-card rounded-md shadow-md text-white xt-links-inverse font-medium bg-black">
                <div className="py-2 px-2.5 text-xs">Lorem ipsum dolor sit amet</div>
              </div>
              <div className="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-black"></div>
            </div>
          </div>
        </div>

        <div data-xt-tooltip="{ mouseParent: true, position: 'left-end', inset: true }">
          <div>
            <button
              type="button"
              className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
              data-xt-tooltip-element>
              left end inset
              <br />
              ...
            </button>

            <div className="xt-tooltip p-3" data-xt-tooltip-target>
              <div className="xt-card rounded-md shadow-md text-white xt-links-inverse font-medium bg-black">
                <div className="py-2 px-2.5 text-xs">Lorem ipsum dolor sit amet</div>
              </div>
              <div className="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-black"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}