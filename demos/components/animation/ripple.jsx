import React, { useRef, useCallback } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/ripple'
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
    <div className="demo--ripple-react" ref={ref}>
      <form className="text-sm mb-4">
        <label className="cursor-pointer inline-flex items-baseline">
          <input
            type="checkbox"
            className="xt-check xt-checkbox rounded-md border text-primary-500 border-gray-400 bg-gray-200 transition-all"
          />
          <span className="ml-4">
            No <code>sizeInitial</code> and no <code>onlyInside</code>
          </span>
        </label>
      </form>

      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full font-bold leading-tight tracking-tight normal-case text-lg rounded-md text-black bg-gray-200 text-center">
        Button
      </div>

      <div className="xt-list xt-list-2 items-center">
        <button
          type="button"
          className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
          Gray
        </button>

        <button
          type="button"
          className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
          Primary
        </button>

        <button
          type="button"
          className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-60 active:text-opacity-100 on:text-opacity-100">
          Text
        </button>

        <button type="button" className="xt-button text-xs py-2.5 px-3.5 rounded-md xt-link">
          Link
        </button>
      </div>

      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full font-bold leading-tight tracking-tight normal-case text-lg rounded-md text-black bg-gray-200 text-center">
        Card
      </div>

      <div className="xt-row xt-row-6">
        <div className="w-full md:w-6/12">
          <button
            type="button"
            className="xt-card rounded-md text-black xt-links-default transform transition bg-gray-200 hover:bg-gray-300 on:bg-gray-400">
            <div className="text-base py-8 px-9">
              <div className="xt-h4">Default</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu
                tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae
                magna eget, vehicula scelerisque elit.
              </p>
            </div>
          </button>
        </div>

        <div className="w-full md:w-6/12">
          <button
            type="button"
            className="xt-card rounded-md text-white xt-links-inverse transform transition bg-primary-500 hover:bg-primary-600 on:bg-primary-600">
            <div className="text-base py-8 px-9">
              <div className="xt-h4">Primary</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu
                tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae
                magna eget, vehicula scelerisque elit.
              </p>
            </div>
          </button>
        </div>

        <div className="w-full md:w-6/12">
          <div className="xt-card rounded-md text-black xt-links-default bg-gray-200">
            <div className="text-base py-8 px-9">
              <div className="xt-h4">Default</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
              <button
                type="button"
                className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
                Gray
              </button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-6/12">
          <div className="xt-card rounded-md text-white xt-links-inverse bg-primary-500">
            <div className="text-base py-8 px-9">
              <div className="xt-h4">Primary</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
              <button
                type="button"
                className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
                Primary
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* mount */

const mount = ({ ref }) => {
  const unmountRipple = mountRipple({ ref })
  const unmountSwitcher = mountSwitcher({ ref })

  // unmount

  return () => {
    unmountRipple()
    unmountSwitcher()
  }
}

/* mountRipple */

const mountRipple = ({ ref }) => {
  // vars

  const items = ref.querySelectorAll('.xt-button, .xt-card')
  const unmounts = []

  for (const item of items) {
    // init

    let self = new Xt.Ripple(item, {
      // activated by switcher
      //sizeInitial = 0,
      //onlyInside = false,
    })

    // on

    const on = () => {
      const ripple = self.container.querySelector('.xt-ripple:last-child')
      // animate
      if (ripple) {
        gsap.set(ripple, {
          height: self.size,
          width: self.size,
          top: self.top,
          left: self.left,
          scale: 1,
          opacity: 0,
        })
        gsap.to(ripple, {
          opacity: 1,
          duration: 0.25,
          ease: 'quad.inOut',
        })
        gsap.to(ripple, {
          scale: self.scaleFinal,
          duration: 0.5,
          ease: 'quad.inOut',
        })
      }
    }

    item.addEventListener('on.xt.ripple', on)

    // off

    const off = () => {
      const ripple = self.container.querySelector('.xt-ripple:last-child')
      // animate
      if (ripple) {
        gsap
          .to(ripple, {
            opacity: 0,
            duration: 0.5,
            ease: 'quad.inOut',
            delay: 0.1,
          })
          .eventCallback('onComplete', () => {
            ripple.remove()
          })
      }
    }

    item.addEventListener('off.xt.ripple', off)

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

/* mountSwitcher */

const mountSwitcher = ({ ref }) => {
  // vars

  const items = ref.querySelectorAll('.xt-button, .xt-card')
  const switcher = ref.querySelector('input[type="checkbox"]')

  // change

  const change = () => {
    for (const item of items) {
      const self = Xt.get('xt-ripple', item)
      if (self) {
        if (switcher.checked) {
          self.options.sizeInitial = 0
          self.options.onlyInside = false
        } else {
          self.options.sizeInitial = 0.3
          self.options.onlyInside = 'a, button, .xt-button'
        }
        self.destroy()
        self.reinit()
      }
    }
  }

  switcher.addEventListener('change', change)

  requestAnimationFrame(() => {
    change()
  })

  // unmount

  return () => {}
}
