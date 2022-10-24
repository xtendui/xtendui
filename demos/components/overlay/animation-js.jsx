import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/overlay'
import gsap from 'gsap'

export default function Demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--overlay-animation-js-react" ref={ref}>
      <div className="xt-list xt-list-3 items-center">
        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
          data-xt-overlay-element
          data-xt-group="group0">
          overlay 0
        </button>

        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
          data-xt-overlay-element
          data-xt-group="group1">
          overlay 1
        </button>

        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
          data-xt-overlay-element
          data-xt-group="group2">
          overlay 2
        </button>

        <div aria-label="Modal" className="xt-overlay *** group ***" data-xt-overlay-target data-xt-group="group0">
          <div className="xt-backdrop z-below bg-gray-900 *** transition opacity-0 group-in:opacity-25 ***"></div>
          <div className="xt-overlay-container max-w-3xl">
            <div className="xt-overlay-inner" data-xt-overlay-inner>
              <div className="xt-card rounded-2xl shadow-xl text-gray-900 xt-links-default bg-white">
                <button
                  type="button"
                  className="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl"
                  aria-label="Close">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="xt-icon "
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
                <div className="p-7 sm:p-9 text-base">
                  <div className="xt-h4">Overlay 0</div>
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
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
                  <div className="xt-list xt-list-3 items-center">
                    <button
                      type="button"
                      className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
                      data-xt-overlay-element
                      data-xt-group="group0">
                      overlay 0
                    </button>

                    <button
                      type="button"
                      className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
                      data-xt-overlay-element
                      data-xt-group="group1">
                      overlay 1
                    </button>

                    <button
                      type="button"
                      className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
                      data-xt-overlay-element
                      data-xt-group="group2">
                      overlay 2
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div aria-label="Modal" className="xt-overlay *** group ***" data-xt-overlay-target data-xt-group="group1">
          <div className="xt-backdrop z-below bg-gray-900 *** transition opacity-0 group-in:opacity-25 ***"></div>
          <div className="xt-overlay-container max-w-3xl">
            <div className="xt-overlay-inner" data-xt-overlay-inner>
              <div className="xt-card rounded-2xl shadow-xl text-gray-900 xt-links-default bg-white">
                <button
                  type="button"
                  className="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl"
                  aria-label="Close">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="xt-icon "
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
                <div className="p-7 sm:p-9 text-base">
                  <div className="xt-h4">Overlay 1</div>
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
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
                  <div className="xt-list xt-list-3 items-center">
                    <button
                      type="button"
                      className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
                      data-xt-overlay-element
                      data-xt-group="group0">
                      overlay 0
                    </button>

                    <button
                      type="button"
                      className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
                      data-xt-overlay-element
                      data-xt-group="group1">
                      overlay 1
                    </button>

                    <button
                      type="button"
                      className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
                      data-xt-overlay-element
                      data-xt-group="group2">
                      overlay 2
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div aria-label="Modal" className="xt-overlay *** group ***" data-xt-overlay-target data-xt-group="group2">
          <div className="xt-backdrop z-below bg-gray-900 *** transition opacity-0 group-in:opacity-25 ***"></div>
          <div className="xt-overlay-container max-w-3xl">
            <div className="xt-overlay-inner" data-xt-overlay-inner>
              <div className="xt-card rounded-2xl shadow-xl text-gray-900 xt-links-default bg-white">
                <button
                  type="button"
                  className="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl"
                  aria-label="Close">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="xt-icon "
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
                <div className="p-7 sm:p-9 text-base">
                  <div className="xt-h4">Overlay 2</div>
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
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
                  <div className="xt-list xt-list-3 items-center">
                    <button
                      type="button"
                      className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
                      data-xt-overlay-element
                      data-xt-group="group0">
                      overlay 0
                    </button>

                    <button
                      type="button"
                      className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
                      data-xt-overlay-element
                      data-xt-group="group1">
                      overlay 1
                    </button>

                    <button
                      type="button"
                      className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
                      data-xt-overlay-element
                      data-xt-group="group2">
                      overlay 2
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* mountOverlay */

const mountOverlay = ({ ref }) => {
  // vars

  const overlay = ref

  const targetTimeOn = 0.5
  const targetEaseOn = 'quint.out'
  const targetYOn = 16
  const targetTimeOff = 0.5
  const targetEaseOff = 'quint.out'
  const targetYOff = 16

  // init

  /***/
  let self = new Xt.Overlay(overlay, {
    duration: 500,
  })
  /***/

  // on

  /***/
  const on = e => {
    const tr = e.target
    // inner
    const inner = tr.querySelector('[data-xt-overlay-inner]')
    gsap.killTweensOf(inner)
    gsap.set(inner, {
      y: -self.direction * targetYOn,
      opacity: 0,
    })
    gsap.to(inner, {
      y: 0,
      opacity: 1,
      duration: targetTimeOn,
      ease: targetEaseOn,
    })
  }

  for (const tr of self.targets) {
    tr.addEventListener('on.xt.overlay', on)
  }
  /***/

  // off

  /***/
  const off = e => {
    const tr = e.target
    // inner
    const inner = tr.querySelector('[data-xt-overlay-inner]')
    gsap.killTweensOf(inner)
    gsap.to(inner, {
      y: self.direction * targetYOff,
      opacity: 0,
      duration: targetTimeOff,
      ease: targetEaseOff,
    })
  }

  for (const tr of self.targets) {
    tr.addEventListener('off.xt.overlay', off)
  }
  /***/

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}

/* mount */

const mount = ({ ref }) => {
  const unmountOverlay = mountOverlay({ ref })

  // unmount

  return () => {
    unmountOverlay()
  }
}
