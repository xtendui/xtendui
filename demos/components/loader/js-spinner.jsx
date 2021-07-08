import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import gsap from 'gsap'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--loader-js-spinner-react" ref={ref}>
      <div className="xt-list xt-list-3 items-center justify-center">
        <div className="xt-card rounded-md text-black xt-links-default bg-gray-100">
          <div className="py-6 px-7 text-sm">
            <div className="xt-h5">Small</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
          <div
            className="*** xt-loader absolute inset-0 rounded-inherit overflow-hidden *** bg-white bg-opacity-75 off:hidden out:pointer-events-none opacity-0 transition in:opacity-100"
            data-xt-duration="500">
            <div className="*** xt-spinner absolute inset-0 m-auto *** w-6 h-6 text-primary-500">
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
            </div>
          </div>
        </div>

        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-xs rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
          Lorem ipsum
          <span
            className="*** xt-loader absolute inset-0 rounded-inherit overflow-hidden *** bg-white bg-opacity-75 off:hidden out:pointer-events-none opacity-0 transition in:opacity-100"
            data-xt-duration="500">
            <span className="*** xt-spinner absolute inset-0 m-auto *** w-6 h-6 text-primary-500">
              {' '}
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
              </svg>{' '}
            </span>
          </span>
        </button>
      </div>
    </div>
  )
}

/* mount */

const mount = ({ ref }) => {
  const unmountLoader = mountLoader({ ref })

  // unmount

  return () => {
    unmountLoader()
  }
}

/* mountLoader */

const mountLoader = ({ ref }) => {
  // vars

  const loaders = ref.querySelectorAll('.xt-loader')
  const unmounts = []

  for (const loader of loaders) {
    // init

    const loaderTimeout = () => {
      const spinner = loader.querySelectorAll('.xt-spinner svg:nth-child(2) circle')
      if (loader.dataset.loaderTimeout) {
        clearTimeout(loader.dataset.loaderTimeout)
        delete loader.dataset.loaderTimeout
        Xt.on({ el: loader })
        gsap.set(spinner, {
          strokeDashoffset: 628,
        })
        gsap
          .to(spinner, {
            strokeDashoffset: 0,
            duration: 1,
            ease: 'linear',
            autoRound: false,
          })
          .eventCallback('onComplete', loaderTimeout)
      } else {
        Xt.off({ el: loader })
        loader.dataset.loaderTimeout = setTimeout(loaderTimeout, 2000)
      }
    }

    loader.dataset.loaderTimeout = setTimeout(loaderTimeout, 2000)

    // unmount

    unmounts.push(() => {
      clearTimeout(loader.dataset.loaderTimeout)
    })
  }

  // unmount

  return () => {
    for (const unmount of unmounts) {
      unmount()
    }
  }
}
