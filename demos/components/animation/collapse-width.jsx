import React from 'react'
export default function demo() {
  return (
    <div>
      <div data-xt-toggle="{ elements: '.xt-button', targets: '.xt-toggle', collapseWidth: 'targets', duration: 500 }">
        <div className="xt-list xt-list-3 items-center mb-4">
          <button
            type="button"
            className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 active:bg-gray-500 on:bg-gray-500">
            Toggle 0
          </button>

          <button
            type="button"
            className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 active:bg-gray-500 on:bg-gray-500">
            Toggle 1
          </button>
        </div>

        <div className="xt-row xt-row-6">
          <div className="w-full md:w-6/12">
            <div className="xt-card rounded-md text-black xt-links-default bg-gray-200">
              <div className="xt-media-container bg-gray-600 rounded-md xt-ratio-37.5">
                <div className="absolute inset-0 rounded-inherit xt-toggle overflow-hidden transition-all">
                  <img className="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-6/12">
            <div className="xt-card rounded-md text-black xt-links-default bg-gray-200">
              <div className="xt-media-container bg-gray-600 rounded-md xt-ratio-37.5">
                <div className="absolute inset-0 rounded-inherit xt-toggle overflow-hidden transition-all">
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
