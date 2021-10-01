import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import 'xtendui/src/slider'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--products-listing-v1-react" ref={ref}>
      <div className="py-10">
        <div className="xt-slider pb-10" data-xt-slider="{ align: 'left', loop: true }">
          <div className="container">
            <div className="xt-h3 mb-8">
              <div className="xt-list xt-list-2 items-center">
                <div className="mr-auto">Latest Products</div>

                <button
                  type="button"
                  className="xt-button text-xs py-2 px-2 w-8 h-8 rounded-full font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
                  data-xt-nav="-1"
                  aria-label="Previous slide">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="xt-icon w-auto h-4"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </button>

                <button
                  type="button"
                  className="xt-button text-xs py-2 px-2 w-8 h-8 rounded-full font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
                  data-xt-nav="1"
                  aria-label="Next slide">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="xt-icon w-auto h-4"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>

            <div
              className="xt-slides transition ease-out-expo duration-300 on:ease-out-quint on:duration-1000 xt-row xt-row-4"
              data-xt-slider-dragger>
              <div className="xt-slide w-6/12 md:w-4/12 lg:w-3/12 group" data-xt-slider-target>
                <div className="*** transition opacity-0 scale-90 group-in:opacity-100 group-in:scale-100 ***">
                  <a href="#" className="*** listing-item *** block">
                    <div className="*** xt-media-container *** bg-gray-500 overflow-hidden pb-[75%]">
                      <img
                        className="*** xt-media *** object-cover object-center"
                        src="/img.svg"
                        loading="lazy"
                        alt=""
                      />
                      <div className="absolute top-0 left-0 py-2 px-3 bg-black bg-opacity-50 text-white xt-links-inverse">
                        <div className="xt-list xt-list-3 items-center flex-nowrap">
                          <div className="font-medium text-sm">-35%</div>
                          <div className="max-w-[6rem] text-3xs leading-tight uppercase opacity-50">
                            For Exhibition Renewal
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="*** listing-item *** -content py-4">
                      <div className="xt-h6">Lorem ipsum</div>
                      <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="xt-slide w-6/12 md:w-4/12 lg:w-3/12 group" data-xt-slider-target>
                <div className="*** transition opacity-0 scale-90 group-in:opacity-100 group-in:scale-100 ***">
                  <a href="#" className="*** listing-item *** block">
                    <div className="*** xt-media-container *** bg-gray-500 overflow-hidden pb-[75%]">
                      <img
                        className="*** xt-media *** object-cover object-center"
                        src="/img-alt.svg"
                        loading="lazy"
                        alt=""
                      />
                      <div className="absolute top-0 left-0 py-2 px-3 bg-black bg-opacity-50 text-white xt-links-inverse">
                        <div className="xt-list xt-list-3 items-center flex-nowrap">
                          <div className="font-medium text-sm">-40%</div>
                          <div className="max-w-[6rem] text-3xs leading-tight uppercase opacity-50">Black Friday</div>
                        </div>
                      </div>
                    </div>
                    <div className="*** listing-item *** -content py-4">
                      <div className="xt-h6">Dolor sit amet</div>
                      <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="xt-slide w-6/12 md:w-4/12 lg:w-3/12 group" data-xt-slider-target>
                <div className="*** transition opacity-0 scale-90 group-in:opacity-100 group-in:scale-100 ***">
                  <a href="#" className="*** listing-item *** block">
                    <div className="*** xt-media-container *** bg-gray-500 overflow-hidden pb-[75%]">
                      <img
                        className="*** xt-media *** object-cover object-center"
                        src="/img.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="*** listing-item *** -content py-4">
                      <div className="xt-h6">Lorem ipsum</div>
                      <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="xt-slide w-6/12 md:w-4/12 lg:w-3/12 group" data-xt-slider-target>
                <div className="*** transition opacity-0 scale-90 group-in:opacity-100 group-in:scale-100 ***">
                  <a href="#" className="*** listing-item *** block">
                    <div className="*** xt-media-container *** bg-gray-500 overflow-hidden pb-[75%]">
                      <img
                        className="*** xt-media *** object-cover object-center"
                        src="/img-alt.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="*** listing-item *** -content py-4">
                      <div className="xt-h6">Dolor sit amet</div>
                      <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="xt-slide w-6/12 md:w-4/12 lg:w-3/12 group" data-xt-slider-target>
                <div className="*** transition opacity-0 scale-90 group-in:opacity-100 group-in:scale-100 ***">
                  <a href="#" className="*** listing-item *** block">
                    <div className="*** xt-media-container *** bg-gray-500 overflow-hidden pb-[75%]">
                      <img
                        className="*** xt-media *** object-cover object-center"
                        src="/img.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="*** listing-item *** -content py-4">
                      <div className="xt-h6">Lorem ipsum</div>
                      <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="xt-slide w-6/12 md:w-4/12 lg:w-3/12 group" data-xt-slider-target>
                <div className="*** transition opacity-0 scale-90 group-in:opacity-100 group-in:scale-100 ***">
                  <a href="#" className="*** listing-item *** block">
                    <div className="*** xt-media-container *** bg-gray-500 overflow-hidden pb-[75%]">
                      <img
                        className="*** xt-media *** object-cover object-center"
                        src="/img-alt.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="*** listing-item *** -content py-4">
                      <div className="xt-h6">Dolor sit amet</div>
                      <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="xt-slide w-6/12 md:w-4/12 lg:w-3/12 group" data-xt-slider-target>
                <div className="*** transition opacity-0 scale-90 group-in:opacity-100 group-in:scale-100 ***">
                  <a href="#" className="*** listing-item *** block">
                    <div className="*** xt-media-container *** bg-gray-500 overflow-hidden pb-[75%]">
                      <img
                        className="*** xt-media *** object-cover object-center"
                        src="/img.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="*** listing-item *** -content py-4">
                      <div className="xt-h6">Lorem ipsum</div>
                      <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="xt-slide w-6/12 md:w-4/12 lg:w-3/12 group" data-xt-slider-target>
                <div className="*** transition opacity-0 scale-90 group-in:opacity-100 group-in:scale-100 ***">
                  <a href="#" className="*** listing-item *** block">
                    <div className="*** xt-media-container *** bg-gray-500 overflow-hidden pb-[75%]">
                      <img
                        className="*** xt-media *** object-cover object-center"
                        src="/img-alt.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="*** listing-item *** -content py-4">
                      <div className="xt-h6">Dolor sit amet</div>
                      <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <nav className="hidden" data-xt-slider-pagination>
              <button type="button" className="xt-button hidden" data-xt-slider-element></button>
            </nav>
          </div>
        </div>

        <div className="listing">
          <div className="container">
            <div className="xt-h2 mb-8">Category</div>

            <div className="xt-row xt-row-4">
              <div className="w-6/12 md:w-4/12 lg:w-3/12">
                <a href="#" className="*** listing-item *** block">
                  <div className="*** xt-media-container *** bg-gray-500 overflow-hidden pb-[75%]">
                    <img className="*** xt-media *** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                    <div className="absolute top-0 left-0 py-2 px-3 bg-black bg-opacity-50 text-white xt-links-inverse">
                      <div className="xt-list xt-list-3 items-center flex-nowrap">
                        <div className="font-medium text-sm">-35%</div>
                        <div className="max-w-[6rem] text-3xs leading-tight uppercase opacity-50">
                          For Exhibition Renewal
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="*** listing-item *** -content py-4">
                    <div className="xt-h6">Lorem ipsum</div>
                    <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12 lg:w-3/12">
                <a href="#" className="*** listing-item *** block">
                  <div className="*** xt-media-container *** bg-gray-500 overflow-hidden pb-[75%]">
                    <img
                      className="*** xt-media *** object-cover object-center"
                      src="/img-alt.svg"
                      loading="lazy"
                      alt=""
                    />
                    <div className="absolute top-0 left-0 py-2 px-3 bg-black bg-opacity-50 text-white xt-links-inverse">
                      <div className="xt-list xt-list-3 items-center flex-nowrap">
                        <div className="font-medium text-sm">-40%</div>
                        <div className="max-w-[6rem] text-3xs leading-tight uppercase opacity-50">Black Friday</div>
                      </div>
                    </div>
                  </div>
                  <div className="*** listing-item *** -content py-4">
                    <div className="xt-h6">Dolor sit amet</div>
                    <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12 lg:w-3/12">
                <a href="#" className="*** listing-item *** block">
                  <div className="*** xt-media-container *** bg-gray-500 overflow-hidden pb-[75%]">
                    <img className="*** xt-media *** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                  </div>
                  <div className="*** listing-item *** -content py-4">
                    <div className="xt-h6">Lorem ipsum</div>
                    <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12 lg:w-3/12">
                <a href="#" className="*** listing-item *** block">
                  <div className="*** xt-media-container *** bg-gray-500 overflow-hidden pb-[75%]">
                    <img
                      className="*** xt-media *** object-cover object-center"
                      src="/img-alt.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className="*** listing-item *** -content py-4">
                    <div className="xt-h6">Dolor sit amet</div>
                    <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12 lg:w-3/12">
                <a href="#" className="*** listing-item *** block">
                  <div className="*** xt-media-container *** bg-gray-500 overflow-hidden pb-[75%]">
                    <img className="*** xt-media *** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                  </div>
                  <div className="*** listing-item *** -content py-4">
                    <div className="xt-h6">Lorem Ipsum</div>
                    <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12 lg:w-3/12">
                <a href="#" className="*** listing-item *** block">
                  <div className="*** xt-media-container *** bg-gray-500 overflow-hidden pb-[75%]">
                    <img
                      className="*** xt-media *** object-cover object-center"
                      src="/img-alt.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className="*** listing-item *** -content py-4">
                    <div className="xt-h6">Dolor sit amet</div>
                    <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12 lg:w-3/12">
                <a href="#" className="*** listing-item *** block">
                  <div className="*** xt-media-container *** bg-gray-500 overflow-hidden pb-[75%]">
                    <img className="*** xt-media *** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                  </div>
                  <div className="*** listing-item *** -content py-4">
                    <div className="xt-h6">Lorem ipsum</div>
                    <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12 lg:w-3/12">
                <a href="#" className="*** listing-item *** block">
                  <div className="*** xt-media-container *** bg-gray-500 overflow-hidden pb-[75%]">
                    <img
                      className="*** xt-media *** object-cover object-center"
                      src="/img-alt.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className="*** listing-item *** -content py-4">
                    <div className="xt-h6">Dolor sit amet</div>
                    <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* mountMedia */

const mountMedia = ({ ref }) => {
  // vars

  const items = ref.querySelectorAll('.listing-item')

  const mediaScale = 0.04
  const mediaOpacityIn = 0.75
  const mediaOpacityOut = 1
  const contentY = -10

  // enter

  const enter = e => {
    const tr = e.target
    // media
    const media = tr.querySelector('.xt-media-container')
    gsap.to(media, {
      opacity: mediaOpacityIn,
      scale: 1 - mediaScale,
      duration: 0.5,
      ease: 'expo.out',
    })
    const mediaInner = tr.querySelector('.xt-media')
    gsap.to(mediaInner, {
      scale: 1 + mediaScale,
      duration: 0.5,
      ease: 'expo.out',
    })
    // content
    const content = tr.querySelector('.listing-item-content')
    if (content) {
      gsap.to(content, {
        y: contentY,
        duration: 0.5,
        ease: 'expo.out',
      })
    }
  }

  for (const item of items) {
    item.addEventListener('mouseenter', enter)
  }

  // leave

  const leave = e => {
    const tr = e.target
    // media
    const media = tr.querySelector('.xt-media-container')
    gsap.to(media, {
      opacity: mediaOpacityOut,
      scale: 1,
      duration: 0.75,
      ease: 'expo.out',
    })
    const mediaInner = tr.querySelector('.xt-media')
    gsap.to(mediaInner, {
      scale: 1,
      duration: 0.75,
      ease: 'expo.out',
    })
    // content
    const content = tr.querySelector('.listing-item-content')
    if (content) {
      gsap.to(content, {
        y: 0,
        duration: 0.5,
        ease: 'expo.out',
      })
    }
  }

  for (const item of items) {
    item.addEventListener('mouseleave', leave)
  }

  // unmount

  return () => {}
}

/* mountFade */

const mountFade = ({ ref }) => {
  // init

  fade({ ref })

  // unmount

  return () => {}
}

/* fade */

const fade = ({ ref }) => {
  // vars

  const scrollY = 30

  // check if already done for content added dinamically

  const items = ref.querySelectorAll('.listing-item:not(.faded)')
  for (const item of items) {
    item.classList.add('faded')
  }

  // fade

  /***/
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
        stagger: index => {
          return Math.min(0.6, index * 0.15)
        },
      })
    },
  })
  /***/
}

/* mount */

const mount = ({ ref }) => {
  const unmountMedia = mountMedia({ ref })
  const unmountFade = mountFade({ ref })

  // unmount

  return () => {
    unmountMedia()
    unmountFade()
  }
}
