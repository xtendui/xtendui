import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/toggle'
import gsap from 'gsap'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--toggle-animation-js-multiple-react" ref={ref}>
      <div className="xt-list xt-list-3 items-center">
        <button
          type="button"
          className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 active:bg-gray-500 on:bg-gray-500">
          Toggle 0
        </button>

        <button
          type="button"
          className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 active:bg-gray-500 on:bg-gray-500">
          Toggle 1
        </button>

        <div className="xt-card *** xt-toggle *** rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">
          Target 0
        </div>

        <div className="xt-card *** xt-toggle *** rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">
          Target 1
        </div>
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

  const targetTimeOn = 0.5
  const targetEaseOn = 'quint.out'
  const targetTimeOff = 0.5
  const targetEaseOff = 'quint.out'

  // init

  /***/
  let self = new Xt.Toggle(ref.querySelector(':scope > .xt-list'), {
    elements: ':scope > .xt-button',
    targets: ':scope > .xt-toggle',
    duration: 500,
  })
  /***/

  // on

  const on = e => {
    const tr = e.target
    gsap.killTweensOf(tr)
    gsap.set(tr, {
      x: -self.direction * 15,
      opacity: 0,
    })
    gsap.to(tr, {
      x: 0,
      opacity: 1,
      duration: targetTimeOn,
      ease: targetEaseOn,
    })
  }

  for (const tr of self.targets) {
    tr.addEventListener('on.xt.toggle', on)
  }

  // off

  const off = e => {
    const tr = e.target
    gsap.killTweensOf(tr)
    gsap.to(tr, {
      x: self.direction * 15,
      opacity: 0,
      duration: targetTimeOff,
      ease: targetEaseOff,
    })
  }

  for (const tr of self.targets) {
    tr.addEventListener('off.xt.toggle', off)
  }

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}
