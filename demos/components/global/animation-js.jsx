import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import gsap from 'gsap'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--javascript-animation-js-react" ref={ref}>
      <button
        type="button"
        className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600 overflow-hidden">
        Lorem ipsum
        <span
          className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 *** off:hidden out:pointer-events-none ***"
          data-xt-duration="1000"
          data-node-target>
          Active
        </span>
      </button>
    </div>
  )
}

/* mount */

const mount = ({ ref }) => {
  const unmountActivation = mountActivation({ ref })

  // unmount

  return () => {
    unmountActivation()
  }
}

/* mountActivation */

const mountActivation = ({ ref }) => {
  // vars

  const tr = ref.querySelector('[data-node-target]')
  const targetTimeOn = 0.5
  const targetEaseOn = 'quint.out'
  const targetXOn = 16
  const targetTimeOff = 0.5
  const targetEaseOff = 'quint.out'
  const targetXOff = 16

  // init

  const timeout = () => {
    if (!tr.classList.contains('on')) {
      Xt.on({ el: tr })
      // animation
      gsap.killTweensOf(tr)
      gsap.set(tr, {
        x: -targetXOn,
        opacity: 0,
      })
      gsap.to(tr, {
        x: 0,
        opacity: 1,
        duration: targetTimeOn,
        ease: targetEaseOn,
      })
    } else {
      Xt.off({ el: tr })
      // animation
      gsap.killTweensOf(tr)
      gsap.to(tr, {
        x: targetXOff,
        opacity: 0,
        duration: targetTimeOff,
        ease: targetEaseOff,
      })
    }
  }

  tr.dataset.interval = setInterval(timeout, 2000)

  // unmount

  return () => {
    clearTimeout(tr.dataset.interval)
  }
}
