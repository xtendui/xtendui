import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/toggle'
import 'xtendui/src/mousefollow'
import gsap from 'gsap'

export default function Demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--toggle-progress-react" ref={ref}>
      <div className="xt-list xt-list-3 items-center" data-xt-mousefollow>
        <button
          type="button"
          className="xt-button py-2 px-3 text-xs rounded-full font-medium leading-snug text-gray-900 bg-gray-100 transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
          data-xt-toggle-element>
          Toggle 0
          <span className="xt-loader absolute z-content inset-0 rounded-inherit overflow-hidden">
            <span className="xt-filler absolute inset-0 m-auto text-black text-opacity-50">
              <span className="block absolute bg-current opacity-0 w-full h-full"></span>
              <span className="block absolute bg-current w-full"></span>
            </span>
          </span>
        </button>

        <button
          type="button"
          className="xt-button py-2 px-3 text-xs rounded-full font-medium leading-snug text-gray-900 bg-gray-100 transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
          data-xt-toggle-element>
          Toggle 1
          <span className="xt-loader absolute z-content inset-0 rounded-inherit overflow-hidden">
            <span className="xt-filler absolute inset-0 m-auto text-black text-opacity-50">
              <span className="block absolute bg-current opacity-0 w-full h-full"></span>
              <span className="block absolute bg-current w-full"></span>
            </span>
          </span>
        </button>

        <button
          type="button"
          className="xt-button py-2 px-3 text-xs rounded-full font-medium leading-snug text-gray-900 bg-gray-100 transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
          data-xt-toggle-element>
          Toggle 2
          <span className="xt-loader absolute z-content inset-0 rounded-inherit overflow-hidden">
            <span className="xt-filler absolute inset-0 m-auto text-black text-opacity-50">
              <span className="block absolute bg-current opacity-0 w-full h-full"></span>
              <span className="block absolute bg-current w-full"></span>
            </span>
          </span>
        </button>

        <button
          type="button"
          className="xt-button py-2 px-3 text-xs rounded-full font-medium leading-snug text-gray-900 bg-gray-100 transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
          data-xt-toggle-element>
          Toggle 3
          <span className="xt-loader absolute z-content inset-0 rounded-inherit overflow-hidden">
            <span className="xt-filler absolute inset-0 m-auto text-black text-opacity-50">
              <span className="block absolute bg-current opacity-0 w-full h-full"></span>
              <span className="block absolute bg-current w-full"></span>
            </span>
          </span>
        </button>

        <div
          className="off:hidden out:pointer-events-none relative bg-white rounded-full text-xs py-2 px-3 font-medium shadow"
          data-xt-toggle-target>
          Target 0
          <span className="xt-loader absolute z-content inset-0 rounded-inherit overflow-hidden">
            <span className="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
              <span className="block absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
              <span className="block absolute bg-current h-full bottom-0 left-0"></span>
            </span>
          </span>
        </div>

        <div
          className="off:hidden out:pointer-events-none relative bg-white rounded-full text-xs py-2 px-3 font-medium shadow"
          data-xt-toggle-target>
          Target 1
          <span className="xt-loader absolute z-content inset-0 rounded-inherit overflow-hidden">
            <span className="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
              <span className="block absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
              <span className="block absolute bg-current h-full bottom-0 left-0"></span>
            </span>
          </span>
        </div>

        <div
          className="off:hidden out:pointer-events-none relative bg-white rounded-full text-xs py-2 px-3 font-medium shadow"
          data-xt-toggle-target>
          Target 2
          <span className="xt-loader absolute z-content inset-0 rounded-inherit overflow-hidden">
            <span className="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
              <span className="block absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
              <span className="block absolute bg-current h-full bottom-0 left-0"></span>
            </span>
          </span>
        </div>

        <div
          className="off:hidden out:pointer-events-none relative bg-white rounded-full text-xs py-2 px-3 font-medium shadow"
          data-xt-toggle-target>
          Target 3
          <span className="xt-loader absolute z-content inset-0 rounded-inherit overflow-hidden">
            <span className="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
              <span className="block absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
              <span className="block absolute bg-current h-full bottom-0 left-0"></span>
            </span>
          </span>
        </div>

        <span className="*** xt-mousefollow fixed *** xt-loader group hover-none:hidden" data-xt-mousefollow-target>
          <span className="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500 transition opacity-0 group-in:opacity-100  -mt-1 ml-4">
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
  )
}

/* mountToggle */

const mountToggle = ({ ref }) => {
  // vars

  const toggle = ref
  const spinnerTime = 0.25
  const spinnerEase = 'linear'
  const fillerTime = 0.25
  const fillerEase = 'linear'

  // init

  /***/
  let self = new Xt.Toggle(toggle, {
    auto: {
      time: 4000,
      initial: false,
    },
  })
  /***/

  // autostart

  const autostart = () => {
    // toggle
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

  self.container.addEventListener('autostart.xt.toggle', autostart)

  // autostop

  const autostop = () => {
    // toggle
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

  self.container.addEventListener('autostop.xt.toggle', autostop)

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}

/* mount */

const mount = ({ ref }) => {
  const unmountToggle = mountToggle({ ref })

  // unmount

  return () => {
    unmountToggle()
  }
}
