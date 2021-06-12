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
    <div className="demo--slider-exclude-react" ref={ref}>
      <div className="demo--slider-exclude-toggle-react" ref={ref}>
        <div className="xt-list xt-list-3 items-center p-4 pb-0 md:p-6 md:pb-0 lg:p-8 lg:pb-0">
          <button
            type="button"
            className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 active:bg-gray-500 on:bg-gray-500"
            data-xt-group="group0">
            Group0
          </button>

          <button
            type="button"
            className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 active:bg-gray-500 on:bg-gray-500 *** on ***"
            data-xt-group="group1">
            Group1
          </button>

          <div
            className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200"
            id="toggle--unique-0">
            Target 0
          </div>

          <div
            className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200"
            id="toggle--unique-1">
            Target 1
          </div>
        </div>

        <div className="xt-slider">
          <div className="p-4 md:p-6 lg:p-8">
            <div className="xt-slides xt-row xt-row-4">
              <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group">
                <div className="xt-toggle" data-xt-group="group1">
                  <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200 border-2 border-transparent transition group-in:border-gray-400">
                    <div className="xt-h4">1</div>
                  </div>
                </div>
              </div>

              <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group">
                <div className="xt-toggle" data-xt-group="group0,group1">
                  <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200 border-2 border-transparent transition group-in:border-gray-400">
                    <div className="xt-h4">2</div>
                  </div>
                </div>
              </div>

              <div className="xt-slide w-8/12 sm:w-6/12 md:w-5/12 group">
                <div className="xt-toggle" data-xt-group="group0">
                  <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200 border-2 border-transparent transition group-in:border-gray-400">
                    <div className="xt-h4">3</div>
                  </div>
                </div>
              </div>

              <div className="xt-slide w-full group">
                <div className="xt-toggle" data-xt-group="group1">
                  <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200 border-2 border-transparent transition group-in:border-gray-400">
                    <div className="xt-h4">4</div>
                  </div>
                </div>
              </div>

              <div className="xt-slide w-8/12 sm:w-6/12 md:w-5/12 group">
                <div className="xt-toggle" data-xt-group="group0">
                  <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200 border-2 border-transparent transition group-in:border-gray-400">
                    <div className="xt-h4">5</div>
                  </div>
                </div>
              </div>

              <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group">
                <div className="xt-toggle" data-xt-group="group0,group1">
                  <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200 border-2 border-transparent transition group-in:border-gray-400">
                    <div className="xt-h4">6</div>
                  </div>
                </div>
              </div>

              <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group">
                <div className="xt-toggle" data-xt-group="group1">
                  <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200 border-2 border-transparent transition group-in:border-gray-400">
                    <div className="xt-h4">7</div>
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
    </div>
  )
}

/* mount */

const mount = ({ ref }) => {
  const unmountToggle = mountToggle({ ref })
  const unmountSlider = mountSlider({ ref })

  // unmount

  return () => {
    unmountToggle()
    unmountSlider()
  }
}

/* mountToggle */

const mountToggle = ({ ref }) => {
  // vars

  const toggle = ref.querySelector('.demo--slider-exclude-toggle')
  const slider = ref.querySelector('.xt-slider')

  // init

  /***/
  let self = new Xt.Toggle(toggle, {
    elements: '.xt-list > button',
    targets: '.xt-toggle',
    min: 1,
  })
  /***/

  // change

  const change = () => {
    // deactivate slides
    for (const tr of self.targets.filter(x => !self.hasCurrent(x))) {
      const slide = tr.closest('.xt-slide')
      if (slide) {
        slide.classList.add('hidden')
      }
    }
    // activate slides
    for (const tr of self.targets.filter(x => self.hasCurrent(x))) {
      const slide = tr.closest('.xt-slide')
      if (slide) {
        slide.classList.remove('hidden')
      }
    }
    // reinit slides
    const selfSlider = Xt.get('xt-slider', slider)
    if (selfSlider) {
      selfSlider.reinit(false)
    }
  }

  for (const element of self.elements) {
    element.addEventListener('on.xt.toggle', change)
  }

  // unmount

  return () => {}
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
    exclude: '.hidden',
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
