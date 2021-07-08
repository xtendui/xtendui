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
    <div className="demo--slider-status-react" ref={ref}>
      <div className="xt-slider">
        <div className="p-4 md:p-6 lg:p-8">
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

          <div className="slider-status mt-6 mx-auto px-6 max-w-4xl">
            <div className="relative">
              <div className="slider-status-current absolute left-0 top-0 h-0 border-t border-b border-black bg-black transition-all ease-in-out"></div>
              <div className="slider-status-container h-0 w-full border-t border-b border-black border-opacity-5"></div>
            </div>
          </div>

          <nav className="hidden" data-xt-slider-pagination>
            <button type="button" className="xt-button hidden" data-xt-slider-element></button>
          </nav>
        </div>
      </div>
    </div>
  )
}

/* mount */

const mount = ({ ref }) => {
  const unmountSlider = mountSlider({ ref })
  const unmountStatus = mountStatus({ ref })

  // unmount

  return () => {
    unmountSlider()
    unmountStatus()
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

/* mountStatus */

const mountStatus = ({ ref }) => {
  // vars

  const slider = ref.querySelector('.xt-slider')
  const self = Xt.get('xt-slider', slider)
  if (!self) return () => {}
  const current = slider.querySelector('.slider-status-current')
  const container = slider.querySelector('.slider-status-container')

  // change

  const change = e => {
    // check because of event propagation
    if (e.target === slider || self.targets.includes(e.target)) {
      // availableWidth
      let availableWidth = 0
      for (const tr of self.targets) {
        availableWidth += tr.offsetWidth
      }
      // width
      const trs = self.targets.filter(x => self.hasCurrent(x))
      if (!trs.length) return
      let width = 0
      let left = trs[0].offsetLeft
      for (const tr of trs) {
        width += tr.offsetWidth
      }
      // set
      const containerWidth = container.offsetWidth
      const currentWidth = (width * containerWidth) / availableWidth
      const currentLeft = (left * containerWidth) / availableWidth
      current.style.width = `${currentWidth}px`
      current.style.left = `${currentLeft}px`
    }
  }

  slider.addEventListener('on.xt.slider', change, true)
  slider.addEventListener('init.xt.slider', change)
  slider.addEventListener('status.xt.slider', change)
  addEventListener('resize', change)

  // unmount

  return () => {
    removeEventListener('resize', change)
  }
}
