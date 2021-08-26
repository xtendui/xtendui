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
    <div className="demo--slider-animation-absolute-cover-react" ref={ref}>
      <div className="xt-slider bg-primary-500">
        <div className="xt-slides" data-xt-slider-dragger>
          <div className="xt-slide *** xt-slide-absolute off:hidden *** w-full" data-xt-slider-target>
            <div className="hero relative overflow-hidden bg-black">
              <div className="*** hero-inner ***">
                <div className="xt-media-container bg-gray-300 w-full h-full absolute">
                  <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
                <div className="flex relative h-96">
                  <div className="relative px-8 py-16 md:px-24 lg:py-20 xl:py-24 mt-auto mx-auto max-w-2xl text-white xt-links-inverse text-center">
                    <h2 className="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">1</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="*** hero-cover *** absolute inset-0 pointer-events-none bg-primary-500 translate-x-full"></div>
          </div>

          <div className="xt-slide *** xt-slide-absolute off:hidden *** w-full" data-xt-slider-target>
            <div className="hero relative overflow-hidden bg-black">
              <div className="*** hero-inner ***">
                <div className="xt-media-container bg-gray-300 w-full h-full absolute">
                  <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                </div>
                <div className="flex relative h-96">
                  <div className="relative px-8 py-16 md:px-24 lg:py-20 xl:py-24 mt-auto mx-auto max-w-2xl text-white xt-links-inverse text-center">
                    <h2 className="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">2</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="*** hero-cover *** absolute inset-0 pointer-events-none bg-gray-500 translate-x-full"></div>
          </div>

          <div className="xt-slide *** xt-slide-absolute off:hidden *** w-full" data-xt-slider-target>
            <div className="hero relative overflow-hidden bg-black">
              <div className="*** hero-inner ***">
                <div className="xt-media-container bg-gray-300 w-full h-full absolute">
                  <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
                <div className="flex relative h-96">
                  <div className="relative px-8 py-16 md:px-24 lg:py-20 xl:py-24 mt-auto mx-auto max-w-2xl text-white xt-links-inverse text-center">
                    <h2 className="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">3</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="*** hero-cover *** absolute inset-0 pointer-events-none bg-primary-500 translate-x-full"></div>
          </div>
        </div>

        <div className="xt-slide *** xt-slide-absolute off:hidden *** w-full" data-xt-slider-target>
          <div className="hero relative overflow-hidden bg-black">
            <div className="*** hero-inner ***">
              <div className="xt-media-container bg-gray-300 w-full h-full absolute">
                <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
              </div>
              <div className="flex relative h-96">
                <div className="relative px-8 py-16 md:px-24 lg:py-20 xl:py-24 mt-auto mx-auto max-w-2xl text-white xt-links-inverse text-center">
                  <h2 className="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">4</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="*** hero-cover *** absolute inset-0 pointer-events-none bg-gray-500 translate-x-full"></div>
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
  let dragDuration
  const dragEase = 'quart.out'

  // slider

  /***/
  let self = new Xt.Slider(slider, {
    duration: () => dragDuration * 1000,
    mode: 'absolute',
    loop: true,
  })
  /***/

  // dragposition (set internal position to resume animation mid dragging)

  const dragposition = () => {
    // duration depending on dragger size
    dragDuration = self.initial || self.drag.instant ? 0 : Math.max(0.5, Math.min(1, Math.log(self.drag.size / 400)))
    // position animation to keep updated with animation
    gsap.killTweensOf(self.drag)
    gsap.to(self.drag, {
      position: self.drag.final,
      duration: dragDuration,
      ease: dragEase,
    })
  }

  self.dragger.addEventListener('dragposition.xt.slider', dragposition)

  // drag (set drag frame on drag and initial position on activation)

  const drag = () => {
    const tr = self.targets.filter(x => self.hasCurrent({ el: x }))[0]
    // cover
    const cover = tr.querySelector('.hero-cover')
    gsap.killTweensOf(cover)
    gsap.set(cover, {
      x: `${100 * self.drag.ratioInverse * self.direction}%`,
    })
  }

  self.dragger.addEventListener('drag.xt.slider', drag)

  // dragreset (set animation on drag reset, when dragging opposite position from initial dragging)

  const dragreset = () => {
    const tr = self.targets.filter(x => self.hasCurrent({ el: x }))[0]
    // cover
    const cover = tr.querySelector('.hero-cover')
    gsap.killTweensOf(cover)
    gsap.to(cover, {
      x: `${-100 * self.direction}%`,
      duration: dragDuration,
      ease: dragEase,
    })
  }

  self.dragger.addEventListener('dragreset.xt.slider', dragreset)

  // on

  const on = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr) && !self.initial) {
      // mask
      const mask = tr.querySelector('.hero')
      gsap.killTweensOf(mask)
      gsap.set(mask, {
        x: `${100 * self.drag.ratioInverse * self.direction}%`,
      })
      gsap.to(mask, {
        x: 0,
        duration: dragDuration,
        ease: dragEase,
      })
      const maskInner = tr.querySelector('.hero-inner')
      gsap.killTweensOf(maskInner)
      gsap.set(maskInner, {
        x: `${-100 * self.drag.ratioInverse * self.direction}%`,
      })
      gsap.to(maskInner, {
        x: 0,
        duration: dragDuration,
        ease: dragEase,
      })
      /***/
      // dragposition (set internal position to instant position after on)
      gsap.killTweensOf(self.drag)
      gsap.set(self.drag, {
        position: self.drag.final,
      })
      /***/
    }
  }

  self.container.addEventListener('on.xt.slider', on, true)

  // off

  const off = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr)) {
      // cover
      const cover = tr.querySelector('.hero-cover')
      gsap.killTweensOf(cover)
      if (!self.drag.instant) {
        gsap.set(cover, {
          x: `${100 * self.direction}%`,
        })
      }
      gsap.to(cover, {
        x: `${-100 * self.direction}%`,
        duration: dragDuration,
        ease: dragEase,
      })
      // mask
      const mask = tr.querySelector('.hero')
      gsap.killTweensOf(mask)
      gsap.to(mask, {
        x: `${-100 * self.direction}%`,
        duration: dragDuration,
        ease: dragEase,
      })
      const maskInner = tr.querySelector('.hero-inner')
      gsap.killTweensOf(maskInner)
      gsap.to(maskInner, {
        x: `${100 * self.direction}%`,
        duration: dragDuration,
        ease: dragEase,
      })
    }
  }

  self.container.addEventListener('off.xt.slider', off, true)

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}
