import React, { useRef, useCallback } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/infinitescroll'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

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
    <div className="demo--infinitescroll-fade-react" ref={ref}>
      <div className="infinitescroll py-10">
        <div className="container">
          <h1>Category Page</h1>

          <form className="text-sm mb-4">
            <label className="cursor-pointer inline-flex items-baseline">
              <input
                type="checkbox"
                className="xt-check xt-checkbox rounded-md border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                defaultChecked
              />
              <span className="ml-4">Activate on scroll</span>
            </label>
          </form>

          <div className="mb-4">
            <div className="xt-list xt-list-2 flex-col items-center">
              <button
                type="button"
                className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700"
                data-xt-infinitescroll-up="-1">
                <span className="content"> Load previous page </span>

                <span className="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden infinitescroll-spinner">
                  <span className="xt-spinner absolute inset-0 m-auto w-6 h-6 text-white">
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
                        className="stroke-current origin-center relative animate-xt-spinner"
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
                  </span>
                </span>
              </button>
            </div>
          </div>

          <div className="xt-row xt-row-6">
            <div className="w-6/12 md:w-4/12">
              <a href="https://github.com/minimit/xtendui" className="listing-item block text-black">
                <div className="xt-media-container bg-gray-600 xt-ratio-75">
                  <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
                <div className="py-4">
                  <div className="xt-h5">Lorem ipsum</div>
                  <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div className="w-6/12 md:w-4/12">
              <a href="https://github.com/minimit/xtendui" className="listing-item block text-black">
                <div className="xt-media-container bg-gray-600 xt-ratio-75">
                  <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                </div>
                <div className="py-4">
                  <div className="xt-h5">Dolor sit amet</div>
                  <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div className="w-6/12 md:w-4/12">
              <a href="https://github.com/minimit/xtendui" className="listing-item block text-black">
                <div className="xt-media-container bg-gray-600 xt-ratio-75">
                  <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
                <div className="py-4">
                  <div className="xt-h5">Lorem ipsum</div>
                  <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div className="w-6/12 md:w-4/12">
              <a href="https://github.com/minimit/xtendui" className="listing-item block text-black">
                <div className="xt-media-container bg-gray-600 xt-ratio-75">
                  <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                </div>
                <div className="py-4">
                  <div className="xt-h5">Dolor sit amet</div>
                  <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div className="w-6/12 md:w-4/12">
              <a href="https://github.com/minimit/xtendui" className="listing-item block text-black">
                <div className="xt-media-container bg-gray-600 xt-ratio-75">
                  <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
                <div className="py-4">
                  <div className="xt-h5">Lorem Ipsum</div>
                  <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div className="w-6/12 md:w-4/12">
              <a href="https://github.com/minimit/xtendui" className="listing-item block text-black">
                <div className="xt-media-container bg-gray-600 xt-ratio-75">
                  <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                </div>
                <div className="py-4">
                  <div className="xt-h5">Dolor sit amet</div>
                  <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div className="w-6/12">
              <a href="https://github.com/minimit/xtendui" className="listing-item block text-black">
                <div className="xt-media-container bg-gray-600 xt-ratio-75 md:xt-ratio-50">
                  <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
                <div className="py-4">
                  <div className="xt-h5">Lorem Ipsum</div>
                  <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div className="w-6/12">
              <a href="https://github.com/minimit/xtendui" className="listing-item block text-black">
                <div className="xt-media-container bg-gray-600 xt-ratio-75 md:xt-ratio-50">
                  <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                </div>
                <div className="py-4">
                  <div className="xt-h5">Dolor sit amet</div>
                  <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="xt-list xt-list-2 flex-col items-center">
            <button
              type="button"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700"
              data-xt-infinitescroll-down="+1">
              <span className="content"> Show more products </span>

              <span className="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden infinitescroll-spinner">
                <span className="xt-spinner absolute inset-0 m-auto w-6 h-6 text-white">
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
                      className="stroke-current origin-center relative animate-xt-spinner"
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
                </span>
              </span>
            </button>

            <div className="h6" data-xt-infinitescroll-pagination>
              Page xt-num of xt-tot
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* mount */

const mount = ({ ref }) => {
  const unmountInfinitescroll = mountInfinitescroll({ ref })
  const unmountSwitcher = mountSwitcher({ ref })
  const unmountFade = mountFade({ ref })

  // unmount

  return () => {
    unmountInfinitescroll()
    unmountSwitcher()
    unmountFade()
  }
}

/* mountInfinitescroll */

const mountInfinitescroll = ({ ref }) => {
  // vars

  const infinitescroll = ref.querySelector('.infinitescroll')

  // init

  let self = new Xt.Infinitescroll(infinitescroll, {
    get: false,
    max: 4,
    elements: {
      itemsContainer: '.xt-row',
      item: ':scope > *',
      scrollUp: '[data-xt-infinitescroll-up]',
      scrollDown: '[data-xt-infinitescroll-down]',
      spaceAdditional: '[data-xt-infinitescroll-up]',
      pagination: '[data-xt-infinitescroll-pagination]',
    },
    // activated by switcher
    //scrollUp = true
    //scrollDown = true
  })

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}

/* mountSwitcher */

const mountSwitcher = ({ ref }) => {
  // vars

  const infinitescroll = ref.querySelector('.infinitescroll')
  const switcher = ref.querySelector('input[type="checkbox"]')

  // change

  const change = () => {
    const self = Xt.get('xt-infinitescroll', infinitescroll)
    if (self) {
      if (switcher.checked) {
        self.options.events.scrollUp = true
        self.options.events.scrollDown = true
      } else {
        self.options.events.scrollUp = false
        self.options.events.scrollDown = false
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

/* mountFade */

const mountFade = ({ ref }) => {
  // vars

  const infinitescroll = ref.querySelector('.infinitescroll')

  const scrollY = 30

  // populate

  const self = Xt.get('xt-infinitescroll', infinitescroll)

  const populate = () => {
    fade({ container: self.object })
  }

  self.object.addEventListener('populate.xt.infinitescroll', populate)

  // fade

  const fade = ({ container }) => {
    // items inside container and not already faded
    const items = container.querySelectorAll('.listing-item:not(.faded)')
    for (const item of items) {
      item.classList.add('faded')
    }
    // fade
    ScrollTrigger.batch(items, {
      once: true,
      start: 'top bottom-=10%',
      end: 'bottom top+=10%',
      onEnter: (batch, scrollTriggers) => {
        const direction = scrollTriggers[0].direction
        const y = direction > 0 ? -scrollY : scrollY
        gsap.killTweensOf(batch)
        gsap.set(batch, {
          y: y,
        })
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'quart.out',
          stagger: 0.15,
        })
      },
    })
  }

  fade({ container: ref })

  // unmount

  return () => {}
}
