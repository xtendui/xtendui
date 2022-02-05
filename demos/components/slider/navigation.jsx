import React from 'react'
import 'xtendui'
import 'xtendui/src/slider'

export default function Demo() {
  return (
    <div className="demo--slider-navigation-react">
      <div className="xt-slider" data-xt-slider="{ loop: true }">
        <div className="p-4 md:p-6 lg:p-8">
          <div
            className="xt-slides transition ease-out-expo duration-300 on:ease-out-quint on:duration-1000 xt-row xt-row-4"
            data-xt-slider-dragger>
            <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
              <div className="xt-card text-gray-900 xt-links-default rounded-md bg-gray-100 border-2 border-transparent transition group-in:border-gray-200 p-8 text-base text-center">
                <div className="xt-h4">1</div>
                <nav aria-label="Slider Navigation" className="xt-list xt-list-3 pt-4 items-center justify-center">
                  <button
                    type="button"
                    className="xt-button text-2xs py-2 px-2 w-7 h-7 rounded-full font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
                    data-xt-nav="-1"
                    title="Previous slide">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xt-icon text-xl -my-1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="xt-button text-2xs py-2 px-2 w-7 h-7 rounded-full font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
                    data-xt-nav="1"
                    title="Next slide">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xt-icon text-xl -my-1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </nav>
              </div>
            </div>

            <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
              <div className="xt-card text-gray-900 xt-links-default rounded-md bg-gray-100 border-2 border-transparent transition group-in:border-gray-200 p-8 text-base text-center">
                <div className="xt-h4">2</div>
                <nav aria-label="Slider Navigation" className="xt-list xt-list-3 pt-4 items-center justify-center">
                  <button
                    type="button"
                    className="xt-button text-2xs py-2 px-2 w-7 h-7 rounded-full font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
                    data-xt-nav="-1"
                    title="Previous slide">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xt-icon text-xl -my-1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="xt-button text-2xs py-2 px-2 w-7 h-7 rounded-full font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
                    data-xt-nav="1"
                    title="Next slide">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xt-icon text-xl -my-1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </nav>
              </div>
            </div>

            <div className="xt-slide w-8/12 sm:w-6/12 md:w-5/12 group" data-xt-slider-target>
              <div className="xt-card text-gray-900 xt-links-default rounded-md bg-gray-100 border-2 border-transparent transition group-in:border-gray-200 p-8 text-base text-center">
                <div className="xt-h4">3</div>
                <nav aria-label="Slider Navigation" className="xt-list xt-list-3 pt-4 items-center justify-center">
                  <button
                    type="button"
                    className="xt-button text-2xs py-2 px-2 w-7 h-7 rounded-full font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
                    data-xt-nav="-1"
                    title="Previous slide">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xt-icon text-xl -my-1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="xt-button text-2xs py-2 px-2 w-7 h-7 rounded-full font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
                    data-xt-nav="1"
                    title="Next slide">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xt-icon text-xl -my-1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </nav>
              </div>
            </div>

            <div className="xt-slide w-full group" data-xt-slider-target>
              <div className="xt-card text-gray-900 xt-links-default rounded-md bg-gray-100 border-2 border-transparent transition group-in:border-gray-200 p-8 text-base text-center">
                <div className="xt-h4">4</div>
                <nav aria-label="Slider Navigation" className="xt-list xt-list-3 pt-4 items-center justify-center">
                  <button
                    type="button"
                    className="xt-button text-2xs py-2 px-2 w-7 h-7 rounded-full font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
                    data-xt-nav="-1"
                    title="Previous slide">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xt-icon text-xl -my-1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="xt-button text-2xs py-2 px-2 w-7 h-7 rounded-full font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
                    data-xt-nav="1"
                    title="Next slide">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xt-icon text-xl -my-1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </nav>
              </div>
            </div>

            <div className="xt-slide w-8/12 sm:w-6/12 md:w-5/12 group" data-xt-slider-target>
              <div className="xt-card text-gray-900 xt-links-default rounded-md bg-gray-100 border-2 border-transparent transition group-in:border-gray-200 p-8 text-base text-center">
                <div className="xt-h4">5</div>
                <nav aria-label="Slider Navigation" className="xt-list xt-list-3 pt-4 items-center justify-center">
                  <button
                    type="button"
                    className="xt-button text-2xs py-2 px-2 w-7 h-7 rounded-full font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
                    data-xt-nav="-1"
                    title="Previous slide">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xt-icon text-xl -my-1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="xt-button text-2xs py-2 px-2 w-7 h-7 rounded-full font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
                    data-xt-nav="1"
                    title="Next slide">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xt-icon text-xl -my-1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </nav>
              </div>
            </div>

            <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
              <div className="xt-card text-gray-900 xt-links-default rounded-md bg-gray-100 border-2 border-transparent transition group-in:border-gray-200 p-8 text-base text-center">
                <div className="xt-h4">6</div>
                <nav aria-label="Slider Navigation" className="xt-list xt-list-3 pt-4 items-center justify-center">
                  <button
                    type="button"
                    className="xt-button text-2xs py-2 px-2 w-7 h-7 rounded-full font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
                    data-xt-nav="-1"
                    title="Previous slide">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xt-icon text-xl -my-1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="xt-button text-2xs py-2 px-2 w-7 h-7 rounded-full font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
                    data-xt-nav="1"
                    title="Next slide">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xt-icon text-xl -my-1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </nav>
              </div>
            </div>

            <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
              <div className="xt-card text-gray-900 xt-links-default rounded-md bg-gray-100 border-2 border-transparent transition group-in:border-gray-200 p-8 text-base text-center">
                <div className="xt-h4">7</div>
                <nav aria-label="Slider Navigation" className="xt-list xt-list-3 pt-4 items-center justify-center">
                  <button
                    type="button"
                    className="xt-button text-2xs py-2 px-2 w-7 h-7 rounded-full font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
                    data-xt-nav="-1"
                    title="Previous slide">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xt-icon text-xl -my-1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="xt-button text-2xs py-2 px-2 w-7 h-7 rounded-full font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
                    data-xt-nav="1"
                    title="Next slide">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xt-icon text-xl -my-1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </nav>
              </div>
            </div>
          </div>

          <nav
            aria-label="Slider Navigation"
            className="w-full xt-list xt-list-2 pt-4 items-center justify-center"
            data-xt-slider-pagination>
            <button
              type="button"
              className="xt-button text-2xs py-2 px-2 w-7 h-7 rounded-full font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
              data-xt-nav="-1"
              title="Previous slide">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="xt-icon text-xl -my-1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              type="button"
              className="xt-button p-2 min-w-[1.25rem] h-5 rounded-full text-3xs text-gray-900 font-medium leading-snug tracking-wider uppercase bg-gray-100 hover:bg-gray-200 on:px-4 active:bg-gray-300 on:bg-gray-200 transition-all hidden"
              data-xt-slider-element
              title="Slide xt-num"></button>
            <button
              type="button"
              className="xt-button text-2xs py-2 px-2 w-7 h-7 rounded-full font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
              data-xt-nav="1"
              title="Next slide">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="xt-icon text-xl -my-1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}
