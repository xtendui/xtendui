import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import gsap from 'gsap'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--slider-animation-absolute-mask-react" ref={ref}>
      <div className="xt-slider bg-primary-500">
        <div className="xt-slides" data-xt-slider-dragger>
          <div className="xt-slide *** xt-slide-absolute off:hidden *** w-full" data-xt-slider-target>
            <div className="hero relative overflow-hidden bg-black">
              <div className="*** hero-inner ***">
                <div className="xt-media-container bg-gray-500 w-full h-full absolute">
                  <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
                <div className="flex relative h-96">
                  <div className="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto max-w-2xl text-white xt-links-inverse text-center">
                    <h2 className="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">1</h2>
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
                <div className="flex relative h-96">
                  <div className="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto max-w-2xl text-white xt-links-inverse text-center">
                    <h2 className="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">2</h2>
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
                <div className="flex relative h-96">
                  <div className="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto max-w-2xl text-white xt-links-inverse text-center">
                    <h2 className="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">3</h2>
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
                <div className="flex relative h-96">
                  <div className="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto max-w-2xl text-white xt-links-inverse text-center">
                    <h2 className="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">4</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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

  // unmount

  return () => {
    unmountSlider()
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
  const maskInnerPercent = 100
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
