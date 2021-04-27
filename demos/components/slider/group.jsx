import React, { useRef, useCallback } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import gsap from 'gsap'

export default function component() {
  const nodeRef = useRef(null)
  let unmount
  const ref = useCallback(ref => {
    if (nodeRef.current) {
      unmount(nodeRef.current)
    }
    nodeRef.current = ref
    if (ref !== null) {
      unmount = mount({ ref })
    }
  }, [])

  return (
    <div className="demo--slider-group-responsive-react" ref={ref}>
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

            <div className="xt-slide w-6/12 sm:w-4/12">
              <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200">
                <div className="xt-h4">8</div>
              </div>
            </div>

            <div className="xt-slide w-6/12 sm:w-4/12">
              <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200">
                <div className="xt-h4">9</div>
              </div>
            </div>

            <div className="xt-slide w-6/12 sm:w-4/12">
              <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200">
                <div className="xt-h4">10</div>
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
    group: 1,
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
