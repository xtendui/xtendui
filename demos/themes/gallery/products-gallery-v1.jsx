import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/overlay'
import 'xtendui/src/stickyflow'
import 'xtendui/src/scrollto'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--products-gallery-v1-react" ref={ref}>
      {/* For seo purpose add product metadata https://developers.google.com/search/docs/data-types/product */}
      <div className="site-wrapper">
        <header className="site-header">
          <div className="xt-card text-sm py-6 px-7 text-white xt-links-inverse bg-primary-500">
            <div className="xt-h4">Header</div>
          </div>
        </header>

        <main className="site-main">
          <div className="container">
            <div className="xt-row xt-row-8 lg:xt-row-12 items-stretch">
              <div className="w-full md:w-5/12 lg:w-6/12 xl:w-7/12">
                <div className="relative md:py-12">
                  <div className="product-gallery">
                    <div className="xt-list flex-col">
                      <a
                        href="#product-image-overlay-1"
                        className="product-image w-full"
                        id="product-image-1"
                        title="Expand image 1">
                        <div className="xt-media-container bg-gray-600 overflow-hidden">
                          <img className="xt-media relative" src="/img.svg" loading="eager" alt="" />
                          <div className="xt-media-mask absolute inset-0 pointer-events-none bg-white transform -translate-y-full"></div>
                        </div>
                      </a>

                      <a
                        href="#product-image-overlay-2"
                        className="product-image w-full"
                        id="product-image-2"
                        title="Expand image 2">
                        <div className="xt-media-container bg-gray-600 overflow-hidden">
                          <img className="xt-media relative" src="/img-alt.svg" loading="eager" alt="" />
                          <div className="xt-media-mask absolute inset-0 pointer-events-none bg-white transform -translate-y-full"></div>
                        </div>
                      </a>

                      <a
                        href="#product-image-overlay-3"
                        className="product-image w-full"
                        id="product-image-3"
                        title="Expand image 3">
                        <div className="xt-media-container bg-gray-600 overflow-hidden">
                          <img className="xt-media relative" src="/img.svg" loading="eager" alt="" />
                          <div className="xt-media-mask absolute inset-0 pointer-events-none bg-white transform -translate-y-full"></div>
                        </div>
                      </a>

                      <a
                        href="#product-image-overlay-4"
                        className="product-image w-full"
                        id="product-image-4"
                        title="Expand image 4">
                        <div className="xt-media-container bg-gray-600 overflow-hidden">
                          <img className="xt-media relative" src="/img-alt.svg" loading="eager" alt="" />
                          <div className="xt-media-mask absolute inset-0 pointer-events-none bg-white transform -translate-y-full"></div>
                        </div>
                      </a>

                      <a
                        href="#product-image-overlay-5"
                        className="product-image w-full"
                        id="product-image-5"
                        title="Expand image 5">
                        <div className="xt-media-container bg-gray-600 overflow-hidden">
                          <img className="xt-media relative" src="/img.svg" loading="eager" alt="" />
                          <div className="xt-media-mask absolute inset-0 pointer-events-none bg-white transform -translate-y-full"></div>
                        </div>
                      </a>
                    </div>

                    <div className="absolute h-full bottom-0 right-0 md:hidden">
                      <div className="xt-list flex-col h-full justify-center">
                        <a
                          href="#product-image-1"
                          className="product-dot py-1.5 px-2 flex items-center justify-center group"
                          title="Go to image 1">
                          <div className="bg-black rounded-full border-2 border-transparent group-on:bg-transparent group-on:border-black"></div>
                        </a>

                        <a
                          href="#product-image-2"
                          className="product-dot py-1.5 px-2 flex items-center justify-center group"
                          title="Go to image 2">
                          <div className="bg-black rounded-full border-2 border-transparent group-on:bg-transparent group-on:border-black"></div>
                        </a>

                        <a
                          href="#product-image-3"
                          className="product-dot py-1.5 px-2 flex items-center justify-center group"
                          title="Go to image 3">
                          <div className="bg-black rounded-full border-2 border-transparent group-on:bg-transparent group-on:border-black"></div>
                        </a>

                        <a
                          href="#product-image-4"
                          className="product-dot py-1.5 px-2 flex items-center justify-center group"
                          title="Go to image 4">
                          <div className="bg-black rounded-full border-2 border-transparent group-on:bg-transparent group-on:border-black"></div>
                        </a>

                        <a
                          href="#product-image-5"
                          className="product-dot py-1.5 px-2 flex items-center justify-center group"
                          title="Go to image 5">
                          <div className="bg-black rounded-full border-2 border-transparent group-on:bg-transparent group-on:border-black"></div>
                        </a>
                      </div>
                    </div>

                    <div
                      className="xt-overlay ease-in-out-quint opacity-0 in:ease-out-quint in:opacity-100"
                      id="overlay--product-images">
                      <div className="xt-backdrop bg-black transition opacity-0 group-in:opacity-25"></div>
                      <div className="xt-overlay-container p-0">
                        <button
                          type="button"
                          className="xt-button xt-dismiss fixed z-last top-0 right-0 p-5 text-2xl"
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
                        <div className="xt-overlay-inner">
                          <div className="xt-card items-center justify-center shadow-overlay text-black xt-links-default bg-white">
                            <div className="w-full">
                              <div className="xt-media-container bg-gray-600 overflow-hidden">
                                <img
                                  className="xt-media relative"
                                  id="product-image-overlay-1"
                                  src="/img.svg"
                                  loading="lazy"
                                  alt=""
                                />
                              </div>

                              <div className="xt-media-container bg-gray-600 overflow-hidden">
                                <img
                                  className="xt-media relative"
                                  id="product-image-overlay-2"
                                  src="/img-alt.svg"
                                  loading="lazy"
                                  alt=""
                                />
                              </div>

                              <div className="xt-media-container bg-gray-600 overflow-hidden">
                                <img
                                  className="xt-media relative"
                                  id="product-image-overlay-3"
                                  src="/img.svg"
                                  loading="lazy"
                                  alt=""
                                />
                              </div>

                              <div className="xt-media-container bg-gray-600 overflow-hidden">
                                <img
                                  className="xt-media relative"
                                  id="product-image-overlay-4"
                                  src="/img-alt.svg"
                                  loading="eagelazyr"
                                  alt=""
                                />
                              </div>

                              <div className="xt-media-container bg-gray-600 overflow-hidden">
                                <img
                                  className="xt-media relative"
                                  id="product-image-overlay-5"
                                  src="/img.svg"
                                  loading="lazy"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="w-full md:w-7/12 lg:w-6/12 xl:w-5/12"
                id="product-arrow-target"
                data-xt-stickyflow="{ element: '.stickyflow', filler: '.stickyflow-filler'}">
                <div className="*** stickyflow-filler pointer-events-none absolute md:relative ***"></div>
                <div className="pb-12 md:py-12 *** md:sticky stickyflow ***">
                  <h1 className="xt-h2">Lorem ipsum dolor sit amet</h1>

                  <div className="xt-h5 mb-6">€&nbsp;229,00</div>

                  <a
                    href="#"
                    className="xt-button text-base py-3 px-4 rounded-md mb-6 text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
                    Add to cart
                  </a>

                  <div className="text-opacity-75">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est. Etiam egestas
                      efficitur semper. Donec imperdiet eget justo at pellentesque. Proin a ultricies orci. Vivamus ut
                      scelerisque lorem. Suspendisse lobortis consequat magna ut ultricies. Duis consequat vitae justo
                      nec commodo. Vestibulum id eros eu sapien aliquam feugiat. Aenean id accumsan orci, nec elementum
                      ex. Fusce a dolor in lacus facilisis vulputate vitae vitae nunc. Phasellus odio quam, semper in
                      finibus at, consequat quis lacus. Sed varius sem commodo tellus pretium, posuere pharetra mauris
                      elementum. Nunc et aliquam velit, quis suscipit justo. Ut ac pretium massa. Aenean ullamcorper
                      mollis urna eu pharetra.
                    </p>
                    <p>
                      Proin eget lectus pharetra, pretium nunc sed, pulvinar nibh. Quisque ac tellus ac mi posuere
                      tristique. Ut dictum elit sed facilisis rutrum. In sagittis ac ante at blandit. Sed at felis
                      fermentum, semper lorem sed, sagittis lacus. Cras justo massa, molestie sit amet lacinia a, luctus
                      ac velit. Cras tristique, urna in hendrerit laoreet, nisi sem interdum urna, rutrum elementum nisl
                      turpis id est.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est. Etiam egestas
                      efficitur semper. Donec imperdiet eget justo at pellentesque. Proin a ultricies orci. Vivamus ut
                      scelerisque lorem. Suspendisse lobortis consequat magna ut ultricies. Duis consequat vitae justo
                      nec commodo. Vestibulum id eros eu sapien aliquam feugiat. Aenean id accumsan orci, nec elementum
                      ex. Fusce a dolor in lacus facilisis vulputate vitae vitae nunc. Phasellus odio quam, semper in
                      finibus at, consequat quis lacus. Sed varius sem commodo tellus pretium, posuere pharetra mauris
                      elementum. Nunc et aliquam velit, quis suscipit justo. Ut ac pretium massa. Aenean ullamcorper
                      mollis urna eu pharetra.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            href="#product-arrow-target"
            className="product-arrow fixed md:hidden p-4 z-sticky bottom-0 inset-x-0 text-4xl text-center bg-gradient-to-b from-transparent to-white"
            title="Scroll to content">
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
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </a>
        </main>

        <footer className="site-footer">
          <div className="xt-card text-sm py-6 px-7 text-black xt-links-default bg-gray-200">
            <div className="xt-h4">Footer</div>
          </div>
        </footer>
      </div>
    </div>
  )
}

/* mount */

const mount = ({ ref }) => {
  const unmountScrollto = mountScrollto()
  const unmountImages = mountImages({ ref })
  const unmountArrow = mountArrow({ ref })

  // unmount

  return () => {
    unmountScrollto()
    unmountImages()
    unmountArrow()
  }
}

/* mountScrollto */

const mountScrollto = () => {
  // init

  /***/
  let self = new Xt.Scrollto(document.documentElement, {
    scrollers: '.xt-overlay:not(.xt-overlay-disabled), .product-gallery',
    duration: ({ self }) => {
      const overlay = self.target.closest('.xt-overlay')
      if (self.initial || self.hashchange || (overlay && !overlay.classList.contains('in'))) return 0
      const distance = Math.abs(self.scroller.scrollTop - self.position)
      return Math.min(Math.log(1 + distance / 200), 1)
    },
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

  self.object.addEventListener('scrollto.xt.scrollto', scrollto)

  // unmount

  return () => {
    self.object.removeEventListener('scrollto.xt.scrollto', scrollto)
    self.destroy()
    self = null
  }
}

/* mountImages */

const mountImages = ({ ref }) => {
  // vars

  const container = ref
  const images = ref.querySelectorAll('.product-image')

  // overlay

  /***/
  new Xt.Overlay(container, {
    elements: '.product-image .xt-media-container',
    targets: '#overlay--product-images',
  })
  /***/

  // vars

  const mediaContainerScale = -0.015
  const mediaScale = 0.06
  const titleY = -10
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
    // item
    const item = tr.querySelector('.xt-card-item')
    if (item) {
      gsap.to(item, {
        y: titleY,
        duration: 0.5,
        ease: 'expo.out',
      })
    }
  }

  for (const image of images) {
    image.addEventListener('mouseenter', enter)
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
    // item
    const item = tr.querySelector('.xt-card-item')
    if (item) {
      gsap.to(item, {
        y: 0,
        duration: 0.5,
        ease: 'expo.out',
      })
    }
  }

  for (const image of images) {
    image.addEventListener('mouseleave', leave)
  }

  // unmount

  return () => {}
}

/* mountArrow */

const mountArrow = ({ ref }) => {
  // vars

  const arrow = ref.querySelector('.product-arrow')
  const icon = arrow.querySelector(':scope > *')
  const posY = 15

  // interval

  const move = () => {
    gsap
      .to(icon, {
        y: 6,
        duration: 0.5,
        ease: 'back.out(4)',
      })
      .eventCallback('onComplete', () => {
        gsap
          .to(icon, {
            y: 0,
            duration: 0.5,
            ease: 'quart.out',
          })
          .delay(0.25)
      })
  }

  let interval = setInterval(move, 2000)

  // scroll

  const scroll = () => {
    if (document.scrollingElement.scrollTop > 0) {
      if (!arrow.classList.contains('deactivated')) {
        gsap.killTweensOf(arrow)
        arrow.classList.add('deactivated')
        gsap
          .to(arrow, {
            y: posY,
            opacity: 0,
            duration: 0.25,
            ease: 'quart.inOut',
          })
          .eventCallback('onComplete', () => {
            arrow.classList.add('hidden')
          })
      }
    } else {
      if (arrow.classList.contains('deactivated')) {
        arrow.classList.remove('deactivated')
        arrow.classList.remove('hidden')
        gsap.killTweensOf(arrow)
        gsap.to(arrow, {
          y: 0,
          opacity: 1,
          duration: 0.25,
          ease: 'quart.inOut',
        })
      }
    }
  }

  addEventListener('scroll', scroll)
  scroll()

  // unmount

  return () => {
    clearInterval(interval)
    removeEventListener('scroll', scroll)
  }
}
