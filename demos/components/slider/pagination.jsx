import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import gsap from 'gsap'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div div className="demo--slider-pagination-react" ref={ref}>
      <div className="xt-slider">
        <div className="p-4 md:p-6 lg:p-8">
          <div className="xt-slides xt-row xt-row-4" data-xt-slider-dragger>
            <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
              <div className="xt-card rounded-md p-8 text-base text-center text-black xt-links-default bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
                <div className="xt-h4" data-xt-slider-content>
                  1
                </div>
                <nav className="w-full xt-list xt-list-1 pt-4 items-center justify-center" data-xt-slider-pagination>
                  <button
                    type="button"
                    className="xt-button text-2xs py-2 px-3.5 in:px-5 h-6 rounded-full text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200 transition-all hidden"
                    data-xt-slider-element
                    title="Slide xt-num">
                    xt-content
                  </button>
                </nav>
              </div>
            </div>

            <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
              <div className="xt-card rounded-md p-8 text-base text-center text-black xt-links-default bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
                <div className="xt-h4" data-xt-slider-content>
                  2
                </div>
                <nav className="w-full xt-list xt-list-1 pt-4 items-center justify-center" data-xt-slider-pagination>
                  <button
                    type="button"
                    className="xt-button text-2xs py-2 px-3.5 in:px-5 h-6 rounded-full text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200 transition-all hidden"
                    data-xt-slider-element
                    title="Slide xt-num">
                    xt-content
                  </button>
                </nav>
              </div>
            </div>

            <div className="xt-slide w-8/12 sm:w-6/12 md:w-5/12 group" data-xt-slider-target>
              <div className="xt-card rounded-md p-8 text-base text-center text-black xt-links-default bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
                <div className="xt-h4" data-xt-slider-content>
                  3
                </div>
                <nav className="w-full xt-list xt-list-1 pt-4 items-center justify-center" data-xt-slider-pagination>
                  <button
                    type="button"
                    className="xt-button text-2xs py-2 px-3.5 in:px-5 h-6 rounded-full text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200 transition-all hidden"
                    data-xt-slider-element
                    title="Slide xt-num">
                    xt-content
                  </button>
                </nav>
              </div>
            </div>

            <div className="xt-slide w-full group" data-xt-slider-target>
              <div className="xt-card rounded-md p-8 text-base text-center text-black xt-links-default bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
                <div className="xt-h4" data-xt-slider-content>
                  4
                </div>
                <nav className="w-full xt-list xt-list-1 pt-4 items-center justify-center" data-xt-slider-pagination>
                  <button
                    type="button"
                    className="xt-button text-2xs py-2 px-3.5 in:px-5 h-6 rounded-full text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200 transition-all hidden"
                    data-xt-slider-element
                    title="Slide xt-num">
                    xt-content
                  </button>
                </nav>
              </div>
            </div>

            <div className="xt-slide w-8/12 sm:w-6/12 md:w-5/12 group" data-xt-slider-target>
              <div className="xt-card rounded-md p-8 text-base text-center text-black xt-links-default bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
                <div className="xt-h4" data-xt-slider-content>
                  5
                </div>
                <nav className="w-full xt-list xt-list-1 pt-4 items-center justify-center" data-xt-slider-pagination>
                  <button
                    type="button"
                    className="xt-button text-2xs py-2 px-3.5 in:px-5 h-6 rounded-full text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200 transition-all hidden"
                    data-xt-slider-element
                    title="Slide xt-num">
                    xt-content
                  </button>
                </nav>
              </div>
            </div>

            <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
              <div className="xt-card rounded-md p-8 text-base text-center text-black xt-links-default bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
                <div className="xt-h4" data-xt-slider-content>
                  6
                </div>
                <nav className="w-full xt-list xt-list-1 pt-4 items-center justify-center" data-xt-slider-pagination>
                  <button
                    type="button"
                    className="xt-button text-2xs py-2 px-3.5 in:px-5 h-6 rounded-full text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200 transition-all hidden"
                    data-xt-slider-element
                    title="Slide xt-num">
                    xt-content
                  </button>
                </nav>
              </div>
            </div>

            <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
              <div className="xt-card rounded-md p-8 text-base text-center text-black xt-links-default bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
                <div className="xt-h4" data-xt-slider-content>
                  7
                </div>
                <nav className="w-full xt-list xt-list-1 pt-4 items-center justify-center" data-xt-slider-pagination>
                  <button
                    type="button"
                    className="xt-button text-2xs py-2 px-3.5 in:px-5 h-6 rounded-full text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200 transition-all hidden"
                    data-xt-slider-element
                    title="Slide xt-num">
                    xt-content
                  </button>
                </nav>
              </div>
            </div>
          </div>

          <nav className="w-full xt-list xt-list-3 pt-4 items-center justify-center" data-xt-slider-pagination>
            <button
              type="button"
              className="xt-button text-2xs py-2 px-3.5 h-6 rounded-full text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 hover:bg-gray-200 on:px-5 active:bg-gray-300 on:bg-gray-200 transition-all hidden"
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
  const dragEase = 'quart.out'
  let dragDistance
  let dragDuration

  // init

  /***/
  let self = new Xt.Slider(slider, {})
  /***/

  // dragposition (set internal dragPosition to resume animation mid dragging)

  const dragposition = () => {
    // dragDuration depending on distance
    dragDistance = Math.abs(self.detail.dragPosition - self.detail.dragFinal)
    dragDuration = self.initial || self.detail.isDrag ? 0 : Math.min(Math.log(1 + dragDistance / 125), 1.5)
    // dragPosition animation to keep updated with animation
    gsap.killTweensOf(self.detail)
    gsap.to(self.detail, {
      dragPosition: self.detail.dragFinal,
      duration: dragDuration,
      ease: dragEase,
    })
    // dragger animation
    gsap.killTweensOf(self.dragger)
    gsap.to(self.dragger, {
      x: self.detail.dragFinal,
      duration: dragDuration,
      ease: dragEase,
    })
  }

  self.dragger.addEventListener('dragposition.xt.slider', dragposition)

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}
