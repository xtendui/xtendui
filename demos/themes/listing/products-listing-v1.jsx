import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--products-listing-v1-react" ref={ref}>
      <div className="py-10">
        <div className="xt-slider *** slider--listing *** pb-10">
          <div className="container">
            <div className="xt-h2 mb-8">Latest Products</div>
            <div className="xt-slides xt-row xt-row-4">
              <div className="xt-slide w-6/12 md:w-4/12">
                <a href="#" className="*** listing-item *** block">
                  <div className="*** xt-media-container *** bg-gray-600 overflow-hidden xt-ratio-75">
                    <img className="*** xt-media *** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                    <div className="absolute top-0 left-0 py-2 px-4 bg-black bg-opacity-50 text-white">
                      <div className="xt-list xt-list-3 items-center flex-nowrap">
                        <div className="text-xl font-semibold">-35%</div>
                        <div className="max-w-xs text-xs leading-tight uppercase opacity-50">
                          For Exhibition
                          <br />
                          Renewal
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="*** listing-item *** -content py-4">
                    <div className="xt-h5">Lorem ipsum</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="xt-slide w-6/12 md:w-4/12">
                <a href="#" className="*** listing-item *** block">
                  <div className="*** xt-media-container *** bg-gray-600 overflow-hidden xt-ratio-75">
                    <img
                      className="*** xt-media *** object-cover object-center"
                      src="/img-alt.svg"
                      loading="lazy"
                      alt=""
                    />
                    <div className="absolute top-0 left-0 py-2 px-4 bg-black bg-opacity-50 text-white">
                      <div className="xt-list xt-list-3 items-center flex-nowrap">
                        <div className="text-xl font-semibold">-40%</div>
                        <div className="max-w-xs text-xs leading-tight uppercase opacity-50">
                          Black
                          <br />
                          Friday
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="*** listing-item *** -content py-4">
                    <div className="xt-h5">Dolor sit amet</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="xt-slide w-6/12 md:w-4/12">
                <a href="#" className="*** listing-item *** block">
                  <div className="*** xt-media-container *** bg-gray-600 overflow-hidden xt-ratio-75">
                    <img className="*** xt-media *** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                  </div>
                  <div className="*** listing-item *** -content py-4">
                    <div className="xt-h5">Lorem ipsum</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="xt-slide w-6/12 md:w-4/12">
                <a href="#" className="*** listing-item *** block">
                  <div className="*** xt-media-container *** bg-gray-600 overflow-hidden xt-ratio-75">
                    <img
                      className="*** xt-media *** object-cover object-center"
                      src="/img-alt.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className="*** listing-item *** -content py-4">
                    <div className="xt-h5">Dolor sit amet</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="xt-slide w-6/12 md:w-4/12">
                <a href="#" className="*** listing-item *** block">
                  <div className="*** xt-media-container *** bg-gray-600 overflow-hidden xt-ratio-75">
                    <img className="*** xt-media *** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                  </div>
                  <div className="*** listing-item *** -content py-4">
                    <div className="xt-h5">Lorem ipsum</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="xt-slide w-6/12 md:w-4/12">
                <a href="#" className="*** listing-item *** block">
                  <div className="*** xt-media-container *** bg-gray-600 overflow-hidden xt-ratio-75">
                    <img
                      className="*** xt-media *** object-cover object-center"
                      src="/img-alt.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className="*** listing-item *** -content py-4">
                    <div className="xt-h5">Dolor sit amet</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="xt-slide w-6/12 md:w-4/12">
                <a href="#" className="*** listing-item *** block">
                  <div className="*** xt-media-container *** bg-gray-600 overflow-hidden xt-ratio-75">
                    <img className="*** xt-media *** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                  </div>
                  <div className="*** listing-item *** -content py-4">
                    <div className="xt-h5">Lorem ipsum</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="xt-slide w-6/12 md:w-4/12">
                <a href="#" className="*** listing-item *** block">
                  <div className="*** xt-media-container *** bg-gray-600 overflow-hidden xt-ratio-75">
                    <img
                      className="*** xt-media *** object-cover object-center"
                      src="/img-alt.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className="*** listing-item *** -content py-4">
                    <div className="xt-h5">Dolor sit amet</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>
            </div>

            <nav className="xt-slider-pagination hidden">
              <button type="button" className="xt-button hidden" data-xt-pag></button>
            </nav>
          </div>
        </div>

        <div className="listing">
          <div className="container">
            <div className="xt-h2 mb-8">Category</div>

            <div className="xt-row xt-row-6">
              <div className="w-6/12 md:w-4/12">
                <a href="#" className="*** listing-item *** block">
                  <div className="*** xt-media-container *** bg-gray-600 overflow-hidden xt-ratio-75">
                    <img className="*** xt-media *** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                    <div className="absolute top-0 left-0 py-2 px-4 bg-black bg-opacity-50 text-white">
                      <div className="xt-list xt-list-3 items-center flex-nowrap">
                        <div className="text-xl font-semibold">-35%</div>
                        <div className="max-w-xs text-xs leading-tight uppercase opacity-50">
                          For Exhibition
                          <br />
                          Renewal
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="*** listing-item *** -content py-4">
                    <div className="xt-h5">Lorem ipsum</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12">
                <a href="#" className="*** listing-item *** block">
                  <div className="*** xt-media-container *** bg-gray-600 overflow-hidden xt-ratio-75">
                    <img
                      className="*** xt-media *** object-cover object-center"
                      src="/img-alt.svg"
                      loading="lazy"
                      alt=""
                    />
                    <div className="absolute top-0 left-0 py-2 px-4 bg-black bg-opacity-50 text-white">
                      <div className="xt-list xt-list-3 items-center flex-nowrap">
                        <div className="text-xl font-semibold">-40%</div>
                        <div className="max-w-xs text-xs leading-tight uppercase opacity-50">
                          Black
                          <br />
                          Friday
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="*** listing-item *** -content py-4">
                    <div className="xt-h5">Dolor sit amet</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12">
                <a href="#" className="*** listing-item *** block">
                  <div className="*** xt-media-container *** bg-gray-600 overflow-hidden xt-ratio-75">
                    <img className="*** xt-media *** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                  </div>
                  <div className="*** listing-item *** -content py-4">
                    <div className="xt-h5">Lorem ipsum</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12">
                <a href="#" className="*** listing-item *** block">
                  <div className="*** xt-media-container *** bg-gray-600 overflow-hidden xt-ratio-75">
                    <img
                      className="*** xt-media *** object-cover object-center"
                      src="/img-alt.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className="*** listing-item *** -content py-4">
                    <div className="xt-h5">Dolor sit amet</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12">
                <a href="#" className="*** listing-item *** block">
                  <div className="*** xt-media-container *** bg-gray-600 overflow-hidden xt-ratio-75">
                    <img className="*** xt-media *** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                  </div>
                  <div className="*** listing-item *** -content py-4">
                    <div className="xt-h5">Lorem Ipsum</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12">
                <a href="#" className="*** listing-item *** block">
                  <div className="*** xt-media-container *** bg-gray-600 overflow-hidden xt-ratio-75">
                    <img
                      className="*** xt-media *** object-cover object-center"
                      src="/img-alt.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className="*** listing-item *** -content py-4">
                    <div className="xt-h5">Dolor sit amet</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12">
                <a href="#" className="*** listing-item *** block">
                  <div className="*** xt-media-container *** bg-gray-600 overflow-hidden xt-ratio-75">
                    <img className="*** xt-media *** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                  </div>
                  <div className="*** listing-item *** -content py-4">
                    <div className="xt-h5">Lorem ipsum</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12">
                <a href="#" className="*** listing-item *** block">
                  <div className="*** xt-media-container *** bg-gray-600 overflow-hidden xt-ratio-75">
                    <img
                      className="*** xt-media *** object-cover object-center"
                      src="/img-alt.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className="*** listing-item *** -content py-4">
                    <div className="xt-h5">Dolor sit amet</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
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

/* mount */

const mount = ({ ref }) => {
  const unmountSlider = mountSlider({ ref })
  const unmountMedia = mountMedia({ ref })
  const unmountFade = mountFade({ ref })

  // unmount

  return () => {
    unmountSlider()
    unmountMedia()
    unmountFade()
  }
}

/* mountSlider */

const mountSlider = ({ ref }) => {
  // vars

  const slider = ref.querySelector('.slider--listing')
  const dragEase = 'quart.out'
  let dragDistance
  let dragDuration

  // init

  /***/
  const self = new Xt.Slider(slider, {})
  /***/

  // dragposition (set internal dragPosition to resume animation mid dragging)

  const dragposition = () => {
    // dragDuration depending on distance
    dragDistance = Math.abs(self.detail.dragPosition - self.detail.dragFinal)
    dragDuration = self.initial || self.detail.instant ? 0 : Math.min(Math.log(1 + dragDistance / 125), 1.5)
    // dragPosition tween with main time and ease
    gsap.killTweensOf(self.detail)
    gsap.to(self.detail, {
      dragPosition: self.detail.dragFinal,
      duration: dragDuration,
      ease: dragEase,
    })
    // dragger tween with main time and ease
    gsap.killTweensOf(self.dragger)
    gsap.to(self.dragger, {
      x: self.detail.dragFinal,
      duration: dragDuration,
      ease: dragEase,
    })
  }

  self.dragger.addEventListener('dragposition.xt.slider', dragposition)

  // unmount

  return () => {}
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
          return Math.min(index * 0.15, 0.6)
        },
      })
    },
  })
  /***/
}
