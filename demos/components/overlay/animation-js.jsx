import React, { useRef, useCallback } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/overlay'
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
    <div className="demo--overlay-animation-js-react" ref={ref}>
      <button
        type="button"
        className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
        overlay
      </button>

      <div className="xt-overlay">
        <div className="xt-backdrop bg-black pointer-events-none opacity-25"></div>
        <div className="xt-overlay-container max-w-3xl">
          <div className="xt-overlay-inner">
            <div className="xt-card rounded-md shadow-overlay text-black xt-links-default bg-white">
              <button
                type="button"
                className="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl"
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
              <div className="xt-media-container bg-gray-600 rounded-t-md xt-ratio-37.5">
                <div className="xt-media-inner">
                  <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
              </div>
              <div className="text-base py-8 px-9">
                <div className="xt-h4">Lorem ipsum</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.
                </p>
                <p>
                  Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
                  justo.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
                  ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.
                </p>
                <p>
                  Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
                  justo.
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
  const unmountOverlay = mountOverlay({ ref })

  // unmount

  return () => {
    unmountOverlay()
  }
}

/* mountOverlay */

const mountOverlay = ({ ref }) => {
  // vars

  const targetTimeOn = 0.5
  const targetEaseOn = 'quint.out'
  const targetTimeOff = 0.5
  const targetEaseOff = 'quint.out'

  // init

  let self = new Xt.Overlay(ref, {
    duration: 500,
  })

  // on

  const on = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr)) {
      // inner
      const inner = tr.querySelector('.xt-overlay-inner')
      gsap.killTweensOf(inner)
      gsap.set(inner, {
        y: 15,
        opacity: 0,
      })
      gsap.to(inner, {
        y: 0,
        opacity: 1,
        duration: targetTimeOn,
        ease: targetEaseOn,
      })
      // backdrop
      const backdrop = tr.querySelector('.xt-backdrop')
      gsap.killTweensOf(backdrop)
      gsap.set(backdrop, {
        opacity: 0,
      })
      gsap.to(backdrop, {
        opacity: 0.25,
        duration: targetTimeOn,
        ease: targetEaseOn,
      })
    }
  }

  for (const target of self.targets) {
    target.addEventListener('on.xt.overlay', on)
  }

  // off

  const off = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr)) {
      // inner
      const inner = tr.querySelector('.xt-overlay-inner')
      gsap.killTweensOf(inner)
      gsap.to(inner, {
        y: -15,
        opacity: 0,
        duration: targetTimeOff,
        ease: targetEaseOff,
      })
      // backdrop
      const backdrop = tr.querySelector('.xt-backdrop')
      gsap.killTweensOf(backdrop)
      gsap.to(backdrop, {
        opacity: 0,
        duration: targetTimeOn,
        ease: targetEaseOn,
      })
    }
  }

  for (const target of self.targets) {
    target.addEventListener('off.xt.overlay', off)
  }

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}
