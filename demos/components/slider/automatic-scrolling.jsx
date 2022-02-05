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
    <div className="demo--slider-automaticscroll-react" ref={ref}>
      <div className="xt-slider">
        <div className="p-4 md:p-6 lg:p-8">
          <div className="xt-slides xt-row xt-row-10" data-xt-slider-dragger>
            <div className="xt-slide group" data-xt-slider-target>
              <div className="xt-h4">One</div>
            </div>

            <div className="xt-slide group" data-xt-slider-target>
              <div className="xt-h4">Two</div>
            </div>

            <div className="xt-slide group" data-xt-slider-target>
              <div className="xt-h4">Three</div>
            </div>

            <div className="xt-slide group" data-xt-slider-target>
              <div className="xt-h4">Four</div>
            </div>

            <div className="xt-slide group" data-xt-slider-target>
              <div className="xt-h4">Five</div>
            </div>

            <div className="xt-slide group" data-xt-slider-target>
              <div className="xt-h4">Six</div>
            </div>

            <div className="xt-slide group" data-xt-slider-target>
              <div className="xt-h4">Seven</div>
            </div>

            <div className="xt-slide group" data-xt-slider-target>
              <div className="xt-h4">Eight</div>
            </div>

            <div className="xt-slide group" data-xt-slider-target>
              <div className="xt-h4">Nine</div>
            </div>

            <div className="xt-slide group" data-xt-slider-target>
              <div className="xt-h4">Ten</div>
            </div>

            <div className="xt-slide group" data-xt-slider-target>
              <div className="xt-h4">Eleven</div>
            </div>
          </div>

          <div className="*** absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white ***"></div>

          <div className="*** absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white ***"></div>

          <nav
            aria-label="Slider Navigation"
            className="w-full xt-list xt-list-2 pt-4 items-center justify-center"
            data-xt-slider-pagination>
            <button
              type="button"
              className="xt-button p-2 min-w-[1.25rem] h-5 rounded-full text-3xs text-gray-900 font-medium leading-snug tracking-wider uppercase bg-gray-100 hover:bg-gray-200 on:px-4 active:bg-gray-300 on:bg-gray-200 transition-all hidden"
              data-xt-slider-element
              title="Slide xt-num"></button>
          </nav>
        </div>
      </div>

      <div className="xt-slider">
        <div className="p-4 md:p-6 lg:p-8">
          <div className="xt-slides xt-row xt-row-2" data-xt-slider-dragger>
            <div className="xt-slide group *** w-60 ***" data-xt-slider-target>
              <div className="xt-media-container bg-gray-200 pb-[37.5%]">
                <img className="xt-media object-cover" src="/img-alt.svg" loading="eager" alt="" />
              </div>
            </div>

            <div className="xt-slide group *** w-60 ***" data-xt-slider-target>
              <div className="xt-media-container bg-gray-200 pb-[37.5%]">
                <img className="xt-media object-cover" src="/img.svg" loading="eager" alt="" />
              </div>
            </div>

            <div className="xt-slide group *** w-60 ***" data-xt-slider-target>
              <div className="xt-media-container bg-gray-200 pb-[37.5%]">
                <img className="xt-media object-cover" src="/img.svg" loading="eager" alt="" />
              </div>
            </div>

            <div className="xt-slide group *** w-60 ***" data-xt-slider-target>
              <div className="xt-media-container bg-gray-200 pb-[37.5%]">
                <img className="xt-media object-cover" src="/img.svg" loading="eager" alt="" />
              </div>
            </div>

            <div className="xt-slide group *** w-60 ***" data-xt-slider-target>
              <div className="xt-media-container bg-gray-200 pb-[37.5%]">
                <img className="xt-media object-cover" src="/img.svg" loading="eager" alt="" />
              </div>
            </div>

            <div className="xt-slide group *** w-60 ***" data-xt-slider-target>
              <div className="xt-media-container bg-gray-200 pb-[37.5%]">
                <img className="xt-media object-cover" src="/img.svg" loading="eager" alt="" />
              </div>
            </div>

            <div className="xt-slide group *** w-60 ***" data-xt-slider-target>
              <div className="xt-media-container bg-gray-200 pb-[37.5%]">
                <img className="xt-media object-cover" src="/img.svg" loading="eager" alt="" />
              </div>
            </div>
          </div>

          <nav
            aria-label="Slider Navigation"
            className="w-full xt-list xt-list-2 pt-4 items-center justify-center"
            data-xt-slider-pagination>
            <button
              type="button"
              className="xt-button p-2 min-w-[1.25rem] h-5 rounded-full text-3xs text-gray-900 font-medium leading-snug tracking-wider uppercase bg-gray-100 hover:bg-gray-200 on:px-4 active:bg-gray-300 on:bg-gray-200 transition-all hidden"
              data-xt-slider-element
              title="Slide xt-num"></button>
          </nav>
        </div>
      </div>
    </div>
  )
}

/* mountSliders */

const mountSliders = ({ ref }) => {
  // mount granularly

  Xt.mount({
    root: ref,
    matches: '.xt-slider',
    mount: ({ ref }) => {
      return mountSlider({ ref })
    },
  })

  // unmount

  return () => {}
}

/* mountSlider */

const mountSlider = ({ ref }) => {
  // vars

  const slider = ref
  let dragDuration
  let dragEase
  let isAutomatic = false
  const dragEaseNormal = 'quart.out'
  const dragEaseAutomatic = 'linear'
  const timeScaleTimeOn = 0.75
  const timeScaleEaseOn = 'quint.in'
  const timeScaleTimeOff = 0.75
  const timeScaleEaseOff = 'quint.out'

  // slider

  /***/
  let self = new Xt.Slider(slider, {
    duration: () => dragDuration * 1000,
    align: 'left',
    wrap: 0, // needed 0 to have wrap enabled on same available space as slider enable/disable
    groupSame: false,
    dragposition: true,
  })
  /***/

  /***/
  // automaticNext

  const automaticNext = () => {
    // go to next slide when animation completes
    isAutomatic = true
    self.goToNext()
    isAutomatic = false
  }
  /***/

  // dragposition (set internal position to resume animation mid dragging)

  const dragposition = () => {
    // duration depending on content size
    const speedFactor = 3
    dragDuration =
      self.initial || self.drag._instant
        ? 0
        : isAutomatic
        ? (self.drag.sizeContent * speedFactor) / 1000 // automatic change duration
        : 0.5 // manual change duration
    dragEase = isAutomatic ? dragEaseAutomatic : dragEaseNormal
    // position animation to keep updated with animation
    gsap.killTweensOf(self.drag)
    gsap.to(self.drag, {
      _position: self.drag._final,
      duration: dragDuration,
      ease: dragEase,
    })
    // dragger animation
    gsap.killTweensOf(self.dragger)
    gsap
      .to(self.dragger, {
        x: self.drag._final,
        duration: dragDuration,
        ease: dragEase,
      })
      .eventCallback('onComplete', () => {
        /***/
        // go to next slide when animation completes
        automaticNext()
        /***/
      })
  }

  self.dragger.addEventListener('dragposition.xt.slider', dragposition)

  // init

  const init = () => {
    /***/
    // start automatic on init after a raf when self.initial becomes false
    requestAnimationFrame(() => {
      automaticNext()
    })
    /***/
  }

  self.container.addEventListener('init.xt.slider', init)

  // pause

  const pause = () => {
    // pause tween
    const tweens = gsap.getTweensOf(self.dragger)
    for (const tween of tweens) {
      gsap.to(tween, {
        timeScale: 0,
        duration: timeScaleTimeOff,
        ease: timeScaleEaseOff,
      })
    }
  }

  self.container.addEventListener('mouseenter', pause)
  addEventListener('blur', pause)

  // resume

  const resume = () => {
    // resume tween
    const tweens = gsap.getTweensOf(self.dragger)
    for (const tween of tweens) {
      gsap.to(tween, {
        timeScale: 1,
        duration: timeScaleTimeOn,
        ease: timeScaleEaseOn,
      })
    }
  }

  self.container.addEventListener('mouseleave', resume)
  addEventListener('focus', resume)

  // unmount

  return () => {
    gsap.killTweensOf(self.dragger)
    removeEventListener('blur', pause)
    removeEventListener('focus', resume)
    self.destroy()
    self = null
  }
}

/* mount */

const mount = ({ ref }) => {
  const unmountSliders = mountSliders({ ref })

  // unmount

  return () => {
    unmountSliders()
  }
}
