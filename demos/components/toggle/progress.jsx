import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/toggle'
import 'xtendui/src/mousefollow'
import gsap from 'gsap'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--toggle-progress-react" ref={ref}>
      <div className="xt-list xt-list-3 items-center" data-xt-mousefollow>
        <button
          type="button"
          className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 active:bg-gray-500 on:bg-gray-500">
          Toggle 0
          <span className="xt-loader absolute inset-0 rounded-inherit overflow-hidden">
            <span className="xt-filler absolute inset-0 m-auto text-primary-500">
              <span className="block absolute bg-current opacity-25 w-full h-full"></span>
              <span className="block absolute bg-current w-full"></span>
            </span>
          </span>
        </button>

        <button
          type="button"
          className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 active:bg-gray-500 on:bg-gray-500">
          Toggle 1
          <span className="xt-loader absolute inset-0 rounded-inherit overflow-hidden">
            <span className="xt-filler absolute inset-0 m-auto text-primary-500">
              <span className="block absolute bg-current opacity-25 w-full h-full"></span>
              <span className="block absolute bg-current w-full"></span>
            </span>
          </span>
        </button>

        <button
          type="button"
          className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 active:bg-gray-500 on:bg-gray-500">
          Toggle 2
          <span className="xt-loader absolute inset-0 rounded-inherit overflow-hidden">
            <span className="xt-filler absolute inset-0 m-auto text-primary-500">
              <span className="block absolute bg-current opacity-25 w-full h-full"></span>
              <span className="block absolute bg-current w-full"></span>
            </span>
          </span>
        </button>

        <button
          type="button"
          className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 active:bg-gray-500 on:bg-gray-500">
          Toggle 3
          <span className="xt-loader absolute inset-0 rounded-inherit overflow-hidden">
            <span className="xt-filler absolute inset-0 m-auto text-primary-500">
              <span className="block absolute bg-current opacity-25 w-full h-full"></span>
              <span className="block absolute bg-current w-full"></span>
            </span>
          </span>
        </button>

        <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">
          Target 0
          <span className="xt-loader absolute inset-0 rounded-inherit overflow-hidden">
            <span className="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
              <span className="block absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
              <span className="block absolute bg-current h-full bottom-0 left-0"></span>
            </span>
          </span>
        </div>

        <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">
          Target 1
          <span className="xt-loader absolute inset-0 rounded-inherit overflow-hidden">
            <span className="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
              <span className="block absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
              <span className="block absolute bg-current h-full bottom-0 left-0"></span>
            </span>
          </span>
        </div>

        <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">
          Target 2
          <span className="xt-loader absolute inset-0 rounded-inherit overflow-hidden">
            <span className="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
              <span className="block absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
              <span className="block absolute bg-current h-full bottom-0 left-0"></span>
            </span>
          </span>
        </div>

        <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">
          Target 3
          <span className="xt-loader absolute inset-0 rounded-inherit overflow-hidden">
            <span className="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
              <span className="block absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
              <span className="block absolute bg-current h-full bottom-0 left-0"></span>
            </span>
          </span>
        </div>

        <span className="*** xt-mousefollow fixed *** xt-loader group hover-none:hidden">
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
      </div>
    </div>
  )
}

/* mount */

const mount = ({ ref }) => {
  const unmountToggle = mountToggle({ ref })

  // unmount

  return () => {
    unmountToggle()
  }
}

/* mountToggle */

const mountToggle = ({ ref }) => {
  // vars

  const toggle = ref.querySelector(':scope > .xt-list')
  const spinnerTime = 0.25
  const spinnerEase = 'linear'
  const fillerTime = 0.25
  const fillerEase = 'linear'

  // init

  /***/
  let self = new Xt.Toggle(toggle, {
    elements: ':scope > .xt-button',
    targets: ':scope > .xt-toggle',
    auto: {
      time: 4000,
      initial: false,
    },
  })
  /***/

  // autostart

  const autostart = () => {
    // toggle
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

  self.object.addEventListener('autostart.xt.toggle', autostart)

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

  self.object.addEventListener('autostop.xt.toggle', autostop)

  // autopause

  const autopause = () => {
    // toggle
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

  self.object.addEventListener('autopause.xt.toggle', autopause)

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}
