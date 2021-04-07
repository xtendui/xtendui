import React, { useRef, useCallback } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/drop'
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
    <div className="demo--drop-animation-js-react" ref={ref}>
      <div className="xt-list xt-list-3 items-center">
        <div className="xt-drop-item">
          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
            list
          </button>

          <div className="xt-drop p-4">
            <div className="xt-card w-64 py-3.5 rounded-md shadow-drop text-black xt-links-default bg-white">
              <nav className="xt-list flex-col">
                <a
                  href="#"
                  className="xt-button text-2xs py-1.5 px-6 w-full text-black font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-75 active:text-opacity-75 transition">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </a>
                <button
                  type="button"
                  className="xt-button text-2xs py-1.5 px-6 w-full text-black font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-75 active:text-opacity-75 transition">
                  Dolor sit
                </button>
                <button
                  type="button"
                  className="xt-button text-2xs py-1.5 px-6 w-full text-black font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-75 active:text-opacity-75 transition">
                  Amet
                </button>
              </nav>
            </div>
          </div>
        </div>

        <div className="xt-drop-item">
          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
            card
          </button>

          <div className="xt-drop p-4">
            <div className="xt-card w-80 rounded-md shadow-drop text-black xt-links-default bg-white">
              <button
                type="button"
                className="xt-button xt-dismiss absolute top-0 right-0 p-5 text-xl"
                aria-label="Close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="xt-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <div className="text-base py-8 px-9">
                <div className="xt-h4">Lorem ipsum</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* mount */

const mount = ({ ref }) => {
  const unmountDrops = mountDrops({ ref })

  // unmount

  return () => {
    unmountDrops()
  }
}

/* mountDrops */

const mountDrops = ({ ref }) => {
  const drops = ref.querySelectorAll('.xt-drop-item')
  const unmounts = []

  for (const drop of drops) {
    // vars

    const targetTimeOn = 0.5
    const targetEaseOn = 'quint.out'
    const targetTimeOff = 0.5
    const targetEaseOff = 'quint.out'

    // init

    let self = new Xt.Drop(drop, {
      duration: 500,
    })

    // on

    const on = e => {
      const tr = e.target
      // check because of event propagation
      if (self.targets.includes(tr)) {
        const inner = tr.querySelector(':scope > *')
        gsap.killTweensOf(inner)
        gsap.set(inner, {
          x: -15,
          opacity: 0,
        })
        gsap.to(inner, {
          x: 0,
          opacity: 1,
          duration: targetTimeOn,
          ease: targetEaseOn,
        })
      }
    }

    for (const target of self.targets) {
      target.addEventListener('on.xt.drop', on)
    }

    // off

    const off = e => {
      const tr = e.target
      // check because of event propagation
      if (self.targets.includes(tr)) {
        const inner = tr.querySelector(':scope > *')
        gsap.killTweensOf(inner)
        gsap.to(inner, {
          x: 15,
          opacity: 0,
          duration: targetTimeOff,
          ease: targetEaseOff,
        })
      }
    }

    for (const target of self.targets) {
      target.addEventListener('off.xt.drop', off)
    }

    // unmount

    unmounts.push(() => {
      self.destroy()
      self = null
    })
  }

  // unmount

  return () => {
    for (const unmount of unmounts) {
      unmount()
    }
  }
}
