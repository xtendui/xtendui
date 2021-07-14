import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import 'xtendui/src/mousefollow'
import gsap from 'gsap'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--navsides-slider-react" ref={ref}>
      <div className="xt-slider">
        <div className="xt-slides xt-row xt-row-4" data-xt-slider-dragger>
          <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
            <div className="xt-card rounded-md p-8 text-base text-center text-black xt-links-default bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
              <div className="xt-h4">1</div>
            </div>
          </div>

          <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
            <div className="xt-card rounded-md p-8 text-base text-center text-black xt-links-default bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
              <div className="xt-h4">2</div>
            </div>
          </div>

          <div className="xt-slide w-8/12 sm:w-6/12 md:w-5/12 group" data-xt-slider-target>
            <div className="xt-card rounded-md p-8 text-base text-center text-black xt-links-default bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
              <div className="xt-h4">3</div>
            </div>
          </div>

          <div className="xt-slide w-full group" data-xt-slider-target>
            <div className="xt-card rounded-md p-8 text-base text-center text-black xt-links-default bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
              <div className="xt-h4">4</div>
            </div>
          </div>

          <div className="xt-slide w-8/12 sm:w-6/12 md:w-5/12 group" data-xt-slider-target>
            <div className="xt-card rounded-md p-8 text-base text-center text-black xt-links-default bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
              <div className="xt-h4">5</div>
            </div>
          </div>

          <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
            <div className="xt-card rounded-md p-8 text-base text-center text-black xt-links-default bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
              <div className="xt-h4">6</div>
            </div>
          </div>

          <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
            <div className="xt-card rounded-md p-8 text-base text-center text-black xt-links-default bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
              <div className="xt-h4">7</div>
            </div>
          </div>
        </div>

        <nav className="w-full xt-list xt-list-2 pt-4 items-center justify-center" data-xt-slider-pagination>
          <button
            type="button"
            className="xt-button p-2 min-w-[1.25rem] h-5 rounded-full text-3xs text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 hover:bg-gray-200 on:px-4 active:bg-gray-300 on:bg-gray-200 transition-all hidden"
            data-xt-slider-element
            title="Slide xt-num"></button>
        </nav>

        <button
          type="button"
          className="*** hidden md:block cursor-none absolute top-0 left-0 w-24 h-full group ***"
          data-xt-nav="-1"
          aria-label="Previous slide"
          data-xt-mousefollow>
          <div
            className="*** xt-mousefollow fixed *** text-black text-2xl transition-opacity opacity-0 in:opacity-100"
            data-xt-mousefollow-target>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="xt-icon *** transition-all duration-300 group-in:opacity-75 group-in:scale-75 ***"
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
        </button>

        <button
          type="button"
          className="*** hidden md:block cursor-none absolute top-0 right-0 w-24 h-full group ***"
          data-xt-nav="1"
          aria-label="Next slide"
          data-xt-mousefollow>
          <div
            className="*** xt-mousefollow fixed *** text-black text-2xl transition-opacity opacity-0 in:opacity-100"
            data-xt-mousefollow-target>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="xt-icon *** transition-all duration-300 group-in:opacity-75 group-in:scale-75 ***"
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
        </button>
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
  let distance
  let duration

  // init

  /***/
  const self = new Xt.Slider(slider, {
    loop: true,
  })
  /***/

  // dragposition (set internal position to resume animation mid dragging)

  const dragposition = () => {
    // duration depending on distance
    distance = Math.abs(self.drag.position - self.drag.final)
    duration = self.initial || self.drag.instant ? 0 : Math.min(Math.log(1 + distance / 125), 1.5)
    // position animation to keep updated with animation
    gsap.killTweensOf(self.drag)
    gsap.to(self.drag, {
      position: self.drag.final,
      duration: duration,
      ease: dragEase,
    })
    // dragger animation
    gsap.killTweensOf(self.dragger)
    gsap.to(self.dragger, {
      x: self.drag.final,
      duration: duration,
      ease: dragEase,
    })
  }

  self.dragger.addEventListener('dragposition.xt.slider', dragposition)

  // unmount

  return () => {}
}
