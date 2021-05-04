import React, { useRef, useCallback } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

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
    <div className="demo--products-listing-v2-react" ref={ref}>
      <div className="py-10">
        <div className="xt-slider slider--listing pb-10">
          <div className="container">
            <div className="xt-h2 mb-8">Latest Products</div>
            <div className="xt-slides xt-row xt-row-4">
              <div className="xt-slide w-6/12 md:w-4/12">
                <a href="#" className="listing-item block group">
                  <div className="xt-media-container bg-gray-600 xt-ratio-125 overflow-hidden">
                    <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                    <div className="xt-media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                    <div className="absolute top-0 left-0 m-4 py-2 px-4 bg-white bg-opacity-90">
                      <div className="xt-list xt-list-3 items-center flex-nowrap">
                        <div className="text-lg font-semibold">-35%</div>
                      </div>
                    </div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5  group-hover:text-primary-500">Lorem ipsum</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="xt-slide w-6/12 md:w-4/12">
                <a href="#" className="listing-item block group">
                  <div className="xt-media-container bg-gray-600 xt-ratio-125 overflow-hidden">
                    <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                    <div className="xt-media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                    <div className="absolute top-0 left-0 m-4 py-2 px-4 bg-white bg-opacity-90">
                      <div className="xt-list xt-list-3 items-center flex-nowrap">
                        <div className="text-lg font-semibold">-40%</div>
                      </div>
                    </div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5  group-hover:text-primary-500">Dolor sit amet</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="xt-slide w-6/12 md:w-4/12">
                <a href="#" className="listing-item block group">
                  <div className="xt-media-container bg-gray-600 xt-ratio-125 overflow-hidden">
                    <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                    <div className="xt-media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5  group-hover:text-primary-500">Lorem ipsum</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="xt-slide w-6/12 md:w-4/12">
                <a href="#" className="listing-item block group">
                  <div className="xt-media-container bg-gray-600 xt-ratio-125 overflow-hidden">
                    <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                    <div className="xt-media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5  group-hover:text-primary-500">Dolor sit amet</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="xt-slide w-6/12 md:w-4/12">
                <a href="#" className="listing-item block group">
                  <div className="xt-media-container bg-gray-600 xt-ratio-125 overflow-hidden">
                    <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                    <div className="xt-media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5  group-hover:text-primary-500">Lorem ipsum</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="xt-slide w-6/12 md:w-4/12">
                <a href="#" className="listing-item block group">
                  <div className="xt-media-container bg-gray-600 xt-ratio-125 overflow-hidden">
                    <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                    <div className="xt-media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5  group-hover:text-primary-500">Dolor sit amet</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="xt-slide w-6/12 md:w-4/12">
                <a href="#" className="listing-item block group">
                  <div className="xt-media-container bg-gray-600 xt-ratio-125 overflow-hidden">
                    <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                    <div className="xt-media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5  group-hover:text-primary-500">Lorem ipsum</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="xt-slide w-6/12 md:w-4/12">
                <a href="#" className="listing-item block group">
                  <div className="xt-media-container bg-gray-600 xt-ratio-125 overflow-hidden">
                    <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                    <div className="xt-media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5  group-hover:text-primary-500">Dolor sit amet</div>
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
                <a href="#" className="listing-item block group">
                  <div className="xt-media-container bg-gray-600 xt-ratio-125 overflow-hidden">
                    <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                    <div className="xt-media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                    <div className="absolute top-0 left-0 m-4 py-2 px-4 bg-white bg-opacity-90">
                      <div className="xt-list xt-list-3 items-center flex-nowrap">
                        <div className="text-lg font-semibold">-35%</div>
                      </div>
                    </div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5  group-hover:text-primary-500">Lorem ipsum</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12">
                <a href="#" className="listing-item block group">
                  <div className="xt-media-container bg-gray-600 xt-ratio-125 overflow-hidden">
                    <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                    <div className="xt-media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                    <div className="absolute top-0 left-0 m-4 py-2 px-4 bg-white bg-opacity-90">
                      <div className="xt-list xt-list-3 items-center flex-nowrap">
                        <div className="text-lg font-semibold">-40%</div>
                      </div>
                    </div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5  group-hover:text-primary-500">Dolor sit amet</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12">
                <a href="#" className="listing-item block group">
                  <div className="xt-media-container bg-gray-600 xt-ratio-125 overflow-hidden">
                    <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                    <div className="xt-media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5  group-hover:text-primary-500">Lorem ipsum</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12">
                <a href="#" className="listing-item block group">
                  <div className="xt-media-container bg-gray-600 xt-ratio-125 overflow-hidden">
                    <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                    <div className="xt-media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5  group-hover:text-primary-500">Dolor sit amet</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12">
                <a href="#" className="listing-item block group">
                  <div className="xt-media-container bg-gray-600 xt-ratio-125 overflow-hidden">
                    <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                    <div className="xt-media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5  group-hover:text-primary-500">Lorem ipsum</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12">
                <a href="#" className="listing-item block group">
                  <div className="xt-media-container bg-gray-600 xt-ratio-125 overflow-hidden">
                    <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                    <div className="xt-media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5  group-hover:text-primary-500">Dolor sit amet</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12">
                <a href="#" className="listing-item block group">
                  <div className="xt-media-container bg-gray-600 xt-ratio-125 overflow-hidden">
                    <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                    <div className="xt-media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5  group-hover:text-primary-500">Lorem ipsum</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12">
                <a href="#" className="listing-item block group">
                  <div className="xt-media-container bg-gray-600 xt-ratio-125 overflow-hidden">
                    <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                    <div className="xt-media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5  group-hover:text-primary-500">Dolor sit amet</div>
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
  const dragTime = 1
  const dragEase = 'quint.out'

  // init

  const self = new Xt.Slider(slider, {})

  // dragposition (set internal dragPosition to resume animation mid dragging)

  const dragposition = () => {
    // dragPosition tween with main time and ease
    gsap.killTweensOf(self.detail)
    gsap.to(self.detail, {
      dragPosition: self.detail.dragFinal,
      duration: self.initial || self.detail.dragging ? 0 : dragTime,
      ease: dragEase,
    })
    // dragger tween with main time and ease
    gsap.killTweensOf(self.dragger)
    gsap.to(self.dragger, {
      x: self.detail.dragFinal,
      duration: self.initial || self.detail.dragging ? 0 : dragTime,
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
      height: '150%',
      y: 0,
      opacity: maskOpacityOn,
      duration: 0.5,
      ease: 'quart.out',
    }) // fix to cover height: '150%'
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
      height: '50%',
      y: '-100%',
      opacity: maskOpacityOff,
      duration: 0.5,
      ease: 'quart.out',
    }) // fix to cover height: '50%', y: '-100%'
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
  // init

  fade({ ref })

  // unmount

  return () => {}
}

/* fade */

const fade = ({ ref }) => {
  // vars

  const scrollY = 15
  const scrollScale = 1.04

  // check if already done for content added dinamically

  const items = ref.querySelectorAll('.listing-item:not(.faded)')
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
        scale: scrollScale,
      })
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: 'quart.out',
        stagger: index => {
          return Math.min(index * 0.15, 0.6)
        },
      })
    },
  })
}
