import React from 'react'
import 'xtendui'
import 'xtendui/src/toggle'

export default function demo() {
  return (
    <div>
      <div data-xt-toggle="{ collapseHeight: 'targets', duration: 500 }">
        <div className="xt-list xt-list-3 items-center mb-4">
          <button
            type="button"
            className="*** xt-button *** py-2.5 px-3.5 text-xs rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
            data-xt-toggle-element>
            Toggle 0
          </button>

          <button
            type="button"
            className="*** xt-button *** py-2.5 px-3.5 text-xs rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
            data-xt-toggle-element>
            Toggle 1
          </button>
        </div>

        <div className="xt-row xt-row-6">
          <div className="w-full md:w-6/12">
            <div className="xt-card rounded-md text-black xt-links-default bg-gray-100">
              <div className="xt-media-container bg-gray-500 rounded-md pb-[37.5%]">
                <div
                  className="absolute inset-0 rounded-inherit off:hidden out:pointer-events-none *** overflow-hidden transition-all ***"
                  data-xt-toggle-target>
                  <img className="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-6/12">
            <div className="xt-card rounded-md text-black xt-links-default bg-gray-100">
              <div className="xt-media-container bg-gray-500 rounded-md pb-[37.5%]">
                <div
                  className="absolute inset-0 rounded-inherit off:hidden out:pointer-events-none *** overflow-hidden transition-all ***"
                  data-xt-toggle-target>
                  <img className="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
