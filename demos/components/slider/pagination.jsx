import React from 'react'
import 'xtendui'
import 'xtendui/src/slider'

export default function demo() {
  return (
    <div>
      <div className="xt-slider" data-xt-slider>
        <div className="p-4 md:p-6 lg:p-8">
          <div
            className="xt-slides transition ease-out-expo duration-300 on:ease-out-quint on:duration-1000 xt-row xt-row-4"
            data-xt-slider-dragger>
            <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
              <div className="xt-card text-gray-900 xt-links-default rounded-md p-8 text-base text-center bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
                <div className="xt-h4" data-xt-slider-content>
                  1
                </div>
                <nav className="w-full xt-list xt-list-1 pt-4 items-center justify-center" data-xt-slider-pagination>
                  <button
                    type="button"
                    className="xt-button p-2 min-w-[1.25rem] h-5 rounded-full text-3xs text-gray-900 font-medium leading-snug tracking-wider uppercase bg-gray-100 hover:bg-gray-200 on:px-4 active:bg-gray-300 on:bg-gray-200 transition-all hidden"
                    data-xt-slider-element
                    title="Slide xt-num">
                    xt-content
                  </button>
                </nav>
              </div>
            </div>

            <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
              <div className="xt-card text-gray-900 xt-links-default rounded-md p-8 text-base text-center bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
                <div className="xt-h4" data-xt-slider-content>
                  2
                </div>
                <nav className="w-full xt-list xt-list-1 pt-4 items-center justify-center" data-xt-slider-pagination>
                  <button
                    type="button"
                    className="xt-button p-2 min-w-[1.25rem] h-5 rounded-full text-3xs text-gray-900 font-medium leading-snug tracking-wider uppercase bg-gray-100 hover:bg-gray-200 on:px-4 active:bg-gray-300 on:bg-gray-200 transition-all hidden"
                    data-xt-slider-element
                    title="Slide xt-num">
                    xt-content
                  </button>
                </nav>
              </div>
            </div>

            <div className="xt-slide w-8/12 sm:w-6/12 md:w-5/12 group" data-xt-slider-target>
              <div className="xt-card text-gray-900 xt-links-default rounded-md p-8 text-base text-center bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
                <div className="xt-h4" data-xt-slider-content>
                  3
                </div>
                <nav className="w-full xt-list xt-list-1 pt-4 items-center justify-center" data-xt-slider-pagination>
                  <button
                    type="button"
                    className="xt-button p-2 min-w-[1.25rem] h-5 rounded-full text-3xs text-gray-900 font-medium leading-snug tracking-wider uppercase bg-gray-100 hover:bg-gray-200 on:px-4 active:bg-gray-300 on:bg-gray-200 transition-all hidden"
                    data-xt-slider-element
                    title="Slide xt-num">
                    xt-content
                  </button>
                </nav>
              </div>
            </div>

            <div className="xt-slide w-full group" data-xt-slider-target>
              <div className="xt-card text-gray-900 xt-links-default rounded-md p-8 text-base text-center bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
                <div className="xt-h4" data-xt-slider-content>
                  4
                </div>
                <nav className="w-full xt-list xt-list-1 pt-4 items-center justify-center" data-xt-slider-pagination>
                  <button
                    type="button"
                    className="xt-button p-2 min-w-[1.25rem] h-5 rounded-full text-3xs text-gray-900 font-medium leading-snug tracking-wider uppercase bg-gray-100 hover:bg-gray-200 on:px-4 active:bg-gray-300 on:bg-gray-200 transition-all hidden"
                    data-xt-slider-element
                    title="Slide xt-num">
                    xt-content
                  </button>
                </nav>
              </div>
            </div>

            <div className="xt-slide w-8/12 sm:w-6/12 md:w-5/12 group" data-xt-slider-target>
              <div className="xt-card text-gray-900 xt-links-default rounded-md p-8 text-base text-center bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
                <div className="xt-h4" data-xt-slider-content>
                  5
                </div>
                <nav className="w-full xt-list xt-list-1 pt-4 items-center justify-center" data-xt-slider-pagination>
                  <button
                    type="button"
                    className="xt-button p-2 min-w-[1.25rem] h-5 rounded-full text-3xs text-gray-900 font-medium leading-snug tracking-wider uppercase bg-gray-100 hover:bg-gray-200 on:px-4 active:bg-gray-300 on:bg-gray-200 transition-all hidden"
                    data-xt-slider-element
                    title="Slide xt-num">
                    xt-content
                  </button>
                </nav>
              </div>
            </div>

            <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
              <div className="xt-card text-gray-900 xt-links-default rounded-md p-8 text-base text-center bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
                <div className="xt-h4" data-xt-slider-content>
                  6
                </div>
                <nav className="w-full xt-list xt-list-1 pt-4 items-center justify-center" data-xt-slider-pagination>
                  <button
                    type="button"
                    className="xt-button p-2 min-w-[1.25rem] h-5 rounded-full text-3xs text-gray-900 font-medium leading-snug tracking-wider uppercase bg-gray-100 hover:bg-gray-200 on:px-4 active:bg-gray-300 on:bg-gray-200 transition-all hidden"
                    data-xt-slider-element
                    title="Slide xt-num">
                    xt-content
                  </button>
                </nav>
              </div>
            </div>

            <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
              <div className="xt-card text-gray-900 xt-links-default rounded-md p-8 text-base text-center bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
                <div className="xt-h4" data-xt-slider-content>
                  7
                </div>
                <nav className="w-full xt-list xt-list-1 pt-4 items-center justify-center" data-xt-slider-pagination>
                  <button
                    type="button"
                    className="xt-button p-2 min-w-[1.25rem] h-5 rounded-full text-3xs text-gray-900 font-medium leading-snug tracking-wider uppercase bg-gray-100 hover:bg-gray-200 on:px-4 active:bg-gray-300 on:bg-gray-200 transition-all hidden"
                    data-xt-slider-element
                    title="Slide xt-num">
                    xt-content
                  </button>
                </nav>
              </div>
            </div>
          </div>

          <nav className="w-full xt-list xt-list-2 pt-4 items-center justify-center" data-xt-slider-pagination>
            <button
              type="button"
              className="xt-button p-2 min-w-[1.25rem] h-5 rounded-full text-3xs text-gray-900 font-medium leading-snug tracking-wider uppercase bg-gray-100 hover:bg-gray-200 on:px-4 active:bg-gray-300 on:bg-gray-200 transition-all hidden"
              data-xt-slider-element
              title="Slide xt-num">
              xt-num of xt-tot
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}
