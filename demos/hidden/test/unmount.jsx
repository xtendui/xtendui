import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/overlay'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--unmount-react" ref={ref}>
      <button
        type="button"
        className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600"
        data-xt-overlay-element>
        overlay
      </button>

      <div className="xt-overlay group" data-xt-overlay-target>
        <div className="xt-backdrop z-below bg-black *** transition opacity-0 group-in:opacity-25 ***"></div>
        <div className="xt-overlay-container max-w-3xl">
          <div className="xt-overlay-inner">
            <div className="xt-card rounded-md shadow-overlay text-black xt-links-default bg-white">
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
              <div className="py-8 px-9 text-base">
                <div className="xt-h4">Overlay 0</div>
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
  const unmountTest = mountTest({ ref })

  // unmount

  return () => {
    unmountTest()
  }
}

/* mountTest */

const mountTest = ({ ref }) => {
  // vars

  const overlay = ref

  // init

  let self = new Xt.Overlay(overlay, {})

  // off

  const off = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr)) {
      // eslint-disable-next-line no-console
      console.log('TEST OFF on unmount this should not be called.')
    }
  }

  for (const tr of self.targets) {
    tr.addEventListener('off.xt.overlay', off)
  }

  // resize

  const resize = () => {
    // eslint-disable-next-line no-console
    console.log('TEST UNMOUNT this should not be called multiple times on changing page and resize.')
  }

  addEventListener('resize', resize)

  // unmount

  return () => {
    // eslint-disable-next-line no-console
    console.log('TEST UNMOUNT this should be called on change page.')
    removeEventListener('resize', resize)
    self.destroy()
    self = null
  }
}
