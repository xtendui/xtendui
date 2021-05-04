import React, { useRef, useCallback } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import gsap from 'gsap'

export default function component() {
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
    <div className="demo--slider-status-react" ref={ref}>
      <div className="xt-slider">
        <div className="p-4 md:p-6 lg:p-8">
          <div className="xt-slides xt-row xt-row-4">
            <div className="xt-slide w-8/12 sm:w-6/12">
              <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200">
                <div className="xt-h4">1</div>
              </div>
            </div>

            <div className="xt-slide w-6/12 sm:w-4/12">
              <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200">
                <div className="xt-h4">2</div>
              </div>
            </div>

            <div className="xt-slide w-6/12 sm:w-4/12">
              <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200">
                <div className="xt-h4">3</div>
              </div>
            </div>

            <div className="xt-slide w-full">
              <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200">
                <div className="xt-h4">4</div>
              </div>
            </div>

            <div className="xt-slide w-6/12 sm:w-4/12">
              <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200">
                <div className="xt-h4">5</div>
              </div>
            </div>

            <div className="xt-slide w-6/12 sm:w-4/12">
              <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200">
                <div className="xt-h4">6</div>
              </div>
            </div>

            <div className="xt-slide w-8/12 sm:w-6/12">
              <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200">
                <div className="xt-h4">7</div>
              </div>
            </div>
          </div>

          <div className="slider-status mt-6 mx-auto px-6 max-w-4xl">
            <div className="relative">
              <div className="slider-status-current absolute left-0 top-0 h-0 border-t border-b border-black bg-black transition-all ease-in-out duration-500"></div>
              <div className="slider-status-container h-0 w-full border-t border-b border-black border-opacity-5"></div>
            </div>
          </div>

          <nav className="xt-slider-pagination hidden">
            <button type="button" className="xt-button hidden" data-xt-pag></button>
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
  const dragTime = 1
  const dragEase = 'quint.out'

  // init

  const self = new Xt.Slider(slider, {})

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

/* mountStatus */

const mountStatus = ({ ref }) => {
  // vars

  const slider = ref.querySelector('.xt-slider')
  const status = ref.querySelector('.slider-status')
  const current = slider.querySelector('.slider-status-current')
  const container = slider.querySelector('.slider-status-container')

  // change

  const change = () => {
    const self = Xt.get('xt-slider', slider)
    if (!self) return
    // availableWidth
    let availableWidth = 0
    for (const tr of self.targets) {
      availableWidth += tr.offsetWidth
    }
    // width
    const el = self.elements.filter(x => self.hasCurrent(x))
    const slides = self.getTargets(el[0])
    let width = 0
    let left = slides[0].offsetLeft
    for (const slide of slides) {
      width += slide.offsetWidth
    }
    // set
    const containerWidth = container.offsetWidth
    const currentWidth = (width * containerWidth) / availableWidth
    const currentLeft = (left * containerWidth) / availableWidth
    current.style.width = `${currentWidth}px`
    current.style.left = `${currentLeft}px`
    // disabled
    if (self.disabled) {
      status.classList.add('hidden')
    } else {
      status.classList.remove('hidden')
    }
  }

  slider.addEventListener('on.xt.slider', change)
  slider.addEventListener('init.xt.slider', change)
  slider.addEventListener('status.xt.slider', change)
  addEventListener('resize', change)

  // unmount

  return () => {
    removeEventListener('resize', change)
  }
}
