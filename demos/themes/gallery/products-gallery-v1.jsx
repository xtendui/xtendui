import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/form'
import 'xtendui/src/toggle'
import 'xtendui/src/overlay'
import 'xtendui/src/stickyflow'
import 'xtendui/src/scrollto'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollToPlugin)
}

export default function Demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--products-gallery-v1-react" ref={ref}>
      {/* For seo purpose add product metadata https://developers.google.com/search/docs/data-types/product */}
      <form>
        <div className="container md:py-12 lg:py-20 xl:py-28">
          <div className="xt-row md:xt-row-8 lg:xt-row-12 items-stretch">
            <div className="w-full md:w-5/12 lg:w-6/12 xl:w-7/12">
              <div className="relative">
                <div className="*** product-gallery *** overflow-y-auto overflow-x-hidden xt-overflow-sub h-96 xt-container-remove md:!m-0 md:!h-auto md:!overflow-hidden">
                  <div className="xt-list flex-col">
                    <div
                      className="*** product-image w-full off:hidden out:pointer-events-none opacity-0 translate-y-6 scale-95 in:transition in:opacity-100 in:translate-y-0 in:scale-100 out:transition out:translate-y-0 out:scale-100 ***"
                      data-node-variants-target
                      data-xt-group="red">
                      <a href="#product-image-overlay-1" id="product-image-1" title="Expand image 1">
                        <div className="xt-media-container bg-gray-200 overflow-hidden" data-xt-overlay-element>
                          <img
                            className="xt-media relative"
                            src="https://source.unsplash.com/164_6wVEHfI"
                            loading="lazy"
                            alt=""
                          />
                          <div className="*** xt-media-mask *** absolute inset-0 pointer-events-none bg-white -translate-y-full"></div>
                        </div>
                      </a>
                    </div>

                    <div
                      className="*** product-image w-full off:hidden out:pointer-events-none opacity-0 translate-y-6 scale-95 in:transition in:opacity-100 in:translate-y-0 in:scale-100 out:transition out:translate-y-0 out:scale-100 ***"
                      data-node-variants-target
                      data-xt-group="red">
                      <a href="#product-image-overlay-2" id="product-image-2" title="Expand image 2">
                        <div className="xt-media-container bg-gray-200 overflow-hidden" data-xt-overlay-element>
                          <img
                            className="xt-media relative"
                            src="https://source.unsplash.com/j7zu2kpTnwY"
                            loading="lazy"
                            alt=""
                          />
                          <div className="*** xt-media-mask *** absolute inset-0 pointer-events-none bg-white -translate-y-full"></div>
                        </div>
                      </a>
                    </div>

                    <div
                      className="*** product-image w-full off:hidden out:pointer-events-none opacity-0 translate-y-6 scale-95 in:transition in:opacity-100 in:translate-y-0 in:scale-100 out:transition out:translate-y-0 out:scale-100 ***"
                      data-node-variants-target
                      data-xt-group="green">
                      <a href="#product-image-overlay-3" id="product-image-3" title="Expand image 3">
                        <div className="xt-media-container bg-gray-200 overflow-hidden" data-xt-overlay-element>
                          <img
                            className="xt-media relative"
                            src="https://source.unsplash.com/kP6knT7tjn4"
                            loading="lazy"
                            alt=""
                          />
                          <div className="*** xt-media-mask *** absolute inset-0 pointer-events-none bg-white -translate-y-full"></div>
                        </div>
                      </a>
                    </div>

                    <div
                      className="*** product-image w-full off:hidden out:pointer-events-none opacity-0 translate-y-6 scale-95 in:transition in:opacity-100 in:translate-y-0 in:scale-100 out:transition out:translate-y-0 out:scale-100 ***"
                      data-node-variants-target
                      data-xt-group="blue">
                      <a href="#product-image-overlay-4" id="product-image-4" title="Expand image 4">
                        <div className="xt-media-container bg-gray-200 overflow-hidden" data-xt-overlay-element>
                          <img
                            className="xt-media relative"
                            src="https://source.unsplash.com/l8p1aWZqHvE"
                            loading="lazy"
                            alt=""
                          />
                          <div className="*** xt-media-mask *** absolute inset-0 pointer-events-none bg-white -translate-y-full"></div>
                        </div>
                      </a>
                    </div>

                    <div
                      className="*** product-image w-full off:hidden out:pointer-events-none opacity-0 translate-y-6 scale-95 in:transition in:opacity-100 in:translate-y-0 in:scale-100 out:transition out:translate-y-0 out:scale-100 ***"
                      data-node-variants-target
                      data-xt-group="blue">
                      <a href="#product-image-overlay-5" id="product-image-5" title="Expand image 5">
                        <div className="xt-media-container bg-gray-200 overflow-hidden" data-xt-overlay-element>
                          <img
                            className="xt-media relative"
                            src="https://source.unsplash.com/gn07k9Kmx9c"
                            loading="lazy"
                            alt=""
                          />
                          <div className="*** xt-media-mask *** absolute inset-0 pointer-events-none bg-white -translate-y-full"></div>
                        </div>
                      </a>
                    </div>

                    <div
                      className="*** product-image w-full off:hidden out:pointer-events-none opacity-0 translate-y-6 scale-95 in:transition in:opacity-100 in:translate-y-0 in:scale-100 out:transition out:translate-y-0 out:scale-100 ***"
                      data-node-variants-target
                      data-xt-group="red,green">
                      <a href="#product-image-overlay-6" id="product-image-6" title="Expand image 6">
                        <div className="xt-media-container bg-gray-200 overflow-hidden" data-xt-overlay-element>
                          <img
                            className="xt-media relative"
                            src="https://source.unsplash.com/gpii_myxZG0"
                            loading="lazy"
                            alt=""
                          />
                          <div className="*** xt-media-mask *** absolute inset-0 pointer-events-none bg-white -translate-y-full"></div>
                        </div>
                      </a>
                    </div>

                    <div
                      className="*** product-image w-full off:hidden out:pointer-events-none opacity-0 translate-y-6 scale-95 in:transition in:opacity-100 in:translate-y-0 in:scale-100 out:transition out:translate-y-0 out:scale-100 ***"
                      data-node-variants-target
                      data-xt-group="red,green">
                      <a href="#product-image-overlay-7" id="product-image-7" title="Expand image 7">
                        <div className="xt-media-container bg-gray-200 overflow-hidden" data-xt-overlay-element>
                          <img
                            className="xt-media relative"
                            src="https://source.unsplash.com/DzoOduUanpQ"
                            loading="lazy"
                            alt=""
                          />
                          <div className="*** xt-media-mask *** absolute inset-0 pointer-events-none bg-white -translate-y-full"></div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="absolute h-full bottom-0 right-0 md:hidden">
                    <div className="xt-list flex-col h-full justify-center">
                      <a
                        href="#product-image-1"
                        className="*** off:hidden out:pointer-events-none *** py-1.5 px-2 flex items-center justify-center group"
                        title="Go to image 1"
                        data-node-variants-target
                        data-xt-group="red">
                        <div className="bg-black rounded-full border-2 border-transparent group-on:bg-transparent group-on:border-black w-[7px] h-[7px] group-on:w-[9px] group-on:h-[9px] transition-all"></div>
                      </a>

                      <a
                        href="#product-image-2"
                        className="*** off:hidden out:pointer-events-none *** py-1.5 px-2 flex items-center justify-center group"
                        title="Go to image 2"
                        data-node-variants-target
                        data-xt-group="red">
                        <div className="bg-black rounded-full border-2 border-transparent group-on:bg-transparent group-on:border-black w-[7px] h-[7px] group-on:w-[9px] group-on:h-[9px] transition-all"></div>
                      </a>

                      <a
                        href="#product-image-3"
                        className="*** off:hidden out:pointer-events-none *** py-1.5 px-2 flex items-center justify-center group"
                        title="Go to image 3"
                        data-node-variants-target
                        data-xt-group="green">
                        <div className="bg-black rounded-full border-2 border-transparent group-on:bg-transparent group-on:border-black w-[7px] h-[7px] group-on:w-[9px] group-on:h-[9px] transition-all"></div>
                      </a>

                      <a
                        href="#product-image-4"
                        className="*** off:hidden out:pointer-events-none *** py-1.5 px-2 flex items-center justify-center group"
                        title="Go to image 4"
                        data-node-variants-target
                        data-xt-group="blue">
                        <div className="bg-black rounded-full border-2 border-transparent group-on:bg-transparent group-on:border-black w-[7px] h-[7px] group-on:w-[9px] group-on:h-[9px] transition-all"></div>
                      </a>

                      <a
                        href="#product-image-5"
                        className="*** off:hidden out:pointer-events-none *** py-1.5 px-2 flex items-center justify-center group"
                        title="Go to image 5"
                        data-node-variants-target
                        data-xt-group="blue">
                        <div className="bg-black rounded-full border-2 border-transparent group-on:bg-transparent group-on:border-black w-[7px] h-[7px] group-on:w-[9px] group-on:h-[9px] transition-all"></div>
                      </a>

                      <a
                        href="#product-image-6"
                        className="*** off:hidden out:pointer-events-none *** py-1.5 px-2 flex items-center justify-center group"
                        title="Go to image 6"
                        data-node-variants-target
                        data-xt-group="red,green">
                        <div className="bg-black rounded-full border-2 border-transparent group-on:bg-transparent group-on:border-black w-[7px] h-[7px] group-on:w-[9px] group-on:h-[9px] transition-all"></div>
                      </a>

                      <a
                        href="#product-image-7"
                        className="*** off:hidden out:pointer-events-none *** py-1.5 px-2 flex items-center justify-center group"
                        title="Go to image 7"
                        data-node-variants-target
                        data-xt-group="red,green">
                        <div className="bg-black rounded-full border-2 border-transparent group-on:bg-transparent group-on:border-black w-[7px] h-[7px] group-on:w-[9px] group-on:h-[9px] transition-all"></div>
                      </a>
                    </div>
                  </div>

                  <div aria-label="Modal" className="xt-overlay group" id="overlay--product-images">
                    <div className="xt-backdrop z-below bg-gray-800 *** opacity-0 transition-opacity duration-300 ease-in-out-cubic group-in:delay-200 group-in:ease-out-quint group-in:opacity-25 ***"></div>
                    <div className="xt-overlay-container *** p-0 ***">
                      <button
                        type="button"
                        className="xt-button xt-dismiss fixed z-above top-0 right-0 p-3 text-2xl text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600 *** opacity-0 transition-opacity duration-300 ease-in-out-cubic group-in:delay-200 group-in:ease-out-quint group-in:opacity-100 ***"
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
                        <div className="xt-card *** min-h-screen items-center justify-center *** shadow-xl text-gray-900 xt-links-default bg-white *** transition opacity-0 group-in:opacity-100 ***">
                          <div className="w-full *** opacity-0 translate-y-6 scale-95 group-in:transition group-in:opacity-100 group-in:translate-y-0 group-in:scale-100 group-out:transition group-out:translate-y-0 group-out:scale-100 ***">
                            <div
                              className="xt-media-container bg-gray-200 overflow-hidden *** off:hidden out:pointer-events-none ***"
                              data-node-variants-target
                              data-xt-group="red">
                              <img
                                className="xt-media relative"
                                id="product-image-overlay-1"
                                src="https://source.unsplash.com/164_6wVEHfI"
                                loading="lazy"
                                alt=""
                              />
                            </div>

                            <div
                              className="xt-media-container bg-gray-200 overflow-hidden *** off:hidden out:pointer-events-none ***"
                              data-node-variants-target
                              data-xt-group="red">
                              <img
                                className="xt-media relative"
                                id="product-image-overlay-2"
                                src="https://source.unsplash.com/j7zu2kpTnwY"
                                loading="lazy"
                                alt=""
                              />
                            </div>

                            <div
                              className="xt-media-container bg-gray-200 overflow-hidden *** off:hidden out:pointer-events-none ***"
                              data-node-variants-target
                              data-xt-group="green">
                              <img
                                className="xt-media relative"
                                id="product-image-overlay-3"
                                src="https://source.unsplash.com/kP6knT7tjn4"
                                loading="lazy"
                                alt=""
                              />
                            </div>

                            <div
                              className="xt-media-container bg-gray-200 overflow-hidden *** off:hidden out:pointer-events-none ***"
                              data-node-variants-target
                              data-xt-group="blue">
                              <img
                                className="xt-media relative"
                                id="product-image-overlay-4"
                                src="https://source.unsplash.com/l8p1aWZqHvE"
                                loading="eagelazyr"
                                alt=""
                              />
                            </div>

                            <div
                              className="xt-media-container bg-gray-200 overflow-hidden *** off:hidden out:pointer-events-none ***"
                              data-node-variants-target
                              data-xt-group="blue">
                              <img
                                className="xt-media relative"
                                id="product-image-overlay-5"
                                src="https://source.unsplash.com/gn07k9Kmx9c"
                                loading="lazy"
                                alt=""
                              />
                            </div>

                            <div
                              className="xt-media-container bg-gray-200 overflow-hidden *** off:hidden out:pointer-events-none ***"
                              data-node-variants-target
                              data-xt-group="red,green">
                              <img
                                className="xt-media relative"
                                id="product-image-overlay-6"
                                src="https://source.unsplash.com/gpii_myxZG0"
                                loading="lazy"
                                alt=""
                              />
                            </div>

                            <div
                              className="xt-media-container bg-gray-200 overflow-hidden *** off:hidden out:pointer-events-none ***"
                              data-node-variants-target
                              data-xt-group="red,green">
                              <img
                                className="xt-media relative"
                                id="product-image-overlay-7"
                                src="https://source.unsplash.com/DzoOduUanpQ"
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
              data-xt-stickyflow="{ element: '[data-xt-stickyflow-el]', filler: '[data-xt-stickyflow-filler]' }">
              <div className="*** pointer-events-none absolute md:relative ***" data-xt-stickyflow-filler></div>
              <div className="py-12 *** md:sticky ***" data-xt-stickyflow-el>
                <h1 className="xt-h2">Product Title</h1>

                <div className="mb-4 xt-list xt-list-2 items-baseline">
                  <div>Model</div>
                  <div className="font-medium" data-node-variants-options>
                    <span
                      className="*** off:hidden out:pointer-events-none ***"
                      data-node-variants-target
                      data-xt-group="red">
                      Red
                    </span>
                    <span
                      className="*** off:hidden out:pointer-events-none ***"
                      data-node-variants-target
                      data-xt-group="green">
                      Green
                    </span>
                    <span
                      className="*** off:hidden out:pointer-events-none ***"
                      data-node-variants-target
                      data-xt-group="blue">
                      Blue
                    </span>
                  </div>
                </div>

                <div className="mb-4 xt-list xt-list-2">
                  <label className="*** xt-button *** py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 border-2 border-gray-200 hover:border-transparent active:border-transparent on:border-transparent transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                    Red
                    <input
                      type="radio"
                      aria-label="Red"
                      className="sr-only"
                      name="radio-button"
                      data-node-variants-element
                      data-xt-group="red"
                      data-xt-hash="red"
                    />
                  </label>

                  <label className="*** xt-button *** py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 border-2 border-gray-200 hover:border-transparent active:border-transparent on:border-transparent transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                    Green
                    <input
                      type="radio"
                      aria-label="Green"
                      className="sr-only"
                      name="radio-button"
                      data-node-variants-element
                      data-xt-group="green"
                      data-xt-hash="green"
                    />
                  </label>

                  <label className="*** xt-button *** py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 border-2 border-gray-200 hover:border-transparent active:border-transparent on:border-transparent transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                    Blue
                    <input
                      type="radio"
                      aria-label="Blue"
                      className="sr-only"
                      name="radio-button"
                      data-node-variants-element
                      data-xt-group="blue"
                      data-xt-hash="blue"
                    />
                  </label>
                </div>

                <div className="xt-card my-6 text-gray-900 xt-links-default bg-gray-100">
                  <div className="p-6 sm:p-8 text-sm">
                    <div
                      className="*** off:hidden out:pointer-events-none *** font-bold text-2xl leading-none mb-6"
                      data-node-variants-target
                      data-xt-group="red">
                      229,00&nbsp;€
                    </div>

                    <div
                      className="*** off:hidden out:pointer-events-none *** font-bold text-2xl leading-none mb-6"
                      data-node-variants-target
                      data-xt-group="green">
                      <span className="mr-1 text-red-500"> 229,15&nbsp;€ </span>
                      <strike className="text-base"> 180,00&nbsp;€ </strike>
                    </div>

                    <div
                      className="*** off:hidden out:pointer-events-none *** font-bold text-2xl leading-none mb-6"
                      data-node-variants-target
                      data-xt-group="blue">
                      215,00&nbsp;€
                    </div>

                    <button
                      type="submit"
                      className="xt-button w-full py-3 px-4 text-base rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
                      Add to cart
                    </button>
                  </div>
                </div>

                <div className="leading-loose text-black text-opacity-75">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est. Etiam egestas
                    efficitur semper. Donec imperdiet eget justo at pellentesque. Proin a ultricies orci. Vivamus ut
                    scelerisque lorem. Suspendisse lobortis consequat magna ut ultricies. Duis consequat vitae justo nec
                    commodo. Vestibulum id eros eu sapien aliquam feugiat. Aenean id accumsan orci, nec elementum ex.
                    Fusce a dolor in lacus facilisis vulputate vitae vitae nunc. Phasellus odio quam, semper in finibus
                    at, consequat quis lacus. Sed varius sem commodo tellus pretium, posuere pharetra mauris elementum.
                    Nunc et aliquam velit, quis suscipit justo. Ut ac pretium massa. Aenean ullamcorper mollis urna eu
                    pharetra.
                  </p>
                  <p>
                    Proin eget lectus pharetra, pretium nunc sed, pulvinar nibh. Quisque ac tellus ac mi posuere
                    tristique. Ut dictum elit sed facilisis rutrum. In sagittis ac ante at blandit. Sed at felis
                    fermentum, semper lorem sed, sagittis lacus. Cras justo massa, molestie sit amet lacinia a, luctus
                    ac velit. Cras tristique, urna in hendrerit laoreet, nisi sem interdum urna, rutrum elementum nisl
                    turpis id est.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

/* mountVariants */

const mountVariants = ({ ref }) => {
  // vars

  const form = ref.querySelector('form')
  const gallery = ref.querySelector('.product-gallery')

  // init

  /***/
  let self = new Xt.Toggle(form, {
    min: 1,
    elements: '[data-node-variants-element]',
    targets: '[data-node-variants-target]',
    on: 'change',
    off: false,
    duration: 500,
    a11y: {
      keyboard: false,
    },
  })
  /***/

  // on

  const ondone = () => {
    // scrollto
    if (!self.initial) {
      // reset scroll
      form.dispatchEvent(new CustomEvent('scrollto.trigger.xt.scrollto'))
      gallery.scrollTo(0, 0)
    }
    // initial mobile dots activation
    gallery.dispatchEvent(new CustomEvent('scroll'))
  }

  for (const element of self.elements) {
    element.addEventListener('ondone.xt.toggle', ondone)
  }

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}

/* mountScrollto */

const mountScrollto = () => {
  // init

  /***/
  let self = new Xt.Scrollto(document.documentElement, {
    scrollers: '.xt-overlay:not([data-xt-overlay-disabled]), .product-gallery',
    space: ({ self }) => {
      return self.scroller.classList.contains(...['xt-overlay', 'product-gallery']) ? 0 : window.innerHeight / 6
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

  self.container.addEventListener('scrollto.xt.scrollto', scrollto)

  // fix stop scroll animation on user interaction

  const stopScrolling = () => {
    gsap.killTweensOf(self.scroller)
  }

  addEventListener('touchstart', stopScrolling)
  addEventListener('wheel', stopScrolling)

  // unmount

  return () => {
    removeEventListener('touchstart', stopScrolling)
    removeEventListener('wheel', stopScrolling)
    self.container.removeEventListener('scrollto.xt.scrollto', scrollto)
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
    targets: '#overlay--product-images',
    duration: 500,
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

/* mount */

const mount = ({ ref }) => {
  const unmountVariants = mountVariants({ ref })
  const unmountScrollto = mountScrollto({ ref })
  const unmountImages = mountImages({ ref })

  // unmount

  return () => {
    unmountVariants()
    unmountScrollto()
    unmountImages()
  }
}
