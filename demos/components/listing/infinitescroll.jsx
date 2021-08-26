import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/infinitescroll'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--infinitescroll-react" ref={ref}>
      <div className="*** infinitescroll *** py-10">
        <div className="container">
          <h1>Category Page</h1>

          {/* switcher for demo purpose remove this */}
          <form className="text-sm mb-4">
            <label className="cursor-pointer inline-flex items-baseline">
              <input
                type="checkbox"
                className="xt-check xt-checkbox rounded-md text-primary-500 bg-gray-200 border border-transparent transition-all"
                defaultChecked
              />
              <span className="ml-4">Activate on scroll</span>
            </label>
          </form>

          <div className="mb-4">
            <div className="xt-list xt-list-2 flex-col items-center">
              <button
                type="button"
                className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
                data-xt-infinitescroll-up="-1">
                <span className="content"> Load previous page </span>

                <span className="xt-loader absolute inset-0 rounded-inherit overflow-hidden *** infinitescroll-spinner ***">
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
                        className="stroke-current origin-center relativext-icon animate-xt-spinner"
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

          <div className="xt-row xt-row-4" data-xt-infinitescroll-items-container>
            <div className="w-6/12 md:w-4/12 lg:w-3/12">
              <a href="https://github.com/xtendui/xtendui" className="listing-item block">
                <div className="xt-media-container bg-gray-300 pb-[75%]">
                  <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
                <div className="py-4">
                  <div className="xt-h6">Lorem ipsum</div>
                  <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div className="w-6/12 md:w-4/12 lg:w-3/12">
              <a href="https://github.com/xtendui/xtendui" className="listing-item block">
                <div className="xt-media-container bg-gray-300 pb-[75%]">
                  <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                </div>
                <div className="py-4">
                  <div className="xt-h6">Dolor sit amet</div>
                  <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div className="w-6/12 md:w-4/12 lg:w-3/12">
              <a href="https://github.com/xtendui/xtendui" className="listing-item block">
                <div className="xt-media-container bg-gray-300 pb-[75%]">
                  <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
                <div className="py-4">
                  <div className="xt-h6">Lorem ipsum</div>
                  <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div className="w-6/12 md:w-4/12 lg:w-3/12">
              <a href="https://github.com/xtendui/xtendui" className="listing-item block">
                <div className="xt-media-container bg-gray-300 pb-[75%]">
                  <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                </div>
                <div className="py-4">
                  <div className="xt-h6">Dolor sit amet</div>
                  <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div className="w-6/12 md:w-4/12 lg:w-3/12">
              <a href="https://github.com/xtendui/xtendui" className="listing-item block">
                <div className="xt-media-container bg-gray-300 pb-[75%]">
                  <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
                <div className="py-4">
                  <div className="xt-h6">Lorem Ipsum</div>
                  <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div className="w-6/12 md:w-4/12 lg:w-3/12">
              <a href="https://github.com/xtendui/xtendui" className="listing-item block">
                <div className="xt-media-container bg-gray-300 pb-[75%]">
                  <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                </div>
                <div className="py-4">
                  <div className="xt-h6">Dolor sit amet</div>
                  <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div className="w-6/12 md:w-4/12 lg:w-3/12">
              <a href="https://github.com/xtendui/xtendui" className="listing-item block">
                <div className="xt-media-container bg-gray-300 pb-[75%]">
                  <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
                <div className="py-4">
                  <div className="xt-h6">Lorem Ipsum</div>
                  <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div className="w-6/12 md:w-4/12 lg:w-3/12">
              <a href="https://github.com/xtendui/xtendui" className="listing-item block">
                <div className="xt-media-container bg-gray-300 pb-[75%]">
                  <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                </div>
                <div className="py-4">
                  <div className="xt-h6">Dolor sit amet</div>
                  <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div className="w-6/12 md:w-4/12 lg:w-3/12">
              <a href="https://github.com/xtendui/xtendui" className="listing-item block">
                <div className="xt-media-container bg-gray-300 pb-[75%]">
                  <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
                <div className="py-4">
                  <div className="xt-h6">Lorem Ipsum</div>
                  <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div className="w-6/12 md:w-4/12 lg:w-3/12">
              <a href="https://github.com/xtendui/xtendui" className="listing-item block">
                <div className="xt-media-container bg-gray-300 pb-[75%]">
                  <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                </div>
                <div className="py-4">
                  <div className="xt-h6">Dolor sit amet</div>
                  <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div className="w-6/12 md:w-4/12 lg:w-3/12">
              <a href="https://github.com/xtendui/xtendui" className="listing-item block">
                <div className="xt-media-container bg-gray-300 pb-[75%]">
                  <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
                <div className="py-4">
                  <div className="xt-h6">Lorem Ipsum</div>
                  <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                </div>
              </a>
            </div>

            <div className="w-6/12 md:w-4/12 lg:w-3/12">
              <a href="https://github.com/xtendui/xtendui" className="listing-item block">
                <div className="xt-media-container bg-gray-300 pb-[75%]">
                  <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                </div>
                <div className="py-4">
                  <div className="xt-h6">Dolor sit amet</div>
                  <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="xt-list xt-list-2 flex-col items-center">
            <button
              type="button"
              className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
              data-xt-infinitescroll-down="+1">
              <span className="content"> Show more products </span>

              <span className="xt-loader absolute inset-0 rounded-inherit overflow-hidden *** infinitescroll-spinner ***">
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
                      className="stroke-current origin-center relativext-icon animate-xt-spinner"
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

  // unmount

  return () => {
    unmountInfinitescroll()
    unmountSwitcher()
  }
}

/* mountInfinitescroll */

const mountInfinitescroll = ({ ref }) => {
  // vars

  const infinitescroll = ref.querySelector('.infinitescroll')

  // init

  /***/
  let self = new Xt.Infinitescroll(infinitescroll, {
    get: false,
    max: 4,
    elements: {
      itemsContainer: '[data-xt-infinitescroll-items-container]',
      item: ':scope > *',
      scrollUp: '[data-xt-infinitescroll-up]',
      scrollDown: '[data-xt-infinitescroll-down]',
      spaceAdditional: '[data-xt-infinitescroll-up]',
      pagination: '[data-xt-infinitescroll-pagination]',
    },
    // activated by switcher
    //scrollUp = true,
    //scrollDown = true,
  })
  /***/

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}

/* mountSwitcher */

const mountSwitcher = ({ ref }) => {
  /* switcher for demo purpose remove this */

  // vars

  const infinitescroll = ref.querySelector('.infinitescroll')
  const switcher = ref.querySelector('input[type="checkbox"]')

  // change

  const change = () => {
    const self = Xt.get({ name: 'xt-infinitescroll', el: infinitescroll })
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
