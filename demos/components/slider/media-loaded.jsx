import React from 'react'
import 'xtendui'
import 'xtendui/src/slider'

export default function demo() {
  return (
    <div className="demo--slider-media-loaded-react">
      <div className="xt-slider" data-xt-slider="{ mediaLoaded: true, mediaLoadedReinit: true }">
        <div className="p-4 md:p-6 lg:p-8">
          <div
            className="xt-slides transition ease-out-expo duration-300 on:ease-out-quint on:duration-1000 xt-row xt-row-4"
            data-xt-slider-dragger>
            <div className="xt-slide group" data-xt-slider-target>
              <div className="xt-media-container bg-gray-300">
                <img
                  className="xt-media relative *** w-auto h-[10rem] sm:h-[15rem] md:h-[20rem] lg:h-[30rem] ***"
                  src="/img.svg"
                  loading="lazy"
                  alt=""
                />
                <div className="xt-loader absolute inset-0 rounded-inherit overflow-hidden bg-white bg-opacity-75">
                  <div className="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500">
                    <svg viewBox="0 0 240 240" className="absolute" preserveAspectRatio="xMinYMin meet">
                      <circle
                        className="stroke-current origin-center opacity-25"
                        fill="none"
                        strokeWidth="30"
                        cx="120"
                        cy="120"
                        r="100"
                        strokeDasharray="628"
                        strokeDashoffset="0"
                        pathLength="628"
                      />
                    </svg>
                    <svg viewBox="0 0 240 240">
                      <circle
                        className="stroke-current origin-center relativext-icon animate-xt-spinner"
                        fill="none"
                        strokeWidth="30"
                        cx="120"
                        cy="120"
                        r="100"
                        strokeDasharray="628"
                        strokeDashoffset="628"
                        pathLength="628"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="hidden" data-xt-slider-content>
                <img className="h-full w-auto" src="/img.svg" loading="lazy" alt="" />
              </div>
            </div>

            <div className="xt-slide group" data-xt-slider-target>
              <div className="xt-media-container bg-gray-300">
                <img
                  className="xt-media relative *** w-auto h-[10rem] sm:h-[15rem] md:h-[20rem] lg:h-[30rem] ***"
                  src="/img-ratio.svg"
                  loading="lazy"
                  alt=""
                />
                <div className="xt-loader absolute inset-0 rounded-inherit overflow-hidden bg-white bg-opacity-75">
                  <div className="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500">
                    <svg viewBox="0 0 240 240" className="absolute" preserveAspectRatio="xMinYMin meet">
                      <circle
                        className="stroke-current origin-center opacity-25"
                        fill="none"
                        strokeWidth="30"
                        cx="120"
                        cy="120"
                        r="100"
                        strokeDasharray="628"
                        strokeDashoffset="0"
                        pathLength="628"
                      />
                    </svg>
                    <svg viewBox="0 0 240 240">
                      <circle
                        className="stroke-current origin-center relativext-icon animate-xt-spinner"
                        fill="none"
                        strokeWidth="30"
                        cx="120"
                        cy="120"
                        r="100"
                        strokeDasharray="628"
                        strokeDashoffset="628"
                        pathLength="628"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="hidden" data-xt-slider-content>
                <img className="h-full w-auto" src="/img-ratio.svg" loading="lazy" alt="" />
              </div>
            </div>

            <div className="xt-slide group" data-xt-slider-target>
              <div className="xt-media-container bg-gray-300">
                <img
                  className="xt-media relative *** w-auto h-[10rem] sm:h-[15rem] md:h-[20rem] lg:h-[30rem] ***"
                  src="https://source.unsplash.com/ruJm3dBXCqw"
                  loading="lazy"
                  alt=""
                />
                <div className="xt-loader absolute inset-0 rounded-inherit overflow-hidden bg-white bg-opacity-75">
                  <div className="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500">
                    <svg viewBox="0 0 240 240" className="absolute" preserveAspectRatio="xMinYMin meet">
                      <circle
                        className="stroke-current origin-center opacity-25"
                        fill="none"
                        strokeWidth="30"
                        cx="120"
                        cy="120"
                        r="100"
                        strokeDasharray="628"
                        strokeDashoffset="0"
                        pathLength="628"
                      />
                    </svg>
                    <svg viewBox="0 0 240 240">
                      <circle
                        className="stroke-current origin-center relativext-icon animate-xt-spinner"
                        fill="none"
                        strokeWidth="30"
                        cx="120"
                        cy="120"
                        r="100"
                        strokeDasharray="628"
                        strokeDashoffset="628"
                        pathLength="628"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="hidden" data-xt-slider-content>
                <img className="h-full w-auto" src="https://source.unsplash.com/ruJm3dBXCqw" loading="lazy" alt="" />
              </div>
            </div>

            <div className="xt-slide group" data-xt-slider-target>
              <div className="xt-media-container bg-gray-300">
                <img
                  className="xt-media relative *** w-auto h-[10rem] sm:h-[15rem] md:h-[20rem] lg:h-[30rem] ***"
                  src="https://source.unsplash.com/wQLAGv4_OYs"
                  loading="lazy"
                  alt=""
                />
                <div className="xt-loader absolute inset-0 rounded-inherit overflow-hidden bg-white bg-opacity-75">
                  <div className="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500">
                    <svg viewBox="0 0 240 240" className="absolute" preserveAspectRatio="xMinYMin meet">
                      <circle
                        className="stroke-current origin-center opacity-25"
                        fill="none"
                        strokeWidth="30"
                        cx="120"
                        cy="120"
                        r="100"
                        strokeDasharray="628"
                        strokeDashoffset="0"
                        pathLength="628"
                      />
                    </svg>
                    <svg viewBox="0 0 240 240">
                      <circle
                        className="stroke-current origin-center relativext-icon animate-xt-spinner"
                        fill="none"
                        strokeWidth="30"
                        cx="120"
                        cy="120"
                        r="100"
                        strokeDasharray="628"
                        strokeDashoffset="628"
                        pathLength="628"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="hidden" data-xt-slider-content>
                <img className="h-full w-auto" src="https://source.unsplash.com/wQLAGv4_OYs" loading="lazy" alt="" />
              </div>
            </div>

            <div className="xt-slide group" data-xt-slider-target>
              <div className="xt-media-container bg-gray-300">
                <img
                  className="xt-media relative *** w-auto h-[10rem] sm:h-[15rem] md:h-[20rem] lg:h-[30rem] ***"
                  src="https://source.unsplash.com/OlTjeydUpQw"
                  loading="lazy"
                  alt=""
                />
                <div className="xt-loader absolute inset-0 rounded-inherit overflow-hidden bg-white bg-opacity-75">
                  <div className="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500">
                    <svg viewBox="0 0 240 240" className="absolute" preserveAspectRatio="xMinYMin meet">
                      <circle
                        className="stroke-current origin-center opacity-25"
                        fill="none"
                        strokeWidth="30"
                        cx="120"
                        cy="120"
                        r="100"
                        strokeDasharray="628"
                        strokeDashoffset="0"
                        pathLength="628"
                      />
                    </svg>
                    <svg viewBox="0 0 240 240">
                      <circle
                        className="stroke-current origin-center relativext-icon animate-xt-spinner"
                        fill="none"
                        strokeWidth="30"
                        cx="120"
                        cy="120"
                        r="100"
                        strokeDasharray="628"
                        strokeDashoffset="628"
                        pathLength="628"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="hidden" data-xt-slider-content>
                <img className="h-full w-auto" src="https://source.unsplash.com/OlTjeydUpQw" loading="lazy" alt="" />
              </div>
            </div>

            <div className="xt-slide group" data-xt-slider-target>
              <div className="xt-media-container bg-gray-300">
                <img
                  className="xt-media relative *** w-auto h-[10rem] sm:h-[15rem] md:h-[20rem] lg:h-[30rem] ***"
                  src="https://source.unsplash.com/wEL2zPX3jDg"
                  loading="lazy"
                  alt=""
                />
                <div className="xt-loader absolute inset-0 rounded-inherit overflow-hidden bg-white bg-opacity-75">
                  <div className="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500">
                    <svg viewBox="0 0 240 240" className="absolute" preserveAspectRatio="xMinYMin meet">
                      <circle
                        className="stroke-current origin-center opacity-25"
                        fill="none"
                        strokeWidth="30"
                        cx="120"
                        cy="120"
                        r="100"
                        strokeDasharray="628"
                        strokeDashoffset="0"
                        pathLength="628"
                      />
                    </svg>
                    <svg viewBox="0 0 240 240">
                      <circle
                        className="stroke-current origin-center relativext-icon animate-xt-spinner"
                        fill="none"
                        strokeWidth="30"
                        cx="120"
                        cy="120"
                        r="100"
                        strokeDasharray="628"
                        strokeDashoffset="628"
                        pathLength="628"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="hidden" data-xt-slider-content>
                <img className="h-full w-auto" src="https://source.unsplash.com/wEL2zPX3jDg" loading="lazy" alt="" />
              </div>
            </div>

            <div className="xt-slide group" data-xt-slider-target>
              <div className="xt-media-container bg-gray-300">
                <img
                  className="xt-media relative *** w-auto h-[10rem] sm:h-[15rem] md:h-[20rem] lg:h-[30rem] ***"
                  src="https://source.unsplash.com/Tyg0rVhOTrE"
                  loading="lazy"
                  alt=""
                />
                <div className="xt-loader absolute inset-0 rounded-inherit overflow-hidden bg-white bg-opacity-75">
                  <div className="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500">
                    <svg viewBox="0 0 240 240" className="absolute" preserveAspectRatio="xMinYMin meet">
                      <circle
                        className="stroke-current origin-center opacity-25"
                        fill="none"
                        strokeWidth="30"
                        cx="120"
                        cy="120"
                        r="100"
                        strokeDasharray="628"
                        strokeDashoffset="0"
                        pathLength="628"
                      />
                    </svg>
                    <svg viewBox="0 0 240 240">
                      <circle
                        className="stroke-current origin-center relativext-icon animate-xt-spinner"
                        fill="none"
                        strokeWidth="30"
                        cx="120"
                        cy="120"
                        r="100"
                        strokeDasharray="628"
                        strokeDashoffset="628"
                        pathLength="628"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="hidden" data-xt-slider-content>
                <img className="h-full w-auto" src="https://source.unsplash.com/Tyg0rVhOTrE" loading="lazy" alt="" />
              </div>
            </div>
          </div>

          <nav className="w-full xt-list xt-list-2 pt-4 items-center justify-center" data-xt-slider-pagination>
            <button type="button" className="xt-button h-10 hidden" data-xt-slider-element title="Slide xt-num">
              xt-content
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}
