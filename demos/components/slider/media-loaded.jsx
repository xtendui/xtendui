import React, { useRef, useCallback } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import gsap from 'gsap'

export default function demo() {
  const refCurrent = useRef(null)
  let unmount
  let ref = useCallback(ref => {
    if (refCurrent.current) {
      unmount(refCurrent.current)
    }
    refCurrent.current = ref
    if (ref !== null) {
      unmount = mount({ ref })
    }
  }, [])

  return (
    <div className="demo--slider-media-loaded-react" ref={ref}>
      <div className="xt-slider">
        <div className="p-4 md:p-6 lg:p-8">
          <div className="xt-slides xt-row xt-row-4">
            <div className="xt-slide group group">
              <div className="xt-media-container bg-gray-600">
                <img className="xt-media relative" src="/img.svg" loading="lazy" alt="" />
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
                        className="stroke-current origin-center relative animate-xt-spinner"
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
            </div>

            <div className="xt-slide group group">
              <div className="xt-media-container bg-gray-600">
                <img className="xt-media relative" src="/img-ratio.svg" loading="lazy" alt="" />
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
                        className="stroke-current origin-center relative animate-xt-spinner"
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
            </div>

            <div className="xt-slide group group">
              <div className="xt-media-container bg-gray-600">
                <img
                  className="xt-media relative"
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
                        className="stroke-current origin-center relative animate-xt-spinner"
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
            </div>

            <div className="xt-slide group group">
              <div className="xt-media-container bg-gray-600">
                <img
                  className="xt-media relative"
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
                        className="stroke-current origin-center relative animate-xt-spinner"
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
            </div>

            <div className="xt-slide group group">
              <div className="xt-media-container bg-gray-600">
                <img
                  className="xt-media relative"
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
                        className="stroke-current origin-center relative animate-xt-spinner"
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
            </div>

            <div className="xt-slide group group">
              <div className="xt-media-container bg-gray-600">
                <img
                  className="xt-media relative"
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
                        className="stroke-current origin-center relative animate-xt-spinner"
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
            </div>

            <div className="xt-slide group group">
              <div className="xt-media-container bg-gray-600">
                <img
                  className="xt-media relative"
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
                        className="stroke-current origin-center relative animate-xt-spinner"
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
            </div>
          </div>

          <nav className="xt-slider-pagination w-full xt-list xt-list-3 pt-4 items-center justify-center">
            <button
              type="button"
              className="xt-button text-2xs py-2 px-3.5 w-5 h-6 rounded-full text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 on:px-5 on:bg-gray-400 transition-all hidden"
              data-xt-pag
              title="Slide xt-num"></button>
          </nav>
        </div>
      </div>
    </div>
  )
}

/* mount */

const mount = ({ ref }) => {
  const unmountSlider = mountSlider({ ref })

  // unmount

  return () => {
    unmountSlider()
  }
}

/* mountSlider */

const mountSlider = ({ ref }) => {
  // vars

  const slider = ref.querySelector('.xt-slider')
  const dragTime = 1
  const dragEase = 'quint.out'

  // init

  const self = new Xt.Slider(slider, {
    mediaLoaded: true,
    mediaLoadedReinit: true,
  })

  // dragposition (set internal dragPosition to resume animation mid dragging)

  const dragposition = () => {
    // dragPosition tween with main time and ease
    gsap.killTweensOf(self.detail)
    gsap.to(self.detail, {
      dragPosition: self.detail.dragFinal,
      duration: self.initial || self.detail.dragging ? 0 : dragTime,
      ease: dragEase,
    })
    // dragger tween with main time and ease
    gsap.killTweensOf(self.dragger)
    gsap.to(self.dragger, {
      x: self.detail.dragFinal,
      duration: self.initial || self.detail.dragging ? 0 : dragTime,
      ease: dragEase,
    })
  }

  self.dragger.addEventListener('dragposition.xt.slider', dragposition)

  // unmount

  return () => {}
}
