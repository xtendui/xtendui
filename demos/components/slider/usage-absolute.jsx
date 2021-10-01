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
          <div className="*** xt-slide xt-slide-absolute off:hidden *** w-full" data-xt-slider-target>
            <div className="hero relative overflow-hidden bg-black">
              <div className="hero-inner">
                <div className="xt-media-container bg-gray-200 w-full h-full absolute">
                  <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
                <div className="flex relative h-96">
                  <div className="relative px-8 py-16 md:px-24 lg:py-20 xl:py-24 mt-auto mx-auto *** max-w-2xl *** text-white xt-links-inverse text-center">
                    <h2 className="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">1</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="*** xt-slide xt-slide-absolute off:hidden *** w-full" data-xt-slider-target>
            <div className="hero relative overflow-hidden bg-black">
              <div className="hero-inner">
                <div className="xt-media-container bg-gray-200 w-full h-full absolute">
                  <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                </div>
                <div className="flex relative h-96">
                  <div className="relative px-8 py-16 md:px-24 lg:py-20 xl:py-24 mt-auto mx-auto *** max-w-2xl *** text-white xt-links-inverse text-center">
                    <h2 className="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">2</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="*** xt-slide xt-slide-absolute off:hidden *** w-full" data-xt-slider-target>
            <div className="hero relative overflow-hidden bg-black">
              <div className="hero-inner">
                <div className="xt-media-container bg-gray-200 w-full h-full absolute">
                  <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
                <div className="flex relative h-96">
                  <div className="relative px-8 py-16 md:px-24 lg:py-20 xl:py-24 mt-auto mx-auto *** max-w-2xl *** text-white xt-links-inverse text-center">
                    <h2 className="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">3</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="*** xt-slide xt-slide-absolute off:hidden *** w-full" data-xt-slider-target>
          <div className="hero relative overflow-hidden bg-black">
            <div className="hero-inner">
              <div className="xt-media-container bg-gray-200 w-full h-full absolute">
                <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
              </div>
              <div className="flex relative h-96">
                <div className="relative px-8 py-16 md:px-24 lg:py-20 xl:py-24 mt-auto mx-auto *** max-w-2xl *** text-white xt-links-inverse text-center">
                  <h2 className="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">4</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav
          className="w-full xt-list xt-list-2 pt-4 items-center justify-center absolute z-content bottom-6"
          data-xt-slider-pagination>
          <button
            type="button"
            className="xt-button p-2 min-w-[1.25rem] h-5 rounded-full text-3xs text-gray-900 font-medium leading-snug tracking-wider uppercase bg-gray-100 hover:bg-gray-200 on:px-4 active:bg-gray-300 on:bg-gray-200 transition-all hidden"
            data-xt-slider-element
            title="Slide xt-num"></button>
        </nav>
      </div>
    </div>
  )
}

/* mountSlider */

const mountSlider = ({ ref }) => {
  // vars

  const slider = ref.querySelector('.xt-slider')

  // slider

  /***/
  let self = new Xt.Slider(slider, {
    mode: 'absolute',
  })
  /***/

  // dragposition (set internal position to resume animation mid dragging)

  const dragposition = () => {
    // position animation to keep updated with animation
    gsap.set(self.drag, {
      position: self.drag.final,
    })
  }

  self.dragger.addEventListener('dragposition.xt.slider', dragposition)

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}

/* mount */

const mount = ({ ref }) => {
  const unmountSlider = mountSlider({ ref })

  // unmount

  return () => {
    unmountSlider()
  }
}
