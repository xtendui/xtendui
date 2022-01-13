import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import 'xtendui/src/overlay'
import 'xtendui/src/scrollto'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--scrollto-overlay-react" ref={ref}>
      {/* sticky for demo purpose remove this */}
      <div className="xt-sticky">
        <div className="xt-card p-6 sm:p-8 text-sm text-white xt-links-inverse bg-primary-500">
          <div className="xt-list xt-list-3">
            <a
              href="#anchor-0"
              className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
              data-xt-overlay="{ targets: '#overlay--scrollto', classSkip: { elements: true } }">
              #0
            </a>
            <a
              href="#anchor-1"
              className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
              data-xt-overlay="{ targets: '#overlay--scrollto', classSkip: { elements: true } }"
              data-xt-scrollto-hash="true">
              #1
            </a>
            <button
              type="button"
              className="xt-button button--custom py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
              data-xt-overlay="{ targets: '#overlay--scrollto', classSkip: { elements: true } }">
              custom
            </button>
            <a
              href="#anchor-2"
              className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
              data-xt-overlay="{ targets: '#overlay--scrollto', classSkip: { elements: true } }"
              data-xt-scrollto-hash="true">
              #2
            </a>
          </div>
        </div>
      </div>

      {/* switcher for demo purpose remove this */}
      <div className="container">
        <form className="text-sm mt-4">
          <label className="cursor-pointer inline-flex items-baseline">
            <input
              type="checkbox"
              aria-label="Deactivate classes"
              className="xt-check xt-checkbox rounded-md bg-gray-200 border border-transparent transition-all defaultChecked:bg-primary-500"
            />
            <span className="ml-4">Deactivate classes</span>
          </label>
        </form>
      </div>

      <div className="xt-overlay" id="overlay--scrollto">
        <div className="xt-backdrop z-below bg-gray-800 opacity-25"></div>
        <div className="xt-overlay-container py-0">
          <div className="xt-overlay-inner">
            <button
              type="button"
              className="xt-button xt-dismiss fixed z-above top-0 right-0 p-5 text-2xl"
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

            <div className="xt-sticky">
              <div className="xt-card p-6 sm:p-8 text-sm text-white xt-links-inverse bg-primary-500">
                <div className="xt-list xt-list-3">
                  <a
                    href="#anchor-0"
                    className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
                    #0
                  </a>
                  <a
                    href="#anchor-1"
                    className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
                    #1
                  </a>
                  <button
                    type="button"
                    className="xt-button button--custom py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
                    custom
                  </button>
                  <a
                    href="#anchor-2"
                    className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
                    #2
                  </a>
                </div>
              </div>
            </div>

            <div className="xt-card p-6 sm:p-8 text-sm text-gray-900 xt-links-default bg-gray-100" id="anchor-0">
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
                  className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
                  #0
                </a>
                <a
                  href="#anchor-1"
                  className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
                  #1
                </a>
                <button
                  type="button"
                  className="xt-button button--custom py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
                  custom
                </button>
                <a
                  href="#anchor-2"
                  className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
                  #2
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

            <div className="xt-card p-6 sm:p-8 text-sm text-gray-900 xt-links-default bg-gray-100" id="anchor-1">
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
                  className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
                  #0
                </a>
                <a
                  href="#anchor-1"
                  className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
                  #1
                </a>
                <button
                  type="button"
                  className="xt-button button--custom py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
                  custom
                </button>
                <a
                  href="#anchor-2"
                  className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
                  #2
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

            <div className="xt-card p-6 sm:p-8 text-sm text-gray-900 xt-links-default bg-gray-100" id="anchor-custom">
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

            <div className="xt-card p-6 sm:p-8 text-sm text-gray-900 xt-links-default bg-gray-100" id="anchor-2">
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
                  className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
                  #0
                </a>
                <a
                  href="#anchor-1"
                  className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
                  #1
                </a>
                <button
                  type="button"
                  className="xt-button button--custom py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
                  custom
                </button>
                <a
                  href="#anchor-2"
                  className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
                  #2
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* mountSticky */

const mountSticky = ({ ref }) => {
  /* sticky for demo purpose remove this */
  // vars

  const overlay = ref.querySelector('.xt-overlay')
  const sticky = overlay.querySelector('.xt-sticky')

  // sticky

  const scrollTrigger = ScrollTrigger.create({
    trigger: sticky,
    start: 'top top',
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
  })

  overlay.addEventListener('on.xt.overlay', () => {
    // refresh ScrollTrigger DOM
    scrollTrigger.refresh()
  })

  // unmount

  return () => {}
}

/* mountScrollto */

const mountScrollto = () => {
  // init

  /***/
  let self = new Xt.Scrollto(document.documentElement, {
    // deactivated by switcher
    class: false,
    scrollActivation: false,
  })
  /***/

  // scrollto

  const scrollto = () => {
    // scroll
    gsap.killTweensOf(self.scroller)
    gsap.to(self.scroller, {
      scrollTo: self.position,
      duration: self.duration,
      ease: 'quint.out',
    })
  }

  self.container.addEventListener('scrollto.xt.scrollto', scrollto)

  // fix stop scroll animation on user interaction

  const stopScrolling = () => {
    gsap.killTweensOf(self.scroller)
  }

  addEventListener('touchstart', stopScrolling)
  addEventListener('wheel', stopScrolling)

  // custom

  const buttons = self.container.querySelectorAll('.button--custom')
  const custom = self.container.querySelector('#anchor-custom')

  const click = () => {
    custom.dispatchEvent(new CustomEvent('scrollto.trigger.xt.scrollto'))
  }

  for (const button of buttons) {
    button.addEventListener('click', click)
  }

  // unmount

  return () => {
    removeEventListener('touchstart', stopScrolling)
    removeEventListener('wheel', stopScrolling)
    self.container.removeEventListener('scrollto.xt.scrollto', scrollto)
    self.destroy()
    self = null
  }
}

/* mountSwitcher */

const mountSwitcher = ({ ref }) => {
  /* switcher for demo purpose remove this */

  // vars

  const scrollto = document.documentElement
  const switcher = ref.querySelector('input[type="checkbox"]')

  // change

  const change = () => {
    const self = Xt.get({ name: 'xt-scrollto', el: scrollto })
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

/* mount */

const mount = ({ ref }) => {
  const unmountSticky = mountSticky({ ref })
  const unmountScrollto = mountScrollto({ ref })
  const unmountSwitcher = mountSwitcher({ ref })

  // unmount

  return () => {
    unmountSticky()
    unmountScrollto()
    unmountSwitcher()
  }
}
