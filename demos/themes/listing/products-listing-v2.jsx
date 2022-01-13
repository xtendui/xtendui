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
    <div className="demo--products-listing-v2-react" ref={ref}>
      <div className="py-10">
        <div className="xt-slider pb-10" data-xt-slider="{ align: 'left', wrap: true }">
          <div className="container">
            <div className="xt-h3 mb-8">Latest Products</div>

            <div
              className="xt-slides transition ease-out-expo duration-300 on:ease-out-quint on:duration-1000 xt-row xt-row-4"
              data-xt-slider-dragger>
              <div className="xt-slide w-6/12 md:w-4/12 lg:w-3/12 group" data-xt-slider-target>
                <div className="*** transition opacity-0 group-in:opacity-100 ***">
                  <a href="/" className="*** listing-item *** block group">
                    <div className="*** xt-media-container *** bg-gray-500 pb-[125%] overflow-hidden">
                      <img className="*** xt-media *** object-cover" src="/img.svg" loading="lazy" alt="" />
                      <div className="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                      <div className="absolute top-0 left-0 m-4 py-2 px-3 bg-white bg-opacity-90">
                        <div className="xt-list xt-list-3 items-center flex-nowrap">
                          <div className="font-medium text-sm">-35%</div>
                        </div>
                      </div>
                    </div>
                    <div className="py-4">
                      <div className="xt-h6 group-hover:text-primary-500">Lorem ipsum</div>
                      <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="xt-slide w-6/12 md:w-4/12 lg:w-3/12 group" data-xt-slider-target>
                <div className="*** transition opacity-0 group-in:opacity-100 ***">
                  <a href="/" className="*** listing-item *** block group">
                    <div className="*** xt-media-container *** bg-gray-500 pb-[125%] overflow-hidden">
                      <img className="*** xt-media *** object-cover" src="/img-alt.svg" loading="lazy" alt="" />
                      <div className="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                      <div className="absolute top-0 left-0 m-4 py-2 px-3 bg-white bg-opacity-90">
                        <div className="xt-list xt-list-3 items-center flex-nowrap">
                          <div className="font-medium text-sm">-40%</div>
                        </div>
                      </div>
                    </div>
                    <div className="py-4">
                      <div className="xt-h6 group-hover:text-primary-500">Dolor sit amet</div>
                      <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="xt-slide w-6/12 md:w-4/12 lg:w-3/12 group" data-xt-slider-target>
                <div className="*** transition opacity-0 group-in:opacity-100 ***">
                  <a href="/" className="*** listing-item *** block group">
                    <div className="*** xt-media-container *** bg-gray-500 pb-[125%] overflow-hidden">
                      <img className="*** xt-media *** object-cover" src="/img.svg" loading="lazy" alt="" />
                      <div className="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                    </div>
                    <div className="py-4">
                      <div className="xt-h6 group-hover:text-primary-500">Lorem ipsum</div>
                      <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="xt-slide w-6/12 md:w-4/12 lg:w-3/12 group" data-xt-slider-target>
                <div className="*** transition opacity-0 group-in:opacity-100 ***">
                  <a href="/" className="*** listing-item *** block group">
                    <div className="*** xt-media-container *** bg-gray-500 pb-[125%] overflow-hidden">
                      <img className="*** xt-media *** object-cover" src="/img-alt.svg" loading="lazy" alt="" />
                      <div className="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                    </div>
                    <div className="py-4">
                      <div className="xt-h6 group-hover:text-primary-500">Dolor sit amet</div>
                      <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="xt-slide w-6/12 md:w-4/12 lg:w-3/12 group" data-xt-slider-target>
                <div className="*** transition opacity-0 group-in:opacity-100 ***">
                  <a href="/" className="*** listing-item *** block group">
                    <div className="*** xt-media-container *** bg-gray-500 pb-[125%] overflow-hidden">
                      <img className="*** xt-media *** object-cover" src="/img.svg" loading="lazy" alt="" />
                      <div className="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                    </div>
                    <div className="py-4">
                      <div className="xt-h6 group-hover:text-primary-500">Lorem ipsum</div>
                      <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="xt-slide w-6/12 md:w-4/12 lg:w-3/12 group" data-xt-slider-target>
                <div className="*** transition opacity-0 group-in:opacity-100 ***">
                  <a href="/" className="*** listing-item *** block group">
                    <div className="*** xt-media-container *** bg-gray-500 pb-[125%] overflow-hidden">
                      <img className="*** xt-media *** object-cover" src="/img-alt.svg" loading="lazy" alt="" />
                      <div className="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                    </div>
                    <div className="py-4">
                      <div className="xt-h6 group-hover:text-primary-500">Dolor sit amet</div>
                      <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="xt-slide w-6/12 md:w-4/12 lg:w-3/12 group" data-xt-slider-target>
                <div className="*** transition opacity-0 group-in:opacity-100 ***">
                  <a href="/" className="*** listing-item *** block group">
                    <div className="*** xt-media-container *** bg-gray-500 pb-[125%] overflow-hidden">
                      <img className="*** xt-media *** object-cover" src="/img.svg" loading="lazy" alt="" />
                      <div className="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                    </div>
                    <div className="py-4">
                      <div className="xt-h6 group-hover:text-primary-500">Lorem ipsum</div>
                      <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="xt-slide w-6/12 md:w-4/12 lg:w-3/12 group" data-xt-slider-target>
                <div className="*** transition opacity-0 group-in:opacity-100 ***">
                  <a href="/" className="*** listing-item *** block group">
                    <div className="*** xt-media-container *** bg-gray-500 pb-[125%] overflow-hidden">
                      <img className="*** xt-media *** object-cover" src="/img-alt.svg" loading="lazy" alt="" />
                      <div className="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                    </div>
                    <div className="py-4">
                      <div className="xt-h6 group-hover:text-primary-500">Dolor sit amet</div>
                      <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="absolute z-content top-0 left-0 h-full px-2 md:px-6 group transition duration-300"
              data-xt-nav="-1"
              aria-label="Previous slide">
              <div className="xt-button w-8 h-8 md:w-10 md:h-10 text-lg md:text-xl rounded-full font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200 group-hover:bg-gray-200 group-active:bg-gray-300 group-on:bg-gray-200 group-hover:scale-125">
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
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </div>
            </button>

            <button
              type="button"
              className="absolute z-content top-0 right-0 h-full px-2 md:px-6 group transition duration-300"
              data-xt-nav="1"
              aria-label="Next slide">
              <div className="xt-button w-8 h-8 md:w-10 md:h-10 text-lg md:text-xl rounded-full font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200 group-hover:bg-gray-200 group-active:bg-gray-300 group-on:bg-gray-200 group-hover:scale-125">
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
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </button>

            <nav aria-label="Slider Navigation" className="hidden" data-xt-slider-pagination>
              <button type="button" className="xt-button hidden" data-xt-slider-element></button>
            </nav>
          </div>
        </div>

        <div className="listing">
          <div className="container">
            <div className="xt-h2 mb-8">Category</div>

            <div className="xt-row xt-row-4">
              <div className="w-6/12 md:w-4/12 lg:w-3/12">
                <a href="/" className="*** listing-item *** block group">
                  <div className="*** xt-media-container *** bg-gray-500 pb-[125%] overflow-hidden">
                    <img className="*** xt-media *** object-cover" src="/img.svg" loading="lazy" alt="" />
                    <div className="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                    <div className="absolute top-0 left-0 m-4 py-2 px-3 bg-white bg-opacity-90">
                      <div className="xt-list xt-list-3 items-center flex-nowrap">
                        <div className="font-medium text-sm">-35%</div>
                      </div>
                    </div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h6 group-hover:text-primary-500">Lorem ipsum</div>
                    <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12 lg:w-3/12">
                <a href="/" className="*** listing-item *** block group">
                  <div className="*** xt-media-container *** bg-gray-500 pb-[125%] overflow-hidden">
                    <img className="*** xt-media *** object-cover" src="/img-alt.svg" loading="lazy" alt="" />
                    <div className="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                    <div className="absolute top-0 left-0 m-4 py-2 px-3 bg-white bg-opacity-90">
                      <div className="xt-list xt-list-3 items-center flex-nowrap">
                        <div className="font-medium text-sm">-40%</div>
                      </div>
                    </div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h6 group-hover:text-primary-500">Dolor sit amet</div>
                    <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12 lg:w-3/12">
                <a href="/" className="*** listing-item *** block group">
                  <div className="*** xt-media-container *** bg-gray-500 pb-[125%] overflow-hidden">
                    <img className="*** xt-media *** object-cover" src="/img.svg" loading="lazy" alt="" />
                    <div className="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h6 group-hover:text-primary-500">Lorem ipsum</div>
                    <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12 lg:w-3/12">
                <a href="/" className="*** listing-item *** block group">
                  <div className="*** xt-media-container *** bg-gray-500 pb-[125%] overflow-hidden">
                    <img className="*** xt-media *** object-cover" src="/img-alt.svg" loading="lazy" alt="" />
                    <div className="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h6 group-hover:text-primary-500">Dolor sit amet</div>
                    <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12 lg:w-3/12">
                <a href="/" className="*** listing-item *** block group">
                  <div className="*** xt-media-container *** bg-gray-500 pb-[125%] overflow-hidden">
                    <img className="*** xt-media *** object-cover" src="/img.svg" loading="lazy" alt="" />
                    <div className="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h6 group-hover:text-primary-500">Lorem ipsum</div>
                    <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12 lg:w-3/12">
                <a href="/" className="*** listing-item *** block group">
                  <div className="*** xt-media-container *** bg-gray-500 pb-[125%] overflow-hidden">
                    <img className="*** xt-media *** object-cover" src="/img-alt.svg" loading="lazy" alt="" />
                    <div className="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h6 group-hover:text-primary-500">Dolor sit amet</div>
                    <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12 lg:w-3/12">
                <a href="/" className="*** listing-item *** block group">
                  <div className="*** xt-media-container *** bg-gray-500 pb-[125%] overflow-hidden">
                    <img className="*** xt-media *** object-cover" src="/img.svg" loading="lazy" alt="" />
                    <div className="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h6 group-hover:text-primary-500">Lorem ipsum</div>
                    <div className="-mt-2 text-sm font-medium">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12 lg:w-3/12">
                <a href="/" className="*** listing-item *** block group">
                  <div className="*** xt-media-container *** bg-gray-500 pb-[125%] overflow-hidden">
                    <img className="*** xt-media *** object-cover" src="/img-alt.svg" loading="lazy" alt="" />
                    <div className="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h6 group-hover:text-primary-500">Dolor sit amet</div>
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

  const mediaContainerScale = 0.015
  const mediaScale = 0.06
  const maskOpacityOn = 0.2
  const maskOpacityOff = 0.2
  const maskOpacityDone = 0.1

  // enter

  const enter = e => {
    const tr = e.target
    // media
    const media = tr.querySelector('.xt-media-container')
    gsap.to(media, {
      scale: 1 + mediaContainerScale,
      duration: 0.5,
      ease: 'quart.out',
    })
    const mediaInner = tr.querySelector('.xt-media')
    gsap.to(mediaInner, {
      scale: 1 + mediaScale,
      duration: 1.5,
      ease: 'quart.out',
    })
    // mask
    const mask = tr.querySelector('.xt-media-mask')
    gsap.killTweensOf(mask)
    gsap.set(mask, {
      height: 0,
      y: media.offsetHeight,
      skewY: 0,
      opacity: maskOpacityOff,
    })
    gsap.to(mask, {
      /***/
      // fix to cover height: '150%'
      /***/
      height: '150%',
      y: 0,
      opacity: maskOpacityOn,
      duration: 0.5,
      ease: 'quart.out',
    })
    gsap
      .to(mask, {
        skewY: -10,
        duration: 0.5 / 2,
        ease: 'quart.out',
      })
      .eventCallback('onComplete', () => {
        gsap.to(mask, {
          skewY: 0,
          duration: 0.5 / 2,
          ease: 'quart.out',
        })
      })
    gsap.to(mask, {
      opacity: maskOpacityDone,
      duration: 0.75,
      ease: 'quart.out',
      delay: 0.5,
    })
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
      scale: 1,
      duration: 0.5,
      ease: 'quart.out',
    })
    const mediaInner = tr.querySelector('.xt-media')
    gsap.to(mediaInner, {
      scale: 1,
      duration: 1.5,
      ease: 'quart.out',
    })
    // mask
    const mask = tr.querySelector('.xt-media-mask')
    gsap.to(mask, {
      /***/
      // fix to cover height: '50%', y: '-100%'
      /***/
      height: '50%',
      y: '-100%',
      opacity: maskOpacityOff,
      duration: 0.5,
      ease: 'quart.out',
    })
    gsap
      .to(mask, {
        skewY: 10,
        duration: 0.5 / 2,
        ease: 'quart.out',
      })
      .eventCallback('onComplete', () => {
        gsap.to(mask, {
          skewY: 0,
          duration: 0.5 / 2,
          ease: 'quart.out',
        })
      })
  }

  for (const item of items) {
    item.addEventListener('mouseleave', leave)
  }

  // unmount

  return () => {}
}

/* mountFade */

const mountFade = ({ ref }) => {
  // vars

  const scrollY = 15
  const scrollScale = 1.04

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
        scale: scrollScale,
      })
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: 'quart.out',
        stagger: index => {
          return Math.min(0.6, index * 0.15)
        },
      })
    },
  })
  /***/

  // unmount

  return () => {}
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
