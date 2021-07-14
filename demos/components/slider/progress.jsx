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
    <div className="demo--slider-progress-react" ref={ref}>
      <div className="xt-slider">
        <div className="p-4 md:p-6 lg:p-8" data-xt-mousefollow>
          <div className="xt-slides xt-row xt-row-4" data-xt-slider-dragger>
            <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
              <div className="xt-card rounded-md p-8 text-base text-center text-black xt-links-default bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
                <div className="xt-h4">1</div>
                <span className="xt-loader absolute inset-0 rounded-inherit overflow-hidden">
                  <span className="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
                    <span className="block absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
                    <span className="block absolute bg-current h-full bottom-0 left-0"></span>
                  </span>
                </span>
              </div>
            </div>

            <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
              <div className="xt-card rounded-md p-8 text-base text-center text-black xt-links-default bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
                <div className="xt-h4">2</div>
                <span className="xt-loader absolute inset-0 rounded-inherit overflow-hidden">
                  <span className="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
                    <span className="block absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
                    <span className="block absolute bg-current h-full bottom-0 left-0"></span>
                  </span>
                </span>
              </div>
            </div>
            <div className="xt-slide w-8/12 sm:w-6/12 md:w-5/12 group" data-xt-slider-target>
              <div className="xt-card rounded-md p-8 text-base text-center text-black xt-links-default bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
                <div className="xt-h4">3</div>
                <span className="xt-loader absolute inset-0 rounded-inherit overflow-hidden">
                  <span className="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
                    <span className="block absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
                    <span className="block absolute bg-current h-full bottom-0 left-0"></span>
                  </span>
                </span>
              </div>
            </div>

            <div className="xt-slide w-full group" data-xt-slider-target>
              <div className="xt-card rounded-md p-8 text-base text-center text-black xt-links-default bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
                <div className="xt-h4">4</div>
                <span className="xt-loader absolute inset-0 rounded-inherit overflow-hidden">
                  <span className="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
                    <span className="block absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
                    <span className="block absolute bg-current h-full bottom-0 left-0"></span>
                  </span>
                </span>
              </div>
            </div>

            <div className="xt-slide w-8/12 sm:w-6/12 md:w-5/12 group" data-xt-slider-target>
              <div className="xt-card rounded-md p-8 text-base text-center text-black xt-links-default bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
                <div className="xt-h4">5</div>
                <span className="xt-loader absolute inset-0 rounded-inherit overflow-hidden">
                  <span className="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
                    <span className="block absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
                    <span className="block absolute bg-current h-full bottom-0 left-0"></span>
                  </span>
                </span>
              </div>
            </div>

            <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
              <div className="xt-card rounded-md p-8 text-base text-center text-black xt-links-default bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
                <div className="xt-h4">6</div>
                <span className="xt-loader absolute inset-0 rounded-inherit overflow-hidden">
                  <span className="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
                    <span className="block absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
                    <span className="block absolute bg-current h-full bottom-0 left-0"></span>
                  </span>
                </span>
              </div>
            </div>

            <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
              <div className="xt-card rounded-md p-8 text-base text-center text-black xt-links-default bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
                <div className="xt-h4">7</div>
                <span className="xt-loader absolute inset-0 rounded-inherit overflow-hidden">
                  <span className="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
                    <span className="block absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
                    <span className="block absolute bg-current h-full bottom-0 left-0"></span>
                  </span>
                </span>
              </div>
            </div>
          </div>

          <nav className="w-full xt-list xt-list-2 pt-4 items-center justify-center" data-xt-slider-pagination>
            <button
              type="button"
              className="xt-button p-2 min-w-[1.25rem] h-5 rounded-full text-3xs text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 hover:bg-gray-200 on:px-4 active:bg-gray-300 on:bg-gray-200 transition-all hidden"
              data-xt-slider-element
              title="Slide xt-num">
              <span className="xt-loader absolute inset-0 rounded-inherit overflow-hidden">
                <span className="xt-filler absolute inset-0 m-auto text-primary-500">
                  <span className="block absolute bg-current opacity-25 w-full h-full"></span>
                  <span className="block absolute bg-current w-full"></span>
                </span>
              </span>
            </button>
          </nav>

          <span className="*** xt-mousefollow fixed *** xt-loader group hover-none:hidden" data-xt-mousefollow-target>
            <span className="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500 transition opacity-0 group-in:opacity-100 -mt-1 ml-4">
              <svg viewBox="0 0 240 240" className="absolute" preserveAspectRatio="xMinYMin meet">
                <circle
                  className="stroke-current origin-center opacity-25"
                  fill="none"
                  strokeWidth="30"
                  cx="120"
                  cy="120"
                  r="100"
                  strokeDasharray="628"
                  strokeDashoffset="0"
                  pathLength="628"
                />
              </svg>
              <svg viewBox="0 0 240 240">
                <circle
                  className="stroke-current origin-center relativext-icon "
                  fill="none"
                  strokeWidth="30"
                  cx="120"
                  cy="120"
                  r="100"
                  strokeDasharray="628"
                  strokeDashoffset="628"
                  pathLength="628"
                />
              </svg>
            </span>
          </span>
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

  // vars

  const dragEase = 'quart.out'
  let distance
  let duration

  const spinnerTime = 0.25
  const spinnerEase = 'linear'
  const fillerTime = 0.25
  const fillerEase = 'linear'

  // init

  /***/
  let self = new Xt.Slider(slider, {
    auto: {
      time: 4000,
      initial: false,
    },
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

  // autostart

  const autostart = () => {
    // slider
    const spinner = self.container.querySelectorAll('.xt-spinner svg:nth-child(2) circle')
    const timeline = gsap.timeline({
      overwrite: false,
    })
    gsap.killTweensOf(spinner)
    timeline.to(spinner, {
      strokeDashoffset: 628,
      duration: spinnerTime,
      ease: spinnerEase,
      autoRound: false,
    })
    timeline.to(spinner, {
      strokeDashoffset: 0,
      duration: self.options.auto.time / 1000 - spinnerTime,
      ease: spinnerEase,
      autoRound: false,
    })
    // elements
    const els = self.elements.filter(x => self.hasCurrent({ el: x }))
    for (const el of els) {
      const fillers = el.querySelectorAll('.xt-filler span:nth-child(2)')
      for (const filler of fillers) {
        gsap.killTweensOf(filler)
        gsap.set(filler, {
          height: 0,
          top: '100%',
        })
        gsap.to(filler, {
          height: '100%',
          top: 0,
          duration: self.options.auto.time / 1000,
          ease: fillerEase,
        })
      }
    }
    // targets
    const trs = self.targets.filter(x => self.hasCurrent({ el: x }))
    for (const tr of trs) {
      const fillers = tr.querySelectorAll('.xt-filler span:nth-child(2)')
      for (const filler of fillers) {
        gsap.killTweensOf(filler)
        gsap.set(filler, {
          width: 0,
          left: 0,
        })
        gsap.to(filler, {
          width: '100%',
          left: 0,
          duration: self.options.auto.time / 1000,
          ease: fillerEase,
        })
      }
    }
  }

  self.container.addEventListener('autostart.xt.slider', autostart)

  // autostop

  const autostop = () => {
    // elements
    const els = self.elements.filter(x => self.hasCurrent({ el: x }))
    for (const el of els) {
      const fillers = el.querySelectorAll('.xt-filler span:nth-child(2)')
      for (const filler of fillers) {
        gsap.killTweensOf(filler)
        gsap.to(filler, {
          height: 0,
          top: 0,
          duration: fillerTime,
          ease: fillerEase,
        })
      }
    }
    // targets
    const trs = self.targets.filter(x => self.hasCurrent({ el: x }))
    for (const tr of trs) {
      const fillers = tr.querySelectorAll('.xt-filler span:nth-child(2)')
      for (const filler of fillers) {
        gsap.killTweensOf(filler)
        gsap.to(filler, {
          width: 0,
          left: '100%',
          duration: fillerTime,
          ease: fillerEase,
        })
      }
    }
  }

  self.container.addEventListener('autostop.xt.slider', autostop)

  // autopause

  const autopause = () => {
    // slider
    const spinner = self.container.querySelectorAll('.xt-spinner svg:nth-child(2) circle')
    gsap.killTweensOf(spinner)
    gsap.to(spinner, {
      strokeDashoffset: 628,
      duration: spinnerTime,
      ease: spinnerEase,
      autoRound: false,
    })
    // elements
    const els = self.elements.filter(x => self.hasCurrent({ el: x }))
    for (const el of els) {
      const fillers = el.querySelectorAll('.xt-filler span:nth-child(2)')
      for (const filler of fillers) {
        gsap.killTweensOf(filler)
        gsap.to(filler, {
          height: 0,
          top: '100%',
          duration: fillerTime,
          ease: fillerEase,
        })
      }
    }
    // targets
    const trs = self.targets.filter(x => self.hasCurrent({ el: x }))
    for (const tr of trs) {
      const fillers = tr.querySelectorAll('.xt-filler span:nth-child(2)')
      for (const filler of fillers) {
        gsap.killTweensOf(filler)
        gsap.to(filler, {
          width: 0,
          left: 0,
          duration: fillerTime,
          ease: fillerEase,
        })
      }
    }
  }

  self.container.addEventListener('autopause.xt.slider', autopause)

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}
