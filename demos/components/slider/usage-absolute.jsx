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
    <div className="demo--slider-usage-absolute-react" ref={ref}>
      <div className="*** xt-slider *** bg-primary-500">
        <div className="*** xt-slides ***" data-xt-slider-dragger>
          <div className="*** xt-slide xt-slide-absolute *** w-full" data-xt-slider-target>
            <div className="hero relative overflow-hidden bg-black">
              <div className="hero-inner">
                <div className="xt-media-container bg-gray-500 w-full h-full absolute">
                  <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
                <div className="flex relative h-96">
                  <div className="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto *** max-w-2xl *** text-white xt-links-inverse text-center">
                    <h2 className="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">1</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="*** xt-slide xt-slide-absolute *** w-full" data-xt-slider-target>
            <div className="hero relative overflow-hidden bg-black">
              <div className="hero-inner">
                <div className="xt-media-container bg-gray-500 w-full h-full absolute">
                  <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                </div>
                <div className="flex relative h-96">
                  <div className="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto *** max-w-2xl *** text-white xt-links-inverse text-center">
                    <h2 className="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">2</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="*** xt-slide xt-slide-absolute *** w-full" data-xt-slider-target>
            <div className="hero relative overflow-hidden bg-black">
              <div className="hero-inner">
                <div className="xt-media-container bg-gray-500 w-full h-full absolute">
                  <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
                <div className="flex relative h-96">
                  <div className="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto *** max-w-2xl *** text-white xt-links-inverse text-center">
                    <h2 className="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">3</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="*** xt-slide xt-slide-absolute *** w-full" data-xt-slider-target>
          <div className="hero relative overflow-hidden bg-black">
            <div className="hero-inner">
              <div className="xt-media-container bg-gray-500 w-full h-full absolute">
                <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
              </div>
              <div className="flex relative h-96">
                <div className="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto *** max-w-2xl *** text-white xt-links-inverse text-center">
                  <h2 className="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">4</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav
          className="w-full xt-list xt-list-3 pt-4 items-center justify-center absolute z-slide bottom-6"
          data-xt-slider-pagination>
          <button
            type="button"
            className="xt-button text-2xs py-2 px-3.5 w-5 h-6 rounded-full text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 hover:bg-gray-200 on:px-5 active:bg-gray-300 on:bg-gray-200 transition-all hidden"
            data-xt-slider-element
            title="Slide xt-num"></button>
        </nav>
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

  // slider

  /***/
  let self = new Xt.Slider(slider, {
    mode: 'absolute',
  })
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
  }

  self.dragger.addEventListener('dragposition.xt.slider', dragposition)

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}
