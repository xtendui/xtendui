import React, { useRef, useCallback } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/overlay'
import 'xtendui/src/scrollto'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function demo() {
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
    <div className="demo--scrollto-overlay-react" ref={ref}>
      <div className="xt-sticky">
        <div className="xt-card text-sm py-6 px-7 text-white xt-links-inverse bg-primary-500">
          <div className="xt-list xt-list-3">
            <a
              href="#anchor-0"
              className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700"
              data-xt-overlay="{ targets: '#overlay--scrollto', classSkip: { elements: true } }">
              #0
            </a>
            <a
              href="#anchor-1"
              className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700"
              data-xt-overlay="{ targets: '#overlay--scrollto', classSkip: { elements: true } }">
              #1
            </a>
            <button
              type="button"
              className="xt-button button--custom text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700"
              data-xt-overlay="{ targets: '#overlay--scrollto', classSkip: { elements: true } }">
              custom
            </button>
            <a
              href="#anchor-2"
              className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700"
              data-xt-overlay="{ targets: '#overlay--scrollto', classSkip: { elements: true } }"
              data-xt-scrollto-hash="true">
              #2
            </a>
            <a
              href="#anchor-2"
              className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700"
              data-xt-scrollto-hash="true">
              #2 only anchor
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <form className="text-sm mt-4">
          <label className="cursor-pointer inline-flex items-baseline">
            <input
              type="checkbox"
              className="xt-check xt-checkbox rounded-md border text-primary-500 border-gray-400 bg-gray-200 transition-all"
            />
            <span className="ml-4">Deactivate classes</span>
          </label>
        </form>
      </div>

      <div className="xt-overlay" id="overlay--scrollto">
        <div className="xt-backdrop bg-black opacity-25"></div>
        <div className="xt-overlay-container py-0">
          <div className="xt-overlay-inner">
            <button
              type="button"
              className="xt-button xt-dismiss fixed z-last top-0 right-0 p-5 text-2xl"
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

            <div className="xt-sticky">
              <div className="xt-card text-sm py-6 px-7 text-white xt-links-inverse bg-primary-500">
                <div className="xt-list xt-list-3">
                  <a
                    href="#anchor-0"
                    className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
                    #0
                  </a>
                  <a
                    href="#anchor-1"
                    className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
                    #1
                  </a>
                  <button
                    type="button"
                    className="xt-button button--custom text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
                    custom
                  </button>
                  <a
                    href="#anchor-2"
                    className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
                    #2
                  </a>
                </div>
              </div>
            </div>

            <div className="xt-card text-sm py-6 px-7 text-black xt-links-default bg-gray-200" id="anchor-0">
              <div className="xt-h4">Lorem ipsum dolor sit amet</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc
                ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium
                metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo
                tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros
                in est.
              </p>
              <div className="xt-list xt-list-3">
                <a
                  href="#anchor-0"
                  className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
                  {' '}
                  #0{' '}
                </a>
                <a
                  href="#anchor-1"
                  className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
                  {' '}
                  #1{' '}
                </a>
                <button
                  type="button"
                  className="xt-button button--custom text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
                  custom
                </button>
                <a
                  href="#anchor-2"
                  className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
                  {' '}
                  #2{' '}
                </a>
              </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="xt-card text-sm py-6 px-7 text-black xt-links-default bg-gray-200" id="anchor-1">
              <div className="xt-h4">Lorem ipsum dolor sit amet</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc
                ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium
                metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo
                tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros
                in est.
              </p>
              <div className="xt-list xt-list-3">
                <a
                  href="#anchor-0"
                  className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
                  {' '}
                  #0{' '}
                </a>
                <a
                  href="#anchor-1"
                  className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
                  {' '}
                  #1{' '}
                </a>
                <button
                  type="button"
                  className="xt-button button--custom text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
                  custom
                </button>
                <a
                  href="#anchor-2"
                  className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
                  {' '}
                  #2{' '}
                </a>
              </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="xt-card text-sm py-6 px-7 text-black xt-links-default bg-gray-200" id="custom">
              <div className="xt-h4">Lorem ipsum dolor sit amet</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc
                ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium
                metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo
                tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros
                in est.
              </p>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="xt-card text-sm py-6 px-7 text-black xt-links-default bg-gray-200" id="anchor-2">
              <div className="xt-h4">Lorem ipsum dolor sit amet</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc
                ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium
                metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo
                tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros
                in est.
              </p>
              <div className="xt-list xt-list-3">
                <a
                  href="#anchor-0"
                  className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
                  {' '}
                  #0{' '}
                </a>
                <a
                  href="#anchor-1"
                  className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
                  {' '}
                  #1{' '}
                </a>
                <button
                  type="button"
                  className="xt-button button--custom text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
                  custom
                </button>
                <a
                  href="#anchor-2"
                  className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
                  {' '}
                  #2{' '}
                </a>
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
  const unmountSticky = mountSticky({ ref })
  const unmountScrollto = mountScrollto()
  const unmountSwitcher = mountSwitcher({ ref })

  // unmount

  return () => {
    unmountSticky()
    unmountScrollto()
    unmountSwitcher()
  }
}

/* mountSticky */

const mountSticky = ({ ref }) => {
  // vars

  const overlay = ref.querySelector('.xt-overlay')

  // sticky

  const scrollTrigger = ScrollTrigger.create({
    trigger: overlay.querySelector('.xt-sticky'),
    start: 'top top',
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
  })

  overlay.addEventListener('on.xt.overlay', () => {
    // refresh ScrollTrigger DOM
    Xt.ready(() => {
      scrollTrigger.refresh()
    })
  })

  // unmount

  return () => {}
}

/* mountScrollto */

const mountScrollto = () => {
  // Scrollto

  let self = new Xt.Scrollto(document.documentElement, {
    space: ({ self }) => {
      let space = 0
      for (const el of self.scroller.querySelectorAll('.xt-sticky[style*="position: fixed"]')) {
        space += el.clientHeight
      }
      return space
    },
    duration: ({ self }) => {
      const overlay = self.target.closest('.xt-overlay')
      if (self.initial || self.hashchange || (overlay && !overlay.classList.contains('in'))) return 0
      const dist = Math.abs(self.scroller.scrollTop - self.position)
      return Math.max(Math.min(dist / 500, 1), 0.5)
    },
    // deactivated by switcher
    class: false,
    scrollActivation: false,
  })

  // scrollto

  const scrollto = () => {
    // scroll
    gsap.killTweensOf(self.scroller)
    gsap.to(self.scroller, {
      scrollTo: self.position,
      duration: self.duration,
      ease: 'quart.inOut',
    })
  }

  self.object.addEventListener('scrollto.xt.scrollto', scrollto)

  // custom

  const buttons = self.object.querySelectorAll('.button--custom')
  const custom = self.object.querySelector('#custom')

  const click = () => {
    custom.dispatchEvent(new CustomEvent('scrollto.trigger.xt.scrollto'))
  }

  for (const button of buttons) {
    button.addEventListener('click', click)
  }

  // unmount

  return () => {
    self.object.removeEventListener('scrollto.xt.scrollto', scrollto)
    self.destroy()
    self = null
  }
}

/* mountSwitcher */

const mountSwitcher = ({ ref }) => {
  // vars

  const scrollto = document.documentElement
  const switcher = ref.querySelector('input[type="checkbox"]')

  // change

  const change = () => {
    const self = Xt.get('xt-scrollto', scrollto)
    if (self) {
      if (switcher.checked) {
        self.options.class = false
        self.options.scrollActivation = false
      } else {
        self.options.class = 'on'
        self.options.scrollActivation = true
      }
      self.destroy()
      self.reinit()
    }
  }

  switcher.addEventListener('change', change)

  requestAnimationFrame(() => {
    change()
  })

  // unmount

  return () => {}
}
