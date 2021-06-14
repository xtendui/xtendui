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
        <div className="xt-slides xt-row xt-row-4">
          <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group">
            <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200 border-2 border-transparent transition group-in:border-gray-400">
              <div className="xt-h4">1</div>
            </div>
          </div>

          <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group">
            <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200 border-2 border-transparent transition group-in:border-gray-400">
              <div className="xt-h4">2</div>
            </div>
          </div>

          <div className="xt-slide w-8/12 sm:w-6/12 md:w-5/12 group">
            <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200 border-2 border-transparent transition group-in:border-gray-400">
              <div className="xt-h4">3</div>
            </div>
          </div>

          <div className="xt-slide w-full group">
            <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200 border-2 border-transparent transition group-in:border-gray-400">
              <div className="xt-h4">4</div>
            </div>
          </div>

          <div className="xt-slide w-8/12 sm:w-6/12 md:w-5/12 group">
            <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200 border-2 border-transparent transition group-in:border-gray-400">
              <div className="xt-h4">5</div>
            </div>
          </div>

          <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group">
            <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200 border-2 border-transparent transition group-in:border-gray-400">
              <div className="xt-h4">6</div>
            </div>
          </div>

          <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group">
            <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200 border-2 border-transparent transition group-in:border-gray-400">
              <div className="xt-h4">7</div>
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

        <button
          type="button"
          className="*** hidden md:block cursor-none absolute top-0 left-0 w-24 h-full group ***"
          data-xt-nav="-1"
          aria-label="Previous slide"
          data-xt-mousefollow>
          <div className="*** xt-mousefollow fixed *** text-black text-2xl transition-opacity opacity-0 in:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="xt-icon *** transform transition-all duration-300 group-in:opacity-75 group-in:scale-75 ***"
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
          <div className="*** xt-mousefollow fixed *** text-black text-2xl transition-opacity opacity-0 in:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="xt-icon *** transform transition-all duration-300 group-in:opacity-75 group-in:scale-75 ***"
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
  let dragDistance
  let dragDuration

  // init

  /***/
  const self = new Xt.Slider(slider, {
    loop: true,
  })
  /***/

  // dragposition (set internal dragPosition to resume animation mid dragging)

  const dragposition = () => {
    // dragDuration depending on distance
    dragDistance = Math.abs(self.detail.dragPosition - self.detail.dragFinal)
    dragDuration = self.initial || self.detail.instant ? 0 : Math.min(Math.log(1 + dragDistance / 125), 1.5)
    // dragPosition tween with main time and ease
    gsap.killTweensOf(self.detail)
    gsap.to(self.detail, {
      dragPosition: self.detail.dragFinal,
      duration: dragDuration,
      ease: dragEase,
    })
    // dragger tween with main time and ease
    gsap.killTweensOf(self.dragger)
    gsap.to(self.dragger, {
      x: self.detail.dragFinal,
      duration: dragDuration,
      ease: dragEase,
    })
  }

  self.dragger.addEventListener('dragposition.xt.slider', dragposition)

  // unmount

  return () => {}
}
