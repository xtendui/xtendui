import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/ripple'
import gsap from 'gsap'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--ripple-animation-v1-react" ref={ref}>
      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md bg-gray-100 font-bold leading-tight tracking-tight normal-case text-lg text-center">
        Button
      </div>

      <div className="xt-list xt-list-2 items-center">
        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
          Gray
        </button>

        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
          Primary
        </button>

        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
          Text
        </button>

        <button type="button" className="xt-button py-2.5 px-3.5 text-sm rounded-md xt-link">
          Link
        </button>
      </div>

      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md bg-gray-100 font-bold leading-tight tracking-tight normal-case text-lg text-center">
        Card
      </div>

      <div className="xt-row xt-row-6">
        <div className="w-full md:w-6/12">
          <button
            type="button"
            className="xt-card justify-start text-left rounded-2xl text-gray-900 xt-links-default bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
            <div className="p-7 sm:p-9 text-base">
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
            className="xt-card justify-start text-left rounded-2xl text-white xt-links-inverse bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
            <div className="p-7 sm:p-9 text-base">
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
          <div className="xt-card rounded-2xl text-gray-900 xt-links-default bg-gray-100">
            <div className="p-7 sm:p-9 text-base">
              <div className="xt-h4">Default</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
              <button
                type="button"
                className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
                Button
              </button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-6/12">
          <div className="xt-card rounded-2xl text-white xt-links-inverse bg-primary-500">
            <div className="p-7 sm:p-9 text-base">
              <div className="xt-h4">Primary</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
              <button
                type="button"
                className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* mountRipples */

const mountRipples = ({ ref }) => {
  // mount granularly

  Xt.mount({
    root: ref,
    matches: '.xt-button, .xt-card',
    mount: ({ ref }) => {
      return mountRipple({ ref })
    },
  })

  // unmount

  return () => {}
}

/* mountRipple */

const mountRipple = ({ ref }) => {
  // vars

  const item = ref

  // init

  /***/
  let self = new Xt.Ripple(item, {})
  /***/

  // on

  const on = () => {
    /***/
    const ripple = self.inner.querySelector('.xt-ripple:last-child')
    /***/
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
    /***/
    const ripple = self.inner.querySelector('.xt-ripple:last-child')
    /***/
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

  return () => {
    self.destroy()
    self = null
  }
}

/* mount */

const mount = ({ ref }) => {
  const unmountRipples = mountRipples({ ref })

  // unmount

  return () => {
    unmountRipples()
  }
}
