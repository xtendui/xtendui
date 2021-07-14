import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import 'xtendui/src/mousefollow'
import gsap from 'gsap'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--slider-hero-v1-react" ref={ref}>
      <div className="xt-slider bg-primary-500">
        <div className="xt-slides" data-xt-slider-dragger>
          <div className="xt-slide *** xt-slide-absolute off:hidden *** w-full" data-xt-slider-target>
            <div className="hero relative overflow-hidden bg-black">
              <div className="*** hero-inner ***">
                <div className="xt-media-container bg-gray-500 w-full h-full absolute">
                  <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                </div>
                <div className="*** hero-content *** flex relative min-h-screen">
                  <a
                    href="/"
                    className="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto max-w-2xl text-white xt-links-inverse text-center">
                    <h2 className="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">1. Lorem ipsum</h2>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="xt-slide *** xt-slide-absolute off:hidden *** w-full" data-xt-slider-target>
            <div className="hero relative overflow-hidden bg-black">
              <div className="*** hero-inner ***">
                <div className="xt-media-container bg-gray-500 w-full h-full absolute">
                  <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
                <div className="*** hero-content *** flex relative min-h-screen">
                  <a
                    href="/"
                    className="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto md:ml-0 max-w-2xl text-white xt-links-inverse text-center md:text-left">
                    <h2 className="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">2. Dolor sit amet</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                      turpis.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="xt-slide *** xt-slide-absolute off:hidden *** w-full" data-xt-slider-target>
            <div className="hero relative overflow-hidden bg-black">
              <div className="*** hero-inner ***">
                <div className="xt-media-container bg-gray-500 w-full h-full absolute">
                  <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                </div>
                <div className="*** hero-content *** flex relative min-h-screen">
                  <a
                    href="/"
                    className="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto md:ml-0 max-w-2xl text-white xt-links-inverse text-center md:text-left">
                    <h2 className="xt-h1">3. Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="xt-slide *** xt-slide-absolute off:hidden *** w-full" data-xt-slider-target>
            <div className="hero relative overflow-hidden bg-black">
              <div className="*** hero-inner ***">
                <div className="xt-media-container bg-gray-500 w-full h-full absolute">
                  <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
                <div className="*** hero-content *** flex relative min-h-screen">
                  <div className="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto md:ml-0 max-w-2xl text-white xt-links-inverse text-center md:text-left">
                    <h2 className="xt-h1">4. Lorem ipsum dolor sit amet</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                      turpis.
                    </p>
                    <a
                      href="/"
                      className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600">
                      Lorem ipsum
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="xt-slide *** xt-slide-absolute off:hidden *** w-full" data-xt-slider-target>
            <div className="hero relative overflow-hidden bg-black">
              <div className="*** hero-inner ***">
                <div className="xt-media-container bg-gray-500 w-full h-full absolute">
                  <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                </div>
                <div className="*** hero-content *** flex relative min-h-screen">
                  <div className="relative p-8 md:p-12 lg:p-16 xl:p-24 my-auto mx-auto md:ml-0 max-w-2xl text-white xt-links-inverse text-center md:text-left">
                    <h2 className="xt-h1">5. Lorem ipsum dolor sit amet</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                      turpis.
                    </p>
                    <a
                      href="/"
                      className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600">
                      Lorem ipsum
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="xt-slide *** xt-slide-absolute off:hidden *** w-full" data-xt-slider-target>
            <div className="hero relative overflow-hidden bg-black">
              <div className="*** hero-inner ***">
                <div className="xt-media-container bg-gray-500 w-full h-full absolute">
                  <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
                <div className="*** hero-content *** flex relative min-h-screen">
                  <div className="relative p-8 md:p-12 lg:p-16 xl:p-24 my-auto mx-auto md:mr-0 max-w-2xl text-white xt-links-inverse text-center md:text-right">
                    <h2 className="xt-h1">6. Lorem ipsum dolor sit amet</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                      turpis.
                    </p>
                    <a
                      href="/"
                      className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600">
                      Lorem ipsum
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="hidden md:block cursor-none absolute z-above top-0 left-0 w-24 h-full group"
          data-xt-nav="-1"
          aria-label="Previous slide"
          data-xt-mousefollow>
          <div
            className="*** xt-mousefollow fixed *** text-white text-4xl transition-opacity opacity-0 in:opacity-100"
            data-xt-mousefollow-target>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="xt-icon transform transition-all duration-300 group-in:opacity-75 group-in:scale-75"
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
          className="hidden md:block cursor-none absolute z-above top-0 right-0 w-24 h-full group"
          data-xt-nav="1"
          aria-label="Next slide"
          data-xt-mousefollow>
          <div
            className="*** xt-mousefollow fixed *** text-white text-4xl transition-opacity opacity-0 in:opacity-100"
            data-xt-mousefollow-target>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="xt-icon transform transition-all duration-300 group-in:opacity-75 group-in:scale-75"
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

        <nav
          className="w-full xt-list xt-list-2 pt-4 items-center justify-center absolute z-slide bottom-6"
          data-xt-slider-pagination>
          <button
            type="button"
            className="xt-button p-2 min-w-[1.25rem] h-5 rounded-full text-3xs text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 hover:bg-gray-200 on:px-4 active:bg-gray-300 on:bg-gray-200 transition-all hidden"
            data-xt-slider-element
            title="Slide xt-num"></button>
        </nav>
      </div>
    </div>
  )
}

/* mount */

const mount = ({ ref }) => {
  const unmountSlider = mountSlider({ ref })
  const unmountSlide = mountSlide({ ref })

  // unmount

  return () => {
    unmountSlider()
    unmountSlide()
  }
}

/* mountSlider */

const mountSlider = ({ ref }) => {
  // vars

  const slider = ref.querySelector('.xt-slider')
  const dragEase = 'quart.out'
  let distance
  let duration

  const maskPercent = 100
  const maskInnerPercent = 50
  const maskInnerOpacity = 0.65

  // slider

  /***/
  let self = new Xt.Slider(slider, {
    duration: () => duration * 1000,
    mode: 'absolute',
    loop: true,
  })
  /***/

  // dragposition (set internal position to resume animation mid dragging)

  const dragposition = () => {
    // duration depending on distance
    distance = Math.abs(self.drag.position - self.drag.final)
    duration = self.initial || self.drag.instant ? 0 : Math.min(Math.log(1 + distance / 125), 1.5)
    // position animation to keep updated with animation
    gsap.killTweensOf(self.drag)
    gsap.to(self.drag, {
      position: self.drag.final,
      duration: duration,
      ease: dragEase,
    })
  }

  self.dragger.addEventListener('dragposition.xt.slider', dragposition)

  // drag (set drag frame on drag and initial position on activation)

  const drag = () => {
    const tr = self.targets.filter(x => self.hasCurrent({ el: x }))[0]
    // mask
    const mask = tr.querySelector('.hero')
    gsap.killTweensOf(mask)
    gsap.set(mask, {
      x: `${-maskPercent * self.drag.ratio * self.direction}%`,
    })
    const maskInner = mask.querySelector('.hero-inner')
    gsap.killTweensOf(maskInner)
    gsap.set(maskInner, {
      x: `${maskInnerPercent * self.drag.ratio * self.direction}%`,
      opacity: 1 - maskInnerOpacity * self.drag.ratio,
    })
    /***/
    // incomings
    for (const incoming of self.targets.filter(x => x.classList.contains('incoming'))) {
      incoming.classList.remove('incoming', '!block')
    }
    const incomings =
      self.direction < 0 ? self.getTargets({ el: self.getPrev() }) : self.getTargets({ el: self.getNext() })
    for (const incoming of incomings) {
      incoming.classList.add('incoming', '!block')
      // mask
      const mask = incoming.querySelector('.hero')
      gsap.killTweensOf(mask)
      gsap.set(mask, {
        x: `${maskPercent * self.drag.ratioInverse * self.direction}%`,
      })
      const maskInner = mask.querySelector('.hero-inner')
      gsap.killTweensOf(maskInner)
      gsap.set(maskInner, {
        x: `${-maskInnerPercent * self.drag.ratioInverse * self.direction}%`,
        opacity: 1 - maskInnerOpacity * self.drag.ratioInverse,
      })
    }
    /***/
  }

  self.dragger.addEventListener('drag.xt.slider', drag)

  // dragreset (set animation on drag reset, when dragging opposite position from initial dragging)

  const dragreset = () => {
    const tr = self.targets.filter(x => self.hasCurrent({ el: x }))[0]
    off({ target: tr })
    on({ target: tr })
  }

  self.dragger.addEventListener('dragreset.xt.slider', dragreset)

  // on

  const on = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr) && !self.initial) {
      // mask
      const mask = tr.querySelector('.hero')
      gsap.killTweensOf(mask)
      gsap.set(mask, {
        x: `${maskPercent * self.drag.ratioInverse * self.direction}%`,
      })
      gsap.to(mask, {
        x: 0,
        duration: duration,
        ease: dragEase,
      })
      const maskInner = mask.querySelector('.hero-inner')
      gsap.killTweensOf(maskInner)
      gsap.set(maskInner, {
        x: `${-maskInnerPercent * self.drag.ratioInverse * self.direction}%`,
        opacity: 1 - maskInnerOpacity * self.drag.ratioInverse,
      })
      gsap.to(maskInner, {
        x: 0,
        opacity: 1,
        duration: duration,
        ease: dragEase,
      })
    }
  }

  self.container.addEventListener('on.xt.slider', on, true)

  // off

  const off = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr)) {
      // mask
      const mask = tr.querySelector('.hero')
      gsap.killTweensOf(mask)
      gsap.to(mask, {
        x: `${-maskPercent * self.direction}%`,
        duration: duration,
        ease: dragEase,
      })
      const maskInner = mask.querySelector('.hero-inner')
      gsap.killTweensOf(maskInner)
      gsap.to(maskInner, {
        x: `${maskInnerPercent * self.direction}%`,
        opacity: 1 - maskInnerOpacity,
        duration: duration,
        ease: dragEase,
      })
      /***/
      // incomings
      const incomings = self.targets.filter(x => x.classList.contains('incoming'))
      for (const incoming of incomings) {
        incoming.classList.remove('incoming')
        // mask
        const mask = incoming.querySelector('.hero')
        gsap.killTweensOf(mask)
        gsap
          .to(mask, {
            x: `${-maskPercent * self.direction}%`,
            duration: duration,
            ease: dragEase,
          })
          .eventCallback('onComplete', () => {
            incoming.classList.remove('!block')
          })
        const maskInner = mask.querySelector('.hero-inner')
        gsap.killTweensOf(maskInner)
        gsap.to(maskInner, {
          x: `${maskInnerPercent * self.direction}%`,
          opacity: 1 - maskInnerOpacity,
          duration: duration,
          ease: dragEase,
        })
      }
      /***/
    }
  }

  self.container.addEventListener('off.xt.slider', off, true)

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}

/* mountSlide */

const mountSlide = ({ ref }) => {
  // vars

  const slides = ref.querySelectorAll('.xt-slide')

  for (const slide of slides) {
    // vars

    let links = slide.closest('a, button')
    links = links ? [links] : Array.from(slide.querySelectorAll('a, button')) // query inside
    if (!links.length) return
    links = links.filter(x => !x.parentElement.closest('a, button')) // filter nested
    const img = slide.querySelector('.xt-media')
    const imgOpacityIn = 0.75
    const imgOpacityOut = 1

    // enter

    const enter = () => {
      // img
      gsap.to(img, {
        opacity: imgOpacityIn,
        duration: 0.5,
        ease: 'quart.out',
      })
    }

    for (const link of links) {
      link.addEventListener('mouseenter', enter)
    }

    // enter

    const leave = () => {
      // img
      gsap.to(img, {
        opacity: imgOpacityOut,
        duration: 0.5,
        ease: 'quart.out',
        overwrite: true,
      })
    }

    for (const link of links) {
      link.addEventListener('mouseleave', leave)
    }
  }

  // unmount

  return () => {}
}
