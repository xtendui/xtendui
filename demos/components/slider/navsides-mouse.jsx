import React from 'react'
import 'xtendui'
import 'xtendui/src/slider'

export default function demo() {
  return (
    <div>
      <div className="xt-slider" data-xt-slider="{ loop: true }">
        <div className="p-4 md:p-6 lg:p-8 *** slider-navs-container relative ***">
          <div
            className="xt-slides transition ease-out-expo duration-300 on:ease-out-quint on:duration-1000 xt-row xt-row-4"
            data-xt-slider-dragger>
            <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
              <div className="xt-card text-gray-900 xt-links-default rounded-md bg-gray-100 border-2 border-transparent transition group-in:border-gray-200 p-8 text-base text-center">
                <div className="xt-h4">1</div>
              </div>
            </div>

            <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
              <div className="xt-card text-gray-900 xt-links-default rounded-md bg-gray-100 border-2 border-transparent transition group-in:border-gray-200 p-8 text-base text-center">
                <div className="xt-h4">2</div>
              </div>
            </div>

            <div className="xt-slide w-8/12 sm:w-6/12 md:w-5/12 group" data-xt-slider-target>
              <div className="xt-card text-gray-900 xt-links-default rounded-md bg-gray-100 border-2 border-transparent transition group-in:border-gray-200 p-8 text-base text-center">
                <div className="xt-h4">3</div>
              </div>
            </div>

            <div className="xt-slide w-full group" data-xt-slider-target>
              <div className="xt-card text-gray-900 xt-links-default rounded-md bg-gray-100 border-2 border-transparent transition group-in:border-gray-200 p-8 text-base text-center">
                <div className="xt-h4">4</div>
              </div>
            </div>

            <div className="xt-slide w-8/12 sm:w-6/12 md:w-5/12 group" data-xt-slider-target>
              <div className="xt-card text-gray-900 xt-links-default rounded-md bg-gray-100 border-2 border-transparent transition group-in:border-gray-200 p-8 text-base text-center">
                <div className="xt-h4">5</div>
              </div>
            </div>

            <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
              <div className="xt-card text-gray-900 xt-links-default rounded-md bg-gray-100 border-2 border-transparent transition group-in:border-gray-200 p-8 text-base text-center">
                <div className="xt-h4">6</div>
              </div>
            </div>

            <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
              <div className="xt-card text-gray-900 xt-links-default rounded-md bg-gray-100 border-2 border-transparent transition group-in:border-gray-200 p-8 text-base text-center">
                <div className="xt-h4">7</div>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="*** absolute top-0 left-0 px-2 md:px-8 md:cursor-none h-full group ***"
            data-xt-nav="-1"
            aria-label="Previous slide"
            data-xt-mousefollow="{ matches: { '(max-width: 767px)': { disabled: true } } }">
            <div
              className="*** xt-mousefollow md:fixed md:transition-opacity md:opacity-0 in:opacity-100 ***"
              data-xt-mousefollow-target>
              <div className="xt-button w-8 h-8 md:w-10 md:h-10 text-lg md:text-xl rounded-full font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600 group-hover:text-white group-hover:bg-primary-600 group-active:text-white group-active:bg-primary-700 group-on:text-white group-on:bg-primary-600">
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
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </div>
            </div>
          </button>

          <button
            type="button"
            className="*** absolute top-0 right-0 px-2 md:px-8 md:cursor-none h-full group ***"
            data-xt-nav="1"
            aria-label="Next slide"
            data-xt-mousefollow="{ matches: { '(max-width: 767px)': { disabled: true } } }">
            <div
              className="*** xt-mousefollow md:fixed md:transition-opacity md:opacity-0 in:opacity-100 ***"
              data-xt-mousefollow-target>
              <div className="xt-button w-8 h-8 md:w-10 md:h-10 text-lg md:text-xl rounded-full font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600 group-hover:text-white group-hover:bg-primary-600 group-active:text-white group-active:bg-primary-700 group-on:text-white group-on:bg-primary-600">
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
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          </button>

          <nav className="w-full xt-list xt-list-2 pt-4 items-center justify-center" data-xt-slider-pagination>
            <button
              type="button"
              className="xt-button p-2 min-w-[1.25rem] h-5 rounded-full text-3xs text-gray-900 font-medium leading-snug tracking-wider uppercase bg-gray-100 hover:bg-gray-200 on:px-4 active:bg-gray-300 on:bg-gray-200 transition-all hidden"
              data-xt-slider-element
              title="Slide xt-num"></button>
          </nav>
        </div>
      </div>
    </div>
  )
}
