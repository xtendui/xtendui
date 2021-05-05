import React, { useRef, useCallback } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import 'xtendui/src/mousefollow'
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
    <div className="demo--slider-progress-react" ref={ref}>
      <div className="xt-slider">
        <div className="p-4 md:p-6 lg:p-8" data-xt-mousefollow>
          <span className="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden group xt-mousefollow hover-none:hidden">
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
                  className="stroke-current origin-center relative"
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

          <div className="xt-slides xt-row xt-row-4">
            <div className="xt-slide w-8/12 sm:w-6/12">
              <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200">
                <div className="xt-h4">1</div>
                <span className="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
                  <span className="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
                    <span className="block absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
                    <span className="block absolute bg-current h-full bottom-0 left-0"></span>
                  </span>
                </span>
              </div>
            </div>

            <div className="xt-slide w-6/12 sm:w-4/12">
              <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200">
                <div className="xt-h4">2</div>
                <span className="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
                  <span className="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
                    <span className="block absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
                    <span className="block absolute bg-current h-full bottom-0 left-0"></span>
                  </span>
                </span>
              </div>
            </div>

            <div className="xt-slide w-6/12 sm:w-4/12">
              <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200">
                <div className="xt-h4">3</div>
                <span className="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
                  <span className="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
                    <span className="block absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
                    <span className="block absolute bg-current h-full bottom-0 left-0"></span>
                  </span>
                </span>
              </div>
            </div>

            <div className="xt-slide w-full">
              <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200">
                <div className="xt-h4">4</div>
                <span className="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
                  <span className="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
                    <span className="block absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
                    <span className="block absolute bg-current h-full bottom-0 left-0"></span>
                  </span>
                </span>
              </div>
            </div>

            <div className="xt-slide w-6/12 sm:w-4/12">
              <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200">
                <div className="xt-h4">5</div>
                <span className="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
                  <span className="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
                    <span className="block absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
                    <span className="block absolute bg-current h-full bottom-0 left-0"></span>
                  </span>
                </span>
              </div>
            </div>

            <div className="xt-slide w-6/12 sm:w-4/12">
              <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200">
                <div className="xt-h4">6</div>
                <span className="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
                  <span className="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
                    <span className="block absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
                    <span className="block absolute bg-current h-full bottom-0 left-0"></span>
                  </span>
                </span>
              </div>
            </div>

            <div className="xt-slide w-8/12 sm:w-6/12">
              <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200">
                <div className="xt-h4">7</div>
                <span className="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
                  <span className="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
                    <span className="block absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
                    <span className="block absolute bg-current h-full bottom-0 left-0"></span>
                  </span>
                </span>
              </div>
            </div>
          </div>

          <nav className="xt-slider-pagination w-full xt-list xt-list-3 pt-4 items-center justify-center">
            <button
              type="button"
              className="xt-button text-2xs py-2 px-3.5 w-5 h-6 rounded-full text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 on:px-5 on:bg-gray-400 transition-all hidden"
              data-xt-pag
              title="Slide xt-num">
              <span className="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
                <span className="xt-filler absolute inset-0 m-auto text-primary-500">
                  <span className="block absolute bg-current opacity-25 w-full h-full"></span>
                  <span className="block absolute bg-current w-full"></span>
                </span>
              </span>
            </button>
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

  // vars

  const dragTime = 1
  const dragEase = 'quint.out'

  const spinnerTime = 0.25
  const spinnerEase = 'linear'
  const fillerTime = 0.25
  const fillerEase = 'linear'

  // init

  let self = new Xt.Slider(slider, {
    auto: {
      time: 4000,
      initial: false,
    },
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

  // autostart

  const autostart = () => {
    // slider
    const spinner = self.object.querySelectorAll('.xt-spinner svg:nth-child(2) circle')
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
    const elements = self.elements.filter(x => self.hasCurrent(x))
    for (const element of elements) {
      const fillers = element.querySelectorAll('.xt-filler span:nth-child(2)')
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
    const targets = self.targets.filter(x => self.hasCurrent(x))
    for (const target of targets) {
      const fillers = target.querySelectorAll('.xt-filler span:nth-child(2)')
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

  self.object.addEventListener('autostart.xt.slider', autostart)

  // autostop

  const autostop = () => {
    // elements
    const elements = self.elements.filter(x => self.hasCurrent(x))
    for (const element of elements) {
      const fillers = element.querySelectorAll('.xt-filler span:nth-child(2)')
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
    const targets = self.targets.filter(x => self.hasCurrent(x))
    for (const target of targets) {
      const fillers = target.querySelectorAll('.xt-filler span:nth-child(2)')
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

  self.object.addEventListener('autostop.xt.slider', autostop)

  // autopause

  const autopause = () => {
    // slider
    const spinner = self.object.querySelectorAll('.xt-spinner svg:nth-child(2) circle')
    gsap.killTweensOf(spinner)
    gsap.to(spinner, {
      strokeDashoffset: 628,
      duration: spinnerTime,
      ease: spinnerEase,
      autoRound: false,
    })
    // elements
    const elements = self.elements.filter(x => self.hasCurrent(x))
    for (const element of elements) {
      const fillers = element.querySelectorAll('.xt-filler span:nth-child(2)')
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
    const targets = self.targets.filter(x => self.hasCurrent(x))
    for (const target of targets) {
      const fillers = target.querySelectorAll('.xt-filler span:nth-child(2)')
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

  self.object.addEventListener('autopause.xt.slider', autopause)

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}
